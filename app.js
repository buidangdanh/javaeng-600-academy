/* JavaEng 600+ Academy — Core Interactive Learning Engine
 * Offline-first, Web Speech TTS (US/UK 1.0x & 0.75x), SpeechRecognition Speaking Lab,
 * Anki SM-2 Spaced Repetition, Study4 Dictation, Duolingo Sentence Chunking & Prep 4-Step Exam Review
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'javaeng-toeic600-v1';

  const defaultState = () => ({
    done: {},                // lessonId -> true
    bookmarks: {},           // lessonId -> true
    notes: {},               // lessonId -> string
    lessonQuizScores: {},    // lessonId -> { score, total }
    lessonQuizAnswers: {},   // `${lessonId}_${qIdx}` -> optIdx
    srs: {},                 // cardId -> { reps, interval, ease, due, lapses }
    customCards: [],         // [{ id, front, back, ipa, exEn, exVi, tag }]
    dictationDone: {},       // dicId -> accuracy%
    speakingScores: {},      // spkId -> accuracy%
    mistakes: {},            // qId -> questionObject
    examHistory: [],         // [{ id, examId, title, pct, estToeic, date, elapsed }]
    placementToeic: null,    // number
    xp: 0,
    streak: 1,
    lastStudyDate: new Date().toISOString().slice(0, 10),
    studyMinutes: 0,
    accent: 'en-US',         // 'en-US' | 'en-GB'
    theme: 'light',
    hideExVi: false
  });

  let state = loadState();
  touchDailyStreak();

  // UI Navigation State
  let page = 'home'; // 'home' | 'grammar' | 'vocabulary' | 'lesson' | 'vocabvault' | 'srs' | 'labs' | 'javakit' | 'exams' | 'sync'
  let mobileNavOpen = false;
  let selectedLessonId = (window.LESSONS.find(l => !state.done[l.id]) || window.LESSONS[0] || { id: 'G1_1' }).id;
  let lessonSidebarTrack = 'all'; // 'all' | 'grammar' | 'vocabulary'
  let trackLevelFilter = 'all';   // 'all' | 'basic' | 'intermediate' | 'upper' | 'advanced'
  let trackSearch = '';
  let exampleTagFilter = 'all';

  // Lesson Mini-Drill Transient State
  let chunkSelected = {};     // lessonId -> [indices in shuffled array]
  let chunkShuffled = {};     // lessonId -> [strings]
  let chunkFeedback = {};     // lessonId -> { ok, msg }
  let fillInputs = {};        // lessonId -> string
  let fillFeedback = {};      // lessonId -> { ok, msg }
  let lessonQuizRevealed = {}; // lessonId -> boolean

  // Vocab Vault Filter State
  let vaultSearch = '';
  let vaultModule = 'all';
  let vaultSrsFilter = 'all'; // 'all' | 'new' | 'learning' | 'mastered'

  // SRS Studio State
  let srsDeckFilter = 'due';  // 'due' | 'all' | 'V1' | 'V2' | 'V3' | 'V4' | 'custom'
  let srsFlipped = false;
  let srsCurrentCardId = null;
  let srsSessionReviewed = 0;

  // Labs State (Dictation & Speaking)
  let labTab = 'dictation';   // 'dictation' | 'speaking'
  let dicCategory = 'all';
  let activeDicId = null;
  let dicInput = '';
  let dicResult = null;       // { pct, diffHtml }

  let spkCategory = 'all';
  let activeSpkId = null;
  let spkListeningMic = false;
  let spkTranscript = '';
  let spkResult = null;       // { pct, diffHtml, error }

  // Senior Java Toolkit State
  let activeJavaKitId = 'all';
  let standupDraft = {
    yesterday: 'implemented the Redis distributed lock for the transfer API',
    today: 'write integration tests with Testcontainers and review 2 pull requests',
    blocker: 'waiting for the staging OAuth2 public key from the security team'
  };

  // Exam State
  let examView = 'hub';       // 'hub' | 'session' | 'review'
  let activeExam = null;
  let examMode = 'timed';     // 'timed' | 'practice'
  let examIdx = 0;
  let examSingleView = false;
  let examAnswers = {};
  let examFlags = {};
  let examRevealed = {};
  let examTimer = null;
  let examSecondsLeft = 0;
  let examStartedAt = 0;
  let examSummary = null;

  // Pomodoro Timer
  let pomoSeconds = 25 * 60;
  let pomoRunning = false;
  let pomoInterval = null;

  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        ...defaultState(),
        ...raw,
        done: raw.done || {},
        bookmarks: raw.bookmarks || {},
        notes: raw.notes || {},
        lessonQuizScores: raw.lessonQuizScores || {},
        lessonQuizAnswers: raw.lessonQuizAnswers || {},
        srs: raw.srs || {},
        customCards: Array.isArray(raw.customCards) ? raw.customCards : [],
        dictationDone: raw.dictationDone || {},
        speakingScores: raw.speakingScores || {},
        mistakes: raw.mistakes || {},
        examHistory: Array.isArray(raw.examHistory) ? raw.examHistory : []
      };
    } catch (_) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn('localStorage save warning:', err);
    }
  }

  function touchDailyStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (state.lastStudyDate === today) return;
    const prev = new Date(state.lastStudyDate + 'T00:00:00');
    const cur = new Date(today + 'T00:00:00');
    const diffDays = Math.round((cur - prev) / 86400000);
    if (diffDays === 1) {
      state.streak = (state.streak || 1) + 1;
    } else if (diffDays > 1) {
      state.streak = 1;
    }
    state.lastStudyDate = today;
    saveState();
  }

  function addXp(points) {
    state.xp = (state.xp || 0) + points;
    touchDailyStreak();
    saveState();
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme === 'dark' ? 'dark' : 'light');
  }
  applyTheme();

  /* ===================== TEXT FORMATTING & TTS AUDIO ===================== */
  function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function stripMarkdown(str) {
    return String(str ?? '')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function richFmt(str) {
    return esc(str)
      .replace(/\*\*([^*]+)\*\*/g, '<span class="hl-kw">$1</span>')
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
  }

  function fmtBullet(str) {
    const s = String(str ?? '');
    const colon = s.indexOf(':');
    if (colon > 0 && colon < 68) {
      return `<strong>${richFmt(s.slice(0, colon + 1))}</strong>${richFmt(s.slice(colon + 1))}`;
    }
    return richFmt(s);
  }

  // Web Speech API Synthesis (Offline US / UK voice)
  let cachedVoices = [];
  if ('speechSynthesis' in window) {
    const refreshVoices = () => { cachedVoices = window.speechSynthesis.getVoices() || []; };
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }

  window.speakText = function (rawText, rate = 1.0, forcedLang = null) {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt hiện tại không hỗ trợ Web Speech API. Hãy mở bằng Chrome, Edge hoặc Safari để nghe phát âm.');
      return;
    }
    const clean = stripMarkdown(rawText);
    if (!clean) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(clean);
    const targetLang = forcedLang || state.accent || 'en-US';
    utter.lang = targetLang;
    utter.rate = rate;

    if (!cachedVoices.length) cachedVoices = window.speechSynthesis.getVoices() || [];
    const preferred =
      cachedVoices.find(v => v.lang === targetLang && /Natural|Online|Google|Samantha|Microsoft/i.test(v.name)) ||
      cachedVoices.find(v => v.lang === targetLang) ||
      cachedVoices.find(v => v.lang && v.lang.startsWith('en'));
    if (preferred) utter.voice = preferred;
    window.speechSynthesis.speak(utter);
  };

  function ttsButtonsHtml(text) {
    const encoded = encodeURIComponent(stripMarkdown(text));
    return `<span style="display:inline-flex;gap:5px;align-items:center;flex-wrap:wrap">
      <button type="button" class="tts-btn" data-speak="${encoded}" data-rate="1" title="Nghe tốc độ chuẩn 1.0x">🔊 Nghe</button>
      <button type="button" class="tts-btn slow" data-speak="${encoded}" data-rate="0.75" title="Nghe chậm rõ từng âm 0.75x">🐢 0.75x</button>
    </span>`;
  }

  /* ===================== BUILD ALL VOCABULARY & SRS DECK ===================== */
  function getAllVocabCards() {
    const list = [];
    window.LESSONS.forEach(les => {
      const det = window.LESSON_DETAILS[les.id];
      if (!det || !Array.isArray(det.vocabItems)) return;
      det.vocabItems.forEach((item, idx) => {
        const cardId = `VOC_${les.id}_${idx}`;
        list.push({
          id: cardId,
          lessonId: les.id,
          lessonCode: les.code,
          moduleId: les.moduleId,
          level: les.level,
          word: item.word,
          pos: item.pos || '',
          ipa: item.ipa || '',
          meaning: item.meaning || '',
          synonyms: item.synonyms || '',
          collocations: Array.isArray(item.collocations) ? item.collocations : [],
          mnemonic: item.mnemonic || '',
          toeicEx: item.toeicEx || '',
          toeicVi: item.toeicVi || '',
          javaEx: item.javaEx || '',
          javaVi: item.javaVi || '',
          isCustom: false
        });
      });
    });

    (state.customCards || []).forEach(c => {
      list.push({
        id: c.id,
        lessonId: c.lessonId || 'G1_1',
        lessonCode: c.tag || 'Ghim',
        moduleId: 'CUSTOM',
        level: 'upper',
        word: c.front,
        pos: 'chunk/sentence',
        ipa: c.ipa || '',
        meaning: c.back,
        synonyms: '',
        collocations: [],
        mnemonic: c.note || 'Câu/từ do bạn chủ động lưu từ bài giảng để ôn tập sâu.',
        toeicEx: c.exEn || c.front,
        toeicVi: c.exVi || c.back,
        javaEx: '',
        javaVi: '',
        isCustom: true
      });
    });
    return list;
  }

  function isCardDue(cardId) {
    const rec = state.srs[cardId];
    if (!rec) return true; // New card is ready to learn
    return Date.now() >= (rec.due || 0);
  }

  function getCardStatus(cardId) {
    const rec = state.srs[cardId];
    if (!rec) return 'new';
    if ((rec.interval || 0) >= 7) return 'mastered';
    return 'learning';
  }

  function rateSrsCard(cardId, grade) {
    // Anki SM-2 inspired scheduling:
    // grade: 0 = Quên (1 min), 1 = Khó (1 day), 2 = Nhớ (3-6 days), 3 = Dễ (7-21 days)
    const now = Date.now();
    const prev = state.srs[cardId] || { reps: 0, interval: 0, ease: 2.5, lapses: 0 };
    let { reps, interval, ease, lapses } = prev;
    let due = now;

    if (grade === 0) {
      reps = 0;
      interval = 0;
      lapses = (lapses || 0) + 1;
      ease = Math.max(1.3, ease - 0.2);
      due = now + 60 * 1000; // 1 minute
    } else if (grade === 1) {
      reps += 1;
      interval = Math.max(1, Math.round((interval || 1) * 1.2));
      ease = Math.max(1.3, ease - 0.15);
      due = now + interval * 86400 * 1000;
    } else if (grade === 2) {
      reps += 1;
      interval = reps === 1 ? 3 : Math.max(4, Math.round(interval * ease));
      due = now + interval * 86400 * 1000;
    } else {
      reps += 1;
      ease = Math.min(3.0, ease + 0.15);
      interval = reps === 1 ? 7 : Math.max(10, Math.round(interval * ease * 1.3));
      due = now + interval * 86400 * 1000;
    }

    state.srs[cardId] = { reps, interval, ease, lapses, due, updatedAt: now };
    srsSessionReviewed += 1;
    srsFlipped = false;
    srsCurrentCardId = null;
    addXp(5);
    saveState();
    render();
  }

  function saveCustomFlashcard(front, back, note, lessonId) {
    const cleanFront = stripMarkdown(front);
    if (state.customCards.some(c => c.front === cleanFront)) {
      alert('Câu/từ này đã có sẵn trong bộ Flashcard Ghim của bạn!');
      return;
    }
    const id = 'CUS_' + Date.now();
    state.customCards.unshift({
      id,
      front: cleanFront,
      back,
      note: note || '',
      exEn: front,
      exVi: back,
      lessonId,
      tag: 'Ghim 📌'
    });
    addXp(5);
    saveState();
    render();
  }

  /* ===================== LEVEL & SCORE ESTIMATION ===================== */
  function getRankTitle(xp) {
    if (xp >= 2000) return { title: 'Principal Global Engineer (B2+)', next: 3000 };
    if (xp >= 1000) return { title: 'Senior Java Communicator (TOEIC 650+)', next: 2000 };
    if (xp >= 450) return { title: 'Mid-Level Agile Communicator (TOEIC 500+)', next: 1000 };
    if (xp >= 150) return { title: 'Junior English Builder (TOEIC 380+)', next: 450 };
    return { title: 'Starter Developer (Khởi động nền tảng)', next: 150 };
  }

  function getEstimatedToeic() {
    if (state.examHistory.length > 0) {
      const latest = state.examHistory[0];
      if (latest.estToeic) return latest.estToeic;
    }
    if (state.placementToeic) return state.placementToeic;
    const doneCount = Object.keys(state.done).length;
    const masteredVocab = Object.values(state.srs).filter(x => (x.interval || 0) >= 3).length;
    return Math.min(780, 300 + doneCount * 7 + Math.round(masteredVocab * 0.8));
  }

  function getLevelBadge(levelId) {
    const map = {
      basic: ['badge-blue', 'Level 1 • Cơ bản (A1–A2)'],
      intermediate: ['badge-emerald', 'Level 2 • Trung cấp (TOEIC 450–550)'],
      upper: ['badge-purple', 'Level 3 • Thực chiến TOEIC 600+'],
      advanced: ['badge-amber', 'Level 4 • Senior Java & TOEIC 700+']
    };
    const [cls, txt] = map[levelId] || ['badge-blue', levelId];
    return `<span class="badge ${cls}">${esc(txt)}</span>`;
  }

  /* ===================== POMODORO TIMER ===================== */
  function togglePomodoro() {
    if (pomoRunning) {
      clearInterval(pomoInterval);
      pomoRunning = false;
    } else {
      pomoRunning = true;
      pomoInterval = setInterval(() => {
        if (pomoSeconds > 0) {
          pomoSeconds -= 1;
          if (pomoSeconds % 60 === 0) {
            state.studyMinutes = (state.studyMinutes || 0) + 1;
            saveState();
          }
          const el = document.getElementById('pomo-clock');
          if (el) el.textContent = formatClock(pomoSeconds);
        } else {
          clearInterval(pomoInterval);
          pomoRunning = false;
          addXp(40);
          pomoSeconds = 25 * 60;
          render();
        }
      }, 1000);
    }
    render();
  }

  function formatClock(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  }

  /* ===================== NAVIGATION HELPERS ===================== */
  function openLesson(lessonId) {
    selectedLessonId = lessonId;
    const les = window.LESSONS.find(x => x.id === lessonId);
    if (les) lessonSidebarTrack = les.track;
    exampleTagFilter = 'all';
    page = 'lesson';
    mobileNavOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  function navigate(targetPage) {
    page = targetPage;
    mobileNavOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  /* ===================== DIFF ENGINE FOR DICTATION & SPEAKING ===================== */
  function normalizeWords(text) {
    return stripMarkdown(text)
      .toLowerCase()
      .replace(/[^a-z0-9'\s]/g, ' ')
      .split(/\s+/)
      .filter(Boolean);
  }

  function evaluateWordMatch(expectedStr, userStr) {
    const expTokens = stripMarkdown(expectedStr).split(/\s+/).filter(Boolean);
    const userSet = new Set(normalizeWords(userStr));
    const userNormArr = normalizeWords(userStr);

    let matched = 0;
    const htmlParts = expTokens.map((rawTok, idx) => {
      const cleanTok = rawTok.toLowerCase().replace(/[^a-z0-9']/g, '');
      if (!cleanTok) return esc(rawTok);
      // Match either near same position or present in user words
      const nearMatch = userNormArr.slice(Math.max(0, idx - 3), idx + 4).includes(cleanTok);
      const anyMatch = nearMatch || userSet.has(cleanTok);
      if (anyMatch) {
        matched += 1;
        return `<span class="diff-ok">${esc(rawTok)}</span>`;
      }
      return `<span class="diff-miss" title="Từ bạn nghe thiếu hoặc phát âm chưa chuẩn">${esc(rawTok)}</span>`;
    });

    const pct = expTokens.length ? Math.round((matched / expTokens.length) * 100) : 0;
    return { pct, diffHtml: htmlParts.join(' ') };
  }

  /* ===================== PAGE 1: HOME DASHBOARD ===================== */
  function renderHome() {
    const totalLessons = window.LESSONS.length;
    const doneLessons = Object.keys(state.done).length;
    const grammarLessons = window.LESSONS.filter(l => l.track === 'grammar');
    const vocabLessons = window.LESSONS.filter(l => l.track === 'vocabulary');
    const doneGrammar = grammarLessons.filter(l => state.done[l.id]).length;
    const doneVocab = vocabLessons.filter(l => state.done[l.id]).length;

    const allCards = getAllVocabCards();
    const dueCards = allCards.filter(c => isCardDue(c.id)).length;
    const masteredCards = allCards.filter(c => getCardStatus(c.id) === 'mastered').length;
    const estToeic = getEstimatedToeic();
    const nextLesson = window.LESSONS.find(l => !state.done[l.id]) || window.LESSONS[0];

    return `
      <div class="hero-banner">
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <span class="badge" style="background:rgba(255,255,255,0.16);color:#fde68a">☕ Thiết kế riêng cho Senior Java Developer</span>
          <span class="badge" style="background:rgba(52,211,153,0.2);color:#6ee7b7">🎯 Mục tiêu TOEIC 600–750+ & Giao tiếp Global</span>
        </div>
        <h1>Chinh Phục Tiếng Anh Từ Gốc Đến TOEIC 600+ & Giao Tiếp Kỹ Sư Senior Java</h1>
        <p>
          Giáo trình tách bạch rõ ràng <strong>24 Bài Ngữ Pháp</strong> & <strong>24 Bài Từ Vựng</strong> từ Cơ bản (A1) đến Nâng cao (B2),
          tích hợp hơn <strong>900+ câu ví dụ song ngữ có giọng đọc chuẩn Mỹ/Anh</strong>, Flashcard lặp lại ngắt quãng (Anki SRS),
          Nghe chép chính tả (Study4), Luyện nói chấm điểm (ELSA) và Phòng thi thử TOEIC 600+ chữa đề 4 bước.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:18px">
          <button class="btn btn-primary" data-open-lesson="${esc(nextLesson.id)}">
            ▶️ Học tiếp ngay: ${esc(nextLesson.code)} — ${esc(nextLesson.title)}
          </button>
          <button class="btn" style="background:rgba(255,255,255,0.12);color:#fff;border-color:rgba(255,255,255,0.28)" data-start-placement="1">
            🧭 Kiểm tra trình độ đầu vào (15 phút)
          </button>
          <button class="btn" style="background:rgba(255,255,255,0.12);color:#fff;border-color:rgba(255,255,255,0.28)" data-nav="srs">
            🧠 Ôn Flashcard SRS (${dueCards} thẻ chờ ôn)
          </button>
        </div>
      </div>

      <div class="grid-4" style="margin-bottom:20px">
        <div class="stat-card">
          <div class="stat-label">Tiến độ Giáo trình (48 Bài)</div>
          <div class="stat-val" style="color:var(--primary)">${doneLessons}/${totalLessons}</div>
          <div class="stat-sub">Ngữ pháp: ${doneGrammar}/24 • Từ vựng: ${doneVocab}/24</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Ước lượng Trình độ TOEIC</div>
          <div class="stat-val" style="color:var(--emerald)">~${estToeic} điểm</div>
          <div class="stat-sub">${estToeic >= 600 ? '✅ Đã chạm ngưỡng mục tiêu 600+!' : `Còn thiếu ~${600 - estToeic} điểm tới mốc 600+`}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Kho Từ Vựng & SRS Flashcards</div>
          <div class="stat-val" style="color:var(--purple)">${masteredCards}/${allCards.length}</div>
          <div class="stat-sub">Đã thuộc dài hạn • ${dueCards} thẻ cần ôn hôm nay</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Chuỗi Ngày Học & Tích Lũy</div>
          <div class="stat-val" style="color:var(--amber)">🔥 ${state.streak} ngày</div>
          <div class="stat-sub">${state.xp} XP • ${Object.keys(state.mistakes).length} câu trong Sổ tay câu sai</div>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:14px">
          <div>
            <h2 style="margin:0;font-size:20px">🗺️ Bản Đồ Lộ Trình 2 Trụ Cột: Ngữ Pháp & Từ Vựng (Cơ Bản → Nâng Cao)</h2>
            <p style="margin:4px 0 0;color:var(--text-muted);font-size:13.5px">
              Mẹo học hiệu quả nhất cho Dev Java: Mỗi ngày học xen kẽ <strong>1 bài Ngữ pháp</strong> + <strong>1 bài Từ vựng cùng cấp độ</strong>, sau đó dành 5 phút lật Flashcard SRS.
            </p>
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-sm btn-primary" data-nav="grammar">📘 Mở trọn 24 bài Ngữ pháp</button>
            <button class="btn btn-sm btn-emerald" data-nav="vocabulary">📗 Mở trọn 24 bài Từ vựng</button>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:14px">
          ${window.LEVELS.map(lv => {
            const gMod = window.MODULES.find(m => m.level === lv.id && m.track === 'grammar');
            const vMod = window.MODULES.find(m => m.level === lv.id && m.track === 'vocabulary');
            return `
              <div style="border:1px solid var(--border);border-radius:13px;padding:15px 16px;background:var(--surface-2)">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px">
                  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
                    ${getLevelBadge(lv.id)}
                    <strong style="font-size:14.5px">${esc(lv.target)}</strong>
                  </div>
                  <span style="font-size:12.5px;color:var(--text-muted)">${esc(lv.desc)}</span>
                </div>
                <div class="grid-2">
                  ${[gMod, vMod].filter(Boolean).map(mod => {
                    const mDone = mod.lessons.filter(l => state.done[l.id]).length;
                    return `
                      <div style="background:var(--surface);border:1px solid var(--border);border-radius:11px;padding:13px 15px">
                        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
                          <div>
                            <span class="badge ${mod.track === 'grammar' ? 'badge-blue' : 'badge-emerald'}">
                              ${mod.track === 'grammar' ? '📘 NGỮ PHÁP' : '📗 TỪ VỰNG'}
                            </span>
                            <h3 style="margin:6px 0 4px;font-size:15.5px">${mod.icon} ${esc(mod.title)}</h3>
                          </div>
                          <span class="badge badge-amber">${mDone}/${mod.lessons.length}</span>
                        </div>
                        <p style="margin:4px 0 10px;font-size:12.8px;color:var(--text-muted)">${esc(mod.desc)}</p>
                        <div style="display:flex;flex-wrap:wrap;gap:6px">
                          ${mod.lessons.map(l => `
                            <button class="btn btn-sm" style="${state.done[l.id] ? 'border-color:var(--emerald);color:var(--emerald)' : ''}" data-open-lesson="${esc(l.id)}" title="${esc(l.title)}">
                              ${state.done[l.id] ? '✓ ' : ''}${esc(l.code)}
                            </button>
                          `).join('')}
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="card">
        <h2 style="margin:0 0 6px;font-size:19px">🔬 Tinh Hoa 7 Ứng Dụng Dạy Tiếng Anh Hàng Đầu Được Tích Hợp Cho Riêng Bạn</h2>
        <p style="margin:0 0 14px;color:var(--text-muted);font-size:13.5px">
          Thay vì phải cài rời rạc 5–6 app khác nhau, hệ thống đã chắt lọc đúng những cơ chế khoa học giúp người đi làm bận rộn nhớ lâu nhất:
        </p>
        <div class="grid-3">
          ${window.APP_METHODS.map(m => `
            <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:14px 15px">
              <div style="font-weight:800;font-size:15px;margin-bottom:4px">${m.icon} ${esc(m.app)}</div>
              <div style="font-size:12.5px;font-weight:700;color:var(--primary);margin-bottom:6px">${esc(m.feature)}</div>
              <div style="font-size:13px;color:var(--text-muted)">${esc(m.appliedHow)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ===================== PAGE 2 & 3: TRACK SYLLABUS (GRAMMAR / VOCABULARY) ===================== */
  function renderTrackPage(trackId) {
    const isGrammar = trackId === 'grammar';
    const mods = window.MODULES.filter(m => m.track === trackId && (trackLevelFilter === 'all' || m.level === trackLevelFilter));
    const q = trackSearch.trim().toLowerCase();

    return `
      <div class="card" style="background:linear-gradient(135deg, ${isGrammar ? '#0f2952, #1a56db' : '#0b3b2e, #0b875b'});color:#fff;border:none">
        <span class="badge" style="background:rgba(255,255,255,0.18);color:#fff">
          ${isGrammar ? '📘 TRỤ CỘT 1 • GRAMMAR MASTERCLASS' : '📗 TRỤ CỘT 2 • VOCABULARY & CHUNKS MASTERCLASS'}
        </span>
        <h1 style="margin:8px 0 6px;font-size:23px">
          ${isGrammar
            ? '24 Bài Giảng Ngữ Pháp Từ Cơ Bản Đến Nâng Cao (TOEIC 600+ & Senior Java)'
            : '24 Bài Giảng Từ Vựng TOEIC 600+ & Chuyên Ngành Senior Java Thực Chiến'}
        </h1>
        <p style="margin:0;color:rgba(255,255,255,0.88);font-size:14px">
          ${isGrammar
            ? 'Mỗi bài đều giải thích bằng tư duy lập trình Java dễ nhớ, công thức 5 giây cho TOEIC Part 5–6, bảng sửa lỗi Vietlish và 14–16+ câu ví dụ có phát âm.'
            : 'Mỗi bài gồm 10 từ/cụm từ cốt lõi (IPA + Mẹo nhớ + Ví dụ TOEIC + Ví dụ Java) cộng thêm 10 câu giao tiếp ngữ cảnh = 30 ví dụ/bài để bạn thấm tự nhiên không cần học vẹt!'}
        </p>
      </div>

      <div class="filter-bar">
        <input class="search-input" id="track-search-input" placeholder="🔍 Tìm bài học theo chủ đề, cấu trúc hoặc từ khóa (vd: Passive, Subjunctive, Standup, Contract)..." value="${esc(trackSearch)}">
        <div class="tab-pills">
          ${[
            ['all', 'Tất cả cấp độ'],
            ['basic', '1. Cơ bản'],
            ['intermediate', '2. Trung cấp'],
            ['upper', '3. TOEIC 600+'],
            ['advanced', '4. Nâng cao']
          ].map(([id, label]) => `
            <button class="tab-pill ${trackLevelFilter === id ? 'active' : ''}" data-track-level="${id}">${esc(label)}</button>
          `).join('')}
        </div>
      </div>

      ${mods.map(mod => {
        const filteredLessons = mod.lessons.filter(l => {
          if (!q) return true;
          return (l.title + ' ' + l.summary + ' ' + l.code + ' ' + l.toeicFocus).toLowerCase().includes(q);
        });
        if (!filteredLessons.length) return '';
        return `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px">
              <div>
                ${getLevelBadge(mod.level)}
                <h2 style="margin:6px 0 2px;font-size:19px">${mod.icon} ${esc(mod.title)}</h2>
                <p style="margin:0;color:var(--text-muted);font-size:13.5px">${esc(mod.desc)}</p>
              </div>
              <span class="badge badge-emerald">
                Hoàn thành ${mod.lessons.filter(l => state.done[l.id]).length}/${mod.lessons.length} bài
              </span>
            </div>

            <div class="grid-2">
              ${filteredLessons.map(les => {
                const det = window.LESSON_DETAILS[les.id];
                const exCount = det ? ((det.examples ? det.examples.length : 0) + (det.vocabItems ? det.vocabItems.length * 2 : 0)) : 15;
                const quizInfo = state.lessonQuizScores[les.id];
                return `
                  <div style="border:1px solid var(--border);border-radius:12px;padding:15px 16px;background:var(--surface-2);display:flex;flex-direction:column;justify-content:space-between;gap:10px">
                    <div>
                      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px">
                        <span class="badge ${isGrammar ? 'badge-blue' : 'badge-emerald'}">${esc(les.code)}</span>
                        <div style="display:flex;gap:6px;align-items:center">
                          <span class="badge badge-purple">🔊 ${exCount}+ ví dụ</span>
                          ${state.done[les.id] ? '<span class="badge badge-emerald">✓ Đã học</span>' : ''}
                          ${quizInfo ? `<span class="badge badge-amber">Quiz ${quizInfo.score}/${quizInfo.total}</span>` : ''}
                        </div>
                      </div>
                      <h3 style="margin:0 0 6px;font-size:16px">${esc(les.title)}</h3>
                      <p style="margin:0 0 8px;font-size:13.2px;color:var(--text-muted)">${esc(les.summary)}</p>
                      <div style="font-size:12px;color:var(--primary);font-weight:600">🎯 Trọng tâm: ${esc(les.toeicFocus)}</div>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid var(--border)">
                      <span style="font-size:12px;color:var(--text-muted)">⏱️ ${esc(det?.duration || '35 phút')}</span>
                      <button class="btn btn-sm btn-primary" data-open-lesson="${esc(les.id)}">Vào bài giảng chi tiết →</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    `;
  }

  /* ===================== PAGE 4: DETAILED LESSON READER ===================== */
  function ensureShuffledChunks(lessonId, chunks) {
    if (!Array.isArray(chunks) || !chunks.length) return [];
    if (!chunkShuffled[lessonId] || chunkShuffled[lessonId].length !== chunks.length) {
      const copy = chunks.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      if (copy.join(' ') === chunks.join(' ') && copy.length > 1) {
        [copy[0], copy[1]] = [copy[1], copy[0]];
      }
      chunkShuffled[lessonId] = copy;
      chunkSelected[lessonId] = [];
    }
    return chunkShuffled[lessonId];
  }

  function renderLessonReader() {
    const les = window.LESSONS.find(x => x.id === selectedLessonId) || window.LESSONS[0];
    const det = window.LESSON_DETAILS[les.id];
    const sidebarLessons = window.LESSONS.filter(x => lessonSidebarTrack === 'all' || x.track === lessonSidebarTrack);
    const curGlobalIdx = window.LESSONS.findIndex(x => x.id === les.id);
    const prevLes = curGlobalIdx > 0 ? window.LESSONS[curGlobalIdx - 1] : null;
    const nextLes = curGlobalIdx < window.LESSONS.length - 1 ? window.LESSONS[curGlobalIdx + 1] : null;

    if (!det) {
      return `
        <div class="card">
          <h2>Đang tải nội dung bài giảng ${esc(les.code)} — ${esc(les.title)}…</h2>
          <p>Vui lòng làm mới trang sau vài giây nếu file nội dung đang được biên dịch.</p>
        </div>
      `;
    }

    const examples = Array.isArray(det.examples) ? det.examples : [];
    const uniqueTags = ['all', ...Array.from(new Set(examples.map(e => e.tag).filter(Boolean)))];
    const shownExamples = exampleTagFilter === 'all'
      ? examples
      : examples.filter(e => e.tag === exampleTagFilter);

    // Sentence order drill setup
    const sOrder = det.miniDrill?.sentenceOrder;
    const shuffled = sOrder ? ensureShuffledChunks(les.id, sOrder.chunks) : [];
    const pickedIdxList = chunkSelected[les.id] || [];
    const cFb = chunkFeedback[les.id];
    const fBlank = det.miniDrill?.fillBlank;
    const fFb = fillFeedback[les.id];

    return `
      <div class="lesson-layout">
        <!-- Left Sidebar Lesson Selector -->
        <aside class="lesson-list-pane">
          <div class="tab-pills" style="width:100%;margin-bottom:10px;display:grid;grid-template-columns:repeat(3,1fr)">
            <button class="tab-pill ${lessonSidebarTrack === 'all' ? 'active' : ''}" data-sidebar-track="all">Tất cả</button>
            <button class="tab-pill ${lessonSidebarTrack === 'grammar' ? 'active' : ''}" data-sidebar-track="grammar">📘 Ngữ pháp</button>
            <button class="tab-pill ${lessonSidebarTrack === 'vocabulary' ? 'active' : ''}" data-sidebar-track="vocabulary">📗 Từ vựng</button>
          </div>
          <div style="font-size:11.5px;color:var(--text-muted);padding:0 4px 8px;font-weight:600">
            Chọn bài giảng (${sidebarLessons.length} bài):
          </div>
          ${sidebarLessons.map(item => `
            <button class="lesson-item-btn ${item.id === les.id ? 'active' : ''}" data-open-lesson="${esc(item.id)}">
              <span class="lesson-code-tag">${state.done[item.id] ? '✓ ' : ''}${esc(item.code)}</span>
              <span style="font-size:12.8px;font-weight:${item.id === les.id ? '800' : '600'};line-height:1.35">
                ${esc(item.title)}
              </span>
            </button>
          `).join('')}
        </aside>

        <!-- Right Main Lecture Content -->
        <div>
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px">
              <div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center">
                <span class="badge ${les.track === 'grammar' ? 'badge-blue' : 'badge-emerald'}">
                  ${les.track === 'grammar' ? '📘 NGỮ PHÁP' : '📗 TỪ VỰNG'} • ${esc(les.code)}
                </span>
                ${getLevelBadge(les.level)}
                <span class="badge badge-amber">⏱️ ${esc(det.duration || '35 phút')}</span>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-sm" data-toggle-bookmark="${esc(les.id)}">
                  ${state.bookmarks[les.id] ? '⭐ Đã lưu bài' : '☆ Đánh dấu'}
                </button>
                <button class="btn btn-sm ${state.done[les.id] ? 'btn-emerald' : 'btn-primary'}" data-toggle-done="${esc(les.id)}">
                  ${state.done[les.id] ? '✅ Đã hoàn thành bài này' : '☑️ Đánh dấu Hoàn thành (+25 XP)'}
                </button>
              </div>
            </div>

            <h1 style="margin:6px 0 10px;font-size:24px;line-height:1.3">${esc(les.title)}</h1>
            <div style="display:flex;flex-wrap:wrap;gap:14px;font-size:13px;color:var(--text-muted);padding-bottom:12px;border-bottom:1px solid var(--border)">
              <div>🎯 <strong>Mục tiêu TOEIC:</strong> ${esc(det.toeicTarget || les.toeicFocus)}</div>
              <div>☕ <strong>Ứng dụng Senior Java:</strong> ${esc(det.javaContext || 'Daily Standup, PR Review & Technical Docs')}</div>
            </div>

            <!-- 1. Lời dẫn nhập của thầy -->
            <div class="teacher-box">
              <div style="font-weight:800;font-size:14px;color:var(--primary);margin-bottom:5px">👨‍🏫 Lời Dẫn Nhập Của Thầy Dành Cho Anh Em Dev Java</div>
              <div style="font-size:14.5px">${richFmt(det.teacherIntro)}</div>
            </div>

            <!-- 2. Liên hệ tư duy Java (Memrise Mnemonic Bridge) -->
            ${det.javaAnalogy ? `
              <div class="analogy-box">
                <div style="font-weight:800;font-size:14.5px;color:var(--amber);margin-bottom:5px">
                  💡 Bắc Cầu Tư Duy Lập Trình Java: ${esc(det.javaAnalogy.title)}
                </div>
                <div style="font-size:14px">${richFmt(det.javaAnalogy.body)}</div>
              </div>
            ` : ''}

            <!-- 3. Mục tiêu cần nắm -->
            ${Array.isArray(det.objectives) && det.objectives.length ? `
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin:14px 0">
                <div style="font-weight:800;font-size:14px;margin-bottom:6px">🎯 Sau bài học này, bạn sẽ nắm chắc:</div>
                <ul style="margin:0;padding-left:20px;font-size:13.8px">
                  ${det.objectives.map(o => `<li style="margin-bottom:4px">${richFmt(o)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- 4. Bảng Công thức / Khung Cấu trúc Nhớ Nhanh -->
            ${Array.isArray(det.formulaCards) && det.formulaCards.length ? `
              <div class="section-block">
                <h3>📐 Công Thức Cốt Lõi & Mẫu Khung Nhớ Nhanh (Cheat-Sheet)</h3>
                <div class="formula-grid">
                  ${det.formulaCards.map(fc => `
                    <div class="formula-card">
                      <div class="f-label">${esc(fc.label)}</div>
                      <div class="f-expr">${esc(fc.formula)}</div>
                      <div class="f-note">${richFmt(fc.note)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- 5. Bài giảng chi tiết từng phần -->
            ${(det.sections || []).map((sec, idx) => `
              <div class="section-block">
                <h3>📖 ${esc(sec.heading || `Phần ${idx + 1}`)}</h3>
                ${(sec.paragraphs || []).map(p => `<p style="margin:0 0 10px;font-size:14.5px">${richFmt(p)}</p>`).join('')}
                ${Array.isArray(sec.bullets) && sec.bullets.length ? `
                  <ul style="margin:8px 0 0;padding-left:20px;font-size:14px">
                    ${sec.bullets.map(b => `<li style="margin-bottom:7px">${fmtBullet(b)}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}

            <!-- 6. Bảng Từ Vựng Chi Tiết (cho 24 bài Từ vựng) -->
            ${Array.isArray(det.vocabItems) && det.vocabItems.length ? `
              <div class="section-block">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
                  <h3 style="margin:0">📗 Giải Phẫu Chi Tiết ${det.vocabItems.length} Từ & Cụm Từ Cốt Lõi (Kèm Cặp Ví Dụ TOEIC & Senior Java)</h3>
                  <button class="btn btn-sm btn-emerald" data-srs-module="${esc(les.moduleId)}">🧠 Lật Flashcard SRS học phần này</button>
                </div>
                <div class="vocab-grid">
                  ${det.vocabItems.map((v, vIdx) => {
                    const cardId = `VOC_${les.id}_${vIdx}`;
                    const status = getCardStatus(cardId);
                    return `
                      <div class="vocab-card">
                        <div class="vocab-head">
                          <div>
                            <span class="vocab-word">${esc(v.word)}</span>
                            <span class="badge badge-blue" style="margin-left:5px">${esc(v.pos)}</span>
                            <div style="margin-top:3px"><span class="vocab-ipa">${esc(v.ipa)}</span></div>
                          </div>
                          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">
                            ${ttsButtonsHtml(v.word)}
                            <span class="badge ${status === 'mastered' ? 'badge-emerald' : status === 'learning' ? 'badge-amber' : 'badge-purple'}">
                              ${status === 'mastered' ? '✓ Đã thuộc SRS' : status === 'learning' ? '⏳ Đang ôn SRS' : '🆕 Có trong SRS'}
                            </span>
                          </div>
                        </div>

                        <div class="vocab-meaning">🇻🇳 ${esc(v.meaning)}</div>
                        ${v.synonyms ? `<div style="font-size:12.5px;color:var(--text-muted)">🔄 <strong>Đồng nghĩa / Paraphrase TOEIC:</strong> ${richFmt(v.synonyms)}</div>` : ''}
                        ${Array.isArray(v.collocations) && v.collocations.length ? `
                          <div style="display:flex;flex-wrap:wrap;gap:5px">
                            ${v.collocations.map(c => `<span class="inline-code">🔗 ${esc(c)}</span>`).join('')}
                          </div>
                        ` : ''}
                        ${v.mnemonic ? `<div class="vocab-mnemonic">💡 <strong>Mẹo nhớ nhanh:</strong> ${richFmt(v.mnemonic)}</div>` : ''}

                        ${v.toeicEx ? `
                          <div class="vocab-ex-box">
                            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:3px">
                              <span class="badge badge-purple">🏢 Ví dụ TOEIC</span>
                              ${ttsButtonsHtml(v.toeicEx)}
                            </div>
                            <div style="font-weight:600">${richFmt(v.toeicEx)}</div>
                            ${!state.hideExVi ? `<div style="color:var(--text-muted);font-size:12.6px;margin-top:2px">→ ${esc(v.toeicVi)}</div>` : ''}
                          </div>
                        ` : ''}

                        ${v.javaEx ? `
                          <div class="vocab-ex-box">
                            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:3px">
                              <span class="badge badge-blue">☕ Ví dụ Senior Java</span>
                              ${ttsButtonsHtml(v.javaEx)}
                            </div>
                            <div style="font-weight:600">${richFmt(v.javaEx)}</div>
                            ${!state.hideExVi ? `<div style="color:var(--text-muted);font-size:12.6px;margin-top:2px">→ ${esc(v.javaVi)}</div>` : ''}
                          </div>
                        ` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : ''}

            <!-- 7. Kho Ví Dụ Thực Chiến Đa Ngữ Cảnh (10-16+ câu thêm mỗi bài) -->
            <div class="section-block">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:8px">
                <div>
                  <h3 style="margin:0">🌟 Kho Ví Dụ Thực Chiến Đa Ngữ Cảnh (${examples.length} Câu Mẫu Song Ngữ Có Phát Âm)</h3>
                  <p style="margin:3px 0 0;font-size:13px;color:var(--text-muted)">
                    Bấm <strong>🔊 Nghe</strong> rồi nhẩm đọc đuổi theo (Shadowing) 2 lần mỗi câu — não bạn sẽ tự nhớ cấu trúc mà không cần học thuộc lòng!
                  </p>
                </div>
                <button class="btn btn-sm" data-toggle-hide-vi="1">
                  ${state.hideExVi ? '👁️ Hiện bản dịch tiếng Việt' : '🙈 Ẩn tiếng Việt để tự dịch thử'}
                </button>
              </div>

              <div class="tab-pills" style="margin-bottom:10px">
                ${uniqueTags.map(t => `
                  <button class="tab-pill ${exampleTagFilter === t ? 'active' : ''}" data-ex-tag="${esc(t)}">
                    ${t === 'all' ? `Tất cả (${examples.length})` : esc(t)}
                  </button>
                `).join('')}
              </div>

              <div class="example-list">
                ${shownExamples.map((ex, idx) => `
                  <div class="example-item">
                    <div class="example-top">
                      <span class="badge badge-emerald">#${idx + 1} • ${esc(ex.tag || 'Thực chiến')}</span>
                      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
                        ${ttsButtonsHtml(ex.en)}
                        <button class="btn btn-sm" data-pin-card="${encodeURIComponent(JSON.stringify({ front: ex.en, back: ex.vi, note: ex.note || '', lessonId: les.id }))}" title="Ghim câu này vào Flashcard SRS để ôn lại">
                          📌 Lưu SRS
                        </button>
                      </div>
                    </div>
                    <div class="example-en">${richFmt(ex.en)}</div>
                    ${!state.hideExVi
                      ? `<div class="example-vi">🇻🇳 ${esc(ex.vi)}</div>`
                      : `<div class="example-vi" style="font-style:italic;opacity:0.7">(Đang ẩn bản dịch để bạn tự dịch nhẩm — bấm "Hiện bản dịch" ở trên để đối chiếu)</div>`}
                    ${ex.note ? `<div class="example-note">💡 Phân tích: ${richFmt(ex.note)}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 8. Bảng So sánh Lỗi Vietlish vs Chuẩn Bản xứ -->
            ${det.mistakesTable && Array.isArray(det.mistakesTable.rows) ? `
              <div class="section-block">
                <h3>⚠️ ${esc(det.mistakesTable.title || 'Sửa Lỗi Vietlish Kinh Điển (Bug ❌ vs Clean English ✅)')}</h3>
                <div style="overflow-x:auto">
                  <table class="compare-table">
                    <thead>
                      <tr>
                        <th style="width:28%">❌ Cách viết/nói sai hay gặp (Bug)</th>
                        <th style="width:34%">✅ Tiếng Anh chuẩn tự nhiên (Clean Fix)</th>
                        <th>🔍 Giải thích gốc rễ vì sao sai</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${det.mistakesTable.rows.map(r => `
                        <tr>
                          <td class="bug-cell">${richFmt(r.bug)}</td>
                          <td class="fix-cell">
                            <div style="margin-bottom:5px">${richFmt(r.fix)}</div>
                            ${ttsButtonsHtml(r.fix)}
                          </td>
                          <td>${richFmt(r.why)}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ''}

            <!-- 9. Mẹo phản xạ phòng thi TOEIC -->
            ${Array.isArray(det.toeicTips) && det.toeicTips.length ? `
              <div class="section-block">
                <h3>🎯 Mẹo Phản Xạ Phòng Thi TOEIC 600+ (Giải Nhanh 5–15 Giây)</h3>
                <div style="background:var(--purple-bg);border:1px solid rgba(107,56,212,0.25);border-radius:12px;padding:14px 18px">
                  <ul style="margin:0;padding-left:18px;font-size:14px">
                    ${det.toeicTips.map(t => `<li style="margin-bottom:6px">${richFmt(t)}</li>`).join('')}
                  </ul>
                </div>
              </div>
            ` : ''}

            <!-- 10. Bài tập tương tác Mini-Drill kiểu Duolingo / Busuu -->
            ${det.miniDrill ? `
              <div class="section-block">
                <h3>🧩 Bài Tập Kích Hoạt Trí Nhớ Chủ Động (Active Recall Mini-Lab)</h3>
                <div class="grid-2">
                  ${sOrder ? `
                    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:15px">
                      <div style="font-weight:800;font-size:14px;margin-bottom:4px">1️⃣ Lắp Ghép Cụm Từ Thành Câu Chuẩn (Chunking)</div>
                      <div style="font-size:13px;color:var(--text-muted);margin-bottom:6px">${esc(sOrder.prompt)}</div>
                      <div style="font-size:12.8px;color:var(--primary);margin-bottom:8px">🇻🇳 Nghĩa cần diễn đạt: <em>"${esc(sOrder.vi)}"</em></div>

                      <div style="font-size:12px;font-weight:700;color:var(--text-muted)">Câu bạn đang ghép (bấm vào từ để bỏ ra):</div>
                      <div class="chunk-answer-zone">
                        ${pickedIdxList.length
                          ? pickedIdxList.map((sIdx, pos) => `
                              <button type="button" class="chunk-chip" style="background:var(--primary-soft);border-color:var(--primary)" data-unpick-chunk="${pos}" data-lesson="${esc(les.id)}">
                                ${esc(shuffled[sIdx])}
                              </button>
                            `).join('')
                          : '<span style="color:var(--text-muted);font-size:12.5px">Hãy bấm lần lượt các cụm từ bên dưới…</span>'}
                      </div>

                      <div style="font-size:12px;font-weight:700;color:var(--text-muted)">Kho cụm từ:</div>
                      <div class="chunk-bank">
                        ${shuffled.map((ch, sIdx) => {
                          if (pickedIdxList.includes(sIdx)) return '';
                          return `<button type="button" class="chunk-chip" data-pick-chunk="${sIdx}" data-lesson="${esc(les.id)}">${esc(ch)}</button>`;
                        }).join('')}
                      </div>

                      <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
                        <button type="button" class="btn btn-sm btn-primary" data-check-chunk="${esc(les.id)}">Kiểm tra câu</button>
                        <button type="button" class="btn btn-sm" data-reset-chunk="${esc(les.id)}">Xếp lại</button>
                        ${ttsButtonsHtml(sOrder.answer)}
                      </div>
                      ${cFb ? `
                        <div style="margin-top:8px;padding:9px 11px;border-radius:9px;font-size:13px;background:${cFb.ok ? 'var(--emerald-bg)' : 'var(--danger-bg)'};color:${cFb.ok ? 'var(--emerald)' : 'var(--danger)'};font-weight:700">
                          ${cFb.msg}
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}

                  ${fBlank ? `
                    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:15px">
                      <div style="font-weight:800;font-size:14px;margin-bottom:4px">2️⃣ Điền Từ Phản Xạ Nhanh</div>
                      <div style="font-size:14.5px;font-weight:600;margin:10px 0;padding:10px;background:var(--surface);border-radius:9px;border:1px solid var(--border)">
                        ${richFmt(fBlank.sentence)}
                      </div>
                      <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:8px">💡 Gợi ý: ${esc(fBlank.hint)}</div>
                      <div style="display:flex;gap:8px">
                        <input class="search-input" style="min-width:0" id="fill-input-${esc(les.id)}" placeholder="Gõ từ cần điền..." value="${esc(fillInputs[les.id] || '')}">
                        <button type="button" class="btn btn-sm btn-primary" data-check-fill="${esc(les.id)}">Chấm</button>
                      </div>
                      ${fFb ? `
                        <div style="margin-top:10px;padding:9px 11px;border-radius:9px;font-size:13px;background:${fFb.ok ? 'var(--emerald-bg)' : 'var(--amber-bg)'}">
                          <strong>${fFb.ok ? '✅ Chính xác!' : `🔑 Đáp án chuẩn: "${esc(fBlank.answer)}"`}</strong>
                          <div style="margin-top:4px;color:var(--text)">${richFmt(fBlank.explain)}</div>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- 11. Quiz Kiểm tra cuối bài (3 câu chuẩn TOEIC) -->
            ${Array.isArray(det.quiz) && det.quiz.length ? `
              <div class="section-block">
                <h3>📝 Kiểm Tra Thực Chiến Cuối Bài (${det.quiz.length} Câu Chuẩn TOEIC & Senior Java)</h3>
                ${det.quiz.map((qItem, qIdx) => {
                  const ansKey = `${les.id}_${qIdx}`;
                  const chosen = state.lessonQuizAnswers[ansKey];
                  const graded = !!lessonQuizRevealed[les.id];
                  return `
                    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:15px 16px;margin-bottom:12px">
                      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:10px">
                        <div style="font-weight:700;font-size:14.5px">Câu ${qIdx + 1}: ${richFmt(qItem.q)}</div>
                        ${ttsButtonsHtml(qItem.q.replace(/_{2,}/g, qItem.options[qItem.answer] || ''))}
                      </div>
                      ${qItem.options.map((opt, oIdx) => {
                        let cls = 'quiz-opt';
                        if (graded) {
                          if (oIdx === qItem.answer) cls += ' correct';
                          else if (chosen === oIdx) cls += ' wrong';
                        } else if (chosen === oIdx) {
                          cls += ' selected';
                        }
                        return `
                          <button type="button" class="${cls}" data-lesson-quiz="${esc(les.id)}" data-qidx="${qIdx}" data-oidx="${oIdx}">
                            <span style="font-weight:800">${['A', 'B', 'C', 'D'][oIdx]}.</span>
                            <span>${esc(opt)}</span>
                          </button>
                        `;
                      }).join('')}
                      ${graded ? `
                        <div style="margin-top:8px;padding:11px 13px;border-radius:9px;background:var(--surface);border-left:4px solid var(--emerald);font-size:13.5px">
                          <strong>👨‍🏫 Thầy giải thích chi tiết:</strong> ${richFmt(qItem.explain)}
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}

                <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
                  <button type="button" class="btn btn-primary" data-grade-lesson-quiz="${esc(les.id)}">
                    🎯 Nộp bài & Xem lời giải chi tiết
                  </button>
                  ${lessonQuizRevealed[les.id] && state.lessonQuizScores[les.id] ? `
                    <span class="badge badge-emerald" style="font-size:13.5px;padding:6px 12px">
                      Kết quả: ${state.lessonQuizScores[les.id].score}/${state.lessonQuizScores[les.id].total} câu đúng
                    </span>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- 12. Sổ tay ghi chú cá nhân cho bài học -->
            <div class="section-block">
              <h3>📒 Ghi Chú Của Riêng Bạn Ở Bài Này</h3>
              <textarea id="lesson-note-box" rows="3" class="search-input" style="width:100%;resize:vertical" placeholder="Ghi lại câu ví dụ bạn tâm đắc nhất để áp dụng vào buổi Daily Standup sáng mai...">${esc(state.notes[les.id] || '')}</textarea>
              <div style="margin-top:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
                <button type="button" class="btn btn-sm" data-save-note="${esc(les.id)}">💾 Lưu ghi chú</button>
                <div style="display:flex;gap:8px">
                  ${prevLes ? `<button type="button" class="btn btn-sm" data-open-lesson="${esc(prevLes.id)}">← Bài trước (${esc(prevLes.code)})</button>` : ''}
                  ${nextLes ? `<button type="button" class="btn btn-sm btn-primary" data-open-lesson="${esc(nextLes.id)}">Bài tiếp theo (${esc(nextLes.code)}) →</button>` : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ===================== PAGE 5: VOCAB VAULT (240+ WORDS SEARCHABLE) ===================== */
  function renderVocabVault() {
    const cards = getAllVocabCards().filter(c => !c.isCustom);
    const q = vaultSearch.trim().toLowerCase();
    const filtered = cards.filter(c => {
      if (vaultModule !== 'all' && c.moduleId !== vaultModule) return false;
      const st = getCardStatus(c.id);
      if (vaultSrsFilter !== 'all' && st !== vaultSrsFilter) return false;
      if (!q) return true;
      return (
        c.word.toLowerCase().includes(q) ||
        c.meaning.toLowerCase().includes(q) ||
        c.synonyms.toLowerCase().includes(q) ||
        c.collocations.join(' ').toLowerCase().includes(q)
      );
    });

    return `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div>
            <h1 style="margin:0;font-size:22px">📖 Từ Điển Tinh Gọn TOEIC 600+ & Senior Java (${cards.length} Từ Chủ Lực)</h1>
            <p style="margin:4px 0 0;color:var(--text-muted);font-size:13.5px">
              Tra cứu tức thì theo tiếng Anh, nghĩa tiếng Việt, từ đồng nghĩa TOEIC hoặc cụm Collocation — nghe phát âm & lật thẻ SRS ngay.
            </p>
          </div>
          <button class="btn btn-primary" data-nav="srs">🧠 Chuyển sang Phòng Lật Thẻ SRS</button>
        </div>

        <div class="filter-bar" style="margin-top:14px;margin-bottom:0">
          <input class="search-input" id="vault-search-input" placeholder="🔍 Gõ từ tiếng Anh, nghĩa tiếng Việt hoặc collocation (vd: postpone, bottleneck, hợp đồng, nghẽn)..." value="${esc(vaultSearch)}">
          <select class="btn" id="vault-mod-select">
            <option value="all" ${vaultModule === 'all' ? 'selected' : ''}>Tất cả học phần (V1–V4)</option>
            <option value="V1" ${vaultModule === 'V1' ? 'selected' : ''}>V1 • Văn phòng & Họp hành</option>
            <option value="V2" ${vaultModule === 'V2' ? 'selected' : ''}>V2 • Thương mại TOEIC 600+</option>
            <option value="V3" ${vaultModule === 'V3' ? 'selected' : ''}>V3 • Agile, Git, CI/CD & Incident</option>
            <option value="V4" ${vaultModule === 'V4' ? 'selected' : ''}>V4 • Senior Java, Design & Part 7</option>
          </select>
          <select class="btn" id="vault-srs-select">
            <option value="all" ${vaultSrsFilter === 'all' ? 'selected' : ''}>Mọi trạng thái nhớ (${cards.length})</option>
            <option value="new" ${vaultSrsFilter === 'new' ? 'selected' : ''}>🆕 Chưa lật thẻ</option>
            <option value="learning" ${vaultSrsFilter === 'learning' ? 'selected' : ''}>⏳ Đang ôn tập</option>
            <option value="mastered" ${vaultSrsFilter === 'mastered' ? 'selected' : ''}>✓ Đã thuộc dài hạn</option>
          </select>
        </div>
      </div>

      <div style="margin-bottom:10px;font-size:13px;color:var(--text-muted);font-weight:600">
        Đang hiển thị ${filtered.length} từ vựng phù hợp:
      </div>

      <div class="vocab-grid">
        ${filtered.slice(0, 80).map(v => `
          <div class="vocab-card">
            <div class="vocab-head">
              <div>
                <span class="vocab-word">${esc(v.word)}</span>
                <span class="badge badge-blue">${esc(v.pos)}</span>
                <span class="vocab-ipa" style="margin-left:4px">${esc(v.ipa)}</span>
              </div>
              ${ttsButtonsHtml(v.word)}
            </div>
            <div class="vocab-meaning">🇻🇳 ${esc(v.meaning)}</div>
            ${v.synonyms ? `<div style="font-size:12.5px;color:var(--text-muted)">🔄 Đồng nghĩa: ${esc(v.synonyms)}</div>` : ''}
            ${v.mnemonic ? `<div class="vocab-mnemonic">💡 ${richFmt(v.mnemonic)}</div>` : ''}
            <div class="vocab-ex-box">
              <div>🏢 ${richFmt(v.toeicEx)}</div>
              <div style="color:var(--text-muted);font-size:12.5px">→ ${esc(v.toeicVi)}</div>
            </div>
            ${v.javaEx ? `
              <div class="vocab-ex-box">
                <div>☕ ${richFmt(v.javaEx)}</div>
                <div style="color:var(--text-muted);font-size:12.5px">→ ${esc(v.javaVi)}</div>
              </div>
            ` : ''}
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:6px">
              <button class="btn btn-sm" data-open-lesson="${esc(v.lessonId)}">Mở bài ${esc(v.lessonCode)}</button>
              ${ttsButtonsHtml(v.javaEx || v.toeicEx)}
            </div>
          </div>
        `).join('')}
      </div>
      ${filtered.length > 80 ? `<p style="text-align:center;color:var(--text-muted);margin-top:14px">Nhập từ khóa vào ô tìm kiếm phía trên để lọc sâu hơn trong tổng số ${filtered.length} kết quả.</p>` : ''}
    `;
  }

  /* ===================== PAGE 6: ANKI SM-2 SRS FLASHCARD STUDIO ===================== */
  function renderSrsPage() {
    const allCards = getAllVocabCards();
    const deck = allCards.filter(c => {
      if (srsDeckFilter === 'due') return isCardDue(c.id);
      if (srsDeckFilter === 'custom') return c.isCustom;
      if (['V1', 'V2', 'V3', 'V4'].includes(srsDeckFilter)) return c.moduleId === srsDeckFilter && isCardDue(c.id);
      return true;
    });

    if (!srsCurrentCardId || !deck.some(c => c.id === srsCurrentCardId)) {
      srsCurrentCardId = deck[0]?.id || null;
    }
    const card = deck.find(c => c.id === srsCurrentCardId) || null;

    const totalDue = allCards.filter(c => isCardDue(c.id)).length;
    const totalMastered = allCards.filter(c => getCardStatus(c.id) === 'mastered').length;
    const totalLearning = allCards.filter(c => getCardStatus(c.id) === 'learning').length;

    return `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div>
            <h1 style="margin:0;font-size:22px">🧠 Phòng Flashcard Lặp Lại Ngắt Quãng (Chuẩn Thuật Toán Anki SM-2)</h1>
            <p style="margin:4px 0 0;color:var(--text-muted);font-size:13.5px">
              Nhìn mặt trước → Tự gợi nhớ nghĩa & cách phát âm trong đầu (Active Recall) → Bấm lật thẻ → Chọn mức độ nhớ để thuật toán hẹn ngày ôn tối ưu.
            </p>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <span class="badge badge-amber">Chờ ôn: ${totalDue}</span>
            <span class="badge badge-blue">Đang học: ${totalLearning}</span>
            <span class="badge badge-emerald">Đã thuộc dài hạn: ${totalMastered}</span>
            <span class="badge badge-purple">Phiên hôm nay: ${srsSessionReviewed} thẻ</span>
          </div>
        </div>

        <div class="tab-pills" style="margin-top:14px">
          ${[
            ['due', `🔥 Đến hạn hôm nay (${totalDue})`],
            ['V1', '🏢 Học phần V1 (Cơ bản)'],
            ['V2', '📊 Học phần V2 (TOEIC 600+)'],
            ['V3', '💻 Học phần V3 (Agile/Git/Prod)'],
            ['V4', '🏆 Học phần V4 (Senior Java)'],
            ['custom', `📌 Câu bạn ghim (${state.customCards.length})`],
            ['all', `Tất cả (${allCards.length})`]
          ].map(([id, label]) => `
            <button class="tab-pill ${srsDeckFilter === id ? 'active' : ''}" data-srs-deck="${id}">${esc(label)}</button>
          `).join('')}
        </div>
      </div>

      <div class="srs-stage">
        ${!card ? `
          <div class="card" style="text-align:center;padding:40px 24px">
            <div style="font-size:46px;margin-bottom:10px">🎉</div>
            <h2 style="margin:0 0 8px">Tuyệt vời! Bạn đã hoàn thành hết thẻ đến hạn trong bộ này!</h2>
            <p style="color:var(--text-muted);margin:0 0 16px">Hãy chuyển sang bộ thẻ khác hoặc vào bài giảng mới để ghim thêm các câu ví dụ hay.</p>
            <button class="btn btn-primary" data-srs-deck="all">Ôn tập tự do toàn bộ kho thẻ</button>
          </div>
        ` : `
          <div class="flashcard-box" data-flip-srs="1">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
              <span class="badge badge-blue">${esc(card.lessonCode)}</span>
              <span class="badge badge-purple">${esc(card.pos)}</span>
              ${card.ipa ? `<span class="vocab-ipa">${esc(card.ipa)}</span>` : ''}
            </div>

            <div style="font-size:28px;font-weight:800;color:var(--primary);margin-bottom:10px">
              ${richFmt(card.word)}
            </div>
            <div onclick="event.stopPropagation()" style="margin-bottom:14px">
              ${ttsButtonsHtml(card.word)}
            </div>

            ${!srsFlipped ? `
              <div style="margin-top:14px;color:var(--text-muted);font-size:14px;padding:10px 16px;border-radius:99px;background:var(--surface-2);border:1px dashed var(--border-strong)">
                👆 Bấm vào thẻ (hoặc phím Space) để lật xem nghĩa, mẹo nhớ & ví dụ thực tế
              </div>
            ` : `
              <div style="width:100%;border-top:1px solid var(--border);padding-top:16px;margin-top:6px;text-align:left">
                <div style="font-size:18px;font-weight:800;color:var(--emerald);text-align:center;margin-bottom:10px">
                  🇻🇳 ${esc(card.meaning)}
                </div>
                ${card.synonyms ? `<div style="font-size:13px;color:var(--text-muted);margin-bottom:8px;text-align:center">🔄 Đồng nghĩa TOEIC: <strong>${esc(card.synonyms)}</strong></div>` : ''}
                ${card.mnemonic ? `<div class="vocab-mnemonic" style="margin-bottom:10px">💡 <strong>Mẹo nhớ:</strong> ${richFmt(card.mnemonic)}</div>` : ''}
                ${card.toeicEx ? `
                  <div class="vocab-ex-box" onclick="event.stopPropagation()" style="margin-bottom:8px">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
                      <span class="badge badge-purple">🏢 Ngữ cảnh TOEIC</span>
                      ${ttsButtonsHtml(card.toeicEx)}
                    </div>
                    <div style="font-weight:600">${richFmt(card.toeicEx)}</div>
                    <div style="color:var(--text-muted);font-size:12.8px">→ ${esc(card.toeicVi)}</div>
                  </div>
                ` : ''}
                ${card.javaEx ? `
                  <div class="vocab-ex-box" onclick="event.stopPropagation()">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
                      <span class="badge badge-blue">☕ Ngữ cảnh Senior Java</span>
                      ${ttsButtonsHtml(card.javaEx)}
                    </div>
                    <div style="font-weight:600">${richFmt(card.javaEx)}</div>
                    <div style="color:var(--text-muted);font-size:12.8px">→ ${esc(card.javaVi)}</div>
                  </div>
                ` : ''}
              </div>
            `}
          </div>

          ${srsFlipped ? `
            <div class="srs-rating-grid">
              <button class="btn" style="border-color:var(--danger);color:var(--danger);flex-direction:column;padding:12px" data-rate-srs="${esc(card.id)}" data-grade="0">
                <strong>1. Quên rồi</strong>
                <span style="font-size:11.5px;opacity:0.8">Lặp lại sau 1 phút</span>
              </button>
              <button class="btn" style="border-color:var(--amber);color:var(--amber);flex-direction:column;padding:12px" data-rate-srs="${esc(card.id)}" data-grade="1">
                <strong>2. Hơi khó</strong>
                <span style="font-size:11.5px;opacity:0.8">Ôn lại sau 1 ngày</span>
              </button>
              <button class="btn" style="border-color:var(--primary);color:var(--primary);flex-direction:column;padding:12px" data-rate-srs="${esc(card.id)}" data-grade="2">
                <strong>3. Nhớ tốt</strong>
                <span style="font-size:11.5px;opacity:0.8">Ôn lại sau 3–5 ngày</span>
              </button>
              <button class="btn" style="border-color:var(--emerald);color:var(--emerald);flex-direction:column;padding:12px" data-rate-srs="${esc(card.id)}" data-grade="3">
                <strong>4. Quá dễ!</strong>
                <span style="font-size:11.5px;opacity:0.8">Ôn lại sau 7–21 ngày</span>
              </button>
            </div>
          ` : ''}
        `}
      </div>
    `;
  }

  /* ===================== PAGE 7: LISTENING DICTATION & ELSA SPEAKING LABS ===================== */
  function renderLabsPage() {
    const dicList = window.PRACTICE_LABS?.dictation || [];
    const spkList = window.PRACTICE_LABS?.speaking || [];

    const dicCats = ['all', ...Array.from(new Set(dicList.map(x => x.category)))];
    const filteredDic = dicCategory === 'all' ? dicList : dicList.filter(x => x.category === dicCategory);
    if (!activeDicId || !filteredDic.some(x => x.id === activeDicId)) {
      activeDicId = filteredDic[0]?.id || null;
    }
    const curDic = filteredDic.find(x => x.id === activeDicId);

    const spkCats = ['all', ...Array.from(new Set(spkList.map(x => x.category)))];
    const filteredSpk = spkCategory === 'all' ? spkList : spkList.filter(x => x.category === spkCategory);
    if (!activeSpkId || !filteredSpk.some(x => x.id === activeSpkId)) {
      activeSpkId = filteredSpk[0]?.id || null;
    }
    const curSpk = filteredSpk.find(x => x.id === activeSpkId);

    return `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div>
            <h1 style="margin:0;font-size:22px">🎧 Phòng Luyện Nghe Chép Chính Tả (Study4) & 🎙️ Luyện Nói Chấm Điểm (ELSA)</h1>
            <p style="margin:4px 0 0;color:var(--text-muted);font-size:13.5px">
              Khắc phục triệt để điểm yếu lớn nhất của lập trình viên: đọc tài liệu thì hiểu nhưng nghe họp khách hàng / TOEIC Listening không bắt kịp từ!
            </p>
          </div>
          <div class="tab-pills">
            <button class="tab-pill ${labTab === 'dictation' ? 'active' : ''}" data-lab-tab="dictation">🎧 Nghe Chép Chính Tả (${dicList.length})</button>
            <button class="tab-pill ${labTab === 'speaking' ? 'active' : ''}" data-lab-tab="speaking">🎙️ Luyện Nói & Shadowing (${spkList.length})</button>
          </div>
        </div>
      </div>

      ${labTab === 'dictation' ? `
        <div class="lesson-layout">
          <aside class="lesson-list-pane">
            <select class="btn" style="width:100%;margin-bottom:10px" id="dic-cat-select">
              ${dicCats.map(c => `<option value="${esc(c)}" ${dicCategory === c ? 'selected' : ''}>${c === 'all' ? 'Tất cả chủ đề nghe' : esc(c)}</option>`).join('')}
            </select>
            ${filteredDic.map(d => `
              <button class="lesson-item-btn ${d.id === activeDicId ? 'active' : ''}" data-select-dic="${esc(d.id)}">
                <span class="lesson-code-tag">${state.dictationDone[d.id] ? `${state.dictationDone[d.id]}%` : esc(d.id)}</span>
                <span style="font-size:12.8px;font-weight:600">${esc(d.title || d.category)}</span>
              </button>
            `).join('')}
          </aside>

          <div class="card">
            ${!curDic ? '<p>Đang nạp bài luyện nghe chép chính tả…</p>' : `
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px">
                <div>
                  <span class="badge badge-blue">${esc(curDic.category)}</span>
                  ${getLevelBadge(curDic.level || 'intermediate')}
                </div>
                <span style="font-size:12.5px;color:var(--text-muted)">Mã bài: ${esc(curDic.id)}</span>
              </div>
              <h2 style="margin:0 0 10px;font-size:20px">🎧 ${esc(curDic.title)}</h2>
              <p style="margin:0 0 14px;color:var(--text-muted);font-size:13.8px">
                <strong>Bước 1:</strong> Bấm nghe câu tiếng Anh (không nhìn đáp án) → <strong>Bước 2:</strong> Gõ lại từng chữ bạn nghe được → <strong>Bước 3:</strong> Bấm Chấm Diff để phát hiện các âm nối, đuôi <code>-s</code>, <code>-ed</code> bị bỏ sót!
              </p>

              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
                <button class="btn btn-primary" data-speak="${encodeURIComponent(curDic.audioText)}" data-rate="1">▶️ Phát Audio Tốc Độ Chuẩn (1.0x)</button>
                <button class="btn btn-emerald" data-speak="${encodeURIComponent(curDic.audioText)}" data-rate="0.75">🐢 Phát Chậm Rõ Từng Âm (0.75x)</button>
                <span style="font-size:12.5px;color:var(--text-muted)">Số từ cần nghe: <strong>${stripMarkdown(curDic.audioText).split(/\s+/).length} từ</strong></span>
              </div>

              <textarea id="dic-user-input" rows="3" class="search-input" style="width:100%;font-size:15px" placeholder="Gõ lại chính xác câu tiếng Anh bạn vừa nghe được vào đây...">${esc(dicInput)}</textarea>

              <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
                <button class="btn btn-primary" data-check-dic="1">🔍 Chấm Chính Tả & Phân Tích Nối Âm</button>
                <button class="btn" data-reveal-dic="1">💡 Xem đáp án mẫu</button>
              </div>

              ${dicResult ? `
                <div style="margin-top:16px;padding:16px;border-radius:12px;background:var(--surface-2);border:1px solid var(--border)">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                    <strong>Kết quả đối chiếu từng từ (Compiler Diff):</strong>
                    <span class="badge ${dicResult.pct >= 80 ? 'badge-emerald' : 'badge-amber'}">Độ chính xác: ${dicResult.pct}%</span>
                  </div>
                  <div style="font-size:16.5px;padding:10px 12px;background:var(--surface);border-radius:9px;border:1px solid var(--border);margin-bottom:10px">
                    ${dicResult.diffHtml}
                  </div>
                  <div style="font-size:14px;margin-bottom:6px">🇻🇳 <strong>Dịch nghĩa:</strong> ${esc(curDic.vi)}</div>
                  <div style="font-size:13.5px;color:var(--purple);background:var(--purple-bg);padding:8px 11px;border-radius:8px">
                    🔊 <strong>Giải mã âm thanh & nối âm:</strong> ${richFmt(curDic.soundTips)}
                  </div>
                </div>
              ` : ''}
            `}
          </div>
        </div>
      ` : `
        <div class="lesson-layout">
          <aside class="lesson-list-pane">
            <select class="btn" style="width:100%;margin-bottom:10px" id="spk-cat-select">
              ${spkCats.map(c => `<option value="${esc(c)}" ${spkCategory === c ? 'selected' : ''}>${c === 'all' ? 'Tất cả tình huống nói' : esc(c)}</option>`).join('')}
            </select>
            ${filteredSpk.map(s => `
              <button class="lesson-item-btn ${s.id === activeSpkId ? 'active' : ''}" data-select-spk="${esc(s.id)}">
                <span class="lesson-code-tag">${state.speakingScores[s.id] ? `${state.speakingScores[s.id]}%` : esc(s.id)}</span>
                <span style="font-size:12.8px;font-weight:600">${esc(s.situation)}</span>
              </button>
            `).join('')}
          </aside>

          <div class="card">
            ${!curSpk ? '<p>Đang nạp bài luyện nói…</p>' : `
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
                <span class="badge badge-purple">${esc(curSpk.category)}</span>
                ${getLevelBadge(curSpk.level || 'upper')}
              </div>
              <h2 style="margin:0 0 8px;font-size:19px">🎙️ Tình huống: ${esc(curSpk.situation)}</h2>

              <div style="background:var(--surface-2);border:1px solid var(--border);border-left:4px solid var(--primary);border-radius:12px;padding:16px 18px;margin:12px 0">
                <div style="font-size:18px;font-weight:750;margin-bottom:8px">${esc(curSpk.en)}</div>
                <div style="font-size:13.5px;color:var(--amber);font-family:Consolas,monospace;margin-bottom:8px">
                  🎵 Nhịp & Trọng âm: ${esc(curSpk.ipaHint)}
                </div>
                <div style="font-size:14px;color:var(--text-muted);margin-bottom:10px">🇻🇳 ${esc(curSpk.vi)}</div>
                <div style="display:flex;gap:8px;flex-wrap:wrap">
                  ${ttsButtonsHtml(curSpk.en)}
                </div>
              </div>

              <div style="background:var(--amber-bg);padding:10px 14px;border-radius:10px;font-size:13.5px;margin-bottom:14px">
                💡 <strong>Mẹo phát âm chuẩn như ELSA:</strong> ${richFmt(curSpk.tip)}
              </div>

              <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
                <button class="btn ${spkListeningMic ? 'btn-emerald' : 'btn-primary'}" data-start-mic="1">
                  ${spkListeningMic ? '🔴 Đang nghe giọng bạn… (Hãy đọc to câu trên)' : '🎤 Bấm để Nói qua Microphone & Chấm Điểm'}
                </button>
                <button class="btn" data-self-shadow-ok="${esc(curSpk.id)}">
                  ✅ Tôi đã đọc đuổi (Shadowing) to rõ 3 lần (+15 XP)
                </button>
              </div>

              ${spkResult ? `
                <div style="margin-top:16px;padding:15px;border-radius:12px;background:var(--surface-2);border:1px solid var(--border)">
                  ${spkResult.error ? `<div style="color:var(--danger);font-weight:700">${esc(spkResult.error)}</div>` : `
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                      <strong>AI nhận diện giọng nói của bạn:</strong>
                      <span class="badge ${spkResult.pct >= 80 ? 'badge-emerald' : 'badge-amber'}">Độ khớp phát âm: ${spkResult.pct}%</span>
                    </div>
                    <div style="font-size:13.5px;color:var(--text-muted);margin-bottom:8px">Bạn đã nói: <em>"${esc(spkTranscript)}"</em></div>
                    <div style="font-size:16px;padding:10px;background:var(--surface);border-radius:8px;border:1px solid var(--border)">
                      ${spkResult.diffHtml}
                    </div>
                  `}
                </div>
              ` : ''}
            `}
          </div>
        </div>
      `}
    `;
  }

  /* ===================== PAGE 8: SENIOR JAVA COMMUNICATION TOOLKIT ===================== */
  function renderJavaKitPage() {
    const groups = window.PRACTICE_LABS?.javaTemplates || [];
    const shown = activeJavaKitId === 'all' ? groups : groups.filter(g => g.id === activeJavaKitId);

    const builtStandup = `Yesterday, I ${standupDraft.yesterday.trim()}. Today, I plan to ${standupDraft.today.trim()}. Currently, I am ${standupDraft.blocker.trim() ? standupDraft.blocker.trim() : 'not facing any blockers'}.`;

    return `
      <div class="card">
        <h1 style="margin:0 0 6px;font-size:22px">☕ Bộ Khung Giao Tiếp Thực Chiến Hàng Ngày Cho Senior Java Developer</h1>
        <p style="margin:0;color:var(--text-muted);font-size:13.8px">
          Dùng ngay trong buổi Daily Standup sáng nay, khi viết comment Code Review trên GitHub/GitLab, báo cáo sự cố Production hoặc phỏng vấn kiến trúc!
        </p>

        <div style="margin-top:16px;padding:16px;border-radius:13px;background:var(--surface-2);border:1px solid var(--border)">
          <div style="font-weight:800;font-size:15px;color:var(--primary);margin-bottom:10px">
            ⚡ Máy Tạo Câu Báo Cáo Daily Standup Trong 10 Giây (Luyện tập trước giờ họp)
          </div>
          <div class="grid-3" style="margin-bottom:10px">
            <div>
              <label style="font-size:12px;font-weight:700;color:var(--text-muted)">1. Hôm qua đã làm (Yesterday I...):</label>
              <input class="search-input" style="width:100%;min-width:0;margin-top:4px" id="st-yesterday" value="${esc(standupDraft.yesterday)}">
            </div>
            <div>
              <label style="font-size:12px;font-weight:700;color:var(--text-muted)">2. Hôm nay sẽ làm (Today I plan to...):</label>
              <input class="search-input" style="width:100%;min-width:0;margin-top:4px" id="st-today" value="${esc(standupDraft.today)}">
            </div>
            <div>
              <label style="font-size:12px;font-weight:700;color:var(--text-muted)">3. Vướng mắc (Currently I am...):</label>
              <input class="search-input" style="width:100%;min-width:0;margin-top:4px" id="st-blocker" value="${esc(standupDraft.blocker)}">
            </div>
          </div>
          <div style="padding:12px 14px;background:var(--surface);border-radius:10px;border:1px solid var(--border-strong);display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
            <div style="font-weight:700;font-size:14.5px;flex:1">${esc(builtStandup)}</div>
            <div style="display:flex;gap:6px">
              ${ttsButtonsHtml(builtStandup)}
              <button class="btn btn-sm" data-copy-text="${encodeURIComponent(builtStandup)}">📋 Copy</button>
            </div>
          </div>
        </div>

        <div class="tab-pills" style="margin-top:14px">
          <button class="tab-pill ${activeJavaKitId === 'all' ? 'active' : ''}" data-javakit-tab="all">Tất cả 6 Bộ Mẫu Câu</button>
          ${groups.map(g => `
            <button class="tab-pill ${activeJavaKitId === g.id ? 'active' : ''}" data-javakit-tab="${esc(g.id)}">${g.icon || '📌'} ${esc(g.title)}</button>
          `).join('')}
        </div>
      </div>

      ${shown.map(g => `
        <div class="card">
          <h2 style="margin:0 0 4px;font-size:19px">${g.icon || '💼'} ${esc(g.title)}</h2>
          <p style="margin:0 0 12px;color:var(--text-muted);font-size:13.5px">${esc(g.desc || '')}</p>
          <div class="grid-2">
            ${(g.items || []).map(it => `
              <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:14px 15px">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px">
                  <span class="badge badge-blue">${esc(it.scenario)}</span>
                  <div style="display:flex;gap:5px">
                    ${ttsButtonsHtml(it.en)}
                    <button class="btn btn-sm" data-copy-text="${encodeURIComponent(stripMarkdown(it.en))}">📋</button>
                  </div>
                </div>
                <div style="font-weight:700;font-size:14.8px;margin-bottom:5px">${richFmt(it.en)}</div>
                <div style="font-size:13.2px;color:var(--text-muted);margin-bottom:8px">🇻🇳 ${esc(it.vi)}</div>
                ${Array.isArray(it.keywords) ? `
                  <div style="display:flex;flex-wrap:wrap;gap:5px">
                    ${it.keywords.map(k => `<span class="inline-code">${esc(k)}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  /* ===================== PAGE 9: MOCK EXAMS & 4-STEP TEACHER REVIEW ===================== */
  function startExam(examObj, runMode) {
    if (!examObj || !examObj.questions?.length) return;
    clearInterval(examTimer);
    activeExam = examObj;
    examMode = runMode || 'timed';
    examView = 'session';
    examIdx = 0;
    examSingleView = true;
    examAnswers = {};
    examFlags = {};
    examRevealed = {};
    examStartedAt = Date.now();
    examSecondsLeft = (examObj.minutes || 20) * 60;

    if (examMode === 'timed') {
      examTimer = setInterval(() => {
        if (examSecondsLeft > 0) {
          examSecondsLeft -= 1;
          const clk = document.getElementById('exam-timer-clock');
          if (clk) clk.textContent = formatClock(examSecondsLeft);
        } else {
          submitExam();
        }
      }, 1000);
    }
    page = 'exams';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  function submitExam() {
    clearInterval(examTimer);
    if (!activeExam) return;
    const qs = activeExam.questions;
    let correct = 0;
    const domainStats = {};

    qs.forEach((q, idx) => {
      const dom = q.domain || 'General';
      if (!domainStats[dom]) domainStats[dom] = { ok: 0, total: 0 };
      domainStats[dom].total += 1;

      if (examAnswers[idx] === q.answer) {
        correct += 1;
        domainStats[dom].ok += 1;
        // Remove from mistake notebook if previously wrong and now solved in revenge exam
        if (activeExam.id === 'REVENGE_MISTAKES' && state.mistakes[q.id]) {
          delete state.mistakes[q.id];
        }
      } else {
        state.mistakes[q.id] = q;
      }
    });

    const pct = Math.round((correct / qs.length) * 100);
    const estToeic = Math.min(900, Math.max(220, Math.round(220 + (pct / 100) * 630)));
    if (activeExam.type === 'placement') {
      state.placementToeic = estToeic;
    }

    const elapsed = Math.round((Date.now() - examStartedAt) / 1000);
    examSummary = {
      title: activeExam.title,
      correct,
      total: qs.length,
      pct,
      estToeic,
      elapsed,
      domainStats
    };

    state.examHistory.unshift({
      id: 'H_' + Date.now(),
      examId: activeExam.id,
      title: activeExam.title,
      pct,
      estToeic,
      date: new Date().toISOString().slice(0, 10),
      elapsed
    });
    state.examHistory = state.examHistory.slice(0, 25);
    addXp(60 + correct * 3);
    examView = 'review';
    saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  function renderQuestionCard(q, idx, isReviewMode) {
    const chosen = examAnswers[idx];
    const showExplain = isReviewMode || !!examRevealed[idx];
    const optLabels = ['A', 'B', 'C', 'D'];

    return `
      <div class="card" style="border-left:4px solid ${showExplain ? (chosen === q.answer ? 'var(--emerald)' : 'var(--danger)') : 'var(--primary)'}">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px">
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <span class="badge badge-blue">Câu ${idx + 1}/${activeExam.questions.length}</span>
            <span class="badge badge-purple">${esc(q.domain || 'TOEIC')}</span>
            ${q.lessonRef ? `<span class="badge badge-amber">Bài gốc: ${esc(q.lessonRef.replace('_', '.'))}</span>` : ''}
          </div>
          ${!isReviewMode ? `
            <button class="btn btn-sm" data-flag-q="${idx}">
              ${examFlags[idx] ? '🚩 Đã gắn cờ xem lại' : '🏳️ Đánh dấu phân vân'}
            </button>
          ` : ''}
        </div>

        ${q.audioScript ? `
          <div style="background:var(--surface-2);border:1px solid var(--border-strong);border-radius:11px;padding:14px;margin-bottom:12px">
            <div style="font-weight:800;font-size:13.5px;color:var(--primary);margin-bottom:6px">
              🎧 Phần Nghe TOEIC / Tech Call — Bấm nút để nghe đoạn hội thoại:
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
              <button type="button" class="btn btn-sm btn-primary" data-speak="${encodeURIComponent(q.audioScript)}" data-rate="1">▶️ Nghe chuẩn (1.0x)</button>
              <button type="button" class="btn btn-sm btn-emerald" data-speak="${encodeURIComponent(q.audioScript)}" data-rate="0.8">🐢 Nghe chậm (0.8x)</button>
            </div>
            ${showExplain ? `
              <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--border-strong);font-size:13.5px">
                <strong>📜 Transcript (Lời thoại gốc):</strong> ${richFmt(q.audioScript)}
              </div>
            ` : ''}
          </div>
        ` : ''}

        ${q.passage ? `
          <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:11px;padding:14px 16px;margin-bottom:12px;white-space:pre-line;font-size:13.8px;font-family:'Segoe UI',Inter,sans-serif">
            ${richFmt(q.passage)}
          </div>
        ` : ''}

        <div style="font-size:15.5px;font-weight:750;margin-bottom:12px">${richFmt(q.q)}</div>

        ${(q.options || []).map((opt, oIdx) => {
          let cls = 'quiz-opt';
          if (showExplain) {
            if (oIdx === q.answer) cls += ' correct';
            else if (chosen === oIdx) cls += ' wrong';
          } else if (chosen === oIdx) {
            cls += ' selected';
          }
          return `
            <button type="button" class="${cls}" ${isReviewMode ? 'disabled' : ''} data-exam-pick="${idx}" data-oidx="${oIdx}">
              <span style="font-weight:800">${optLabels[oIdx]}.</span>
              <span>${esc(opt.replace(/^\([A-D]\)\s*/i, ''))}</span>
            </button>
          `;
        }).join('')}

        ${!isReviewMode && examMode === 'practice' ? `
          <div style="margin-top:8px">
            <button type="button" class="btn btn-sm" data-reveal-exam-q="${idx}">
              ${examRevealed[idx] ? 'Ẩn lời giải' : '👨‍🏫 Xem Thầy chữa ngay câu này'}
            </button>
          </div>
        ` : ''}

        ${showExplain ? `
          <div style="margin-top:14px;background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:14px 16px;font-size:13.6px;display:flex;flex-direction:column;gap:8px">
            <div style="font-weight:800;color:var(--primary)">👨‍🏫 PHƯƠNG PHÁP THẦY CHỮA ĐỀ 4 BƯỚC:</div>
            ${q.step1Keyword ? `<div>🎯 <strong>${richFmt(q.step1Keyword)}</strong></div>` : ''}
            ${q.step2Explain ? `<div>✅ <strong>${richFmt(q.step2Explain)}</strong></div>` : ''}
            ${q.step3Distractors ? `<div>❌ <strong>${richFmt(q.step3Distractors)}</strong></div>` : ''}
            ${q.step4Tip ? `<div>💡 <strong>${richFmt(q.step4Tip)}</strong></div>` : ''}
            ${q.lessonRef ? `
              <div style="padding-top:6px">
                <button type="button" class="btn btn-sm btn-primary" data-open-lesson="${esc(q.lessonRef)}">
                  📖 Mở lại bài giảng gốc (${esc(q.lessonRef.replace('_', '.'))}) để ôn sâu
                </button>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderExamsPage() {
    const exams = window.MOCK_EXAMS || [];
    const mistakeList = Object.values(state.mistakes || {});

    if (examView === 'session' && activeExam) {
      const qs = activeExam.questions;
      const answeredCount = Object.keys(examAnswers).length;
      return `
        <div class="card" style="position:sticky;top:10px;z-index:40">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
            <div>
              <strong style="font-size:16px">${esc(activeExam.title)}</strong>
              <div style="font-size:12.5px;color:var(--text-muted)">Đã làm: ${answeredCount}/${qs.length} câu</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              ${examMode === 'timed' ? `<span class="badge badge-danger" style="font-size:14px;padding:6px 12px">⏱️ <span id="exam-timer-clock">${formatClock(examSecondsLeft)}</span></span>` : '<span class="badge badge-emerald">Chế độ Luyện đề mở</span>'}
              <button class="btn btn-sm" data-toggle-exam-layout="1">${examSingleView ? '📄 Xem toàn trang' : '🎯 Xem từng câu'}</button>
              <button class="btn btn-sm btn-primary" data-submit-exam="1">🏁 Nộp bài & Chấm điểm</button>
              <button class="btn btn-sm" data-exit-exam="1">Thoát</button>
            </div>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:10px">
            ${qs.map((_, i) => `
              <button type="button" class="btn btn-sm" style="min-width:34px;padding:4px 7px;${examIdx === i && examSingleView ? 'border-color:var(--primary);font-weight:800;' : ''}${examAnswers[i] !== undefined ? 'background:var(--primary-soft);color:var(--primary);' : ''}" data-jump-exam-q="${i}">
                ${examFlags[i] ? '🚩' : ''}${i + 1}
              </button>
            `).join('')}
          </div>
        </div>

        ${examSingleView ? `
          ${renderQuestionCard(qs[examIdx], examIdx, false)}
          <div style="display:flex;justify-content:space-between;margin-top:10px">
            <button class="btn" ${examIdx === 0 ? 'disabled' : ''} data-jump-exam-q="${examIdx - 1}">← Câu trước</button>
            ${examIdx < qs.length - 1
              ? `<button class="btn btn-primary" data-jump-exam-q="${examIdx + 1}">Câu tiếp theo →</button>`
              : `<button class="btn btn-emerald" data-submit-exam="1">🏁 Nộp bài & Xem Thầy Chữa Đề</button>`}
          </div>
        ` : qs.map((q, i) => renderQuestionCard(q, i, false)).join('')}
      `;
    }

    if (examView === 'review' && activeExam && examSummary) {
      return `
        <div class="card" style="background:linear-gradient(135deg,#0b1f3f,#14532d);color:#fff;border:none">
          <span class="badge" style="background:rgba(255,255,255,0.2);color:#fde68a">KẾT QUẢ CHẤM THI & PHÂN TÍCH NĂNG LỰC</span>
          <h1 style="margin:8px 0 6px;font-size:24px">${esc(examSummary.title)}</h1>
          <div class="grid-4" style="margin-top:14px">
            <div style="background:rgba(255,255,255,0.1);padding:12px 14px;border-radius:11px">
              <div style="font-size:12px;opacity:0.8">Số câu đúng</div>
              <div style="font-size:24px;font-weight:800">${examSummary.correct}/${examSummary.total} (${examSummary.pct}%)</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);padding:12px 14px;border-radius:11px">
              <div style="font-size:12px;opacity:0.8">Quy đổi điểm TOEIC tương đương</div>
              <div style="font-size:24px;font-weight:800;color:#fde68a">~${examSummary.estToeic} / 990</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);padding:12px 14px;border-radius:11px">
              <div style="font-size:12px;opacity:0.8">Đánh giá mục tiêu 600+</div>
              <div style="font-size:16px;font-weight:800;margin-top:4px">${examSummary.estToeic >= 600 ? '✅ ĐẠT CHUẨN 600+!' : '💪 Cần ôn thêm câu sai'}</div>
            </div>
            <div style="background:rgba(255,255,255,0.1);padding:12px 14px;border-radius:11px">
              <div style="font-size:12px;opacity:0.8">Thời gian hoàn thành</div>
              <div style="font-size:22px;font-weight:800">${formatClock(examSummary.elapsed)}</div>
            </div>
          </div>
          <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
            <button class="btn" style="background:#fff;color:#0b1f3f;border:none" data-exit-exam="1">← Quay về Danh sách Đề thi</button>
          </div>
        </div>

        <div class="card">
          <h3 style="margin:0 0 10px">📊 Phân Tích Điểm Mạnh / Điểm Yếu Theo Kỹ Năng:</h3>
          <div class="grid-3">
            ${Object.entries(examSummary.domainStats).map(([dom, st]) => {
              const p = Math.round((st.ok / st.total) * 100);
              return `
                <div style="padding:11px 13px;border-radius:10px;border:1px solid var(--border);background:var(--surface-2)">
                  <div style="display:flex;justify-content:space-between;font-weight:700;font-size:13.5px">
                    <span>${esc(dom)}</span>
                    <span>${st.ok}/${st.total} (${p}%)</span>
                  </div>
                  <div class="xp-bar-track" style="background:var(--border)">
                    <div class="xp-bar-fill" style="width:${p}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        ${activeExam.questions.map((q, i) => renderQuestionCard(q, i, true)).join('')}
      `;
    }

    return `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div>
            <h1 style="margin:0;font-size:22px">🎯 Phòng Thi Thử TOEIC 600+ (Listening + Reading) & Sát Hạch Senior Java</h1>
            <p style="margin:4px 0 0;color:var(--text-muted);font-size:13.5px">
              Đầy đủ phần Nghe phát âm trực tiếp, Part 5, Part 6 Email đục lỗ, Part 7 Đọc hiểu và Thầy chữa đề chi tiết 4 bước từng câu.
            </p>
          </div>
          ${mistakeList.length ? `
            <button class="btn btn-primary" style="background:var(--danger);border-color:var(--danger)" data-start-revenge="1">
              📕 Làm Đề Phục Thù Sổ Tay Câu Sai (${mistakeList.length} câu)
            </button>
          ` : ''}
        </div>
      </div>

      <div class="grid-2">
        ${exams.map(ex => `
          <div class="card" style="margin-bottom:0;display:flex;flex-direction:column;justify-content:space-between;gap:12px">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px">
                <span class="badge ${ex.type === 'placement' ? 'badge-amber' : ex.type === 'java' ? 'badge-blue' : 'badge-purple'}">
                  ${ex.type === 'placement' ? '🧭 XẾP LỚP ĐẦU VÀO' : ex.type === 'java' ? '☕ SENIOR JAVA ENGLISH' : ex.type === 'speed' ? '⚡ TỐC ĐỘ 20S' : '🎯 CHUẨN ETS TOEIC 600+'}
                </span>
                <span style="font-size:12.5px;color:var(--text-muted)">⏱️ ${ex.minutes} phút • ${ex.questions?.length || 0} câu</span>
              </div>
              <h2 style="margin:0 0 6px;font-size:18px">${esc(ex.title)}</h2>
              <p style="margin:0;font-size:13.5px;color:var(--text-muted)">${esc(ex.subtitle || '')}</p>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;padding-top:10px;border-top:1px solid var(--border)">
              <button class="btn btn-sm btn-primary" data-run-exam="${esc(ex.id)}" data-mode="timed">⏱️ Thi bấm giờ</button>
              <button class="btn btn-sm" data-run-exam="${esc(ex.id)}" data-mode="practice">👨‍🏫 Luyện từng câu & Xem chữa ngay</button>
            </div>
          </div>
        `).join('')}
      </div>

      ${state.examHistory.length ? `
        <div class="card" style="margin-top:18px">
          <h3 style="margin:0 0 10px">📈 Lịch Sử Làm Đề Gần Đây</h3>
          <div style="overflow-x:auto">
            <table class="compare-table">
              <thead>
                <tr><th>Ngày</th><th>Bộ đề</th><th>Tỷ lệ đúng</th><th>Điểm TOEIC quy đổi</th><th>Thời gian</th></tr>
              </thead>
              <tbody>
                ${state.examHistory.map(h => `
                  <tr>
                    <td>${esc(h.date)}</td>
                    <td><strong>${esc(h.title)}</strong></td>
                    <td>${h.pct}%</td>
                    <td><span class="badge badge-emerald">~${h.estToeic} điểm</span></td>
                    <td>${formatClock(h.elapsed || 0)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}
    `;
  }

  /* ===================== PAGE 10: SETTINGS & QUICK SYNC ===================== */
  function encodeSyncString() {
    const payload = JSON.stringify(state);
    return 'JE600:' + btoa(unescape(encodeURIComponent(payload)));
  }

  function renderSyncPage() {
    return `
      <div class="card">
        <h1 style="margin:0 0 6px;font-size:22px">⚙️ Cài Đặt Giọng Đọc & Đồng Bộ Tiến Độ Đa Thiết Bị</h1>
        <p style="margin:0;color:var(--text-muted);font-size:13.5px">
          Toàn bộ tiến độ học, thẻ nhớ SRS và sổ tay câu sai được lưu an toàn 100% offline trên trình duyệt của bạn.
        </p>

        <div class="grid-2" style="margin-top:16px">
          <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:16px">
            <h3 style="margin:0 0 8px;font-size:16px">🔊 Giọng Phát Âm Mặc Định (TOEIC dùng cả Mỹ & Anh)</h3>
            <p style="font-size:13px;color:var(--text-muted);margin:0 0 10px">
              Đề thi TOEIC thật có cả giọng Mỹ (US) và giọng Anh (UK). Bạn có thể đổi qua lại để luyện tai quen với cả hai:
            </p>
            <div style="display:flex;gap:8px">
              <button class="btn ${state.accent === 'en-US' ? 'btn-primary' : ''}" data-set-accent="en-US">🇺🇸 Giọng Mỹ (en-US)</button>
              <button class="btn ${state.accent === 'en-GB' ? 'btn-primary' : ''}" data-set-accent="en-GB">🇬🇧 Giọng Anh (en-GB)</button>
            </div>
          </div>

          <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:16px">
            <h3 style="margin:0 0 8px;font-size:16px">📲 Chuyển Tiến Độ Máy Tính ↔ Điện Thoại Trong 3 Giây</h3>
            <p style="font-size:13px;color:var(--text-muted);margin:0 0 10px">
              Copy Mã Đồng Bộ bên dưới gửi qua Zalo/Saved Messages rồi dán vào thiết bị kia:
            </p>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-sm btn-primary" data-copy-sync="1">📋 Copy Mã Đồng Bộ Nhanh</button>
              <button class="btn btn-sm" data-import-sync="1">📥 Dán Mã Đồng Bộ Để Khôi Phục</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ===================== MASTER SHELL RENDER ===================== */
  function render() {
    const root = document.getElementById('root');
    if (!root) return;

    const allCards = getAllVocabCards();
    const dueCount = allCards.filter(c => isCardDue(c.id)).length;
    const rank = getRankTitle(state.xp || 0);
    const xpPct = Math.min(100, Math.round(((state.xp || 0) / rank.next) * 100));

    let mainHtml = '';
    if (page === 'home') mainHtml = renderHome();
    else if (page === 'grammar') mainHtml = renderTrackPage('grammar');
    else if (page === 'vocabulary') mainHtml = renderTrackPage('vocabulary');
    else if (page === 'lesson') mainHtml = renderLessonReader();
    else if (page === 'vocabvault') mainHtml = renderVocabVault();
    else if (page === 'srs') mainHtml = renderSrsPage();
    else if (page === 'labs') mainHtml = renderLabsPage();
    else if (page === 'javakit') mainHtml = renderJavaKitPage();
    else if (page === 'exams') mainHtml = renderExamsPage();
    else if (page === 'sync') mainHtml = renderSyncPage();

    root.innerHTML = `
      <div class="mobile-topbar">
        <div style="font-weight:800;font-size:16px">☕🇬🇧 JavaEng 600+</div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm" style="background:rgba(255,255,255,0.12);color:#fff;border:none" data-toggle-theme="1">
            ${state.theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button class="btn btn-sm" style="background:rgba(255,255,255,0.16);color:#fff;border:none" data-toggle-mobile-nav="1">
            ☰ Menu
          </button>
        </div>
      </div>
      <div class="mobile-backdrop ${mobileNavOpen ? 'open' : ''}" data-toggle-mobile-nav="1"></div>

      <div class="app-shell">
        <aside class="sidebar ${mobileNavOpen ? 'open' : ''}">
          <div class="brand-box">
            <div class="brand-title"><span>☕🇬🇧</span> <span>JavaEng 600+</span></div>
            <div class="brand-sub">Tiếng Anh Từ Gốc → TOEIC 600+ & Senior Java Quốc Tế</div>
          </div>

          <div class="streak-card">
            <div class="streak-row">
              <span>🔥 ${state.streak} ngày liên tiếp</span>
              <span style="color:#fde68a">${state.xp} XP</span>
            </div>
            <div style="font-size:11px;color:#9cb3d6;margin-top:3px">${esc(rank.title)}</div>
            <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${xpPct}%"></div></div>
          </div>

          <div class="nav-group-label">Lộ Trình Học Chính</div>
          <button class="nav-btn ${page === 'home' ? 'active' : ''}" data-nav="home">
            <span>🏠 Tổng quan & Lộ trình</span>
          </button>
          <button class="nav-btn ${page === 'grammar' ? 'active' : ''}" data-nav="grammar">
            <span>📘 Ngữ Pháp (Cơ bản → Cao)</span>
            <span class="nav-pill">24 bài</span>
          </button>
          <button class="nav-btn ${page === 'vocabulary' ? 'active' : ''}" data-nav="vocabulary">
            <span>📗 Từ Vựng (TOEIC & Java)</span>
            <span class="nav-pill">24 bài</span>
          </button>
          <button class="nav-btn ${page === 'lesson' ? 'active' : ''}" data-nav="lesson">
            <span>👨‍🏫 Phòng Học Chi Tiết</span>
            <span class="nav-pill">${esc(window.LESSONS.find(x => x.id === selectedLessonId)?.code || 'G1.1')}</span>
          </button>

          <div class="nav-group-label">Thực Hành Đa Phương Pháp</div>
          <button class="nav-btn ${page === 'srs' ? 'active' : ''}" data-nav="srs">
            <span>🧠 Flashcard Anki SRS</span>
            <span class="nav-pill ${dueCount > 0 ? 'due' : ''}">${dueCount}</span>
          </button>
          <button class="nav-btn ${page === 'vocabvault' ? 'active' : ''}" data-nav="vocabvault">
            <span>📖 Từ điển 240+ từ cốt lõi</span>
          </button>
          <button class="nav-btn ${page === 'labs' ? 'active' : ''}" data-nav="labs">
            <span>🎧 Dictation & 🎙️ Nói ELSA</span>
          </button>
          <button class="nav-btn ${page === 'javakit' ? 'active' : ''}" data-nav="javakit">
            <span>☕ Mẫu câu Senior Java</span>
          </button>
          <button class="nav-btn ${page === 'exams' ? 'active' : ''}" data-nav="exams">
            <span>🎯 Thi Thử TOEIC 600+</span>
            <span class="nav-pill">${(window.MOCK_EXAMS || []).length} đề</span>
          </button>
          <button class="nav-btn ${page === 'sync' ? 'active' : ''}" data-nav="sync">
            <span>⚙️ Giọng đọc & Đồng bộ</span>
          </button>

          <div class="voice-box">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span>⏱️ Pomodoro: <strong id="pomo-clock">${formatClock(pomoSeconds)}</strong></span>
              <button class="mini-chip" style="flex:0;padding:3px 8px" data-toggle-pomo="1">${pomoRunning ? '⏸' : '▶'}</button>
            </div>
            <div class="voice-toggle-row">
              <button class="mini-chip ${state.accent === 'en-US' ? 'active' : ''}" data-set-accent="en-US">🇺🇸 US</button>
              <button class="mini-chip ${state.accent === 'en-GB' ? 'active' : ''}" data-set-accent="en-GB">🇬🇧 UK</button>
              <button class="mini-chip" data-toggle-theme="1">${state.theme === 'dark' ? '☀️ Sáng' : '🌙 Tối'}</button>
            </div>
          </div>
        </aside>

        <main class="main-area">
          ${mainHtml}
        </main>
      </div>
    `;

    bindDynamicInputs();
  }

  /* ===================== EVENT DELEGATION & INPUT BINDINGS ===================== */
  function bindDynamicInputs() {
    const trackInp = document.getElementById('track-search-input');
    if (trackInp) {
      trackInp.oninput = e => {
        trackSearch = e.target.value;
        const pos = e.target.selectionStart;
        render();
        const el = document.getElementById('track-search-input');
        if (el) { el.focus(); el.setSelectionRange(pos, pos); }
      };
    }

    const vaultInp = document.getElementById('vault-search-input');
    if (vaultInp) {
      vaultInp.oninput = e => {
        vaultSearch = e.target.value;
        const pos = e.target.selectionStart;
        render();
        const el = document.getElementById('vault-search-input');
        if (el) { el.focus(); el.setSelectionRange(pos, pos); }
      };
    }

    const vModSel = document.getElementById('vault-mod-select');
    if (vModSel) vModSel.onchange = e => { vaultModule = e.target.value; render(); };

    const vSrsSel = document.getElementById('vault-srs-select');
    if (vSrsSel) vSrsSel.onchange = e => { vaultSrsFilter = e.target.value; render(); };

    const dicCatSel = document.getElementById('dic-cat-select');
    if (dicCatSel) dicCatSel.onchange = e => { dicCategory = e.target.value; dicResult = null; dicInput = ''; render(); };

    const spkCatSel = document.getElementById('spk-cat-select');
    if (spkCatSel) spkCatSel.onchange = e => { spkCategory = e.target.value; spkResult = null; spkTranscript = ''; render(); };

    const dicInp = document.getElementById('dic-user-input');
    if (dicInp) dicInp.oninput = e => { dicInput = e.target.value; };

    ['yesterday', 'today', 'blocker'].forEach(k => {
      const inp = document.getElementById('st-' + k);
      if (inp) {
        inp.oninput = e => {
          standupDraft[k] = e.target.value;
          const pos = e.target.selectionStart;
          render();
          const again = document.getElementById('st-' + k);
          if (again) { again.focus(); again.setSelectionRange(pos, pos); }
        };
      }
    });
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('button, [data-flip-srs], [data-toggle-mobile-nav]');
    if (!btn) return;

    if (btn.dataset.speak) {
      e.stopPropagation();
      const txt = decodeURIComponent(btn.dataset.speak);
      const rate = parseFloat(btn.dataset.rate || '1');
      window.speakText(txt, rate);
      return;
    }

    if (btn.dataset.nav) {
      navigate(btn.dataset.nav);
      return;
    }

    if (btn.dataset.toggleMobileNav) {
      mobileNavOpen = !mobileNavOpen;
      render();
      return;
    }

    if (btn.dataset.toggleTheme) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      saveState();
      render();
      return;
    }

    if (btn.dataset.setAccent) {
      state.accent = btn.dataset.setAccent;
      saveState();
      window.speakText(state.accent === 'en-GB' ? 'British English voice activated.' : 'American English voice activated.', 1.0);
      render();
      return;
    }

    if (btn.dataset.togglePomo) {
      togglePomodoro();
      return;
    }

    if (btn.dataset.openLesson) {
      openLesson(btn.dataset.openLesson);
      return;
    }

    if (btn.dataset.sidebarTrack) {
      lessonSidebarTrack = btn.dataset.sidebarTrack;
      render();
      return;
    }

    if (btn.dataset.trackLevel) {
      trackLevelFilter = btn.dataset.trackLevel;
      render();
      return;
    }

    if (btn.dataset.exTag) {
      exampleTagFilter = btn.dataset.exTag;
      render();
      return;
    }

    if (btn.dataset.toggleHideVi) {
      state.hideExVi = !state.hideExVi;
      saveState();
      render();
      return;
    }

    if (btn.dataset.toggleBookmark) {
      const id = btn.dataset.toggleBookmark;
      state.bookmarks[id] = !state.bookmarks[id];
      if (!state.bookmarks[id]) delete state.bookmarks[id];
      saveState();
      render();
      return;
    }

    if (btn.dataset.toggleDone) {
      const id = btn.dataset.toggleDone;
      if (state.done[id]) {
        delete state.done[id];
      } else {
        state.done[id] = true;
        addXp(25);
      }
      saveState();
      render();
      return;
    }

    if (btn.dataset.pinCard) {
      try {
        const obj = JSON.parse(decodeURIComponent(btn.dataset.pinCard));
        saveCustomFlashcard(obj.front, obj.back, obj.note, obj.lessonId);
      } catch (_) {}
      return;
    }

    if (btn.dataset.srsModule) {
      srsDeckFilter = btn.dataset.srsModule;
      srsFlipped = false;
      srsCurrentCardId = null;
      navigate('srs');
      return;
    }

    // Sentence Chunking Mini-Drill
    if (btn.dataset.pickChunk !== undefined) {
      const lid = btn.dataset.lesson;
      const idx = Number(btn.dataset.pickChunk);
      chunkSelected[lid] = [...(chunkSelected[lid] || []), idx];
      delete chunkFeedback[lid];
      render();
      return;
    }

    if (btn.dataset.unpickChunk !== undefined) {
      const lid = btn.dataset.lesson;
      const pos = Number(btn.dataset.unpickChunk);
      const arr = (chunkSelected[lid] || []).slice();
      arr.splice(pos, 1);
      chunkSelected[lid] = arr;
      delete chunkFeedback[lid];
      render();
      return;
    }

    if (btn.dataset.resetChunk) {
      const lid = btn.dataset.resetChunk;
      delete chunkShuffled[lid];
      chunkSelected[lid] = [];
      delete chunkFeedback[lid];
      render();
      return;
    }

    if (btn.dataset.checkChunk) {
      const lid = btn.dataset.checkChunk;
      const det = window.LESSON_DETAILS[lid];
      const sOrder = det?.miniDrill?.sentenceOrder;
      if (sOrder) {
        const shuf = chunkShuffled[lid] || [];
        const userSentence = (chunkSelected[lid] || []).map(i => shuf[i]).join(' ').trim();
        const norm = s => s.replace(/\s+/g, ' ').trim().toLowerCase();
        const ok = norm(userSentence) === norm(sOrder.answer) || (sOrder.altAnswer && norm(userSentence) === norm(sOrder.altAnswer));
        if (ok) {
          chunkFeedback[lid] = { ok: true, msg: `🎉 Xuất sắc! Câu chuẩn: "${sOrder.answer}" (+15 XP)` };
          window.speakText(sOrder.answer, 1.0);
          addXp(15);
        } else {
          chunkFeedback[lid] = { ok: false, msg: `Chưa khớp hoàn toàn. Đáp án chuẩn là: "${sOrder.answer}"` };
        }
        render();
      }
      return;
    }

    if (btn.dataset.checkFill) {
      const lid = btn.dataset.checkFill;
      const inp = document.getElementById('fill-input-' + lid);
      const val = (inp ? inp.value : '').trim();
      fillInputs[lid] = val;
      const fBlank = window.LESSON_DETAILS[lid]?.miniDrill?.fillBlank;
      if (fBlank) {
        const validList = (fBlank.accepted || [fBlank.answer]).map(x => x.toLowerCase().trim());
        const ok = validList.includes(val.toLowerCase());
        fillFeedback[lid] = { ok };
        if (ok) addXp(10);
        render();
      }
      return;
    }

    // Lesson Quiz
    if (btn.dataset.lessonQuiz) {
      const lid = btn.dataset.lessonQuiz;
      const qIdx = Number(btn.dataset.qidx);
      const oIdx = Number(btn.dataset.oidx);
      state.lessonQuizAnswers[`${lid}_${qIdx}`] = oIdx;
      saveState();
      render();
      return;
    }

    if (btn.dataset.gradeLessonQuiz) {
      const lid = btn.dataset.gradeLessonQuiz;
      const quiz = window.LESSON_DETAILS[lid]?.quiz || [];
      let score = 0;
      quiz.forEach((q, qIdx) => {
        const chosen = state.lessonQuizAnswers[`${lid}_${qIdx}`];
        if (chosen === q.answer) {
          score += 1;
        } else {
          state.mistakes[`LQ_${lid}_${qIdx}`] = {
            id: `LQ_${lid}_${qIdx}`,
            domain: lid.startsWith('G') ? 'Part 5 Grammar' : 'Part 5 Vocab',
            lessonRef: lid,
            q: q.q,
            options: q.options,
            answer: q.answer,
            step1Keyword: 'Câu hỏi ôn tập từ bài giảng ' + lid.replace('_', '.'),
            step2Explain: q.explain
          };
        }
      });
      lessonQuizRevealed[lid] = true;
      state.lessonQuizScores[lid] = { score, total: quiz.length };
      if (score === quiz.length) state.done[lid] = true;
      addXp(15 + score * 10);
      saveState();
      render();
      return;
    }

    if (btn.dataset.saveNote) {
      const lid = btn.dataset.saveNote;
      const box = document.getElementById('lesson-note-box');
      if (box) {
        state.notes[lid] = box.value;
        saveState();
        alert('Đã lưu ghi chú cho bài học ' + lid.replace('_', '.'));
      }
      return;
    }

    // SRS Studio
    if (btn.dataset.srsDeck) {
      srsDeckFilter = btn.dataset.srsDeck;
      srsFlipped = false;
      srsCurrentCardId = null;
      render();
      return;
    }

    if (btn.dataset.flipSrs) {
      srsFlipped = !srsFlipped;
      render();
      return;
    }

    if (btn.dataset.rateSrs) {
      rateSrsCard(btn.dataset.rateSrs, Number(btn.dataset.grade));
      return;
    }

    // Labs (Dictation & Speaking)
    if (btn.dataset.labTab) {
      labTab = btn.dataset.labTab;
      render();
      return;
    }

    if (btn.dataset.selectDic) {
      activeDicId = btn.dataset.selectDic;
      dicInput = '';
      dicResult = null;
      render();
      return;
    }

    if (btn.dataset.checkDic) {
      const curDic = (window.PRACTICE_LABS?.dictation || []).find(x => x.id === activeDicId);
      if (curDic) {
        const res = evaluateWordMatch(curDic.audioText, dicInput);
        dicResult = res;
        state.dictationDone[curDic.id] = Math.max(state.dictationDone[curDic.id] || 0, res.pct);
        addXp(15);
        saveState();
        render();
      }
      return;
    }

    if (btn.dataset.revealDic) {
      const curDic = (window.PRACTICE_LABS?.dictation || []).find(x => x.id === activeDicId);
      if (curDic) {
        dicInput = stripMarkdown(curDic.audioText);
        dicResult = evaluateWordMatch(curDic.audioText, dicInput);
        render();
      }
      return;
    }

    if (btn.dataset.selectSpk) {
      activeSpkId = btn.dataset.selectSpk;
      spkResult = null;
      spkTranscript = '';
      render();
      return;
    }

    if (btn.dataset.selfShadowOk) {
      const id = btn.dataset.selfShadowOk;
      state.speakingScores[id] = Math.max(state.speakingScores[id] || 0, 90);
      addXp(15);
      saveState();
      render();
      return;
    }

    if (btn.dataset.startMic) {
      const curSpk = (window.PRACTICE_LABS?.speaking || []).find(x => x.id === activeSpkId);
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) {
        spkResult = { error: 'Trình duyệt hiện tại không hỗ trợ Web Speech Recognition trực tiếp. Hãy mở trên Google Chrome / Microsoft Edge hoặc bấm nút "Tôi đã đọc đuổi Shadowing 3 lần" bên cạnh.' };
        render();
        return;
      }
      if (!curSpk || spkListeningMic) return;
      const rec = new SpeechRec();
      rec.lang = state.accent || 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      spkListeningMic = true;
      spkResult = null;
      render();

      rec.onresult = ev => {
        spkListeningMic = false;
        const said = ev.results?.[0]?.[0]?.transcript || '';
        spkTranscript = said;
        const res = evaluateWordMatch(curSpk.en, said);
        spkResult = res;
        state.speakingScores[curSpk.id] = Math.max(state.speakingScores[curSpk.id] || 0, res.pct);
        addXp(20);
        saveState();
        render();
      };
      rec.onerror = err => {
        spkListeningMic = false;
        spkResult = { error: 'Không nhận được tín hiệu Micro (' + (err.error || 'unknown') + '). Hãy cấp quyền Micro cho trình duyệt hoặc luyện đọc Shadowing theo nút loa.' };
        render();
      };
      rec.onend = () => {
        if (spkListeningMic) {
          spkListeningMic = false;
          render();
        }
      };
      rec.start();
      return;
    }

    // Java Kit
    if (btn.dataset.javakitTab) {
      activeJavaKitId = btn.dataset.javakitTab;
      render();
      return;
    }

    if (btn.dataset.copyText) {
      const txt = decodeURIComponent(btn.dataset.copyText);
      navigator.clipboard?.writeText(txt);
      btn.textContent = '✅ Đã copy';
      setTimeout(() => render(), 900);
      return;
    }

    // Exams
    if (btn.dataset.startPlacement) {
      const pl = (window.MOCK_EXAMS || []).find(x => x.type === 'placement') || (window.MOCK_EXAMS || [])[0];
      if (pl) startExam(pl, 'timed');
      return;
    }

    if (btn.dataset.runExam) {
      const ex = (window.MOCK_EXAMS || []).find(x => x.id === btn.dataset.runExam);
      if (ex) startExam(ex, btn.dataset.mode || 'timed');
      return;
    }

    if (btn.dataset.startRevenge) {
      const qs = Object.values(state.mistakes || {});
      if (qs.length) {
        startExam({
          id: 'REVENGE_MISTAKES',
          title: '📕 Đề Phục Thù Sổ Tay Câu Sai',
          subtitle: 'Làm đúng để xóa câu sai khỏi sổ tay',
          type: 'revenge',
          minutes: Math.max(10, qs.length),
          questions: qs
        }, 'practice');
      }
      return;
    }

    if (btn.dataset.examPick !== undefined) {
      examAnswers[Number(btn.dataset.examPick)] = Number(btn.dataset.oidx);
      render();
      return;
    }

    if (btn.dataset.flagQ !== undefined) {
      const idx = Number(btn.dataset.flagQ);
      examFlags[idx] = !examFlags[idx];
      render();
      return;
    }

    if (btn.dataset.revealExamQ !== undefined) {
      const idx = Number(btn.dataset.revealExamQ);
      examRevealed[idx] = !examRevealed[idx];
      render();
      return;
    }

    if (btn.dataset.jumpExamQ !== undefined) {
      examIdx = Number(btn.dataset.jumpExamQ);
      render();
      return;
    }

    if (btn.dataset.toggleExamLayout) {
      examSingleView = !examSingleView;
      render();
      return;
    }

    if (btn.dataset.submitExam) {
      submitExam();
      return;
    }

    if (btn.dataset.exitExam) {
      clearInterval(examTimer);
      examView = 'hub';
      activeExam = null;
      render();
      return;
    }

    // Sync
    if (btn.dataset.copySync) {
      const code = encodeSyncString();
      navigator.clipboard?.writeText(code);
      alert('Đã copy Mã Đồng Bộ Nhanh (JE600:...) vào bộ nhớ tạm!');
      return;
    }

    if (btn.dataset.importSync) {
      const raw = prompt('Dán Mã Đồng Bộ Nhanh (bắt đầu bằng JE600:) vào đây:');
      if (raw && raw.trim().startsWith('JE600:')) {
        try {
          const json = decodeURIComponent(escape(atob(raw.trim().slice(6))));
          const parsed = JSON.parse(json);
          state = { ...defaultState(), ...parsed };
          applyTheme();
          saveState();
          render();
          alert('Đã khôi phục tiến độ học thành công!');
        } catch (_) {
          alert('Mã đồng bộ không hợp lệ!');
        }
      }
      return;
    }
  });

  // Keyboard shortcut Space to flip SRS card
  document.addEventListener('keydown', e => {
    if (page === 'srs' && e.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      srsFlipped = !srsFlipped;
      render();
    }
  });

  // Register Service Worker when served over HTTP(S)
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  render();
})();
