/* JavaEng 600+ Academy — Hệ Thống Đề Thi Thử TOEIC 600–750+ & Sát Hạch Senior Java
 * Gồm 5 bộ đề chuẩn hóa (Tổng cộng 110 câu hỏi có Chữa đề 4 bước chuyên sâu & Liên kết 1-click về Bài giảng):
 * 1. PLACEMENT_01  — Đề Kiểm Tra Xếp Lớp Đầu Vào (20 câu • 15 phút • Định vị 250 -> 750+)
 * 2. TOEIC_MOCK_01 — Đề Thi Thử TOEIC 600+ Chuẩn ETS Số 01 (25 câu • 25 phút • Đủ Listening + Part 5, 6, 7)
 * 3. TOEIC_MOCK_02 — Đề Thi Thử TOEIC 600+ Chuẩn ETS Số 02 (25 câu • 25 phút • Đủ Listening + Part 5, 6, 7)
 * 4. JAVA_ENG_01   — Đề Sát Hạch Tiếng Anh Thực Chiến Senior Java (20 câu • 20 phút • Standup, PR, Incident, RFC)
 * 5. PART5_BLITZ   — Đề Phản Xạ Tốc Độ TOEIC Part 5 — 20 Giây/Câu (20 câu • 8 phút • Luyện mẹo 5s bắt đáp án)
 */

