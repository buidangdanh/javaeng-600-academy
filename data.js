/* JavaEng TOEIC 600+ Academy — Giáo trình Tiếng Anh Toàn diện cho Senior Java Developer
 * Kết hợp tinh hoa 7 phương pháp học hiện đại:
 * 1. Anki (Spaced Repetition SM-2 & Active Recall)
 * 2. Prep / Hackers TOEIC (Bài giảng thầy đứng lớp + Mẹo phản xạ Part 5-6-7 trong 20 giây)
 * 3. Memrise (Mnemonics — Mẹo nhớ liên tưởng sang tư duy lập trình Java / OOP / System Design)
 * 4. Cake / YouGlish (Học theo Cụm Collocations & Kho câu ví dụ thực tế nghe 1.0x / 0.75x)
 * 5. Duolingo / Busuu (Lộ trình CEFR A1 -> B2, Sắp xếp cụm câu & Streak gamification)
 * 6. Study4 (Dictation — Nghe chép chính tả bắt âm đuôi -s/-ed & nối âm)
 * 7. ELSA Speak (Luyện phát âm IPA & Kiểm tra giọng nói trực tiếp qua Microphone)
 */

window.APP_META = {
  name: 'JavaEng 600+ Academy',
  subtitle: 'Tiếng Anh Từ Gốc Đến TOEIC 600+ & Giao Tiếp Thực Chiến Senior Java',
  version: '1.0.0'
};

window.APP_METHODS = [
  {
    app: 'Anki (SM-2 SRS)',
    icon: '🧠',
    feature: 'Lặp lại ngắt quãng & Gợi nhớ chủ động (Active Recall)',
    appliedHow: 'Tích hợp Phòng Flashcard thông minh tự tính chu kỳ quên (1 phút → 1 ngày → 3 ngày → 7 ngày → 21 ngày) cho hơn 260+ từ vựng cốt lõi & mọi câu ví dụ bạn bấm lưu.'
  },
  {
    app: 'Memrise',
    icon: '💡',
    feature: 'Mnemonics — Mẹo nhớ liên tưởng bắc cầu tư duy',
    appliedHow: 'Mọi quy tắc ngữ pháp & từ vựng đều gắn "Java Mental Model" (ví dụ: Present Perfect = State còn sống trên Heap; Past Simple = Log lịch sử đã đóng file).'
  },
  {
    app: 'Cake & YouGlish',
    icon: '🔊',
    feature: 'Chunking (Học theo cụm) & Đa ngữ cảnh nghe 1x / 0.75x',
    appliedHow: 'Mỗi bài giảng có 15–35+ câu ví dụ song ngữ thực tế (TOEIC + Daily Standup + Code Review + System Design) kèm nút đọc giọng Mỹ/Anh chuẩn và chế độ nghe chậm 0.75x.'
  },
  {
    app: 'Duolingo & Busuu',
    icon: '🧩',
    feature: 'Chia nhỏ cấp độ CEFR (A1 → B2) & Lắp ghép câu tương tác',
    appliedHow: 'Cuối mỗi bài giảng có bài tập kéo/bấm sắp xếp cụm từ thành câu hoàn chỉnh (Sentence Builder) + Điền từ phản xạ + Chuỗi ngày học (Streak) & XP.'
  },
  {
    app: 'Study4',
    icon: '🎧',
    feature: 'Nghe chép chính tả (Listening Dictation)',
    appliedHow: 'Phòng Dictation chuyên biệt giúp rèn tai bắt chuẩn âm cuối (-s, -ed), từ nối và số liệu trong TOEIC Part 1–4 lẫn cuộc họp kỹ thuật.'
  },
  {
    app: 'ELSA Speak',
    icon: '🎙️',
    feature: 'Phiên âm IPA & Chấm điểm Phát âm / Shadowing trực tiếp',
    appliedHow: 'Phòng Luyện Nói dùng Web Speech Recognition chấm độ khớp từng từ khi bạn đọc câu Standup / Phỏng vấn Java hoặc câu giao tiếp TOEIC.'
  },
  {
    app: 'Prep.vn & Hackers TOEIC',
    icon: '🎯',
    feature: 'Mẹo giải đề 20 giây, Chữa đề 4 bước & Sổ tay câu sai',
    appliedHow: 'Phòng Thi Thử bấm giờ gồm Đề Test Đầu Vào + 4 Đề TOEIC 600+ & Senior Java có giải thích cặn kẽ vì sao đúng/sai và tự động gom câu sai thành Đề Phục Thù.'
  }
];

