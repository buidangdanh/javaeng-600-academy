/* JavaEng TOEIC 600+ Academy — Học phần V1: Từ Vựng Cơ Bản (V1_1 -> V1_6)
 * Chủ đề: Văn Phòng, Họp Hành, Email, Nhân Sự, Mua Sắm, Công Tác & Cụm Động Từ Cốt Lõi
 * Phương pháp: Chunking (Cụm từ) + Memrise Java Mnemonics + TOEIC Paraphrasing Radar
 */

window.LESSON_DETAILS = window.LESSON_DETAILS || {};
Object.assign(window.LESSON_DETAILS, {
  V1_1: {
    duration: "40 phút",
    toeicTarget: "Từ vựng Tần suất Cao TOEIC 400–600+ (Listening Part 2–3 & Reading Part 5–7)",
    javaContext: "Đặt lịch Sprint Planning, thông báo dời lịch họp Architecture Review, viết biên bản họp với khách hàng US/EU và báo cáo tiến độ sớm hạn trong Daily Standup.",
    teacherIntro: "Chào anh em Java Dev! Mở đầu lộ trình Từ vựng, thầy muốn dập tắt ngay thói quen học vẹt từng từ rời rạc kiểu 'postpone = hoãn, attend = tham dự'. Đi thi TOEIC hay họp dự án thực tế, người bản xứ không ném từng từ đơn lẻ vào mặt nhau mà luôn đi theo Cụm (Collocation) như 'ahead of schedule', 'prior to the deadline' hay 'take the minutes'. Chỉ cần nắm chắc 10 từ khóa chủ lực cùng các giới từ gắn chặt với chúng trong bài V1.1 này, bạn sẽ nghe bắt sóng tức thì 80% đoạn hội thoại xếp lịch ở TOEIC Part 3 và tự tin điều phối mọi cuộc họp trên Microsoft Teams / Slack!",
    javaAnalogy: {
      title: "Cuộc họp Công sở giống hệt Quartz Scheduler / @Scheduled Cron Job trong Spring Boot",
      body: "Hãy hình dung mỗi cuộc họp là một Scheduled Task trong hệ thống: 'schedule' là đăng ký cron expression lên TaskScheduler; 'postpone' giống như delay/reschedule job lùi lại 2 tiếng vì DB đang bận migrate; 'cancel' là gọi ScheduledFuture.cancel(true) hủy hẳn tác vụ; 'agenda' chính là danh sách bước thực thi (execution plan) gửi trước; còn 'minutes' là file execution log ghi lại ai nói gì và action item nào đã chốt sau khi job chạy xong!"
    },
    objectives: [
      "Thuộc lòng và phản xạ dưới 2 giây với 10 từ/cụm từ cốt lõi về Lịch trình & Cuộc họp kèm phiên âm IPA chuẩn Mỹ.",
      "Phân biệt sắc thái và giới từ đi kèm dễ gây mất điểm: postpone vs cancel, attend (ngoại động từ không đi với to) vs participate in, minutes (biên bản họp) vs minute (phút).",
      "Nhận diện tức thì các cặp Paraphrasing kinh điển trong TOEIC Part 3 & Part 7 như 'prior to = before / in advance of' và 'put off = postpone / push back'."
    ],
    formulaCards: [
      {
        label: "Word Family • SCHEDULE & ATTEND",
        formula: "schedule (n/v) → scheduled (adj: theo lịch) → reschedule (v: dời lịch) | attend (v) → attendance (n: sự có mặt) → attendee (n: người tham dự)",
        note: "Bẫy kinh điển TOEIC Part 5: 'a scheduled maintenance' (đợt bảo trì đã lên lịch - dùng V-ed làm tính từ) và 'attendees' (chỉ người) khác với 'attendance' (sĩ số/sự tham dự)."
      },
      {
        label: "Cụm Collocation Vàng • SCHEDULE & DEADLINE",
        formula: "ahead of schedule (vượt tiến độ) ↔ on schedule (đúng tiến độ) ↔ behind schedule (chậm tiến độ) | meet / miss / extend a deadline",
        note: "Tuyệt đối KHÔNG dùng giới từ 'in' trước schedule khi nói tiến độ. Luôn nhớ bộ ba: ahead of / on / behind + schedule (không có mạo từ a/the ở giữa!)."
      },
      {
        label: "Cụm Thời Gian Trang Trọng • PRIOR TO",
        formula: "prior to + Noun / V-ing = before + Noun / V-ing (trước khi diễn ra sự việc gì)",
        note: "Xuất hiện dày đặc trong email TOEIC Part 6–7 và quy trình Release: 'prior to deployment' (= before deployment), 'two days prior to the meeting'."
      },
      {
        label: "Bộ Đôi Tài Liệu Họp • AGENDA vs MINUTES",
        formula: "circulate the agenda (gửi chương trình họp TRƯỚC giờ họp) → take / distribute the minutes (ghi / gửi biên bản SAU giờ họp)",
        note: "Khi mang nghĩa 'biên bản cuộc họp', danh từ 'minutes' BẮT BUỘC luôn ở dạng số nhiều có đuôi -s!"
      }
    ],
    sections: [
      {
        heading: "1. Phân biệt Bộ Ba Điều Phối Lịch: Schedule – Postpone – Cancel",
        paragraphs: [
          "Trong cả đề thi TOEIC lẫn dự án Outsourcing/Product, lịch họp thay đổi liên tục là chuyện cơm bữa. Sai lầm phổ biến của anh em Dev là dùng từ chung chung 'change the meeting' cho mọi tình huống, khiến khách hàng không rõ cuộc họp bị dời sang hôm khác hay hủy bỏ hoàn toàn.",
          "Trong bài nghe TOEIC Part 3, khi nhân vật nói 'Something urgent came up with the production server, could we push Thursday's meeting back to Friday?', đáp án đúng dưới câu hỏi sẽ paraphrase toàn bộ cụm đó thành một động từ duy nhất: 'postpone' hoặc 'reschedule'."
        ],
        bullets: [
          "schedule sth FOR + mốc thời gian: 'The sprint review is scheduled for 3:00 PM on Friday.' (Dùng giới từ FOR cho thời điểm diễn ra!).",
          "postpone sth UNTIL / TO + mốc mới (= put off / push back): Hoãn lại nhưng VẪN SẼ HỌP vào lúc muộn hơn. Theo sau postpone nếu là động từ thì bắt buộc dùng V-ing ('postpone releasing the patch').",
          "cancel sth (= call off): Hủy hẳn không tổ chức nữa. Phân biệt rõ trong Part 2–3 để không chọn nhầm giữa 'dời lịch' và 'hủy lịch'."
        ]
      },
      {
        heading: "2. Bẫy Giới Từ Với 'Attend' & Cặp Danh Từ Dễ Lộn 'Agenda' vs 'Minutes'",
        paragraphs: [
          "Rất nhiều bạn dịch từng chữ từ tiếng Việt 'tham dự VÀO cuộc họp' nên viết 'attend to the meeting' hoặc 'attend in the meeting'. Đây là lỗi ngữ pháp cực nặng! Trong tiếng Anh thương mại, 'attend' mang nghĩa tham dự là một NGOẠI ĐỘNG TỪ (Transitive Verb) — nó tác động thẳng lên tân ngữ không cần bất kỳ giới từ nào.",
          "Lưu ý thêm: cụm 'attend to sth/sb' thực ra có tồn tại trong TOEIC nhưng mang nghĩa hoàn toàn khác là 'xử lý, giải quyết, chăm sóc' (ví dụ: 'I have an urgent production issue to attend to'). Đề Part 5 rất thích khai thác sự khác biệt này!"
        ],
        bullets: [
          "ĐÚNG: 'attend a meeting / attend the tech conference / attend an orientation session' (= participate IN = take part IN).",
          "AGENDA (Chương trình nghị sự): Gửi TRƯỚC cuộc họp để các 'colleagues' (đồng nghiệp) và các 'departments' (phòng ban) chuẩn bị ý kiến. Cụm chuẩn: 'item on the agenda' (mục nằm trong chương trình họp).",
          "MINUTES (Biên bản cuộc họp): Ghi lại quyết định & đầu việc SAU/TRONG cuộc họp. Cụm chuẩn: 'take the minutes' (thư ký ghi biên bản) và 'review the meeting minutes'."
        ]
      },
      {
        heading: "3. Cụm Từ Ăn Điểm TOEIC 600+: 'Prior to', 'Ahead of schedule' & Phối Hợp 'Department'",
        paragraphs: [
          "Muốn vượt mốc TOEIC 600+, bạn phải quen mắt với các cách diễn đạt trang trọng thay thế cho từ sơ cấp. Thay vì viết 'before the deadline', đề ETS luôn ưu tiên 'prior to the deadline' hoặc 'in advance of the deadline'.",
          "Tương tự, khi báo cáo tiến độ dự án với Tech Lead hoặc Product Owner, thay vì nói dài dòng 'We finished earlier than planned', chỉ cần tung ra cụm 'ahead of schedule' là câu nói lập tức sắc gọn, chuẩn phong thái kỹ sư quốc tế."
        ],
        bullets: [
          "Paraphrasing Radar (Part 7): Bài đọc viết 'finished two days early' → Đáp án trắc nghiệm viết 'completed ahead of schedule'.",
          "Paraphrasing Radar (Part 7): Bài đọc viết 'before boarding / before launching' → Đáp án viết 'prior to boarding / prior to the launch'.",
          "Phối hợp liên phòng ban: 'collaborate with colleagues across different departments' (phối hợp với đồng nghiệp thuộc nhiều phòng ban như QA, DevOps, Security, Finance)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "schedule",
        pos: "n / v",
        ipa: "/ˈskedʒuːl/",
        meaning: "lịch trình, kế hoạch thời gian; lên lịch, sắp xếp lịch",
        synonyms: "timetable, plan, arrange, book",
        collocations: ["be scheduled for Monday", "on schedule", "tight schedule", "behind schedule"],
        mnemonic: "Liên tưởng @Scheduled trong Spring Boot — annotation chuyên dùng để ấn định giờ chạy tự động cho job!",
        toeicEx: "The quarterly budget review is **scheduled** for next Tuesday at 10 A.M.",
        toeicVi: "Buổi rà soát ngân sách hàng quý được lên lịch vào 10 giờ sáng thứ Ba tới.",
        javaEx: "We **scheduled** the database index rebuild for 2 A.M. when user traffic is lowest.",
        javaVi: "Chúng tôi đã lên lịch chạy lại index cơ sở dữ liệu vào lúc 2 giờ sáng khi lưu lượng người dùng thấp nhất."
      },
      {
        word: "postpone",
        pos: "v",
        ipa: "/poʊˈspoʊn/",
        meaning: "hoãn lại, dời lịch sang một thời điểm muộn hơn",
        synonyms: "delay, put off, push back, reschedule",
        collocations: ["postpone a meeting", "postpone until Friday", "postpone making a decision"],
        mnemonic: "POST (hậu/sau, như HTTP POST hoặc hậu kỳ) + PONE (đặt để) => Đặt lùi công việc lại về phía sau!",
        toeicEx: "Due to severe weather, the outdoor workshop has been **postponed** until next week.",
        toeicVi: "Do thời tiết khắc nghiệt, buổi hội thảo ngoài trời đã bị hoãn lại sang tuần sau.",
        javaEx: "We had to **postpone** the Spring Boot 3 upgrade because a payment SDK was not compatible yet.",
        javaVi: "Chúng tôi phải hoãn đợt nâng cấp Spring Boot 3 vì một bộ SDK thanh toán chưa tương thích."
      },
      {
        word: "cancel",
        pos: "v",
        ipa: "/ˈkænsl/",
        meaning: "hủy bỏ hoàn toàn (cuộc hẹn, đơn hàng, chuyến bay, tác vụ)",
        synonyms: "call off, abort, terminate",
        collocations: ["cancel a reservation", "cancel at the last minute", "cancel without notice"],
        mnemonic: "Giống hàm Future.cancel(true) trong Java Concurrency — ngắt và hủy bỏ luôn tác vụ chứ không hẹn chạy lại!",
        toeicEx: "Please let the receptionist know if you need to **cancel** your appointment.",
        toeicVi: "Vui lòng báo cho lễ tân biết nếu bạn cần hủy lịch hẹn của mình.",
        javaEx: "The Product Owner decided to **cancel** the legacy reporting module to focus on the new API.",
        javaVi: "Product Owner đã quyết định hủy bỏ phân hệ báo cáo cũ để tập trung vào bộ API mới."
      },
      {
        word: "attend",
        pos: "v",
        ipa: "/əˈtend/",
        meaning: "tham dự, có mặt tại (cuộc họp, khóa đào tạo, hội nghị)",
        synonyms: "be present at, participate in, take part in",
        collocations: ["attend a conference", "attend the mandatory training", "unable to attend"],
        mnemonic: "AT + TEND (hướng tới tại điểm đó) => Có mặt trực tiếp tại cuộc họp! Nhớ kỹ: attend + thẳng sự kiện, KHÔNG có 'to/in'!",
        toeicEx: "All department heads are required to **attend** tomorrow's strategy session.",
        toeicVi: "Tất cả trưởng các phòng ban được yêu cầu phải tham dự phiên họp chiến lược ngày mai.",
        javaEx: "Every backend developer should **attend** the post-release retrospective this afternoon.",
        javaVi: "Mọi lập trình viên backend nên tham dự buổi họp nhìn lại sau đợt phát hành vào chiều nay."
      },
      {
        word: "agenda",
        pos: "n",
        ipa: "/əˈdʒendə/",
        meaning: "chương trình nghị sự, danh sách các chủ đề sẽ bàn trong cuộc họp",
        synonyms: "meeting plan, outline, program",
        collocations: ["on the agenda", "circulate the agenda", "top of the agenda"],
        mnemonic: "AGENT + DA (đã lên danh sách) => Đặc vụ đi họp luôn cầm tờ danh sách mục tiêu cần bàn!",
        toeicEx: "Expanding into the Asian market is the first item **on the agenda** today.",
        toeicVi: "Mở rộng sang thị trường châu Á là mục đầu tiên trong chương trình nghị sự hôm nay.",
        javaEx: "API gateway latency is at the top of our **agenda** for the architecture sync.",
        javaVi: "Độ trễ của API gateway nằm ở đầu chương trình nghị sự cho buổi họp đồng bộ kiến trúc của chúng ta."
      },
      {
        word: "minutes",
        pos: "n",
        ipa: "/ˈmɪnɪts/",
        meaning: "biên bản cuộc họp (bản tóm tắt nội dung và quyết định trong cuộc họp)",
        synonyms: "meeting notes, official record, summary",
        collocations: ["take the minutes", "distribute the minutes", "approve the minutes"],
        mnemonic: "Ghi chép lại từng PHÚT (minute + s) diễn biến cuộc họp => 'minutes' (luôn có s) chính là Biên bản họp!",
        toeicEx: "Ms. Kim volunteered to **take the minutes** during the board meeting.",
        toeicVi: "Cô Kim đã xung phong ghi biên bản trong suốt cuộc họp hội đồng quản trị.",
        javaEx: "I shared the meeting **minutes** on Confluence so absent engineers can check their action items.",
        javaVi: "Tôi đã chia sẻ biên bản cuộc họp lên Confluence để các kỹ sư vắng mặt có thể kiểm tra đầu việc của mình."
      },
      {
        word: "deadline",
        pos: "n",
        ipa: "/ˈdedlaɪn/",
        meaning: "hạn chót phải hoàn thành hoặc nộp công việc",
        synonyms: "due date, time limit, cutoff date",
        collocations: ["meet a deadline", "tight deadline", "extend the deadline", "miss a deadline"],
        mnemonic: "DEAD (chết) + LINE (vạch kẻ) => Vạch giới hạn sinh tử mà trễ qua đó là dự án 'toang'!",
        toeicEx: "The **deadline** for submitting expense reports has been extended to Friday.",
        toeicVi: "Hạn chót nộp báo cáo chi phí đã được gia hạn đến thứ Sáu.",
        javaEx: "Thanks to automated integration tests, our team met the tight **deadline** without overtime.",
        javaVi: "Nhờ bộ kiểm thử tích hợp tự động, nhóm chúng tôi đã kịp hạn chót gấp gáp mà không cần làm thêm giờ."
      },
      {
        word: "prior to",
        pos: "prep",
        ipa: "/ˈpraɪər tuː/",
        meaning: "trước, trước khi (trang trọng hơn 'before')",
        synonyms: "before, ahead of, in advance of",
        collocations: ["prior to departure", "prior to the meeting", "prior to launching"],
        mnemonic: "PRIOR giống 'Priority' (độ ưu tiên trong Thread/Queue) => Việc có độ ưu tiên cao phải chạy TRƯỚC (prior to) việc khác!",
        toeicEx: "Visitors must sign in at the security desk **prior to** entering the building.",
        toeicVi: "Khách tham quan phải đăng ký tại quầy an ninh trước khi bước vào tòa nhà.",
        javaEx: "Always back up the production schema **prior to** executing Flyway migration scripts.",
        javaVi: "Luôn sao lưu cấu trúc dữ liệu production trước khi thực thi các kịch bản migrate Flyway."
      },
      {
        word: "ahead of schedule",
        pos: "phr",
        ipa: "/əˈhed əv ˈskedʒuːl/",
        meaning: "vượt tiến độ, hoàn thành sớm hơn kế hoạch dự kiến",
        synonyms: "early, before the planned time",
        collocations: ["finish ahead of schedule", "two weeks ahead of schedule", "deliver ahead of schedule"],
        mnemonic: "AHEAD (đi trước đầu tàu) + OF SCHEDULE (so với lịch) => Chạy về đích sớm hơn lịch đã chốt!",
        toeicEx: "The construction of the new warehouse was completed three weeks **ahead of schedule**.",
        toeicVi: "Việc xây dựng nhà kho mới đã hoàn tất sớm hơn tiến độ ba tuần.",
        javaEx: "We wrapped up the OAuth2 authentication module two days **ahead of schedule**.",
        javaVi: "Chúng tôi đã hoàn thành phân hệ xác thực OAuth2 sớm hơn tiến độ hai ngày."
      },
      {
        word: "colleague",
        pos: "n",
        ipa: "/ˈkɑːliːɡ/",
        meaning: "đồng nghiệp (người làm chung công ty, tổ chức hoặc ngành nghề)",
        synonyms: "coworker, teammate, associate",
        collocations: ["a former colleague", "consult with colleagues", "colleagues in the IT department"],
        mnemonic: "COL (cùng nhau, như Collection) + LEAGUE (liên minh/giải đấu như Champions League) => Người sát cánh cùng chiến tuyến trong công ty!",
        toeicEx: "Mr. Patel thanked his **colleagues** in the marketing department for their support.",
        toeicVi: "Ông Patel đã cảm ơn các đồng nghiệp ở phòng tiếp thị vì sự hỗ trợ của họ.",
        javaEx: "A senior **colleague** from the DevOps department helped me tune our Kubernetes pod limits.",
        javaVi: "Một đồng nghiệp cấp cao từ bộ phận DevOps đã giúp tôi tinh chỉnh giới hạn tài nguyên pod Kubernetes."
      }
    ],
    examples: [
      {
        tag: "Daily Standup",
        en: "Good morning team! Our payment refactoring is currently **on schedule**, and we should **meet Friday's deadline** easily.",
        vi: "Chào buổi sáng cả nhóm! Việc tái cấu trúc thanh toán hiện đang đúng tiến độ và chúng ta sẽ dễ dàng kịp hạn chót thứ Sáu.",
        note: "Kết hợp cặp vàng 'on schedule' (đúng tiến độ) + 'meet a deadline' (kịp hạn chót)."
      },
      {
        tag: "Client Email",
        en: "Could you please review the attached **agenda** **prior to** our kickoff call tomorrow morning?",
        vi: "Bạn vui lòng xem qua chương trình họp đính kèm trước cuộc gọi khởi động dự án vào sáng mai được không?",
        note: "'review the agenda' + 'prior to + cụm danh từ' tạo sắc thái cực kỳ lịch sự, chuyên nghiệp."
      },
      {
        tag: "TOEIC Part 5",
        en: "Because the keynote speaker missed her connecting flight, the afternoon seminar had to be **postponed**.",
        vi: "Vì diễn giả chính bị lỡ chuyến bay nối chuyến, buổi hội thảo chiều đã phải hoãn lại.",
        note: "Bị động Hiện tại hoàn thành / Quá khứ: 'had to be postponed' (= had to be put off)."
      },
      {
        tag: "Senior Java",
        en: "I will sync with my **colleagues** in the QA **department** before we lock the release branch.",
        vi: "Tôi sẽ trao đổi đồng bộ với các đồng nghiệp bên bộ phận QA trước khi chúng ta khóa nhánh phát hành.",
        note: "'colleagues in the [X] department': cấu trúc kinh điển chỉ đồng nghiệp thuộc phòng ban nào."
      },
      {
        tag: "TOEIC Part 7",
        en: "Employees who cannot **attend** the safety workshop in person must complete the online module by Monday.",
        vi: "Những nhân viên không thể tham dự trực tiếp buổi tập huấn an toàn phải hoàn thành học phần trực tuyến trước thứ Hai.",
        note: "'attend ... in person' (tham dự trực tiếp) đối lập với 'online / remotely'."
      },
      {
        tag: "Client Email",
        en: "Unfortunately, we have to **cancel** today's demo session due to an unexpected staging environment issue.",
        vi: "Rất tiếc, chúng tôi phải hủy buổi demo hôm nay do một sự cố bất ngờ trên môi trường staging.",
        note: "Khi không hẹn ngay giờ mới trong câu mà hủy buổi hôm đó, dùng 'cancel' thay vì 'postpone'."
      },
      {
        tag: "Daily Standup",
        en: "Since the Kafka consumer bug took longer to fix, our sprint is running slightly **behind schedule**.",
        vi: "Vì lỗi Kafka consumer tốn nhiều thời gian sửa hơn dự kiến, sprint của chúng ta đang hơi chậm tiến độ một chút.",
        note: "'run behind schedule' = bị trễ so với kế hoạch ban đầu."
      },
      {
        tag: "TOEIC Part 5",
        en: "Ms. Rivera distributed the **minutes** from yesterday's executive meeting to all **department** managers.",
        vi: "Cô Rivera đã gửi biên bản cuộc họp điều hành hôm qua tới tất cả các trưởng bộ phận.",
        note: "'distribute the minutes to sb': phát/gửi biên bản cuộc họp cho ai."
      },
      {
        tag: "Senior Java",
        en: "If we automate the regression test suite, we can ship the Q3 release **ahead of schedule**.",
        vi: "Nếu chúng ta tự động hóa bộ kiểm thử hồi quy, chúng ta có thể phát hành bản Q3 sớm hơn tiến độ.",
        note: "'ship/deliver ahead of schedule': bàn giao sản phẩm sớm hơn dự kiến."
      },
      {
        tag: "TOEIC Part 7",
        en: "Please notify the human resources **department** at least 48 hours **prior to** your scheduled leave.",
        vi: "Vui lòng thông báo cho phòng nhân sự ít nhất 48 giờ trước kỳ nghỉ đã lên lịch của bạn.",
        note: "'48 hours prior to + Noun': cấu trúc chỉ khoảng thời gian trước một mốc sự kiện."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "All developers must attend to the sprint planning meeting. ❌",
          fix: "All developers must attend the sprint planning meeting. ✅",
          why: "'attend' khi mang nghĩa 'tham dự' là ngoại động từ đi thẳng với tân ngữ (không có 'to' hay 'in'). 'attend to' lại mang nghĩa 'xử lý/chăm sóc'!"
        },
        {
          bug: "Who will write the meeting minute today? ❌",
          fix: "Who will take the meeting minutes today? ✅",
          why: "Nghĩa 'biên bản cuộc họp' bắt buộc phải có '-s' ('minutes'), và động từ chuẩn đi kèm là 'take the minutes' thay vì 'write'."
        },
        {
          bug: "We postponed to deploy the microservice until tonight. ❌",
          fix: "We postponed deploying the microservice until tonight. ✅",
          why: "Sau động từ 'postpone' bắt buộc dùng Danh động từ (V-ing) hoặc Danh từ, tuyệt đối không dùng 'to V'!"
        },
        {
          bug: "The project was delivered in ahead of the schedule. ❌",
          fix: "The project was delivered ahead of schedule. ✅",
          why: "Cụm cố định là 'ahead of schedule' (không có 'in' ở đầu và không có 'the' trước schedule)."
        }
      ]
    },
    toeicTips: [
      "Mẹo Part 5 trong 5 giây: Thấy ô trống đứng ngay trước giới từ 'to' + Cụm danh từ chỉ sự kiện (ví dụ: '_____ to the conference'), tìm ngay tính từ/giới từ 'prior' để ghép thành 'prior to' (= before)!",
      "Mẹo Nghe Part 3: Khi câu hỏi hỏi 'What does the speaker suggest doing about the meeting?', nếu băng đọc 'push it back to Thursday' hoặc 'move it to next week', hãy khoanh ngay đáp án có từ 'postpone' hoặc 'reschedule' (đừng bẫy vào 'cancel'!).",
      "Mẹo Đọc Part 7: Từ 'minutes' đi cạnh 'agenda / board / committee' trong email công sở KHÔNG BAO GIỜ dịch là 'phút đồng hồ' — đó chắc chắn 100% là 'biên bản cuộc họp'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "prior to",
          "Please review",
          "tomorrow's architecture call.",
          "the meeting agenda",
          "carefully"
        ],
        answer: "Please review the meeting agenda carefully prior to tomorrow's architecture call.",
        vi: "Vui lòng xem kỹ chương trình họp trước cuộc gọi bàn về kiến trúc vào ngày mai."
      },
      fillBlank: {
        sentence: "Thanks to the team's hard work, the cloud migration was completed two weeks _____ of schedule.",
        answer: "ahead",
        accepted: ["ahead"],
        hint: "Từ bắt đầu bằng chữ 'a', ghép với 'of schedule' mang nghĩa vượt trước tiến độ",
        explain: "Cụm collocation bất biến 'ahead of schedule' mang nghĩa hoàn thành sớm hơn kế hoạch dự kiến."
      }
    },
    quiz: [
      {
        q: "All newly hired engineers are required to _____ the security orientation session on Monday morning.",
        options: ["attend", "postpone", "schedule", "enclose"],
        answer: 0,
        explain: "Đáp án đúng là 'attend' (tham dự). 'attend the orientation session' (tham dự buổi định hướng hội nhập) hợp nghĩa hoàn hảo với chủ ngữ 'newly hired engineers'. 'postpone' (hoãn), 'schedule' (lên lịch), 'enclose' (đính kèm) đều sai ngữ cảnh."
      },
      {
        q: "Passengers are advised to arrive at the departure gate at least thirty minutes _____ boarding time.",
        options: ["ahead", "prior to", "until", "during"],
        answer: 1,
        explain: "Đáp án đúng là 'prior to' (= before: trước giờ lên máy bay). Loại 'ahead' vì thiếu giới từ 'of'; loại 'until' (cho đến tận khi) và 'during' (trong suốt) vì sai logic thời gian có mặt ở cổng bay."
      },
      {
        q: "Mr. Tanaka asked his assistant to distribute the _____ from Friday's budget meeting to all team leads.",
        options: ["deadlines", "minutes", "colleagues", "schedules"],
        answer: 1,
        explain: "Đáp án đúng là 'minutes' (biên bản cuộc họp). Dấu hiệu vàng là cụm 'distribute the _____ from Friday's meeting' (phát biên bản từ cuộc họp hôm thứ Sáu). Các đáp án 'deadlines' (hạn chót), 'colleagues' (đồng nghiệp), 'schedules' (lịch trình) không khớp với giới từ 'from Friday's meeting'."
      }
    ]
  },

  V1_2: {
    duration: "40 phút",
    toeicTarget: "Từ vựng Tần suất Cao TOEIC 450–650+ (Reading Part 6 & Part 7: Email & Memo)",
    javaContext: "Viết email xác nhận yêu cầu nghiệp vụ với BA/Client, thông báo lịch bảo trì hệ thống, gửi kèm file log/tài liệu thiết kế và follow-up tiến độ review Pull Request.",
    teacherIntro: "Trong đề thi TOEIC Reading (Part 6 & Part 7), hơn 50% văn bản bạn đọc là Email và Thông báo nội bộ (Memo). Ở ngoài đời làm dự án Java với khách hàng Âu-Mỹ hay Nhật/Sing cũng vậy: viết Slack và Email chiếm tới một nửa sự chuyên nghiệp của một Senior Engineer! Bài học này sẽ giúp bạn nâng cấp toàn diện vốn từ giao tiếp viết — biến những câu tiếng Anh cụt lủn kiểu 'I ask about API', 'See file', 'Thanks' thành 'I am writing to inquire regarding the API...', 'Please find the architecture diagram attached', và 'We truly appreciate your prompt response'!",
    javaAnalogy: {
      title: "Giao tiếp Email Công sở giống hệt Giao thức HTTP Request / Response & Event Notification",
      body: "Hãy nhìn một luồng email như giao tiếp giữa các Microservices: 'inquire' chính là gửi HTTP GET hỏi thông tin; 'regarding' là phần Header/Path định danh chủ đề ('Subject'); 'attachment / enclose' là Multipart Payload đính kèm theo bản tin; 'notify' là bắn Webhook/Pub-Sub báo sự kiện cho các bên liên quan; 'confirm & clarify' là bước ACK và validate schema cho hết nhập nhằng; còn 'follow up' chính là cơ chế Retry/Polling lịch sự khi chưa nhận được phản hồi!"
    },
    objectives: [
      "Sử dụng chuẩn xác 10 từ vựng chủ chốt của Email & Thông báo nội bộ trong cả bài thi TOEIC và công việc phần mềm hàng ngày.",
      "Nắm chắc cấu trúc ngữ pháp của các động từ 'dễ gài bẫy' như notify sb OF sth, appreciate + V-ing / Noun (không đi với người!), attached vs enclosed.",
      "Tăng gấp đôi tốc độ đọc lướt câu mở đầu email TOEIC Part 7 để trả lời câu hỏi 'What is the purpose of the email?' chỉ trong 10 giây."
    ],
    formulaCards: [
      {
        label: "Word Family • NOTIFY, CLARIFY & CONFIRM",
        formula: "notify (v) → notification (n) | clarify (v) → clarification (n) → clear (adj) | confirm (v) → confirmation (n) → confirmed (adj)",
        note: "Mẹo nhận diện đuôi từ: đuôi '-fy' (notify, clarify, verify, modify) luôn là Động từ; chuyển sang Danh từ sẽ biến thành '-fication'!"
      },
      {
        label: "Cấu Trúc Vàng Với • NOTIFY & INQUIRE",
        formula: "notify + SOMEONE + of/about + SOMETHING | inquire + about/regarding + SOMETHING",
        note: "Cực kỳ cẩn thận: Ngay sau 'notify' PHẢI là Tân ngữ chỉ người (notify customers / notify the team), KHÔNG viết 'notify that...' hay 'notify about...' ngay sau động từ!"
      },
      {
        label: "Cấu Trúc Lịch Sự Đỉnh Cao • APPRECIATE",
        formula: "appreciate + Noun / V-ing (We appreciate your support / We would appreciate hearing from you)",
        note: "Siêu bẫy TOEIC & Giao tiếp: KHÔNG nói 'I appreciate YOU'! Bạn trân trọng HÀNH ĐỘNG/SỰ GIÚP ĐỠ của họ ('I appreciate your help' hoặc 'appreciate your reviewing this PR')."
      },
      {
        label: "Đính Kèm Tài Liệu • ATTACHMENT vs ENCLOSE vs FORWARD",
        formula: "find sth attached (email số) | enclose sth with a letter (thư giấy/trang trọng) | forward an email to sb (chuyển tiếp)",
        note: "Trong Part 7: Thấy 'enclosed check/brochure' thường là thư bưu điện (Letter); thấy 'email attachment' hoặc 'forwarded message' là thư điện tử (E-mail)."
      }
    ],
    sections: [
      {
        heading: "1. Bộ Tứ Động Từ Mở Đầu Email: Inquire – Notify – Confirm – Clarify",
        paragraphs: [
          "Câu hỏi đầu tiên của gần như mọi bài đọc Email trong TOEIC Part 7 luôn là: 'Why did Mr. Lee send this e-mail?' (Tại sao ông Lee gửi bức email này?). Đáp án nằm gọn ở 2 dòng đầu tiên của bức thư nhưng luôn được paraphrase bằng 4 động từ cốt lõi này.",
          "Khi viết email cho khách hàng hoặc Product Owner, lựa chọn đúng động từ mở đầu giúp người đọc nắm bắt ngay mục đích của bạn chỉ trong 3 giây mà không phải đoán mò."
        ],
        bullets: [
          "inquire (about / regarding sth): Dùng khi chủ động hỏi thông tin báo giá, tài liệu API, trạng thái đơn hàng ('I am writing to inquire about enterprise licensing').",
          "notify (sb of sth): Thông báo chính thức một thay đổi hoặc sự kiện ('This memo is to notify all staff of the server relocation').",
          "confirm (sth / that...): Xác nhận lại điều đã trao đổi để chốt chắc chắn ('I am writing to confirm our release window on Saturday').",
          "clarify (sth): Làm sáng tỏ điểm còn mơ hồ trong spec/tài liệu ('Could you clarify the timeout behavior when the third-party API fails?')."
        ]
      },
      {
        heading: "2. Gửi Kèm, Chuyển Tiếp & Giới Từ Chủ Đề: Attachment – Enclose – Forward – Regarding",
        paragraphs: [
          "Một kỹ sư chuyên nghiệp không bao giờ gửi một file log hay file PDF trơ trọi mà thiếu lời dẫn. Trong tiếng Anh thương mại, 'attachment' (danh từ: tệp đính kèm) và 'attached' (tính từ: được đính kèm) đi với email, còn 'enclose / enclosed' thường dùng cho thư giấy hoặc hợp đồng đóng phong bì — dù trong TOEIC đôi khi hai từ này được dùng song song để kiểm tra vốn từ đồng nghĩa.",
          "Bên cạnh đó, khi muốn chuyển tiếp nguyên văn luồng trao đổi cho đồng nghiệp, ta dùng ngoại động từ 'forward' ('I have forwarded the client's feedback to the backend team'). Và để nêu chủ đề ngắn gọn thay cho cụm dài dòng 'about the matter of', hãy dùng giới từ 'regarding' (= concerning = with regard to)."
        ],
        bullets: [
          "Câu cửa miệng triệu đô cho Dev: 'Please find the RCA report **attached** to this email' hoặc 'Please check the **attachment** for the full stack trace'.",
          "Bẫy tính từ phân từ Part 5: 'Please sign and return the **enclosed** contract' (hợp đồng được gửi kèm — dùng V-ed mang nghĩa bị động trước danh từ).",
          "Giới từ 'regarding' đứng đầu hoặc giữa câu: '**Regarding** ticket #402, we have deployed a hotfix to staging.'"
        ]
      },
      {
        heading: "3. Tốc Độ Phản Hồi, Lời Cảm Ơn & Theo Dấu Công Việc: Promptly – Appreciate – Follow up",
        paragraphs: [
          "Phần kết (Closing) của mọi bức email chuẩn TOEIC và chuẩn Global Tech luôn xoay quanh ba yếu tố: mong nhận phản hồi nhanh ('promptly'), bày tỏ sự trân trọng ('appreciate') và hẹn theo sát bước tiếp theo ('follow up').",
          "Đặc biệt chú ý trạng từ 'promptly' (/ˈprɑːmptli/) có hai nghĩa đều rất hay thi TOEIC: (1) nhanh chóng, ngay lập tức ('respond promptly') và (2) đúng boong giờ hẹn ('The webinar begins promptly at 9:00 A.M.' = đúng 9h00 không trễ một phút!)."
        ],
        bullets: [
          "prompt (adj: nhanh chóng / đúng giờ) → promptly (adv): 'All security alerts must be investigated promptly.'",
          "appreciate: 'We truly appreciate your patience and cooperation during the system upgrade.' (Sau appreciate tuyệt đối là Danh từ hoặc V-ing!).",
          "follow up (on sth / with sb): Động từ kép là 'follow up' (không gạch nối), nhưng khi làm Danh từ hoặc Tính từ trước danh từ thì có gạch nối: 'a follow-up email', 'a follow-up meeting'."
        ]
      }
    ],
    vocabItems: [
      {
        word: "inquire",
        pos: "v",
        ipa: "/ɪnˈkwaɪər/",
        meaning: "hỏi thông tin, tìm hiểu một cách lịch sự và trang trọng",
        synonyms: "ask about, request information, query",
        collocations: ["inquire about pricing", "inquire whether", "call to inquire"],
        mnemonic: "IN + QUIRE (giống QUERY trong SQL!) => Viết câu lệnh SELECT query để HỎI thông tin từ đối tác!",
        toeicEx: "Several clients called to **inquire** about our extended warranty options.",
        toeicVi: "Một số khách hàng đã gọi điện để hỏi thông tin về các gói gia hạn bảo hành của chúng tôi.",
        javaEx: "I emailed the cloud vendor to **inquire** about dedicated GPU instance availability.",
        javaVi: "Tôi đã gửi email cho nhà cung cấp đám mây để hỏi về tình trạng sẵn sàng của máy chủ GPU chuyên dụng."
      },
      {
        word: "notify",
        pos: "v",
        ipa: "/ˈnoʊtɪfaɪ/",
        meaning: "thông báo chính thức cho ai đó biết",
        synonyms: "inform, alert, let someone know, advise",
        collocations: ["notify staff of changes", "notify in advance", "immediately notify"],
        mnemonic: "Chính là hàm Object.notify() trong Java Multithreading — đánh thức và THÔNG BÁO cho thread khác biết trạng thái mới!",
        toeicEx: "Winners of the design contest will be **notified** by e-mail next Monday.",
        toeicVi: "Những người chiến thắng cuộc thi thiết kế sẽ được thông báo qua email vào thứ Hai tới.",
        javaEx: "PagerDuty automatically **notifies** the on-call engineer of any HTTP 5xx spike.",
        javaVi: "PagerDuty tự động thông báo cho kỹ sư trực ca về bất kỳ đợt tăng vọt lỗi HTTP 5xx nào."
      },
      {
        word: "confirm",
        pos: "v",
        ipa: "/kənˈfɜːrm/",
        meaning: "xác nhận chắc chắn (lịch hẹn, đơn hàng, thông tin là đúng)",
        synonyms: "verify, validate, acknowledge",
        collocations: ["confirm receipt of", "confirm a reservation", "written confirmation"],
        mnemonic: "CON (cùng nhau) + FIRM (vững chắc) => Chốt lại cho thật chắc chắn từ hai phía!",
        toeicEx: "Please reply to this message to **confirm** your attendance at Friday's banquet.",
        toeicVi: "Vui lòng phản hồi tin nhắn này để xác nhận việc bạn tham dự buổi tiệc tối thứ Sáu.",
        javaEx: "Could QA please **confirm** that the session timeout bug is no longer reproducible on staging?",
        javaVi: "Nhờ đội QA xác nhận giúp liệu lỗi hết hạn phiên đăng nhập đã hết tái hiện trên staging chưa?"
      },
      {
        word: "clarify",
        pos: "v",
        ipa: "/ˈklærəfaɪ/",
        meaning: "làm rõ, giải thích để tránh hiểu lầm",
        synonyms: "explain, clear up, make clear, elucidate",
        collocations: ["clarify the requirements", "clarify a policy", "seek clarification"],
        mnemonic: "CLAR (gốc từ CLEAR = rõ ràng) + IFY (làm cho) => Làm cho mọi yêu cầu nhập nhằng trở nên trong suốt, rõ ràng!",
        toeicEx: "The director issued a memo to **clarify** the new remote-work guidelines.",
        toeicVi: "Giám đốc đã ban hành một thông báo nội bộ để làm rõ các hướng dẫn làm việc từ xa mới.",
        javaEx: "Before writing code, let's ask the BA to **clarify** the rounding rules for foreign currency.",
        javaVi: "Trước khi viết code, hãy nhờ BA làm rõ quy tắc làm tròn cho ngoại tệ đã."
      },
      {
        word: "attachment",
        pos: "n",
        ipa: "/əˈtætʃmənt/",
        meaning: "tệp đính kèm (trong email hoặc tin nhắn công việc)",
        synonyms: "attached file, enclosure, addendum",
        collocations: ["open the attachment", "send as an attachment", "PDF attachment"],
        mnemonic: "AT + TACH (gắn chặt vào, giống 'attach debugger to process' trong IntelliJ) => File được gắn kèm vào email!",
        toeicEx: "For security reasons, do not open e-mail **attachments** from unknown senders.",
        toeicVi: "Vì lý do bảo mật, không mở các tệp đính kèm email từ người gửi không xác định.",
        javaEx: "I sent the heap dump analysis summary as a PDF **attachment** to the architecture team.",
        javaVi: "Tôi đã gửi bản tóm tắt phân tích heap dump dưới dạng tệp PDF đính kèm cho đội kiến trúc."
      },
      {
        word: "enclose",
        pos: "v",
        ipa: "/ɪnˈkloʊz/",
        meaning: "gửi kèm theo, bỏ kèm vào bên trong (phong bì, kiện hàng, hồ sơ)",
        synonyms: "include, attach, insert",
        collocations: ["enclose a check", "please find enclosed", "the enclosed document"],
        mnemonic: "EN (bên trong) + CLOSE (đóng kín lại) => Bỏ tài liệu vào trong phong bì rồi dán kín lại gửi đi!",
        toeicEx: "Please complete the **enclosed** survey and mail it back in the prepaid envelope.",
        toeicVi: "Vui lòng điền vào bản khảo sát gửi kèm và gửi lại qua đường bưu điện bằng phong bì đã trả cước trước.",
        javaEx: "Our legal team **enclosed** two signed copies of the NDA in the courier package to Tokyo.",
        javaVi: "Đội pháp chế của chúng tôi đã gửi kèm hai bản thỏa thuận bảo mật (NDA) đã ký trong kiện chuyển phát sang Tokyo."
      },
      {
        word: "regarding",
        pos: "prep",
        ipa: "/rɪˈɡɑːrdɪŋ/",
        meaning: "về việc, liên quan đến (dùng cực nhiều ở tiêu đề và mở đầu email)",
        synonyms: "concerning, about, with respect to, in regard to",
        collocations: ["inquire regarding", "questions regarding", "update regarding"],
        mnemonic: "Nhìn chữ 'Re:' ở đầu mọi tiêu đề email trả lời? Nhiều người liên tưởng ngay tới REGARDING = Về chủ đề này!",
        toeicEx: "If you have any questions **regarding** your invoice, please contact our billing team.",
        toeicVi: "Nếu bạn có bất kỳ câu hỏi nào liên quan đến hóa đơn của mình, vui lòng liên hệ đội thanh toán của chúng tôi.",
        javaEx: "I am writing **regarding** the rate-limiting headers on the public partner API.",
        javaVi: "Tôi viết thư này về việc các header giới hạn lưu lượng trên bộ API đối tác công khai."
      },
      {
        word: "promptly",
        pos: "adv",
        ipa: "/ˈprɑːmptli/",
        meaning: "ngay lập tức, nhanh chóng; hoặc đúng boong giờ hẹn",
        synonyms: "immediately, swiftly, right away, punctually",
        collocations: ["respond promptly", "handle promptly", "start promptly at 9 A.M."],
        mnemonic: "Command PROMPT trong máy tính: bạn gõ lệnh Enter là nó phản hồi NGAY LẬP TỨC (promptly)!",
        toeicEx: "Customer inquiries submitted through the website are answered **promptly**.",
        toeicVi: "Các câu hỏi của khách hàng gửi qua trang web đều được trả lời một cách nhanh chóng.",
        javaEx: "Our SRE team responded **promptly** when Redis memory usage crossed the 85% threshold.",
        javaVi: "Đội SRE của chúng tôi đã phản ứng ngay lập tức khi mức dùng bộ nhớ Redis vượt ngưỡng 85%."
      },
      {
        word: "appreciate",
        pos: "v",
        ipa: "/əˈpriːʃieɪt/",
        meaning: "trân trọng, cảm kích, đánh giá cao",
        synonyms: "be grateful for, value, welcome",
        collocations: ["greatly appreciate", "appreciate your patience", "appreciate hearing from you"],
        mnemonic: "AP + PREC (giống PRECIOUS = quý giá) => Coi sự hỗ trợ của đồng nghiệp là điều quý giá, đáng trân trọng!",
        toeicEx: "We greatly **appreciate** your feedback on the beta version of our mobile app.",
        toeicVi: "Chúng tôi vô cùng trân trọng phản hồi của bạn về phiên bản thử nghiệm của ứng dụng di động.",
        javaEx: "I really **appreciate** your reviewing my 600-line pull request so thoroughly.",
        javaVi: "Tôi thực sự cảm kích việc bạn đã review pull request dài 600 dòng của tôi kỹ lưỡng đến vậy."
      },
      {
        word: "follow up",
        pos: "phr.v",
        ipa: "/ˈfɑːloʊ ʌp/",
        meaning: "theo sát, liên hệ lại để kiểm tra tiến độ hoặc tiếp nối việc trước đó",
        synonyms: "check back, pursue further, touch base again",
        collocations: ["follow up on an issue", "follow up with the client", "a follow-up email"],
        mnemonic: "FOLLOW (bám theo) + UP (đến cùng) => Không để ticket chìm xuồng mà chủ động hỏi thăm cập nhật!",
        toeicEx: "Sales representatives should **follow up** with prospective clients within three days.",
        toeicVi: "Nhân viên kinh doanh nên liên hệ lại để chăm sóc khách hàng tiềm năng trong vòng ba ngày.",
        javaEx: "Let me **follow up** with the security team on our firewall port request.",
        javaVi: "Để tôi hỏi lại theo sát đội bảo mật về yêu cầu mở cổng tường lửa của chúng ta."
      }
    ],
    examples: [
      {
        tag: "Client Email",
        en: "I have **forwarded** your technical questions **regarding** SSO integration to our lead architect.",
        vi: "Tôi đã chuyển tiếp các câu hỏi kỹ thuật của bạn liên quan đến tích hợp đăng nhập một lần (SSO) tới kiến trúc sư trưởng của chúng tôi.",
        note: "'forward sth to sb' (chuyển tiếp cho ai) + 'regarding + Noun' (liên quan đến)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Tenants must **notify** the property manager in writing at least thirty days before moving out.",
        vi: "Người thuê phải thông báo bằng văn bản cho quản lý tòa nhà ít nhất ba mươi ngày trước khi chuyển đi.",
        note: "'notify + tân ngữ chỉ người + in writing' (thông báo bằng văn bản)."
      },
      {
        tag: "Daily Standup",
        en: "Yesterday I **followed up** on the webhook timeout issue and **confirmed** that the fix works in UAT.",
        vi: "Hôm qua tôi đã theo sát xử lý tiếp lỗi timeout webhook và xác nhận rằng bản vá chạy tốt trên môi trường UAT.",
        note: "'follow up on + sự việc/vấn đề' + 'confirm that + mệnh đề'."
      },
      {
        tag: "TOEIC Part 7",
        en: "The orientation webinar will begin **promptly** at 2:00 P.M., so please log in five minutes early.",
        vi: "Hội thảo trực tuyến định hướng sẽ bắt đầu đúng 2 giờ chiều, vì vậy vui lòng đăng nhập sớm năm phút.",
        note: "'begin promptly at + giờ' = bắt đầu đúng boong giờ đó (bẫy nghĩa thứ 2 cực hay của promptly!)."
      },
      {
        tag: "Senior Java",
        en: "Could you **clarify** whether this endpoint should return HTTP 200 or HTTP 204 when the list is empty?",
        vi: "Bạn có thể làm rõ giúp liệu endpoint này nên trả về HTTP 200 hay HTTP 204 khi danh sách rỗng không?",
        note: "'clarify whether...' (làm rõ liệu A hay B) dùng cực nhiều khi chốt API contract."
      },
      {
        tag: "Client Email",
        en: "We would **appreciate** receiving your signed acceptance form by the end of this week.",
        vi: "Chúng tôi sẽ rất cảm kích nếu nhận được biểu mẫu nghiệm thu có chữ ký của quý vị trước cuối tuần này.",
        note: "Cấu trúc lịch sự bậc thầy: 'would appreciate + V-ing' (= would be grateful if we received...)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Ms. Gomez forgot to include the spreadsheet **attachment** in her previous message, so she sent it again.",
        vi: "Cô Gomez quên đính kèm tệp bảng tính trong tin nhắn trước nên cô ấy đã gửi lại.",
        note: "Danh từ ghép 'spreadsheet attachment' (tệp bảng tính đính kèm)."
      },
      {
        tag: "TOEIC Part 7",
        en: "A complimentary return label is **enclosed** in your package in case you wish to exchange an item.",
        vi: "Một nhãn gửi trả miễn phí được bỏ kèm trong kiện hàng của bạn phòng khi bạn muốn đổi sản phẩm.",
        note: "'be enclosed in + package/envelope' (được bỏ kèm trong gói hàng/phong bì)."
      },
      {
        tag: "Senior Java",
        en: "Please **forward** the vendor's release notes to everyone in the backend guild.",
        vi: "Vui lòng chuyển tiếp ghi chú phát hành của nhà cung cấp cho tất cả mọi người trong nhóm chuyên môn backend.",
        note: "'forward A to B' = chuyển tiếp tài liệu/email A cho người nhận B."
      },
      {
        tag: "Client Email",
        en: "Thank you for **inquiring** about our Java modernization consulting services; a brochure is attached.",
        vi: "Cảm ơn quý khách đã hỏi thông tin về dịch vụ tư vấn hiện đại hóa hệ thống Java của chúng tôi; tài liệu giới thiệu được đính kèm theo thư.",
        note: "Sau giới từ 'for' dùng V-ing: 'for inquiring about...'."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "We notified to all users that the API would undergo maintenance. ❌",
          fix: "We notified all users that the API would undergo maintenance. ✅",
          why: "'notify' là ngoại động từ đi thẳng với tân ngữ chỉ người ('notify all users'), TUYỆT ĐỐI không chèn 'to' sau notify!"
        },
        {
          bug: "I really appreciate you for helping me debug this memory leak. ❌",
          fix: "I really appreciate your helping me debug this memory leak. (hoặc: appreciate your help) ✅",
          why: "Trong tiếng Anh chuẩn TOEIC, 'appreciate' nhận tân ngữ là SỰ VIỆC/HÀNH ĐỘNG (Noun/V-ing), không đặt tân ngữ chỉ người trực tiếp làm đối tượng kiểu 'appreciate you for...'."
        },
        {
          bug: "I am writing regarding to the Java backend position. ❌",
          fix: "I am writing regarding the Java backend position. ✅",
          why: "'regarding' bản thân nó đã là một giới từ trọn vẹn (= about/concerning), không bao giờ đi kèm 'to'! (Chỉ 'with regard to' mới có 'to')."
        },
        {
          bug: "Please check the attach file for the SQL execution plan. ❌",
          fix: "Please check the attached file (hoặc: the attachment) for the SQL execution plan. ✅",
          why: "'attach' là động từ nguyên mẫu, không thể đứng bổ nghĩa trực tiếp cho danh từ 'file'. Phải dùng phân từ quá khứ làm tính từ: 'the attached file'."
        }
      ]
    },
    toeicTips: [
      "Mẹo Part 5 trong 3 giây: Thấy cấu trúc '_____ + tân ngữ chỉ người + of + danh từ' (ví dụ: '_____ passengers of gate changes'), khoanh ngay 'notify / inform / remind' (loại ngay 'announce' và 'explain' vì 2 từ này không đứng trực tiếp trước người!).",
      "Mẹo Part 5 phân biệt Giới từ: Nhìn trước chỗ trống không có từ gì mà sau chỗ trống là một Cụm danh từ nêu chủ đề ('_____ your recent order'), chọn ngay 'Regarding' hoặc 'Concerning' (loại 'According' vì thiếu 'to'!).",
      "Mẹo Part 7 săn câu suy luận: Nếu cuối email người viết nói 'Please find the revised schedule attached', câu hỏi thường hỏi 'What was sent with the e-mail?' → Tìm đáp án chứa 'an updated timetable' (paraphrase của revised schedule + attached!)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "your prompt assistance",
          "We sincerely appreciate",
          "regarding",
          "the production certificate renewal.",
          "today"
        ],
        answer: "We sincerely appreciate your prompt assistance today regarding the production certificate renewal.",
        vi: "Chúng tôi chân thành trân trọng sự hỗ trợ nhanh chóng của bạn hôm nay liên quan đến việc gia hạn chứng chỉ production."
      },
      fillBlank: {
        sentence: "The system administrator _____ all employees of the planned network upgrade yesterday.",
        answer: "notified",
        accepted: ["notified", "informed"],
        hint: "Động từ quá khứ bắt đầu bằng 'n', đi với cấu trúc '... sb of sth' (thông báo cho ai về việc gì)",
        explain: "Cấu trúc chuẩn 'notify + somebody + of + something', chia quá khứ đơn 'notified' vì có dấu hiệu 'yesterday'."
      }
    },
    quiz: [
      {
        q: "Customers with questions _____ the new billing portal may contact technical support at any time.",
        options: ["according", "regarding", "forwarding", "attaching"],
        answer: 1,
        explain: "Đáp án đúng là 'regarding' (liên quan đến / về việc). 'questions regarding the new billing portal' = các câu hỏi liên quan đến cổng thanh toán mới. Loại 'according' vì bắt buộc phải đi với 'to' ('according to'); 'forwarding' (chuyển tiếp) và 'attaching' (đính kèm) sai nghĩa."
      },
      {
        q: "Management would greatly _____ your submitting all travel expense forms before Friday afternoon.",
        options: ["notify", "inquire", "appreciate", "clarify"],
        answer: 2,
        explain: "Đáp án đúng là 'appreciate' (trân trọng/cảm kích). Cấu trúc kinh điển 'would greatly appreciate + tính từ sở hữu + V-ing' (rất cảm kích nếu bạn nộp...). Các động từ 'notify', 'inquire', 'clarify' không đi với cấu trúc 'your submitting'."
      },
      {
        q: "Please review the _____ architecture specification and send back your comments by Wednesday.",
        options: ["attach", "attached", "attachment", "attaching"],
        answer: 1,
        explain: "Đáp án đúng là 'attached' (tính từ phân từ quá khứ: được đính kèm), đứng sau mạo từ 'the' và bổ nghĩa cho cụm danh từ 'architecture specification'. Loại 'attach' (động từ), 'attaching' (chủ động sai nghĩa với tài liệu), và 'attachment' (danh từ 'tệp đính kèm' không ghép kiểu 'attachment specification')."
      }
    ]
  },

  V1_3: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Tần suất Cao TOEIC 450–650+ (Part 5–7: Tin tuyển dụng, Đánh giá & Nhân sự)",
    javaContext: "Đọc hiểu 100% Job Description (JD) tuyển Senior Java lương USD, tham gia phỏng vấn ứng viên cho team, hướng dẫn (mentor) nhân viên mới trong kỳ thử việc và viết bản tự đánh giá xét thăng chức.",
    teacherIntro: "Anh em lập trình viên nào cũng sẽ trải qua cả hai vai trò: lúc là ứng viên ('applicant / candidate') đi săn job ngon, lúc lại ngồi ghế người phỏng vấn kỹ thuật, hướng dẫn ('mentor') đàn em mới hội nhập ('onboard') và đánh giá ('evaluate') kết quả thử việc ('probation'). Thú vị thay, Nhân sự & Tuyển dụng cũng chính là TOP 3 chủ đề xuất hiện nhiều nhất trong toàn bộ đề thi TOEIC! Học xong bài V1.3, bạn vừa 'bắt bài' mọi quảng cáo tuyển dụng trong TOEIC Part 7, vừa nắm trọn bộ từ khóa đắt giá để nâng tầm CV và kỳ Performance Review cuối năm.",
    javaAnalogy: {
      title: "Quy trình Tuyển dụng & Nhân sự giống hệt Vòng đời của một Spring Bean (Bean Lifecycle)",
      body: "Hãy liên tưởng một nhân sự gia nhập công ty với vòng đời Bean trong Spring IoC Container: Nộp 'resume' là đăng ký BeanDefinition; lọc 'qualifications & requirements' giống như kiểm tra @ConditionalOnProperty xem có đủ điều kiện khởi tạo không; vượt qua 'interview' để được 'hire' là bước Instantiation; quá trình 'onboard' cấp tài khoản và cài môi trường chính là Dependency Injection (@PostConstruct); 'probation' (thử việc) là giai đoạn Canary/Health-check theo dõi độ ổn định; và khi 'evaluate' xuất sắc để 'promote' lên Senior chính là nâng cấp instance lên Primary Leader!"
    },
    objectives: [
      "Làm chủ 10 từ vựng trọng tâm về Tuyển dụng, Thử việc, Đánh giá và Thăng tiến kèm họ từ (Word Family) hay thi nhất.",
      "Phân biệt rạch ròi sắc thái giữa applicant vs candidate, qualification vs requirement, và 2 nghĩa hoàn toàn khác nhau của động từ 'promote' trong TOEIC.",
      "Đọc nhanh các mẩu Job Posting trong TOEIC Part 7 và JD Senior Java trên LinkedIn mà không vấp bất kỳ thuật ngữ điều kiện ứng tuyển nào."
    ],
    formulaCards: [
      {
        label: "Word Family Siêu Kinh Điển • APPLY & QUALIFY",
        formula: "apply (v) → application (n: đơn) → applicant (n: người nộp đơn) | qualify (v) → qualification (n: bằng cấp/năng lực) → qualified (adj: đủ năng lực)",
        note: "Mẹo Part 5: Đứng sau 'highly / well / fully' trước danh từ chỉ người luôn là 'qualified' ('a highly qualified candidate' — KHÔNG chọn 'qualifying'!)."
      },
      {
        label: "Word Family • EVALUATE & PROMOTE",
        formula: "evaluate (v) → evaluation (n: sự đánh giá) | promote (v) → promotion (n: sự thăng chức / chiến dịch khuyến mãi)",
        note: "Đa nghĩa ăn điểm TOEIC: 'promote' đi với Nhân sự = thăng chức ('promoted to Tech Lead'); 'promote' đi với Marketing = quảng bá, thúc đẩy doanh số!"
      },
      {
        label: "Cụm Collocation Tuyển Dụng • REQUIREMENT & RESUME",
        formula: "meet / fulfill / satisfy the requirements (đáp ứng yêu cầu) | submit a resume (nộp CV) | hire / recruit new staff",
        note: "Trong TOEIC Part 7: 'possess a bachelor's degree in Computer Science' trong bài đọc thường được paraphrase thành 'meet the educational requirements'."
      },
      {
        label: "Hội Nhập & Thử Việc • ONBOARD, PROBATION & MENTOR",
        formula: "onboard new hires (hội nhập nhân viên mới) | on probation / probationary period (trong thời gian thử việc) | assign a mentor (phân công người kèm cặp)",
        note: "Giới từ cố định: 'on probation' (đang trong thời gian thử việc, ví dụ 2 tháng đầu)."
      }
    ],
    sections: [
      {
        heading: "1. Từ Nộp Đơn Đến Trúng Tuyển: Applicant – Candidate – Resume – Qualification – Requirement",
        paragraphs: [
          "Trong các thông báo tuyển dụng của ETS TOEIC và JD công ty công nghệ quốc tế, bốn từ 'applicant', 'candidate', 'qualification' và 'requirement' xuất hiện gần như ở mọi đoạn văn. Nhiều bạn dịch chung cả 'applicant' và 'candidate' là 'ứng viên', dẫn đến bối rối khi đọc câu hỏi chi tiết.",
          "Thực tế, 'applicant' nhấn mạnh người chủ động nộp hồ sơ ('submit an application/resume'), còn 'candidate' nhấn mạnh người đang được xem xét, sàng lọc cho một vị trí hoặc giải thưởng (thậm chí chưa cần tự nộp đơn, ví dụ HR săn đầu người giới thiệu 'a strong candidate for CTO')."
        ],
        bullets: [
          "applicant FOR a position: 'Over 200 applicants applied for the Junior Java position.'",
          "candidate FOR a role: 'Only the top five candidates will be invited for a final technical interview before we hire one.'",
          "requirement (yêu cầu từ phía CÔNG TY đặt ra) ↔ qualification (trình độ, chứng chỉ AWS/Java, kinh nghiệm mà ỨNG VIÊN sở hữu để đáp ứng yêu cầu đó).",
          "resume (/ˈrezəmeɪ/ — tiếng Anh Mỹ dùng trong TOEIC, đôi khi viết có dấu 'résumé'): Đừng đọc nhầm thành động từ 'resume' (/rɪˈzuːm/ = tiếp tục lại sau khi tạm dừng, giống Thread.resume()!)."
        ]
      },
      {
        heading: "2. Gia Nhập Đội Ngũ Kỹ Thuật: Hire – Onboard – Probation – Mentor",
        paragraphs: [
          "Sau vòng phỏng vấn ('interview') và quyết định tuyển dụng ('hire'), nhân viên mới ('new hire') bước vào giai đoạn hội nhập ('onboarding') và thử việc ('probation'). Trong các công ty phần mềm lớn, quy trình onboarding tốt giúp lập trình viên mới clone repo, dựng Docker local và đẩy commit đầu tiên chỉ trong vài ngày.",
          "Đi kèm quá trình đó luôn có một 'mentor' (thường là Senior Java trong team) hướng dẫn kiến trúc hệ thống, quy chuẩn code và văn hóa công ty."
        ],
        bullets: [
          "hire (v: tuyển dụng / n: new hire = nhân viên mới tuyển): 'We plan to hire three backend engineers this quarter.'",
          "onboard (v) / onboarding (n): 'Our automated setup scripts reduced developer onboarding time from three days to two hours.'",
          "probation (n) / on probation: 'New employees are placed on a three-month probation period before signing a permanent contract.'",
          "mentor (n: người hướng dẫn / v: kèm cặp): Vừa là danh từ chỉ người, vừa là động từ trực tiếp ('mentor junior developers')."
        ]
      },
      {
        heading: "3. Đánh Giá Hiệu Suất & Thăng Tiến: Evaluate – Promote (Và Bẫy Đa Nghĩa TOEIC)",
        paragraphs: [
          "Định kỳ mỗi 6 tháng hoặc 1 năm, các công ty đều tổ chức 'performance evaluation' (đánh giá năng lực) để xét tăng lương hoặc thăng chức ('promotion'). Động từ 'evaluate' mang sắc thái phân tích khách quan dựa trên tiêu chí rõ ràng (KPIs, chất lượng code, độ ổn định hệ thống).",
          "Riêng với động từ 'promote' và danh từ 'promotion', thí sinh TOEIC bắt buộc phải đọc ngữ cảnh xung quanh chỗ trống để biết đề đang nói về Nhân sự hay Tiếp thị!"
        ],
        bullets: [
          "evaluate sb ON + tiêu chí: 'Engineers are evaluated on both technical delivery and team collaboration.'",
          "Nghĩa 1 của PROMOTE (Nhân sự): 'be promoted TO + chức vụ mới' ('Ms. Tran was promoted to Principal Engineer').",
          "Nghĩa 2 của PROMOTE (Thương mại/Sự kiện): thúc đẩy, quảng bá ('launch a campaign to promote the new cloud service' / 'sales promotion' = chương trình khuyến mãi)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "applicant",
        pos: "n",
        ipa: "/ˈæplɪkənt/",
        meaning: "người nộp đơn (xin việc, xin học bổng, đăng ký chương trình)",
        synonyms: "job seeker, contender",
        collocations: ["successful applicant", "qualified applicants", "screen applicants"],
        mnemonic: "APPLY (nộp đơn) + ICANT (đuôi -ant chỉ người, giống 'assistant', 'participant') => Người bấm nút Apply nộp hồ sơ!",
        toeicEx: "**Applicants** must submit two letters of recommendation along with their forms.",
        toeicVi: "Người nộp đơn phải gửi kèm hai thư giới thiệu cùng với biểu mẫu của mình.",
        javaEx: "Each **applicant** for the Java role completes a 60-minute coding challenge on HackerRank.",
        javaVi: "Mỗi người nộp đơn cho vị trí Java đều thực hiện một bài kiểm tra lập trình 60 phút trên HackerRank."
      },
      {
        word: "candidate",
        pos: "n",
        ipa: "/ˈkændɪdət/",
        meaning: "ứng viên (người đang được cân nhắc, phỏng vấn cho một vị trí)",
        synonyms: "prospect, nominee, contender",
        collocations: ["ideal candidate", "shortlist candidates", "interview a candidate"],
        mnemonic: "CAN + DID + ATE => Người CÓ THỂ làm (can), ĐÃ từng làm thực tế (did) nên trở thành ỨNG VIÊN sáng giá!",
        toeicEx: "The hiring committee interviewed four strong **candidates** for the branch manager role.",
        toeicVi: "Hội đồng tuyển dụng đã phỏng vấn bốn ứng viên nặng ký cho vị trí giám đốc chi nhánh.",
        javaEx: "The ideal **candidate** has deep experience with Java 21, Kafka, and distributed transactions.",
        javaVi: "Ứng viên lý tưởng là người có kinh nghiệm sâu về Java 21, Kafka và giao dịch phân tán."
      },
      {
        word: "resume",
        pos: "n",
        ipa: "/ˈrezəmeɪ/",
        meaning: "sơ yếu lý lịch tóm tắt quá trình học tập và làm việc (CV)",
        synonyms: "curriculum vitae (CV), work profile",
        collocations: ["submit a resume", "update one's resume", "attach a resume"],
        mnemonic: "Đọc là /ˈrezəmeɪ/ (âm cuối 'mây' bay cao sự nghiệp!), khác hẳn động từ /rɪˈzuːm/ (chạy tiếp luồng)!",
        toeicEx: "Interested professionals should e-mail their **resume** to the human resources office.",
        toeicVi: "Các chuyên gia quan tâm nên gửi email bản sơ yếu lý lịch của mình tới văn phòng nhân sự.",
        javaEx: "Highlighting measurable latency reductions made his Senior Java **resume** stand out.",
        javaVi: "Việc làm nổi bật các con số giảm độ trễ đo lường được đã giúp bản CV Senior Java của anh ấy tỏa sáng."
      },
      {
        word: "qualification",
        pos: "n",
        ipa: "/ˌkwɑːlɪfɪˈkeɪʃn/",
        meaning: "trình độ chuyên môn, bằng cấp, kỹ năng giúp ai đó đủ tư cách đảm nhận việc",
        synonyms: "credential, competence, eligibility",
        collocations: ["academic qualifications", "minimum qualifications", "possess the qualifications"],
        mnemonic: "Giống annotation @Qualifier trong Spring — chỉ định đúng 'phẩm chất/năng lực' chuyên biệt của Bean được chọn!",
        toeicEx: "Ms. Cho has impressive **qualifications** in international corporate tax law.",
        toeicVi: "Cô Cho có trình độ chuyên môn ấn tượng về luật thuế doanh nghiệp quốc tế.",
        javaEx: "Oracle Certified Professional is a nice-to-have **qualification**, though practical JVM tuning matters more.",
        javaVi: "Chứng chỉ Oracle Certified Professional là một bằng cấp điểm cộng, dù kỹ năng tối ưu JVM thực chiến quan trọng hơn."
      },
      {
        word: "requirement",
        pos: "n",
        ipa: "/rɪˈkwaɪərmənt/",
        meaning: "yêu cầu, điều kiện bắt buộc cần đáp ứng",
        synonyms: "prerequisite, condition, specification",
        collocations: ["meet the requirements", "minimum requirements", "business requirements"],
        mnemonic: "Quá quen với dân IT: Functional & Non-functional REQUIREMENTS — những điều kiện bắt buộc phải thỏa mãn!",
        toeicEx: "Fluency in both English and Japanese is a key **requirement** for this coordinator post.",
        toeicVi: "Thông thạo cả tiếng Anh và tiếng Nhật là yêu cầu then chốt cho vị trí điều phối viên này.",
        javaEx: "Five years of production Spring Boot experience is a strict **requirement** for the Tech Lead role.",
        javaVi: "Năm năm kinh nghiệm vận hành Spring Boot thực tế là yêu cầu bắt buộc cho vị trí Tech Lead."
      },
      {
        word: "onboard",
        pos: "v",
        ipa: "/ˈɑːnbɔːrd/",
        meaning: "hội nhập nhân sự mới (hướng dẫn quy trình, cấp quyền, làm quen dự án); hoặc tích hợp đối tác mới",
        synonyms: "induct, integrate, orient",
        collocations: ["onboard new developers", "smooth onboarding process", "onboarding checklist"],
        mnemonic: "ON + BOARD (bước lên boong tàu!) => Đón thủy thủ mới lên con tàu dự án và chỉ dẫn cách vận hành!",
        toeicEx: "Our HR team redesigned the training portal to **onboard** remote staff more effectively.",
        toeicVi: "Đội nhân sự của chúng tôi đã thiết kế lại cổng đào tạo để hội nhập nhân viên từ xa hiệu quả hơn.",
        javaEx: "I wrote a Docker Compose guide so we can **onboard** new backend engineers in one morning.",
        javaVi: "Tôi đã viết hướng dẫn Docker Compose để chúng ta có thể giúp kỹ sư backend mới hội nhập chỉ trong một buổi sáng."
      },
      {
        word: "probation",
        pos: "n",
        ipa: "/proʊˈbeɪʃn/",
        meaning: "thời gian thử việc (để kiểm chứng năng lực trước khi ký chính thức)",
        synonyms: "trial period, probationary period",
        collocations: ["on probation", "two-month probation period", "pass probation"],
        mnemonic: "PROB (gốc từ PROBE = thăm dò, giống Kubernetes Liveness/Readiness Probe!) => Giai đoạn thăm dò xem nhân sự mới chạy có ổn định không!",
        toeicEx: "Full health insurance benefits take effect after employees complete their **probation**.",
        toeicVi: "Quyền lợi bảo hiểm sức khỏe toàn diện có hiệu lực sau khi nhân viên hoàn thành thời gian thử việc.",
        javaEx: "He delivered two critical payment features during **probation** and received an early permanent offer.",
        javaVi: "Cậu ấy đã bàn giao hai tính năng thanh toán quan trọng trong kỳ thử việc và được ký chính thức sớm."
      },
      {
        word: "mentor",
        pos: "n / v",
        ipa: "/ˈmentɔːr/",
        meaning: "người hướng dẫn giàu kinh nghiệm; cố vấn, dìu dắt nhân viên trẻ",
        synonyms: "coach, advisor, guide",
        collocations: ["assign a mentor", "mentor junior engineers", "mentorship program"],
        mnemonic: "MEN + TOR (người dẫn đường trí tuệ - gốc từ 'mental') => Bậc đàn anh truyền nghề code sạch cho Junior!",
        toeicEx: "Every summer intern is paired with an experienced **mentor** from the engineering team.",
        toeicVi: "Mỗi thực tập sinh mùa hè đều được ghép cặp với một người hướng dẫn giàu kinh nghiệm từ đội kỹ thuật.",
        javaEx: "As a Senior Java Developer, you are expected to **mentor** junior teammates through code reviews.",
        javaVi: "Ở vị trí Senior Java Developer, bạn được kỳ vọng sẽ dìu dắt các đồng đội trẻ thông qua hoạt động review code."
      },
      {
        word: "evaluate",
        pos: "v",
        ipa: "/ɪˈvæljueɪt/",
        meaning: "đánh giá, thẩm định kỹ lưỡng (năng lực nhân sự, hiệu năng giải pháp)",
        synonyms: "assess, appraise, review",
        collocations: ["evaluate employee performance", "evaluate options", "annual evaluation"],
        mnemonic: "Nhìn rõ chữ VALUE nằm ngay ở giữa E-VALU-ATE => Đo lường xem GIÁ TRỊ (value) thực sự đạt bao nhiêu!",
        toeicEx: "Department supervisors **evaluate** staff performance twice a year.",
        toeicVi: "Các quản lý bộ phận đánh giá hiệu suất làm việc của nhân viên hai lần mỗi năm.",
        javaEx: "During the technical interview, we **evaluate** how candidates reason about concurrency bugs.",
        javaVi: "Trong buổi phỏng vấn kỹ thuật, chúng tôi đánh giá cách ứng viên tư duy lập luận về các lỗi đa luồng."
      },
      {
        word: "promote",
        pos: "v",
        ipa: "/prəˈmoʊt/",
        meaning: "thăng chức cho ai; thúc đẩy, quảng bá sản phẩm/ý tưởng",
        synonyms: "advance, upgrade, elevate; advertise, encourage",
        collocations: ["be promoted to manager", "promote from within", "promote teamwork"],
        mnemonic: "PRO (tiến về phía trước) + MOTE (di chuyển, giống 'motion') => Đẩy ai đó tiến lên vị trí cao hơn (thăng chức)!",
        toeicEx: "After leading the cloud transition successfully, Ms. Lin was **promoted** to Vice President.",
        toeicVi: "Sau khi dẫn dắt quá trình chuyển đổi đám mây thành công, bà Lin đã được thăng chức lên Phó Chủ tịch.",
        javaEx: "Our engineering culture **promotes** clean architecture and blameless postmortems.",
        javaVi: "Văn hóa kỹ thuật của chúng tôi thúc đẩy kiến trúc sạch và tinh thần mổ xẻ sự cố không đổ lỗi."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Only **applicants** who **meet all the minimum requirements** will be contacted for an **interview**.",
        vi: "Chỉ những người nộp đơn đáp ứng toàn bộ yêu cầu tối thiểu mới được liên hệ mời phỏng vấn.",
        note: "Combo 3 từ tủ trong 1 câu chuẩn TOEIC: 'applicants' + 'meet requirements' + 'contacted for an interview'."
      },
      {
        tag: "Senior Java",
        en: "Our squad is looking to **hire** a mid-level developer whom I can **mentor** into a backend specialist.",
        vi: "Nhóm chúng tôi đang tìm tuyển một lập trình viên tầm trung mà tôi có thể kèm cặp thành chuyên gia backend.",
        note: "'look to hire' (đang tìm tuyển) + 'mentor sb into + vai trò'."
      },
      {
        tag: "TOEIC Part 7",
        en: "The company prefers to **promote** talented employees **from within** rather than recruiting externally.",
        vi: "Công ty ưu tiên thăng chức cho nhân viên tài năng từ nội bộ hơn là tuyển dụng bên ngoài.",
        note: "Cụm cực hay trong bài đọc HR: 'promote from within' (đề bạt nhân sự nội bộ)."
      },
      {
        tag: "Daily Standup",
        en: "I will spend two hours this afternoon **onboarding** Minh, our **new hire**, onto the payment service repo.",
        vi: "Chiều nay tôi sẽ dành hai tiếng hướng dẫn hội nhập cho Minh, nhân sự mới của chúng ta, vào kho mã dịch vụ thanh toán.",
        note: "'spend time + V-ing': 'onboarding sb onto + hệ thống/dự án'."
      },
      {
        tag: "TOEIC Part 5",
        en: "Mr. Alvarez is considered the most **qualified** **candidate** to lead the European expansion.",
        vi: "Ông Alvarez được xem là ứng viên đủ năng lực nhất để dẫn dắt đợt mở rộng tại châu Âu.",
        note: "Luôn nhớ cụm 'qualified candidate' (dùng tính từ đuôi -ed!)."
      },
      {
        tag: "Client Email",
        en: "Attached is the technical **evaluation** rubric we used during yesterday's live-coding **interview**.",
        vi: "Đính kèm là bảng tiêu chí đánh giá kỹ thuật mà chúng tôi đã dùng trong buổi phỏng vấn code trực tiếp hôm qua.",
        note: "Danh từ 'evaluation' đứng bổ nghĩa trong cụm 'evaluation rubric / evaluation form'."
      },
      {
        tag: "Senior Java",
        en: "Tailoring your **resume** to match the keywords in the job **requirements** helps pass ATS filters.",
        vi: "Tinh chỉnh CV của bạn khớp với các từ khóa trong mục yêu cầu công việc sẽ giúp vượt qua bộ lọc hồ sơ tự động.",
        note: "'tailor one's resume' = chỉnh sửa CV cho đo ni đóng giày với vị trí ứng tuyển."
      },
      {
        tag: "TOEIC Part 7",
        en: "Staff members **on probation** are eligible for paid public holidays but not annual bonus shares.",
        vi: "Nhân viên đang trong thời gian thử việc được hưởng nghỉ lễ có lương nhưng chưa được chia thưởng cổ phần năm.",
        note: "'staff members on probation' = nhân viên đang thử việc."
      },
      {
        tag: "Daily Standup",
        en: "Before we **hire** an external agency, let's **evaluate** whether our internal platform team can build it.",
        vi: "Trước khi thuê đơn vị bên ngoài, hãy đánh giá xem đội nền tảng nội bộ của chúng ta có tự xây dựng được không.",
        note: "'hire' dùng được cho cả tuyển nhân viên lẫn thuê đơn vị/chuyên gia tư vấn."
      },
      {
        tag: "TOEIC Part 5",
        en: "To celebrate her **promotion** to Engineering Director, the team organized a surprise luncheon.",
        vi: "Để chúc mừng việc cô ấy được thăng chức lên Giám đốc Kỹ thuật, cả nhóm đã tổ chức một bữa trưa bất ngờ.",
        note: "'promotion TO + chức danh mới' (danh từ của promote)."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "We are looking for a highly qualifying Java developer. ❌",
          fix: "We are looking for a highly qualified Java developer. ✅",
          why: "Tính từ chuẩn chỉ người 'có đủ năng lực/bằng cấp' là 'qualified' (đuôi -ed), không dùng 'qualifying' trước danh từ chỉ người!"
        },
        {
          bug: "Over fifty applications were interviewed for the QA Lead role. ❌",
          fix: "Over fifty applicants (hoặc candidates) were interviewed for the QA Lead role. ✅",
          why: "Bẫy đuôi danh từ kinh điển Part 5: 'application' là TỜ ĐƠN (vật), không thể 'được phỏng vấn' ('were interviewed')! Phải chọn danh từ chỉ NGƯỜI là 'applicants'."
        },
        {
          bug: "She was promoted as Senior Solution Architect last month. ❌",
          fix: "She was promoted to Senior Solution Architect last month. ✅",
          why: "Động từ 'promote' đi với giới từ 'TO' trước chức danh mới ('be promoted TO + title'), trong khi 'appoint' có thể đi với 'as'."
        },
        {
          bug: "I am currently in probation for two months at a Fintech startup. ❌",
          fix: "I am currently on probation for two months at a Fintech startup. ✅",
          why: "Cụm giới từ chuẩn chỉ trạng thái đang thử việc là 'ON probation' (hoặc 'in my probationary period')."
        }
      ]
    },
    toeicTips: [
      "Mẹo Part 5 phân biệt Danh từ chỉ Vật vs Người: Thấy đuôi '-tion' (application, qualification, evaluation) là VẬT/SỰ VIỆC; thấy đuôi '-ant / -ee / -or / -er' (applicant, interviewee, mentor, employer) là NGƯỜI. Nhìn động từ phía sau (ví dụ 'were hired / must submit') để chốt Người hay Vật trong 3 giây!",
      "Mẹo Part 7 Job Ad: Khi câu hỏi hỏi 'What is stated as a requirement?' (Đâu là yêu cầu bắt buộc?), hãy dò trong bài các từ khóa 'must', 'required', 'mandatory', 'minimum of X years'. Cẩn thận bẫy 'preferred / a plus / desirable' — đó chỉ là điểm cộng ưu tiên chứ KHÔNG phải bắt buộc!",
      "Mẹo Nghe & Đọc: Gặp danh từ 'promotion' trong câu có 'discount / 20% off / new product' thì dịch là 'chương trình khuyến mãi/quảng bá'; gặp trong câu có 'manager / department / congratulate' thì dịch là 'sự thăng chức'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "was promoted to",
          "After passing probation,",
          "Lead Java Engineer",
          "within two years.",
          "the talented candidate"
        ],
        answer: "After passing probation, the talented candidate was promoted to Lead Java Engineer within two years.",
        vi: "Sau khi vượt qua kỳ thử việc, ứng viên tài năng đó đã được thăng chức lên Kỹ sư trưởng Java chỉ trong vòng hai năm."
      },
      fillBlank: {
        sentence: "All job _____ must attach a copy of their university transcripts to the online form.",
        answer: "applicants",
        accepted: ["applicants", "candidates"],
        hint: "Danh từ số nhiều chỉ người nộp đơn, bắt đầu bằng chữ 'a' (họ từ của apply)",
        explain: "Chủ ngữ của động từ 'must attach' phải là danh từ chỉ người số nhiều ('All job applicants' = Tất cả người nộp đơn xin việc)."
      }
    },
    quiz: [
      {
        q: "To be considered for the Senior Cloud Architect position, _____ must have at least five years of hands-on AWS experience.",
        options: ["applications", "applicants", "applicable", "applying"],
        answer: 1,
        explain: "Đáp án đúng là 'applicants' (những người nộp đơn - danh từ chỉ người số nhiều làm chủ ngữ cho 'must have ... experience'). Loại 'applications' (đơn xin việc - danh từ chỉ vật không thể có kinh nghiệm AWS!), 'applicable' (tính từ: có thể áp dụng), và 'applying' (V-ing thiếu danh từ)."
      },
      {
        q: "Each new engineer is assigned a senior _____ who provides technical guidance during the first ninety days.",
        options: ["probation", "resume", "mentor", "requirement"],
        answer: 2,
        explain: "Đáp án đúng là 'mentor' (người hướng dẫn), khớp hoàn toàn với mệnh đề quan hệ chỉ người 'who provides technical guidance' ngay phía sau. Ba đáp án 'probation' (thử việc), 'resume' (sơ yếu lý lịch), 'requirement' (yêu cầu) đều là danh từ chỉ vật/khái niệm, không đi với 'who'."
      },
      {
        q: "Following an outstanding annual performance review, Mr. Hoang was _____ to Head of Backend Engineering.",
        options: ["evaluated", "onboarded", "inquired", "promoted"],
        answer: 3,
        explain: "Đáp án đúng là 'promoted' (được thăng chức). Dấu hiệu quyết định là giới từ 'to' đi kèm chức danh cấp cao 'Head of Backend Engineering' và ngữ cảnh 'outstanding annual performance review' (kết quả đánh giá năm xuất sắc)."
      }
    ]
  },
  V1_4: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Tần suất Cao TOEIC 450–650+ (Part 3, 4, 6 & 7: Đơn hàng, Hóa đơn & Bảo hành)",
    javaContext: "Xin báo giá bản quyền phần mềm (JetBrains, AWS, Datadog), đối soát hóa đơn thanh toán trong dự án E-commerce/Fintech, quản lý tồn kho thiết bị và yêu cầu đổi trả phần cứng lỗi.",
    teacherIntro: "Chào mừng anh em đến với 'mỏ vàng điểm số' của đề thi TOEIC! Nếu đã từng làm hệ thống E-commerce, ERP hay Payment Gateway bằng Java, bạn sẽ thấy bài V1.4 này quen thuộc như đọc tên các Entity trong Database: Order, Invoice, Receipt, Shipment, Inventory, Vendor! Tuy nhiên, đi thi TOEIC cực kỳ dễ mất điểm nếu nhầm giữa 'invoice' (đòi tiền) và 'receipt' (đã thu tiền), hay phát âm sai chữ 'p' câm trong 'receipt' dẫn đến nghe trượt ở Part 3. Hãy cùng thầy gỡ sạch từng cặp khái niệm và ghim chặt 30 câu thực chiến vào trí nhớ nhé!",
    javaAnalogy: {
      title: "Luồng Mua Sắm TOEIC chính là State Machine của Order Service trong E-commerce",
      body: "Hãy mường tượng luồng xử lý đơn hàng trong hệ thống Microservices bạn code: Bước 1 hỏi 'estimate / quote' từ 'vendor / supplier' (báo giá); Bước 2 gọi API 'place an order' và kiểm tra 'inventory' (tồn kho); Bước 3 'vendor' xuất 'invoice' (trạng thái PENDING_PAYMENT); Bước 4 sau khi thanh toán thành công, hệ thống trả về 'receipt' (PAID); Bước 5 kho tạo 'shipment' giao hàng; và nếu khách nhận phải thiết bị 'defective' nhưng còn 'under warranty', luồng RMA sẽ kích hoạt để 'replace' sản phẩm mới!"
    },
    objectives: [
      "Phân biệt tức thì không bao giờ nhầm lẫn giữa invoice vs receipt, estimate vs quote, và vendor vs supplier.",
      "Nắm chắc các giới từ và cụm từ cố định hay ra thi Part 5 nhất: under warranty, out of stock, place an order, replace A with B.",
      "Nghe chuẩn các từ có âm câm hoặc trọng âm đặc biệt như receipt (/rɪˈsiːt/ - câm p) và inventory (/ˈɪnvəntɔːri/)."
    ],
    formulaCards: [
      {
        label: "Cặp Đôi Tài Chính Kinh Điển • INVOICE vs RECEIPT",
        formula: "issue an INVOICE (xuất hóa đơn YÊU CẦU thanh toán — trả sau) → issue a RECEIPT (xuất biên lai XÁC NHẬN đã trả tiền)",
        note: "Mẹo đọc Part 7: Thấy 'payment is due within 30 days' → văn bản đó là INVOICE. Thấy 'paid by credit card / thank you for your purchase' → đó là RECEIPT!"
      },
      {
        label: "Word Family • DEFECT & REPLACE",
        formula: "defect (n: lỗi hỏng) → defective (adj: bị lỗi) | replace (v: thay thế) → replacement (n: sự thay thế / linh kiện thay thế)",
        note: "Cấu trúc vàng Part 5: 'replace old servers WITH cloud instances' (thay A BẰNG B — luôn đi với giới từ WITH!) và 'free of charge under warranty'."
      },
      {
        label: "Báo Giá & Đặt Hàng • ESTIMATE, QUOTE & ORDER",
        formula: "request a quote / cost estimate (xin báo giá) → place an order with a supplier/vendor (đặt hàng) → track a shipment (theo dõi lô hàng)",
        note: "'estimate' vừa là danh từ (/ˈestɪmət/) vừa là động từ (/ˈestɪmeɪt/); trong khi 'quotation / quote' là mức giá chào cụ thể."
      },
      {
        label: "Bảo Hành & Tồn Kho • WARRANTY & INVENTORY",
        formula: "under warranty (còn trong hạn bảo hành) | take / conduct an inventory (kiểm kê kho) | keep in inventory (lưu kho)",
        note: "Đừng nhầm 'warranty' (bảo hành sửa/đổi sản phẩm phần cứng) với 'guarantee' (cam kết nói chung hoặc đảm bảo hoàn tiền)."
      }
    ],
    sections: [
      {
        heading: "1. Trước & Sau Thanh Toán: Estimate – Quote – Invoice – Receipt",
        paragraphs: [
          "Trong Part 7 dạng đoạn đôi và đoạn ba (Double/Triple Passages), ETS cực kỳ thích ghép một bảng Báo giá ('Quote / Estimate') đi kèm một Hóa đơn ('Invoice') và một Email khiếu nại để kiểm tra khả năng đối chiếu số liệu của thí sinh.",
          "Khi team kỹ thuật muốn mua gói Enterprise của GitHub, SonarQube hay cụm server mới, bạn cũng phải đi đúng trình tự: xin 'quote' từ 'vendor' để sếp duyệt ngân sách, sau đó nhận 'invoice' chuyển cho kế toán thanh toán rồi lưu lại 'receipt'."
        ],
        bullets: [
          "estimate (ước tính chi phí sơ bộ, có thể xê dịch nhẹ) vs quote / quotation (báo giá chốt cụ thể từng hạng mục trong thời hạn hiệu lực).",
          "invoice: Luôn đi cùng 'invoice number', 'amount due' (số tiền phải trả), 'payment terms: Net 30' (hạn thanh toán trong 30 ngày).",
          "receipt (/rɪˈsiːt/ — TUYỆT ĐỐI KHÔNG đọc chữ 'p'!): Bằng chứng đã thanh toán, bắt buộc phải giữ ('keep your receipt') nếu muốn đổi trả hàng."
        ]
      },
      {
        heading: "2. Chuỗi Cung Ứng & Vận Chuyển: Vendor – Supplier – Order – Shipment – Inventory",
        paragraphs: [
          "Hai danh từ 'vendor' và 'supplier' đều dịch là nhà cung cấp và thường thay thế cho nhau (paraphrase) giữa bài đọc và câu hỏi TOEIC. Tuy nhiên trong ngành IT, 'vendor' cực kỳ phổ biến khi chỉ các hãng bán phần mềm, giải pháp Cloud hoặc thiết bị đầu cuối (cloud vendor, third-party vendor), còn 'supplier' thiên về bên cung ứng linh kiện, nguyên vật liệu số lượng lớn.",
          "Lưu ý đặc biệt với từ 'shipment': dù có chữ 'ship', trong tiếng Anh thương mại 'shipment' dùng cho MỌI lô hàng vận chuyển bằng xe tải, máy bay hay tàu biển chứ không riêng gì đường thủy!"
        ],
        bullets: [
          "place an order FOR sth WITH a supplier: 'We placed an bulk order for 50 monitors with our local supplier.'",
          "shipment (n: lô hàng / sự giao hàng): 'The shipment was delayed at customs' (Lô hàng bị kẹt ở hải quan).",
          "inventory (n: hàng tồn kho / danh mục tài sản): Trong DevOps/Ansible, 'inventory file' chính là danh sách kiểm kê toàn bộ các máy chủ đích!"
        ]
      },
      {
        heading: "3. Xử Lý Hàng Lỗi & Bảo Hành: Defective – Warranty – Replace",
        paragraphs: [
          "Một kịch bản 'kinh điển không đề TOEIC nào thiếu': Khách hàng đặt mua thiết bị văn phòng, mở thùng ra phát hiện một chiếc bị lỗi ('defective / faulty / damaged'), bèn kiểm tra phiếu bảo hành ('warranty') và viết email yêu cầu đổi cái mới ('replace / send a replacement').",
          "Nắm vững tam giác từ vựng này giúp bạn xử lý gọn đẹp cả bài nghe phàn nàn ở Part 3 lẫn bài viết thư phản hồi khách hàng ở Part 6."
        ],
        bullets: [
          "defective (adj): Bổ nghĩa trực tiếp cho danh từ chỉ sản phẩm ('a defective laptop battery', 'defective components'). Danh từ tương ứng là 'defect' (lỗi).",
          "under warranty: Cụm giới từ bất biến mang nghĩa 'đang còn hạn bảo hành' ('Since the router is still under warranty, the repair is free').",
          "replace A with B: 'We decided to replace the legacy SOAP client with a reactive WebClient.' (Chú ý dùng WITH, không dùng BY khi có chủ ngữ thực hiện!)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "invoice",
        pos: "n",
        ipa: "/ˈɪnvɔɪs/",
        meaning: "hóa đơn thương mại (chứng từ yêu cầu khách hàng thanh toán tiền hàng/dịch vụ)",
        synonyms: "bill, statement of charges",
        collocations: ["issue an invoice", "settle an invoice", "outstanding invoice"],
        mnemonic: "IN + VOICE (cất tiếng đòi tiền!) => Tờ giấy bên bán gửi sang 'lên tiếng' yêu cầu bên mua thanh toán!",
        toeicEx: "Payment must be made within thirty days of receiving the **invoice**.",
        toeicVi: "Việc thanh toán phải được thực hiện trong vòng ba mươi ngày kể từ khi nhận hóa đơn.",
        javaEx: "Our billing microservice generates a PDF **invoice** automatically at the end of each billing cycle.",
        javaVi: "Microservice thanh toán của chúng tôi tự động tạo hóa đơn PDF vào cuối mỗi chu kỳ cước."
      },
      {
        word: "receipt",
        pos: "n",
        ipa: "/rɪˈsiːt/",
        meaning: "biên lai thu tiền; hoặc sự nhận được (hàng hóa/email)",
        synonyms: "proof of purchase, sales slip; acknowledgment",
        collocations: ["keep the receipt", "upon receipt of", "confirm receipt"],
        mnemonic: "Họ hàng của động từ RECEIVE (nhận) => Tờ giấy xác nhận ĐÃ NHẬN tiền! Nhớ câm chữ P: đọc là /rɪˈsiːt/!",
        toeicEx: "Customers must present the original **receipt** to obtain a full refund.",
        toeicVi: "Khách hàng phải xuất trình biên lai gốc để được hoàn tiền toàn bộ.",
        javaEx: "The payment gateway sends a digital **receipt** to the user's email right after webhook verification.",
        javaVi: "Cổng thanh toán gửi biên lai điện tử tới email người dùng ngay sau khi xác thực webhook."
      },
      {
        word: "estimate",
        pos: "n / v",
        ipa: "/ˈestɪmət/",
        meaning: "bản ước tính chi phí/thời gian; ước lượng sơ bộ",
        synonyms: "approximation, rough calculation, projection",
        collocations: ["written estimate", "free cost estimate", "estimate the effort"],
        mnemonic: "Trong Scrum Planning Poker, anh em luôn ESTIMATE story points — tức là ước lượng chi phí/công sức trước khi làm!",
        toeicEx: "The contractor provided a detailed **estimate** for renovating the server room.",
        toeicVi: "Nhà thầu đã cung cấp một bản ước tính chi tiết cho việc cải tạo phòng máy chủ.",
        javaEx: "Can you give a rough **estimate** of the cloud storage cost for ten million daily logs?",
        javaVi: "Bạn có thể đưa ra ước tính sơ bộ về chi phí lưu trữ đám mây cho mười triệu bản ghi log mỗi ngày không?"
      },
      {
        word: "quote",
        pos: "n / v",
        ipa: "/kwoʊt/",
        meaning: "bảng báo giá cụ thể; chào giá cho khách hàng",
        synonyms: "price quotation, bid, tender",
        collocations: ["request a quote", "price quote", "quote a competitive rate"],
        mnemonic: "Giống dấu ngoặc kép (double quotes) trích dẫn chính xác từng ký tự => Báo giá QUOTE là con số chào chính thức!",
        toeicEx: "We obtained **quotes** from three printing companies before choosing a partner.",
        toeicVi: "Chúng tôi đã lấy báo giá từ ba công ty in ấn trước khi chọn đối tác.",
        javaEx: "The security **vendor** sent us an annual licensing **quote** for 150 developer seats.",
        javaVi: "Nhà cung cấp bảo mật đã gửi cho chúng tôi báo giá bản quyền hàng năm cho 150 tài khoản lập trình viên."
      },
      {
        word: "vendor",
        pos: "n",
        ipa: "/ˈvendər/",
        meaning: "nhà cung cấp, hãng bán sản phẩm/phần mềm/dịch vụ",
        synonyms: "supplier, provider, seller, merchant",
        collocations: ["third-party vendor", "cloud vendor", "vendor lock-in"],
        mnemonic: "VEND (bán, như 'vending machine' = máy bán nước tự động) + OR => Bên bán giải pháp/thiết bị cho công ty mình!",
        toeicEx: "All external **vendors** must register at the reception desk before delivering goods.",
        toeicVi: "Tất cả các nhà cung cấp bên ngoài phải đăng ký tại quầy lễ tân trước khi giao hàng.",
        javaEx: "Using standard OpenTelemetry APIs prevents **vendor** lock-in when switching monitoring tools.",
        javaVi: "Sử dụng chuẩn OpenTelemetry API giúp tránh bị phụ thuộc cứng vào một nhà cung cấp khi đổi công cụ giám sát."
      },
      {
        word: "shipment",
        pos: "n",
        ipa: "/ˈʃɪpmənt/",
        meaning: "lô hàng được gửi đi; quá trình vận chuyển hàng hóa",
        synonyms: "delivery, consignment, cargo, dispatch",
        collocations: ["track a shipment", "delayed shipment", "incoming shipment"],
        mnemonic: "SHIP (gửi hàng đi, giống 'ship code to production'!) + MENT => Lô hàng đang trên đường giao tới!",
        toeicEx: "Your **shipment** of ergonomic office chairs is scheduled to arrive on Thursday.",
        toeicVi: "Lô hàng ghế văn phòng công thái học của quý khách dự kiến sẽ đến vào thứ Năm.",
        javaEx: "Once the warehouse scans the barcode, Kafka publishes a **shipment** dispatched event.",
        javaVi: "Ngay khi kho quét mã vạch, Kafka sẽ phát đi một sự kiện thông báo lô hàng đã xuất kho."
      },
      {
        word: "warranty",
        pos: "n",
        ipa: "/ˈwɔːrənti/",
        meaning: "giấy bảo hành, cam kết bảo hành sửa chữa/thay thế của nhà sản xuất",
        synonyms: "service guarantee, coverage",
        collocations: ["under warranty", "two-year warranty", "void the warranty"],
        mnemonic: "WAR + RANTY => Dù máy móc hỏng hóc như qua 'chiến tranh' (war), còn phiếu WARRANTY là hãng vẫn lo sửa miễn phí!",
        toeicEx: "All laptops purchased from our store come with a three-year parts **warranty**.",
        toeicVi: "Tất cả máy tính xách tay mua tại cửa hàng chúng tôi đều đi kèm chế độ bảo hành linh kiện ba năm.",
        javaEx: "Opening the hardware security module casing yourself will immediately void the **warranty**.",
        javaVi: "Tự ý tháo vỏ thiết bị bảo mật phần cứng sẽ làm mất hiệu lực bảo hành ngay lập tức."
      },
      {
        word: "defective",
        pos: "adj",
        ipa: "/dɪˈfektɪv/",
        meaning: "bị lỗi kỹ thuật, hỏng hóc từ khâu sản xuất",
        synonyms: "faulty, flawed, malfunctioning, damaged",
        collocations: ["defective merchandise", "defective unit", "return a defective item"],
        mnemonic: "Trong Jira/QC, 'Defect' là lỗi sản phẩm => thêm đuôi tính từ -IVE: DEFECTIVE = bị lỗi hỏng!",
        toeicEx: "Any **defective** power adapters will be repaired or exchanged at no additional cost.",
        toeicVi: "Bất kỳ bộ sạc nguồn bị lỗi nào cũng sẽ được sửa chữa hoặc đổi mới mà không mất thêm chi phí.",
        javaEx: "A **defective** network switch in rack B4 caused intermittent packet loss across the cluster.",
        javaVi: "Một thiết bị chuyển mạch mạng bị lỗi ở tủ rack B4 đã gây mất gói tin chập chờn trên toàn cụm máy chủ."
      },
      {
        word: "replace",
        pos: "v",
        ipa: "/rɪˈpleɪs/",
        meaning: "thay thế, đổi cái mới cho cái cũ/hỏng",
        synonyms: "substitute, exchange, swap, supersede",
        collocations: ["replace A with B", "replace worn-out parts", "free replacement"],
        mnemonic: "Chính là hàm String.replace(oldChar, newChar) trong Java Core — bỏ phần tử cũ đi và thế phần tử mới vào!",
        toeicEx: "The technician recommended that we **replace** the printer drum every six months.",
        toeicVi: "Kỹ thuật viên khuyên rằng chúng ta nên thay trống máy in mỗi sáu tháng một lần.",
        javaEx: "In Java 21, we **replaced** heavy thread pools with lightweight virtual threads for I/O tasks.",
        javaVi: "Trong Java 21, chúng tôi đã thay thế các thread pool nặng nề bằng virtual threads siêu nhẹ cho tác vụ I/O."
      },
      {
        word: "inventory",
        pos: "n",
        ipa: "/ˈɪnvəntɔːri/",
        meaning: "hàng tồn kho; bảng kiểm kê chi tiết hàng hóa/tài sản",
        synonyms: "stock, supply, catalog",
        collocations: ["manage inventory", "low inventory", "annual inventory check"],
        mnemonic: "IN + VENT + ORY (nhớ các game RPG có túi đồ INVENTORY hoặc file Ansible inventory chứa danh sách server!).",
        toeicEx: "Retail staff will stay late on Sunday to conduct the quarterly **inventory** count.",
        toeicVi: "Nhân viên bán lẻ sẽ ở lại muộn vào Chủ nhật để thực hiện đợt kiểm kê hàng tồn kho hàng quý.",
        javaEx: "We use pessimistic locking in PostgreSQL to prevent overselling when **inventory** drops to one item.",
        javaVi: "Chúng tôi dùng cơ chế khóa bi quan trong PostgreSQL để chống bán lố khi tồn kho giảm xuống còn một món."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Upon **receipt** of your payment, our system will automatically activate your enterprise subscription.",
        vi: "Ngay khi nhận được khoản thanh toán của quý khách, hệ thống của chúng tôi sẽ tự động kích hoạt gói thuê bao doanh nghiệp.",
        note: "Cụm giới từ siêu trang trọng TOEIC: 'Upon receipt of + Noun' = Ngay khi nhận được cái gì (= As soon as we receive...)."
      },
      {
        tag: "Client Email",
        en: "We recently **placed an order** with our hardware **supplier** for twenty developer workstations.",
        vi: "Gần đây chúng tôi đã đặt một đơn hàng với nhà cung cấp phần cứng để mua hai mươi máy trạm cho lập trình viên.",
        note: "'place an order with a supplier for sth': cấu trúc đặt hàng chuẩn mực."
      },
      {
        tag: "TOEIC Part 7",
        en: "Because the monitor is still **under warranty**, the manufacturer agreed to **replace** it free of charge.",
        vi: "Vì chiếc màn hình vẫn còn trong thời hạn bảo hành, nhà sản xuất đã đồng ý thay mới hoàn toàn miễn phí.",
        note: "'under warranty' (còn bảo hành) + 'free of charge' (= complimentary / at no cost)."
      },
      {
        tag: "Senior Java",
        en: "Our **inventory** microservice listens to order-canceled events to restore reserved stock immediately.",
        vi: "Microservice quản lý tồn kho của chúng tôi lắng nghe sự kiện hủy đơn hàng để hoàn lại số lượng giữ chỗ ngay lập tức.",
        note: "Ngữ cảnh thực tế của hệ thống E-commerce/Order Management."
      },
      {
        tag: "TOEIC Part 5",
        en: "Customers who receive **defective** goods may request either a replacement or a full refund within 14 days.",
        vi: "Khách hàng nhận phải hàng hóa bị lỗi có thể yêu cầu đổi mới hoặc hoàn tiền toàn bộ trong vòng 14 ngày.",
        note: "'defective goods / products / items' + 'request a replacement'."
      },
      {
        tag: "Daily Standup",
        en: "I compared the **quotes** from two SMS gateway **vendors** and documented the pricing table on Wiki.",
        vi: "Tôi đã so sánh báo giá từ hai nhà cung cấp cổng SMS và ghi lại bảng giá trên trang Wiki.",
        note: "'compare quotes from vendors': đối chiếu báo giá giữa các bên cung cấp."
      },
      {
        tag: "TOEIC Part 7",
        en: "Please note that the shipping fee was omitted from the initial **estimate** but appears on the final **invoice**.",
        vi: "Xin lưu ý rằng phí vận chuyển chưa được tính trong bản ước tính ban đầu nhưng có xuất hiện trên hóa đơn cuối cùng.",
        note: "Câu kinh điển trong câu hỏi suy luận chênh lệch tiền giữa Estimate và Invoice ở Part 7!"
      },
      {
        tag: "Senior Java",
        en: "We plan to **replace** deprecated RestTemplate calls **with** Spring's new RestClient across all modules.",
        vi: "Chúng tôi dự định thay thế các lời gọi RestTemplate đã lỗi thời bằng RestClient mới của Spring trên toàn bộ phân hệ.",
        note: "Ghi nhớ giới từ 'replace A with B' trong mô tả refactoring."
      },
      {
        tag: "Client Email",
        en: "According to the courier's portal, the second **shipment** of RFID scanners cleared customs this morning.",
        vi: "Theo cổng thông tin của hãng chuyển phát, lô hàng máy quét RFID thứ hai đã thông quan vào sáng nay.",
        note: "'clear customs' = thông quan hải quan (rất hay đi kèm từ 'shipment' trong Part 4 & 7)."
      },
      {
        tag: "TOEIC Part 5",
        en: "If an item is temporarily out of **inventory**, we will ship it separately at no extra delivery cost.",
        vi: "Nếu một mặt hàng tạm thời hết tồn kho, chúng tôi sẽ giao riêng món đó sau mà không tính thêm phí vận chuyển.",
        note: "'out of inventory / out of stock' = hết hàng trong kho."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "The vendor sent us a receipt asking us to pay $2,000 within 15 days. ❌",
          fix: "The vendor sent us an invoice asking us to pay $2,000 within 15 days. ✅",
          why: "Chưa trả tiền mà yêu cầu thanh toán trong 15 ngày thì phải là 'invoice' (hóa đơn đòi tiền). 'receipt' chỉ xuất SAU KHI đã thanh toán xong!"
        },
        {
          bug: "We replaced the old Redis cluster by a managed ElastiCache instance. ❌",
          fix: "We replaced the old Redis cluster with a managed ElastiCache instance. ✅",
          why: "Ở câu chủ động 'replace A with B' (thay thế A bằng công cụ/vật B), bắt buộc dùng giới từ 'WITH' chứ không dùng 'by'."
        },
        {
          bug: "Is this SSD drive still in warranty? ❌",
          fix: "Is this SSD drive still under warranty? ✅",
          why: "Collocation chuẩn 100% trong tiếng Anh thương mại và đề TOEIC là 'UNDER warranty' (đang được bảo hành)."
        },
        {
          bug: "The customer returned a defect keyboard to the store. ❌",
          fix: "The customer returned a defective keyboard to the store. ✅",
          why: "'defect' là danh từ (một lỗi hỏng). Đứng trước danh từ 'keyboard' để chỉ 'bàn phím bị lỗi' phải dùng tính từ 'defective'."
        }
      ]
    },
    toeicTips: [
      "Mẹo Part 5 trong 3 giây: Nhìn thấy cụm 'Upon _____ of' + danh từ (your order / the signed form / payment), chọn ngay danh từ không đếm được 'receipt' (= Ngay khi nhận được...)!",
      "Mẹo Part 7 Đọc Ghép (Invoice + Email): Khi đề hỏi 'Why did the customer write to the vendor?', hãy so khớp từng dòng giữa Order/Quote và Invoice — 90% đáp án rơi vào 3 kịch bản: giao thiếu hàng, tính sai phí vận chuyển, hoặc giao nhầm món bị lỗi ('defective')!",
      "Mẹo Nghe Part 2–3: Đọc to 3 lần từ 'receipt' là /rɪˈsiːt/ (giống 'rì-xít'). Đừng bao giờ chờ nghe âm /p/ ở giữa vì chữ 'p' hoàn toàn câm!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "at no cost",
          "Any defective router",
          "will be replaced",
          "while it remains",
          "under warranty."
        ],
        answer: "Any defective router will be replaced at no cost while it remains under warranty.",
        vi: "Bất kỳ bộ định tuyến bị lỗi nào cũng sẽ được thay mới miễn phí khi còn trong thời hạn bảo hành."
      },
      fillBlank: {
        sentence: "Please settle the attached _____ within 30 days via wire transfer.",
        answer: "invoice",
        accepted: ["invoice"],
        hint: "Danh từ bắt đầu bằng chữ 'i', chỉ hóa đơn yêu cầu thanh toán trong vòng 30 ngày",
        explain: "Cụm 'settle the invoice within 30 days' = thanh toán hóa đơn trong vòng 30 ngày (chưa trả tiền nên là invoice, không phải receipt)."
      }
    },
    quiz: [
      {
        q: "Customers wishing to exchange a _____ appliance should bring it back in its original packaging.",
        options: ["defect", "defective", "defectively", "defects"],
        answer: 1,
        explain: "Đáp án đúng là 'defective' (tính từ: bị lỗi), đứng giữa mạo từ 'a' và danh từ 'appliance' (thiết bị). Loại 'defect' / 'defects' (danh từ) và 'defectively' (trạng từ)."
      },
      {
        q: "_____ receipt of the signed licensing agreement, our support team will send your activation keys.",
        options: ["Upon", "Under", "Prior", "Regarding"],
        answer: 0,
        explain: "Đáp án đúng là 'Upon' trong cấu trúc vàng 'Upon receipt of sth' (Ngay khi nhận được cái gì). Loại 'Under' (đi với warranty), 'Prior' (thiếu 'to'), và 'Regarding' (về việc — không hợp mạch thời gian của mệnh đề sau 'will send')."
      },
      {
        q: "The IT department plans to _____ all aging magnetic hard drives with high-speed NVMe SSDs.",
        options: ["inquire", "replace", "enclose", "expire"],
        answer: 1,
        explain: "Đáp án đúng là 'replace' nhờ dấu hiệu giới từ 'with' phía sau: 'replace A with B' (thay thế ổ cứng từ tính cũ bằng ổ SSD NVMe tốc độ cao). Các động từ còn lại đều sai nghĩa và cấu trúc."
      }
    ]
  },

  V1_5: {
    duration: "40 phút",
    toeicTarget: "Từ vựng Tần suất Cao TOEIC 400–650+ (Listening Part 4 Sân bay/Sự kiện & Reading Part 7 Lịch trình)",
    javaContext: "Đi công tác onsite tại văn phòng khách hàng Nhật/Mỹ/Sing, đặt vé máy bay & khách sạn, tham dự hoặc làm diễn giả tại các hội nghị công nghệ lớn như AWS Summit, JavaOne, Devoxx.",
    teacherIntro: "Khi bước lên nấc thang Senior Java Engineer hay Solution Architect, cơ hội bay sang Singapore, Tokyo, Sydney hay San Francisco để onsite cùng khách hàng hoặc dự hội nghị công nghệ ('tech conference') là hoàn toàn trong tầm tay! Đồng thời, trong bài thi TOEIC, các đoạn thông báo loa sân bay ở Part 4 và lịch trình chuyến đi ('itinerary') ở Part 7 xuất hiện với tần suất 100% mọi đề. Bài V1.5 trang bị cho bạn trọn bộ 10 từ vựng 'xách vali lên và bay' — vừa giúp đi công tác nước ngoài tự tin không bỡ ngỡ, vừa hốt trọn điểm phần thi thông báo sự kiện!",
    javaAnalogy: {
      title: "Chuyến Công Tác (Business Trip) giống như Luồng Đi Của Một Request Qua API Gateway & Routing",
      body: "Hãy tưởng tượng bạn chính là một gói dữ liệu đi xuyên châu lục: 'itinerary' là bảng Routing Table định sẵn từng chặng dừng và mốc giờ; 'reservation' cho vé và 'accommodation' giống như cấp phát trước Resource Reservation (CPU/Memory slot) để đến nơi không bị hết chỗ; 'board a flight' là bước gói tin được đóng vào Transport Frame cất cánh; 'delay' chính là Network Latency bất ngờ do nghẽn tuyến; còn 'venue' của buổi 'keynote' là Destination Endpoint nơi các 'attendees' cùng 'register' lắng nghe sự kiện!"
    },
    objectives: [
      "Đọc và phát âm chuẩn xác các từ khó về công tác & sự kiện, đặc biệt là itinerary (/aɪˈtɪnəreri/) và venue (/ˈvenjuː/).",
      "Phân biệt rõ bộ ba chỉ người tại hội thảo trong TOEIC Part 5: register (động từ) → registration (sự đăng ký) → attendee / participant (người tham dự).",
      "Bắt trọn thông tin thay đổi cổng bay, hoãn chuyến ('flight delay') và đổi địa điểm ('change of venue') trong TOEIC Listening Part 4."
    ],
    formulaCards: [
      {
        label: "Word Family • REGISTER & RESERVE",
        formula: "register (v) → registration (n: sự đăng ký / quầy đăng ký) | reserve (v: đặt trước) → reservation (n: chỗ đã đặt)",
        note: "Cụm cố định: 'make a reservation' (= book a room/table) và 'register IN ADVANCE' (đăng ký trước)."
      },
      {
        label: "Bộ Ba Sân Bay Kinh Điển • FLIGHT, BOARD & DELAY",
        formula: "direct / connecting flight (chuyến bay thẳng / nối chuyến) → boarding pass (thẻ lên tàu bay) → board at Gate 12 → flight delay",
        note: "Chú ý đa nghĩa cực hay của BOARD: (n) Hội đồng quản trị ('board of directors'), nhưng (v) lại là bước lên máy bay/tàu ('board the aircraft')!"
      },
      {
        label: "Từ Vựng Hội Thảo Công Nghệ • VENUE, KEYNOTE & ATTENDEE",
        formula: "conference venue (địa điểm hội nghị) | deliver a keynote speech (trình bày bài diễn văn chính) | conference attendees (người tham dự)",
        note: "Trong Part 5: Đuôi '-ee' trong 'attendee' chỉ NGƯỜI tham dự (đếm được: 'over 500 attendees'), khác với 'attendance' (danh từ không đếm được chỉ sĩ số/việc có mặt)."
      },
      {
        label: "Lịch Trình & Lưu Trú • ITINERARY & ACCOMMODATION",
        formula: "travel itinerary (lịch trình chuyến đi chi tiết) | hotel accommodations (chỗ ăn ở khách sạn)",
        note: "Trong tiếng Anh Mỹ (chuẩn ETS TOEIC), 'accommodations' rất hay dùng ở dạng số nhiều khi chỉ dịch vụ phòng nghỉ khách sạn!"
      }
    ],
    sections: [
      {
        heading: "1. Chuẩn Bị Trước Giờ Khởi Hành: Itinerary – Reservation – Accommodation",
        paragraphs: [
          "Khi công ty cử bạn đi công tác onsite 2 tuần tại trụ sở khách hàng, bộ phận Admin/Travel sẽ gửi cho bạn một bản 'travel itinerary' — trong đó liệt kê chi tiết số hiệu chuyến bay, giờ hạ cánh, tên khách sạn ('accommodation') và lịch họp từng ngày.",
          "Trong TOEIC Part 7, các bảng 'Itinerary' cực kỳ dễ ăn điểm nếu bạn nắm được mạch thời gian và các từ đồng nghĩa giữa bảng lịch trình và câu hỏi bên dưới."
        ],
        bullets: [
          "itinerary (/aɪˈtɪnəreri/): Hay được paraphrase trong câu hỏi thành 'travel schedule' hoặc 'trip plan'.",
          "make / confirm / cancel a reservation: 'I'd like to make a hotel reservation for three nights starting May 10.'",
          "accommodation: Bao gồm nơi nghỉ ngơi như khách sạn, căn hộ dịch vụ ('Airfare and hotel accommodations will be covered by the company')."
        ]
      },
      {
        heading: "2. Tại Sân Bay (TOEIC Part 4 Hotspot): Flight – Board – Delay",
        paragraphs: [
          "Gần như mọi đề thi TOEIC Listening Part 4 đều có ít nhất 1 bài thông báo phát qua loa tại sân bay hoặc nhà ga ('Attention passengers on Flight 408 to Seattle...'). Người nói thường thông báo hoãn chuyến ('delayed due to mechanical inspection / bad weather') hoặc đổi cổng lên máy bay ('gate change').",
          "Nắm chắc các cụm động từ quanh 'board' và 'flight' sẽ giúp bạn bắt dính đáp án ngay khi băng vừa đọc dứt câu."
        ],
        bullets: [
          "board (v): Lên máy bay, tàu hỏa, xe buýt ('Passengers with young children may board first' / 'begin boarding in ten minutes').",
          "boarding pass (thẻ lên máy bay) & departure gate (cổng khởi hành): Hai từ khóa luôn sóng đôi trong bài nghe sân bay.",
          "delay (v / n): 'Our connecting flight in Tokyo was delayed by two hours' (bị trễ mất hai tiếng — chú ý giới từ BY + khoảng thời gian trễ!)."
        ]
      },
      {
        heading: "3. Tại Hội Nghị Công Nghệ Quốc Tế: Venue – Register – Attendee – Keynote",
        paragraphs: [
          "Khi đặt chân tới một hội nghị như Spring I/O hay AWS re:Invent, điểm đến của bạn gọi là 'venue' (trung tâm hội nghị hoặc khách sạn lớn). Việc đầu tiên là ghé bàn 'registration desk' để lấy thẻ đeo tên dành cho 'attendees', sau đó vào hội trường chính nghe bài phát biểu mở màn quan trọng nhất — gọi là 'keynote address / keynote speech'.",
          "Trong đề TOEIC, 'venue' là từ vựng vàng mức 600+ thường dùng để thay thế cho từ đơn giản 'location / place'."
        ],
        bullets: [
          "venue (/ˈvenjuː/): Địa điểm tổ chức sự kiện cụ thể ('change the venue to the Grand Ballroom to accommodate more guests').",
          "register FOR a conference / workshop: 'Early-bird discounts apply if you register before October 1.'",
          "keynote speaker (diễn giả chính) & attendees (người tham dự): Cặp danh từ xuất hiện xuyên suốt mọi thông báo sự kiện ở Part 6 & Part 7."
        ]
      }
    ],
    vocabItems: [
      {
        word: "itinerary",
        pos: "n",
        ipa: "/aɪˈtɪnəreri/",
        meaning: "lịch trình chi tiết của một chuyến đi (gồm chặng bay, nơi ở, điểm đến)",
        synonyms: "travel plan, route schedule",
        collocations: ["travel itinerary", "updated itinerary", "according to the itinerary"],
        mnemonic: "AI + TIN + NƠI + ĐI => Ai cũng tin tưởng nhìn vào tờ ITINERARY để biết giờ giấc mọi nơi sẽ đi qua!",
        toeicEx: "Ms. Park's assistant e-mailed her the final **itinerary** for her business trip to Singapore.",
        toeicVi: "Trợ lý của bà Park đã gửi email cho bà lịch trình cuối cùng cho chuyến công tác Singapore.",
        javaEx: "Our onsite **itinerary** includes two days of architecture workshops with the client's core Java team.",
        javaVi: "Lịch trình đi onsite của chúng tôi bao gồm hai ngày hội thảo kiến trúc cùng đội Java nòng cốt của khách hàng."
      },
      {
        word: "accommodation",
        pos: "n",
        ipa: "/əˌkɑːməˈdeɪʃn/",
        meaning: "chỗ ở, nơi lưu trú (khách sạn, nhà nghỉ khi đi công tác/du lịch)",
        synonyms: "lodging, housing, hotel room",
        collocations: ["overnight accommodations", "book accommodation", "arrange accommodations"],
        mnemonic: "Nhớ mẹo chính tả gấp đôi 2 chữ C và 2 chữ M (a-CC-o-MM-odation): Phòng khách sạn rộng rãi đủ chỗ cho 2 cặp đôi!",
        toeicEx: "The conference fee covers meals, local transport, and three nights of **accommodations**.",
        toeicVi: "Lệ phí hội nghị đã bao gồm các bữa ăn, phương tiện đi lại nội đô và ba đêm lưu trú khách sạn.",
        javaEx: "The company arranged comfortable **accommodation** within walking distance of the client's tech park.",
        javaVi: "Công ty đã thu xếp chỗ ở tiện nghi chỉ cách khu công nghệ của khách hàng vài phút đi bộ."
      },
      {
        word: "reservation",
        pos: "n",
        ipa: "/ˌrezərˈveɪʃn/",
        meaning: "sự đặt chỗ trước (phòng khách sạn, vé máy bay, bàn nhà hàng)",
        synonyms: "booking, advance arrangement",
        collocations: ["make a reservation", "confirm a reservation", "under the name of"],
        mnemonic: "Giống AWS Reserved Instances — đặt giữ chỗ tài nguyên trước để vừa chắc chắn có slot vừa giá tốt!",
        toeicEx: "I have a dinner **reservation** for six people at 7:30 P.M. under the name Nguyen.",
        toeicVi: "Tôi có đặt bàn ăn tối cho sáu người lúc 7 giờ 30 tối dưới tên Nguyễn.",
        javaEx: "Please confirm your hotel **reservation** before applying for the Japanese business visa.",
        javaVi: "Vui lòng xác nhận đặt phòng khách sạn trước khi nộp hồ sơ xin thị thực công tác Nhật Bản."
      },
      {
        word: "flight",
        pos: "n",
        ipa: "/flaɪt/",
        meaning: "chuyến bay",
        synonyms: "air journey, plane trip",
        collocations: ["direct flight", "connecting flight", "miss a flight", "book a flight"],
        mnemonic: "Danh từ của động từ FLY (bay) => Một hành trình bay cụ thể mang mã hiệu riêng!",
        toeicEx: "Passengers on **Flight** 219 to Frankfurt should proceed immediately to Gate B7.",
        toeicVi: "Hành khách trên chuyến bay 219 đi Frankfurt vui lòng di chuyển ngay tới Cổng B7.",
        javaEx: "During the ten-hour **flight** to Munich, I reviewed the entire distributed caching specification.",
        javaVi: "Trong suốt chuyến bay kéo dài mười tiếng tới Munich, tôi đã đọc rà soát toàn bộ đặc tả bộ nhớ đệm phân tán."
      },
      {
        word: "board",
        pos: "v",
        ipa: "/bɔːrd/",
        meaning: "bước lên (máy bay, tàu hỏa, xe buýt, tàu thủy)",
        synonyms: "embark, get on",
        collocations: ["board the plane", "boarding pass", "boarding time"],
        mnemonic: "Từ 'onboard' (lên tàu hội nhập) tách ra động từ gốc BOARD = bước chân qua cửa lên khoang máy bay!",
        toeicEx: "Travelers must show a valid passport and boarding pass before they **board** the aircraft.",
        toeicVi: "Hành khách phải xuất trình hộ chiếu hợp lệ và thẻ lên máy bay trước khi bước lên tàu bay.",
        javaEx: "I just pushed the hotfix from the airport lounge right before **boarding** my flight to Seoul.",
        javaVi: "Tôi vừa kịp đẩy bản vá nóng từ phòng chờ sân bay ngay trước khi lên chuyến bay đi Seoul."
      },
      {
        word: "delay",
        pos: "v / n",
        ipa: "/dɪˈleɪ/",
        meaning: "làm chậm trễ, trì hoãn; sự trễ giờ",
        synonyms: "hold up, set back, retardation",
        collocations: ["weather delay", "delayed by two hours", "without delay"],
        mnemonic: "Quá quen với Thread.sleep() hay ScheduledExecutorService.scheduleWithFixedDelay() — tạo độ TRỄ thời gian!",
        toeicEx: "High winds in Chicago caused a two-hour **delay** for all incoming flights.",
        toeicVi: "Gió lớn tại Chicago đã gây ra sự chậm trễ kéo dài hai tiếng đối với tất cả chuyến bay đến.",
        javaEx: "Please escalate critical production incidents without **delay** so SRE can mitigate impact.",
        javaVi: "Vui lòng báo cáo nâng cấp các sự cố production nghiêm trọng ngay lập tức không chậm trễ để đội SRE giảm thiểu ảnh hưởng."
      },
      {
        word: "venue",
        pos: "n",
        ipa: "/ˈvenjuː/",
        meaning: "địa điểm tổ chức sự kiện, hội thảo, buổi hòa nhạc",
        synonyms: "event location, site, hall",
        collocations: ["conference venue", "change of venue", "ideal venue for"],
        mnemonic: "VEN (đến, gốc từ 'event / convene') + UE => Nơi mọi người tụ hội đến dự sự kiện!",
        toeicEx: "Due to higher-than-expected registration, the seminar was moved to a larger **venue**.",
        toeicVi: "Do lượng đăng ký cao hơn dự kiến, buổi hội thảo đã được chuyển sang một địa điểm lớn hơn.",
        javaEx: "The Saigon Exhibition Center is the main **venue** for this year's Cloud & AI Summit.",
        javaVi: "Trung tâm Hội chợ và Triển lãm Sài Gòn là địa điểm chính của Hội nghị Thượng đỉnh Cloud & AI năm nay."
      },
      {
        word: "keynote",
        pos: "n / adj",
        ipa: "/ˈkiːnoʊt/",
        meaning: "bài diễn văn chủ đạo; thuộc về diễn giả/tiết mục mở màn chính của hội nghị",
        synonyms: "main address, headline speech",
        collocations: ["keynote speaker", "deliver the keynote address", "opening keynote"],
        mnemonic: "KEY (chìa khóa cốt lõi) + NOTE (thông điệp) => Bài thuyết trình đinh định hình thông điệp cho cả hội nghị!",
        toeicEx: "Dr. Elena Rostova will serve as the **keynote** speaker at the FinTech Innovation Forum.",
        toeicVi: "Tiến sĩ Elena Rostova sẽ đảm nhận vai trò diễn giả chính tại Diễn đàn Đổi mới Công nghệ Tài chính.",
        javaEx: "During the opening **keynote**, the Java platform architect demonstrated Project Loom benchmarks.",
        javaVi: "Trong bài thuyết trình mở màn chủ đạo, kiến trúc sư nền tảng Java đã trình diễn kết quả đo hiệu năng Project Loom."
      },
      {
        word: "register",
        pos: "v",
        ipa: "/ˈredʒɪstər/",
        meaning: "đăng ký tên vào danh sách (tham dự hội nghị, khóa học, tài khoản)",
        synonyms: "enroll, sign up",
        collocations: ["register in advance", "register online", "register for a workshop"],
        mnemonic: "Giống thanh ghi CPU Register hoặc Eureka Service Registry — nơi dịch vụ phải ĐĂNG KÝ danh tính để tham gia mạng lưới!",
        toeicEx: "Participants who **register** before May 15 will receive a 20 percent discount.",
        toeicVi: "Những người tham gia đăng ký trước ngày 15 tháng 5 sẽ nhận được mức giảm giá 20 phần trăm.",
        javaEx: "Three engineers from our backend team **registered** for the hands-on Kubernetes security workshop.",
        javaVi: "Ba kỹ sư từ đội backend của chúng tôi đã đăng ký tham gia buổi thực hành bảo mật Kubernetes."
      },
      {
        word: "attendee",
        pos: "n",
        ipa: "/əˌtenˈdiː/",
        meaning: "người tham dự (cuộc họp lớn, hội thảo, triển lãm)",
        synonyms: "participant, guest, delegate",
        collocations: ["conference attendees", "each attendee receives", "list of attendees"],
        mnemonic: "ATTEND (tham dự) + đuôi -EE chỉ người (giống employee, interviewee) => Chính là NGƯỜI đi dự hội nghị!",
        toeicEx: "Complimentary refreshments will be served to all **attendees** in the main lobby.",
        toeicVi: "Đồ uống và ăn nhẹ miễn phí sẽ được phục vụ cho tất cả người tham dự tại sảnh chính.",
        javaEx: "Over four hundred **attendees** crowded the hall to hear our talk on high-frequency trading in Java.",
        javaVi: "Hơn bốn trăm người tham dự đã kín hội trường để nghe bài chia sẻ của chúng tôi về giao dịch tần suất cao bằng Java."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "All workshop **attendees** must pick up their name badges at the **registration** desk on the first floor.",
        vi: "Tất cả người tham dự hội thảo phải nhận bảng tên của mình tại quầy đăng ký ở tầng một.",
        note: "Cặp danh từ ghép kinh điển: 'workshop attendees' + 'registration desk'."
      },
      {
        tag: "Client Email",
        en: "I am sharing my **flight** details and hotel **reservation** so we can coordinate airport pickup.",
        vi: "Tôi xin chia sẻ thông tin chuyến bay và đặt phòng khách sạn để chúng ta tiện phối hợp đón sân bay.",
        note: "'flight details' + 'hotel reservation' dùng cực tự nhiên khi đi công tác khách hàng."
      },
      {
        tag: "TOEIC Part 7",
        en: "According to the revised **itinerary**, the plant tour will take place on Wednesday instead of Tuesday.",
        vi: "Theo lịch trình đã điều chỉnh, chuyến tham quan nhà máy sẽ diễn ra vào thứ Tư thay vì thứ Ba.",
        note: "Dạng câu hỏi 'What changed in Mr. Brown's itinerary?' xuất hiện liên tục ở Part 7!"
      },
      {
        tag: "Senior Java",
        en: "Our CTO was invited to deliver the **keynote** speech on cloud-native banking architecture.",
        vi: "CTO của chúng tôi đã được mời trình bày bài diễn văn chủ đạo về kiến trúc ngân hàng thuần đám mây.",
        note: "Collocation chuẩn: 'deliver / give a keynote speech'."
      },
      {
        tag: "Daily Standup",
        en: "My return **flight** from Tokyo was **delayed** by three hours, so I will join today's standup from the taxi.",
        vi: "Chuyến bay khứ hồi từ Tokyo của tôi bị trễ ba tiếng, nên hôm nay tôi sẽ tham gia buổi họp đầu ngày từ trên xe taxi.",
        note: "'return flight' (chuyến bay chiều về) + 'be delayed by + khoảng thời gian'."
      },
      {
        tag: "TOEIC Part 5",
        en: "The Grand Harbor Hotel was selected as the official **venue** for the annual shareholders' gala.",
        vi: "Khách sạn Grand Harbor đã được chọn làm địa điểm tổ chức chính thức cho đêm tiệc cổ đông thường niên.",
        note: "'official venue for + sự kiện'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Because her **connecting flight** departed early, Ms. Silva had barely fifteen minutes to **board**.",
        vi: "Vì chuyến bay nối chuyến khởi hành sớm, cô Silva chỉ còn vỏn vẹn mười lăm phút để lên máy bay.",
        note: "'connecting flight' = chuyến bay chuyển tiếp/quá cảnh (đối lập với 'nonstop / direct flight')."
      },
      {
        tag: "Client Email",
        en: "Could your travel desk recommend convenient **accommodations** near the district office?",
        vi: "Bộ phận hỗ trợ công tác bên bạn có thể gợi ý chỗ lưu trú thuận tiện gần văn phòng khu vực được không?",
        note: "'convenient accommodations near...' = khách sạn/chỗ nghỉ thuận tiện gần đâu."
      },
      {
        tag: "Senior Java",
        en: "Don't forget to **register** for the internal AI hackathon before team slots fill up tonight.",
        vi: "Đừng quên đăng ký tham gia cuộc thi AI hackathon nội bộ trước khi hết suất vào tối nay nhé.",
        note: "'register for + tên cuộc thi/sự kiện'."
      },
      {
        tag: "TOEIC Part 5",
        en: "We apologize for any inconvenience caused by the unexpected **delay** in baggage claim.",
        vi: "Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào gây ra bởi sự chậm trễ ngoài ý muốn tại khu nhận hành lý.",
        note: "'delay in + cụm danh từ' (sự chậm trễ trong khâu nào)."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "More than 300 attendances came to the Java developer meetup. ❌",
          fix: "More than 300 attendees came to the Java developer meetup. ✅",
          why: "'attendance' là danh từ trừu tượng chỉ 'sự có mặt / tổng sĩ số'. Chỉ những NGƯỜI đến dự ('came to...') bắt buộc phải dùng 'attendees'!"
        },
        {
          bug: "Passengers are now boarding on Flight 502 at Gate A3. ❌",
          fix: "Passengers are now boarding Flight 502 at Gate A3. ✅",
          why: "Động từ 'board' là ngoại động từ đi thẳng với phương tiện ('board a flight / board the train'), không chèn giới từ 'on' ở giữa!"
        },
        {
          bug: "Have you registered the AWS DevOps workshop yet? ❌",
          fix: "Have you registered for the AWS DevOps workshop yet? ✅",
          why: "'register' mang nghĩa đăng ký tham gia một sự kiện/khóa học cần có giới từ 'FOR' ('register FOR a workshop'). ('register sth' không có 'for' mang nghĩa đăng ký quyền sở hữu xe/tên miền!)."
        },
        {
          bug: "Let me check the registeration desk for my conference badge. ❌",
          fix: "Let me check the registration desk for my conference badge. ✅",
          why: "Chú ý chính tả khi đổi từ 'register' sang danh từ: lược bỏ chữ 'e' trước 'r' → 'registration' (KHÔNG phải 'registeration'!)."
        }
      ]
    },
    toeicTips: [
      "Mẹo Sống Còn TOEIC Part 5: Đứng sau con số đếm ('500 _____', 'each _____', 'all _____') kết hợp với động từ chỉ hành động của con người ('received a welcome kit') → Chọn ngay 'attendee / attendees', gạch thẳng tay 'attendance'!",
      "Mẹo Nghe Part 4 Thông Báo Sân Bay: Luôn đọc trước 3 câu hỏi trước khi băng chạy. Nếu thấy câu hỏi 'What should passengers do next?', hãy căng tai chờ phần CUỐI thông báo sau các từ 'Please proceed to...', 'Please check the monitors for...', 'have your boarding pass ready'.",
      "Mẹo Paraphrasing Part 7: Thấy trong email viết 'without delay' → đáp án dưới sẽ đổi thành 'immediately / right away / promptly'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "before May 10",
          "Conference attendees",
          "online",
          "who register",
          "receive a discount."
        ],
        answer: "Conference attendees who register online before May 10 receive a discount.",
        vi: "Những người tham dự hội nghị đăng ký trực tuyến trước ngày 10 tháng 5 sẽ nhận được ưu đãi giảm giá."
      },
      fillBlank: {
        sentence: "Due to heavy snow in Boston, our morning flight was _____ by nearly four hours.",
        answer: "delayed",
        accepted: ["delayed"],
        hint: "Động từ phân từ quá khứ bắt đầu bằng 'd', mang nghĩa bị trễ chuyến do tuyết lớn",
        explain: "Cấu trúc bị động 'flight was delayed by + khoảng thời gian' (chuyến bay bị hoãn/trễ gần 4 tiếng)."
      }
    },
    quiz: [
      {
        q: "Every _____ at the Cybersecurity Summit will receive complimentary access to the recorded sessions.",
        options: ["attend", "attendance", "attendee", "attentive"],
        answer: 2,
        explain: "Đáp án đúng là 'attendee' (người tham dự - danh từ đếm được số ít đứng sau 'Every' và làm chủ ngữ cho 'will receive'). Loại 'attend' (động từ), 'attendance' (sự có mặt - không thể nhận quyền truy cập!), và 'attentive' (tính từ: chăm chú)."
      },
      {
        q: "Ms. Nakamura asked the travel agency to e-mail her a copy of the updated _____ before Friday.",
        options: ["itinerary", "keynote", "venue", "probation"],
        answer: 0,
        explain: "Đáp án đúng là 'itinerary' (lịch trình chuyến đi), hợp ngữ cảnh hoàn hảo với 'travel agency' (công ty du lịch/lữ hành). Các từ 'keynote' (diễn văn chính), 'venue' (địa điểm sự kiện), 'probation' (thử việc) đều không phải tài liệu do đại lý du lịch gửi."
      },
      {
        q: "Because over 800 guests RSVP'd for the product launch, organizers decided to move the event to a larger _____.",
        options: ["flight", "venue", "delay", "invoice"],
        answer: 1,
        explain: "Đáp án đúng là 'venue' (địa điểm tổ chức sự kiện). Cụm vàng 'move the event to a larger venue' (chuyển sự kiện sang một địa điểm rộng hơn để đủ sức chứa 800 khách)."
      }
    ]
  },

  V1_6: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Phản xạ TOEIC 500–650+ (Listening Part 1–4 & Reading Part 5–7)",
    javaContext: "Giao tiếp hàng ngày cực kỳ tự nhiên với đồng nghiệp bản xứ trong Daily Standup, điều tra bug production (look into / figure out), dựng môi trường (set up), sao lưu DB (back up), release tính năng (roll out) và bàn giao ca trực (hand over).",
    teacherIntro: "Anh em có bao giờ thắc mắc: 'Sao mình biết bao nhiêu từ học thuật như investigate, execute, cancel, postpone mà nghe đồng nghiệp Mỹ/Úc nói chuyện trên Teams vẫn thấy lạ hoắc?' Lý do là trong giao tiếp thực tế và đặc biệt là TOEIC Listening (Part 2 & Part 3), người bản xứ cực kỳ chuộng Cụm Động Từ (Phrasal Verbs): họ nói 'look into the bug' thay vì 'investigate', 'roll out the new feature' thay vì 'launch', 'call off the meeting' thay vì 'cancel'! Làm chủ 10 Phrasal Verbs tần suất cao nhất trong bài khép lại Học phần V1 này sẽ tạo cú nhảy vọt ngoạn mục cho cả kỹ năng Nghe TOEIC lẫn độ trôi chảy khi mở miệng nói tiếng Anh hàng ngày!",
    javaAnalogy: {
      title: "Phrasal Verbs giống như Method Overloading trong Java — Cùng Tên Động Từ Nhưng Khác Tham Số (Giới Từ) Là Khác Hẳn Hành Vi!",
      body: "Trong Java, hàm process(Order o) khác hoàn toàn hàm process(Refund r). Tiếng Anh cũng vậy! Động từ gốc 'put' hay 'call' rất bình thường, nhưng chỉ cần truyền thêm tham số tiểu từ (particle) khác nhau là hành vi biến đổi 180 độ: 'call off' = cancel (hủy hẳn), trong khi 'put off' = postpone (chỉ hoãn lại); 'look at' = nhìn lướt, nhưng 'look into' = nhảy sâu vào debug/điều tra tận gốc! Đừng bao giờ dịch rời từng chữ — hãy nhớ cả hàm + tham số thành một khối duy nhất!"
    },
    objectives: [
      "Nắm vững nghĩa và ngữ cảnh sử dụng của 10 Phrasal Verbs sống còn nhất trong môi trường công sở & dự án phần mềm.",
      "Thuộc lòng bảng ánh xạ 1-1 giữa Phrasal Verb (văn nói / bài nghe Part 3) và Động từ đơn trang trọng (đáp án trắc nghiệm / email Part 7) để phá đảo bẫy Paraphrasing của ETS.",
      "Biết cách tách tân ngữ đúng chuẩn ngữ pháp với các cụm động từ tách được (như set it up, back them up, call it off)."
    ],
    formulaCards: [
      {
        label: "Bảng Ánh Xạ Paraphrasing Vàng TOEIC (Phrasal Verb = Single Verb)",
        formula: "look into = investigate | carry out = conduct / perform | call off = cancel | put off = postpone | figure out = solve",
        note: "Quy luật bất biến của ETS: Băng nghe đọc Phrasal Verb → Đáp án viết Single Verb (và ngược lại ở Part 7!). Thuộc bảng này là cầm chắc 5–8 câu đúng!"
      },
      {
        label: "Bộ Tứ Vận Hành Hệ Thống Của Dân IT • SET UP – BACK UP – ROLL OUT – HAND OVER",
        formula: "set up (dựng/cài đặt) → back up (sao lưu) → roll out (triển khai diện rộng) → hand over (bàn giao)",
        note: "Chú ý dấu cách! Làm Động từ thì viết TÁCH RỜI ('set up a server', 'back up data', 'roll out an update'); khi biến thành Danh từ/Tính từ mới viết LIỀN hoặc GẠCH NỐI ('a setup script', 'a backup file', 'the initial rollout', 'handover document')!"
      },
      {
        label: "Quy Tắc Đại Từ Xen Giữa (Separable Phrasal Verbs)",
        formula: "set up the environment ✅ = set the environment up ✅ → NHƯNG với đại từ (it/them): set IT up ✅ (KHÔNG nói 'set up it' ❌!)",
        note: "Áp dụng cho: set up, back up, roll out, figure out, call off, put off, hand over. Riêng 'look into' và 'run out of' là KHÔNG tách được ('look into it' ✅)!"
      },
      {
        label: "Cảnh Báo Cạn Kiệt Tài Nguyên • RUN OUT OF",
        formula: "run out of + Noun (hết sạch thời gian / bộ nhớ / dung lượng đĩa / ngân sách / văn phòng phẩm)",
        note: "Luôn đi đủ 3 chữ 'run out OF' khi có danh từ theo sau ('The JVM ran out of heap memory' → OutOfMemoryError!)."
      }
    ],
    sections: [
      {
        heading: "1. Điều Tra, Giải Quyết & Thực Thi: Look into – Figure out – Carry out",
        paragraphs: [
          "Trong mọi cuộc họp Daily Standup hoặc xử lý ticket khách hàng báo lên, ba cụm động từ 'look into', 'figure out' và 'carry out' là vũ khí giao tiếp số 1 giúp bạn nghe tự nhiên như kỹ sư làm việc tại Silicon Valley.",
          "Khi sếp hỏi về một lỗi lạ vừa phát sinh mà bạn chưa rõ nguyên nhân, câu trả lời chuẩn chỉnh và đáng tin cậy nhất luôn là: 'I'm looking into it right now and will let you know once I figure out the root cause.'"
        ],
        bullets: [
          "look into sth (= investigate / examine): Xem xét kỹ, điều tra nguyên nhân ('Customer support promised to look into the billing discrepancy'). Không tách tân ngữ!",
          "figure out sth / how to V (= understand / find a solution): Mò ra, tìm ra lời giải sau khi suy nghĩ ('We finally figured out why the race condition happened').",
          "carry out sth (= conduct / execute / perform): Tiến hành thực hiện một kế hoạch, cuộc khảo sát, kiểm thử hoặc bảo trì ('carry out penetration testing', 'carry out a survey')."
        ]
      },
      {
        heading: "2. Hủy Hay Hoãn & Cạn Tài Nguyên: Call off – Put off – Run out of",
        paragraphs: [
          "Ở bài V1.1 bạn đã học cặp 'cancel' vs 'postpone'. Lên trình độ TOEIC 550–650+, đề thi chuyển sang thử thách bạn bằng cặp anh em sinh đôi 'call off' vs 'put off'. Vì cả hai đều kết thúc bằng giới từ 'off', thí sinh rất hay chọn nhầm trong lúc áp lực thời gian!",
          "Bên cạnh đó, 'run out of' là cụm từ tần suất cực cao trong cả thông báo văn phòng (hết giấy in, hết vé sự kiện) lẫn cảnh báo hạ tầng phần mềm (hết dung lượng ổ cứng, hết connection pool)."
        ],
        bullets: [
          "call off (= cancel): Hủy bỏ hoàn toàn ('They called off the merger talks'). Mẹo nhớ: Gọi điện (call) báo nghỉ (off) luôn!",
          "put off (= postpone / delay): Tạm gác/đặt (put) lùi ra xa (off) để làm sau ('Never put off security patches until next quarter'). Theo sau put off nếu là động từ cũng dùng V-ing!",
          "run out of + Noun (= exhaust / deplete): 'We are running out of disk space on the Kafka broker node.'"
        ]
      },
      {
        heading: "3. Vòng Đời Triển Khai & Bàn Giao: Set up – Back up – Roll out – Hand over",
        paragraphs: [
          "Bốn cụm từ cuối cùng mô tả trọn vẹn một ngày làm việc chuẩn mực của Senior Developer: sáng dựng môi trường test ('set up'), trưa sao lưu dữ liệu an toàn ('back up'), chiều tung bản cập nhật mới dần ra cho người dùng ('roll out'), và cuối ngày bàn giao lại hệ thống hoặc dự án cho ca trực/đội vận hành ('hand over').",
          "Trong đề TOEIC Part 6 & Part 7 về thông báo của phòng IT, bạn sẽ bắt gặp cả dạng động từ hai chữ ('back up your files') lẫn dạng danh từ ghép một chữ ('system backup', 'nationwide rollout')."
        ],
        bullets: [
          "set up: Dùng cực rộng — 'set up a meeting' (sắp xếp cuộc họp), 'set up an account' (tạo tài khoản), 'set up a CI/CD pipeline' (thiết lập đường ống CI/CD).",
          "back up: Nghĩa 1 (IT) = sao lưu dữ liệu ('back up important documents to the cloud'); Nghĩa 2 (Họp hành) = ủng hộ, đưa bằng chứng bảo vệ ý kiến ('metrics to back up my proposal').",
          "roll out: Tung sản phẩm/chính sách mới ra thị trường hoặc triển khai phần mềm theo từng cụm người dùng ('roll out the new mobile banking UI to 10% of users').",
          "hand over (sth to sb): Bàn giao công việc, quyền kiểm soát, tài liệu trước khi nghỉ phép hoặc chuyển dự án ('hand over my tasks to Lan before maternity leave')."
        ]
      }
    ],
    vocabItems: [
      {
        word: "look into",
        pos: "phr.v",
        ipa: "/lʊk ˈɪntuː/",
        meaning: "điều tra, xem xét kỹ lưỡng một vấn đề hoặc sự cố",
        synonyms: "investigate, examine, check into",
        collocations: ["look into the issue", "look into a complaint", "look into alternatives"],
        mnemonic: "LOOK (nhìn) + INTO (xuyên sâu vào bên trong log/code) => Đào sâu điều tra nguyên nhân!",
        toeicEx: "Our technician will **look into** the air-conditioning problem this afternoon.",
        toeicVi: "Kỹ thuật viên của chúng tôi sẽ kiểm tra xem xét sự cố máy điều hòa vào chiều nay.",
        javaEx: "I'm **looking into** why the HikariCP connection pool timed out during peak traffic.",
        javaVi: "Tôi đang điều tra lý do vì sao vùng kết nối HikariCP bị quá hạn chờ trong giờ cao điểm."
      },
      {
        word: "carry out",
        pos: "phr.v",
        ipa: "/ˈkæri aʊt/",
        meaning: "tiến hành, thực thi (kế hoạch, khảo sát, kiểm định, thí nghiệm)",
        synonyms: "conduct, perform, execute, implement",
        collocations: ["carry out an inspection", "carry out a survey", "carry out maintenance"],
        mnemonic: "CARRY (mang vác ý tưởng) + OUT (ra ngoài thực địa) => Bắt tay tiến hành thực thi ngoài thực tế!",
        toeicEx: "Independent auditors **carried out** a thorough review of the company's accounts.",
        toeicVi: "Các kiểm toán viên độc lập đã tiến hành rà soát kỹ lưỡng sổ sách kế toán của công ty.",
        javaEx: "DevOps will **carry out** routine database maintenance between midnight and 3 A.M.",
        javaVi: "Đội DevOps sẽ tiến hành bảo trì cơ sở dữ liệu định kỳ trong khoảng từ nửa đêm đến 3 giờ sáng."
      },
      {
        word: "set up",
        pos: "phr.v",
        ipa: "/set ʌp/",
        meaning: "thiết lập, cài đặt, dựng lên (hệ thống, cuộc họp, doanh nghiệp)",
        synonyms: "establish, configure, arrange, install",
        collocations: ["set up a meeting", "set up an environment", "set up a branch office"],
        mnemonic: "Quá thân thuộc từ câu kinh điển @BeforeEach void setUp() trong JUnit — hàm khởi tạo dựng sẵn môi trường trước mỗi bài test!",
        toeicEx: "Would you like me to **set up** a video call with the regional sales team?",
        toeicVi: "Bạn có muốn tôi sắp xếp một cuộc gọi video với đội kinh doanh khu vực không?",
        javaEx: "It took only ten minutes to **set up** a local Kafka cluster using Testcontainers.",
        javaVi: "Chỉ mất mười phút để dựng lên một cụm Kafka cục bộ bằng thư viện Testcontainers."
      },
      {
        word: "back up",
        pos: "phr.v",
        ipa: "/bæk ʌp/",
        meaning: "sao lưu dự phòng (dữ liệu); hoặc hậu thuẫn, chứng minh cho luận điểm",
        synonyms: "make a copy, archive; support, substantiate",
        collocations: ["back up files", "back up the database", "data to back up a claim"],
        mnemonic: "Đứng ở phía SAU (BACK) nâng đỡ LÊN (UP) => Lưu bản dự phòng đỡ lưng phòng khi bản chính sập!",
        toeicEx: "Employees are reminded to **back up** all project folders before Friday's OS update.",
        toeicVi: "Nhân viên được nhắc nhở sao lưu toàn bộ thư mục dự án trước đợt cập nhật hệ điều hành thứ Sáu.",
        javaEx: "She brought JMeter benchmark charts to **back up** her caching architecture proposal.",
        javaVi: "Cô ấy đã mang theo biểu đồ đo tải JMeter để củng cố chứng minh cho đề xuất kiến trúc bộ nhớ đệm của mình."
      },
      {
        word: "roll out",
        pos: "phr.v",
        ipa: "/roʊl aʊt/",
        meaning: "triển khai diện rộng, chính thức tung ra (tính năng, sản phẩm, quy định mới)",
        synonyms: "launch, introduce, deploy progressively",
        collocations: ["roll out a new feature", "roll out nationwide", "gradual rollout"],
        mnemonic: "Hình ảnh trải tấm thảm đỏ CUỘN RA (ROLL OUT) dần dần từ đầu sảnh tới cuối sảnh => Canary rollout tính năng tới từng nhóm user!",
        toeicEx: "The bank plans to **roll out** biometric login across all branches next quarter.",
        toeicVi: "Ngân hàng dự định triển khai đăng nhập sinh trắc học trên toàn bộ các chi nhánh vào quý tới.",
        javaEx: "We used feature flags to **roll out** the new checkout API to five percent of users first.",
        javaVi: "Chúng tôi đã dùng cờ tính năng (feature flags) để triển khai bộ API thanh toán mới cho 5% người dùng trước tiên."
      },
      {
        word: "figure out",
        pos: "phr.v",
        ipa: "/ˈfɪɡjər aʊt/",
        meaning: "tìm ra lời giải, suy luận hiểu ra nguyên nhân hoặc cách làm",
        synonyms: "solve, work out, decipher, understand",
        collocations: ["figure out the root cause", "figure out how to", "figure it out"],
        mnemonic: "FIGURE (con số/hình vẽ) + OUT => Vẽ sơ đồ tính toán một hồi rồi 'À há!' tìm ra đáp án!",
        toeicEx: "We need to **figure out** a way to reduce packaging waste by twenty percent.",
        toeicVi: "Chúng ta cần tìm ra cách cắt giảm hai mươi phần trăm rác thải bao bì.",
        javaEx: "After reading the thread dump, Nam quickly **figured out** which lock caused the deadlock.",
        javaVi: "Sau khi đọc bản chụp thread dump, Nam nhanh chóng tìm ra khóa nào đã gây ra hiện tượng deadlock."
      },
      {
        word: "call off",
        pos: "phr.v",
        ipa: "/kɔːl ɔːf/",
        meaning: "hủy bỏ hoàn toàn một sự kiện hoặc thỏa thuận đã định",
        synonyms: "cancel, scrap, abandon",
        collocations: ["call off a meeting", "call off the event", "call off negotiations"],
        mnemonic: "CALL (gọi thông báo) + OFF (tắt nghỉ hẳn, như turn off) => Gọi báo hủy luôn không làm nữa!",
        toeicEx: "Organizers had to **call off** the company picnic because of a typhoon warning.",
        toeicVi: "Ban tổ chức đã phải hủy bỏ buổi dã ngoại công ty vì cảnh báo bão lớn.",
        javaEx: "The release manager **called off** tonight's deployment after QA found a critical blocker.",
        javaVi: "Quản lý phát hành đã hủy bỏ đợt triển khai tối nay sau khi đội QA phát hiện một lỗi chặn nghiêm trọng."
      },
      {
        word: "put off",
        pos: "phr.v",
        ipa: "/pʊt ɔːf/",
        meaning: "trì hoãn, dời việc sang thời điểm khác muộn hơn",
        synonyms: "postpone, delay, defer, push back",
        collocations: ["put off until tomorrow", "put off making a decision", "put it off"],
        mnemonic: "PUT (đặt sang một bên) + OFF (xa ra một chút) => Tạm gác lại để mai tính tiếp (= postpone)!",
        toeicEx: "The committee decided to **put off** voting on the budget until more data is available.",
        toeicVi: "Ủy ban đã quyết định hoãn việc bỏ phiếu thông qua ngân sách cho đến khi có thêm dữ liệu.",
        javaEx: "**Putting off** technical debt refactoring too long will slow down every future sprint.",
        javaVi: "Trì hoãn việc trả nợ kỹ thuật quá lâu sẽ làm chậm tốc độ của mọi sprint trong tương lai."
      },
      {
        word: "run out of",
        pos: "phr.v",
        ipa: "/rʌn aʊt əv/",
        meaning: "dùng hết sạch, cạn kiệt (thời gian, tiền bạc, tài nguyên, vật tư)",
        synonyms: "exhaust, deplete, use up, have none left",
        collocations: ["run out of time", "run out of memory", "run out of stock"],
        mnemonic: "Chạy (RUN) văng ra ngoài (OUT OF) bình chứa rỗng không => Cạn sạch tài nguyên (y hệt OutOfMemoryError)!",
        toeicEx: "The conference organizers **ran out of** printed brochures before noon.",
        toeicVi: "Ban tổ chức hội nghị đã phát hết sạch các tập tài liệu in trước giờ trưa.",
        javaEx: "The worker pod crashed because the container **ran out of** allocated heap memory.",
        javaVi: "Pod xử lý bị sập vì container đã cạn sạch vùng bộ nhớ heap được cấp phát."
      },
      {
        word: "hand over",
        pos: "phr.v",
        ipa: "/hænd ˈoʊvər/",
        meaning: "bàn giao (công việc, dự án, tài liệu, quyền phụ trách) cho người tiếp nhận",
        synonyms: "transfer, pass on, turn over",
        collocations: ["hand over responsibilities", "hand over to the operations team", "smooth handover"],
        mnemonic: "Đưa tận TAY (HAND) sang BÊN KIA (OVER) cho người kế nhiệm nắm giữ => Bàn giao ca / dự án!",
        toeicEx: "Mr. Sato will **hand over** his client accounts to Ms. Lee before retiring next month.",
        toeicVi: "Ông Sato sẽ bàn giao danh mục khách hàng của mình cho cô Lee trước khi nghỉ hưu vào tháng tới.",
        javaEx: "I wrote a detailed runbook to **hand over** the billing service to the maintenance squad.",
        javaVi: "Tôi đã viết một tài liệu vận hành chi tiết để bàn giao dịch vụ thanh toán sang cho đội bảo trì."
      }
    ],
    examples: [
      {
        tag: "Daily Standup",
        en: "I'm still **looking into** the intermittent 502 error on staging; I hope to **figure it out** before lunch.",
        vi: "Tôi vẫn đang điều tra lỗi 502 chập chờn trên staging; hy vọng sẽ tìm ra nguyên nhân trước giờ ăn trưa.",
        note: "Chú ý đại từ 'it' bắt buộc kẹp ở giữa: 'figure it out' (KHÔNG nói 'figure out it')."
      },
      {
        tag: "TOEIC Part 5",
        en: "Safety inspectors will **carry out** an unannounced check of the manufacturing facility this month.",
        vi: "Các thanh tra an toàn sẽ tiến hành một đợt kiểm tra đột xuất tại nhà máy sản xuất trong tháng này.",
        note: "'carry out a check / an inspection' = tiến hành kiểm tra."
      },
      {
        tag: "Client Email",
        en: "Instead of **calling off** the workshop completely, could we **put it off** until next Wednesday?",
        vi: "Thay vì hủy bỏ hoàn toàn buổi hội thảo, liệu chúng ta có thể hoãn nó sang thứ Tư tuần tới được không?",
        note: "Câu đối chiếu hoàn hảo giúp phân biệt trọn đời 'call off' (hủy hẳn) vs 'put off' (dời lịch)!"
      },
      {
        tag: "Senior Java",
        en: "Before we **roll out** schema v4 to production, verify that the automated snapshot has **backed up** all tables.",
        vi: "Trước khi triển khai cấu trúc DB v4 lên production, hãy kiểm tra chắc chắn bản chụp tự động đã sao lưu toàn bộ các bảng.",
        note: "'roll out ... to production' + 'back up all tables'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Because the supply closet has nearly **run out of** toner cartridges, please submit a restock request today.",
        vi: "Vì tủ vật tư đã gần hết sạch hộp mực in, vui lòng gửi yêu cầu nhập thêm hàng ngay hôm nay.",
        note: "'run out of + danh từ đếm được số nhiều hoặc không đếm được'."
      },
      {
        tag: "Daily Standup",
        en: "Tomorrow is my last day before vacation, so I'll **hand over** the on-call pager to Tuan at 4 P.M.",
        vi: "Ngày mai là ngày làm việc cuối trước kỳ nghỉ phép của tôi, nên tôi sẽ bàn giao ca trực sự cố cho Tuấn lúc 4 giờ chiều.",
        note: "'hand over A to B' = bàn giao A cho người nhận B."
      },
      {
        tag: "TOEIC Part 5",
        en: "New employees should contact the IT help desk to have their corporate e-mail accounts **set up**.",
        vi: "Nhân viên mới nên liên hệ bàn hỗ trợ CNTT để được thiết lập tài khoản email công ty.",
        note: "Cấu trúc cầu khiến bị động ăn điểm cao: 'have + vật + V3/P2' (quá khứ phân từ của set vẫn là set: 'set up')."
      },
      {
        tag: "Senior Java",
        en: "Our initial **rollout** in Vietnam went smoothly, so we're expanding to Thailand next sprint.",
        vi: "Đợt triển khai ban đầu tại Việt Nam diễn ra suôn sẻ, nên chúng tôi sẽ mở rộng sang Thái Lan vào sprint tới.",
        note: "Khi làm Danh từ, viết liền thành một từ 'rollout' ('initial rollout')."
      },
      {
        tag: "Client Email",
        en: "We have prepared a comprehensive **handover** guide covering architecture diagrams and deployment steps.",
        vi: "Chúng tôi đã chuẩn bị một tài liệu bàn giao toàn diện bao gồm sơ đồ kiến trúc và các bước triển khai.",
        note: "Danh từ ghép viết liền 'handover guide / handover session' (tài liệu / buổi bàn giao)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Please keep a secondary **backup** of your presentation on a USB drive in case the Wi-Fi fails.",
        vi: "Vui lòng giữ một bản sao lưu dự phòng thứ hai của bài thuyết trình trên USB phòng khi mạng Wi-Fi gặp sự cố.",
        note: "'a backup' (danh từ viết liền) vs 'to back up' (cụm động từ viết rời)."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "The bug looks tricky, let me figure out it right away. ❌",
          fix: "The bug looks tricky, let me figure it out right away. ✅",
          why: "Với cụm động từ tách được (figure out, set up, call off, put off, back up), khi tân ngữ là ĐẠI TỪ (it, them, us) thì bắt buộc phải đặt đại từ ở GIỮA!"
        },
        {
          bug: "Did you backup the PostgreSQL database before upgrading? ❌",
          fix: "Did you back up the PostgreSQL database before upgrading? ✅",
          why: "Sau trợ động từ 'Did you...' cần ĐỘNG TỪ nên phải viết tách rời 2 chữ 'back up' (tương tự: 'log in', 'set up', 'roll out'). Viết liền 'backup' chỉ dùng làm Danh từ hoặc Tính từ!"
        },
        {
          bug: "Our Kubernetes node ran out disk space last night. ❌",
          fix: "Our Kubernetes node ran out of disk space last night. ✅",
          why: "Khi theo sau có danh từ chỉ thứ bị cạn kiệt ('disk space'), bắt buộc phải có giới từ 'OF': 'run out OF sth'!"
        },
        {
          bug: "We put off to migrate the legacy service until Q4. ❌",
          fix: "We put off migrating the legacy service until Q4. ✅",
          why: "Giống hệt người anh em 'postpone', sau 'put off' bắt buộc dùng Danh động từ (V-ing), không dùng 'to V'!"
        }
      ]
    },
    toeicTips: [
      "Mẹo Phản Xạ Part 2–3: Hễ nghe băng đọc 'call off' → mắt quét ngay đáp án có chữ 'cancel'; nghe 'put off' → quét chữ 'postpone / reschedule'; nghe 'look into' → quét chữ 'investigate / check'!",
      "Mẹo Part 5 Chọn Giới Từ Đi Kèm Động Từ: Thấy 'carry _____ a survey / study / inspection' → chọn ngay 'out' ('carry out'); thấy 'run out _____ supplies / time' → chọn ngay 'of'!",
      "Mẹo Phân Biệt Từ Loại Part 5: Chỗ trống đứng sau 'a / the / daily / system' → chọn danh từ viết liền ('backup', 'setup', 'rollout'); chỗ trống đứng sau 'to / will / must / should' → chọn cụm động từ có khoảng trắng ('back up', 'set up', 'roll out')!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "the payment discrepancy",
          "Our engineering team",
          "and figure out",
          "will look into",
          "a permanent fix."
        ],
        answer: "Our engineering team will look into the payment discrepancy and figure out a permanent fix.",
        vi: "Đội ngũ kỹ thuật của chúng tôi sẽ điều tra khoản chênh lệch thanh toán và tìm ra bản sửa lỗi triệt để."
      },
      fillBlank: {
        sentence: "The construction company had to carry _____ a thorough safety check before reopening the bridge.",
        answer: "out",
        accepted: ["out"],
        hint: "Tiểu từ 3 chữ cái đi sau 'carry' tạo thành cụm động từ mang nghĩa 'tiến hành / thực hiện'",
        explain: "Cụm động từ cố định 'carry out + an inspection / a safety check' (= conduct / perform: tiến hành kiểm tra)."
      }
    },
    quiz: [
      {
        q: "Customer service representatives promised to _____ the overcharging complaint and respond within 24 hours.",
        options: ["look into", "run out", "call off", "hand over"],
        answer: 0,
        explain: "Đáp án đúng là 'look into' (= investigate: điều tra/xem xét kỹ lời phàn nàn tính lố cước). Loại 'run out' (thiếu 'of' và sai nghĩa cạn kiệt), 'call off' (hủy bỏ), 'hand over' (bàn giao — thiếu 'to sb')."
      },
      {
        q: "Because several key stakeholders were ill, the project steering committee decided to _____ the review until Monday.",
        options: ["call off", "put off", "carry out", "figure out"],
        answer: 1,
        explain: "Đáp án đúng là 'put off' (= postpone: trì hoãn). Dấu hiệu vàng là cụm 'until Monday' ở cuối câu — chứng tỏ cuộc họp chỉ dời sang thứ Hai chứ không hủy hẳn ('call off')."
      },
      {
        q: "Before formatting your workstation, make sure to _____ all source code repositories and SSH keys.",
        options: ["backup", "back up", "rollout", "handover"],
        answer: 1,
        explain: "Đáp án đúng là 'back up' (cụm động từ viết tách rời đi sau 'make sure to + V-nguyên-thể': đảm bảo sao lưu). Cả ba đáp án 'backup', 'rollout', 'handover' viết dính liền đều là Danh từ nên sai ngữ pháp sau 'to'!"
      }
    ]
  }
});