(function () {
  /* ---------------- SHARED PASSAGES CHO ĐỀ PLACEMENT & MOCK 01 ---------------- */
  const PLACEMENT_P7_PASSAGE = [
    "MEMO — Architecture Review Board (ARB)",
    "From: Helena Vance, VP of Engineering",
    "To: Backend Platform Team",
    "Date: October 14",
    "Subject: Order History Caching Proposal (ADR-108)",
    "",
    "Thank you for submitting ADR-108. Introducing a Redis read-through cache in front of our PostgreSQL cluster will cut average query latency from 420ms to under 35ms during flash-sale campaigns.",
    "However, caching mutable order statuses introduces the risk of serving stale data if an update event fails to invalidate the cache key. Therefore, attendance at Thursday's design review is mandatory for all Senior Java Engineers so we can finalize the TTL and fallback strategy prior to Sprint 22."
  ].join("\n");

  const MOCK1_PART6_PASSAGE = [
    "To: All FinCore Employees <staff@fincore-global.com>",
    "From: IT Infrastructure Operations <it-ops@fincore-global.com>",
    "Date: March 18",
    "Subject: Scheduled Core Network & VPN Security Upgrade",
    "",
    "Please be advised that our corporate VPN gateway and internal artifact repository [17] ___ essential security upgrades this Saturday, March 21, from 11:00 P.M. to 3:00 A.M. UTC.",
    "",
    "During this four-hour maintenance window, remote access to staging servers and Jenkins CI pipelines will be temporarily unavailable. [18] ___, engineers planning weekend test runs should trigger their builds before 10:00 P.M. on Saturday.",
    "",
    "Once the upgrade is complete, all staff members will be prompted to reset their multi-factor authentication [19] ___ upon logging in on Monday morning. [20] ___. Thank you for your cooperation in keeping our infrastructure secure."
  ].join("\n");

  const MOCK1_PART7_EMAIL_PASSAGE = [
    "From: Clara Jenkins <c.jenkins@cloudpulse.io>",
    "To: DevOps Procurement <procurement@nexabank.com>",
    "Date: May 6",
    "Subject: Annual Enterprise Subscription Renewal — CloudPulse APM",
    "",
    "Dear NexaBank Team,",
    "Your current annual Enterprise license for CloudPulse Application Performance Monitoring (250 JVM nodes) is scheduled to expire on May 31. If you renew your contract prior to May 20, we are pleased to lock in your existing rate of $18,000 per year despite our upcoming 12% standard price adjustment in June.",
    "",
    "In addition, early renewal includes two complimentary tickets to our CloudObservability Summit in Singapore this August (valued at $900 each). Please sign and return the attached renewal form at your earliest convenience.",
    "",
    "Best regards,",
    "Clara Jenkins — Enterprise Account Executive"
  ].join("\n");

  const MOCK1_PART7_SLACK_PASSAGE = [
    "SLACK CHANNEL: #release-ops (September 9)",
    "",
    "[09:42 AM] Elena Rostova (Release Manager):",
    "Morning team! Quick check before our 11:00 AM production deployment of Payment Gateway v4.6. Have all regression suites passed on staging?",
    "",
    "[09:45 AM] Minh Tran (Senior Java Engineer):",
    "Functional tests are 100% green, Elena. However, load testing revealed that the new PDF receipt generator increases heap memory consumption by 28% when more than 200 requests hit simultaneously.",
    "",
    "[09:47 AM] Marcus Webb (SRE Lead):",
    "Good catch, Minh. Friday traffic usually peaks right around noon. Let's play it safe and disable PDF batch generation via the feature flag for today's rollout. We can ship v4.6 core checkout changes first and tune memory allocation on Monday.",
    "",
    "[09:49 AM] Elena Rostova (Release Manager):",
    "Agreed. Minh, please update the config map on production before 10:30 AM and confirm here once done."
  ].join("\n");

  window.MOCK_EXAMS = [
    /* =========================================================================
     * ĐỀ 1: PLACEMENT_01 — ĐỀ KIỂM TRA XẾP LỚP ĐẦU VÀO (20 CÂU • 15 PHÚT)
     * ========================================================================= */
    {
      id: "PLACEMENT_01",
      title: "Đề Kiểm Tra Xếp Lớp Đầu Vào (Placement Test)",
      subtitle: "20 câu phân tầng từ Cơ bản (A1–A2) → Trung cấp (B1) → TOEIC 600+ → Senior Java (B2) giúp định vị chính xác mức điểm hiện tại và gợi ý lộ trình học tối ưu.",
      type: "placement",
      minutes: 15,
      targetScore: "Định vị TOEIC 250 → 750+",
      questions: [
        {
          id: "PLC-Q01",
          domain: "Part 5 Grammar",
          lessonRef: "G1_1",
          q: "Every morning, our backend team ___ a fifteen-minute standup meeting at 9:30 A.M.",
          options: [
            "(A) holding",
            "(B) holds",
            "(C) to hold",
            "(D) held by"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Chủ ngữ số ít 'our backend team' + trạng từ tần suất 'Every morning' + câu đang thiếu Động từ chính (Main Verb).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Một câu tiếng Anh hoàn chỉnh bắt buộc phải có Động từ chia thì (Finite Verb). 'holding' (V-ing) và 'to hold' (to-V) không thể đứng một mình làm động từ chính. 'Every morning' chỉ thói quen ở Hiện tại Đơn với chủ ngữ ngôi thứ 3 số ít -> chọn (B) holds. Dịch: Mỗi sáng, đội backend của chúng tôi tổ chức buổi họp standup 15 phút lúc 9:30.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) V-ing thiếu to-be; (C) to-V chỉ mục đích chứ không phải động từ chia thì; (D) bị động sai nghĩa vì sau chỗ trống có tân ngữ 'a fifteen-minute standup meeting'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Luôn kiểm tra câu đã có Động từ chia thì chưa trước khi xét nghĩa — V-ing và to-V KHÔNG BAO GIỜ là động từ chính!"
        },
        {
          id: "PLC-Q02",
          domain: "Part 5 Grammar",
          lessonRef: "G1_2",
          q: "The IT department recently purchased new networking ___ for the third-floor server room.",
          options: [
            "(A) equipments",
            "(B) an equipment",
            "(C) equipment",
            "(D) equipped"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Sau tính từ/danh từ ghép 'new networking ___' và trước giới từ 'for' cần một Danh từ làm tân ngữ cho 'purchased'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'equipment' (trang thiết bị) là danh từ KHÔNG ĐẾM ĐƯỢC kinh điển trong TOEIC (cùng nhóm với software, hardware, feedback, information, advice). Danh từ không đếm được không bao giờ thêm '-s' và không đi với 'a/an' -> chọn (C) equipment. Dịch: Bộ phận CNTT gần đây đã mua thiết bị mạng mới cho phòng máy chủ tầng ba.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) sai vì 'equipment' không bao giờ có 's'; (B) sai vì không dùng 'an' trước danh từ không đếm được (và còn đứng sau tính từ 'networking'); (D) là V-ed/tính từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thuộc lòng tứ trụ danh từ không đếm được hay bẫy nhất đề ETS: equipment, software, information, furniture — thấy có 's' là gạch ngay trong 1 giây!"
        },
        {
          id: "PLC-Q03",
          domain: "Part 5 Grammar",
          lessonRef: "G1_3",
          q: "Ms. Tanaka reviewed the deployment checklist ___ before approving the production release.",
          options: [
            "(A) she",
            "(B) her",
            "(C) hers",
            "(D) herself"
          ],
          answer: 3,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Mệnh đề 'Ms. Tanaka reviewed the deployment checklist' ĐÃ ĐỦ trọn vẹn S + V + O!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khi câu đã đủ Chủ ngữ (Ms. Tanaka), Động từ (reviewed) và Tân ngữ (the deployment checklist), vị trí trống trước giới từ 'before' dùng Đại từ phản thân để nhấn mạnh 'chính cô ấy tự tay làm' -> chọn (D) herself. Dịch: Cô Tanaka đã tự mình rà soát danh mục triển khai trước khi phê duyệt bản phát hành production.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) đại từ chủ ngữ không đứng cuối mệnh đề; (B) tân ngữ/tính từ sở hữu thừa vì đã có tân ngữ rồi; (C) đại từ sở hữu ('checklist của cô ấy') không ghép sau danh từ xác định kiểu này.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy câu đã đủ S-V-O mà nhìn 4 đáp án là họ đại từ nhân xưng -> khoanh ngay Đại từ phản thân (-self / -selves) làm thành phần nhấn mạnh!"
        },
        {
          id: "PLC-Q04",
          domain: "Part 5 Vocab",
          lessonRef: "V1_1",
          q: "Because the lead architect is attending a client workshop in Tokyo, Friday's sprint review has been ___ until Monday.",
          options: [
            "(A) postponed",
            "(B) attended",
            "(C) enclosed",
            "(D) hired"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm 'Friday's sprint review has been ___ until Monday' (dời cuộc họp thứ Sáu sang thứ Hai).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'postpone (sth) until + mốc thời gian' = trì hoãn/dời lịch tới khi nào -> chọn (A) postponed. Dịch: Vì kiến trúc sư trưởng đang tham dự hội thảo khách hàng tại Tokyo, buổi sprint review thứ Sáu đã được dời sang thứ Hai.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) tham dự (không đi với bị động 'until Monday'); (C) đính kèm trong phong bì/email; (D) tuyển dụng.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cặp bài trùng TOEIC: 'postpone / put off + until + thời điểm mới' luôn đi chung với nhau!"
        },
        {
          id: "PLC-Q05",
          domain: "Listening",
          lessonRef: "V1_2",
          audioScript: "Did you receive the updated API documentation I emailed this morning?",
          q: "🎧 [Listening — Mức Cơ Bản] Bấm Nghe câu hỏi ngắn và chọn lời hồi đáp tự nhiên, chính xác nhất:",
          options: [
            "(A) Yes, I just downloaded the attachment.",
            "(B) At ten o'clock tomorrow morning.",
            "(C) No, the printer is on the second floor.",
            "(D) Please forward it to the marketing room."
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu hỏi Yes/No quá khứ 'Did you receive...' hỏi về tài liệu gửi qua email ('emailed').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Câu nghe: 'Bạn đã nhận được tài liệu API cập nhật mà tôi gửi email sáng nay chưa?'. Đáp án (A) 'Rồi, tôi vừa mới tải tệp đính kèm về xong' khớp hoàn hảo ngữ cảnh email -> attachment.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy lặp từ 'morning' nhưng trả lời cho câu hỏi When; (C) lệch hoàn toàn sang máy in; (D) 'marketing room' vô nghĩa.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong TOEIC Part 2, đáp án lặp lại nguyên xi từ cuối của câu hỏi ('morning' -> 'morning') 90% là bẫy âm thanh; hãy chọn đáp án dùng từ liên tưởng cùng trường nghĩa ('email' -> 'attachment')!"
        },
        {
          id: "PLC-Q06",
          domain: "Part 5 Grammar",
          lessonRef: "G1_5",
          q: "All security patches must be deployed to staging ___ 5:00 P.M. today so QA can start overnight testing.",
          options: [
            "(A) until",
            "(B) by",
            "(C) during",
            "(D) for"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Động từ hoàn tất một lần 'be deployed' (triển khai xong) + mốc giờ hạn chót '5:00 P.M. today'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'by + mốc thời gian' = trước hoặc muộn nhất là tại thời điểm đó (hạn chót - deadline); còn 'until' chỉ hành động kéo dài liên tục tới mốc đó. Triển khai bản vá xong trước 5 giờ chiều -> chọn (B) by.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) until dùng cho trạng thái kéo dài ('stay open until 5 PM'); (C) during + danh từ chỉ giai đoạn/sự kiện ('during the meeting'), không đi với giờ cụ thể; (D) for + khoảng thời gian ('for two hours').",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy submit / complete / deploy / return / notify + mốc giờ -> chọn 'by' (muộn nhất là lúc)!"
        },
        {
          id: "PLC-Q07",
          domain: "Part 5 Grammar",
          lessonRef: "G2_1",
          q: "Our platform ___ zero unplanned downtime since we migrated to a multi-region Kubernetes cluster last June.",
          options: [
            "(A) experiences",
            "(B) experienced",
            "(C) has experienced",
            "(D) was experiencing"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc vàng '___ ... since + S + V-quá-khứ-đơn (migrated ... last June)'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Mệnh đề chính đi trước 'since + mốc quá khứ' diễn tả kết quả kéo dài từ thời điểm quá khứ đến hiện tại -> chia Hiện tại Hoàn thành (have/has + P2). Chủ ngữ số ít 'Our platform' -> chọn (C) has experienced. Dịch: Nền tảng của chúng tôi chưa gặp bất kỳ sự cố sập ngoài dự kiến nào kể từ khi chuyển sang cụm Kubernetes đa vùng vào tháng Sáu năm ngoái.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy thí sinh nhìn thấy 'last June' ở cuối câu mà quên mất 'last June' nằm trong mệnh đề 'since'!",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức bất bại: [Hiện tại Hoàn thành] + SINCE + [Quá khứ Đơn] — đừng để mốc quá khứ sau chữ 'since' lừa bạn chia quá khứ đơn ở vế chính!"
        },
        {
          id: "PLC-Q08",
          domain: "Part 5 Grammar",
          lessonRef: "G2_3",
          q: "Sensitive customer card numbers ___ using AES-256 before being stored in the payment vault.",
          options: [
            "(A) encrypt",
            "(B) are encrypted",
            "(C) encrypting",
            "(D) have encrypted"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Chủ ngữ chỉ vật 'Sensitive customer card numbers' + ngay sau chỗ trống KHÔNG có tân ngữ cho động từ 'encrypt' mà là cụm phân từ 'using AES-256'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'encrypt' là ngoại động từ (mã hóa cái gì). Số thẻ không tự mã hóa chính nó mà phải ĐƯỢC mã hóa -> Câu Bị động (be + P2) với chủ ngữ số nhiều 'numbers' -> chọn (B) are encrypted.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) đều là chủ động nhưng phía sau không có tân ngữ nhận hành động; (C) V-ing không làm động từ chính được.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Ngoại động từ mà phía sau chỗ trống gặp ngay giới từ / trạng từ / V-ing chỉ phương tiện -> 95% chia BỊ ĐỘNG (be + P2)!"
        },
        {
          id: "PLC-Q09",
          domain: "Part 5 Vocab",
          lessonRef: "V1_4",
          q: "Accounting cannot process the payment until the cloud vendor sends an official ___ listing the itemized server charges.",
          options: [
            "(A) invoice",
            "(B) itinerary",
            "(C) applicant",
            "(D) probation"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'Accounting process the payment' + 'vendor sends an official ___ listing itemized charges' (nhà cung cấp gửi chứng từ liệt kê chi phí để kế toán thanh toán).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'invoice' = hóa đơn thanh toán do nhà cung cấp (vendor/supplier) xuất để yêu cầu khách hàng trả tiền (khác với 'receipt' là biên lai xác nhận ĐÃ thu tiền xong) -> chọn (A) invoice.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) lịch trình chuyến đi công tác; (C) ứng viên xin việc; (D) thời gian thử việc.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Phân biệt chuẩn ETS: trước khi trả tiền nhà cung cấp gửi 'invoice' (hóa đơn đòi tiền); sau khi trả tiền xong bạn nhận 'receipt' (biên lai)!"
        },
        {
          id: "PLC-Q10",
          domain: "Part 5 Grammar",
          lessonRef: "G2_5",
          q: "Our engineering team looks forward to ___ closely with your security auditors during next month's compliance review.",
          options: [
            "(A) collaborate",
            "(B) collaborated",
            "(C) collaborating",
            "(D) collaboration of"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm động từ cố định 'looks forward to ___' + trạng từ 'closely' đứng ngay sau.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong cụm 'look forward to' (mong đợi điều gì), chữ 'to' là GIỚI TỪ chứ không phải 'to' của động từ nguyên mẫu! Sau giới từ + có trạng từ 'closely' bổ nghĩa phía sau -> bắt buộc dùng Danh động từ (Gerund V-ing) -> chọn (C) collaborating.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy kinh điển nhất TOEIC: thí sinh thấy 'to' liền chọn V-nguyên-thể; (D) danh từ không thể được bổ nghĩa bởi trạng từ 'closely' phía sau.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Khắc cốt ghi tâm 4 cụm chữ 'to' là giới từ + V-ing: look forward to, be dedicated/committed to, be accustomed/used to, object to!"
        },
        {
          id: "PLC-Q11",
          domain: "Part 5 Grammar",
          lessonRef: "G3_1",
          q: "The number of microservices deployed on our production cluster ___ grown from twelve to forty-eight over two years.",
          options: [
            "(A) have",
            "(B) has",
            "(C) are",
            "(D) were"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Chủ ngữ bắt đầu bằng 'The number of + danh từ số nhiều' + phía sau có phân từ hai 'grown'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Gạch bỏ cụm giới từ nhiễu 'of microservices deployed on our production cluster', chủ ngữ chính thật sự là 'The number' (Con số — danh từ số ÍT!). Kết hợp với P2 'grown' tạo thì Hiện tại Hoàn thành -> chọn (B) has.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy nhìn danh từ số nhiều gần chỗ trống ('microservices') hoặc nhầm với 'A number of' (nhiều = số nhiều); (C), (D) ghép với 'grown' thành bị động vô nghĩa vì 'grow' ở đây là nội động từ (tăng lên).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: 'THE number of + N-nhiều' -> V SỐ ÍT (bàn về 1 con số); 'A number of + N-nhiều' -> V SỐ NHIỀU (= many)!"
        },
        {
          id: "PLC-Q12",
          domain: "Part 5 Grammar",
          lessonRef: "G3_3",
          q: "___ a sudden three-fold surge in Black Friday traffic, the checkout service maintained sub-second response times.",
          options: [
            "(A) Although",
            "(B) Despite",
            "(C) Because",
            "(D) Unless"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Vế trước dấu phẩy 'a sudden three-fold surge in Black Friday traffic' chỉ là CỤM DANH TỪ (không có động từ chia thì) + nghĩa tương phản với vế sau.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Tăng tải gấp 3 lần nhưng vẫn giữ thời gian phản hồi dưới 1 giây -> quan hệ nhượng bộ 'Mặc dù'. Vì sau chỗ trống là Cụm danh từ ('a sudden... surge'), ta phải dùng Giới từ 'Despite' (= In spite of), không dùng Liên từ 'Although' -> chọn (B) Despite.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) đều là Liên từ phụ thuộc (Subordinating Conjunctions), bắt buộc phải theo sau bởi một Mệnh đề đầy đủ S + V.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trước dấu phẩy không có Verb chia thì -> loại sạch Although / Even though / Because / While trong 2 giây!"
        },
        {
          id: "PLC-Q13",
          domain: "Part 5 Vocab",
          lessonRef: "V2_1",
          q: "All fintech partners processing cross-border transfers must strictly ___ with PCI-DSS data protection standards.",
          options: [
            "(A) comply",
            "(B) abide",
            "(C) observe",
            "(D) fulfill"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Giới từ 'with' đứng ngay sau chỗ trống + tân ngữ 'standards' (tiêu chuẩn/quy định).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Ba cách nói 'tuân thủ quy định' trong TOEIC khác nhau ở giới từ đi kèm: 'comply WITH', 'abide BY', và 'observe / adhere to' (observe không có giới từ!). Có sẵn chữ 'with' -> chọn (A) comply. Dịch: Mọi đối tác fintech xử lý chuyển tiền xuyên biên giới phải tuân thủ nghiêm ngặt tiêu chuẩn bảo mật dữ liệu PCI-DSS.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) abide phải đi với 'by'; (C) observe và (D) fulfill là ngoại động từ đi thẳng tới tân ngữ, không đi với 'with'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Học từ vựng TOEIC 600+ luôn học theo cụm dính liền giới từ: comply WITH = abide BY = conform TO = adhere TO (tuân thủ)!"
        },
        {
          id: "PLC-Q14",
          domain: "Listening",
          lessonRef: "V3_1",
          audioScript: "Hi everyone. Yesterday I finished refactoring the order mapper. Today I planned to run end-to-end payment tests, but I'm blocked because the sandbox gateway is returning 502 Bad Gateway errors. Could someone from DevOps check the proxy logs after standup?",
          q: "🎧 [Listening — Daily Standup] Bấm Nghe báo cáo Standup và cho biết người nói đang cần hỗ trợ điều gì:",
          options: [
            "(A) Reviewing pull request comments on the order mapper.",
            "(B) Investigating proxy logs for sandbox 502 errors.",
            "(C) Extending the sprint deadline until next Monday.",
            "(D) Writing unit tests for the new user registration page."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Nghe kỹ tín hiệu báo Blocker ('but I'm blocked because...') và câu đề nghị cuối bài ('Could someone from DevOps...').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Kỹ sư báo cáo đã xong 'order mapper' hôm qua, nhưng hôm nay bị chặn (blocked) do 'sandbox gateway is returning 502 Bad Gateway errors' và nhờ DevOps 'check the proxy logs' -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) order mapper đã làm xong từ hôm qua; (C) và (D) không hề được nhắc tới trong audio.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong cả TOEIC Part 3/4 lẫn họp Standup thực tế, câu hỏi 'cần hỗ trợ gì / làm gì tiếp theo' luôn nằm ngay sau từ chuyển hướng 'but / however' và câu cầu khiến 'Could you / Please' ở cuối đoạn!"
        },
        {
          id: "PLC-Q15",
          domain: "Part 5 Grammar",
          lessonRef: "G3_5",
          q: "Any pull request ___ database schema modifications must be approved by a Principal Engineer.",
          options: [
            "(A) contains",
            "(B) contained",
            "(C) containing",
            "(D) to be contained"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu ĐÃ CÓ động từ chính 'must be approved'! Chỗ trống đứng sau danh từ 'Any pull request' và trước tân ngữ 'database schema modifications'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khi câu đã có động từ chính ('must be approved'), động từ phụ bổ nghĩa cho danh từ 'pull request' phải ở dạng Rút gọn mệnh đề quan hệ. Bản thân PR 'chứa đựng' (chủ động, có tân ngữ 'modifications' theo sau) -> rút gọn bằng V-ing: 'which contains' -> 'containing' -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) chia thì làm câu bị thừa 2 động từ chính (lỗi ngữ pháp nghiêm trọng); (B) và (D) dạng bị động sai vì sau chỗ trống có tân ngữ trực tiếp.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Câu đã có Main Verb -> cần rút gọn MĐQH: sau chỗ trống CÓ tân ngữ -> chọn V-ing (chủ động); KHÔNG có tân ngữ -> chọn V-ed/P2 (bị động)!"
        },
        {
          id: "PLC-Q16",
          domain: "Part 5 Grammar",
          lessonRef: "G4_2",
          q: "Following the security audit, the CTO insisted that every microservice ___ mutual TLS authentication immediately.",
          options: [
            "(A) enables",
            "(B) enabled",
            "(C) enable",
            "(D) enabling"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Động từ giả định 'insisted that' + Chủ ngữ số ít 'every microservice' + ___!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cấu trúc Giả định thức (Subjunctive Mood): Sau 'insist / recommend / suggest / require / demand + that + S + (should) + V-nguyên-thể không chia'! Dù chủ ngữ 'every microservice' là ngôi thứ 3 số ít và 'insisted' ở quá khứ, động từ sau 'that' vẫn giữ nguyên mẫu 'enable' -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy chia số ít theo 'every microservice'; (B) bẫy lùi thì quá khứ theo 'insisted'; (D) V-ing không làm động từ mệnh đề 'that'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Gặp suggest / recommend / insist / mandatory / essential + THAT + S -> nhắm mắt chọn V nguyên mẫu (hoặc 'be' nếu bị động), bất chấp chủ ngữ số ít hay thì quá khứ!"
        },
        {
          id: "PLC-Q17",
          domain: "Senior Java",
          lessonRef: "V3_4",
          q: "During a SEV-1 production outage, our top priority is to ___ customer impact via rollback or feature flags before investigating the deep root cause.",
          options: [
            "(A) mitigate",
            "(B) reproduce",
            "(C) deprecate",
            "(D) hardcode"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tân ngữ 'customer impact' (tác động lên khách hàng) trong sự cố 'SEV-1 production outage' nhờ rollback/feature flags.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong văn hóa SRE quốc tế, nguyên tắc vàng khi sập prod là 'Mitigate first, investigate later' — 'mitigate' = giảm thiểu mức độ nghiêm trọng/thiệt hại tức thời -> chọn (A). Dịch: Trong sự cố nghiêm trọng cấp 1, ưu tiên hàng đầu của chúng tôi là giảm thiểu tác động tới khách hàng bằng quay lui hoặc tắt cờ tính năng trước khi đào sâu nguyên nhân gốc rễ.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) tái hiện lại lỗi (làm ở staging khi điều tra, không phải giảm tác động); (C) đánh dấu ngừng hỗ trợ API cũ; (D) gán cứng giá trị trong code.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm collocation bất hủ trong phỏng vấn Incident Management: 'mitigate the impact / risk' (giảm nhẹ thiệt hại)!"
        },
        {
          id: "PLC-Q18",
          domain: "Senior Java",
          lessonRef: "V4_1",
          q: "Making DTOs ___ with Java `record` classes eliminates synchronization overhead because multiple threads can safely read them without locks.",
          options: [
            "(A) verbose",
            "(B) immutable",
            "(C) redundant",
            "(D) intermittent"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'Java record classes' + 'multiple threads can safely read them without locks' (nhiều luồng đọc an toàn không cần khóa).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đối tượng không thể bị thay đổi trạng thái sau khi khởi tạo gọi là 'immutable' (bất biến). Nhờ tính bất biến của Java `record`, các luồng đọc đồng thời không bao giờ gặp race condition nên không tốn chi phí khóa đồng bộ -> chọn (B) immutable.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) dài dòng rườm rà (trái ngược hoàn toàn với Java record!); (C) dư thừa; (D) chập chờn lúc bị lúc không (thường đi với 'intermittent bug').",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhắc tới Thread-safety không cần lock trong Java Core -> từ khóa số 1 luôn là 'immutable objects'!"
        },
        {
          id: "PLC-Q19",
          domain: "Part 7 Reading",
          lessonRef: "V4_3",
          passage: PLACEMENT_P7_PASSAGE,
          q: "According to the memo, what trade-off or risk of introducing the Redis cache does Helena Vance highlight?",
          options: [
            "(A) Average query latency could exceed 420ms during flash sales.",
            "(B) PostgreSQL licenses will become too expensive in Sprint 22.",
            "(C) Users might see outdated order statuses if cache invalidation fails.",
            "(D) Junior developers are unfamiliar with writing SQL queries."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Quét từ khóa 'However' và 'risk' ở đoạn 2 của Memo để tìm mặt trái (trade-off) của Redis cache.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đoạn 2 viết rõ: 'caching mutable order statuses introduces the risk of serving stale data if an update event fails to invalidate the cache key'. 'serving stale data' được paraphrase thành 'see outdated order statuses' -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) ngược nghĩa hoàn toàn (độ trễ giảm từ 420ms xuống dưới 35ms); (B) và (D) không được đề cập.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cặp từ đồng nghĩa vừa hay gặp ở System Design vừa chuẩn Paraphrasing Part 7: 'stale data' = 'outdated information' (dữ liệu cũ chưa cập nhật)!"
        },
        {
          id: "PLC-Q20",
          domain: "Part 7 Reading",
          lessonRef: "V4_6",
          passage: PLACEMENT_P7_PASSAGE,
          q: "What is indicated about Thursday's design review meeting?",
          options: [
            "(A) It is optional for engineers who submitted ADR-108.",
            "(B) All Senior Java Engineers are required to attend it.",
            "(C) It has been rescheduled to take place after Sprint 22.",
            "(D) It will be hosted by an external Redis consultant."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tìm cụm 'Thursday's design review' ở câu cuối cùng của Memo.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Bài đọc viết: 'attendance at Thursday's design review is mandatory for all Senior Java Engineers'. Tính từ 'is mandatory for X' được đổi cách diễn đạt (paraphrase) chuẩn xác thành 'X are required to attend' (bắt buộc tham dự) -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) 'optional' trái nghĩa với 'mandatory'; (C) 'after Sprint 22' trái nghĩa với 'prior to Sprint 22' (trước Sprint 22); (D) không có thông tin.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cặp Paraphrase xuất hiện dày đặc nhất mọi đề thi ETS Part 7: 'mandatory / compulsory' = 'required' và 'prior to' = 'before'!"
        }
      ]
    },

    /* =========================================================================
     * ĐỀ 2: TOEIC_MOCK_01 — ĐỀ THI THỬ TOEIC 600+ CHUẨN ETS SỐ 01 (25 CÂU • 25 PHÚT)
     * ========================================================================= */
    {
      id: "TOEIC_MOCK_01",
      title: "Đề Thi Thử TOEIC 600+ Chuẩn ETS — Đề Số 01",
      subtitle: "Mô phỏng toàn diện bài thi TOEIC thực tế ở tỷ lệ tinh gọn (25 câu / 25 phút): 6 câu Nghe Part 2-3-4 + 10 câu Part 5 + 4 câu Đục lỗ Email Part 6 + 5 câu Đọc hiểu Đa văn bản Part 7.",
      type: "toeic",
      minutes: 25,
      targetScore: "TOEIC 600–700+",
      questions: [
        // --- Câu 1–6: Listening (CÓ audioScript, KHÔNG lộ hội thoại trong q) ---
        {
          id: "TM1-Q01",
          domain: "Listening",
          lessonRef: "G1_5",
          audioScript: "When will the revised project budget be submitted to the executive board?",
          q: "🎧 [TOEIC Part 2 — Câu 01] Bấm Nghe câu hỏi và chọn phương án hồi đáp đúng nhất:",
          options: [
            "(A) By Thursday afternoon at the latest.",
            "(B) In the main conference room downstairs.",
            "(C) Yes, the budget was cut by ten percent.",
            "(D) Mr. Patel from the accounting office."
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Bắt từ để hỏi đầu tiên 'When will...' (Khi nào ngân sách dự án sửa đổi sẽ được nộp?).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Câu hỏi bắt đầu bằng 'When' ở tương lai ('When will... be submitted?'). Đáp án (A) 'Muộn nhất là trước chiều thứ Năm' trả lời trực tiếp mốc hạn chót bằng giới từ 'By'.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) trả lời cho Where ('In the main conference room'); (C) bẫy dùng 'Yes' cho câu hỏi Wh-question và lặp từ 'budget'; (D) trả lời cho Who.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Luật vàng TOEIC Part 2: Câu hỏi bắt đầu bằng Wh- (When/Where/Who/Why/How) -> loại ngay tắp lự mọi đáp án mở đầu bằng Yes / No!"
        },
        {
          id: "TM1-Q02",
          domain: "Listening",
          lessonRef: "V2_5",
          audioScript: "Who authorizes temporary access badges for visiting IT contractors?",
          q: "🎧 [TOEIC Part 2 — Câu 02] Bấm Nghe câu hỏi và chọn phương án hồi đáp đúng nhất:",
          options: [
            "(A) Using your employee password.",
            "(B) For a two-week consulting project.",
            "(C) The security supervisor on the ground floor.",
            "(D) They visited the data center yesterday."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Từ để hỏi đầu câu là 'Who authorizes...' (Ai cấp quyền thẻ ra vào tạm thời?).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Hỏi 'Who' cần câu trả lời chỉ người, chức danh hoặc phòng ban. (C) 'Người giám sát an ninh ở tầng trệt' là chức danh khớp hoàn toàn với việc cấp quyền thẻ ra vào ('authorizes access badges').",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) trả lời cho How; (B) trả lời cho How long / Why; (D) bẫy âm tương tự ('visiting' -> 'visited').",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Khi nghe 'Who', hãy căng tai chờ tên riêng (Mr./Ms.), chức vụ (-er/-or/manager/supervisor) hoặc tên bộ phận (HR/IT department)!"
        },
        {
          id: "TM1-Q03",
          domain: "Listening",
          lessonRef: "V1_4",
          audioScript: "Didn't the supplier include a warranty certificate in the monitor shipment?",
          q: "🎧 [TOEIC Part 2 — Câu 03] Bấm Nghe câu hỏi phủ định và chọn phương án hồi đáp đúng nhất:",
          options: [
            "(A) About twenty-four inches wide.",
            "(B) No, I had to call them to request a copy.",
            "(C) We shipped the package via express mail.",
            "(D) Next to the reception desk."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu hỏi phủ định 'Didn't the supplier include...' (Chẳng phải nhà cung cấp đã gửi kèm phiếu bảo hành sao?).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Với câu hỏi phủ định tiếng Anh ('Didn't they include...?'), đừng bối rối vì chữ Yes/No đầu câu — hãy xét vế giải thích phía sau! 'No, I had to call them to request a copy' = 'Chưa có đâu, tôi đã phải gọi cho họ để xin một bản sao' -> hoàn toàn logic -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) kích thước màn hình (bẫy từ 'monitor'); (C) bẫy lặp âm từ 'shipment' -> 'shipped'; (D) chỉ nơi chốn.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Gặp câu hỏi phủ định (Didn't / Isn't / Haven't), hãy coi như câu hỏi thường (Did / Is / Have) và kiểm tra tính hợp lý của mệnh đề phía sau Yes/No!"
        },
        {
          id: "TM1-Q04",
          domain: "Listening",
          lessonRef: "V1_1",
          audioScript: "Hi Daniel, are we still presenting the mobile banking prototype to the client at two o'clock today? Actually, Laura, our QA engineer just found a login bug on Android devices. I called the client and moved the demonstration to Thursday morning so we have time to fix it.",
          q: "🎧 [TOEIC Part 3 — Câu 04] Why did the man reschedule the client demonstration?",
          options: [
            "(A) The client's flight to the office was delayed.",
            "(B) A software defect was discovered during testing.",
            "(C) The main presentation projector is malfunctioning.",
            "(D) He needs to attend an urgent budget meeting."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc trước câu hỏi 'Why did the man reschedule...' rồi tập trung nghe lý do của người đàn ông sau từ 'Actually'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Người đàn ông nói: 'our QA engineer just found a login bug on Android devices' nên đã dời buổi demo sang sáng thứ Năm. Cụm 'found a login bug' được paraphrase chuẩn ETS thành 'A software defect was discovered during testing' -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) đều là các lý do dời họp quen thuộc nhưng không xuất hiện trong đoạn hội thoại.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong TOEIC Part 3, từ khóa 'Actually / Unfortunately / In fact' của người thứ hai luôn mở màn cho nguyên nhân sự cố hoặc sự thay đổi kế hoạch!"
        },
        {
          id: "TM1-Q05",
          domain: "Listening",
          lessonRef: "V2_2",
          audioScript: "Excuse me, Mr. Gomez. I submitted my travel expense report from the Berlin tech conference last week, but I noticed my hotel reimbursement hasn't been deposited yet. Let me check our system, Ms. Lin. Ah, it looks like you uploaded the credit card slip instead of the itemized hotel receipt. Once you upload the itemized receipt to the portal, accounting will approve it within two days.",
          q: "🎧 [TOEIC Part 3 — Câu 05] What does the man ask the woman to do?",
          options: [
            "(A) Book a less expensive hotel for her next trip.",
            "(B) Obtain approval from her department director.",
            "(C) Upload a detailed hotel receipt to the online portal.",
            "(D) Contact the bank regarding a missing wire transfer."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu hỏi 'What does the man ask the woman to do?' -> nghe câu hướng dẫn hành động ở cuối lời người đàn ông.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Người đàn ông giải thích cô Lin mới tải lên biên lai quẹt thẻ thay vì hóa đơn chi tiết của khách sạn, rồi dặn: 'Once you upload the itemized receipt to the portal, accounting will approve it'. 'itemized receipt' = 'detailed hotel receipt' -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (B), (D) suy diễn sai lệch khỏi quy trình hoàn ứng chi phí (reimbursement).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Từ vựng vàng tài chính TOEIC: 'itemized receipt/invoice' = hóa đơn kê khai chi tiết từng khoản mục (= detailed receipt)!"
        },
        {
          id: "TM1-Q06",
          domain: "Listening",
          lessonRef: "V2_4",
          audioScript: "Attention all staff. Starting at seven P.M. this evening, the IT support team will be replacing the primary storage drives on our internal file server. Access to shared department folders will be suspended for approximately three hours. Please close all open spreadsheets and save local copies of any documents you need to work on tonight. Thank you.",
          q: "🎧 [TOEIC Part 4 — Câu 06] What are listeners instructed to do before 7:00 P.M.?",
          options: [
            "(A) Return borrowed company laptops to the IT desk.",
            "(B) Register for a cybersecurity training workshop.",
            "(C) Save necessary files locally on their computers.",
            "(D) Update their email signatures with the new logo."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Nghe kỹ câu mệnh lệnh bắt đầu bằng 'Please...' ở cuối bài thông báo nội bộ.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cuối thông báo dặn rõ: 'Please close all open spreadsheets and save local copies of any documents you need to work on tonight' -> khớp hoàn toàn với (C) 'Save necessary files locally on their computers'.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (B), (D) đều thuộc chủ đề IT văn phòng nhưng không có trong thông báo.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong thông báo TOEIC Part 4, câu hỏi 'What are listeners instructed/asked to do?' 99% nằm ngay sau chữ 'Please' hoặc 'Be sure to' ở 2 câu cuối bài!"
        },

        // --- Câu 7–16: Part 5 Grammar & Vocab ---
        {
          id: "TM1-Q07",
          domain: "Part 5 Grammar",
          lessonRef: "G1_2",
          q: "Written ___ from the Information Security Officer is required before connecting third-party analytics tools to production data.",
          options: [
            "(A) authorize",
            "(B) authorized",
            "(C) authorization",
            "(D) authoritatively"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đầu câu làm Chủ ngữ cho động từ 'is required', đứng sau tính từ phân từ 'Written ___' và trước giới từ 'from'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Giữa tính từ ('Written' — bằng văn bản) và giới từ ('from') bắt buộc là một Danh từ làm chủ ngữ chính cho động từ số ít 'is required'. Đuôi '-tion' là đuôi danh từ -> chọn (C) authorization (sự cho phép/ủy quyền bằng văn bản).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) động từ nguyên mẫu không làm chủ ngữ; (B) tính từ/V-ed; (D) trạng từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức khung danh từ bất biến: [Tính từ] + [DANH TỪ] + [Giới từ (of/from/for/in)] — giải gọn trong 3 giây không cần đọc hết câu!"
        },
        {
          id: "TM1-Q08",
          domain: "Part 5 Grammar",
          lessonRef: "G1_4",
          q: "All API keys stored in environment variables must be ___ rotated every ninety days to minimize security risks.",
          options: [
            "(A) regular",
            "(B) regularity",
            "(C) regularly",
            "(D) regulate"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Vị trí kẹp giữa trợ động từ bị động 'must be' và phân từ hai 'rotated' ('be ___ P2').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Từ bổ nghĩa cho động từ phân từ 'rotated' (được luân chuyển/đổi mới định kỳ) bắt buộc là Trạng từ (đuôi -ly) -> chọn (C) regularly. Dịch: Mọi khóa API lưu trong biến môi trường phải được đổi mới định kỳ mỗi 90 ngày để giảm thiểu rủi ro bảo mật.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) tính từ; (B) danh từ; (D) động từ nguyên mẫu.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Vị trí kim cương ăn điểm 100% của Trạng từ (-ly) trong TOEIC Part 5: [have/has + ADV + P2], [be + ADV + P2], [Modal + ADV + V]!"
        },
        {
          id: "TM1-Q09",
          domain: "Part 5 Vocab",
          lessonRef: "V1_6",
          q: "Our support engineers are currently looking ___ why several European users experienced delayed two-factor SMS codes.",
          options: [
            "(A) into",
            "(B) after",
            "(C) over",
            "(D) away"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'support engineers are looking ___ why...' (kỹ sư đang tìm hiểu/điều tra nguyên nhân sự cố).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cụm động từ (Phrasal Verb) 'look into sth' = investigate / examine (điều tra, xem xét kỹ nguyên nhân vấn đề) -> chọn (A) into. Dịch: Các kỹ sư hỗ trợ của chúng tôi hiện đang điều tra lý do vì sao một số người dùng châu Âu bị nhận chậm mã SMS xác thực hai lớp.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) look after = chăm sóc; (C) look over = đọc lướt/kiểm tra sơ qua tài liệu; (D) look away = ngoảnh mặt đi.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cặp bài trùng TOEIC vừa nghe vừa đọc: 'look into a bug / complaint / issue' = 'investigate'!"
        },
        {
          id: "TM1-Q10",
          domain: "Part 5 Grammar",
          lessonRef: "G1_3",
          q: "With the new self-service portal, enterprise clients can configure webhook endpoints by ___ without submitting support tickets.",
          options: [
            "(A) they",
            "(B) them",
            "(C) their",
            "(D) themselves"
          ],
          answer: 3,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Giới từ 'by ___' + chủ ngữ số nhiều 'enterprise clients' + cụm giải thích 'without submitting support tickets' (tự làm không cần nhờ hỗ trợ).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cấu trúc thành ngữ vàng 'by + đại từ phản thân' (= on one's own / alone: tự lực, một mình làm lấy). Chủ ngữ 'enterprise clients' là số nhiều ngôi thứ 3 -> chọn (D) themselves.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) chủ ngữ không đứng sau giới từ; (B) 'by them' không mang nghĩa 'tự họ làm'; (C) tính từ sở hữu bắt buộc phải có danh từ theo sau.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhìn thấy chữ 'by ___' đứng trước dấu phẩy, dấu chấm hoặc giới từ khác mà 4 đáp án là đại từ -> chọn ngay '-self / -selves' (by oneself = tự mình)!"
        },
        {
          id: "TM1-Q11",
          domain: "Part 5 Vocab",
          lessonRef: "V2_3",
          q: "Before switching live traffic to the new payment cluster, the QA team conducted a ___ inspection of all failover scenarios.",
          options: [
            "(A) thorough",
            "(B) reluctant",
            "(C) vacant",
            "(D) fragile"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Collocation kinh điển 'conducted a ___ inspection / review / investigation' (tiến hành một cuộc kiểm tra ___).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'thorough' (/ˈθɜːroʊ/) = kỹ lưỡng, toàn diện, triệt để. Cụm 'a thorough inspection / review / test' là collocation ruột của ETS -> chọn (A). Dịch: Trước khi chuyển lưu lượng thật sang cụm thanh toán mới, đội QA đã tiến hành kiểm tra kỹ lưỡng mọi kịch bản dự phòng chuyển đổi.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) miễn cưỡng; (C) trống rỗng (phòng trống/vị trí trống); (D) dễ vỡ, mỏng manh.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Đừng nhầm mặt chữ của 3 từ họ 'th-': 'through' (giới từ: xuyên qua), 'though' (liên từ: mặc dù), và 'thorough' (tính từ: kỹ lưỡng)!"
        },
        {
          id: "TM1-Q12",
          domain: "Part 5 Grammar",
          lessonRef: "G2_2",
          q: "By the end of next quarter, our engineering division ___ all legacy SOAP services to RESTful Spring Boot APIs.",
          options: [
            "(A) migrated",
            "(B) is migrating",
            "(C) will have migrated",
            "(D) has been migrated"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm trạng ngữ chỉ hạn hoàn tất trong tương lai 'By the end of next quarter' (Tính đến cuối quý tới).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'By + mốc thời gian tương lai' diễn tả một hành động SẼ HOÀN TẤT trước thời điểm đó trong tương lai -> dùng thì Tương lai Hoàn thành (will have + P2) ở dạng chủ động vì có tân ngữ 'all legacy SOAP services' -> chọn (C) will have migrated.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) quá khứ đơn trái với 'next quarter'; (B) hiện tại tiếp diễn không đi với 'By + mốc thời gian hoàn tất'; (D) hiện tại hoàn thành bị động vừa sai thì vừa sai thể.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức đóng đinh TOEIC 650+: 'By + mốc quá khứ -> had P2'; 'By + mốc tương lai (next month/2028) -> will have P2'!"
        },
        {
          id: "TM1-Q13",
          domain: "Part 5 Vocab",
          lessonRef: "V2_6",
          q: "Upgrading to Java 21 Virtual Threads had a dramatic positive ___ on our gateway's concurrent request throughput.",
          options: [
            "(A) affect",
            "(B) effect",
            "(C) effective",
            "(D) effectively"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Mạo từ + Tính từ 'a dramatic positive ___' + giới từ 'on' ('have an ___ on sth').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Sau mạo từ 'a' và hai tính từ 'dramatic positive', trước giới từ 'on' bắt buộc là một Danh từ đếm được số ít. Giữa cặp từ dễ nhầm nhất tiếng Anh: 'affect' là Động từ (ảnh hưởng tới), còn 'effect' là Danh từ (tác động/hiệu quả -> 'have a positive effect on sth') -> chọn (B) effect.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) động từ 'affect' không đứng sau 'a dramatic positive'; (C) tính từ 'hiệu quả'; (D) trạng từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Mẹo nhớ RAVEN: Remember **A**ffect is a **V**erb, **E**ffect is a **N**oun — và cụm 'have an effect ON' luôn đi kèm giới từ ON!"
        },
        {
          id: "TM1-Q14",
          domain: "Part 5 Grammar",
          lessonRef: "G2_6",
          q: "Developers found the legacy billing documentation extremely ___ because several sequence diagrams contradicted the actual source code.",
          options: [
            "(A) confuse",
            "(B) confused",
            "(C) confusing",
            "(D) confusion"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc 5 thành phần 'found + O (the legacy billing documentation) + C (extremely ___)' — bổ ngữ mô tả bản chất của TÀI LIỆU.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Động từ 'find + O + Adj' (nhận thấy cái gì như thế nào). Ở đây tính từ bổ nghĩa cho Tân ngữ 'the legacy billing documentation' (tài liệu gây bối rối cho người đọc -> bản chất gây ra cảm xúc) chứ không phải bổ nghĩa cho 'Developers'! Do đó phải dùng phân từ hiện tại đuôi '-ing' -> chọn (C) confusing.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy cực độc: thí sinh nhìn thấy chủ ngữ chỉ người 'Developers' ở đầu câu nên vội chọn 'confused' mà không nhận ra tính từ này đang mô tả 'documentation'!",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Gặp 'find / make / keep + Tân ngữ + Adj', hãy hỏi xem Tính từ đó mô tả TÂN NGỮ hay Chủ ngữ: vật gây bối rối -> 'confusing'; người bị bối rối -> 'confused'!"
        },
        {
          id: "TM1-Q15",
          domain: "Part 5 Grammar",
          lessonRef: "G3_6",
          q: "___ you experience any authentication errors after resetting your token, please contact the IT Helpdesk at extension 402.",
          options: [
            "(A) Should",
            "(B) Were",
            "(C) Had",
            "(D) Unless"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đầu câu điều kiện khuyết 'If', chủ ngữ 'you' + động từ NGUYÊN MẪU 'experience', vế chính là câu mệnh lệnh 'please contact...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đảo ngữ câu điều kiện loại 1 cực kỳ lịch sự và phổ biến số 1 trong email TOEIC: bỏ 'If', đảo 'Should' lên đầu câu + S + V-nguyên-thể ('Should you experience...' = 'If you should experience...'). Vế sau dùng mệnh lệnh thức 'please contact' -> chọn (A) Should.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) Đảo ngữ loại 2 ('Were you TO experience...', không đi trực tiếp với V nguyên mẫu và không đi với 'please contact' ở vế chính); (C) Đảo ngữ loại 3 ('Had you experienced...'); (D) 'Unless' sai nghĩa ('Trừ khi bạn gặp lỗi, hãy liên hệ IT' -> vô lý!).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy đầu câu '___ you + V-nguyên-thể (have / need / experience / require), please...' -> khoanh 'Should' trong 1 giây không cần đắn đo!"
        },
        {
          id: "TM1-Q16",
          domain: "Part 5 Vocab",
          lessonRef: "V1_3",
          q: "Among thirty applicants, Mr. Hoang stood out because his cloud architecture ___ closely matched the requirements of our banking project.",
          options: [
            "(A) qualifications",
            "(B) reservations",
            "(C) subscriptions",
            "(D) destinations"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Ngữ cảnh tuyển dụng 'Among thirty applicants' + 'matched the requirements of our project'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'qualifications' = trình độ chuyên môn, bằng cấp, năng lực đáp ứng yêu cầu tuyển dụng -> chọn (A). Dịch: Trong số 30 ứng viên, anh Hoàng nổi bật vì năng lực chuyên môn về kiến trúc đám mây của anh khớp sát với yêu cầu dự án ngân hàng của chúng tôi.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) đặt chỗ trước (nhà hàng/khách sạn); (C) gói thuê bao đăng ký; (D) điểm đến du lịch.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Tam giác từ vựng Tuyển dụng luôn đi chung trong đề ETS: applicants / candidates — qualifications — job requirements!"
        },

        // --- Câu 17–20: Part 6 Completion (Email Bảo trì Hệ thống) ---
        {
          id: "TM1-Q17",
          domain: "Part 6 Completion",
          lessonRef: "G2_3",
          passage: MOCK1_PART6_PASSAGE,
          q: "Chọn phương án đúng nhất để điền vào chỗ trống [17] trong thông báo nội bộ:",
          options: [
            "(A) underwent",
            "(B) will undergo",
            "(C) will be undergone",
            "(D) have undergone"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Chỗ trống [17] có mốc thời gian tương lai 'this Saturday, March 21' + động từ đặc biệt 'undergo' + tân ngữ 'essential security upgrades'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Siêu bẫy từ vựng ngữ pháp TOEIC 700+: động từ 'undergo' (trải qua đợt nâng cấp/bảo trì/kiểm tra) bản thân nó là NGOẠI ĐỘNG TỪ luôn chia ở THỂ CHỦ ĐỘNG (có tân ngữ 'essential security upgrades' phía sau), KHÔNG BAO GIỜ chia bị động dù dịch tiếng Việt nghe có vẻ thụ động! Kết hợp thời gian tương lai 'this Saturday' -> chọn (B) will undergo.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (C) bẫy chí mạng: dịch tiếng Việt 'được nâng cấp' nên chọn bị động 'will be undergone' là sai ngữ pháp tiếng Anh; (A) và (D) sai thì so với lịch sắp diễn ra thứ Bảy này.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Ghi vào sổ tay vàng: 'undergo + renovations / upgrades / maintenance / surgery' LUÔN LUÔN chia CHỦ ĐỘNG!"
        },
        {
          id: "TM1-Q18",
          domain: "Part 6 Completion",
          lessonRef: "G3_3",
          passage: MOCK1_PART6_PASSAGE,
          q: "Chọn từ nối liên kết câu phù hợp nhất cho chỗ trống [18]:",
          options: [
            "(A) Nevertheless",
            "(B) Consequently",
            "(C) Otherwise",
            "(D) Conversely"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc câu trước [18] (Jenkins & staging sẽ tạm ngưng từ 11h đêm) và câu chứa [18] (kỹ sư nên chạy build trước 10h tối).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Câu trước nêu nguyên nhân (hệ thống bảo trì không truy cập được), câu sau nêu hệ quả/khuyến nghị hợp lý (vì vậy kỹ sư cần kích hoạt bản dựng trước 10 giờ tối). Trạng từ liên kết chỉ kết quả 'Consequently' (= Therefore / As a result: Do đó, vì vậy) khớp hoàn hảo -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) Tuy nhiên (chỉ nhượng bộ ngược chiều); (C) Nếu không thì; (D) Ngược lại.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Làm câu điền Trạng từ liên kết ở Part 6 bắt buộc đọc cả câu liền trước: Nguyên nhân -> Kết quả = Therefore / Consequently / Accordingly!"
        },
        {
          id: "TM1-Q19",
          domain: "Part 6 Completion",
          lessonRef: "V2_5",
          passage: MOCK1_PART6_PASSAGE,
          q: "Chọn từ vựng CNTT chuẩn xác nhất cho chỗ trống [19]:",
          options: [
            "(A) credentials",
            "(B) appliances",
            "(C) itineraries",
            "(D) warranties"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm 'reset their multi-factor authentication [19] ___ upon logging in' (đặt lại thông tin xác thực khi đăng nhập).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong CNTT & TOEIC, 'login / authentication credentials' = thông tin định danh đăng nhập (mật khẩu, mã khóa, token xác thực) -> chọn (A) credentials.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) thiết bị điện gia dụng; (C) lịch trình chuyến đi; (D) phiếu bảo hành.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm từ tủ của bộ phận IT trong đề TOEIC: 'user credentials / login credentials' (thông tin đăng nhập) luôn đi với 'log in / reset / confidential'!"
        },
        {
          id: "TM1-Q20",
          domain: "Part 6 Completion",
          lessonRef: "G4_5",
          passage: MOCK1_PART6_PASSAGE,
          q: "Chọn câu văn phù hợp nhất để điền vào vị trí [20] ở đoạn cuối thông báo:",
          options: [
            "(A) The new cafeteria menu will take effect next Monday.",
            "(B) Detailed step-by-step setup instructions have been posted on the internal wiki.",
            "(C) However, Saturday's upgrade was canceled due to rain.",
            "(D) All hardware invoices must be signed by the vendor."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu trước [20] thông báo nhân viên sẽ được yêu cầu đặt lại xác thực đa lớp (MFA) vào sáng thứ Hai; câu sau [20] cảm ơn sự hợp tác.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khi yêu cầu toàn thể nhân viên thực hiện thao tác kỹ thuật mới (reset MFA), câu tiếp theo hợp mạch văn nhất là cung cấp tài liệu hướng dẫn cách làm: 'Hướng dẫn cài đặt chi tiết từng bước đã được đăng trên trang wiki nội bộ' -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) lệch sang nhà ăn; (C) mâu thuẫn hoàn toàn với toàn bộ thông báo đang hướng dẫn lịch bảo trì thứ Bảy; (D) lệch sang hóa đơn mua sắm.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Bí quyết ăn trọn câu Điền câu (Sentence Insertion) Part 6: Câu đúng luôn nối tiếp trực tiếp hành động ở câu đứng ngay trước nó và KHÔNG giới thiệu chủ đề xa lạ!"
        },

        // --- Câu 21–25: Part 7 Reading (Email Gia hạn License & Slack #release-ops) ---
        {
          id: "TM1-Q21",
          domain: "Part 7 Reading",
          lessonRef: "V1_2",
          passage: MOCK1_PART7_EMAIL_PASSAGE,
          q: "Why did Clara Jenkins send this email to NexaBank?",
          options: [
            "(A) To apologize for an unexpected monitoring server outage.",
            "(B) To encourage early renewal of an expiring software contract.",
            "(C) To announce the cancellation of an August conference in Singapore.",
            "(D) To request technical feedback on a beta JVM agent."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc dòng Subject ('Annual Enterprise Subscription Renewal') và 2 câu đầu đoạn 1.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Email nhắc hợp đồng Enterprise sắp hết hạn ngày 31/5 và đề xuất ưu đãi giữ nguyên giá cũ + tặng vé hội nghị nếu gia hạn sớm trước ngày 20/5 -> mục đích chính là khuyến khích gia hạn sớm hợp đồng phần mềm sắp hết hạn -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) không có sự cố sập mạng nào; (C) hội nghị tháng 8 đang được tặng vé chứ không hủy; (D) không xin phản hồi bản beta.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Câu hỏi mục đích Email ('Why was the email sent?') luôn giải quyết được trong 10 giây chỉ bằng dòng Subject + 2 dòng đầu tiên!"
        },
        {
          id: "TM1-Q22",
          domain: "Part 7 Reading",
          lessonRef: "V4_6",
          passage: MOCK1_PART7_EMAIL_PASSAGE,
          q: "What benefit will NexaBank receive if it returns the signed form before May 20?",
          options: [
            "(A) An immediate 12% discount below its current $18,000 fee.",
            "(B) An upgrade from 250 to 500 monitored JVM nodes.",
            "(C) Two conference passes provided at no additional cost.",
            "(D) Free onsite training at NexaBank's headquarters."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Quét mốc 'prior to May 20' và cụm 'early renewal includes...' ở đầu đoạn 2.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đoạn 2 viết: 'early renewal includes two complimentary tickets to our CloudObservability Summit'. Cụm 'two complimentary tickets' được paraphrase đỉnh cao sang '(C) Two conference passes provided at no additional cost' (complimentary = at no additional cost; tickets = passes)!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy số liệu 12%: bài nói giữ nguyên giá $18,000 để tránh đợt TĂNG giá 12% tháng Sáu, chứ không phải giảm thêm 12% dưới mức $18,000!; (B) và (D) không có trong bài.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cẩn thận bẫy con số % trong TOEIC Part 7! Hãy đọc kỹ từ đi kèm con số ('lock in existing rate despite upcoming 12% adjustment' ≠ '12% discount'). Và nhớ: complimentary = free = at no charge!"
        },
        {
          id: "TM1-Q23",
          domain: "Part 7 Reading",
          lessonRef: "V3_3",
          passage: MOCK1_PART7_SLACK_PASSAGE,
          q: "What concern does Minh Tran raise at 9:45 A.M.?",
          options: [
            "(A) Functional regression tests failed on the login module.",
            "(B) A new feature consumes significantly more memory under heavy load.",
            "(C) Production deployment must be postponed until next Wednesday.",
            "(D) Customer credit card transactions are timing out on staging."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc tin nhắn của Minh Tran lúc `[09:45 AM]` ngay sau từ chuyển ý 'However'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Minh báo cáo kiểm thử chức năng xanh 100%, 'However, load testing revealed that the new PDF receipt generator increases heap memory consumption by 28% when more than 200 requests hit simultaneously' -> khớp chính xác với (B) tính năng mới ngốn bộ nhớ hơn đáng kể khi tải cao.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) ngược với 'Functional tests are 100% green'; (C) nhóm vẫn deploy bản v4.6 core hôm nay chứ không hoãn sang thứ Tư; (D) không đề cập.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Với dạng bài Chat / Slack nhiều người trong TOEIC mới, hãy định vị thẳng theo `[Timestamp] + Tên người` được hỏi để không đọc lan man!"
        },
        {
          id: "TM1-Q24",
          domain: "Part 7 Reading",
          lessonRef: "V4_4",
          passage: MOCK1_PART7_SLACK_PASSAGE,
          q: "At 9:47 A.M., what does Marcus Webb mean when he writes, 'Let's play it safe'?",
          options: [
            "(A) They should avoid taking unnecessary risks during peak Friday traffic.",
            "(B) They need to install antivirus software on all office laptops.",
            "(C) They ought to hire an external QA agency to retest the app.",
            "(D) They should shut down the entire payment platform at noon."
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu hỏi ẩn ý ngữ cảnh (Pragmatic Meaning) xoay quanh thành ngữ 'Let's play it safe' ở tin nhắn `[09:47 AM]`.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Ngay trước đó Marcus nhắc: 'Friday traffic usually peaks right around noon' (Lưu lượng thứ Sáu thường đạt đỉnh đúng khoảng giữa trưa), và ngay sau đó đề xuất tắt tạm tính năng xuất PDF hàng loạt qua feature flag để triển khai phần cốt lõi an toàn. Vậy 'play it safe' = chọn phương án thận trọng, tránh mạo hiểm không đáng có vào giờ cao điểm -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) hiểu nghĩa đen chữ 'safe' sang bảo mật virus; (C) không nhắc thuê ngoài; (D) tắt cờ 1 tính năng phụ chứ không phải đóng sập cả nền tảng thanh toán.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Gặp câu hỏi 'What does the writer mean when he writes...?', hãy kẹp câu trước (bối cảnh rủi ro) + câu sau (hành động đề xuất) để suy ra ý định thực sự!"
        },
        {
          id: "TM1-Q25",
          domain: "Part 7 Reading",
          lessonRef: "V2_3",
          passage: MOCK1_PART7_SLACK_PASSAGE,
          q: "What will Minh Tran most likely do before 10:30 A.M.?",
          options: [
            "(A) Host a retrospective meeting with the marketing team.",
            "(B) Modify a production configuration setting to turn off a feature flag.",
            "(C) Permanently delete the PDF generator source code from Git.",
            "(D) Travel to the data center to install extra RAM modules."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Ghép đề xuất của Marcus (`disable PDF batch generation via the feature flag`) với câu chốt của Elena lúc `[09:49 AM]` (`Minh, please update the config map on production before 10:30 AM`).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Elena đồng ý với phương án tắt feature flag của Marcus và giao Minh cập nhật `config map` trên production trước 10:30 sáng -> suy luận kết hợp 2 tin nhắn (multi-message inference) cho ra (B) chỉnh sửa thiết lập cấu hình production để tắt cờ tính năng.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (C) sai vì họ sẽ tinh chỉnh bộ nhớ vào thứ Hai ('tune memory allocation on Monday') chứ không xóa vĩnh viễn code; (A) và (D) hoàn toàn không có cơ sở.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Câu cuối của đoạn Chat luôn đòi hỏi nối thông tin của 2 người nói ('Agreed' ở tin cuối tham chiếu ngược về đề xuất ở tin liền trước)!"
        }
      ]
    },

    /* =========================================================================
     * ĐỀ 3: TOEIC_MOCK_02 — ĐỀ THI THỬ TOEIC 600+ CHUẨN ETS SỐ 02 (25 CÂU • 25 PHÚT)
     * ========================================================================= */
    {
      id: "TOEIC_MOCK_02",
      title: "Đề Thi Thử TOEIC 600+ Chuẩn ETS — Đề Số 02",
      subtitle: "Độ khó nhỉnh lên ngưỡng 650–750+: 6 câu Nghe bẫy trả lời gián tiếp + 10 câu Part 5 phân hóa + 4 câu Part 6 Hợp đồng/Mua sắm + 5 câu Part 7 Tuyển dụng & Hội nghị CNTT.",
      type: "toeic",
      minutes: 25,
      targetScore: "TOEIC 650–750+",
      questions: [
        // --- Câu 1–6: Listening (CÓ audioScript, KHÔNG lộ hội thoại trong q) ---
        {
          id: "TM2-Q01",
          domain: "Listening",
          lessonRef: "G1_5",
          audioScript: "Where should we store the backup laptops that arrived from the supplier this morning?",
          q: "🎧 [TOEIC Part 2 — Câu 01] Bấm Nghe câu hỏi và chọn phương án hồi đáp đúng nhất:",
          options: [
            "(A) Fifteen laptops in total.",
            "(B) Put them in the locked cabinet behind the IT desk.",
            "(C) Because the old models were out of warranty.",
            "(D) They arrived around nine thirty."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Từ để hỏi 'Where should we store...' (Chúng ta nên cất lô laptop dự phòng ở đâu?).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Hỏi 'Where' cần câu trả lời chỉ địa điểm/vị trí lưu trữ. (B) 'Hãy cất chúng vào tủ có khóa phía sau bàn trực IT' vừa khớp hành động 'store -> put them' vừa chỉ rõ nơi chốn.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) trả lời cho How many; (C) trả lời cho Why; (D) bẫy lặp từ 'arrived' và trả lời cho When.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Với câu hỏi 'Where', ngoài giới từ in/on/at đầu câu, ETS rất thích mở đầu đáp án đúng bằng động từ chỉ dẫn vị trí như 'Put it in...', 'Leave them on...'!"
        },
        {
          id: "TM2-Q02",
          domain: "Listening",
          lessonRef: "G2_4",
          audioScript: "Why don't we invite the database administrator to join our architecture review this afternoon?",
          q: "🎧 [TOEIC Part 2 — Câu 02] Bấm Nghe lời đề xuất và chọn phương án hồi đáp tự nhiên nhất:",
          options: [
            "(A) Because the database was migrated last year.",
            "(B) That's a great idea—I'll send her a calendar invite right now.",
            "(C) No, the review lasted two hours.",
            "(D) On the fifth floor of the west tower."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc 'Why don't we + V...' KHÔNG PHẢI câu hỏi lý do, mà là LỜI RỦ / GỢI Ý (Suggestion)!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'Why don't we invite...' = 'Hay là chúng ta mời quản trị viên DB tham gia buổi rà soát kiến trúc chiều nay nhé?'. Đáp án chuẩn ETS cho lời gợi ý là tán thành + hành động tiếp nối: (B) 'Ý hay đấy — tôi sẽ gửi lời mời lịch họp cho cô ấy ngay bây giờ'.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy kinh điển nhất TOEIC: thí sinh nghe 'Why' liền chọn 'Because'!; (C) dùng 'No' + thì quá khứ lệch với 'this afternoon'; (D) trả lời cho Where.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cứ nghe 'Why don't we / Why don't you...' -> GẠCH BỎ NGAY đáp án có chữ 'Because'! Hãy tìm 'Good idea / Sounds great / Sure' hoặc lý do từ chối lịch sự 'Actually, I'm busy...'!"
        },
        {
          id: "TM2-Q03",
          domain: "Listening",
          lessonRef: "V1_3",
          audioScript: "So, David, what did you think of Mr. Takahashi's technical interview for the Senior Backend position? Honestly, Rachel, his system design answers on distributed caching were outstanding. My only concern is that he requires a four-week notice period at his current company, and we hoped to fill the role within two weeks. Still, candidates of his caliber are rare—let's ask HR to prepare an offer letter today.",
          q: "🎧 [TOEIC Part 3 — Câu 03] What slight concern does the man mention about Mr. Takahashi?",
          options: [
            "(A) He lacks hands-on experience with distributed caching.",
            "(B) His salary expectations exceed the department budget.",
            "(C) He cannot start working as soon as the team originally hoped.",
            "(D) He prefers working remotely from another country."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc câu hỏi 'What slight concern...' và nghe cụm nguyên văn 'My only concern is that...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Người đàn ông nói: 'My only concern is that he requires a four-week notice period at his current company, and we hoped to fill the role within two weeks' (Cần báo trước 4 tuần ở công ty hiện tại trong khi đội mong muốn có người trong 2 tuần) -> khớp trọn vẹn với (C) chưa thể bắt đầu làm việc sớm như kỳ vọng ban đầu.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) ngược nghĩa với 'his system design answers on distributed caching were outstanding'; (B) và (D) không được đề cập.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm từ vựng nhân sự quốc tế cực quan trọng cả khi thi TOEIC lẫn nhảy việc: 'notice period' = thời gian báo trước khi nghỉ việc (thường là 30 ngày / 4 tuần)!"
        },
        {
          id: "TM2-Q04",
          domain: "Listening",
          lessonRef: "V2_1",
          audioScript: "Hello, I'm calling from Vertex Software regarding Purchase Order 7740 for forty ergonomic office chairs. Our warehouse noticed that the charcoal-gray model you selected is currently out of stock until April fifteenth. However, we do have the midnight-black version available for immediate shipment at a five percent discount. Please call me back at 555-0192 to let us know whether you'd like to switch colors.",
          q: "🎧 [TOEIC Part 4 — Câu 04] Why is the speaker calling Vertex Software?",
          options: [
            "(A) To complain about defective chairs delivered yesterday.",
            "(B) To offer an alternative product option due to an inventory shortage.",
            "(C) To request a refund for an overcharged shipping invoice.",
            "(D) To confirm a new office address before scheduling delivery."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Bắt cặp thông tin 'out of stock' (hết hàng trong kho) + 'However, we do have the midnight-black version available...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Nhà cung cấp gọi cho Vertex Software báo mẫu ghế màu xám than đang hết hàng ('out of stock' = 'inventory shortage') và đề xuất chuyển sang bản màu đen giao ngay kèm giảm giá 5% ('offer an alternative product option') -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) hàng chưa giao chứ không phải hàng lỗi; (C) và (D) không xuất hiện trong tin nhắn thoại.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong Voicemail TOEIC Part 4 của nhà cung cấp, cấu trúc kinh điển luôn là: Báo hết hàng ('out of stock / back-ordered') + Đưa phương án thay thế ('alternative')!"
        },
        {
          id: "TM2-Q05",
          domain: "Listening",
          lessonRef: "V1_5",
          audioScript: "Good morning, attendees of the Global Cloud Native Summit. Due to unexpectedly high registration numbers, this morning's keynote address on Java Serverless Architecture has been moved from Hall B to the Grand Ballroom on the third floor. Complimentary shuttle buses to the downtown exhibition center will still depart from the North Entrance at five P.M. as scheduled.",
          q: "🎧 [TOEIC Part 4 — Câu 05] What change is being announced to summit attendees?",
          options: [
            "(A) The afternoon shuttle bus departure has been canceled.",
            "(B) The keynote speaker has been replaced at the last minute.",
            "(C) The opening keynote session has been relocated to a larger room.",
            "(D) Conference registration fees have been increased."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Nghe cụm báo thay đổi 'Due to unexpectedly high registration numbers, ... has been moved from Hall B to the Grand Ballroom'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Do số lượng đăng ký cao vượt dự kiến, bài diễn văn chính buổi sáng ('keynote address') đã được chuyển từ Hall B sang khán phòng lớn Grand Ballroom tầng 3 ('has been moved' = 'has been relocated') -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) sai vì xe buýt đưa đón vẫn khởi hành lúc 5 giờ chiều 'as scheduled' (như lịch cũ); (B) và (D) không có trong thông báo.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Chú ý phân biệt thông tin THAY ĐỔI ('has been moved to...') với thông tin GIỮ NGUYÊN ('will still depart... as scheduled') — ETS rất hay lấy phần giữ nguyên để gài bẫy bảo là bị hủy!"
        },
        {
          id: "TM2-Q06",
          domain: "Listening",
          lessonRef: "V1_2",
          audioScript: "Hi Kenji, did you get a chance to read the client's feedback on the dashboard mockups? Yes, Maya, I just went through their email. Overall they love the analytics charts, though they asked if we could add CSV export before Phase One launches. Let's set up a quick fifteen-minute call with the backend lead after lunch to check how much effort that would take.",
          q: "🎧 [TOEIC Part 3 — Câu 06] What will the speakers most likely do after lunch?",
          options: [
            "(A) Redesign all analytics charts from scratch.",
            "(B) Consult the backend lead about estimating a requested feature.",
            "(C) Fly to the client's headquarters to sign the contract.",
            "(D) Postpone the Phase One launch by two months."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Nghe câu chốt kế hoạch ở cuối đoạn 'Let's set up a quick fifteen-minute call with the backend lead after lunch to check how much effort...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Sau bữa trưa, hai người sẽ họp nhanh 15 phút với trưởng nhóm backend để kiểm tra xem việc thêm tính năng xuất CSV tốn bao nhiêu công sức ('check how much effort that would take' = 'estimating a requested feature') -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) ngược với 'they love the analytics charts'; (C) và (D) không hề được nhắc đến.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm 'Let's set up a call / sync up after...' ở câu cuối Part 3 luôn là đáp án trực tiếp cho câu hỏi 'What will the speakers do next?'!"
        },

        // --- Câu 7–16: Part 5 Grammar & Vocab ---
        {
          id: "TM2-Q07",
          domain: "Part 5 Grammar",
          lessonRef: "G3_2",
          q: "Benchmark tests confirmed that the new gRPC binary protocol is ___ faster than our legacy XML-based web service.",
          options: [
            "(A) very",
            "(B) much",
            "(C) so",
            "(D) too"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đứng ngay trước tính từ SO SÁNH HƠN 'faster than' ('___ faster than').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Quy tắc nhấn mạnh cấp so sánh hơn trong TOEIC: Tuyệt đối KHÔNG dùng 'very / so / too' trước tính từ so sánh hơn (-er / more)! Thay vào đó phải dùng nhóm từ nhấn mạnh: 'much / far / even / still / significantly / considerably + so sánh hơn' -> chọn (B) much.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) very, (C) so, (D) too chỉ đi được với tính từ/trạng từ ở cấp nguyên ('very fast', 'too slow'), không bao giờ đứng trước 'faster'!",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy sau chỗ trống là '-er than' hoặc 'more ... than' -> tìm ngay bộ tứ nhấn mạnh: much / far / even / significantly!"
        },
        {
          id: "TM2-Q08",
          domain: "Part 5 Vocab",
          lessonRef: "V2_2",
          q: "The board of directors agreed to ___ an additional $120,000 in the Q3 budget to strengthen cloud disaster recovery.",
          options: [
            "(A) allocate",
            "(B) reimburse",
            "(C) expire",
            "(D) inquire"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tân ngữ '$120,000 in the Q3 budget' + mục đích 'to strengthen cloud disaster recovery' (phân bổ ngân sách cho hạng mục).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'allocate + funds / budget / resources (to/for sth)' = phân bổ, cấp phát kinh phí/nguồn lực -> chọn (A). Dịch: Hội đồng quản trị đã đồng ý phân bổ thêm 120.000 đô la trong ngân sách quý 3 để củng cố hệ thống khôi phục thảm họa đám mây.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) hoàn tiền công tác phí cho cá nhân đã chi trước; (C) hết hạn (nội động từ, không có tân ngữ tiền bạc); (D) hỏi thông tin.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Collocation tài chính doanh nghiệp xuất hiện cực dày trong TOEIC 650+: 'allocate budget / funds / resources' (phân bổ ngân sách/nguồn lực)!"
        },
        {
          id: "TM2-Q09",
          domain: "Part 5 Grammar",
          lessonRef: "G3_4",
          q: "Automated renewal reminders are sent thirty days in advance to enterprise customers ___ annual licenses are about to expire.",
          options: [
            "(A) who",
            "(B) whom",
            "(C) whose",
            "(D) which"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Danh từ chỉ người 'enterprise customers' + ngay sau chỗ trống là CỤM DANH TỪ KHÔNG MẠO TỪ 'annual licenses' + động từ 'are'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Giữa hai danh từ có quan hệ sở hữu ('khách hàng doanh nghiệp MÀ giấy phép thường niên CỦA HỌ sắp hết hạn' = customers' annual licenses), ta bắt buộc dùng đại từ quan hệ sở hữu 'whose' (+ Noun + Verb) -> chọn (C) whose.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) 'who' đòi hỏi động từ theo sau hoặc mệnh đề thiếu chủ ngữ (ở đây 'annual licenses' đã là chủ ngữ của 'are'); (B) 'whom' làm tân ngữ; (D) 'which' thay cho vật, không chỉ sở hữu trước danh từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức vàng nhận diện 'whose' (dùng được cho CẢ người lẫn vật/công ty!): [Danh từ 1] + WHOSE + [Danh từ 2 không có a/an/the] + [Verb]!"
        },
        {
          id: "TM2-Q10",
          domain: "Part 5 Vocab",
          lessonRef: "V2_6",
          q: "Switching non-critical batch jobs to off-peak hours proved to be a highly ___ way to cut monthly AWS bills.",
          options: [
            "(A) economic",
            "(B) economical",
            "(C) economics",
            "(D) economize"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm 'a highly ___ way to cut monthly AWS bills' (một cách thức cực kỳ tiết kiệm để cắt giảm hóa đơn đám mây).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cặp tính từ bẫy kinh điển của ETS: 'economic' = thuộc về nền kinh tế vĩ mô ('economic growth / crisis'); còn 'economical' = tiết kiệm chi phí, không lãng phí (= cost-effective) -> ghép với 'cut monthly AWS bills' bắt buộc chọn (B) economical!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy 80% thí sinh chọn nhầm vì quen mắt chữ 'economic'; (C) danh từ môn kinh tế học; (D) động từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhớ mẹo ngắn gọn: 'economic' = kinh tế quốc gia; 'economical' = tiết kiệm hầu bao (= cost-effective / fuel-efficient)!"
        },
        {
          id: "TM2-Q11",
          domain: "Part 5 Grammar",
          lessonRef: "G2_5",
          q: "FinVerse Global is fully committed to ___ banking APIs that meet the highest international reliability standards.",
          options: [
            "(A) deliver",
            "(B) delivered",
            "(C) delivering",
            "(D) delivery"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc 'is fully committed to ___' + tân ngữ trực tiếp 'banking APIs' đứng ngay sau!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong cấu trúc 'be committed / dedicated / devoted to' (cam kết/tận tâm với việc gì), 'to' là GIỚI TỪ nên theo sau phải là Noun hoặc V-ing. Vì phía sau có tân ngữ trực tiếp 'banking APIs', danh từ 'delivery' không thể nhận tân ngữ trực tiếp nếu thiếu giới từ 'of' -> bắt buộc dùng Gerund (V-ing) 'delivering' -> chọn (C)!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy tưởng 'to + V nguyên mẫu'; (D) bẫy danh từ: nếu dùng 'delivery' thì phải viết là 'delivery OF banking APIs', không đứng thẳng trước danh từ khác để nhận tân ngữ như động từ V-ing.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Phân biệt V-ing và Danh từ sau giới từ: Có tân ngữ trực tiếp phía sau (không có 'of') -> chọn V-ing; Không có tân ngữ hoặc có 'of' -> chọn Danh từ!"
        },
        {
          id: "TM2-Q12",
          domain: "Part 5 Vocab",
          lessonRef: "V2_4",
          q: "To ___ merchants for yesterday's two-hour gateway outage, the company waived transaction processing fees for the entire week.",
          options: [
            "(A) compensate",
            "(B) complain",
            "(C) inspect",
            "(D) board"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc 'To ___ sb FOR + thiệt hại/sự cố' ('merchants for yesterday's outage') + hành động miễn phí giao dịch cả tuần ('waived fees').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'compensate sb for sth' = bồi thường, đền bù cho ai vì thiệt hại/sự bất tiện gì -> chọn (A) compensate. Dịch: Để đền bù cho các đối tác bán hàng vì sự cố gián đoạn cổng thanh toán hai tiếng hôm qua, công ty đã miễn phí xử lý giao dịch cho cả tuần.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) phàn nàn (nội động từ: complain to sb about sth); (C) thanh tra, kiểm tra; (D) sai cả nghĩa lẫn dạng từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức chăm sóc khách hàng chuẩn ETS: 'compensate (customers) FOR the inconvenience / delay / outage'!"
        },
        {
          id: "TM2-Q13",
          domain: "Part 5 Grammar",
          lessonRef: "G4_1",
          q: "During sprint planning, the product owner asked ___ the fraud-detection module could be integrated before Black Friday.",
          options: [
            "(A) that",
            "(B) whether",
            "(C) what",
            "(D) which"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Động từ tường thuật câu hỏi nghi vấn 'asked ___' + mệnh đề phía sau ĐÃ ĐỦ thành phần ('the fraud-detection module could be integrated').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khi tường thuật lại câu hỏi Yes/No ('asked / wondered / wanted to know + liệu rằng...'), ta dùng liên từ mệnh đề danh ngữ 'whether' (hoặc 'if'). Mệnh đề phía sau đã đầy đủ S + V bị động -> chọn (B) whether.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) 'that' dùng cho câu trần thuật xác định (stated/confirmed that), không đi sau 'asked'; (C) 'what' và (D) 'which' đòi hỏi mệnh đề sau phải khuyết S hoặc O (hoặc đi kèm danh từ).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy 'asked / determine / verify / clarify + ___ + Mệnh đề đủ S-V' -> chọn ngay 'whether' (liệu có... hay không)!"
        },
        {
          id: "TM2-Q14",
          domain: "Part 5 Grammar",
          lessonRef: "G4_4",
          q: "Adopting event-driven architecture improved both system scalability and fault ___ across regional data centers.",
          options: [
            "(A) resilient",
            "(B) resiliently",
            "(C) resilience",
            "(D) more resilient"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc song song 'both [system scalability] and [fault ___]'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cặp liên từ tương quan 'both A and B' bắt buộc A và B phải ĐỒNG ĐẲNG TỪ LOẠI. Vế A là cụm danh từ 'system scalability' (Danh từ ghép), nên vế B đứng sau danh từ phụ 'fault' cũng bắt buộc là một Danh từ -> chọn (C) resilience ('fault resilience' = khả năng chống chịu lỗi).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (D) là tính từ; (B) là trạng từ — đều phá vỡ cấu trúc song song với danh từ 'scalability'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhìn thấy 'both...and', 'either...or', 'not only...but also' -> soi ngay từ loại vế còn lại để chọn từ cùng loại (Noun đi với Noun, V-ing đi với V-ing)!"
        },
        {
          id: "TM2-Q15",
          domain: "Part 5 Vocab",
          lessonRef: "V1_6",
          q: "After successful pilot testing in Vietnam, the company plans to ___ out the biometric login feature across Southeast Asia next month.",
          options: [
            "(A) roll",
            "(B) call",
            "(C) run",
            "(D) figure"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Giới từ 'out' đứng ngay sau chỗ trống + tân ngữ 'the biometric login feature across Southeast Asia' (triển khai/ra mắt tính năng trên diện rộng).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cụm động từ vàng của ngành phần mềm & thương mại TOEIC: 'roll out (a product / feature / update)' = chính thức tung ra, triển khai rộng rãi -> chọn (A) roll.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) call off mới là hủy bỏ ('call out' là gọi tên/chỉ trích); (C) run out OF = cạn kiệt; (D) figure out = tìm ra lời giải.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Động từ viết tách 'roll out' (triển khai ra mắt); Danh từ viết liền 'a phased rollout' (đợt triển khai theo giai đoạn)!"
        },
        {
          id: "TM2-Q16",
          domain: "Part 5 Grammar",
          lessonRef: "G4_3",
          q: "Prior to the IPO filing, our chief financial officer had an independent cybersecurity firm ___ all payment microservices.",
          options: [
            "(A) audited",
            "(B) to audit",
            "(C) audit",
            "(D) auditing"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cấu trúc cầu khiến chủ động 'had + [người/tổ chức thực hiện: an independent cybersecurity firm] + ___ + [tân ngữ: all payment microservices]'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cấu trúc Cầu khiến (Causative Form): 'have + Somebody + V-nguyên-thể không to' (thuê/nhờ ai làm gì — chủ động) vs 'have + Something + P2' (nhờ cái gì được làm — bị động). Ở đây 'an independent cybersecurity firm' là đơn vị chủ động kiểm toán 'all payment microservices' -> dùng V nguyên mẫu 'audit' -> chọn (C)!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy nhìn thấy 'had' tưởng quá khứ hoàn thành 'had audited' (nhưng ở giữa lại là tân ngữ chỉ tổ chức!); (B) 'to audit' chỉ đúng nếu động từ là 'get sb TO V', còn 'have sb V' không có 'to'!",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức cầu khiến 3 giây: 'have + Người + V-bare' | 'get + Người + to V' | 'have/get + Vật + V-ed/P2'!"
        },

        // --- Câu 17–20: Part 6 Completion (Email Mua sắm & Hợp đồng SLA) ---
        {
          id: "TM2-Q17",
          domain: "Part 6 Completion",
          lessonRef: "V2_1",
          passage: [
            "To: Henrik Lindqvist, Procurement Lead <h.lindqvist@nordicpay.se>",
            "From: Elena Vance, Enterprise Sales <evance@datashield-sec.com>",
            "Date: November 4",
            "Subject: Master Service Agreement & Hardware Appliance Quote (#QT-904)",
            "",
            "Dear Mr. Lindqvist,",
            "Thank you for selecting DataShield Security. Attached is the finalized Master Service Agreement covering four hardware encryption modules for your Stockholm data center. Under Clause 8, DataShield guarantees 99.99% uptime and agrees to [17] ___ by all European Union GDPR data-residency regulations.",
            "",
            "Over the past six years, our engineering team [18] ___ mission-critical encryption appliances to more than eighty regulated banks across Europe. [19] ___.",
            "",
            "Please note that purchase orders [20] ___ on or before November 15 will qualify for waived express shipping fees. Feel free to reach out if your legal counsel requires any clarifications."
          ].join("\n"),
          q: "Chọn động từ chuẩn xác nhất điền vào chỗ trống [17] trong email hợp đồng:",
          options: [
            "(A) abide",
            "(B) comply",
            "(C) conform",
            "(D) adhere"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Ngay sau chỗ trống [17] là giới từ 'by' ('agrees to [17] ___ by all ... regulations').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cả 4 đáp án đều mang nghĩa 'tuân thủ quy định', nhưng chỉ duy nhất 'abide' đi với giới từ 'by' ('abide by regulations') -> chọn (A) abide.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) comply đi với 'with'; (C) conform và (D) adhere đều đi với 'to'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Luôn liếc mắt sang từ đứng NGAY SAU chỗ trống ở Part 5 & Part 6 — thấy 'by' + luật lệ/quy định là chốt 'abide' trong tích tắc!"
        },
        {
          id: "TM2-Q18",
          domain: "Part 6 Completion",
          lessonRef: "G2_1",
          passage: [
            "To: Henrik Lindqvist, Procurement Lead <h.lindqvist@nordicpay.se>",
            "From: Elena Vance, Enterprise Sales <evance@datashield-sec.com>",
            "Date: November 4",
            "Subject: Master Service Agreement & Hardware Appliance Quote (#QT-904)",
            "",
            "Dear Mr. Lindqvist,",
            "Thank you for selecting DataShield Security. Attached is the finalized Master Service Agreement covering four hardware encryption modules for your Stockholm data center. Under Clause 8, DataShield guarantees 99.99% uptime and agrees to [17] ___ by all European Union GDPR data-residency regulations.",
            "",
            "Over the past six years, our engineering team [18] ___ mission-critical encryption appliances to more than eighty regulated banks across Europe. [19] ___.",
            "",
            "Please note that purchase orders [20] ___ on or before November 15 will qualify for waived express shipping fees. Feel free to reach out if your legal counsel requires any clarifications."
          ].join("\n"),
          q: "Chọn dạng động từ đúng nhất điền vào chỗ trống [18]:",
          options: [
            "(A) supplies",
            "(B) supplied",
            "(C) has supplied",
            "(D) will be supplied"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Trạng ngữ thời gian mở đầu câu 'Over the past six years' (Trong suốt 6 năm qua).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cụm 'Over/During/In the past + số năm' là dấu hiệu kinh điển số 1 của thì Hiện tại Hoàn thành (kéo dài từ quá khứ đến hiện tại). Chủ ngữ số ít 'our engineering team' + có tân ngữ 'appliances' -> chọn (C) has supplied.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy chữ 'past' khiến nhiều người lầm tưởng là Quá khứ Đơn ('last six years' không có 'the/over' khác với 'over the past six years'!); (D) sai cả thì lẫn thể bị động.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy 'Over the past / last + [số] + years/months/decades' -> khoanh ngay Hiện tại Hoàn thành (have/has + P2)!"
        },
        {
          id: "TM2-Q19",
          domain: "Part 6 Completion",
          lessonRef: "G4_5",
          passage: [
            "To: Henrik Lindqvist, Procurement Lead <h.lindqvist@nordicpay.se>",
            "From: Elena Vance, Enterprise Sales <evance@datashield-sec.com>",
            "Date: November 4",
            "Subject: Master Service Agreement & Hardware Appliance Quote (#QT-904)",
            "",
            "Dear Mr. Lindqvist,",
            "Thank you for selecting DataShield Security. Attached is the finalized Master Service Agreement covering four hardware encryption modules for your Stockholm data center. Under Clause 8, DataShield guarantees 99.99% uptime and agrees to [17] ___ by all European Union GDPR data-residency regulations.",
            "",
            "Over the past six years, our engineering team [18] ___ mission-critical encryption appliances to more than eighty regulated banks across Europe. [19] ___.",
            "",
            "Please note that purchase orders [20] ___ on or before November 15 will qualify for waived express shipping fees. Feel free to reach out if your legal counsel requires any clarifications."
          ].join("\n"),
          q: "Chọn câu phù hợp nhất điền vào vị trí [19] để củng cố uy tín của nhà cung cấp:",
          options: [
            "(A) Consequently, your Stockholm office will close permanently next month.",
            "(B) Each deployment includes 24/7 dedicated support from certified security engineers.",
            "(C) Unfortunately, we no longer manufacture encryption hardware for banks.",
            "(D) Please return the defective monitors in their original cardboard boxes."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu trước [19] đang giới thiệu bề dày cung cấp thiết bị mã hóa cho hơn 80 ngân hàng châu Âu.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Sau khi khẳng định kinh nghiệm triển khai cho hơn 80 ngân hàng, câu bổ sung giá trị dịch vụ đi kèm hợp lý nhất là: 'Mỗi đợt triển khai đều bao gồm gói hỗ trợ chuyên biệt 24/7 từ các kỹ sư bảo mật có chứng chỉ' -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) vô lý; (C) mâu thuẫn trực tiếp với hợp đồng đang bán thiết bị mã hóa; (D) lạc sang trả màn hình lỗi.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong thư chào hàng/hợp đồng (Sales/Contract Email), câu điền khuyết giữa đoạn thường nêu thêm quyền lợi bảo hành, hỗ trợ 24/7 hoặc cam kết chất lượng!"
        },
        {
          id: "TM2-Q20",
          domain: "Part 6 Completion",
          lessonRef: "G3_5",
          passage: [
            "To: Henrik Lindqvist, Procurement Lead <h.lindqvist@nordicpay.se>",
            "From: Elena Vance, Enterprise Sales <evance@datashield-sec.com>",
            "Date: November 4",
            "Subject: Master Service Agreement & Hardware Appliance Quote (#QT-904)",
            "",
            "Dear Mr. Lindqvist,",
            "Thank you for selecting DataShield Security. Attached is the finalized Master Service Agreement covering four hardware encryption modules for your Stockholm data center. Under Clause 8, DataShield guarantees 99.99% uptime and agrees to [17] ___ by all European Union GDPR data-residency regulations.",
            "",
            "Over the past six years, our engineering team [18] ___ mission-critical encryption appliances to more than eighty regulated banks across Europe. [19] ___.",
            "",
            "Please note that purchase orders [20] ___ on or before November 15 will qualify for waived express shipping fees. Feel free to reach out if your legal counsel requires any clarifications."
          ].join("\n"),
          q: "Chọn dạng rút gọn mệnh đề quan hệ chuẩn xác nhất cho chỗ trống [20]:",
          options: [
            "(A) submit",
            "(B) submitting",
            "(C) submitted",
            "(D) will submit"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Mệnh đề sau 'that' đã có động từ chính 'will qualify'! Chỗ trống đứng sau danh từ chỉ vật 'purchase orders' và trước giới từ 'on or before'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đơn đặt hàng ('purchase orders') ĐƯỢC gửi đi (bị động) trước ngày 15/11 sẽ đủ điều kiện miễn phí vận chuyển nhanh. Rút gọn mệnh đề quan hệ bị động ('which are submitted') -> giữ lại P2 'submitted' -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) làm thừa động từ chia thì trong cùng một mệnh đề; (B) chủ động sai vì sau chỗ trống không có tân ngữ và đơn hàng không tự nộp chính nó.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm danh từ rút gọn bị động xuất hiện dày đặc trong mọi đề TOEIC: 'orders placed / invoices submitted / items purchased / candidates selected + giới từ'!"
        },

        // --- Câu 21–25: Part 7 Reading (Tin Tuyển dụng Senior Java + Hội nghị CNTT) ---
        {
          id: "TM2-Q21",
          domain: "Part 7 Reading",
          lessonRef: "V1_3",
          passage: [
            "CAREER OPPORTUNITY — PaySphere Technologies (Singapore / Hybrid)",
            "Position: Lead Java Distributed Systems Engineer",
            "",
            "About the Role:",
            "PaySphere processes over $9 billion in annual cross-border B2B settlements. We are seeking a seasoned Lead Java Engineer to spearhead our next-generation real-time clearing engine.",
            "",
            "Minimum Qualifications:",
            "• At least 6 years of production backend development using Java (17 or 21) and Spring Boot.",
            "• Proven experience designing event-driven microservices with Apache Kafka and PostgreSQL.",
            "• Strong command of English for daily collaboration with engineering squads in Zurich and Tokyo.",
            "",
            "Preferred (Bonus) Qualifications:",
            "• Prior experience with Kubernetes operators or AWS Terraform modules.",
            "• Familiarity with ISO 20022 financial messaging standards.",
            "",
            "Compensation & Perks:",
            "• Competitive base salary (SGD 135,000–165,000/year) plus annual equity refreshers.",
            "• Flexible hybrid schedule (2 days onsite in Marina Bay, 3 days remote) or full Visa & relocation sponsorship for overseas hires."
          ].join("\n"),
          q: "Which of the following is a mandatory requirement for applicants?",
          options: [
            "(A) Previous experience writing AWS Terraform modules.",
            "(B) Current residency in Zurich or Tokyo.",
            "(C) A minimum of six years building Java backend systems.",
            "(D) Certification in ISO 20022 banking standards."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Phân biệt rạch ròi mục 'Minimum Qualifications' (bắt buộc = mandatory) với mục 'Preferred (Bonus) Qualifications' (ưu tiên/điểm cộng, không bắt buộc)!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Dòng đầu mục 'Minimum Qualifications' ghi rõ: 'At least 6 years of production backend development using Java (17 or 21) and Spring Boot'. 'At least 6 years' = 'A minimum of six years' -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) nằm ở mục 'Preferred (Bonus)' — bẫy quen thuộc nhất trong bài đọc JD tuyển dụng của TOEIC Part 7!; (B) sai vì vị trí đặt tại Singapore, chỉ phối hợp hàng ngày với đội ở Zurich và Tokyo.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Khi đọc tin Tuyển dụng (Job Ad) trong TOEIC Part 7, luôn khoanh vùng tiêu đề phụ: 'Minimum / Required' = Bắt buộc; 'Preferred / Desired / A plus' = Không bắt buộc!"
        },
        {
          id: "TM2-Q22",
          domain: "Part 7 Reading",
          lessonRef: "V4_5",
          passage: [
            "CAREER OPPORTUNITY — PaySphere Technologies (Singapore / Hybrid)",
            "Position: Lead Java Distributed Systems Engineer",
            "",
            "About the Role:",
            "PaySphere processes over $9 billion in annual cross-border B2B settlements. We are seeking a seasoned Lead Java Engineer to spearhead our next-generation real-time clearing engine.",
            "",
            "Minimum Qualifications:",
            "• At least 6 years of production backend development using Java (17 or 21) and Spring Boot.",
            "• Proven experience designing event-driven microservices with Apache Kafka and PostgreSQL.",
            "• Strong command of English for daily collaboration with engineering squads in Zurich and Tokyo.",
            "",
            "Preferred (Bonus) Qualifications:",
            "• Prior experience with Kubernetes operators or AWS Terraform modules.",
            "• Familiarity with ISO 20022 financial messaging standards.",
            "",
            "Compensation & Perks:",
            "• Competitive base salary (SGD 135,000–165,000/year) plus annual equity refreshers.",
            "• Flexible hybrid schedule (2 days onsite in Marina Bay, 3 days remote) or full Visa & relocation sponsorship for overseas hires."
          ].join("\n"),
          q: "What is indicated about PaySphere Technologies in the advertisement?",
          options: [
            "(A) It requires employees to work from the Marina Bay office five days a week.",
            "(B) It assists international candidates with moving to Singapore.",
            "(C) It offers a fixed salary with no stock or equity options.",
            "(D) It only hires engineers who speak Japanese fluently."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Quét mục 'Compensation & Perks' ở cuối bài tuyển dụng.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Dòng cuối nêu rõ: 'full Visa & relocation sponsorship for overseas hires' (tài trợ toàn bộ thị thực và chi phí chuyển chỗ ở cho ứng viên tuyển từ nước ngoài) -> paraphrase chuẩn thành (B) 'assists international candidates with moving to Singapore'.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) sai vì lịch hybrid chỉ cần lên văn phòng 2 ngày/tuần; (C) sai vì có 'annual equity refreshers' (cổ phiếu thưởng hàng năm); (D) chỉ yêu cầu tiếng Anh tốt.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Từ vựng vàng khi săn việc Global / Onsite: 'relocation sponsorship / allowance' = hỗ trợ chi phí chuyển sang nước ngoài sinh sống & làm việc!"
        },
        {
          id: "TM2-Q23",
          domain: "Part 7 Reading",
          lessonRef: "V1_5",
          passage: [
            "DOCUMENT 1: APAC Enterprise Java & AI Conference — Day 1 Workshop Track (October 22)",
            "Venue: Suntec Convention Center, Level 4",
            "• Track A (Room 401, 1:30 P.M.–4:00 P.M.): High-Performance JVM Memory Tuning — Led by Dr. Kenji Sato ( limited to 40 participants; laptop required).",
            "• Track B (Room 405, 1:30 P.M.–4:00 P.M.): Building Resilient Kafka Saga Workflows — Led by Priya Nair (open seating for up to 120 attendees).",
            "• Track C (Room 408, 2:00 P.M.–4:30 P.M.): Spring AI & Vector Databases in Production — Led by Lucas Meyer (limited to 50 participants).",
            "*Note: Annual Pass holders may register for one afternoon workshop at no extra fee before October 10. Registrations received after October 10 incur a $65 workshop surcharge.",
            "",
            "---",
            "DOCUMENT 2: Email Confirmation",
            "To: Hoai Nam Nguyen <nam.nguyen@vietfin.vn>",
            "From: APAC Conference Desk <registration@apacjava.org>",
            "Date: October 6",
            "Subject: Workshop Seat Confirmed!",
            "",
            "Dear Mr. Nguyen,",
            "Thank you for activating your Annual Pass privilege. Your seat has been reserved for the afternoon session in Room 401 on October 22. Please remember to install JDK 21 and VisualVM on the computer you bring to the venue."
          ].join("\n"),
          q: "Who will lead the workshop that Mr. Nguyen is scheduled to attend?",
          options: [
            "(A) Dr. Kenji Sato",
            "(B) Priya Nair",
            "(C) Lucas Meyer",
            "(D) Hoai Nam Nguyen"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Kết hợp 2 văn bản (Cross-reference): Email báo Mr. Nguyen đặt chỗ ở 'Room 401' -> đối chiếu lên Lịch hội nghị xem ai dạy ở Room 401!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Ở Văn bản 2, Mr. Nguyen được xác nhận chỗ ngồi tại 'Room 401 on October 22' (kèm lời nhắc mang máy tính cài JDK 21 & VisualVM). Tra ngược lên Văn bản 1: 'Track A (Room 401...): High-Performance JVM Memory Tuning — Led by Dr. Kenji Sato (laptop required)' -> chọn (A) Dr. Kenji Sato.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) dạy ở Room 405; (C) dạy ở Room 408; (D) là tên người tham dự.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Dạng bài Đôi (Double Passage) ăn điểm dễ nhất ở câu nối cầu bắc qua Mã phòng (Room 401) / Mã đơn hàng / Ngày tháng giữa 2 văn bản!"
        },
        {
          id: "TM2-Q24",
          domain: "Part 7 Reading",
          lessonRef: "V4_6",
          passage: [
            "DOCUMENT 1: APAC Enterprise Java & AI Conference — Day 1 Workshop Track (October 22)",
            "Venue: Suntec Convention Center, Level 4",
            "• Track A (Room 401, 1:30 P.M.–4:00 P.M.): High-Performance JVM Memory Tuning — Led by Dr. Kenji Sato (limited to 40 participants; laptop required).",
            "• Track B (Room 405, 1:30 P.M.–4:00 P.M.): Building Resilient Kafka Saga Workflows — Led by Priya Nair (open seating for up to 120 attendees).",
            "• Track C (Room 408, 2:00 P.M.–4:30 P.M.): Spring AI & Vector Databases in Production — Led by Lucas Meyer (limited to 50 participants).",
            "*Note: Annual Pass holders may register for one afternoon workshop at no extra fee before October 10. Registrations received after October 10 incur a $65 workshop surcharge.",
            "",
            "---",
            "DOCUMENT 2: Email Confirmation",
            "To: Hoai Nam Nguyen <nam.nguyen@vietfin.vn>",
            "From: APAC Conference Desk <registration@apacjava.org>",
            "Date: October 6",
            "Subject: Workshop Seat Confirmed!",
            "",
            "Dear Mr. Nguyen,",
            "Thank you for activating your Annual Pass privilege. Your seat has been reserved for the afternoon session in Room 401 on October 22. Please remember to install JDK 21 and VisualVM on the computer you bring to the venue."
          ].join("\n"),
          q: "What can be inferred about Mr. Nguyen's workshop registration?",
          options: [
            "(A) He had to pay an additional $65 workshop surcharge.",
            "(B) He did not have to pay an extra fee for the afternoon workshop.",
            "(C) He registered for two workshops happening at 1:30 P.M.",
            "(D) He requested to borrow a laptop from the convention center."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: So sánh Ngày gửi email xác nhận ('Date: October 6') + tư cách 'Annual Pass' với dòng '*Note' ở cuối Văn bản 1 ('before October 10').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Văn bản 1 quy định người có 'Annual Pass' đăng ký trước ngày 10/10 được tham gia 1 hội thảo chiều 'at no extra fee' (không mất thêm phí). Văn bản 2 cho thấy anh Nguyễn có 'Annual Pass' và đã hoàn tất đăng ký vào ngày 6/10 (sớm hơn hạn 10/10) -> suy ra anh ấy không phải đóng phụ phí $65 -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy số tiền $65 (chỉ áp dụng cho đăng ký SAU ngày 10/10); (C) chỉ được đăng ký 1 buổi; (D) anh ấy tự mang máy tính cá nhân ('the computer you bring').",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Mọi bài đọc đôi TOEIC Part 7 có dòng '*Note' về mốc ngày ưu đãi ở Văn bản 1 ĐỀU sẽ bắt bạn nhìn 'Date:' của Email ở Văn bản 2 để suy ra có được miễn phí/giảm giá hay không!"
        },
        {
          id: "TM2-Q25",
          domain: "Part 7 Reading",
          lessonRef: "V1_2",
          passage: [
            "DOCUMENT 1: APAC Enterprise Java & AI Conference — Day 1 Workshop Track (October 22)",
            "Venue: Suntec Convention Center, Level 4",
            "• Track A (Room 401, 1:30 P.M.–4:00 P.M.): High-Performance JVM Memory Tuning — Led by Dr. Kenji Sato (limited to 40 participants; laptop required).",
            "• Track B (Room 405, 1:30 P.M.–4:00 P.M.): Building Resilient Kafka Saga Workflows — Led by Priya Nair (open seating for up to 120 attendees).",
            "• Track C (Room 408, 2:00 P.M.–4:30 P.M.): Spring AI & Vector Databases in Production — Led by Lucas Meyer (limited to 50 participants).",
            "*Note: Annual Pass holders may register for one afternoon workshop at no extra fee before October 10. Registrations received after October 10 incur a $65 workshop surcharge.",
            "",
            "---",
            "DOCUMENT 2: Email Confirmation",
            "To: Hoai Nam Nguyen <nam.nguyen@vietfin.vn>",
            "From: APAC Conference Desk <registration@apacjava.org>",
            "Date: October 6",
            "Subject: Workshop Seat Confirmed!",
            "",
            "Dear Mr. Nguyen,",
            "Thank you for activating your Annual Pass privilege. Your seat has been reserved for the afternoon session in Room 401 on October 22. Please remember to install JDK 21 and VisualVM on the computer you bring to the venue."
          ].join("\n"),
          q: "What is Mr. Nguyen reminded to do prior to attending his session?",
          options: [
            "(A) Print three copies of his flight itinerary.",
            "(B) Set up specific Java software tools on his laptop.",
            "(C) Arrive at Room 408 before 2:00 P.M.",
            "(D) Submit his presentation slides to Dr. Sato."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc câu cuối cùng của Email ('Please remember to install JDK 21 and VisualVM on the computer you bring...').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cụm 'install JDK 21 and VisualVM on the computer you bring' được diễn đạt khái quát (paraphrase từ cụ thể sang tổng quát) thành 'Set up specific Java software tools on his laptop' -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (D) không được nhắc tới; (C) sai mã phòng (anh ấy học ở Room 401 lúc 1:30 chiều, không phải Room 408).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Kỹ thuật Paraphrase cấp cao của ETS: biến tên riêng cụ thể ('JDK 21 and VisualVM') thành danh từ chung ('specific Java software tools')!"
        }
      ]
    },

    /* =========================================================================
     * ĐỀ 4: JAVA_ENG_01 — ĐỀ SÁT HẠCH TIẾNG ANH THỰC CHIẾN SENIOR JAVA (20 CÂU • 20 PHÚT)
     * ========================================================================= */
    {
      id: "JAVA_ENG_01",
      title: "Đề Sát Hạch Tiếng Anh Thực Chiến Senior Java & Tech Lead",
      subtitle: "20 câu sát hạch toàn diện năng lực làm việc quốc tế: 4 câu Nghe Standup/War-room + 10 câu Ngôn ngữ Code Review/Incident/System Design + 6 câu Đọc hiểu RFC, Postmortem & Email Khách hàng.",
      type: "java",
      minutes: 20,
      targetScore: "Chuẩn Senior Java / Global Tech Lead",
      questions: [
        // --- Câu 1–4: Nghe hiểu Daily Standup / Tech Call (CÓ audioScript, KHÔNG lộ hội thoại trong q) ---
        {
          id: "JV1-Q01",
          domain: "Listening",
          lessonRef: "V3_1",
          audioScript: "Quick update from my side: yesterday I finished implementing the Kafka dead-letter queue handler and unit tests are passing locally. Today I need to test schema compatibility against the staging registry, but my service account lacks read permission on the Confluent cluster. Alex, could you grant my staging role access right after standup?",
          q: "🎧 [Standup Audio — Câu 01] What is currently blocking the speaker's progress?",
          options: [
            "(A) Unit tests for the dead-letter queue handler are failing locally.",
            "(B) Missing access permissions to the staging schema registry cluster.",
            "(C) The Kafka broker in production ran out of disk storage.",
            "(D) Product requirements for the payment API have not been finalized."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tập trung nghe mệnh đề ngay sau từ 'but' và lời nhờ 'Alex, could you grant...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Người nói đã viết xong handler và pass unit test ở máy cá nhân, nhưng bị chặn khi test trên staging vì 'my service account lacks read permission on the Confluent cluster' -> khớp hoàn toàn với (B) thiếu quyền truy cập vào cụm staging.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) ngược với 'unit tests are passing locally'; (C) và (D) không xuất hiện trong báo cáo.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm từ chuẩn khi xin cấp quyền trong dự án Cloud quốc tế: 'lack read/write permission' — 'grant access to my service account'!"
        },
        {
          id: "JV1-Q02",
          domain: "Listening",
          lessonRef: "V3_4",
          audioScript: "Everyone on the bridge, listen up. Payment gateway p99 latency jumped to twelve seconds right after we enabled dynamic currency conversion five minutes ago. Thread dumps show HikariCP threads waiting on an unindexed lookup table. Let's flip the currency-conversion feature flag off right now to restore normal checkout flow, and then add the missing composite index in staging.",
          q: "🎧 [War-room Call — Câu 02] What immediate action does the incident commander decide to take?",
          options: [
            "(A) Restart all PostgreSQL database servers immediately.",
            "(B) Create a composite index directly on the live production database first.",
            "(C) Disable the newly enabled feature flag to stop customer impact.",
            "(D) Double the HikariCP maximum pool size to 200 connections."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Bắt mệnh lệnh tức thì 'Let's flip the ... feature flag off right now' vs việc làm sau ('and then add... in staging').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Chỉ huy sự cố quyết định tắt ngay cờ tính năng chuyển đổi ngoại tệ ('flip the currency-conversion feature flag off right now') để khôi phục luồng thanh toán, sau đó mới thêm composite index trên staging -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy thứ tự hành động: thêm index là bước làm SAU trên môi trường staging chứ không gõ trực tiếp lên prod đang cháy; (A) và (D) không được nêu.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thành ngữ rất hay dùng bởi kỹ sư Mỹ trong ca trực: 'flip/toggle a feature flag off' = tắt nhanh cờ tính năng!"
        },
        {
          id: "JV1-Q03",
          domain: "Listening",
          lessonRef: "V4_2",
          audioScript: "In our current monolith, placing an order synchronously calls the loyalty service and email service over HTTP. Whenever the email provider slows down, checkout threads hang and customers abandon their carts. By publishing an OrderPlaced event to Kafka via a transactional outbox table, checkout finishes in under fifty milliseconds regardless of downstream latency.",
          q: "🎧 [Architecture Sync — Câu 03] What main problem is the speaker solving by introducing Kafka and the Outbox pattern?",
          options: [
            "(A) Reducing monthly email marketing subscription costs.",
            "(B) Preventing slow downstream services from blocking customer checkouts.",
            "(C) Replacing relational databases entirely with flat text files.",
            "(D) Allowing mobile clients to query SQL tables directly."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Nghe nỗi đau hiện tại ('Whenever the email provider slows down, checkout threads hang...') và kết quả ('regardless of downstream latency').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Gọi đồng bộ HTTP khiến dịch vụ thanh toán bị treo theo mỗi khi dịch vụ gửi email phía dưới (downstream) bị chậm. Tách bất đồng bộ qua Kafka + Transactional Outbox giúp luồng checkout hoàn tất dưới 50ms không còn bị chặn bởi độ trễ bên dưới -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) hoàn toàn sai lệch về mặt kiến trúc.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thuộc lòng cụm vàng khi trình bày Event-Driven Architecture: 'decouple core checkout from slow downstream services'!"
        },
        {
          id: "JV1-Q04",
          domain: "Listening",
          lessonRef: "V4_1",
          audioScript: "Let's dive into a Java concurrency scenario. Suppose you notice sporadic corrupt dates in production logs, and you find a static `SimpleDateFormat` instance shared across controller threads. Why is that happening, and how would you fix it cleanly in modern Java?",
          q: "🎧 [Java Interview Audio — Câu 04] Which response best answers the interviewer's technical question?",
          options: [
            "(A) SimpleDateFormat is immutable, so the bug must be caused by network packet loss.",
            "(B) SimpleDateFormat mutates internal calendar state without synchronization; we should replace it with the immutable DateTimeFormatter.",
            "(C) Adding Thread.sleep(1000) before formatting dates guarantees thread safety.",
            "(D) Declaring the field public instead of private resolves all race conditions."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu hỏi phỏng vấn kinh điển về lỗi ngày tháng bị sai lệch ngẫu nhiên ('sporadic corrupt dates') khi dùng chung `static SimpleDateFormat` giữa nhiều luồng.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: `SimpleDateFormat` giữ biến trạng thái `Calendar` nội bộ có thể thay đổi (mutable) mà không đồng bộ hóa, dẫn tới race condition khi nhiều luồng gọi `.format()` cùng lúc. Trong Java 8+, cách sửa sạch và hiệu năng cao nhất là thay bằng `java.time.format.DateTimeFormatter` (hoàn toàn immutable và thread-safe) -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) sai kiến thức cơ bản (`SimpleDateFormat` KHÔNG immutable); (C) `Thread.sleep` không bao giờ đảm bảo thread-safety; (D) `public/private` là phạm vi truy cập, không liên quan race condition.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Khi trả lời phỏng vấn Senior Java bằng tiếng Anh, luôn trả lời theo cấu trúc 2 vế rõ ràng: (1) Root cause ('mutates internal state without synchronization') + (2) Clean modern fix ('replace with immutable DateTimeFormatter')!"
        },

        // --- Câu 5–14: Chọn từ/cấu trúc chuẩn Code Review, Incident & System Design ---
        {
          id: "JV1-Q05",
          domain: "Senior Java",
          lessonRef: "G2_4",
          q: "Which Pull Request review comment sounds the most constructive, polite, and idiomatic for an international engineering team?",
          options: [
            "(A) Your SQL query is terrible. Rewrite it immediately before I reject this PR.",
            "(B) Why didn't you use pagination? Everybody knows loading all rows crashes RAM.",
            "(C) Could we consider paginating this query so memory usage stays bounded as the table grows?",
            "(D) You must fix line 84 now, no discussion."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tìm câu dùng Modal Verb lịch sự ('Could we consider...'), chủ ngữ đồng hành ('we') và giải thích lý do kỹ thuật khách quan.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong văn hóa Code Review toàn cầu, Senior Engineer phê bình CODE chứ không tấn công NGƯỜI VIẾT: dùng 'Could we consider + V-ing...' thay cho 'You must / Why didn't you', kèm lợi ích hệ thống rõ ràng ('so memory usage stays bounded as the table grows') -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (B), (D) dùng ngôn từ miệt thị ('terrible'), đổ lỗi cá nhân ('Your... / Why didn't you') hoặc mệnh lệnh áp đặt gây độc hại văn hóa nhóm.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Đổi chủ ngữ từ 'You' sang 'We' hoặc chủ ngữ chỉ code ('This query might...') + Modal 'Could / Might / Would' là bí quyết vàng để giao tiếp lịch sự như Tech Lead bản xứ!"
        },
        {
          id: "JV1-Q06",
          domain: "Senior Java",
          lessonRef: "V3_2",
          q: "To ensure a zero-downtime rolling deployment, any database migration added in this release must remain strictly ___ with the currently running application version.",
          options: [
            "(A) backward-compatible",
            "(B) boilerplate",
            "(C) deprecated",
            "(D) tightly coupled"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'zero-downtime rolling deployment' + 'with the currently running application version' (chạy song song bản code cũ và bản DB mới mà không lỗi).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong lúc rolling update trên Kubernetes, các pod chạy code cũ vẫn đang truy cập DB vừa chạy Flyway migration mới. Do đó thay đổi DB bắt buộc phải 'backward-compatible' (tương thích ngược với phiên bản đang chạy) -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) đoạn code lặp đi lặp lại nhàm chán; (C) bị khai tử/ngừng khuyến khích dùng; (D) phụ thuộc cứng chặt vào nhau.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm collocation bắt buộc có mặt trong mọi checklist PR của Senior Backend: 'remain backward-compatible with existing clients / pods'!"
        },
        {
          id: "JV1-Q07",
          domain: "Senior Java",
          lessonRef: "V3_3",
          q: "Before routing 100% of production traffic to the refactored pricing engine, SREs performed a ___ release exposing it to just 2% of users in Singapore.",
          options: [
            "(A) canary",
            "(B) postmortem",
            "(C) deadlock",
            "(D) monolithic"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'exposing it to just 2% of users' trước khi mở 100% lưu lượng thật.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Chiến lược phát hành thử nghiệm cho một tỷ lệ nhỏ lưu lượng thật (1%–5%) để đo tỷ lệ lỗi trước khi mở rộng toàn bộ gọi là 'canary release / canary deployment' -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) họp mổ xẻ sau sự cố; (C) khóa chết đa luồng/DB; (D) kiến trúc nguyên khối.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Phân biệt 2 chiến lược deploy hay hỏi nhất: 'Blue-Green' = chuyển 100% lưu lượng sang cụm mới song song; 'Canary' = nhử từng phần nhỏ (1% -> 10% -> 50% -> 100%)!"
        },
        {
          id: "JV1-Q08",
          domain: "Senior Java",
          lessonRef: "V3_5",
          q: "Making the `POST /v1/transfers` endpoint ___ ensures that retrying a timed-out network request will never deduct money from the customer's wallet twice.",
          options: [
            "(A) verbose",
            "(B) idempotent",
            "(C) vulnerable",
            "(D) transient"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'retrying a timed-out network request will never deduct money ... twice' (gọi lại nhiều lần vẫn chỉ trừ tiền đúng 1 lần).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Trong thiết kế API tài chính & hệ thống phân tán, tính chất gọi 1 lần hay gọi lặp lại N lần cùng một request vẫn cho ra trạng thái hệ thống y hệt nhau (không trừ tiền 2 lần) gọi là 'idempotent' -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) dài dòng; (C) dễ bị tấn công bảo mật; (D) tạm thời/không lưu xuống DB (`transient` keyword trong Java).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Câu thần chú System Design ngành Thanh toán/Ngân hàng: 'Network retries are inevitable, so payment APIs must be strictly idempotent'!"
        },
        {
          id: "JV1-Q09",
          domain: "Senior Java",
          lessonRef: "V3_6",
          q: "According to the API specification, the `syncMode` and `asyncWebhookUrl` parameters are ___ exclusive; passing both in the same payload returns HTTP 400.",
          options: [
            "(A) mutually",
            "(B) seamlessly",
            "(C) reluctantly",
            "(D) annually"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: '___ exclusive; passing both in the same payload returns HTTP 400' (chỉ được truyền 1 trong 2, truyền cả hai sẽ báo lỗi).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cụm cố định trong toán học, tài liệu RFC và JavaDocs: 'mutually exclusive' = loại trừ lẫn nhau (chọn A thì không được chọn B, giống từ khóa `mutex` = mutual exclusion!) -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) một cách liền mạch trơn tru (`integrate seamlessly`); (C) một cách miễn cưỡng; (D) hàng năm.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhớ ngay nguồn gốc thuật ngữ đa luồng `Mutex` = **Mut**ual **Ex**clusion -> 'mutually exclusive options/flags' = các tùy chọn loại trừ lẫn nhau!"
        },
        {
          id: "JV1-Q10",
          domain: "Senior Java",
          lessonRef: "V4_1",
          q: "Replacing a coarse-grained `synchronized` block with `ConcurrentHashMap.computeIfAbsent()` drastically reduced thread ___ under peak 10,000 RPS load.",
          options: [
            "(A) contention",
            "(B) probation",
            "(C) accommodation",
            "(D) subscription"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'Replacing a coarse-grained synchronized block ... reduced thread ___ under peak load' (giảm hiện tượng các luồng tranh giành khóa chờ nhau).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khi nhiều luồng cùng xếp hàng chờ chiếm một khóa dùng chung (`synchronized`), hiện tượng nghẽn đó gọi là 'lock / thread contention' (sự tranh chấp luồng/khóa) -> chọn (A) contention.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) thời gian thử việc; (C) chỗ ở khách sạn; (D) gói đăng ký dịch vụ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Bộ ba từ vựng Multithreading giúp bạn nghe như Principal Java Engineer: 'thread contention' (tranh chấp luồng), 'context-switching overhead' (chi phí chuyển ngữ cảnh), và 'lock-free data structures'!"
        },
        {
          id: "JV1-Q11",
          domain: "Senior Java",
          lessonRef: "V4_2",
          q: "Deploying a single Redis instance without Sentinel or Cluster replication creates a ___ point of failure that could bring down session authentication.",
          options: [
            "(A) single",
            "(B) solitary",
            "(C) lonely",
            "(D) unique"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Thuật ngữ kiến trúc hệ thống kinh điển 'a ___ point of failure' (viết tắt: SPOF).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'Single Point of Failure (SPOF)' = điểm lỗi đơn lẻ mà nếu thành phần đó sập thì toàn bộ hệ thống ngừng hoạt động -> bắt buộc dùng tính từ cố định 'single' -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B), (C), (D) tuy đều có nét nghĩa 'một mình / độc nhất' trong đời sống nhưng không bao giờ ghép thành thuật ngữ kỹ thuật '___ point of failure'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Trong vòng System Design, sau khi vẽ sơ đồ xong hãy chủ động nói: 'Next, let's review our topology to eliminate any single points of failure' — điểm cộng cực lớn!"
        },
        {
          id: "JV1-Q12",
          domain: "Senior Java",
          lessonRef: "V4_3",
          q: "In distributed ledger design, synchronous cross-region replication guarantees zero data loss; ___, the primary trade-off is higher write latency.",
          options: [
            "(A) however",
            "(B) because",
            "(C) despite",
            "(D) unless"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đứng giữa dấu chấm phẩy `;` và dấu phẩy `,` (`; ___,`) để nối hai mệnh đề đối lập giữa Ưu điểm (zero data loss) và Đánh đổi (higher write latency).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Cấu trúc chấm câu kinh điển của cả TOEIC lẫn Technical Writing: `[Mệnh đề 1]; however, [Mệnh đề 2]`. 'however' là trạng từ liên kết duy nhất đứng được giữa dấu `;` và `,` để diễn tả sự đánh đổi trái chiều -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) và (D) là liên từ phụ thuộc không đi trước dấu phẩy kiểu `; because,`; (C) là giới từ không nối mệnh đề qua dấu phẩy như trạng từ liên kết.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy dấu chấm phẩy trước chỗ trống và dấu phẩy ngay sau chỗ trống (`; ___,`) -> loại sạch liên từ/giới từ, chỉ giữ lại Trạng từ liên kết (however / therefore / moreover)!"
        },
        {
          id: "JV1-Q13",
          domain: "Senior Java",
          lessonRef: "V4_4",
          q: "When stakeholders request three unscheduled features mid-sprint, a Senior Engineer should politely push back and align on priorities to prevent ___.",
          options: [
            "(A) scope creep",
            "(B) garbage collection",
            "(C) dependency injection",
            "(D) heap dump"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: 'stakeholders request three unscheduled features mid-sprint' (nhét thêm 3 tính năng ngoài kế hoạch giữa chừng sprint).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Hiện tượng yêu cầu dự án cứ phình to dần ngoài phạm vi đã thống nhất ban đầu mà không điều chỉnh thời gian/nguồn lực gọi là 'scope creep' (trượt/phình phạm vi) -> chọn (A).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) thu gom rác bộ nhớ; (C) tiêm phụ thuộc trong Spring; (D) bản chụp bộ nhớ heap.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cụm từ giúp bạn ăn điểm kỹ năng lãnh đạo (Leadership): 'prevent scope creep by aligning with stakeholders on trade-offs'!"
        },
        {
          id: "JV1-Q14",
          domain: "Senior Java",
          lessonRef: "G4_6",
          q: "Which bullet point is best written for a Senior Java Engineer's international resume (CV)?",
          options: [
            "(A) Responsible for coding Java APIs and sometimes fixing bugs when QA found them.",
            "(B) Spearheaded the migration of 15 billing microservices to Java 21, slashing p99 latency by 58% and saving $4,200/month in EC2 costs.",
            "(C) I worked in a team of seven people and we used Spring Boot, MySQL, and Git every day.",
            "(D) Helped my manager with meetings and writing some unit tests for order module."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Công thức viết CV chuẩn FAANG/Global (Google XYZ Formula): [Strong Action Verb quá khứ] + [Quy mô kỹ thuật] + [Kết quả định lượng % / $].",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Câu (B) mở đầu bằng động từ hành động mạnh 'Spearheaded' (chủ trì dẫn dắt), nêu rõ quy mô (15 billing microservices -> Java 21) và dùng phân từ hiện tại 'slashing... and saving...' song song để chứng minh tác động kinh doanh bằng con số cụ thể (giảm 58% độ trễ p99, tiết kiệm $4,200/tháng)!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) mắc lỗi kinh điển của CV tầm trung: dùng 'Responsible for / Helped / I worked' thụ động, chỉ liệt kê công cụ mà không có bất kỳ số liệu đo lường kết quả (impact metrics) nào.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Xóa ngay chữ 'Responsible for' khỏi CV tiếng Anh của bạn! Hãy thay bằng: Spearheaded, Architected, Optimized, Automated + con số % cải thiện!"
        },

        // --- Câu 15–20: Đọc hiểu RFC / Bug Report / Client Email (CÓ passage) ---
        {
          id: "JV1-Q15",
          domain: "Senior Java",
          lessonRef: "V3_6",
          passage: [
            "RFC-024: Asynchronous Settlement Ledger via Transactional Outbox",
            "Author: Quang Le (Principal Java Engineer) | Status: Proposed",
            "",
            "1. Context & Problem:",
            "Currently, `OrderService` updates PostgreSQL and publishes a Kafka event directly inside the same `@Transactional` method. If the Kafka broker acknowledges the message but the database commit subsequently fails due to a constraint violation, downstream services process phantom orders.",
            "",
            "2. Evaluated Alternatives:",
            "• Distributed Two-Phase Commit (XA / 2PC): Rejected because locking resources across both PostgreSQL and Kafka brokers severely degrades throughput and is not natively supported across all cloud-managed brokers.",
            "• Transactional Outbox + Debezium CDC (Selected): `OrderService` inserts both the order row and an `outbox_events` row within a single local ACID transaction. Debezium tails the PostgreSQL WAL log and relays events to Kafka reliably.",
            "",
            "3. Caveats:",
            "Because Debezium guarantees at-least-once delivery during connector restarts, all downstream consumers MUST implement idempotent event deduplication using `event_id`."
          ].join("\n"),
          q: "According to RFC-024, what defect can occur in the current implementation of `OrderService`?",
          options: [
            "(A) PostgreSQL tables are automatically dropped when Kafka restarts.",
            "(B) Downstream consumers may receive events for orders that rolled back in the database.",
            "(C) Debezium consumes excessive CPU on client mobile phones.",
            "(D) Java 21 compilers reject the `@Transactional` annotation."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc Mục '1. Context & Problem' câu thứ hai ('If the Kafka broker acknowledges... but the database commit subsequently fails...').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Nếu gửi bản tin lên Kafka thành công ngay trong hàm nhưng bước commit xuống DB ngay sau đó bị thất bại (rollback do vi phạm ràng buộc), các dịch vụ phía dưới sẽ xử lý 'đơn hàng ma' ('phantom orders' = đơn hàng đã bị rollback dưới DB) -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) hoàn toàn sai lệch so với nội dung kỹ thuật trong RFC.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Đây chính là lỗi Dual-Write kinh điển nhất mà mọi buổi phỏng vấn Senior Java Microservices đều hỏi — nhớ cụm 'phantom events when DB transaction rolls back'!"
        },
        {
          id: "JV1-Q16",
          domain: "Senior Java",
          lessonRef: "V3_5",
          passage: [
            "RFC-024: Asynchronous Settlement Ledger via Transactional Outbox",
            "Author: Quang Le (Principal Java Engineer) | Status: Proposed",
            "",
            "1. Context & Problem:",
            "Currently, `OrderService` updates PostgreSQL and publishes a Kafka event directly inside the same `@Transactional` method. If the Kafka broker acknowledges the message but the database commit subsequently fails due to a constraint violation, downstream services process phantom orders.",
            "",
            "2. Evaluated Alternatives:",
            "• Distributed Two-Phase Commit (XA / 2PC): Rejected because locking resources across both PostgreSQL and Kafka brokers severely degrades throughput and is not natively supported across all cloud-managed brokers.",
            "• Transactional Outbox + Debezium CDC (Selected): `OrderService` inserts both the order row and an `outbox_events` row within a single local ACID transaction. Debezium tails the PostgreSQL WAL log and relays events to Kafka reliably.",
            "",
            "3. Caveats:",
            "Because Debezium guarantees at-least-once delivery during connector restarts, all downstream consumers MUST implement idempotent event deduplication using `event_id`."
          ].join("\n"),
          q: "What requirement does RFC-024 impose on downstream consumer services under the selected architecture?",
          options: [
            "(A) They must enable Two-Phase Commit (XA) locks on every table.",
            "(B) They must deduplicate incoming messages using `event_id` to remain idempotent.",
            "(C) They must poll the `OrderService` REST API every five seconds.",
            "(D) They must ignore all messages sent during business hours."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Quét Mục '3. Caveats' (Những lưu ý ràng buộc quan trọng).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Mục 3 nêu rõ vì Debezium hoạt động theo cơ chế ít nhất một lần ('at-least-once delivery') khi khởi động lại connector, mọi consumer phía dưới BẮT BUỘC phải cài đặt khử trùng lặp ('idempotent event deduplication using `event_id`') -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) là phương án 2PC đã bị loại bỏ ('Rejected'); (C) và (D) không có trong tài liệu.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Khi đọc tài liệu kỹ thuật tiếng Anh (Spring Docs, AWS Docs, RFC), chữ 'Caveat' (/ˈkæviæt/) luôn báo hiệu điều kiện ràng buộc / bẫy ngầm sống còn cần xử lý!"
        },
        {
          id: "JV1-Q17",
          domain: "Senior Java",
          lessonRef: "V3_4",
          passage: [
            "POSTMORTEM REPORT — INC-409: Merchant Portal Connection Starvation",
            "Date: August 19 | Severity: SEV-2 | Duration: 27 minutes",
            "",
            "Root Cause Analysis:",
            "In release `v5.2.0`, a new CSV reconciliation endpoint used Spring Data JPA's `Stream<Transaction>` returned by a repository method. However, the `Stream` was not wrapped in a `try-with-resources` block when an invalid date filter threw an early `IllegalArgumentException`. Consequently, underlying JDBC connections were never returned to HikariCP, exhausting all 30 pool connections within 12 minutes.",
            "",
            "Resolution & Preventive Actions:",
            "1. Immediate mitigation: Rolled back `merchant-service` to `v5.1.9` at 10:41 UTC.",
            "2. Permanent fix (`PR #1904`): Wrapped repository stream consumption in `try-with-resources` and enabled `spring.datasource.hikari.leak-detection-threshold=15000` in staging to catch unclosed connections during automated QA runs."
          ].join("\n"),
          q: "What directly caused the HikariCP connection pool to become exhausted?",
          options: [
            "(A) PostgreSQL crashed due to a hardware disk failure.",
            "(B) JPA `Stream` connections remained open when an exception bypassed manual closing.",
            "(C) The pool size was accidentally configured to zero connections.",
            "(D) Hackers launched a DDoS attack on the login page."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc đoạn 'Root Cause Analysis' chỗ 'However, the Stream was not wrapped in a try-with-resources block when...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khác với `List`, `Stream<T>` trả về từ Spring Data JPA giữ mở kết nối JDBC bên dưới cho đến khi gọi `.close()`. Vì thiếu khối `try-with-resources`, khi ngoại lệ `IllegalArgumentException` văng ra sớm, các kết nối JDBC không bao giờ được trả về HikariCP, làm cạn sạch 30 kết nối trong 12 phút -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) không đúng với phân tích nguyên nhân gốc rễ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Vừa học tiếng Anh vừa bỏ túi kinh nghiệm xương máu Java: Mọi `Stream` từ JPA Repository hoặc `Files.lines()` BẮT BUỘC bọc trong `try (Stream<...> s = ...)`!"
        },
        {
          id: "JV1-Q18",
          domain: "Senior Java",
          lessonRef: "G4_6",
          passage: [
            "POSTMORTEM REPORT — INC-409: Merchant Portal Connection Starvation",
            "Date: August 19 | Severity: SEV-2 | Duration: 27 minutes",
            "",
            "Root Cause Analysis:",
            "In release `v5.2.0`, a new CSV reconciliation endpoint used Spring Data JPA's `Stream<Transaction>` returned by a repository method. However, the `Stream` was not wrapped in a `try-with-resources` block when an invalid date filter threw an early `IllegalArgumentException`. Consequently, underlying JDBC connections were never returned to HikariCP, exhausting all 30 pool connections within 12 minutes.",
            "",
            "Resolution & Preventive Actions:",
            "1. Immediate mitigation: Rolled back `merchant-service` to `v5.1.9` at 10:41 UTC.",
            "2. Permanent fix (`PR #1904`): Wrapped repository stream consumption in `try-with-resources` and enabled `spring.datasource.hikari.leak-detection-threshold=15000` in staging to catch unclosed connections during automated QA runs."
          ].join("\n"),
          q: "Why did the team configure `leak-detection-threshold=15000` in staging?",
          options: [
            "(A) To automatically delete transactions older than 15,000 days.",
            "(B) To detect unreturned database connections early during QA testing.",
            "(C) To limit CSV file downloads to 15,000 rows per merchant.",
            "(D) To shut down staging servers after 15 seconds of inactivity."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc mục số 2 phần 'Preventive Actions' ngay sau chữ 'to catch...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Bật ngưỡng phát hiện rò rỉ 15.000ms (15 giây) của HikariCP trên staging 'to catch unclosed connections during automated QA runs' (nhằm phát hiện sớm các kết nối chưa đóng ngay trong lúc chạy kiểm thử tự động) -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A), (C), (D) suy diễn sai con số `15000` (15.000 mili-giây).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Một bản Blameless Postmortem chuẩn quốc tế luôn tách bạch: (1) Immediate Mitigation (cầm máu tức thì) và (2) Automated Guardrail (hàng rào tự động ngăn tái diễn)!"
        },
        {
          id: "JV1-Q19",
          domain: "Senior Java",
          lessonRef: "V2_1",
          passage: [
            "From: Marcus Lind, Head of Partner Integrations <m.lind@eurocart.eu>",
            "To: Tech Lead — Checkout Platform <techlead@paybridge.io>",
            "Date: July 11",
            "Subject: Urgent: Custom XML Webhook Format Request Before July 18 Launch",
            "",
            "Hi Team,",
            "Per our signed SLA, PayBridge delivers JSON payment notifications within three seconds of settlement. Everything works well in our sandbox tests.",
            "However, our legacy ERP vendor just informed us that their parser only accepts SOAP/XML payloads. Could your Java team build a custom XML transformation layer directly into your core webhook dispatcher before our go-live this Friday, July 18?",
            "",
            "Regards,",
            "Marcus Lind"
          ].join("\n"),
          q: "What is Marcus Lind asking the PayBridge Java team to do?",
          options: [
            "(A) Extend the webhook delivery SLA from three seconds to thirty seconds.",
            "(B) Add custom SOAP/XML support to the core webhook service within one week.",
            "(C) Cancel the July 18 product launch indefinitely.",
            "(D) Upgrade EuroCart's internal database to PostgreSQL."
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đọc câu hỏi trực tiếp ở cuối đoạn 2 ('Could your Java team build a custom XML transformation layer... before our go-live this Friday, July 18?').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Ngày gửi thư là 11/7, khách hàng muốn đội Java viết thêm tầng chuyển đổi SOAP/XML nhúng thẳng vào dịch vụ webhook cốt lõi trước ngày go-live thứ Sáu 18/7 (tức chỉ trong vòng 1 tuần) -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) SLA 3 giây hiện tại đang hoạt động tốt; (C) khách vẫn muốn kịp go-live 18/7; (D) không đề cập.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhận diện ngay tình huống thực tế: Khách hàng đẩy rủi ro từ hệ thống cũ của họ ('legacy ERP') sang yêu cầu sửa Core Platform của bạn sát nút Go-live!"
        },
        {
          id: "JV1-Q20",
          domain: "Senior Java",
          lessonRef: "V4_4",
          passage: [
            "From: Marcus Lind, Head of Partner Integrations <m.lind@eurocart.eu>",
            "To: Tech Lead — Checkout Platform <techlead@paybridge.io>",
            "Date: July 11",
            "Subject: Urgent: Custom XML Webhook Format Request Before July 18 Launch",
            "",
            "Hi Team,",
            "Per our signed SLA, PayBridge delivers JSON payment notifications within three seconds of settlement. Everything works well in our sandbox tests.",
            "However, our legacy ERP vendor just informed us that their parser only accepts SOAP/XML payloads. Could your Java team build a custom XML transformation layer directly into your core webhook dispatcher before our go-live this Friday, July 18?",
            "",
            "Regards,",
            "Marcus Lind"
          ].join("\n"),
          q: "Which reply from the PayBridge Tech Lead demonstrates the strongest Senior-level English communication (protecting core stability while unblocking the client)?",
          options: [
            "(A) No. Our contract clearly says JSON only, so that is your ERP vendor's problem, not ours.",
            "(B) Sure, we will rush untested XML code into our core payment dispatcher tonight and hope nothing breaks.",
            "(C) Modifying the core dispatcher before Friday risks stability for all merchants; however, to keep your July 18 launch on track, we can deploy a lightweight AWS Lambda JSON-to-XML adapter for your endpoint by Wednesday.",
            "(D) Sorry, all our developers are busy right now, please email us again next quarter."
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tìm câu áp dụng công thức Đàm phán Kỹ thuật Đỉnh cao: [Nêu rủi ro khách quan nếu sửa Core] + [however] + [Đề xuất giải pháp thay thế khả thi giúp khách hàng vẫn kịp Go-live].",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đáp án (C) thể hiện trọn vẹn bản lĩnh Principal/Tech Lead quốc tế: từ chối khéo việc chọc thẳng vào core dispatcher sát ngày lễ vì ảnh hưởng toàn bộ khách hàng ('risks stability for all merchants'), đồng thời chủ động hiến kế một bộ chuyển đổi gọn nhẹ tách biệt (JSON-to-XML adapter) xong trước thứ Tư để giữ đúng lịch ra mắt 18/7 cho khách!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) cứng nhắc, đổ lỗi gây mất quan hệ đối tác; (B) thiếu bản lĩnh kỹ thuật, đẩy hệ thống lõi vào thảm họa sập prod; (D) thoái thác vô trách nhiệm.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Công thức Push Back vạn người mê: 'Doing X directly puts [Core Goal] at risk; however, to unblock your [Deadline], how about [Safe Workaround Y]?'!"
        }
      ]
    },

    /* =========================================================================
     * ĐỀ 5: PART5_BLITZ — ĐỀ PHẢN XẠ TỐC ĐỘ TOEIC PART 5 — 20 GIÂY/CÂU (20 CÂU • 8 PHÚT)
     * ========================================================================= */
    {
      id: "PART5_BLITZ",
      title: "Đề Phản Xạ Tốc Độ TOEIC Part 5 — 20 Giây/Câu (Speed Blitz)",
      subtitle: "20 câu cô đọng tinh hoa mẹo giải đề trong 5–15 giây: Nhìn đuôi từ loại, vị trí Trạng từ, Bị động không tân ngữ, Liên từ vs Giới từ, Rút gọn MĐQH, Đảo ngữ & Giả định thức.",
      type: "speed",
      minutes: 8,
      targetScore: "≤ 20 giây/câu • Kéo thẳng +100 điểm Reading",
      questions: [
        {
          id: "BLZ-Q01",
          domain: "Part 5 Grammar",
          lessonRef: "G1_1",
          q: "The automated monitoring script ___ alert notifications to the on-call engineer whenever CPU usage exceeds 85%.",
          options: [
            "(A) sending",
            "(B) to send",
            "(C) sends",
            "(D) sent by"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Mệnh đề chính 'The automated monitoring script ___ alert notifications' đang khuyết ĐỘNG TỪ CHÍNH chia thì!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Chủ ngữ số ít 'The automated monitoring script' + mệnh đề thời gian 'whenever CPU usage exceeds' (Hiện tại Đơn diễn tả cơ chế tự động luôn đúng) -> chọn động từ ngôi thứ 3 số ít (C) sends.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) V-ing và (B) to-V không bao giờ đứng một mình làm động từ chính; (D) bị động sai vì phía sau có tân ngữ 'alert notifications'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Quét 4 đáp án thấy biến thể động từ -> gạch V-ing và to-V ngay nếu mệnh đề chưa có động từ chia thì!"
        },
        {
          id: "BLZ-Q02",
          domain: "Part 5 Grammar",
          lessonRef: "G1_2",
          q: "Successful ___ of the core banking migration required six months of close coordination across four countries.",
          options: [
            "(A) complete",
            "(B) completed",
            "(C) completely",
            "(D) completion"
          ],
          answer: 3,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đứng sau Tính từ 'Successful ___' và trước giới từ 'of' để làm Chủ ngữ đầu câu.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Giữa tính từ ('Successful') và giới từ ('of') bắt buộc là một Danh từ -> chọn từ có đuôi '-tion': (D) completion (Việc hoàn thành thành công đợt chuyển đổi core banking...).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) tính từ/động từ; (B) V-ed; (C) trạng từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `[Adj] + ___ + of` -> nhìn xuống 4 đáp án chấm ngay đuôi danh từ (-tion / -ment / -ness / -ance / -ity) trong 3 giây!"
        },
        {
          id: "BLZ-Q03",
          domain: "Part 5 Grammar",
          lessonRef: "G1_3",
          q: "All contractors must return ___ temporary security keycards to the front desk upon completing the assignment.",
          options: [
            "(A) they",
            "(B) them",
            "(C) their",
            "(D) theirs"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Sau động từ 'return' nhưng đứng TRƯỚC cụm danh từ 'temporary security keycards'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đứng trước cụm danh từ ('temporary security keycards') để chỉ quyền sở hữu của chủ ngữ số nhiều 'All contractors' -> bắt buộc dùng Tính từ sở hữu (Possessive Adjective) -> chọn (C) their.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy chí mạng: nhìn chữ 'return' vội chọn tân ngữ 'them' mà không nhìn thấy cụm danh từ 'temporary security keycards' đứng ngay sau!; (D) đại từ sở hữu không bao giờ đứng trước danh từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Chọn đại từ luôn phải nhìn TỪ ĐỨNG SAU chỗ trống: Có Danh từ theo sau -> Tính từ sở hữu (my/our/their/his/her); Không có Danh từ -> Tân ngữ hoặc Đại từ sở hữu!"
        },
        {
          id: "BLZ-Q04",
          domain: "Part 5 Grammar",
          lessonRef: "G1_4",
          q: "To remain ___ in the global fintech market, our platform releases innovative API capabilities every two weeks.",
          options: [
            "(A) compete",
            "(B) competitor",
            "(C) competitive",
            "(D) competitively"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Động từ nối (Linking Verb) 'remain ___' + giới từ 'in'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'remain' thuộc nhóm Động từ nối vàng (be, become, remain, stay, seem, appear, prove) -> theo sau bắt buộc là TÍNH TỪ làm bổ ngữ chứ KHÔNG dùng trạng từ -> chọn đuôi '-tive': (C) competitive (duy trì sức cạnh tranh).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (D) bẫy 70% thí sinh thấy 'remain' là động từ thường nên chọn trạng từ '-ly'!; (A) động từ; (B) danh từ đếm được thiếu mạo từ 'a'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thuộc lòng câu chú Linking Verbs: 'become / remain / stay / seem / prove + ADJ' — đặc biệt cụm tủ ETS: 'remain competitive'!"
        },
        {
          id: "BLZ-Q05",
          domain: "Part 5 Grammar",
          lessonRef: "G1_4",
          q: "Our cloud payment gateway has ___ surpassed the 99.95% monthly availability target for twelve consecutive quarters.",
          options: [
            "(A) consistent",
            "(B) consistency",
            "(C) consistently",
            "(D) consisted"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Kẹp giữa trợ động từ 'has' và phân từ hai 'surpassed' ('has ___ surpassed').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Vị trí giữa 'have/has' và 'V-ed/P2' trong thì Hiện tại Hoàn thành luôn là chỗ đứng độc quyền của TRẠNG TỪ bổ nghĩa cho động từ chính -> chọn (C) consistently (liên tục/ổn định vượt mục tiêu).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) tính từ; (B) danh từ; (D) động từ.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `has/have + ___ + P2` -> khoanh đuôi `-ly` trong 2 giây rồi chuyển câu tiếp theo ngay!"
        },
        {
          id: "BLZ-Q06",
          domain: "Part 5 Grammar",
          lessonRef: "G1_5",
          q: "Critical security vulnerabilities reported through our bug-bounty program are patched ___ twenty-four hours of verification.",
          options: [
            "(A) within",
            "(B) by",
            "(C) until",
            "(D) since"
          ],
          answer: 0,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Sau chỗ trống là KHOẢNG THỜI GIAN ĐẾM ĐƯỢC 'twenty-four hours' (không phải mốc giờ đồng hồ!).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'within + khoảng thời gian' = trong vòng bao lâu ('within 24 hours' = trong vòng 24 giờ kể từ lúc xác minh). Còn 'by' và 'until' chỉ đi với MỐC thời gian cụ thể ('by Friday / until 5 PM') -> chọn (A) within.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) by + mốc thời điểm; (C) until + mốc thời điểm; (D) since + mốc quá khứ (đi với Hiện tại Hoàn thành).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Phân biệt trong 2 giây: Sau chỗ trống là MỐC giờ/thứ ('Friday / 5 PM') -> chọn `by/until`; Sau chỗ trống là KHOẢNG thời gian ('24 hours / 5 business days') -> chọn `within`!"
        },
        {
          id: "BLZ-Q07",
          domain: "Part 5 Grammar",
          lessonRef: "G1_6",
          q: "TechNova Corporation ___ its second engineering hub in Da Nang three months ago to expand its Java talent pool.",
          options: [
            "(A) opens",
            "(B) has opened",
            "(C) opened",
            "(D) will open"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Dấu hiệu thời gian dứt điểm trong quá khứ 'three months ago'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'ago / yesterday / last + thời gian / in + năm quá khứ' là dấu hiệu tuyệt đối của thì Quá khứ Đơn -> chọn (C) opened.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) Hiện tại Hoàn thành TUYỆT ĐỐI kỵ từ 'ago' ('three months ago' ≠ 'for three months'!).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy chữ `ago` trong câu -> gạch thẳng tay `have/has + P2`, chọn ngay `V-ed / V2`!"
        },
        {
          id: "BLZ-Q08",
          domain: "Part 5 Grammar",
          lessonRef: "G2_1",
          q: "API adoption among enterprise partners ___ by nearly 140% since we launched the interactive OpenAPI sandbox.",
          options: [
            "(A) grows",
            "(B) grew",
            "(C) has grown",
            "(D) had grown"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Liên từ chỉ mốc khởi đầu 'since + S + V-quá-khứ (launched)'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Mệnh đề chính đi kèm 'since + Quá khứ Đơn' luôn chia Hiện tại Hoàn thành để chỉ sự tăng trưởng kéo dài từ lúc ra mắt tới nay -> chủ ngữ số ít 'API adoption' -> chọn (C) has grown.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) nhầm theo chữ 'launched'; (D) Quá khứ Hoàn thành đi với 'by the time / before + V2', không đi với 'since'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `since + V2` ở vế phụ -> vế chính auto chốt `have/has + P2`!"
        },
        {
          id: "BLZ-Q09",
          domain: "Part 5 Grammar",
          lessonRef: "G2_2",
          q: "The CI/CD pipeline will automatically deploy the Docker image to staging as soon as the unit test suite ___.",
          options: [
            "(A) will pass",
            "(B) passes",
            "(C) passed",
            "(D) had passed"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Mệnh đề chính ở tương lai ('will automatically deploy') + liên từ chỉ thời gian 'as soon as' + chủ ngữ số ít 'the unit test suite'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Quy tắc vàng của Mệnh đề trạng ngữ chỉ thời gian tương lai (sau `when, as soon as, once, before, after, until`): TUYỆT ĐỐI KHÔNG DÙNG `will`, mà phải lùi về HIỆN TẠI ĐƠN (hoặc Hiện tại Hoàn thành)! Chủ ngữ số ít 'the unit test suite' -> chọn (B) passes.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy dịch tiếng Việt 'ngay khi bộ test SẼ pass' nên chọn 'will pass' — sai ngữ pháp tiếng Anh 100%!; (C), (D) lệch phối hợp thì với 'will deploy'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `when / as soon as / once / until / before` đi cặp với vế chính `will + V` -> GẠCH BỎ NGAY đáp án có chữ `will` ở mệnh đề thời gian!"
        },
        {
          id: "BLZ-Q10",
          domain: "Part 5 Grammar",
          lessonRef: "G2_3",
          q: "All production database credentials ___ inside HashiCorp Vault rather than plain-text configuration files.",
          options: [
            "(A) store",
            "(B) storing",
            "(C) are stored",
            "(D) have stored"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Chủ ngữ chỉ vật 'credentials' + sau chỗ trống là giới từ 'inside' (KHÔNG có tân ngữ!).",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Ngoại động từ 'store' (lưu trữ cái gì) không có tân ngữ theo sau mà gặp ngay giới từ chỉ nơi chốn 'inside HashiCorp Vault' -> bắt buộc chia Bị động (be + P2) với chủ ngữ số nhiều 'credentials' -> chọn (C) are stored.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) chủ động thiếu tân ngữ; (B) V-ing thiếu to-be.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: `[Chủ ngữ vật] + ___ + [Giới từ in/on/by/at/inside]` -> 99% là Câu Bị Động (`be + P2`)!"
        },
        {
          id: "BLZ-Q11",
          domain: "Part 5 Grammar",
          lessonRef: "G2_5",
          q: "To avoid destabilizing holiday sales traffic, the engineering committee decided to postpone ___ the Kafka cluster until January.",
          options: [
            "(A) upgrade",
            "(B) to upgrade",
            "(C) upgrading",
            "(D) upgraded"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đứng ngay sau động từ 'postpone ___' + có tân ngữ 'the Kafka cluster'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: 'postpone' thuộc nhóm động từ kim cương trong TOEIC BẮT BUỘC cộng với `V-ing` (cùng nhóm với `avoid, consider, suggest, recommend, finish, delay, mind`) -> chọn (C) upgrading.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) bẫy bị cuốn theo chữ 'decided to postpone' phía trước nên quen tay chọn tiếp 'to upgrade'!",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Khắc nhớ bộ 5 động từ chỉ ăn V-ing hay ra thi Part 5 nhất: `consider, suggest, recommend, postpone, avoid + V-ing`!"
        },
        {
          id: "BLZ-Q12",
          domain: "Part 5 Grammar",
          lessonRef: "G2_6",
          q: "Please refer to the ___ architecture diagram in Confluence for the exact topic naming conventions.",
          options: [
            "(A) attach",
            "(B) attaching",
            "(C) attached",
            "(D) attachment"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đứng giữa mạo từ 'the' và cụm danh từ 'architecture diagram' ('the ___ architecture diagram').",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Sơ đồ kiến trúc ĐƯỢC đính kèm (chịu tác động bị động từ người viết tài liệu) -> dùng Quá khứ phân từ (V-ed) làm tính từ bổ nghĩa trước danh từ: 'the attached diagram / file / document' -> chọn (C) attached.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (B) 'attaching' mang nghĩa chủ động (tự nó đi đính kèm cái khác -> sai); (D) 'attachment' là danh từ chỉ tệp đính kèm nói chung, không dùng thay cho tính từ 'attached' trong cụm cố định ETS này.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Bộ tứ cụm từ bất tử trong Email TOEIC: `the attached file`, `the enclosed document`, `the updated schedule`, `the revised contract` — luôn là `-ed`!"
        },
        {
          id: "BLZ-Q13",
          domain: "Part 5 Grammar",
          lessonRef: "G3_1",
          q: "Each of the regional payment gateways ___ an independent health-check endpoint monitored every ten seconds.",
          options: [
            "(A) expose",
            "(B) exposes",
            "(C) exposing",
            "(D) are exposing"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đầu câu là đại từ phân bổ 'Each of + the + Danh từ số nhiều (gateways)'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Gạch bỏ cụm giới từ 'of the regional payment gateways', chủ ngữ chính là 'Each' (Mỗi một — LUÔN LUÔN SỐ ÍT!). Do đó động từ chính phải chia ngôi thứ 3 số ít -> chọn (B) exposes (cung cấp/mở ra một endpoint kiểm tra sức khỏe).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) bẫy chia số nhiều theo danh từ đứng sát chỗ trống 'gateways'; (C) không phải động từ chia thì.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Luật bất biến: `Each of / Every one of / One of + N-số-nhiều` -> Động từ LUÔN CHIA SỐ ÍT (có `-s/-es` / `is` / `has`)!"
        },
        {
          id: "BLZ-Q14",
          domain: "Part 5 Grammar",
          lessonRef: "G3_2",
          q: "Migrating to ZGC delivered by far the ___ tail-latency improvement our trading engine has ever achieved.",
          options: [
            "(A) impressive",
            "(B) more impressive",
            "(C) most impressive",
            "(D) impressively"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm nhấn mạnh 'by far + the ___' + mệnh đề hoàn thành 'has ever achieved' cuối câu!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Mạo từ 'the' + dấu hiệu 'by far' và '...has ever achieved' (từng đạt được từ trước tới nay) là bộ ba nhận diện tuyệt đối của CẤP SO SÁNH NHẤT bổ nghĩa cho danh từ 'improvement' -> chọn (C) most impressive.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) cấp nguyên; (B) so sánh hơn (đi với 'than'); (D) trạng từ không bổ nghĩa cho danh từ 'improvement'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `the ___ ... have/has ever + P2` hoặc `by far the ___` -> khoanh ngay So Sánh Nhất (`-est` / `most + Adj`)!"
        },
        {
          id: "BLZ-Q15",
          domain: "Part 5 Grammar",
          lessonRef: "G3_3",
          q: "___ strict banking compliance rules, production logs must automatically mask credit card numbers and national IDs.",
          options: [
            "(A) Because",
            "(B) Due to",
            "(C) Since",
            "(D) Whereas"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Vế trước dấu phẩy 'strict banking compliance rules' chỉ là CỤM DANH TỪ (không có Verb chia thì) + chỉ nguyên nhân.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Do các quy tắc tuân thủ ngân hàng nghiêm ngặt -> cần giới từ chỉ nguyên nhân cộng Cụm danh từ: 'Due to' (= Because of / Owing to) -> chọn (B).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) Because, (C) Since (= Because), và (D) Whereas đều là Liên từ, bắt buộc phải cộng một Mệnh đề có S + V.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhìn vế trước dấu phẩy không có động từ chia thì + mang nghĩa 'Bởi vì' -> chọn ngay `Due to / Because of / Owing to / Thanks to`!"
        },
        {
          id: "BLZ-Q16",
          domain: "Part 5 Grammar",
          lessonRef: "G3_4",
          q: "Confluence is the central knowledge base ___ our architects document system diagrams and postmortem reports.",
          options: [
            "(A) which",
            "(B) where",
            "(C) whose",
            "(D) whom"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Danh từ chỉ nơi lưu trữ/không gian 'the central knowledge base' + mệnh đề phía sau ĐÃ ĐỦ TRỌN VẸN S + V + O ('our architects document system diagrams...')!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Đây là bẫy phân loại 650+ giữa `which` và `where`: Sau `which` mệnh đề phải KHUYẾT Chủ ngữ hoặc Tân ngữ; còn sau `where` (= `in which`) mệnh đề ĐÃ ĐỦ S (`our architects`) + V (`document`) + O (`system diagrams...`)! Vì vậy phải chọn trạng từ quan hệ chỉ nơi chốn (B) where.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy 80% thí sinh thấy 'knowledge base' là vật nên chọn vội 'which' mà quên kiểm tra mệnh đề sau đã đủ tân ngữ rồi! (Muốn dùng 'which' phải có giới từ 'in which').",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Đứng sau danh từ chỉ nơi chốn/hệ thống/công ty: Mệnh đề sau THIẾU S/O -> chọn `which`; Mệnh đề sau ĐỦ S-V-O -> chọn `where` (= `in which`)!"
        },
        {
          id: "BLZ-Q17",
          domain: "Part 5 Grammar",
          lessonRef: "G3_5",
          q: "Engineers ___ to attend the AWS Architecture Bootcamp next month must obtain manager approval by Friday.",
          options: [
            "(A) wish",
            "(B) wished",
            "(C) wishing",
            "(D) will wish"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Câu đã có động từ chính 'must obtain'! Chỗ trống đứng ngay sau chủ ngữ chỉ người 'Engineers ___ to attend...'.",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Rút gọn mệnh đề quan hệ chủ động bổ nghĩa cho 'Engineers': `Engineers who wish to attend...` -> bỏ `who`, chuyển `wish` thành V-ing `wishing` -> chọn (C).",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) gây lỗi 2 động từ chia thì trong cùng một câu đơn; (B) 'wish' là động từ chủ động của người tham dự, không chia bị động 'wished'.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Cấu trúc tủ mở đầu thông báo TOEIC: `Employees / Applicants / Attendees + wishing / planning / hoping / seeking + to V...` luôn là V-ing!"
        },
        {
          id: "BLZ-Q18",
          domain: "Part 5 Grammar",
          lessonRef: "G3_6",
          q: "___ we anticipated the ten-fold surge in API traffic earlier, we would have pre-warmed additional Kubernetes nodes.",
          options: [
            "(A) Should",
            "(B) Were",
            "(C) Had",
            "(D) If"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Đầu câu đảo ngữ '___ + we + P2 (anticipated)', vế chính có 'would have pre-warmed' (`would have + P2`)!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Vế chính có `would have + P2` là dấu hiệu của Câu Điều kiện Loại 3 (trái với quá khứ: `If we had anticipated...`). Khi bỏ `If`, ta đảo trợ động từ `Had` lên đầu câu trước chủ ngữ `we`: `Had we anticipated...` -> chọn (C) Had!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (D) nếu điền `If` thì thiếu mất trợ động từ `had` (vì `If we anticipated` là loại 2, không khớp với `would have pre-warmed` loại 3!); (A) `Should + S + V-bare`; (B) `Were + S + to V`.",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Nhìn vế sau có `would have + P2`, nhìn đầu câu có `___ + S + P2` (khuyết chữ `had` sau S) -> khoanh ngay đảo ngữ `Had`!"
        },
        {
          id: "BLZ-Q19",
          domain: "Part 5 Grammar",
          lessonRef: "G4_2",
          q: "Under ISO 27001 policy, it is mandatory that every production deployment ___ traceable to an approved change ticket.",
          options: [
            "(A) is",
            "(B) are",
            "(C) be",
            "(D) being"
          ],
          answer: 2,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Tính từ giả định thức 'it is mandatory that' + chủ ngữ số ít 'every production deployment' + ___ + tính từ 'traceable'!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Sau cấu trúc giả định `It is mandatory / essential / imperative / vital / recommended + that + S + (should) + V-nguyên-thể`, động từ to-be bắt buộc giữ nguyên gốc là `be` (tuyệt đối KHÔNG chia `is` hay `are`!) -> chọn (C) be.",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) bẫy sát thương cao nhất đề TOEIC 700+: 90% người chưa học Giả định thức sẽ chọn `is` vì thấy `every deployment` số ít!",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `mandatory / essential / imperative / recommend / suggest / insist + THAT` mà đáp án có chữ `be` nguyên mẫu -> 99.9% `be` chính là đáp án Vàng!"
        },
        {
          id: "BLZ-Q20",
          domain: "Part 5 Grammar",
          lessonRef: "G4_3",
          q: "Not only ___ memory consumption by 40%, but the upgraded serializer also cut garbage collection pauses in half.",
          options: [
            "(A) the patch reduced",
            "(B) did the patch reduce",
            "(C) reduced the patch",
            "(D) the patch did reduce"
          ],
          answer: 1,
          step1Keyword: "Bước 1 — Bắt dấu hiệu 5 giây: Cụm trạng từ phủ định/hạn chế 'Not only' đứng ngay ĐẦU CÂU!",
          step2Explain: "Bước 2 — Giải thích bản chất & Dịch nghĩa: Khi `Not only / Rarely / Seldom / Never / Only after` được đưa lên đầu câu để nhấn mạnh, mệnh đề đứng ngay sau nó BẮT BUỘC ĐẢO NGỮ giống trật tự câu hỏi: `[Trợ động từ (did/does/has/can)] + [Chủ ngữ] + [Động từ nguyên mẫu]`. Vế sau dùng quá khứ `cut` -> chọn `did the patch reduce`: (B)!",
          step3Distractors: "Bước 3 — Mổ xẻ đáp án bẫy: (A) và (D) quên đảo trợ động từ lên trước chủ ngữ; (C) đảo trực tiếp động từ thường lên trước chủ ngữ (sai ngữ pháp tiếng Anh).",
          step4Tip: "Bước 4 — Mẹo phản xạ phòng thi: Thấy `Not only` mở đầu câu -> tìm ngay cấu trúc câu hỏi `did/does/has/can + S + V` ở vế đầu tiên!"
        }
      ]
    }
  ];
})();