window.LEVELS = [
  {
    id: 'basic',
    code: 'Level 1 • Cơ bản (A1–A2)',
    target: 'Mất gốc → TOEIC 350+',
    color: 'blue',
    desc: 'Xây nền móng vững chắc: Giải phẫu câu 5 thành phần, từ loại, 3 thì sống còn và 150+ từ vựng văn phòng & giao tiếp hàng ngày.'
  },
  {
    id: 'intermediate',
    code: 'Level 2 • Trung cấp (B1)',
    target: 'TOEIC 400 → 550',
    color: 'emerald',
    desc: 'Làm chủ thì Hoàn thành, Câu bị động viết tài liệu kỹ thuật, V-ing/to-V và từ vựng thương mại cốt lõi thường gặp nhất trong đề ETS.'
  },
  {
    id: 'upper',
    code: 'Level 3 • Thực chiến TOEIC 600+ (B1+)',
    target: 'Vượt ngưỡng TOEIC 600–650+',
    color: 'purple',
    desc: 'Bứt phá điểm số với Mệnh đề quan hệ rút gọn, Liên từ/Giới từ, Câu điều kiện & trọn bộ từ vựng Kỹ sư Phần mềm, Agile/Scrum, Git, CI/CD, Debugging.'
  },
  {
    id: 'advanced',
    code: 'Level 4 • Senior Java & TOEIC 700+ (B2)',
    target: 'TOEIC 650–750+ & Global Senior Dev',
    color: 'amber',
    desc: 'Tinh hoa cấu trúc điểm cao (Giả định thức, Đảo ngữ, Song song, Mẹo Part 5-6 20s) và giao tiếp đẳng cấp Senior Java: System Design, thuyết phục khách hàng & phỏng vấn quốc tế.'
  }
];

window.TRACKS = [
  {
    id: 'grammar',
    label: '📘 Lộ trình Ngữ Pháp (Grammar)',
    shortLabel: 'Ngữ pháp',
    badge: '24 Bài giảng • Cơ bản → Nâng cao',
    desc: 'Học ngữ pháp bằng tư duy logic của lập trình viên Java: Công thức tường minh, nhận diện dấu hiệu trong 5 giây và hàng trăm câu ví dụ song ngữ.'
  },
  {
    id: 'vocabulary',
    label: '📗 Lộ trình Từ Vựng (Vocabulary)',
    shortLabel: 'Từ vựng',
    badge: '24 Bài giảng • 260+ Từ & Cụm từ cốt lõi',
    desc: 'Kết hợp Từ vựng vàng ETS TOEIC 600+ và Từ vựng chuyên ngành Senior Java / Agile / System Design — mỗi từ đều có IPA, mẹo nhớ, Collocation và cặp ví dụ thực tế.'
  }
];

