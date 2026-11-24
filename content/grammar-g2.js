/* JavaEng TOEIC 600+ Academy — Học phần G2: Ngữ Pháp Trung Cấp (G2_1 -> G2_6)
 * Biên soạn chuyên sâu: Thì Hoàn Thành, Tương Lai, Câu Bị Động, Modals Review Code, V-ing/to-V & Tính từ Phân từ.
 */
window.LESSON_DETAILS = window.LESSON_DETAILS || {};
Object.assign(window.LESSON_DETAILS, {
  /* ==========================================================================
   * BÀI G2_1: HIỆN TẠI HOÀN THÀNH VS QUÁ KHỨ ĐƠN & QUÁ KHỨ HOÀN THÀNH
   * ========================================================================== */
  G2_1: {
    duration: "45 phút",
    toeicTarget: "TOEIC 400 → 550+ (Dạng câu hỏi chia thì xuất hiện chắc chắn 2–4 câu trong MỌI đề thi TOEIC)",
    javaContext: "Cập nhật trạng thái Pull Request / Jira (`We have deployed to staging`), viết CV nêu kinh nghiệm tích lũy (`for 6 years`) và mô tả trình tự sự cố Root Cause Analysis (`had expired before...`).",
    teacherIntro: "Chào anh em! Nếu hỏi bất kỳ lập trình viên Việt Nam nào đâu là thì 'khó cảm nhận nhất' trong tiếng Anh, 9/10 anh em sẽ gọi tên **Hiện tại Hoàn thành (`have/has + V3/ed`)**! Tiếng Việt mình chỉ có một chữ **'đã'** dùng chung cho tất cả, nên anh em cứ bối rối mãi: Tại sao câu 'Tôi đã đẩy code lên staging' lúc thì Tây nói `I deployed the fix`, lúc lại nói `I have deployed the fix`? Và tại sao viết `I have fixed it yesterday` lại bị coi là lỗi ngữ pháp nặng? Trong bài này, thầy sẽ xóa sạch sương mù khái niệm đó bằng đúng mô hình bộ nhớ Heap & Git Commit Graph mà anh em làm việc mỗi ngày — học xong 45 phút này, đảm bảo anh em nhìn dấu hiệu trong đề TOEIC Part 5 là khoanh trúng đích trong 3 giây!",
    javaAnalogy: {
      title: "Present Perfect vs Past Simple vs Past Perfect = Live Heap State vs Archived Log vs Pre-Crash Snapshot",
      body: "Hãy đặt 3 thì lên dòng thời gian của JVM & Git: **1) Quá khứ Đơn (`V2/ed`)** là một **Archived Log File đã đóng gói kèm timestamp cụ thể** (`Yesterday`, `in 2023`, `2 hours ago`) — sợi dây liên kết với hiện tại đã cắt đứt hoàn toàn! **2) Hiện tại Hoàn thành (`have/has + V3/ed`)** giống như một **Object vẫn còn sống trên bộ nhớ Heap hiện tại** (`git status` ngay lúc này): hành động tuy khởi phát ở quá khứ nhưng **kết quả của nó đang hiện hữu ngay lúc nói** (`We have deployed v2.1` = hiện giờ trên server ĐANG LÀ bản v2.1!), hoặc bộ đếm tích lũy vẫn đang chạy từ mốc `since` tới tận bây giờ! **3) Quá khứ Hoàn thành (`had + V3/ed`)** chính là **Quá khứ của Quá khứ (Commit cha `HEAD~1` trước một sự kiện quá khứ khác)**: `When the alert fired (QKĐ), the SSL certificate **had already expired** (QKHT - hết hạn trước đó rồi)`!"
    },
    objectives: [
      "Phân biệt tận gốc bản chất giữa Quá khứ Đơn (gắn mốc quá khứ đã đóng) và Hiện tại Hoàn thành (nhấn mạnh kết quả ở hiện tại hoặc kéo dài từ quá khứ đến hiện tại, KHÔNG đi kèm mốc quá khứ cụ thể).",
      "Nhận diện tức thì bộ từ khóa 'Bảo chứng 100% Hiện tại Hoàn thành' trong TOEIC Part 5: `since`, `for + khoảng thời gian`, `over/during/in the past/last + N`, `recently`, `lately`, `so far`, `up to now`, `already`, `yet`.",
      "Sử dụng chính xác Quá khứ Hoàn thành (`had + V3/ed`) với công thức vàng `By the time + S + V2/ed, S + had + V3/ed` khi phân tích timeline sự cố Production."
    ],
    formulaCards: [
      {
        label: "Hiện Tại Hoàn Thành (Present Perfect)",
        formula: "S + have / has + (already / just / recently / never) + V3/ed",
        note: "3 ý nghĩa cốt lõi: (1) Vừa mới xong & kết quả còn ở hiện tại (`have merged the PR`); (2) Kéo dài từ QK đến HT (`have used Java **for** 8 years / **since** 2018`); (3) Trải nghiệm tính đến nay (`so far`, `to date`)."
      },
      {
        label: "Luật Bất Khả Xâm Phạm: CẤM Ghép HTHT Với Mốc Quá Khứ Đóng!",
        formula: "yesterday / ... ago / last night / in 2022 / when I was...  ===>  100% QUÁ KHỨ ĐƠN (Cấm have/has!)",
        note: "Ngoại lệ DUY NHẤT cho phép mốc quá khứ đi cùng Hiện tại Hoàn thành là khi mốc đó đứng SAU chữ **`since`**! (`since yesterday`, `since 2022`, `since the server restarted`)."
      },
      {
        label: "Siêu Cụm Từ Khóa Của Đề ETS TOEIC",
        formula: "over / in / during + the past / the last + [số năm/tháng/thập kỷ]  ===>  have / has + V3/ed!",
        note: "Cực kỳ cẩn thận phân biệt: `last year` (năm ngoái - không có 'the') → Quá khứ Đơn (`grew`); NHƯNG `in **the** last year` / `over **the** past five years` (trong suốt 1 năm / 5 năm vừa qua tính đến nay) → Hiện tại Hoàn thành (`has grown`)!"
      },
      {
        label: "Quá Khứ Hoàn Thành (Past Perfect — Xảy Ra Trước 1 Mốc Quá Khứ)",
        formula: "By the time / Before + S + V2/ed (QKĐ), S + HAD + V3/ed (QKHT)",
        note: "Cứ thấy 2 hành động cùng trong quá khứ: việc nào xong TRƯỚC chia `had + V3/ed`, việc xảy ra SAU chia `V2/ed`!"
      }
    ],
    sections: [
      {
        heading: "1. Giải Mã Đôi Kỳ Phùng Địch Thủ: `We deployed` vs `We have deployed`",
        paragraphs: [
          "Trong công việc thực tế của Senior Java, khi nào bạn viết trên Slack/PR là `I fixed the bug` và khi nào viết `I have fixed the bug`? Hãy hỏi đúng 1 câu: **Bạn đang muốn kể lại câu chuyện xảy ra LÚC NÀO trong quá khứ, hay đang thông báo KẾT QUẢ HIỆN TẠI sẵn sàng để đồng nghiệp review/test?**",
          "Nếu bạn đính kèm thời điểm (`this morning at 9 AM`, `yesterday`, `in Sprint 11`), bạn BẮT BUỘC dùng Quá khứ Đơn (`I fixed the bug yesterday`). Còn nếu bạn vừa đẩy commit xong và nhắn QA 'Tôi fix xong rồi đấy (giờ bạn vào test đi!)' mà không nêu giờ giấc quá khứ, người bản xứ luôn ưu tiên Hiện tại Hoàn thành (`I've fixed the bug — please verify on staging`)."
        ],
        bullets: [
          "So sánh kinh điển 1 (Sống hay Đã khép lại): `Oracle **maintained** Java 8 for many years` (ngụ ý giai đoạn đó đã qua) VS `Our team **has maintained** this core service for five years` (5 năm trước bắt đầu làm và **bây giờ vẫn đang làm**!).",
          "So sánh kinh điển 2 (`since` vs `for`): `**since** + Mốc điểm khởi đầu` (`since Monday`, `since Q1`, `since we migrated to AWS` — lưu ý mệnh đề ngay sau `since` chia Quá khứ Đơn, còn mệnh đề chính chia Hiện tại Hoàn thành!) VS `**for** + Khoảng độ dài thời gian` (`for three sprints`, `for over a decade`).",
          "Vị trí `already` vs `yet`: `already` (đã ... rồi) thường đứng giữa `have/has` và `V3/ed` hoặc cuối câu khẳng định; còn `yet` (chưa / đã ... chưa) luôn đứng **CUỐI CÂU** phủ định và nghi vấn (`The CI build hasn't finished **yet**`).",
          "Hiện tại Hoàn thành Tiếp diễn (`have/has + been + V-ing`): Dùng khi muốn nhấn mạnh tính **liên tục không nghỉ** của hành động kéo dài tới hiện tại (`I **have been debugging** this memory leak since 8 AM` — ngồi cày liên tục từ 8h sáng tới giờ mắt vẫn dán vào màn hình!)."
        ]
      },
      {
        heading: "2. Bẫy 'Cặp Song Sinh Khác Cha' Trong TOEIC: `last year` vs `over the past/last year`",
        paragraphs: [
          "Đây chính là câu hỏi lấy đi nước mắt của hàng vạn thí sinh ở ngưỡng 500–600 điểm! Nhiều bạn học vẹt hễ thấy chữ `last` hay `past` là khoanh ngay Quá khứ Đơn — và thế là sập bẫy ngọt xớt của ETS.",
          "Hãy nhìn thật kỹ sự xuất hiện của mạo từ **`the`** và các giới từ `in / over / during`: Chúng biến một điểm quá khứ thành một **đoạn thẳng nối liền từ quá khứ chạm tới thời điểm hiện tại**!"
        ],
        bullets: [
          "Quá khứ Đơn (`V2/ed`): `last month`, `last quarter`, `last decade`, `in the past` (= ngày xưa, nay hết rồi).",
          "Hiện tại Hoàn thành (`have/has + V3/ed`): `in **the last** month` (trong vòng 30 ngày vừa qua tính đến hôm nay), `over **the past** decade` (xuyên suốt thập kỷ vừa qua tính đến nay), `during **the last** three quarters` (trong 3 quý vừa qua).",
          "Bộ tứ trạng từ 'ruột' của Hiện tại Hoàn thành trong TOEIC: `recently` / `lately` (dạo gần đây), `so far` / `to date` / `up to now` / `until now` (tính cho đến thời điểm hiện tại)."
        ]
      },
      {
        heading: "3. Quá Khứ Hoàn Thành (`had + V3/ed`) — Cỗ Máy Truy Vết Root Cause Analysis (RCA)",
        paragraphs: [
          "Khi viết báo cáo sự cố (Incident Postmortem) hoặc đọc hiểu TOEIC Part 6–7, chúng ta không kể các sự việc theo thứ tự xuôi 1-2-3 nhàm chán, mà thường bắt đầu từ lúc phát hiện sự cố (mốc Quá khứ A), rồi lật ngược dòng thời gian về nguyên nhân đã âm thầm xảy ra trước đó (mốc Quá khứ A-1).",
          "Quy tắc sắt đá: Quá khứ Hoàn thành KHÔNG BAO GIỜ đứng lẻ loi một mình không có ngữ cảnh; nó luôn cần một mốc Quá khứ Đơn khác (trong cùng câu hoặc câu liền trước) làm điểm tựa so sánh 'xảy ra trước'!"
        ],
        bullets: [
          "Công thức ăn điểm tuyệt đối Part 5: `**By the time** + S + **V2/ed** (QKĐ), S + **had + V3/ed** (QKHT)` — Tính đến thời điểm việc B xảy ra trong quá khứ, thì việc A đã hoàn tất trước đó rồi!",
          "Ví dụ thực chiến Incident: `By the time PagerDuty **alerted** the on-call engineer, the rogue script **had deleted** 40% of the cache keys` (`alerted` ở quá khứ, còn `had deleted` xảy ra TRƯỚC cả lúc báo động kêu!).",
          "Cặp liên từ `After` và `Before`: `After the QA lead **had verified** (hoặc verified) the patch, we **released** it to production` | `The connection **had timed out** before the retry policy **kicked** in`."
        ]
      }
    ],
    examples: [
      {
        tag: "Daily Standup",
        en: "I **have pushed** the hotfix to the `release/2.4` branch, so QA can start testing now.",
        vi: "Tôi vừa đẩy bản vá nóng lên nhánh `release/2.4` rồi, nên đội QA có thể bắt đầu kiểm thử ngay bây giờ.",
        note: "Không nêu giờ quá khứ mà nhấn mạnh kết quả hiện tại sẵn sàng cho QA (`now`) → Hiện tại Hoàn thành `have pushed`."
      },
      {
        tag: "Daily Standup",
        en: "I **pushed** the hotfix to the `release/2.4` branch **at 11:30 PM last night**.",
        vi: "Tôi đã đẩy bản vá nóng lên nhánh `release/2.4` vào lúc 11 giờ 30 đêm qua.",
        note: "Đặt cạnh câu trên để thấy rõ 100%: vừa gắn mốc quá khứ đóng `at 11:30 PM last night` là BẮT BUỘC chuyển về Quá khứ Đơn `pushed`!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Cloud infrastructure costs **have dropped** by thirty percent **since** we **migrated** to ARM-based instances.",
        vi: "Chi phí hạ tầng đám mây đã giảm 30% kể từ khi chúng tôi chuyển đổi sang các máy chủ dùng chip ARM.",
        note: "Công thức kim cương của TOEIC: `S + have/has + V3/ed + SINCE + S + V2/ed (Quá khứ đơn)`!"
      },
      {
        tag: "TOEIC Part 5",
        en: "**Over the past three years**, our engineering department **has expanded** from twelve developers to ninety.",
        vi: "Trong suốt ba năm vừa qua, bộ phận kỹ thuật của chúng tôi đã mở rộng từ mười hai lập trình viên lên chín mươi người.",
        note: "Thấy `Over the past + [số năm]` ở đầu câu → phản xạ 2 giây chọn ngay Hiện tại Hoàn thành `has expanded`."
      },
      {
        tag: "Senior Java",
        en: "**By the time** the circuit breaker **opened**, the downstream service **had already thrown** five hundred timeout exceptions.",
        vi: "Tính đến thời điểm cầu dao ngắt mạch bật mở, dịch vụ phía sau đã kịp ném ra năm trăm ngoại lệ quá hạn chờ rồi.",
        note: "`By the time + V2/ed (opened)` → mệnh đề chính bắt buộc chia Quá khứ Hoàn thành `had already thrown`."
      },
      {
        tag: "Code Review",
        en: "**Have** you **updated** the OpenAPI Swagger documentation for this new endpoint **yet**?",
        vi: "Bạn đã cập nhật tài liệu OpenAPI Swagger cho endpoint mới này chưa?",
        note: "Câu hỏi kiểm tra tiến độ công việc với `yet` ở cuối câu → luôn dùng Hiện tại Hoàn thành."
      },
      {
        tag: "Senior Java",
        en: "We **have been running** Apache Kafka in production **for** over six years without a single data-loss incident.",
        vi: "Chúng tôi đã và đang vận hành Apache Kafka trên môi trường thật suốt hơn sáu năm qua mà không gặp một sự cố mất dữ liệu nào.",
        note: "Hiện tại Hoàn thành Tiếp diễn (`have been running`) + `for over six years` nhấn mạnh sự vận hành bền bỉ liên tục và nay vẫn đang chạy."
      },
      {
        tag: "TOEIC Part 7",
        en: "**To date**, more than four thousand enterprise clients **have adopted** our zero-trust authentication SDK.",
        vi: "Tính đến nay, hơn bốn ngàn khách hàng doanh nghiệp đã áp dụng bộ SDK xác thực zero-trust của chúng tôi.",
        note: "`To date` (= `So far` / `Up to now` — tính đến ngày hôm nay) là dấu hiệu đặc trưng của Hiện tại Hoàn thành trong các bản tin/báo cáo Part 7."
      },
      {
        tag: "Client Email",
        en: "Our security team **has recently completed** the annual SOC 2 Type II compliance audit.",
        vi: "Đội ngũ bảo mật của chúng tôi gần đây đã hoàn tất cuộc kiểm toán tuân thủ SOC 2 Type II thường niên.",
        note: "Trạng từ `recently` kẹp giữa `has` và `completed` thông báo thành tựu mới đạt được có giá trị ở hiện tại."
      },
      {
        tag: "Senior Java",
        en: "The deployment pipeline **failed** because a developer **had forgotten** to commit the Flyway migration script.",
        vi: "Luồng triển khai đã thất bại bởi vì một lập trình viên trước đó đã quên commit file kịch bản di trú Flyway.",
        note: "Truy tìm nguyên nhân gốc: hành động 'quên commit' xảy ra TRƯỚC lúc 'pipeline bị lỗi' (`failed`) nên chia Quá khứ Hoàn thành `had forgotten`."
      },
      {
        tag: "TOEIC Part 5",
        en: "Although server traffic **surged** **last month**, latency **has remained** below 50ms **so far** this quarter.",
        vi: "Mặc dù lưu lượng máy chủ tăng vọt vào tháng trước, độ trễ vẫn duy trì dưới 50ms tính đến thời điểm này của quý.",
        note: "Một câu phân định rạch ròi 2 vế: `last month` (đã khép lại → `surged`) vs `so far this quarter` (quý này chưa kết thúc → `has remained`)."
      },
      {
        tag: "Code Review",
        en: "This utility class **has existed** since version 1.0, and nobody **has touched** it in four years.",
        vi: "Class tiện ích này đã tồn tại từ phiên bản 1.0, và chưa ai đụng vào nó trong suốt bốn năm qua.",
        note: "Cả hai mệnh đề đều kéo dài trạng thái từ quá khứ tới tận lúc đang review code → Hiện tại Hoàn thành."
      },
      {
        tag: "Daily Standup",
        en: "I **haven't reproduced** the race condition locally **yet**, so I am adding more trace logs.",
        vi: "Tôi vẫn chưa tái hiện được lỗi tranh chấp luồng trên máy cá nhân, nên tôi đang thêm nhiều log truy vết hơn.",
        note: "Phủ định `haven't + V3` + `yet` báo cáo việc tính tới sáng nay vẫn chưa làm xong."
      },
      {
        tag: "TOEIC Part 7",
        en: "Before Mr. Patel **was promoted** to VP of Engineering, he **had led** the core platform division for seven years.",
        vi: "Trước khi ông Patel được thăng chức lên Phó Chủ tịch Kỹ thuật, ông đã dẫn dắt khối nền tảng cốt lõi trong bảy năm.",
        note: "7 năm dẫn dắt diễn ra TRƯỚC mốc được thăng chức trong quá khứ (`was promoted`) → dùng Quá khứ Hoàn thành `had led`."
      },
      {
        tag: "Client Email",
        en: "This is the third time this week that the third-party webhook **has returned** a 502 Bad Gateway error.",
        vi: "Đây là lần thứ ba trong tuần này webhook của bên thứ ba trả về lỗi 502 Bad Gateway.",
        note: "Cấu trúc cố định điểm cao: `This is the first / second / third time + S + have/has + V3/ed`!"
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "I have deployed the new microservice to production yesterday.",
          fix: "I **deployed** the new microservice to production yesterday.",
          why: "Lỗi kinh điển số 1! `yesterday` là mốc quá khứ đã đóng kín, TUYỆT ĐỐI XUNG ĐỘT với Hiện tại Hoàn thành `have deployed`. Có mốc quá khứ rõ ràng → xóa `have`, dùng Quá khứ Đơn **`deployed`**!"
        },
        {
          bug: "I work as a Java Backend Developer for five years.",
          fix: "I **have worked** (hoặc **have been working**) as a Java Backend Developer for five years.",
          why: "Dùng Hiện tại Đơn `I work` đi với `for five years` là sai ngữ pháp tiếng Anh! Để diễn tả công việc bắt đầu 5 năm trước và nay vẫn đang làm, bắt buộc dùng Hiện tại Hoàn thành."
        },
        {
          bug: "Since we have upgraded to Java 21, throughput improved by 40%.",
          fix: "Since we **upgraded** to Java 21, throughput **has improved** by 40%.",
          why: "Bị ngược vị trí hai thì! Mệnh đề đi ngay sau `Since` chỉ mốc khởi điểm trong quá khứ nên phải chia **Quá khứ Đơn (`upgraded`)**, còn mệnh đề chính chỉ kết quả kéo tới nay mới chia **Hiện tại Hoàn thành (`has improved`)**!"
        },
        {
          bug: "Over the past decade, cloud computing changed software delivery.",
          fix: "Over the past decade, cloud computing **has changed** software delivery.",
          why: "Cụm `Over the past decade` (trong thập kỷ vừa qua tính đến nay) gắn chặt với hiện tại nên trong đề thi TOEIC bắt buộc chia Hiện tại Hoàn thành **`has changed`**."
        },
        {
          bug: "When I checked the server logs, the pod already crashed.",
          fix: "When I checked the server logs, the pod **had already crashed**.",
          why: "Lúc mình vào kiểm tra log (`checked` - quá khứ) thì pod đã sập TRƯỚC ĐÓ rồi → hành động sập xảy ra trước một mốc quá khứ nên phải lùi thêm 1 bậc về Quá khứ Hoàn thành **`had already crashed`**."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây chốt hạ câu `since`: Trong Part 5, thấy chữ **`since`** nối 2 mệnh đề → Nhớ ngay công thức bất bại **`HTHT (have/has + V3) + SINCE + QKĐ (V2/ed)`**! Đề hỏi vế chính khoanh `have/has + V3`; đề hỏi vế ngay sau `since` khoanh `V2/ed`!",
      "Mẹo phân biệt chớp nhoáng `last` không `the` vs `the last/past`: Thấy `last night / last year / two months ago / in 2021` → khoanh **`V2/ed`**. Thấy `in/over/during + **the** past/last + [số năm/tháng]` hoặc `so far / to date / recently / lately` → khoanh ngay **`have/has + V3/ed`**!",
      "Mẹo nhận diện Quá khứ Hoàn thành (`had + V3/ed`): Đừng bao giờ chọn `had + V3/ed` nếu cả câu đang ở ngữ cảnh Hiện tại hoặc Tương lai! Chỉ chọn `had + V3/ed` khi trong câu CÓ SẴN một mốc Quá khứ Đơn (`By the time + S + V2/ed` hoặc `Before + S + V2/ed`)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh với thì Hiện tại Hoàn thành và mốc 'since':",
        chunks: [
          "over ten million",
          "since January.",
          "Our platform",
          "transactions",
          "has processed"
        ],
        answer: "Our platform has processed over ten million transactions since January.",
        vi: "Nền tảng của chúng tôi đã xử lý hơn mười triệu giao dịch kể từ tháng Một."
      },
      fillBlank: {
        sentence: "By the time the database administrator noticed the disk alert, the WAL archive _____ up the entire volume. (Từ gốc: fill — chia Quá khứ Hoàn thành 2 từ)",
        answer: "had filled",
        accepted: ["had filled"],
        hint: "Hành động làm đầy ổ đĩa xảy ra TRƯỚC mốc quá khứ 'noticed' -> dùng had + V3/ed.",
        explain: "Cấu trúc kinh điển `By the time + S + V2/ed (noticed), S + had + V3/ed`: tính đến lúc DBA phát hiện cảnh báo trong quá khứ thì log WAL đã làm đầy sạch phân vùng từ trước đó rồi → điền **`had filled`**."
      }
    },
    quiz: [
      {
        q: "Over the past five quarters, our automated fraud-detection engine _____ false-positive alerts by nearly sixty percent.",
        options: [
          "A. reduces",
          "B. reduced",
          "C. has reduced",
          "D. had reduced"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. has reduced**. Dấu hiệu kim cương nằm ngay đầu câu: **`Over the past five quarters`** (Trong suốt 5 quý vừa qua tính đến thời điểm hiện tại). Đây là khoảng thời gian nối từ quá khứ đến hiện tại → bắt buộc dùng **Hiện tại Hoàn thành** (`has reduced`, số ít theo chủ ngữ `engine`). Loại A (hiện tại đơn), B (`reduced` chỉ dùng nếu là `last quarter` không có `over the past`), D (quá khứ hoàn thành không có mốc quá khứ làm điểm tựa)."
      },
      {
        q: "Since the platform team _____ to virtual threads in October, average container memory consumption has declined noticeably.",
        options: [
          "A. switches",
          "B. switched",
          "C. has switched",
          "D. will switch"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. switched**. Áp dụng công thức vàng với `Since`: Mệnh đề chính (`has declined`) chia Hiện tại Hoàn thành, còn **mệnh đề phụ đứng ngay sau `Since`** chỉ thời điểm bắt đầu trong quá khứ (`in October`) nên BẮT BUỘC chia **Quá khứ Đơn** (`switched`). Rất nhiều thí sinh thấy `Since` liền chọn nhầm C (`has switched`) mà không để ý chỗ trống nằm ngay trong mệnh đề `Since`!"
      },
      {
        q: "By the time the backup generator kicked in at the data center, two non-redundant cache nodes _____ offline.",
        options: [
          "A. go",
          "B. have gone",
          "C. will go",
          "D. had gone"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. had gone**. Đầu câu có cấu trúc `By the time + S + V2/ed` (`kicked in` — quá khứ đơn). Hành động hai cache node bị sập offline xảy ra TRƯỚC thời điểm máy phát điện dự phòng khởi động trong quá khứ → bắt buộc dùng **Quá khứ Hoàn thành** (`had gone`)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G2_2: CÁC CÁCH DIỄN ĐẠT TƯƠNG LAI & TƯƠNG LAI HOÀN THÀNH (BY + TƯƠNG LAI)
   * ========================================================================== */
  G2_2: {
    duration: "35 phút",
    toeicTarget: "TOEIC 450 → 600+ (TOEIC Part 5 & Part 6: Mệnh đề thời gian tương lai & Tương lai Hoàn thành)",
    javaContext: "Lập Roadmap kỹ thuật hàng quý (`By Q4, we will have deprecated...`), cam kết tức thời trên War-room (`I'll check the logs`) vs trình bày kế hoạch Sprint (`We're going to split this monolith`).",
    teacherIntro: "Chào anh em! Nói về tương lai tưởng chừng là chuyện dễ nhất quả đất vì ai chẳng biết chữ **`will`**! Thế nhưng trong thực tế làm việc với khách hàng Âu Mỹ lẫn trong đề thi TOEIC, nếu câu nào anh em cũng phang `will` thì sẽ đụng ngay 2 bức tường lớn: Một là viết `When the build will finish, I will deploy it` — câu này dính lỗi ngữ pháp kinh điển nhất của đề thi TOEIC (CẤM dùng `will` trong mệnh đề thời gian `when / as soon as / before`!); Hai là không phân biệt được lời hứa bộc phát lúc đang họp (`I'll look into it`) với kế hoạch kiến trúc đã lên lịch bài bản (`We're going to migrate`), hay cấu trúc ăn điểm tuyệt đối `will have + V3/ed` khi báo cáo Roadmap cho CTO. Cùng thầy làm chủ toàn bộ hệ thống Tương lai trong 35 phút nhé!",
    javaAnalogy: {
      title: "Hệ Thống Thì Tương Lai = Ad-hoc Callback vs Scheduled Sprint Backlog vs SLA Milestone `CompletableFuture`",
      body: "Hãy phân biệt 4 sắc thái tương lai như cách điều phối tác vụ trong hệ thống Java: **1) `will + V`** là **On-demand Event Handler** — quyết định nảy ra NGAY LÚC NÓI hoặc lời cam kết/dự đoán (`Oh, disk is 90%? I'll clean `/tmp` right now!`). **2) `be going to + V`** là **Committed Sprint Backlog** — kế hoạch đã chuẩn bị, đã chốt thiết kế từ trước khi mở miệng nói (`We are going to upgrade to Spring Boot 3.4 next sprint`). **3) Mệnh đề `when / as soon as + Hiện tại Đơn`** chính là callback `.thenRun()` đợi điều kiện kích hoạt — bản thân điều kiện kiểm tra ở hiện tại (`once tests **pass**`), cấm nhét `will` vào trong `if/when`! **4) Tương lai Hoàn thành (`will have + V3/ed`)** là assertion nghiệm thu tại một mốc tương lai: `By Q4, migrationFuture.isDone() == true` (`By Q4, we **will have retired** the legacy DB`)!"
    },
    objectives: [
      "Phân biệt tự nhiên sắc thái giao tiếp giữa `will + V` (quyết định tức thời, lời hứa, dự đoán chung) và `be going to + V` (kế hoạch đã chuẩn bị trước, dự đoán có bằng chứng rõ rệt trước mắt).",
      "Khắc cốt ghi tâm 'Luật Cấm `will` Trong Mệnh Đề Trạng Ngữ Thời Gian' (`when, while, before, after, as soon as, once, until` + **Hiện tại Đơn**, mệnh đề chính mới dùng **`will + V`**).",
      "Chinh phục trọn điểm câu Tương lai Hoàn thành (`will have + V3/ed`) qua dấu hiệu nhận biết 3 giây `By + [mốc tương lai] / By the time + S + V(hiện tại)`."
    ],
    formulaCards: [
      {
        label: "will + V vs be going to + V",
        formula: "will + V (Quyết định ngay lúc nói / Lời hứa)  |  am/is/are going to + V (Kế hoạch đã chốt từ trước)",
        note: "Dự đoán có bằng chứng nhãn tiền (nhìn RAM đã 99%): `The pod **is going to** crash!` vs Dự đoán quan điểm (`I think / probably / expect`): `AI agents **will** transform testing`."
      },
      {
        label: "LUẬT VÀNG TOEIC: Mệnh Đề Thời Gian Tương Lai (CẤM WILL!)",
        formula: "When / As soon as / Once / Before / After / Until + S + V_hiện_tại_đơn, S + WILL + V (hoặc V_mệnh_lệnh)",
        note: "Đề TOEIC cực kỳ hay khoét chỗ trống ngay sau `as soon as / once / before / when` và gài bẫy `will + V`! Hãy tỉnh táo chọn **Hiện tại Đơn (`V / Vs`)** (ví dụ: `as soon as the server **restarts**`)!"
      },
      {
        label: "Tương Lai Hoàn Thành (Future Perfect — Xong Trước Mốc Tương Lai)",
        formula: "By + [mốc tương lai]  /  By the time + S + V(hiện tại),  S + WILL HAVE + V3/ed",
        note: "Đối chiếu cực dễ nhớ với bài G2.1: `By the time + V2/ed (quá khứ)` → `had + V3/ed`; còn `By the time + V/Vs (hiện tại chỉ tương lai)` → **`will have + V3/ed`**!"
      },
      {
        label: "Tương Lai Tiếp Diễn & Cấu Trúc Sắp Xảy Ra `be about to`",
        formula: "will be + V-ing (Đang diễn ra tại 1 giờ xác định ở tương lai)  |  be about to + V (Sắp sửa xảy ra ngay)",
        note: "Ví dụ thông báo bảo trì lịch sự: `At 2:00 AM tomorrow, our SRE team **will be performing** routine maintenance`. `The deployment **is about to** start` (chuẩn bị chạy ngay bây giờ)."
      }
    ],
    sections: [
      {
        heading: "1. Giao Tiếp Chuẩn Bản Xứ: Khi Nào Dùng `will`, Khi Nào Dùng `be going to`, Khi Nào Dùng Hiện Tại?",
        paragraphs: [
          "Trong phòng họp với đồng nghiệp quốc tế, dùng đúng dạng tương lai giúp người nghe hiểu ngay mức độ chắc chắn của kế hoạch. Nếu sếp hỏi 'Ai nhận điều tra ticket lỗi thanh toán vừa nổ này?' — vì bạn vừa mới nghe và quyết định nhận ngay tại chỗ, hãy nói: `I **will** take a look at it!` (nếu nói `I am going to...` nghe như bạn biết trước nó nổ và lên kế hoạch từ hôm qua rồi!).",
          "Ngược lại, khi trình bày kế hoạch kiến trúc đã được cả team bàn bạc trong Sprint Planning, hãy dùng `We **are going to** split the billing module into a separate service` hoặc `We **plan to / intend to**...`."
        ],
        bullets: [
          "Dùng `will + V` cho: (1) Quyết định nảy ra tức thì lúc nói; (2) Lời hứa, cam kết hỗ trợ (`We **will** keep you posted`); (3) Đi kèm các từ chỉ sự phỏng đoán/kỳ vọng trong TOEIC như `probably, likely, certainly, expect, hope, assume`.",
          "Dùng `be going to + V` cho: (1) Dự định/kế hoạch đã quyết định trước thời điểm nói; (2) Dự đoán dựa trên dấu hiệu/số liệu đang thấy rõ trước mắt (`Heap usage is at 98% — it **is going to** throw an OOM error!`).",
          "Ôn lại sự kết nối với Bài G1.6: Dùng **Hiện tại Tiếp diễn (`am/is/are + V-ing`)** cho lịch hẹn cá nhân/team đã chốt giờ & người tham gia (`I **am interviewing** a Senior Java candidate at 4 PM`); dùng **Hiện tại Đơn (`V/Vs`)** cho lịch trình cố định chính thức (`The conference **opens** next Monday at 9 AM`)."
        ]
      },
      {
        heading: "2. Cái Bẫy Số 1 Của Mọi Đề Thi TOEIC: Mệnh Đề Trạng Ngữ Thời Gian Tương Lai",
        paragraphs: [
          "Trong tiếng Việt ta nói: 'Khi nào bản build **sẽ** chạy xong, hệ thống **sẽ** tự động gửi thông báo'. Nhưng trong ngữ pháp tiếng Anh, mệnh đề phụ bắt đầu bằng các liên từ thời gian (`when, while, before, after, as soon as, once, until, by the time`) đóng vai trò xác lập mốc giả định — nó **TỰ MANG NGHĨA TƯƠNG LAI** rồi nên **TUYỆT ĐỐI CẤM dùng `will` hay `be going to`** bên trong nó!",
          "Đây là câu hỏi kinh điển xuất hiện lặp đi lặp lại trong đề thi ETS TOEIC suốt 20 năm qua. Đặc biệt nhớ kỹ: Nếu chủ ngữ sau `once / as soon as / when` là danh từ số ít (`the deployment`, `approval`, `each node`), động từ Hiện tại Đơn PHẢI CÓ **`-s/-es`**!"
        ],
        bullets: [
          "Bộ 7 Liên từ thời gian kích hoạt luật cấm `will`: `when` (khi), `as soon as` (ngay khi), `once` (một khi), `before` (trước khi), `after` (sau khi), `until` (cho đến khi), `by the time` (tính đến lúc).",
          "Hai mô hình mệnh đề chính hợp lệ đi kèm: (1) `Once the QA lead **approves** the build, we **will deploy** it to production`; (2) Đi với **Câu mệnh lệnh** mở đầu bằng `Please + V` (`**Please notify** the client as soon as the database **comes** back online`!).",
          "Cảnh giác phân biệt: Khi `when` dẫn đầu một **Mệnh đề danh ngữ làm tân ngữ** (mang nghĩa 'khi nào', đứng sau động từ `know, ask, wonder, confirm`), nó KHÔNG phải mệnh đề trạng ngữ thời gian nên VẪN DÙNG `will` bình thường! Ví dụ: `Do you know **when the API will be** ready?` (Bạn có biết khi nào API sẽ sẵn sàng không?)."
        ]
      },
      {
        heading: "3. Tương Lai Hoàn Thành (`will have + V3/ed`) — Ngôn Ngữ Của Lộ Trình Senior & Điểm Cao TOEIC",
        paragraphs: [
          "Khi bạn muốn khẳng định: *'Tính đến trước một mốc thời gian trong tương lai, chúng tôi sẽ ĐÃ HOÀN TẤT xong xuôi một cột mốc hoặc đạt tới một con số tích lũy nào đó'*, đó chính là sân khấu độc quyền của **Tương lai Hoàn thành (`will have + V3/ed`)**!",
          "Trong phòng thi TOEIC Part 5, câu hỏi Tương lai Hoàn thành là câu 'nhìn phát ăn ngay' chỉ trong 3 giây nếu bạn tia thấy chữ **`By`** đứng đầu câu đi cùng một mốc thời gian tương lai."
        ],
        bullets: [
          "Dấu hiệu 1 — `By + Mốc thời gian tương lai`: `**By** next Friday`, `**By** the end of this fiscal year`, `**By** Q3 2027`, `**By** tomorrow afternoon` → Mệnh đề chính chia **`will have + V3/ed`**!",
          "Dấu hiệu 2 — `By the time + S + V_hiện_tại_đơn`: `**By the time** the new CTO **joins** next month, our team **will have completed** the Kubernetes migration`.",
          "So sánh tổng kết 3 cấp độ `By` để không bao giờ nhầm lẫn: (1) `By + mốc quá khứ / By the time + V2` → **`had + V3/ed`** (Quá khứ hoàn thành); (2) `By + mốc tương lai / By the time + V_hiện_tại` → **`will have + V3/ed`** (Tương lai hoàn thành); (3) Hành động cần làm trước hạn chót đi với động từ khuyết thiếu → `must / should be completed **by** Friday`."
        ]
      }
    ],
    examples: [
      {
        tag: "Daily Standup",
        en: "Oh, I didn't know the staging SSL certificate expired — I **will renew** it right after this call.",
        vi: "Ồ, tôi không biết chứng chỉ SSL trên staging đã hết hạn — tôi sẽ gia hạn nó ngay sau cuộc gọi này.",
        note: "Thông tin mới tiếp nhận và quyết định hành động ngay tại thời điểm nói → bắt buộc dùng `will renew`."
      },
      {
        tag: "Senior Java",
        en: "Next sprint, we **are going to replace** RestTemplate with Spring's modern `RestClient` across all services.",
        vi: "Sprint tới, chúng ta sẽ thay thế RestTemplate bằng `RestClient` hiện đại của Spring trên toàn bộ các dịch vụ.",
        note: "Kế hoạch kỹ thuật đã được bàn bạc và đưa vào lịch trình Sprint tới → dùng `are going to replace`."
      },
      {
        tag: "TOEIC Part 5",
        en: "**As soon as** the security scan **finishes**, Jenkins **will push** the Docker image to Harbor.",
        vi: "Ngay khi quá trình quét bảo mật kết thúc, Jenkins sẽ đẩy Docker image lên kho Harbor.",
        note: "Mệnh đề thời gian sau `As soon as` chia Hiện tại Đơn ngôi số ít `finishes` (CẤM viết `will finish`!), mệnh đề chính dùng `will push`."
      },
      {
        tag: "TOEIC Part 5",
        en: "**By** the end of this quarter, our platform team **will have migrated** all forty microservices to Java 21.",
        vi: "Tính đến cuối quý này, đội nền tảng của chúng tôi sẽ đã di trú hoàn tất toàn bộ bốn mươi microservice lên Java 21.",
        note: "Dấu hiệu `By the end of this quarter` (tính tới cuối quý này - tương lai) → chọn ngay Tương lai Hoàn thành `will have migrated`!"
      },
      {
        tag: "Client Email",
        en: "Please inform our integration partners **once** the sandbox environment **becomes** available.",
        vi: "Vui lòng thông báo cho các đối tác tích hợp của chúng ta ngay một khi môi trường sandbox khả dụng.",
        note: "Mệnh đề chính là câu mệnh lệnh (`Please inform...`), mệnh đề phụ sau `once` chỉ tương lai chia Hiện tại Đơn số ít `becomes`."
      },
      {
        tag: "Senior Java",
        en: "**By the time** peak Black Friday traffic **hits**, our autoscaler **will have provisioned** twenty extra nodes.",
        vi: "Tính đến lúc lưu lượng đỉnh điểm ngày Black Friday đổ bộ, bộ tự động co giãn của chúng tôi sẽ đã cấp phát sẵn thêm hai mươi node rồi.",
        note: "Chuẩn công thức `By the time + S + V_hiện_tại (hits), S + will have + V3/ed (will have provisioned)`."
      },
      {
        tag: "Code Review",
        en: "Look at this unbounded `while(true)` loop without backoff — it **is going to saturate** all CPU cores!",
        vi: "Nhìn vòng lặp `while(true)` không giới hạn và thiếu thời gian nghỉ này kìa — nó sẽ làm bão hòa toàn bộ nhân CPU cho xem!",
        note: "Dự đoán dựa trên bằng chứng hiển nhiên ngay trước mắt (`Look at this...`) → dùng `is going to`."
      },
      {
        tag: "Client Email",
        en: "At 1:00 AM UTC tomorrow, our database engineers **will be upgrading** the primary cluster to PostgreSQL 17.",
        vi: "Vào lúc 1 giờ sáng mai theo giờ UTC, các kỹ sư cơ sở dữ liệu của chúng tôi sẽ đang thực hiện nâng cấp cụm chính lên PostgreSQL 17.",
        note: "Tương lai Tiếp diễn (`will be upgrading`) diễn tả hành động đang trong quá trình thực hiện tại một giờ cụ thể ở tương lai."
      },
      {
        tag: "TOEIC Part 7",
        en: "In June, Dr. Lin **will have served** as Chief Information Security Officer for exactly ten years.",
        vi: "Vào tháng Sáu tới, Tiến sĩ Lin sẽ chạm mốc đảm nhiệm cương vị Giám đốc An ninh Thông tin tròn đúng mười năm.",
        note: "Tính đến mốc tháng Sáu tới là tròn 10 năm thâm niên → kinh điển của Tương lai Hoàn thành trong bài đọc nhân sự TOEIC."
      },
      {
        tag: "TOEIC Part 5",
        en: "The payment gateway **will not process** any refund requests **until** the merchant **verifies** the order ID.",
        vi: "Cổng thanh toán sẽ không xử lý bất kỳ yêu cầu hoàn tiền nào cho đến khi người bán xác minh mã đơn hàng.",
        note: "Sau liên từ thời gian `until` chỉ điều kiện ở tương lai → dùng Hiện tại Đơn `verifies` (cấm `will verify`)."
      },
      {
        tag: "Daily Standup",
        en: "Hold on a second — the release pipeline **is about to trigger** the smoke test stage.",
        vi: "Đợi một chút nhé — luồng phát hành sắp sửa kích hoạt bước kiểm thử khói (smoke test) ngay bây giờ đây.",
        note: "`be about to + V` diễn tả sự việc chuẩn bị xảy ra ngay trong tích tắc tới."
      },
      {
        tag: "Senior Java",
        en: "Industry analysts **expect** that WebAssembly **will play** a larger role in serverless edge computing.",
        vi: "Các nhà phân tích ngành kỳ vọng rằng WebAssembly sẽ đóng vai trò lớn hơn trong điện toán biên serverless.",
        note: "Đi sau các động từ dự đoán/kỳ vọng (`expect, predict, believe, hope`) cho tương lai → dùng `will + V`."
      },
      {
        tag: "Client Email",
        en: "Could you let us know **when** the client firewall team **will whitelist** our static egress IPs?",
        vi: "Bạn có thể cho chúng tôi biết khi nào đội tường lửa phía khách hàng sẽ đưa dải IP tĩnh của chúng tôi vào danh sách cho phép không?",
        note: "Trường hợp ngoại lệ cực hay: `when...` ở đây là Mệnh đề danh ngữ ('cho biết KHI NÀO...') làm tân ngữ của `know`, nên VẪN DÙNG `will whitelist`!"
      },
      {
        tag: "TOEIC Part 5",
        en: "**Before** the new compliance law **takes** effect in May, all user consent logs must be audited.",
        vi: "Trước khi đạo luật tuân thủ mới có hiệu lực vào tháng Năm, toàn bộ nhật ký đồng thuận của người dùng phải được kiểm toán.",
        note: "Dù có `in May` (tháng Năm tới), vì nằm trong mệnh đề thời gian bắt đầu bằng `Before` nên động từ chia Hiện tại Đơn `takes` (`take effect` = có hiệu lực)."
      },
      {
        tag: "TOEIC Part 7",
        en: "The annual JavaOne keynote **begins** promptly at 9:00 AM tomorrow in Hall B.",
        vi: "Bài phát biểu chính tại hội nghị thường niên JavaOne sẽ bắt đầu đúng 9 giờ sáng mai tại Hội trường B.",
        note: "Lịch trình sự kiện/hội nghị chính thức đã ấn định → dùng Hiện tại Đơn `begins`."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "When the CI pipeline will pass, I will merge your Pull Request.",
          fix: "When the CI pipeline **passes**, I will merge your Pull Request.",
          why: "Cấm kỵ số 1 trong tiếng Anh & TOEIC! Không bao giờ dùng `will` bên trong mệnh đề thời gian `When / As soon as / Once / Before / After / Until`. Phải đổi `will pass` thành Hiện tại Đơn số ít **`passes`**!"
        },
        {
          bug: "As soon as the deployment finish, please check Grafana.",
          fix: "As soon as the deployment **finishes**, please check Grafana.",
          why: "Nhớ được luật bỏ `will` nhưng lại quên mất chia ngôi thứ 3 số ít! Chủ ngữ `the deployment` là số ít nên ở Hiện tại Đơn động từ `finish` bắt buộc phải thêm `-es` thành **`finishes`**."
        },
        {
          bug: "By next year, our company migrated all servers to AWS.",
          fix: "By next year, our company **will have migrated** all servers to AWS.",
          why: "`next year` là mốc tương lai mà lại chia quá khứ `migrated` là xung đột thời gian! Có `By + mốc tương lai` chỉ sự hoàn tất trước thời điểm đó → phải dùng Tương lai Hoàn thành **`will have migrated`**."
        },
        {
          bug: "Wait, you dropped your access badge — I am going to pick it up for you!",
          fix: "Wait, you dropped your access badge — **I'll** pick it up for you!",
          why: "Phản ứng tự nguyện tức thời ngay tại khoảnh khắc thấy đồng nghiệp rơi thẻ phải dùng **`I'll (I will)`**. Dùng `am going to` nghe rất kỳ cục như thể bạn đã lên kế hoạch nhặt thẻ từ hôm trước!"
        },
        {
          bug: "By the time the client will review the demo, we will have fixed the UI.",
          fix: "By the time the client **reviews** the demo, we will have fixed the UI.",
          why: "`By the time` cũng là một liên từ dẫn mệnh đề trạng ngữ thời gian nên TUYỆT ĐỐI CẤM dùng `will review`! Phải chia Hiện tại Đơn là **`reviews`**."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây phá bẫy Mệnh đề Thời gian Part 5: Hễ chỗ trống nằm trong mệnh đề bắt đầu bằng **`When / Once / As soon as / Before / After / Until / By the time`** và vế kia của câu đang ở Tương lai (`will + V`) hoặc Câu mệnh lệnh (`Please + V`) → **GẠCH BỎ NGAY LẬP TỨC** mọi đáp án có `will` và quá khứ, khoanh thẳng **Hiện tại Đơn (`V` hoặc `Vs/es`)**!",
      "Mẹo 3 giây săn điểm Tương lai Hoàn thành: Thấy đầu câu có **`By + [next month / the end of next year / 2028 / tomorrow]`** hoặc **`By the time + S + V(hiện tại)`** → Tìm trong 4 đáp án cái nào có cấu trúc **`will have + V3/ed`** là khoanh luôn không cần đắn đo!",
      "Mẹo kiểm tra số ít/nhiều sau khi loại `will`: Trong câu bẫy mệnh đề thời gian, ETS luôn để sẵn cả `(A) expire` và `(B) expires` cạnh `(C) will expire`. Sau khi loại C, nhớ nhìn kỹ chủ ngữ là số ít hay số nhiều để không trượt chân ở bước cuối cùng!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh sử dụng thì Tương lai Hoàn thành:",
        chunks: [
          "will have migrated",
          "legacy services.",
          "By next quarter,",
          "all",
          "our team"
        ],
        answer: "By next quarter, our team will have migrated all legacy services.",
        vi: "Tính đến quý tới, đội của chúng tôi sẽ đã di trú xong toàn bộ các dịch vụ cũ."
      },
      fillBlank: {
        sentence: "The load balancer will automatically route traffic to the new pod once the health check _____. (Từ gốc: succeed — chú ý luật mệnh đề thời gian tương lai!)",
        answer: "succeeds",
        accepted: ["succeeds"],
        hint: "Sau liên từ thời gian 'once' cấm dùng 'will'; chia Hiện tại Đơn theo chủ ngữ số ít 'the health check'.",
        explain: "Mệnh đề chính dùng `will automatically route` (tương lai), nên mệnh đề trạng ngữ thời gian sau `once` bắt buộc chia **Hiện tại Đơn** (cấm `will succeed`). Vì chủ ngữ `the health check` là ngôi thứ 3 số ít nên phải thêm `-s` thành **`succeeds`**."
      }
    },
    quiz: [
      {
        q: "Once the legal department _____ the data-processing addendum, our engineering team will enable SSO integration for the client.",
        options: [
          "A. will approve",
          "B. approves",
          "C. approved",
          "D. had approved"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. approves**. Mệnh đề chính chia tương lai (`will enable`), còn chỗ trống nằm trong mệnh đề trạng ngữ thời gian bắt đầu bằng **`Once`** (Một khi...). Theo quy tắc vàng, cấm dùng `will` trong mệnh đề thời gian (loại A), loại các thì quá khứ C và D vì lệch trục thời gian. Chủ ngữ `the legal department` là số ít nên chia Hiện tại Đơn là **`approves`**."
      },
      {
        q: "By the end of this fiscal year, FinCore Corp. _____ three regional cloud data centers across Southeast Asia.",
        options: [
          "A. establishes",
          "B. established",
          "C. was establishing",
          "D. will have established"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. will have established**. Cụm trạng ngữ chỉ mốc giới hạn trong tương lai **`By the end of this fiscal year`** (Tính đến cuối năm tài chính này) là dấu hiệu kinh điển 100% của thì **Tương lai Hoàn thành** (`will have + V3/ed`), diễn tả thành tựu sẽ hoàn tất trước mốc đó. Loại B, C (quá khứ) và A (hiện tại đơn dùng cho thói quen lặp lại)."
      },
      {
        q: "Please do not restart the Kafka broker until all in-flight consumer batches _____ committing their offsets.",
        options: [
          "A. finish",
          "B. finishes",
          "C. will finish",
          "D. finished"
        ],
        answer: 0,
        explain: "Đáp án đúng là **A. finish**. Mệnh đề chính là câu mệnh lệnh phủ định (`Please do not restart...`) hướng về tương lai, theo sau là mệnh đề thời gian bắt đầu bằng **`until`** → bắt buộc chia Hiện tại Đơn (loại C `will finish` và D `finished`). Chủ ngữ của mệnh đề sau `until` là `all in-flight consumer batches` (danh từ số nhiều `batches`!) nên động từ Hiện tại Đơn giữ nguyên mẫu là **`finish`** (loại B `finishes`)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G2_3: CÂU BỊ ĐỘNG (PASSIVE VOICE) TOÀN TẬP — NGÔN NGỮ TECHNICAL DOCS & TOEIC
   * ========================================================================== */
  G2_3: {
    duration: "40 phút",
    toeicTarget: "TOEIC 450 → 650+ (TOEIC Part 1, Part 5 & Part 6 + Viết Release Notes / Architecture Spec)",
    javaContext: "Viết Javadoc, RFC, Security Policy khách quan không xưng 'I/we' (`Tokens are signed with RS256`, `Requests must be authenticated`, `Payloads are compressed before transmission`).",
    teacherIntro: "Chào anh em! Khi đọc tài liệu chính thức của Oracle Java, Spring Security hay các bản RFC giao thức mạng, anh em có nhận ra một đặc điểm cực kỳ nổi bật không? Người ta hiếm khi viết 'You encrypt the password and we store it in DB', mà viết **'Passwords must be encrypted before being stored in the database'**! Đó chính là sức mạnh của **Câu Bị Động (Passive Voice)**: đặt đối tượng dữ liệu/hệ thống lên làm trung tâm, tạo giọng văn chuyên nghiệp, khách quan chuẩn kỹ thuật. Trong đề thi TOEIC Part 5 và Part 6, gần như ĐỀ NÀO cũng có 3–4 câu bắt bạn chọn giữa Chủ động (`validate`) và Bị động (`are validated`). Thay vì ngồi dịch tiếng Việt lẩm nhẩm 'được/bị' rất dễ nhầm, hôm nay thầy sẽ trao cho anh em tuyệt chiêu **'Xét Tân Ngữ Phía Sau'** chốt đáp án chính xác trong 3 giây!",
    javaAnalogy: {
      title: "Chủ Động vs Bị Động = `Caller.invoke(Target)` vs Event-Driven `Target.onProcessed()`",
      body: "Trong câu **Chủ động (Active)**: Chủ ngữ là `Caller` chủ động phát lệnh và truyền `Target` làm tham số tân ngữ phía sau (`Gateway.validate(token)` → `The gateway **validates** the token` — ngay sau động từ CÓ TÂN NGỮ `the token`). Khi chuyển sang **Bị động (Passive)**: Ta bốc `Target` lên làm Chủ ngữ để theo dõi vòng đời dữ liệu của chính nó (`The token **is validated** [by the gateway]` — lúc này `the token` đã dọn nhà lên đầu câu rồi nên **phía sau động từ TRỐNG TRƠN không còn tân ngữ trực tiếp nữa**, mà thường gặp ngay Giới từ `by/in/to/for/before` hoặc dấu chấm!). Cấu trúc bất biến của mọi câu bị động trong tiếng Anh luôn phải đủ 2 mảnh ghép: **`BE` (chia theo Thì & Số) + `V3/ed` (Phân từ quá khứ)**!"
    },
    objectives: [
      "Nắm vững công thức tổng quát `BE + V3/ed` biến hóa qua 6 thì phổ biến nhất và Động từ khuyết thiếu (`must/should/can + be + V3/ed`).",
      "Áp dụng thuần thục Mẹo 3 giây 'Có Tân ngữ = Chủ động | Mất Tân ngữ (gặp giới từ/trạng từ/dấu câu) = Bị động' cho mọi Ngoại động từ đơn trong TOEIC Part 5.",
      "Thuộc lòng nhóm Cụm Bị Động Cố Định đi kèm giới từ KHÁC `by` cực hay ra thi TOEIC (`be equipped with`, `be dedicated/committed to`, `be involved in`, `be composed of`, `be known for`)."
    ],
    formulaCards: [
      {
        label: "Công Thức Bất Biến Của Mọi Câu Bị Động",
        formula: "Subject (nhận tác động) + [ BE chia theo Thì ] + (Adv) + V3 / V-ed",
        note: "Thiếu `BE` hoặc thiếu `V3/ed` đều không phải bị động! Ví dụ: HTĐ: `am/is/are + V3`; QKĐ: `was/were + V3`; HTTD: `is/are being + V3`; HTHT: `have/has been + V3`; Modal: `must/will/can + be + V3`."
      },
      {
        label: "Mẹo 3 Giây Vàng: Nhìn Ngay Phía Sau Chỗ Trống!",
        formula: "Sau V_ngoại CÓ Cụm Danh Từ (Tân ngữ) → CHỦ ĐỘNG  |  Sau V_ngoại gặp Giới từ / Adv / Hết câu → BỊ ĐỘNG!",
        note: "Ví dụ: `The script _____ [the database]` (có O → chủ động `updates`) VS `The database _____ [every night / by the script]` (không có O, gặp trạng ngữ/giới từ → bị động `is updated`)!"
      },
      {
        label: "2 Ngoại Lệ Cần Nhớ Khi Áp Dụng Mẹo Tân Ngữ",
        formula: "1) Nội động từ (occur, happen, rise, arrive, exist) → CẤM BỊ ĐỘNG!  |  2) Động từ 2 tân ngữ (give, send, offer, award, grant)",
        note: "Với động từ 2 tân ngữ (`grant sb access`), dù đã đưa `sb` lên làm chủ ngữ bị động thì phía sau VẪN CÒN 1 tân ngữ thứ hai: `Developers **were granted** temporary access`!"
      },
      {
        label: "Cụm Bị Động Đi Giới Từ Riêng (KHÔNG dùng `by`!)",
        formula: "be equipped WITH | be satisfied WITH | be interested IN | be involved IN | be committed/dedicated TO",
        note: "Học thuộc như Collocation cố định để ăn điểm các câu giới từ sau bị động trong TOEIC Part 5 & Part 6."
      }
    ],
    sections: [
      {
        heading: "1. Bảng Chia Bị Động 6 Thì Cốt Lõi & Modal Verbs Cho Tài Liệu Kỹ Thuật",
        paragraphs: [
          "Rất nhiều bạn nhớ mang máng bị động là thêm `-ed`, nên viết `The file encrypted` (thiếu mất `is/was`!) hoặc sau `must / will / should` lại viết `must encrypted` (thiếu mất `be`!). Hãy nhớ: Động từ **`be`** là người gánh vác toàn bộ việc chia Thì, còn động từ chính luôn đóng băng ở dạng **Cột 3 (`V3 / V-ed`)**!",
          "Trong văn phong viết Javadoc, Security Spec và Release Notes của Senior Java, hơn 50% các câu quy định bảo mật/luồng xử lý dùng **Modal Passive (`must be / should be / can be + V3/ed`)** và **Present Simple Passive (`is/are + V3/ed`)**."
        ],
        bullets: [
          "Hiện tại Đơn Bị động (`am/is/are + V3/ed`): Mô tả luồng xử lý hệ thống chuẩn (`Incoming JWTs **are verified** using the public key`).",
          "Quá khứ Đơn Bị động (`was/were + V3/ed`): Báo cáo việc đã được xử lý/phát hành (`Version 3.2 **was deployed** to production last night`).",
          "Hiện tại Tiếp diễn Bị động (`am/is/are + being + V3/ed`): Hệ thống đang trong quá trình được bảo trì/nâng cấp ngay lúc này (`The search index **is currently being rebuilt**`).",
          "Hiện tại Hoàn thành Bị động (`have/has + been + V3/ed`): Thông báo trạng thái ticket/PR đã được giải quyết xong (`All critical vulnerabilities **have been patched**`).",
          "Tương lai & Modal Bị động (`will / must / should / can / may + be + V3/ed`): Quy tắc bắt buộc trong Spec (`PII data **must be masked** in application logs`; `Deprecated methods **will be removed** in v4.0`)."
        ]
      },
      {
        heading: "2. Tuyệt Chiêu 3 Giây Giải Bài Tập Chủ Động vs Bị Động Trong TOEIC Part 5",
        paragraphs: [
          "Khi nhìn 4 đáp án có cả Chủ động lẫn Bị động như `(A) encrypts (B) is encrypted (C) encrypting (D) encrypted`, đừng dịch vội! Hãy làm đúng 3 bước thuật toán dưới đây:",
          "Bước 1: Đảm bảo câu đang thiếu Động từ chính chia thì (loại `V-ing` đứng lẻ như C). Bước 2: Nhìn ngay sau chỗ trống xem **CÓ Cụm danh từ làm Tân ngữ hay KHÔNG**. Bước 3: Kiểm tra xem động từ có rơi vào nhóm Nội động từ hoặc Động từ 2 tân ngữ không, rồi đối chiếu Thì + Số ít/nhiều để chốt!"
        ],
        bullets: [
          "Minh họa Bước 2 (Không có Tân ngữ → Bị động): `All API keys _____ inside HashiCorp Vault.` → Ngay sau chỗ trống là giới từ `inside` (KHÔNG có danh từ làm tân ngữ trực tiếp!) → Chắc chắn 100% chia Bị động **`are stored`**!",
          "Minh họa Bước 2 (Có Tân ngữ → Chủ động): `HashiCorp Vault _____ all API keys securely.` → Ngay sau chỗ trống là cụm danh từ `all API keys` (CÓ tân ngữ!) → Chia Chủ động **`stores`**!",
          "Cẩn thận bẫy Động từ 2 tân ngữ (`award, offer, give, send, grant, assign`): Câu `Ms. Tran _____ a bonus for optimizing the query` dù sau chỗ trống có danh từ `a bonus`, nhưng vì `award` là động từ 2 tân ngữ (`award [ai] [cái gì]`), ở đây `Ms. Tran` là người NHẬN giải thưởng nên vẫn phải chia Bị động: `Ms. Tran **was awarded** a bonus`!",
          "Nhắc lại Luật Thép Nội động từ (CẤM BỊ ĐỘNG): Các động từ `occur, happen, take place, arrive, emerge, last (kéo dài), rise, consist of, belong to, expire` KHÔNG BAO GIỜ có dạng `be + V3/ed`! Ví dụ: `The token **expired**` (ĐÚNG), viết `The token was expired` khi chỉ hành động hết hạn là lỗi Vietlish rất phổ biến!"
        ]
      },
      {
        heading: "3. Top Cụm Bị Động Đi Với Giới Từ Khác `by` — Mỏ Vàng Của Đề Thi ETS TOEIC",
        paragraphs: [
          "Học phổ thông ai cũng tưởng cứ câu bị động là đi với `by`! Thực tế trong đề thi TOEIC, khi miêu tả trạng thái, trang bị hoặc sự gắn kết, người bản xứ dùng các giới từ đặc thù như `with, in, to, of, at` chứ KHÔNG dùng `by`.",
          "Thuộc lòng bảng dưới đây là bạn cầm chắc thêm 20–30 điểm ở cả câu hỏi chia bị động lẫn câu hỏi điền giới từ Part 5–6!"
        ],
        bullets: [
          "Đi với `WITH`: `be equipped **with**` (được trang bị cái gì), `be satisfied / pleased **with**` (hài lòng với), `be replaced **with/by**` (được thay thế bằng), `be filled / packed **with**` (chứa đầy), `be associated **with**` (gắn liền với).",
          "Đi với `TO`: `be committed **to** / be dedicated **to** / be devoted **to**` (tận tâm/cam kết với), `be exposed **to**` (bị phơi nhiễm/lộ ra trước rủi ro), `be accustomed / used **to**` (quen với), `be assigned **to**` (được phân công cho/vào), `be subject **to**` (chịu sự chi phối/phê duyệt của).",
          "Đi với `IN`: `be interested **in**` (quan tâm tới), `be involved / engaged **in**` (tham gia/liên đới vào), `be located / situated **in/at**` (tọa lạc tại).",
          "Đi với `OF` / `FOR`: `be composed **of** / be made up **of**` (được cấu thành từ — lưu ý `consist of` thì luôn CHỦ ĐỘNG!), `be convinced **of**` (tin chắc về), `be known / renowned **for**` (nổi tiếng vì)."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "All user passwords **must be hashed** using Argon2 or BCrypt before **being persisted** to PostgreSQL.",
        vi: "Tất cả mật khẩu người dùng phải được băm bằng Argon2 hoặc BCrypt trước khi được lưu xuống PostgreSQL.",
        note: "Hai cấu trúc bị động đẳng cấp trong 1 câu: Modal Passive (`must be hashed`) và Danh động từ Bị động sau giới từ (`before being persisted`)."
      },
      {
        tag: "Senior Java",
        en: "Singleton Spring beans **are instantiated** eagerly when the `ApplicationContext` **is initialized**.",
        vi: "Các Spring bean dạng Singleton được khởi tạo ngay từ đầu khi `ApplicationContext` được nạp khởi tạo.",
        note: "Hiện tại Đơn Bị động (`are instantiated`, `is initialized`) chuẩn mực khi mô tả vòng đời framework."
      },
      {
        tag: "Daily Standup",
        en: "The memory leak in the PDF export worker **has already been resolved** and deployed to UAT.",
        vi: "Lỗi rò rỉ bộ nhớ ở worker xuất PDF đã được giải quyết xong và triển khai lên môi trường UAT rồi.",
        note: "Hiện tại Hoàn thành Bị động (`has + already + been + V3/ed`) báo cáo tiến độ ticket đã hoàn tất."
      },
      {
        tag: "TOEIC Part 5",
        en: "Every server rack in our Tier-4 data center **is equipped with** dual redundant power supplies.",
        vi: "Mỗi tủ rack máy chủ trong trung tâm dữ liệu chuẩn Tier-4 của chúng tôi đều được trang bị bộ nguồn kép dự phòng.",
        note: "Cụm vàng TOEIC: `be equipped with` (được trang bị thiết bị gì — dùng `with`, không dùng `by`!)."
      },
      {
        tag: "Client Email",
        en: "Please note that the search functionality **is currently being re-indexed** and may return partial results.",
        vi: "Xin lưu ý rằng chức năng tìm kiếm hiện đang trong quá trình được đánh chỉ mục lại và có thể trả về kết quả chưa đầy đủ.",
        note: "Hiện tại Tiếp diễn Bị động (`is + currently + being + V3/ed`) thông báo tác vụ nền đang chạy ngay lúc này."
      },
      {
        tag: "TOEIC Part 5",
        en: "Ms. Sato **was awarded** the Engineer of the Year prize for reducing cloud spend by $400,000.",
        vi: "Bà Sato đã được trao giải Kỹ sư của Năm nhờ cắt giảm 400.000 đô-la chi phí đám mây.",
        note: "Động từ 2 tân ngữ `award`: dù phía sau còn tân ngữ `the ... prize`, chủ ngữ `Ms. Sato` là người NHẬN giải nên bắt buộc chia Bị động `was awarded`!"
      },
      {
        tag: "Code Review",
        en: "Sensitive credit card numbers should never **be logged** in plain text or **exposed to** unauthorized services.",
        vi: "Số thẻ tín dụng nhạy cảm không bao giờ được phép ghi log dưới dạng văn bản thuần hoặc để lộ cho các dịch vụ không có thẩm quyền.",
        note: "`should never be logged` + cụm bị động đi giới từ cố định `be exposed to`."
      },
      {
        tag: "TOEIC Part 7",
        en: "The upcoming microservices workshop **will be held** on the fifth floor instead of the main auditorium.",
        vi: "Buổi hội thảo microservices sắp tới sẽ được tổ chức tại tầng năm thay vì hội trường chính.",
        note: "`be held` (được tổ chức, V3 của `hold`) đi với tương lai `will be held` xuất hiện dày đặc trong email thông báo Part 7."
      },
      {
        tag: "Senior Java",
        en: "Our core payment cluster **is composed of** six active nodes distributed across three availability zones.",
        vi: "Cụm thanh toán cốt lõi của chúng tôi được cấu thành từ sáu node hoạt động phân bổ trên ba vùng sẵn sàng.",
        note: "Nhớ kỹ cặp đối ứng: `is composed of` / `is made up of` (Bị động) = `consists of` (Chủ động — cấm viết `is consisted of`!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "All third-party API integrations **are subject to** a rigorous penetration test prior to go-live.",
        vi: "Tất cả các tích hợp API bên thứ ba đều phải chịu sự kiểm thử xâm nhập nghiêm ngặt trước khi đưa vào vận hành thật.",
        note: "`be subject to + Noun` (phải trải qua / chịu sự điều chỉnh của — lưu ý `subject` ở đây là Tính từ, không có `-ed`!)."
      },
      {
        tag: "Daily Standup",
        en: "This critical Jira ticket **was assigned to** me yesterday afternoon after the customer escalated it.",
        vi: "Ticket Jira nghiêm trọng này đã được phân công cho tôi vào chiều hôm qua sau khi khách hàng phản ánh lên cấp cao hơn.",
        note: "Quá khứ Đơn Bị động (`was assigned to`) đi với mốc `yesterday afternoon`."
      },
      {
        tag: "TOEIC Part 5",
        en: "Our DevSecOps team **is committed to** maintaining zero critical CVEs across all container images.",
        vi: "Đội ngũ DevSecOps của chúng tôi cam kết duy trì mức không có lỗ hổng bảo mật nghiêm trọng nào trên mọi container image.",
        note: "Cấu trúc điểm cao 650+: `be committed to + Noun / V-ing` (`to` ở đây là giới từ!)."
      },
      {
        tag: "Code Review",
        en: "Once a Java `Record` **is created**, its internal fields **cannot be modified** via reflection or setters.",
        vi: "Một khi một `Record` trong Java đã được khởi tạo, các trường nội bộ của nó không thể bị sửa đổi thông qua reflection hay hàm setter.",
        note: "Mô tả tính bất biến (Immutability) sắc gọn bằng hai mệnh đề bị động `is created` và `cannot be modified`."
      },
      {
        tag: "Client Email",
        en: "A comprehensive postmortem report **will be shared** with all stakeholders by noon tomorrow.",
        vi: "Một bản báo cáo phân tích sau sự cố toàn diện sẽ được chia sẻ tới tất cả các bên liên quan trước 12 giờ trưa mai.",
        note: "Văn phong giao tiếp sự cố chuyên nghiệp (Blameless Postmortem): dùng Tương lai Bị động tập trung vào hành động khắc phục."
      },
      {
        tag: "TOEIC Part 7",
        en: "Developers **involved in** the core banking migration **were granted** elevated VPN permissions.",
        vi: "Các lập trình viên tham gia vào đợt di trú core banking đã được cấp quyền VPN nâng cao.",
        note: "`involved in` là rút gọn mệnh đề quan hệ bị động (`who were involved in`), còn động từ chính của câu là `were granted` (động từ 2 tân ngữ!)."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "This microservice wrote by a former team lead three years ago.",
          fix: "This microservice **was written** by a former team lead three years ago.",
          why: "Quên trợ động từ `be` và dùng nhầm V2 (`wrote`) thay vì V3 (`written`)! Microservice không tự viết được mà 'được viết bởi' → bắt buộc dùng `was written`."
        },
        {
          bug: "All environment variables must encrypted before pushing.",
          fix: "All environment variables **must be encrypted** before pushing.",
          why: "Sau động từ khuyết thiếu (`must, should, can, will`) bắt buộc là động từ nguyên mẫu → muốn chia bị động phải có chữ **`be`** đứng làm cầu nối trước `encrypted`!"
        },
        {
          bug: "The architecture is consisted of three layers: Controller, Service, and Repository.",
          fix: "The architecture **consists of** (hoặc **is composed of**) three layers: Controller, Service, and Repository.",
          why: "Lỗi kinh điển cực nhiều Senior vẫn mắc! `consist of` là Nội động từ nên TUYỆT ĐỐI KHÔNG BAO GIỜ chia bị động `is consisted of`! Hãy dùng chủ động `consists of` hoặc đổi sang `is composed of`."
        },
        {
          bug: "The JWT access token was expired five minutes ago.",
          fix: "The JWT access token **expired** five minutes ago (hoặc **has expired**).",
          why: "`expire` (hết hạn) là Nội động từ tự xảy ra (giống `occur, happen, crash`), nên khi kể sự kiện hết hạn lúc 5 phút trước chỉ dùng chủ động `expired`, không dùng `was expired`."
        },
        {
          bug: "Our office is equipped by dual fiber-optic internet lines.",
          fix: "Our office is equipped **with** dual fiber-optic internet lines.",
          why: "Cụm tính từ/bị động chỉ trang thiết bị luôn đi với giới từ **`with`** (`be equipped with`), không dùng `by`!"
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây 'Soi Tân Ngữ': Trong TOEIC Part 5, khi phân vân giữa Chủ động (`updates`) và Bị động (`is updated`), hãy nhìn NGAY SAU chỗ trống! Nếu gặp ngay **Giới từ (`by, in, on, at, for, to, with, before, after`), Trạng từ thời gian hoặc Dấu chấm/phẩy** → Mất tân ngữ rồi, khoanh **BỊ ĐỘNG (`be + V3/ed`)** ngay (trừ khi động từ là nội động từ `occur/happen/rise/arrive/consist/expire`)!",
      "Mẹo kiểm tra đủ cặp `BE + V3`: Nếu câu chưa có động từ `be` trước chỗ trống mà bạn xác định nghĩa là Bị động, thì đáp án chỉ có mỗi `V-ed` (như `updated` hoặc `delivered`) có thể là Quá khứ đơn CHỦ ĐỘNG đấy! Muốn là động từ chính Bị động phải có đủ cả cụm **`is/are/was/were/has been/will be + V3/ed`**.",
      "Mẹo săn điểm Cụm Bị động + Giới từ: Học thuộc bộ 5 giới từ 'trái khoáy' hay hỏi nhất Part 5: `equipped **WITH**`, `satisfied **WITH**`, `involved **IN**`, `interested **IN**`, `committed / dedicated **TO**`."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu quy định bảo mật ở thể Bị động với Modal Verb:",
        chunks: [
          "before",
          "storage.",
          "All sensitive user passwords",
          "must be hashed",
          "database"
        ],
        answer: "All sensitive user passwords must be hashed before database storage.",
        vi: "Tất cả mật khẩu nhạy cảm của người dùng phải được băm trước khi lưu trữ vào cơ sở dữ liệu."
      },
      fillBlank: {
        sentence: "Every developer workstation in our R&D center is equipped _____ 64 gigabytes of ECC memory and dual 4K monitors. (Điền giới từ chuẩn)",
        answer: "with",
        accepted: ["with"],
        hint: "Cụm bị động cố định 'be equipped ___' (được trang bị với cái gì) không dùng 'by'.",
        explain: "Cấu trúc cố định cực kỳ phổ biến trong cả TOEIC và mô tả hạ tầng là **`be equipped with + Noun`** (được trang bị thiết bị/cấu hình gì)."
      }
    },
    quiz: [
      {
        q: "All database schema changes _____ automatically through Flyway migration scripts during the CI/CD deployment phase.",
        options: [
          "A. apply",
          "B. are applied",
          "C. applying",
          "D. have applying"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. are applied**. Áp dụng Mẹo 3 giây 'Soi Tân Ngữ': Chủ ngữ là `All database schema changes` (vật chịu tác động), ngay sau chỗ trống là trạng từ `automatically` và cụm giới từ `through Flyway...` — KHÔNG HỀ CÓ danh từ làm tân ngữ trực tiếp! Do đó bắt buộc chia **Bị động** (`are applied` — được áp dụng tự động). Loại A (chủ động thiếu tân ngữ), C (V-ing không làm V chính), D (sai ngữ pháp)."
      },
      {
        q: "Because an unexpected power surge _____ in the Mumbai availability zone last night, traffic was rerouted to Singapore.",
        options: [
          "A. was occurred",
          "B. occurred",
          "C. is occurring",
          "D. has been occurred"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. occurred**. Siêu bẫy Nội động từ! Mặc dù sau chỗ trống là cụm giới từ `in the Mumbai...` không có tân ngữ, nhưng động từ **`occur`** (xảy ra — giống `happen, take place`) là **Nội động từ thuần túy, TUYỆT ĐỐI KHÔNG BAO GIỜ chia Bị động** (loại sạch A và D!). Kết hợp dấu hiệu quá khứ `last night` → chọn Quá khứ Đơn chủ động **`occurred`** (loại C hiện tại)."
      },
      {
        q: "Before the mobile banking app went live, two external cybersecurity firms _____ to conduct independent penetration testing.",
        options: [
          "A. hired",
          "B. were hiring",
          "C. had been hired",
          "D. will be hired"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. had been hired**. Phân tích 2 yếu tố: (1) Chủ ngữ `two external cybersecurity firms` không có tân ngữ danh từ theo sau `_____` mà gặp ngay `to conduct...` (để thực hiện...) → các công ty này **được thuê** (Bị động, loại A và B chủ động); (2) Mệnh đề thời gian `Before the ... app went live` ở quá khứ → việc thuê công ty kiểm thử xảy ra TRƯỚC lúc app lên sóng nên dùng **Quá khứ Hoàn thành Bị động** (`had been hired`, loại D tương lai)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G2_4: ĐỘNG TỪ KHUYẾT THIẾU (MODALS) & GIAO TIẾP LỊCH SỰ TRONG CODE REVIEW
   * ========================================================================== */
  G2_4: {
    duration: "35 phút",
    toeicTarget: "TOEIC 450 → 650+ (TOEIC Listening Part 2–3 Lời đề nghị/Gợi ý & Reading Part 5–6)",
    javaContext: "Nâng tầm bình luận Pull Request từ mệnh lệnh gắt gỏng (`Fix this!`) sang phong thái Principal Engineer lịch thiệp (`Could we consider...`, `This might trigger a deadlock`, `should have validated`).",
    teacherIntro: "Chào anh em! Có một sự thật 'đau nhưng thật' khi kỹ sư Việt Nam mới gia nhập các team Global tại Mỹ, Châu Âu hay Singapore: Anh em code rất giỏi, phát hiện bug rất tinh, nhưng khi comment trên Pull Request lại viết `You must change this!` hoặc `This is wrong, rewrite it!`. Trong văn hóa kỹ thuật phương Tây, viết như vậy bị coi là công kích cá nhân (aggressive/rude) dù ý bạn hoàn toàn tốt! Bí quyết tạo nên phong thái điềm đạm, thuyết phục của một Senior/Principal Engineer chính là **Hệ thống Động từ Khuyết thiếu (Modal Verbs)**: chỉ cần đổi `must` thành `could / might / ought to / would rather`, câu góp ý bỗng trở nên sang trọng và đồng nghiệp tâm phục khẩu phục ngay! Hơn thế nữa, trong đề thi TOEIC Listening Part 2–3 và Reading Part 5–7, các câu hỏi/đề nghị dùng Modals và cấu trúc `Modal + have + V3` xuất hiện với tần suất dày đặc.",
    javaAnalogy: {
      title: "Thang Độ Mạnh Của Modal Verbs = Log Severity Levels (`FATAL` → `WARN` → `INFO` → `DEBUG`)",
      body: "Hãy coi các Modal Verbs như cấp độ cảnh báo trong trình kiểm tra tĩnh (SonarQube / Linter): **`must / have to`** là mức **`BLOCKER / ERROR`** (vi phạm luật bảo mật hoặc SLA bắt buộc — chỉ dùng cho quy chế hệ thống, hạn chế chỉ thẳng mặt `You must` khi review code!); **`should / ought to / had better`** là mức **`WARN`** (Best Practice nên tuân theo); **`could / would`** là mức **`SUGGESTION / INFO`** mềm mại để mở lời đề xuất đồng đội cùng tối ưu (`Could we cache this?`); **`may / might`** là cảnh báo rủi ro xác suất Race Condition / Edge Case (`This might throw NPE if user is null`); và cuối cùng **`should have + V3/ed`** chính là bài học **Postmortem Hậu Sự Cố** — việc lẽ ra phải làm trong quá khứ nhưng đã trót quên không làm!"
    },
    objectives: [
      "Nắm chắc quy tắc vàng của toàn bộ Modal Verbs (`can, could, may, might, must, should, ought to, would, had better, would rather` + **V_nguyên_thể không chia `-s/-ed`**).",
      "Chuyển đổi mượt mà các câu mệnh lệnh thô cứng trong Code Review & Email khách hàng sang lời góp ý/cảnh báo rủi ro đẳng cấp Senior quốc tế.",
      "Phân biệt chính xác bộ ba **`Modal Perfect` (`should have V3` vs `must have V3` vs `could have V3`)** khi phân tích nguyên nhân sự cố quá khứ và làm đề TOEIC 600+."
    ],
    formulaCards: [
      {
        label: "Luật Tối Thượng Của Động Từ Khuyết Thiếu",
        formula: "can / could / may / might / will / would / should / must + (Adv) + V_NGUYÊN_THỂ (Bare Infinitive)",
        note: "3 KHÔNG bất biến sau Modal: KHÔNG thêm `-s` dù chủ ngữ số ít; KHÔNG thêm `to` (trừ `ought to` và `have to`); KHÔNG thêm `-ed/-ing` trực tiếp (muốn bị động dùng `Modal + be + V3`)."
      },
      {
        label: "Thang Mềm Hóa Ngôn Ngữ Code Review (Polite Hedging)",
        formula: "Thô: Fix this!  ===>  Chuẩn Senior: Could we...? / Would it make sense to...? / This might...",
        note: "Dùng `we` thay cho `you` + lùi 1 bậc Modal (`can → could`, `will → would`, `may → might`) tạo cảm giác lịch sự, tôn trọng và hợp tác chứ không ra lệnh."
      },
      {
        label: "Phân Biệt `must not` (CẤM!) vs `don't have to` (Không cần thiết)",
        formula: "must not (mustn't) + V = Bị cấm tuyệt đối!  |  do/does not have to + V = Tùy chọn, không bắt buộc!",
        note: "Khẳng định thì `must` ≈ `have to` (phải làm), nhưng sang PHỦ ĐỊNH thì nghĩa trái ngược hoàn toàn! Ví dụ: `You **must not** commit secrets` (cấm!) vs `You **don't have to** write getters when using Lombok` (không cần viết)."
      },
      {
        label: "Bộ Ba Modal + HAVE + V3/ed (Nhìn Lại Quá Khứ — Đẳng Cấp 600+)",
        formula: "should have V3 (Lẽ ra nên làm mà không làm) | must have V3 (Ắt hẳn đã xảy ra) | could have V3 (Lẽ ra đã có thể)",
        note: "Cực kỳ hữu ích trong Postmortem: `We **should have added** a timeout` (Lẽ ra phải thêm timeout — thực tế là quên!); `A network blip **must have dropped** the packet` (Chắc hẳn nghẽn mạng đã làm rớt gói tin — suy đoán logic có căn cứ!)."
      }
    ],
    sections: [
      {
        heading: "1. Nghệ Thuật Giao Tiếp Code Review & Đàm Phán Với Khách Hàng Bằng Modals",
        paragraphs: [
          "Trong môi trường kỹ thuật quốc tế, chữ **`Could`** và **`Might`** đáng giá ngàn vàng! Khi bạn thấy đồng nghiệp viết một vòng lặp lồng nhau $O(n^2)$ nguy hiểm, nếu bạn viết `This will crash production`, đồng nghiệp sẽ lập tức bật chế độ phòng thủ cãi lại. Nhưng nếu bạn viết: `On datasets larger than 100k rows, this nested loop **might** cause high GC pressure. **Could** we use a `HashSet` lookup here instead?` — đảm bảo 100% người đọc mỉm cười thả tim và sửa ngay!",
          "Trong TOEIC Listening Part 2 & Part 3, các câu bắt đầu bằng `Could you...`, `Would you mind + V-ing...`, `Why don't we + V...`, `Shall we + V...` cũng chính là cấu trúc 'tủ' của lời yêu cầu lịch sự và lời gợi ý."
        ],
        bullets: [
          "Đề xuất giải pháp lịch sự: `**Could we** extract this into a strategy class?` / `**Would** you consider using `Optional` here?` / `We **might want to** add an index on `created_at`.`",
          "Cảnh báo rủi ro tinh tế (`may / might / could` = có khả năng dẫn tới): `Mutating shared state without synchronization **may / might** lead to subtle race conditions`.",
          "Khuyến nghị chuẩn mực (`should` = `ought to` = nên; `had better + V_nguyên` = tốt hơn hết là nên làm ngay kẻo gặp rắc rối): `We **ought to** deprecate the old endpoint first`; `We **had better** roll back before more orders fail`.",
          "Bày tỏ sự ưu tiên (`would rather + V_nguyên + than + V_nguyên` = thích làm A hơn làm B): `I **would rather** fail fast at startup **than** serve corrupted data` (chú ý sau `would rather` là V nguyên thể không `to`!)."
        ]
      },
      {
        heading: "2. Quy Chuẩn Tài Liệu Kỹ Thuật RFC 2119 (`MUST`, `SHOULD`, `MAY`) & Bẫy Phủ Định",
        paragraphs: [
          "Nếu bạn từng đọc các đặc tả chuẩn Internet (RFC của IETF như HTTP, OAuth 2.0, JWT) hay các quy chế công ty trong TOEIC Part 7, các Modal Verbs được định nghĩa nghiêm ngặt như luật pháp!",
          "Điểm dễ nhầm lẫn nhất cần đóng đinh: Ở thể khẳng định, `must` và `have to` đều dịch là 'phải'. Nhưng khi chuyển sang phủ định, người Việt rất hay dịch 'không phải làm' thành `must not` — gây hiểu lầm tai hại thành 'Nghiêm cấm làm'!"
        ],
        bullets: [
          "`MUST` / `SHALL` / `be required to`: Yêu cầu bắt buộc 100% không có ngoại lệ (`All webhooks **must** verify the HMAC signature`).",
          "`MUST NOT` / `SHALL NOT` / `be prohibited from`: Cấm tuyệt đối (`Services **must not** access another service's database directly`).",
          "`DO NOT HAVE TO` / `NEED NOT (+ V_nguyên)`: Không cần thiết phải làm (làm cũng không sao, nhưng không bắt buộc): `Developers **don't have to** configure Jackson manually in Spring Boot`.",
          "`be able to + V` thay thế cho `can` ở các thì Hoàn thành và Tương lai: Vì hai Modal không bao giờ đứng cạnh nhau (CẤM viết `will can` hay `have could`!), nên muốn nói 'sẽ có thể' phải viết **`will be able to + V`**, 'đã có thể từ lúc...' viết **`have been able to + V`**!"
        ]
      },
      {
        heading: "3. Cấu Trúc `Modal + have + V3/ed` — Vũ Khí Tối Thượng Khi Họp Postmortem & Thi TOEIC 650+",
        paragraphs: [
          "Khi ghép một Modal Verb với **`have + V3/ed`** (chú ý luôn là `have` nguyên mẫu, KHÔNG BAO GIỜ dùng `has` dù chủ ngữ là số ít!), bạn lập tức dịch chuyển ý nghĩa của Modal đó **lùi về đánh giá hoặc suy luận một việc ĐÃ XẢY RA TRONG QUÁ KHỨ**!",
          "Hãy phân biệt thật kỹ 4 tổ hợp vàng dưới đây — đặc biệt đừng nhầm `must + V` (bắt buộc ở hiện tại) với `must have + V3` (suy đoán chắc nịch 95% về nguyên nhân trong quá khứ)!"
        ],
        bullets: [
          "`should have + V3/ed` (Lẽ ra đã nên làm — nhưng thực tế đã KHÔNG làm, mang ý rút kinh nghiệm): `We **should have tested** the failover script under realistic load` | Phủ định: `shouldn't have merged` (lẽ ra không nên merge mà lại trót merge mất rồi!).",
          "`must have + V3/ed` (Ắt hẳn đã / Chắc chắn là đã — suy luận logic có chứng cứ rõ ràng cho sự việc quá khứ): `All pods restarted at 03:00; the Kubernetes node **must have run** out of memory`!",
          "`could have + V3/ed` (Lẽ ra đã có thể làm được / Đáng lẽ đã có thể gây ra, nhưng may mắn không xảy ra): `Without the rate limiter, that traffic spike **could have brought** down the entire cluster`.",
          "`might / may have + V3/ed` (Có lẽ đã xảy ra — suy đoán xác suất 50/50 về nguyên nhân quá khứ): `A stale DNS cache entry **might have caused** the intermittent connection timeouts`."
        ]
      }
    ],
    examples: [
      {
        tag: "Code Review",
        en: "**Could** we consider using `ConcurrentHashMap` here? A plain `HashMap` **might** cause infinite loops under concurrent writes.",
        vi: "Chúng ta có thể cân nhắc dùng `ConcurrentHashMap` ở đây được không? Dùng `HashMap` thường có thể gây ra vòng lặp vô tận khi nhiều luồng cùng ghi.",
        note: "Mẫu comment PR chuẩn mực Senior: mở lời bằng `Could we consider...` và nêu rủi ro bằng `might cause`."
      },
      {
        tag: "Senior Java",
        en: "According to PCI-DSS standards, CVV security codes **must not** be stored in any database after authorization.",
        vi: "Theo tiêu chuẩn PCI-DSS, mã bảo mật CVV tuyệt đối không được phép lưu trữ trong bất kỳ cơ sở dữ liệu nào sau bước cấp phép.",
        note: "`must not` thể hiện lệnh CẤM tuyệt đối trong tài liệu bảo mật."
      },
      {
        tag: "Senior Java",
        en: "With Java Records, you **don't have to** write boilerplate `equals()`, `hashCode()`, and `toString()` methods manually.",
        vi: "Với Java Records, bạn không cần thiết phải tự viết tay các hàm khuôn mẫu `equals()`, `hashCode()` và `toString()` nữa.",
        note: "Đối lập hoàn toàn với câu trên: `don't have to` = không cần phải làm (compiler đã tự sinh giúp rồi)."
      },
      {
        tag: "Daily Standup",
        en: "Looking back at yesterday's incident, we **should have configured** a strict circuit-breaker timeout on that Feign client.",
        vi: "Nhìn lại sự cố ngày hôm qua, lẽ ra chúng ta đã nên cấu hình một ngưỡng ngắt mạch nghiêm ngặt trên Feign client đó.",
        note: "`should have + V3/ed` dùng rút kinh nghiệm Blameless Postmortem (thực tế hôm qua đã chưa cấu hình)."
      },
      {
        tag: "Senior Java",
        en: "The database CPU hit 100% right after the release; the new endpoint **must have triggered** a full table scan.",
        vi: "CPU cơ sở dữ liệu chạm 100% ngay sau đợt phát hành; chắc hẳn endpoint mới đã kích hoạt việc quét toàn bộ bảng.",
        note: "`must have + V3/ed` đưa ra suy luận nguyên nhân quá khứ có độ tin cậy rất cao dựa trên bằng chứng log."
      },
      {
        tag: "TOEIC Part 5",
        en: "Once the SSO upgrade is complete, employees **will be able to** access all internal portals with a single login.",
        vi: "Một khi việc nâng cấp SSO hoàn tất, nhân viên sẽ có thể truy cập tất cả cổng nội bộ chỉ bằng một lần đăng nhập.",
        note: "Cấm viết `will can access`! Muốn diễn đạt `can` ở tương lai phải dùng `will be able to + V_nguyên`."
      },
      {
        tag: "Client Email",
        en: "**Would** you mind sharing the exact request payload and timestamp so our team **can** reproduce the issue?",
        vi: "Bạn có phiền chia sẻ chính xác gói tin yêu cầu và mốc thời gian để đội chúng tôi có thể tái hiện lỗi được không?",
        note: "Cấu trúc yêu cầu cực kỳ lịch sự với khách hàng: `Would you mind + V-ing...` (đi thi TOEIC nhớ sau `mind` là `V-ing`!)."
      },
      {
        tag: "Code Review",
        en: "I **would rather** throw an explicit `DomainException` early **than** return `null` and risk a `NullPointerException` downstream.",
        vi: "Tôi thà ném ra một ngoại lệ nghiệp vụ rõ ràng ngay từ đầu còn hơn trả về `null` rồi mạo hiểm dính lỗi NPE ở các tầng sau.",
        note: "Cấu trúc `would rather + V_nguyên (throw) + than + V_nguyên (return)` thể hiện triết lý Clean Code."
      },
      {
        tag: "TOEIC Part 5",
        en: "All visitors **ought to** register at the front desk at least fifteen minutes prior to their scheduled interview.",
        vi: "Tất cả khách đến thăm nên đăng ký tại quầy lễ tân ít nhất mười lăm phút trước giờ phỏng vấn đã hẹn.",
        note: "`ought to + V_nguyên` hoàn toàn tương đương với `should + V_nguyên`, rất hay xuất hiện trong thông báo TOEIC."
      },
      {
        tag: "Daily Standup",
        en: "Disk utilization on `kafka-broker-2` just crossed 88% — we **had better** expand the EBS volume before noon.",
        vi: "Mức dùng ổ đĩa trên `kafka-broker-2` vừa vượt mốc 88% — tốt hơn hết chúng ta nên mở rộng ổ EBS trước buổi trưa.",
        note: "`had better + V_nguyên` (không có `to`!) đưa ra lời khuyên khẩn cấp: nếu không làm ngay sẽ xảy ra hậu quả xấu."
      },
      {
        tag: "TOEIC Part 7",
        en: "Without the automated backup snapshot taken at midnight, the accidental `DROP TABLE` command **could have caused** permanent data loss.",
        vi: "Nếu không có bản chụp sao lưu tự động lúc nửa đêm, câu lệnh `DROP TABLE` vô ý đó lẽ ra đã có thể gây mất dữ liệu vĩnh viễn.",
        note: "`could have + V3` diễn tả một tai họa hoàn toàn có khả năng đã xảy ra trong quá khứ nhưng thực tế đã tránh được."
      },
      {
        tag: "Client Email",
        en: "Customers experiencing intermittent latency **may** temporarily switch to our backup endpoint in Tokyo.",
        vi: "Các khách hàng đang gặp độ trễ chập chờn có thể tạm thời chuyển sang sử dụng endpoint dự phòng của chúng tôi tại Tokyo.",
        note: "`may + V_nguyên` dùng trong văn bản trang trọng để cấp quyền/cho phép hoặc gợi ý phương án thay thế."
      },
      {
        tag: "Code Review",
        en: "Perhaps we **should** annotate this method with `@Transactional(readOnly = true)` to optimize Hibernate dirty checking.",
        vi: "Có lẽ chúng ta nên đánh dấu phương thức này bằng `@Transactional(readOnly = true)` để tối ưu cơ chế kiểm tra thay đổi của Hibernate.",
        note: "Kết hợp trạng từ làm mềm `Perhaps` + chủ ngữ đồng đội `we` + `should` tạo ra lời khuyên kỹ thuật cực kỳ dễ chịu."
      },
      {
        tag: "TOEIC Part 5",
        en: "The deployment script failed silently because the service account **might not have had** write permissions on the S3 bucket.",
        vi: "Kịch bản triển khai thất bại âm thầm vì tài khoản dịch vụ có lẽ đã không có quyền ghi trên S3 bucket đó.",
        note: "Dạng phủ định suy đoán quá khứ: `might not + have + V3` (ở đây `had` chính là V3 của động từ `have`!)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Should you require a custom SLA rate limit, our solutions architect **would be** happy to schedule a technical consultation.",
        vi: "Nếu quý khách cần hạn mức SLA tùy chỉnh, kiến trúc sư giải pháp của chúng tôi sẽ rất sẵn lòng sắp xếp một buổi tư vấn kỹ thuật.",
        note: "`would be happy to + V` là câu chốt email chăm sóc khách hàng B2B lịch thiệp bậc nhất trong TOEIC Part 7."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "This service can handles 10,000 requests per second.",
          fix: "This service **can handle** 10,000 requests per second.",
          why: "Sau mọi Modal Verb (`can, could, will, would, may, might, must, should`), động từ chính BẮT BUỘC ở dạng nguyên mẫu không chia, bất kể chủ ngữ số ít hay nhiều!"
        },
        {
          bug: "Next month, users will can export reports to Excel.",
          fix: "Next month, users **will be able to** export reports to Excel.",
          why: "Hai Modal Verbs (`will` và `can`) KHÔNG BAO GIỜ đứng liền nhau! Phải thay `can` bằng cụm tương đương **`be able to`** → `will be able to export`."
        },
        {
          bug: "You must not attend the optional tech talk if you are busy.",
          fix: "You **don't have to** attend the optional tech talk if you are busy.",
          why: "Nhầm nghĩa phủ định nguy hiểm! Viết `You must not attend` nghĩa là 'Nghiêm cấm bạn bước chân vào buổi tech talk'! Diễn tả 'không bắt buộc/không cần phải đi' phải dùng **`don't have to`**."
        },
        {
          bug: "The pipeline failed; someone must forgot to update the secret.",
          fix: "The pipeline failed; someone **must have forgotten** to update the secret.",
          why: "Sau `must` không bao giờ đi với V2 (`forgot`)! Để suy đoán một việc ắt hẳn đã xảy ra trong quá khứ, bắt buộc dùng cấu trúc `must + have + V3` (**`must have forgotten`**)."
        },
        {
          bug: "We had better to revert this commit immediately.",
          fix: "We **had better revert** this commit immediately.",
          why: "Cụm `had better` đóng vai trò như một Modal Verb tương đương `should`, nên theo sau nó là **Động từ nguyên mẫu KHÔNG `to`** (`had better revert`, phủ định là `had better not revert`)."
        }
      ]
    },
    toeicTips: [
      "Mẹo 2 giây 'Sau Modal chọn V nguyên mẫu': Trong TOEIC Part 5, thấy trước chỗ trống là `can / could / will / would / should / must / may / might` (có thể kẹp giữa 1 trạng từ `-ly` hoặc `not`) → Nhìn 4 đáp án chọn ngay **Động từ nguyên thể không chia (`V_bare`, hoặc `be` nếu câu bị động)**!",
      "Mẹo ăn trọn điểm TOEIC Listening Part 2 với Câu hỏi Lời mời/Đề nghị: Hễ nghe câu hỏi mở đầu bằng `Why don't we...`, `How about...`, `Could you...`, `Would you like to...` → Đáp án đúng thường bắt đầu bằng `Sure / Certainly / Sounds great / I'd be glad to`, hoặc từ chối lịch sự kèm lý do `Sorry, I have a deadline...` (Loại ngay các câu trả lời `Yes/No` máy móc cho `Why don't we`!).",
      "Mẹo giải câu `Modal + have + V3`: Nếu trong câu có bối cảnh quá khứ rõ ràng (`yesterday`, `last week`, `failed`, `missed`) mà 4 đáp án là các biến thể của Modal → Chọn ngay đáp án có dạng **`should / must / could + have + V3/ed`**!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu góp ý Code Review lịch sự chuẩn Senior:",
        chunks: [
          "this validation logic",
          "a separate helper?",
          "Could we consider",
          "into",
          "extracting"
        ],
        answer: "Could we consider extracting this validation logic into a separate helper?",
        vi: "Chúng ta có thể cân nhắc tách logic kiểm tra hợp lệ này ra một hàm bổ trợ riêng được không?"
      },
      fillBlank: {
        sentence: "To prevent cascading failures yesterday, our payment gateway _____ enforced a strict 2-second read timeout. (Điền cụm 2 từ 'lẽ ra đã nên' + enforced)",
        answer: "should have",
        accepted: ["should have"],
        hint: "Cấu trúc rút kinh nghiệm quá khứ 'Modal + have' (+ V3 enforced có sẵn).",
        explain: "Câu có mốc quá khứ `yesterday` và phía sau chỗ trống đã có sẵn V3 `enforced`. Để diễn tả bài học rút kinh nghiệm 'lẽ ra hôm qua đã nên áp đặt timeout nghiêm ngặt (nhưng thực tế đã không làm)', ta dùng **`should have`** (+ `enforced`)."
      }
    },
    quiz: [
      {
        q: "All external webhook consumers _____ validate the cryptographic signature header before processing any payment event.",
        options: [
          "A. must",
          "B. must to",
          "C. ought",
          "D. have"
        ],
        answer: 0,
        explain: "Đáp án đúng là **A. must**. Ngay sau chỗ trống là động từ nguyên mẫu không `to` (`validate`). `must + V_nguyên` diễn tả quy định bảo mật bắt buộc chuẩn xác nhất. Loại B vì sau `must` cấm dùng `to`; loại C và D vì cả `ought` lẫn `have` (khi mang nghĩa phải) đều bắt buộc phải có `to` đi kèm (`ought to validate`, `have to validate`)."
      },
      {
        q: "Because the staging server returned a 401 Unauthorized error, the automated test runner _____ used an expired API key.",
        options: [
          "A. must be",
          "B. should",
          "C. must have",
          "D. can"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. must have**. Mệnh đề đầu ở quá khứ (`returned a 401...`), và ngay sau chỗ trống là phân từ `used` (V3) có tân ngữ `an expired API key` (chủ động!). Cấu trúc suy luận logic về nguyên nhân đã xảy ra trong quá khứ là **`must have + V3`** (`must have used` = ắt hẳn đã dùng nhầm key hết hạn). Loại A (`must be used` là bị động nên không thể có tân ngữ phía sau), loại B và D vì sau `should/can` phải là nguyên mẫu `use` chứ không phải `used`."
      },
      {
        q: "Thanks to the new self-service developer portal, backend teams _____ open a Jira ticket just to provision a test database.",
        options: [
          "A. must not",
          "B. do not have to",
          "C. had better not",
          "D. could not have"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. do not have to**. Dựa vào ngữ cảnh tích cực `Thanks to the new self-service developer portal` (Nhờ có cổng tự phục vụ mới), các đội backend **không cần thiết phải** mở ticket Jira thủ công nữa → dùng **`do not have to`** (+ `open`). Loại A (`must not` = bị cấm ngặt) và C (`had better not` = cảnh báo không nên làm kẻo nguy hiểm) vì sai hoàn toàn sắc thái nghĩa; loại D vì sau `have` phải là V3 `opened`."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G2_5: DANH ĐỘNG TỪ (V-ING) VS NGUYÊN MẪU (TO V) & NHỮNG CÁI BẪY KINH ĐIỂN
   * ========================================================================== */
  G2_5: {
    duration: "45 phút",
    toeicTarget: "TOEIC 500 → 650+ (Top chủ đề phân loại điểm số quan trọng bậc nhất TOEIC Part 5)",
    javaContext: "Viết câu mạch lạc với động từ ghép (`avoid blocking`, `consider caching`, `decide to refactor`, `look forward to hearing`, `be dedicated to building`).",
    teacherIntro: "Chào anh em! Trong tiếng Việt, chúng ta ghép 2 động từ sát rạt nhau cực dễ: 'quyết định nâng cấp', 'tránh khóa luồng', 'cân nhắc tách service'. Nhưng trong tiếng Anh, **hai động từ chia thì không bao giờ được đứng nối đuôi nhau trực tiếp** — động từ thứ hai bắt buộc phải biến hình thành **`to V` (Infinitive)** hoặc **`V-ing` (Gerund)**! Nỗi ám ảnh lớn nhất của thí sinh đi thi TOEIC là: Tại sao `decide to migrate` dùng `to V`, mà `consider migrating` và `suggest migrating` lại bắt buộc dùng `V-ing`? Đỉnh điểm của sự 'lừa tình' là các cụm có chữ **`to`** như `look forward to`, `be committed to`, `object to` nhưng theo sau chữ `to` đó lại... dùng **`V-ing`** chứ ai chọn `to V` là trượt vỏ chuối ngay! Bài giảng này sẽ hệ thống hóa toàn bộ quy luật tâm lý đằng sau `to V` vs `V-ing` để anh em nhớ một lần dùng cả đời.",
    javaAnalogy: {
      title: "`to V` vs `V-ing` = `Future<Task>` Hướng Tới Tương Lai vs `Runnable` Thực Thể Hóa Hành Động",
      body: "Thay vì học vẹt danh sách khô khan, hãy nắm **Mental Model cốt lõi** này: **`to V` (To-Infinitive)** mang bản chất của mũi tên `->` hướng tới **MỤC ĐÍCH hoặc HÀNH ĐỘNG CHƯA XẢY RA Ở TƯƠNG LAI** (giống như khởi tạo `CompletableFuture`: ta *lên kế hoạch* `plan to`, *quyết định* `decide to`, *kỳ vọng* `expect to`, *hứa* `promise to` làm việc sẽ diễn ra tiếp theo!). Ngược lại, **`V-ing` (Gerund - Danh động từ)** thực chất là việc **ép kiểu (Type Casting) một Động từ sang kiểu `Noun` (`(Noun) action`)** để gọi tên một quá trình/trải nghiệm như một gói dữ liệu: vì nó đã biến thành **DANH TỪ**, nên nó nghiễm nhiên đứng làm **Chủ ngữ đầu câu** (`Caching data reduces load`), đứng ngay **sau MỌI Giới từ** (`in, on, of, without, before, by + V-ing`), và đi sau nhóm động từ 'xử lý/né tránh/hoàn tất việc đang có' (`avoid, finish, postpone, consider, suggest + V-ing`)!"
    },
    objectives: [
      "Sử dụng chuẩn xác `V-ing` ở vị trí Chủ ngữ đầu câu và ngay sau Giới từ (`by, without, instead of, prior to, in addition to + V-ing`), đối lập với `To V` chỉ mục đích ('Để làm gì').",
      "Phân biệt không nhầm lẫn Nhóm Động từ + `to V` (`decide, plan, expect, afford, refuse, agree, manage, fail`) và Nhóm Động từ + `V-ing` (`avoid, consider, suggest, recommend, postpone, finish, mind, risk`).",
      "Phá giải 100% 'Tứ Đại Siêu Bẫy `to + V-ing`' của ETS TOEIC (`look forward to`, `be committed/dedicated to`, `object to`, `be used/accustomed to`) và cặp đổi nghĩa `remember / stop / try`."
    ],
    formulaCards: [
      {
        label: "Quy Tắc Đầu Câu & Sau Giới Từ: V-ing vs To V",
        formula: "1) Prep + V-ing + Object  |  2) V-ing + O + V_số_ít (Làm S)  |  3) To V + O, S + V (Chỉ mục đích: Để...)",
        note: "Mẹo cực sắc cho Part 5: Đứng ĐẦU CÂU, nếu có dấu phẩy ngăn cách với mệnh đề chính `_____ latency, we added Redis` → Điền **`To reduce`** (Để giảm...); nếu KHÔNG có dấu phẩy mà đi thẳng tới động từ chia thì `_____ latency improves UX` → Điền **`Reducing`** (Việc giảm...)!"
      },
      {
        label: "Top Động Từ + TO V (Hướng Tới Tương Lai)",
        formula: "decide / plan / expect / hope / promise / agree / refuse / afford / manage / fail / offer + TO V",
        note: "Cùng với cấu trúc có Tân ngữ ở giữa `Verb + Object + to V`: `allow / enable / require / ask / advise / encourage / remind + sb/sth + TO V` (`allow users **to reset** passwords`)."
      },
      {
        label: "Top Động Từ + V-ING (Trải Nghiệm / Cân Nhắc / Né Tránh)",
        formula: "avoid / consider / suggest / recommend / postpone / delay / finish / mind / keep / risk / enjoy + V-ING",
        note: "CỰC KỲ LƯU Ý 2 TỪ BẪY: `suggest` và `recommend` khi không có `that` đi trực tiếp với động từ thì BẮT BUỘC dùng **`V-ing`** (`suggested **refactoring**`), TUYỆT ĐỐI CẤM viết `suggest to refactor` hay `recommend you to refactor`!"
      },
      {
        label: "SIÊU BẪY ETS TOEIC: Các Cụm Tận Cùng Bằng Giới Từ `to` + V-ING!",
        formula: "look forward to / be committed to / be dedicated to / be devoted to / object to / be used to + V-ING!",
        note: "Tại sao? Vì chữ `to` ở đây là **GIỚI TỪ** (y hệt `to + Noun`), KHÔNG PHẢI `to` của nguyên mẫu! Thử thay bằng danh từ sẽ thấy ngay: `look forward to **the release**` → khi thay bằng động từ phải là Danh động từ `look forward to **releasing**`! (Lưu ý phân biệt: `used to + V_nguyên` = đã từng làm trong quá khứ)."
      }
    ],
    sections: [
      {
        heading: "1. Đứng Sau Giới Từ & Đứng Đầu Câu: Khi Nào Dùng `V-ing`, Khi Nào Dùng `To V`?",
        paragraphs: [
          "Ở Bài G1.2 bạn đã biết `Sau Giới từ + Danh từ`. Nhưng nếu sau giới từ (`without, by, for, before, after, instead of, capable of, responsible for`) lại ĐÃ CÓ SẴN một cụm danh từ làm tân ngữ phía sau (ví dụ `by _____ [a connection pool]`), bạn KHÔNG THỂ điền Danh từ nữa (vì Danh từ không nhận tân ngữ trực tiếp!), mà BẮT BUỘC phải điền **Danh động từ `V-ing`** (`by **using** a connection pool`)!",
          "Tương tự ở vị trí đầu câu, nhiều bạn không biết chọn `Optimizing` hay `To optimize` — chỉ cần nhìn xem câu có dấu phẩy tách mệnh đề chính hay đi thẳng vào động từ chia thì là ra ngay trong 2 giây!"
        ],
        bullets: [
          "`Giới từ + V-ing + Tân ngữ`: `Instead of **polling** the database every second, we switched to WebSockets` | `Thank you for **reviewing** my PR promptly`.",
          "`V-ing` làm Chủ ngữ (Luôn chia động từ SỐ ÍT!): `**Storing** session state in Redis **allows** horizontal scaling` (`Storing...` là S, `allows` là V chính có `-s`).",
          "`To V` chỉ Mục đích ('Để làm gì' = `In order to + V`): Đứng đầu câu trước dấu phẩy hoặc đứng cuối câu đã đủ S-V-O (`**To prevent** SQL injection, always use parameterized queries`).",
          "Sau Tính từ (`Adj + to V`): Đa số tính từ đi với `to V` (`easy **to maintain**`, `ready **to deploy**`, `eager **to learn**`, `reluctant **to upgrade**`, `likely **to fail**`), trừ `busy + V-ing` (`busy **debugging**`) và `worth + V-ing` (`worth **investigating**` — rất hay thi TOEIC!)."
        ]
      },
      {
        heading: "2. Phân Nhóm Động Từ Đi Với `To V` vs `V-ing` & Bẫy `allow / advise / recommend`",
        paragraphs: [
          "Trong đề thi TOEIC Part 5, các động từ thuộc danh sách dưới đây lặp lại với xác suất gần như 100%. Hãy đặc biệt chú ý sự đối xứng thú vị của bộ ba **`allow / permit / advise / recommend`**:",
          "Nếu có Tân ngữ chỉ người ở giữa → dùng `to V` (`allow **developers** **to deploy**`); nhưng nếu KHÔNG có tân ngữ chỉ người ở giữa mà đi thẳng với hành động → đổi ngay sang **`V-ing`** (`allow **deploying**`, `advise **upgrading**`, `recommend **caching**`)!"
        ],
        bullets: [
          "Nhóm Cốt lõi + `TO V`: `decide to` (quyết định), `plan / intend / aim to` (dự định), `expect to` (kỳ vọng), `afford to` (đủ khả năng chi trả/chịu đựng), `manage to` (xoay sở làm được thành công), `fail to` (thất bại/không làm được), `refuse to` (từ chối), `hesitate to` (ngần ngại — `do not hesitate **to contact** us`).",
          "Nhóm Cốt lõi + `V-ING`: `avoid` (tránh), `consider` (cân nhắc), `suggest / recommend` (đề xuất), `postpone / delay / put off` (trì hoãn), `finish / complete / quit / discontinue` (hoàn tất/dừng hẳn), `keep` (tiếp tục), `mind` (phiền lòng — `Would you mind **restarting**`), `appreciate` (trân trọng — `We appreciate **receiving**` hoặc `appreciate **your** helping`).",
          "Nhóm Nguyên mẫu KHÔNG `to` (`Bare Infinitive`) với Động từ Cầu khiến `make / let / have`: `make / let / have + Object + **V_nguyên_thể**` (`Automated tests **let** developers **refactor** with confidence`; `This config **makes** the consumer **commit** manually`). Riêng **`help`** cực dễ tính: `help + O + V_nguyên` hoặc `to V` đều ĐÚNG!"
        ]
      },
      {
        heading: "3. Phá Giải Siêu Bẫy `to + V-ing` & Các Động Từ Hai Nghĩa (`stop, remember, try`)",
        paragraphs: [
          "90% người mất điểm câu 600–700 trong TOEIC Part 5 bị đánh lừa bởi thị giác: thấy chữ `to` trước chỗ trống là tay tự động khoanh `V_nguyên`! Hãy cảnh giác cao độ với 6 cụm từ có `to` là giới từ dưới đây.",
          "Ngoài ra, trong giao tiếp kỹ thuật hàng ngày, nhầm giữa `stop to process` và `stop processing`, hay giữa `used to deploy` và `be used to deploying` sẽ làm ngược hoàn toàn ý bạn muốn nói!"
        ],
        bullets: [
          "6 Siêu cụm `to + V-ING` phải khắc vào não: (1) `look forward to + V-ing` (mong đợi — câu kết email số 1 TOEIC!); (2) `be committed / dedicated / devoted to + V-ing` (tận tâm/cam kết với việc); (3) `contribute to + V-ing` (đóng góp vào việc); (4) `object to / be opposed to + V-ing` (phản đối việc); (5) `in addition to + V-ing` (ngoài việc... ra); (6) `prior to + V-ing` (trước khi làm gì).",
          "Phân biệt Sinh Tử `used to`: `S + **used to + V_nguyên**` = Đã từng có thói quen trong quá khứ (nay bỏ rồi: `We **used to deploy** manually via FTP`) VS `S + **be / get used to + V-ing**` = Đã quen với việc gì ở hiện tại (`Our team **is used to working** with microservices`) VS `Vật + **be used to + V_nguyên**` = Vật được sử dụng ĐỂ làm gì (`Redis **is used to cache** tokens` — bị động của `use`!).",
          "Cặp đổi nghĩa: `stop + V-ing` (dừng hẳn hành động đang chạy: `The worker **stopped consuming** messages`) vs `stop + to V` (dừng việc khác lại ĐỂ chuyển sang làm V); `remember/forget + to V` (nhớ/quên nhiệm vụ PHẢI làm: `Remember **to close** the `InputStream``) vs `remember/forget + V-ing` (nhớ/quên ký ức ĐÃ làm rồi); `try + to V` (nỗ lực cố gắng) vs `try + V-ing` (thử nghiệm một cách giải quyết xem có hết bug không: `Try **clearing** your Maven cache`)."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "You should **avoid** **blocking** the Netty event-loop thread in Spring WebFlux.",
        vi: "Bạn nên tránh làm tắc nghẽn luồng event-loop của Netty trong Spring WebFlux.",
        note: "Động từ `avoid` luôn luôn đi với Danh động từ `V-ing` (`avoid blocking`)."
      },
      {
        tag: "Client Email",
        en: "We **look forward to** **discussing** the system architecture with your technical leads on Thursday.",
        vi: "Chúng tôi rất mong đợi được thảo luận về kiến trúc hệ thống cùng các trưởng nhóm kỹ thuật của quý công ty vào thứ Năm.",
        note: "Siêu bẫy số 1 mọi thời đại của TOEIC: `look forward to + V-ing` (`discussing`, cấm viết `look forward to discuss`!)."
      },
      {
        tag: "Code Review",
        en: "Have you **considered** **replacing** this chain of `if-else` statements with a Java 21 pattern-matching `switch`?",
        vi: "Bạn đã cân nhắc việc thay thế chuỗi câu lệnh `if-else` này bằng cấu trúc `switch` khớp mẫu của Java 21 chưa?",
        note: "`consider + V-ing` và sau giới từ `with` là cụm danh từ."
      },
      {
        tag: "TOEIC Part 5",
        en: "Due to pending security patches, the release manager **decided** **to postpone** **launching** the payment portal.",
        vi: "Do còn các bản vá bảo mật đang chờ xử lý, quản lý phát hành đã quyết định hoãn việc ra mắt cổng thanh toán.",
        note: "Combo hai tầng liên tiếp cực đỉnh: `decide + to V` (`to postpone`), rồi bản thân `postpone` lại + `V-ing` (`launching`)!"
      },
      {
        tag: "Senior Java",
        en: "**To minimize** garbage collection pauses, we tuned the G1GC region size and heap thresholds.",
        vi: "Để giảm thiểu thời gian dừng dọn rác (GC), chúng tôi đã tinh chỉnh kích thước vùng G1GC và các ngưỡng bộ nhớ Heap.",
        note: "Đứng đầu câu, có dấu phẩy ngăn cách với mệnh đề chính `we tuned...` → dùng `To + V` chỉ mục đích ('Để làm gì')."
      },
      {
        tag: "Senior Java",
        en: "**Minimizing** network round-trips between microservices **is** essential for sub-50ms P99 latency.",
        vi: "Việc giảm thiểu số vòng gọi mạng qua lại giữa các microservice là tối quan trọng để đạt độ trễ P99 dưới 50ms.",
        note: "Không có dấu phẩy mà làm Chủ ngữ trực tiếp cho động từ `is` → bắt buộc dùng Danh động từ `Minimizing`!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Our reliability engineering team **is dedicated to** **maintaining** 99.99% uptime across all global regions.",
        vi: "Đội ngũ kỹ sư độ tin cậy của chúng tôi luôn tận tâm trong việc duy trì 99.99% thời gian hoạt động trên mọi khu vực toàn cầu.",
        note: "`be dedicated to / be committed to + V-ing` (`maintaining`)."
      },
      {
        tag: "Daily Standup",
        en: "If the integration test still fails locally, **try** **rebuilding** the Docker image without cache.",
        vi: "Nếu bài kiểm thử tích hợp vẫn lỗi trên máy cá nhân, hãy thử build lại Docker image không dùng cache xem sao.",
        note: "`try + V-ing` mang nghĩa 'thử áp dụng một giải pháp kỹ thuật để xem kết quả'."
      },
      {
        tag: "Code Review",
        en: "Always **remember** **to close** JDBC resources using a `try-with-resources` block **to prevent** connection leaks.",
        vi: "Hãy luôn nhớ đóng các tài nguyên JDBC bằng khối `try-with-resources` để ngăn chặn rò rỉ kết nối.",
        note: "`remember + to V` = nhớ bổn phận/nhiệm vụ phải thực hiện."
      },
      {
        tag: "TOEIC Part 5",
        en: "**In addition to** **encrypting** data at rest, the platform enforces TLS 1.3 for all data in transit.",
        vi: "Ngoài việc mã hóa dữ liệu tĩnh khi lưu trữ, nền tảng còn áp buộc giao thức TLS 1.3 cho toàn bộ dữ liệu đang truyền tải.",
        note: "Trong cụm `In addition to`, chữ `to` là Giới từ → theo sau có tân ngữ `data` nên dùng `encrypting` (`V-ing`)."
      },
      {
        tag: "Senior Java",
        en: "Five years ago we **used to deploy** WAR files manually, but now we **are used to shipping** containers daily via GitOps.",
        vi: "Năm năm trước chúng tôi từng triển khai file WAR thủ công, nhưng giờ chúng tôi đã quen với việc xuất xưởng container hàng ngày qua GitOps.",
        note: "Câu vàng phân biệt trọn vẹn: `used to + V_nguyên` (thói quen cũ đã bỏ) vs `are used to + V-ing` (quen với việc hiện tại)."
      },
      {
        tag: "Senior Java",
        en: "Apache ZooKeeper **was** traditionally **used to coordinate** distributed Kafka brokers before KRaft mode arrived.",
        vi: "Apache ZooKeeper trước đây vốn được sử dụng để điều phối các Kafka broker phân tán trước khi chế độ KRaft ra đời.",
        note: "Mảnh ghép thứ 3 của `used to`: Chủ ngữ là VẬT (`ZooKeeper`) + `be used` (được dùng) + `to coordinate` (để điều phối - mục đích)!"
      },
      {
        tag: "TOEIC Part 7",
        en: "External consultants **are not permitted** **to access** internal Git repositories **without** **signing** an NDA.",
        vi: "Các chuyên gia tư vấn bên ngoài không được phép truy cập kho Git nội bộ nếu không ký thỏa thuận bảo mật (NDA).",
        note: "Bị động của `permit sb to V` → `be permitted to access`; và sau giới từ `without` → `signing` (`V-ing`)."
      },
      {
        tag: "Code Review",
        en: "The Principal Engineer **suggested** **splitting** the monolithic `UserService` into authentication and profile domains.",
        vi: "Kỹ sư trưởng đã đề xuất việc tách `UserService` nguyên khối thành hai miền xác thực và hồ sơ người dùng.",
        note: "Nhắc lại quy tắc sống còn: `suggest + V-ing` (`splitting`), tuyệt đối KHÔNG viết `suggested to split`!"
      },
      {
        tag: "Client Email",
        en: "This edge-case optimization is definitely **worth** **implementing** before next month's traffic surge.",
        vi: "Việc tối ưu hóa trường hợp biên này chắc chắn rất đáng để triển khai trước đợt tăng vọt lưu lượng tháng sau.",
        note: "Cấu trúc đặc biệt cực hay thi: `be worth + V-ing` (đáng để làm gì)."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "I look forward to hear your feedback on the RFC.",
          fix: "I look forward to **hearing** your feedback on the RFC.",
          why: "Trong cụm `look forward to`, chữ `to` là GIỚI TỪ chứ không phải `to` nguyên mẫu! Sau giới từ bắt buộc là Danh từ hoặc Danh động từ **`hearing`**."
        },
        {
          bug: "The tech lead suggested to use Redis Streams for this queue.",
          fix: "The tech lead **suggested using** Redis Streams (hoặc **suggested that we use**...).",
          why: "`suggest` và `recommend` KHÔNG BAO GIỜ đi với `to V`! Đi trực tiếp với động từ phải dùng **`V-ing`** (`suggested using`)."
        },
        {
          bug: "Optimize SQL queries reduces database CPU load by half.",
          fix: "**Optimizing** SQL queries reduces database CPU load by half.",
          why: "Động từ nguyên mẫu `Optimize` không thể đứng đầu câu làm Chủ ngữ cho động từ `reduces`! Phải ép kiểu nó thành Danh động từ **`Optimizing`**."
        },
        {
          bug: "Spring Security lets us to customize the filter chain easily.",
          fix: "Spring Security **lets us customize** (hoặc **allows us to customize**) the filter chain easily.",
          why: "Sau bộ ba động từ `let / make / have + Tân ngữ`, động từ theo sau là nguyên mẫu KHÔNG `to` (`let us customize`). Nếu muốn có `to`, hãy dùng `allow / enable`!"
        },
        {
          bug: "Instead of write custom retry code, we use Resilience4j.",
          fix: "Instead of **writing** custom retry code, we use Resilience4j.",
          why: "`Instead of` kết thúc bằng giới từ `of`, nên động từ đứng ngay sau nó bắt buộc phải biến thành **`writing` (`V-ing`)**."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây phân biệt `To V` vs `V-ing` ở ĐẦU CÂU trong Part 5: Quét dọc từ đầu câu đến hết mệnh đề! Nếu thấy **`_____ + cụm tân ngữ , (CÓ DẤU PHẨY) + S + V`** → Điền **`To + V`** ('Để làm gì...'). Nếu **KHÔNG CÓ DẤU PHẨY** mà gặp ngay Động từ chia số ít (`is, was, has, requires, helps`) → Điền **`V-ing`** làm Chủ ngữ!",
      "Mẹo cảnh giác cao độ khi thấy chữ `to` trước chỗ trống: Trước khi chọn `V_nguyên`, hãy lùi mắt đọc cụm từ trước `to`! Nếu là **`look forward to / committed to / dedicated to / devoted to / object to / opposed to / in addition to / prior to / accustomed to`** → Phanh cháy lốp và khoanh ngay **`V-ING`**!",
      "Mẹo 'Giới từ + ____ + Tân ngữ': Thấy trước chỗ trống là giới từ (`by, without, in, for, of, after, before`) VÀ ngay sau chỗ trống ĐÃ CÓ một cụm danh từ (ví dụ `by _____ operational costs`) → KHÔNG chọn Danh từ `reduction` mà phải chọn **`V-ing` (`reducing`)** vì chỉ `V-ing` mới tác động trực tiếp lên tân ngữ `operational costs` được!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu kết email kinh điển (chú ý cấu trúc sau 'look forward to'):",
        chunks: [
          "collaborating",
          "next sprint.",
          "We look forward",
          "with your engineering team",
          "to"
        ],
        answer: "We look forward to collaborating with your engineering team next sprint.",
        vi: "Chúng tôi rất mong được hợp tác cùng đội ngũ kỹ thuật của các bạn trong sprint tới."
      },
      fillBlank: {
        sentence: "To ensure zero downtime, the DBA suggested _____ the new index concurrently during off-peak hours. (Từ gốc: create)",
        answer: "creating",
        accepted: ["creating"],
        hint: "Sau động từ 'suggest' bắt buộc dùng Danh động từ (V-ing), cấm dùng 'to V'.",
        explain: "`suggest` thuộc nhóm động từ bắt buộc đi với Danh động từ **`V-ing`** (`suggested creating`) khi không có mệnh đề `that`."
      }
    },
    quiz: [
      {
        q: "In addition to _____ horizontal pod autoscaling, the SRE team configured custom Prometheus alerts for queue lag.",
        options: [
          "A. enable",
          "B. enabling",
          "C. enabled",
          "D. enables"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. enabling**. Cụm **`In addition to`** (Ngoài việc... ra) kết thúc bằng **Giới từ `to`** (không phải `to` nguyên mẫu!). Phía sau chỗ trống lại có cụm danh từ tân ngữ `horizontal pod autoscaling` → bắt buộc điền Danh động từ **`enabling` (`V-ing`)**. Rất nhiều thí sinh chỉ nhìn chữ `to` sát chỗ trống liền chọn nhầm A (`enable`)!"
      },
      {
        q: "_____ backward compatibility with older mobile clients, all v1 REST endpoints will remain active for six more months.",
        options: [
          "A. Maintain",
          "B. Maintaining",
          "C. To maintain",
          "D. Maintained"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. To maintain**. Áp dụng Mẹo 3 giây Đầu câu: Sau cụm `_____ backward compatibility with older mobile clients` có **DẤU PHẨY `,`**, rồi mới tới mệnh đề chính đầy đủ S-V (`all v1 REST endpoints will remain active...`). Vậy cụm đầu câu đóng vai trò Trạng ngữ chỉ mục đích ('Để duy trì tính tương thích ngược...') → chọn **`To maintain`**. Loại A (câu mệnh lệnh không nối như vậy), loại B (`Maintaining` làm chủ ngữ khi không có dấu phẩy hoặc rút gọn đồng chủ ngữ, nhưng `endpoints` không tự `maintain` kiểu chủ động đó bằng mục đích)."
      },
      {
        q: "FinPay Inc. is fully committed to _____ end-to-end encryption across all cross-border payment channels.",
        options: [
          "A. implement",
          "B. implemented",
          "C. implements",
          "D. implementing"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. implementing**. Một trong 'Tứ đại siêu bẫy' xuất hiện liên tục trong đề ETS TOEIC: **`be committed to + V-ing / Noun`** (cam kết làm gì). Chữ `to` ở đây là giới từ, và phía sau có tân ngữ `end-to-end encryption`, nên đáp án bắt buộc là **`implementing`**!"
      }
    ]
  },

  /* ==========================================================================
   * BÀI G2_6: PHÂN TỪ HIỆN TẠI (V-ING) VS QUÁ KHỨ (V-ED) LÀM TÍNH TỪ
   * ========================================================================== */
  G2_6: {
    duration: "35 phút",
    toeicTarget: "TOEIC 500 → 650+ (TOEIC Part 5: Cặp tính từ phân từ `-ing` vs `-ed` trước Danh từ & sau Linking Verb)",
    javaContext: "Đặt tên biến & viết Technical Docs chuẩn như người bản xứ (`confusing logs` vs `confused dev`, `running threads`, `updated config`, `deprecated API`, `encrypted payload`).",
    teacherIntro: "Chào anh em đến với bài khép lại Học phần G2! Khi đọc code Java hay tài liệu kỹ thuật, anh em gặp hàng trăm cụm danh từ kiểu `a **running** thread`, `an **updated** record`, `a **deprecated** method`, `an **overwhelming** backlog`. Nhưng khi tự tay viết hoặc làm đề thi TOEIC Part 5 gặp 2 đáp án `(A) confusing` và `(B) confused` hay `(A) updating` và `(B) updated` đứng trước danh từ, rất nhiều anh em lại áp dụng quy tắc học vẹt tai hại từ thời cấp 3 là: *'Cứ chỉ người thì dùng -ed, chỉ vật thì dùng -ing'*! Quy tắc học vẹt đó gặp câu TOEIC `Please review the _____ schedule: (A) revising (B) revised` (`schedule` là vật!) là sai tan nát ngay vì đáp án đúng phải là **`revised` (`the revised schedule` = lịch trình đã được chỉnh sửa)**! Hôm nay thầy sẽ sửa tận gốc tư duy này bằng nguyên lý **Nguồn Phát (Emitter) vs Đích Nhận (Receiver)** chuẩn 100% không một ngoại lệ!",
    javaAnalogy: {
      title: "Tính Từ `V-ing` vs `V-ed/V3` = Event Publisher / Active Process vs Mutated / Target Object",
      body: "Quên ngay chuyện 'người hay vật' đi! Hãy nhìn mối quan hệ giữa Tính từ phân từ và Danh từ nó bổ nghĩa như mô hình **Producer – Consumer** hoặc **Trạng thái Thread**: **1) Phân từ Hiện tại (`V-ing`)** mang bản chất **CHỦ ĐỘNG / GÂY RA TÁC ĐỘNG / ĐANG CHẠY**: Danh từ đó tự phát ra cảm xúc/tính chất (`a **confusing** stack trace` = stack trace *gây rối não* cho người đọc), hoặc tự nó đang vận hành (`**running** containers`, `**incoming** requests`, `**existing** users`). **2) Phân từ Quá khứ (`V-ed / V3`)** mang bản chất **BỊ ĐỘNG / CHỊU TÁC ĐỘNG / ĐÃ HOÀN TẤT BIẾN ĐỔI**: Danh từ đó *nhận* cảm xúc từ bên ngoài (`a **confused** developer` = dev *bị làm cho rối*), hoặc đã bị một tác nhân khác xử lý xong (`an **encrypted** token`, `**updated** dependencies`, `**broken** links`)!"
    },
    objectives: [
      "Hiểu tận gốc bản chất Chủ động/Gây ra (`V-ing`) vs Bị động/Chịu tác động & Đã hoàn tất (`V-ed/V3`) thay thế hoàn toàn mẹo học vẹt 'vật -ing / người -ed' đầy lỗ hổng.",
      "Phân biệt chuẩn xác 2 nhóm Tính từ Phân từ trong TOEIC: Nhóm Cảm xúc (`interesting/interested`, `satisfying/satisfied`, `exhausting/exhausted`) và Nhóm Quy trình Kỹ thuật/Thương mại (`attached`, `enclosed`, `updated`, `proposed`, `remaining`, `leading`, `following`).",
      "Tránh bẫy khi có sẵn Tính từ gốc chuyên biệt trong từ điển TOEIC (ưu tiên `reliable`, `accessible`, `impressive` thay vì tự chế phân từ khi nói về bản chất cố hữu)."
    ],
    formulaCards: [
      {
        label: "Nhóm 1: Động Từ Gây Cảm Xúc (Emotion Verbs)",
        formula: "Nguồn GÂY RA cảm xúc → V-ING  |  Người (nhận/cảm thấy cảm xúc đó) → V-ED",
        note: "Ví dụ: `an **exciting** feature` (tính năng gây hào hứng), `a **frustrating** Heisenbug` (con bug gây ức chế), `a **disappointing** benchmark` VS `Users are **satisfied** with the speed`, `Developers felt **overwhelmed**`."
      },
      {
        label: "Nhóm 2: Động Từ Hành Động & Quy Trình (Action / Process Verbs — Cực Hay Thi!)",
        formula: "Tự đang diễn ra / Chủ động → V-ING  |  Bị tác động / Đã xử lý xong → V-ED / V3!",
        note: "Dù danh từ là VẬT 100%, nếu nó ĐƯỢC người ta làm ra/sửa đổi/đính kèm thì BẮT BUỘC dùng **V-ED/V3**! Ví dụ: `the **attached** log file`, `the **proposed** architecture`, `**updated** terms`, `**customized** settings`!"
      },
      {
        label: "Top Tính Từ Đuôi `-ING` Cố Định Trong TOEIC & Java",
        formula: "existing / remaining / leading / upcoming / ongoing / promising / demanding / lasting / missing",
        note: "Vì `exist, remain, last` là Nội động từ (không có bị động!), nên khi đứng trước danh từ làm tính từ chúng LUÔN LUÔN ở dạng **`-ing`**: `**existing** codebase` (code hiện có), `**remaining** tickets` (các ticket còn lại), `**leading** cloud provider` (nhà cung cấp hàng đầu)!"
      },
      {
        label: "Top Tính Từ Đuôi `-ED` Cố Định Trong TOEIC & Java",
        formula: "attached / enclosed / revised / updated / scheduled / designated / experienced / qualified / dedicated",
        note: "Chú ý đặc biệt với NGƯỜI nhưng lại dùng `-ed` không phải vì cảm xúc mà là tính từ cố định: `an **experienced** Java architect` (giàu kinh nghiệm), `**qualified** candidates` (ứng viên đủ năng lực), `**dedicated** engineers` (kỹ sư tận tâm)!"
      }
    ],
    sections: [
      {
        heading: "1. Tại Sao Mẹo 'Người -ed, Vật -ing' Lại Khiến Bạn Mất Điểm Oan Trong TOEIC?",
        paragraphs: [
          "Mẹo 'Người `-ed`, Vật `-ing`' CHỈ ĐÚNG một nửa khi động từ gốc là nhóm **Động từ Cảm xúc** (`interest, bore, confuse, excite, satisfy, disappoint, surprise, exhaust`) — bởi vì vật vô tri không biết 'cảm thấy buồn chán' hay 'cảm thấy hài lòng', nó chỉ có thể *gây ra* sự nhàm chán/hài lòng cho con người mà thôi (và ngược lại, một ông diễn giả nói chuyện nhạt nhẽo cũng hoàn toàn có thể là `a **boring** speaker` — người gây buồn ngủ!).",
          "Thế nhưng 60% câu hỏi Phân từ làm Tính từ trong đề ETS TOEIC và trong code Java lại thuộc nhóm **Động từ Xử lý / Chế tác (`attach, enclose, revise, update, damage, encrypt, customize, schedule`)**! Với nhóm này, con vật/đồ vật/tài liệu là đối tượng **ĐƯỢC đính kèm, ĐƯỢC mã hóa, ĐƯỢC lên lịch** → BẮT BUỘC phải dùng **`V-ed / V3`**!"
        ],
        bullets: [
          "Kiểm chứng bằng câu hỏi 2 giây: Hỏi xem Danh từ `N` **TỰ LÀM `V`** hay **BỊ/ĐƯỢC `V`**?",
          "Ví dụ 1 (`file` + `attach`): Cái file tự đính kèm nó hay *được đính kèm*? → Được đính kèm → `the **attached** file` (tương tự `the **enclosed** invoice` trong thư giấy).",
          "Ví dụ 2 (`threads` + `run`): Các luồng đang *tự chạy* → `**running** threads` | (`requests` + `come in`): Các request đang *tự đổ vào* → `**incoming** requests`.",
          "Ví dụ 3 (`API` + `deprecate`): API tự khai tử hay *bị đánh dấu khai tử*? → Bị đánh dấu → `a **deprecated** API` | (`server` + `dedicate`): Server *được dành riêng* → `a **dedicated** server`."
        ]
      },
      {
        heading: "2. Bộ Đôi 'Nội Động Từ Hóa Tính Từ Luôn Dùng `-ING`' — Kho Điểm Dễ Ăn Nhất Part 5",
        paragraphs: [
          "Kết hợp kiến thức từ Bài G1.1 & G2.3: Bạn đã biết các Nội động từ như `exist` (tồn tại), `remain` (còn lại), `last` (kéo dài), `grow` (tăng trưởng), `emerge` (mới nổi) không bao giờ có dạng bị động. Chính vì thế, khi đứng trước Danh từ làm Tính từ, bạn có thể **LOẠI NGAY LẬP TỨC đáp án `-ed`** của chúng và khoanh thẳng **`-ing`**!",
          "Hãy nhìn những cụm từ này, bạn sẽ thấy chúng xuất hiện trong hầu hết mọi bản Spec kỹ thuật và mọi đề thi TOEIC Reading:"
        ],
        bullets: [
          "`existing` (hiện có, đang tồn tại — CẤM chọn `existed` trước danh từ!): `migrate **existing** customer accounts`, `compatible with **existing** plugins`.",
          "`remaining` (còn lại — CẤM chọn `remained` trước danh từ!): `resolve the **remaining** blocker bugs`, `the **remaining** budget`.",
          "`leading` (dẫn đầu, hàng đầu): `a **leading** FinTech enterprise` | `upcoming` (sắp diễn ra): `the **upcoming** Java 25 release` | `ongoing` (đang diễn ra): `an **ongoing** outage investigation`.",
          "`rising / growing / increasing` (đang gia tăng): `**growing** demand for cloud-native skills`, `**rising** infrastructure costs`.",
          "`demanding` (đòi hỏi khắt khe, áp lực cao) & `promising` (đầy triển vọng) & `overwhelming` (áp đảo): `a **demanding** SLA`, `**promising** benchmark results`, `**overwhelming** traffic`."
        ]
      },
      {
        heading: "3. Khi Nào KHÔNG Chọn Phân Từ (`-ing/-ed`) Mà Phải Chọn Tính Từ Thuần Túy (Original Adjective)?",
        paragraphs: [
          "Đây là bẫy tinh vi ở band điểm 650+ của ETS TOEIC! Giả sử đề cho `a _____ payment system` và 4 đáp án là `(A) rely (B) relied (C) relying (D) reliable`. Nhiều bạn máy móc đi xét chủ động/bị động giữa `relied` và `relying` mà quên mất trong tiếng Anh đã có sẵn một **Tính từ gốc chuẩn chỉ bản chất** là **`reliable` (đáng tin cậy)**!",
          "Quy tắc ưu tiên của người bản xứ: Nếu từ vựng đó đã có một **Tính từ chuyên biệt** (`-able, -ive, -ous, -al`) mang đúng nghĩa mô tả phẩm chất cố hữu của danh từ, hãy ưu tiên chọn Tính từ chuyên biệt đó thay vì ép dùng phân từ `V-ing / V-ed`!"
        ],
        bullets: [
          "Ưu tiên `impressive` (gây ấn tượng mạnh) thay vì `impressing` khi khen kết quả/hiệu năng (`**impressive** throughput`, trong khi người cảm thấy ấn tượng vẫn dùng `impressed`: `The CTO was **impressed**`).",
          "Ưu tiên `reliable` (đáng tin cậy), `accessible` (có thể truy cập), `predictable` (dễ đoán), `scalable` (có thể mở rộng), `competitive` (cạnh tranh) thay vì `-ing/-ed`.",
          "Phân biệt cặp dễ lộn `damaged` (đã bị hư hại thực tế: `**damaged** disk sectors`) vs `damaging` (gây tổn hại: `a **damaging** data breach`); `updated` (đã được cập nhật mới nhất: `**updated** documentation`) vs `updating` (hành động đang cập nhật — hiếm khi đứng làm tính từ đơn trước `documentation`)."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "The **confusing** stack trace from the reactive stream left three developers completely **confused**.",
        vi: "Bản stack trace gây rối rắm từ luồng bất đồng bộ đã khiến ba lập trình viên hoàn toàn bối rối.",
        note: "Stack trace là nguồn *gây rối* (`confusing`), còn các lập trình viên là người *nhận cảm giác bối rối* (`confused`)."
      },
      {
        tag: "Client Email",
        en: "Please review the **attached** architecture diagram and the **revised** API specification.",
        vi: "Vui lòng xem qua sơ đồ kiến trúc được đính kèm và bản đặc tả API đã được chỉnh sửa.",
        note: "Dù `diagram` và `specification` đều là VẬT, nhưng chúng *được đính kèm* và *được chỉnh sửa* nên BẮT BUỘC dùng `-ed` (`attached`, `revised`)!"
      },
      {
        tag: "Senior Java",
        en: "Graceful shutdown ensures all **running** worker threads finish processing **in-flight** messages before the JVM exits.",
        vi: "Cơ chế tắt máy êm ái đảm bảo mọi luồng worker đang chạy xử lý nốt các bản tin đang bay trước khi JVM thoát.",
        note: "Các luồng *đang tự chạy* ở trạng thái hoạt động → dùng phân từ hiện tại `running`."
      },
      {
        tag: "TOEIC Part 5",
        en: "The new SDK must remain backward-compatible with all **existing** client integrations.",
        vi: "Bộ SDK mới phải duy trì tương thích ngược với tất cả các tích hợp khách hàng hiện có.",
        note: "`exist` là nội động từ nên tính từ trước danh từ luôn là `existing` (hiện có — cấm chọn `existed`!)."
      },
      {
        tag: "Daily Standup",
        en: "I will spend this afternoon fixing the two **remaining** edge cases in the tax calculation module.",
        vi: "Tôi sẽ dành chiều nay để sửa nốt hai trường hợp biên còn lại trong phân hệ tính thuế.",
        note: "Tương tự `existing`, `remain` là nội động từ nên tính từ 'còn sót lại' luôn là `remaining`!"
      },
      {
        tag: "Code Review",
        en: "Calling a **deprecated** constructor will trigger compiler warnings in the **updated** JDK.",
        vi: "Việc gọi một hàm khởi tạo đã bị khai tử sẽ kích hoạt cảnh báo trình biên dịch trong bản JDK đã được cập nhật.",
        note: "Cả `constructor` lẫn `JDK` đều nhận tác động hoàn tất từ con người → `deprecated` và `updated`."
      },
      {
        tag: "TOEIC Part 5",
        en: "We are seeking **experienced** and **qualified** Senior Java Engineers for our core trading platform.",
        vi: "Chúng tôi đang tìm kiếm các Kỹ sư Java cấp cao giàu kinh nghiệm và đủ năng lực chuyên môn cho nền tảng giao dịch cốt lõi.",
        note: "Hai tính từ đuôi `-ed` cố định cực hay gặp trong tin tuyển dụng TOEIC: `experienced` và `qualified`."
      },
      {
        tag: "TOEIC Part 7",
        en: "The CTO was deeply **impressed** by the **impressive** latency reduction achieved after switching to gRPC.",
        vi: "Vị CTO đã vô cùng ấn tượng trước mức giảm độ trễ đầy ấn tượng đạt được sau khi chuyển sang gRPC.",
        note: "Bẫy 650+: Người nhận cảm giác ấn tượng dùng `impressed`, nhưng vật gây ấn tượng ưu tiên tính từ gốc `impressive` (thay vì `impressing`)!"
      },
      {
        tag: "Senior Java",
        en: "Unbounded thread pools can cause **overwhelming** memory pressure under sudden traffic bursts.",
        vi: "Các vùng luồng không giới hạn kích thước có thể gây ra áp lực bộ nhớ quá tải dữ dội khi lưu lượng tăng đột ngột.",
        note: "`overwhelming` (quá lớn, mang tính áp đảo) gây tác động lên hệ thống."
      },
      {
        tag: "TOEIC Part 5",
        en: "Only **authorized** personnel may enter the **designated** server maintenance area.",
        vi: "Chỉ những nhân sự được cấp thẩm quyền mới được phép bước vào khu vực bảo trì máy chủ đã được chỉ định.",
        note: "`authorized` (được ủy quyền) và `designated` (được chỉ định riêng) đều mang nghĩa bị động hoàn tất."
      },
      {
        tag: "Client Email",
        en: "All stakeholders were **satisfied** with the **promising** load-test metrics from the canary cluster.",
        vi: "Tất cả các bên liên quan đều hài lòng với các chỉ số kiểm thử tải đầy triển vọng từ cụm canary.",
        note: "Người cảm thấy hài lòng dùng `satisfied` (+ `with`); kết quả mang lại hứa hẹn dùng `promising`."
      },
      {
        tag: "Daily Standup",
        en: "Tracing that intermittent race condition across three Kafka topics was mentally **exhausting**!",
        vi: "Việc lần theo lỗi tranh chấp luồng chập chờn đó xuyên qua ba Kafka topic thực sự vắt kiệt sức lực tinh thần!",
        note: "Chủ ngữ của `was` là cụm danh động từ `Tracing...` (công việc gây mệt mỏi cho mình) → dùng `exhausting`."
      },
      {
        tag: "Code Review",
        en: "Please sanitize all **incoming** query parameters before building dynamic Criteria queries.",
        vi: "Vui lòng làm sạch toàn bộ các tham số truy vấn đầu vào trước khi xây dựng câu truy vấn Criteria động.",
        note: "`incoming` (đang đi vào) đối lập với `outgoing` (đang đi ra: `outgoing webhooks`)."
      },
      {
        tag: "TOEIC Part 5",
        en: "CloudVault has emerged as a **leading** provider of **encrypted** object storage in Asia-Pacific.",
        vi: "CloudVault đã nổi lên như một nhà cung cấp hàng đầu về lưu trữ đối tượng được mã hóa tại khu vực Châu Á - Thái Bình Dương.",
        note: "`leading` (dẫn đầu - chủ động) vs `encrypted` (được mã hóa - bị động)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Please complete the **enclosed** reimbursement form and return it prior to the **scheduled** audit date.",
        vi: "Vui lòng điền vào biểu mẫu hoàn ứng được gửi kèm và nộp lại trước ngày kiểm toán đã được lên lịch.",
        note: "`enclosed` (được bỏ kèm trong phong bì/email) và `scheduled` (đã được lên lịch) là 2 từ vựng tần suất siêu cao trong TOEIC."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "I am very interesting in Distributed Systems and Event Sourcing.",
          fix: "I am very **interested** in Distributed Systems and Event Sourcing.",
          why: "Lỗi sơ đẳng kinh điển khi phỏng vấn tiếng Anh! Viết `I am interesting` nghĩa là 'Bản thân tôi là một gã rất thú vị'! Để nói 'Tôi cảm thấy quan tâm/hứng thú với...', phải dùng **`interested in`**."
        },
        {
          bug: "Please check the attaching log file for the full stack trace.",
          fix: "Please check the **attached** log file for the full stack trace.",
          why: "Hậu quả của mẹo học vẹt 'vật dùng -ing'! File log không tự đi đính kèm ai cả, mà nó **được đính kèm** bởi người gửi → bắt buộc là **`the attached log file`**."
        },
        {
          bug: "We must ensure compatibility with existed database tables.",
          fix: "We must ensure compatibility with **existing** database tables.",
          why: "`exist` là Nội động từ không có bị động, nên không tồn tại tính từ `existed` đứng trước danh từ! 'Các bảng hiện có (đang tồn tại)' luôn luôn là **`existing` database tables**."
        },
        {
          bug: "Fixing legacy Perl scripts all day makes me exhausting.",
          fix: "Fixing legacy Perl scripts all day makes me **exhausted**.",
          why: "Trong mẫu `make + O (me) + Adj`, tính từ bổ nghĩa cho `me` (người bị vắt kiệt sức) nên phải dùng **`exhausted`** (còn bản thân công việc sửa script mới là `exhausting`)."
        },
        {
          bug: "The new caching layer achieved very impressing benchmark numbers.",
          fix: "The new caching layer achieved very **impressive** benchmark numbers.",
          why: "Trong tiếng Anh chuẩn, để mô tả cái gì gây ấn tượng tốt đẹp, người ta dùng tính từ gốc chuyên biệt **`impressive`** chứ không dùng `impressing`."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây phá câu Phân từ trước Danh từ `the _____ [Noun]` trong Part 5: Bỏ ngay mẹo 'người/vật', hãy đặt câu hỏi **'Danh từ này TỰ GÂY RA / ĐANG CHẠY (`-ing`) hay ĐƯỢC LÀM XONG BỞI NGƯỜI KHÁC (`-ed`)?'**. Ví dụ: `revised contract / attached file / updated policy / customized plan / scheduled flight` → Tất cả đều ĐƯỢC con người làm ra → khoanh **`-ed`**!",
      "Mẹo 1 giây 'Thấy `existing / remaining / leading / upcoming` là khoanh!': Nếu 4 đáp án là biến thể của các nội động từ `exist` hoặc `remain` đứng ngay trước danh từ (`all _____ orders`, `our _____ clients`), hãy nhắm mắt khoanh ngay **`existing`** và **`remaining`**, đúng 100%!",
      "Mẹo ưu tiên Tính từ gốc (`-ive, -able, -ous`): Khi 4 đáp án có cả `-ing`, `-ed` LẪN một Tính từ gốc như `impressive, reliable, competitive, accessible, protective` đứng trước danh từ chỉ vật → Kiểm tra nghĩa của Tính từ gốc trước tiên vì 85% trường hợp ETS chọn Tính từ gốc đó làm đáp án đúng!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh (chú ý phân biệt tính từ gây cảm xúc -ing và nhận cảm xúc -ed):",
        chunks: [
          "several junior developers",
          "The confusing",
          "completely baffled.",
          "stack trace",
          "left"
        ],
        answer: "The confusing stack trace left several junior developers completely baffled.",
        vi: "Bản stack trace gây khó hiểu đã khiến một vài lập trình viên junior hoàn toàn ngơ ngác.",
      },
      fillBlank: {
        sentence: "Before running the migration, verify that the schema changes do not break any _____ microservices in production. (Từ gốc: exist — điền tính từ phân từ 'hiện có')",
        answer: "existing",
        accepted: ["existing"],
        hint: "'exist' là nội động từ nên khi làm tính từ trước danh từ luôn mang đuôi '-ing'.",
        explain: "Để bổ nghĩa cho danh từ `microservices` mang nghĩa 'các microservice hiện đang tồn tại/hiện có', từ gốc `exist` (nội động từ) luôn dùng dạng Phân từ Hiện tại **`existing`** (cấm dùng `existed`)."
      }
    },
    quiz: [
      {
        q: "Please review the _____ SLA terms carefully and return a signed copy to our legal team by Wednesday.",
        options: [
          "A. revise",
          "B. revising",
          "C. revised",
          "D. revision"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. revised**. Cụm danh từ `the _____ SLA terms`: các điều khoản SLA không tự chỉnh sửa mà **đã được chỉnh sửa/cập nhật** bởi bộ phận pháp chế → mang nghĩa bị động hoàn tất nên dùng Phân từ Quá khứ **`revised`** làm tính từ (`the revised SLA terms` = các điều khoản SLA đã sửa đổi). Loại A (động từ), B (`revising` mang nghĩa chủ động đang sửa), D (`revision` là danh từ, không dùng khi đã có tính từ phân từ chuẩn `revised`)."
      },
      {
        q: "After resolving three critical blockers this morning, our sprint team can now focus on the _____ user stories in the backlog.",
        options: [
          "A. remain",
          "B. remained",
          "C. remainder",
          "D. remaining"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. remaining**. Đứng sau mạo từ `the` và trước cụm danh từ `user stories` cần một tính từ mang nghĩa 'còn lại'. Vì `remain` là Nội động từ (không có bị động!), nên dạng tính từ đứng trước danh từ của nó LUÔN LUÔN là **`remaining`** (loại ngay B `remained`!). Loại A (động từ) và C (`remainder` là danh từ dùng trong cụm `the remainder of the stories`)."
      },
      {
        q: "Enterprise clients were _____ when the new vector-search engine delivered query results in under ten milliseconds.",
        options: [
          "A. thrill",
          "B. thrilling",
          "C. thrilled",
          "D. thriller"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. thrilled**. Chủ ngữ là `Enterprise clients` (khách hàng — người tiếp nhận cảm xúc), đứng sau động từ `were` nên cần tính từ phân từ đuôi **`-ed`** diễn tả cảm xúc vui mừng/phấn khích trước kết quả (`were thrilled`). Loại B (`thrilling` dùng cho nguồn gây phấn khích như `thrilling performance`), loại A (động từ/danh từ), loại D (danh từ phim/truyện giật gân)."
      }
    ]
  }
});
