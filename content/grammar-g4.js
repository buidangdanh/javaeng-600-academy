/* JavaEng 600+ Academy — Học phần G4: Ngữ Pháp Nâng Cao TOEIC 650–750+ & Senior Java (G4_1 -> G4_6)
 * Biên soạn chuyên sâu dành riêng cho Senior Java Developer & Thí sinh mục tiêu TOEIC 650–750+
 */

window.LESSON_DETAILS = window.LESSON_DETAILS || {};

Object.assign(window.LESSON_DETAILS, {
  /* ==========================================================================
   * BÀI G4_1: MỆNH ĐỀ DANH NGỮ (WHAT, WHETHER, THAT, HOW) & CÂU HỎI GIÁN TIẾP
   * ========================================================================== */
  G4_1: {
    duration: "40 phút",
    toeicTarget: "Bứt phá TOEIC 650–750+ (Part 5 phân biệt That/What/Whether & Part 6–7 Câu hỏi gián tiếp)",
    javaContext: "Hỏi làm rõ Requirement với Product Owner / Khách hàng quốc tế cực kỳ lịch sự, chấm dứt lỗi đảo trợ động từ ngô nghê",
    teacherIntro: "Anh em thử kiểm tra xem mình đã bao giờ gõ trên Slack gửi khách hàng Mỹ câu: 'Could you tell me when will the API be ready?' hoặc 'Do you know why did the job fail?' chưa? Nếu có, bạn vừa mắc lỗi số 1 của 85% lập trình viên Việt Nam khi giao tiếp quốc tế: đảo trợ động từ hai lần trong câu hỏi gián tiếp! Chưa hết, ở ngưỡng TOEIC 650–750+, ETS cực kỳ thích đặt cặp bài trùng `that` vs `what` vs `whether` cạnh nhau trong Mệnh đề danh ngữ (Noun Clauses) để kiểm tra xem bạn có thực sự hiểu cấu trúc cây cú pháp của câu phức hay không. Hôm nay, chúng ta sẽ giải quyết dứt điểm cả hai bài toán này bằng tư duy biểu thức lồng nhau (Nested Expressions) trong Java!",
    javaAnalogy: {
      title: "Biểu Thức Trả Về Giá Trị Supplier<T> & Tham Số Truyền Vào Hàm",
      body: "Trong Java, bất kỳ nơi nào nhận một biến `Object x`, bạn đều có thể truyền vào cả một biểu thức hàm trả về kết quả `getResult()`. **Mệnh đề danh ngữ** hoạt động y hệt: cả một cụm `[Từ nối + S + V]` được đóng gói thành MỘT khối Danh từ duy nhất để làm Chủ ngữ (trước động từ chính) hoặc làm Tân ngữ (sau ngoại động từ / giới từ). Trong đó:\n• **`that`** giống wrapper `CompletableFuture<Void>`: mệnh đề bên trong ĐÃ ĐỦ mọi thành phần, `that` chỉ đóng gói mà không tham gia làm biến.\n• **`what`** = `the thing that`: vừa là giá trị trả về bên ngoài, vừa đóng vai trò biến còn khuyết (Subject hoặc Object) bên trong mệnh đề con!\n• **Câu hỏi gián tiếp**: Phần đảo ngữ câu hỏi ĐÃ NẰM Ở HÀM BỌC NGOÀI (`Could you tell me(...)`), nên biểu thức tham số truyền vào bên trong (`when the API will be ready`) bắt buộc giữ nguyên trật tự câu trần thuật `S + V`!"
    },
    objectives: [
      "Nhận diện 4 vị trí vàng của Mệnh đề danh ngữ trong câu (làm Chủ ngữ, Tân ngữ sau động từ, Tân ngữ sau giới từ, và Bổ ngữ sau to-be).",
      "Phân biệt chính xác 100% trong 5 giây giữa 'that' vs 'what' vs 'which/who' và nắm rõ 4 trường hợp BẮT BUỘC dùng 'whether' thay vì 'if'.",
      "Viết và nói trôi chảy Câu hỏi gián tiếp lịch sự (Embedded Questions) trong email khách hàng, họp Refinement và TOEIC Part 2–6–7 mà không bao giờ đảo nhầm trợ động từ."
    ],
    formulaCards: [
      {
        label: "Quy tắc 1 • Phân xử Tử thần: THAT vs WHAT",
        formula: "[Không có N đứng trước] + THAT + Mệnh đề ĐỦ (S + V + O)  ||  [Không có N đứng trước] + WHAT + Mệnh đề KHUYẾT (thiếu S hoặc thiếu O)",
        note: "Nếu trước chỗ trống CÓ Danh từ -> Đó là Mệnh đề quan hệ (chọn which/that, CẤM chọn what!). Nếu trước chỗ trống là Động từ / Giới từ / Đầu câu -> Mệnh đề danh ngữ!"
      },
      {
        label: "Quy tắc 2 • Nghi vấn Lựa chọn: WHETHER vs IF (Có... hay không)",
        formula: "WHETHER + S + V + (or not)  [Đứng được ĐẦU CÂU, SAU GIỚI TỪ, và đi với TO-V: 'whether to retry']",
        note: "Chữ 'if' cũng dịch là 'liệu có... không' khi đứng sau động từ (ask/wonder if), nhưng CẤM dùng 'if' ở đầu câu làm chủ ngữ, CẤM sau giới từ, CẤM đi với 'to V' và CẤM đi trực tiếp 'if or not'!"
      },
      {
        label: "Quy tắc 3 • Câu Hỏi Gián Tiếp Lịch Sự (Embedded Questions)",
        formula: "Could you tell me / Do you know / Please confirm + [when / where / why / how / what / whether] + S + V (chia bình thường!)",
        note: "TUYỆT ĐỐI bỏ trợ động từ nghi vấn `do / does / did` (chia thẳng vào động từ chính!) và giữ `is / are / will / can / have` đứng SAU chủ ngữ S!"
      },
      {
        label: "Quy tắc 4 • Đại từ Mở rộng -EVER (Whoever / Whatever / Whichever)",
        formula: "Whoever (= Anyone who) + V(số ít)  ||  Whatever (= Anything that)  ||  Whichever (= Any one of a specific group)",
        note: "Rất hay ra thi ở đầu câu TOEIC Part 5: xem mệnh đề con thiếu Người ('Whoever deploys last...') hay thiếu Vật ('Whatever causes the lock...') hay chọn trong tập hữu hạn ('Whichever cloud provider you choose...')."
      }
    ],
    sections: [
      {
        heading: "1. Tam Giác Vàng Part 5: Phân Biệt 'That' vs 'What' vs 'Which' Trong 5 Giây",
        paragraphs: [
          "Rất nhiều học viên thắc mắc: 'Thầy ơi, em thấy trong câu vừa có lúc điền `that`, lúc điền `what`, lúc lại điền `which` — nhìn rối quá!'. Thực ra trình tự kiểm tra chỉ gồm đúng 2 câu hỏi nhị phân (Yes/No) cực kỳ rạch ròi:",
          "**Câu hỏi 1: Ngay TRƯỚC chỗ trống có Danh từ để bổ nghĩa không?** Nếu CÓ (VD: `The payload _____ arrived...`) -> Đây là Mệnh đề quan hệ (Bài G3.4) -> Chọn `which / that`, **loại ngay `what`** (vì bản thân `what` = `the thing that`, nếu đặt sau danh từ sẽ bị lặp thành `the payload the thing that`!). Nếu KHÔNG có danh từ (trước chỗ trống là Động từ `confirm _____`, Giới từ `about _____`, hoặc Đứng đầu câu `_____ happened...`) -> Đây chính là **Mệnh đề danh ngữ**! Lúc này chuyển sang Câu hỏi 2:"
        ],
        bullets: [
          "**Câu hỏi 2 (Khi không có Danh từ trước): Mệnh đề phía sau ĐỦ hay THIẾU thành phần danh từ (S/O)?**\n  • **ĐÃ ĐỦ** (`S + nội động từ`, `S + be + Adj`, `S + V_bị_động`, `S + ngoại động từ + O`): Chọn **`that`** (mang nghĩa 'rằng / việc mà'). Ví dụ: *Logs confirm **that** [the transaction succeeded].*\n  • **BỊ KHUYẾT** Chủ ngữ hoặc Tân ngữ: Chọn **`what`** (mang nghĩa 'điều gì / cái mà'). Ví dụ: *Logs reveal **what** [caused the deadlock]* (thiếu S của `caused`); *We implemented **what** [the client requested]* (thiếu O của `requested`).",
          "**Khi Mệnh đề danh ngữ làm Chủ ngữ đứng đầu câu -> Động từ chính LUÔN chia SỐ ÍT**: ***What** matters most in distributed systems **is** observability*; ***That** the legacy server survived Black Friday **was** a miracle.*",
          "**Phân biệt `what` (không giới hạn) vs `which` (có giới hạn lựa chọn) trong Mệnh đề danh ngữ**: Dùng `which (+ N)` khi chọn ra từ một danh sách hữu hạn đã biết (*We haven't decided **which** garbage collector [G1GC or ZGC] we should enable*)."
        ]
      },
      {
        heading: "2. 'Whether' vs 'If' — Vì Sao Đi Thi TOEIC Cứ Ưu Tiên Chọn 'Whether'?",
        paragraphs: [
          "Khi diễn tả sự chưa chắc chắn ('liệu rằng... có hay không'), cả `whether` và `if` đều đứng được sau động từ như `wonder, ask, check, determine, know`. Tuy nhiên, trong đề thi TOEIC Part 5, mỗi khi cả `(A) if` và `(B) whether` cùng xuất hiện trong 4 đáp án, 95% đáp án đúng là **`whether`**!",
          "Lý do là ETS luôn đặt chỗ trống vào 1 trong 4 vị trí độc quyền mà ngữ pháp tiếng Anh chuẩn CẤM dùng `if`."
        ],
        bullets: [
          "**Độc quyền 1 — Đứng ĐẦU CÂU làm Chủ ngữ**: ***Whether** the merger will proceed depends on regulatory approval.* (Dùng `If` ở đây sẽ bị hiểu nhầm ngay thành câu điều kiện 'Nếu'!).",
          "**Độc quyền 2 — Đứng ngay SAU GIỚI TỪ (`on, about, regarding, as to, of`)**: *Our architecture choice depends **on whether** strict ACID compliance is required.* (CẤM viết `depends on if`!).",
          "**Độc quyền 3 — Đi trực tiếp với `to V` (`whether to V`)**: *The product owner is deciding **whether to postpone** the v2.0 launch.*",
          "**Độc quyền 4 — Đi liền sát với `or not` (`whether or not`)**: *The finally block executes **whether or not** an exception is thrown.* (`if` chỉ cho phép tách `or not` ra cuối câu, không được viết liền `if or not`!)."
        ]
      },
      {
        heading: "3. Câu Hỏi Gián Tiếp (Indirect / Polite Questions) — Chuẩn Mực Giao Tiếp Senior",
        paragraphs: [
          "Khi làm việc với đồng nghiệp phương Tây hoặc viết email cho khách hàng, việc hỏi thẳng toẹt bằng câu hỏi trực tiếp (`When will you send the API spec?`, `Why is this endpoint slow?`) đôi khi nghe giống như đang tra khảo (interrogation). Người bản xứ luôn bọc câu hỏi trong một mệnh đề dẫn lịch sự như `Could you let me know...`, `Would you mind clarifying...`, `I was wondering...`.",
          "Quy tắc sắt đá cần khắc vào phản xạ gõ phím: **Trong một câu chỉ được phép đảo ngữ tối đa MỘT lần ở phần mở đầu!** Phần mệnh đề danh ngữ phía sau bắt buộc duỗi thẳng về trật tự `Chủ ngữ + Động từ`."
        ],
        bullets: [
          "**Với trợ động từ `is / are / was / were / will / can / should / have`**: Đưa chúng lùi về SAU Chủ ngữ!\n  • Trực tiếp: *Where **is** the Swagger file hosted?*\n  • Gián tiếp: *Could you tell me where **the Swagger file is** hosted?*",
          "**Với trợ động từ mượn `do / does / did` (Cực hay sai!)**: XÓA BỎ `do/does/did` và trả thì (`-s/-es` hoặc `-ed/V2`) về cho động từ chính!\n  • Trực tiếp: *How much memory **does** each pod consume?* / *When **did** the outage start?*\n  • Gián tiếp: *Do you know how much memory **each pod consumes**?* / *Please clarify when **the outage started**.*",
          "**Chú ý Dấu câu cuối cùng (? hay .)**: Dấu cuối câu phụ thuộc vào **Mệnh đề bọc ngoài**! Nếu bọc ngoài là câu hỏi (`Could you tell me...?`, `Do you know...?`) -> dùng dấu hỏi chấm `?`. Nếu bọc ngoài là câu trần thuật/mệnh lệnh (`Please let me know...`, `I wonder...`, `I am not sure...`) -> dùng dấu chấm `.`!",
          "**Ngoại lệ duy nhất không đổi vị trí**: Khi bản thân từ để hỏi (`who / what`) ĐÓNG VAI TRÒ LÀ CHỦ NGỮ của mệnh đề con (*Could you check **who approved** this deployment?* — ở đây `who` là chủ ngữ rồi nên giữ nguyên `who approved`)."
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Preliminary load-test metrics indicate **that** the new connection pool handles peak traffic effortlessly.",
        vi: "Các chỉ số kiểm thử chịu tải sơ bộ cho thấy rằng pool kết nối mới xử lý lưu lượng đỉnh một cách nhẹ nhàng.",
        note: "Sau động từ 'indicate' + mệnh đề sau ĐÃ ĐỦ S ('the new connection pool') + V ('handles') + O ('peak traffic') -> điền 'that'."
      },
      {
        tag: "TOEIC Part 5",
        en: "Our product team carefully analyzed **what** enterprise customers requested most frequently during the Q3 survey.",
        vi: "Đội ngũ sản phẩm của chúng tôi đã phân tích kỹ lưỡng những gì khách hàng doanh nghiệp yêu cầu thường xuyên nhất trong khảo sát quý 3.",
        note: "Sau động từ 'analyzed' (không có danh từ trước) + mệnh đề sau ngoại động từ 'requested' bị THIẾU Tân ngữ -> điền 'what' (= the features that)."
      },
      {
        tag: "Senior Java",
        en: "**What** differentiates a senior Java engineer from a mid-level coder **is** a deep understanding of trade-offs and failure modes.",
        vi: "Điều tạo nên sự khác biệt giữa một kỹ sư Java cao cấp và một lập trình viên tầm trung là sự thấu hiểu sâu sắc về các đánh đổi và kịch bản lỗi.",
        note: "Mệnh đề danh ngữ 'What differentiates...' đóng vai trò Chủ ngữ ở đầu câu -> Động từ chính của toàn câu chia số ít 'is'."
      },
      {
        tag: "System Design",
        en: "The choice between Kafka and RabbitMQ largely depends **on whether** your consumers need event replayability.",
        vi: "Sự lựa chọn giữa Kafka và RabbitMQ phụ thuộc phần lớn vào việc liệu các consumer của bạn có cần khả năng phát lại sự kiện hay không.",
        note: "Đứng ngay sau giới từ 'on' để diễn tả lựa chọn có/không -> bắt buộc dùng 'whether' (cấm dùng 'if')."
      },
      {
        tag: "TOEIC Part 5",
        en: "The steering committee has not yet decided **whether to expand** the warehouse or lease an external fulfillment center.",
        vi: "Ủy ban chỉ đạo vẫn chưa quyết định liệu nên mở rộng nhà kho hay thuê một trung tâm hoàn tất đơn hàng bên ngoài.",
        note: "Đi trực tiếp với động từ nguyên mẫu có to ('to expand') + có 'or' phía sau -> độc quyền của 'whether'."
      },
      {
        tag: "Client Email",
        en: "Could you please confirm **when the sandbox OAuth credentials will be provisioned** for our integration team?",
        vi: "Ngài vui lòng xác nhận giúp khi nào thông tin xác thực OAuth môi trường sandbox sẽ được cấp phát cho đội tích hợp của chúng tôi được không?",
        note: "Câu hỏi gián tiếp: giữ nguyên trật tự S ('the sandbox OAuth credentials') + V ('will be provisioned'), KHÔNG đảo 'will' lên trước chủ ngữ!"
      },
      {
        tag: "Code Review",
        en: "I am not entirely sure **why this method catches `Throwable`** instead of specific checked exceptions.",
        vi: "Tôi không hoàn toàn chắc chắn tại sao phương thức này lại bắt `Throwable` thay vì các ngoại lệ cụ thể.",
        note: "Cách góp ý Code Review cực lịch sự của Senior: bỏ trợ động từ 'does', chia thẳng '-es' vào 'catches', kết câu bằng dấu chấm '.'."
      },
      {
        tag: "TOEIC Part 6",
        en: "Please let the receptionist know **how many visitors will be attending** the afternoon product demonstration.",
        vi: "Vui lòng báo cho lễ tân biết có bao nhiêu khách tham quan sẽ tham dự buổi trình diễn sản phẩm chiều nay.",
        note: "Cụm từ để hỏi đi liền danh từ 'how many visitors' đóng vai trò chủ ngữ của 'will be attending'; câu mở đầu bằng 'Please...' nên kết thúc bằng dấu chấm."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Whoever** modifies the shared `pom.xml` file must ensure backward compatibility across all downstream modules.",
        vi: "Bất kỳ ai chỉnh sửa file `pom.xml` dùng chung đều phải đảm bảo tính tương thích ngược trên toàn bộ các module phía dưới.",
        note: "'Whoever' (= Anyone who) làm chủ ngữ của mệnh đề danh ngữ đứng đầu câu + động từ chia số ít 'modifies'."
      },
      {
        tag: "Senior Java",
        en: "The `finally` block in Java is guaranteed to execute **whether or not** an unhandled runtime exception occurs.",
        vi: "Khối `finally` trong Java được đảm bảo sẽ thực thi bất kể có xảy ra ngoại lệ runtime chưa xử lý hay không.",
        note: "Cấu trúc 'whether or not + S + V' (= bất kể có... hay không) cực chuẩn khi giải thích cơ chế ngôn ngữ."
      },
      {
        tag: "TOEIC Part 7",
        en: "Many attendees inquired **about how** the new AI-assisted diagnostics tool integrates with existing hospital databases.",
        vi: "Nhiều người tham dự đã hỏi về cách thức công cụ chẩn đoán hỗ trợ bởi AI mới tích hợp với cơ sở dữ liệu bệnh viện hiện có.",
        note: "Mệnh đề danh ngữ đứng sau giới từ 'about': 'about + how + S + V(chia bình thường: integrates)'."
      },
      {
        tag: "System Design",
        en: "**How** we partition the `orders` table today will directly determine our horizontal scalability over the next five years.",
        vi: "Cách thức chúng ta phân mảnh bảng `orders` ngày hôm nay sẽ quyết định trực tiếp khả năng mở rộng ngang của chúng ta trong năm năm tới.",
        note: "Mệnh đề danh ngữ bắt đầu bằng 'How + S + V' làm Chủ ngữ cho động từ 'will directly determine'."
      },
      {
        tag: "Client Email",
        en: "Would you mind clarifying **which compliance certifications** your cloud hosting provider currently holds?",
        vi: "Ngài có phiền làm rõ giúp nhà cung cấp dịch vụ lưu trữ đám mây của ngài hiện đang nắm giữ những chứng chỉ tuân thủ nào không?",
        note: "Sau 'Would you mind V-ing...' là câu hỏi gián tiếp: 'which compliance certifications' (tân ngữ đẩy lên đầu mệnh đề con) + S ('your... provider') + V ('holds')."
      },
      {
        tag: "TOEIC Part 5",
        en: "Employees may select **whichever** health insurance tier best suits their family's medical needs.",
        vi: "Nhân viên có thể lựa chọn bất kỳ gói bảo hiểm sức khỏe nào phù hợp nhất với nhu cầu y tế của gia đình họ.",
        note: "Chọn một gói từ danh sách các gói bảo hiểm cố định của công ty -> dùng 'whichever + N'."
      },
      {
        tag: "Code Review",
        en: "Do you recall **what triggered** the retry storm in the notification worker last month?",
        vi: "Bạn có nhớ điều gì đã kích hoạt cơn bão thử lại (retry storm) ở trình xử lý thông báo vào tháng trước không?",
        note: "Ở đây bản thân chữ 'what' là Chủ ngữ của 'triggered' (cái gì đã kích hoạt), nên cấu trúc 'what triggered' vừa là câu hỏi trực tiếp vừa là gián tiếp!"
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Could you tell me when will the maintenance window finish?",
          fix: "Could you tell me when the maintenance window will finish?",
          why: "Lỗi kinh điển số 1: Đảo ngữ 2 lần! Đã có 'Could you...' ở đầu câu rồi thì mệnh đề sau 'when' phải giữ nguyên trật tự S + will + V."
        },
        {
          bug: "Do you know why did the Jenkins pipeline fail last night?",
          fix: "Do you know why the Jenkins pipeline failed last night?",
          why: "Trong câu hỏi gián tiếp, phải XÓA trợ động từ nghi vấn 'did' và chia động từ 'fail' về quá khứ đơn 'failed'."
        },
        {
          bug: "The architecture log explains the reason what caused the outage.",
          fix: "The architecture log explains what caused the outage. (HOẶC: ...the reason that/why caused/explained...)",
          why: "'What' KHÔNG BAO GIỜ đứng sau một danh từ để làm đại từ quan hệ! Đã có danh từ 'the reason' đứng trước thì không được dùng 'what'."
        },
        {
          bug: "We are discussing about if we should migrate from REST to gRPC.",
          fix: "We are discussing whether we should migrate from REST to gRPC.",
          why: "Mắc kép 2 lỗi: (1) Ngoại động từ 'discuss' KHÔNG đi với giới từ 'about'; (2) Ngay cả khi sau giới từ thật (như 'talk about'), chỉ được dùng 'whether', cấm dùng 'if'!"
        },
        {
          bug: "That the payment API returned HTTP 200 mean the money was settled.",
          fix: "That the payment API returned HTTP 200 does not necessarily mean the money was settled.",
          why: "Khi cả một mệnh đề danh ngữ ('That...') làm Chủ ngữ, nó được tính là 1 sự việc đơn lẻ -> Động từ chính phải chia ngôi thứ 3 SỐ ÍT ('means' / 'does not mean')."
        }
      ]
    },
    toeicTips: [
      "Thuật toán 5 giây cho câu hỏi `(A) that (B) what (C) which (D) who`: Nhìn TRƯỚC chỗ trống thấy Động từ / Giới từ / Đầu câu -> gạch `which` (trừ khi mang nghĩa 'cái nào trong nhóm'). Nhìn SAU chỗ trống: nếu mệnh đề ĐỦ Chủ ngữ & Tân ngữ -> chọn **`that`**; nếu mệnh đề KHUYẾT Chủ ngữ hoặc Tân ngữ -> chọn ngay **`what`**!",
      "Mẹo 'Cứ thấy Giới từ / To-V / Or not -> Khoanh Whether': Trong Part 5, hễ trước chỗ trống là giới từ (`of, on, about, as to, regardless of`) hoặc sau chỗ trống là `to V` hay `or not` -> Chọn **`whether`** trong 2 giây không cần đắn đo với `if`!",
      "Mẹo né bẫy Đảo ngữ trong TOEIC Part 5 & Part 6: Nếu giữa câu xuất hiện `when / where / how / why / what` sau các động từ `ask, know, wonder, explain, tell, find out`, hãy loại ngay mọi phương án đảo trợ động từ như `will it`, `is the`, `did they` — chỉ chọn phương án có trật tự **`S + V`** (`it will`, `the... is`, `they...`)!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "when",
          "will be available?",
          "Could you",
          "the updated webhook documentation",
          "let us know"
        ],
        answer: "Could you let us know when the updated webhook documentation will be available?",
        vi: "Bạn vui lòng cho chúng tôi biết khi nào tài liệu webhook cập nhật sẽ sẵn sàng được không?"
      },
      fillBlank: {
        sentence: "_____ caused the sudden spike in garbage-collection pause times remains under investigation.",
        answer: "What",
        accepted: ["What", "Whatever"],
        hint: "Đứng đầu câu làm chủ ngữ cho 'remains', đồng thời đóng vai trò chủ ngữ bị khuyết của động từ 'caused'!",
        explain: "Cả cụm '_____ caused the sudden spike...' làm Chủ ngữ cho động từ chính 'remains'. Bên trong mệnh đề danh ngữ này, động từ 'caused' đang thiếu Chủ ngữ ('Điều gì đã gây ra...') -> bắt buộc điền 'What' (không dùng 'That' vì sau 'That' phải là mệnh đề đủ chủ ngữ)."
      }
    },
    quiz: [
      {
        q: "The post-deployment verification script checks _____ all database migrations have been applied cleanly across every shard.",
        options: ["what", "whether", "which", "who"],
        answer: 1,
        explain: "Đáp án đúng là 'whether' (B). Sau ngoại động từ 'checks' là mệnh đề ĐÃ ĐỦ thành phần ('all database migrations have been applied cleanly') -> loại 'what', 'which', 'who' (vốn đòi hỏi mệnh đề khuyết thành phần danh từ). Ngữ cảnh 'kiểm tra LIỆU RẰNG tất cả migration đã được áp dụng sạch chưa' -> chọn 'whether'."
      },
      {
        q: "Before signing the enterprise SLA, our legal counsel asked how long _____ to restore cold backups in a disaster scenario.",
        options: ["does it take", "will it take", "it takes", "took it"],
        answer: 2,
        explain: "Đáp án đúng là 'it takes' (C). Đây là câu hỏi gián tiếp đứng sau 'our legal counsel asked how long...'. Vì không phải câu hỏi trực tiếp nên TUYỆT ĐỐI cấm đảo trợ động từ 'does' hay 'will' lên trước chủ ngữ 'it' (loại A, B, D). Giữ nguyên trật tự trần thuật S + V: 'it takes'."
      },
      {
        q: "_____ the keynote speaker demonstrated during the live coding session impressed every principal engineer in the auditorium.",
        options: ["That", "What", "Which", "Whether"],
        answer: 1,
        explain: "Đáp án đúng là 'What' (B). Toàn bộ vế đầu làm Chủ ngữ cho động từ chính 'impressed'. Xét bên trong mệnh đề con: 'the keynote speaker demonstrated' -> 'demonstrate' là ngoại động từ ('trình diễn CÁI GÌ?') đang bị KHUYẾT Tân ngữ! Do đó phải chọn 'What' (= The thing that). Loại 'That' và 'Whether' vì hai từ này yêu cầu mệnh đề sau phải đủ tân ngữ."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G4_2: GIẢ ĐỊNH THỨC (SUBJUNCTIVE MOOD) — BẪY NGỮ PHÁP TINH VI NHẤT TOEIC 600+
   * ========================================================================== */
  G4_2: {
    duration: "40 phút",
    toeicTarget: "Bứt phá TOEIC 650–750+ (Lấy trọn điểm câu bẫy Subjunctive khiến 80% thí sinh mất điểm oan)",
    javaContext: "Viết khuyến nghị bảo mật (Security Advisory), biên bản họp Kiến trúc (ARB) và đặc tả yêu cầu bắt buộc chuẩn RFC",
    teacherIntro: "Hãy nhìn vào câu tiếng Anh chuẩn 100% này: 'The Chief Security Officer recommended that the API token BE revoked immediately.' Lần đầu tiên nhìn thấy chữ `BE` đứng trơ trọi ngay sau chủ ngữ số ít `the API token` trong một câu có động từ quá khứ `recommended`, hầu hết lập trình viên đều tưởng... sách in lỗi chính tả (vì theo phản xạ phải là `was revoked` hoặc `is revoked`)! Xin giới thiệu với anh em: **Giả định thức hiện tại (Mandative Subjunctive)** — cái bẫy tinh vi bậc nhất mà ETS cực kỳ ưa thích dùng để phân loại thí sinh đạt ngưỡng 650–750+ điểm. Tin vui là một khi đã nắm được quy tắc 'ẩn chữ should' của nó, bạn sẽ giải đúng dạng câu này chỉ trong đúng 3 giây với độ chính xác tuyệt đối 100%!",
    javaAnalogy: {
      title: "Java Interface Contract Chưa Thực Thi vs Runtime Execution State",
      body: "Tại sao lại không chia thì `-s`, `is`, hay `-ed/was`? Hãy nghĩ bằng tư duy thiết kế phần mềm: Khi bạn viết `The server IS running`, đó là trạng thái thực tế trên Runtime (Indicative Mood). Nhưng khi CTO **recommend / insist / require** hoặc quy định **It is mandatory / essential** rằng hệ thống phải làm gì đó, hành động ấy **chưa hề chạy thật** tại thời điểm nói — nó chỉ là một bản đặc tả `interface` mang tính mệnh lệnh/khuyến nghị (ngầm chứa từ khóa `[should]` ẩn bên trong)! Trong tiếng Anh Anh người ta còn giữ chữ `should` (`that the token should be revoked`), còn tiếng Anh Mỹ (chuẩn đề thi ETS TOEIC!) người ta ẩn luôn chữ `should` đi, để lại **Động từ nguyên mẫu trần (`bare infinitive`: `be`, `revoke`, `not exceed`)** bất chấp mọi chủ ngữ và mọi thì của mệnh đề chính!"
    },
    objectives: [
      "Nhận diện ngay lập tức 10 Động từ và 8 Tính từ/Danh từ 'kích hoạt' cấu trúc Giả định thức (Trigger Words) thường xuất hiện nhất trong đề thi TOEIC.",
      "Chia chuẩn xác cả 3 biến thể của động từ giả định sau 'that + S': Khẳng định chủ động (V nguyên thể không -s/-ed), Phủ định (not + V nguyên thể, không mượn do/does/did), và Bị động (be + P2).",
      "Phân biệt sắc bén khi nào 'suggest / insist' mang nghĩa Đề xuất (dùng Giả định thức) vs khi nào mang nghĩa Ám chỉ / Khăng khăng một sự thật đã xảy ra (chia thì bình thường!)."
    ],
    formulaCards: [
      {
        label: "Công thức Cốt lõi • Bất biến theo Chủ ngữ & Thời gian",
        formula: "[Trigger Verb / Adjective / Noun] + THAT + S (số ít / số nhiều) + (should) + V_NGUYÊN_THỂ_TRẦN!",
        note: "Dù động từ trước 'that' ở Quá khứ ('recommended / demanded / was essential') và S là ngôi thứ 3 số ít ('he / the server / each user'), động từ sau S vẫn giữ NGUYÊN THỂ (không -s, không -ed)!"
      },
      {
        label: "Nhóm 1 • 10 Động từ Đề xuất / Yêu cầu (Trigger Verbs)",
        formula: "suggest / recommend / propose / request / require / demand / insist / ask / urge / advise + THAT + S + V_bare",
        note: "Lưu ý cấu trúc thay thế nếu KHÔNG có 'that + S': 'recommend/suggest + V-ing' (khuyên làm chung), còn 'advise/ask/require/urge + O + to V' (CẤM viết 'suggest someone to V'!)."
      },
      {
        label: "Nhóm 2 • 8 Tính từ & Danh từ Cấp thiết (Trigger Adjectives/Nouns)",
        formula: "It is [essential / imperative / mandatory / vital / crucial / necessary / important / advisable] + THAT + S + V_bare",
        note: "Tương tự với các Danh từ tương ứng: 'a requirement / recommendation / suggestion / demand + that + S + V_bare'."
      },
      {
        label: "Công thức Phủ định & Bị động (Siêu bẫy 700+!)",
        formula: "Phủ định: ...that + S + NOT + V_bare  ||  Bị động: ...that + S + BE + V-ed/P2  (Phủ định bị động: NOT BE P2)",
        note: "TUYỆT ĐỐI không mượn 'does not / did not / is not'! Đặt thẳng chữ 'not' trước động từ nguyên thể: '...recommended that the thread NOT block' / '...vital that keys BE rotated'."
      }
    ],
    sections: [
      {
        heading: "1. Giải Mã Bẫy Thị Giác Trong Phòng Thi TOEIC Part 5",
        paragraphs: [
          "Hãy xem cách ETS giăng bẫy trong một câu Part 5 điển hình: `Following yesterday's security breach, the board of directors demanded that every employee _____ their master password immediately.` Các phương án: `(A) resets (B) reset (C) resetting (D) has reset`.",
          "Thí sinh trung bình thấy `every employee` (ngôi thứ 3 số ít — vừa học ở Bài G3.1!) sẽ hăm hở khoanh ngay `(A) resets` và... mất điểm! Thí sinh giỏi nhìn thấy từ khóa kích hoạt **`demanded that`** đứng phía trước -> Kích hoạt chế độ Subjunctive -> Bỏ qua ngôi số của `every employee` và thời quá khứ của `demanded`, khoanh thẳng vào nguyên mẫu trần **`(B) reset`** trong 3 giây!"
        ],
        bullets: [
          "**Mẹo nhớ câu thần chú ẩn `should`**: Bất cứ khi nào gặp `[suggest / recommend / request / require / insist / demand / imperative / mandatory / essential] + that + S + _____`, hãy tự nhẩm chèn chữ **`should`** vào trước chỗ trống (`every employee [should] reset`, `the report [should] be submitted`). Sau `should` động từ ra sao thì đáp án y hệt như vậy!",
          "**Bẫy Bị động `BE + P2` (Xuất hiện 70% số câu thi!)**: Vì chủ ngữ sau `that` trong TOEIC thường là Vật (`the contract, the software, the defective part, the fee`), đáp án đúng rất hay là chữ **`be`** đứng trước `P2` (VD: *insisted that the fee **be** waived*, *vital that the patch **be** tested*).",
          "**Bẫy Phủ định `NOT + V_bare`**: *The architect advised that microservices **not share** a single database schema.* (Không dùng `do not share` hay `does not share`!)."
        ]
      },
      {
        heading: "2. Lỗi Ngữ Pháp Kinh Điển Với 'Suggest' & 'Recommend' Khi Giao Tiếp Kỹ Thuật",
        paragraphs: [
          "Ngoài cấu trúc `that + S + V_bare`, hai động từ `suggest` và `recommend` còn là 'ổ bug' lớn nhất của dân IT Việt Nam trong các buổi họp Sprint Retrospective và PR Review.",
          "Do bị ảnh hưởng bởi cấu trúc `want / ask / advise + someone + to V` (*I advise you to use `BigDecimal`*), đến 90% anh em nói nhầm thành: ❌ *I suggest you to use `BigDecimal`* hoặc ❌ *I recommend us to refactor this class*. Trong ngữ pháp tiếng Anh chuẩn, **`suggest` và `recommend` TUYỆT ĐỐI CẤM đi với `Object + to V`**!"
        ],
        bullets: [
          "**3 Cách viết ĐÚNG duy nhất với `suggest` / `recommend`**:\n  1. Không nêu người thực hiện cụ thể -> **`suggest / recommend + V-ing`**: *I recommend **upgrading** to HikariCP 5.1.*\n  2. Nêu rõ người thực hiện -> **`suggest / recommend + (that) + S + V_bare`**: *I suggest (that) **we upgrade** to HikariCP 5.1* (hoặc *I suggest **he check** the logs*).\n  3. Cộng trực tiếp Danh từ -> **`suggest / recommend + Noun (to someone)`**: *Can you recommend **a lightweight JSON library** to our team?*",
          "**So sánh với `advise / ask / require / urge`**: Nhóm này VỪA đi được với `Object + to V` (*The CTO required **all teams to enable** SonarQube*), VỪA đi được với `that + S + V_bare` (*The CTO required **that all teams enable** SonarQube*)."
        ]
      },
      {
        heading: "3. Cảnh Giới 750+: Khi 'Suggest' & 'Insist' KHÔNG Dùng Giả Định Thức!",
        paragraphs: [
          "Là một Senior Engineer thích hiểu tận gốc rễ, bạn cần biết một ngoại lệ sắc bén giúp phân biệt máy móc với hiểu bản chất: Không phải cứ 100% thấy chữ `suggest that` hay `insist that` là chia nguyên thể!",
          "Quy tắc Giả định thức CHỈ kích hoạt khi chúng mang nghĩa **Mệnh lệnh / Đề xuất một việc CẦN LÀM**. Ngược lại, nếu chúng chỉ trần thuật một **Sự thật / Bằng chứng thực tế đã hoặc đang xảy ra**, ta phải chia thì bình thường (Indicative Mood)!"
        ],
        bullets: [
          "**`suggest` = Cho thấy / Ám chỉ một dấu hiệu thực tế (Evidence shows)** -> Chia thì bình thường!\n  • *Heap dump metrics **suggest that** the cache **is leaking** memory.* (Số liệu cho thấy bộ nhớ đệm *đang thực sự bị rò rỉ* — đây là chẩn đoán sự thật, không phải khuyên cái cache hãy rò rỉ!).\n  • Đối chiếu Đề xuất: *Our SRE **suggested that** the cache **be flushed** every hour.* (Đề xuất hành động cần làm -> Giả định thức `be flushed`).",
          "**`insist` = Khăng khăng khẳng định một việc ĐÃ làm là đúng sự thật** -> Chia thì bình thường!\n  • *The vendor **insisted that** their gateway **had processed** the webhook on time.* (Nhà cung cấp khăng khăng rằng hôm qua họ *đã xử lý rồi*).\n  • Đối chiếu Yêu cầu: *The client **insisted that** our gateway **respond** within 100ms.* (Khách hàng đòi hỏi phải phản hồi trong 100ms -> Giả định thức `respond`)."
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "The external auditor **recommended that** the accounting department **retain** all digital tax invoices for seven years.",
        vi: "Kiểm toán viên bên ngoài khuyến nghị rằng phòng kế toán cần lưu giữ toàn bộ hóa đơn thuế điện tử trong bảy năm.",
        note: "Sau 'recommended that' + chủ ngữ số ít 'the accounting department', động từ giữ nguyên mẫu trần 'retain' (không thêm -s, không thêm -ed)."
      },
      {
        tag: "System Design",
        en: "**It is imperative that** every distributed payment endpoint **be** strictly idempotent to prevent double charging.",
        vi: "Điều sống còn bắt buộc là mọi endpoint thanh toán phân tán phải đảm bảo tính bất biến (idempotent) tuyệt đối để ngăn trừ tiền hai lần.",
        note: "Tính từ cấp thiết 'It is imperative that' + S số ít ('every... endpoint') -> động từ to-be giữ nguyên mẫu 'be'."
      },
      {
        tag: "TOEIC Part 5",
        en: "City safety regulations **require that** any malfunctioning elevator **be taken** out of service immediately.",
        vi: "Các quy định an toàn thành phố yêu cầu bất kỳ thang máy nào gặp trục trặc phải được ngừng vận hành ngay lập tức.",
        note: "Giả định thức ở thể Bị động: 'require that + S + be + P2 (be taken)'."
      },
      {
        tag: "Code Review",
        en: "I strongly **suggest that** this service **not expose** internal JPA entities directly in the REST controller response.",
        vi: "Tôi đặc biệt đề xuất rằng service này không được phơi bày trực tiếp các thực thể JPA nội bộ ra response của tầng REST controller.",
        note: "Giả định thức dạng Phủ định: đặt 'not' thẳng trước nguyên mẫu 'expose' ('not expose' — cấm dùng 'does not expose')."
      },
      {
        tag: "Senior Java",
        en: "Oracle's security guideline **advises that** sensitive cryptographic keys **be stored** in a `char[]` rather than an immutable `String`.",
        vi: "Hướng dẫn bảo mật của Oracle khuyên rằng các khóa mật mã nhạy cảm nên được lưu trong mảng `char[]` thay vì một `String` bất biến.",
        note: "Bị động giả định thức sau 'advises that': 'be stored' (để có thể xóa trắng mảng khỏi RAM trước khi GC chạy)."
      },
      {
        tag: "TOEIC Part 6",
        en: "Ms. Patel **insisted that** the replacement server rack **arrive** at the Frankfurt facility no later than Thursday morning.",
        vi: "Bà Patel kiên quyết yêu cầu tủ rack máy chủ thay thế phải có mặt tại cơ sở Frankfurt muộn nhất là sáng thứ Năm.",
        note: "Dù 'insisted' ở quá khứ và 'server rack' là số ít, đây là yêu cầu bắt buộc nên dùng nguyên mẫu 'arrive'."
      },
      {
        tag: "Client Email",
        en: "**It is essential that** your network administrator **whitelist** our static egress IP addresses prior to Monday's cutover.",
        vi: "Điều thiết yếu là quản trị viên mạng của ngài cần đưa dải IP tĩnh đầu ra của chúng tôi vào danh sách cho phép trước đợt chuyển đổi ngày thứ Hai.",
        note: "'It is essential that + S số ít + whitelist' — cách nhắc khách hàng chuẩn bị hạ tầng vừa trang trọng vừa nhấn mạnh tính cấp bách."
      },
      {
        tag: "TOEIC Part 5",
        en: "The board approved the architect's **proposal that** legacy COBOL batch jobs **be rewritten** as Spring Batch microservices.",
        vi: "Hội đồng quản trị đã phê duyệt đề xuất của kiến trúc sư rằng các tiến trình chạy lô COBOL cũ cần được viết lại thành các microservice Spring Batch.",
        note: "Danh từ giả định 'proposal that' kích hoạt cấu trúc bị động nguyên mẫu 'be rewritten'."
      },
      {
        tag: "Senior Java",
        en: "During the architecture review, our Principal Engineer **recommended adopting** OpenTelemetry instead of proprietary agents.",
        vi: "Trong buổi đánh giá kiến trúc, Kỹ sư Chính của chúng tôi đã khuyến nghị áp dụng OpenTelemetry thay vì các agent độc quyền.",
        note: "Khi không có 'that + S', 'recommend' đi trực tiếp với Danh động từ 'V-ing' ('recommended adopting')."
      },
      {
        tag: "TOEIC Part 5",
        en: "Hospital privacy rules make it **mandatory that** each patient record **remain** encrypted both in transit and at rest.",
        vi: "Quy tắc quyền riêng tư bệnh viện quy định bắt buộc rằng mỗi hồ sơ bệnh nhân phải luôn được mã hóa cả trên đường truyền lẫn khi lưu trữ.",
        note: "Cấu trúc 'make it mandatory that + each + N số ít + remain' (nguyên thể không -s)."
      },
      {
        tag: "System Design",
        en: "To avoid split-brain scenarios, Raft consensus **demands that** a leader node **receive** acknowledgments from a strict majority.",
        vi: "Để tránh kịch bản chia tách não (split-brain), thuật toán đồng thuận Raft đòi hỏi node dẫn đầu phải nhận được xác nhận từ quá bán tuyệt đối.",
        note: "'demands that + a leader node + receive' (nguyên thể trần) diễn tả luật bất biến trong đặc tả giao thức."
      },
      {
        tag: "Code Review",
        en: "Thread-dump logs strongly **suggest that** a deadlock **occurred** between the inventory lock and the wallet lock.",
        vi: "Nhật ký thread-dump cho thấy rõ ràng rằng một vụ khóa chết (deadlock) đã xảy ra giữa khóa kho hàng và khóa ví tiền.",
        note: "NGOẠI LỆ QUAN TRỌNG: Ở đây 'suggest' mang nghĩa 'bằng chứng cho thấy một sự việc ĐÃ thực sự xảy ra' -> chia quá khứ đơn 'occurred' bình thường!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Shareholders **urged that** the executive committee **not approve** any further acquisitions until profitability is restored.",
        vi: "Các cổ đông thúc giục rằng ban điều hành không được phê duyệt bất kỳ thương vụ mua lại nào thêm cho đến khi khôi phục được lợi nhuận.",
        note: "'urged that + S + not approve' — phủ định giả định thức cực kỳ chuẩn mực trong văn bản quản trị doanh nghiệp."
      },
      {
        tag: "Client Email",
        en: "For compliance reasons, we **request that** all production database dumps **not be shared** via unencrypted email attachments.",
        vi: "Vì lý do tuân thủ bảo mật, chúng tôi yêu cầu tất cả các bản sao lưu cơ sở dữ liệu production không được chia sẻ qua tệp đính kèm email chưa mã hóa.",
        note: "Kết hợp cả Phủ định lẫn Bị động trong Giả định thức: 'request that + S + NOT BE + P2 (not be shared)'!"
      },
      {
        tag: "TOEIC Part 5",
        en: "**It is vital that** the cold-chain temperature sensor **be calibrated** before pharmaceutical shipments leave the depot.",
        vi: "Điều tối quan trọng là cảm biến nhiệt độ chuỗi cung ứng lạnh phải được hiệu chuẩn trước khi các lô hàng dược phẩm rời kho.",
        note: "'It is vital that + S số ít + be calibrated' — mẫu câu kinh điển xuất hiện dày đặc trong các đề thi TOEIC thực tế."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "I suggest you to use ConcurrentHashMap instead of synchronized Map.",
          fix: "I suggest (that) you use ConcurrentHashMap... (HOẶC: I suggest using ConcurrentHashMap...)",
          why: "'Suggest' và 'recommend' TUYỆT ĐỐI không có cấu trúc 'suggest/recommend + tân ngữ + to V'! Đây là lỗi giao tiếp phổ biến nhất của Dev Việt."
        },
        {
          bug: "The CTO recommended that the hotfix is deployed to staging first.",
          fix: "The CTO recommended that the hotfix be deployed to staging first.",
          why: "Sau 'recommended that', động từ to-be của thể bị động bắt buộc về nguyên mẫu trần 'be' ('be deployed'), không chia 'is' hay 'was'."
        },
        {
          bug: "It is mandatory that every developer enables two-factor authentication.",
          fix: "It is mandatory that every developer enable two-factor authentication.",
          why: "Bị 'every developer' (ngôi 3 số ít) đánh lừa thêm '-s'. Tính từ 'mandatory that' kích hoạt Giả định thức nên phải giữ nguyên thể 'enable'."
        },
        {
          bug: "The architect insisted that the microservice doesn't call the DB of another service.",
          fix: "The architect insisted that the microservice not call the DB of another service.",
          why: "Phủ định của Giả định thức KHÔNG mượn trợ động từ 'doesn't / don't / didn't', mà đặt 'not' trực tiếp trước động từ nguyên mẫu ('not call')."
        },
        {
          bug: "Grafana metrics suggest that CPU utilization be spiking due to regex backtracking.",
          fix: "Grafana metrics suggest that CPU utilization is spiking due to regex backtracking.",
          why: "Grafana chỉ 'cho thấy sự thật đang diễn ra' chứ không ra mệnh lệnh cho CPU! Khi 'suggest' = 'indicate/show', phải chia thì thực tế 'is spiking'."
        }
      ]
    },
    toeicTips: [
      "Phản xạ Vàng 3 Giây lấy điểm 700+: Hễ nhìn trước mệnh đề `that` có một trong bộ từ khóa `suggest, recommend, propose, request, require, demand, insist, ask, urge, essential, imperative, mandatory, vital, crucial, necessary` -> DỪNG MỌI QUY TẮC CHIA THÌ! Khoanh ngay đáp án là **V nguyên thể không chia** (hoặc **`be + P2`** nếu mang nghĩa bị động)!",
      "Mẹo nhận diện nhanh Bẫy của ETS: Nếu bạn thấy một câu quá khứ (`Yesterday, the manager requested that Mr. Kim _____ the report`) mà trong 4 đáp án có `(A) submits (B) submitted (C) submit (D) submitting` -> Đáp án `(C) submit` trông có vẻ 'sai ngữ pháp' với `Mr. Kim` và `Yesterday` nhưng lại chính là ĐÁP ÁN ĐÚNG 100%!",
      "Cẩn thận khi KHÔNG CÓ chữ `that` và KHÔNG CÓ Chủ ngữ thứ hai: `The committee recommended _____ the legacy system` -> Không có mệnh đề sau nên không dùng nguyên thể trần, mà áp dụng công thức `recommend + V-ing` -> chọn **`replacing / upgrading`**!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "authenticate internal requests",
          "The security auditor",
          "via mutual TLS.",
          "every microservice",
          "insisted that"
        ],
        answer: "The security auditor insisted that every microservice authenticate internal requests via mutual TLS.",
        vi: "Kiểm toán viên bảo mật kiên quyết yêu cầu rằng mọi microservice phải xác thực các truy vấn nội bộ thông qua giao thức mTLS."
      },
      fillBlank: {
        sentence: "It is mandatory that all personally identifiable information _____ encrypted at rest.",
        answer: "be",
        accepted: ["be", "should be"],
        hint: "Cấu trúc Giả định thức bị động kích hoạt bởi 'It is mandatory that...'!",
        explain: "Tính từ cấp thiết 'mandatory' đi với 'that' kích hoạt Giả định thức (Subjunctive Mood). Dù 'information' là danh từ không đếm được (số ít), động từ to-be đứng trước phân từ bị động 'encrypted' bắt buộc ở dạng nguyên mẫu trần là 'be' (hoặc 'should be')."
      }
    },
    quiz: [
      {
        q: "Following the PCI-DSS compliance audit, the chief risk officer demanded that root SSH login _____ disabled across all production bastion hosts.",
        options: ["is", "was", "be", "been"],
        answer: 2,
        explain: "Đáp án đúng là 'be' (C). Động từ 'demanded that' kích hoạt cấu trúc Giả định thức (Subjunctive Mood). Ở thể bị động ('được vô hiệu hóa' — disabled), động từ to-be luôn đứng ở dạng nguyên thể trần 'be' bất chấp 'demanded' ở quá khứ và 'root SSH login' là số ít."
      },
      {
        q: "To maintain zero-downtime deployments, it is essential that any new Flyway SQL script _____ drop or rename columns still referenced by running pods.",
        options: ["does not", "not", "did not", "is not"],
        answer: 1,
        explain: "Đáp án đúng là 'not' (B). Cấu trúc 'it is essential that + S + ...' là Giả định thức. Khi chuyển sang phủ định với động từ nguyên mẫu 'drop', ta đặt trực tiếp 'not' trước 'drop' ('not drop' = '[should] not drop'), tuyệt đối không mượn trợ động từ 'does not' hay 'did not'."
      },
      {
        q: "Our infrastructure consultant strongly recommended _____ read-heavy analytical workloads onto a dedicated ClickHouse cluster.",
        options: ["offload", "offloads", "offloading", "to offload"],
        answer: 2,
        explain: "Đáp án đúng là 'offloading' (C). Cảnh giác bẫy phản xạ máy móc: Ngay sau 'recommended' KHÔNG CÓ chữ 'that' và cũng KHÔNG CÓ chủ ngữ mới! Khi đứng trực tiếp một mình, cấu trúc chuẩn là 'recommend / suggest + V-ing' ('recommended offloading'). Loại A (thiếu 'that + S'), B và D ('recommend' không đi trực tiếp với 'to V')."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G4_3: CẤU TRÚC CẦU KHIẾN (HAVE/GET STH DONE) & ĐẢO NGỮ NHẤN MẠNH
   * ========================================================================== */
  G4_3: {
    duration: "45 phút",
    toeicTarget: "Bứt phá TOEIC 650–750+ (Part 5 Cầu khiến Chủ động/Bị động & Đảo ngữ Not only / Only after)",
    javaContext: "Diễn đạt cơ chế Ủy quyền tác vụ (Delegation/Outsourcing) và tạo điểm nhấn hùng biện trong Tech Talk / Architecture Review",
    teacherIntro: "Trong công việc hàng ngày của một Senior Engineer hay nhà quản lý, có sự khác biệt rất lớn giữa 'I renewed the SSL certificate' (tôi tự tay ngồi gõ lệnh gia hạn) và 'I had the SSL certificate renewed' (tôi giao cho đội SRE hoặc hệ thống Cert-Manager tự động gia hạn cho mình)! Nửa đầu bài học hôm nay giúp bạn làm chủ toàn bộ **Hệ thống động từ Cầu khiến (Causative Verbs: have, get, make, let, help)** — chủ đề cực kỳ thực tế trong cả môi trường doanh nghiệp TOEIC lẫn mô tả kiến trúc ủy quyền. Nửa sau bài học sẽ đưa kỹ năng viết và đọc hiểu của bạn lên đẳng cấp diễn giả quốc tế với **Đảo ngữ Nhấn mạnh (`Not only...`, `Rarely...`, `Only after...`)** — những cấu trúc luôn xuất hiện ở nhóm câu hỏi 700+ điểm!",
    javaAnalogy: {
      title: "Delegation Pattern (ExecutorService) & Annotation Ưu Tiên @Order(1)",
      body: "Hãy liên hệ hai chủ điểm này với hai khái niệm quen thuộc trong Java:\n1. **Cấu trúc Cầu khiến (Causatives)** chính là **Delegation Pattern / Dependency Injection**: thay vì `OrderController` tự đi gửi email, nó ủy quyền cho worker làm hộ:\n  • Giao trực tiếp cho Agent (Chủ động): `have + emailWorker + send(mail)` (`V_bare`) hoặc `get + emailWorker + to send(mail)` (`to V`).\n  • Quan tâm tới Kết quả trên Object (Bị động): `have / get + the email + sent` (`P2`) — không cần quan tâm thread nào bên dưới thực thi!\n2. **Đảo ngữ Nhấn mạnh (Negative / Restrictive Inversion)**: Khi bạn đẩy một trạng từ phủ định/giới hạn (`Never`, `Rarely`, `Not only`, `Only after...`) lên đầu câu giống như gắn `@Priority(HIGHEST)`, trình biên dịch tiếng Anh lập tức kích hoạt chế độ **Đảo Trợ Động Từ lên trước Chủ ngữ** giống hệt cấu trúc câu hỏi (`Not only DID the latency drop...`)!"
    },
    objectives: [
      "Phân biệt rạch ròi Cầu khiến Chủ động (have/make/let + Người + V_bare vs get + Người + to V) và Cầu khiến Bị động (have/get + Vật + P2) trong 5 giây.",
      "Nhận diện và chia chuẩn trợ động từ trong Đảo ngữ với nhóm trạng từ phủ định/hiếm gặp (Not only, Never, Rarely, Seldom, Little, Hardly...when, No sooner...than).",
      "Nắm vững quy tắc vàng của nhóm 'Only' đứng đầu câu (Only after, Only when, Only by, Only if): đảo ngữ ở MỆNH ĐỀ CHÍNH, không đảo ở mệnh đề phụ!"
    ],
    formulaCards: [
      {
        label: "Công thức 1 • Cầu khiến Chủ động (Giao cho AI / HỆ THỐNG NÀO làm)",
        formula: "HAVE / MAKE / LET + Agent + V_nguyên_thể  ||  GET + Agent + TO V  ||  HELP + O + V_nguyên_thể / to V",
        note: "Bẫy kinh điển: 'make + O + V_bare' (chủ động), nhưng khi chuyển sang BỊ ĐỘNG bắt buộc phục hồi chữ 'to': 'be made TO V'! ('Developers are made TO write unit tests')."
      },
      {
        label: "Công thức 2 • Cầu khiến Bị động (Thuê / Cho CÁI GÌ ĐƯỢC LÀM)",
        formula: "HAVE / GET + Object (Vật / Công việc) + V-ed / P2 (+ by Agent)",
        note: "Cực kỳ hay ra trong TOEIC Part 5! Nhìn tân ngữ sau 'have/get' là VẬT chịu tác động (the contract, the roof, the server, the code) -> Chọn ngay P2 (V3/-ed)!"
      },
      {
        label: "Công thức 3 • Đảo ngữ Trạng từ Phủ định & Giới hạn",
        formula: "[Never / Rarely / Seldom / Little / Not only / Under no circumstances] + TRỢ ĐỘNG TỪ + S + V_chính",
        note: "Trợ động từ gồm: `do/does/did + S + V_bare`, `have/has/had + S + P2`, `will/can/should + S + V_bare`, hoặc đảo thẳng `is/are/was/were + S`!"
      },
      {
        label: "Công thức 4 • Đảo ngữ Nhóm 'ONLY' & 'Hardly / No sooner'",
        formula: "Only [after / when / if / by...] + Cụm/Mệnh đề phụ + TRỢ ĐỘNG TỪ + S_chính + V_chính  ||  No sooner + HAD + S + P2 + THAN + S + V2",
        note: "Cặp đôi thời gian 'Vừa mới... thì đã...': `Hardly / Scarcely + had + S + P2 + WHEN + S + V2` == `No sooner + had + S + P2 + THAN + S + V2`."
      }
    ],
    sections: [
      {
        heading: "1. Hệ Thống Cầu Khiến (Causatives) — Phân Biệt 'Tự Làm' vs 'Nhờ/Thuê Làm'",
        paragraphs: [
          "Trong thế giới doanh nghiệp của TOEIC (sửa máy in, kiểm toán sổ sách, dịch hợp đồng, cài đặt mạng) cũng như trong kiến trúc phần mềm, không ai tự làm hết mọi khâu. Cấu trúc `have / get + something + P2` là cách nói tự nhiên nhất của người bản xứ khi sử dụng dịch vụ chuyên nghiệp hoặc ủy quyền xử lý.",
          "Khi làm bài Part 5, chìa khóa 3 giây nằm ở việc kiểm tra mối quan hệ giữa **Tân ngữ đứng ngay sau `have/get`** và động từ cần điền: Tân ngữ đó **TỰ LÀM (Chủ động)** hay **ĐƯỢC LÀM (Bị động)**?"
        ],
        bullets: [
          "**Nếu Tân ngữ tự thực hiện hành động (Chủ động)**:\n  • Đi với **`have`** -> dùng **V nguyên thể**: *I'll **have** our DevOps engineer **provision** a new S3 bucket.*\n  • Đi với **`get`** -> bắt buộc có **`to V`**: *How did you **get** the legacy SOAP client **to support** TLS 1.3?*",
          "**Nếu Tân ngữ chịu tác động (Bị động — chiếm 80% đề thi TOEIC!)**:\n  • Cả **`have`** lẫn **`get`** đều cộng thẳng **`P2 (V3/-ed)`**: *We **had** our Kubernetes cluster **penetration-tested** last month*; *Please **get** the NDA **signed** before sharing the architecture repo.*",
          "**Động từ `help` cực kỳ linh hoạt và hay thi**: `help + (O) + V_bare` HOẶC `to V` đều đúng chuẩn! (VD: *Distributed caching **helps reduce** [hoặc **helps to reduce**] database load*). Ngoài ra nhớ cụm cố định: **`cannot help + V-ing`** (= không thể nhịn được / không khỏi...).",
          "**Động từ `keep` và `leave` + O + Adj/P2/V-ing**: *Keep your dependencies **updated*** (được cập nhật - P2); *Apologies for keeping you **waiting*** (đang đợi - V-ing)."
        ]
      },
      {
        heading: "2. Đảo Ngữ Với Trạng Từ Phủ Định — Cú Hích Hùng Biện Điểm 700+",
        paragraphs: [
          "Bình thường ta viết: *The new indexing strategy not only reduced query latency, but it also cut IOPS in half.* Câu này đúng, nhưng khi muốn tạo sức nặng hùng biện trong bài thuyết trình kỹ thuật hoặc báo cáo thành tựu với Ban Giám đốc, kỹ sư bản xứ sẽ đẩy **`Not only`** ra đầu câu: ***Not only did** the new indexing strategy **reduce** query latency, **but** it **also** cut IOPS in half!*",
          "Cơ chế ngữ pháp hoàn toàn nhất quán: Bất cứ khi nào một từ/cụm từ mang sắc thái **Phủ định (Negative)** hoặc **Hiếm hoi (Restrictive)** đứng ở ĐẦU CÂU (hoặc đầu mệnh đề), bạn phải mượn trợ động từ đặt trước Chủ ngữ y hệt như đang đặt câu hỏi!"
        ],
        bullets: [
          "**Nhóm tần suất hiếm / chưa từng**: `Never`, `Rarely`, `Seldom`, `Hardly ever`, `Scarcely`. Ví dụ: ***Rarely do** we witness a distributed database achieve both strict serializability and sub-millisecond writes.*",
          "**Chữ `Little` đứng đầu câu (= Hầu như không biết/ngờ rằng)**: Đi với động từ nhận thức `know, realize, suspect, imagine`. Ví dụ: ***Little did** the developers **realize** that a single regex could freeze the entire event loop.*",
          "**Cụm giới từ cấm đoán tuyệt đối (Rất hay gặp trong Security Policy & SLA!)**: `Under no circumstances` (Dưới bất kỳ hoàn cảnh nào cũng không), `In no way`, `At no time`, `On no account`, `Not until...`. Ví dụ: ***Under no circumstances should** production API secrets **be committed** to a Git repository!*",
          "**Cặp song sát thời gian `No sooner ... than` & `Hardly/Scarcely ... when`**: Diễn tả sự kiện A vừa mới xong thì sự kiện B ập tới ngay tức khắc (vế đầu luôn đảo ngữ Quá khứ hoàn thành `had + S + P2`):\n  • ***No sooner had** the flash sale **started than** incoming traffic surged tenfold.*\n  • ***Hardly had** we **deployed** v2.1 **when** Sentry began alerting on `NullPointerException`.*"
        ]
      },
      {
        heading: "3. Quy Tắc Định Vị Đảo Ngữ Với 'Only' Đứng Đầu Câu",
        paragraphs: [
          "Các cấu trúc bắt đầu bằng `Only` (`Only after`, `Only when`, `Only if`, `Only by + V-ing`, `Only then`, `Only in this way`) cực kỳ phổ biến trong tài liệu kỹ thuật để nhấn mạnh **điều kiện tiên quyết duy nhất** (*Chỉ sau khi xác thực chữ ký HMAC xong thì worker mới xử lý thanh toán*).",
          "Điểm tinh tế cần nhớ để không mắc bẫy Part 5: Nếu sau `Only after / Only when / Only if` là một mệnh đề phụ, bạn **GIỮ NGUYÊN** mệnh đề phụ đó, và **CHỈ ĐẢO NGỮ Ở MỆNH ĐỀ CHÍNH** phía sau!"
        ],
        bullets: [
          "**`Only by + V-ing / Noun` + Đảo ngữ ngay lập tức**: ***Only by decoupling** read and write models **can we** scale this ledger to 100k TPS.*",
          "**`Only after / Only when / Only if + [S1 + V1 bình thường]` + `[Trợ động từ + S2 + V2]`**:\n  • Chuẩn 100%: ***Only after** [all integration tests **have passed**] **will Jenkins trigger** the production deployment.*\n  • Sai lầm cần tránh: Không đảo `have all integration tests passed` ở vế đầu, mà phải đảo `will Jenkins trigger` ở vế chính thứ hai!",
          "**Cấu trúc tương tự với `Not until` (Mãi cho đến khi... thì mới...)**: ***Not until** the heap dump was analyzed **did the team discover** the thread-local memory leak.*"
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Before launching the mobile banking app, FinTrust Corp **had** its source code **audited** by an accredited security lab.",
        vi: "Trước khi ra mắt ứng dụng ngân hàng di động, Tập đoàn FinTrust đã thuê một phòng thí nghiệm bảo mật được chứng nhận kiểm toán mã nguồn của mình.",
        note: "Cầu khiến bị động: 'had + Object (its source code) + P2 (audited)' — mã nguồn 'được kiểm toán'."
      },
      {
        tag: "Client Email",
        en: "Please **get** the updated data-processing addendum **countersigned** by your legal representative before Friday.",
        vi: "Vui lòng cho đại diện pháp lý của ngài ký đối ứng vào phụ lục xử lý dữ liệu cập nhật trước thứ Sáu.",
        note: "'get + Object + P2 (countersigned)' hoàn toàn tương đương với 'have + Object + P2' nhưng sắc thái thúc đẩy hoàn tất việc rõ hơn."
      },
      {
        tag: "Senior Java",
        en: "Rather than blocking the request thread, the controller **has** a Spring `@Async` executor **generate** the PDF invoice in the background.",
        vi: "Thay vì làm nghẽn luồng xử lý request, tầng controller giao cho bộ thực thi `@Async` của Spring tạo hóa đơn PDF ở chế độ chạy nền.",
        note: "Cầu khiến chủ động với 'have': 'has + Agent (an executor) + V_nguyên_thể (generate)'."
      },
      {
        tag: "TOEIC Part 5",
        en: "The operations director finally **got** the overseas logistics partner **to waive** the expedited shipping surcharge.",
        vi: "Giám đốc vận hành cuối cùng đã thuyết phục được đối tác hậu cần nước ngoài miễn khoản phụ phí giao hàng hỏa tốc.",
        note: "Bẫy phân biệt 'have' vs 'get' chủ động: đi với 'got + Người/Đối tác' bắt buộc phải có 'TO V' ('to waive')!"
      },
      {
        tag: "Code Review",
        en: "Strict compiler flags **make** developers **handle** every possible `sealed` interface subtype explicitly in `switch` expressions.",
        vi: "Các cờ biên dịch nghiêm ngặt buộc lập trình viên phải xử lý tường minh mọi kiểu con của `sealed` interface trong biểu thức `switch`.",
        note: "Cầu khiến chủ động: 'make + O + V_nguyên_thể (handle)'."
      },
      {
        tag: "TOEIC Part 6",
        en: "Following the audit, all remote contractors **were made to enroll** their laptops in the corporate mobile-device management system.",
        vi: "Sau cuộc kiểm toán, tất cả nhà thầu làm việc từ xa đã bị buộc phải đăng ký laptop của họ vào hệ thống quản lý thiết bị doanh nghiệp.",
        note: "Khi 'make' chuyển sang Bị động, chữ 'to' bắt buộc xuất hiện lại: 'were made to enroll'."
      },
      {
        tag: "System Design",
        en: "**Not only does** Redis Streams support consumer groups, **but** it **also** persists unacknowledged messages to an append-only file.",
        vi: "Redis Streams không những hỗ trợ các nhóm consumer, mà nó còn lưu bền vững các bản tin chưa xác nhận xuống tệp chỉ ghi nối tiếp.",
        note: "'Not only' đứng đầu câu -> mượn trợ động từ hiện tại đơn số ít 'does' đảo lên trước chủ ngữ 'Redis Streams' + nguyên mẫu 'support'."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Seldom has** the semiconductor industry **experienced** such rapid growth in demand for AI accelerator chips.",
        vi: "Hiếm khi nào ngành công nghiệp bán dẫn lại chứng kiến sự tăng trưởng nhu cầu nhanh chóng đến vậy đối với các dòng chip tăng tốc AI.",
        note: "Trạng từ tần suất hiếm 'Seldom' đứng đầu câu -> đảo trợ động từ 'has' lên trước chủ ngữ 'the semiconductor industry' + P2 'experienced'."
      },
      {
        tag: "Senior Java",
        en: "**Under no circumstances should** sensitive PII fields such as credit-card numbers **be logged** in plain text.",
        vi: "Dưới bất kỳ hoàn cảnh nào cũng tuyệt đối không được ghi log các trường thông tin cá nhân nhạy cảm như số thẻ tín dụng dưới dạng văn bản thuần.",
        note: "'Under no circumstances + should + S + be logged' — câu quy tắc vàng trong mọi Security Guideline của dự án ngân hàng/Fintech."
      },
      {
        tag: "System Design",
        en: "**Only after** the database transaction commits **does** the Outbox relay worker **publish** the domain event to Kafka.",
        vi: "Chỉ sau khi giao dịch cơ sở dữ liệu commit thành công thì tiến trình tiếp vận Outbox mới xuất bản sự kiện nghiệp vụ lên Kafka.",
        note: "Mệnh đề phụ 'the database transaction commits' giữ nguyên; đảo ngữ kích hoạt ở mệnh đề chính: 'does the Outbox relay worker publish'!"
      },
      {
        tag: "TOEIC Part 7",
        en: "**Only by consolidating** three regional warehouses into a single automated hub **was** the retailer able to cut fulfillment costs by 25%.",
        vi: "Chỉ bằng cách hợp nhất ba kho hàng khu vực thành một trung tâm tự động hóa duy nhất, nhà bán lẻ mới có thể cắt giảm 25% chi phí hoàn tất đơn hàng.",
        note: "'Only by + V-ing' đứng đầu -> đảo động từ to-be 'was' lên trước chủ ngữ 'the retailer'."
      },
      {
        tag: "Senior Java",
        en: "**No sooner had** the pod **joined** the load balancer **than** latency spiked due to an un-warmed JIT code cache.",
        vi: "Pod vừa mới gia nhập bộ cân bằng tải thì độ trễ đã tăng vọt do bộ nhớ đệm mã máy JIT chưa được làm nóng.",
        note: "Cấu trúc kinh điển 'No sooner + had + S + P2 + THAN + S + V2' (lưu ý đi với 'than', không dùng 'when')."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Hardly had** the press release **been published when** the company's stock price surged twelve percent.",
        vi: "Thông cáo báo chí vừa mới được công bố thì giá cổ phiếu của công ty đã tăng vọt 12%.",
        note: "Tương đương câu trên nhưng dùng 'Hardly / Scarcely + had + S + P2 + WHEN + S + V2'."
      },
      {
        tag: "Code Review",
        en: "Introducing structured concurrency in Java 21 **helps prevent** orphan background threads when a subtask fails.",
        vi: "Việc đưa vào cơ chế đồng thời có cấu trúc trong Java 21 giúp ngăn chặn các luồng nền mồ côi khi một tác vụ con gặp lỗi.",
        note: "Sau 'help' có thể đi thẳng với động từ nguyên mẫu không 'to': 'helps prevent' (hoặc 'helps to prevent')."
      },
      {
        tag: "TOEIC Part 6",
        en: "**Not until** the third round of usability testing **did** our UX researchers **identify** why mobile users abandoned the checkout page.",
        vi: "Mãi cho đến vòng kiểm thử khả năng sử dụng thứ ba, các nhà nghiên cứu UX của chúng tôi mới xác định được lý do người dùng di động rời bỏ trang thanh toán.",
        note: "'Not until + Cụm danh từ' đứng đầu câu -> mệnh đề chính đảo trợ động từ quá khứ 'did + S + identify'."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "We need to have the SSL certificate renew before midnight.",
          fix: "We need to have the SSL certificate renewed before midnight.",
          why: "Tân ngữ 'the SSL certificate' là vật chịu tác động ('được gia hạn'), nên cấu trúc cầu khiến bị động bắt buộc dùng P2 'renewed' (không dùng nguyên thể 'renew')."
        },
        {
          bug: "Can you have the QA lead to sign off on the release notes?",
          fix: "Can you have the QA lead sign off... (HOẶC: Can you get the QA lead to sign off...)",
          why: "Trộn lẫn công thức 'have' và 'get': 'have + người + V_nguyên_thể' (KHÔNG có 'to'), còn 'get + người + TO V' (PHẢI có 'to')."
        },
        {
          bug: "Not only the new cache reduced DB load, but it also improved UX.",
          fix: "Not only did the new cache reduce DB load, but it also improved UX.",
          why: "Đặt 'Not only' lên đầu câu mà quên đảo trợ động từ 'did' lên trước chủ ngữ (và trả 'reduced' về nguyên mẫu 'reduce')."
        },
        {
          bug: "Only when did the disk reach 100% PagerDuty sent an alert.",
          fix: "Only when the disk reached 100% did PagerDuty send an alert.",
          why: "Đảo ngữ SAI VẾ! Với 'Only when / Only after + S1 + V1, S2 + V2', vế phụ 1 giữ bình thường ('the disk reached'), và phải đảo ngữ ở MỆNH ĐỀ CHÍNH 2 ('did PagerDuty send')."
        },
        {
          bug: "No sooner had the migration finished when the QA team started testing.",
          fix: "No sooner had the migration finished than the QA team started testing.",
          why: "'No sooner' bắt nguồn từ so sánh hơn ('sớm hơn không bao nhiêu') nên BẮT BUỘC đi cặp với 'than'! Chỉ 'Hardly / Scarcely' mới đi với 'when'."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây phá đảo Cầu khiến trong Part 5: Thấy `have / had / get / got + [Cụm danh từ chỉ Vật] + _____` (VD: `have the projector _____`, `get your badge _____`) -> Khoanh ngay đáp án **`V-ed / P2`**! Ngược lại nếu giữa là `[Danh từ chỉ Người]` -> Nhìn động từ trước: là `have/make/let` chọn **`V_bare`**, là `get` chọn **`to V`**!",
      "Mẹo nhận diện câu Đảo ngữ ở đầu câu Part 5: Nếu câu bắt đầu bằng `Rarely / Seldom / Never / Little / Not only / Under no circumstances / Only by...` mà ngay sau đó là chỗ trống -> Gạch sạch mọi phương án có trật tự `S + V` bình thường, chỉ chọn phương án có **Trợ động từ đứng TRƯỚC Chủ ngữ** (`has the company`, `did we`, `should employees`)!",
      "Ghi nhớ cặp bài trùng lấy điểm 700+: Bị động của `make` bắt buộc có `to` (`be made to + V_bare`), và trong đảo ngữ thời gian: **`No sooner ... than`** (có đuôi `-er` đi với `than`) đối lập với **`Hardly / Scarcely ... when`** (đi với `when`)!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "but it also",
          "reduce CPU usage,",
          "Not only",
          "eliminated deadlocks.",
          "did the new query planner"
        ],
        answer: "Not only did the new query planner reduce CPU usage, but it also eliminated deadlocks.",
        vi: "Bộ lập kế hoạch truy vấn mới không những làm giảm mức tiêu thụ CPU, mà nó còn loại bỏ hoàn toàn tình trạng khóa chết."
      },
      fillBlank: {
        sentence: "Before going live, FinPay Corp had its smart-contract codebase _____ by an independent cybersecurity firm.",
        answer: "audited",
        accepted: ["audited", "reviewed", "inspected", "verified"],
        hint: "Cấu trúc Cầu khiến Bị động 'have + Vật (its smart-contract codebase) + ... + by Agent'!",
        explain: "Tân ngữ 'its smart-contract codebase' chịu tác động (được kiểm toán bởi một công ty an ninh mạng độc lập), nên sau 'had + Object' ta phải dùng phân từ quá khứ P2 ('audited' / 'reviewed' / 'inspected' / 'verified')."
      }
    },
    quiz: [
      {
        q: "Passengers whose flights are canceled due to mechanical issues can have their hotel accommodations _____ directly by the airline desk.",
        options: ["arrange", "arranging", "to arrange", "arranged"],
        answer: 3,
        explain: "Đáp án đúng là 'arranged' (D). Cấu trúc cầu khiến 'have + Object (their hotel accommodations) + _____ + by the airline desk'. Chỗ ở khách sạn 'được sắp xếp bởi' quầy hãng bay (nghĩa bị động) -> bắt buộc dùng P2 'arranged'."
      },
      {
        q: "Rarely _____ an open-source serialization framework achieve both zero-copy deserialization and full schema evolution out of the box.",
        options: ["does", "is", "has", "was"],
        answer: 0,
        explain: "Đáp án đúng là 'does' (A). Trạng từ hiếm gặp 'Rarely' đứng đầu câu kích hoạt đảo ngữ. Nhìn động từ chính phía sau chủ ngữ số ít 'an open-source serialization framework' là động từ nguyên mẫu 'achieve' -> cần trợ động từ hiện tại đơn số ít 'does' ('Rarely does S + V_bare'). Loại 'is/was' (không đi với V_bare chủ động) và 'has' (sau has phải là P2 'achieved')."
      },
      {
        q: "Only after the replica set acknowledges the write concern _____ return an HTTP 201 Created status to the client.",
        options: ["the order service will", "will the order service", "the order service does", "did the order service"],
        answer: 1,
        explain: "Đáp án đúng là 'will the order service' (B). Câu mở đầu bằng 'Only after + [mệnh đề phụ hiện tại đơn: acknowledges]' -> mệnh đề chính phía sau BẮT BUỘC phải đảo trợ động từ lên trước chủ ngữ (loại A và C vì chưa đảo ngữ). Vì mệnh đề phụ chia Hiện tại đơn ('acknowledges') mô tả luồng hệ thống hiện tại/tương lai, nên mệnh đề chính dùng 'will' (loại D quá khứ 'did' lệch thì)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G4_4: RÚT GỌN MỆNH ĐỀ TRẠNG NGỮ (PARTICIPLE CLAUSES) & CẤU TRÚC SONG SONG
   * ========================================================================== */
  G4_4: {
    duration: "45 phút",
    toeicTarget: "Bứt phá TOEIC 650–750+ (Part 5 Rút gọn đồng chủ ngữ đầu câu & Song song từ loại)",
    javaContext: "Viết Bullet-point CV Senior Java chuẩn FAANG/Global, viết Javadoc đồng nhất và tránh lỗi Dangling Participle trong Design Docs",
    teacherIntro: "Có hai dấu hiệu nhận biết ngay lập tức một văn bản tiếng Anh được viết bởi một kỹ sư cấp cao (Principal/Staff Engineer) hay được biên tập chuẩn mực như đề thi ETS TOEIC: Thứ nhất là khả năng cô đọng mệnh đề phụ chỉ thời gian/nguyên nhân ở đầu câu bằng **Mệnh đề phân từ (Participle Clauses)** như *'Having validated the JWT signature, the gateway forwards the request...'*. Thứ hai là nhịp điệu cân đối hoàn hảo của **Cấu trúc song song (Parallelism)** trong từng danh sách liệt kê hay gạch đầu dòng CV. Hôm nay, chúng ta sẽ nắm trọn bộ đôi kỹ thuật 'Clean Code của ngôn ngữ viết' này — vừa giúp bạn lượm điểm Part 5 trong 5 giây, vừa biến CV và tài liệu kỹ thuật của bạn thành tác phẩm chuyên nghiệp không tì vết!",
    javaAnalogy: {
      title: "Fluent Method Chaining Cùng Ngữ Cảnh 'this' & Generic List<T> Đồng Nhất Kiểu",
      body: "Hãy ghi nhớ hai quy tắc bất di bất dịch qua lăng kính Java:\n1. **Rút gọn Mệnh đề Trạng ngữ = Fluent Builder / Method Chaining trên cùng biến `this`**: Bạn chỉ được phép viết `.verifyChecksum().commitOffset()` khi cả hai hàm đều gọi trên **CÙNG MỘT ĐỐI TƯỢNG `worker`**! Trong tiếng Anh, `_____ the checksum, the worker commits the offset` chỉ hợp lệ khi `the worker` đứng ngay sau dấu phẩy chính là chủ thể thực hiện hành động đầu câu. Nếu chủ ngữ sau dấu phẩy là `the offset` (*Having verified the checksum, the offset was committed*), bạn vừa gây ra lỗi **Dangling Participle** (cái `offset` tự đi kiểm tra checksum — tương đương gọi nhầm `this` của class khác)!\n2. **Cấu trúc Song song (Parallelism) = `List<T>` chặt kiểu**: Khi dùng `and`, `or`, `both...and`, `not only...but also`, mọi phần tử trong danh sách phải cùng một kiểu `T`: `List<Gerund>` (`designing, coding, and deploying`), hoặc `List<Noun>` (`scalability, availability, and security`). Nhét một `Adjective` hay `To-V` lạc loài vào giữa sẽ báo lỗi Type Mismatch ngay lập tức!"
    },
    objectives: [
      "Giải đúng 100% câu hỏi Rút gọn mệnh đề trạng ngữ đứng đầu câu (V-ing vs V-ed/P2 vs Having P2) nhờ nhìn thẳng vào Chủ ngữ ngay sau dấu phẩy.",
      "Sử dụng thuần thục cấu trúc giữ lại liên từ khi rút gọn (While/Before/After/Upon + V-ing; Once/When/If/Unless + P2) trong viết tài liệu kỹ thuật.",
      "Áp dụng quy tắc Cấu trúc song song (Parallelism) để chọn từ loại tích tắc trong TOEIC Part 5 và chuẩn hóa toàn bộ gạch đầu dòng trong CV / Resume Senior Java."
    ],
    formulaCards: [
      {
        label: "Quy tắc 1 • Rút gọn Trạng ngữ Đầu câu (Nhìn Chủ ngữ sau dấu phẩy!)",
        formula: "Chủ động: V-ing..., S + V  ||  Bị động: V-ed/P2..., S + V  ||  Chủ động hoàn tất trước: Having + P2..., S + V",
        note: "Điều kiện sống còn: S đứng ngay sau dấu phẩy `,` chính là chủ ngữ của động từ ở đầu câu! S tự làm -> chọn V-ing (hoặc Having P2); S bị tác động -> chọn V-ed/P2!"
      },
      {
        label: "Quy tắc 2 • Rút gọn Giữ lại Liên từ / Giới từ (Rất hay gặp ở Part 5–6!)",
        formula: "[Before / After / While / When / Upon / On / By / Without] + V-ing  ||  [Once / When / If / Unless / Though] + V-ed/P2",
        note: "'Upon / On + V-ing' (= Ngay khi làm gì...) là cấu trúc thương mại vàng của TOEIC: 'Upon receiving your payment, we will activate the license'."
      },
      {
        label: "Quy tắc 3 • Luật Cân Xứng Liên Từ Kết Hợp (Parallelism)",
        formula: "A + [and / or / but / rather than] + B  ||  A, B, and/or C  ===>  A, B, C PHẢI ĐỒNG NHẤT TỪ LOẠI!",
        note: "N + and + N  |  Adj + and + Adj  |  V-ing + and + V-ing  |  to V1 + and + (to) V2  |  V(quá khứ) + and + V(quá khứ)."
      },
      {
        label: "Quy tắc 4 • Luật Cân Xứng Cặp Liên Từ Tương Quan (Correlative Pairs)",
        formula: "both [X] and [Y]  ||  either [X] or [Y]  ||  neither [X] nor [Y]  ||  not only [X] but (also) [Y]",
        note: "Ngay sau từ khóa thứ nhất ('both / either / neither / not only') là cấu trúc gì (Giới từ? To-V? V-ing? Danh từ?) thì ngay sau từ khóa thứ hai BẮT BUỘC là cấu trúc y hệt!"
      }
    ],
    sections: [
      {
        heading: "1. Phá Giải Câu Điền Đầu Câu `_____, S + V` Trong 5 Giây",
        paragraphs: [
          "Trong đề thi TOEIC Part 5, một dạng câu cực kỳ quen thuộc ở mốc 600–750+ có hình dáng như sau: `_____ in 2018 as an internal deployment tool, Spinnaker Flow now powers over five hundred enterprise pipelines.` Đáp án: `(A) Found (B) Founding (C) Founded (D) Has founded`.",
          "Cách giải chuẩn xác như máy tính: Giữa hai vế chỉ có dấu phẩy `,` và vế sau ĐÃ CÓ động từ chính `powers` -> Đầu câu không thể là động từ chia thì (loại A nếu hiểu là V1/V2 của find, loại D). Tiếp theo, nhìn ngay vào Chủ ngữ đứng sát sau dấu phẩy là **`Spinnaker Flow`** (tên phần mềm) -> Phần mềm *được thành lập/tạo ra* (Bị động, từ gốc `found -> founded -> founded`) -> Khoanh ngay **`(C) Founded`**!"
        ],
        bullets: [
          "**Khi nào chọn `V-ing` đầu câu?** Khi Chủ ngữ sau dấu phẩy **TỰ THỰC HIỆN** hành động (và thường có Tân ngữ ngay sau chỗ trống!). Ví dụ: ***Recognizing** [the need for sub-second failover], **our architects** redesigned the consensus layer.*",
          "**Khi nào chọn `V-ed / P2` đầu câu?** Khi Chủ ngữ sau dấu phẩy **CHỊU TÁC ĐỘNG** (thường sau chỗ trống là Giới từ `in, at, by, with, from, as`!). Ví dụ: ***Located** [in the heart of Singapore], **the new data center** connects directly to three subsea cables.*",
          "**Khi nào chọn `Having + P2` (Chủ động) hoặc `Having been + P2` (Bị động)?** Khi muốn nhấn mạnh hành động ở vế đầu **ĐÃ HOÀN TẤT XONG XUÔI** rồi mới tới hành động ở vế chính: ***Having passed** all chaos-engineering scenarios, **the service** was promoted to general availability.*",
          "**Cụm cố định `Upon / On + V-ing` (= As soon as + S + V)**: Xuất hiện dày đặc trong thông báo TOEIC: ***Upon arriving** at the conference venue, attendees should register at Lobby B.*"
        ]
      },
      {
        heading: "2. Cấu Trúc Song Song (Parallelism) — Mỏ Điểm Dễ Ăn Nhất Nếu Tinh Mắt",
        paragraphs: [
          "Cấu trúc song song kiểm tra khả năng nhận diện sự cân xứng nhịp điệu trong câu. Tin vui cho bạn là trong phòng thi TOEIC Part 5, đây là dạng bài giải nhanh nhất (chỉ tốn 3–5 giây) vì bạn hầu như không cần dịch nghĩa toàn câu — chỉ cần nhìn phần tử đứng trước/sau `and / or / but also` để 'copy kiểu dữ liệu'!",
          "Lưu ý đặc biệt với chuỗi liệt kê 3 phần tử `A, B, and _____`: phần tử thứ nhất `A` và thứ hai `B` mang hình thái gì (ví dụ đuôi danh từ `-tion / -ment`, hay danh động từ `V-ing`, hay tính từ `-able / -ive`), thì chỗ trống thứ ba BẮT BUỘC mang đúng từ loại đó!"
        ],
        bullets: [
          "**Song song chuỗi Danh từ**: *The new architecture prioritizes **resilience**, **observability**, and **maintainability**.* (Không viết `...resilience, observability, and easy to maintain`!).",
          "**Song song chuỗi Danh động từ sau giới từ**: *Senior engineers spend considerable time **reviewing** design docs, **mentoring** junior developers, and **resolving** cross-team blockers.*",
          "**Song song Động từ nguyên mẫu (`to V1, V2, and V3`)**: Khi nối nhiều cụm `to V`, chữ `to` ở các động từ phía sau **thường được lược bỏ** để tránh lặp từ! Vì thế nếu thấy `to compile the source code, run unit tests, and _____ the Docker image`, chỗ trống cần **V nguyên thể trần `push`** (khớp với `compile` và `run` sau chữ `to` dùng chung đầu tiên!).",
          "**Song song quanh Cặp liên từ tương quan (`not only... but also`, `either... or`, `both... and`)**: Vị trí đặt từ khóa phải chuẩn từng milimet! Đúng: *This patch improves latency **not only** `in read queries` **but also** `in batch writes`* (cùng là cụm giới từ `in + N`)."
        ]
      },
      {
        heading: "3. Ứng Dụng Vàng: Chuẩn Hóa CV / Resume Senior Java Bằng Parallelism",
        paragraphs: [
          "Bạn có biết các Tech Recruiter tại Google, Grab, Shopee hay các tập đoàn Âu-Mỹ chỉ dành trung bình **6 giây** quét qua một bản CV? Lỗi phản cảm nhất khiến CV bị đánh giá thiếu chuyên nghiệp là các dòng gạch đầu dòng (bullet points) lệch tông ngữ pháp: dòng 1 dùng `Designed...` (V-ed), dòng 2 dùng `Responsible for building...` (Adj), dòng 3 dùng `Optimizing...` (V-ing)!",
          "Quy tắc chuẩn FAANG cho CV kỹ sư phần mềm: **100% các bullet point trong kinh nghiệm đã qua bắt đầu bằng Động từ Hành động mạnh ở Quá khứ đơn (Action Verbs in Past Simple)** (hoặc Hiện tại đơn cho công việc hiện tại), tuyệt đối đồng nhất!"
        ],
        bullets: [
          "✅ **Chuẩn Parallelism trong CV Senior Java**:\n  • **Architected** an event-driven settlement engine using Java 21 and Apache Kafka, processing 15M+ daily transactions.\n  • **Slashed** p99 API latency by 62% by replacing synchronous REST chains with gRPC and local Caffeine caching.\n  • **Spearheaded** zero-downtime migration from Oracle DB to PostgreSQL across 8 core microservices.",
          "❌ **Vi phạm Dangling Participle cần tuyệt đối tránh khi viết Báo cáo / Docs**: Đừng viết *'After deploying version 3.4, CPU usage dropped by 40%'* (Ai deploy? Chẳng lẽ `CPU usage` tự đi deploy phiên bản 3.4?!). Hãy sửa thành: *'After **we** deployed version 3.4, CPU usage dropped by 40%'* HOẶC *'After deploying version 3.4, **our team** observed a 40% drop in CPU usage'*!"
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "**Equipped** with dual redundant power supplies, the enterprise router guarantees uninterrupted network uptime.",
        vi: "Được trang bị bộ nguồn kép dự phòng, thiết bị định tuyến doanh nghiệp đảm bảo thời gian hoạt động mạng không gián đoạn.",
        note: "Chủ ngữ sau dấu phẩy 'the enterprise router' chịu tác động ('được trang bị') -> rút gọn mệnh đề trạng ngữ đầu câu bằng P2 'Equipped'."
      },
      {
        tag: "Senior Java",
        en: "**Having acquired** the distributed Redis lock, the scheduler instance proceeds to execute the nightly reconciliation job.",
        vi: "Sau khi đã chiếm giữ được khóa phân tán Redis, tiến trình lập lịch tiếp tục thực thi tác vụ đối soát hàng đêm.",
        note: "'Having + P2 (Having acquired)' nhấn mạnh việc lấy khóa đã hoàn tất trước khi 'the scheduler instance' (cùng chủ ngữ chủ động!) chạy job."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Upon completing** the mandatory safety orientation, newly hired technicians will receive their cleanroom access cards.",
        vi: "Ngay sau khi hoàn tất buổi định hướng an toàn bắt buộc, các kỹ thuật viên mới tuyển sẽ nhận được thẻ ra vào phòng sạch.",
        note: "'Upon + V-ing' (= As soon as they complete...) đồng chủ ngữ với 'newly hired technicians'."
      },
      {
        tag: "System Design",
        en: "**Once persisted** to the write-ahead log, committed transactions can survive an unexpected power failure.",
        vi: "Một khi đã được lưu bền vững vào nhật ký ghi trước (WAL), các giao dịch đã commit có thể sống sót qua sự cố mất điện đột ngột.",
        note: "Giữ lại liên từ 'Once' + P2 bị động 'persisted' (= Once they are persisted) đồng chủ ngữ với 'committed transactions'."
      },
      {
        tag: "TOEIC Part 5",
        en: "The new ERP platform streamlines procurement, automates inventory tracking, and **generates** real-time financial forecasts.",
        vi: "Nền tảng ERP mới tinh gọn hoạt động mua sắm, tự động hóa theo dõi tồn kho và tạo ra các dự báo tài chính theo thời gian thực.",
        note: "Cấu trúc song song 3 động từ chia Hiện tại đơn ngôi 3 số ít: 'streamlines', 'automates', and 'generates'."
      },
      {
        tag: "Code Review",
        en: "A well-designed DTO should be **immutable**, **concise**, and **free** of persistence-layer annotations.",
        vi: "Một đối tượng truyền tải dữ liệu (DTO) thiết kế tốt nên bất biến, ngắn gọn và không dính các annotation của tầng lưu trữ.",
        note: "Song song 3 tính từ bổ ngữ sau 'should be': 'immutable', 'concise', and 'free (of...)'."
      },
      {
        tag: "TOEIC Part 6",
        en: "Candidates for the Principal Architect role must demonstrate expertise in **designing** cloud-native systems, **leading** agile squads, and **communicating** with C-level stakeholders.",
        vi: "Ứng viên cho vị trí Kiến trúc sư Chính phải thể hiện chuyên môn trong việc thiết kế hệ thống cloud-native, dẫn dắt các đội Agile và giao tiếp với lãnh đạo cấp cao.",
        note: "Sau giới từ 'in' là chuỗi song song 3 Danh động từ (V-ing): 'designing..., leading..., and communicating...'."
      },
      {
        tag: "Senior Java",
        en: "Project Loom enables developers **both** **to write** straightforward imperative code **and** **to achieve** reactive-grade scalability.",
        vi: "Project Loom cho phép lập trình viên vừa viết mã tuần tự dễ hiểu vừa đạt được khả năng mở rộng ngang ngửa lập trình bất đồng bộ (reactive).",
        note: "Cặp liên từ tương quan 'both [to V] and [to V]' cân xứng tuyệt đối."
      },
      {
        tag: "TOEIC Part 5",
        en: "Before **submitting** your expense reimbursement form, please attach scanned copies of all itemized hotel receipts.",
        vi: "Trước khi nộp biểu mẫu hoàn ứng công tác phí, vui lòng đính kèm bản quét của tất cả hóa đơn khách sạn chi tiết.",
        note: "Sau 'Before' (khi lược bỏ chủ ngữ 'you' khớp với câu mệnh lệnh vế sau) -> động từ chuyển thành V-ing 'submitting'."
      },
      {
        tag: "System Design",
        en: "**Unless configured** with an explicit dead-letter queue, poison messages can block a Kafka partition indefinitely.",
        vi: "Trừ khi được cấu hình tường minh với hàng đợi thư chết, các bản tin lỗi có thể làm tắc nghẽn một phân vùng Kafka vô thời hạn.",
        note: "'Unless + P2' (= Unless the consumer/topic is configured...) cực kỳ súc tích trong tài liệu kiến trúc."
      },
      {
        tag: "Client Email",
        en: "**Faced** with stricter data-residency laws in Europe, many multinational banks are deploying dedicated sovereign-cloud clusters.",
        vi: "Đối mặt với các đạo luật lưu trữ dữ liệu nội địa nghiêm ngặt hơn tại châu Âu, nhiều ngân hàng đa quốc gia đang triển khai các cụm đám mây chủ quyền riêng.",
        note: "Cụm phân từ mở đầu kinh điển 'Faced with + N' (= Because they are faced with... — chú ý luôn dùng 'Faced with', không dùng 'Facing with'!)."
      },
      {
        tag: "TOEIC Part 7",
        en: "The board chose **to modernize** the existing manufacturing plant **rather than** **build** an entirely new facility overseas.",
        vi: "Hội đồng quản trị đã chọn hiện đại hóa nhà máy sản xuất hiện tại thay vì xây dựng một cơ sở hoàn toàn mới ở nước ngoài.",
        note: "Cấu trúc song song quanh 'rather than': 'to modernize ... rather than (to) build' (lược bỏ 'to' ở vế hai rất tự nhiên)."
      },
      {
        tag: "Code Review",
        en: "**Not knowing** whether the caller passes a mutable list, the constructor creates a defensive copy via `List.copyOf()`.",
        vi: "Vì không biết liệu nơi gọi có truyền vào một danh sách khả biến hay không, hàm khởi tạo tạo một bản sao phòng thủ thông qua `List.copyOf()`.",
        note: "Phủ định của mệnh đề phân từ đứng đầu câu: đặt 'Not' ngay trước V-ing ('Not knowing...')."
      },
      {
        tag: "TOEIC Part 5",
        en: "Tickets for the annual tech symposium can be purchased **either** **online** through our website **or** **in person** at the convention center.",
        vi: "Vé tham dự hội nghị chuyên đề công nghệ thường niên có thể được mua trực tuyến qua trang web của chúng tôi hoặc trực tiếp tại trung tâm hội nghị.",
        note: "Song song trạng ngữ chỉ phương thức quanh 'either [online...] or [in person...]'."
      },
      {
        tag: "Senior Java",
        en: "Our CI pipeline is configured **to compile** the Maven project, **execute** Testcontainers suites, and **publish** signed container images.",
        vi: "Đường ống CI của chúng tôi được cấu hình để biên dịch dự án Maven, thực thi bộ kiểm thử Testcontainers và xuất bản các container image đã ký số.",
        note: "Chuỗi nguyên mẫu dùng chung chữ 'to' đầu tiên: 'to [compile..., execute..., and publish...]'."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Walking through the stack trace, the root cause was immediately obvious.",
          fix: "Walking through the stack trace, I immediately spotted the root cause.",
          why: "Lỗi Dangling Participle kinh điển! 'the root cause' không có chân tay mắt mũi để 'Walking through the stack trace'. Chủ ngữ sau dấu phẩy phải là người đọc log ('I' / 'the engineer')."
        },
        {
          bug: "Locating in Ho Chi Minh City, our offshore R&D center employs 120 Java engineers.",
          fix: "Located in Ho Chi Minh City, our offshore R&D center employs 120 Java engineers.",
          why: "'locate' là ngoại động từ ('đặt vị trí ở đâu'). Trung tâm R&D 'được đặt tại' TP.HCM nên bắt buộc dùng phân từ bị động 'Located in...' (tương tự 'Based in', 'Founded in')."
        },
        {
          bug: "The API gateway handles authentication, rate limiting, and routes requests.",
          fix: "The API gateway handles authentication, rate limiting, and request routing.",
          why: "Vi phạm Cấu trúc song song: sau 'handles' đã liệt kê 2 cụm Danh từ ('authentication', 'rate limiting'), tự nhiên phần tử thứ 3 lại bẻ sang Động từ ('routes requests')!"
        },
        {
          bug: "Facing with memory pressure, the JVM triggered a Full GC cycle.",
          fix: "Faced with memory pressure, the JVM... (HOẶC: Facing memory pressure, the JVM...)",
          why: "Nhầm lẫn giữa chủ động và bị động: nếu chủ động 'Facing' thì KHÔNG có giới từ 'with' ('Facing + O'); nếu có 'with' thì bắt buộc phải là bị động 'Faced with + N'!"
        },
        {
          bug: "This framework is not only fast to boot up, but also consumes very little RAM.",
          fix: "This framework not only boots up fast, but also consumes very little RAM. (HOẶC: ...is not only fast to boot up, but also memory-efficient.)",
          why: "Đặt 'not only' SAU động từ 'is' khiến vế 1 là Tính từ ('fast'), trong khi vế 2 sau 'but also' lại là Động từ ('consumes') -> Lệch cấu trúc song song!"
        }
      ]
    },
    toeicTips: [
      "Mẹo 5 giây giải câu `_____, S + V` ở đầu câu Part 5: Đừng đọc hết câu! Nhìn ngay **Chủ ngữ đứng sát sau dấu phẩy `,`** xem nó là Người hay Vật, Chủ động hay Bị động:\n  • Nếu gặp các động từ đặt vị trí/thành lập/trang bị (`Located in, Based in, Founded in, Established in, Equipped with, Designed for, Written by`) + sau dấu phẩy là Công ty/Tòa nhà/Sản phẩm -> Khoanh **`V-ed/P2`** trong 2 giây!\n  • Nếu sau chỗ trống có Tân ngữ danh từ trực tiếp (`_____ a 20% surge in demand, the factory hired...`) -> Khoanh **`V-ing`**!",
      "Mẹo tia laser săn Cấu trúc Song song: Thấy ngay trước chỗ trống có chữ **`and`** hoặc **`or`** (đặc biệt sau dấu phẩy `, and _____`), hãy nhìn ngược lại 1–2 phần tử đứng trước dấu phẩy xem đuôi của chúng là gì (`-ing`, `-tion/-ment`, `to V` rút bỏ `to`, hay `Adj`) -> Chọn ngay phương án cùng đuôi/cùng từ loại!",
      "Nhớ kỹ bẫy lược bỏ chữ `to` trong chuỗi nguyên mẫu: `wants to expand its market share and _____ operating costs` -> Dù không có chữ `to` ngay trước chỗ trống, đáp án vẫn là động từ nguyên mẫu **`reduce / lower`** (song song với `expand`), TUYỆT ĐỐI không chọn `reduces` theo `wants`!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "the worker",
          "safely.",
          "Having verified",
          "commits the Kafka offset",
          "the cryptographic signature,"
        ],
        answer: "Having verified the cryptographic signature, the worker commits the Kafka offset safely.",
        vi: "Sau khi đã xác minh chữ ký mật mã học, tiến trình worker thực hiện commit offset Kafka một cách an toàn."
      },
      fillBlank: {
        sentence: "Our platform engineering team is responsible for provisioning clusters, automating pipelines, and _____ production SLAs.",
        answer: "monitoring",
        accepted: ["monitoring", "maintaining", "enforcing"],
        hint: "Áp dụng Cấu trúc song song với 'provisioning clusters' và 'automating pipelines' sau giới từ 'for'!",
        explain: "Sau cụm giới từ 'responsible for' là chuỗi liệt kê 3 phần tử nối bằng 'and'. Hai phần tử đầu đều ở dạng Danh động từ V-ing ('provisioning...', 'automating...'), nên phần tử thứ ba bắt buộc đồng nhất dạng V-ing ('monitoring' / 'maintaining' / 'enforcing')."
      }
    },
    quiz: [
      {
        q: "_____ in Zurich over a century ago, Helvetia Precision Instruments remains a global leader in optical sensor manufacturing.",
        options: ["Founding", "Founded", "Founds", "To found"],
        answer: 1,
        explain: "Đáp án đúng là 'Founded' (B). Câu đã có động từ chính 'remains' ở vế sau dấu phẩy -> đầu câu là mệnh đề trạng ngữ rút gọn (loại C). Chủ ngữ sau dấu phẩy 'Helvetia Precision Instruments' (tên công ty) chịu tác động 'được thành lập tại Zurich' -> dùng phân từ bị động P2 'Founded' (= Because/Although it was founded...)."
      },
      {
        q: "The refactored authentication filter validates bearer tokens, enriches the security context, and _____ audit events asynchronously.",
        options: ["publish", "publishing", "published", "publishes"],
        answer: 3,
        explain: "Đáp án đúng là 'publishes' (D). Cấu trúc song song nối 3 động từ chính chia theo cùng một chủ ngữ số ít 'The refactored authentication filter' ở thì Hiện tại đơn: 'validates..., enriches..., and publishes...'."
      },
      {
        q: "_____ reviewing the heap histogram in Eclipse MAT, the on-call engineer pinpointed an unbounded static `Map` retaining two million session objects.",
        options: ["During", "Upon", "Since", "Despite of"],
        answer: 1,
        explain: "Đáp án đúng là 'Upon' (B). Ngay sau chỗ trống là Danh động từ V-ing ('reviewing...'). Loại 'During' (cấm đi với V-ing!), loại 'Despite of' (sai ngữ pháp vì despite không có of). Giữa 'Upon reviewing' (Ngay khi xem xét...) và 'Since reviewing' (Kể từ khi... đòi hỏi mệnh đề chính chia Hiện tại hoàn thành, nhưng ở đây vế chính là Quá khứ đơn 'pinpointed'), 'Upon + V-ing' khớp hoàn hảo về cả ngữ pháp lẫn ngữ nghĩa!"
      }
    ]
  },

  /* ==========================================================================
   * BÀI G4_5: CHIẾN THUẬT GIẢI NHANH TOEIC PART 5 & PART 6 TRONG 20 GIÂY/CÂU
   * ========================================================================== */
  G4_5: {
    duration: "45 phút",
    toeicTarget: "Chiến thuật phòng thi thực chiến TOEIC 600–750+ (Giải trọn 46 câu Part 5+6 trong 20 phút, giữ 55 phút cho Part 7!)",
    javaContext: "Áp dụng tư duy Query Optimizer O(1) Index Seek thay vì O(n) Full Table Scan khi làm bài dưới áp lực thời gian cao",
    teacherIntro: "Anh em thân mến, sau 22 bài ngữ pháp từ G1.1 đến G4.4, bạn đã nắm trong tay 100% kiến thức ngữ pháp của đề thi TOEIC! Nhưng tại sao rất nhiều lập trình viên vững ngữ pháp vào phòng thi thật vẫn chỉ kẹt ở mức 520–570 điểm và phải khoanh bừa 15–20 câu cuối của Part 7 vì... hết giờ? Câu trả lời nằm ở **Thuật toán Quản trị Thời gian**: họ tiêu tốn tới 35 phút cho 46 câu Part 5 & Part 6 vì thói quen đọc dịch tuần tự từ chữ đầu tiên đến chữ cuối cùng của mọi câu! Hôm nay, với tư cách một người vừa tối ưu hệ thống chịu tải cao vừa luyện thi TOEIC thực chiến, tôi sẽ truyền lại cho bạn quy trình **4 Bước Giải Đề Ngược O(1) Index Seek** — giúp bạn chém đẹp các câu ngữ pháp trong 5–10 giây, câu từ vựng trong 20 giây, chốt gọn Part 5 + Part 6 trong đúng **20 phút** để ung dung bước vào Part 7 với 55 phút dư dả!",
    javaAnalogy: {
      title: "Database Query Optimizer: O(1) Index Seek vs O(n) Full Table Scan",
      body: "Hãy hình dung mỗi câu hỏi TOEIC Part 5 dài 22 từ giống như một bản ghi có 22 cột. Thí sinh nghiệp dư chạy `SELECT *` đọc dịch từ cột 1 đến cột 22 rồi mới ngó xuống 4 đáp án A-B-C-D — đó chính là **Full Table Scan `O(n)`** cực kỳ tốn CPU và làm tràn bộ nhớ não! Ngược lại, chiến thuật của Senior Engineer là nhìn **4 đáp án A-B-C-D TRƯỚC TIÊN** (đọc `Query Execution Plan`): nếu thấy `(A) reliable (B) reliably (C) reliability (D) rely`, Optimizer biết ngay đây là bài toán Từ loại -> Nhảy con trỏ **`O(1)` Index Seek** tới đúng 1 từ bên trái và 1 từ bên phải chỗ trống (`remain _____ throughout`), thấy Linking Verb `remain` -> Khoanh `(A) reliable` trong **4 giây** mà không cần đọc 19 từ còn lại!"
    },
    objectives: [
      "Thiết lập Kỷ luật Đồng hồ Bấm giờ 75 phút Reading chuẩn ETS (12 phút Part 5 + 8 phút Part 6 + 55 phút Part 7) để không bao giờ bị cháy giờ cuối buổi.",
      "Thành thạo Quy trình 4 Bước Quét Ngược cho 5 nhóm câu hỏi Part 5: Từ loại (5s), Đại từ/Giới từ công thức (5s), Chia động từ vs Rút gọn (10s), Liên từ vs Giới từ (12s), và Từ vựng/Collocation (20–25s).",
      "Làm chủ chiến thuật giải Part 6 (Điền từ vào đoạn văn 4 chỗ trống), đặc biệt là bí quyết xử lý dạng câu mới khó nhất: Điền cả một câu hoàn chỉnh vào đoạn văn (Sentence Insertion) trong 35 giây."
    ],
    formulaCards: [
      {
        label: "Kỷ luật Đồng hồ • Phân bổ 75 Phút Reading (Câu 101 -> 200)",
        formula: "Part 5 (30 câu: 101–130) = 11–12 phút  ||  Part 6 (16 câu: 131–146) = 8–9 phút  ||  Part 7 (54 câu: 147–200) = 54–55 phút!",
        note: "Nguyên tắc sinh tử: Quá 30 giây cho 1 câu Part 5 mà vẫn phân vân giữa 2 đáp án -> Chọn ngay 1 phương án, tô đen dứt khoát vào phiếu trả lời và ĐI TIẾP! Đừng bao giờ đổi 1 câu 5 điểm lấy 5 câu Part 7 cuối bài!"
      },
      {
        label: "Nhóm Tốc độ Ánh sáng (3–7 giây/câu) • Từ Loại & Đại Từ",
        formula: "4 đáp án cùng gốc khác đuôi (-tion / -ive / -ly / V) ===> CHỈ NHÌN ±2 TỪ TRÁI & PHẢI CHỖ TRỐNG!",
        note: "• a/an/the/my/Adj + [_____] + giới từ/V -> Danh từ!\n• a/an/the + [_____] + Danh từ -> Tính từ!\n• be/become/remain + [_____] + P2/Adj -> Trạng từ! (Nếu không có P2/Adj sau đó -> Tính từ!)."
      },
      {
        label: "Nhóm Cấu trúc Cú pháp (8–12 giây/câu) • Động Từ & Từ Nối",
        formula: "4 đáp án là biến thể Động từ ===> B1: Đếm V chính trong câu -> B2: Xét Chủ động/Bị động -> B3: Xét Thì & Ngôi!",
        note: "Nếu 4 đáp án trộn Liên từ/Giới từ/Trạng từ liên kết -> B1: Kiểm tra sau chỗ trống là [S+V] hay [Cụm N] hay [dấu phẩy] -> B2: Dịch lướt quan hệ nhân quả/tương phản."
      },
      {
        label: "Chiến thuật Part 6 • Giải Câu 'Điền Cả Câu Hoàn Chỉnh' (Sentence Insertion)",
        formula: "Đọc câu TRƯỚC chỗ trống + câu SAU chỗ trống ===> Bắt 3 Móc xích: Đại từ (this/these/such/they) + Từ nối + Logic Thời gian!",
        note: "Đáp án đúng KHÔNG BAO GIỜ giới thiệu thông tin mâu thuẫn hoặc lạc quẻ với câu đứng ngay sau nó. Đặc biệt chú ý nếu câu sau chỗ trống có 'This issue / However / Instead'!"
      }
    ],
    sections: [
      {
        heading: "1. Quy Trình 4 Bước 'Quét Ngược' Cho Mọi Câu Part 5 (101–130)",
        paragraphs: [
          "Trong mỗi đề Part 5 gồm 30 câu, cấu trúc phân bổ của ETS cực kỳ ổn định: khoảng **18–20 câu Ngữ pháp & Cấu trúc** và **10–12 câu Từ vựng**. Mục tiêu của bạn là giải quyết gọn 20 câu Ngữ pháp chỉ trong khoảng **3.5 – 4 phút** (trung bình 10 giây/câu), nhờ đó dành ra được 7–8 phút thoải mái suy luận cho 10 câu Từ vựng khó!",
          "Hãy rèn thói quen mắt di chuyển theo đúng 4 bước cơ học sau đây trên từng câu:"
        ],
        bullets: [
          "**Bước 1 — Nhìn 4 đáp án A-B-C-D TRƯỚC TIÊN (1 giây)**: Phân loại ngay câu hỏi thuộc 1 trong 4 giỏ: (1) *Từ loại/Đại từ*, (2) *Chia động từ/Rút gọn*, (3) *Từ nối câu*, hay (4) *Từ vựng thuần túy* (4 từ khác gốc nhau nhưng cùng từ loại).",
          "**Bước 2 — Quét Cửa Sổ Hẹp `±2 words` (cho giỏ 1) hoặc Tách Trục Mệnh Đề (cho giỏ 2 & 3)**:\n  • Với bài **Từ loại**, cẩn thận nhất là cặp bẫy **`[Danh từ ghép]` vs `[Tính từ + Danh từ]`** (VD: `safety regulations`, `performance appraisal`, `customer satisfaction` là các cụm danh từ ghép cố định!) và bẫy **Trạng từ chèn giữa trợ động từ & động từ chính** (`has [_____] improved`, `will [_____] be deployed`, `is [_____] compatible` -> 100% điền **Trạng từ `-ly`**!).",
          "**Bước 3 — Xử lý Câu Từ Vựng bằng 'Collocation Radar' (15–20 giây)**: Khi 4 đáp án là 4 động từ/tính từ khác nghĩa nhau, đừng dịch lan man cả câu! Hãy nhìn **Tân ngữ đi kèm** (nếu tìm động từ) hoặc **Danh từ được bổ nghĩa** (nếu tìm tính từ). Ví dụ: chỗ trống đi với `_____ a survey` -> chọn ngay `conduct` (chứ không chọn `make` hay `do`); đi với `_____ compliance with` -> chọn `strict / full`; đi với `_____ scheduled` -> chọn `tentatively / originally`!",
          "**Bước 4 — Circuit Breaker 30 Giây**: Trong câu Từ vựng có 2 từ bạn chưa từng gặp bao giờ? Loại các phương án bạn BIẾT CHẮC LÀ SAI, chọn 1 trong số còn lại trong vòng 5 giây và lật trang! Ngồi ngẫm nghĩ thêm 2 phút không giúp bạn nhớ ra từ chưa bao giờ học, nhưng chắc chắn giết chết thời gian làm Part 7 của bạn."
        ]
      },
      {
        heading: "2. Phá Đảo TOEIC Part 6 (131–146) Trong 8 Phút — Không Đọc Lại Từ Đầu 4 Lần!",
        paragraphs: [
          "Part 6 gồm 4 đoạn văn ngắn (Email, Thông báo nội bộ, Quảng cáo, Bài báo), mỗi đoạn có 4 chỗ trống. Sai lầm làm mất thời gian nhất của thí sinh là nhảy cóc thẳng vào chỗ trống 131 mà không biết đoạn văn viết về cái gì, dẫn tới sai các câu Chia thì theo mạch văn và câu Điền cả câu hoàn chỉnh!",
          "Chiến thuật tối ưu nhất là **Đọc lướt từ đầu theo dòng chảy (Top-down Flow)**, giải cuốn chiếu từng chỗ trống ngay khi đọc tới câu chứa nó."
        ],
        bullets: [
          "**2 Giây đầu tiên — Nhìn Tiêu đề / Header của Email**: Biết ngay ai gửi cho ai và mục đích chính (VD: *Subject: Scheduled Jenkins Maintenance* -> bối cảnh thông báo việc sắp diễn ra -> các chỗ trống chia thì khả năng rất cao là Tương lai `will be unavailable` hoặc Hiện tại đơn!).",
          "**Cảnh giác Câu Chia Thì trong Part 6 khác Part 5!**: Trong Part 5, dấu hiệu thời gian (`yesterday`, `next month`) nằm ngay trong câu đó. Nhưng ở Part 6, dấu hiệu thời gian thường nằm ở **CÂU TRƯỚC ĐÓ**! Ví dụ: *Last quarter, we launched our Tokyo region. Since then, latency in Asia [132] _____ by 45%.* -> Phải nhìn chữ `Last quarter` + `Since then` để chọn Hiện tại hoàn thành `has dropped`!",
          "**Tuyệt chiêu hạ gục 4 câu 'Điền Cả Câu Hoàn Chỉnh' (1 câu mỗi đoạn)**:\n  1. Đọc câu **ngay trước** chỗ trống `[X]` và câu **ngay sau** chỗ trống `[Y]`.\n  2. Kiểm tra **Dấu vết Đại từ (Pronoun Tracking)**: Nếu câu `[Y]` bắt đầu bằng *'They will receive a voucher...'*, thì câu điền vào chỗ trống BẮT BUỘC phải nhắc tới một danh từ số nhiều chỉ người (VD: *'First-time subscribers...'*)! Nếu một phương án dùng `this problem` mà câu `[X]` trước đó đang khen doanh thu tăng tốt (không hề có problem nào) -> Loại ngay lập tức!\n  3. Kiểm tra **Chuyển hướng Logic**: Nếu câu `[X]` nói tích cực mà câu `[Y]` nói tiêu cực (hoặc ngược lại), câu điền vào chỗ trống chính là chiếc cầu nối chuyển ý (thường chứa `However, Unfortunately, To address this...`)."
        ]
      },
      {
        heading: "3. Top 10 Cụm Từ Loại & Collocation 'Gặp Là Khoanh Ngay' Của Đề ETS",
        paragraphs: [
          "Qua phân tích hàng chục bộ đề ETS chính thức gần đây, có những kết hợp từ xuất hiện lặp đi lặp lại với tần suất đáng kinh ngạc. Nạp sẵn bộ 'L1 Cache' này vào não, bạn sẽ tiết kiệm được ít nhất 3–4 phút quý giá trong phòng thi!"
        ],
        bullets: [
          "**5 Cụm Danh từ Ghép Bẫy Tính Từ (Cấm chọn Tính từ vào từ đầu!)**: `safety precautions / regulations` (quy định an toàn — KHÔNG chọn `safe`), `performance evaluation / appraisal` (đánh giá hiệu suất), `attendance record` (hồ sơ chuyên cần), `expiration date` (ngày hết hạn), `assembly line` (dây chuyền lắp ráp).",
          "**5 Cặp Trạng Từ + Động Từ / Tính Từ Tủ Của ETS**: `closely monitor / examine` (giám sát chặt chẽ), `strictly prohibited / confidential` (nghiêm cấm / tuyệt mật), `heavily subsidized / reliant` (được trợ giá nhiều / phụ thuộc nặng), `promptly notify / respond` (thông báo nhanh chóng), `mutually beneficial` (đôi bên cùng có lợi).",
          "**Bẫy Tính từ đuôi `-ly` (Trông giống Trạng từ nhưng là TÍNH TỪ!)**: `costly` (= expensive: đắt đỏ), `timely` (kịp thời: *in a timely manner*), `likely` (có khả năng), `friendly`, `orderly` (ngăn nắp), `quarterly / monthly / daily / annual` (bổ nghĩa trực tiếp cho danh từ: *a **costly** outage*, *a **timely** patch*!)."
        ]
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "The deployment script has **consistently** completed all database migrations in under forty seconds.",
        vi: "Kịch bản triển khai đã luôn hoàn tất toàn bộ các đợt di chuyển cơ sở dữ liệu trong chưa đầy 40 giây.",
        note: "[Mẹo 3s Từ loại]: Chỗ trống kẹp giữa trợ động từ 'has' và phân từ 'completed' -> vị trí vàng 100% của Trạng từ '-ly' ('consistently')."
      },
      {
        tag: "TOEIC Part 5",
        en: "All cloud infrastructure changes remain **strictly** documented in our Terraform repository for audit compliance.",
        vi: "Mọi thay đổi hạ tầng đám mây đều được ghi chép nghiêm ngặt trong kho mã nguồn Terraform để tuân thủ kiểm toán.",
        note: "[Mẹo 4s Bẫy Linking Verb]: Sau 'remain' đã có sẵn tính từ/P2 'documented' rồi! Nên từ bổ nghĩa đứng trước 'documented' phải là Trạng từ 'strictly' (không chọn 'strict'!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Migrating cold analytics tables to Amazon S3 proved far more **economical** than scaling NVMe storage volumes.",
        vi: "Việc chuyển các bảng phân tích ít truy cập sang Amazon S3 hóa ra tiết kiệm chi phí hơn nhiều so với mở rộng ổ cứng NVMe.",
        note: "[Bẫy Từ gần âm]: Sau 'proved (to be) more' cần Tính từ. Phân biệt 'economic' (thuộc nền kinh tế vĩ mô) vs 'economical' (= cost-effective: tiết kiệm, kinh tế!)."
      },
      {
        tag: "Senior Java",
        en: "Without proper bounds, an in-memory cache can quickly become a **costly** architectural mistake in production.",
        vi: "Nếu không giới hạn kích thước hợp lý, bộ nhớ đệm trên RAM có thể nhanh chóng trở thành một sai lầm kiến trúc đắt giá trên môi trường production.",
        note: "[Bẫy đuôi -ly]: 'costly' đứng giữa mạo từ 'a' và danh từ 'architectural mistake' -> nó là TÍNH TỪ ('đắt giá'), không phải trạng từ!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Employees must wear protective eyewear and follow all **safety** regulations while inside the testing laboratory.",
        vi: "Nhân viên phải đeo kính bảo hộ và tuân thủ mọi quy định an toàn khi ở bên trong phòng thí nghiệm kiểm định.",
        note: "[Bẫy Cụm Danh Từ Ghép]: 'safety regulations' (quy định về sự an toàn) dùng danh từ 'safety' bổ nghĩa cho 'regulations', KHÔNG chọn tính từ 'safe'!"
      },
      {
        tag: "TOEIC Part 6",
        en: "Our gateway experienced intermittent timeouts yesterday. **This issue** has since been resolved by tuning HikariCP pool limits.",
        vi: "Cổng kết nối của chúng tôi đã gặp lỗi hết thời gian chờ chập chờn ngày hôm qua. Sự cố này kể từ đó đã được khắc phục bằng cách tinh chỉnh giới hạn pool HikariCP.",
        note: "[Móc xích Part 6]: Cụm chỉ định 'This issue' nối trực tiếp về 'intermittent timeouts' ở câu liền trước, kèm 'has since been resolved' khớp với 'yesterday'."
      },
      {
        tag: "System Design",
        en: "Our SRE team **closely monitors** garbage-collection pause durations across every JVM pod via Prometheus alerts.",
        vi: "Đội ngũ SRE của chúng tôi giám sát chặt chẽ thời lượng dừng dọn rác trên mọi pod JVM thông qua cảnh báo Prometheus.",
        note: "[Collocation Tủ]: 'closely monitor' (giám sát chặt chẽ / sát sao) là cặp bài trùng xuất hiện cực nhiều trong cả TOEIC lẫn IT."
      },
      {
        tag: "TOEIC Part 5",
        en: "The engineering department will **conduct** a comprehensive post-release review next Tuesday at 10:00 A.M.",
        vi: "Bộ phận kỹ thuật sẽ tiến hành một buổi đánh giá hậu phát hành toàn diện vào lúc 10 giờ sáng thứ Ba tới.",
        note: "[Collocation Tủ]: Động từ đi chuẩn với 'a review / a survey / an inspection / an audit / research' luôn là 'conduct' (hoặc 'carry out')."
      },
      {
        tag: "Client Email",
        en: "Thank you for bringing the webhook serialization discrepancy to our attention in such a **timely** manner.",
        vi: "Cảm ơn ngài đã lưu ý chúng tôi về sự sai lệch tuần tự hóa webhook một cách kịp thời như vậy.",
        note: "Cụm cố định ăn điểm tuyệt đối: 'in a timely manner' (= promptly: một cách kịp thời), trong đó 'timely' là tính từ bổ nghĩa cho 'manner'."
      },
      {
        tag: "TOEIC Part 6",
        en: "We initially planned to sunset API v1 in March. **However**, several enterprise partners requested a ninety-day extension.",
        vi: "Ban đầu chúng tôi dự định đóng API v1 vào tháng Ba. Tuy nhiên, một số đối tác doanh nghiệp đã xin gia hạn thêm 90 ngày.",
        note: "[Móc xích Part 6]: Dấu hiệu 'initially planned' (ban đầu dự định) ở câu trước luôn báo hiệu một sự thay đổi kế hoạch ở câu sau ('However...')."
      },
      {
        tag: "Code Review",
        en: "This helper utility is **highly** reusable across all Spring Boot microservices that process ISO-8583 messages.",
        vi: "Tiện ích hỗ trợ này có khả năng tái sử dụng rất cao trên toàn bộ các microservice Spring Boot xử lý bản tin ISO-8583.",
        note: "[Bẫy high vs highly]: 'high' chỉ độ cao vật lý/con số ('high latency'), còn 'highly' (= very) chuyên đứng trước Tính từ/P2 tích cực ('highly reusable / recommended / scalable')."
      },
      {
        tag: "TOEIC Part 5",
        en: "Access to the key-management vault is **strictly** restricted to principal security architects.",
        vi: "Quyền truy cập vào kho quản lý khóa mật mã bị giới hạn nghiêm ngặt chỉ dành cho các kiến trúc sư bảo mật chính.",
        note: "[Collocation Tủ]: 'strictly restricted / prohibited / confidential / enforced' + giới từ 'restricted TO'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Subscribers who opt for annual billing are **eligible** for two complimentary months of enterprise support.",
        vi: "Những thuê bao lựa chọn thanh toán theo năm sẽ đủ điều kiện nhận hai tháng hỗ trợ gói doanh nghiệp miễn phí.",
        note: "[Giới từ định danh 3s]: Nhìn sau chỗ trống thấy giới từ 'for' ('_____ for two months') -> chọn 'eligible (for)' trong tích tắc!"
      },
      {
        tag: "Senior Java",
        en: "Please verify that your custom serializer is backward **compatible** with events produced by version 2.4.",
        vi: "Vui lòng xác minh rằng bộ tuần tự hóa tùy chỉnh của bạn tương thích ngược với các sự kiện được tạo bởi phiên bản 2.4.",
        note: "[Giới từ định danh 3s]: Nhìn sau chỗ trống thấy giới từ 'with' -> khoanh ngay 'compatible (with)'!"
      },
      {
        tag: "TOEIC Part 5",
        en: "The revised deployment schedule remains **tentatively** set for Sunday at 2:00 A.M. pending final QA approval.",
        vi: "Lịch trình triển khai sửa đổi hiện vẫn được ấn định dự kiến vào lúc 2 giờ sáng Chủ nhật chờ phê duyệt cuối cùng từ QA.",
        note: "[Collocation Tủ TOEIC]: 'tentatively scheduled / set' (được lên lịch dự kiến / tạm thời) đi kèm 'pending' (trong khi chờ)."
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Đọc dịch từng từ câu Part 5 dài 25 chữ rồi mới nhìn xuống 4 đáp án A, B, C, D.",
          fix: "Luôn nhìn 4 đáp án A, B, C, D đầu tiên (1 giây) để biết cần soi Từ loại, Chia thì hay Từ vựng.",
          why: "Tiết kiệm 15–20 giây mỗi câu cho 18 câu ngữ pháp Part 5 -> Dư ra ngay 5–6 phút vàng ngọc cho các bài đọc đôi/ba ở cuối Part 7!"
        },
        {
          bug: "The API response time has significant improved after adding Redis.",
          fix: "The API response time has significantly improved after adding Redis.",
          why: "Thấy 'has' và 'improved' đứng cạnh nhau mà quên mất từ chèn giữa trợ động từ và động từ chính BẮT BUỘC phải là Trạng từ '-ly' ('significantly')."
        },
        {
          bug: "All developers must complete the annual cyber-safe training.",
          fix: "All developers must complete the annual cybersecurity / safety training.",
          why: "Dùng tính từ ghép sai quy chuẩn thay vì Cụm danh từ ghép chuẩn ('security training' / 'safety training')."
        },
        {
          bug: "Our team did a thorough code audit before the release.",
          fix: "Our team conducted / performed a thorough code audit before the release.",
          why: "Trong tiếng Anh thương mại & TOEIC, người ta không dùng 'do/make an audit/survey/inspection' mà luôn dùng Collocation chuẩn 'conduct / perform / carry out'."
        },
        {
          bug: "Sa lầy 2 phút vào 1 câu từ vựng lạ hoắc ở câu 124 dẫn đến bỏ trắng câu 195–200.",
          fix: "Áp dụng Circuit Breaker 30 giây: loại đáp án sai rõ ràng, khoanh dứt khoát và giữ vững tiến độ đồng hồ!",
          why: "Trong TOEIC, 1 câu từ vựng siêu khó ở Part 5 có điểm số NGANG BẰNG với 1 câu tìm thông tin cực dễ trong bảng biểu ở câu 196 Part 7!"
        }
      ]
    },
    toeicTips: [
      "Mốc kiểm tra đồng hồ sống còn trên mặt bàn thi (giả sử bắt đầu làm Reading lúc 10:45): Đến **10:57** bạn PHẢI xong câu 130 (hết Part 5); đến **11:05** bạn PHẢI xong câu 146 (hết Part 6)! Nếu lố giờ dù chỉ 1 phút, hãy tăng tốc cắt bớt thời gian phân vân ngay lập tức.",
      "Mẹo 'Giới từ phía sau định đoạt tất cả' trong 3 giây: Nhiều câu từ vựng Part 5 trông có vẻ khó nhưng thực chất giải bằng Giới từ ngay sau chỗ trống! Ví dụ: `_____ with` -> `comply / compatible / familiar / equipped`; `_____ to` -> `adhere / dedicated / subject / prior / adjacent`; `_____ for` -> `eligible / responsible / account`; `_____ from` -> `refrain / exempt / prohibit`!",
      "Trong Part 6, với câu Điền Cả Câu Hoàn Chỉnh: TUYỆT ĐỐI không chọn phương án chỉ vì nó chứa nhiều từ khóa lặp lại giống đoạn văn (đó là bẫy từ vựng của ETS!). Hãy chọn phương án giải thích hợp lý câu đứng trước VÀ làm bàn đạp tự nhiên cho đại từ/từ nối ở câu đứng ngay sau!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "allows test takers",
          "instantly.",
          "Scanning",
          "to classify grammar questions",
          "the four answer choices first"
        ],
        answer: "Scanning the four answer choices first allows test takers to classify grammar questions instantly.",
        vi: "Việc quét bốn phương án trả lời trước tiên cho phép thí sinh phân loại các câu hỏi ngữ pháp ngay tức thì."
      },
      fillBlank: {
        sentence: "The chief technology officer reacted _____ to the proposal for automating compliance checks.",
        answer: "favorably",
        accepted: ["favorably", "positively", "enthusiastically"],
        hint: "Động từ 'reacted' là nội động từ chỉ hành động, cần từ loại gì bổ nghĩa cho cách phản ứng?",
        explain: "'Reacted' là nội động từ thường (không phải linking verb như become/remain), nên từ bổ nghĩa cho hành động phản ứng phải là Trạng từ đuôi '-ly' ('favorably' = một cách tán thành/tích cực — từ tủ cực kỳ hay xuất hiện trong đề ETS!)."
      }
    },
    quiz: [
      {
        q: "All API credentials stored in HashiCorp Vault are _____ rotated every thirty days in accordance with corporate security policies.",
        options: ["automatic", "automate", "automated", "automatically"],
        answer: 3,
        explain: "Đáp án đúng là 'automatically' (D). Áp dụng quy trình 4 giây: nhìn 4 đáp án cùng gốc từ 'automate' -> Câu hỏi Từ loại! Nhìn cửa sổ ±1 từ quanh chỗ trống: 'are _____ rotated'. Giữa trợ động từ to-be 'are' và phân từ chính 'rotated' câu đã đủ thành phần bị động -> chỉ có Trạng từ '-ly' ('automatically') mới chèn vào bổ nghĩa hợp lệ!"
      },
      {
        q: "Before migrating customer workloads, our engineering team must ensure full _____ with regional banking data-protection mandates.",
        options: ["compliant", "comply", "compliance", "compliantly"],
        answer: 2,
        explain: "Đáp án đúng là 'compliance' (C). Nhìn cửa sổ quanh chỗ trống: 'ensure full [_____] with'. Đứng sau tính từ 'full' và đứng trước giới từ 'with' làm tân ngữ cho ngoại động từ 'ensure' -> bắt buộc là Danh từ 'compliance' (cụm tủ: 'in full compliance with' = tuân thủ đầy đủ)."
      },
      {
        q: "Applicants who have not yet received a confirmation email should check their spam folder. _____ , they may contact our recruitment desk directly at ext. 402.",
        options: [
          "For instance",
          "Alternatively",
          "Consequently",
          "As a result"
        ],
        answer: 1,
        explain: "Đáp án đúng là 'Alternatively' (B) (= Hoặc một cách khác là...). Mô phỏng câu nối đoạn Part 6: Câu trước đưa ra giải pháp 1 ('kiểm tra thư mục spam'), câu sau đưa ra giải pháp thay thế thứ 2 ('liên hệ trực tiếp bàn tuyển dụng'). 'Alternatively' khớp logic 100%, loại 'For instance' (ví dụ) và 'Consequently / As a result' (do đó/kết quả là)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G4_6: NGỮ PHÁP ỨNG DỤNG SENIOR JAVA: PR, INCIDENT REPORT & EMAIL KIẾN TRÚC
   * ========================================================================== */
  G4_6: {
    duration: "45 phút",
    toeicTarget: "Đỉnh cao TOEIC 650–750+ (Đọc xuyên thấu Chuỗi Email Part 6–7 & Viết Tiếng Anh Đẳng Cấp Tech Lead / Principal)",
    javaContext: "4 Bản mẫu (Templates) thực chiến hàng ngày: PR Description, Blameless Postmortem (RCA), Architecture Proposal (ADR) & Stakeholder Email",
    teacherIntro: "Chào mừng các anh em đã đi tới bài học tổng kết đỉnh cao của toàn bộ Lộ trình Ngữ pháp (G1 -> G4)! Kiến thức ngữ pháp chỉ thực sự trở thành tài sản vô giá khi nó chảy tự nhiên qua đầu ngón tay bạn mỗi sáng viết mô tả Pull Request, mỗi chiều soạn Architecture Decision Record (ADR), mỗi đêm bình tĩnh viết báo cáo sự cố Postmortem không đổ lỗi, hay mỗi bức email thuyết phục khách hàng quốc tế. Điều kỳ diệu là những văn bản thực tế đó của một Senior Engineer lại có **cấu trúc ngữ pháp trùng khớp 100%** với các chuỗi bài đọc đôi và bài đọc ba (Double & Triple Passages) trong TOEIC Part 7! Bài học khép lại lộ trình Ngữ pháp hôm nay sẽ đúc kết toàn bộ 23 bài trước đó thành **4 Bản Thiết Kế Văn Bản Thực Chiến (Production-Ready Templates)** để bạn dùng ngay ngày mai tại công ty và bước vào phòng thi TOEIC với tâm thế của một người làm chủ cuộc chơi!",
    javaAnalogy: {
      title: "Clean Architecture & Design Patterns Tổng Hợp Cho Giao Tiếp Kỹ Thuật",
      body: "Nếu các bài G1 -> G4.4 là từng class, interface và toán tử riêng lẻ, thì Bài G4.6 chính là tầng **Application Orchestration** phối hợp chúng thành một hệ thống hoàn chỉnh:\n• **Pull Request Description** dùng *Hiện tại đơn chủ động* + *Cấu trúc song song* (rõ ràng như commit log chuẩn Conventional Commits).\n• **Blameless Postmortem (RCA)** dùng *Câu bị động Quá khứ* (`A config flag was inadvertently enabled...` thay vì `Nam broke prod!`) + *Câu điều kiện Loại 3* + *Giả định thức* cho Action Items.\n• **ADR / Refactoring Proposal** dùng *Liên từ tương phản (`Although / Whereas / Despite`)* + *Cấp so sánh nhấn mạnh (`significantly lower latency`)*.\n• **Client / Stakeholder Email** dùng *Câu hỏi gián tiếp lịch sự* + *Ràng buộc `Provided that`* + *Đảo ngữ `Should you...`*!"
    },
    objectives: [
      "Nắm vững quy ước chọn Thì, Thể (Chủ động vs Bị động) và Cấu trúc câu chuẩn quốc tế cho 4 loại văn bản cốt lõi nhất của Senior Java Developer.",
      "Áp dụng nghệ thuật 'Blameless Passive Voice' (Bị động khách quan không đổ lỗi cá nhân) trong báo cáo sự cố RCA và giao tiếp xử lý khủng hoảng.",
      "Nhận diện tức thì cấu trúc 3 phần (Mở bài nêu bối cảnh -> Thân bài nêu vấn đề/chi tiết -> Kết bài yêu cầu hành động/Action Item) để quét đáp án cực nhanh trong chuỗi Email TOEIC Part 6–7."
    ],
    formulaCards: [
      {
        label: "Template 1 • Pull Request (PR) Description Chuẩn Quốc Tế",
        formula: "Summary [This PR introduces / fixes / refactors...] -> Key Changes [Song song V-ing hoặc V hiện tại] -> Impact & Verification [Passive + Conditional]",
        note: "Quy ước vàng trên GitHub/GitLab quốc tế: Dùng Hiện tại đơn ('fixes race condition', KHÔNG dùng 'fixed') để mô tả bản thân PR này làm thay đổi hệ thống ra sao!"
      },
      {
        label: "Template 2 • Blameless Incident Postmortem (Báo Cáo Sự Cố Không Đổ Lỗi)",
        formula: "Impact [Between X and Y UTC, N% of requests experienced...] -> Root Cause [Quá khứ hoàn thành + Bị động khách quan] -> Prevention [Giả định thức / To-V]",
        note: "TUYỆT ĐỐI tránh viết 'Dev A forgot to add index'! Hãy chuyển sang chủ thể hệ thống hoặc bị động: 'A composite index was missing on table X, which caused...'."
      },
      {
        label: "Template 3 • Architecture Proposal (ADR) & Đề Xuất Refactor",
        formula: "Context [Currently, S + V...] -> Trade-offs [While Option A..., Option B offers far Adj-er...] -> Recommendation [We propose that S + V_bare]",
        note: "Kết hợp Liên từ tương phản (Bài G3.3) + Nhấn mạnh so sánh hơn (Bài G3.2) + Giả định thức (Bài G4.2) tạo sức thuyết phục tuyệt đối trước Hội đồng Kiến trúc!"
      },
      {
        label: "Template 4 • Email Khách Hàng / Push Back Yêu Cầu Lịch Thiệp",
        formula: "Opening [Thank you for reaching out regarding...] -> Clarification / Push-back [Could you clarify S+V? / Provided that...] -> Closing [Should you..., please...]",
        note: "Trùng khớp 100% khung xương Email thương mại của đề thi ETS TOEIC Part 6 & Part 7 (Câu hỏi mục đích viết email nằm ở dòng 1–2; câu hỏi yêu cầu nằm ở dòng cuối!)."
      }
    ],
    sections: [
      {
        heading: "1. Viết Pull Request (PR) & Code Review Comment Ngắn Gọn, Sắc Sảo",
        paragraphs: [
          "Một Senior Java Engineer không bao giờ mở một PR sửa 15 file kèm dòng mô tả vỏn vẹn hai chữ `'fix bug'` hay `'update code'`. Reviewer ở múi giờ khác đọc vào không hiểu bối cảnh (Why) sẽ tốn gấp ba lần thời gian review.",
          "Cấu trúc một PR Description xuất sắc luôn gồm 3 khối ngắn gọn sử dụng chính xác các chủ điểm ngữ pháp bạn đã học:"
        ],
        bullets: [
          "**Khối 1 — Context / Problem (Dùng Hiện tại hoàn thành hoặc Quá khứ đơn + Mệnh đề quan hệ)**: *Currently, concurrent calls to `WalletService.debit()` **have caused** occasional optimistic-locking failures **when** a user submits duplicate tap payments.*",
          "**Khối 2 — Solution / Changes (Dùng Hiện tại đơn chủ động + Cấu trúc Song song)**: *This PR **introduces** an idempotency-key filter backed by Redis, **replaces** manual retry loops with Resilience4j, and **adds** Testcontainers integration suites.*",
          "**Khối 3 — Rollout & Backward Compatibility (Dùng Bị động + Điều kiện / Liên từ)**: *All database migrations **are designed** to be backward-compatible; **should** any regression occur, traffic **can be routed** back via feature flag `enable_redis_idempotency=false`.*",
          "**Review Comment Lịch sự (Dùng Modals + Câu hỏi gián tiếp — Bài G2.4 & G4.1)**: Thay vì gắt gỏng *'This is O(n²), rewrite it!'*, hãy viết: *'Could we consider indexing these items in a `Map` first **so that** lookup complexity drops from O(n²) to O(n)?'*"
        ]
      },
      {
        heading: "2. Nghệ Thuật Viết Blameless Postmortem (RCA) Khi Xử Lý Sự Cố Production",
        paragraphs: [
          "Trong văn hóa kỹ thuật của Google SRE, AWS hay các ngân hàng quốc tế (và cả các thư xin lỗi khách hàng trong TOEIC Part 7!), mục tiêu của báo cáo sự cố là **sửa quy trình hệ thống**, tuyệt đối không chỉ trích cá nhân. Ngữ pháp tiếng Anh cung cấp một công cụ hoàn hảo cho việc này: **Câu Bị Động Khách Quan (Impersonal Passive)** kết hợp **Mệnh đề Phân từ / Danh từ hóa**.",
          "Khi viết Timeline & Root Cause, hãy để chính các thành phần kỹ thuật (`the deployment`, `the connection pool`, `the configuration`) làm Chủ ngữ thay vì tên con người!"
        ],
        bullets: [
          "**Executive Summary (Tóm tắt tác động chính xác, minh bạch)**: *On November 18 between 14:10 and 14:32 UTC, approximately 8% of checkout API requests **experienced** HTTP 504 timeouts **due to** database connection-pool exhaustion. **No financial data was lost**.*",
          "**Root Cause Analysis (Phối hợp Quá khứ hoàn thành `had P2` cho nguyên nhân có trước + Quá khứ đơn cho sự cố)**: *During a routine release at 14:05 UTC, a new reporting query **that had not been tested** against production data volumes **was triggered**, **locking** the `transactions` table for 45 seconds.*",
          "**Preventive Action Items (Dùng To-V mục đích / Giả định thức)**: *To prevent recurrence, the SRE team **recommends that** query-timeout guardrails (`statement_timeout = 3s`) **be enforced** globally across all read-write pools by Friday.*"
        ]
      },
      {
        heading: "3. Viết ADR Đề Xuất Kiến Trúc & Giải Nhanh Chuỗi Email TOEIC Part 7",
        paragraphs: [
          "Khi bạn muốn thuyết phục Product Owner dành 20% dung lượng Sprint để trả nợ kỹ thuật (Tech Debt) hoặc gửi email đàm phán lại deadline với khách hàng, sức mạnh nằm ở cách bạn nối kết **Sự thừa nhận (Concession)** với **Giải pháp kèm điều kiện (Conditional Proposal)**.",
          "Đồng thời, khi bước vào TOEIC Part 7 (54 câu đọc hiểu), nhận ra ngay bộ khung ngữ pháp này giúp bạn định vị chính xác câu trả lời trong tích tắc mà không cần đọc đi đọc lại cả bức thư dài!"
        ],
        bullets: [
          "**Công thức Push-back Khéo Léo (Nói 'Không' mà khách hàng vẫn hài lòng!)**:\n  1. *Ghi nhận tầm quan trọng (`We fully understand how critical... is`)*.\n  2. *Nêu ràng buộc khách quan bằng `Given / Due to` (`However, **given** the upcoming PCI-DSS freeze...`)*.\n  3. *Đề xuất phương án khả thi kèm `Provided that` (`We can deliver Phase 1 by Friday, **provided that** Phase 2 analytics are scheduled for Sprint 16`)*.",
          "**Bản đồ 3 Vùng Định vị Đáp án trong Email TOEIC Part 7**:\n  • **Đoạn 1 (Dòng 1–3)**: Luôn trả lời câu hỏi *'What is the purpose of the email?'* -> Săn cấu trúc `I am writing to inform / inquire / confirm...` hoặc `Thank you for your inquiry regarding...`.\n  • **Đoạn 2 (Giữa thư)**: Luôn chứa câu trả lời cho *'What problem is mentioned?'* -> Săn ngay phía sau các từ chuyển hướng **`However, Unfortunately, Despite, Due to, Although`**!\n  • **Đoạn 3 (Cuối thư)**: Luôn trả lời câu hỏi *'What is the recipient asked to do?'* -> Săn câu mệnh lệnh `Please + V_bare`, câu hỏi lịch sự `Could you please...`, hoặc điều kiện `Should you wish to..., please...`!"
        ]
      }
    ],
    examples: [
      {
        tag: "Code Review",
        en: "This PR **refactors** the legacy XML settlement parser, **replaces** thread-unsafe `SimpleDateFormat` instances with `DateTimeFormatter`, and **increases** branch coverage to 92%.",
        vi: "Pull Request này tái cấu trúc bộ phân tích đối soát XML cũ, thay thế các đối tượng `SimpleDateFormat` không an toàn đa luồng bằng `DateTimeFormatter`, và nâng độ phủ nhánh kiểm thử lên 92%.",
        note: "[PR Summary]: Kết hợp Hiện tại đơn chủ động + Cấu trúc song song 3 động từ ('refactors..., replaces..., and increases...')."
      },
      {
        tag: "Senior Java",
        en: "Could we consider **extracting** this validation block into a dedicated Jakarta Bean Validation constraint **so that** other controllers can reuse it?",
        vi: "Chúng ta có thể cân nhắc tách khối kiểm tra hợp lệ này ra một ràng buộc Jakarta Bean Validation riêng để các controller khác cùng tái sử dụng được không?",
        note: "[PR Comment Lịch sự]: 'Could we consider + V-ing' + mệnh đề mục đích 'so that + S + can + V'."
      },
      {
        tag: "System Design",
        en: "Between 09:15 and 09:42 UTC, order confirmation emails **were delayed** by up to twenty minutes **owing to** a backlog in the secondary Kafka cluster.",
        vi: "Trong khoảng từ 09:15 đến 09:42 UTC, email xác nhận đơn hàng đã bị trễ tới 20 phút do tồn đọng bản tin trong cụm Kafka thứ cấp.",
        note: "[Postmortem Impact]: Bị động quá khứ đơn ('were delayed') + giới từ chỉ nguyên nhân trang trọng ('owing to + Cụm danh từ')."
      },
      {
        tag: "Senior Java",
        en: "Root-cause analysis revealed **that** an unbounded retry policy **had amplified** downstream traffic fivefold **while** the payment database was recovering.",
        vi: "Phân tích nguyên nhân gốc rễ cho thấy một chính sách thử lại không giới hạn đã khuếch đại lưu lượng hạ nguồn lên gấp năm lần trong lúc cơ sở dữ liệu thanh toán đang phục hồi.",
        note: "[Postmortem RCA]: Mệnh đề danh ngữ 'that' + Quá khứ hoàn thành 'had amplified' + liên từ thời gian 'while'."
      },
      {
        tag: "Client Email",
        en: "We sincerely apologize for any inconvenience **caused by** last night's unscheduled maintenance and assure you **that** all transactions **have been reconciled**.",
        vi: "Chúng tôi chân thành xin lỗi vì mọi sự bất tiện gây ra bởi đợt bảo trì đột xuất tối qua và cam đoan với ngài rằng toàn bộ giao dịch đã được đối soát khớp hoàn toàn.",
        note: "[Client Incident Update]: Rút gọn mệnh đề quan hệ bị động ('caused by...') + Hiện tại hoàn thành bị động ('have been reconciled') khẳng định kết quả an toàn hiện tại."
      },
      {
        tag: "System Design",
        en: "**Although** migrating to a service mesh introduces operational complexity, Istio provides **far stronger** zero-trust security and observability out of the box.",
        vi: "Mặc dù việc chuyển sang service mesh đưa thêm độ phức tạp vận hành, Istio mang lại khả năng bảo mật zero-trust và quan sát hệ thống mạnh hơn nhiều ngay từ mặc định.",
        note: "[ADR Trade-off]: Liên từ nhượng bộ 'Although' mở đường cho ưu điểm vượt trội dùng nhấn mạnh so sánh hơn 'far stronger'."
      },
      {
        tag: "System Design",
        en: "Based on our benchmark results, the architecture guild **recommends that** all internal RPC calls **migrate** from JSON-over-HTTP to gRPC in Q3.",
        vi: "Dựa trên kết quả đo kiểm của chúng tôi, hội đồng kiến trúc khuyến nghị toàn bộ các lời gọi RPC nội bộ chuyển đổi từ JSON-over-HTTP sang gRPC trong quý 3.",
        note: "[ADR Recommendation]: Chốt đề xuất kiến trúc bằng Giả định thức 'recommends that + S + migrate'."
      },
      {
        tag: "Client Email",
        en: "Thank you for sharing the updated business requirements; could you clarify **whether** multi-currency settlement **needs to be supported** in the MVP release?",
        vi: "Cảm ơn ngài đã chia sẻ tài liệu yêu cầu nghiệp vụ cập nhật; ngài có thể làm rõ giúp liệu thanh toán đa tiền tệ có cần được hỗ trợ ngay trong bản MVP hay không?",
        note: "[Requirement Clarification]: Mở đầu trân trọng + Câu hỏi gián tiếp với 'whether + S + V' (không đảo trợ động từ!)."
      },
      {
        tag: "Client Email",
        en: "**Given** our commitment to zero-regression quality, we can include the custom export API in v2.3 **provided that** UAT sign-off is completed by Tuesday.",
        vi: "Xét tới cam kết chất lượng không lỗi hồi quy của chúng tôi, chúng tôi có thể đưa API xuất dữ liệu tùy chỉnh vào bản v2.3 miễn là việc nghiệm thu UAT hoàn tất trước thứ Ba.",
        note: "[Polite Push-back]: Kết hợp giới từ 'Given + N' với liên từ điều kiện 'provided that + S + V' để thương lượng phạm vi dự án chuyên nghiệp."
      },
      {
        tag: "TOEIC Part 6",
        en: "Enclosed please find the signed Master Services Agreement, **which** outlines our uptime guarantees and incident-response SLAs.",
        vi: "Đính kèm theo đây xin gửi bản Hợp đồng Dịch vụ Tổng thể đã ký, văn bản nêu rõ các cam kết thời gian hoạt động và SLA phản hồi sự cố của chúng tôi.",
        note: "[Business Email Classic]: Cụm mở đầu thương mại kinh điển 'Enclosed please find...' + mệnh đề quan hệ chú thích ', which outlines...'."
      },
      {
        tag: "TOEIC Part 7",
        en: "**Unfortunately**, the chipsets **ordered** from our Taiwan foundry have been held at customs, **delaying** server assembly by four business days.",
        vi: "Đáng tiếc là lô chipset đặt hàng từ xưởng đúc Đài Loan đã bị giữ lại tại hải quan, làm chậm quá trình lắp ráp máy chủ bốn ngày làm việc.",
        note: "[TOEIC Part 7 Radar]: Từ báo hiệu vấn đề 'Unfortunately' + P2 rút gọn ('ordered from...') + V-ing rút gọn chỉ kết quả (', delaying...')."
      },
      {
        tag: "TOEIC Part 7",
        en: "**To compensate** affected enterprise accounts, a ten percent service credit **will automatically be applied** to next month's billing statement.",
        vi: "Để đền bù cho các tài khoản doanh nghiệp bị ảnh hưởng, khoản tín dụng dịch vụ 10% sẽ tự động được áp dụng vào sao kê thanh toán tháng tới.",
        note: "[Customer Resolution]: Cụm 'To V' chỉ mục đích đầu câu + Trạng từ 'automatically' kẹp đúng chuẩn giữa 'will' và 'be applied'."
      },
      {
        tag: "Senior Java",
        en: "**Having eliminated** reflection-heavy mappers in favor of MapStruct, our payment service now boots **nearly twice as fast as** before.",
        vi: "Sau khi đã loại bỏ các bộ ánh xạ dùng nhiều reflection để chuyển sang MapStruct, dịch vụ thanh toán của chúng ta nay khởi động nhanh gần gấp đôi so với trước đây.",
        note: "[Performance Report]: Rút gọn hoàn tất 'Having eliminated...' + so sánh gấp bội 'twice as fast as'."
      },
      {
        tag: "Code Review",
        en: "**Unless** this `@Scheduled` cron job **acquires** a ShedLock entry first, all three Kubernetes replicas will send duplicate reminder emails.",
        vi: "Trừ khi tác vụ lập lịch `@Scheduled` này chiếm được một bản ghi ShedLock trước tiên, cả ba bản sao trên Kubernetes sẽ gửi trùng email nhắc nhở.",
        note: "[Distributed Bug Warning]: Dùng 'Unless + S + V(hiện tại đơn)' để cảnh báo lỗi chạy trùng cron job kinh điển trên môi trường nhiều pod."
      },
      {
        tag: "Client Email",
        en: "**Should** you **have** any questions regarding the migration runbook, we **look forward to** walking through the steps with your team tomorrow.",
        vi: "Nếu ngài có bất kỳ câu hỏi nào liên quan đến tài liệu kịch bản chuyển đổi, chúng tôi rất mong được cùng đội ngũ của ngài đi qua từng bước vào ngày mai.",
        note: "[Ultimate Closing]: Kết hợp 2 cấu trúc vàng TOEIC trong cùng 1 câu kết: Đảo ngữ 'Should you have...' + 'look forward to + V-ing (walking)'!"
      }
    ],
    mistakesTable: {
      title: "Lỗi Sai Thường Gặp Của Dev Việt & Bẫy Đề TOEIC",
      rows: [
        {
          bug: "Postmortem: Junior Dev Minh ran an UPDATE query without a WHERE clause.",
          fix: "Postmortem: An ad-hoc SQL UPDATE statement lacking a WHERE clause was executed against the primary node.",
          why: "Vi phạm nguyên tắc Blameless Postmortem quốc tế! Chuyển sang Câu bị động + Rút gọn mệnh đề quan hệ ('lacking...') giúp tập trung vào lỗ hổng phân quyền hệ thống thay vì công kích cá nhân."
        },
        {
          bug: "Email: I look forward to hear your feedback on the ADR.",
          fix: "Email: I look forward to hearing your feedback on the ADR.",
          why: "Siêu bẫy TOEIC xuất hiện từ G2 đến G4: chữ 'to' trong 'look forward to' (cũng như 'be committed to', 'prior to', 'in addition to') là GIỚI TỪ -> bắt buộc cộng V-ing ('hearing')!"
        },
        {
          bug: "Email: Please tell me why cannot we deploy on Friday afternoon?",
          fix: "Email: Could you share why we avoid deploying on Friday afternoons?",
          why: "Vừa mắc lỗi đảo ngữ trong câu hỏi gián tiếp ('why cannot we'), vừa mang giọng điệu chất vấn gay gắt. Đổi sang 'Could you share why S + V' lịch thiệp hơn gấp 10 lần."
        },
        {
          bug: "PR Description: Fixed bug, adding unit test, and documentation was updated.",
          fix: "PR Description: Fixes token-expiry bug, adds unit tests, and updates OpenAPI documentation.",
          why: "Trộn lẫn 3 thì và 2 thể (Quá khứ + V-ing + Bị động) trong cùng một câu mô tả PR! Chuẩn hóa về song song 3 động từ Hiện tại đơn chủ động giúp PR sạch đẹp tức thì."
        },
        {
          bug: "Email: Please revert back the config and repeat again the load test.",
          fix: "Email: Please revert the config and repeat the load test.",
          why: "Lỗi thừa từ đồng nghĩa (Redundancy) rất hay bị trừ điểm trong văn viết và bẫy TOEIC: 'revert' đã có nghĩa là quay lại (không thêm 'back'), 'repeat' đã là lặp lại (không thêm 'again'; tương tự 'return back', 'discuss about', 'merge together')."
        }
      ]
    },
    toeicTips: [
      "Mẹo đọc siêu tốc Chuỗi Email Đôi/Ba trong TOEIC Part 7: Đừng đọc từng chữ như đọc tiểu thuyết! Đọc **Dòng Subject + 2 câu đầu** (nắm mục đích), quét mắt tìm các **Từ khóa Chuyển hướng (`However, Unfortunately, Please note that, Provided that`)** ở giữa bài (nắm nút thắt vấn đề), và đọc **2 câu cuối** (nắm yêu cầu hành động tiếp theo) — bạn đã nắm trọn 85% đáp án chỉ trong 40 giây!",
      "Cảnh giác nhóm Từ Thừa (Redundancy) và Giới từ Ẩn trong Part 5–6: Các ngoại động từ `discuss, request, enter (a room), attend, approach, reach, await (= wait for), emphasize` ĐI THẲNG TỚI TÂN NGỮ (tuyệt đối không chèn `about, for, into, to` vào sau chúng!).",
      "Chốt sổ công thức Kết Thư Bất Bại cho cả phòng thi TOEIC lẫn sự nghiệp Senior Java: `Should you require any further information, please do not hesitate to contact me. We look forward to collaborating with your team.` — thuộc lòng câu này, bạn cầm chắc điểm ngữ pháp và gây ấn tượng chuyên nghiệp với bất kỳ CTO toàn cầu nào!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "architecture specification",
          "by Thursday.",
          "receiving your sign-off",
          "We look forward to",
          "on the revised"
        ],
        answer: "We look forward to receiving your sign-off on the revised architecture specification by Thursday.",
        vi: "Chúng tôi rất mong nhận được xác nhận phê duyệt của ngài đối với bản đặc tả kiến trúc sửa đổi trước thứ Năm."
      },
      fillBlank: {
        sentence: "During the outage, no customer payment records _____ lost or corrupted.",
        answer: "were",
        accepted: ["were"],
        hint: "Chia to-be bị động Quá khứ đơn hòa hợp với danh từ số nhiều 'records'!",
        explain: "Bối cảnh sự cố đã xảy ra ('During the outage') cần thì Quá khứ đơn, kết hợp chủ ngữ danh từ đếm được số nhiều 'no customer payment records' ở thể bị động ('lost or corrupted') -> dùng 'were'."
      }
    },
    quiz: [
      {
        q: "We appreciate your patience while our site reliability engineers work _____ full service connectivity across the Asia-Pacific region.",
        options: ["restore", "restoring", "to restore", "restored"],
        answer: 2,
        explain: "Đáp án đúng là 'to restore' (C). Sau nội động từ 'work' để diễn tả mục đích nỗ lực làm gì ('làm việc để khôi phục hoàn toàn kết nối dịch vụ'), tiếng Anh dùng động từ nguyên mẫu có 'to' ('work to restore'). Loại A (hai động từ chia thì đứng liền nhau), B và D."
      },
      {
        q: "Following the architecture review board's decision, our squad is fully committed to _____ the legacy billing monolith before Q4.",
        options: ["decommission", "decommissioning", "decommissioned", "be decommissioned"],
        answer: 1,
        explain: "Đáp án đúng là 'decommissioning' (B). Siêu bẫy kinh điển tổng kết lộ trình: Trong cấu trúc 'be committed to / be dedicated to / look forward to', chữ 'to' là GIỚI TỪ chứ không phải 'to' của động từ nguyên mẫu! Vì vậy theo sau nó bắt buộc là Danh động từ V-ing ('decommissioning') + tân ngữ 'the legacy billing monolith'."
      },
      {
        q: "_____ the updated OpenAPI contract be approved during tomorrow's refinement session, backend and mobile engineers can begin parallel development immediately.",
        options: ["Unless", "Provided", "Should", "Had"],
        answer: 2,
        explain: "Đáp án đúng là 'Should' (C). Dấu hiệu vàng ở động từ 'be approved' (nguyên mẫu trần 'be' đứng ngay sau chủ ngữ số ít 'the updated OpenAPI contract'!) + mệnh đề chính hiện tại/tương lai 'can begin'. Chỉ có đảo ngữ Câu điều kiện Loại 1 'Should + S + V_nguyên_thể' mới thỏa mãn ngữ pháp tuyệt đối (nếu dùng 'Unless' hay 'Provided [that]' thì động từ phải chia là 'is approved'!)."
      }
    ]
  }
});