window.MODULES = [
  /* ===================== TRỤ CỘT 1: NGỮ PHÁP (G1 -> G4) ===================== */
  {
    id: 'G1',
    track: 'grammar',
    level: 'basic',
    icon: '🧱',
    title: 'Học phần G1: Ngữ Pháp Nền Tảng — Giải Phẫu Câu & Từ Loại',
    desc: 'Hiểu bản chất câu tiếng Anh như cây cú pháp (AST) trong Java: không còn ghép từ cảm tính hay sợ câu dài.',
    lessons: [
      {
        id: 'G1_1',
        code: 'G1.1',
        title: 'Giải phẫu 5 Thành phần Câu (S-V-O-C-M) như đọc hàm Java',
        summary: 'Nắm trọn bộ khung Subject - Verb - Object - Complement - Modifier; phân biệt Nội động từ & Ngoại động từ để không bao giờ viết câu cụt hoặc thiếu to-be.',
        toeicFocus: 'TOEIC Part 5 (Xác định thành phần thiếu) & Part 7 (Tách lõi câu dài)'
      },
      {
        id: 'G1_2',
        code: 'G1.2',
        title: 'Danh từ (Nouns), Cụm Danh từ & Mạo từ (a / an / the)',
        summary: 'Vị trí vàng của Danh từ, quy tắc ghép Cụm danh từ ngược tiếng Việt (Compound Nouns), Danh từ đếm được vs Không đếm được hay bẫy nhất trong TOEIC (equipment, software, feedback, advice).',
        toeicFocus: 'TOEIC Part 5 (Đuôi danh từ -tion/-ment/-ness/-ity & Mạo từ)'
      },
      {
        id: 'G1_3',
        code: 'G1.3',
        title: 'Hệ thống Đại từ (Pronouns) — Biến tham chiếu không bao giờ Null',
        summary: 'Phân biệt rạch ròi Đại từ nhân xưng (I/me), Tính từ sở hữu vs Đại từ sở hữu (my code vs mine), Đại từ phản thân (myself, itself, by themselves) cực hay thi TOEIC.',
        toeicFocus: 'TOEIC Part 5 (Câu hỏi biến thể I / me / my / mine / myself)'
      },
      {
        id: 'G1_4',
        code: 'G1.4',
        title: 'Tính từ vs Trạng từ (Adj vs Adv) — Mỏ điểm số 1 TOEIC Part 5',
        summary: 'Công thức 3 giây điền đúng Adj hay Adv không cần dịch hết câu; hệ thống động từ nối (Linking Verbs: become, remain, seem, stay) và các trạng từ bẫy (hard vs hardly, late vs lately, high vs highly).',
        toeicFocus: 'TOEIC Part 5 (Chiếm 15–20% tổng số câu ngữ pháp!)'
      },
      {
        id: 'G1_5',
        code: 'G1.5',
        title: 'Giới từ Thời gian, Không gian & Phạm vi (in/on/at/by/until/within/throughout)',
        summary: 'Chấm dứt nhầm lẫn by Friday (trước hạn chót) vs until Friday (kéo dài suốt đến), during vs for vs within, và cách hẹn giờ họp / lịch deploy chuẩn quốc tế.',
        toeicFocus: 'TOEIC Part 5 & Part 6 (Giới từ thời gian, địa điểm & lịch trình)'
      },
      {
        id: 'G1_6',
        code: 'G1.6',
        title: '3 Thì Cốt lõi Sống còn: Hiện tại Đơn, Hiện tại Tiếp diễn & Quá khứ Đơn',
        summary: 'Dùng đúng thì khi mô tả kiến trúc hệ thống đang vận hành (Present Simple), tác vụ đang xử lý (Present Continuous) và báo cáo việc đã làm hôm qua trong Daily Standup (Past Simple).',
        toeicFocus: 'TOEIC Part 1 (Mô tả tranh), Part 2–3 & Part 5 (Chia thì cơ bản)'
      }
    ]
  },
  {
    id: 'G2',
    track: 'grammar',
    level: 'intermediate',
    icon: '⚙️',
    title: 'Học phần G2: Ngữ Pháp Trung Cấp — Hệ Thống Thì Hoàn Thành, Bị Động & Dạng Động Từ',
    desc: 'Xây dựng khả năng diễn đạt chuyên nghiệp chuẩn TOEIC 450–550 và viết tài liệu kỹ thuật mạch lạc.',
    lessons: [
      {
        id: 'G2_1',
        code: 'G2.1',
        title: 'Hiện tại Hoàn thành vs Quá khứ Đơn & Quá khứ Hoàn thành',
        summary: 'Hiểu tận gốc sự khác nhau giữa "We deployed the fix yesterday" và "We have deployed the fix to staging"; dấu hiệu since, for, already, yet, recently, over the past decade, by the time.',
        toeicFocus: 'TOEIC Part 5 & Part 6 (Câu hỏi chia thì xuất hiện mọi đề thi)'
      },
      {
        id: 'G2_2',
        code: 'G2.2',
        title: 'Các Cách Diễn Đạt Tương Lai & Tương Lai Hoàn Thành (by + mốc tương lai)',
        summary: 'Phân biệt will (quyết định tức thời/cam kết), be going to (kế hoạch đã chốt), Hiện tại đơn cho lịch tàu xe/release cố định và cấu trúc ăn điểm "By next quarter, our team will have migrated...".',
        toeicFocus: 'TOEIC Part 5 & Part 6 (Mốc thời gian tương lai & Mệnh đề when/as soon as)'
      },
      {
        id: 'G2_3',
        code: 'G2.3',
        title: 'Câu Bị Động (Passive Voice) Toàn Tập — Ngôn Ngữ Của Technical Docs & TOEIC',
        summary: 'Mẹo 3 giây chọn Chủ động hay Bị động nhờ xét Tân ngữ phía sau; bị động với Modal verbs (must be encrypted) và các cụm bị động đi kèm giới từ khác "by" (be interested in, be equipped with, be committed to).',
        toeicFocus: 'TOEIC Part 1, Part 5 & Part 6 + Viết Release Notes / Architecture Docs'
      },
      {
        id: 'G2_4',
        code: 'G2.4',
        title: 'Động từ Khuyết thiếu (Modals) & Giao tiếp Lịch sự trong Code Review',
        summary: 'Từ mệnh lệnh thô cứng ("You must fix this") sang góp ý đẳng cấp Senior ("Could we consider...", "This might cause a deadlock", "We ought to cache...", "should have checked").',
        toeicFocus: 'TOEIC Part 2–3 (Lời đề nghị/gợi ý) & Giao tiếp PR Review'
      },
      {
        id: 'G2_5',
        code: 'G2.5',
        title: 'Danh động từ (V-ing) vs Động từ nguyên mẫu (to V) & Những cái bẫy kinh điển',
        summary: 'Nhóm động từ đi với to-V (decide, expect, plan, afford), nhóm đi với V-ing (avoid, consider, postpone, suggest, recommend) và siêu bẫy TOEIC: look forward to + V-ing, be dedicated to + V-ing, be used to + V-ing!',
        toeicFocus: 'TOEIC Part 5 (Top chủ đề phân loại mốc 550–650 điểm)'
      },
      {
        id: 'G2_6',
        code: 'G2.6',
        title: 'Phân từ Hiện tại (V-ing) vs Phân từ Quá khứ (V-ed) làm Tính từ',
        summary: 'Tại sao nói "a confusing stack trace" nhưng lại là "a confused developer"? Tại sao là "an updated configuration", "running threads", "a dedicated server"? Quy tắc bản chất Gây ra vs Chịu tác động.',
        toeicFocus: 'TOEIC Part 5 (Cặp tính từ đuôi -ing vs -ed trước danh từ)'
      }
    ]
  },
  {
    id: 'G3',
    track: 'grammar',
    level: 'upper',
    icon: '🚀',
    title: 'Học phần G3: Ngữ Pháp Cốt Lõi TOEIC 600+ — Mệnh Đề Phức, Liên Từ & Điều Kiện',
    desc: 'Chinh phục trọn vẹn các cấu trúc câu ghép và câu phức giúp đọc nhanh TOEIC Part 7 và nói/viết logic sắc bén.',
    lessons: [
      {
        id: 'G3_1',
        code: 'G3.1',
        title: 'Sự Hòa Hợp Chủ Ngữ – Động Từ (Subject-Verb Agreement) & Bẫy Chủ Ngữ Dài',
        summary: 'Kỹ thuật gạch bỏ cụm giới từ nhiễu (of/in/with/along with) để bắt trúng Chủ ngữ thật; phân biệt the number of (số ít) vs a number of (số nhiều), each/every, neither...nor.',
        toeicFocus: 'TOEIC Part 5 & Part 6 (Bẫy chia động từ số ít / số nhiều)'
      },
      {
        id: 'G3_2',
        code: 'G3.2',
        title: 'Cấp So Sánh (Bằng, Hơn, Nhất, Kép) & Nhấn Mạnh Mức Độ (much / even / by far)',
        summary: 'So sánh hiệu năng kỹ thuật (latency, throughput, memory footprint), các từ nhấn mạnh trước so sánh hơn (much/far/significantly faster) và cấu trúc "The more..., the more...".',
        toeicFocus: 'TOEIC Part 5 & Đánh giá Trade-off trong System Design'
      },
      {
        id: 'G3_3',
        code: 'G3.3',
        title: 'Liên Từ vs Giới Từ vs Trạng Từ Liên Kết (Although / Despite / However)',
        summary: 'Bảng đối chiếu kim cương: Although/Even though (+ Mệnh đề) vs Despite/In spite of (+ Cụm danh từ/V-ing); Because vs Because of/Due to; While vs During; Unless, Provided that, Otherwise, Therefore.',
        toeicFocus: 'TOEIC Part 5 & Part 6 (Dạng bài xuất hiện 4–6 câu trong MỌI đề TOEIC!)'
      },
      {
        id: 'G3_4',
        code: 'G3.4',
        title: 'Mệnh Đề Quan Hệ (who, whom, whose, which, that, where, when)',
        summary: 'Cách nối 2 câu đơn thành 1 câu chuyên nghiệp; mẹo chọn nhanh who vs whom vs whose (sở hữu) vs which vs where (trạng từ nơi chốn = in/at which).',
        toeicFocus: 'TOEIC Part 5, Part 6 & Viết mô tả kiến trúc Microservices'
      },
      {
        id: 'G3_5',
        code: 'G3.5',
        title: 'Rút Gọn Mệnh Đề Quan Hệ (V-ing, V-ed/P2, to V) — Chìa Khóa Đọc Nhanh Part 7',
        summary: 'Giải mã bí mật vì sao câu tiếng Anh thương mại & kỹ thuật lại có 2 động từ đứng gần nhau ("Requests sent to the gateway are validated..."); rút gọn chủ động V-ing, bị động P2 và số thứ tự the first/only + to V.',
        toeicFocus: 'TOEIC Part 5 (Điền V-ing hay V-ed rút gọn) & Tăng gấp đôi tốc độ đọc Part 7'
      },
      {
        id: 'G3_6',
        code: 'G3.6',
        title: 'Câu Điều Kiện (Loại 0, 1, 2, 3) & Đảo Ngữ Câu Điều Kiện Chuẩn TOEIC (Should / Were / Had)',
        summary: 'Tư duy if-else của lập trình viên áp sang tiếng Anh; nắm chắc câu mở đầu email kinh điển của TOEIC: "Should you have any questions, please contact..." (= If you should have...).',
        toeicFocus: 'TOEIC Part 5, Part 6, Part 7 (Email chăm sóc khách hàng & Postmortem)'
      }
    ]
  },
  {
    id: 'G4',
    track: 'grammar',
    level: 'advanced',
    icon: '👑',
    title: 'Học phần G4: Ngữ Pháp Nâng Cao TOEIC 650–750+ & Viết Kỹ Thuật Senior Java',
    desc: 'Làm chủ các cấu trúc nâng cao giúp bứt tốc điểm số Reading và viết Email, Pull Request, ADR thuyết phục như kỹ sư quốc tế.',
    lessons: [
      {
        id: 'G4_1',
        code: 'G4.1',
        title: 'Mệnh Đề Danh Ngữ (what, whether, that, how) & Câu Hỏi Gián Tiếp Lịch Sự',
        summary: 'Phân biệt that (rằng - câu đã đủ thành phần) vs what (điều mà - vừa làm từ nối vừa làm S/O); giữ trật tự S + V không đảo trợ động từ trong câu hỏi lịch sự ("Could you let me know when the API will be ready?").',
        toeicFocus: 'TOEIC Part 5, Part 6 & Hỏi thông tin khách hàng / Product Owner'
      },
      {
        id: 'G4_2',
        code: 'G4.2',
        title: 'Giả Định Thức (Subjunctive Mood) — Bẫy Ngữ Pháp Tinh Vi Nhất TOEIC 600+',
        summary: 'Tại sao lại viết "The CTO recommended that the service BE deployed" chứ không phải "is deployed"? Công thức bất biến với suggest, recommend, insist, require, essential, mandatory, imperative + that + S + (should) + V-nguyên-thể!',
        toeicFocus: 'TOEIC Part 5 (Câu lấy điểm 650–750+ khiến 80% thí sinh mất điểm oan)'
      },
      {
        id: 'G4_3',
        code: 'G4.3',
        title: 'Cấu Trúc Cầu Khiến (have/get sth done) & Đảo Ngữ Nhấn Mạnh (Not only / Only after)',
        summary: 'Phân biệt tự mình làm vs thuê/nhờ hệ thống khác xử lý ("have the security team audit the code"); đảo ngữ với Not only... but also, Rarely, Seldom, Only when.',
        toeicFocus: 'TOEIC Part 5, Part 7 & Thuyết trình kỹ thuật ấn tượng'
      },
      {
        id: 'G4_4',
        code: 'G4.4',
        title: 'Rút Gọn Mệnh Đề Trạng Ngữ (Participle Clauses) & Cấu Trúc Song Song (Parallelism)',
        summary: 'Viết câu cô đọng ("Having verified the checksum, the worker commits the offset") và quy tắc cân xứng từ loại quanh and / or / both...and / either...or / not only...but also trong CV & Javadoc.',
        toeicFocus: 'TOEIC Part 5 & Viết CV / Resume Senior Java chuẩn FAANG/Global'
      },
      {
        id: 'G4_5',
        code: 'G4.5',
        title: 'Chiến Thuật Giải Nhanh TOEIC Part 5 & Part 6 Trong 20 Giây/Câu',
        summary: 'Quy trình 4 bước quét 4 đáp án trước khi đọc đề; phân bổ thời gian vàng cho Reading (75 phút: Part 5 trong 12 phút, Part 6 trong 8 phút, dành trọn 55 phút cho Part 7) để dư giờ kiểm tra lại.',
        toeicFocus: 'Chiến thuật phòng thi thực chiến kéo thẳng +100 điểm Reading'
      },
      {
        id: 'G4_6',
        code: 'G4.6',
        title: 'Ngữ Pháp Ứng Dụng Senior Java: Viết PR Description, Incident Report & Email Kiến Trúc',
        summary: 'Tổng hợp toàn bộ ngữ pháp đã học vào 4 mẫu văn bản hàng ngày của Senior Java: Mô tả Pull Request rõ ràng, Báo cáo sự cố RCA không đổ lỗi (Blameless Postmortem), Đề xuất Refactor & Email xác nhận yêu cầu.',
        toeicFocus: 'TOEIC Part 6–7 (Email công việc) & Thăng tiến Senior / Tech Lead'
      }
    ]
  },

  /* ===================== TRỤ CỘT 2: TỪ VỰNG (V1 -> V4) ===================== */
  {
    id: 'V1',
    track: 'vocabulary',
    level: 'basic',
    icon: '🏢',
    title: 'Học phần V1: Từ Vựng Cơ Bản — Văn Phòng, Họp Hành & Công Việc Hàng Ngày',
    desc: '70+ từ vựng và cụm động từ tần suất xuất hiện cao nhất trong cả TOEIC (0–450) lẫn môi trường công ty IT.',
    lessons: [
      {
        id: 'V1_1',
        code: 'V1.1',
        title: 'Lịch trình, Cuộc họp & Phối hợp Đội nhóm (Schedules & Meetings)',
        summary: 'Làm chủ bộ từ schedule, postpone, cancel, attend, agenda, minutes, deadline, prior to, ahead of schedule, colleague, department với hàng chục câu mẫu họp hành.',
        toeicFocus: 'TOEIC Listening Part 2–3 & Reading Part 5–7 (Thông báo lịch họp)'
      },
      {
        id: 'V1_2',
        code: 'V1.2',
        title: 'Email, Thông báo Nội bộ & Liên lạc Công sở (Workplace Communication)',
        summary: 'Sử dụng tự nhiên inquire, notify, confirm, clarify, attachment, enclose, forward, regarding, promptly, appreciate, follow up trong mọi bức email hàng ngày.',
        toeicFocus: 'TOEIC Part 6 & Part 7 (Email & Memo nội bộ)'
      },
      {
        id: 'V1_3',
        code: 'V1.3',
        title: 'Tuyển dụng, Nhân sự & Hội nhập Nhân viên mới (HR, Hiring & Onboarding)',
        summary: 'Nắm vững applicant, candidate, resume, qualification, requirement, interview, hire, onboard, probation, mentor, evaluate, promote.',
        toeicFocus: 'TOEIC Part 5–7 (Tin tuyển dụng & Quy chế nhân sự) + Đọc JD Senior Java'
      },
      {
        id: 'V1_4',
        code: 'V1.4',
        title: 'Mua sắm, Hóa đơn, Nhà cung cấp & Thiết bị (Purchasing, Vendors & Equipment)',
        summary: 'Ghi nhớ sâu invoice, receipt, estimate, quote, vendor, supplier, order, shipment, warranty, defective, replace, inventory — nhóm từ "tủ" của đề TOEIC.',
        toeicFocus: 'TOEIC Part 3, 4, 6, 7 (Đặt mua license phần mềm / thiết bị văn phòng)'
      },
      {
        id: 'V1_5',
        code: 'V1.5',
        title: 'Công tác, Di chuyển & Hội nghị Công nghệ (Business Travel & Tech Conferences)',
        summary: 'Tự tin đi onsite khách hàng hoặc dự hội thảo quốc tế với itinerary, accommodation, reservation, flight, board, delay, venue, keynote, register, attendee.',
        toeicFocus: 'TOEIC Listening Part 4 (Thông báo sân bay/sự kiện) & Part 7 (Lịch trình)'
      },
      {
        id: 'V1_6',
        code: 'V1.6',
        title: 'Top Cụm Động Từ (Phrasal Verbs) Sống Còn Trong Công Sở & Dự Án IT',
        summary: 'Tuyệt chiêu nhớ nhanh look into (điều tra bug), carry out (thực hiện), set up (cài đặt), back up (sao lưu), roll out (triển khai dần), figure out, call off, put off, run out of, hand over.',
        toeicFocus: 'TOEIC Listening & Reading + Giao tiếp tự nhiên với đồng nghiệp nước ngoài'
      }
    ]
  },
  {
    id: 'V2',
    track: 'vocabulary',
    level: 'intermediate',
    icon: '📊',
    title: 'Học phần V2: Từ Vựng Cốt Lõi TOEIC 600+ — Thương Mại, Hợp Đồng & Tài Chính',
    desc: 'Bộ từ vựng vàng chuẩn ETS giúp đọc hiểu mượt mà hợp đồng, SLA, ngân sách dự án và các chủ đề IT trong đề thi TOEIC.',
    lessons: [
      {
        id: 'V2_1',
        code: 'V2.1',
        title: 'Hợp đồng, Cam kết SLA & Tuân thủ Pháp lý (Contracts, SLA & Compliance)',
        summary: 'Làm chủ agreement, contract, clause, party, terms, obligate, abide by, comply with, expire, renew, breach, assurance — dùng cho cả TOEIC và hợp đồng phần mềm.',
        toeicFocus: 'TOEIC Part 5 & Part 6 (Cụm giới từ cố định: comply with, abide by)'
      },
      {
        id: 'V2_2',
        code: 'V2.2',
        title: 'Tài chính, Ngân sách, Doanh thu & Nghiệp vụ Ngân hàng (Finance & Banking)',
        summary: 'Đặc biệt hữu ích cho Dev làm Fintech/Banking: budget, revenue, profit, expenditure, allocate, reimburse, transaction, balance, audit, fiscal year, cost-effective.',
        toeicFocus: 'TOEIC Part 5–7 (Báo cáo tài chính quý, Hoàn ứng chi phí & Ngân hàng)'
      },
      {
        id: 'V2_3',
        code: 'V2.3',
        title: 'Quản lý Dự án, Tiến độ & Đảm bảo Chất lượng (Project Delivery & QA)',
        summary: 'Nắm trọn milestone, phase, specification, feasibility, streamline, implement, inspect, thorough, defect, flawless, objective, collaborate.',
        toeicFocus: 'TOEIC Part 3–7 (Họp tiến độ dự án & Kiểm định chất lượng sản phẩm)'
      },
      {
        id: 'V2_4',
        code: 'V2.4',
        title: 'Dịch vụ Khách hàng, Bảo trì & Giải quyết Sự cố (Customer Support & Resolution)',
        summary: 'Ghi nhớ inquiry, complaint, resolve, address (an issue), compensate, refund, inconvenience, temporarily, unavailable, maintenance, satisfaction.',
        toeicFocus: 'TOEIC Part 6–7 (Thư xin lỗi bảo trì hệ thống & Hỗ trợ khách hàng)'
      },
      {
        id: 'V2_5',
        code: 'V2.5',
        title: 'Hạ tầng CNTT, Bảo mật & Phần mềm trong Đề Thi TOEIC (IT in ETS TOEIC)',
        summary: 'Chủ đề tủ ăn chắc 100% điểm của dân Dev khi đi thi TOEIC: compatible, upgrade, outage, access, confidential, unauthorized, credentials, network, storage, malfunctioning.',
        toeicFocus: 'TOEIC Part 4, 6 & 7 (Thông báo bộ phận IT gửi toàn công ty)'
      },
      {
        id: 'V2_6',
        code: 'V2.6',
        title: 'Các Cặp Từ Dễ Nhầm Lẫn Nhất (Confusing Words) Trong TOEIC 600+',
        summary: 'Phân biệt một lần nhớ mãi: affect (v) vs effect (n), accept vs except, rise (nội) vs raise (ngoại), economic (kinh tế) vs economical (tiết kiệm), reliable vs reliant, considerable vs considerate.',
        toeicFocus: 'TOEIC Part 5 (Các câu bẫy từ gần giống nhau về mặt chữ cái)'
      }
    ]
  },
  {
    id: 'V3',
    track: 'vocabulary',
    level: 'upper',
    icon: '💻',
    title: 'Học phần V3: Từ Vựng Thực Chiến Kỹ Sư Phần Mềm — Agile, Git, CI/CD & Production',
    desc: 'Xóa bỏ hoàn toàn cảm giác "biết code nhưng không biết diễn đạt bằng tiếng Anh" trong Daily Standup, Code Review và Xử lý sự cố.',
    lessons: [
      {
        id: 'V3_1',
        code: 'V3.1',
        title: 'Agile / Scrum, Daily Standup, Sprint Planning & Retrospective',
        summary: 'Nói trôi chảy trong buổi họp 15 phút mỗi sáng: blocker, impediment, backlog refinement, acceptance criteria, estimate, scope creep, bandwidth, sync up, on track, behind schedule.',
        toeicFocus: 'Giao tiếp hàng ngày trong dự án Global / Offshore + TOEIC Họp nhóm'
      },
      {
        id: 'V3_2',
        code: 'V3.2',
        title: 'Git, Pull Request, Code Review & Refactoring Chuẩn Quốc Tế',
        summary: 'Viết comment review lịch sự và sắc sảo: nitpick, LGTM, edge case, corner case, backward-compatible, deprecate, boilerplate, tight coupling, readability, maintainability, redundant.',
        toeicFocus: 'Làm việc trên GitHub / GitLab / Bitbucket cùng team quốc tế'
      },
      {
        id: 'V3_3',
        code: 'V3.3',
        title: 'Vòng Đời Phần Mềm (SDLC), CI/CD Pipeline & Chiến Lược Deployment',
        summary: 'Làm chủ ngôn ngữ DevOps/Backend: pipeline, artifact, provisioning, staging, canary release, blue-green, rollback, regression test, smoke test, configuration, seamlessly.',
        toeicFocus: 'Họp Release / Go-live & Đọc thông báo vận hành hệ thống'
      },
      {
        id: 'V3_4',
        code: 'V3.4',
        title: 'Debugging, Xử Lý Sự Cố Production (Incident) & Viết Postmortem',
        summary: 'Bình tĩnh trao đổi trên War-room khi sập prod: outage, root cause, reproduce, intermittent, workaround, mitigate, spike, bottleneck, memory leak, degrade, postmortem.',
        toeicFocus: 'Giao tiếp khẩn cấp với khách hàng & SRE + TOEIC Xử lý sự cố'
      },
      {
        id: 'V3_5',
        code: 'V3.5',
        title: 'Database, Hiệu Năng, Giao Dịch & Bảo Mật API (Backend Core Vocab)',
        summary: 'Diễn đạt chính xác thuật ngữ Backend: latency, throughput, concurrency, deadlock, idempotent, payload, pagination, sanitize, vulnerability, encryption, revoke, rate limit.',
        toeicFocus: 'Thiết kế API, Review Database & Đọc tài liệu bảo mật OWASP'
      },
      {
        id: 'V3_6',
        code: 'V3.6',
        title: 'Từ Vựng Đọc Tài Liệu Kỹ Thuật (Spring/Java Docs, RFC) & Viết Technical Spec',
        summary: 'Đọc lướt cực nhanh tài liệu gốc tiếng Anh nhờ nắm vững: prerequisite, caveat, trade-off, out-of-the-box, under the hood, rule of thumb, mutually exclusive, thread-safe, verbose, concise.',
        toeicFocus: 'Đọc nhanh tài liệu Oracle/Spring/AWS & Viết Design Doc (ADR)'
      }
    ]
  },
  {
    id: 'V4',
    track: 'vocabulary',
    level: 'advanced',
    icon: '🏆',
    title: 'Học phần V4: Từ Vựng Senior Java, System Design, Phỏng Vấn Quốc Tế & TOEIC Paraphrasing',
    desc: 'Chạm đỉnh phong thái Senior Software Engineer: thảo luận kiến trúc chịu tải cao, phản biện khéo léo, phỏng vấn lương USD và phá đảo TOEIC Part 7.',
    lessons: [
      {
        id: 'V4_1',
        code: 'V4.1',
        title: 'Java Core, JVM Internals, Memory & Multithreading Bằng Tiếng Anh',
        summary: 'Trả lời phỏng vấn Java trơn tru về immutable, polymorphism, encapsulation, heap exhaustion, garbage collection pause, race condition, thread contention, overhead, determinism.',
        toeicFocus: 'Phỏng vấn kỹ thuật Senior Java tại công ty Product / Global MNC'
      },
      {
        id: 'V4_2',
        code: 'V4.2',
        title: 'Microservices, Event-Driven (Kafka), Distributed Systems & Cloud Native',
        summary: 'Thảo luận hệ thống phân tán tự tin: decoupled, orchestration, choreography, eventual consistency, resilience, fault-tolerant, horizontal scaling, single point of failure, partition.',
        toeicFocus: 'Thảo luận kiến trúc Microservices & Đánh giá giải pháp Cloud'
      },
      {
        id: 'V4_3',
        code: 'V4.3',
        title: 'Ngôn Ngữ Thảo Luận System Design & Phân Tích Đánh Đổi (Trade-offs)',
        summary: 'Cách mở lời, ước lượng tải và phân tích ưu/nhược điểm như Principal Engineer: ballpark estimate, pros and cons, bottleneck, trade-off between consistency and availability, scale out, read-heavy.',
        toeicFocus: 'Vòng phỏng vấn System Design & Họp Hội đồng Kiến trúc (ARB)'
      },
      {
        id: 'V4_4',
        code: 'V4.4',
        title: 'Giao Tiếp Lãnh Đạo Kỹ Thuật: Thuyết Phục, Từ Chối Khéo (Push Back) & Mentoring',
        summary: 'Nói "Không" với yêu cầu vô lý mà khách hàng vẫn quý: push back politely, align with stakeholders, manage expectations, propose an alternative, walk through, constructive feedback.',
        toeicFocus: 'Kỹ năng mềm Senior / Tech Lead & Đàm phán công việc TOEIC'
      },
      {
        id: 'V4_5',
        code: 'V4.5',
        title: 'Phỏng Vấn Hành Vi (STAR Method), Viết CV Động Từ Mạnh & Đàm Phán Lương',
        summary: 'Nâng tầm hồ sơ và chốt Offer lương cao: spearhead, architect, optimize, slash latency by 60%, cross-functional, ownership, compensation package, base salary, relocation/remote.',
        toeicFocus: 'Ứng tuyển Job Global / Remote & TOEIC Nhân sự cấp cao'
      },
      {
        id: 'V4_6',
        code: 'V4.6',
        title: 'Từ Vựng Paraphrasing Đỉnh Cao Trong TOEIC Part 7 (Đổi Cách Nói Giữ Nguyên Nghĩa)',
        summary: 'Bí quyết tối thượng để vượt mốc TOEIC 650–750+: nhận diện cặp từ đồng nghĩa giữa Bài đọc và Đáp án đúng (ví dụ: mandatory = required, free of charge = complimentary, once a year = annual).',
        toeicFocus: 'TOEIC Reading Part 7 (Đoạn đơn, Đoạn đôi & Đoạn ba)'
      }
    ]
  }
];

// Tạo danh sách phẳng window.LESSONS kèm đầy đủ metadata để lọc và tìm kiếm tức thì
window.LESSONS = [];
window.MODULES.forEach((mod, mIdx) => {
  mod.lessons.forEach((les, lIdx) => {
    window.LESSONS.push({
      ...les,
      moduleId: mod.id,
      moduleTitle: mod.title,
      moduleIcon: mod.icon,
      track: mod.track,
      level: mod.level,
      order: window.LESSONS.length + 1,
      moduleOrder: mIdx + 1,
      lessonOrder: lIdx + 1
    });
  });
});

window.LESSON_DETAILS = window.LESSON_DETAILS || {};
window.MOCK_EXAMS = window.MOCK_EXAMS || [];
window.PRACTICE_LABS = window.PRACTICE_LABS || {};
