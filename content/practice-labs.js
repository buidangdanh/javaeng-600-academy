/* JavaEng 600+ Academy — Phòng Thực Hành Đa Kỹ Năng (Practice Labs)
 * 1. Dictation (Study4 Method): 24 bài Nghe chép chính tả bắt nối âm & âm cuối (-s/-ed)
 * 2. Speaking & Shadowing (ELSA / Cake Method): 20 kịch bản Luyện nói có trọng âm & mẹo phát âm
 * 3. Senior Java Workplace Toolkit: 6 bộ mẫu câu (36 kịch bản) Copy-Paste dùng ngay trong dự án quốc tế
 */

window.PRACTICE_LABS = {
  /* =========================================================================
   * 1. NGHE CHÉP CHÍNH TẢ (DICTATION — 24 BÀI x 4 NHÓM CHỦ ĐỀ)
   * ========================================================================= */
  dictation: [
    // --- Nhóm 1: TOEIC Listening Part 1-2 (DIC-01 -> DIC-06) ---
    {
      id: "DIC-01",
      category: "TOEIC Listening Part 1-2",
      level: "basic",
      title: "Part 1: Kiểm tra thiết bị trong phòng máy chủ",
      audioText: "Some technicians are inspecting the server racks in the data center.",
      vi: "Một vài kỹ thuật viên đang kiểm tra các tủ máy chủ trong trung tâm dữ liệu.",
      soundTips: "Chú ý âm /z/ cuối 'technicians' và 'racks' (/s/); 'inspecting the' đọc lướt âm /ðə/ rất nhẹ, dễ nghe thiếu mạo từ 'the'."
    },
    {
      id: "DIC-02",
      category: "TOEIC Listening Part 1-2",
      level: "basic",
      title: "Part 1: Bẫy bị động tiếp diễn kinh điển",
      audioText: "Several chairs have been arranged around the conference table for the meeting.",
      vi: "Một vài chiếc ghế đã được sắp xếp xung quanh bàn hội nghị cho cuộc họp.",
      soundTips: "Cụm 'have been arranged around' nối âm dày: 'have_been' (/həv bɪn/) và âm cuối /-d/ của 'arranged' nối thẳng sang 'around' (/əˈreɪndʒd_əˈraʊnd/)."
    },
    {
      id: "DIC-03",
      category: "TOEIC Listening Part 1-2",
      level: "intermediate",
      title: "Part 2: Câu hỏi When & bẫy dời lịch họp",
      audioText: "The product launch meeting has been postponed until next Wednesday afternoon.",
      vi: "Cuộc họp ra mắt sản phẩm đã bị hoãn lại cho đến chiều thứ Tư tuần tới.",
      soundTips: "Nối âm kinh điển 'postponed until' -> /poʊstˈpoʊnd_ʌnˈtɪl/ (âm /t/ trong 'postponed' thường bị nuốt nhẹ giữa hai phụ âm). Đừng quên đuôi -ed của 'postponed'!"
    },
    {
      id: "DIC-04",
      category: "TOEIC Listening Part 1-2",
      level: "intermediate",
      title: "Part 2: Trả lời gián tiếp câu hỏi Yes/No",
      audioText: "Actually, Ms. Carter is still reviewing the updated vendor contract right now.",
      vi: "Thực ra, cô Carter hiện vẫn đang xem xét bản hợp đồng nhà cung cấp đã cập nhật.",
      soundTips: "Từ 'Actually' mở đầu câu trả lời gián tiếp rất hay thi TOEIC Part 2; chú ý đuôi '-ed' đọc là /ɪd/ trong 'updated' (/ʌpˈdeɪtɪd/)."
    },
    {
      id: "DIC-05",
      category: "TOEIC Listening Part 1-2",
      level: "upper",
      title: "Part 2: Câu hỏi phủ định gây nhiễu",
      audioText: "Shouldn't we back up the customer database before installing the security patch?",
      vi: "Chẳng phải chúng ta nên sao lưu cơ sở dữ liệu khách hàng trước khi cài bản vá bảo mật sao?",
      soundTips: "Chú ý âm chặn /t/ trong 'Shouldn't' (/ˈʃʊdnt/) và nối âm 'back_up' (/bæk_ʌp/); 'security' trọng âm rơi vào âm 2 (/sɪˈkjʊrəti/)."
    },
    {
      id: "DIC-06",
      category: "TOEIC Listening Part 1-2",
      level: "advanced",
      title: "Part 2: Đề xuất người phụ trách thay thế",
      audioText: "Why don't you ask the procurement manager to approve the hardware invoice?",
      vi: "Sao bạn không nhờ trưởng phòng mua sắm phê duyệt hóa đơn thiết bị phần cứng nhỉ?",
      soundTips: "'Why don't you' đọc nối tự nhiên thành /waɪ ˈdoʊntʃuː/; từ 'procurement' (/prəˈkjʊrmənt/) dễ chép thiếu âm 'r' hoặc nhầm thành 'document'."
    },

    // --- Nhóm 2: TOEIC Workplace Part 3-4 (DIC-07 -> DIC-12) ---
    {
      id: "DIC-07",
      category: "TOEIC Workplace Part 3-4",
      level: "basic",
      title: "Part 3: Xác nhận lịch giao lô hàng thay thế",
      audioText: "The supplier promised to deliver the replacement monitors by Friday morning.",
      vi: "Nhà cung cấp đã hứa sẽ giao những chiếc màn hình thay thế trước sáng thứ Sáu.",
      soundTips: "Đuôi '-ed' của 'promised' đi sau âm vô thanh /s/ nên phát âm là /t/ (/ˈprɑːmɪst/), nối nhẹ với 'to' thành 'promised_to' — rất dễ viết sót '-ed'!"
    },
    {
      id: "DIC-08",
      category: "TOEIC Workplace Part 3-4",
      level: "intermediate",
      title: "Part 3: Xin phê duyệt ngân sách đào tạo",
      audioText: "All travel reimbursement requests must be submitted with original receipts attached.",
      vi: "Mọi yêu cầu hoàn ứng chi phí công tác phải được nộp kèm theo hóa đơn gốc.",
      soundTips: "Ba từ khó liên tiếp: 'reimbursement' (/ˌriːɪmˈbɜːrsmənt/), 'requests' (/rɪˈkwests/ — cụm phụ âm /sts/), và 'receipts' (âm 'p' CÂM -> /rɪˈsiːts/)."
    },
    {
      id: "DIC-09",
      category: "TOEIC Workplace Part 3-4",
      level: "intermediate",
      title: "Part 4: Thông báo bảo trì mạng nội bộ",
      audioText: "Please save your work because the internal network will be unavailable tonight.",
      vi: "Vui lòng lưu lại công việc của bạn vì mạng nội bộ sẽ tạm ngưng hoạt động vào tối nay.",
      soundTips: "'save your' nối âm /seɪv_jər/; 'internal' (/ɪnˈtɜːrnl/) dễ nghe nhầm thành 'internet'; 'unavailable' nối âm /ˌʌnəˈveɪləbl/."
    },
    {
      id: "DIC-10",
      category: "TOEIC Workplace Part 3-4",
      level: "upper",
      title: "Part 4: Thông báo thay đổi cổng bay công tác",
      audioText: "Passengers traveling to Tokyo on Flight forty-two should proceed to Gate twelve.",
      vi: "Hành khách đi Tokyo trên chuyến bay số 42 vui lòng di chuyển tới Cổng số 12.",
      soundTips: "Cẩn thận phân biệt số đếm 'forty-two' (42) vs 'fourteen', và nối âm 'proceed_to' (/prəˈsiːd tuː/ — hai âm /d/ và /t/ chạm liền nhau)."
    },
    {
      id: "DIC-11",
      category: "TOEIC Workplace Part 3-4",
      level: "upper",
      title: "Part 3: Đàm phán điều khoản gia hạn SLA",
      audioText: "Our legal department recommended revising the warranty clause before signing the agreement.",
      vi: "Bộ phận pháp chế của chúng tôi đã khuyến nghị sửa lại điều khoản bảo hành trước khi ký thỏa thuận.",
      soundTips: "'recommended' có đuôi /ɪd/ rõ; 'clause' (/klɔːz/) đồng âm gần giống 'close' (/kloʊz/) nhưng khác nguyên âm đôi — hãy dựa vào ngữ cảnh hợp đồng."
    },
    {
      id: "DIC-12",
      category: "TOEIC Workplace Part 3-4",
      level: "advanced",
      title: "Part 4: Phát biểu khai mạc hội nghị công nghệ",
      audioText: "Complimentary refreshments are available in the main lobby prior to the keynote speech.",
      vi: "Đồ ăn nhẹ miễn phí được phục vụ tại sảnh chính trước bài diễn văn khai mạc.",
      soundTips: "Từ vàng TOEIC 700+: 'Complimentary' (miễn phí, chữ 'i', phân biệt với 'complementary' chữ 'e' là bổ sung) và cụm 'prior to' (/ˈpraɪər tə/ = before)."
    },

    // --- Nhóm 3: Daily Standup & Agile (DIC-13 -> DIC-18) ---
    {
      id: "DIC-13",
      category: "Daily Standup & Agile",
      level: "basic",
      title: "Standup: Báo cáo hoàn tất API & viết Unit Test",
      audioText: "Yesterday I completed the authentication endpoint and pushed my changes for review.",
      vi: "Hôm qua tôi đã hoàn thành endpoint xác thực và đẩy code của mình lên để chờ duyệt.",
      soundTips: "Phân biệt hai cách đọc đuôi -ed trong cùng một câu: 'completed' đọc là /ɪd/, còn 'pushed' đọc là /t/ (/pʊʃt/). Đừng bỏ quên 's' ở 'changes' (/ˈtʃeɪndʒɪz/)!"
    },
    {
      id: "DIC-14",
      category: "Daily Standup & Agile",
      level: "intermediate",
      title: "Standup: Báo cáo Blocker do môi trường Staging",
      audioText: "I am currently blocked on integration testing because the staging token has expired.",
      vi: "Hiện tại tôi đang bị kẹt phần kiểm thử tích hợp vì token môi trường staging đã hết hạn.",
      soundTips: "Nối âm 'blocked_on' (/blɑːkt_ɑːn/) và 'has_expired' (/həz_ɪkˈspaɪərd/). Cụm 'be blocked on' là cấu trúc bắt buộc có đuôi -ed của tính từ phân từ."
    },
    {
      id: "DIC-15",
      category: "Daily Standup & Agile",
      level: "intermediate",
      title: "Refinement: Tách nhỏ User Story quá lớn",
      audioText: "This ticket seems too complex, so we should split it into smaller subtasks.",
      vi: "Ticket này có vẻ quá phức tạp, nên chúng ta cần tách nó thành các đầu việc nhỏ hơn.",
      soundTips: "Chú ý 'seems' có âm /z/ ngôi thứ 3 số ít; cụm 'split_it_into' đọc nối rất nhanh theo giọng Mỹ (flap /t/ nghe như /splɪɾ_ɪɾ_ˈɪntə/)."
    },
    {
      id: "DIC-16",
      category: "Daily Standup & Agile",
      level: "upper",
      title: "Sprint Sync: Cảnh báo thay đổi yêu cầu phút chót",
      audioText: "Adding custom export filters right now would delay our Friday release schedule.",
      vi: "Việc thêm bộ lọc xuất dữ liệu tùy chỉnh ngay lúc này sẽ làm trễ lịch phát hành thứ Sáu của chúng ta.",
      soundTips: "'filters' (/ˈfɪltərz/) có âm /z/ cuối; 'would delay' có hai âm /d/ liền kề nên người bản xứ giữ hơi âm /d/ đầu rồi bật sang 'delay' (/wʊdːɪˈleɪ/)."
    },
    {
      id: "DIC-17",
      category: "Daily Standup & Agile",
      level: "upper",
      title: "Code Review: Đảm bảo tính tương thích ngược",
      audioText: "Please make sure these schema updates remain backward compatible with legacy clients.",
      vi: "Vui lòng đảm bảo các cập nhật lược đồ này vẫn tương thích ngược với các ứng dụng khách đời cũ.",
      soundTips: "'schema' phát âm là /ˈskiːmə/ (âm 'ch' đọc là /k/, không phải /ʃ/!); 'updates' (/ˈʌpdeɪts/) và 'clients' (/ˈklaɪənts/) đều có âm /s/ số nhiều."
    },
    {
      id: "DIC-18",
      category: "Daily Standup & Agile",
      level: "advanced",
      title: "Retrospective: Tự động hóa kiểm thử hồi quy",
      audioText: "Automating our regression test suite has significantly reduced deployment overhead this sprint.",
      vi: "Việc tự động hóa bộ kiểm thử hồi quy đã giảm đáng kể chi phí vận hành triển khai trong sprint này.",
      soundTips: "'suite' phát âm giống hệt 'sweet' (/swiːt/ — KHÔNG đọc là /suːt/!); 'reduced deployment' nối âm /t/ cuối của 'reduced' (/rɪˈduːst/) sang /d/ của 'deployment'."
    },

    // --- Nhóm 4: Production Incident & Tech Call (DIC-19 -> DIC-24) ---
    {
      id: "DIC-19",
      category: "Production Incident & Tech Call",
      level: "basic",
      title: "War-room: Cảnh báo tăng đột biến độ trễ API",
      audioText: "We are seeing an unexpected spike in latency across all payment services.",
      vi: "Chúng tôi đang ghi nhận mức tăng đột biến bất ngờ về độ trễ trên toàn bộ các dịch vụ thanh toán.",
      soundTips: "Nối âm 'seeing_an_unexpected' (/ˈsiːɪŋ_ən_ˌʌnɪkˈspektɪd/) và 'spike_in' (/spaɪk_ɪn/); 'services' có 3 âm tiết /ˈsɜːrvɪsɪz/."
    },
    {
      id: "DIC-20",
      category: "Production Incident & Tech Call",
      level: "intermediate",
      title: "War-room: Quyết định Rollback bản phát hành lỗi",
      audioText: "Let's roll back the latest deployment immediately to restore checkout availability.",
      vi: "Hãy quay lui bản triển khai mới nhất ngay lập tức để khôi phục khả năng thanh toán.",
      soundTips: "Khi làm động từ thì 'roll back' viết tách 2 từ (danh từ mới viết liền 'rollback'); chú ý trọng âm 'availability' rơi vào âm '-bil-' (/əˌveɪləˈbɪləti/)."
    },
    {
      id: "DIC-21",
      category: "Production Incident & Tech Call",
      level: "upper",
      title: "Debugging: Cạn kiệt Connection Pool cơ sở dữ liệu",
      audioText: "The outage was triggered by database connection pool exhaustion during peak traffic.",
      vi: "Sự cố sập hệ thống bị kích hoạt bởi tình trạng cạn kiệt vùng kết nối cơ sở dữ liệu trong giờ cao điểm.",
      soundTips: "'outage' phát âm /ˈaʊtɪdʒ/; 'triggered' có đuôi /d/; 'exhaustion' có âm 'h' câm và đọc là /ɪɡˈzɔːstʃən/."
    },
    {
      id: "DIC-22",
      category: "Production Incident & Tech Call",
      level: "upper",
      title: "Kafka Sync: Xử lý trùng lặp bản tin bằng khóa Idempotent",
      audioText: "Every Kafka consumer must handle duplicate messages safely using an idempotency key.",
      vi: "Mọi trình tiêu thụ Kafka đều phải xử lý an toàn các bản tin trùng lặp bằng khóa chống trùng (idempotency key).",
      soundTips: "'duplicate' khi làm tính từ đọc là /ˈduːplɪkət/ (khác động từ /ˈduːplɪkeɪt/); 'idempotency' đọc chuẩn quốc tế là /ˌaɪdemˈpoʊtənsi/."
    },
    {
      id: "DIC-23",
      category: "Production Incident & Tech Call",
      level: "advanced",
      title: "JVM Tuning: Rò rỉ bộ nhớ Heap gây treo GC",
      audioText: "Unbounded thread-local caches caused severe garbage collection pauses on two production nodes.",
      vi: "Các bộ nhớ đệm thread-local không giới hạn đã gây ra hiện tượng tạm dừng thu gom rác nghiêm trọng trên hai node production.",
      soundTips: "Ba danh từ số nhiều có đuôi /ɪz/ và /z/ liên tiếp: 'caches' (/ˈkæʃɪz/), 'pauses' (/ˈpɔːzɪz/), và 'nodes' (/noʊdz/) — nghe kỹ để không bỏ sót 's'!"
    },
    {
      id: "DIC-24",
      category: "Production Incident & Tech Call",
      level: "advanced",
      title: "Postmortem: Bổ sung Circuit Breaker chống lỗi dây chuyền",
      audioText: "We implemented a circuit breaker to prevent downstream timeouts from cascading further.",
      vi: "Chúng tôi đã triển khai bộ ngắt mạch (circuit breaker) để ngăn lỗi quá hạn từ hệ thống phía dưới lan truyền dây chuyền.",
      soundTips: "'circuit' đọc là /ˈsɜːrkɪt/ (chữ 'u' câm, đừng đọc là 'sir-kuit'!); 'cascading' trọng âm rơi vào âm 2 (/kæˈskeɪdɪŋ/)."
    }
  ],

  /* =========================================================================
   * 2. LUYỆN NÓI & SHADOWING (SPEAKING — 20 BÀI x 4 NHÓM KỊCH BẢN)
   * ========================================================================= */
  speaking: [
    // --- Nhóm 1: Daily Standup (SPK-01 -> SPK-05) ---
    {
      id: "SPK-01",
      category: "Daily Standup",
      level: "basic",
      situation: "Báo cáo chuẩn mực công việc hôm qua đã xong và mục tiêu chính hôm nay trong buổi họp Standup sáng.",
      en: "Yesterday I finished implementing the payment webhook, and today I am focusing on writing integration tests.",
      ipaHint: "Trọng âm & nhịp ngắt câu: YESTERDAY / I FINISHED implementing the PAYMENT webhook, / and TODAY / I am FOCUSING on writing integration TESTS.",
      vi: "Hôm qua tôi đã hoàn thành việc cài đặt webhook thanh toán, và hôm nay tôi đang tập trung viết kiểm thử tích hợp.",
      tip: "Đuôi '-ed' của 'finished' đi sau âm /ʃ/ nên bật rõ âm /t/ (/ˈfɪnɪʃt/); tuyệt đối không bỏ quên cụm âm cuối /sts/ của từ 'tests' (/tests/)."
    },
    {
      id: "SPK-02",
      category: "Daily Standup",
      level: "intermediate",
      situation: "Báo cáo Blocker khi bị chặn bởi chứng chỉ môi trường Staging hết hạn và nhờ DevOps hỗ trợ.",
      en: "I am currently blocked on the checkout service because our staging certificate expired last night.",
      ipaHint: "Nhịp ngắt: I am CURRENTLY BLOCKED / on the CHECKOUT service / because our STAGING certificate / EXPIRED last NIGHT.",
      vi: "Hiện tại tôi đang bị chặn ở dịch vụ thanh toán vì chứng chỉ môi trường staging của chúng ta đã hết hạn tối qua.",
      tip: "Từ 'certificate' (danh từ) đọc âm cuối là /ət/ (/sərˈtɪfɪkət/), KHÔNG đọc là /-keɪt/! Nối mượt 'blocked_on' (/blɑːkt_ɑːn/)."
    },
    {
      id: "SPK-03",
      category: "Daily Standup",
      level: "intermediate",
      situation: "Giải thích ngắn gọn lý do ticket kéo dài thêm nửa ngày do phát hiện edge case về múi giờ.",
      en: "The report task took slightly longer than expected because I uncovered a tricky timezone edge case.",
      ipaHint: "Nhịp ngắt: The REPORT task / took SLIGHTLY LONGER than EXPECTED / because I UNCOVERED / a TRICKY TIMEZONE edge case.",
      vi: "Đầu việc báo cáo mất nhiều thời gian hơn dự kiến một chút vì tôi phát hiện ra một trường hợp biên hóc búa về múi giờ.",
      tip: "Chú ý âm /dʒ/ cuối từ 'edge' (/edʒ/) trước khi bật âm /k/ của 'case'; hạ giọng dứt khoát ở cuối câu để thể hiện sự chủ động nắm kiểm soát."
    },
    {
      id: "SPK-04",
      category: "Daily Standup",
      level: "upper",
      situation: "Thông báo đã hoàn tất phần việc của mình sớm hơn dự kiến và sẵn sàng hỗ trợ đồng đội review PR.",
      en: "All my sprint tickets are now in QA verification, so I have extra bandwidth to review pull requests today.",
      ipaHint: "Nhịp ngắt: ALL my SPRINT tickets / are NOW in QA verification, / so I have EXTRA BANDWIDTH / to review PULL requests TODAY.",
      vi: "Tất cả ticket trong sprint của tôi hiện đã sang bước QA kiểm tra, nên hôm nay tôi còn dư thời gian để hỗ trợ duyệt pull request.",
      tip: "'bandwidth' (/ˈbændwɪdθ/) kết thúc bằng âm thổi lưỡi /θ/; từ 'pull' có nguyên âm /ʊ/ ngắn (/pʊl/), giữ đầu lưỡi cong nhẹ ở chữ 'l'."
    },
    {
      id: "SPK-05",
      category: "Daily Standup",
      level: "upper",
      situation: "Xác nhận tiến độ sẵn sàng trước giờ đóng băng code (Code Freeze) cho đợt Release cuối tuần.",
      en: "Everything is on track for Friday's code freeze, and no critical blockers have been reported so far.",
      ipaHint: "Nhịp ngắt: EVERYTHING is ON TRACK / for FRIDAY'S code FREEZE, / and NO CRITICAL blockers / have been REPORTED so FAR.",
      vi: "Mọi thứ đều đang đúng tiến độ cho mốc đóng băng code thứ Sáu, và chưa có trở ngại nghiêm trọng nào được ghi nhận tính đến lúc này.",
      tip: "Kéo dài nguyên âm /iː/ và rung âm /z/ cuối từ 'freeze' (/friːz/) để không bị nghe nhầm thành 'free' (/friː/)."
    },

    // --- Nhóm 2: Code Review & Polite Push Back (SPK-06 -> SPK-10) ---
    {
      id: "SPK-06",
      category: "Code Review & Polite Push Back",
      level: "basic",
      situation: "Góp ý lịch sự trong buổi họp Code Review để tách hàm nhỏ giúp dễ đọc và dễ viết Unit Test hơn.",
      en: "Could we extract this validation logic into a separate helper method to improve readability and unit testing?",
      ipaHint: "Nhịp ngắt & lên giọng nhẹ cuối câu hỏi: Could we EXTRACT / this VALIDATION logic / into a SEPARATE helper method / to improve READABILITY / and UNIT testing? ↗",
      vi: "Chúng ta có thể tách phần logic kiểm tra hợp lệ này ra một hàm phụ trợ riêng để tăng độ dễ đọc và tiện viết unit test được không?",
      tip: "'extract' khi làm động từ nhấn trọng âm âm 2 (/ɪkˈstrækt/); 'separate' làm tính từ đọc gọn 2 âm tiết rưỡi (/ˈseprət/), không đọc /-reɪt/."
    },
    {
      id: "SPK-07",
      category: "Code Review & Polite Push Back",
      level: "intermediate",
      situation: "Cảnh báo tinh tế nguy cơ N+1 Query khi gọi Database bên trong vòng lặp Java Stream.",
      en: "Calling the repository inside this loop might trigger an N-plus-one query issue under heavy production load.",
      ipaHint: "Nhịp ngắt: CALLING the REPOSITORY / inside this LOOP / might TRIGGER / an N-PLUS-ONE query issue / under HEAVY production LOAD.",
      vi: "Việc gọi tầng repository bên trong vòng lặp này có thể gây ra lỗi truy vấn N+1 khi chịu tải lớn trên môi trường thực tế.",
      tip: "'repository' nhấn âm 2 (/rɪˈpɑːzətɔːri/); dùng 'might trigger' với tông giọng điềm tĩnh giúp người nghe cảm thấy bạn đang bảo vệ hệ thống chứ không bắt lỗi cá nhân."
    },
    {
      id: "SPK-08",
      category: "Code Review & Polite Push Back",
      level: "upper",
      situation: "Từ chối khéo (Polite Push Back) khi Product Manager muốn nhồi thêm tính năng sát ngày Go-live.",
      en: "I understand this feature is urgent, but squeezing it into this sprint puts our payment stability at risk.",
      ipaHint: "Nhịp ngắt: I UNDERSTAND this feature is URGENT, / but SQUEEZING it into this SPRINT / puts our PAYMENT stability / at RISK.",
      vi: "Tôi hiểu tính năng này rất gấp, nhưng việc ép nó vào ngay sprint này sẽ đẩy sự ổn định của luồng thanh toán vào thế rủi ro.",
      tip: "Nhấn rõ từ 'understand' ở vế đầu để thể hiện sự đồng cảm (empathy), ngừng 0.5 giây trước chữ 'but', rồi nhấn đanh gọn cụm 'at risk' (/æt rɪsk/)."
    },
    {
      id: "SPK-09",
      category: "Code Review & Polite Push Back",
      level: "upper",
      situation: "Đề xuất giải pháp chia giai đoạn (Phased Rollout) thay vì nói 'Không làm kịp' với khách hàng.",
      en: "To hit Friday's deadline safely, how about shipping the core API first and rolling out bulk export next week?",
      ipaHint: "Nhịp ngắt: To hit FRIDAY'S deadline SAFELY, / how about SHIPPING the CORE API first / and ROLLING OUT bulk export / NEXT WEEK? ↗",
      vi: "Để kịp hạn chót thứ Sáu một cách an toàn, hay là chúng ta phát hành API cốt lõi trước rồi triển khai tính năng xuất hàng loạt vào tuần sau nhé?",
      tip: "'export' khi là danh từ nhấn âm 1 (/ˈekspɔːrt/); nối mượt 'rolling_out' (/ˈroʊlɪŋ_aʊt/) và nâng nhẹ giọng ở 'next week?' để mở lời thương lượng."
    },
    {
      id: "SPK-10",
      category: "Code Review & Polite Push Back",
      level: "advanced",
      situation: "Giải thích lý do không được đổi tên trường JSON trực tiếp trên API công khai để giữ Backward Compatibility.",
      en: "Renaming this JSON field directly would break existing mobile apps, so let's deprecate it gradually across two releases.",
      ipaHint: "Nhịp ngắt: RENAMING this JSON field DIRECTLY / would BREAK existing MOBILE apps, / so let's DEPRECATE it GRADUALLY / across TWO RELEASES.",
      vi: "Việc đổi tên trực tiếp trường JSON này sẽ làm hỏng các ứng dụng di động hiện hữu, vì vậy hãy đánh dấu ngừng hỗ trợ nó từ từ qua hai đợt phát hành.",
      tip: "Phân biệt cực kỹ 'deprecate' (/ˈdeprəkeɪt/ — khai tử tính năng phần mềm) với 'depreciate' (/dɪˈpriːʃieɪt/ — khấu hao tài sản kế toán)!"
    },

    // --- Nhóm 3: System Design & Java Interview (SPK-11 -> SPK-15) ---
    {
      id: "SPK-11",
      category: "System Design & Java Interview",
      level: "intermediate",
      situation: "Mở đầu phỏng vấn Senior Java ấn tượng trong 2 câu (Elevator Pitch nêu rõ năm kinh nghiệm & thế mạnh chịu tải cao).",
      en: "I am a Senior Java Engineer with seven years of experience building high-throughput fintech microservices using Spring Boot and Kafka.",
      ipaHint: "Nhịp ngắt: I am a SENIOR JAVA Engineer / with SEVEN years of EXPERIENCE / building HIGH-THROUGHPUT fintech microservices / using SPRING BOOT and KAFKA.",
      vi: "Tôi là Kỹ sư Java cấp cao với bảy năm kinh nghiệm xây dựng các dịch vụ nhỏ ngành tài chính công nghệ chịu tải cao bằng Spring Boot và Kafka.",
      tip: "'throughput' ghép từ 'through' + 'put' -> đọc là /ˈθruːpʊt/ (thè nhẹ đầu lưỡi ở âm /θr/, đừng đọc là 'trô-pút'!)."
    },
    {
      id: "SPK-12",
      category: "System Design & Java Interview",
      level: "upper",
      situation: "Trả lời câu hỏi phỏng vấn về cách chẩn đoán và xử lý lỗi rò rỉ bộ nhớ (Memory Leak) trên JVM.",
      en: "When heap usage keeps climbing after full garbage collection, I capture a heap dump and inspect retained objects in Eclipse MAT.",
      ipaHint: "Nhịp ngắt: When HEAP usage keeps CLIMBING / after FULL garbage collection, / I CAPTURE a HEAP DUMP / and inspect RETAINED objects / in Eclipse MAT.",
      vi: "Khi mức dùng bộ nhớ heap tiếp tục tăng sau đợt thu gom rác toàn phần, tôi trích xuất bản chụp heap dump và kiểm tra các đối tượng bị giữ lại bằng Eclipse MAT.",
      tip: "Âm 'b' cuối từ 'climb' / 'climbing' hoàn toàn CÂM (/ˈklaɪmɪŋ/ — tuyệt đối không đọc âm /b/ ở giữa!); 'objects' (danh từ) nhấn âm 1 (/ˈɑːbdʒɪkts/)."
    },
    {
      id: "SPK-13",
      category: "System Design & Java Interview",
      level: "advanced",
      situation: "Giải thích cách đảm bảo tính bất biến kết quả (Idempotency) khi xử lý giao dịch thanh toán qua Kafka.",
      en: "Because Kafka guarantees at-least-once delivery by default, our payment consumer enforces idempotency with a unique database constraint on transaction IDs.",
      ipaHint: "Nhịp ngắt: Because KAFKA guarantees AT-LEAST-ONCE delivery by DEFAULT, / our PAYMENT consumer enforces IDEMPOTENCY / with a UNIQUE database constraint / on TRANSACTION IDs.",
      vi: "Vì mặc định Kafka đảm bảo cơ chế gửi ít nhất một lần, consumer thanh toán của chúng tôi cưỡng chế tính chống trùng lặp bằng ràng buộc duy nhất dưới cơ sở dữ liệu trên mã giao dịch.",
      tip: "'guarantees' đọc là /ˌɡærənˈtiːz/ (âm 'u' câm); 'unique' đọc là /juːˈniːk/ (có âm /j/ đầu từ và kết thúc bằng âm /k/ sắc gọn)."
    },
    {
      id: "SPK-14",
      category: "System Design & Java Interview",
      level: "advanced",
      situation: "Phân tích đánh đổi (Trade-off) giữa tính nhất quán tức thời và độ trễ thấp trong vòng phỏng vấn System Design.",
      en: "Caching account balances in Redis slashes read latency dramatically, though we must carefully handle cache invalidation whenever a transfer commits.",
      ipaHint: "Nhịp ngắt: CACHING account balances in REDIS / SLASHES read latency DRAMATICALLY, / though we MUST carefully handle / CACHE INVALIDATION / whenever a TRANSFER commits.",
      vi: "Lưu đệm số dư tài khoản trên Redis giúp cắt giảm mạnh độ trễ đọc, tuy nhiên chúng ta phải xử lý cẩn thận việc vô hiệu hóa bộ đệm mỗi khi có giao dịch chuyển tiền hoàn tất.",
      tip: "Lưu ý cực quan trọng cho Dev Việt: 'cache' phát âm y hệt 'cash' (tiền mặt -> /kæʃ/ — 1 âm tiết duy nhất, KHÔNG đọc là 'cát-xê' hay 'két-chờ'!)."
    },
    {
      id: "SPK-15",
      category: "System Design & Java Interview",
      level: "advanced",
      situation: "Đàm phán mức lương kỳ vọng một cách tự tin, chuyên nghiệp ở vòng Offer cuối cùng.",
      en: "Based on the technical scope of this Tech Lead role and my distributed systems background, I am targeting a base salary around four thousand dollars.",
      ipaHint: "Nhịp ngắt: BASED on the TECHNICAL scope of this Tech Lead role / and my DISTRIBUTED systems background, / I am TARGETING a BASE salary / around FOUR THOUSAND dollars.",
      vi: "Dựa trên phạm vi kỹ thuật của vị trí Tech Lead này và nền tảng hệ thống phân tán của tôi, tôi đang hướng tới mức lương cơ bản khoảng bốn nghìn đô la.",
      tip: "'distributed' nhấn trọng âm âm 2 (/dɪˈstrɪbjuːtɪd/); giữ tông giọng trầm ổn, không lên giọng rụt rè ở cụm số tiền cuối câu."
    },

    // --- Nhóm 4: TOEIC Business Meeting (SPK-16 -> SPK-20) ---
    {
      id: "SPK-16",
      category: "TOEIC Business Meeting",
      level: "basic",
      situation: "Mở đầu cuộc họp liên phòng ban chuyên nghiệp và giới thiệu mục tiêu buổi họp.",
      en: "Thank you everyone for joining on time today; let's walk through the agenda for our quarterly platform upgrade.",
      ipaHint: "Nhịp ngắt: THANK you EVERYONE / for JOINING on TIME today; / let's WALK THROUGH the AGENDA / for our QUARTERLY platform UPGRADE.",
      vi: "Cảm ơn mọi người đã tham gia đúng giờ hôm nay; chúng ta hãy cùng điểm qua chương trình nghị sự cho đợt nâng cấp nền tảng hàng quý nhé.",
      tip: "'agenda' nhấn âm 2 (/əˈdʒendə/); cụm 'walk through' nối nhẹ âm /k/ với âm thổi /θr/ (/wɔːk θruː/)."
    },
    {
      id: "SPK-17",
      category: "TOEIC Business Meeting",
      level: "intermediate",
      situation: "Hỏi làm rõ yêu cầu cam kết SLA và lưu trữ dữ liệu bảo mật với đối tác nước ngoài.",
      en: "Could you clarify whether the client requires data encryption at rest to comply with local banking regulations?",
      ipaHint: "Nhịp ngắt: Could you CLARIFY / whether the CLIENT requires / DATA ENCRYPTION at REST / to COMPLY with LOCAL banking regulations? ↗",
      vi: "Bạn có thể làm rõ liệu khách hàng có yêu cầu mã hóa dữ liệu lưu trữ tĩnh để tuân thủ các quy định ngân hàng sở tại hay không?",
      tip: "'requires' (/rɪˈkwaɪərz/) có âm /z/ cuối; 'comply with' nhấn âm 2 (/kəmˈplaɪ wɪð/) — cụm từ vựng vàng vừa ăn điểm TOEIC 650+ vừa chuẩn Fintech."
    },
    {
      id: "SPK-18",
      category: "TOEIC Business Meeting",
      level: "intermediate",
      situation: "Xin phép dời lịch buổi Demo với nhà cung cấp sang ngày hôm sau do trùng ca bảo trì khẩn cấp.",
      en: "Would it be possible to reschedule tomorrow's vendor demonstration to Thursday afternoon due to emergency server maintenance?",
      ipaHint: "Nhịp ngắt: Would it be POSSIBLE / to RESCHEDULE tomorrow's VENDOR demonstration / to THURSDAY afternoon / due to EMERGENCY server MAINTENANCE? ↗",
      vi: "Liệu chúng ta có thể dời buổi trình diễn của nhà cung cấp vào ngày mai sang chiều thứ Năm do ca bảo trì máy chủ khẩn cấp được không?",
      tip: "'reschedule' giọng Mỹ đọc /ˌriːˈskedʒuːl/ (giọng Anh /ˌriːˈʃedjuːl/); 'maintenance' nhấn âm ĐẦU (/ˈmeɪntənəns/ — KHÔNG đọc là 'mên-tên-ần'!)."
    },
    {
      id: "SPK-19",
      category: "TOEIC Business Meeting",
      level: "upper",
      situation: "Chốt lại biên bản cuộc họp (Action Items), người chịu trách nhiệm và hạn chót trước khi kết thúc cuộc gọi.",
      en: "Before we wrap up, I will circulate the meeting minutes summarizing all action items and owners by five o'clock.",
      ipaHint: "Nhịp ngắt: BEFORE we WRAP UP, / I will CIRCULATE the MEETING MINUTES / SUMMARIZING all ACTION items and OWNERS / by FIVE O'CLOCK.",
      vi: "Trước khi chúng ta kết thúc, tôi sẽ gửi biên bản cuộc họp tóm tắt toàn bộ các đầu việc cần làm và người phụ trách trước năm giờ chiều.",
      tip: "'wrap up' có âm 'w' câm -> nối thẳng /ræp_ʌp/; 'minutes' (biên bản họp) phát âm giống hệt 'phút' (/ˈmɪnɪts/), tuyệt đối không nhầm với tính từ 'minute' (/maɪˈnuːt/ - tí hon)."
    },
    {
      id: "SPK-20",
      category: "TOEIC Business Meeting",
      level: "advanced",
      situation: "Báo cáo ban giám đốc về hiệu quả tiết kiệm chi phí hạ tầng Cloud sau khi tối ưu kiến trúc.",
      en: "By migrating stateless workloads to spot instances, our engineering department reduced monthly cloud expenditure by thirty percent.",
      ipaHint: "Nhịp ngắt: By MIGRATING stateless workloads / to SPOT instances, / our ENGINEERING department / REDUCED monthly cloud EXPENDITURE / by THIRTY PERCENT.",
      vi: "Nhờ chuyển đổi các tác vụ không trạng thái sang máy chủ spot, bộ phận kỹ thuật của chúng tôi đã cắt giảm ba mươi phần trăm chi phí đám mây hàng tháng.",
      tip: "'expenditure' nhấn âm 2 (/ɪkˈspendɪtʃər/); 'percent' nhấn âm 2 (/pərˈsent/) kèm âm chặn /t/ cuối câu thật rõ ràng."
    }
  ],

  /* =========================================================================
   * 3. SENIOR JAVA WORKPLACE TEMPLATES (6 BỘ x 6 MẪU CÂU = 36 KỊCH BẢN THỰC CHIẾN)
   * ========================================================================= */
  javaTemplates: [
    // --- Bộ 1: Daily Standup & Sprint Sync ---
    {
      id: "TPL-STANDUP",
      title: "1. Daily Standup & Sprint Sync (15 phút mỗi sáng)",
      icon: "☀️",
      desc: "Bộ khung báo cáo ngắn gọn dưới 45 giây theo chuẩn Scrum quốc tế: rõ kết quả (Outcome), rõ kế hoạch (Plan) và chủ động nêu rủi ro (Blockers).",
      items: [
        {
          scenario: "Báo cáo chuẩn mực: Đã xong hôm qua + Việc hôm nay + Không vướng mắc",
          en: "Yesterday I wrapped up the JWT token refresh flow and merged the PR after addressing all review comments. Today I'll start implementing rate limiting on the login API. No blockers on my side.",
          vi: "Hôm qua tôi đã hoàn tất luồng làm mới JWT token và gộp PR sau khi xử lý xong toàn bộ góp ý review. Hôm nay tôi sẽ bắt đầu cài đặt giới hạn tần suất gọi trên API đăng nhập. Phía tôi không có vướng mắc gì.",
          keywords: ["wrap up", "address review comments", "rate limiting", "no blockers on my side"]
        },
        {
          scenario: "Khi bị kẹt chờ team khác (Blocker / External Dependency)",
          en: "I'm currently blocked on the eKYC endpoint because the staging SSL certificate has expired. Could someone from DevOps help renew it right after standup so we can unblock QA testing?",
          vi: "Hiện tại tôi đang bị kẹt ở endpoint eKYC vì chứng chỉ SSL trên môi trường staging đã hết hạn. Có bạn nào bên DevOps giúp gia hạn ngay sau buổi standup để gỡ kẹt cho bên QA kiểm thử được không?",
          keywords: ["be blocked on", "staging certificate", "has expired", "renew", "unblock"]
        },
        {
          scenario: "Khi ticket phức tạp hơn ước tính ban đầu (Unexpected Complexity)",
          en: "While refactoring the settlement job, I uncovered an undocumented race condition in legacy code. It will take roughly half a day longer than estimated, though Friday's release remains on track.",
          vi: "Trong lúc tái cấu trúc tiến trình đối soát, tôi phát hiện một lỗi tranh chấp luồng chưa từng được ghi nhận trong code cũ. Việc này sẽ tốn thêm khoảng nửa ngày so với ước tính, tuy nhiên lịch phát hành thứ Sáu vẫn đảm bảo đúng tiến độ.",
          keywords: ["uncover", "race condition", "roughly", "than estimated", "remain on track"]
        },
        {
          scenario: "Khi đã sửa xong bug & nhờ QA kiểm tra lại trên Staging",
          en: "I've deployed the hotfix for the duplicate invoice bug to staging under build #418. Whenever QA has bandwidth today, could you help run a quick smoke test and confirm?",
          vi: "Tôi đã triển khai bản vá lỗi trùng hóa đơn lên môi trường staging ở bản dựng #418. Hôm nay bất cứ khi nào bên QA có thời gian trống, nhờ các bạn chạy kiểm thử nhanh (smoke test) và xác nhận giúp nhé.",
          keywords: ["deploy to staging", "have bandwidth", "run a smoke test", "confirm"]
        },
        {
          scenario: "Cảnh báo sớm nguy cơ trễ Sprint do phát sinh yêu cầu (Scope Creep)",
          en: "Heads-up for the team: the newly added audit-log requirement increases our backend scope significantly. Let's sync up offline with the Product Owner to reprioritize the backlog.",
          vi: "Lưu ý nhanh với cả nhóm: yêu cầu ghi nhật ký kiểm toán mới thêm vào làm tăng đáng kể phạm vi công việc backend. Chúng ta hãy họp riêng ngắn gọn với Product Owner sau buổi này để sắp xếp lại thứ tự ưu tiên của backlog.",
          keywords: ["heads-up", "increase scope", "sync up offline", "reprioritize the backlog"]
        },
        {
          scenario: "Khi xong việc sớm và chủ động đề xuất hỗ trợ đồng đội",
          en: "All my assigned stories for Sprint 14 are now verified in staging. I have free bandwidth this afternoon—happy to jump in on code reviews or pair-program on the Kafka migration.",
          vi: "Tất cả các đầu việc được giao trong Sprint 14 của tôi hiện đã được xác nhận xong trên staging. Chiều nay tôi còn trống thời gian — rất sẵn lòng tham gia duyệt code hoặc lập trình cặp ở phần chuyển đổi Kafka.",
          keywords: ["assigned stories", "free bandwidth", "jump in on", "pair-program"]
        }
      ]
    },

    // --- Bộ 2: Pull Request Description & Release Notes ---
    {
      id: "TPL-PR-RELEASE",
      title: "2. Pull Request Description & Release Notes (Mô tả PR & Phát hành)",
      icon: "🔀",
      desc: "Giúp Reviewer hiểu ngay bối cảnh trong 30 giây, phê duyệt PR nhanh gấp đôi và viết Release Notes sáng rõ cho cả Tech lẫn Business.",
      items: [
        {
          scenario: "Tóm tắt bối cảnh & thay đổi chính ở đầu Pull Request (Context & Summary)",
          en: "### Summary\nThis PR introduces Redis-backed distributed locking for our scheduled payout cronjob to prevent duplicate disbursements when multiple Kubernetes pods run concurrently.",
          vi: "### Tóm tắt\nPR này bổ sung cơ chế khóa phân tán trên nền Redis cho tiến trình định kỳ chi trả nhằm ngăn chặn việc giải ngân trùng lặp khi nhiều pod Kubernetes cùng chạy đồng thời.",
          keywords: ["introduce", "distributed locking", "prevent duplicate", "run concurrently"]
        },
        {
          scenario: "Giải thích lý do chọn giải pháp kỹ thuật (Design Rationale)",
          en: "### Why This Approach?\nInstead of pessimistic `SELECT FOR UPDATE` locks that increased database contention under load, we opted for Redisson lease locks with a 30-second TTL to keep DB connections lightweight.",
          vi: "### Vì sao chọn hướng này?\nThay vì dùng khóa bi quan `SELECT FOR UPDATE` gây tăng tranh chấp cơ sở dữ liệu khi tải cao, chúng tôi chọn khóa thuê bao Redisson có thời hạn tự hủy 30 giây để giữ nhẹ kết nối DB.",
          keywords: ["instead of", "database contention", "opt for", "keep ... lightweight"]
        },
        {
          scenario: "Cam kết tương thích ngược & lưu ý Database Migration (Backward Compatibility)",
          en: "### Backward Compatibility & Migration\nFully backward-compatible. The Flyway script `V42__add_payout_idempotency_idx.sql` uses `CREATE INDEX CONCURRENTLY` so zero downtime is expected during deployment.",
          vi: "### Tương thích ngược & Chuyển đổi dữ liệu\nHoàn toàn tương thích ngược. Script Flyway `V42__add_payout_idempotency_idx.sql` sử dụng `CREATE INDEX CONCURRENTLY` nên dự kiến không gây gián đoạn dịch vụ nào khi triển khai.",
          keywords: ["fully backward-compatible", "zero downtime", "is expected", "during deployment"]
        },
        {
          scenario: "Hướng dẫn các bước kiểm chứng cho Reviewer & QA (Verification Steps)",
          en: "### Verification\n1. Covered by integration tests using Testcontainers (PostgreSQL 16 + Redis 7).\n2. Simulated 50 concurrent threads triggering the same batch ID; verified exactly one payout transaction was persisted.",
          vi: "### Kiểm chứng\n1. Đã bao phủ bằng kiểm thử tích hợp dùng Testcontainers (PostgreSQL 16 + Redis 7).\n2. Đã giả lập 50 luồng đồng thời kích hoạt cùng một mã lô; xác nhận chỉ duy nhất một giao dịch chi trả được lưu xuống DB.",
          keywords: ["covered by", "simulate", "concurrent threads", "be persisted"]
        },
        {
          scenario: "Viết Release Notes gửi Stakeholder / Kênh thông báo chung",
          en: "🚀 **Release v2.18.0 — Highlights**\n- Optimized order history pagination, reducing p95 API latency from 820ms down to 95ms.\n- Resolved an intermittent timeout issue affecting PDF invoice downloads.",
          vi: "🚀 **Bản phát hành v2.18.0 — Điểm nhấn**\n- Tối ưu phân trang lịch sử đơn hàng, giảm độ trễ API phân vị p95 từ 820ms xuống còn 95ms.\n- Khắc phục dứt điểm lỗi quá thời gian chập chờn ảnh hưởng tới tính năng tải hóa đơn PDF.",
          keywords: ["optimize", "reduce latency from ... down to ...", "intermittent timeout", "affecting"]
        },
        {
          scenario: "Kế hoạch Rollback an toàn đính kèm phiếu Change Request",
          en: "### Rollback Plan\nThe new routing logic is guarded behind feature flag `ENABLE_V2_LEDGER`. If error rates exceed 0.5%, we can toggle the flag off instantaneously without redeploying.",
          vi: "### Kế hoạch quay lui\nLuồng điều hướng mới được bảo vệ sau cờ tính năng `ENABLE_V2_LEDGER`. Nếu tỷ lệ lỗi vượt quá 0.5%, chúng ta có thể tắt cờ này ngay tức khắc mà không cần triển khai lại.",
          keywords: ["guarded behind", "feature flag", "exceed", "instantaneously", "without redeploying"]
        }
      ]
    },

    // --- Bộ 3: Polite Code Review Comments ---
    {
      id: "TPL-CODE-REVIEW",
      title: "3. Polite Code Review Comments (Góp ý không gây mất lòng)",
      icon: "🔍",
      desc: "Nghệ thuật dùng Modal Verbs, câu hỏi gợi mở và tiền tố `Nit:` giúp nâng chất lượng code mà đồng nghiệp quốc tế luôn tôn trọng, hợp tác.",
      items: [
        {
          scenario: "Góp ý nhỏ về đặt tên / clean code không chặn phê duyệt (Non-blocking Nitpick)",
          en: "Nit (non-blocking): Could we rename `processData()` to `reconcileDailySettlements()` so future readers immediately grasp its business intent? Approving in advance!",
          vi: "Góp ý nhỏ (không chặn merge): Chúng ta đổi tên `processData()` thành `reconcileDailySettlements()` để người đọc sau này nắm bắt ngay ý nghĩa nghiệp vụ được không? Mình bấm Approve trước nhé!",
          keywords: ["Nit (non-blocking)", "grasp its business intent", "in advance"]
        },
        {
          scenario: "Chỉ ra lỗi N+1 Query trong Hibernate / Spring Data JPA cực kỳ tinh tế",
          en: "Good catch on filtering inactive merchants! One performance concern: accessing `order.getItems()` inside this stream will trigger lazy-loading N+1 queries. Would `@EntityGraph` or a `JOIN FETCH` query work better here?",
          vi: "Xử lý lọc các đối tác ngừng hoạt động chuẩn lắm! Có một lưu ý nhỏ về hiệu năng: gọi `order.getItems()` bên trong stream này sẽ kích hoạt lỗi truy vấn N+1 do lazy-loading. Liệu dùng `@EntityGraph` hoặc `JOIN FETCH` ở đây có ổn hơn không nhỉ?",
          keywords: ["good catch", "performance concern", "trigger lazy-loading", "would ... work better"]
        },
        {
          scenario: "Cảnh báo nguy cơ mất Thread-safety / Mutability trong môi trường đa luồng",
          en: "Heads-up on concurrency: `SimpleDateFormat` is not thread-safe when shared as a singleton Spring bean. Let's switch to `DateTimeFormatter` (which is immutable) to avoid subtle data corruption under load.",
          vi: "Lưu ý về đa luồng: `SimpleDateFormat` không an toàn luồng khi dùng chung dưới dạng Spring bean đơn bản. Hãy chuyển sang `DateTimeFormatter` (vốn bất biến) để tránh lỗi sai lệch dữ liệu ngầm khi tải cao nhé.",
          keywords: ["thread-safe", "singleton bean", "switch to", "immutable", "data corruption"]
        },
        {
          scenario: "Nhắc xử lý Edge Case Null / Empty hoặc nuốt Exception (Swallowing Exceptions)",
          en: "It looks like this `catch` block logs the warning but swallows the `InterruptedException`. Should we restore the interrupt flag via `Thread.currentThread().interrupt()` so graceful shutdown works properly?",
          vi: "Có vẻ khối `catch` này đã ghi log cảnh báo nhưng lại nuốt mất `InterruptedException`. Chúng ta có nên khôi phục cờ ngắt qua `Thread.currentThread().interrupt()` để cơ chế tắt ứng dụng êm ái hoạt động chuẩn xác không?",
          keywords: ["swallow an exception", "restore the interrupt flag", "graceful shutdown"]
        },
        {
          scenario: "Đề xuất giảm phụ thuộc cứng (Tight Coupling) & tách cấu hình ra ngoài",
          en: "Suggestion: Rather than hardcoding the retry threshold here, what do you think about externalizing it to `application.yml` via `@ConfigurationProperties` so SREs can tune it per environment?",
          vi: "Gợi ý: Thay vì gán cứng ngưỡng thử lại ở đây, bạn nghĩ sao về việc đưa nó ra tệp `application.yml` thông qua `@ConfigurationProperties` để đội SRE có thể tinh chỉnh riêng cho từng môi trường?",
          keywords: ["rather than hardcoding", "externalize", "tune per environment"]
        },
        {
          scenario: "Khen ngợi giải pháp sắc sảo & chốt LGTM tạo động lực cho team",
          en: "Clean, well-structured implementation! Especially love how thoroughly you covered the timeout and partial-refund edge cases in the parameterized JUnit tests. LGTM 🚀",
          vi: "Cách cài đặt rất sạch và có cấu trúc tốt! Mình đặc biệt ấn tượng việc bạn bao phủ kỹ lưỡng các trường hợp biên quá hạn và hoàn tiền một phần trong bộ kiểm thử tham số hóa JUnit. Duyệt nhé (LGTM) 🚀",
          keywords: ["well-structured", "thoroughly cover", "edge cases", "parameterized tests", "LGTM"]
        }
      ]
    },

    // --- Bộ 4: Production Incident & War-room Updates ---
    {
      id: "TPL-INCIDENT",
      title: "4. Production Incident & War-room Updates (Ứng cứu sự cố Production)",
      icon: "🚨",
      desc: "Bình tĩnh làm chủ kênh `#incident-war-room`: thông báo rõ tác động, cập nhật đúng nhịp cho khách hàng và viết Blameless Postmortem chuẩn SRE.",
      items: [
        {
          scenario: "Phát tín hiệu xác nhận sự cố đầu tiên trong 3 phút đầu (Initial Acknowledgment)",
          en: "🚨 **[SEV-1 Investigating]** We are investigating elevated HTTP 503 errors on the Checkout API starting at 14:12 UTC. Roughly 18% of card payments are affected. Backend and SRE leads are on the bridge call—next update in 15 minutes.",
          vi: "🚨 **[SEV-1 Đang điều tra]** Chúng tôi đang điều tra tình trạng tăng cao lỗi HTTP 503 trên API Thanh toán bắt đầu từ 14:12 UTC. Khoảng 18% giao dịch thẻ bị ảnh hưởng. Các trưởng nhóm Backend và SRE đã vào cuộc gọi khẩn — cập nhật tiếp theo sau 15 phút.",
          keywords: ["elevated errors", "roughly ... are affected", "on the bridge call", "next update in"]
        },
        {
          scenario: "Đề xuất giảm thiểu thiệt hại ngay lập tức (Mitigation First, Root Cause Later)",
          en: "Error rates spiked right after deployment `v3.4.2`. Rather than debugging live on production, I recommend we roll back to `v3.4.1` immediately to stop customer impact, then investigate heap dumps in staging.",
          vi: "Tỷ lệ lỗi tăng vọt ngay sau bản triển khai `v3.4.2`. Thay vì gỡ lỗi trực tiếp trên production, tôi đề xuất chúng ta quay lui về bản `v3.4.1` ngay lập tức để chặn đứng ảnh hưởng tới khách hàng, rồi mới phân tích heap dump trên staging sau.",
          keywords: ["spike right after", "roll back immediately", "stop customer impact", "investigate"]
        },
        {
          scenario: "Gửi thông báo trấn an Khách hàng / Đối tác bằng ngôn ngữ chuyên nghiệp",
          en: "We sincerely apologize for the temporary disruption to our webhook delivery service. Our engineering team has identified the bottleneck and applied a mitigation; message backlog is now draining steadily.",
          vi: "Chúng tôi chân thành xin lỗi vì sự gián đoạn tạm thời đối với dịch vụ gửi webhook. Đội ngũ kỹ thuật đã xác định được điểm nghẽn và áp dụng biện pháp khắc phục tạm thời; lượng bản tin tồn đọng hiện đang được giải phóng ổn định.",
          keywords: ["temporary disruption", "identify the bottleneck", "apply a mitigation", "drain steadily"]
        },
        {
          scenario: "Thông báo sự cố đã được khắc phục hoàn toàn (Incident Resolved)",
          en: "✅ **[Resolved]** Checkout API latency and success rates returned to normal baselines at 14:39 UTC following connection pool tuning. No data loss occurred. A full postmortem report will be shared by tomorrow EOD.",
          vi: "✅ **[Đã khắc phục]** Độ trễ và tỷ lệ thành công của API Thanh toán đã trở về ngưỡng bình thường lúc 14:39 UTC sau khi tinh chỉnh vùng kết nối. Không có mất mát dữ liệu nào xảy ra. Báo cáo phân tích sau sự cố đầy đủ sẽ được gửi trước cuối ngày mai.",
          keywords: ["return to normal baselines", "no data loss occurred", "postmortem report", "by tomorrow EOD"]
        },
        {
          scenario: "Viết mục Nguyên nhân gốc rễ không đổ lỗi cá nhân (Blameless Root Cause)",
          en: "### Root Cause\nA missing timeout configuration on the third-party fraud-check HTTP client caused worker threads to hang indefinitely when the upstream provider experienced network degradation.",
          vi: "### Nguyên nhân gốc rễ\nViệc thiếu cấu hình giới hạn thời gian chờ trên HTTP client kiểm tra gian lận bên thứ ba đã khiến các luồng xử lý bị treo vô thời hạn khi nhà cung cấp phía trên gặp suy giảm mạng.",
          keywords: ["missing timeout configuration", "hang indefinitely", "upstream provider", "network degradation"]
        },
        {
          scenario: "Chốt danh sách Hành động phòng ngừa tái diễn (Preventive Action Items)",
          en: "### Preventive Actions\n1. Enforce explicit connect/read timeouts via ArchUnit build rules.\n2. Configure Resilience4j circuit breakers with fallback rules for all external integrations by Sprint 16.",
          vi: "### Hành động phòng ngừa\n1. Cưỡng chế khai báo tường minh thời gian chờ kết nối/đọc thông qua bộ quy tắc kiểm tra kiến trúc ArchUnit lúc build.\n2. Cấu hình bộ ngắt mạch Resilience4j kèm quy tắc dự phòng cho mọi tích hợp bên ngoài trước Sprint 16.",
          keywords: ["enforce explicit timeouts", "circuit breaker", "fallback rules", "external integrations"]
        }
      ]
    },

    // --- Bộ 5: System Design Trade-offs & Technical Proposal ---
    {
      id: "TPL-SYSTEM-DESIGN",
      title: "5. System Design Trade-offs & Technical Proposal (Kiến trúc & Đánh đổi)",
      icon: "🏗️",
      desc: "Ngôn ngữ của Tech Lead / Staff Engineer khi viết RFC/ADR và họp Hội đồng Kiến trúc: luôn gắn giải pháp với con số định lượng và sự đánh đổi (Trade-offs).",
      items: [
        {
          scenario: "Mở đầu thảo luận System Design bằng việc chốt yêu cầu phi chức năng (SLA & Scale)",
          en: "Before diving into component design, let's align on non-functional requirements: are we optimizing for strict strong consistency here, or can the business tolerate eventual consistency within two seconds at 5,000 RPS?",
          vi: "Trước khi đi sâu vào thiết kế thành phần, chúng ta hãy thống nhất các yêu cầu phi chức năng: ở đây chúng ta cần tối ưu cho tính nhất quán mạnh tuyệt đối, hay nghiệp vụ có thể chấp nhận tính nhất quán cuối cùng trong vòng hai giây ở mức tải 5.000 RPS?",
          keywords: ["dive into", "align on", "non-functional requirements", "tolerate eventual consistency"]
        },
        {
          scenario: "Đề xuất chuyển từ gọi REST đồng bộ sang Event-Driven (Kafka + Outbox Pattern)",
          en: "Decoupling notification and loyalty point updates via Kafka with the Transactional Outbox pattern eliminates cascading failures and cuts checkout response time by roughly 40%.",
          vi: "Việc tách rời khâu gửi thông báo và cộng điểm thưởng qua Kafka kết hợp mẫu thiết kế Transactional Outbox giúp loại bỏ lỗi sập dây chuyền và cắt giảm khoảng 40% thời gian phản hồi thanh toán.",
          keywords: ["decouple", "Transactional Outbox pattern", "cascading failures", "cut response time"]
        },
        {
          scenario: "Phân tích thẳng thắn ưu/nhược điểm (Trade-off Analysis) trong tài liệu ADR",
          en: "The primary trade-off of introducing a Redis read-through cache is operational complexity around cache invalidation; however, given our 95:5 read-to-write ratio, it relieves 80% of primary DB load.",
          vi: "Sự đánh đổi chính khi đưa bộ đệm đọc xuyên thấu Redis vào là độ phức tạp vận hành quanh khâu xóa bộ đệm cũ; tuy nhiên, xét tỷ lệ đọc-ghi 95:5 của hệ thống, giải pháp này giải tải tới 80% cho DB chính.",
          keywords: ["primary trade-off", "operational complexity", "cache invalidation", "read-to-write ratio", "relieve load"]
        },
        {
          scenario: "Phản biện lịch sự một giải pháp quá phức tạp (Pushing Back on Over-engineering)",
          en: "Splitting this module into four microservices right now might introduce unnecessary distributed-transaction overhead. Could we start with a well-bounded modular monolith and extract services only when traffic demands it?",
          vi: "Việc tách phân hệ này thành bốn microservice ngay lúc này có thể mang lại chi phí giao dịch phân tán không cần thiết. Liệu chúng ta có thể bắt đầu bằng kiến trúc nguyên khối phân tách mô-đun rõ ràng (modular monolith) và chỉ tách dịch vụ khi lưu lượng thực sự đòi hỏi?",
          keywords: ["distributed-transaction overhead", "well-bounded", "modular monolith", "when traffic demands it"]
        },
        {
          scenario: "Trình bày kế hoạch chuyển đổi hệ thống cũ không gây gián đoạn (Zero-downtime Migration)",
          en: "To de-risk the legacy billing migration, we propose a dual-write and shadow-read phase for two weeks to verify data parity before shifting live customer traffic via Canary rollout.",
          vi: "Để giảm thiểu rủi ro cho đợt chuyển đổi hệ thống tính cước cũ, chúng tôi đề xuất giai đoạn ghi kép và đọc đối chiếu ngầm trong hai tuần nhằm kiểm chứng độ khớp dữ liệu trước khi điều hướng lưu lượng khách hàng thật qua cơ chế phát hành Canary.",
          keywords: ["de-risk", "dual-write", "verify data parity", "shift live traffic", "Canary rollout"]
        },
        {
          scenario: "Xin phê duyệt thời gian trả nợ kỹ thuật (Pitching Tech Debt to Management)",
          en: "Allocating 20% of next sprint's capacity to upgrade from Java 11 to Java 21 LTS unlocks Virtual Threads, allowing us to handle triple the concurrent I/O throughput without scaling up cloud server costs.",
          vi: "Việc phân bổ 20% nguồn lực của sprint tới để nâng cấp từ Java 11 lên Java 21 LTS sẽ mở khóa công nghệ Virtual Threads, cho phép chúng ta xử lý gấp ba lần thông lượng I/O đồng thời mà không cần tăng chi phí thuê máy chủ đám mây.",
          keywords: ["allocate capacity", "unlock Virtual Threads", "concurrent throughput", "scale up costs"]
        }
      ]
    },

    // --- Bộ 6: Senior Java English Interview ---
    {
      id: "TPL-INTERVIEW",
      title: "6. Senior Java English Interview (Phỏng vấn Quốc tế & Lương USD)",
      icon: "🎯",
      desc: "Trọn bộ câu trả lời đắt giá nhất giúp ghi điểm tuyệt đối trước Hiring Manager Âu/Mỹ/Singapore: súc tích, có chiều sâu cơ chế ngầm (Under the Hood) và số liệu thực tế.",
      items: [
        {
          scenario: "Giới thiệu bản thân 60 giây mở màn ấn tượng (Impact-driven Elevator Pitch)",
          en: "I'm a Senior Backend Engineer with over 6 years of hands-on Java experience specializing in high-concurrency payment and e-commerce platforms. Recently, I led the migration of a monolithic core ledger to Spring Boot and Kafka, handling 3 million daily transactions with 99.99% uptime.",
          vi: "Tôi là Kỹ sư Backend cấp cao với hơn 6 năm kinh nghiệm thực chiến về Java, chuyên sâu vào các nền tảng thanh toán và thương mại điện tử chịu tải đồng thời cao. Gần đây, tôi dẫn dắt việc chuyển đổi sổ cái nguyên khối sang Spring Boot và Kafka, xử lý 3 triệu giao dịch mỗi ngày với độ sẵn sàng 99,99%.",
          keywords: ["hands-on experience", "specialize in", "high-concurrency", "lead the migration", "uptime"]
        },
        {
          scenario: "Giải thích JVM Internals, Garbage Collection (G1GC/ZGC) & Tối ưu Memory",
          en: "Under the hood, G1GC divides the heap into equal-sized regions to meet predictable pause-time goals. In production, rather than blindly increasing heap size, I analyze GC logs and JFR profiles to eliminate object allocation churn and unbounded caches.",
          vi: "Ở tầng cơ chế ngầm, G1GC chia vùng nhớ heap thành các phân vùng bằng nhau nhằm đáp ứng mục tiêu thời gian tạm dừng có thể dự đoán trước. Trên thực tế, thay vì tăng kích thước heap một cách mù quáng, tôi phân tích GC log và hồ sơ JFR để triệt tiêu việc cấp phát đối tượng rác liên tục cũng như các bộ đệm không giới hạn.",
          keywords: ["under the hood", "predictable pause-time", "blindly", "allocation churn", "unbounded caches"]
        },
        {
          scenario: "Giải thích Spring `@Transactional` Pitfalls (Self-invocation & Isolation Levels)",
          en: "Because Spring's `@Transactional` relies on AOP proxies, calling a transactional method internally within the same class bypasses the proxy completely. Also, we keep external HTTP calls strictly outside transaction boundaries to prevent DB connection starvation.",
          vi: "Bởi vì `@Transactional` của Spring dựa trên cơ chế proxy AOP, việc tự gọi một phương thức có gắn giao dịch ngay bên trong cùng một lớp sẽ bỏ qua hoàn toàn tầng proxy đó. Ngoài ra, chúng tôi luôn tách mọi lời gọi HTTP ra ngoài phạm vi giao dịch để ngăn chặn tình trạng cạn kiệt kết nối DB.",
          keywords: ["rely on AOP proxies", "bypass the proxy", "transaction boundaries", "connection starvation"]
        },
        {
          scenario: "Giải thích Kafka Consumer Group, Partition Ordering & Rebalancing",
          en: "Kafka only guarantees strict message ordering within a single partition, so we partition events by `accountId` to keep state transitions sequential. To prevent duplicate side effects during consumer group rebalances, we combine manual offset commits with idempotent DB upserts.",
          vi: "Kafka chỉ đảm bảo thứ tự bản tin nghiêm ngặt bên trong một phân vùng đơn lẻ, do đó chúng tôi phân vùng sự kiện theo `accountId` để giữ các bước chuyển trạng thái luôn tuần tự. Để ngăn tác dụng phụ trùng lặp khi nhóm consumer tái cân bằng, chúng tôi kết hợp xác nhận offset thủ công với thao tác cập nhật chống trùng dưới DB.",
          keywords: ["strict ordering", "state transitions", "consumer group rebalance", "manual offset commit", "idempotent"]
        },
        {
          scenario: "Trả lời câu hỏi hành vi (STAR Method): Lần giải quyết bất đồng kỹ thuật hoặc sự cố lớn",
          en: "When two senior engineers disagreed on GraphQL versus REST for our partner gateway, I facilitated a structured spike comparing payload latency, caching, and partner onboarding effort. Presenting concrete benchmark metrics aligned everyone within two days.",
          vi: "Khi hai kỹ sư cấp cao bất đồng giữa việc chọn GraphQL hay REST cho cổng kết nối đối tác, tôi đã điều phối một đợt thử nghiệm ngắn có cấu trúc để so sánh độ trễ bản tin, khả năng lưu đệm và công sức tích hợp của đối tác. Việc trình bày các số liệu đo kiểm cụ thể đã giúp cả nhóm đồng thuận chỉ trong vòng hai ngày.",
          keywords: ["facilitate", "structured spike", "concrete benchmark metrics", "align everyone"]
        },
        {
          scenario: "Hỏi ngược lại Nhà tuyển dụng cuối buổi & Đàm phán gói đãi ngộ (Reverse Interview & Offer)",
          en: "What are the biggest architectural challenges this team aims to solve in the next six months? Regarding compensation, considering the total ownership expected at this Senior level, I'm looking for a total package in the range of $48,000 to $54,000 annually.",
          vi: "Đâu là những thách thức kiến trúc lớn nhất mà đội ngũ hướng tới giải quyết trong sáu tháng tới? Về phần đãi ngộ, xét tới mức độ chịu trách nhiệm toàn diện ở vị trí Senior này, tôi kỳ vọng tổng gói thu nhập nằm trong khoảng 48.000 đến 54.000 đô la mỗi năm.",
          keywords: ["architectural challenges", "aim to solve", "total ownership", "total package", "in the range of"]
        }
      ]
    }
  ]
};
