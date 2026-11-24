/* JavaEng 600+ Academy — Học phần G3: Ngữ Pháp Cốt Lõi TOEIC 600+ (G3_1 -> G3_6)
 * Biên soạn chuyên sâu dành riêng cho Senior Java Developer & Thí sinh mục tiêu TOEIC 600–750+
 */

window.LESSON_DETAILS = window.LESSON_DETAILS || {};

Object.assign(window.LESSON_DETAILS, {
  /* ==========================================================================
   * BÀI G3_1: SỰ HÒA HỢP CHỦ NGỮ – ĐỘNG TỪ & BẪY CHỦ NGỮ DÀI
   * ========================================================================== */
  G3_1: {
    duration: "40 phút",
    toeicTarget: "Bứt phá TOEIC 600–700+ (Part 5 & Part 6 — Phá bẫy chủ ngữ dài trong 5 giây)",
    javaContext: "Viết Architecture Docs, báo cáo Metric vận hành, Release Notes và PR Comment chuẩn xác không sai lỗi chia động từ cơ bản",
    teacherIntro: "Chào các anh em Senior Java! Trong quá trình chấm bài viết và kèm cặp hàng trăm lập trình viên thi TOEIC, tôi phát hiện một nghịch lý rất thú vị: anh em hiểu rất nhanh các cấu trúc phức tạp, nhưng lại hay mất điểm oan ở câu chia động từ số ít/số nhiều trong Part 5 và khi viết email cho khách hàng. Lý do không phải vì bạn không biết 'he runs / they run', mà vì đề thi ETS cố tình kẹp một chuỗi cụm giới từ dài ngoằng (of, in, with, across, along with...) vào giữa Chủ ngữ thật và Động từ chính để đánh lừa thị giác. Hôm nay, chúng ta sẽ rèn kỹ năng 'parse AST' ngay bằng mắt thường: gạch bỏ toàn bộ thành phần nhiễu trong 3 giây để bắt trúng Head Noun (Danh từ hạt nhân) và lấy trọn điểm tuyệt đối dạng bài này.",
    javaAnalogy: {
      title: "Type-Checking Biểu Thức Gốc Trong Trình Biên Dịch javac",
      body: "Hãy hình dung câu tiếng Anh giống biểu thức chuỗi hàm trong Java: `cluster.getRegions().get(0).getHealthStatus()`. Dù ở giữa có bao nhiêu tập hợp số nhiều (`Regions`, `Nodes`, `Threads`), trình biên dịch `javac` chỉ nhìn vào kiểu trả về của đối tượng gốc quyết định hành vi thực thi. Trong tiếng Anh, cấu trúc `The latency [of API requests] [across three regional clusters] IS high` hoạt động y hệt: `requests` và `clusters` chỉ là tham số phụ nằm trong ngoặc giới từ, còn biến gốc đứng đầu là `The latency` (số ít) nên động từ bắt buộc phải là `IS`!"
    },
    objectives: [
      "Áp dụng thuần thục kỹ thuật 'Gạch bỏ cụm giới từ nhiễu' (Prepositional Phrase Stripping) để tìm đúng Chủ ngữ hạt nhân (Head Noun) trong vòng 3–5 giây.",
      "Phân biệt rạch ròi các cặp cấu trúc dễ nhầm nhất trong TOEIC 600+: The number of vs A number of, Either...or / Neither...nor, Each / Every và nhóm từ đi kèm (along with, as well as).",
      "Xử lý chuẩn xác các danh từ đặc biệt ngành IT & Thương mại (data, criteria, series, means, equipment, feedback, statistics) khi viết báo cáo kỹ thuật và giải đề Part 5–6."
    ],
    formulaCards: [
      {
        label: "Quy tắc 1 • Bóc tách Cụm giới từ nhiễu",
        formula: "N1 (Chủ ngữ thật) + [of / in / on / at / with / for / from / across + N2] + V (chia theo N1)",
        note: "Mọi danh từ nằm ngay sau giới từ KHÔNG BAO GIỜ làm chủ ngữ của câu. Gặp giới từ -> mở ngoặc vuông bỏ qua đến ngay trước động từ chính!"
      },
      {
        label: "Quy tắc 2 • Cặp đôi kinh điển Number",
        formula: "The number of + N(số nhiều) + V(số ít)  |  A number of + N(số nhiều) + V(số nhiều)",
        note: "'The number of' = Con số thống kê (1 con số -> số ít). 'A number of' = Nhiều / Một số lượng (= many -> số nhiều)."
      },
      {
        label: "Quy tắc 3 • Nhóm từ đi kèm & Liên từ tương quan",
        formula: "S1 + [along with / together with / as well as + S2] + V(theo S1)  |  Either/Neither S1 or/nor S2 + V(theo S2)",
        note: "Cụm 'along with / as well as' chỉ là phần phụ thêm nên chia theo S1. Riêng 'or / nor / but also' chia theo chủ ngữ đứng GẦN ĐỘNG TỪ NHẤT (S2)."
      },
      {
        label: "Quy tắc 4 • Nhóm luôn chia Số Ít tuyệt đối",
        formula: "Each / Every / Anyone / Everyone / Someone / Nobody / Nothing / V-ing / To-V + V(số ít)",
        note: "Dù phía sau là 'Each of the microservices' (có microservices số nhiều), chủ ngữ thật vẫn là 'Each' (mỗi một) -> Động từ luôn chia số ít!"
      }
    ],
    sections: [
      {
        heading: "1. Kỹ thuật 'Prepositional Stripping' — Phá bẫy Chủ ngữ dài 20 từ của ETS",
        paragraphs: [
          "Trong đề thi TOEIC mức 600–750+, người ra đề rất hiếm khi đặt Chủ ngữ đứng sát cạnh Động từ. Thay vào đó, họ chèn từ 1 đến 3 cụm giới từ hoặc mệnh đề rút gọn vào giữa nhằm tạo hiệu ứng 'Proximity Blindness' (mù khoảng cách — mắt thí sinh bị hút vào danh từ đứng ngay sát chỗ trống).",
          "Cách hóa giải cực kỳ cơ học: Từ đầu câu (hoặc đầu mệnh đề), bạn đọc đến danh từ đầu tiên đứng TRƯỚC giới từ đầu tiên (`of, in, to, for, with, from, between, among, regarding, including`). Đó chính là Head Noun! Toàn bộ phần từ giới từ đầu tiên cho tới trước động từ chính chỉ là modifier bổ nghĩa."
        ],
        bullets: [
          "Mô hình bẫy số ít giả số nhiều: **The configuration** [of all Kafka brokers in both production environments] **requires** manual verification. (Chia theo `configuration` -> `requires`, tuyệt đối không nhìn `environments`!).",
          "Mô hình bẫy số nhiều giả số ít: **Several vulnerabilities** [in the third-party authentication library] **were patched** last night. (Chia theo `vulnerabilities` -> `were patched`, không nhìn `library`!).",
          "Chủ ngữ là Danh động từ (V-ing) hoặc Cụm To-V: **Refactoring legacy monolith modules** without integration tests **poses** a high risk. (Hành động `Refactoring` là 1 việc -> chia số ít `poses`, đừng bị `modules` hay `tests` đánh lừa!).",
          "Giới từ ẩn dạng V-ing (`including`, `regarding`, `concerning`): **The detailed report** [including benchmark metrics from five cloud regions] **has been uploaded**. (`including` đóng vai trò giới từ -> chia theo `report`!)."
        ]
      },
      {
        heading: "2. Phân xử các cặp cấu trúc 'Sinh Tử' trong TOEIC Part 5 & Part 6",
        paragraphs: [
          "Ngoài cụm giới từ, ETS cực kỳ ưa chuộng kiểm tra các cấu trúc định lượng (Quantifiers) vì chỉ cần thay mạo từ `a` thành `the`, hoặc đổi `along with` thành `neither...nor`, quy tắc chia động từ lập tức đảo chiều 180 độ.",
          "Khi viết tài liệu thiết kế hệ thống hoặc báo cáo SLA hàng tuần, nắm vững nhóm này giúp câu văn của bạn toát lên sự chuẩn xác tuyệt đối của một Principal Engineer."
        ],
        bullets: [
          "**The number of + N(số nhiều) + V(số ít)**: Nhấn mạnh vào *con số thống kê* (VD: *The number of active threads **is** 250*). Mẹo nhớ: **T**he = **T**hống kê 1 con số -> Số ít.",
          "**A number of + N(số nhiều) + V(số nhiều)**: Bằng nghĩa với *Many / Several* (VD: *A number of active threads **are** blocked*). Mẹo nhớ: **A** number of = **A** lot of -> Số nhiều.",
          "**Phân số / Phần trăm / Most / All / Some / Half + of + the + N**: Động từ KHÔNG chia theo chữ `most/half/50%`, mà chia theo danh từ `N` phía sau `of`! Ví dụ: *Fifty percent of the **memory** **is** free* (memory không đếm được -> số ít), nhưng *Fifty percent of the **servers** **are** idle* (servers số nhiều -> số nhiều).",
          "**Nhóm đi kèm giữ nguyên ngôi S1**: `along with`, `together with`, `accompanied by`, `as well as`, `in addition to`, `no less than`. Ví dụ: *The Tech Lead, **along with** three backend developers, **is** attending the architecture review.*",
          "**Nhóm tương quan chia theo ngôi gần nhất S2**: `Either A or B`, `Neither A nor B`, `Not only A but also B`. Động từ nhìn thẳng vào `B` để chia!"
        ]
      },
      {
        heading: "3. Đại từ bất định, Each/Every & Danh từ đặc thù ngành CNTT – Kinh doanh",
        paragraphs: [
          "Một bẫy kinh điển khác của người Việt là dịch nghĩa sang tiếng Việt thấy 'mọi người' (everyone) hoặc 'mỗi máy chủ và mỗi container' (every server and every container) có vẻ là nhiều đối tượng nên chia số nhiều. Trong ngữ pháp tiếng Anh, các từ này gom từng cá thể đơn lẻ để xét riêng nên LUÔN chia số ít.",
          "Đồng thời, bạn cần thuộc nằm lòng bảng danh từ 'trông số nhiều nhưng là số ít' và danh từ không đếm được thường gặp nhất trong cả đề TOEIC lẫn tài liệu Java."
        ],
        bullets: [
          "**Each / Every luôn kéo câu về Số Ít**: *Each endpoint **has** rate limiting*; *Each of the microservices **runs** in its own pod*; *Every build and every deployment **is** logged automatically*.",
          "**12 Đại từ bất định luôn chia Số Ít**: *everyone, everybody, everything, someone, somebody, something, anyone, anybody, anything, no one, nobody, nothing*. (VD: *Everyone on the DevOps and QA teams **has** access to Grafana*).",
          "**Danh từ kết thúc bằng -s nhưng là SỐ ÍT**: Tên môn học/lĩnh vực (*economics, statistics [ngành thống kê], physics, mathematics*), chữ *news* (tin tức), và các từ bất biến hình thức *a means* (một phương thức), *a series* (một chuỗi), *a species*.",
          "**Danh từ KHÔNG ĐẾM ĐƯỢC cấm thêm -s và luôn chia SỐ ÍT**: *equipment, software, hardware, information, feedback, advice, furniture, luggage, baggage, research, progress, traffic, maintenance*. (Muốn đếm phải dùng *a piece of advice / software*).",
          "**Thời gian, Tiền bạc, Khoảng cách làm một đơn vị tổng thể**: *Ten seconds **is** too long for an API timeout*; *Fifty thousand dollars **has been** allocated to cloud infrastructure*."
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "**The quality** of the components supplied by our overseas vendors **has improved** noticeably this year.",
        vi: "Chất lượng của các linh kiện được cung cấp bởi các nhà cung cấp nước ngoài của chúng tôi đã cải thiện đáng kể trong năm nay.",
        note: "Gạch bỏ cụm giới từ & rút gọn [of the components supplied by our overseas vendors] -> Chủ ngữ thật là 'The quality' (số ít) -> dùng 'has improved'."
      },
      {
        tag: "System Design",
        en: "**The number of** concurrent WebSocket connections per gateway node **exceeds** fifty thousand during peak hours.",
        vi: "Con số kết nối WebSocket đồng thời trên mỗi node gateway vượt quá 50.000 trong giờ cao điểm.",
        note: "'The number of + N số nhiều' chỉ một con số đo lường -> Động từ chia số ít 'exceeds'."
      },
      {
        tag: "Senior Java",
        en: "**A growing number of** enterprise Java teams **are migrating** from Java 11 to Java 21 to leverage Virtual Threads.",
        vi: "Ngày càng nhiều đội ngũ Java doanh nghiệp đang chuyển đổi từ Java 11 lên Java 21 để tận dụng Virtual Threads.",
        note: "'A (growing) number of' = Many -> Động từ chia số nhiều 'are migrating'."
      },
      {
        tag: "TOEIC Part 5",
        en: "The Chief Executive Officer, **along with** two board members, **plans** to inspect the new data center tomorrow.",
        vi: "Giám đốc Điều hành, cùng với hai thành viên hội đồng quản trị, dự định kiểm tra trung tâm dữ liệu mới vào ngày mai.",
        note: "Cụm ', along with two board members,' là thành phần phụ -> Chia động từ theo 'The Chief Executive Officer' (số ít) -> 'plans'."
      },
      {
        tag: "Code Review",
        en: "**Neither** the controller layer **nor** the downstream repositories **validate** null elements inside the request list.",
        vi: "Cả tầng controller lẫn các repository phía dưới đều không kiểm tra phần tử null bên trong danh sách request.",
        note: "Cấu trúc 'Neither A nor B' chia theo chủ ngữ gần nhất B ('the downstream repositories' - số nhiều) -> dùng 'validate'."
      },
      {
        tag: "TOEIC Part 6",
        en: "**Each of** the shortlisted candidates **is required** to complete a live system-design assessment before Friday.",
        vi: "Mỗi ứng viên trong danh sách rút gọn đều được yêu cầu hoàn thành bài đánh giá thiết kế hệ thống trực tiếp trước thứ Sáu.",
        note: "Đừng để 'candidates' đánh lừa! Chủ ngữ hạt nhân là 'Each' -> Luôn chia số ít 'is required'."
      },
      {
        tag: "Senior Java",
        en: "**Serializing** deeply nested Hibernate entities directly into JSON responses **causes** the infamous N+1 query issue.",
        vi: "Việc tuần tự hóa các thực thể Hibernate lồng sâu trực tiếp sang JSON response gây ra lỗi truy vấn N+1 khét tiếng.",
        note: "Chủ ngữ là Danh động từ 'Serializing...' (việc tuần tự hóa) -> Luôn chia số ít 'causes', bỏ qua 'entities' và 'responses'."
      },
      {
        tag: "TOEIC Part 5",
        en: "All new **equipment** installed in the server room **complies** with international fire-safety regulations.",
        vi: "Toàn bộ thiết bị mới được lắp đặt trong phòng máy chủ đều tuân thủ các quy định an toàn phòng cháy quốc tế.",
        note: "'Equipment' là danh từ KHÔNG đếm được -> Dù có chữ 'All' phía trước vẫn luôn chia số ít 'complies'!"
      },
      {
        tag: "Client Email",
        en: "Your **feedback** regarding the beta payment dashboard **has been shared** with our product engineering team.",
        vi: "Phản hồi của ngài liên quan đến bảng điều khiển thanh toán bản beta đã được chia sẻ với đội ngũ kỹ sư sản phẩm của chúng tôi.",
        note: "'Feedback' không đếm được (không có feedbacks) + gạch bỏ [regarding the beta payment dashboard] -> dùng 'has been shared'."
      },
      {
        tag: "System Design",
        en: "Nearly **eighty percent of** the database read traffic **is served** directly from our Redis cluster.",
        vi: "Gần 80% lưu lượng đọc cơ sở dữ liệu được phục vụ trực tiếp từ cụm Redis của chúng tôi.",
        note: "Phần trăm + of + N: chia động từ theo N ('traffic' là danh từ không đếm được) -> chia số ít 'is served'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Nearly **eighty percent of** the surveyed customers **prefer** biometric login over SMS one-time passwords.",
        vi: "Gần 80% khách hàng được khảo sát thích đăng nhập sinh trắc học hơn mật khẩu dùng một lần qua SMS.",
        note: "Đối chiếu với câu trên: ở đây sau 'of' là 'customers' (danh từ đếm được số nhiều) -> chia số nhiều 'prefer'."
      },
      {
        tag: "Senior Java",
        en: "**A series of** integration tests **runs** automatically whenever a pull request targets the main branch.",
        vi: "Một chuỗi các bài kiểm tra tích hợp chạy tự động bất cứ khi nào có pull request nhắm vào nhánh main.",
        note: "'A series' (một chuỗi) mặc dù có chữ -s ở cuối nhưng có mạo từ 'A' chỉ 1 chuỗi duy nhất -> chia số ít 'runs'."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Everyone** attending the annual cybersecurity summit **needs** to wear an identification badge at all times.",
        vi: "Mọi người tham dự hội nghị thượng đỉnh an ninh mạng thường niên đều cần đeo thẻ định danh mọi lúc.",
        note: "Đại từ bất định 'Everyone' luôn chia động từ số ít ('needs')."
      },
      {
        tag: "System Design",
        en: "**Two hundred milliseconds** **is** the maximum acceptable p99 latency defined in our service-level agreement.",
        vi: "Hai trăm mili-giây là độ trễ p99 tối đa có thể chấp nhận được quy định trong cam kết SLA của chúng ta.",
        note: "Khoảng thời gian / đo lường ('Two hundred milliseconds') được xét như 1 ngưỡng đơn vị duy nhất -> chia số ít 'is'."
      },
      {
        tag: "TOEIC Part 6",
        en: "The revised **criteria** for promoting senior engineers **have been published** on the internal wiki.",
        vi: "Các tiêu chí sửa đổi để thăng cấp kỹ sư cao cấp đã được công bố trên trang wiki nội bộ.",
        note: "Danh từ gốc Hy Lạp/Latin: 'criterion' là số ít, còn 'criteria' là SỐ NHIỀU -> chia 'have been published'."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "The list of deprecated API endpoints are documented in Confluence.",
          fix: "The list of deprecated API endpoints is documented in Confluence.",
          why: "Bị danh từ đứng gần 'endpoints' (số nhiều) đánh lừa. Chủ ngữ hạt nhân trước 'of' là 'The list' (1 danh sách -> số ít)."
        },
        {
          bug: "The number of production bugs have decreased by 40% this sprint.",
          fix: "The number of production bugs has decreased by 40% this sprint.",
          why: "Nhầm 'The number of' (con số -> số ít) với 'A number of' (nhiều -> số nhiều). Bẫy kinh điển xuất hiện liên tục trong Part 5."
        },
        {
          bug: "All the enterprise softwares on this server are up to date.",
          fix: "All the enterprise software on this server is up to date.",
          why: "'Software' (cũng như equipment, information, feedback, advice) là danh từ KHÔNG đếm được: cấm thêm -s và luôn đi với động từ số ít 'is'."
        },
        {
          bug: "Our lead architect, together with two SREs, were investigating the outage.",
          fix: "Our lead architect, together with two SREs, was investigating the outage.",
          why: "'together with / along with / as well as' không phải là phép cộng 'and'. Chủ ngữ vẫn chỉ là 'Our lead architect' (số ít)."
        },
        {
          bug: "Handling millions of Kafka events per second require careful tuning.",
          fix: "Handling millions of Kafka events per second requires careful tuning.",
          why: "Khi V-ing ('Handling...') làm chủ ngữ chỉ một việc/hành động, động từ chính bắt buộc chia số ít ('requires')."
        }
      ]
    },
    toeicTips: [
      "Mẹo 5 giây quét đáp án: Hễ thấy 4 phương án A-B-C-D chỉ khác nhau số ít/số nhiều (VD: is/are, has/have, provides/provide), TUYỆT ĐỐI không dịch nghĩa vội! Nhìn ngược lên đầu mệnh đề, đóng ngoặc vuông mọi cụm bắt đầu bằng giới từ (of/in/for/with/to) để tóm gọn Chủ ngữ thật trong 3 giây.",
      "Cảnh giác cao độ với dấu phẩy kép `, ... ,`: Trong câu `S, [along with / including / accompanied by ...], _____`, toàn bộ phần nằm giữa 2 dấu phẩy là thành phần chú thích (có thể xóa trắng mà câu vẫn đúng ngữ pháp). Hãy nhảy qua 2 dấu phẩy nối thẳng S với chỗ trống!",
      "Học thuộc 6 danh từ không đếm được 'vàng' của ETS: `equipment, software, information, feedback, advice, maintenance` -> Luôn đi với động từ có `-s` / `is` / `has` / `was`, dù đứng trước chúng là `all`, `most` hay `some`."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "in the payment cluster",
          "has dropped",
          "The number of",
          "significantly.",
          "failed transactions"
        ],
        answer: "The number of failed transactions in the payment cluster has dropped significantly.",
        vi: "Số lượng các giao dịch thất bại trong cụm thanh toán đã giảm đáng kể."
      },
      fillBlank: {
        sentence: "Neither the primary database nor the read replicas _____ responding to health checks.",
        answer: "are",
        accepted: ["are", "were"],
        hint: "Cấu trúc Neither A nor B chia động từ theo danh từ gần chỗ trống nhất (replicas).",
        explain: "Với 'Neither... nor...', động từ chia theo chủ ngữ đứng gần nhất là 'the read replicas' (số nhiều), nên điền 'are' (hoặc 'were')."
      }
    },
    quiz: [
      {
        q: "The comprehensive security audit of our cloud microservices and third-party APIs _____ scheduled for next Monday.",
        options: ["are", "is", "were", "have"],
        answer: 1,
        explain: "Đáp án đúng là 'is' (B). Cụm 'of our cloud microservices and third-party APIs' là cụm giới từ bổ nghĩa. Chủ ngữ hạt nhân là 'The comprehensive security audit' (số ít) + mốc thời gian 'next Monday' (hiện tại/tương lai) -> loại 'are/have' (số nhiều) và 'were' (quá khứ số nhiều)."
      },
      {
        q: "Every microservice and background worker in our Kubernetes namespaces _____ structured JSON logs to Elasticsearch.",
        options: ["emits", "emit", "emitting", "are emitting"],
        answer: 0,
        explain: "Đáp án đúng là 'emits' (A). Dù có liên từ 'and' nối hai danh từ, khi có chữ 'Every' (hoặc 'Each') đứng đầu bổ nghĩa, toàn bộ chủ ngữ luôn được quy về ngôi thứ 3 số ít -> động từ thêm -s ('emits'). Loại B, D (số nhiều) và C (thiếu trợ động từ to-be nên không làm động từ chính được)."
      },
      {
        q: "A number of experienced Java engineers _____ expressed strong interest in leading the platform modernization initiative.",
        options: ["has", "is", "have", "was"],
        answer: 2,
        explain: "Đáp án đúng là 'have' (C). Cấu trúc 'A number of + N số nhiều' mang nghĩa 'Nhiều...' -> động từ luôn chia số nhiều. Phía sau có phân từ quá khứ chủ động 'expressed + O (strong interest)' nên cần trợ động từ thì Hiện tại hoàn thành số nhiều là 'have' ('have expressed')."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G3_2: CẤP SO SÁNH & NHẤN MẠNH MỨC ĐỘ (MUCH / EVEN / BY FAR)
   * ========================================================================== */
  G3_2: {
    duration: "40 phút",
    toeicTarget: "Bứt phá TOEIC 600–750+ (Part 5 & Part 6 — Trạng từ nhấn mạnh & So sánh kép)",
    javaContext: "Đánh giá Benchmark JMH, phân tích Trade-off (Latency, Throughput, Cost) trong System Design & Họp Hội đồng Kiến trúc (ARB)",
    teacherIntro: "Ở vị trí Senior Java hay Tech Lead, công việc của bạn không còn chỉ là viết code chạy được, mà là liên tục đặt các giải pháp lên bàn cân: Kafka hay RabbitMQ throughput cao hơn bao nhiêu lần? Dùng GraalVM Native Image giảm RAM đáng kể thế nào so với JVM truyền thống? Trớ trêu thay, rất nhiều anh em Dev khi thuyết trình vẫn buột miệng nói 'very faster' hay 'more cheaper', hoặc so sánh khập khiễng 'The latency of Redis is lower than Postgres' (so sánh độ trễ với... cái database!). Bài học này sẽ trang bị cho bạn bộ công thức so sánh sắc bén như benchmark JMH, đồng thời giúp bạn lượm sạch các câu bẫy nâng cao về cấp so sánh trong TOEIC 600–750+.",
    javaAnalogy: {
      title: "Interface Comparator<T> & Hệ Số Độ Lệch Trong Benchmark JMH",
      body: "Trong Java, `Comparator.compare(a, b)` chỉ cho biết `a == b` (So sánh bằng `as...as`) hay `a > b` (So sánh hơn `-er / more...than`). Nhưng trong kiến trúc thực tế, biết `a > b` là chưa đủ — ta cần biết độ lệch lớn cỡ nào: nhanh hơn 2% (`slightly faster`) hay nhanh hơn vượt trội (`much / far / significantly faster`)! Và đặc biệt, giống như Generics `Comparator<Latency>` bắt buộc cả 2 tham số truyền vào phải cùng kiểu `Latency`, trong tiếng Anh bạn phải dùng đại từ thay thế `that of` (số ít) hoặc `those of` (số nhiều) để hai vế so sánh hoàn toàn đồng nhất kiểu dữ liệu!"
    },
    objectives: [
      "Sử dụng chuẩn xác 3 cấp so sánh cơ bản (Bằng, Hơn, Nhất) cùng các cấu trúc so sánh gấp bội (twice as...as) khi trình bày số liệu kỹ thuật và thương mại.",
      "Làm chủ nhóm trạng từ nhấn mạnh trước So sánh hơn (much, far, even, significantly, considerably) và trước So sánh nhất (by far, easily).",
      "Chinh phục 3 cấu trúc điểm cao TOEIC 650+: So sánh kép (The more..., the more...), Ngoại lệ 'the + so sánh hơn' với 'of the two', và Đồng nhất đối tượng so sánh bằng 'that of / those of'."
    ],
    formulaCards: [
      {
        label: "Công thức 1 • So sánh bằng & Gấp bội",
        formula: "S + V + [twice / three times / half] + as + Adj / Adv (nguyên gốc) + as + N/Pronoun",
        note: "Dùng Adj nếu đi với to-be/linking verb; dùng Adv nếu bổ nghĩa cho động từ thường! Giữa 'as...as' luôn là từ nguyên gốc (không thêm -er/more)."
      },
      {
        label: "Công thức 2 • Nhấn mạnh So sánh hơn (Top bẫy Part 5!)",
        formula: "[much / far / even / a lot / significantly / considerably / slightly] + Adj-er / more Adj + than",
        note: "TUYỆT ĐỐI CẤM dùng 'very', 'so', 'too', 'quite' đứng trước so sánh hơn! Thấy khoảng trống ngay trước 'more / -er', chọn ngay nhóm từ này."
      },
      {
        label: "Công thức 3 • So sánh kép (Càng... càng...)",
        formula: "The + [Adj-er / more Adj / more N] + S1 + V1, the + [Adj-er / more Adj / more N] + S2 + V2",
        note: "Diễn tả tương quan tỷ lệ thuận/nghịch (giống Big-O). Lưu ý tính từ ngắn không thêm 'more' (VD: The smaller the image, the faster the deployment)."
      },
      {
        label: "Công thức 4 • Hai bẫy nâng cao 700+ (Of the two & That of)",
        formula: "Of the two + N(số nhiều), S + be + THE + So sánh hơn  |  The N1 of A + be + So sánh hơn + than THAT/THOSE of B",
        note: "Chỉ có 2 đối tượng ('of the two') -> dùng 'THE + so sánh hơn' (không dùng so sánh nhất!). Dùng 'that of' thay danh từ số ít, 'those of' thay danh từ số nhiều."
      }
    ],
    sections: [
      {
        heading: "1. Quy tắc Cốt lõi: Chọn Tính từ hay Trạng từ & Bảng Bất Quy Tắc Sống Còn",
        paragraphs: [
          "Lỗi cơ bản nhất trong phòng thi TOEIC là khi thấy `as _____ as` hoặc `more _____ than`, thí sinh lập tức chọn Tính từ theo quán tính. Hãy nhớ: từ khóa so sánh (`as...as`, `more...than`) hoàn toàn 'trong suốt' về mặt từ loại — bạn phải che chúng đi và nhìn vào ĐỘNG TỪ đứng trước!",
          "Nếu động từ là `be / become / remain / seem / feel` -> chọn **Tính từ (Adj)**. Nếu động từ là động từ thường chỉ hành động (`process, scale, respond, operate`) -> bắt buộc chọn **Trạng từ (Adv)**!"
        ],
        bullets: [
          "Phép thử che từ khóa: *The new parser runs [as _____ as] the C++ implementation* -> Che `as...as` còn `runs _____` -> Động từ thường `runs` cần Trạng từ **efficiently** (không chọn *efficient*!).",
          "Tính từ ngắn (1 âm tiết & 2 âm tiết tận cùng bằng `-y, -ow, -er, -le`): thêm `-er / -est` (*fast -> faster -> fastest; easy -> easier -> easiest; simple -> simpler -> simplest*). Lưu ý: các tính từ 2 âm tiết đuôi `-ed, -ing, -ful, -less, -ous, -ive` luôn dùng `more / most` (*more scalable, more robust, more secure*).",
          "**5 Cặp bất quy tắc bắt buộc thuộc lòng**: `good / well -> better -> best`; `bad / badly -> worse -> worst`; `little (ít) -> less -> least`; `many / much -> more -> most`; `far -> farther (khoảng cách vật lý) / further (mức độ, thông tin thêm) -> farthest / furthest`.",
          "So sánh gấp số lần: Đặt hệ số nhân (`twice, three times, ten times`) TRƯỚC chữ `as` đầu tiên! Ví dụ: *NVMe SSDs are **ten times as fast as** legacy spinning disks* (hoặc *ten times faster than*)."
        ]
      },
      {
        heading: "2. Nhấn mạnh Mức độ So sánh — Mỏ điểm Vàng TOEIC Part 5",
        paragraphs: [
          "Trong đề thi TOEIC, bạn sẽ thường xuyên gặp câu đã có sẵn đầy đủ cấu trúc so sánh hơn như `The upgraded cluster is _____ more stable than the previous one`, kèm 4 đáp án `(A) very (B) much (C) so (D) quite`. 70% người mất gốc chọn `very` vì dịch tiếng Việt là 'rất ổn định hơn'!",
          "Trong tiếng Anh chuẩn, `very` chỉ đi với tính từ gốc (`very stable`). Để đo độ chênh lệch trước so sánh hơn, bạn phải dùng bộ trạng từ nhấn mạnh chuyên dụng — đây cũng chính là những từ giúp câu phân tích System Design của bạn nghe chuyên nghiệp gấp bội."
        ],
        bullets: [
          "**Nhấn mạnh chênh lệch lớn trước So sánh hơn**: `much`, `far`, `even`, `a lot`, `significantly`, `considerably`, `substantially`, `markedly`, `way` (văn nói). Ví dụ: *ZGC pause times are **significantly shorter** than Parallel GC pause times.*",
          "**Nhấn mạnh chênh lệch nhỏ trước So sánh hơn**: `slightly`, `marginally`, `a bit`, `a little`. Ví dụ: *Option B has **marginally higher** memory overhead, which is an acceptable trade-off.*",
          "**Nhấn mạnh trước So sánh nhất**: Dùng `by far` (bỏ xa), `easily`, `quite` + `the + most/-est`. Ví dụ: *PostgreSQL is **by far the most versatile** relational database for our workload.*",
          "**Giới từ đi sau So sánh nhất**: Dùng **in** + danh từ số ít chỉ tập thể/nơi chốn/tổ chức (*the fastest service **in** our architecture / **in** the company*); dùng **of / among** + danh từ số nhiều hoặc khoảng thời gian (*the most critical outage **of** the year / **of** all regions*)."
        ]
      },
      {
        heading: "3. Ba Cấu trúc Nâng cao Phân loại TOEIC 650–750+ & Viết ADR Đẳng cấp",
        paragraphs: [
          "Khi bước lên ngưỡng điểm 650–750+, ETS sẽ tung ra 3 cấu trúc đặc biệt phá vỡ thói quen thông thường: dùng `the` trước so sánh hơn và kiểm tra tính tương xứng logic giữa hai vế so sánh.",
          "Trong viết tài liệu Architecture Decision Record (ADR), đặc biệt là lỗi so sánh khập khiễng (Illogical Comparison), các reviewer bản xứ đánh giá rất khắt khe."
        ],
        bullets: [
          "**Cấu trúc So sánh kép (Double Comparatives)**: `The + comparative + S + V, the + comparative + S + V`. Ví dụ: ***The more granular** our microservices become, **the harder** distributed tracing gets.* (Lưu ý có thể rút gọn động từ `be` ở cuối vế).",
          "**Ngoại lệ 'Of the two' (Trong số 2 đối tượng)**: Bình thường trước so sánh hơn KHÔNG có `the`. Nhưng khi câu giới hạn đúng 2 đối tượng bằng cụm `Of the two + N_số_nhiều` hoặc `between the two`, ta bắt buộc dùng **the + so sánh hơn**! Ví dụ: *Of the two serialization formats, Protobuf is **the more compact**.*",
          "**Đồng nhất đối tượng bằng `that of` / `those of`**: Sai: *The throughput of Netty is higher than Tomcat* (So sánh `throughput` với cái server `Tomcat`!). Đúng: *The throughput of Netty is higher than **that of** Tomcat* (`that` = `the throughput`). Nếu danh từ gốc là số nhiều: *The licensing fees of Oracle are higher than **those of** open-source alternatives* (`those` = `the licensing fees`).",
          "**Cụm cố định không cần 'than'**: Các tính từ gốc Latin tận cùng bằng `-or` gồm **superior to** (vượt trội hơn), **inferior to** (kém hơn), **prior to** (trước khi), **senior to**, **junior to** luôn đi với giới từ **to**, TUYỆT ĐỐI không dùng `more` hay `than`!"
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "The automated invoicing system processes vendor payments **much more accurately** than the manual workflow.",
        vi: "Hệ thống xuất hóa đơn tự động xử lý các khoản thanh toán nhà cung cấp chính xác hơn nhiều so với quy trình thủ công.",
        note: "Động từ thường 'processes' cần trạng từ 'accurately' -> so sánh hơn 'more accurately', nhấn mạnh bằng 'much' (không dùng 'very')."
      },
      {
        tag: "System Design",
        en: "Protobuf payloads are **up to five times as compact as** equivalent JSON payloads over gRPC.",
        vi: "Các gói tin Protobuf nhỏ gọn gấp tới năm lần so với các gói tin JSON tương đương qua giao thức gRPC.",
        note: "So sánh gấp bội: [Số lần] + as + Adj gốc ('compact') + as."
      },
      {
        tag: "Senior Java",
        en: "Java 21 Virtual Threads deliver **significantly higher** throughput for I/O-bound workloads than pooled platform threads.",
        vi: "Virtual Threads trên Java 21 mang lại thông lượng cao hơn đáng kể cho các tác vụ nặng về I/O so với luồng nền tảng dạng pool.",
        note: "'Significantly' là trạng từ học thuật cực đẹp để nhấn mạnh trước so sánh hơn 'higher'."
      },
      {
        tag: "TOEIC Part 5",
        en: "CloudVault Pro is **by far the most cost-effective** backup solution in the enterprise market today.",
        vi: "CloudVault Pro bỏ xa các đối thủ để trở thành giải pháp sao lưu tối ưu chi phí nhất trên thị trường doanh nghiệp hiện nay.",
        note: "'By far' đứng trước 'the most + Adj' để nhấn mạnh so sánh nhất; đi kèm 'in + danh từ đơn vị số ít (the enterprise market)'."
      },
      {
        tag: "Code Review",
        en: "**The earlier** we catch schema breaking changes in CI, **the less** downtime we risk in production.",
        vi: "Chúng ta phát hiện các thay đổi phá vỡ schema trên CI càng sớm thì rủi ro gián đoạn hệ thống trên production càng ít.",
        note: "So sánh kép 'The + so sánh hơn..., the + so sánh hơn...'. Chú ý 'little -> less' đi với danh từ không đếm được 'downtime'."
      },
      {
        tag: "TOEIC Part 6",
        en: "**Of the two** proposed office locations, the downtown tower offers **the more convenient** access to public transit.",
        vi: "Trong hai địa điểm văn phòng được đề xuất, tòa tháp trung tâm mang lại khả năng tiếp cận giao thông công cộng thuận tiện hơn.",
        note: "Dấu hiệu kinh điển 'Of the two...' -> Bắt buộc có mạo từ 'the' đứng trước so sánh hơn ('the more convenient')."
      },
      {
        tag: "System Design",
        en: "The tail latency of DynamoDB is **far more predictable** than **that of** a self-managed MongoDB replica set.",
        vi: "Độ trễ đuôi (tail latency) của DynamoDB dễ dự đoán hơn nhiều so với độ trễ đuôi của một cụm MongoDB tự vận hành.",
        note: "Dùng 'that of' thay thế cho danh từ số ít 'the tail latency' để đảm bảo hai vế so sánh đồng nhất kiểu dữ liệu."
      },
      {
        tag: "TOEIC Part 7",
        en: "Operating expenses in the third quarter were **slightly lower** than those recorded during the previous quarter.",
        vi: "Chi phí vận hành trong quý ba thấp hơn đôi chút so với các khoản chi phí được ghi nhận trong quý trước đó.",
        note: "'Slightly' nhấn mạnh mức chênh lệch nhỏ; 'those' thay thế cho danh từ số nhiều 'operating expenses'."
      },
      {
        tag: "Client Email",
        en: "Please contact our support desk should you require any **further** clarification regarding the API rate limits.",
        vi: "Vui lòng liên hệ bộ phận hỗ trợ của chúng tôi nếu ngài cần bất kỳ sự làm rõ nào thêm liên quan đến giới hạn tần suất API.",
        note: "Phân biệt 'farther' (xa hơn về khoảng cách km) vs 'further' (thêm nữa / sâu hơn về thông tin, mức độ -> cực hay thi TOEIC!)."
      },
      {
        tag: "Senior Java",
        en: "Immutable records in Java 17 make concurrent state sharing **considerably safer** and **easier** to reason about.",
        vi: "Các record bất biến trong Java 17 giúp việc chia sẻ trạng thái đa luồng an toàn hơn đáng kể và dễ suy luận hơn.",
        note: "Cấu trúc `make + O + Adj (complement)` -> dùng tính từ so sánh hơn 'safer' và 'easier', nhấn mạnh bằng 'considerably'."
      },
      {
        tag: "TOEIC Part 5",
        en: "Independent lab tests confirm that our new solid-state lithium battery is **superior to** competing models in durability.",
        vi: "Các bài kiểm tra phòng thí nghiệm độc lập xác nhận rằng pin lithium mới của chúng tôi vượt trội hơn các mẫu đối thủ về độ bền.",
        note: "'Superior' bản thân đã mang nghĩa so sánh hơn -> đi với giới từ 'to' (KHÔNG bao giờ viết 'more superior than')."
      },
      {
        tag: "Code Review",
        en: "Using `StringBuilder` inside a tight loop is **orders of magnitude faster** than concatenating strings with `+`.",
        vi: "Dùng `StringBuilder` bên trong vòng lặp dày đặc nhanh hơn hàng bậc độ lớn (gấp hàng chục/trăm lần) so với nối chuỗi bằng dấu `+`.",
        note: "Cụm từ 'orders of magnitude + so sánh hơn' là idiom vàng của Senior Engineer khi nói về tối ưu thuật toán / hiệu năng."
      },
      {
        tag: "TOEIC Part 5",
        en: "This year's developer conference attracted **twice as many attendees as** the organizers had initially projected.",
        vi: "Hội nghị lập trình viên năm nay đã thu hút số người tham dự nhiều gấp đôi so với mức ban đầu ban tổ chức dự kiến.",
        note: "'Attendees' là danh từ đếm được số nhiều -> dùng 'twice as MANY + N + as' (nếu không đếm được dùng 'as MUCH + N + as')."
      },
      {
        tag: "System Design",
        en: "**The higher** the replication factor we configure, **the stronger** our data durability becomes against node failures.",
        vi: "Hệ số nhân bản chúng ta cấu hình càng cao thì độ bền vững dữ liệu trước sự cố sập node càng mạnh.",
        note: "So sánh kép chuẩn mực để trình bày sự đánh đổi (trade-off) giữa cấu hình và độ chịu lỗi."
      },
      {
        tag: "TOEIC Part 6",
        en: "All security patches must be verified in staging **prior to** being rolled out to production servers.",
        vi: "Tất cả các bản vá bảo mật phải được xác minh trên môi trường staging trước khi được triển khai lên máy chủ production.",
        note: "'Prior to' (= before) là cụm từ gốc Latin đi với 'to + N/V-ing' xuất hiện dày đặc trong cả đề TOEIC lẫn quy trình DevOps."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Redis is very faster than querying the disk-based database directly.",
          fix: "Redis is much / far / significantly faster than querying the disk-based database directly.",
          why: "CẤM dùng 'very' trước so sánh hơn! Phải đổi sang 'much', 'far', 'even', hoặc 'significantly'."
        },
        {
          bug: "The new algorithm is more simpler and more faster than the old one.",
          fix: "The new algorithm is simpler and faster than the old one.",
          why: "Lỗi so sánh kép thừa chữ (Double Marking): tính từ ngắn đã thêm đuôi '-er' thì tuyệt đối không thêm 'more' phía trước."
        },
        {
          bug: "The memory footprint of Go is smaller than Java.",
          fix: "The memory footprint of Go is smaller than that of Java.",
          why: "So sánh khập khiễng: không thể so 'memory footprint' (dung lượng RAM) với 'Java' (ngôn ngữ). Phải thêm 'that of' (= the memory footprint of)."
        },
        {
          bug: "Our GraphQL gateway responds as quick as the REST gateway.",
          fix: "Our GraphQL gateway responds as quickly as the REST gateway.",
          why: "'Responds' là nội động từ thường, nên giữa 'as...as' phải là Trạng từ 'quickly' để bổ nghĩa cho hành động phản hồi."
        },
        {
          bug: "gRPC is more superior than REST for internal microservice communication.",
          fix: "gRPC is superior to REST for internal microservice communication.",
          why: "'Superior' (và inferior, prior, senior, junior) không bao giờ đi với 'more' hay 'than', mà luôn đi với giới từ 'to'."
        }
      ]
    },
    toeicTips: [
      "Mẹo bắt sóng trong 3 giây: Thấy phía sau chỗ trống là `more + Adj/Adv` hoặc `Adj-er` (VD: `_____ faster`, `_____ more efficient`), lập tức quét 4 đáp án tìm một trong các từ: `much, far, even, significantly, considerably, slightly`. Loại thẳng tay `very, so, quite, too`!",
      "Mẹo 'than' <-> 'more/-er' và 'the' <-> 'most/-est': Có `than` -> chọn so sánh hơn; có `the` ngay trước chỗ trống (mà không có `of the two`) -> chọn so sánh nhất (`most / -est`). Riêng đầu câu có `Of the two...` -> tự tin khoanh `the + so sánh hơn` ăn điểm 700+!",
      "Khi phân vân giữa `as Adj as` và `as Adv as` (VD: `as reliable as` vs `as reliably as`), gạch bỏ hai chữ `as` đi rồi nhìn động từ phía trước: gặp `be/become/remain` chọn Adj; gặp động từ hành động chọn Adv."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "than traditional platform threads",
          "consume",
          "under heavy load.",
          "Virtual threads",
          "far less memory"
        ],
        answer: "Virtual threads consume far less memory than traditional platform threads under heavy load.",
        vi: "Các luồng ảo (Virtual threads) tiêu thụ ít bộ nhớ hơn nhiều so với các luồng nền tảng truyền thống khi chịu tải nặng."
      },
      fillBlank: {
        sentence: "Of the two caching strategies, write-through is _____ more reliable option for financial ledgers.",
        answer: "the",
        accepted: ["the"],
        hint: "Chú ý cụm giới hạn đúng 2 đối tượng 'Of the two...' ở đầu câu!",
        explain: "Khi so sánh giữa đúng 2 đối tượng ('Of the two + N số nhiều'), tiếng Anh bắt buộc dùng mạo từ xác định 'the' đứng trước cấu trúc so sánh hơn ('the more reliable option')."
      }
    },
    quiz: [
      {
        q: "According to our JMH benchmarks, the lock-free ring buffer performs _____ better under high contention than a synchronized queue.",
        options: ["very", "considerably", "quite", "extremely"],
        answer: 1,
        explain: "Đáp án đúng là 'considerably' (B). Phía sau chỗ trống là dạng so sánh hơn 'better ... than'. Các trạng từ 'very', 'quite', 'extremely' chỉ bổ nghĩa cho tính từ/trạng từ nguyên gốc, không đứng trước so sánh hơn. Chỉ 'considerably' (đáng kể — cùng nhóm với much/far/significantly) bổ nghĩa hợp lệ cho 'better'."
      },
      {
        q: "With the updated indexing strategy, complex analytical queries now execute almost three times as _____ as they did before the upgrade.",
        options: ["rapid", "rapidity", "rapidly", "more rapidly"],
        answer: 2,
        explain: "Đáp án đúng là 'rapidly' (C). Giữa cấu trúc 'as ... as' phải là từ nguyên gốc (loại D 'more rapidly'). Động từ chính phía trước là 'execute' (động từ thường chỉ hành động thực thi), nên cần Trạng từ 'rapidly' để bổ nghĩa cho 'execute' (loại tính từ A 'rapid' và danh từ B 'rapidity')."
      },
      {
        q: "The annual maintenance cost of our cloud-native serverless pipeline is substantially lower than _____ of the legacy on-premise cluster.",
        options: ["that", "those", "them", "which"],
        answer: 0,
        explain: "Đáp án đúng là 'that' (A). Chủ ngữ đang đem đi so sánh là 'The annual maintenance cost' (danh từ số ít). Để không lặp lại cụm 'the annual maintenance cost of' và tránh lỗi so sánh khập khiễng giữa chi phí với cụm máy chủ, ta dùng đại từ 'that' (+ of). Nếu danh từ gốc là 'costs' (số nhiều) mới chọn 'those'."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G3_3: LIÊN TỪ VS GIỚI TỪ VS TRẠNG TỪ LIÊN KẾT (ALTHOUGH / DESPITE / HOWEVER)
   * ========================================================================== */
  G3_3: {
    duration: "45 phút",
    toeicTarget: "Bứt phá TOEIC 600–750+ (Part 5 & Part 6 — Ăn chắc 4–6 câu nối câu xuất hiện trong MỌI đề thi!)",
    javaContext: "Viết Incident Postmortem (nguyên nhân - kết quả), quy định điều kiện SLA/Contract, và trình bày lập luận phản biện sắc bén",
    teacherIntro: "Nếu phải chọn ra MỘT chuyên đề ngữ pháp mang lại hiệu suất điểm số trên mỗi giờ học cao nhất trong đề thi TOEIC Reading, tôi khẳng định 100% đó chính là Bài G3.3 hôm nay! Trong bất kỳ đề thi ETS thực tế nào, luôn có từ 4 đến 6 câu ở Part 5 và Part 6 xoay quanh tam giác vàng: Liên từ phụ thuộc (Although, Because, While, Unless) vs Giới từ (Despite, Due to, During, Prior to) vs Trạng từ liên kết (However, Therefore, Otherwise). Điểm tuyệt vời cho dân lập trình là dạng bài này giống hệt việc kiểm tra Kiểu tham số đầu vào (Method Overloading) trong Java: trước khi dịch nghĩa, chỉ cần nhìn cấu trúc cú pháp phía sau chỗ trống là bạn đã loại ngay lập tức được 2/4 đáp án sai!",
    javaAnalogy: {
      title: "Method Signature Overloading: Lambda Statement vs Object vs Log Separator",
      body: "Hãy hình dung 3 từ cùng mang nghĩa tương phản 'Mặc dù / Tuy nhiên' như 3 hàm có kiểu tham số hoàn toàn khác nhau trong Java: (1) Liên từ `although(Clause s_v)` bắt buộc nhận vào một biểu thức mệnh đề đầy đủ có Chủ ngữ + Động từ chia thì; (2) Giới từ `despite(NounPhrase obj)` chỉ nhận một Object (Cụm danh từ hoặc V-ing), truyền mệnh đề có động từ chia thì vào sẽ báo lỗi Compile Error ngay lập tức!; (3) Trạng từ liên kết `however` không nối trực tiếp 2 mệnh đề trong cùng 1 câu bằng dấu phẩy, mà phải đứng sau dấu chấm `.` hoặc dấu chấm phẩy `;` và theo sau nó là dấu phẩy `,` (`. However, S + V`)."
    },
    objectives: [
      "Phân biệt tức thì 3 loại từ nối dựa vào cấu trúc theo sau: Liên từ (+ S + V), Giới từ (+ Cụm danh từ / V-ing), và Trạng từ liên kết (Đứng đầu câu mới + dấu phẩy).",
      "Làm chủ Bảng Đối Chiếu Kim Cương 4 nhóm ngữ nghĩa cốt lõi: Nhượng bộ (Mặc dù), Nguyên nhân – Kết quả (Bởi vì/Do đó), Thời gian song song (Trong khi/Trong suốt), và Điều kiện ràng buộc (Trừ khi/Miễn là/Phòng khi).",
      "Tránh triệt để lỗi ghép thừa liên từ tiếng Việt ('Although... but...', 'Because... so...') và lỗi Comma Splice với 'however / therefore' khi viết tài liệu kỹ thuật."
    ],
    formulaCards: [
      {
        label: "Nhóm 1 • Nhượng bộ & Tương phản (Mặc dù / Tuy nhiên)",
        formula: "Although / Even though / Though + [S + V]  ||  Despite / In spite of + [N / V-ing]  ||  . However / Nevertheless, + [S + V]",
        note: "Mẹo nâng cao: 'Despite the fact that + S + V' hợp lệ vì 'the fact' là Danh từ đứng ngay sau giới từ 'Despite'!"
      },
      {
        label: "Nhóm 2 • Nguyên nhân & Kết quả (Bởi vì / Do đó)",
        formula: "Because / Since / As / Now that + [S + V]  ||  Because of / Due to / Owing to / Given + [N / V-ing]  ||  ; therefore / consequently, + [S + V]",
        note: "'Now that' (= Bởi vì giờ đây...) và 'Given' (= Xét tới + Cụm danh từ) là hai từ cực kỳ hay xuất hiện ở mốc TOEIC 650–750+!"
      },
      {
        label: "Nhóm 3 • Thời gian & Đối chiếu (While vs During)",
        formula: "While / Whereas + [S + V] (hoặc While + V-ing)  ||  During + [Danh từ sự kiện / giai đoạn]  ||  For + [Số lượng thời gian]",
        note: "Bẫy kinh điển: KHÔNG dùng 'during + V-ing' và KHÔNG dùng 'during + 3 days'! Phải là 'during the deployment' vs 'while deploying' vs 'for three days'."
      },
      {
        label: "Nhóm 4 • Điều kiện ràng buộc SLA & Vận hành",
        formula: "Unless (= If...not) + [S + V]  ||  Provided (that) / As long as + [S + V]  ||  In case + [S + V] vs In case of + [N]",
        note: "'In case' = Phòng trước khi sự cố xảy ra (luôn làm HÀNH ĐỘNG TRƯỚC để đề phòng, khác với 'If' là chờ xảy ra rồi mới làm!)."
      }
    ],
    sections: [
      {
        heading: "1. Quy trình 2 Bước Giải Nhanh: Kiểm tra Cú pháp (Syntax) trước, Ngữ nghĩa (Semantics) sau",
        paragraphs: [
          "Sai lầm lớn nhất của thí sinh khi gặp câu có `(A) Although (B) Despite (C) Because (D) Due to` là lao vào dịch nghĩa cả câu dài 25 từ ngay lập tức. Hãy làm giống trình biên dịch: kiểm tra kiểu cú pháp của vế đứng ngay sau chỗ trống (đến dấu phẩy ngăn cách vế chính)!",
          "Một **Mệnh đề (Clause)** bắt buộc phải có **Chủ ngữ + Động từ chia thì** (`finite verb` như `is, was, has, increased, fails`). Ngược lại, nếu phía sau chỉ là cụm danh từ dù dài đến mấy — kể cả có chứa `V-ing` hay `V-ed` rút gọn như `the unexpected network outage caused by DNS misconfiguration` (chữ `caused` ở đây là phân từ rút gọn 'được gây ra bởi', KHÔNG có to-be nên không phải động từ chia thì!) — thì đó vẫn chỉ là một **Cụm Danh Từ (Noun Phrase)** -> Phải chọn Giới từ!"
        ],
        bullets: [
          "**Bước 1 — Check Syntax**: Nhìn vế sau chỗ trống có `S + V(chia thì)` không? Có -> Giữ Liên từ (`Although, Because, While, Unless, Provided that, Once`), loại sạch Giới từ. Không có `V(chia thì)` (chỉ có `the/a/his + Adj + N` hoặc `V-ing`) -> Giữ Giới từ (`Despite, In spite of, Due to, Prior to, During, In case of`), loại sạch Liên từ!",
          "**Bước 2 — Check Dấu câu (cho Trạng từ liên kết)**: Nếu chỗ trống đứng ĐẦU CÂU và ngay sau chỗ trống có **dấu phẩy `,`** (VD: `_____, the migration succeeded.`), hoặc đứng sau dấu `;` -> Đó là vị trí độc quyền của Trạng từ liên kết (`However, Nevertheless, Therefore, Consequently, Moreover, Furthermore, Otherwise`)!",
          "**Cảnh báo bẫy V-ed giả động từ quá khứ**: Trong cụm `_____ the patch deployed last night, the leak persisted`, chữ `deployed` nếu là động từ quá khứ thì cả câu thiếu nghĩa ('bản vá đã triển khai tối qua' — triển khai cái gì? `deploy` là ngoại động từ không có tân ngữ -> `deployed` ở đây là phân từ bị động rút gọn = `which was deployed`). Vậy cả cụm `the patch deployed last night` chỉ là Cụm danh từ -> Điền **Despite**, không điền **Although**!"
        ]
      },
      {
        heading: "2. Những Từ Nối 'Vàng' Mốc 650–750+ Hay Gây Bất Ngờ Trong Phòng Thi",
        paragraphs: [
          "Ngoài những từ quen thuộc từ thời phổ thông như `because` hay `although`, đề thi TOEIC hiện đại và các văn bản kỹ thuật quốc tế (RFC, Spring Docs, AWS Well-Architected) rất chuộng nhóm từ nối trang trọng.",
          "Thuộc lòng chính xác chức năng của nhóm từ dưới đây sẽ giúp bạn không bao giờ đứng hình trước những phương án trông 'lạ mặt'."
        ],
        bullets: [
          "**Now that + S + V** (= Because now): Diễn tả nguyên nhân mới phát sinh ở hiện tại dẫn tới kết quả. VD: ***Now that** all integration tests have passed, we can merge the release branch.*",
          "**Seeing that / Inasmuch as / Given that + S + V** (= Because / Considering that): Liên từ chỉ lý do trang trọng. Lưu ý: nếu chỉ có chữ **Given** (không có `that`) thì nó là GIỚI TỪ (+ Cụm danh từ): ***Given** the tight deadline, we decided to descope feature X.*",
          "**Provided (that) / Providing (that) / As long as / So long as + S + V** (= Miễn là / Với điều kiện là): Cực kỳ phổ biến trong điều khoản hợp đồng, bảo hành TOEIC và quy định SLA.",
          "**Once + S + V** (= Ngay khi / Một khi mà): Liên từ thời gian kết hợp điều kiện. VD: ***Once** the DNS TTL expires, traffic will route to the new cluster.*",
          "**Otherwise** (Trạng từ liên kết = Nếu không thì): Luôn đứng sau dấu `;` hoặc `.` để cảnh báo hậu quả nếu điều kiện câu trước không được đáp ứng. VD: *You must close the `InputStream` in a `try-with-resources` block; **otherwise**, file descriptors will leak.*"
        ]
      },
      {
        heading: "3. Phân biệt tinh tế: In case vs If & While vs Whereas vs During",
        paragraphs: [
          "Dev Việt rất hay đánh đồng `in case` với `if` vì đều dịch thoáng là 'trong trường hợp / nếu'. Thực chất, logic thời gian thực thi (execution order) của hai từ này ngược nhau hoàn toàn!",
          "Tương tự, nhóm từ chỉ thời gian và sự đối lập `while / whereas / during` cũng có ranh giới ngữ pháp cực kỳ rõ ràng mà ETS khai thác triệt để."
        ],
        bullets: [
          "**If + S + V** (Chờ điều kiện xảy ra RỒI MỚI làm): *Notify the on-call SRE **if** CPU usage exceeds 90%* (CPU vượt 90% trước -> mới báo SRE).",
          "**In case + S + V** (Làm TRƯỚC ngay bây giờ để ĐỀ PHÒNG rủi ro có thể xảy ra sau): *Let's take a full database snapshot **in case** the schema migration fails* (Chụp snapshot TRƯỚC khi chạy migration để phòng hờ!). Nếu sau nó là Danh từ thì thêm `of`: ***In case of** a power outage, backup generators activate automatically.*",
          "**While vs Whereas**: Cả hai đều nối `S + V` để chỉ sự đối lập giữa 2 thực thể (*Kafka retains events on disk, **whereas / while** RabbitMQ removes messages once acknowledged*). Nhưng chỉ có **While** mới mang nghĩa thời gian ('trong lúc đang...') và rút gọn được thành `While + V-ing` (`While reviewing the PR, I spotted a race condition`). `Whereas` KHÔNG bao giờ chỉ thời gian!",
          "**Tuyệt đối bỏ thói quen tiếng Việt**: Trong tiếng Anh, đã có `Although / Though / Even though` ở vế đầu thì vế hai CẤM dùng `but / however`; đã có `Because / Since / As` ở vế đầu thì vế hai CẤM dùng `so / therefore`!"
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "**Although** the software update includes several major features, the installation package remains lightweight.",
        vi: "Mặc dù bản cập nhật phần mềm bao gồm nhiều tính năng lớn, gói cài đặt vẫn giữ được dung lượng nhẹ.",
        note: "Sau chỗ trống có S ('the software update') + V chia thì ('includes') + nghĩa tương phản -> dùng Liên từ 'Although'."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Despite** the severe shortage of semiconductor chips, the hardware vendor delivered our servers on schedule.",
        vi: "Bất chấp tình trạng thiếu hụt nghiêm trọng chip bán dẫn, nhà cung cấp phần cứng vẫn giao máy chủ cho chúng tôi đúng tiến độ.",
        note: "Sau chỗ trống chỉ là Cụm danh từ ('the severe shortage of semiconductor chips' — không có động từ chia thì) -> dùng Giới từ 'Despite'."
      },
      {
        tag: "System Design",
        en: "Synchronous REST calls are straightforward to debug; **however**, they introduce tight temporal coupling between services.",
        vi: "Các lời gọi REST đồng bộ rất dễ gỡ lỗi; tuy nhiên, chúng tạo ra sự phụ thuộc chặt về mặt thời gian giữa các service.",
        note: "Đứng sau dấu chấm phẩy ';' và trước dấu phẩy ',' để nối 2 câu độc lập mang nghĩa trái ngược -> Trạng từ liên kết 'however'."
      },
      {
        tag: "Senior Java",
        en: "**Now that** we have upgraded to Spring Boot 3.2, we can enable native observability with Micrometer Tracing.",
        vi: "Bởi vì giờ đây chúng ta đã nâng cấp lên Spring Boot 3.2, chúng ta có thể bật khả năng quan sát gốc với Micrometer Tracing.",
        note: "'Now that + S + V' diễn tả nguyên nhân mới hoàn tất dẫn đến hành động khả thi ở hiện tại."
      },
      {
        tag: "TOEIC Part 6",
        en: "All international flights at Terminal 2 were delayed **due to** dense fog over the runway this morning.",
        vi: "Tất cả các chuyến bay quốc tế tại Nhà ga số 2 đã bị hoãn do sương mù dày đặc trên đường băng sáng nay.",
        note: "'dense fog over the runway this morning' là Cụm danh từ chỉ nguyên nhân -> dùng Giới từ 'due to' (= because of / owing to)."
      },
      {
        tag: "Code Review",
        en: "**Given** the high cardinality of the `user_id` column, a standard B-tree composite index will outperform a bitmap index.",
        vi: "Xét tới độ phân tán giá trị cao của cột `user_id`, chỉ mục phức hợp B-tree tiêu chuẩn sẽ vượt trội hơn chỉ mục bitmap.",
        note: "'Given + Cụm danh từ' (= Xét tới / Căn cứ vào) là giới từ cực kỳ chuyên nghiệp khi lập luận kỹ thuật và thi TOEIC 700+."
      },
      {
        tag: "TOEIC Part 5",
        en: "Visitors are not permitted inside the cleanroom facility **unless** they are accompanied by an authorized engineer.",
        vi: "Khách tham quan không được phép vào bên trong khu vực phòng sạch trừ khi họ có một kỹ sư được ủy quyền đi kèm.",
        note: "'Unless + S + V' (= If they are not...) nối mệnh đề điều kiện phủ định."
      },
      {
        tag: "Client Email",
        en: "We can accommodate the custom reporting module within Sprint 14, **provided that** the API specification is finalized by Wednesday.",
        vi: "Chúng tôi có thể đáp ứng module báo cáo tùy chỉnh ngay trong Sprint 14, miễn là đặc tả API được chốt trước thứ Tư.",
        note: "'Provided that + S + V' (= với điều kiện là / miễn là) giúp đặt điều kiện ràng buộc cực kỳ lịch sự và chặt chẽ với khách hàng."
      },
      {
        tag: "Senior Java",
        en: "Always configure connection timeouts on `HttpClient`; **otherwise**, hung upstream sockets can exhaust your entire thread pool.",
        vi: "Hãy luôn cấu hình timeout kết nối trên `HttpClient`; nếu không thì các socket treo từ phía trên có thể làm cạn kiệt toàn bộ thread pool của bạn.",
        note: "Dùng '; otherwise,' để nêu hậu quả kỹ thuật nếu không tuân thủ quy tắc đứng trước."
      },
      {
        tag: "TOEIC Part 5",
        en: "No database schema modifications are allowed **during** the year-end financial closing period.",
        vi: "Không có thay đổi schema cơ sở dữ liệu nào được phép thực hiện trong suốt giai đoạn khóa sổ tài chính cuối năm.",
        note: "Sau chỗ trống là Cụm danh từ chỉ giai đoạn ('the year-end financial closing period') -> dùng Giới từ 'during' (không dùng 'while')."
      },
      {
        tag: "Code Review",
        en: "**While** profiling heap allocations in VisualVM, I noticed thousands of duplicate `BigDecimal` instances.",
        vi: "Trong lúc đang đo đạc cấp phát bộ nhớ heap trên VisualVM, tôi phát hiện hàng ngàn đối tượng `BigDecimal` bị trùng lặp.",
        note: "'While + V-ing' là dạng rút gọn hợp lệ của 'While I was profiling...' (cùng chủ ngữ 'I'). Không bao giờ viết 'During profiling'!"
      },
      {
        tag: "System Design",
        en: "Read-heavy workloads benefit greatly from local Caffeine caches, **whereas** write-heavy ledgers require append-only logs.",
        vi: "Các tác vụ thiên về đọc hưởng lợi rất lớn từ bộ nhớ đệm cục bộ Caffeine, trái lại các sổ cái thiên về ghi đòi hỏi nhật ký chỉ ghi nối tiếp.",
        note: "'Whereas + S + V' chuyên dùng để đặt 2 kiến trúc / kịch bản đối lập nhau lên bàn cân."
      },
      {
        tag: "TOEIC Part 6",
        en: "Please keep a printed copy of your boarding pass **in case** the airline mobile app loses connectivity at the gate.",
        vi: "Vui lòng giữ một bản in thẻ lên máy bay phòng khi ứng dụng di động của hãng hàng không mất kết nối tại cửa ra tàu bay.",
        note: "Giữ bản in TRƯỚC để phòng ngừa rủi ro mất mạng -> dùng 'in case + S + V' (không dùng 'if' vì không đợi mất mạng rồi mới đi in!)."
      },
      {
        tag: "TOEIC Part 7",
        en: "**In case of** an unexpected regional failover, DNS traffic will automatically shift to the Frankfurt cluster within 30 seconds.",
        vi: "Trong trường hợp xảy ra chuyển đổi dự phòng vùng ngoài dự kiến, lưu lượng DNS sẽ tự động chuyển sang cụm Frankfurt trong vòng 30 giây.",
        note: "Sau chỗ trống là Cụm danh từ ('an unexpected regional failover') -> phải có 'of': 'In case of + N'."
      },
      {
        tag: "Senior Java",
        en: "**Once** a consumer group commits its Kafka offset, those records will not be redelivered upon restart.",
        vi: "Một khi consumer group đã commit offset Kafka của nó, các bản ghi đó sẽ không được gửi lại khi khởi động lại.",
        note: "'Once + S + V' (= Ngay khi / Một khi đã...) diễn tả mốc trạng thái chuyển tiếp rõ ràng trong luồng dữ liệu."
      },
      {
        tag: "TOEIC Part 5",
        en: "The quarterly revenue exceeded analyst expectations; **consequently**, the board approved an expansion of the R&D budget.",
        vi: "Doanh thu hàng quý đã vượt kỳ vọng của giới phân tích; do đó, hội đồng quản trị đã phê duyệt việc mở rộng ngân sách R&D.",
        note: "Trạng từ liên kết chỉ kết quả '; consequently,' (= therefore / as a result) nối hai câu hoàn chỉnh."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Although the server CPU spiked to 95%, but all API requests still succeeded.",
          fix: "Although the server CPU spiked to 95%, all API requests still succeeded.",
          why: "Dịch từng chữ 'Mặc dù... nhưng...' từ tiếng Việt! Trong tiếng Anh, đã dùng 'Although' ở mệnh đề phụ thì TUYỆT ĐỐI bỏ 'but' ở mệnh đề chính."
        },
        {
          bug: "Despite the network latency was high, the stream remained stable.",
          fix: "Although the network latency was high, ... (HOẶC: Despite the high network latency, ...)",
          why: "'Despite' là Giới từ nên không thể đi trực tiếp với mệnh đề có động từ chia thì ('was'). Muốn giữ mệnh đề phải đổi sang 'Although' hoặc 'Despite the fact that'."
        },
        {
          bug: "During deploying the hotfix, two pods restarted unexpectedly.",
          fix: "While deploying the hotfix, two pods... (HOẶC: During the hotfix deployment, ...)",
          why: "CẤM dùng 'During + V-ing'! 'During' chỉ đi với Danh từ thuần túy ('During the deployment'). Đi với 'V-ing' hành động phải dùng 'While'."
        },
        {
          bug: "The token has expired, however, the client did not refresh it.",
          fix: "The token has expired; however, the client did not refresh it.",
          why: "Lỗi Comma Splice: 'however' là Trạng từ liên kết chứ không phải Liên từ, nên không thể nối 2 mệnh đề chỉ bằng dấu phẩy. Phải dùng dấu ';' hoặc '.' đứng trước nó!"
        },
        {
          bug: "Please ping me on Slack in case you finish reviewing my PR.",
          fix: "Please ping me on Slack when / if you finish reviewing my PR.",
          why: "Dùng sai bản chất 'in case': bạn chờ người ta review XONG RỒI MỚI ping, nên phải dùng 'when / as soon as / if', không phải làm trước để đề phòng ('in case')."
        }
      ]
    },
    toeicTips: [
      "Công thức phản xạ 5 giây Part 5: Gặp 4 đáp án trộn lẫn Liên từ & Giới từ (VD: `Although / Despite / Because / Due to`), ĐỪNG ĐỌC CẢ CÂU! Chỉ quét từ chỗ trống đến dấu phẩy xem có Động từ chia thì không -> Loại ngay 2 đáp án sai loại từ, sau đó chỉ mất thêm 3 giây xét quan hệ Thuận (Nguyên nhân) hay Nghịch (Tương phản) để chốt đáp án!",
      "Mẹo nhìn dấu câu ăn điểm ngay 2 giây trong Part 6: Nếu chỗ trống nằm ở ĐẦU CÂU và ngay sát sau chỗ trống là dấu phẩy `_____, S + V.` -> Loại sạch `Although, Because, Despite, Unless` (vì nếu chúng đứng đầu câu thì dấu phẩy phải nằm ở GIỮA 2 mệnh đề chứ không bao giờ nằm ngay sau lưng từ nối!). Chọn ngay nhóm `However, Therefore, Nevertheless, Moreover, Consequently`.",
      "Cẩn thận bẫy `in spite of` vs `despite`: `Despite` KHÔNG BAO GIỜ đi với `of` (`despite of` là sai 100%), trong khi `In spite of` BẮT BUỘC phải có `of`! Hai cụm này hoàn toàn đồng nghĩa và cùng cộng với `N / V-ing`."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "the API gateway",
          "a sudden traffic spike,",
          "Despite",
          "maintained sub-millisecond latency.",
          "experiencing"
        ],
        answer: "Despite experiencing a sudden traffic spike, the API gateway maintained sub-millisecond latency.",
        vi: "Mặc dù gặp phải một đợt lưu lượng tăng đột biến, cổng API vẫn duy trì được độ trễ dưới một mili-giây."
      },
      fillBlank: {
        sentence: "The database migration was postponed _____ an unexpected schema conflict in the staging environment.",
        answer: "due to",
        accepted: ["due to", "because of", "owing to"],
        hint: "Phía sau chỗ trống là Cụm danh từ ('an unexpected schema conflict...') chỉ nguyên nhân!",
        explain: "Cụm 'an unexpected schema conflict in the staging environment' là Cụm danh từ (không có động từ chia thì) và đóng vai trò nguyên nhân khiến việc migration bị hoãn, nên ta phải dùng giới từ chỉ nguyên nhân 'due to' (hoặc 'because of' / 'owing to')."
      }
    },
    quiz: [
      {
        q: "_____ the stringent security requirements imposed by the banking regulator, our engineering team delivered the payment SDK ahead of schedule.",
        options: ["Although", "Even though", "Notwithstanding", "Whereas"],
        answer: 2,
        explain: "Đáp án đúng là 'Notwithstanding' (C) (= Despite / In spite of — Giới từ trang trọng cực hay thi TOEIC 700+!). Phân tích cú pháp vế đầu: 'the stringent security requirements [imposed by the banking regulator]' -> 'imposed' là phân từ bị động rút gọn ('được áp đặt bởi'), không phải động từ chính chia thì -> cả cụm chỉ là Cụm danh từ! Do đó loại cả 3 liên từ 'Although' (A), 'Even though' (B) và 'Whereas' (D)."
      },
      {
        q: "Full write access to the production Kubernetes cluster will be granted _____ the engineer completes the mandatory compliance training.",
        options: ["unless", "provided that", "despite", "during"],
        answer: 1,
        explain: "Đáp án đúng là 'provided that' (B) (= miễn là / với điều kiện là). Sau chỗ trống là mệnh đề đầy đủ S ('the engineer') + V ('completes') -> loại 2 giới từ 'despite' (C) và 'during' (D). Xét nghĩa: quyền ghi được cấp VỚI ĐIỀU KIỆN hoàn thành khóa đào tạo tuân thủ (nếu chọn 'unless' = trừ khi hoàn thành thì mới được cấp -> ngược nghĩa hoàn toàn!)."
      },
      {
        q: "Legacy SOAP endpoints remain supported for enterprise partners; _____, all new integrations must use our RESTful v3 API.",
        options: ["although", "despite", "whereas", "nevertheless"],
        answer: 3,
        explain: "Đáp án đúng là 'nevertheless' (D) (= however — tuy nhiên). Dấu hiệu vàng về dấu câu: chỗ trống nằm giữa dấu chấm phẩy ';' và dấu phẩy ',' (`; _____, S + V`). Chỉ có Trạng từ liên kết ('nevertheless') mới đứng được ở vị trí này để nối hai mệnh đề độc lập."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G3_4: MỆNH ĐỀ QUAN HỆ (WHO, WHOM, WHOSE, WHICH, THAT, WHERE, WHEN)
   * ========================================================================== */
  G3_4: {
    duration: "40 phút",
    toeicTarget: "Bứt phá TOEIC 600–750+ (Part 5 & Part 6 — Mẹo chọn Đại từ/Trạng từ quan hệ trong 5 giây)",
    javaContext: "Mô tả quan hệ giữa các Microservices, viết Javadoc, ADR và giải thích luồng dữ liệu phức tạp trong một câu văn mạch lạc",
    teacherIntro: "Khi đọc hồ sơ năng lực (CV) hoặc tài liệu thiết kế của nhiều lập trình viên Việt Nam, tôi rất hay bắt gặp những đoạn văn bị cắt vụn thành hàng loạt câu đơn ngắn ngủn kiểu: 'We built an API Gateway. It validates JWT tokens. Its cache is stored in Redis.' Viết như vậy vừa rời rạc, vừa không thể đạt điểm cao hay tạo ấn tượng chuyên nghiệp với đối tác quốc tế. Mệnh đề quan hệ (Relative Clauses) chính là phép 'SQL JOIN' của ngôn ngữ: giúp bạn gắn kết các thực thể cùng thuộc tính của chúng thành một câu phức sang trọng, chặt chẽ, đồng thời giải quyết gọn ghẽ một trong những chuyên đề xuất hiện dày đặc nhất trong TOEIC Part 5 và Part 6.",
    javaAnalogy: {
      title: "SQL JOIN, Foreign Key & Truy Cập Thuộc Tính Object (obj.field)",
      body: "Hãy coi Danh từ đứng trước (Antecedent) là bảng chính `Service`, còn Mệnh đề quan hệ là phép `JOIN` lọc hoặc bổ sung thông tin: `who / which / that` truyền chính tham chiếu `this` vào làm Subject hoặc Object cho mệnh đề sau; `whose` chính là toán tử dấu chấm truy cập thuộc tính sở hữu `service.tlsConfig` (vì thế sau `whose` LUÔN là một Danh từ trần không có mạo từ `a/an/the`!); còn `where / when` tương đương cụm giới từ hoàn chỉnh `in/at/on which` — tức là nó chỉ cung cấp 'môi trường thực thi', nên mệnh đề đi sau `where/when` bắt buộc đã đủ cả `Subject + Verb (+ Object)`!"
    },
    objectives: [
      "Phân biệt chính xác trong 5 giây giữa who, whom, whose, which, that dựa vào Danh từ đứng trước (Người hay Vật) và Thành phần còn thiếu phía sau.",
      "Xóa bỏ hoàn toàn sự nhầm lẫn kinh điển giữa 'which' và 'where / when' khi đứng sau danh từ chỉ nơi chốn (database, server, office, city) hoặc thời gian.",
      "Nắm vững quy tắc dấu phẩy với 'that' và cấu trúc nâng cao 'Giới từ + which/whom' (in which, to whom, all of which, two of whom) ở mốc TOEIC 700+."
    ],
    formulaCards: [
      {
        label: "Công thức 1 • Người: Who vs Whom",
        formula: "N(người) + WHO + V(chia theo N)  ||  N(người) + WHOM (hoặc who/that) + S + V(thiếu Tân ngữ)",
        note: "Sau chỗ trống là Động từ -> chọn ngay 'who' (làm chủ ngữ). Sau chỗ trống đã có S + V ngoại động từ thiếu tân ngữ -> chọn 'whom' (trang trọng trong TOEIC)."
      },
      {
        label: "Công thức 2 • Sở hữu cho CẢ Người LẪN Vật: Whose",
        formula: "N(người HOẶC vật/hệ thống!) + WHOSE + Danh từ trần (không a/an/the/my) + V / S + V",
        note: "Bẫy ngộ nhận số 1: Nhiều bạn tưởng 'whose' chỉ dùng cho người! Sai! 'a server whose disk is full' chuẩn 100% ngữ pháp và cực hay ra thi TOEIC!"
      },
      {
        label: "Công thức 3 • Nơi chốn / Thời gian: Which vs Where / When",
        formula: "N(nơi chốn) + WHICH + V / S + V(thiếu O)  ||  N(nơi chốn) + WHERE (= in/at/on which) + S + V(ĐỦ thành phần)",
        note: "Đừng thấy danh từ chỉ địa điểm ('the data center', 'the hotel') là nhắm mắt khoanh 'where'! Nếu sau chỗ trống là Động từ -> BẮT BUỘC chọn 'which/that'!"
      },
      {
        label: "Công thức 4 • Lệnh cấm 'that' & Cấu trúc Định lượng 700+",
        formula: "..., which / who (CẤM ', that')  ||  in/on/to/with + WHICH / WHOM (CẤM giới từ + that/who)  ||  ..., most/all/both of which/whom",
        note: "Sau dấu phẩy ngăn cách mệnh đề phụ chú thích hoặc ngay sau giới từ, 'that' bị cấm hoàn toàn. Nối 2 mệnh đề có dấu phẩy phải dùng 'all of which' (không dùng 'all of them'!)."
      }
    ],
    sections: [
      {
        heading: "1. Thuật toán 2 Chiều Chọn Đại Từ Quan Hệ Không Bao Giờ Sai",
        paragraphs: [
          "Trong phòng thi TOEIC Part 5, khi 4 đáp án là `(A) who (B) whom (C) whose (D) which`, bạn không cần dịch toàn câu. Hãy chạy thuật toán kiểm tra 2 đầu: **Nhìn TRÁI** (xem danh từ đứng ngay trước là Người hay Vật) và **Nhìn PHẢI** (xem cấu trúc ngay sau chỗ trống thiếu gì).",
          "Điểm mấu chốt cần khắc cốt ghi tâm là đại từ sở hữu **whose**: nó đóng vai trò y hệt tính từ sở hữu (`his / her / its`). Vì vậy, đi ngay sau `whose` bắt buộc phải là một **Danh từ không có mạo từ**, và giữa danh từ trước với danh từ sau tồn tại quan hệ sở hữu 'của' (VD: *the vendor **whose** software...* = phần mềm *của* nhà cung cấp đó)."
        ],
        bullets: [
          "Trái = Người + Phải = Động từ (`is, manages, developed`): Điền **who** (hoặc `that`).",
          "Trái = Người + Phải = `S + V` (ngoại động từ thiếu tân ngữ, VD: *we interviewed _____ yesterday*): Điền **whom**.",
          "Trái = Vật/Hệ thống/Công ty + Phải = Động từ hoặc `S + V(thiếu O)`: Điền **which** (hoặc `that`). Lưu ý: bạn có thể lược bỏ hoàn toàn `which / whom / that` khi chúng làm **Tân ngữ** (*the API [that] we built yesterday* -> *the API we built yesterday* — hãy quen mắt với hiện tượng ẩn đại từ này khi đọc Part 7!).",
          "Trái = Người HOẶC Vật + Phải = **Danh từ trần** thuộc sở hữu của danh từ trước (*the microservice **whose** latency spiked*, *employees **whose** badges expired*): Điền ngay **whose**!"
        ]
      },
      {
        heading: "2. Giải cứu Nhầm lẫn Kinh điển: 'Which' vs 'Where' (in which)",
        paragraphs: [
          "Đây là cái bẫy hạ gục rất nhiều thí sinh mức 550–650 điểm: đề bài cho danh từ địa điểm rõ mồn một như `The Frankfurt data center _____ hosts our core banking ledger...` và đặt `(A) where (B) which` cạnh nhau. Nếu bạn chọn `where` chỉ vì thấy chữ `data center`, bạn mất điểm ngay lập tức!",
          "Bản chất: `where` là **Trạng từ** (= `there` / `in that place`), nó KHÔNG THỂ làm Chủ ngữ hay Tân ngữ cho động từ! Muốn làm Chủ ngữ đứng trước động từ `hosts` ('cái trung tâm dữ liệu *mà vận hành* sổ cái...'), bạn bắt buộc phải dùng đại từ **which** (hoặc `that`)."
        ],
        bullets: [
          "Khi nào chọn **which / that** sau nơi chốn? Khi phía sau là **Động từ** (*The branch office **which** opened in Tokyo...*) HOẶC ngoại động từ **thiếu Tân ngữ** (*The warehouse **which** our company leased...* -> thuê *cái nhà kho đó*).",
          "Khi nào chọn **where (= in/at/on which)**? Khi phía sau là một mệnh đề **ĐÃ ĐỦ Chủ ngữ + Nội động từ** hoặc **Chủ ngữ + Ngoại động từ + Tân ngữ** (*The staging environment **where / in which** we run load tests...* -> chúng tôi chạy `load tests` *ở trong môi trường đó*).",
          "Áp dụng y hệt cho thời gian **when (= on/in/at which)** và lý do **why (= for which)**: *The maintenance window **when / during which** the database will be offline...*; *The reason **why / for which** the pod crashed...*."
        ]
      },
      {
        heading: "3. Cấu trúc Điểm cao 700+: Giới từ + Đại từ & Mệnh đề Định lượng nối bằng dấu phẩy",
        paragraphs: [
          "Trong văn viết kỹ thuật trang trọng (RFC, Javadoc, Hợp đồng SLA) và các câu phân loại cao của Part 5–6, người bản xứ rất thích đảo giới từ lên ngay trước đại từ quan hệ thay vì để giới từ lơ lửng ở cuối câu.",
          "Đặc biệt, ETS cực kỳ hay ra bẫy nối hai mệnh đề bằng dấu phẩy `,` đi kèm từ chỉ số lượng (`some, many, most, all, both, two, neither + of + _____`). Nắm chắc quy tắc 'Đếm số động từ chia thì để chọn `them` hay `which/whom`' dưới đây bạn sẽ giải quyết dạng câu khó nhất đề thi chỉ trong 5 giây!"
        ],
        bullets: [
          "**Giới từ + which (vật) / whom (người)**: *the Kafka topic **to which** events are published* (= *which events are published to*); *the principal architect **with whom** I collaborated*. Sau giới từ TUYỆT ĐỐI cấm dùng `that` và cấm dùng `who`!",
          "**Bẫy Dấu phẩy `,` giữa `all of them` vs `all of which`**: Một dấu phẩy KHÔNG nối được 2 mệnh đề độc lập nếu không có liên từ (`and, but`) hoặc đại từ quan hệ! Xem xét 2 câu sau:\n  • Câu có `and` hoặc dấu `.` / `;`: *We deployed five microservices, **and** all of **them** passed health checks.*\n  • Câu CHỈ CÓ dấu phẩy `,` (không có `and`): *We deployed five microservices, all of **which** passed health checks.* (Nếu điền `them` vào đây sẽ bị lỗi ngữ pháp Comma Splice — đây là câu tủ của TOEIC 700+!).",
          "**Which thay cho cả mệnh đề phía trước**: Sau dấu phẩy, `, which + V(số ít)` có thể thay thế cho toàn bộ sự việc ở mệnh đề đầu (*The consumer auto-commits offsets before processing finishes, **which** risks data loss on crash* -> việc tự commit trước đó gây rủi ro mất dữ liệu -> động từ `risks` luôn chia SỐ ÍT!)."
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Customers **who** renew their enterprise subscriptions before December 31 will receive a fifteen percent discount.",
        vi: "Những khách hàng gia hạn gói đăng ký doanh nghiệp trước ngày 31 tháng 12 sẽ nhận được mức chiết khấu 15%.",
        note: "Danh từ chỉ người 'Customers' (số nhiều) + phía sau là động từ 'renew' -> dùng 'who' làm chủ ngữ (động từ 'renew' chia số nhiều khớp với 'Customers')."
      },
      {
        tag: "TOEIC Part 5",
        en: "The external security consultant **whom** our CTO hired last month uncovered three critical SQL injection flaws.",
        vi: "Chuyên gia tư vấn bảo mật bên ngoài mà CTO của chúng tôi thuê tháng trước đã phát hiện ba lỗ hổng SQL injection nghiêm trọng.",
        note: "Danh từ chỉ người + phía sau có 'our CTO hired' (ngoại động từ 'hired' thiếu tân ngữ) -> dùng 'whom'."
      },
      {
        tag: "System Design",
        en: "Any worker node **whose** heartbeat signal fails three consecutive times is automatically evicted from the cluster.",
        vi: "Bất kỳ worker node nào có tín hiệu nhịp tim thất bại ba lần liên tiếp sẽ tự động bị trục xuất khỏi cụm.",
        note: "'Whose' dùng hoàn hảo cho vật/hệ thống ('worker node') + danh từ trần 'heartbeat signal' (tín hiệu của node đó)."
      },
      {
        tag: "TOEIC Part 5",
        en: "FinEdge Corp acquired a fintech startup **whose** fraud-detection algorithm processes ten thousand transactions per second.",
        vi: "Tập đoàn FinEdge đã mua lại một công ty khởi nghiệp fintech có thuật toán phát hiện gian lận xử lý 10.000 giao dịch mỗi giây.",
        note: "Quan hệ sở hữu: thuật toán phát hiện gian lận CỦA startup đó -> 'whose fraud-detection algorithm'."
      },
      {
        tag: "Senior Java",
        en: "Spring Cloud Config provides a centralized repository **where** all environment-specific YAML files are versioned in Git.",
        vi: "Spring Cloud Config cung cấp một kho lưu trữ tập trung nơi toàn bộ các file YAML theo từng môi trường được quản lý phiên bản trên Git.",
        note: "Sau chỗ trống là mệnh đề bị động ĐÃ ĐỦ thành phần ('all... files are versioned') -> dùng trạng từ nơi chốn 'where' (= in which)."
      },
      {
        tag: "TOEIC Part 6",
        en: "The new logistics hub **which** opened near Incheon Airport last quarter has cut regional delivery times in half.",
        vi: "Trung tâm hậu cần mới mở gần Sân bay Incheon vào quý trước đã cắt giảm một nửa thời gian giao hàng trong khu vực.",
        note: "Bẫy kinh điển: dù 'logistics hub' là địa điểm, ngay sau chỗ trống là Động từ 'opened' (thiếu Chủ ngữ!) -> bắt buộc chọn 'which' (KHÔNG chọn 'where')."
      },
      {
        tag: "Code Review",
        en: "This method mutates a shared `HashMap` across multiple threads, **which** causes sporadic `ConcurrentModificationException` errors.",
        vi: "Phương thức này thay đổi trực tiếp một `HashMap` dùng chung giữa nhiều luồng, điều này gây ra lỗi `ConcurrentModificationException` chập chờn.",
        note: "', which' sau dấu phẩy thay thế cho toàn bộ hành động ở mệnh đề trước -> động từ 'causes' bắt buộc chia số ít (và cấm dùng ', that')."
      },
      {
        tag: "System Design",
        en: "Dead-letter queues are dedicated topics **to which** unprocessable Kafka messages are routed for manual inspection.",
        vi: "Hàng đợi thư chết (DLQ) là các topic chuyên biệt mà các bản tin Kafka không thể xử lý được định tuyến tới đó để kiểm tra thủ công.",
        note: "Cấu trúc trang trọng 'Giới từ + which': 'routed to the topics' -> 'topics to which... are routed'."
      },
      {
        tag: "TOEIC Part 5",
        en: "Our QA department tested four cloud monitoring platforms, **none of which** met all our on-premise compliance rules.",
        vi: "Bộ phận QA của chúng tôi đã thử nghiệm bốn nền tảng giám sát đám mây, không nền tảng nào trong số đó đáp ứng đủ mọi quy tắc tuân thủ tại chỗ của chúng tôi.",
        note: "Giữa hai mệnh đề chỉ có dấu phẩy ',' (không có 'and') -> bắt buộc dùng đại từ quan hệ 'none of which' (không được dùng 'none of them')."
      },
      {
        tag: "TOEIC Part 7",
        en: "The panel features six distinguished keynote speakers, **two of whom** previously led core JVM engineering teams at Oracle.",
        vi: "Phiên thảo luận có sự góp mặt của sáu diễn giả chính xuất sắc, hai người trong số họ từng dẫn dắt các đội ngũ kỹ sư lõi JVM tại Oracle.",
        note: "Danh từ trước là người ('speakers') + nối qua dấu phẩy không có liên từ -> dùng 'two of whom'."
      },
      {
        tag: "Client Email",
        en: "Please specify a two-hour maintenance window **during which** our DevOps team can safely upgrade your production database.",
        vi: "Vui lòng chỉ định một khung giờ bảo trì kéo dài hai tiếng mà trong khoảng thời gian đó đội ngũ DevOps của chúng tôi có thể nâng cấp an toàn cơ sở dữ liệu production của ngài.",
        note: "'during which' (= when) đi sau 'maintenance window' làm cho câu email gửi khách hàng cực kỳ trang trọng và rõ nghĩa."
      },
      {
        tag: "Senior Java",
        en: "The connection leak **that** we observed during yesterday's stress test originated from an unclosed `ResultSet`.",
        vi: "Sự cố rò rỉ kết nối mà chúng ta quan sát thấy trong bài kiểm tra chịu tải hôm qua bắt nguồn từ một `ResultSet` chưa được đóng.",
        note: "'that' làm tân ngữ cho động từ 'observed' (trong thực tế có thể ẩn luôn 'that': 'The connection leak we observed...')."
      },
      {
        tag: "TOEIC Part 5",
        en: "Anyone **who** experiences VPN connectivity issues after the firewall update should submit a ticket to the IT Helpdesk.",
        vi: "Bất kỳ ai gặp sự cố kết nối VPN sau đợt cập nhật tường lửa nên gửi phiếu yêu cầu tới Bộ phận Hỗ trợ CNTT.",
        note: "'Anyone who + V(số ít: experiences)' là cấu trúc thông báo nội bộ chuẩn mực xuất hiện ở mọi đề thi TOEIC."
      },
      {
        tag: "Code Review",
        en: "Could you document the exact scenario **in which** this fallback handler returns an empty `Optional`?",
        vi: "Bạn có thể ghi chú lại kịch bản chính xác mà trong đó trình xử lý dự phòng này trả về một `Optional` rỗng được không?",
        note: "'the scenario / situation / case + in which (= where) + S + V đủ thành phần' là cụm cực hay dùng trong PR Review và Design Doc."
      },
      {
        tag: "TOEIC Part 6",
        en: "Ms. Nakamura, **with whom** our legal counsel negotiated the licensing terms, has been appointed Vice President of Operations.",
        vi: "Bà Nakamura, người mà cố vấn pháp lý của chúng tôi đã đàm phán các điều khoản cấp phép cùng, vừa được bổ nhiệm làm Phó Chủ tịch Vận hành.",
        note: "Sau giới từ 'with' chỉ người bắt buộc dùng 'whom' ('with whom', tuyệt đối không dùng 'with who')."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "The Redis node where stores user session tokens ran out of memory.",
          fix: "The Redis node which / that stores user session tokens ran out of memory.",
          why: "Thấy 'node' tưởng nơi chốn nên điền 'where', nhưng ngay sau đó là động từ 'stores' đang thiếu Chủ ngữ! Phải dùng 'which' hoặc 'that'."
        },
        {
          bug: "We migrated to PostgreSQL 16, that improved query planning time by 30%.",
          fix: "We migrated to PostgreSQL 16, which improved query planning time by 30%.",
          why: "CẤM dùng 'that' đứng sau dấu phẩy trong mệnh đề quan hệ không xác định! Bắt buộc dùng 'which' (cho vật/cả mệnh đề) hoặc 'who' (cho người)."
        },
        {
          bug: "The microservice which its configuration file was corrupted failed to boot.",
          fix: "The microservice whose configuration file was corrupted failed to boot.",
          why: "Không bao giờ ghép 'which its'! Để diễn đạt quyền sở hữu cho cả người lẫn vật/service, dùng duy nhất chữ 'whose + danh từ trần'."
        },
        {
          bug: "The pull request contains three commits, all of them have unit tests.",
          fix: "The pull request contains three commits, all of which have unit tests.",
          why: "Hai mệnh đề có 2 động từ chia thì ('contains' và 'have') nối nhau chỉ bằng dấu phẩy ',' mà không có 'and' -> phải dùng đại từ quan hệ 'which' thay vì 'them'."
        },
        {
          bug: "The tech lead with who I discussed the database sharding plan approved it.",
          fix: "The tech lead with whom I discussed the database sharding plan approved it.",
          why: "Đứng ngay sau giới từ (with, to, for, from, by), đại từ quan hệ chỉ người BẮT BUỘC phải ở dạng tân ngữ 'whom' (không được dùng 'who' hay 'that')."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây săn 'whose': Nếu ngay trước chỗ trống là Danh từ (người hoặc vật) và ngay sau chỗ trống là một Danh từ trần KHÔNG có `a/an/the/my/their` (VD: `company _____ products`, `applicant _____ resume`), ghép chữ 'CỦA' vào giữa thấy hợp nghĩa -> Khoanh ngay **whose** đúng 99.9%!",
      "Mẹo phân xử `which` vs `where`: Nhìn động từ ngay sau chỗ trống. Không có Chủ ngữ (tức gặp động từ luôn) -> chọn `which`. Có `S + V` rồi thì hỏi: động từ đó có cần ăn trực tiếp danh từ địa điểm làm Tân ngữ không? (VD: `visit / buy / renovate / build + địa điểm` -> chọn `which`; còn `work / stay / deploy code + Ở ĐÓ` -> chọn `where`!).",
      "Mẹo loại trừ `that` trong tích tắc: Nhìn ngay trước chỗ trống có dấu phẩy `,` hoặc có giới từ (`in, on, at, to, with, of, for`) -> Gạch bỏ ngay đáp án `that` đầu tiên!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "whose TLS certificates",
          "automatically.",
          "We deprecated",
          "could not be rotated",
          "the authentication service"
        ],
        answer: "We deprecated the authentication service whose TLS certificates could not be rotated automatically.",
        vi: "Chúng tôi đã ngừng sử dụng dịch vụ xác thực mà chứng chỉ TLS của nó không thể tự động xoay vòng được."
      },
      fillBlank: {
        sentence: "The staging cluster _____ we run nightly chaos-engineering tests is isolated from customer data.",
        answer: "where",
        accepted: ["where", "in which", "on which"],
        hint: "Mệnh đề sau chỗ trống ('we run nightly chaos-engineering tests') đã đầy đủ cả S + V + O!",
        explain: "Danh từ đứng trước là nơi chốn/môi trường ('The staging cluster') và mệnh đề theo sau ('we run nightly chaos-engineering tests') đã hoàn chỉnh cả Chủ ngữ, Động từ lẫn Tân ngữ -> cần trạng từ quan hệ chỉ nơi chốn 'where' (tương đương 'in which' / 'on which')."
      }
    },
    quiz: [
      {
        q: "Apex Logistics is seeking a Principal Java Architect _____ has extensive hands-on experience with high-frequency trading systems.",
        options: ["whom", "whose", "who", "which"],
        answer: 2,
        explain: "Đáp án đúng là 'who' (C). Danh từ đứng trước 'a Principal Java Architect' chỉ người (loại D 'which'), và ngay sau chỗ trống là động từ chia thì 'has' đang thiếu Chủ ngữ -> chọn 'who'. Loại 'whom' (chỉ làm tân ngữ) và 'whose' (sau whose phải là danh từ sở hữu, không đi với trợ động từ/động từ 'has' trực tiếp)."
      },
      {
        q: "The incident postmortem identified five misconfigured firewall rules, three of _____ had been copied from a legacy staging script.",
        options: ["them", "which", "that", "those"],
        answer: 1,
        explain: "Đáp án đúng là 'which' (B). Câu có 2 động từ chia thì ('identified' và 'had been copied') được ngăn cách bởi dấu phẩy ',' mà không có liên từ 'and'. Vì vậy ta cần một đại từ quan hệ đi sau giới từ 'of' thay thế cho 'rules' (vật) -> 'three of which'. Loại 'them/those' (gây lỗi Comma Splice) và 'that' (cấm đứng sau giới từ 'of')."
      },
      {
        q: "CloudSphere Inc. will relocate its headquarters to a newly renovated tower _____ energy consumption is forty percent lower than industry averages.",
        options: ["where", "which", "whose", "in which"],
        answer: 2,
        explain: "Đáp án đúng là 'whose' (C). Đừng bị chữ 'tower' (tòa tháp) lừa chọn 'where'! Nhìn sau chỗ trống là cụm danh từ không mạo từ 'energy consumption' (mức tiêu thụ năng lượng CỦA tòa tháp đó) + 'is lower' -> quan hệ sở hữu của vật -> bắt buộc dùng 'whose'."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G3_5: RÚT GỌN MỆNH ĐỀ QUAN HỆ (V-ING, V-ED/P2, TO V) — ĐỌC NHANH PART 7
   * ========================================================================== */
  G3_5: {
    duration: "45 phút",
    toeicTarget: "Bứt phá TOEIC 650–750+ (Điền V-ing/V-ed Part 5 trong 5s & Tăng gấp đôi tốc độ đọc Part 7)",
    javaContext: "Giải mã các câu nén nhiều tầng trong Spring/Oracle Docs, RFC và viết tài liệu kiến trúc súc tích chuẩn kỹ sư bản xứ",
    teacherIntro: "Anh em đã bao giờ đọc một câu trong đề TOEIC Part 7 hoặc tài liệu Spring Security như: 'Tokens issued by an untrusted provider attempting to access protected endpoints are rejected immediately' rồi hoa mắt tự hỏi: 'Sao trong một câu mà có tới 4 động từ issued, attempting, access, are rejected đứng chồng chéo lên nhau, đâu mới là động từ chính?!' Chúc mừng bạn đã chạm tới 'bí mật lớn nhất' ngăn cách người đọc dịch chậm chạp mức 450 với người đọc lướt như gió mức 700+! Người bản xứ cực kỳ chuộng nén gọn Mệnh đề quan hệ bằng cách cắt bỏ `who/which/that + be`. Hiểu thấu cơ chế nén này, mắt bạn sẽ tự động đóng khung các cụm bổ nghĩa và nhìn xuyên thấu cấu trúc câu dài 40 từ chỉ trong 2 giây!",
    javaAnalogy: {
      title: "Refactoring Anonymous Class Dài Dòng Sang Lambda / Method Reference",
      body: "Trong Java trước phiên bản 8, để lọc danh sách request, ta phải viết rất rườm rà với boilerplate `new Predicate<Request>() { public boolean test(Request r) { return r.isAuthenticated(); } }` — giống hệt mệnh đề đầy đủ `requests which are sent to the gateway`. Từ Java 8+, ta lược bỏ toàn bộ phần khung thừa, chỉ giữ lại lõi logic: `sent to the gateway` (Bị động `V-ed/P2`) hoặc `handling user traffic` (Chủ động `V-ing`). Trình biên dịch tiếng Anh nhận diện ngay: một động từ dạng `V-ing` đứng khơi khơi không có `am/is/are`, hoặc `P2` đứng ngay sau danh từ mà không có `be/have`, CHẮC CHẮN 100% chỉ là mệnh đề quan hệ rút gọn bổ nghĩa chứ KHÔNG PHẢI động từ chính của câu!"
    },
    objectives: [
      "Phân biệt tức thì Rút gọn Chủ động (V-ing) vs Rút gọn Bị động (V-ed/P2) để giải quyết gọn ghẽ dạng câu bẫy kinh điển nhất TOEIC Part 5.",
      "Nắm vững trường hợp bắt buộc rút gọn bằng 'to V' (sau the first, the last, the only, so sánh nhất, hoặc diễn tả mục đích/nhiệm vụ cần làm).",
      "Phát triển kỹ năng 'Tách lõi câu' (Main Verb Isolation) để không bao giờ nhầm lẫn giữa Động từ chính chia thì và Phân từ rút gọn khi đọc nhanh TOEIC Part 7."
    ],
    formulaCards: [
      {
        label: "Quy tắc 1 • Rút gọn Chủ động -> V-ing",
        formula: "N + [who / which / that + V(chủ động mọi thì)]  ===>  N + V-ing + (Tân ngữ / Trạng ngữ)",
        note: "Dấu hiệu nhận diện nhanh: Nếu là ngoại động từ mà phía sau CÓ TÂN NGỮ trực tiếp (VD: 'engineers _____ the platform' -> có 'the platform'), hoặc là nội động từ (consist of, belong to, result from, remain, arrive, work) -> Chọn ngay V-ing!"
      },
      {
        label: "Quy tắc 2 • Rút gọn Bị động -> V-ed / P2",
        formula: "N + [who / which / that + be + V-ed/P2]  ===>  N + V-ed/P2 + (by / in / at / to / for / with...)",
        note: "Dấu hiệu nhận diện nhanh: Ngoại động từ nhưng phía sau KHÔNG CÓ TÂN NGỮ (mà gặp ngay Giới từ `by/in/to/for`, Trạng từ, hoặc Động từ chính của câu) -> Chọn ngay V-ed/P2!"
      },
      {
        label: "Quy tắc 3 • Rút gọn thành To-V (Số thứ tự & Mục đích)",
        formula: "[the first / second / last / only / next / So sánh nhất] + N + TO V (chủ động) / TO BE P2 (bị động)",
        note: "Ngoài ra còn dùng khi mệnh đề gốc mang hàm ý `can / must / should`: 'a strict deadline to meet' (= that we must meet), 'no cached data to return'."
      },
      {
        label: "Quy tắc 4 • Xương sống giải đề Part 5: Đếm Động Từ Chính!",
        formula: "1 Câu đơn (không có liên từ/đại từ quan hệ) = ĐÚNG 1 Động từ chia thì! Các động từ còn lại BẮT BUỘC ở dạng Rút gọn (V-ing / P2 / to V)!",
        note: "Nếu câu ĐÃ CÓ động từ chia thì rồi -> Loại sạch đáp án chia thì! Ngược lại nếu câu CHƯA CÓ động từ chia thì -> Phải chọn động từ chia thì (đừng chọn nhầm V-ing!)."
      }
    ],
    sections: [
      {
        heading: "1. Quy tắc 'Có Tân Ngữ hay Không' — Tuyệt chiêu 5 Giây Chọn V-ing hay V-ed/P2",
        paragraphs: [
          "Trong đề thi TOEIC Part 5, bạn sẽ gặp câu kiểu: `All pull requests _____ the core payment module require approval from two senior architects.` với 4 đáp án `(A) modify (B) modifies (C) modifying (D) modified`. Làm sao giải đúng 100% trong 5 giây?",
          "Bước 1: Nhìn toàn câu thấy đã có động từ chính chia thì là **`require`** (và không có liên từ nào nối 2 mệnh đề) -> Loại ngay 2 động từ chia thì `(A) modify` và `(B) modifies`! Bước 2: Còn `(C) modifying` (Chủ động) và `(D) modified` (Bị động). Nhìn ngay sau chỗ trống có cụm danh từ **`the core payment module`** làm Tân ngữ cho hành động sửa đổi ('các PR *sửa đổi module thanh toán*') -> Chủ động -> Khoanh ngay **`(C) modifying`**!"
        ],
        bullets: [
          "**Ngoại động từ + CÓ Tân ngữ phía sau -> Chọn V-ing (Chủ động)**: *Anyone **requesting** [a refund]*; *Microservices **consuming** [events from this topic]*.",
          "**Ngoại động từ + KHÔNG có Tân ngữ (gặp giới từ `in/by/for/at/to` hoặc dấu câu) -> Chọn V-ed/P2 (Bị động)**: *Payloads **compressed** [with Gzip]*; *Documents **attached** [to this email]*; *Funds **allocated** [for cloud R&D]*.",
          "**CẢNH BÁO ĐỎ — Nhóm Nội động từ KHÔNG BAO GIỜ có dạng Bị động**: Các động từ như `arrive, occur, happen, arise, remain, exist, belong (to), consist (of), result (in/from), participate (in), specialize (in), comply (with)` là nội động từ (vốn không có tân ngữ và đi kèm giới từ riêng của nó). Khi rút gọn mệnh đề quan hệ, chúng **100% LUÔN DÙNG V-ING**! (VD: *bugs **arising** from race conditions*, *packages **belonging** to the domain layer* — TUYỆT ĐỐI không có *arisen from* hay *belonged to* bị động!).",
          "**CẢNH BÁO 2 — Động từ 2 Tân ngữ (`give, send, offer, award, grant, assign`)**: Dù bị động nhưng phía sau vẫn có thể còn 1 tân ngữ thứ hai (*Engineers **granted** [admin access] must enable hardware MFA* = *who are granted admin access*). Hãy kiểm tra nhanh nghĩa: Kỹ sư *được cấp* quyền chứ không tự cấp quyền cho ai!"
        ]
      },
      {
        heading: "2. Khi nào Rút gọn bằng 'To-V' hoặc Cụm Đồng Vị Ngữ (Appositive)?",
        paragraphs: [
          "Không phải lúc nào bỏ `who/which` cũng biến thành `V-ing` hay `V-ed`. Có hai trường hợp đặc biệt xuất hiện rất đều đặn trong TOEIC 650+ và văn viết chuyên nghiệp đòi hỏi `to V` hoặc rút sạch chỉ còn Cụm danh từ.",
          "Nắm vững hai mẫu này giúp bạn vừa ăn trọn điểm Part 5–6, vừa viết câu giới thiệu bản thân hoặc mô tả thành tựu trong CV cực kỳ súc tích."
        ],
        bullets: [
          "**Sau Số thứ tự, 'the only', 'the last' & So sánh nhất -> LUÔN dùng `to V` (hoặc `to be P2` nếu bị động)**:\n  • Chủ động: *Our payment service was **the first module to adopt** Java 21 in production.*\n  • Bị động: *Legacy XML parsers will be **the first components to be removed** in v4.0.*",
          "**Rút gọn mang sắc thái nghĩa vụ / khả năng / mục đích (`N + to V`)**: *We have three critical vulnerabilities **to patch** before tonight's release* (= *that we must patch*); *Please let me know if you have any metrics **to share***.",
          "**Rút gọn Mệnh đề quan hệ có `be + Danh từ / Tính từ` (Đồng vị ngữ & Cụm tính từ hậu vị)**:\n  • Bỏ `who/which + be` trước Cụm danh từ: *Dr. Lin, [who is] **our Chief Data Scientist**, will lead the workshop.*\n  • Bỏ `who/which + be` trước Cụm tính từ có giới từ đi kèm (`available, responsible, eligible, compatible, familiar`): *All employees **eligible for** the stock-option plan...*; *Any library **compatible with** Jakarta EE 10...*."
        ]
      },
      {
        heading: "3. Kỹ năng 'X-Ray Vision' Đọc Nhanh TOEIC Part 7 Nhờ Nhìn Xuyên Rút Gọn",
        paragraphs: [
          "Trong Part 7, một câu tiêu chuẩn thường lồng 2 lớp rút gọn mệnh đề quan hệ để nén 3 thông tin vào 1 câu. Nếu bạn đọc tuần tự từng chữ mà không tách lớp, bộ nhớ ngắn hạn (working memory) của não sẽ bị tràn trước khi kịp chạm tới cuối câu.",
          "Hãy tập thói quen quét tìm **Động từ chính chia thì (Finite Verb)** làm trục bản lề: toàn bộ phần đứng trước nó là Cụm Chủ ngữ mở rộng, phần sau là Vị ngữ!"
        ],
        bullets: [
          "Ví dụ giải phẫu X-Ray: *`Invoices` **[submitted after the fifteenth of the month]** **[lacking a valid purchase-order number]** `will be processed` in the following billing cycle.*\n  • Trục lõi câu chỉ vỏn vẹn 7 chữ: **Invoices will be processed in the next cycle!**\n  • Lớp bổ nghĩa 1 (P2 bị động): `submitted after the 15th` (được nộp sau ngày 15).\n  • Lớp bổ nghĩa 2 (V-ing chủ động): `lacking a valid PO number` (thiếu mã đơn hàng hợp lệ).",
          "**Phân biệt `V-ed` Quá khứ đơn vs `V-ed` Rút gọn Bị động** (Bí quyết vàng!): Với các động từ có V2 và P2 viết giống hệt nhau (như `released, deployed, purchased, attached`), nếu nó là Ngoại động từ mà ngay sau nó KHÔNG có tân ngữ (VD: `The SDK released yesterday supports HTTP/3`), thì `released` CHẮC CHẮN là phân từ rút gọn ('được phát hành hôm qua'), còn **`supports`** mới là Động từ chính của câu!"
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Passengers **traveling** with oversized musical instruments must check in at Counter 12 at least two hours before departure.",
        vi: "Hành khách đi cùng nhạc cụ quá khổ phải làm thủ tục tại Quầy 12 ít nhất hai giờ trước giờ khởi hành.",
        note: "Câu đã có động từ chính 'must check in'; 'travel' là nội động từ chủ động -> rút gọn thành 'traveling' (= who are traveling)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Any defective merchandise **returned** within thirty days of purchase will be replaced free of charge.",
        vi: "Bất kỳ hàng hóa lỗi nào được trả lại trong vòng 30 ngày kể từ ngày mua sẽ được đổi mới miễn phí.",
        note: "Câu đã có động từ chính 'will be replaced'; hàng hóa 'được trả lại' (sau 'returned' không có tân ngữ mà gặp giới từ 'within') -> rút gọn bị động 'returned'."
      },
      {
        tag: "System Design",
        en: "Events **published** to the order topic are consumed asynchronously by three independent downstream services.",
        vi: "Các sự kiện được xuất bản lên topic đơn hàng được tiêu thụ bất đồng bộ bởi ba dịch vụ hạ nguồn độc lập.",
        note: "'published to the order topic' (= which are published...) là P2 rút gọn bị động; động từ chính là 'are consumed'."
      },
      {
        tag: "Senior Java",
        en: "Threads **waiting** on a database connection from HikariCP will throw a timeout exception after thirty seconds.",
        vi: "Các luồng đang chờ kết nối cơ sở dữ liệu từ HikariCP sẽ ném ra ngoại lệ hết thời gian chờ sau 30 giây.",
        note: "'wait' là nội động từ chủ động -> luôn rút gọn dạng V-ing ('waiting on...'), động từ chính là 'will throw'."
      },
      {
        tag: "Code Review",
        en: "Classes **annotated** with `@Transactional` must be invoked through the Spring proxy to trigger rollback behavior.",
        vi: "Các class được gắn annotation `@Transactional` phải được gọi thông qua proxy của Spring để kích hoạt hành vi rollback.",
        note: "Class 'được gắn' annotation -> rút gọn bị động 'annotated with...' (= which are annotated with)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Ms. Alvarez became **the youngest director to oversee** the company's European cloud infrastructure division.",
        vi: "Bà Alvarez đã trở thành giám đốc trẻ tuổi nhất điều hành mảng hạ tầng đám mây châu Âu của công ty.",
        note: "Sau so sánh nhất ('the youngest director') -> bắt buộc rút gọn mệnh đề quan hệ bằng 'to V' ('to oversee')."
      },
      {
        tag: "TOEIC Part 6",
        en: "Issues **arising** from incompatible JDBC driver versions can be resolved by pinning dependencies in the Maven BOM.",
        vi: "Các sự cố phát sinh từ phiên bản JDBC driver không tương thích có thể được giải quyết bằng cách ghim chặt dependency trong Maven BOM.",
        note: "Siêu bẫy TOEIC: 'arise' (phát sinh) là NỘI ĐỘNG TỪ -> luôn rút gọn bằng V-ing 'arising from' (TUYỆT ĐỐI không dùng 'arisen from'!)."
      },
      {
        tag: "Senior Java",
        en: "The core banking module **consisting of** twelve Maven sub-projects takes eight minutes to compile from scratch.",
        vi: "Module ngân hàng lõi bao gồm 12 dự án con Maven mất tám phút để biên dịch lại từ đầu.",
        note: "'consist of' (bao gồm) không bao giờ chia bị động! Khi rút gọn luôn là 'consisting of' (không bao giờ có 'consisted of' bị động!)."
      },
      {
        tag: "Client Email",
        en: "Please review the architecture diagram **attached** to this message and share your comments before Thursday's call.",
        vi: "Vui lòng xem qua sơ đồ kiến trúc được đính kèm theo tin nhắn này và chia sẻ nhận xét của ngài trước cuộc gọi ngày thứ Năm.",
        note: "'attached to this message' (= which is attached...) là cụm rút gọn kinh điển trong mọi bức email công việc và TOEIC Part 6–7."
      },
      {
        tag: "TOEIC Part 5",
        en: "Only contractors **possessing** a valid security clearance may enter the primary server vault.",
        vi: "Chỉ những nhà thầu sở hữu giấy phép an ninh hợp lệ mới được phép bước vào kho máy chủ chính.",
        note: "Ngoại động từ 'possess' có tân ngữ trực tiếp 'a valid security clearance' phía sau -> rút gọn chủ động 'possessing'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Employees **eligible for** the remote-work stipend may submit their internet bills through the HR portal each month.",
        vi: "Nhân viên đủ điều kiện nhận trợ cấp làm việc từ xa có thể nộp hóa đơn internet qua cổng nhân sự mỗi tháng.",
        note: "Rút gọn 'who are eligible for...' thành cụm tính từ đứng ngay sau danh từ 'Employees eligible for...'."
      },
      {
        tag: "System Design",
        en: "Our payment gateway was **the first internal system to be audited** under the new PCI-DSS v4.0 standard.",
        vi: "Cổng thanh toán của chúng tôi là hệ thống nội bộ đầu tiên được kiểm toán theo tiêu chuẩn PCI-DSS v4.0 mới.",
        note: "Sau 'the first...' + mang nghĩa BỊ ĐỘNG ('được kiểm toán') -> dùng 'to be P2' ('to be audited')."
      },
      {
        tag: "Code Review",
        en: "We still have four flaky integration tests **to stabilize** before cutting the release candidate branch.",
        vi: "Chúng ta vẫn còn bốn bài kiểm tra tích hợp chập chờn cần làm ổn định trước khi tách nhánh release candidate.",
        note: "'tests to stabilize' (= tests that we need to stabilize) dùng 'to V' diễn tả công việc cần hoàn thành."
      },
      {
        tag: "Senior Java",
        en: "Objects **surviving** multiple young-generation garbage collection cycles are promoted to the tenured generation.",
        vi: "Các đối tượng sống sót qua nhiều chu kỳ dọn rác thế hệ trẻ sẽ được thăng cấp lên vùng nhớ thế hệ già (tenured generation).",
        note: "Có tân ngữ 'multiple... cycles' theo sau ngoại động từ 'survive' -> rút gọn chủ động 'surviving'."
      },
      {
        tag: "TOEIC Part 6",
        en: "Mr. Vance, **formerly Head of Engineering at Stripe**, will join our advisory board effective April 1.",
        vi: "Ông Vance, nguyên Giám đốc Kỹ thuật tại Stripe, sẽ gia nhập ban cố vấn của chúng tôi kể từ ngày 1 tháng 4.",
        note: "Rút gọn mệnh đề quan hệ 'who was formerly...' thành cụm danh từ đồng vị ngữ nằm gọn giữa hai dấu phẩy."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Requests send to the API gateway without an Authorization header are rejected.",
          fix: "Requests sent to the API gateway without an Authorization header are rejected.",
          why: "Câu đã có động từ chính 'are rejected' ở cuối! Đầu câu không thể dùng động từ nguyên mẫu 'send', mà phải dùng P2 bị động 'sent' (= which are sent)."
        },
        {
          bug: "The microservice is consisted of three layers: controller, service, and repository.",
          fix: "The microservice consists of three layers... (Rút gọn: The microservice consisting of three layers...)",
          why: "Lỗi kinh điển của 90% Dev Việt! 'Consist of' là nội động từ chủ động, CẤM chia bị động 'be consisted of' hay rút gọn thành 'consisted of' (nếu muốn bị động phải dùng 'be composed of' / 'be made up of')."
        },
        {
          bug: "Developers worked remotely from different time zones rely heavily on asynchronous docs.",
          fix: "Developers working remotely from different time zones rely heavily on asynchronous docs.",
          why: "'work' là nội động từ chủ động (các lập trình viên tự làm việc từ xa) -> phải rút gọn thành 'working', không dùng 'worked'."
        },
        {
          bug: "All the logs collecting by Fluentd are forwarded to OpenSearch.",
          fix: "All the logs collected by Fluentd are forwarded to OpenSearch.",
          why: "Logs 'được thu thập bởi' Fluentd (sau chỗ trống không có tân ngữ mà gặp ngay 'by Fluentd') -> bắt buộc dùng dạng bị động 'collected'."
        },
        {
          bug: "The new caching layer handling 50,000 requests per second seamlessly.",
          fix: "The new caching layer handles 50,000 requests per second seamlessly.",
          why: "Lạm dụng V-ing làm câu MẤT ĐỘNG TỪ CHÍNH (Sentence Fragment)! Trong cả câu chưa có động từ chia thì nào nên phải chia thì 'handles'."
        }
      ]
    },
    toeicTips: [
      "Quy tắc Vàng Đếm Động Từ Part 5: Gặp 4 đáp án là biến thể của 1 động từ (VD: `(A) submit (B) submits (C) submitting (D) submitted`), việc ĐẦU TIÊN là quét cả câu xem ĐÃ CÓ động từ chính chia thì chưa! Nếu đã có rồi (và không có who/which/and/because) -> Gạch thẳng tay (A) và (B) trong 1 giây, chỉ còn chọn giữa (C) `V-ing` và (D) `V-ed`!",
      "Mẹo chọn nhanh giữa `V-ing` và `V-ed` trong 3 giây: Nhìn ngay sau chỗ trống! Thấy Cụm danh từ làm tân ngữ -> chọn `V-ing`; thấy Giới từ (`by, in, at, for, to, with, from`) -> 90% chọn `V-ed` (chỉ trừ 6 nội động từ chủ động phải nhớ kỹ: `consist of, belong to, result from/in, arise from, participate in, comply with` -> luôn chọn `V-ing`!).",
      "Thấy trước danh từ có `the first, the second, the last, the only` hoặc So sánh nhất (`the largest, the best`) mà ngay sau danh từ là chỗ trống chọn dạng động từ -> Nhắm mắt khoanh ngay **`to V`** (hoặc `to be P2`) trong 2 giây!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "are validated",
          "sent to",
          "against the OpenAPI schema.",
          "All incoming payloads",
          "the public gateway"
        ],
        answer: "All incoming payloads sent to the public gateway are validated against the OpenAPI schema.",
        vi: "Tất cả các gói dữ liệu đầu vào được gửi tới cổng công khai đều được xác thực đối chiếu với đặc tả OpenAPI."
      },
      fillBlank: {
        sentence: "Ms. Tran was the first backend architect _____ propose migrating our monolith to event-driven microservices.",
        answer: "to",
        accepted: ["to"],
        hint: "Chú ý cụm số thứ tự 'the first backend architect' đứng ngay trước chỗ trống!",
        explain: "Khi danh từ đứng trước có chứa số thứ tự ('the first', 'the second', 'the last', 'the only') hoặc so sánh nhất, mệnh đề quan hệ rút gọn theo sau bắt buộc dùng cấu trúc 'to + V nguyên thể' ('to propose' = 'who proposed')."
      }
    },
    quiz: [
      {
        q: "Any third-party library _____ known critical CVEs will automatically fail the Maven Enforcer security gate in our CI pipeline.",
        options: ["contain", "contains", "containing", "contained"],
        answer: 2,
        explain: "Đáp án đúng là 'containing' (C). Câu đã có động từ chính chia thì là 'will automatically fail' và không có liên từ/đại từ nối -> cần rút gọn mệnh đề quan hệ (loại A, B). Phía sau chỗ trống có cụm danh từ 'known critical CVEs' làm Tân ngữ trực tiếp cho ngoại động từ 'contain' ('thư viện chứa các lỗ hổng CVE') -> chủ động -> dùng 'containing'."
      },
      {
        q: "Financial reports _____ after the Friday 5:00 P.M. cutoff will not be included in the quarterly board presentation.",
        options: ["submitting", "submitted", "submit", "will submit"],
        answer: 1,
        explain: "Đáp án đúng là 'submitted' (B). Câu đã có động từ chính 'will not be included' -> loại động từ chia thì C và D. Xét 'submit' là ngoại động từ nhưng phía sau chỗ trống gặp ngay giới từ 'after' (không có tân ngữ) và 'Financial reports' chịu tác động 'được nộp' -> rút gọn bị động 'submitted' (= which are submitted)."
      },
      {
        q: "Unexpected latency spikes _____ from unindexed foreign keys degraded checkout performance during the flash sale.",
        options: ["resulted", "result", "results", "resulting"],
        answer: 3,
        explain: "Đáp án đúng là 'resulting' (D). Động từ chính chia thì của câu là 'degraded' ('degraded checkout performance') -> loại B, C. Bẫy cực gắt ở (A) 'resulted': 'result from' (bắt nguồn từ / do bởi) là NỘI ĐỘNG TỪ chủ động, tuyệt đối không có dạng bị động! Do đó rút gọn của 'which resulted from' bắt buộc phải là 'resulting from'."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G3_6: CÂU ĐIỀU KIỆN (0, 1, 2, 3) & ĐẢO NGỮ ĐIỀU KIỆN CHUẨN TOEIC (SHOULD / WERE / HAD)
   * ========================================================================== */
  G3_6: {
    duration: "45 phút",
    toeicTarget: "Bứt phá TOEIC 600–750+ (Part 5, Part 6 & Mẫu câu Vàng trong Email/Postmortem Part 7)",
    javaContext: "Viết đặc tả Guard Clause, phân tích kịch bản giả định 'What-if' trong System Design, viết RCA Postmortem và Email đối tác lịch thiệp",
    teacherIntro: "Không ai trên thế giới hiểu bản chất Câu điều kiện (`If-Else`) nhanh hơn lập trình viên! Tuy nhiên, trong ngôn ngữ lập trình Java, mọi câu lệnh `if (condition)` đều chỉ kiểm tra đúng/sai đơn thuần; còn trong tiếng Anh, **thì của động từ** bên trong mệnh đề `If` lại mã hóa thêm một tầng thông tin cực kỳ tinh tế: người nói đánh giá kịch bản đó là *quy luật tất yếu* (Loại 0), *hoàn toàn có thể xảy ra trên Production* (Loại 1), *chỉ là giả định trái ngược thực tế hiện tại* (Loại 2), hay *nuối tiếc một sự cố đã xảy ra trong quá khứ* (Loại 3). Đặc biệt hơn, hôm nay bạn sẽ làm chủ 3 cấu trúc **Đảo ngữ bỏ chữ `If`** (`Should you...`, `Were we to...`, `Had the service...`) — vũ khí vừa xuất hiện liên tục trong đề thi TOEIC, vừa nâng tầm email của bạn lên chuẩn mực Giám đốc Kỹ thuật quốc tế!",
    javaAnalogy: {
      title: "4 Môi Trường Thực Thi Của Nhánh If-Else & Guard Clause Không Từ Khóa If",
      body: "Hãy ánh xạ 4 loại câu điều kiện sang 4 ngữ cảnh quen thuộc hàng ngày của Java Engineer:\n• **Loại 0** (`If + HTĐ, HTĐ`) = Hàm thuần khiết `pure function` / quy luật hệ thống tất định (hễ Pod hết RAM thì OOMKiller giết tiến trình).\n• **Loại 1** (`If + HTĐ, will/imperative`) = Logic nghiệp vụ chạy thật trên Runtime (nếu checksum sai, hãy trả về HTTP 400 — lưu ý vế `if` cấm dùng `will`!).\n• **Loại 2** (`If + QKĐ/were, would + V`) = `Mockito.when(...)` giả lập một kịch bản không có thật ở hiện tại (nếu hiện giờ ta có 100 kỹ sư — thực tế chỉ có 8!).\n• **Loại 3** (`If + had P2, would have P2`) = Postmortem / Time-travel Debugging mổ xẻ sự cố hôm qua đã đóng log (giá như hôm qua có rate limiter thì đã không sập!).\n• **Đảo ngữ `Should / Were / Had`** = Cú pháp Guard Clause thanh lịch đẩy trợ động từ lên đầu câu thay thế hoàn toàn từ khóa `If`!"
    },
    objectives: [
      "Nắm chắc công thức lùi thì và sự phối hợp động từ chuẩn xác giữa Mệnh đề If và Mệnh đề chính của cả 4 loại câu điều kiện (0, 1, 2, 3) và Điều kiện hỗn hợp (3 -> 2).",
      "Phản xạ trong 3 giây trước 3 cấu trúc Đảo ngữ Câu điều kiện không có 'If' đứng đầu câu: Should + S + V_bare, Were + S + (to V), và Had + S + (not) + P2.",
      "Ứng dụng tự nhiên cấu trúc 'Should you have any questions...' trong Email khách hàng và 'Had we implemented..., ...would not have...' trong báo cáo Blameless Postmortem."
    ],
    formulaCards: [
      {
        label: "Loại 0 & Loại 1 • Quy luật & Thực tế Khả thi",
        formula: "If + S + V(hiện tại đơn), S + V(hiện tại đơn) [Loại 0]  ||  S + will / can / may / should + V_bare (hoặc V_mệnh_lệnh / Please V) [Loại 1]",
        note: "Bẫy số 1 TOEIC: Mệnh đề sau 'If' ở Loại 1 KHÔNG BAO GIỜ dùng 'will'! Và mệnh đề chính trong TOEIC rất hay là câu mệnh lệnh ('If the build fails, please notify DevOps')."
      },
      {
        label: "Loại 2 • Giả định Trái ngược Hiện tại",
        formula: "If + S + were (cho MỌI ngôi!) / V2-ed, S + would / could / might + V(nguyên thể)",
        note: "Dùng khi điều kiện không có thật ở hiện tại hoặc đưa lời khuyên ('If our cluster were multi-region right now, failover would be automatic')."
      },
      {
        label: "Loại 3 & Hỗn hợp • Trái ngược Quá khứ (Postmortem)",
        formula: "If + S + had + P2, S + would / could / might + have + P2  [Nếu kết quả ở HIỆN TẠI 'now/today': S + would + V_nguyên_thể]",
        note: "Nhìn một vế suy ra vế kia ngay trong 3 giây: Thấy 'had + P2' ở vế If -> tìm 'would/could + have + P2' ở vế chính (và ngược lại!)."
      },
      {
        label: "Bộ Ba Đảo Ngữ Vàng Không Cần 'If' (Top tủ TOEIC 600–750+!)",
        formula: "Loại 1: SHOULD + S + V(nguyên thể!)  ||  Loại 2: WERE + S + Adj/N / to V  ||  Loại 3: HAD + S + (not) + P2",
        note: "Siêu bẫy ở Đảo ngữ Loại 1: dù chủ ngữ là ngôi thứ 3 số ít ('Should the server FAIL', không thêm -s!), động từ luôn ở dạng nguyên thể vì đi với trợ động từ 'Should'!"
      }
    ],
    sections: [
      {
        heading: "1. Quy tắc 'Đối Xứng Cặp Đôi' Giúp Giải Nhanh Câu Điều Kiện Trong 5 Giây",
        paragraphs: [
          "Trong đề thi TOEIC Part 5, các câu hỏi về Câu điều kiện luôn cho sẵn động từ của MỘT vế (hoặc vế `If`, hoặc vế chính) và bắt bạn điền động từ của vế còn lại. Do đó, bạn không cần đoán mò ngữ cảnh mà chỉ cần đối chiếu đúng 'cặp bài trùng' của từng loại!",
          "Điểm cần đặc biệt lưu ý ở Loại 1 trong môi trường công sở và đề TOEIC: mệnh đề chính không nhất thiết phải có chữ `will`! Hơn một nửa số câu điều kiện Loại 1 trong đề ETS có mệnh đề chính là **Câu mệnh lệnh** bắt đầu bằng `please + V_bare` hoặc `V_bare` trực tiếp."
        ],
        bullets: [
          "**Cặp đối xứng Loại 1**: Vế `If` chia **Hiện tại đơn** (`V / V-s/es` hoặc `has/have P2` nhấn mạnh hoàn tất) <-> Vế chính dùng **`will / can / may / must / should + V`** HOẶC **`Please + V_bare`**. (VD: *If the health check **returns** 503, Kubernetes **will restart** the container*).",
          "**Cặp đối xứng Loại 2**: Vế `If` chia **Quá khứ đơn** (`V2/-ed`, động từ `be` ưu tiên dùng **`were`** cho tất cả các ngôi `I/he/she/it`) <-> Vế chính dùng **`would / could / might + V_bare`**. (CẤM dùng `would have P2` đi với `V2`!).",
          "**Cặp đối xứng Loại 3**: Vế `If` chia **Quá khứ hoàn thành** (`had + P2`) <-> Vế chính dùng **`would / could / might + have + P2`**. (VD: *If we **had indexed** the `created_at` column, the query **would not have timed out***).",
          "**Điều kiện Hỗn hợp (Mixed 3 -> 2 — Mốc 700+)**: Nguyên nhân không có thật trong quá khứ (`If + had P2`), nhưng để lại hệ quả trái ngược ở **ngay hiện tại** (luôn có dấu hiệu **`now / today / currently`** ở cuối câu) -> Vế chính dùng **`would + V_bare`**! (VD: *If we **had documented** the legacy API two years ago, onboarding new hires **would be** much smoother **today***)."
        ]
      },
      {
        heading: "2. Ba Cấu Trúc Đảo Ngữ Câu Điều Kiện — 'Đặc Sản' Của TOEIC & Email Quốc Tế",
        paragraphs: [
          "Nếu chưa học bài này, khi gặp câu bắt đầu bằng `Had the shipment arrived on time...` hay `Should the client request a demo...` mà cuối câu lại là dấu chấm `.` chứ không phải dấu hỏi chấm `?`, bạn sẽ cực kỳ bối rối vì tưởng đó là câu hỏi viết sai dấu câu!",
          "Thực chất, khi bỏ chữ `If` đi và đảo trợ động từ (`Should`, `Were`, `Had`) lên đầu câu, câu văn trở nên trang trọng, súc tích và chuyên nghiệp hơn hẳn. Đây là dạng câu xuất hiện với tần suất gần như 100% trong các bức email chăm sóc khách hàng của TOEIC Part 6–7."
        ],
        bullets: [
          "**Đảo ngữ Loại 1 — `Should + S + (not) + V_nguyên_thể`**: Thay thế cho `If + S + (should) + V`. Lưu ý cực quan trọng: vì `Should` là modal verb nên động từ chính của mọi chủ ngữ đều trở về **nguyên thể không to** (kể cả động từ `be` -> `Should the API **be** unavailable...`, không dùng `is`!).",
          "**Đảo ngữ Loại 2 — `Were + S + (not) + Adj/Noun` HOẶC `Were + S + (not) + to V`**:\n  • Nếu động từ gốc là `were`: chỉ cần đảo `Were` lên đầu (*Were I in your position...* = *If I were...*).\n  • Nếu động từ gốc là động từ thường (`migrated, failed`): mượn `Were + S + to V_bare` (***Were** our primary region **to go** offline, Route 53 would reroute traffic*). Nhấn mạnh giả định rất khó xảy ra!",
          "**Đảo ngữ Loại 3 — `Had + S + (not) + P2`**: Thay thế cho `If + S + had (not) + P2`. Chú ý vị trí chữ **`not`** luôn đứng **SAU Chủ ngữ** (TUYỆT ĐỐI không viết `Hadn't the server...`, phải viết ***Had** the server **not** crashed...*!)."
        ]
      },
      {
        heading: "3. Các Cấu Trúc Thay Thế 'If' Tinh Tế Khác: Without / But for / Otherwise",
        paragraphs: [
          "Để kiểm tra chiều sâu ngôn ngữ ở mốc 700+, đề thi TOEIC và văn viết kiến trúc còn dùng các cụm giới từ ngắn gọn chỉ vỏn vẹn 1–2 chữ để thay thế cho cả một mệnh đề điều kiện phủ định `If it were not for...` hoặc `If it had not been for...`.",
          "Thuộc lòng bộ từ này giúp bạn viết những câu đánh giá vai trò của công nghệ/kiến trúc cực kỳ ấn tượng."
        ],
        bullets: [
          "**Without + N / But for + N (= Nếu không có...)**: Đi với mệnh đề chính Loại 2 (nếu xét ở hiện tại: ***Without** connection pooling, our database **would collapse** under load*) hoặc Loại 3 (nếu xét ở quá khứ: ***But for** the automated canary rollback, the buggy release **would have affected** all users*).",
          "**If it were not for + N** (Loại 2) & **If it had not been for + N** (Loại 3) -> Đảo ngữ tương ứng: ***Were it not for** + N* và ***Had it not been for** + N*.",
          "**Suppose / Supposing (that) / Assuming (that) + S + V**: Rất hay dùng khi thảo luận bài toán System Design phỏng vấn ('Giả sử chúng ta có 10 triệu DAU...': ***Assuming that** our system handles 10,000 writes per second, how should we shard the table?*)."
        ]
      }
    ],
    examples: [
      {
        tag: "System Design",
        en: "**If** a consumer instance **fails** to send a heartbeat within the session timeout, the Kafka coordinator **triggers** a rebalance.",
        vi: "Nếu một tiến trình consumer không gửi tín hiệu nhịp tim trong khoảng thời gian chờ phiên, bộ điều phối Kafka sẽ kích hoạt quá trình cân bằng lại.",
        note: "Câu điều kiện Loại 0 (hiện tại đơn ở cả 2 vế) mô tả cơ chế vận hành tất định của hệ thống."
      },
      {
        tag: "TOEIC Part 5",
        en: "If the updated purchase order **is approved** before noon, the warehouse team **will dispatch** the servers this afternoon.",
        vi: "Nếu đơn đặt hàng cập nhật được phê duyệt trước buổi trưa, đội ngũ kho hàng sẽ xuất xưởng các máy chủ ngay chiều nay.",
        note: "Điều kiện Loại 1: vế If chia hiện tại đơn bị động ('is approved' — không dùng 'will be approved'), vế chính dùng 'will dispatch'."
      },
      {
        tag: "Code Review",
        en: "**If** this webhook payload **contains** duplicate event IDs, **discard** the redundant records idempotently.",
        vi: "Nếu gói tin webhook này chứa các mã sự kiện trùng lặp, hãy loại bỏ các bản ghi dư thừa theo cơ chế bất biến (idempotent).",
        note: "Điều kiện Loại 1 với mệnh đề chính ở dạng Câu mệnh lệnh bắt đầu trực tiếp bằng động từ nguyên mẫu 'discard'."
      },
      {
        tag: "Client Email",
        en: "**Should** you **require** any assistance configuring SSO integration, please reach out to our solutions architect directly.",
        vi: "Nếu ngài cần bất kỳ sự hỗ trợ nào trong việc cấu hình tích hợp đăng nhập một lần (SSO), vui lòng liên hệ trực tiếp với kiến trúc sư giải pháp của chúng tôi.",
        note: "Đảo ngữ Loại 1 'Should + S + V_nguyên_thể' (= If you should require...) — câu kết email vàng của TOEIC và giao tiếp B2B!"
      },
      {
        tag: "TOEIC Part 5",
        en: "**Should** the keynote speaker's flight **be** delayed, the panel discussion will be moved to the morning slot.",
        vi: "Nếu chuyến bay của diễn giả chính bị hoãn, phiên thảo luận chuyên đề sẽ được chuyển lên khung giờ buổi sáng.",
        note: "Chú ý siêu bẫy: chủ ngữ 'flight' số ít nhưng đứng trong cấu trúc đảo ngữ 'Should + S + V_bare' nên dùng nguyên mẫu 'be' (không dùng 'is'!)."
      },
      {
        tag: "Senior Java",
        en: "If Java **supported** true value types today, high-frequency numerical arrays **would incur** far less pointer indirection.",
        vi: "Nếu hiện nay Java hỗ trợ kiểu tham trị thực thụ (value types), các mảng số học tần suất cao sẽ chịu ít chi phí tham chiếu con trỏ gián tiếp hơn nhiều.",
        note: "Điều kiện Loại 2 giả định điều trái ngược với hiện tại ('today') -> 'supported' (V2) + 'would incur'."
      },
      {
        tag: "TOEIC Part 5",
        en: "If our regional office **were** closer to the central train station, commuting **would be** much easier for our staff.",
        vi: "Nếu văn phòng khu vực của chúng tôi nằm gần ga tàu trung tâm hơn, việc đi lại sẽ dễ dàng hơn nhiều cho nhân viên.",
        note: "Điều kiện Loại 2 với động từ to-be dùng 'were' cho chủ ngữ số ít 'our regional office'."
      },
      {
        tag: "System Design",
        en: "**Were** the primary AWS region **to suffer** a complete outage, our active-passive disaster recovery site **would take over** within five minutes.",
        vi: "Giả sử toàn bộ vùng AWS chính gặp sự cố ngừng hoạt động hoàn toàn, trung tâm khôi phục thảm họa dự phòng của chúng ta sẽ tiếp quản trong vòng năm phút.",
        note: "Đảo ngữ Loại 2 với động từ thường: 'Were + S + to V_bare' nhấn mạnh kịch bản thảm họa xác suất thấp nhưng đã có phương án ứng phó."
      },
      {
        tag: "Senior Java",
        en: "If we **had bounded** the `CompletableFuture` thread pool size, the service **would not have crashed** with an `OutOfMemoryError`.",
        vi: "Giá như chúng ta giới hạn kích thước thread pool của `CompletableFuture`, dịch vụ đã không bị sập vì lỗi `OutOfMemoryError`.",
        note: "Điều kiện Loại 3 chuẩn mực trong họp Postmortem rút kinh nghiệm sự cố đã xảy ra ('had bounded' <-> 'would not have crashed')."
      },
      {
        tag: "TOEIC Part 6",
        en: "**Had** the vendor **notified** us of the API deprecation earlier, our developers could have completed the migration without overtime.",
        vi: "Giá như nhà cung cấp thông báo cho chúng tôi về việc ngừng hỗ trợ API sớm hơn, các lập trình viên của chúng tôi đã có thể hoàn tất chuyển đổi mà không phải làm thêm giờ.",
        note: "Đảo ngữ Loại 3: bỏ 'If', đảo 'Had' lên trước chủ ngữ 'the vendor' + P2 'notified'."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Had** the firewall patch **not been applied** on Tuesday night, our internal network would have been vulnerable to the zero-day exploit.",
        vi: "Nếu bản vá tường lửa không được áp dụng vào tối thứ Ba, mạng nội bộ của chúng ta đã bị phơi bày trước lỗ hổng khai thác zero-day.",
        note: "Đảo ngữ Loại 3 dạng phủ định + bị động: 'Had + S + NOT + been P2' (chữ 'not' luôn đứng sau chủ ngữ!)."
      },
      {
        tag: "Senior Java",
        en: "If the founding team **had chosen** a modular monolith architecture three years ago, our deployment pipeline **would be** much simpler **today**.",
        vi: "Giá như đội ngũ sáng lập chọn kiến trúc monolith phân tách module cách đây ba năm, thì đường ống triển khai của chúng ta ngày nay đã đơn giản hơn nhiều.",
        note: "Điều kiện Hỗn hợp (3 -> 2): nguyên nhân quá khứ ('three years ago' -> 'had chosen') dẫn tới hệ quả hiện tại ('today' -> 'would be')."
      },
      {
        tag: "System Design",
        en: "**Without** distributed tracing headers like W3C Trace Context, pinpointing latency bottlenecks across twenty microservices **would be** nearly impossible.",
        vi: "Nếu không có các header truy vết phân tán như W3C Trace Context, việc chỉ đích danh điểm nghẽn độ trễ qua 20 microservice gần như là bất khả thi.",
        note: "'Without + Cụm danh từ' thay thế gọn đẹp cho 'If it were not for...' đi kèm 'would be' ở vế chính."
      },
      {
        tag: "TOEIC Part 7",
        en: "**But for** the rapid intervention of our on-call site reliability engineers, yesterday's DNS misconfiguration **would have caused** a two-hour global outage.",
        vi: "Nếu không nhờ sự can thiệp nhanh chóng của các kỹ sư độ tin cậy hệ thống trực ca, lỗi cấu hình DNS hôm qua đã gây ra sự cố sập toàn cầu suốt hai tiếng.",
        note: "'But for + Cụm danh từ' (= Had it not been for...) đi với 'would have caused' (Loại 3) để ghi nhận công lao trong báo cáo sự cố."
      },
      {
        tag: "System Design",
        en: "**Assuming that** each user uploads two megabytes of telemetry daily, our cold storage will grow by sixty terabytes per month.",
        vi: "Giả sử mỗi người dùng tải lên hai megabyte dữ liệu đo xa mỗi ngày, dung lượng lưu trữ lạnh của chúng ta sẽ tăng thêm 60 terabyte mỗi tháng.",
        note: "'Assuming that + S + V' là cách mở đầu phép tính ước lượng tải (Back-of-the-envelope estimation) kinh điển trong phỏng vấn System Design."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "If the integration test will fail, GitHub Actions will block the merge button.",
          fix: "If the integration test fails, GitHub Actions will block the merge button.",
          why: "Bẫy số 1 mọi thời đại: Không bao giờ dùng 'will' bên trong mệnh đề điều kiện 'If' (Loại 1)! Phải lùi về Hiện tại đơn 'fails'."
        },
        {
          bug: "Should the payment gateway fails to respond, retry with exponential backoff.",
          fix: "Should the payment gateway fail to respond, retry with exponential backoff.",
          why: "Trong đảo ngữ Loại 1 'Should + S + V', chữ 'Should' đã là trợ động từ khuyết thiếu nên động từ chính bắt buộc giữ nguyên thể 'fail' (bỏ -s!)."
        },
        {
          bug: "If we knew about the memory leak yesterday, we would have rolled back immediately.",
          fix: "If we had known about the memory leak yesterday, we would have rolled back immediately.",
          why: "Sự việc trái ngược với QUÁ KHỨ ('yesterday' + vế sau là 'would have rolled back') là Điều kiện Loại 3 -> vế If phải dùng 'had known', không dùng V2 'knew'."
        },
        {
          bug: "Hadn't we enabled database point-in-time recovery, the deleted records would be lost.",
          fix: "Had we not enabled database point-in-time recovery, the deleted records would have been lost.",
          why: "Trong đảo ngữ trang trọng, KHÔNG viết tắt 'Hadn't + S' ở đầu câu mà phải tách 'Had + S + not + P2' (đồng thời quá khứ dùng 'would have been lost')."
        },
        {
          bug: "Were the system experiences high load, auto-scaling would add four new pods.",
          fix: "Were the system to experience high load, auto-scaling would add four new pods.",
          why: "Đảo ngữ Loại 2 với động từ thường bắt buộc phải có 'to': 'Were + S + TO V_nguyên_thể' ('Were the system to experience...')."
        }
      ]
    },
    toeicTips: [
      "Mẹo 'Khớp Cặp 3 Giây' Part 5: Nhìn vế không có chỗ trống trước! Thấy `would/could + V_bare` -> tìm `V2/were` (hoặc đảo ngữ `Were`); thấy `would/could + have + P2` -> tìm ngay `had + P2` (hoặc đảo ngữ `Had`); thấy `will + V` hoặc `Please + V_bare` -> tìm Hiện tại đơn (hoặc đảo ngữ `Should`)!",
      "Mẹo bắt sóng câu Đảo ngữ đứng đầu câu: Khi chỗ trống đứng ĐẦU CÂU `_____ you need...`, `_____ the server crash...`, `_____ we known...` mà 4 đáp án có `Should / Were / Had / If`, hãy nhìn ĐỘNG TỪ phía sau chủ ngữ:\n  • Gặp **V_nguyên_thể** (đặc biệt chủ ngữ số ít mà động từ không có `-s`, hoặc chữ `be`) -> Chọn **`Should`**!\n  • Gặp **`to V`** (hoặc tính từ/cụm giới từ không có động từ khác) -> Chọn **`Were`**!\n  • Gặp **`P2 (V3/-ed)`** -> Chọn **`Had`**!",
      "Ghi nhớ mẫu câu bất tử xuất hiện hàng chục lần trong TOEIC Part 6–7: `Should you have any questions or concerns, please do not hesitate to contact us.` (= `If you have...`)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "your API key",
          "please regenerate",
          "Should you encounter",
          "in the developer portal.",
          "any authentication errors,"
        ],
        answer: "Should you encounter any authentication errors, please regenerate your API key in the developer portal.",
        vi: "Nếu bạn gặp phải bất kỳ lỗi xác thực nào, vui lòng tạo lại khóa API của bạn trên cổng thông tin dành cho lập trình viên."
      },
      fillBlank: {
        sentence: "_____ the on-call engineer configured a circuit breaker earlier, the cascading failure would not have occurred.",
        answer: "Had",
        accepted: ["Had", "had"],
        hint: "Vế chính dùng 'would not have occurred' (Loại 3), còn vế đầu đã có sẵn P2 'configured' mà không có 'if'!",
        explain: "Mệnh đề chính chia 'would not have occurred' là dấu hiệu của Câu điều kiện Loại 3. Ở đầu câu không có 'If' mà đi thẳng tới chủ ngữ + phân từ quá khứ 'configured', nên ta dùng trợ động từ đảo ngữ Loại 3 là 'Had' (= 'If the on-call engineer had configured...')."
      }
    },
    quiz: [
      {
        q: "_____ the client's security team request an on-premise deployment option, our sales engineers can provide the Helm chart bundle.",
        options: ["If", "Should", "Were", "Had"],
        answer: 1,
        explain: "Đáp án đúng là 'Should' (B). Tinh mắt nhìn chủ ngữ 'the client's security team' (ngôi thứ 3 số ít) nhưng động từ đi sau lại là nguyên mẫu KHÔNG có -s ('request')! Nếu chọn (A) 'If' thì động từ bắt buộc phải là 'requests'. Chỉ có cấu trúc đảo ngữ Loại 1 'Should + S + V_nguyên_thể' mới đi với 'request' nguyên mẫu và vế chính 'can provide'."
      },
      {
        q: "If the legacy billing batch job _____ refactored into partitioned Spring Batch steps last quarter, last night's settlement run would not have missed the SLA window.",
        options: ["was", "were", "has been", "had been"],
        answer: 3,
        explain: "Đáp án đúng là 'had been' (D). Dấu hiệu quá khứ rõ ràng 'last quarter' kết hợp với mệnh đề chính 'would not have missed' khẳng định đây là Câu điều kiện Loại 3 ở thể bị động ('được refactor') -> 'If + S + had been + P2'."
      },
      {
        q: "_____ our distributed lock service to become unavailable for more than ten seconds, all payment workers would safely pause order consumption.",
        options: ["Were", "Should", "Had", "Unless"],
        answer: 0,
        explain: "Đáp án đúng là 'Were' (A). Sau chủ ngữ 'our distributed lock service' là cụm nguyên mẫu có 'to' ('to become unavailable') và mệnh đề chính chia Loại 2 ('would safely pause'). Đây chính là công thức đảo ngữ Câu điều kiện Loại 2 với động từ thường: 'Were + S + to V, S + would + V'."
      }
    ]
  }
});
