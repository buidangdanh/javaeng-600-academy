/* Vocab V3 — Từ Vựng Thực Chiến Kỹ Sư Phần Mềm: Agile, Git, CI/CD, Production, Backend Core & Tech Docs
 * Biên soạn bởi Principal Java Architect & Giảng viên TOEIC 700+
 * Mỗi bài gồm 10 từ/cụm thuật ngữ cốt lõi (kèm ví dụ kép TOEIC + Java) + 10 câu giao tiếp thực chiến = 30 câu/bài.
 */

window.LESSON_DETAILS = window.LESSON_DETAILS || {};
Object.assign(window.LESSON_DETAILS, {
  V3_1: {
    duration: "45 phút",
    toeicTarget: "Giao tiếp Kỹ sư Phần mềm Quốc tế & TOEIC 600–650+",
    javaContext: "Daily Standup 15 phút, Sprint Planning, Backlog Refinement & TOEIC Part 3–7 Họp dự án",
    teacherIntro: "Chào anh em! Suốt 12 năm ngồi ghế Principal Architect làm việc cùng các team ở Silicon Valley, Frankfurt và Singapore, tôi chứng kiến rất nhiều anh em Java Việt Nam code cực kỳ chắc tay nhưng cứ tới 9h sáng vào Daily Standup là toát mồ hôi hột. Lý do không phải anh em thiếu ngữ pháp cao siêu, mà vì anh em dịch từng chữ từ tiếng Việt sang ('Yesterday I do...', 'Today I continue fix...'). Kỹ sư bản xứ nói chuyện bằng các 'cụm tín hiệu' (signal chunks) ngắn gọn như on track, blocker, bandwidth, scope creep. Nắm trọn 10 cụm từ và 4 khung câu của bài hôm nay, sáng mai anh em bật mic nói Standup mượt mà trong 60 giây — đồng thời hốt trọn điểm các đoạn hội thoại họp tiến độ trong TOEIC Part 3 & Part 7!",
    javaAnalogy: {
      title: "Daily Standup giống hệt Health Check Endpoint (/actuator/health) của Spring Boot",
      body: "Khi Kubernetes gọi `/actuator/health`, service của bạn không kể lể dài dòng lịch sử khởi tạo Bean mà trả về đúng 3 thông tin cốt lõi: trạng thái hiện tại (`UP = on track` / `DEGRADED = behind schedule`), tài nguyên còn trống (`thread pool capacity = bandwidth`), và điểm nghẽn đang chờ bên ngoài (`DB connection timeout = blocker / impediment`). Hãy báo cáo Standup ngắn, rõ, hướng tới hành động y hệt một JSON payload chuẩn!"
    },
    objectives: [
      "Sử dụng trôi chảy 10 thuật ngữ Agile/Scrum sống còn để báo cáo Daily Standup dưới 90 giây mà không ấp úng.",
      "Biết cách nêu khó khăn (raise a blocker), thương lượng phạm vi công việc (scope creep) và báo tải cá nhân (bandwidth) lịch sự, chuyên nghiệp.",
      "Nhận diện tức thì nhóm từ vựng quản lý tiến độ dự án (ahead of / on / behind schedule, estimate, refinement) trong TOEIC Listening Part 3 và Reading Part 7."
    ],
    formulaCards: [
      {
        label: "Khung Báo Cáo Daily Standup 3 Nhịp (60 giây)",
        formula: "Yesterday I wrapped up [Task A]. Today I'm focusing on [Task B], and we're currently on track for the release.",
        note: "Dùng 'wrapped up' thay cho 'finished' và 'focusing on' thay cho 'do' giúp giọng văn tự nhiên chuẩn kỹ sư Mỹ."
      },
      {
        label: "Khung Báo Cáo Điểm Nghẽn Cần Hỗ Trợ (Raise a Blocker)",
        formula: "I'm currently blocked by [Issue/Dependency]. Could I sync up with [@Name] right after standup to unblock this?",
        note: "Tuyệt đối không phàn nàn chung chung; luôn nêu rõ bị chặn bởi cái gì và đề xuất 'sync up' ngắn sau buổi họp."
      },
      {
        label: "Khung Từ Chối Nhẹ Nhàng Khi Quá Tải (Bandwidth Check)",
        formula: "I'd love to help, but I don't have enough bandwidth this sprint. Can we pull it into the next backlog refinement?",
        note: "Nói 'I don't have bandwidth' chuyên nghiệp hơn gấp trăm lần câu 'I am too busy' dễ gây mất lòng Product Owner."
      },
      {
        label: "Khung Cảnh Báo Phình Phạm Vi (Flagging Scope Creep)",
        formula: "Adding [New Feature] wasn't in the original acceptance criteria — it might put our sprint goal behind schedule.",
        note: "Dùng 'acceptance criteria' làm lá chắn khách quan thay vì tranh cãi cảm tính với BA hoặc khách hàng."
      }
    ],
    sections: [
      {
        heading: "1. Nghệ Thuật Nói Daily Standup: Chuyển Từ 'Báo Cáo Chấm Công' Sang 'Đồng Bộ Tiến Độ'",
        paragraphs: [
          "Sai lầm phổ biến nhất của lập trình viên Việt Nam khi làm việc với team Âu – Mỹ là biến Daily Standup thành buổi liệt kê từng dòng code đã gõ. Scrum Master và Tech Lead nước ngoài không cần biết bạn sửa bao nhiêu class DTO; họ chỉ quan tâm ticket có đang đi đúng hướng (on track) hay đang trễ tiến độ (behind schedule), và liệu có rào cản nào (blocker / impediment) cần gỡ bỏ ngay không.",
          "Trong đề thi TOEIC Part 3 (đoạn hội thoại 2–3 người trong văn phòng), mô-típ kinh điển là người quản lý hỏi tiến độ dự án và nhân viên trả lời bằng cặp cụm từ trái nghĩa: on track / ahead of schedule (đúng/vượt tiến độ) đối lập với behind schedule / held up by (chậm tiến độ / bị kẹt bởi)."
        ],
        bullets: [
          "Thay vì nói 'I have no problem', hãy chốt câu gọn gàng: 'No blockers on my side.' hoặc 'Everything is on track.'",
          "Phân biệt tinh tế: 'blocker' là vật cản cứng làm bạn đứng hình hoàn toàn (ví dụ chưa có API key môi trường UAT), còn 'impediment' là lực cản làm team chạy chậm lại (ví dụ môi trường CI/CD build mất 45 phút).",
          "Khi cần trao đổi sâu hơn 2 phút với một đồng nghiệp, hãy dùng câu thần chú: 'Let's take this offline and sync up after standup' để giữ nhịp 15 phút cho cả nhóm."
        ]
      },
      {
        heading: "2. Sprint Planning & Backlog Refinement: Làm Rõ Yêu Cầu Trước Khi Viết Dòng Code Đầu Tiên",
        paragraphs: [
          "Ở vị trí Senior Java Developer, giá trị của bạn nằm ở việc phát hiện lỗ hổng nghiệp vụ ngay trong buổi làm mịn backlog (backlog refinement) chứ không phải đợi code xong mới phát hiện thiếu điều kiện nghiệm thu (acceptance criteria). Khi ước lượng nỗ lực (estimate), hãy luôn gắn kèm các giả định kỹ thuật rõ ràng.",
          "Một hiện tượng gây cháy dự án toàn cầu là 'scope creep' — yêu cầu ban đầu chỉ là xuất file CSV đơn giản, nhưng giữa sprint khách hàng xin thêm lọc động, định dạng Excel nhiều sheet và gửi qua S3. Biết gọi tên chính xác 'scope creep' giúp bạn bảo vệ anh em trong team một cách đĩnh đạc."
        ],
        bullets: [
          "Cụm từ vàng khi đọc ticket mơ hồ: 'Could we clarify the acceptance criteria for edge cases before we estimate this story?'",
          "Trong TOEIC Part 5 & Part 7, 'estimate' vừa là danh từ (/ˈes.tɪ.mət/ — bảng dự toán chi phí/thời gian) vừa là động từ (/ˈes.tɪ.meɪt/ — ước tính), rất hay đi kèm 'rough estimate' hoặc 'accurate estimate'.",
          "Dùng 'bandwidth' (băng thông cá nhân/nhóm) để nói về quỹ thời gian và sự tập trung còn trống trong tuần làm việc."
        ]
      },
      {
        heading: "3. Liên Hệ Trực Tiếp Đề Thi TOEIC 600–750+: Nhóm Từ Tiến Độ & Phối Hợp Liên Phòng Ban",
        paragraphs: [
          "Đừng nghĩ từ vựng Agile chỉ dùng trong phòng IT! Đề thi ETS TOEIC hiện đại sử dụng dày đặc các cụm từ họp nhóm thương mại hoàn toàn trùng khớp với Scrum: schedule a follow-up / sync up, fall behind schedule, stay on track, meet the criteria, allocate resources.",
          "Đặc biệt ở TOEIC Part 7 (chuỗi tin nhắn Slack/Teams 3–4 người — Text Message Chain), câu hỏi 'What does the speaker mean by...?' thường xoáy thẳng vào các thành ngữ công sở như 'My plate is full / I have limited bandwidth' (= không thể nhận thêm việc) hoặc 'Let's touch base / sync up at 2 PM' (= họp ngắn cập nhật thông tin)."
        ],
        bullets: [
          "Bẫy giới từ TOEIC Part 5: luôn là 'ahead OF schedule', 'ON schedule / ON track', và 'BEHIND schedule' (không có mạo từ 'the' ở giữa!).",
          "Từ đồng nghĩa Part 7 cực hay gặp: 'impediment / obstacle' = 'hurdle / barrier'; 'acceptance criteria' = 'requirements / specifications'.",
          "Khi nghe Part 3 thấy nhân vật nói 'Actually, we ran into an unexpected blocker with the payment vendor', đáp án chắc chắn nằm ở phương án báo hoãn hoặc xin thêm hỗ trợ."
        ]
      }
    ],
    vocabItems: [
      {
        word: "blocker",
        pos: "n",
        ipa: "/ˈblɑː.kɚ/",
        meaning: "điểm chặn cứng, vấn đề nghiêm trọng khiến công việc hoặc bản release phải dừng lại chờ xử lý",
        synonyms: "showstopper, bottleneck, critical obstacle",
        collocations: ["raise a blocker", "resolve a release blocker", "no blockers on my side"],
        mnemonic: "BLOCK (chặn đứng, như Thread bị trạng thái BLOCKED chờ monitor lock) + ER => Thứ làm luồng code của bạn đứng im!",
        toeicEx: "Budget approval remains the final **blocker** before construction on the new data center can begin.",
        toeicVi: "Phê duyệt ngân sách vẫn là rào cản cuối cùng trước khi việc xây dựng trung tâm dữ liệu mới có thể bắt đầu.",
        javaEx: "Waiting for the third-party OAuth2 sandbox credentials is a major **blocker** for our payment integration story.",
        javaVi: "Việc chờ thông tin xác thực sandbox OAuth2 từ đối tác thứ ba đang là điểm chặn lớn cho tác vụ tích hợp thanh toán của chúng tôi."
      },
      {
        word: "impediment",
        pos: "n",
        ipa: "/ɪmˈped.ə.mənt/",
        meaning: "trở ngại, lực cản làm giảm tốc độ làm việc của nhóm (thuật ngữ chuẩn trong Scrum Guide)",
        synonyms: "hindrance, hurdle, barrier, obstruction",
        collocations: ["remove organizational impediments", "escalate an impediment", "serious impediment to"],
        mnemonic: "IM (vào trong) + PEDI (bàn chân, như pedal bàn đạp) => Cái gì đó vướng vào chân khiến cả team chạy chậm lại!",
        toeicEx: "Outdated customs paperwork has been a major **impediment** to expanding our international shipments.",
        toeicVi: "Thủ tục hải quan lỗi thời đã là một trở ngại lớn đối với việc mở rộng các lô hàng quốc tế của chúng tôi.",
        javaEx: "Flaky integration tests on Jenkins are an ongoing **impediment** that slows down every developer's pull request.",
        javaVi: "Các bài kiểm thử tích hợp chập chờn trên Jenkins là một trở ngại dai dẳng làm chậm mọi pull request của lập trình viên."
      },
      {
        word: "backlog refinement",
        pos: "n phrase",
        ipa: "/ˈbæk.lɑːɡ rɪˈfaɪn.mənt/",
        meaning: "buổi làm mịn danh sách công việc tồn đọng (phân tích yêu cầu, chia nhỏ story và gắn điểm trước Sprint mới)",
        synonyms: "backlog grooming, story clarification",
        collocations: ["conduct backlog refinement", "bring up during backlog refinement", "well-refined backlog"],
        mnemonic: "BACKLOG (đống việc tồn) + REFINE (tinh luyện quặng thô thành vàng sạch) => Biến yêu cầu mơ hồ thành ticket rõ nét để dev code được ngay!",
        toeicEx: "Regular project **refinement** sessions ensure all team members understand upcoming priorities.",
        toeicVi: "Các buổi rà soát làm rõ dự án định kỳ đảm bảo mọi thành viên đều hiểu các ưu tiên sắp tới.",
        javaEx: "During **backlog refinement**, we split the monolithic reporting epic into four smaller API stories.",
        javaVi: "Trong buổi làm mịn backlog, chúng tôi đã tách epic báo cáo khổng lồ thành bốn user story API nhỏ hơn."
      },
      {
        word: "acceptance criteria",
        pos: "n phrase (plural)",
        ipa: "/əkˈsep.təns kraɪˈtɪr.i.ə/",
        meaning: "các tiêu chí nghiệm thu (điều kiện cụ thể một tính năng phải thỏa mãn để Product Owner/QA chấp nhận là Hoàn thành)",
        synonyms: "completion requirements, validation rules, definition of satisfaction",
        collocations: ["meet the acceptance criteria", "define clear acceptance criteria", "out of acceptance criteria"],
        mnemonic: "ACCEPTANCE (chấp nhận nghiệm thu) + CRITERIA (số nhiều của criterion - bộ tiêu chuẩn pass test) => Bộ assert() quyết định ticket PASS hay FAIL!",
        toeicEx: "All vendor deliverables must strictly satisfy the **acceptance criteria** outlined in Appendix B.",
        toeicVi: "Tất cả sản phẩm bàn giao của nhà cung cấp phải thỏa mãn nghiêm ngặt các tiêu chí nghiệm thu nêu tại Phụ lục B.",
        javaEx: "According to the **acceptance criteria**, the transfer endpoint must return HTTP 422 when the daily limit is exceeded.",
        javaVi: "Theo các tiêu chí nghiệm thu, endpoint chuyển tiền phải trả về mã HTTP 422 khi vượt quá hạn mức giao dịch ngày."
      },
      {
        word: "estimate",
        pos: "v / n",
        ipa: "/ˈes.tɪ.meɪt/ (v), /ˈes.tɪ.mət/ (n)",
        meaning: "ước lượng, dự tính (thời gian, chi phí, độ phức tạp story points); bản dự toán",
        synonyms: "assess, gauge, projection, quote",
        collocations: ["rough estimate", "estimate story points", "underestimate the complexity"],
        mnemonic: "Nhớ quy tắc phát âm sống còn: Động từ đuôi -ATE đọc /eɪt/ (estimate effort), Danh từ đọc nhẹ /ət/ (a rough estimate)!",
        toeicEx: "The contractor provided a written **estimate** of $18,000 for upgrading the office wiring.",
        toeicVi: "Nhà thầu đã cung cấp bản dự toán bằng văn bản trị giá 18.000 đô la cho việc nâng cấp hệ thống dây điện văn phòng.",
        javaEx: "We **estimated** this Kafka migration at eight story points because of legacy schema compatibility checks.",
        javaVi: "Chúng tôi ước lượng tác vụ chuyển đổi Kafka này ở mức 8 story points do phải kiểm tra tương thích với các schema cũ."
      },
      {
        word: "scope creep",
        pos: "n",
        ipa: "/ˈskoʊp kriːp/",
        meaning: "hiện tượng phình to phạm vi dự án một cách âm thầm (thêm tính năng lặt vặt ngoài thỏa thuận ban đầu khiến trễ hạn)",
        synonyms: "requirement inflation, uncontrolled expansion",
        collocations: ["prevent scope creep", "suffer from scope creep", "flag potential scope creep"],
        mnemonic: "SCOPE (phạm vi dự án) + CREEP (bò trườn lén lút như con sâu) => Yêu cầu cứ bò thêm từng chút một làm nổ tung deadline!",
        toeicEx: "Strict change-request procedures helped the consulting firm avoid costly **scope creep**.",
        toeicVi: "Quy trình yêu cầu thay đổi nghiêm ngặt đã giúp công ty tư vấn tránh được tình trạng phình phạm vi gây tốn kém.",
        javaEx: "Adding real-time PDF export right before code freeze is classic **scope creep**; let's move it to Phase 2.",
        javaVi: "Việc thêm tính năng xuất PDF thời gian thực ngay trước giờ đóng băng code là biểu hiện kinh điển của phình phạm vi; hãy dời nó sang Giai đoạn 2."
      },
      {
        word: "bandwidth",
        pos: "n",
        ipa: "/ˈbænd.wɪtθ/",
        meaning: "năng lực xử lý / quỹ thời gian & sự tập trung còn trống của một cá nhân hoặc đội nhóm (nghĩa bóng công sở); băng thông mạng",
        synonyms: "capacity, availability, mental resources",
        collocations: ["have the bandwidth to take on", "lack sufficient bandwidth", "free up some bandwidth"],
        mnemonic: "Dân mạng hiểu ngay: Đường truyền 100Mbps đã chạy full 99Mbps thì không nhận thêm gói tin mới được => Hết bandwidth là hết sức nhận thêm task!",
        toeicEx: "Our legal team currently lacks the **bandwidth** to review non-urgent supplier agreements this week.",
        toeicVi: "Đội ngũ pháp lý của chúng tôi hiện không còn đủ quỹ thời gian để rà soát các hợp đồng nhà cung cấp không khẩn cấp trong tuần này.",
        javaEx: "Once I finish patching the Spring Security upgrade, I'll have some **bandwidth** to review your architecture RFC.",
        javaVi: "Ngay khi hoàn tất bản vá nâng cấp Spring Security, tôi sẽ có thời gian trống để đọc góp ý tài liệu đề xuất kiến trúc của bạn."
      },
      {
        word: "sync up",
        pos: "phr.v / n",
        ipa: "/sɪŋk ʌp/",
        meaning: "họp ngắn / trao đổi nhanh để đồng bộ thông tin và thống nhất hướng xử lý giữa các thành viên",
        synonyms: "touch base, align, catch up briefly",
        collocations: ["sync up with the frontend team", "quick 10-minute sync-up", "sync up after standup"],
        mnemonic: "Viết tắt của SYNCHRONIZE (như từ khóa `synchronized` trong Java giúp các thread nhìn thấy cùng một trạng thái dữ liệu mới nhất)!",
        toeicEx: "Let's **sync up** tomorrow morning before presenting the quarterly sales figures to the board.",
        toeicVi: "Hãy trao đổi nhanh vào sáng mai trước khi trình bày số liệu bán hàng quý cho ban giám đốc.",
        javaEx: "Can we **sync up** for ten minutes on Huddle to finalize the JSON contract between OrderService and InventoryService?",
        javaVi: "Anh em mình gọi nhanh 10 phút trên Huddle để chốt hợp đồng JSON giữa OrderService và InventoryService được không?"
      },
      {
        word: "on track",
        pos: "idiom / adj phrase",
        ipa: "/ɑːn træk/",
        meaning: "đúng hướng, bám sát tiến độ và mục tiêu đã đề ra",
        synonyms: "on schedule, progressing as planned",
        collocations: ["stay on track", "back on track", "on track to meet the deadline"],
        mnemonic: "TRACK là đường ray tàu hỏa => Tàu vẫn nằm chuẩn trên đường ray nghĩa là đang chạy êm ru đúng lịch trình!",
        toeicEx: "Despite initial staffing shortages, the warehouse automation project is now **on track** for launch in May.",
        toeicVi: "Mặc dù thiếu hụt nhân sự ban đầu, dự án tự động hóa kho hàng hiện đang đúng tiến độ để ra mắt vào tháng Năm.",
        javaEx: "All unit and Testcontainers integration suites are green, so my feature branch is **on track** for Friday's code freeze.",
        javaVi: "Tất cả bộ unit test và tích hợp Testcontainers đều đã xanh, nên nhánh tính năng của tôi đang đúng tiến độ cho đợt đóng băng code thứ Sáu."
      },
      {
        word: "behind schedule",
        pos: "idiom / adv & adj phrase",
        ipa: "/bɪˈhaɪnd ˈskedʒ.uːl/",
        meaning: "chậm tiến độ, trễ hơn so với kế hoạch ban đầu",
        synonyms: "delayed, overdue, running late",
        collocations: ["fall behind schedule", "two days behind schedule", "put the release behind schedule"],
        mnemonic: "BEHIND (tụt lại phía sau) + SCHEDULE (lịch trình) => Lịch đã chạy tới thứ Năm mà việc vẫn ở thứ Ba!",
        toeicEx: "Heavy storms along the coast caused several freight deliveries to fall **behind schedule**.",
        toeicVi: "Những cơn bão lớn dọc bờ biển đã khiến một số chuyến giao hàng vận tải bị chậm tiến độ.",
        javaEx: "We are slightly **behind schedule** on the batch reconciliation job due to unexpected timezone bugs in Oracle.",
        javaVi: "Chúng tôi đang hơi chậm tiến độ ở tiến trình đối soát lô do các lỗi múi giờ không lường trước trong Oracle."
      }
    ],
    examples: [
      {
        tag: "Daily Standup",
        en: "Yesterday I finished implementing the JWT refresh flow, and today I'll write integration tests — **no blockers on my side**.",
        vi: "Hôm qua tôi đã cài đặt xong luồng làm mới JWT, và hôm nay tôi sẽ viết kiểm thử tích hợp — phía tôi không có vướng mắc nào.",
        note: "Mẫu câu Standup chuẩn mực, gãy gọn dưới 15 giây gây ấn tượng cực tốt với Scrum Master nước ngoài."
      },
      {
        tag: "Daily Standup",
        en: "I'm **blocked by** a missing firewall rule to the staging Redis cluster; I've already raised a ticket with DevOps.",
        vi: "Tôi đang bị chặn bởi thiếu quy tắc tường lửa tới cụm Redis staging; tôi đã tạo ticket cho đội DevOps rồi.",
        note: "Phong thái Senior: khi nêu 'blocker' luôn kèm theo hành động chủ động bạn đã thực hiện (đã tạo ticket) chứ không ngồi chờ thụ động."
      },
      {
        tag: "Daily Standup",
        en: "Let's **take this offline** and **sync up** right after standup so we don't hold up the rest of the team.",
        vi: "Mình bàn riêng việc này và trao đổi nhanh ngay sau buổi standup nhé để không làm mất thời gian của cả nhóm.",
        note: "'Take this offline' không có nghĩa là tắt mạng, mà có nghĩa là 'tách ra thảo luận riêng ngoài cuộc họp chung'."
      },
      {
        tag: "System Design",
        en: "Before we **estimate** the effort, we need Product to confirm the exact **acceptance criteria** for partial refunds.",
        vi: "Trước khi ước lượng công sức thực hiện, chúng ta cần bên Product xác nhận tiêu chí nghiệm thu chính xác cho nghiệp vụ hoàn tiền một phần.",
        note: "Đặt điều kiện làm rõ nghiệp vụ trước khi cam kết con số story points."
      },
      {
        tag: "Global Interview",
        en: "When I noticed **scope creep** threatening our Q3 launch, I worked with the PM to defer non-critical enhancements to the next sprint.",
        vi: "Khi nhận thấy việc phình phạm vi đe dọa đợt ra mắt Quý 3, tôi đã làm việc với PM để lùi các cải tiến không cốt lõi sang sprint tiếp theo.",
        note: "Câu trả lời phỏng vấn hành vi tuyệt hay chứng minh tư duy làm chủ sản phẩm (product mindset)."
      },
      {
        tag: "Daily Standup",
        en: "We fell half a day **behind schedule** because of a schema conflict, but we should be **back on track** by tomorrow afternoon.",
        vi: "Chúng tôi bị trễ nửa ngày so với tiến độ do xung đột schema, nhưng sẽ lấy lại đúng tiến độ vào chiều mai.",
        note: "Kết hợp 'behind schedule' + nguyên nhân ngắn + cam kết 'back on track' giúp quản lý hoàn toàn yên tâm."
      },
      {
        tag: "Code Review",
        en: "Do you have **bandwidth** to pair-program with me for 20 minutes on this tricky CompletableFuture timeout bug?",
        vi: "Bạn có trống thời gian để cùng lập trình cặp với tôi 20 phút xử lý lỗi timeout hóc búa của CompletableFuture này không?",
        note: "Hỏi 'Do you have bandwidth...' kèm con số thời gian cụ thể (20 phút) giúp đồng nghiệp rất dễ nhận lời."
      },
      {
        tag: "Incident War-room",
        en: "Slow VPN throughput has become a serious **impediment** for offshore engineers querying the UAT logs.",
        vi: "Băng thông VPN chậm đã trở thành trở ngại nghiêm trọng cho các kỹ sư offshore khi truy vấn log môi trường UAT.",
        note: "Dùng trong buổi Sprint Retrospective để kiến nghị cải thiện hạ tầng làm việc."
      },
      {
        tag: "TOEIC Part 7",
        en: "According to the project update memo, the mobile app redesign remains **on track** despite recent vendor changes.",
        vi: "Theo bản ghi nhớ cập nhật dự án, việc thiết kế lại ứng dụng di động vẫn đúng tiến độ bất chấp những thay đổi nhà cung cấp gần đây.",
        note: "Cấu trúc 'remain on track despite + cụm danh từ' xuất hiện cực nhiều trong bài đọc email nội bộ TOEIC."
      },
      {
        tag: "TOEIC Part 7",
        en: "Please review the attached cost **estimate** and notify us if any adjustments are required prior to Friday's **refinement** meeting.",
        vi: "Vui lòng xem xét bảng dự toán chi phí đính kèm và thông báo cho chúng tôi nếu cần điều chỉnh gì trước cuộc họp rà soát ngày thứ Sáu.",
        note: "Chú ý cụm 'prior to' (= before) kết hợp danh từ 'estimate' và 'refinement' trong văn phong thương mại."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Yesterday I do API login, today I continue do it. No problem.",
          fix: "Yesterday I implemented the login endpoint, and today I'm wrapping up its unit tests. No blockers on my side.",
          why: "Quên chia quá khứ đơn cho việc hôm qua và lặp từ 'do' nghe rất trẻ con; dùng động từ kỹ thuật cụ thể + 'No blockers on my side' chuẩn Scrum."
        },
        {
          bug: "I am very busy now, I cannot check your ticket.",
          fix: "I'm afraid I don't have the bandwidth right now, but I can take a look after 3 PM.",
          why: "Nói thẳng 'very busy / cannot' nghe phũ phàng và thiếu tinh thần đồng đội; dùng 'bandwidth' kèm mốc giờ cụ thể vừa lịch sự vừa chuyên nghiệp."
        },
        {
          bug: "Our project is late schedule two days because BA add more feature.",
          fix: "We're running two days behind schedule due to unexpected scope creep.",
          why: "'Late schedule' là ghép chữ Vietlish sai ngữ pháp và đổ lỗi cá nhân; dùng thành ngữ cố định 'behind schedule' + 'scope creep' khách quan hơn hẳn."
        },
        {
          bug: "Let's talk together after meeting to same idea.",
          fix: "Let's sync up right after standup to get on the same page.",
          why: "'Same idea' là dịch từng chữ; kỹ sư bản xứ luôn nói 'sync up' và 'get on the same page' để chỉ sự thống nhất ý hiểu."
        }
      ]
    },
    toeicTips: [
      "Mẹo phản xạ 3 giây Part 5: Thấy từ 'schedule' đứng sau chỗ trống và không có mạo từ 'a/the', hãy quét ngay 3 giới từ vàng: 'ahead of schedule' (vượt tiến độ), 'on schedule' (đúng tiến độ), 'behind schedule' (trễ tiến độ).",
      "Bẫy từ loại 'estimate': Đứng sau tính từ (a rough/initial _____) thì 'estimate' là DANH TỪ đếm được (nhớ có 'a/an' hoặc số nhiều 'estimates'!). Đừng máy móc chọn 'estimation' khi đề đang hỏi bản báo giá/dự toán.",
      "Trong TOEIC Listening Part 3, khi nghe câu 'Let's touch base / sync up later this afternoon' hoặc 'Let's hold off on that until we have more bandwidth', đáp án cho câu hỏi 'What will the speakers do next?' thường là 'Postpone a task' hoặc 'Meet again later'."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "during backlog refinement",
          "acceptance criteria",
          "We should clarify",
          "scope creep later.",
          "to prevent",
          "the exact"
        ],
        answer: "We should clarify the exact acceptance criteria during backlog refinement to prevent scope creep later.",
        vi: "Chúng ta nên làm rõ các tiêu chí nghiệm thu chính xác ngay trong buổi làm mịn backlog để ngăn chặn tình trạng phình phạm vi về sau."
      },
      fillBlank: {
        sentence: "I'd love to help migrate that service, but I don't have enough _____ this sprint.",
        answer: "bandwidth",
        accepted: ["bandwidth"],
        hint: "Danh từ chỉ 'băng thông / quỹ thời gian & năng lực trống' của lập trình viên",
        explain: "Cụm 'don't have enough bandwidth' là cách diễn đạt chuẩn mực trong môi trường công nghệ quốc tế để báo rằng bạn đã kín tải công việc trong sprint hiện tại."
      }
    },
    quiz: [
      {
        q: "Trong buổi Daily Standup với team Mỹ, bạn đang bị kẹt vì đội Hạ tầng chưa cấp quyền truy cập Kafka môi trường Staging. Câu nào diễn đạt chuyên nghiệp nhất?",
        options: [
          "DevOps team works too slow so today I sit and wait for Kafka.",
          "I'm currently blocked by missing staging Kafka permissions; I've pinged DevOps to follow up.",
          "I have a scope creep with Kafka permission today.",
          "My Kafka is behind bandwidth so I cannot code."
        ],
        answer: 1,
        explain: "Đáp án B chuẩn phong thái Senior: dùng 'blocked by + nguyên nhân khách quan' và nêu rõ bước chủ động 'pinged DevOps to follow up'. Câu A đổ lỗi thô lỗ và sai ngữ pháp ('works too slow'); câu C dùng sai nghĩa 'scope creep' (phình phạm vi yêu cầu); câu D ghép từ vô nghĩa ('behind bandwidth')."
      },
      {
        q: "[TOEIC Part 5] Despite encountering an unexpected supplier _____, the engineering team remains on track to launch the platform in October.",
        options: [
          "impede",
          "impediment",
          "impeded",
          "impeding"
        ],
        answer: 1,
        explain: "Đáp án B ('impediment' — danh từ đếm được số ít) là chính xác vì đứng sau mạo từ 'an' + tính từ 'unexpected' + danh từ phụ 'supplier' tạo thành cụm danh từ 'an unexpected supplier impediment' (một trở ngại ngoài dự kiến từ phía nhà cung cấp). A là động từ nguyên thể, C và D là phân từ không thể làm danh từ chính sau 'an'."
      },
      {
        q: "[TOEIC Part 7 - Text Message Chain] Sarah viết trên nhóm chat: 'With two client audits happening this Thursday, I simply don't have the bandwidth to review the new onboarding guide.' Ý của Sarah là gì?",
        options: [
          "Đường truyền Internet tại bàn làm việc của cô ấy bị mất kết nối.",
          "Cô ấy không đồng ý với nội dung của tài liệu hướng dẫn nhân viên mới.",
          "Cô ấy quá bận với lịch kiểm toán nên không còn thời gian nhận thêm việc trong tuần này.",
          "Cô ấy muốn hủy bỏ cả hai cuộc kiểm toán của khách hàng vào thứ Năm."
        ],
        answer: 2,
        explain: "Đáp án C chính xác: 'not have the bandwidth to V' là thành ngữ công sở mang nghĩa không còn đủ thời gian/năng lực trống để đảm nhận thêm đầu việc. Phương án A là bẫy nghĩa đen (Internet bandwidth) rất điển hình trong câu hỏi ngụ ý của TOEIC Part 7; B và D hoàn toàn sai thông tin."
      }
    ]
  },

  V3_2: {
    duration: "45 phút",
    toeicTarget: "Giao tiếp Kỹ sư Phần mềm Quốc tế & TOEIC 600–650+",
    javaContext: "GitHub / GitLab Pull Request Review, Thảo luận Refactoring & TOEIC Part 6–7 Đánh giá tài liệu",
    teacherIntro: "Anh em thử nhớ lại xem: có bao giờ đọc một Pull Request thấy đồng nghiệp viết vòng lặp lồng nhau O(n²) hoặc copy-paste 50 dòng boilerplate, anh em muốn góp ý lắm nhưng sợ viết tiếng Anh thẳng quá người ta tự ái, còn viết vòng vo thì không tới ý? Ở các tập đoàn đa quốc gia, Code Review là nơi thể hiện rõ nhất đẳng cấp văn hóa kỹ thuật (Engineering Culture). Người Senior không bao giờ chê con người ('Your code is messy'), họ nhận xét trực diện vào đặc tính của đoạn mã ('Extracting this helper would improve readability and reduce tight coupling'). Bài học này trao cho anh em trọn bộ từ vựng PR Review sắc bén nhất trên GitHub/GitLab cùng cách dùng từ tinh tế giúp ai đọc comment của anh em cũng tâm phục khẩu phục!",
    javaAnalogy: {
      title: "Viết Comment Code Review giống như cấu hình Severity Level trong SonarQube",
      body: "SonarQube không đánh đồng mọi lỗi như nhau: có lỗi chỉ là `INFO / MINOR` (tương đương tiền tố `Nit:` / `nitpick` — sửa thì đẹp hơn, không chặn merge), có lỗi là `CODE SMELL` ảnh hưởng bảo trì dài hạn (`boilerplate`, `redundant`, `tight coupling`, `readability`), và có lỗi là `BLOCKER / BUG` gây sập hệ thống ở các trường hợp biên (`edge case`, phá vỡ `backward-compatible`). Gắn đúng nhãn mức độ ngay đầu câu comment giúp tác giả PR xử lý nhanh gấp 3 lần!"
    },
    objectives: [
      "Viết nhận xét Pull Request lịch sự, khách quan và chuẩn quy ước quốc tế với nitpick, LGTM, edge case, readability, maintainability.",
      "Giải thích thuyết phục lý do cần refactor kiến trúc bằng các thuật ngữ boilerplate, tight coupling, redundant, deprecate và backward-compatible.",
      "Nắm vững họ từ vựng 'redundant, compatible, deprecate/approve, readable/legible' cực kỳ hay xuất hiện trong đề thi TOEIC Part 5 & Part 7."
    ],
    formulaCards: [
      {
        label: "Khung Góp Ý Nhỏ Không Chặn Merge (Polite Nitpick)",
        formula: "Nit: Could we rename [varName] to [betterName] for better readability? Non-blocking, LGTM otherwise!",
        note: "Tiền tố 'Nit:' + 'Non-blocking' báo hiệu đây chỉ là góp ý làm sạch code, giúp đồng nghiệp vui vẻ sửa mà không thấy bị bắt bẻ."
      },
      {
        label: "Khung Phát Hiện Trường Hợp Biên (Spotting an Edge Case)",
        formula: "Good catch on the main flow! Have we considered the edge case where [input is null / list is empty]?",
        note: "Đặt câu hỏi 'Have we considered...' với đại từ 'we' tạo cảm giác cùng nhau bảo vệ hệ thống thay vì vạch lá tìm sâu."
      },
      {
        label: "Khung Đề Xuất Refactor Giảm Phụ Thuộc (Decoupling Suggestion)",
        formula: "Introducing an interface here would reduce tight coupling and improve long-term maintainability.",
        note: "Luôn nêu LỢI ÍCH kiến trúc (reduce tight coupling / improve maintainability) để thuyết phục tác giả sửa code."
      },
      {
        label: "Khung Cảnh Báo Tương Thích Ngược Khi Đổi API (Backward Compatibility)",
        formula: "Removing this field breaks backward compatibility for mobile clients — let's deprecate it first instead.",
        note: "Nguyên tắc sống còn của Senior Backend: đánh dấu @Deprecated trước ít nhất 1–2 chu kỳ release thay vì xóa thẳng."
      }
    ],
    sections: [
      {
        heading: "1. Quy Ước Ngầm Trên GitHub Quốc Tế: Nitpick, LGTM, Edge Case vs Corner Case",
        paragraphs: [
          "Khi mở bất kỳ repository mã nguồn mở lớn nào như Spring Framework, Kafka hay Netty, bạn sẽ thấy các kỹ sư trưởng giao tiếp cực kỳ tiết kiệm từ nhưng rõ nghĩa nhờ hệ thống nhãn viết tắt. Khi một PR đã đạt chất lượng tốt, chỉ còn vài góp ý nhỏ về đặt tên biến hay khoảng trắng, họ mở đầu bằng 'Nit:' (viết tắt của nitpick) rồi kết lại bằng 'LGTM!' (Looks Good To Me — Tôi thấy ổn rồi, duyệt merge!).",
          "Trong thảo luận kiểm thử, rất nhiều dev nhầm lẫn giữa 'edge case' và 'corner case'. 'Edge case' là giá trị nằm sát ranh giới cực đại/cực tiểu của MỘT biến (ví dụ số tiền chuyển khoản = 0 đồng, hoặc mảng có 10.000 phần tử tối đa). Trong khi đó, 'corner case' là nơi NHIỀU biến biên giao nhau cùng lúc (ví dụ chuyển đúng hạn mức tối đa vào đúng 23:59:59 ngày năm nhuận khi tài khoản đích vừa bị khóa!)."
        ],
        bullets: [
          "Dùng 'Nit: ...' cho các góp ý style/naming để người được review không bị áp lực tâm lý.",
          "Khi duyệt PR trên GitHub, viết thêm 1 câu khích lệ cụ thể trước LGTM: 'Clean separation of concerns — LGTM! 🚀'",
          "Luôn kiểm tra các edge cases kinh điển trong Java: `null`, chuỗi rỗng `\"\"`, `Collections.emptyList()`, tràn số `Integer.MAX_VALUE` và múi giờ DST."
        ]
      },
      {
        heading: "2. Ngôn Ngữ Của Clean Code & Refactoring: Readability, Maintainability, Tight Coupling & Boilerplate",
        paragraphs: [
          "Khi bạn đề xuất dành 2 ngày để refactor một module cũ mà không có tính năng mới nào cho người dùng cuối, Product Manager sẽ hỏi ngay: 'Tại sao phải tốn công sửa code đang chạy được?'. Nếu bạn chỉ nói 'Because old code is ugly', bạn sẽ bị từ chối ngay lập tức.",
          "Một Senior Java biết dịch chất lượng code sang giá trị kinh doanh bằng bộ tứ danh từ – tính từ sắc bén: giảm mã lặp rườm rà (eliminate boilerplate / redundant logic), gỡ bỏ sự phụ thuộc cứng giữa các lớp (remove tight coupling), từ đó nâng cao độ dễ đọc (readability) và khả năng bảo trì mở rộng nhanh (maintainability) cho các tính năng quý tới."
        ],
        bullets: [
          "Java Records, Lombok hoặc MapStruct sinh ra chính là để 'reduce boilerplate code' (giảm code khuôn mẫu lặp đi lặp lại).",
          "Nếu Class A khởi tạo trực tiếp `new MySqlOrderRepository()` bên trong nó thay vì inject interface qua constructor, đó chính là 'tight coupling' khiến không thể viết unit test độc lập.",
          "Kiểm tra xem một điều kiện `if (x != null)` có bị thừa thãi không bằng tính từ 'redundant' — cũng chính là thông báo nổi tiếng của IntelliJ IDEA: 'Condition is always true / redundant check'."
        ]
      },
      {
        heading: "3. Tiến Hóa API An Toàn & Cầu Nối Điểm Cao TOEIC: Backward-Compatible & Deprecate",
        paragraphs: [
          "Trong hệ thống phân tán hàng triệu người dùng dùng app iOS/Android nhiều phiên bản cũ mới khác nhau, mọi thay đổi trên REST/gRPC API hay Kafka Avro Schema đều phải tương thích ngược (backward-compatible). Khi muốn loại bỏ một hàm hay endpoint cũ, quy trình chuẩn là đánh dấu ngừng khuyến khích sử dụng (deprecate) kèm hướng dẫn chuyển sang hàm mới trước khi xóa hẳn ở bản Major tiếp theo.",
          "Sang mặt trận TOEIC 600–750+, hai từ 'compatible' và 'redundant' là khách quen của Part 5 và Part 7! Đặc biệt lưu ý sắc thái đa nghĩa của 'redundant': trong kỹ thuật phần mềm nó mang nghĩa 'dư thừa không cần thiết' (redundant null check) hoặc 'dự phòng chống lỗi' (redundant power supplies), còn trong tiếng Anh Anh thương mại (TOEIC hay ra!) 'be made redundant' lại có nghĩa là 'bị cắt giảm biên chế / cho nghỉ việc do tái cơ cấu'!"
        ],
        bullets: [
          "Cấu trúc cố định ăn điểm TOEIC Part 5: 'be compatible WITH something' (tương thích với thiết bị/hệ điều hành nào).",
          "Cặp hậu tố danh từ chỉ khả năng rất hay hỏi từ loại: readable -> readability; maintainable -> maintainability; reliable -> reliability.",
          "Ghi nhớ 3 tầng nghĩa của 'redundant' để không bao giờ dịch nhầm trong bài đọc TOEIC Part 7 về nhân sự lẫn hạ tầng IT."
        ]
      }
    ],
    vocabItems: [
      {
        word: "nitpick",
        pos: "v / n",
        ipa: "/ˈnɪt.pɪk/",
        meaning: "bắt lỗi vặt; (trong Code Review, thường viết tắt 'Nit:') góp ý chi tiết nhỏ về trình bày/đặt tên không chặn việc merge",
        synonyms: "quibble, minor suggestion, cosmetic comment",
        collocations: ["minor nitpick", "don't mean to nitpick, but...", "Nit: rename variable"],
        mnemonic: "NIT (trứng chấy bé tí tẹo) + PICK (nhặt ra) => Soi nhặt từng hạt bụi nhỏ để code hoàn hảo hơn, nhưng nhớ đừng làm quá!",
        toeicEx: "Rather than **nitpicking** minor formatting issues, the committee focused on the proposal's core budget.",
        toeicVi: "Thay vì bắt bẻ những lỗi định dạng nhỏ nhặt, ủy ban đã tập trung vào ngân sách cốt lõi của bản đề xuất.",
        javaEx: "Just one small **nitpick**: we can replace this anonymous class with a Java method reference for cleaner syntax.",
        javaVi: "Chỉ một góp ý nhỏ thôi: chúng ta có thể thay lớp ẩn danh này bằng method reference trong Java để cú pháp gọn sạch hơn."
      },
      {
        word: "LGTM",
        pos: "abbr / phrase",
        ipa: "/ˌel.dʒiː.tiːˈem/",
        meaning: "viết tắt của 'Looks Good To Me' — Tôi thấy ổn rồi, đồng ý phê duyệt Pull Request / tài liệu thiết kế",
        synonyms: "approved, good to merge, ship it",
        collocations: ["LGTM overall", "LGTM with minor nits", "left an LGTM on your PR"],
        mnemonic: "4 chữ cái quyền lực nhất trên GitHub: Looks Good To Me => Bật đèn xanh cho đồng nghiệp bấm nút Merge!",
        toeicEx: "Once the compliance officer gives final approval, the updated policy document is ready for publication (**LGTM** in internal chat).",
        toeicVi: "Ngay khi cán bộ tuân thủ phê duyệt lần cuối, tài liệu chính sách cập nhật đã sẵn sàng để ban hành (tương đương LGTM trong chat nội bộ).",
        javaEx: "The transaction isolation level fix is rock solid and test coverage is 92% — **LGTM**, feel free to merge!",
        javaVi: "Bản sửa mức cô lập giao dịch cực kỳ chắc chắn và độ phủ test đạt 92% — Tôi thấy ổn rồi (LGTM), bạn cứ thoải mái merge nhé!"
      },
      {
        word: "edge case",
        pos: "n",
        ipa: "/ˈedʒ keɪs/",
        meaning: "trường hợp biên (tình huống xảy ra ở giá trị cực đại, cực tiểu hoặc rỗng ít gặp trong luồng thông thường; sát nghĩa với corner case)",
        synonyms: "boundary condition, corner case, outlier scenario",
        collocations: ["handle an edge case", "cover edge cases in unit tests", "overlook a subtle edge case"],
        mnemonic: "EDGE (mép vực, rìa biên của mảng `index = 0` hoặc `length - 1`) => Đứng ở mép rìa là nơi dễ trượt chân dính `IndexOutOfBoundsException` nhất!",
        toeicEx: "Customer support guidelines were updated to address rare **edge cases** involving international tax refunds.",
        toeicVi: "Hướng dẫn hỗ trợ khách hàng đã được cập nhật để giải quyết các trường hợp ngoại lệ hiếm gặp liên quan đến hoàn thuế quốc tế.",
        javaEx: "Your pagination logic works well, but it throws an ArithmeticException in the **edge case** where `pageSize` is zero.",
        javaVi: "Logic phân trang của bạn chạy tốt, nhưng nó ném ra ArithmeticException ở trường hợp biên khi `pageSize` bằng không."
      },
      {
        word: "backward-compatible",
        pos: "adj",
        ipa: "/ˌbæk.wɚd kəmˈpæt.ə.bəl/",
        meaning: "tương thích ngược (phiên bản phần mềm/API mới vẫn hoạt động trơn tru với dữ liệu hoặc client phiên bản cũ)",
        synonyms: "retro-compatible, non-breaking",
        collocations: ["remain backward-compatible with", "fully backward-compatible change", "break backward compatibility"],
        mnemonic: "BACKWARD (quay ngược về các bản cũ phía sau) + COMPATIBLE (hòa hợp, chạy chung được) => Như Java 21 vẫn chạy ngon file `.class` biên dịch từ thời Java 8!",
        toeicEx: "The new wireless barcode scanner is fully **backward-compatible** with our existing warehouse management software.",
        toeicVi: "Máy quét mã vạch không dây mới hoàn toàn tương thích ngược với phần mềm quản lý kho hiện tại của chúng tôi.",
        javaEx: "Adding an optional field with a default value keeps our Protobuf schema **backward-compatible** with older consumers.",
        javaVi: "Việc thêm một trường tùy chọn kèm giá trị mặc định giúp schema Protobuf của chúng ta giữ được tính tương thích ngược với các consumer bản cũ."
      },
      {
        word: "deprecate",
        pos: "v",
        ipa: "/ˈdep.rə.keɪt/",
        meaning: "đánh dấu ngừng khuyến khích sử dụng (một API/hàm/tính năng lỗi thời sẽ bị gỡ bỏ trong tương lai); phản đối",
        synonyms: "phase out, mark obsolete, supersede",
        collocations: ["deprecate a legacy endpoint", "officially deprecated since v2.4", "deprecation warning"],
        mnemonic: "Nhìn ngay annotation quen thuộc `@Deprecated` có dấu gạch ngang tên hàm trong IDE Java => Cảnh báo 'Đừng dùng hàm này cho code mới nữa!'",
        toeicEx: "The IT department plans to **deprecate** the legacy intranet portal once all teams migrate to the cloud workspace.",
        toeicVi: "Bộ phận CNTT dự định ngừng sử dụng cổng thông tin nội bộ cũ ngay khi tất cả các nhóm chuyển sang không gian làm việc đám mây.",
        javaEx: "Notice that `RestTemplate` is in maintenance mode and many teams **deprecate** custom wrappers in favor of `RestClient`.",
        javaVi: "Lưu ý rằng `RestTemplate` đang ở chế độ bảo trì và nhiều nhóm đánh dấu ngừng dùng các lớp bọc tự viết để chuyển sang `RestClient`."
      },
      {
        word: "boilerplate",
        pos: "n / adj",
        ipa: "/ˈbɔɪ.lɚ.pleɪt/",
        meaning: "đoạn mã lặp đi lặp lại theo khuôn mẫu rườm rà (như getter/setter/equals/hashCode thủ công); điều khoản hợp đồng mẫu cố định",
        synonyms: "repetitive template code, standard wording",
        collocations: ["reduce boilerplate code", "eliminate JDBC boilerplate", "standard boilerplate contract clauses"],
        mnemonic: "BOILER (nồi hơi tàu thủy xưa) + PLATE (tấm thép dập khuôn hàng loạt y hệt nhau) => Code cứ phải gõ lặp đi lặp lại theo khuôn cứng nhắc!",
        toeicEx: "Please ask legal counsel to review anything beyond the standard **boilerplate** clauses in Section 8.",
        toeicVi: "Vui lòng nhờ cố vấn pháp lý rà soát bất kỳ nội dung nào nằm ngoài các điều khoản mẫu tiêu chuẩn tại Mục 8.",
        javaEx: "Migrating our DTOs to Java 21 `record` classes eliminated over two thousand lines of **boilerplate** code.",
        javaVi: "Việc chuyển đổi các lớp DTO sang `record` của Java 21 đã loại bỏ hơn hai nghìn dòng mã khuôn mẫu rườm rà."
      },
      {
        word: "tight coupling",
        pos: "n phrase",
        ipa: "/taɪt ˈkʌp.lɪŋ/",
        meaning: "sự kết dính / phụ thuộc chặt cứng giữa các module (sửa đổi nhỏ ở lớp A kéo theo lỗi dây chuyền ở lớp B, C)",
        synonyms: "hard dependency, rigid interdependence",
        collocations: ["introduce tight coupling", "avoid tight coupling between services", "decouple tightly coupled classes"],
        mnemonic: "TIGHT (buộc chặt cứng) + COUPLE (cặp đôi dính liền) => Hai service buộc chặt chân vào nhau, một anh vấp ngã là cả hai cùng sấp mặt!",
        toeicEx: "Over-reliance on a single raw-material supplier creates risky **tight coupling** across our manufacturing line.",
        toeicVi: "Sự phụ thuộc quá mức vào một nhà cung cấp nguyên liệu thô duy nhất tạo ra sự ràng buộc chặt đầy rủi ro trên toàn dây chuyền sản xuất của chúng tôi.",
        javaEx: "Sharing the same PostgreSQL database table across three microservices creates **tight coupling** and blocks independent deployments.",
        javaVi: "Việc dùng chung cùng một bảng cơ sở dữ liệu PostgreSQL giữa ba microservice tạo ra sự phụ thuộc chặt và cản trở việc triển khai độc lập."
      },
      {
        word: "readability",
        pos: "n",
        ipa: "/ˌriː.dəˈbɪl.ə.ti/",
        meaning: "độ dễ đọc, tính sáng sủa dễ hiểu của mã nguồn hoặc văn bản",
        synonyms: "clarity, legibility, comprehensibility",
        collocations: ["improve code readability", "sacrifice readability for cleverness", "high readability"],
        mnemonic: "READ (đọc) + ABILITY (khả năng) => Code được viết một lần nhưng được đồng nghiệp ĐỌC hàng trăm lần!",
        toeicEx: "Adding bullet points and clear subheadings greatly improved the **readability** of the annual compliance report.",
        toeicVi: "Việc thêm các gạch đầu dòng và tiêu đề phụ rõ ràng đã cải thiện đáng kể độ dễ đọc của báo cáo tuân thủ thường niên.",
        javaEx: "Nested ternary operators hurt **readability**; let's refactor this into a Java 21 pattern-matching `switch` expression.",
        javaVi: "Các toán tử ba ngôi lồng nhau làm giảm độ dễ đọc; hãy cấu trúc lại đoạn này thành biểu thức `switch` đối sánh mẫu của Java 21."
      },
      {
        word: "maintainability",
        pos: "n",
        ipa: "/meɪnˌteɪ.nəˈbɪl.ə.ti/",
        meaning: "khả năng dễ bảo trì, nâng cấp và sửa lỗi về lâu dài của phần mềm hoặc thiết bị",
        synonyms: "serviceability, sustainability, ease of maintenance",
        collocations: ["long-term maintainability", "enhance system maintainability", "compromise maintainability"],
        mnemonic: "MAINTAIN (duy trì, bảo dưỡng) + ABILITY => Thước đo xem 6 tháng nữa người mới vào dự án sửa tính năng mất 2 giờ hay 2 tuần!",
        toeicEx: "Engineers selected modular HVAC units because of their superior reliability and **maintainability**.",
        toeicVi: "Các kỹ sư đã chọn hệ thống điều hòa dạng mô-đun nhờ độ tin cậy và khả năng dễ bảo trì vượt trội của chúng.",
        javaEx: "Enforcing hexagonal architecture boundaries paid off in **maintainability** when we swapped RabbitMQ for Kafka.",
        javaVi: "Việc tuân thủ ranh giới kiến trúc lục giác đã đền đáp xứng đáng về khả năng bảo trì khi chúng tôi thay thế RabbitMQ bằng Kafka."
      },
      {
        word: "redundant",
        pos: "adj",
        ipa: "/rɪˈdʌn.dənt/",
        meaning: "1) dư thừa, lặp lại không cần thiết (code/từ ngữ); 2) dự phòng chống lỗi (hạ tầng); 3) bị dư biên chế (nhân sự UK/TOEIC)",
        synonyms: "superfluous, unnecessary, duplicate; backup (infra)",
        collocations: ["redundant null check", "redundant power supplies", "make 50 workers redundant"],
        mnemonic: "REDUND (tràn trề dư ra) => Trong code: viết thừa xóa đi cho sạch; trong Server: lắp dư nguồn điện dự phòng thì lại cực an toàn!",
        toeicEx: "Installing **redundant** fiber-optic lines ensured our trading floor stayed online when the primary cable was cut.",
        toeicVi: "Việc lắp đặt các đường cáp quang dự phòng đã đảm bảo sàn giao dịch của chúng tôi vẫn trực tuyến khi cáp chính bị đứt.",
        javaEx: "This explicit type cast is **redundant** because the compiler already narrows the variable via `instanceof` pattern matching.",
        javaVi: "Phép ép kiểu tường minh này bị dư thừa vì trình biên dịch đã tự thu hẹp kiểu biến thông qua đối sánh mẫu `instanceof` rồi."
      }
    ],
    examples: [
      {
        tag: "Code Review",
        en: "**Nit**: Could we extract magic number `86400` into a named constant `SECONDS_PER_DAY` for better **readability**?",
        vi: "Góp ý nhỏ: Mình tách con số thần bí `86400` thành hằng số có tên `SECONDS_PER_DAY` để dễ đọc hơn được không?",
        note: "Mẫu câu review kinh điển: chỉ rõ vấn đề ('magic number') + giải pháp cụ thể + lợi ích ('readability')."
      },
      {
        tag: "Code Review",
        en: "Awesome job covering both **edge cases** and **corner cases** in the parameterized JUnit 5 tests — **LGTM**!",
        vi: "Bạn làm xuất sắc lắm khi bao phủ cả các trường hợp biên đơn lẻ lẫn giao thoa phức tạp trong bộ test tham số hóa JUnit 5 — Duyệt nhé (LGTM)!",
        note: "Khen ngợi đúng điểm sáng kỹ thuật tạo động lực rất lớn cho đồng nghiệp."
      },
      {
        tag: "Code Review",
        en: "This `else` branch looks **redundant** since the `if` block above always throws an exception or returns early.",
        vi: "Nhánh `else` này có vẻ dư thừa vì khối `if` phía trên luôn ném ra ngoại lệ hoặc trả về sớm rồi.",
        note: "Dùng 'looks redundant' mềm mại hơn nhiều so với 'is wrong'."
      },
      {
        tag: "System Design",
        en: "To keep `/v1/orders` **backward-compatible**, let's introduce `/v2/orders` alongside it and **deprecate** v1 over six months.",
        vi: "Để giữ `/v1/orders` tương thích ngược, hãy mở song song `/v2/orders` và đánh dấu ngừng sử dụng bản v1 theo lộ trình 6 tháng.",
        note: "Chiến lược quản lý phiên bản API tiêu chuẩn khi trả lời phỏng vấn Senior Backend."
      },
      {
        tag: "Code Review",
        en: "Injecting `Clock` instead of calling `LocalDateTime.now()` directly eliminates **tight coupling** to the system clock in unit tests.",
        vi: "Việc tiêm đối tượng `Clock` thay vì gọi trực tiếp `LocalDateTime.now()` giúp loại bỏ sự phụ thuộc cứng vào đồng hồ hệ thống khi chạy unit test.",
        note: "Mẹo Java thực chiến rất hay được hỏi ở các công ty tài chính quốc tế."
      },
      {
        tag: "Global Interview",
        en: "Whenever I review a pull request, I prioritize correctness, security, and **maintainability** over stylistic **nitpicks**.",
        vi: "Mỗi khi duyệt một pull request, tôi luôn ưu tiên tính đúng đắn, bảo mật và khả năng bảo trì hơn là những lỗi hình thức vụn vặt.",
        note: "Câu trả lời điểm 10 khi nhà tuyển dụng hỏi: 'How do you approach code reviews?'."
      },
      {
        tag: "System Design",
        en: "Using Spring Data projections here cuts down DTO mapping **boilerplate** without leaking JPA entities to the web layer.",
        vi: "Sử dụng Spring Data projections ở đây giúp cắt giảm mã ánh xạ DTO rườm rà mà không làm lộ các thực thể JPA ra tầng web.",
        note: "Kết hợp từ vựng chuẩn xác với kiến thức sâu về Spring Data."
      },
      {
        tag: "Incident War-room",
        en: "A subtle **corner case** occurred when two concurrent retries hit an expired Redis lock during a leap-second adjustment.",
        vi: "Một trường hợp biên hiếm gặp đã xảy ra khi hai lượt thử lại đồng thời chạm phải khóa Redis vừa hết hạn đúng lúc điều chỉnh giây nhuận.",
        note: "Minh họa hoàn hảo cho 'corner case' — nhiều yếu tố hiếm gặp hội tụ cùng một thời điểm."
      },
      {
        tag: "TOEIC Part 7",
        en: "Following the merger of its two regional offices, Apex Logistics announced that twelve administrative roles had become **redundant**.",
        vi: "Sau cuộc sáp nhập hai văn phòng khu vực, Apex Logistics thông báo rằng mười hai vị trí hành chính đã trở nên dôi dư.",
        note: "Ví dụ chuẩn mực cho nghĩa nhân sự của 'redundant' (= laid off due to restructuring) trong đề thi TOEIC."
      },
      {
        tag: "TOEIC Part 7",
        en: "Customers should verify that their printer drivers are **compatible with** the latest operating system update before installing it.",
        vi: "Khách hàng nên xác minh rằng trình điều khiển máy in của mình tương thích với bản cập nhật hệ điều hành mới nhất trước khi cài đặt.",
        note: "Khắc sâu cụm giới từ bất biến 'compatible WITH' cho cả Part 5 và Part 7."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Why you write this code twice? Delete line 45!",
          fix: "Line 45 seems redundant since we already validated the token in the filter. Could we remove it?",
          why: "Câu hỏi 'Why you...' cộng mệnh lệnh cụt lủn nghe như quát mắng; dùng 'seems redundant' kèm lý do kỹ thuật vừa lịch sự vừa thuyết phục."
        },
        {
          bug: "Your class connects too strong with EmailService, very hard to fix later.",
          fix: "Direct instantiation creates tight coupling with EmailService, which may hurt long-term maintainability.",
          why: "'Connects too strong' là dịch thô tiếng Việt; thuật ngữ kiến trúc chuẩn toàn cầu là 'tight coupling' và 'maintainability'."
        },
        {
          bug: "New API must work good with old mobile app.",
          fix: "The updated API must remain backward-compatible with older mobile client versions.",
          why: "'Work good' sai ngữ pháp (phải là well) và dài dòng; chỉ một tính từ ghép 'backward-compatible' đã gói trọn toàn bộ ý chuyên môn."
        },
        {
          bug: "You forgot check when list has 0 item.",
          fix: "Good implementation! Have we handled the edge case where the input list is empty?",
          why: "Đổi ngôi 'You forgot' sang 'Have we handled the edge case...' biến lời chỉ trích thành tinh thần đồng đội cùng rà soát chất lượng."
        }
      ]
    },
    toeicTips: [
      "Cặp giới từ ăn điểm tuyệt đối trong TOEIC Part 5: luôn điền 'compatible WITH' (tương thích với) và 'capable OF' (có khả năng làm gì) — hai từ này rất hay nằm chung trong 4 đáp án A, B, C, D để bẫy thí sinh!",
      "Đừng bị lừa bởi từ đa nghĩa 'redundant' trong TOEIC Part 7: ở bài đọc về Server/IT nó mang nghĩa TÍCH CỰC là 'dự phòng an toàn' (redundant backup systems), nhưng ở bài đọc về HR/Sáp nhập công ty nó lại mang nghĩa 'dôi dư nhân sự / cắt giảm vị trí'.",
      "Nhận diện nhanh đuôi danh từ trừu tượng '-ability / -ibility' (readability, maintainability, compatibility, availability): chúng luôn là danh từ KHÔNG đếm được, nên đứng sau chúng là động từ chia SỐ ÍT!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "backward-compatible,",
          "for older clients.",
          "let's deprecate",
          "To keep our API",
          "instead of deleting it",
          "the legacy field"
        ],
        answer: "To keep our API backward-compatible, let's deprecate the legacy field instead of deleting it for older clients.",
        vi: "Để giữ cho API tương thích ngược, hãy đánh dấu ngừng dùng trường dữ liệu cũ thay vì xóa thẳng nó đối với các client phiên bản trước."
      },
      fillBlank: {
        sentence: "Switching to Java records helped us eliminate hundreds of lines of _____ getter and setter code.",
        answer: "boilerplate",
        accepted: ["boilerplate", "redundant"],
        hint: "Từ chỉ các đoạn mã khuôn mẫu lặp đi lặp lại nhàm chán (như getter/setter thủ công)",
        explain: "'Boilerplate (code)' là thuật ngữ chính xác nhất trong Java để chỉ những đoạn code mang tính thủ tục khuôn mẫu lặp đi lặp lại mà Java Record hoặc Lombok giúp loại bỏ."
      }
    },
    quiz: [
      {
        q: "Khi review PR trên GitHub, bạn thấy mọi logic đều chuẩn xác, chỉ có một tên biến địa phương đặt hơi khó hiểu nhưng không đáng để chặn việc merge gấp. Bạn nên mở đầu comment như thế nào?",
        options: [
          "BLOCKER: Your variable name is unacceptable, rewrite immediately.",
          "Nit: Consider renaming `d` to `elapsedDays` for readability. Non-blocking, LGTM!",
          "Deprecated: Variable `d` causes tight coupling in production.",
          "Scope creep: Please rollback your entire branch."
        ],
        answer: 1,
        explain: "Đáp án B chuẩn mực văn hóa GitHub quốc tế: dùng 'Nit:' báo hiệu góp ý nhỏ, nêu tên biến gợi ý vì mục tiêu 'readability', và chốt 'Non-blocking, LGTM!' để đồng nghiệp không bị kẹt. A quá gay gắt và sai mức độ nghiêm trọng; C và D dùng sai hoàn toàn thuật ngữ."
      },
      {
        q: "[TOEIC Part 5] Please ensure that any third-party accounting plug-in you purchase is fully _____ with version 4.2 of our ERP platform.",
        options: [
          "compatibility",
          "compatibly",
          "compatible",
          "competing"
        ],
        answer: 2,
        explain: "Đáp án C ('compatible' — tính từ) đứng sau động từ to-be 'is' + trạng từ bổ nghĩa 'fully' và đi kèm giới từ 'with' tạo thành cấu trúc kinh điển 'be fully compatible with' (hoàn toàn tương thích với). A là danh từ, B là trạng từ (không đứng làm bổ ngữ cho 'is' ở đây), D sai nghĩa ('đang cạnh tranh')."
      },
      {
        q: "[Kiến trúc Java] Tại sao việc khởi tạo trực tiếp `private final StripeGateway gateway = new StripeGateway();` bên trong `PaymentService` lại bị đánh giá thấp trong Code Review?",
        options: [
          "Vì nó tạo ra 'tight coupling' khiến khó hoán đổi nhà cung cấp thanh toán và khó mock khi viết unit test.",
          "Vì từ khóa `final` đã bị đánh dấu `@Deprecated` từ phiên bản Java 17.",
          "Vì nó làm tăng 'bandwidth' của mạng nội bộ lên gấp đôi.",
          "Vì đó chỉ là một lỗi chính tả 'nitpick' không ảnh hưởng gì tới thiết kế."
        ],
        answer: 0,
        explain: "Đáp án A chính xác: khởi tạo trực tiếp implementation cụ thể thay vì phụ thuộc vào abstraction (Dependency Injection qua interface `PaymentGateway`) gây ra 'tight coupling' (kết dính chặt), làm giảm nghiêm trọng tính dễ kiểm thử và khả năng bảo trì (maintainability). B, C, D đều sai kiến thức Java và thuật ngữ."
      }
    ]
  },

  V3_3: {
    duration: "45 phút",
    toeicTarget: "Giao tiếp Kỹ sư Phần mềm Quốc tế & TOEIC 600–650+",
    javaContext: "Họp Release / Go-live, Thiết lập CI/CD Pipeline, DevOps Sync & TOEIC Part 4–7 Thông báo vận hành",
    teacherIntro: "Có một khoảnh khắc mà bất kỳ Senior Java nào cũng phải cầm trịch: buổi họp Go-live (Release Readiness) lúc 10 giờ tối cùng SRE, QA Lead và Giám đốc Sản phẩm nước ngoài! Khi người ta hỏi 'What is our deployment strategy and how fast can we roll back if something goes wrong?', nếu anh em nắm vững bộ từ vựng CI/CD & Deployment hôm nay, anh em sẽ trả lời đĩnh đạc như một kiến trúc sư thực thụ: từ cách đóng gói Docker artifact trên pipeline, chạy smoke test trên staging, mở lưu lượng từng bước qua canary release cho tới kịch bản blue-green chuyển mạch không gián đoạn (seamlessly). Hơn thế nữa, các từ configuration, seamlessly, regression, rollout xuất hiện dày đặc trong các thông báo nâng cấp hệ thống của đề thi TOEIC!",
    javaAnalogy: {
      title: "CI/CD Pipeline giống hệt Dây chuyền Lắp ráp & Kiểm định Ô tô Tự động",
      body: "Mã nguồn Java của bạn là thép nguyên liệu đi vào dây chuyền (`pipeline`). Maven/Gradle đúc thành chiếc xe hoàn chỉnh đóng dấu niêm phong bất biến (`artifact` — file JAR / Docker image) rồi cấp phát nhà xưởng hạ tầng (`provisioning`). Trước khi bán đại trà, xe chạy thử trong đường đua giả lập (`staging`), đề máy kiểm tra phanh đèn cơ bản (`smoke test`) và đảm bảo không làm hỏng tính năng đời cũ (`regression test`). Khi ra mắt, hãng giao thử cho 5% khách hàng VIP (`canary release`) hoặc dựng sẵn showroom mới song song để sang tên trong 1 giây (`blue-green`), sẵn sàng thu hồi tức thì (`rollback`) nếu có biến!"
    },
    objectives: [
      "Trình bày mạch lạc quy trình đóng gói, cấp phát hạ tầng và kiểm thử tự động với pipeline, artifact, provisioning, configuration, smoke test, regression test.",
      "Phân tích sắc bén ưu nhược điểm của Canary Release, Blue-Green Deployment và kế hoạch Rollback không gián đoạn (seamlessly) trong buổi họp Go-live.",
      "Ăn trọn điểm các bài đọc thông báo bảo trì/triển khai phần mềm trong TOEIC Part 4, Part 6 và Part 7."
    ],
    formulaCards: [
      {
        label: "Khung Trình Bày Kế Hoạch Triển Khai An Toàn (Safe Rollout Plan)",
        formula: "We'll deploy the immutable artifact to staging first, run automated smoke tests, and then start a 5% canary release.",
        note: "Trình tự 3 bước kinh điển chứng minh quy trình phát hành cực kỳ kỷ luật và kiểm soát rủi ro chặt chẽ."
      },
      {
        label: "Khung Cam Kết Chuyển Đổi Không Downtime (Zero-Downtime Migration)",
        formula: "Using a blue-green deployment allows us to switch live traffic seamlessly and roll back within seconds if needed.",
        note: "Trạng từ 'seamlessly' (mượt mà, không đứt quãng) là từ khóa vàng làm yên lòng mọi Giám đốc Công nghệ và khách hàng."
      },
      {
        label: "Khung Báo Cáo Lỗi Cấu Hình Môi Trường (Configuration Drift)",
        formula: "The build artifact is identical, so the failure on staging is likely caused by an environment configuration mismatch.",
        note: "Giúp khoanh vùng sự cố nhanh chóng: code không đổi thì kiểm tra biến môi trường / ConfigMap!"
      },
      {
        label: "Khung Đề Xuất Rollback Dứt Khoát Khi Gặp Lỗi Nặng",
        formula: "Error rates spiked after the rollout — let's trigger an immediate rollback to the previous stable version.",
        note: "Trong vận hành thực tế, khôi phục dịch vụ trước (rollback) rồi mới điều tra nguyên nhân sau."
      }
    ],
    sections: [
      {
        heading: "1. Từ Commit Đến Staging: Pipeline, Immutable Artifact, Provisioning & Configuration",
        paragraphs: [
          "Nguyên tắc vàng của Cloud-Native Java (12-Factor App) là 'Build once, deploy anywhere': CI/CD pipeline chỉ biên dịch và đóng gói một sản phẩm đầu ra duy nhất (artifact — ví dụ Docker image gắn nhãn SHA commit), tuyệt đối không build lại code khi đẩy từ môi trường thử nghiệm sát thực tế (staging) lên production. Điều duy nhất thay đổi giữa các môi trường là cấu hình bên ngoài (configuration — biến môi trường, Vault secrets, Spring Cloud Config).",
          "Ở tầng hạ tầng, thay vì click chuột tạo máy chủ thủ công trên giao diện AWS/GCP, các đội ngũ hiện đại tự động hóa hoàn toàn khâu cấp phát tài nguyên (infrastructure provisioning) bằng Terraform hoặc Kubernetes manifests."
        ],
        bullets: [
          "Đừng gọi file `.jar` hay Docker image là 'the build file'; hãy dùng từ chuẩn chuyên ngành: 'the deployment artifact' hoặc 'container image'.",
          "Phân biệt rõ 'provisioning' (khởi tạo/cấp phát máy chủ, RAM, DB ban đầu) với 'configuration' (thiết lập tham số vận hành cho ứng dụng/máy chủ đó).",
          "Môi trường 'staging' là bản sao gần giống 'production' nhất để diễn tập lần cuối trước giờ G."
        ]
      },
      {
        heading: "2. Lưới Lọc Chất Lượng & Chiến Lược Zero-Downtime: Smoke Test, Regression Test, Canary vs Blue-Green",
        paragraphs: [
          "Bạn có nhớ vì sao bài kiểm thử nhanh ngay sau khi vừa deploy lại gọi là 'smoke test' không? Thuật ngữ này bắt nguồn từ ngành phần cứng điện tử: cắm điện vào bảng mạch mới, nếu không thấy 'bốc khói' (smoke) thì mới bắt đầu đo đạc chi tiết! Trong Backend Java, smoke test chỉ tốn 1–2 phút kiểm tra ứng dụng lên cổng thành công, kết nối được DB/Kafka và các API sống còn trả về 200 OK. Ngược lại, 'regression test' là bộ kiểm thử toàn diện đảm bảo code mới không vô tình làm hỏng (regress = thụt lùi) các tính năng cũ vốn đang chạy đúng.",
          "Khi đẩy lên Production, hai chiến lược nổi tiếng nhất là 'canary release' (mở thử nghiệm cho một nhóm nhỏ 1%–5% người dùng thật như chú chim hoàng yến dò khí độc trong hầm mỏ, ổn mới tăng dần lên 100%) và 'blue-green deployment' (duy trì 2 cụm hạ tầng giống hệt nhau: Blue đang chạy bản cũ, Green cài sẵn bản mới; chỉ cần bẻ Load Balancer sang Green, nếu lỗi thì bẻ ngược về Blue ngay tức khắc!)."
        ],
        bullets: [
          "Canary release tiết kiệm chi phí máy chủ và giảm bán kính ảnh hưởng (blast radius) trên lưu lượng thật.",
          "Blue-green deployment tốn gấp đôi tài nguyên tạm thời nhưng cho phép 'instant rollback' (quay lui tức thì) gần như bằng 0 giây.",
          "Lưu ý chính tả hay nhầm: danh từ là 'a rollback' (viết liền), còn động từ cụm là 'to roll back' (viết tách 2 chữ)!"
        ]
      },
      {
        heading: "3. Chinh Phục TOEIC 600–750+: Trạng Từ 'Seamlessly' & Các Bài Đọc Chuyển Đổi Hệ Thống",
        paragraphs: [
          "Trong đề thi TOEIC Part 5, các câu hỏi từ loại và từ vựng trạng từ bổ nghĩa cho động từ 'integrate / transition / migrate / operate' cực kỳ chuộng từ 'seamlessly' (một cách liền mạch, trơn tru không gián đoạn). Hễ thấy ngữ cảnh tích hợp phần mềm mới vào quy trình cũ, 'seamlessly' gần như luôn là đáp án vàng!",
          "Ở TOEIC Part 4 (bài thông báo độc thoại của trưởng phòng IT) và Part 6–7 (email thông báo bảo trì cuối tuần), người nói sẽ trình bày lộ trình nâng cấp (rollout pipeline), yêu cầu nhân viên lưu tài liệu trước khi hệ thống chuyển đổi và xác nhận cấu hình (configuration) mới sẽ tự động có hiệu lực vào sáng thứ Hai."
        ],
        bullets: [
          "Ghi nhớ cụm collocation điểm cao TOEIC: 'integrate seamlessly with existing systems' (tích hợp liền mạch với các hệ thống hiện có).",
          "Trong thương mại chung, 'pipeline' còn mang nghĩa 'danh sách các dự án/hợp đồng tiềm năng đang triển khai' (e.g., 'several new products in the pipeline').",
          "Từ đồng nghĩa Part 7: 'roll back' = 'revert to an earlier version'; 'provisioning' = 'supplying / equipping'."
        ]
      }
    ],
    vocabItems: [
      {
        word: "pipeline",
        pos: "n",
        ipa: "/ˈpaɪp.laɪn/",
        meaning: "1) đường ống tự động hóa tích hợp & triển khai phần mềm (CI/CD pipeline); 2) chuỗi dự án/sản phẩm đang trong quá trình chuẩn bị ra mắt",
        synonyms: "automated workflow, delivery stream; upcoming lineup",
        collocations: ["trigger the CI/CD pipeline", "pipeline stage failed", "new features in the pipeline"],
        mnemonic: "PIPE (ống dẫn) + LINE (đường dây chuyền) => Code chảy qua từng trạm lọc Build -> Test -> Scan -> Deploy hoàn toàn tự động!",
        toeicEx: "The pharmaceutical company has three promising treatments currently **in the pipeline**.",
        toeicVi: "Công ty dược phẩm hiện có ba phương pháp điều trị đầy triển vọng đang trong quá trình phát triển.",
        javaEx: "Our GitHub Actions **pipeline** compiles the Maven multi-module project, runs SonarQube, and pushes the image to ECR.",
        javaVi: "Đường ống GitHub Actions của chúng tôi biên dịch dự án Maven đa mô-đun, chạy SonarQube và đẩy image lên kho ECR."
      },
      {
        word: "artifact",
        pos: "n",
        ipa: "/ˈɑːr.t̬ə.fækt/",
        meaning: "sản phẩm đóng gói đầu ra của quá trình build (như file `.jar`, `.war`, Docker image lưu trên Nexus/Artifactory); hiện vật tạo tác",
        synonyms: "build output, deliverable package, binary",
        collocations: ["immutable build artifact", "publish artifacts to Maven repository", "sign the release artifact"],
        mnemonic: "Mở file `pom.xml` nào của Java cũng thấy thẻ `<artifactId>` => Chính là định danh cho gói sản phẩm đóng hộp từ code của bạn!",
        toeicEx: "Museum curators carefully cataloged each historical **artifact** before moving the collection overseas.",
        toeicVi: "Các giám tuyển bảo tàng đã lập danh mục cẩn thận từng hiện vật lịch sử trước khi chuyển bộ sưu tập ra nước ngoài.",
        javaEx: "Never rebuild from source per environment; promote the exact same signed **artifact** from staging to production.",
        javaVi: "Đừng bao giờ biên dịch lại mã nguồn theo từng môi trường; hãy đưa chính gói artifact đã ký số đó từ staging thẳng lên production."
      },
      {
        word: "provisioning",
        pos: "n",
        ipa: "/prəˈvɪʒ.ən.ɪŋ/",
        meaning: "việc cấp phát, khởi tạo và chuẩn bị sẵn sàng tài nguyên hạ tầng CNTT (máy chủ, cụm Kubernetes, cơ sở dữ liệu, tài khoản)",
        synonyms: "resource allocation, infrastructure setup, equipping",
        collocations: ["automated cloud provisioning", "user account provisioning", "Terraform provisioning script"],
        mnemonic: "PROVISION (cung cấp nhu yếu phẩm cho đoàn thám hiểm) => Cấp sẵn RAM, CPU, Disk và mạng trước khi thả ứng dụng vào chạy!",
        toeicEx: "Automating laptop **provisioning** cut onboarding wait times for new remote hires by half.",
        toeicVi: "Việc tự động hóa khâu cấp phát thiết bị máy tính xách tay đã cắt giảm một nửa thời gian chờ hội nhập của nhân viên mới làm việc từ xa.",
        javaEx: "Dynamic RDS **provisioning** via Terraform allows each feature team to spin up an isolated test database in minutes.",
        javaVi: "Việc cấp phát động RDS thông qua Terraform cho phép mỗi nhóm tính năng dựng lên một cơ sở dữ liệu kiểm thử biệt lập chỉ trong vài phút."
      },
      {
        word: "canary release",
        pos: "n phrase",
        ipa: "/kəˈner.i rɪˈliːs/",
        meaning: "chiến lược triển khai thăm dò (chỉ điều hướng một tỷ lệ nhỏ 1%–5% người dùng thật sang bản mới để theo dõi lỗi trước khi mở rộng 100%)",
        synonyms: "phased rollout, incremental deployment, canary deployment",
        collocations: ["roll out via a canary release", "monitor canary metrics", "abort the canary release"],
        mnemonic: "CANARY là chim hoàng yến thợ mỏ mang xuống hầm để phát hiện khí độc sớm => Cho 2% lưu lượng chạy thử bản mới làm 'chim dò đường' cực kỳ an toàn!",
        toeicEx: "Before a nationwide launch, the retail chain conducted a small-scale **phased release** (canary rollout) in two cities.",
        toeicVi: "Trước khi ra mắt toàn quốc, chuỗi bán lẻ đã tiến hành triển khai thăm dò quy mô nhỏ tại hai thành phố.",
        javaEx: "Istio routes 5% of checkout traffic to v2.1 during our **canary release** while Prometheus watches HTTP 5xx rates.",
        javaVi: "Istio điều hướng 5% lưu lượng thanh toán sang bản v2.1 trong đợt triển khai thăm dò canary trong khi Prometheus canh chừng tỷ lệ lỗi HTTP 5xx."
      },
      {
        word: "blue-green deployment",
        pos: "n phrase",
        ipa: "/ˌbluːˈɡriːn dɪˈplɔɪ.mənt/",
        meaning: "chiến lược triển khai hai môi trường song song (Blue chạy bản hiện tại, Green cài sẵn bản mới; chuyển đổi lưu lượng tức thì qua Router/LB)",
        synonyms: "dual-environment cutover, zero-downtime switch",
        collocations: ["execute a blue-green deployment", "switch traffic from blue to green", "standby blue environment"],
        mnemonic: "Hai hồ nước XANH DƯƠNG (cũ) và XANH LÁ (mới) đặt cạnh nhau: chỉ việc vặn van cái rụp sang hồ mới, có biến thì vặn ngược lại trong 1 giây!",
        toeicEx: "Maintaining parallel production environments enabled a smooth cutover (**blue-green deployment**) during peak shopping hours.",
        toeicVi: "Việc duy trì các môi trường vận hành song song đã cho phép chuyển đổi mượt mà ngay trong giờ mua sắm cao điểm.",
        javaEx: "With **blue-green deployment** on AWS ECS, we warm up JVM caches on the green target group before shifting live traffic.",
        javaVi: "Với triển khai blue-green trên AWS ECS, chúng tôi làm nóng bộ nhớ đệm JVM trên cụm đích màu xanh lá trước khi chuyển luồng truy cập thật sang."
      },
      {
        word: "rollback",
        pos: "n (v: roll back)",
        ipa: "/ˈroʊl.bæk/",
        meaning: "sự quay lui, khôi phục hệ thống hoặc giao dịch cơ sở dữ liệu về phiên bản/trạng thái ổn định trước đó khi phát sinh lỗi",
        synonyms: "reversion, fallback, undo",
        collocations: ["trigger an immediate rollback", "automated rollback plan", "roll back a database migration"],
        mnemonic: "ROLL (lăn bánh) + BACK (ngược về chỗ cũ) => Quá quen với `@Transactional(rollbackFor = Exception.class)` trong Spring!",
        toeicEx: "Following widespread user complaints, the software vendor announced an immediate **rollback** to the previous interface.",
        toeicVi: "Sau hàng loạt phàn nàn từ người dùng, nhà cung cấp phần mềm đã thông báo khôi phục ngay lập tức về giao diện trước đó.",
        javaEx: "Always write Flyway undo scripts or backward-compatible DDL changes so an application **rollback** won't fail on schema mismatches.",
        javaVi: "Hãy luôn viết kịch bản hoàn tác Flyway hoặc các thay đổi DDL tương thích ngược để khi quay lui ứng dụng không bị gãy do lệch schema."
      },
      {
        word: "regression test",
        pos: "n",
        ipa: "/rɪˈɡreʃ.ən test/",
        meaning: "kiểm thử hồi quy (chạy lại bộ test các chức năng cũ để chắc chắn rằng bản sửa lỗi/tính năng mới không làm phát sinh lỗi ngược trở lại)",
        synonyms: "non-regression verification, backward stability test",
        collocations: ["run the full regression test suite", "catch a regression bug", "automated regression testing"],
        mnemonic: "PRO-gress là tiến lên, RE-gress là tụt lùi => Regression test canh gác không cho chất lượng phần mềm bị 'tụt lùi' khi sửa code!",
        toeicEx: "Quality assurance engineers completed rigorous **regression testing** before certifying the medical device firmware.",
        toeicVi: "Các kỹ sư đảm bảo chất lượng đã hoàn tất kiểm thử hồi quy nghiêm ngặt trước khi chứng nhận phần mềm nhúng của thiết bị y tế.",
        javaEx: "Our nightly **regression test** suite caught a subtle rounding bug in tax calculation introduced by a shared utility refactor.",
        javaVi: "Bộ kiểm thử hồi quy chạy hàng đêm của chúng tôi đã bắt được một lỗi làm tròn tinh vi trong tính thuế phát sinh từ việc chỉnh sửa lớp tiện ích dùng chung."
      },
      {
        word: "smoke test",
        pos: "n / v",
        ipa: "/ˈsmoʊk test/",
        meaning: "kiểm thử sơ bộ nhanh (kiểm tra các luồng cốt lõi sống còn nhất ngay sau khi vừa triển khai xem hệ thống có 'lên nguồn' ổn định không)",
        synonyms: "sanity check, build verification test",
        collocations: ["post-deployment smoke test", "pass basic smoke tests", "smoke-test the staging environment"],
        mnemonic: "Cắm điện mạch mới: không bốc KHÓI (smoke) là qua vòng gửi xe! Nhanh, gọn, tập trung vào các API sống còn nhất.",
        toeicEx: "Technicians performed a quick **preliminary check** (smoke test) on the audio system an hour before the keynote.",
        toeicVi: "Các kỹ thuật viên đã thực hiện kiểm tra sơ bộ nhanh hệ thống âm thanh một giờ trước bài phát biểu chính.",
        javaEx: "As soon as ArgoCD syncs the pods on **staging**, a Gatling script runs a two-minute **smoke test** against `/health` and `/login`.",
        javaVi: "Ngay khi ArgoCD đồng bộ các pod trên môi trường staging, một kịch bản Gatling sẽ chạy kiểm thử nhanh 2 phút vào `/health` và `/login`."
      },
      {
        word: "configuration",
        pos: "n",
        ipa: "/kənˌfɪɡ.jəˈreɪ.ʃən/",
        meaning: "cấu hình, sự thiết lập thông số hệ thống/ứng dụng (như `application.yml`, connection pool size, timeout)",
        synonyms: "setup, settings, parameter arrangement",
        collocations: ["externalized configuration", "misconfiguration caused an outage", "default configuration"],
        mnemonic: "Dân Spring Boot nhìn `@Configuration` và `@ConfigurationProperties` mỗi ngày => Nơi nắm giữ toàn bộ núm vặn thông số của app!",
        toeicEx: "Please do not alter the router's network **configuration** without prior authorization from IT support.",
        toeicVi: "Vui lòng không tự ý thay đổi cấu hình mạng của bộ định tuyến khi chưa có sự cho phép trước từ bộ phận hỗ trợ CNTT.",
        javaEx: "Spring Cloud Config reloads rate-limit **configuration** dynamically without restarting the JVM processes.",
        javaVi: "Spring Cloud Config nạp lại cấu hình giới hạn tốc độ một cách linh động mà không cần khởi động lại các tiến trình JVM."
      },
      {
        word: "seamlessly",
        pos: "adv",
        ipa: "/ˈsiːm.ləs.li/",
        meaning: "một cách liền mạch, trơn tru, mượt mà không hề có vết gợn hay gián đoạn dịch vụ",
        synonyms: "smoothly, effortlessly, without interruption",
        collocations: ["integrate seamlessly with", "transition seamlessly to", "work seamlessly across devices"],
        mnemonic: "SEAM (đường chỉ khâu nối hai mảnh vải) + LESS (không có) + LY => Mượt như tấm lụa liền khối không nhìn thấy vết nối!",
        toeicEx: "The new payroll module integrates **seamlessly** with our existing human resources database.",
        toeicVi: "Mô-đun tính lương mới tích hợp một cách liền mạch với cơ sở dữ liệu nhân sự hiện có của chúng tôi.",
        javaEx: "Virtual threads in Java 21 allow blocking I/O code to scale **seamlessly** without rewriting everything in reactive style.",
        javaVi: "Virtual threads trong Java 21 cho phép mã I/O đồng bộ mở rộng quy mô một cách mượt mà mà không cần viết lại toàn bộ theo phong cách bất đồng bộ."
      }
    ],
    examples: [
      {
        tag: "System Design",
        en: "We verify every release on **staging** using anonymized production traffic patterns before touching live servers.",
        vi: "Chúng tôi xác minh mọi bản phát hành trên môi trường staging bằng mẫu lưu lượng thực tế đã ẩn danh trước khi chạm vào máy chủ thật.",
        note: "Giải thích rõ vai trò của môi trường 'staging' trong phỏng vấn quy trình phát triển phần mềm."
      },
      {
        tag: "Incident War-room",
        en: "The **canary release** showed a 3% jump in 502 Bad Gateway errors, so we halted the rollout and **rolled back** immediately.",
        vi: "Đợt triển khai thăm dò canary cho thấy mức tăng 3% lỗi 502 Bad Gateway, nên chúng tôi đã dừng phát hành và quay lui ngay lập tức.",
        note: "Chú ý: động từ quá khứ của 'roll back' là 'rolled back' (2 từ), khác với danh từ 'a rollback'."
      },
      {
        tag: "Daily Standup",
        en: "My PR passed unit tests, and it's currently waiting in the CI **pipeline** for the automated **regression test** stage.",
        vi: "PR của tôi đã qua unit test và hiện đang chờ trong đường ống CI tới bước kiểm thử hồi quy tự động.",
        note: "Cách cập nhật trạng thái ticket đang chạy CI cực kỳ tự nhiên."
      },
      {
        tag: "Code Review",
        en: "Hardcoding the Kafka broker URL inside Java code violates externalized **configuration** best practices.",
        vi: "Việc gán cứng địa chỉ Kafka broker ngay trong code Java vi phạm nguyên tắc thực hành tốt về tách biệt cấu hình ra bên ngoài.",
        note: "Nhận xét sắc bén khi thấy đồng nghiệp quên đưa URL ra biến môi trường hoặc `application.yml`."
      },
      {
        tag: "System Design",
        en: "Although **blue-green deployment** doubles temporary cloud costs, it lets us switch user traffic **seamlessly**.",
        vi: "Mặc dù triển khai blue-green làm tăng gấp đôi chi phí đám mây tạm thời, nó cho phép chúng ta chuyển đổi lưu lượng người dùng một cách liền mạch.",
        note: "Dùng liên từ 'Although' để phân tích đánh đổi (trade-off) chi phí vs độ sẵn sàng."
      },
      {
        tag: "Incident War-room",
        en: "Post-deployment **smoke tests** passed on all regions, confirming that HikariCP connection pools initialized properly.",
        vi: "Các bài kiểm thử nhanh sau triển khai đã vượt qua ở mọi khu vực, xác nhận các vùng kết nối HikariCP đã khởi tạo chuẩn xác.",
        note: "Câu thông báo chuẩn SRE trên kênh Slack `#releases` sau khi hoàn tất Go-live."
      },
      {
        tag: "Global Interview",
        en: "By standardizing infrastructure **provisioning** with Terraform modules, we reduced new microservice setup time from five days to thirty minutes.",
        vi: "Nhờ chuẩn hóa việc cấp phát hạ tầng bằng các mô-đun Terraform, chúng tôi đã rút ngắn thời gian dựng microservice mới từ 5 ngày xuống còn 30 phút.",
        note: "Câu thành tích định lượng cực mạnh cho CV và phỏng vấn Senior Dev."
      },
      {
        tag: "Code Review",
        en: "Make sure Maven signs the JAR **artifact** and generates a CycloneDX SBOM during the release build.",
        vi: "Hãy đảm bảo Maven ký số gói artifact JAR và sinh danh mục thành phần phần mềm CycloneDX trong quá trình build bản phát hành.",
        note: "Thể hiện kiến thức hiện đại về bảo mật chuỗi cung ứng phần mềm (Supply Chain Security)."
      },
      {
        tag: "TOEIC Part 7",
        en: "All employees will transition **seamlessly** to the upgraded single sign-on portal this Monday with no password reset required.",
        vi: "Tất cả nhân viên sẽ chuyển đổi liền mạch sang cổng đăng nhập một lần nâng cấp vào thứ Hai tuần này mà không cần đặt lại mật khẩu.",
        note: "Câu thông báo kinh điển của phòng IT trong đề thi TOEIC Reading Part 6 & Part 7."
      },
      {
        tag: "TOEIC Part 7",
        en: "With four new regional branches **in the pipeline**, the bank is recruiting thirty additional relationship managers.",
        vi: "Với bốn chi nhánh khu vực mới đang trong kế hoạch triển khai, ngân hàng đang tuyển thêm ba mươi chuyên viên quản lý khách hàng.",
        note: "Nắm chắc cụm thành ngữ thương mại 'in the pipeline' (= đang được chuẩn bị/triển khai)."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Let's rollback the code on production right now!",
          fix: "Let's roll back the production deployment right now! (hoặc: Let's trigger an immediate rollback!)",
          why: "'Rollback' viết liền là DANH TỪ; khi đứng sau 'Let's' làm ĐỘNG TỪ thì phải viết tách thành hai từ 'roll back'."
        },
        {
          bug: "We build source code again on Production server to fix config.",
          fix: "We promote the verified staging artifact and update only the externalized configuration.",
          why: "Build lại code trực tiếp trên máy chủ Production là điều cấm kỵ trong DevOps; dùng 'promote the artifact' + 'externalized configuration' thể hiện tư duy chuẩn quốc tế."
        },
        {
          bug: "New payment service connects very smooth with old mobile app.",
          fix: "The new payment service integrates seamlessly with the legacy mobile app.",
          why: "Dùng tính từ 'smooth' bổ nghĩa cho động từ là sai ngữ pháp cơ bản; 'integrates seamlessly' vừa đúng trạng từ vừa đạt chuẩn từ vựng TOEIC 700+."
        },
        {
          bug: "After deploy, QA will test fast basic function to see server die or not.",
          fix: "Right after deployment, QA will run automated smoke tests to verify core endpoints.",
          why: "'Test fast basic function / see server die' nghe rất nghiệp dư; chỉ cần cụm 'run smoke tests' là mọi kỹ sư toàn cầu hiểu ngay lập tức."
        }
      ]
    },
    toeicTips: [
      "Mẹo ăn chắc 100% câu từ loại Part 5 với 'seamless / seamlessly': Đứng trước danh từ (a _____ transition / integration) chọn tính từ 'seamless'; đứng sau hoặc trước động từ thường (integrate / operate / switch _____) chọn ngay trạng từ 'seamlessly'!",
      "Phân biệt nhanh danh từ ghép vs cụm động từ trong tiếng Anh thương mại: 'a rollback / a rollout / a backup / a setup' (viết liền hoặc gạch nối = Danh từ) vs 'roll back / roll out / back up / set up' (viết rời 2 chữ = Động từ).",
      "Trong TOEIC Listening Part 4, khi nghe người quản lý nói 'We have several exciting upgrades in the pipeline for Q4', cụm 'in the pipeline' đồng nghĩa trực tiếp với 'being planned / currently under development' trong đáp án."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "allows us to",
          "and roll back instantly.",
          "A blue-green deployment",
          "live traffic seamlessly",
          "switch"
        ],
        answer: "A blue-green deployment allows us to switch live traffic seamlessly and roll back instantly.",
        vi: "Chiến lược triển khai blue-green cho phép chúng ta chuyển đổi lưu lượng thực tế một cách liền mạch và quay lui tức thì."
      },
      fillBlank: {
        sentence: "Before opening the new version to 100% of users, we routed 5% of traffic through a _____ release.",
        answer: "canary",
        accepted: ["canary"],
        hint: "Tên loài chim hoàng yến dùng đặt cho chiến lược triển khai thăm dò 1%–5% lưu lượng",
        explain: "'Canary release' là chiến lược phát hành thăm dò cho một nhóm nhỏ người dùng thật để kiểm chứng độ ổn định trước khi triển khai toàn bộ."
      }
    },
    quiz: [
      {
        q: "Sự khác biệt cốt lõi giữa 'Smoke Test' và 'Regression Test' trong quy trình CI/CD là gì?",
        options: [
          "Smoke test kiểm tra bảo mật mã hóa, còn Regression test chỉ đo tốc độ mạng.",
          "Smoke test kiểm tra nhanh các chức năng sống còn xem bản build/deploy có chạy ổn cơ bản không; Regression test kiểm tra sâu toàn diện để đảm bảo thay đổi mới không làm hỏng tính năng cũ.",
          "Smoke test chỉ chạy bằng tay bởi Giám đốc, còn Regression test chỉ chạy trước khi viết code.",
          "Hai thuật ngữ hoàn toàn đồng nghĩa, chỉ khác nhau giữa tiếng Anh Anh và tiếng Anh Mỹ."
        ],
        answer: 1,
        explain: "Đáp án B chính xác tuyệt đối: Smoke test là bước kiểm tra nhanh bề mặt ('sanity check') ngay sau build/deploy để phát hiện lỗi sập nguồn cơ bản, trong khi Regression test quét rộng các tính năng hiện hữu nhằm ngăn lỗi hồi quy. Các phương án A, C, D đều sai bản chất kỹ thuật."
      },
      {
        q: "[TOEIC Part 5] The cloud document-signing tool integrates _____ with our existing CRM software, eliminating manual data entry.",
        options: [
          "seamless",
          "seamlessly",
          "seamlessness",
          "seamed"
        ],
        answer: 1,
        explain: "Đáp án B ('seamlessly' — trạng từ) bổ nghĩa cho nội động từ 'integrates' đứng ngay trước nó ('integrates seamlessly with' = tích hợp một cách liền mạch với). A là tính từ, C là danh từ trừu tượng, D là phân từ mang nghĩa 'có đường may' hoàn toàn sai ngữ cảnh."
      },
      {
        q: "[Họp Go-live] Hệ thống thanh toán yêu cầu chuyển đổi phiên bản ngay giữa ban ngày mà KHÔNG mất một giây downtime nào, đồng thời phải quay về bản cũ trong vòng dưới 5 giây nếu phát hiện sự cố. Chiến lược nào phù hợp nhất?",
        options: [
          "Tắt toàn bộ server cũ 2 tiếng để cài lại từ đầu.",
          "Sửa trực tiếp file `.class` đang chạy trên máy chủ Production.",
          "Thực hiện Blue-Green Deployment (dựng sẵn cụm Green bản mới, làm nóng JVM rồi bẻ Load Balancer sang, giữ cụm Blue sẵn sàng để instant rollback).",
          "Bỏ qua toàn bộ staging và regression test để tiết kiệm bandwidth."
        ],
        answer: 2,
        explain: "Đáp án C là kiến trúc tiêu chuẩn cho bài toán Zero-Downtime + Instant Rollback: cụm Blue vẫn giữ nguyên trạng thái sẵn sàng trong khi lưu lượng được chuyển mạch sang cụm Green đã khởi động ấm (warmed up). A gây downtime 2 tiếng, B và D là thảm họa vận hành."
      }
    ]
  },

  V3_4: {
    duration: "50 phút",
    toeicTarget: "Giao tiếp Kỹ sư Phần mềm Quốc tế & TOEIC 600–650+",
    javaContext: "Incident War-room (Sập Production), Viết Báo Cáo RCA / Postmortem & TOEIC Part 6–7 Sự cố hệ thống",
    teacherIntro: "2 giờ sáng thứ Bảy, chuông PagerDuty réo vang: Production bị outage ở cụm thanh toán Châu Âu, 15 giám đốc và kỹ sư nhảy vào Zoom War-room! Trong khoảnh khắc ngàn cân treo sợi tóc đó, người bình tĩnh nói được câu 'We haven't isolated the root cause yet, but we've deployed a temporary workaround to mitigate customer impact while investigating an intermittent memory leak' chính là người được cất nhắc lên Staff/Principal Engineer! Bài học này rèn cho anh em bản lĩnh ngôn từ khi cháy server: phân biệt rạch ròi triệu chứng (spike, degrade, bottleneck) với nguyên nhân gốc (root cause), cách báo cáo giải pháp tạm thời (workaround / mitigate) và văn hóa viết Blameless Postmortem chuẩn Google/AWS — đồng thời làm chủ trọn bộ từ vựng sự cố cực hay gặp trong đề thi TOEIC!",
    javaAnalogy: {
      title: "Xử Lý Incident War-room giống hệt Khối `try - catch - finally` Chuẩn Kiến Trúc",
      body: "Khi một ngoại lệ bất ngờ nổ ra gây sập dịch vụ (`outage`) hoặc suy giảm hiệu năng (`degrade` do lưu lượng `spike` chạm `bottleneck`), khối `catch` KHÔNG cố ngồi phân tích triết lý sâu xa ngay lúc khách hàng đang kẹt tiền — việc đầu tiên của `catch` là tung phao cứu sinh giảm thiểu thiệt hại (`mitigate` bằng một `workaround` nhanh). Sau khi hệ thống đã êm, khối `finally` mới chạy quy trình tái hiện lỗi (`reproduce` cả những lỗi chập chờn `intermittent`), mổ xẻ heap dump tìm `root cause` (như `memory leak`) và viết biên bản `postmortem` để ngăn tái diễn!"
    },
    objectives: [
      "Giao tiếp bình tĩnh, rõ ràng và đáng tin cậy trên kênh Incident War-room bằng bộ từ outage, spike, degrade, bottleneck, mitigate, workaround.",
      "Trình bày quy trình điều tra lỗi chuyên sâu (reproduce an intermittent bug, isolate the root cause, memory leak) và viết Blameless Postmortem không đổ lỗi cá nhân.",
      "Bắt trọn điểm nhóm từ vựng sự cố & khắc phục (outage, mitigate, intermittent, workaround, bottleneck) trong TOEIC Reading Part 6 & Part 7."
    ],
    formulaCards: [
      {
        label: "Khung Cập Nhật Trạng Thái Khẩn Cấp Trên War-room (First 5 Minutes)",
        formula: "We're seeing a sudden traffic spike causing API performance to degrade. Right now, our top priority is to mitigate user impact.",
        note: "Trấn an lãnh đạo cực tốt: cho thấy bạn đã nắm được hiện tượng và đặt trải nghiệm khách hàng lên số 1."
      },
      {
        label: "Khung Đề Xuất Giải Pháp Chữa Cháy Tạm Thời (Proposing a Workaround)",
        formula: "While we investigate the root cause, we can apply a quick workaround by [scaling pods / bypassing cache] to stop the outage.",
        note: "Tách bạch rõ 'workaround' (chữa cháy ngắn hạn) và 'permanent fix' (sửa tận gốc sau khi tìm ra root cause)."
      },
      {
        label: "Khung Mô Tả Lỗi Chập Chờn Khó Bắt (Reporting Flaky / Intermittent Bugs)",
        formula: "The issue is intermittent and only occurs under heavy load, so we're replaying logs on staging to reproduce it reliably.",
        note: "Thay vì nói 'Sometimes bug, sometimes OK', từ 'intermittent' nâng tầm câu nói của bạn lên chuẩn kỹ sư bản xứ ngay lập tức!"
      },
      {
        label: "Khung Mở Đầu Tài Liệu Blameless Postmortem",
        formula: "This postmortem outlines the root cause of Tuesday's 18-minute outage and the action items to prevent recurrence.",
        note: "Tập trung hoàn toàn vào hệ thống và quy trình ('prevent recurrence'), tuyệt đối không nêu tên cá nhân gây lỗi."
      }
    ],
    sections: [
      {
        heading: "1. Ngôn Ngữ Trên War-Room: Phân Biệt Outage vs Degradation, Spike & Bottleneck",
        paragraphs: [
          "Khi thông báo sự cố cho khách hàng hoặc ban giám đốc quốc tế, dùng sai mức độ từ vựng có thể gây hoảng loạn không đáng có (hoặc vi phạm cam kết bồi thường SLA!). Nếu toàn bộ dịch vụ chết hẳn trả về 503 Service Unavailable, đó là 'service outage' (sập dịch vụ hoàn toàn). Nhưng nếu hệ thống vẫn xử lý được đơn hàng dù phản hồi chậm từ 200ms lên 4 giây, bạn PHẢI gọi đó là 'performance degradation' (dịch vụ bị suy giảm hiệu năng — động từ: degrade).",
          "Nguyên nhân dẫn tới suy giảm thường bắt đầu từ một cú tăng vọt đột ngột về tải hoặc CPU/RAM (a sudden spike) làm lộ ra điểm nghẽn cổ chai yếu nhất trong dây chuyền xử lý (a bottleneck — ví dụ giới hạn 20 kết nối của HikariCP hoặc một câu SQL thiếu index)."
        ],
        bullets: [
          "Phân cấp mức độ chuẩn SRE: `total outage` (sập toàn diện) > `partial outage` (mất một phân khu) > `degraded performance` (chạy chậm hơn bình thường).",
          "'Spike' vừa là danh từ ('a 400% traffic spike') vừa là động từ ('CPU utilization spiked to 99%').",
          "Luôn dùng động từ 'mitigate' (giảm nhẹ mức độ nghiêm trọng) khi sự cố chưa dứt hẳn nhưng đã được khoanh vùng an toàn."
        ]
      },
      {
        heading: "2. Điều Tra Tận Gốc: Intermittent Bug, Reproduce, Memory Leak, Workaround & Root Cause",
        paragraphs: [
          "Ác mộng lớn nhất của lập trình viên Java không phải là lỗi văng `NullPointerException` ngay lập tức, mà là lỗi lúc bị lúc không (intermittent issue) hoặc rò rỉ bộ nhớ âm ỉ suốt nhiều ngày (memory leak) khiến pod Kubernetes tự dưng chết `OOMKilled` mỗi cuối tuần. Bước đầu tiên để diệt tận gốc bất kỳ lỗi nào là phải tái hiện lại được nó một cách chủ động (reproduce the bug).",
          "Khi chưa thể sửa triệt để ngay trong đêm, một giải pháp đường vòng tạm thời (workaround — ví dụ lập lịch khởi động lại pod lúc 3 giờ sáng hoặc tắt tạm tính năng xuất báo cáo nặng) là cứu cánh hợp lệ, miễn là hôm sau team lập ticket xử lý tận gốc nguyên nhân sâu xa (root cause)."
        ],
        bullets: [
          "Đừng nhầm 'workaround' (cách lách tạm thời để hệ thống chạy tiếp) với 'permanent solution / hotfix' (bản vá sửa thẳng lỗi code).",
          "Trong Java, 'memory leak' thường xảy ra khi giữ tham chiếu đối tượng trong `static Map`, quên đóng `InputStream` hoặc dùng `ThreadLocal.set()` trên thread pool mà quên gọi `.remove()`!",
          "Cụm từ chuyên nghiệp khi chưa tái hiện được lỗi: 'Unable to reproduce locally; gathering JFR (Java Flight Recorder) profiles from staging.'"
        ]
      },
      {
        heading: "3. Văn Hóa Blameless Postmortem & Điểm Chạm Vàng Với Đề Thi TOEIC 600–750+",
        paragraphs: [
          "Tại các công ty công nghệ hàng đầu thế giới, biên bản tổng kết sau sự cố (postmortem hoặc RCA — Root Cause Analysis) tuân thủ nghiêm ngặt nguyên tắc 'Blameless' (không đổ lỗi con người). Thay vì viết 'Dev Nam chạy nhầm lệnh xóa bảng', người ta viết 'The staging and production CLI profiles lacked visual differentiation and confirmation guards'. Nhờ vậy không ai giấu giếm sự thật và hệ thống ngày càng vững chắc.",
          "Trong đề thi TOEIC Reading Part 6 & Part 7, dạng bài 'Email xin lỗi khách hàng về sự cố gián đoạn điện/mạng/website' xuất hiện với tần suất cực cao! Bạn sẽ bắt gặp nguyên bộ từ của bài học này: 'power/network outage', 'intermittent connectivity', 'mitigate delays', 'supply chain bottlenecks' và 'temporary workaround'."
        ],
        bullets: [
          "Mẹo từ vựng TOEIC Part 5: Động từ 'mitigate' cực kỳ hay đi cặp với các danh từ mang nghĩa tiêu cực như 'risks, delays, losses, impact, damage'.",
          "Tính từ 'intermittent' trong TOEIC Listening Part 4 hay dùng cho cả thời tiết ('intermittent rain showers' — mưa rào ngắt quãng) lẫn kỹ thuật ('intermittent Wi-Fi signal').",
          "Trong Part 7, cụm 'identify the underlying cause' chính là cách paraphrase trực tiếp của 'find the root cause'."
        ]
      }
    ],
    vocabItems: [
      {
        word: "outage",
        pos: "n",
        ipa: "/ˈaʊ.t̬ɪdʒ/",
        meaning: "sự cố mất điện, sập mạng hoặc ngừng hoạt động hoàn toàn của một hệ thống/dịch vụ trong một khoảng thời gian",
        synonyms: "downtime, service disruption, blackout",
        collocations: ["widespread service outage", "experience a two-hour outage", "prevent future outages"],
        mnemonic: "OUT (tắt ngúm, ra ngoài cuộc chơi) + AGE => Khoảng thời gian cả hệ thống 'tắt điện' tối thui!",
        toeicEx: "Yesterday's regional power **outage** forced our customer call center to switch to backup generators.",
        toeicVi: "Sự cố mất điện khu vực ngày hôm qua đã buộc trung tâm tổng đài khách hàng của chúng tôi phải chuyển sang máy phát điện dự phòng.",
        javaEx: "An expired TLS certificate on the API Gateway triggered a 25-minute checkout **outage** across all mobile apps.",
        javaVi: "Một chứng chỉ TLS hết hạn trên API Gateway đã gây ra sự cố ngừng hoạt động thanh toán suốt 25 phút trên toàn bộ ứng dụng di động."
      },
      {
        word: "root cause",
        pos: "n phrase",
        ipa: "/ˈruːt kɔːz/",
        meaning: "nguyên nhân gốc rễ, căn nguyên sâu xa nhất khởi phát ra chuỗi sự cố (phân biệt với triệu chứng bề mặt)",
        synonyms: "underlying cause, fundamental reason, origin",
        collocations: ["identify the root cause", "root cause analysis (RCA)", "address the root cause"],
        mnemonic: "ROOT (rễ cây nằm sâu dưới lòng đất) + CAUSE (nguyên nhân) => Nhổ cỏ phải nhổ tận gốc rễ mới không mọc lại bug!",
        toeicEx: "Investigators determined that faulty temperature sensors were the **root cause** of the warehouse spoilage.",
        toeicVi: "Các nhà điều tra xác định rằng cảm biến nhiệt độ bị lỗi là nguyên nhân gốc rễ gây hư hỏng hàng hóa trong kho.",
        javaEx: "Heap dump analysis revealed that an unbounded `ConcurrentHashMap` cache was the **root cause** of the **memory leak**.",
        javaVi: "Phân tích bản chụp bộ nhớ Heap chỉ ra rằng một bộ nhớ đệm `ConcurrentHashMap` không giới hạn kích thước là nguyên nhân gốc rễ của lỗi rò rỉ bộ nhớ."
      },
      {
        word: "reproduce",
        pos: "v",
        ipa: "/ˌriː.prəˈduːs/",
        meaning: "tái hiện lại (thực hiện đúng chuỗi thao tác/điều kiện để làm lỗi xuất hiện trở lại nhằm kiểm chứng và sửa lỗi); sao chụp",
        synonyms: "replicate, recreate, duplicate",
        collocations: ["reproduce the bug consistently", "steps to reproduce", "unable to reproduce locally"],
        mnemonic: "RE (lại lần nữa) + PRODUCE (tạo ra) => Làm cho con bug 'hiện nguyên hình' lại lần nữa trên máy dev!",
        toeicEx: "No portion of this training manual may be **reproduced** without written permission from the publisher.",
        toeicVi: "Không phần nào của cuốn cẩm nang đào tạo này được phép sao chép lại nếu không có sự cho phép bằng văn bản từ nhà xuất bản.",
        javaEx: "I wrote a multi-threaded JUnit test using `CountDownLatch` to **reproduce** the duplicate-order bug reliably.",
        javaVi: "Tôi đã viết một bài test JUnit đa luồng sử dụng `CountDownLatch` để tái hiện lại lỗi trùng đơn hàng một cách chắc chắn."
      },
      {
        word: "intermittent",
        pos: "adj",
        ipa: "/ˌɪn.t̬ɚˈmɪt.ənt/",
        meaning: "chập chờn, lúc có lúc không, ngắt quãng không liên tục (rất hay dùng cho lỗi mạng, timeout hoặc mưa ngắt quãng)",
        synonyms: "sporadic, occasional, on-and-off, irregular",
        collocations: ["intermittent connection timeouts", "intermittent failures", "experience intermittent noise"],
        mnemonic: "INTER (ở giữa) + MIT (gửi đi) => Tín hiệu cứ gửi được một lúc lại nghỉ ngắt quãng ở giữa, chập chờn cực khó chịu!",
        toeicEx: "Passengers on high-speed trains may experience **intermittent** cellular service when passing through mountain tunnels.",
        toeicVi: "Hành khách trên tàu cao tốc có thể gặp tình trạng sóng di động chập chờn khi đi qua các đường hầm xuyên núi.",
        javaEx: "We noticed **intermittent** `SocketTimeoutException` errors whenever AWS NAT Gateway reached port exhaustion.",
        javaVi: "Chúng tôi ghi nhận các lỗi `SocketTimeoutException` chập chờn mỗi khi AWS NAT Gateway chạm ngưỡng cạn kiệt cổng kết nối."
      },
      {
        word: "workaround",
        pos: "n",
        ipa: "/ˈwɝːk.ə.raʊnd/",
        meaning: "giải pháp đường vòng tạm thời giúp người dùng/hệ thống tiếp tục làm việc được trong khi chờ bản sửa lỗi triệt để",
        synonyms: "temporary fix, stopgap solution, bypass",
        collocations: ["apply a temporary workaround", "provide customers with a workaround", "ugly workaround"],
        mnemonic: "WORK (làm việc) + AROUND (đi vòng qua tảng đá chắn đường) => Chưa dọn được tảng đá ngay thì mở lối đi vòng qua cho xe chạy tiếp!",
        toeicEx: "Until the badge reader is repaired, receptionists will use a manual sign-in sheet as a **workaround**.",
        toeicVi: "Cho đến khi đầu đọc thẻ từ được sửa xong, nhân viên lễ tân sẽ dùng bảng ký tên thủ công làm giải pháp tạm thời.",
        javaEx: "As an immediate **workaround**, we disabled batch PDF compression via a feature flag to stop pods from crashing.",
        javaVi: "Như một giải pháp tạm thời tức thì, chúng tôi đã tắt tính năng nén PDF hàng loạt qua cờ tính năng để ngăn các pod bị sập."
      },
      {
        word: "mitigate",
        pos: "v",
        ipa: "/ˈmɪt̬.ə.ɡeɪt/",
        meaning: "giảm thiểu, làm dịu bớt mức độ thiệt hại, rủi ro hoặc tác động xấu của một sự cố",
        synonyms: "alleviate, lessen, minimize, cushion",
        collocations: ["mitigate security risks", "mitigate the impact on users", "risk mitigation strategy"],
        mnemonic: "MITI (mềm dịu đi, như mild) + GATE (cánh cổng ngăn lũ) => Hạ cánh cổng chắn lũ xuống để giảm nhẹ sức tàn phá!",
        toeicEx: "Diversifying our supplier base across three countries helped **mitigate** raw-material shortages.",
        toeicVi: "Việc đa dạng hóa mạng lưới nhà cung cấp tại ba quốc gia đã giúp giảm thiểu tình trạng thiếu hụt nguyên liệu thô.",
        javaEx: "Serving stale cached catalog data via Resilience4j fallback helped **mitigate** the downstream database outage.",
        javaVi: "Việc trả về dữ liệu danh mục cũ từ bộ nhớ đệm thông qua cơ chế dự phòng Resilience4j đã giúp giảm thiểu tác động khi cơ sở dữ liệu phía dưới bị sập."
      },
      {
        word: "spike",
        pos: "n / v",
        ipa: "/spaɪk/",
        meaning: "sự tăng vọt đột ngột tạo thành đỉnh nhọn trên biểu đồ (lưu lượng truy cập, độ trễ, CPU, giá cả); (Scrum) task nghiên cứu thử nghiệm",
        synonyms: "surge, sudden jump, sharp peak",
        collocations: ["sudden traffic spike", "latency spiked to 5 seconds", "handle flash-sale spikes"],
        mnemonic: "SPIKE là chiếc đinh nhọn hoắt dựng đứng lên trời => Nhìn biểu đồ Grafana dựng ngược thẳng đứng như cây đinh là biết có biến!",
        toeicEx: "Retailers reported a dramatic **spike** in air-conditioner sales during the record July heatwave.",
        toeicVi: "Các nhà bán lẻ ghi nhận mức tăng vọt đột biến về doanh số máy điều hòa trong đợt nắng nóng kỷ lục tháng Bảy.",
        javaEx: "Garbage collection CPU usage **spiked** to 95% right before the JVM threw an `OutOfMemoryError`.",
        javaVi: "Mức sử dụng CPU cho thu gom rác đã tăng vọt lên 95% ngay trước khi máy ảo JVM ném ra lỗi `OutOfMemoryError`."
      },
      {
        word: "bottleneck",
        pos: "n",
        ipa: "/ˈbɑː.t̬əl.nek/",
        meaning: "điểm nghẽn cổ chai (khâu có năng lực thấp nhất làm ứ đọng và kìm hãm tốc độ của toàn bộ hệ thống hoặc quy trình)",
        synonyms: "constraint, choke point, congestion point",
        collocations: ["identify a performance bottleneck", "eliminate the I/O bottleneck", "major workflow bottleneck"],
        mnemonic: "BOTTLE (cái chai) + NECK (cổ chai hẹp) => Thân chai to cỡ nào mà cổ chai bé tí thì nước chảy ra vẫn chậm rì!",
        toeicEx: "Upgrading the customs clearance software eliminated a costly **bottleneck** at the southern port.",
        toeicVi: "Việc nâng cấp phần mềm thông quan hải quan đã xóa bỏ một điểm nghẽn tốn kém tại cảng phía nam.",
        javaEx: "Flame graphs confirmed that synchronous XML marshalling was the primary CPU **bottleneck** in our legacy gateway.",
        javaVi: "Biểu đồ Flame graph xác nhận việc tuần tự hóa XML đồng bộ là điểm nghẽn CPU chính trong cổng kết nối đời cũ của chúng tôi."
      },
      {
        word: "degrade",
        pos: "v",
        ipa: "/dɪˈɡreɪd/",
        meaning: "suy giảm chất lượng, xuống cấp, chạy chậm đi đáng kể (nhưng chưa sập hoàn toàn)",
        synonyms: "deteriorate, decline, worsen, impair",
        collocations: ["performance degraded noticeably", "degraded mode", "degrade user experience"],
        mnemonic: "UP-grade là nâng cấp lên hạng cao hơn, còn DE-grade là tụt hạng xuống cấp thấp hơn!",
        toeicEx: "Prolonged exposure to direct sunlight can **degrade** the protective coating on solar panels.",
        toeicVi: "Tiếp xúc lâu dài với ánh nắng trực tiếp có thể làm xuống cấp lớp phủ bảo vệ trên các tấm pin mặt trời.",
        javaEx: "Missing a composite index caused query latency to **degrade** linearly as the `audit_logs` table grew past 50 million rows.",
        javaVi: "Việc thiếu một chỉ mục ghép đã khiến độ trễ truy vấn suy giảm tuyến tính khi bảng `audit_logs` vượt mốc 50 triệu dòng."
      },
      {
        word: "postmortem",
        pos: "n / adj",
        ipa: "/ˌpoʊstˈmɔːr.təm/",
        meaning: "buổi họp / tài liệu phân tích rút kinh nghiệm toàn diện sau khi một sự cố hoặc dự án kết thúc (đặc biệt là Blameless Postmortem)",
        synonyms: "after-action review, retrospective analysis, incident debrief",
        collocations: ["conduct a blameless postmortem", "publish the incident postmortem", "postmortem action items"],
        mnemonic: "POST (sau khi) + MORTEM (kết thúc/tắt thở) => Cuộc 'giải phẫu' tìm nguyên nhân sau khi đám cháy Production đã được dập tắt hoàn toàn!",
        toeicEx: "Following the product recall, executives held a thorough **postmortem** to strengthen quality control.",
        toeicVi: "Sau đợt thu hồi sản phẩm, ban điều hành đã tổ chức một buổi phân tích tổng kết kỹ lưỡng nhằm thắt chặt kiểm soát chất lượng.",
        javaEx: "In our blameless **postmortem**, we added automated connection-pool saturation alerts so we catch leaks hours earlier.",
        javaVi: "Trong biên bản tổng kết không đổ lỗi sau sự cố, chúng tôi đã bổ sung cảnh báo tự động khi vùng kết nối bão hòa để phát hiện rò rỉ sớm hơn hàng giờ."
      }
    ],
    examples: [
      {
        tag: "Incident War-room",
        en: "Status update: Checkout latency has **degraded** in `ap-southeast-1`, but there is no full **outage**; orders are still completing.",
        vi: "Cập nhật trạng thái: Độ trễ thanh toán đang bị suy giảm tại cụm `ap-southeast-1`, nhưng không bị sập hoàn toàn; đơn hàng vẫn đang hoàn tất.",
        note: "Câu trấn an cực chuẩn trên kênh Incident giúp ban lãnh đạo đánh giá đúng mức độ ảnh hưởng kinh doanh."
      },
      {
        tag: "Incident War-room",
        en: "We detected a **memory leak** in the Netty byte-buffer pool and restarted pods in rolling batches to **mitigate** the risk.",
        vi: "Chúng tôi phát hiện rò rỉ bộ nhớ trong vùng đệm byte Netty và đã khởi động lại cuốn chiếu từng nhóm pod để giảm thiểu rủi ro.",
        note: "Kết hợp khéo léo 'memory leak' + giải pháp 'rolling restart' + mục tiêu 'mitigate'."
      },
      {
        tag: "Code Review",
        en: "Please attach the exact curl payload and steps to **reproduce** the HTTP 500 error in the Jira ticket description.",
        vi: "Vui lòng đính kèm chính xác gói dữ liệu curl và các bước tái hiện lỗi HTTP 500 vào phần mô tả ticket Jira.",
        note: "Cách nhắc QA hoặc đồng nghiệp bổ sung thông tin tái hiện lỗi một cách lịch sự, rõ ràng."
      },
      {
        tag: "System Design",
        en: "Because the centralized sequence generator became a **bottleneck**, we migrated to time-sorted UUIDv7 identifiers.",
        vi: "Bởi vì bộ sinh số thứ tự tập trung đã trở thành điểm nghẽn cổ chai, chúng tôi đã chuyển sang mã định danh UUIDv7 sắp xếp theo thời gian.",
        note: "Ví dụ thực tế xuất sắc của Java hiện đại (UUIDv7) khi trả lời câu hỏi giải quyết DB bottleneck."
      },
      {
        tag: "Incident War-room",
        en: "Increasing the Redis TTL was only a tactical **workaround**; we still need to fix the N+1 query **root cause** tomorrow.",
        vi: "Việc tăng thời gian sống TTL trên Redis chỉ là giải pháp tình thế tạm thời; ngày mai chúng ta vẫn phải sửa tận gốc lỗi truy vấn N+1.",
        note: "Thể hiện tư duy kỷ luật của Senior: không bao giờ coi bản vá tạm bợ là đã xong việc."
      },
      {
        tag: "Global Interview",
        en: "I led a blameless **postmortem** culture where engineers openly shared near-misses without fear of punishment.",
        vi: "Tôi đã dẫn dắt văn hóa phân tích sau sự cố không đổ lỗi, nơi các kỹ sư cởi mở chia sẻ những tình huống suýt gây lỗi mà không sợ bị phạt.",
        note: "Điểm cộng cực lớn về năng lực lãnh đạo kỹ thuật (Engineering Leadership) ở vòng phỏng vấn Behavioral."
      },
      {
        tag: "Daily Standup",
        en: "Yesterday I spent four hours chasing an **intermittent** deadlock in our batch scheduler and finally isolated it.",
        vi: "Hôm qua tôi đã dành bốn tiếng săn lùng một lỗi khóa chết chập chờn trong bộ lập lịch chạy lô và cuối cùng đã cô lập được nó.",
        note: "Động từ 'isolate (a bug)' đi cùng 'intermittent' nghe cực kỳ chuyên nghiệp."
      },
      {
        tag: "System Design",
        en: "Auto-scaling policies pre-warm extra JVM instances ten minutes before the 12:00 PM flash-sale **spike**.",
        vi: "Chính sách tự động co giãn sẽ khởi động làm nóng trước các tiến trình JVM bổ sung 10 phút trước cú tăng vọt lưu lượng giờ săn sale 12h trưa.",
        note: "Giải quyết triệt để bài toán JVM cold-start khi gặp traffic spike."
      },
      {
        tag: "TOEIC Part 7",
        en: "We sincerely apologize for any inconvenience caused by this morning's **intermittent** email **outage**, which has now been resolved.",
        vi: "Chúng tôi chân thành xin lỗi vì bất kỳ sự bất tiện nào gây ra bởi sự cố gián đoạn email chập chờn sáng nay, hiện sự cố đã được khắc phục.",
        note: "Câu mẫu kinh điển mở đầu hoặc kết thúc bức thư thông báo IT trong TOEIC Part 6–7."
      },
      {
        tag: "TOEIC Part 7",
        en: "To **mitigate** potential shipping **bottlenecks** during the holiday season, customers are encouraged to place orders by December 10.",
        vi: "Để giảm thiểu các điểm nghẽn vận chuyển tiềm ẩn trong mùa lễ hội, khách hàng được khuyến khích đặt hàng trước ngày 10 tháng 12.",
        note: "Sự kết hợp hoàn hảo giữa 'mitigate', 'bottlenecks' và giới từ hạn chót 'by December 10' của TOEIC."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Sometimes this API dies, sometimes it runs normal, I cannot make the bug happen again.",
          fix: "We're seeing intermittent failures on this API, and I haven't been able to reproduce the issue locally yet.",
          why: "Thay cả một câu dài dòng lủng củng bằng hai từ đắt giá 'intermittent failures' và 'reproduce locally' ngắn gọn gấp đôi mà sang trọng gấp mười."
        },
        {
          bug: "Our website is slow 3 seconds, we have a total outage!",
          fix: "Response times have degraded to 3 seconds, though core services remain available.",
          why: "Báo nhầm 'slow' thành 'total outage' trên kênh khách hàng có thể khiến công ty bị phạt hợp đồng SLA oan uổng; hãy dùng 'degraded'."
        },
        {
          bug: "Dev Tuan pushed bad SQL so server crashed.",
          fix: "An unindexed query merged without load-test validation was the root cause of the outage.",
          why: "Văn hóa kỹ thuật quốc tế tuyệt đối tránh chỉ đích danh cá nhân trong báo cáo sự cố; hãy mô tả lỗ hổng của quy trình kiểm duyệt."
        },
        {
          bug: "We did a trick to cheat the bug temporary.",
          fix: "We deployed a temporary workaround to mitigate the impact while preparing a permanent fix.",
          why: "Từ 'cheat / trick' mang sắc thái gian dối thiếu chuyên nghiệp; 'workaround' và 'mitigate' là thuật ngữ chuẩn mực được khách hàng tôn trọng."
        }
      ]
    },
    toeicTips: [
      "Từ vựng tủ TOEIC 650+: Động từ 'mitigate' gần như luôn đứng trước danh từ chỉ RỦI RO / HẬU QUẢ XẤU (risks, losses, delays, impact, effects). Nếu thấy các danh từ này sau chỗ trống, khoanh 'mitigate' trong 3 giây!",
      "Đừng nhầm nghĩa động từ 'reproduce' trong TOEIC: ở văn bản IT/Kỹ thuật nó là 'tái hiện lỗi', còn ở cuối sách hướng dẫn/báo cáo (Part 7) 'may not be reproduced' lại có nghĩa là 'không được phép sao chép/in ấn lại' (= copied / duplicated)!",
      "Cặp từ đồng nghĩa cực hay thi trong TOEIC Part 7: 'outage' = 'power failure / service interruption'; 'intermittent' = 'occasional / sporadic'; 'root cause' = 'underlying reason'."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "to mitigate user impact",
          "the root cause.",
          "a temporary workaround",
          "while investigating",
          "We deployed"
        ],
        answer: "We deployed a temporary workaround to mitigate user impact while investigating the root cause.",
        vi: "Chúng tôi đã triển khai một giải pháp tạm thời nhằm giảm thiểu ảnh hưởng tới người dùng trong lúc điều tra nguyên nhân gốc rễ."
      },
      fillBlank: {
        sentence: "Because the timeout error is _____, it only appears once in every thousand requests under heavy load.",
        answer: "intermittent",
        accepted: ["intermittent", "sporadic"],
        hint: "Tính từ bắt đầu bằng chữ 'i' chỉ lỗi chập chờn, lúc xuất hiện lúc không",
        explain: "'Intermittent' diễn tả chính xác những hiện tượng xảy ra ngắt quãng, không đều đặn (lúc bị lúc không), rất khó tái hiện bằng một lần chạy đơn lẻ."
      }
    },
    quiz: [
      {
        q: "Đang họp War-room lúc nửa đêm, khách hàng hỏi tiến độ xử lý khi bạn vừa bật tạm bộ nhớ đệm dự phòng giúp tỉ lệ lỗi giảm từ 40% xuống 0.5%, nhưng vẫn đang đọc log tìm dòng code gây rò rỉ RAM. Bạn trả lời sao cho chuẩn xác nhất?",
        options: [
          "We already fixed the root cause 100%, goodbye!",
          "We've applied a workaround that mitigated customer impact down to 0.5%, and we're now analyzing heap dumps to isolate the root cause.",
          "We reproduced a total outage on purpose to test your patience.",
          "There is no bottleneck, our server just degraded to zero bandwidth forever."
        ],
        answer: 1,
        explain: "Đáp án B trung thực, rõ ràng và chuyên nghiệp tuyệt đối: báo tin vui đã giảm thiểu tác động ('mitigated impact') nhờ giải pháp tạm ('workaround'), đồng thời nêu bước tiếp theo là phân tích heap dump tìm 'root cause'. Câu A nói dối nguy hiểm vì lỗi gốc chưa sửa xong; C và D vô nghĩa."
      },
      {
        q: "[TOEIC Part 5] Installing backup battery arrays at every cellular tower will significantly _____ the impact of winter storm power outages.",
        options: [
          "mitigate",
          "reproduce",
          "degrade",
          "spike"
        ],
        answer: 0,
        explain: "Đáp án A ('mitigate' — làm giảm nhẹ/giảm thiểu) ghép hoàn hảo với tân ngữ 'the impact of ... power outages' (tác động của các đợt mất điện do bão mùa đông). B ('tái hiện/sao chép'), C ('làm suy giảm chất lượng') và D ('tăng vọt') đều ngược nghĩa mong muốn của việc lắp pin dự phòng."
      },
      {
        q: "[TOEIC Part 7] Trong email thông báo in ở trang đầu cuốn cẩm nang nội bộ có ghi: 'No part of this publication may be reproduced without written consent.' Từ 'reproduced' ở đây gần nghĩa nhất với từ nào?",
        options: [
          "Delayed",
          "Copied",
          "Repaired",
          "Postponed"
        ],
        answer: 1,
        explain: "Đáp án B ('Copied' — sao chép/nhân bản) là nghĩa thương mại/xuất bản kinh điển của 'reproduce' trong câu hỏi từ đồng nghĩa TOEIC Part 7. Các phương án A (trì hoãn), C (sửa chữa), D (dời lịch) hoàn toàn sai nghĩa."
      }
    ]
  },

  V3_5: {
    duration: "50 phút",
    toeicTarget: "Giao tiếp Kỹ sư Phần mềm Quốc tế & TOEIC 600–700+",
    javaContext: "Thiết kế REST/gRPC API, Tối ưu Database & Transaction, Đánh giá Bảo mật OWASP & TOEIC Part 5–7",
    teacherIntro: "Anh em làm Java Backend cho ngân hàng, ví điện tử hay thương mại điện tử đều biết: chỉ cần lơ là một khái niệm như idempotent là khách hàng bị trừ tiền hai lần khi bấm đúp nút Thanh toán; chỉ cần nhầm lẫn giữa latency và throughput là tối ưu sai hướng hoàn toàn! Trong các buổi phỏng vấn kỹ thuật bằng tiếng Anh, giám khảo nước ngoài cực kỳ thích xoáy vào 10 từ khóa cốt lõi của bài V3.5 này: làm sao xử lý high concurrency mà không dính database deadlock, làm sao sanitize dữ liệu đầu vào bịt lỗ hổng vulnerability, mã hóa encryption, thu hồi token (revoke) và áp rate limit bảo vệ cổng API. Đặc biệt, nhóm từ bảo mật như vulnerability, encryption, revoke cũng chính là 'mỏ vàng' điểm số trong các bài đọc CNTT & Ngân hàng của đề thi TOEIC!",
    javaAnalogy: {
      title: "Latency vs Throughput & Rate Limit giống hệt Cao Tốc Thu Phí Tự Động ETC",
      body: "Hãy tưởng tượng tuyến cao tốc nối ứng dụng Java tới PostgreSQL: `latency` (độ trễ) là thời gian MỘT chiếc xe chạy từ đầu đường tới cuối đường (ví dụ 15 mili-giây); `throughput` (thông lượng) là TỔNG SỐ xe đi qua trạm trong 1 giây nhờ mở rộng 8 làn chạy song song (`concurrency`). Nếu hai xe ở ngã tư khóa đầu nhau không ai nhường ai, đó là `deadlock`. Trạm thu phí ETC đảm bảo xe quẹt thẻ 2 lần qua cùng 1 lượt vẫn chỉ trừ tiền đúng 1 lần (`idempotent`), có biển giới hạn số xe vào trạm mỗi phút (`rate limit`), kiểm tra thùng hàng chống hàng cấm (`sanitize` / ngăn `vulnerability`), niêm phong két sắt (`encryption`) và khóa thẻ ngay nếu báo mất (`revoke`)!"
    },
    objectives: [
      "Phân biệt và sử dụng chuẩn xác bộ thuật ngữ hiệu năng & giao dịch Backend: latency, throughput, concurrency, deadlock, idempotent (cùng payload & pagination).",
      "Thảo luận chuyên nghiệp về kiến trúc bảo mật API chuẩn OWASP với sanitize, vulnerability, encryption, revoke và rate limit.",
      "Giải quyết gọn lẹ các câu hỏi từ vựng về bảo mật dữ liệu, thu hồi quyền truy cập (revoke) và lỗ hổng (vulnerable to) trong TOEIC Part 5, 6, 7."
    ],
    formulaCards: [
      {
        label: "Khung Báo Cáo Kết Quả Tối Ưu Hiệu Năng (Latency & Throughput)",
        formula: "By adding batch processing and cursor pagination, we cut p99 latency by 45% and doubled overall throughput.",
        note: "Luôn nói kèm chỉ số phân vị 'p95 / p99 latency' thay vì 'average latency' để thể hiện đẳng cấp Senior Backend."
      },
      {
        label: "Khung Thiết Kế API Chống Trừ Tiền Hai Lần (Idempotency Guarantee)",
        formula: "Clients must pass an `Idempotency-Key` header so our payment endpoint remains idempotent across network retries.",
        note: "Câu trả lời 'ăn tiền' 100% trong mọi cuộc phỏng vấn Fintech / E-commerce quốc tế!"
      },
      {
        label: "Khung Cảnh Báo Lỗ Hổng Bảo Mật Trong Code Review",
        formula: "Concatenating raw user input into SQL exposes a critical vulnerability — let's sanitize inputs and use parameterized queries.",
        note: "Kết hợp 'expose a vulnerability' + giải pháp chuẩn OWASP."
      },
      {
        label: "Khung Thiết Kế Bảo Vệ Cổng API (Rate Limiting & Token Revocation)",
        formula: "We enforce strict rate limits per IP at the gateway and immediately revoke compromised refresh tokens via Redis.",
        note: "Giải thích gọn gàng cơ chế phòng vệ chủ động cho hệ thống xác thực JWT."
      }
    ],
    sections: [
      {
        heading: "1. Hiệu Năng & Đa Luồng Cốt Lõi: Latency vs Throughput, Concurrency, Deadlock & Pagination",
        paragraphs: [
          "Rất nhiều ứng viên trả lời phỏng vấn đánh đồng 'hệ thống nhanh' chung chung mà không tách biệt hai đại lượng vật lý khác hẳn nhau: 'latency' (thời gian phản hồi của một request đơn lẻ, tính bằng `ms`, càng thấp càng tốt — low latency) và 'throughput' (số lượng request hoặc bản ghi xử lý được trên một đơn vị thời gian như RPS / TPS, càng cao càng tốt — high throughput). Đôi khi gom nhóm gửi theo lô (batching) làm tăng nhẹ latency của 1 bản ghi nhưng lại đẩy throughput toàn cục tăng gấp 10 lần!",
          "Khi mức độ truy cập đồng thời (concurrency) tăng cao, hai hiểm họa thường trực ở tầng Database và API là: trả về gói dữ liệu JSON quá nặng (oversized payload) do thiếu phân trang hiệu quả (cursor-based pagination), và hai giao dịch cập nhật chéo thứ tự dòng dẫn tới khóa chết lẫn nhau (database deadlock)."
        ],
        bullets: [
          "Collocation chuẩn mực: `low latency` (độ trễ thấp) đi đôi với `high throughput` (thông lượng cao) — đừng bao giờ nói ngược 'high latency' là tốt!",
          "Cách phòng chống DB deadlock kinh điển: luôn khóa các bản ghi theo thứ tự `account_id` tăng dần nhất quán ở mọi giao dịch.",
          "Với bảng hàng chục triệu dòng, hãy đề xuất 'keyset / cursor pagination' thay cho `OFFSET 1000000` để giữ latency ổn định."
        ]
      },
      {
        heading: "2. Tính Lũy Đẳng (Idempotent) — Viên Đá Tảng Của Thanh Toán & Hệ Thống Phân Tán",
        paragraphs: [
          "Từ 'idempotent' (/ˌaɪ.demˈpoʊ.tənt/ — rất nhiều dev Việt đọc sai âm đầu thành /ɪ/ thay vì /aɪ/!) mang ý nghĩa toán học và kỹ thuật tuyệt đẹp: gọi cùng một thao tác 1 lần hay 10 lần liên tiếp với cùng bộ tham số thì trạng thái của hệ thống vẫn giống hệt như chỉ gọi 1 lần duy nhất.",
          "Trong chuẩn HTTP, `GET`, `PUT` và `DELETE` vốn mang tính idempotent tự nhiên, còn `POST` tạo đơn hàng/chuyển tiền thì KHÔNG. Vì mạng di động luôn có thể rớt gói tin khiến app client tự động gửi lại (retry), Senior Java bắt buộc thiết kế bảng `idempotency_keys` kèm ràng buộc `UNIQUE` hoặc khóa phân tán để đảm bảo không bao giờ phát sinh giao dịch trùng lặp."
        ],
        bullets: [
          "Nhớ cách phát âm chuẩn Mỹ để ghi điểm phỏng vấn: **AI-dem-poh-tuhnt** (/ˌaɪ.demˈpoʊ.tənt/), danh từ là **idempotency**.",
          "Trong Kafka consumer, do cơ chế mặc định là `at-least-once delivery`, logic xử lý message ở phía Java consumer bắt buộc phải idempotent!",
          "Kết hợp giảm kích thước `payload` (chỉ trả về các trường cần thiết hoặc bật nén Gzip/Brotli) giúp tiết kiệm băng thông đáng kể."
        ]
      },
      {
        heading: "3. Bảo Mật API & Tần Suất Xuất Hiện Dày Đặc Trong Đề Thi TOEIC: Vulnerability, Encryption, Sanitize, Revoke & Rate Limit",
        paragraphs: [
          "Năm thuật ngữ bảo mật trong bài này là ngôn ngữ hàng ngày của mọi đợt kiểm thử xâm nhập (Penetration Test / Security Audit): làm sạch dữ liệu đầu vào không đáng tin (sanitize user input), vá lỗ hổng bảo mật (patch a security vulnerability), mã hóa dữ liệu lúc lưu trữ và truyền tải (encryption at rest and in transit), thu hồi quyền hoặc chứng chỉ ngay lập tức (revoke access / credentials / licenses), và giới hạn tần suất gọi API chống DDoS/Brute-force (rate limit).",
          "Thú vị ở chỗ, đề thi TOEIC 600–750+ đặc biệt ưa chuộng 'revoke' và 'vulnerable'! Trong TOEIC, ngoài việc thu hồi quyền truy cập máy tính ('revoke system access'), 'revoke' còn dùng cho thu hồi giấy phép kinh doanh, thẻ đỗ xe hoặc đặc quyền thành viên ('revoke a permit / membership privileges'). Còn tính từ 'vulnerable' luôn đi kèm giới từ 'TO' ('be vulnerable TO cyberattacks / market fluctuations')."
        ],
        bullets: [
          "Công thức giới từ bất biến TOEIC Part 5: `vulnerable TO + Noun / V-ing` (dễ bị tổn thương / dễ chịu tác động bởi cái gì).",
          "Phân biệt cặp thuật ngữ bảo mật: `encryption` (mã hóa 2 chiều có khóa giải mã như AES-256) vs `hashing` (băm 1 chiều cho mật khẩu như BCrypt/Argon2).",
          "Khi trả về lỗi vượt ngưỡng `rate limit`, mã trạng thái HTTP chuẩn quốc tế luôn là `429 Too Many Requests` kèm header `Retry-After`."
        ]
      }
    ],
    vocabItems: [
      {
        word: "latency",
        pos: "n",
        ipa: "/ˈleɪ.tən.si/",
        meaning: "độ trễ (khoảng thời gian tính từ lúc gửi yêu cầu đi cho đến khi nhận được phản hồi trở về, thường đo bằng ms)",
        synonyms: "response delay, lag, round-trip time",
        collocations: ["ultra-low latency", "reduce tail latency (p99)", "network latency"],
        mnemonic: "Gốc từ LATE (trễ, muộn) => Khoảng thời gian gói tin 'đi trễ' trên đường mạng trước khi về tới tay người dùng!",
        toeicEx: "Upgrading to fiber-optic internet drastically reduced video-conferencing **latency** across international offices.",
        toeicVi: "Việc nâng cấp lên cáp quang đã giảm mạnh độ trễ hội nghị truyền hình giữa các văn phòng quốc tế.",
        javaEx: "Switching from ZGC generational mode cut our p99 API **latency** from 120 milliseconds down to under 8 milliseconds.",
        javaVi: "Việc chuyển sang chế độ phân thế hệ của bộ dọn rác ZGC đã cắt giảm độ trễ phân vị thứ 99 của API từ 120ms xuống dưới 8ms."
      },
      {
        word: "throughput",
        pos: "n",
        ipa: "/ˈθruː.pʊt/",
        meaning: "thông lượng, năng suất thông qua (tổng khối lượng yêu cầu, giao dịch hoặc hàng hóa xử lý thành công trong một đơn vị thời gian)",
        synonyms: "processing capacity, output rate, bandwidth volume",
        collocations: ["maximize system throughput", "high-throughput Kafka cluster", "measure transaction throughput"],
        mnemonic: "THROUGH (đi xuyên qua ống) + PUT (đưa vào) => Lượng hàng/request đẩy xuyên qua trạm thành công trong mỗi giây!",
        toeicEx: "Installing automated conveyor belts increased daily packaging **throughput** at the fulfillment center by 35%.",
        toeicVi: "Việc lắp đặt băng chuyền tự động đã làm tăng năng suất đóng gói hàng ngày tại trung tâm hoàn tất đơn hàng thêm 35%.",
        javaEx: "Using JDBC batch inserts (`rewriteBatchedStatements=true`) boosted database write **throughput** tenfold.",
        javaVi: "Sử dụng chèn theo lô của JDBC (`rewriteBatchedStatements=true`) đã đẩy thông lượng ghi cơ sở dữ liệu tăng gấp mười lần."
      },
      {
        word: "concurrency",
        pos: "n",
        ipa: "/kənˈkɝː.ən.si/",
        meaning: "tính đồng thời (khả năng hệ thống điều phối và xử lý nhiều luồng công việc hoặc nhiều người dùng truy cập cùng một lúc)",
        synonyms: "parallel execution, simultaneous processing",
        collocations: ["high concurrency environment", "optimistic concurrency control", "structured concurrency in Java 21"],
        mnemonic: "CON (cùng nhau) + CURRENT (dòng chảy hiện tại) => Nhiều dòng chảy request cùng lao vào hệ thống tại một thời điểm! Nhớ ngay gói `java.util.concurrent`!",
        toeicEx: "The ticketing website crashed because it was not tested for the high **concurrency** of fifty thousand simultaneous buyers.",
        toeicVi: "Trang web bán vé đã bị sập vì chưa được kiểm thử cho mức truy cập đồng thời cao lên tới năm mươi nghìn người mua cùng lúc.",
        javaEx: "Optimistic locking via JPA `@Version` handles moderate **concurrency** cleanly without holding expensive database row locks.",
        javaVi: "Cơ chế khóa lạc quan thông qua `@Version` của JPA xử lý mức truy cập đồng thời vừa phải rất gọn gàng mà không giữ khóa dòng đắt đỏ dưới DB."
      },
      {
        word: "deadlock",
        pos: "n / v",
        ipa: "/ˈded.lɑːk/",
        meaning: "1) tình trạng khóa chết (hai tiến trình/giao dịch giữ tài nguyên của nhau và chờ nhau vô tận); 2) sự bế tắc hoàn toàn trong đàm phán",
        synonyms: "standstill, impasse, stalemate, mutual block",
        collocations: ["detect a database deadlock", "break the negotiation deadlock", "deadlock victim"],
        mnemonic: "DEAD (chết cứng) + LOCK (ổ khóa) => Anh giữ chìa của tôi, tôi giữ chìa của anh, cả hai đứng nhìn nhau tới... hết đời!",
        toeicEx: "Contract talks between management and the transport union reached a **deadlock** late Friday evening.",
        toeicVi: "Cuộc đàm phán hợp đồng giữa ban giám đốc và công đoàn vận tải đã rơi vào thế bế tắc vào tối muộn thứ Sáu.",
        javaEx: "PostgreSQL aborted one transaction with SQLState `40P01` after detecting a circular row-level **deadlock**.",
        javaVi: "PostgreSQL đã hủy bỏ một giao dịch với mã lỗi `40P01` sau khi phát hiện tình trạng khóa chết vòng tròn ở cấp độ dòng."
      },
      {
        word: "idempotent",
        pos: "adj",
        ipa: "/ˌaɪ.demˈpoʊ.tənt/",
        meaning: "lũy đẳng (thực thi thao tác 1 lần hay lặp lại nhiều lần với cùng đầu vào đều cho ra cùng một trạng thái kết quả duy nhất, không gây tác dụng phụ kép)",
        synonyms: "safely repeatable, duplicate-proof",
        collocations: ["idempotent payment API", "idempotent Kafka consumer", "ensure idempotency"],
        mnemonic: "IDEM (y hệt nhau, như identical) + POTENT (hiệu lực) => Bấm nút 1 lần hay 5 lần thì hiệu lực tác động lên số dư tài khoản vẫn Y HỆT 1 lần!",
        toeicEx: "Modern banking transfer protocols use unique request IDs so duplicate network submissions remain safe (**idempotent**).",
        toeicVi: "Các giao thức chuyển khoản ngân hàng hiện đại dùng mã yêu cầu duy nhất để việc gửi trùng lặp do lỗi mạng vẫn an toàn không bị trừ kép.",
        javaEx: "Making our webhook handler **idempotent** prevented duplicate invoice emails whenever Stripe retried timed-out callbacks.",
        javaVi: "Việc thiết kế trình xử lý webhook đạt tính lũy đẳng đã ngăn chặn việc gửi trùng email hóa đơn mỗi khi Stripe thử gọi lại các callback bị quá giờ."
      },
      {
        word: "sanitize",
        pos: "v",
        ipa: "/ˈsæn.ə.taɪz/",
        meaning: "làm sạch, lọc bỏ các ký tự/mã độc hại khỏi dữ liệu đầu vào của người dùng (chống XSS, SQL Injection); khử trùng vệ sinh",
        synonyms: "cleanse, purify, scrub, disinfect",
        collocations: ["sanitize untrusted user input", "sanitize HTML payloads", "sanitize workstations"],
        mnemonic: "Cùng gốc với HAND SANITIZER (nước rửa tay diệt khuẩn) => Rửa sạch vi khuẩn mã độc khỏi dữ liệu người dùng trước khi đưa vào hệ thống!",
        toeicEx: "Hospital staff thoroughly **sanitize** all examination rooms between patient appointments.",
        toeicVi: "Nhân viên bệnh viện khử trùng kỹ lưỡng tất cả các phòng khám giữa các lượt hẹn bệnh nhân.",
        javaEx: "Always **sanitize** rich-text comments on the backend using OWASP Java HTML Sanitizer to block stored XSS attacks.",
        javaVi: "Hãy luôn làm sạch dữ liệu bình luận văn bản đa dạng thức ở phía backend bằng thư viện OWASP Java HTML Sanitizer để chặn tấn công XSS lưu trữ."
      },
      {
        word: "vulnerability",
        pos: "n",
        ipa: "/ˌvʌl.nɚ.əˈbɪl.ə.ti/",
        meaning: "lỗ hổng bảo mật (điểm yếu trong mã nguồn/thư viện/hệ thống có thể bị tin tặc khai thác); điểm dễ bị tổn thương",
        synonyms: "security flaw, weakness, exposure, loophole",
        collocations: ["zero-day vulnerability", "patch a critical vulnerability", "scan dependencies for vulnerabilities"],
        mnemonic: "Gót chân Achilles chính là VULNERABILITY => Kẻ thù chỉ chờ đúng khe hở yếu ớt đó (như vụ Log4Shell kinh hoàng) để đánh sập thành trì!",
        toeicEx: "A recent audit highlighted the company's **vulnerability** to sudden foreign-exchange fluctuations.",
        toeicVi: "Một cuộc kiểm toán gần đây đã chỉ rõ điểm dễ tổn thương của công ty trước những biến động tỷ giá hối đoái đột ngột.",
        javaEx: "Dependabot alerted us to a critical remote-code-execution **vulnerability** in an outdated Jackson transitive dependency.",
        javaVi: "Dependabot đã cảnh báo chúng tôi về một lỗ hổng thực thi mã từ xa nghiêm trọng nằm trong thư viện phụ thuộc bắc cầu Jackson đời cũ."
      },
      {
        word: "encryption",
        pos: "n",
        ipa: "/ɪnˈkrɪp.ʃən/",
        meaning: "sự mã hóa dữ liệu (biến đổi dữ liệu rõ thành bản mã chỉ người có khóa hợp lệ mới giải mã đọc được)",
        synonyms: "ciphering, cryptographic protection, encoding",
        collocations: ["end-to-end encryption", "encryption at rest and in transit", "AES-256 encryption"],
        mnemonic: "EN (đưa vào trong) + CRYPT (hầm mộ bí mật) => Cất giấu thông tin nhạy cảm vào hầm mật mã không kẻ trộm nào đọc nổi!",
        toeicEx: "All corporate laptops now require full-disk **encryption** to protect confidential client records.",
        toeicVi: "Tất cả máy tính xách tay của công ty hiện nay đều bắt buộc mã hóa toàn bộ ổ đĩa để bảo vệ hồ sơ mật của khách hàng.",
        javaEx: "We enforce envelope **encryption** with AWS KMS for personally identifiable information (PII) columns before persisting JPA entities.",
        javaVi: "Chúng tôi áp dụng cơ chế mã hóa phong bì với AWS KMS cho các cột thông tin định danh cá nhân (PII) trước khi lưu các thực thể JPA xuống DB."
      },
      {
        word: "revoke",
        pos: "v",
        ipa: "/rɪˈvoʊk/",
        meaning: "thu hồi, hủy bỏ hiệu lực chính thức (quyền truy cập, token bảo mật, chứng chỉ số, giấy phép lái xe/kinh doanh)",
        synonyms: "cancel, withdraw, rescind, invalidate",
        collocations: ["revoke an access token", "revoke user privileges", "revoke a business license"],
        mnemonic: "RE (ngược lại) + VOKE (gọi/cấp ra, như invoke) => Đã cấp quyền ra rồi nay 'gọi thu ngược về', cắt quyền ngay lập tức!",
        toeicEx: "City authorities threatened to **revoke** the restaurant's operating permit due to repeated safety violations.",
        toeicVi: "Chính quyền thành phố cảnh báo sẽ thu hồi giấy phép hoạt động của nhà hàng do vi phạm an toàn nhiều lần.",
        javaEx: "When a user changes their password, our auth service immediately **revokes** all active refresh tokens stored in Redis.",
        javaVi: "Khi người dùng đổi mật khẩu, dịch vụ xác thực của chúng tôi lập tức thu hồi toàn bộ refresh token đang hoạt động lưu trong Redis."
      },
      {
        word: "rate limit",
        pos: "n / v (rate-limit)",
        ipa: "/ˈreɪt ˌlɪm.ɪt/",
        meaning: "giới hạn tần suất gọi (ngưỡng tối đa số lượng yêu cầu một người dùng/IP được phép gửi trong một khung thời gian như 100 req/phút)",
        synonyms: "request throttling, quota cap",
        collocations: ["exceed the API rate limit", "enforce per-tenant rate limits", "rate-limit login attempts"],
        mnemonic: "RATE (tốc độ/tần suất gửi) + LIMIT (vạch giới hạn) => Giống biển tốc độ tối đa trên đường để chặn kẻ phóng ẩu làm tắc nghẽn server!",
        toeicEx: "External partners are subject to a strict daily query **limit** (**rate limit**) on the public market-data portal.",
        toeicVi: "Các đối tác bên ngoài phải tuân theo giới hạn tần suất truy vấn hàng ngày nghiêm ngặt trên cổng dữ liệu thị trường công khai.",
        javaEx: "We configured Bucket4j with Redis to **rate-limit** OTP verification requests to five attempts per minute per phone number.",
        javaVi: "Chúng tôi đã cấu hình Bucket4j kết hợp Redis để giới hạn tần suất xác thực OTP ở mức tối đa 5 lần thử mỗi phút trên mỗi số điện thoại."
      }
    ],
    examples: [
      {
        tag: "System Design",
        en: "Trimming unused fields from the JSON **payload** and adding cursor **pagination** slashed mobile API **latency** in half.",
        vi: "Việc cắt bỏ các trường không dùng khỏi gói dữ liệu JSON và bổ sung phân trang con trỏ đã giảm một nửa độ trễ API di động.",
        note: "Câu tổng hợp ba thuật ngữ cực mạnh: `payload`, `pagination` và `latency`."
      },
      {
        tag: "Code Review",
        en: "Is this Kafka consumer **idempotent** if a rebalance replays the last fifty messages before offsets are committed?",
        vi: "Consumer Kafka này đã đảm bảo tính lũy đẳng chưa nếu quá trình cân bằng lại phát lặp lại 50 tin nhắn cuối trước khi kịp lưu offset?",
        note: "Câu hỏi review sắc lẹm mà mọi Tech Lead Java đều đặt ra khi duyệt code Kafka."
      },
      {
        tag: "Incident War-room",
        en: "Two batch jobs updated `inventory` rows in opposite order, triggering a database **deadlock** during peak **concurrency**.",
        vi: "Hai tiến trình chạy lô đã cập nhật các dòng bảng `inventory` theo thứ tự ngược nhau, gây ra khóa chết cơ sở dữ liệu vào lúc truy cập đồng thời cao điểm.",
        note: "Giải thích nguyên nhân kinh điển nhất của deadlock trong phỏng vấn Backend."
      },
      {
        tag: "Code Review",
        en: "Remember to mask sensitive card numbers in Logback so we don't leak unencrypted **payloads** despite database **encryption**.",
        vi: "Hãy nhớ che ẩn số thẻ nhạy cảm trong Logback để chúng ta không làm rò rỉ dữ liệu rõ ra file log dù cơ sở dữ liệu đã được mã hóa.",
        note: "Lỗi thực tế cực hay gặp trong kiểm toán PCI-DSS ngành ngân hàng."
      },
      {
        tag: "System Design",
        en: "When an employee leaves the company, Okta webhooks automatically **revoke** their OAuth sessions across all internal microservices.",
        vi: "Khi một nhân viên nghỉ việc, webhook từ Okta sẽ tự động thu hồi phiên đăng nhập OAuth của họ trên toàn bộ các microservice nội bộ.",
        note: "Kết hợp quy trình HR Offboarding với kiến trúc bảo mật IAM."
      },
      {
        tag: "Incident War-room",
        en: "An aggressive web scraper hit our catalog API at 8,000 RPS until Cloudflare's **rate limit** kicked in and returned HTTP 429.",
        vi: "Một trình cào dữ liệu hung hãn đã bắn phá API danh mục ở mức 8.000 request/giây cho tới khi giới hạn tần suất của Cloudflare kích hoạt và trả về mã HTTP 429.",
        note: "Cụm phrasal verb 'kick in' (= bắt đầu phát huy tác dụng) dùng rất tự nhiên khi mô tả hệ thống tự vệ."
      },
      {
        tag: "Global Interview",
        en: "To maximize **throughput** without sacrificing tail **latency**, we isolated slow reporting queries onto a read-replica pool.",
        vi: "Để tối đa hóa thông lượng mà không hy sinh độ trễ đuôi, chúng tôi đã tách biệt các câu truy vấn báo cáo chậm sang một cụm bản sao chỉ đọc.",
        note: "Cấu trúc 'maximize X without sacrificing Y' là mẫu câu vàng cho phỏng vấn kiến trúc."
      },
      {
        tag: "Code Review",
        en: "Never trust client-side validation alone; the backend controller must validate and **sanitize** every incoming DTO field.",
        vi: "Không bao giờ chỉ tin tưởng vào kiểm tra phía client; controller ở backend bắt buộc phải xác thực và làm sạch mọi trường DTO gửi lên.",
        note: "Nguyên tắc vàng Defense-in-Depth trong lập trình an toàn."
      },
      {
        tag: "TOEIC Part 7",
        en: "Management hopes the mediator's proposal will finally break the **deadlock** over overtime compensation.",
        vi: "Ban lãnh đạo hy vọng đề xuất của người hòa giải cuối cùng sẽ phá vỡ thế bế tắc xoay quanh khoản đền bù làm thêm giờ.",
        note: "Nghĩa thương mại cực kỳ phổ biến của 'break the deadlock' (= phá vỡ thế bế tắc đàm phán) trong báo chí và TOEIC Part 7."
      },
      {
        tag: "TOEIC Part 7",
        en: "Security badges issued to temporary contractors will be automatically **revoked** at 6:00 PM on the final day of their assignment.",
        vi: "Thẻ an ninh cấp cho các nhà thầu tạm thời sẽ tự động bị thu hồi hiệu lực vào lúc 6 giờ chiều ngày làm việc cuối cùng của họ.",
        note: "Câu bị động chuẩn mực của đề thi TOEIC xoay quanh quy định an ninh tòa nhà."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "After caching, our API has very high latency so it runs super fast!",
          fix: "After introducing Redis caching, our API achieved ultra-low latency and much higher throughput.",
          why: "Nhầm tai hại! 'High latency' nghĩa là độ trễ CAO (chậm rì rì)! Nhanh phải là 'low latency' và 'high throughput'."
        },
        {
          bug: "We encrypt user passwords with BCrypt so nobody can decrypt them.",
          fix: "We hash user passwords with salted BCrypt, and use AES-256 encryption for sensitive PII fields.",
          why: "Trong phỏng vấn Senior Security, gọi BCrypt là 'encryption' sẽ bị trừ điểm nặng vì mật khẩu phải BĂM một chiều (hashing), không bao giờ giải mã ngược!"
        },
        {
          bug: "Old systems are very vulnerable WITH hacker attacks.",
          fix: "Unpatched legacy systems are highly vulnerable to cyberattacks.",
          why: "Lỗi giới từ kinh điển: 'vulnerable' luôn đi với giới từ 'TO' (vulnerable to something), tuyệt đối không đi với 'with'."
        },
        {
          bug: "When user logs out, we delete back the permission of token.",
          fix: "Upon logout, we immediately revoke the refresh token.",
          why: "'Delete back the permission' là ghép từ tiếng Việt; động từ chuẩn xác duy nhất cho việc thu hồi quyền/token/giấy phép là 'revoke'."
        }
      ]
    },
    toeicTips: [
      "Mẹo phản xạ 2 giây TOEIC Part 5: Thấy tính từ 'vulnerable' hoặc danh từ 'vulnerability' trước chỗ trống chọn giới từ => Khoanh ngay đáp án 'TO' (`be vulnerable to damage / attacks / inflation`).",
      "Ghi nhớ bộ đôi động từ đối nghịch về giấy phép/quyền hạn cực hay ra trong TOEIC: `issue / grant` (cấp phát giấy phép/quyền truy cập) >< `revoke / suspend` (thu hồi vĩnh viễn / đình chỉ tạm thời).",
      "Từ 'deadlock' trong TOEIC Part 7 thường nằm ở các bài báo kinh tế nói về thương lượng hợp đồng lao động hoặc sáp nhập công ty bị đình trệ — đồng nghĩa trực tiếp với `stalemate` hoặc `impasse`!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "remains idempotent",
          "ensures that",
          "Passing a unique request key",
          "across network retries.",
          "our payment endpoint"
        ],
        answer: "Passing a unique request key ensures that our payment endpoint remains idempotent across network retries.",
        vi: "Việc truyền một khóa yêu cầu duy nhất đảm bảo rằng endpoint thanh toán của chúng ta giữ được tính lũy đẳng qua các lần thử gửi lại do lỗi mạng."
      },
      fillBlank: {
        sentence: "IT security will immediately _____ your VPN credentials if multi-factor authentication is disabled.",
        answer: "revoke",
        accepted: ["revoke", "suspend"],
        hint: "Động từ bắt đầu bằng chữ 'r' mang nghĩa thu hồi / hủy bỏ hiệu lực quyền truy cập hoặc giấy phép",
        explain: "'Revoke (credentials / access / a license)' là collocation chuẩn xác cả trong CNTT lẫn tiếng Anh thương mại TOEIC khi nói về việc thu hồi quyền hạn đã cấp."
      }
    },
    quiz: [
      {
        q: "Trong buổi phỏng vấn Senior Java tại một ngân hàng số, giám khảo hỏi: 'What happens if a mobile client times out and sends the exact same POST /transfers request twice?' Khái niệm nào bạn PHẢI đưa ra đầu tiên để giải quyết bài toán này?",
        options: [
          "Tăng kích thước JSON payload lên gấp đôi.",
          "Thiết kế API đạt tính Idempotent thông qua `Idempotency-Key` lưu kèm ràng buộc duy nhất ở tầng xử lý giao dịch.",
          "Tắt toàn bộ encryption để server chạy nhanh hơn.",
          "Tạo ra một database deadlock chủ động để chặn khách hàng."
        ],
        answer: 1,
        explain: "Đáp án B là câu trả lời chuẩn kiến trúc tài chính quốc tế: tính lũy đẳng (idempotency) thông qua khóa `Idempotency-Key` đảm bảo các request bị gửi lặp do timeout mạng không bao giờ trừ tiền khách hàng lần thứ hai. Các phương án A, C, D đều sai hoàn toàn."
      },
      {
        q: "[TOEIC Part 5] Small agricultural exporters remain particularly _____ to sudden disruptions in refrigerated maritime shipping.",
        options: [
          "vulnerable",
          "vulnerably",
          "vulnerability",
          "revoked"
        ],
        answer: 0,
        explain: "Đáp án A ('vulnerable' — tính từ) đứng sau động từ nối 'remain' + trạng từ nhấn mạnh 'particularly' và đi liền với giới từ 'to' tạo thành cấu trúc chuẩn 'remain vulnerable to' (vẫn dễ bị tổn thương trước...). B là trạng từ, C là danh từ, D sai nghĩa ('bị thu hồi')."
      },
      {
        q: "Phát biểu nào sau đây phân biệt ĐÚNG giữa 'Latency' và 'Throughput'?",
        options: [
          "Latency càng cao hệ thống phản hồi càng nhanh; Throughput càng thấp hệ thống càng mạnh.",
          "Latency là thời gian hoàn tất một yêu cầu đơn lẻ (càng thấp càng tốt); Throughput là tổng số yêu cầu xử lý được trong một đơn vị thời gian (càng cao càng tốt).",
          "Latency là mã hóa dữ liệu, còn Throughput là làm sạch SQL Injection.",
          "Hai từ đều chỉ việc thu hồi giấy phép phần mềm."
        ],
        answer: 1,
        explain: "Đáp án B định nghĩa chuẩn xác bản chất kỹ thuật: low latency = phản hồi nhanh cho từng request; high throughput = lưu lượng xử lý lớn trên mỗi giây. Phương án A bị ngược dấu, C và D sai hoàn toàn khái niệm."
      }
    ]
  },

  V3_6: {
    duration: "45 phút",
    toeicTarget: "Giao tiếp Kỹ sư Phần mềm Quốc tế & TOEIC 650–750+",
    javaContext: "Đọc hiểu nhanh Javadoc / Spring Official Docs / AWS Whitepapers, Viết ADR / Tech Spec & TOEIC Part 7",
    teacherIntro: "Anh em có để ý sự khác biệt lớn nhất giữa một Junior mất 3 tiếng mò mẫm trên các bài blog tiếng Việt cũ kỹ với một Senior chỉ mất 10 phút đọc thẳng tài liệu gốc của Oracle JDK 21, Spring Boot 3 hay Kafka RFC không? Tài liệu kỹ thuật chính thống trên toàn thế giới được viết bằng một 'bộ từ khóa tín hiệu' (signal vocabulary) lặp đi lặp lại: họ báo điều kiện tiên quyết bằng prerequisite, cảnh báo bẫy ngầm bằng caveat, giải thích cơ chế bên dưới bằng under the hood, và tóm tắt nguyên tắc kinh nghiệm bằng rule of thumb! Làm chủ 10 từ/cụm từ của bài V3.6 này không chỉ giúp tốc độ đọc hiểu tài liệu tiếng Anh của anh em tăng gấp đôi, mà còn giúp văn phong viết Architecture Decision Record (ADR) và điểm đọc hiểu TOEIC Part 7 của anh em vọt lên tầm cao mới!",
    javaAnalogy: {
      title: "Đọc Technical Docs giống như Đọc Hợp Đồng Javadoc Của `ConcurrentHashMap`",
      body: "Khi mở Javadoc của một class lõi trong JDK, tác giả luôn cấu trúc thông tin theo đúng 4 tầng: (1) Bạn cần chuẩn bị gì trước khi dùng (`prerequisite`) và cái gì có sẵn ngay không cần cấu hình thêm (`out-of-the-box`); (2) Bên dưới lớp vỏ API nó hoạt động ra sao (`under the hood` — ví dụ dùng CAS và synchronized trên từng bin để đảm bảo `thread-safe`); (3) Hai tùy chọn nào không thể bật cùng lúc (`mutually exclusive`), đánh đổi hiệu năng gì (`trade-off`) và lưu ý cảnh báo quan trọng nào cần dè chừng (`caveat`); (4) Cuối cùng là lời khuyên súc tích (`concise`, tránh `verbose`) theo quy tắc ngón tay cái (`rule of thumb`)!"
    },
    objectives: [
      "Bắt trúng ý chính cực nhanh khi đọc tài liệu gốc Spring, Java, AWS nhờ nhận diện các từ tín hiệu: prerequisite, caveat, out-of-the-box, under the hood, rule of thumb.",
      "Viết tài liệu đặc tả kỹ thuật (Technical Spec / ADR) súc tích, chặt chẽ với concise (tránh verbose), trade-off, mutually exclusive và thread-safe.",
      "Chinh phục các câu hỏi suy luận & điều kiện ràng buộc khó nhất trong TOEIC Part 5 và Part 7 (prerequisite for, mutually exclusive, concise summary)."
    ],
    formulaCards: [
      {
        label: "Khung Cảnh Báo Lưu Ý Quan Trọng Trong Tài Liệu Thiết Kế (Important Caveat)",
        formula: "Spring Boot supports this out-of-the-box, with one important caveat: [condition / limitation to watch out for].",
        note: "Cấu trúc sang trọng bậc nhất khi viết Tech Spec hoặc trả lời câu hỏi sâu trong phỏng vấn!"
      },
      {
        label: "Khung Giải Thích Cơ Chế Hoạt Động Bên Dưới (Under the Hood)",
        formula: "Under the hood, `@Transactional` uses dynamic proxies, so self-invocation within the same class bypasses the transaction.",
        note: "Mở đầu bằng 'Under the hood,...' lập tức cho người nghe thấy bạn hiểu sâu bản chất framework chứ không chỉ học vẹt annotation."
      },
      {
        label: "Khung Đưa Ra Quy Tắc Kinh Nghiệm Thực Chiến (Rule of Thumb)",
        formula: "As a general rule of thumb, keep DTOs immutable and thread-safe when sharing data across virtual threads.",
        note: "'As a rule of thumb' giúp lời khuyên của bạn nghe điềm đạm, từng trải mà không giáo điều cứng nhắc."
      },
      {
        label: "Khung Ràng Buộc Hai Cấu Hình Loại Trừ Nhau (Mutually Exclusive)",
        formula: "Note that options `A` and `B` are mutually exclusive; enabling both will fail startup validation.",
        note: "Viết câu này trong Javadoc hay README giúp đồng nghiệp không bao giờ truyền sai tham số API."
      }
    ],
    sections: [
      {
        heading: "1. Tín Hiệu Đọc Nhanh Tài Liệu Gốc: Prerequisite, Out-of-the-Box & Caveat",
        paragraphs: [
          "Khi mở bất kỳ trang hướng dẫn chính thức nào của AWS, Kubernetes hay Spring Reference, mắt của một kỹ sư lão luyện luôn quét vào 3 điểm neo trước tiên: mục 'Prerequisites' ở đầu trang (điều kiện tiên quyết bắt buộc phải có trước — ví dụ JDK 21+, Docker Engine đang chạy), những tính năng được hỗ trợ sẵn ngay khi cài đặt không cần viết thêm plugin ('out-of-the-box'), và hộp cảnh báo 'Caveats' ở cuối mục!",
          "Rất nhiều người bỏ qua từ 'caveat' (/ˈkæv.i.ɑːt/) vì tưởng nó là từ hiếm, nhưng trong tài liệu kỹ thuật tiếng Anh đây là từ QUAN TRỌNG NHẤT! Nó mang nghĩa 'lưu ý cảnh báo / điều kiện ngoại lệ cần dè chừng' — chính là nơi tác giả tiết lộ các cạm bẫy ngầm (ví dụ: `@Async` trả về `void` sẽ không bắt được exception qua luồng gọi nếu thiếu `AsyncUncaughtExceptionHandler`)."
        ],
        bullets: [
          "Giới từ đi kèm 'prerequisite' trong cả tài liệu IT lẫn đề thi TOEIC luôn là `prerequisite FOR / TO something`.",
          "Khi viết tính từ đứng trước danh từ thì có dấu gạch nối: `out-of-the-box metrics`; khi đứng cuối câu bổ nghĩa cho động từ thì có thể viết rời: `works out of the box`.",
          "Hễ thấy tiêu đề `Caveats & Limitations` trong tài liệu thư viện mới, hãy đọc kỹ từng chữ trước khi quyết định đưa thư viện đó lên Production!"
        ]
      },
      {
        heading: "2. Giải Phẫu Bản Chất Kiến Trúc: Under the Hood, Thread-Safe, Trade-Off & Rule of Thumb",
        paragraphs: [
          "Để bước từ mức 'người thợ dùng framework' lên 'kiến trúc sư làm chủ công nghệ', bạn phải trả lời được câu hỏi: 'How does it work under the hood?' (Bên dưới nắp ca-pô máy, thực chất nó vận hành thế nào?). Ví dụ, `String` nối chuỗi bằng dấu `+` trong Java 9+ bên dưới nắp máy (`under the hood`) sử dụng `invokedynamic` với `StringConcatFactory` chứ không chỉ đơn thuần tạo `StringBuilder` như thời Java 8.",
          "Khi thiết kế các thành phần dùng chung giữa nhiều luồng (Singleton Spring Beans), câu hỏi bắt buộc là class đó có an toàn đa luồng (`thread-safe`) hay không. Và vì trong kỹ thuật phần mềm không có viên đạn bạc nào hoàn hảo tuyệt đối, mọi quyết định chọn công nghệ đều là sự cân nhắc đánh đổi (`trade-off`) dựa trên các nguyên tắc kinh nghiệm thực tế (`rule of thumb`)."
        ],
        bullets: [
          "Spring `@Service` và `@Repository` mặc định là Singleton nên KHÔNG tự động `thread-safe` nếu bạn khai báo biến trạng thái có thể thay đổi (mutable instance field) bên trong!",
          "Cấu trúc kinh điển khi thảo luận thiết kế: `There is an inherent trade-off between memory footprint and lookup speed.`",
          "Dùng `rule of thumb` cho các công thức ước lượng thực nghiệm (ví dụ kích thước HikariCP pool ban đầu khoảng `(CPU cores * 2) + effective spindle count`)."
        ]
      },
      {
        heading: "3. Văn Phong Viết Spec Đẳng Cấp & Điểm Cao TOEIC: Concise vs Verbose & Mutually Exclusive",
        paragraphs: [
          "Khi viết Pull Request description, Architecture Decision Record (ADR) hay email báo cáo cho CTO nước ngoài, kẻ thù số một là sự dài dòng rườm rà ('verbose' — giống hệt cờ `--verbose` in tràn màn hình log!). Phong cách được trân trọng nhất ở môi trường quốc tế là súc tích, cô đọng, ít chữ nhưng đủ ý ('concise').",
          "Trong đề thi TOEIC 650–750+, cả 4 từ `prerequisite`, `concise`, `mutually exclusive` và `trade-off` đều là từ vựng phân loại thí sinh điểm cao! Đặc biệt trong tin tuyển dụng Part 7, câu 'A bachelor's degree in computer science is a prerequisite for this role' thường được paraphrase ở đáp án thành 'Applicants are required to hold a university degree'."
        ],
        bullets: [
          "Cặp tính từ đối lập hoàn hảo cần học thuộc lòng cùng nhau: `concise` (ngắn gọn, súc tích — khen ngợi) >< `verbose` (dài dòng, thừa chữ — chê hoặc chỉ chế độ in log chi tiết).",
          "`Mutually exclusive` nghĩa là 'loại trừ lẫn nhau' (chọn A thì không thể có B, giống hệt `sealed interface` hoặc radio button).",
          "Trong TOEIC Part 5, cụm trạng từ + tính từ `mutually exclusive` hoặc `mutually beneficial` (đôi bên cùng có lợi) là câu hỏi từ loại trạng từ 'mutually' cực kỳ phổ biến!"
        ]
      }
    ],
    vocabItems: [
      {
        word: "prerequisite",
        pos: "n / adj",
        ipa: "/ˌpriːˈrek.wə.zɪt/",
        meaning: "điều kiện tiên quyết (thứ bắt buộc phải hoàn thành hoặc trang bị trước khi có thể bắt đầu bước tiếp theo)",
        synonyms: "precondition, requirement, must-have",
        collocations: ["a prerequisite for admission", "install the prerequisites", "essential prerequisite"],
        mnemonic: "PRE (trước) + REQUISITE (yêu cầu bắt buộc, cùng gốc require) => Điều bắt buộc phải có TRƯỚC khi cài đặt hay ứng tuyển!",
        toeicEx: "Three years of supervisory experience is a **prerequisite** for applying to the regional manager position.",
        toeicVi: "Ba năm kinh nghiệm giám sát là điều kiện tiên quyết để ứng tuyển vào vị trí quản lý khu vực.",
        javaEx: "Having JDK 17 or newer installed is a strict **prerequisite** for upgrading to Spring Boot 3.",
        javaVi: "Việc cài đặt sẵn JDK 17 trở lên là điều kiện tiên quyết bắt buộc để nâng cấp lên Spring Boot 3."
      },
      {
        word: "caveat",
        pos: "n",
        ipa: "/ˈkæv.i.ɑːt/",
        meaning: "lời cảnh báo, lưu ý quan trọng về giới hạn hoặc điều kiện ngoại lệ cần hết sức thận trọng trước khi áp dụng",
        synonyms: "warning, caution, qualification, catch",
        collocations: ["one important caveat", "with the caveat that...", "performance caveats"],
        mnemonic: "Gốc Latinh 'caveat emptor' (người mua hãy coi chừng!) => Cái biển cảnh báo màu vàng trong tài liệu nhắc bạn 'Coi chừng sập bẫy chỗ này!'",
        toeicEx: "The analyst recommended investing in the startup, with the **caveat** that short-term profits may fluctuate.",
        toeicVi: "Chuyên viên phân tích khuyến nghị đầu tư vào công ty khởi nghiệp đó, kèm lưu ý cảnh báo rằng lợi nhuận ngắn hạn có thể biến động.",
        javaEx: "Parallel streams can speed up CPU-bound tasks, with a major **caveat**: never run blocking I/O inside the shared `ForkJoinPool`.",
        javaVi: "Parallel streams có thể tăng tốc các tác vụ nặng về CPU, kèm một lưu ý sống còn: tuyệt đối không chạy I/O gây nghẽn bên trong `ForkJoinPool` dùng chung."
      },
      {
        word: "trade-off",
        pos: "n",
        ipa: "/ˈtreɪd.ɔːf/",
        meaning: "sự đánh đổi (chấp nhận hy sinh một phần lợi ích ở khía cạnh A để đổi lấy ưu thế vượt trội hơn ở khía cạnh B)",
        synonyms: "compromise, balance, give-and-take",
        collocations: ["weigh the trade-offs", "acceptable trade-off between X and Y", "architectural trade-offs"],
        mnemonic: "TRADE (đem trao đổi) + OFF (bỏ đi một thứ) => Đổi thêm một chút RAM để lấy tốc độ truy vấn O(1), không có gì là miễn phí!",
        toeicEx: "Consumers often face a **trade-off** between lower monthly insurance premiums and higher deductibles.",
        toeicVi: "Người tiêu dùng thường đứng trước sự đánh đổi giữa mức phí bảo hiểm hàng tháng thấp hơn và mức khấu trừ tự trả cao hơn.",
        javaEx: "Adding database indexes speeds up `SELECT` queries, and the **trade-off** is slightly slower `INSERT` and `UPDATE` operations.",
        javaVi: "Việc thêm chỉ mục cơ sở dữ liệu giúp tăng tốc truy vấn `SELECT`, và sự đánh đổi là các thao tác `INSERT` và `UPDATE` sẽ chậm đi đôi chút."
      },
      {
        word: "out-of-the-box",
        pos: "adj / adv (out of the box)",
        ipa: "/ˌaʊt.əv.ðəˈbɑːks/",
        meaning: "có sẵn dùng được ngay khi vừa cài đặt mà không cần viết code tùy biến hay cấu hình phức tạp (khác với 'think outside the box'!)",
        synonyms: "built-in, ready-made, preconfigured, default",
        collocations: ["out-of-the-box support", "works out of the box", "out-of-the-box observability"],
        mnemonic: "Mở HỘP (out of the box) lấy điện thoại ra bấm chạy ngon lành ngay lập tức, chẳng phải độ chế thêm linh kiện nào!",
        toeicEx: "The enterprise accounting suite provides **out-of-the-box** tax templates for more than forty countries.",
        toeicVi: "Bộ phần mềm kế toán doanh nghiệp cung cấp sẵn ngay các biểu mẫu thuế cho hơn bốn mươi quốc gia.",
        javaEx: "Spring Boot Actuator offers Prometheus metrics and health probes **out of the box** with minimal setup.",
        javaVi: "Spring Boot Actuator cung cấp sẵn các chỉ số Prometheus và đầu dò sức khỏe dùng được ngay với thiết lập tối thiểu."
      },
      {
        word: "under the hood",
        pos: "idiom / adv phrase",
        ipa: "/ˌʌn.dɚ ðə ˈhʊd/",
        meaning: "bên dưới lớp vỏ bề mặt, cơ chế vận hành thực sự ở tầng sâu bên trong của phần mềm/hệ thống",
        synonyms: "internally, behind the scenes, at the low level",
        collocations: ["how it works under the hood", "look under the hood of the JVM", "changes under the hood"],
        mnemonic: "HOOD là nắp ca-pô xe hơi => Mở nắp ca-pô lên để xem khối động cơ máy móc thực sự quay thế nào bên dưới lớp sơn bóng bẩy!",
        toeicEx: "While the website's visual design looks unchanged, major database upgrades were completed **under the hood**.",
        toeicVi: "Mặc dù thiết kế giao diện của trang web trông không đổi, những nâng cấp cơ sở dữ liệu lớn đã được hoàn tất ở tầng bên dưới.",
        javaEx: "**Under the hood**, Java's `HashSet` is actually backed by a `HashMap` instance where values point to a dummy object.",
        javaVi: "Ở tầng cài đặt bên dưới, `HashSet` trong Java thực chất được chống lưng bởi một đối tượng `HashMap` mà các giá trị trỏ tới một object giả."
      },
      {
        word: "rule of thumb",
        pos: "n phrase / idiom",
        ipa: "/ˌruːl əv ˈθʌm/",
        meaning: "quy tắc ngón tay cái, nguyên tắc kinh nghiệm thực tế giúp ước lượng hoặc ra quyết định nhanh tương đối chính xác",
        synonyms: "practical guideline, general principle, heuristic",
        collocations: ["as a general rule of thumb", "good rule of thumb for sizing", "follow a simple rule of thumb"],
        mnemonic: "Ngày xưa thợ mộc chưa có thước sắt thì ướm đốt NGÓN TAY CÁI (thumb ~ 1 inch) để đo nhanh => Mẹo kinh nghiệm thực chiến cực nhạy!",
        toeicEx: "As a **rule of thumb**, financial planners advise keeping three to six months of living expenses in reserve.",
        toeicVi: "Theo nguyên tắc kinh nghiệm chung, các chuyên gia hoạch định tài chính khuyên nên dự trữ từ ba đến sáu tháng chi phí sinh hoạt.",
        javaEx: "A solid **rule of thumb** in JPA is to default all `@ManyToOne` associations to `FetchType.LAZY` to prevent N+1 storms.",
        javaVi: "Một nguyên tắc kinh nghiệm vững chắc trong JPA là đặt mặc định mọi quan hệ `@ManyToOne` về `FetchType.LAZY` để ngăn bão truy vấn N+1."
      },
      {
        word: "mutually exclusive",
        pos: "adj phrase",
        ipa: "/ˈmjuː.tʃu.ə.li ɪkˈskluː.sɪv/",
        meaning: "loại trừ lẫn nhau (hai trạng thái, phương án hoặc tham số không thể cùng đúng hoặc cùng được kích hoạt tại một thời điểm)",
        synonyms: "incompatible together, either-or, non-overlapping",
        collocations: ["mutually exclusive parameters", "not mutually exclusive", "mutually exclusive lock (mutex)"],
        mnemonic: "MUTUALLY (lẫn nhau) + EXCLUSIVE (loại trừ ra ngoài) => Chính là gốc của từ `Mutex` trong hệ điều hành: hai luồng không thể cùng vào vùng găng!",
        toeicEx: "Rapid business growth and environmental sustainability do not have to be **mutually exclusive** goals.",
        toeicVi: "Tăng trưởng kinh doanh nhanh chóng và phát triển bền vững về môi trường không nhất thiết phải là hai mục tiêu loại trừ lẫn nhau.",
        javaEx: "In our search endpoint, the `cursor` and `pageNumber` query parameters are **mutually exclusive**.",
        javaVi: "Trong endpoint tìm kiếm của chúng tôi, hai tham số truy vấn `cursor` và `pageNumber` loại trừ lẫn nhau (chỉ được truyền một trong hai)."
      },
      {
        word: "thread-safe",
        pos: "adj",
        ipa: "/ˈθred.seɪf/",
        meaning: "an toàn đa luồng (đảm bảo tính đúng đắn dữ liệu ngay cả khi nhiều luồng truy cập và thao tác đồng thời mà không cần đồng bộ ngoài)",
        synonyms: "concurrency-safe, synchronized, reentrant",
        collocations: ["thread-safe implementation", "not thread-safe by default", "immutable and thread-safe"],
        mnemonic: "THREAD (luồng thực thi) + SAFE (an toàn) => `DateTimeFormatter` (Java 8+) thì `thread-safe`, còn `SimpleDateFormat` đời cũ dùng chung là nổ bug ngay!",
        toeicEx: "Engineers verified that the real-time inventory counter used a **concurrency-safe** (**thread-safe**) design.",
        toeicVi: "Các kỹ sư đã xác minh rằng bộ đếm tồn kho thời gian thực sử dụng thiết kế an toàn khi truy cập đồng thời.",
        javaEx: "Unlike legacy `SimpleDateFormat`, `java.time.format.DateTimeFormatter` is immutable and completely **thread-safe**.",
        javaVi: "Khác với `SimpleDateFormat` đời cũ, `java.time.format.DateTimeFormatter` là bất biến và hoàn toàn an toàn đa luồng."
      },
      {
        word: "verbose",
        pos: "adj",
        ipa: "/vɚˈboʊs/",
        meaning: "dài dòng, rườm rà nhiều chữ hơn mức cần thiết (code/văn bản); ở chế độ in thông tin chi tiết tối đa (logging/CLI)",
        synonyms: "wordy, long-winded, detailed (logs)",
        collocations: ["overly verbose syntax", "enable verbose logging", "verbose error report"],
        mnemonic: "Gốc VERB (lời nói/từ ngữ) + OSE (đầy ắp) => Nhớ cờ `mvn -X` hoặc `curl --verbose` tuôn ra hàng trăm dòng chữ kín đặc màn hình!",
        toeicEx: "The editor trimmed several **verbose** paragraphs to make the press release easier for journalists to scan.",
        toeicVi: "Biên tập viên đã cắt gọt một số đoạn văn dài dòng để giúp các nhà báo đọc lướt thông cáo báo chí dễ dàng hơn.",
        javaEx: "Anonymous inner classes in Java 7 were notoriously **verbose** before lambda expressions arrived in Java 8.",
        javaVi: "Các lớp nội ẩn danh ở thời Java 7 khét tiếng là dài dòng rườm rà trước khi biểu thức lambda xuất hiện trong Java 8."
      },
      {
        word: "concise",
        pos: "adj",
        ipa: "/kənˈsaɪs/",
        meaning: "ngắn gọn, súc tích, cô đọng (truyền tải trọn vẹn thông tin sắc bén bằng số lượng từ/dòng code ít nhất)",
        synonyms: "succinct, brief and clear, compact, pithy",
        collocations: ["write a concise summary", "concise and readable code", "keep your standup concise"],
        mnemonic: "CON + CISE (cắt gọt sắc lẻm, cùng gốc với scissors cái kéo và precise chính xác) => Cắt bỏ hết mỡ thừa, chỉ giữ lại phần tinh túy sắc nét!",
        toeicEx: "Applicants should submit a **concise** one-page cover letter highlighting their most relevant achievements.",
        toeicVi: "Ứng viên nên nộp một bức thư ứng tuyển súc tích dài một trang nêu bật những thành tựu liên quan nhất của mình.",
        javaEx: "Stream pipelines and `record` destructuring let us express complex data transformations in **concise**, expressive Java.",
        javaVi: "Đường ống Stream và phân rã `record` cho phép chúng ta diễn đạt các phép biến đổi dữ liệu phức tạp bằng mã Java súc tích, giàu sức biểu đạt."
      }
    ],
    examples: [
      {
        tag: "System Design",
        en: "Every architectural decision involves **trade-offs**; our ADR documents why we favored strong consistency over lower latency.",
        vi: "Mọi quyết định kiến trúc đều bao hàm những sự đánh đổi; tài liệu ADR của chúng tôi ghi rõ lý do ưu tiên tính nhất quán mạnh hơn là độ trễ thấp.",
        note: "Câu tuyên ngôn đĩnh đạc mở đầu phần thảo luận thiết kế trong vòng phỏng vấn Principal/Senior."
      },
      {
        tag: "Code Review",
        en: "`ArrayList` is not **thread-safe**; sharing it across parallel stream workers without synchronization causes data corruption.",
        vi: "`ArrayList` không an toàn đa luồng; việc chia sẻ nó giữa các luồng worker của parallel stream mà không đồng bộ sẽ làm hỏng dữ liệu.",
        note: "Lỗi kinh điển số 1 khi lập trình viên Java lạm dụng `.parallelStream().forEach(list::add)`!"
      },
      {
        tag: "Code Review",
        en: "Could we keep the PR description more **concise** by moving the 300-line **verbose** stack trace into a collapsible block?",
        vi: "Mình giữ phần mô tả PR súc tích hơn bằng cách gom 300 dòng stack trace dài dòng vào khối thu gọn `<details>` được không?",
        note: "Góp ý thực tế giúp trang Pull Request trên GitHub cực kỳ sạch đẹp."
      },
      {
        tag: "Global Interview",
        en: "**Under the hood**, Spring's `@Transactional` relies on `ThreadLocal` to bind the JDBC connection to the current thread.",
        vi: "Ở cơ chế bên dưới, `@Transactional` của Spring dựa vào `ThreadLocal` để gắn kết nối JDBC vào luồng thực thi hiện tại.",
        note: "Giải thích ngay lập tức tại sao gọi sang thread mới thì mất transaction của luồng cha!"
      },
      {
        tag: "System Design",
        en: "Keycloak gives us OIDC and SAML federation **out of the box**, saving months of custom security engineering.",
        vi: "Keycloak cung cấp sẵn khả năng liên kết OIDC và SAML dùng được ngay, tiết kiệm hàng tháng trời tự viết tính năng bảo mật.",
        note: "Cách lập luận thuyết phục sếp chọn giải pháp có sẵn thay vì tự phát minh lại bánh xe."
      },
      {
        tag: "Daily Standup",
        en: "Completing the Flyway schema migration on UAT is a **prerequisite** before QA can start end-to-end testing this afternoon.",
        vi: "Hoàn tất nâng cấp schema Flyway trên môi trường UAT là điều kiện tiên quyết trước khi đội QA có thể bắt đầu kiểm thử đầu-cuối vào chiều nay.",
        note: "Làm rõ thứ tự phụ thuộc công việc giữa Dev và QA."
      },
      {
        tag: "System Design",
        en: "One crucial **caveat** with distributed Redis locks is clock drift across nodes if lock expiration happens before GC finishes.",
        vi: "Một lưu ý cảnh báo sống còn với khóa phân tán trên Redis là hiện tượng lệch đồng hồ hoặc hết hạn khóa trong lúc JVM đang tạm dừng dọn rác.",
        note: "Kiến thức chiều sâu về hệ thống phân tán khiến hội đồng phỏng vấn nể phục."
      },
      {
        tag: "Global Interview",
        en: "High developer velocity and rigorous automated testing are not **mutually exclusive** — in fact, good tests accelerate delivery.",
        vi: "Tốc độ phát triển nhanh và kiểm thử tự động nghiêm ngặt không hề loại trừ lẫn nhau — thực tế, bộ test tốt còn giúp tăng tốc bàn giao.",
        note: "Phản biện sắc sảo khi gặp quan điểm sai lầm rằng viết unit test làm chậm dự án."
      },
      {
        tag: "TOEIC Part 7",
        en: "Completion of the online cybersecurity module is a mandatory **prerequisite** for receiving remote VPN access.",
        vi: "Việc hoàn thành học phần an ninh mạng trực tuyến là điều kiện tiên quyết bắt buộc để được cấp quyền truy cập VPN từ xa.",
        note: "Câu quy định nội bộ cực kỳ quen thuộc trong bài đọc đơn TOEIC Part 7."
      },
      {
        tag: "TOEIC Part 7",
        en: "Ms. Tanaka was praised by the board for delivering a clear, **concise** overview of the third-quarter expansion strategy.",
        vi: "Bà Tanaka đã được hội đồng quản trị khen ngợi vì trình bày bản tổng quan rõ ràng, súc tích về chiến lược mở rộng quý ba.",
        note: "Cặp tính từ 'clear and concise' xuất hiện liên tục trong đề thi TOEIC từ Part 3 đến Part 7."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Spring Security supports OAuth2 outside the box!",
          fix: "Spring Security supports OAuth2 out of the box!",
          why: "Cực kỳ dễ nhầm hai thành ngữ! 'Think outside the box' là tư duy sáng tạo đột phá, còn 'có sẵn dùng được ngay' bắt buộc phải là 'out of the box'!"
        },
        {
          bug: "Inside the stomach of JVM, G1GC divides heap into regions.",
          fix: "Under the hood, G1GC divides the JVM heap into equal-sized regions.",
          why: "Dịch từ 'bên trong bụng máy' nghe rất buồn cười; cụm thành ngữ chuẩn mà mọi sách Java quốc tế đều dùng là 'Under the hood'."
        },
        {
          bug: "Java code is too long words, please write short.",
          fix: "This implementation is overly verbose; let's refactor it to be more concise.",
          why: "'Too long words / write short' là tiếng Anh bồi; cặp từ học thuật & chuyên môn chuẩn xác là 'verbose' (rườm rà) và 'concise' (súc tích)."
        },
        {
          bug: "Passing exam A is a prerequisite OF joining class B.",
          fix: "Passing exam A is a prerequisite for (hoặc to) joining class B.",
          why: "Danh từ 'prerequisite' đi kèm giới từ 'for' hoặc 'to', không dùng 'of' trong cấu trúc chỉ mục đích tiếp theo."
        }
      ]
    },
    toeicTips: [
      "Phân biệt 2 thành ngữ dễ lộn nhào nhất phòng thi: `out-of-the-box` (tính năng có sẵn dùng ngay không cần chỉnh sửa) vs `outside the box` (tư duy sáng tạo vượt khuôn mẫu — đi với động từ `think`).",
      "Trong TOEIC Part 5, nếu trước tính từ `exclusive` hoặc `beneficial` có chỗ trống cần trạng từ, hãy chọn ngay `mutually` (`mutually exclusive` = loại trừ nhau; `mutually beneficial` = đôi bên cùng có lợi).",
      "Cặp từ đồng nghĩa ăn điểm TOEIC Part 7: `prerequisite` = `prior requirement / precondition`; `concise` = `brief and to the point`; `caveat` = `warning / condition`."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "with one important caveat",
          "works out of the box",
          "regarding lazy loading.",
          "Spring Data JPA",
          "for standard CRUD,"
        ],
        answer: "Spring Data JPA works out of the box for standard CRUD, with one important caveat regarding lazy loading.",
        vi: "Spring Data JPA hoạt động trơn tru có sẵn ngay cho các tác vụ CRUD tiêu chuẩn, kèm một lưu ý quan trọng liên quan đến cơ chế nạp trễ (lazy loading)."
      },
      fillBlank: {
        sentence: "Unlike `SimpleDateFormat`, Java's `DateTimeFormatter` is immutable and completely _____ across multiple concurrent requests.",
        answer: "thread-safe",
        accepted: ["thread-safe", "thread safe"],
        hint: "Tính từ ghép chỉ tính 'an toàn đa luồng' khi nhiều thread dùng chung một instance",
        explain: "'Thread-safe' là tính chất sống còn của các class được chia sẻ giữa nhiều luồng đồng thời (như Singleton Bean trong Spring hoặc hằng số static)."
      }
    },
    quiz: [
      {
        q: "Khi đọc tài liệu chính thức của một thư viện Java mới, bạn thấy mục mang tiêu đề 'Caveats'. Bạn nên hiểu mục này nói về điều gì?",
        options: [
          "Danh sách các nhà tài trợ tài chính của thư viện.",
          "Những cảnh báo, giới hạn kỹ thuật hoặc trường hợp ngoại lệ cần hết sức lưu ý kẻo gặp lỗi ngầm khi sử dụng.",
          "Hướng dẫn cài đặt font chữ đẹp cho trình soạn thảo.",
          "Lời chào tạm biệt của tác giả khi ngừng phát triển thư viện."
        ],
        answer: 1,
        explain: "Đáp án B chính xác: 'Caveats' trong tài liệu kỹ thuật là nơi ghi chú các cảnh báo quan trọng, giới hạn thiết kế hoặc điều kiện đặc biệt dễ gây hiểu lầm nếu lập trình viên chỉ đọc lướt ví dụ cơ bản."
      },
      {
        q: "[TOEIC Part 5] The two promotional discount codes are _____ exclusive and cannot be applied to the same online order.",
        options: [
          "mutual",
          "mutually",
          "mutuality",
          "mutualize"
        ],
        answer: 1,
        explain: "Đáp án B ('mutually' — trạng từ) đứng trước bổ nghĩa cho tính từ 'exclusive', tạo thành cụm cố định 'mutually exclusive' (loại trừ lẫn nhau — không thể áp dụng cả hai mã giảm giá trên cùng một đơn hàng). A là tính từ, C là danh từ, D là động từ."
      },
      {
        q: "Bạn muốn khen Pull Request và tài liệu ADR của đồng nghiệp viết rất ngắn gọn, cô đọng, đi thẳng vào trọng tâm không thừa chữ nào. Từ nào phù hợp nhất?",
        options: [
          "Verbose",
          "Concise",
          "Intermittent",
          "Redundant"
        ],
        answer: 1,
        explain: "Đáp án B ('Concise' — ngắn gọn, súc tích, cô đọng) là lời khen tích cực chuẩn xác nhất. A ('Verbose' — dài dòng rườm rà) và D ('Redundant' — dư thừa lặp lại) mang nghĩa ngược lại; C ('Intermittent' — chập chờn) không dùng cho văn phong."
      }
    ]
  }
});
