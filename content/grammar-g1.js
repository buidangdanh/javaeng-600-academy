/* JavaEng TOEIC 600+ Academy — Học phần G1: Ngữ Pháp Nền Tảng (G1_1 -> G1_6)
 * Biên soạn chuyên sâu kết hợp Tư duy Compiler/OOP của Principal Java Engineer & Mẹo giải nhanh TOEIC 5 giây.
 */
window.LESSON_DETAILS = window.LESSON_DETAILS || {};
Object.assign(window.LESSON_DETAILS, {
  /* ==========================================================================
   * BÀI G1_1: GIẢI PHẪU 5 THÀNH PHẦN CÂU (S-V-O-C-M) NHƯ ĐỌC HÀM JAVA
   * ========================================================================== */
  G1_1: {
    duration: "35 phút",
    toeicTarget: "Nền tảng 0 → 450+ (TOEIC Part 5 Xác định thành phần & Part 7 Tách lõi câu dài)",
    javaContext: "Viết Javadoc mạch lạc, đặt tên Method chuẩn Verb + Object, báo cáo Daily Standup không bao giờ thiếu động từ to-be hoặc động từ chính.",
    teacherIntro: "Chào anh em Java Dev! Rất nhiều anh em code Microservices hàng vạn dòng cực mượt nhưng hễ mở miệng nói tiếng Anh hoặc đọc một câu dài 3 dòng trong TOEIC Part 7 là lập tức 'hoảng loạn' vì thấy chữ nào cũng quan trọng như nhau. Nỗi đau lớn nhất của Dev Việt là ghép từ theo kiểu dịch từng chữ tiếng Việt sang (word-by-word): 'Today server very slow' — câu này nếu đưa vào trình biên dịch tiếng Anh là văng lỗi Compile Error ngay lập tức vì thiếu mất Verb! Tin vui cho anh em là cấu trúc câu tiếng Anh thực ra chặt chẽ và tường minh y hệt chữ ký hàm (Method Signature) trong Java vậy. Chỉ cần 35 phút hôm nay nắm trọn bộ khung 5 thành phần S-V-O-C-M, anh em sẽ có đôi mắt 'X-quang' nhìn xuyên thấu mọi câu dài trong đề thi TOEIC lẫn tài liệu Spring Framework.",
    javaAnalogy: {
      title: "Câu Tiếng Anh = Lời Gọi Method Trong Java (AST Parser)",
      body: "Hãy hình dung mỗi câu tiếng Anh chuẩn là một dòng lệnh Java hợp lệ: `orderService.validate(requestPayload, strictMode);`. Trong đó: `orderService` chính là **Subject (S - Chủ ngữ / Object thực thi)**; `.validate(...)` là **Verb (V - Động từ / Hành động cốt lõi — thiếu V thì code không thể biên dịch!)**; `requestPayload` là **Object (O - Tân ngữ chịu tác động trực tiếp)**; còn các tham số cấu hình thời gian/nơi chốn như `withTimeout(500ms)` hay `@Transactional` gắn thêm bên ngoài chính là **Modifier (M - Trạng ngữ bổ nghĩa, bỏ đi hàm chính vẫn chạy đúng cú pháp)**. Còn với câu dùng động từ nối (Linking Verb) như `server.status = HEALTHY`, thì `=` là `is` (Verb) và `HEALTHY` chính là **Complement (C - Bổ ngữ mô tả trạng thái của S)**!"
    },
    objectives: [
      "Nhận diện chính xác 5 thành phần S (Chủ ngữ), V (Động từ chia thì), O (Tân ngữ), C (Bổ ngữ), M (Trạng ngữ phụ) trong bất kỳ câu tiếng Anh nào.",
      "Phân biệt triệt để Nội động từ (Intransitive Verb — hàm `void run()`, không nhận tham số trực tiếp) và Ngoại động từ (Transitive Verb — hàm `process(Order o)`, bắt buộc có Tân ngữ đi kèm).",
      "Áp dụng kỹ thuật 'Gọt bỏ Modifier (cụm giới từ)' để tìm lõi S-V của câu dài 30 từ trong TOEIC Part 5 & Part 7 chỉ trong 5 giây."
    ],
    formulaCards: [
      {
        label: "Mẫu 1: S + V (+ M) — Nội động từ",
        formula: "Subject + Intransitive Verb (+ Preposition + Noun / Adverb)",
        note: "Tương đương hàm không tham số `server.start()`. Động từ tự đủ nghĩa (arrive, happen, occur, rise, work, crash, fail). Muốn thêm danh từ phía sau BẮT BUỘC phải có giới từ bắc cầu!"
      },
      {
        label: "Mẫu 2: S + V + O (+ M) — Ngoại động từ",
        formula: "Subject + Transitive Verb + Object (+ Modifier)",
        note: "Mẫu phổ biến nhất (chiếm 60% câu TOEIC): tương đương `repo.save(entity)`. Ngoại động từ (discuss, access, attend, reach, contact, deploy, fix) đi TRỰC TIẾP với Object, cấm chèn giới từ thừa!"
      },
      {
        label: "Mẫu 3: S + V_linking + C — Động từ nối",
        formula: "Subject + (be / become / remain / seem / stay) + Adj / Noun",
        note: "Tương đương phép gán thuộc tính `system.state = STABLE`. Vị trí C sau động từ nối ưu tiên số 1 là TÍNH TỪ (Adj), tuyệt đối không dùng Trạng từ đuôi -ly để mô tả S!"
      },
      {
        label: "Mẫu 4 & 5: S + V + O + O / O + C",
        formula: "S + give/send + O1(người) + O2(vật)  |  S + make/keep/find + O + C(Adj)",
        note: "Ví dụ 2 tân ngữ: `send the client an invoice`. Ví dụ bổ ngữ tân ngữ: `keep the connection alive` (`alive` là tính từ bổ nghĩa cho `the connection`)."
      }
    ],
    sections: [
      {
        heading: "1. Giải phẫu 5 Thành phần S - V - O - C - M bằng tư duy Lập trình viên",
        paragraphs: [
          "Trong tiếng Việt, chúng ta nói 'Hôm nay hệ thống ổn định' mà không cần bất kỳ động từ nào. Nhưng tiếng Anh là ngôn ngữ 'Verb-centric' (lấy Động từ làm trung tâm): MỌI câu độc lập bắt buộc phải có ít nhất 1 cụm Chủ ngữ (S) + 1 Động từ chia thì (Finite Verb - V). Lưu ý cực kỳ quan trọng khi thi TOEIC: `V-ing` đứng một mình (ví dụ `deploying`), `to V` (`to deploy`) hay `V3/ed` rút gọn KHÔNG PHẢI là động từ chia thì chính của câu!",
          "Khi đọc một câu tiếng Anh dài, đừng đọc tuần tự từ trái qua phải như mảng một chiều. Hãy parse nó thành cây cú pháp (Syntax Tree): chốt Động từ chia thì (V) trước, nhìn sang trái tìm Chủ ngữ gốc (S), nhìn sang phải xem có Tân ngữ (O) hay Bổ ngữ (C) không, và đóng ngoặc tròn toàn bộ các thành phần trang trí Modifier (M)."
        ],
        bullets: [
          "Subject (S - Chủ ngữ): Chủ thể thực hiện hành động, thường đứng đầu câu. Có thể là Danh từ (`Servers`), Cụm danh từ (`The authentication service`), Đại từ (`They`), hoặc Danh động từ (`Caching data`).",
          "Verb (V - Động từ chính chia thì): Trái tim của câu, thể hiện hành động hoặc trạng thái và mang thông tin Thì + Số ít/nhiều (`processes`, `is running`, `failed`, `has completed`).",
          "Object (O - Tân ngữ): Đối tượng bị tác động trực tiếp bởi Ngoại động từ, thường là Danh từ/Cụm danh từ/Đại từ tân ngữ (`the payload`, `a security patch`, `him`).",
          "Complement (C - Bổ ngữ): Thành phần hoàn thiện thông tin định danh hoặc tính chất cho S (sau `be, become, remain`) hoặc cho O (sau `make, keep, find, consider`). C thường là Tính từ (`scalable`, `available`) hoặc Danh từ (`a senior architect`).",
          "Modifier (M - Trạng ngữ bổ nghĩa): Thành phần cung cấp thông tin phụ về Thời gian (`yesterday`, `every midnight`), Nơi chốn (`in the cloud`, `at the headquarters`), Cách thức (`smoothly`, `efficiently`) hoặc Mục đích (`to reduce latency`). Xóa M đi, câu vẫn đúng ngữ pháp 100%!"
        ]
      },
      {
        heading: "2. Nội động từ (Intransitive) vs Ngoại động từ (Transitive) — Cái bẫy chết người của cả Dev lẫn thí sinh TOEIC",
        paragraphs: [
          "Tại sao ta nói `We discussed the architecture` (ĐÚNG) mà nói `We discussed about the architecture` lại SAI? Ngược lại, tại sao `Please reply to my email` phải có `to`, còn `Please answer my email` lại không có `to`? Câu trả lời nằm trọn ở chữ ký hàm: Ngoại động từ (`Vt`) giống như method `discuss(Topic t)` nhận thẳng tham số, truyền thêm giới từ vào là lệch kiểu dữ liệu; còn Nội động từ (`Vi`) giống như `reply()` không nhận tham số trực tiếp nên muốn nối với danh từ phải qua giới từ `reply(to: Email)`.",
          "Trong đề thi TOEIC Part 5 và giao tiếp IT hàng ngày, có một nhóm 'Ngoại động từ giả dạng Nội động từ' khiến 80% người Việt tự tay nhét thừa giới từ `about, to, into, with` do dịch word-by-word từ tiếng Việt."
        ],
        bullets: [
          "Top Ngoại động từ CẤM thêm giới từ ngay sau (Vt + O trực tiếp): `discuss sth` (thảo luận cái gì — cấm about), `access sth` (truy cập cái gì — cấm to/into khi làm động từ!), `attend a meeting` (tham dự — cấm to/in), `reach an agreement / reach the server` (đạt tới — cấm to), `contact someone` (liên hệ ai — cấm with), `approach a problem` (tiếp cận — cấm to), `request a refund` (yêu cầu — cấm for), `emphasize performance` (nhấn mạnh — cấm on).",
          "Top Nội động từ BẮT BUỘC đi kèm giới từ khi có tân ngữ (Vi + Prep + O): `respond / reply to an inquiry` (phản hồi), `comply with regulations` (tuân thủ), `apologize to sb for sth` (xin lỗi), `collaborate with the QA team` (phối hợp), `depend / rely on external APIs` (phụ thuộc), `participate in the sprint review` (tham gia), `consist of three modules` (bao gồm).",
          "Nhóm Nội động từ thuần túy KHÔNG BAO GIỜ có Tân ngữ (và do đó KHÔNG BAO GIỜ chia Bị động!): `happen`, `occur`, `take place` (xảy ra, diễn ra), `arrive` (đến), `exist` (tồn tại), `rise` (tăng lên), `deteriorate` (xuống cấp), `crash` (sập)."
        ]
      },
      {
        heading: "3. Kỹ thuật 'Cắt Tỉa Cụm Giới Từ' để đọc nhanh câu dài Part 7 như đọc Clean Code",
        paragraphs: [
          "Đề thi TOEIC Part 7 và tài liệu kỹ thuật Oracle/AWS rất thích phóng đại câu đơn 5 từ thành câu quái vật 28 từ bằng cách chèn liên tiếp các cụm `Giới từ + Danh từ` (`in`, `on`, `at`, `of`, `for`, `with`, `from`, `during`, `regarding`) vào giữa S và V, hoặc kéo đuôi sau O.",
          "Quy tắc vàng cho anh em: **Danh từ nằm sau giới từ KHÔNG BAO GIỜ làm Chủ ngữ (S) hay Tân ngữ chính (O) của động từ!** Khi gặp câu dài, hãy dùng mắt đóng ngoặc `[Prep + Noun]` lại, lõi câu sẽ lộ diện ngay tức khắc."
        ],
        bullets: [
          "Ví dụ bóc tách thực tế: `The deployment` **[of the new microservice]** **[on the production cluster]** **[during peak hours]** `caused` `a temporary spike` **[in CPU utilization]**. → Gọt hết các khối `[...]` đi, lõi câu chỉ còn đúng 6 chữ: **The deployment (S) + caused (V) + a temporary spike (O)**!",
          "Ứng dụng bắt lỗi chia động từ: Nhờ gọt bỏ `[of the new microservices]`, bạn thấy Chủ ngữ thật là `The deployment` (số ít) nên động từ hiện tại phải là `causes` chứ không bị lừa bởi chữ `microservices` số nhiều đứng sát bên cạnh.",
          "Ứng dụng đặt cấu trúc `make / keep / find + O + Adj` (Mẫu S-V-O-C): Khi viết tài liệu Java, hãy nhớ `Immutable objects make concurrent programming **safe**` (`safe` là tính từ bổ nghĩa cho `concurrent programming`, đừng viết `safely`!)."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "**The API gateway** **routes** **incoming requests** to the appropriate microservice.",
        vi: "API Gateway định tuyến các yêu cầu đầu vào tới microservice phù hợp.",
        note: "Mẫu S-V-O-M kinh điển: S (`The API gateway`) + Vt (`routes`) + O (`incoming requests`) + M (`to the appropriate microservice`)."
      },
      {
        tag: "Daily Standup",
        en: "Yesterday, **the staging server** **crashed** unexpectedly during the load test.",
        vi: "Hôm qua, máy chủ staging đã bị sập bất ngờ trong lúc kiểm thử tải.",
        note: "Mẫu M-S-V-M: `crashed` là nội động từ (Vi) tự đủ nghĩa, phía sau chỉ toàn là trạng ngữ (`unexpectedly`, `during the load test`)."
      },
      {
        tag: "Senior Java",
        en: "**Database connections** **remain** **open** inside the HikariCP pool.",
        vi: "Các kết nối cơ sở dữ liệu vẫn giữ trạng thái mở bên trong pool HikariCP.",
        note: "Mẫu S-V_linking-C-M: `remain` là động từ nối (Linking Verb), theo sau là Tính từ `open` làm bổ ngữ (C) mô tả trạng thái của `connections`."
      },
      {
        tag: "Code Review",
        en: "**We** **discussed** **the database indexing strategy** in great detail this morning.",
        vi: "Sáng nay chúng tôi đã thảo luận rất chi tiết về chiến lược đánh index cơ sở dữ liệu.",
        note: "Bẫy kinh điển: `discuss` là ngoại động từ (Vt), đi thẳng với O (`the database indexing strategy`), tuyệt đối KHÔNG chèn `about`!"
      },
      {
        tag: "TOEIC Part 5",
        en: "**Unauthorized users** cannot **access** **confidential financial records** without two-factor authentication.",
        vi: "Người dùng không có thẩm quyền không thể truy cập hồ sơ tài chính mật nếu thiếu xác thực hai lớp.",
        note: "Khi `access` là Động từ (sau `cannot`), nó là Vt đi trực tiếp với tân ngữ, KHÔNG dùng `access to` (chỉ dùng `have access to` khi `access` là Danh từ)."
      },
      {
        tag: "TOEIC Part 5",
        en: "**All engineering leads** must **attend** **the quarterly security briefing** on Friday afternoon.",
        vi: "Tất cả các trưởng nhóm kỹ thuật phải tham dự buổi phổ biến bảo mật hàng quý vào chiều thứ Sáu.",
        note: "`attend` (tham dự) là Ngoại động từ đi thẳng với `the quarterly security briefing` (= `participate in`)."
      },
      {
        tag: "TOEIC Part 7",
        en: "**An unexpected outage** in the primary data center **occurred** shortly after midnight.",
        vi: "Một sự cố mất kết nối bất ngờ tại trung tâm dữ liệu chính đã xảy ra ngay sau nửa đêm.",
        note: "Gọt cụm giới từ `in the primary data center` đi sẽ thấy S (`An unexpected outage`) + Vi (`occurred`). `occur` là nội động từ nên không bao giờ chia bị động `was occurred`!"
      },
      {
        tag: "Client Email",
        en: "**Our support team** **sent** **the client** **a detailed root-cause analysis** within two hours.",
        vi: "Đội hỗ trợ của chúng tôi đã gửi cho khách hàng bản phân tích nguyên nhân gốc rễ chi tiết trong vòng hai giờ.",
        note: "Mẫu S-V-O1-O2-M: `sent` nhận 2 tân ngữ liên tiếp — O1 người nhận (`the client`) và O2 vật được gửi (`a detailed root-cause analysis`)."
      },
      {
        tag: "Senior Java",
        en: "**Stateless architecture** **makes** **horizontal scaling** **effortless** on Kubernetes.",
        vi: "Kiến trúc phi trạng thái giúp việc mở rộng theo chiều ngang trở nên dễ dàng trên Kubernetes.",
        note: "Mẫu S-V-O-C: `make + O + Adj`. Tính từ `effortless` làm bổ ngữ cho tân ngữ `horizontal scaling`."
      },
      {
        tag: "Code Review",
        en: "Please **keep** **your controller methods** **thin and readable** by delegating logic to the service layer.",
        vi: "Vui lòng giữ cho các hàm controller của bạn mỏng và dễ đọc bằng cách ủy quyền logic xuống tầng service.",
        note: "Mẫu `(You) + keep (V) + your controller methods (O) + thin and readable (C - cặp tính từ)`."
      },
      {
        tag: "TOEIC Part 5",
        en: "**All microservices** must **comply with** **strict data privacy regulations** across the European region.",
        vi: "Tất cả các microservice phải tuân thủ các quy định bảo mật dữ liệu nghiêm ngặt trên toàn khu vực châu Âu.",
        note: "`comply` là Nội động từ (Vi), bắt buộc đi kèm giới từ `with` trước tân ngữ (cụm vàng TOEIC: `comply with` = `abide by`)."
      },
      {
        tag: "Daily Standup",
        en: "**I** **replied to** **the QA engineer's comment** on Jira before lunch.",
        vi: "Tôi đã phản hồi bình luận của kỹ sư QA trên Jira trước giờ ăn trưa.",
        note: "`reply` và `respond` là Nội động từ, luôn phải có giới từ `to` khi nối với người/vật nhận phản hồi."
      },
      {
        tag: "TOEIC Part 7",
        en: "**The performance** of our legacy batch jobs **became** **unacceptable** as data volume grew.",
        vi: "Hiệu năng của các tác vụ chạy lô cũ kỹ đã trở nên không thể chấp nhận được khi khối lượng dữ liệu tăng lên.",
        note: "Gọt bỏ `of our legacy batch jobs`, ta có S (`The performance`) + Linking Verb (`became`) + C (`unacceptable` - tính từ)."
      },
      {
        tag: "Client Email",
        en: "Please **contact** **our on-call engineer** immediately if the latency spike persists.",
        vi: "Vui lòng liên hệ ngay với kỹ sư trực ca của chúng tôi nếu hiện tượng vọt độ trễ vẫn tiếp diễn.",
        note: "Khi `contact` là động từ, dùng thẳng `contact someone` (cấm `contact with someone`). Chỉ dùng `in contact with` khi `contact` là danh từ."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Upgrading the JVM** to Java 21 **improves** **application throughput** significantly.",
        vi: "Việc nâng cấp JVM lên Java 21 cải thiện thông lượng ứng dụng một cách đáng kể.",
        note: "Chủ ngữ ở đây là cụm Danh động từ (`Upgrading the JVM` — luôn tính là ngôi số ít!) + V (`improves` có -s) + O (`application throughput`) + M (`significantly`)."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "Today the production server very slow.",
          fix: "Today the production server **is** very slow.",
          why: "Câu thiếu hoàn toàn Động từ chia thì (Compile Error!). `slow` chỉ là Tính từ (Adj), bắt buộc phải có Linking Verb `is` đứng trước để nối S với C."
        },
        {
          bug: "Let's discuss about the Redis caching strategy.",
          fix: "Let's **discuss** the Redis caching strategy.",
          why: "`discuss` là Ngoại động từ (Transitive Verb = `talk about`), bản thân nó đã mang sẵn nghĩa 'thảo luận về' nên cấm thêm `about`."
        },
        {
          bug: "A NullPointerException was occurred in the payment module.",
          fix: "A NullPointerException **occurred** in the payment module.",
          why: "`occur` (cũng như `happen`, `take place`) là Nội động từ không có tân ngữ, nên tuyệt đối KHÔNG BAO GIỜ chia ở thể bị động (`be + V3/ed`)."
        },
        {
          bug: "Using virtual threads makes the system scalability.",
          fix: "Using virtual threads makes the system **scalable**.",
          why: "Sau cấu trúc `make / keep / find + Object`, vị trí Complement mô tả tính chất của Object phải là Tính từ (`scalable`), không dùng Danh từ trừu tượng (`scalability`)."
        },
        {
          bug: "Deploying the hotfix to the production cluster at 2 AM.",
          fix: "**We deployed** the hotfix to the production cluster at 2 AM.",
          why: "Lỗi câu cụt (Sentence Fragment): `Deploying...` là V-ing chứ chưa phải động từ chia thì, và câu cũng chưa có Chủ ngữ hoặc vị ngữ hoàn chỉnh."
        }
      ]
    },
    toeicTips: [
      "Mẹo 5 giây kiểm tra 'Câu đã có Động từ chính chưa?': Khi làm TOEIC Part 5, việc ĐẦU TIÊN trước khi xét nghĩa là quét xem câu (hoặc mệnh đề) đã có Động từ chia thì chưa. Nếu toàn câu mới chỉ có `to V`, `V-ing` hoặc cụm giới từ → chỗ trống 100% phải điền Động từ chia thì (loại sạch đáp án `V-ing`, `to V`, `Danh từ`).",
      "Mẹo 'Đóng ngoặc cụm giới từ': Thấy `of, in, on, at, for, with, from, by, about` trước chỗ trống động từ → gạch bỏ cụm từ giới từ tới danh từ ngay sau nó để tìm Chủ ngữ gốc ở đầu câu, tránh bẫy chia động từ theo danh từ đứng sát chỗ trống.",
      "Mẹo nhớ nhóm Ngoại động từ cấm giới từ hay ra thi TOEIC bằng câu thần chú 'Đừng-Ăn-Rau-Cải-Áp-Chảo': **D**iscuss (thảo luận) - **A**ttend (tham dự) - **R**each (đạt tới) - **C**ontact (liên hệ) - **A**ccess (truy cập) - **A**pproach (tiếp cận) → Đi thẳng với Tân ngữ, thấy giới từ đứng ngay sau là loại!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh theo đúng khung S - V - O - M:",
        chunks: [
          "thousands of",
          "Our payment service",
          "every minute.",
          "processes",
          "transactions"
        ],
        answer: "Our payment service processes thousands of transactions every minute.",
        vi: "Dịch vụ thanh toán của chúng tôi xử lý hàng ngàn giao dịch mỗi phút."
      },
      fillBlank: {
        sentence: "All backend developers must _____ the architecture review meeting at 10:00 AM tomorrow. (Gợi ý: tham dự, ngoại động từ đi thẳng với tân ngữ)",
        answer: "attend",
        accepted: ["attend"],
        hint: "Động từ 6 chữ cái bắt đầu bằng 'a', mang nghĩa 'tham dự' (= participate in) và không đi kèm giới từ.",
        explain: "Sau động từ khuyết thiếu `must` cần động từ nguyên mẫu. Phía sau là tân ngữ trực tiếp `the architecture review meeting` không có giới từ `in`, nên dùng ngoại động từ `attend` (nếu dùng `participate` thì bắt buộc phải có `in`)."
      }
    },
    quiz: [
      {
        q: "The sudden increase in API latency _____ our checkout conversion rate during yesterday's flash sale.",
        options: [
          "A. affecting",
          "B. to affect",
          "C. affected",
          "D. effect"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. affected**. Phân tích cấu trúc câu: Chủ ngữ là `The sudden increase` (cụm `in API latency` là Modifier bổ nghĩa), phía sau chỗ trống là Tân ngữ `our checkout conversion rate` và trạng ngữ thời gian quá khứ `during yesterday's flash sale`. Cả câu CHƯA CÓ động từ chia thì chính! Loại A (`affecting` - V-ing không làm V chính được), loại B (`to affect` - to-V không làm V chính), loại D (`effect` thường là danh từ, và nếu chia quá khứ phải có -ed). Vậy chỉ có `affected` (V2 chia thì quá khứ đơn) là hợp lệ."
      },
      {
        q: "Before migrating the database, the infrastructure team thoroughly _____ all potential security risks with the CTO.",
        options: [
          "A. discussed",
          "B. discussed about",
          "C. replied",
          "D. complied"
        ],
        answer: 0,
        explain: "Đáp án đúng là **A. discussed**. Phía sau chỗ trống là cụm danh từ làm Tân ngữ trực tiếp (`all potential security risks`). `discuss` là Ngoại động từ (Vt) nên đi thẳng với tân ngữ, loại B (`discussed about` là lỗi thừa giới từ kinh điển). Loại C (`replied`) và D (`complied`) vì cả hai đều là Nội động từ bắt buộc phải đi kèm giới từ (`replied to`, `complied with`) và cũng không hợp nghĩa."
      },
      {
        q: "Adding a distributed Redis cache kept our authentication service _____ even under 50,000 concurrent requests.",
        options: [
          "A. responsiveness",
          "B. responsive",
          "C. responsively",
          "D. respond"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. responsive**. Đây là cấu trúc Mẫu câu 5 `keep + Object + Complement (Adj)`: `kept` (V) + `our authentication service` (O) + `responsive` (C - Tính từ mô tả trạng thái của service: phản hồi nhanh). Loại A (danh từ), loại C (trạng từ - bẫy hay gặp nhất khi thí sinh thấy động từ `kept` liền chọn `-ly`), loại D (động từ)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G1_2: DANH TỪ (NOUNS), CỤM DANH TỪ & MẠO TỪ (A / AN / THE)
   * ========================================================================== */
  G1_2: {
    duration: "40 phút",
    toeicTarget: "Nền tảng 0 → 450+ (TOEIC Part 5 Từ loại Danh từ, Cụm danh từ & Mạo từ)",
    javaContext: "Đặt tên Class / Package / DTO chuẩn tiếng Anh, dùng đúng danh từ không đếm được (`software`, `information`, `feedback`, `equipment`) khi viết tài liệu kỹ thuật & email.",
    teacherIntro: "Chào anh em! Trong lập trình hướng đối tượng (OOP), trước khi viết bất kỳ hàm xử lý nào, việc đầu tiên ta làm là định nghĩa các `class` và `record` để gom dữ liệu — trong tiếng Anh, các `class` và `instance` đó chính là **Danh từ (Nouns)** và **Cụm danh từ (Noun Phrases)**. Thế nhưng có hai nỗi đau mà 90% anh em Java từ Junior tới Senior đều từng vấp phải: Một là viết `many feedbacks`, `new softwares`, `an equipment` (sai bét vì chúng là danh từ không đếm được!); Hai là quên sạch mạo từ `a/an/the` kiểu `Please create pull request on repository` nghe cực kỳ cụt lủn như tiếng bồi. Trong đề thi TOEIC Part 5, câu hỏi điền Danh từ dựa vào hậu tố (`-tion, -ment, -ity, -ance`) cũng là mỏ điểm dễ ăn nhất nếu bạn nắm được công thức đóng khung Cụm danh từ. Cùng thầy xử đẹp chuyên đề này nhé!",
    javaAnalogy: {
      title: "Danh Từ Đếm Được vs Không Đếm Được = Instance Rời Rạc vs Byte Stream Liên Tục",
      body: "Hãy liên tưởng **Danh từ đếm được (Countable Noun)** giống như các `Object` cụt thể tạo bằng từ khóa `new`: `new Server()` → `a server` (1 instance mới tinh chưa ai biết), `List<Server>` → `servers` (nhiều phần tử đếm `size()` được). Còn **Danh từ không đếm được (Uncountable Noun)** như `software`, `information`, `feedback`, `equipment`, `traffic`, `memory` giống như `InputStream` hoặc vùng nhớ thô — bạn không thể gọi `new Feedback()` hay thêm `-s` thành `feedbacks`, muốn đếm theo đơn vị phải bọc qua wrapper như `a piece of feedback`! Cuối cùng, mạo từ **`the`** chính là con trỏ tham chiếu tới một **Singleton / Bean đã xác định duy nhất trong Context** (`the production database` — cả team nói ra là biết ngay con DB nào!)."
    },
    objectives: [
      "Nhận diện tức thì Danh từ qua 8 hậu tố kinh điển (`-tion/-sion, -ment, -ness, -ity, -ance/-ence, -er/-or/-ist, -al, -sis`) và 4 vị trí vàng của Danh từ trong câu.",
      "Ghép chuẩn Cụm danh từ (Noun Phrase) theo thứ tự chuẩn xác `[Determiner] + [Adv] + [Adj] + [Modifier Noun] + HEAD NOUN` và hiểu vì sao tiếng Anh dịch ngược từ phải sang trái.",
      "Dùng chuẩn xác `a / an / the / Ø` và thuộc lòng Top 12 Danh từ Không đếm được + Danh từ Đếm được hay gài bẫy nhất trong TOEIC & IT."
    ],
    formulaCards: [
      {
        label: "Khung Vàng Cụm Danh Từ (Noun Phrase)",
        formula: "[a/an/the/my/this] + [Adv] + [Adj] + [Noun phụ] + HEAD NOUN",
        note: "Bắt đầu bằng Từ hạn định (Determiner) và KẾT THÚC bằng Danh từ chính (Head Noun). Ví dụ: `[an] [extremely] [reliable] [payment] [gateway]`. Thấy `a/an/the/my`... trước chỗ trống và giới từ/động từ sau chỗ trống → Điền Danh từ!"
      },
      {
        label: "Quy Tắc Mạo Từ a / an / the",
        formula: "a/an + N_đếm_được_số_ít (chưa xác định)  |  the + N_bất_kỳ (đã xác định)",
        note: "Chú ý bẫy phát âm `a/an` tính theo ÂM ĐẦU (IPA), không tính chữ cái: `an API` (/ˌeɪ.piːˈaɪ/), `an hour` (/aʊər/), `an SLA` (/ˌes.elˈeɪ/), nhưng `a user` (/ˈjuː.zər/), `a URL` (/ˌjuː.ɑːrˈel/), `a microservice`!"
      },
      {
        label: "Danh Từ Ghép (Compound Nouns: N1 + N2)",
        formula: "Noun_1 (luôn ở dạng SỐ ÍT làm định ngữ) + Noun_2 (Danh từ chính chia số ít/nhiều)",
        note: "Ví dụ: `user accounts`, `system requirements`, `performance optimization`, `connection pool`. N1 đóng vai trò phân loại cho N2 nên luôn giữ nguyên mẫu số ít (trừ ngoại lệ cố định của TOEIC: `sales`, `savings`, `customs`, `human resources`)."
      },
      {
        label: "Bẫy Lượng Từ: Đếm Được vs Không Đếm Được",
        formula: "many / few / a number of + N_số_nhiều  |  much / little / an amount of + N_không_đếm_được",
        note: "Dùng chung được cho cả hai (khi N đếm được ở số nhiều): `some, any, a lot of, plenty of, all, most`."
      }
    ],
    sections: [
      {
        heading: "1. 4 Vị Trí Vàng Của Danh Từ & Bộ Đuôi Nhận Diện Trong 3 Giây",
        paragraphs: [
          "Trong đề thi TOEIC Part 5, cứ gặp 4 đáp án có cùng gốc từ như `(A) configure (B) configurable (C) configuration (D) configurably`, bạn KHÔNG CẦN dịch cả câu. Chỉ cần nhìn ngay trước và ngay sau chỗ trống xem có rơi vào 1 trong 4 vị trí vàng của Danh từ dưới đây không.",
          "Đặc biệt cẩn thận với nhóm 'Danh từ đuôi -al' nhìn y hệt Tính từ khiến rất nhiều thí sinh mất điểm oan!"
        ],
        bullets: [
          "Vị trí 1 — Sau Mạo từ & Từ hạn định: `a, an, the, this, that, these, those, each, every, some, any, no, many, much` + **(Adj) + NOUN**.",
          "Vị trí 2 — Sau Tính từ sở hữu hoặc Sở hữu cách: `my, your, our, their, his, her, its, the client's` + **(Adj) + NOUN** (ví dụ: `its **availability**`).",
          "Vị trí 3 — Sau Giới từ: `of, in, on, for, with, without, by, through, regarding` + **NOUN** (lưu ý nếu sau chỗ trống đã có sẵn một cụm danh từ tân ngữ thì chỗ trống sau giới từ phải điền `V-ing` chứ không điền Noun!).",
          "Vị trí 4 — Làm Chủ ngữ đầu câu (trước Verb) hoặc Tân ngữ (sau Ngoại động từ).",
          "Hậu tố Danh từ chỉ vật/khái niệm: `-tion/-sion` (`transaction, permission`), `-ment` (`deployment, environment`), `-ness` (`readiness`), `-ity` (`scalability, latency`), `-ance/-ence` (`performance, concurrency`), `-ure` (`architecture, failure`).",
          "SIÊU BẪY ĐUÔI `-AL` LÀ DANH TỪ TRONG TOEIC: `approval` (sự phê duyệt), `proposal` (bản đề xuất), `renewal` (sự gia hạn), `arrival` (sự đến nơi), `withdrawal` (sự rút tiền), `removal` (sự gỡ bỏ), `disposal` (sự thanh lý), `appraisal` (sự đánh giá nhân sự), `trial` (bản dùng thử)."
        ]
      },
      {
        heading: "2. Danh Từ Đếm Được vs Không Đếm Được — Danh Sách Tử Thần Cấm Sai",
        paragraphs: [
          "Lỗi ngữ pháp 'tố cáo' trình độ cơ bản rõ nhất trong email công việc và bài thi TOEIC chính là dùng Danh từ đếm được số ít ĐỨNG TRƠ TRỌI không có mạo từ/sở hữu và không có `-s` (ví dụ viết `We deployed microservice` — SAI 100%, phải là `a microservice`, `the microservice`, `our microservice` hoặc `microservices`!).",
          "Ngược lại, với Danh từ không đếm được, bạn TUYỆT ĐỐI KHÔNG ĐƯỢC thêm `a/an` ở trước và KHÔNG ĐƯỢC thêm `-s/-es` ở cuối."
        ],
        bullets: [
          "Top Danh từ KHÔNG ĐẾM ĐƯỢC trong IT & TOEIC (Cấm `a/an`, Cấm `-s`, luôn chia động từ số ít): `software` (phần mềm), `hardware` (phần cứng), `equipment` (trang thiết bị), `information` (thông tin), `feedback` (phản hồi), `advice` (lời khuyên), `progress` (tiến độ — `make progress`), `access` (quyền truy cập), `traffic` (lưu lượng truy cập/giao thông), `machinery` (máy móc), `luggage / baggage` (hành lý), `furniture` (nội thất), `research` (nghiên cứu), `evidence` (bằng chứng), `documentation` (tài liệu nói chung).",
          "Cách đếm gián tiếp khi cần chỉ 1 đơn vị: thay vì `a software` → hãy nói `a piece of software` hoặc `a software application`; thay vì `an advice / a feedback` → nói `a piece of advice / some constructive feedback`.",
          "Cặp đối lập vàng của TOEIC (1 bên Không đếm được vs 1 bên Đếm được): `equipment` (KĐĐ) vs `device / machine / tool` (ĐĐ); `advice` (KĐĐ) vs `suggestion / recommendation` (ĐĐ); `information` (KĐĐ) vs `detail / report` (ĐĐ); `work` (công việc - KĐĐ) vs `job / task / assignment` (ĐĐ); `permit` (giấy phép - ĐĐ: `a permit`) vs `permission` (sự cho phép - KĐĐ)."
        ]
      },
      {
        heading: "3. Làm Chủ Mạo Từ `a / an / the` & Danh Từ Ghép (Compound Nouns)",
        paragraphs: [
          "Người Việt mình không có khái niệm mạo từ như tiếng Anh nên khi code hay viết PR thường bỏ trống hết. Quy tắc thực ra cực kỳ logic như vòng đời biến trong Java: Lần đầu tiên giới thiệu một đối tượng mới đếm được số ít với người nghe → khởi tạo bằng `a/an`. Lần thứ hai nhắc lại nó, hoặc cả người nói lẫn người nghe đều biết rõ đang trỏ tới instance nào → tham chiếu bằng `the`!",
          "Với Danh từ ghép `Noun 1 + Noun 2` (như `message queue`, `service discovery`, `customer satisfaction survey`), từ đứng CUỐI CÙNG luôn là Danh từ gốc quyết định bản chất và số ít/nhiều; các danh từ đứng trước chỉ đóng vai trò như Tính từ phân loại."
        ],
        bullets: [
          "Dùng `a` trước phụ âm phát âm: `a bug`, `a query`, `a **u**ser` (/ˈjuː.zər/ bắt đầu bằng bán nguyên âm /j/), `a **U**RL` (/juː.../), `a **u**nique ID` (/juː.../), `a **Eu**ropean server` (/jʊə.../), `a **o**ne-time password` (/wʌn/ bắt đầu bằng âm /w/).",
          "Dùng `an` trước nguyên âm phát âm: `an exception`, `an instance`, `an **h**our` (/aʊər/ - câm h), `an **h**onest mistake`, `an **A**PI` (/eɪ.../), `an **S**QL query` (nếu đọc /ˌes.kjuːˈel/), `an **H**TTP request` (/ˌeɪtʃ.../), `an **M**VP` (/ˌem.../), `an **R**FC` (/ˌɑːr.../).",
          "Dùng `the` bắt buộc trong 4 trường hợp: (1) Đã xác định rõ hoặc vừa nhắc ở câu trước (`I found **a** memory leak. **The** leak came from...`); (2) Được làm rõ ngay sau bởi cụm `of...` hoặc mệnh đề quan hệ (`**the** latency **of our checkout API**`); (3) So sánh nhất và số thứ tự (`**the** fastest algorithm`, `**the** first release`); (4) Duy nhất trong hệ thống/môi trường (`**the** Internet`, `**the** CTO`, `**the** production environment`).",
          "Ngoại lệ Danh từ ghép có `-s` ở danh từ đầu (Rất hay thi TOEIC!): `sales department / sales representative` (phòng/nhân viên kinh doanh), `savings account` (tài khoản tiết kiệm), `customs declaration` (tờ khai hải quan), `human resources manager` (trưởng phòng nhân sự), `systems engineer`, `permissions policy`."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "We detected **a memory leak** in the worker node, and **the leak** crashed the container after six hours.",
        vi: "Chúng tôi phát hiện một lỗi rò rỉ bộ nhớ ở worker node, và lỗi rò rỉ đó đã làm sập container sau sáu giờ.",
        note: "Chuẩn sách giáo khoa mạo từ: Lần đầu nhắc tới dùng `a memory leak` (khởi tạo mới); nhắc lại lần hai dùng `the leak` (tham chiếu đã xác định)."
      },
      {
        tag: "Code Review",
        en: "Could you expose **an API endpoint** that validates **a UUID token** before querying the database?",
        vi: "Bạn có thể mở một API endpoint để xác thực mã UUID trước khi truy vấn cơ sở dữ liệu được không?",
        note: "Phát âm chuẩn: `an API` (/ˌeɪ.piːˈaɪ/ - bắt đầu bằng nguyên âm /eɪ/), nhưng `a UUID` (/ˌjuː.juː.aɪˈdiː/ - bắt đầu bằng âm /j/ như chữ 'you'!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "All budget **proposals** require written **approval** from the Chief Financial Officer.",
        vi: "Tất cả các bản đề xuất ngân sách đều cần sự phê duyệt bằng văn bản từ Giám đốc Tài chính.",
        note: "Hai siêu danh từ đuôi `-al` vàng mười của TOEIC trong cùng một câu: `proposals` (đếm được) và `approval` (không đếm được)."
      },
      {
        tag: "Daily Standup",
        en: "I received very helpful **feedback** and practical **advice** during yesterday's architecture review.",
        vi: "Tôi đã nhận được phản hồi rất hữu ích và những lời khuyên thiết thực trong buổi duyệt kiến trúc hôm qua.",
        note: "`feedback` và `advice` đều là Danh từ KHÔNG đếm được → tuyệt đối không dùng `a` và không thêm `-s`!"
      },
      {
        tag: "TOEIC Part 5",
        en: "The IT department purchased new monitoring **equipment** and enterprise backup **software**.",
        vi: "Phòng CNTT đã mua trang thiết bị giám sát mới và phần mềm sao lưu doanh nghiệp.",
        note: "`equipment` và `software` là cặp bài trùng danh từ không đếm được kinh điển nhất trong đề ETS TOEIC."
      },
      {
        tag: "TOEIC Part 5",
        en: "While `advice` is uncountable, the architect offered three actionable **recommendations** to reduce GC pauses.",
        vi: "Dù `advice` không đếm được, vị kiến trúc sư đã đưa ra ba khuyến nghị khả thi để giảm thời gian dừng dọn rác (GC).",
        note: "Đối chiếu trực tiếp: `advice` (không đếm được) vs `recommendations / suggestions` (đếm được, đi được với số đếm `three` + `-s`)."
      },
      {
        tag: "Senior Java",
        en: "Proper **configuration** of the **database connection pool** prevents thread starvation under heavy load.",
        vi: "Việc cấu hình đúng đắn cho vùng kết nối cơ sở dữ liệu giúp ngăn chặn tình trạng đói luồng khi chịu tải nặng.",
        note: "`configuration` đứng sau tính từ `Proper` và trước `of`; còn `database connection pool` là cụm 3 danh từ ghép (dịch ngược từ `pool` sang trái)."
      },
      {
        tag: "Client Email",
        en: "We made significant **progress** on **the payment reconciliation module** this sprint.",
        vi: "Chúng tôi đã đạt được tiến độ đáng kể đối với phân hệ đối soát thanh toán trong sprint này.",
        note: "Collocation chuẩn: `make progress` (`progress` không đếm được, không nói `a progress`). Cụm `the ... module` dùng `the` vì khách hàng và team đều rõ module nào."
      },
      {
        tag: "TOEIC Part 7",
        en: "Contract **renewal** notifications are sent automatically thirty days prior to **the expiration date**.",
        vi: "Các thông báo gia hạn hợp đồng được gửi tự động ba mươi ngày trước ngày hết hạn.",
        note: "`Contract renewal notifications` = cụm 3 danh từ ghép: `notifications` (chính - số nhiều) + `renewal` (phụ - danh từ đuôi `-al` giữ nguyên số ít)."
      },
      {
        tag: "Senior Java",
        en: "Our **user authentication service** achieved 99.99% **availability** throughout the fourth quarter.",
        vi: "Dịch vụ xác thực người dùng của chúng tôi đã đạt độ sẵn sàng 99.99% xuyên suốt quý bốn.",
        note: "`user` và `authentication` đứng trước `service` làm định ngữ nên luôn ở dạng số ít (`user`, không viết `users authentication service`)."
      },
      {
        tag: "TOEIC Part 5",
        en: "The **sales representative** requested temporary **access** to the staging environment for a client demo.",
        vi: "Đại diện kinh doanh đã yêu cầu quyền truy cập tạm thời vào môi trường staging để demo cho khách hàng.",
        note: "Ngoại lệ Compound Noun có `-s`: `sales representative`. Đồng thời `access` khi là danh từ (sau tính từ `temporary`) là danh từ không đếm được + đi với `to`."
      },
      {
        tag: "Code Review",
        en: "It took me nearly **an hour** to trace **a subtle concurrency bug** in the order processor.",
        vi: "Tôi đã mất gần một tiếng đồng hồ để lần ra một lỗi đồng thời tinh vi trong bộ xử lý đơn hàng.",
        note: "`an hour` vì chữ `h` câm (/aʊər/), tiếp theo là cụm danh từ đầy đủ `[a] + [subtle] + [concurrency] + [bug]`."
      },
      {
        tag: "TOEIC Part 5",
        en: "**A large number of** **microservices** share **a small amount of** **configuration data** via Consul.",
        vi: "Một số lượng lớn các microservice chia sẻ một lượng nhỏ dữ liệu cấu hình thông qua Consul.",
        note: "Phân biệt lượng từ chuẩn xác: `a number of + N số nhiều đếm được` (`microservices`) vs `an amount of + N không đếm được` (`data/information`)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Employees must obtain **a security permit** before bringing personal laptops into **the server room**.",
        vi: "Nhân viên phải xin giấy phép an ninh trước khi mang máy tính cá nhân vào phòng máy chủ.",
        note: "Bẫy kinh điển TOEIC: `permit` (giấy phép) là danh từ ĐẾM ĐƯỢC (`a permit`), khác với `permission` (sự cho phép - không đếm được)."
      },
      {
        tag: "Daily Standup",
        en: "This is **the most critical bottleneck** in our entire **order fulfillment pipeline**.",
        vi: "Đây là điểm nghẽn nghiêm trọng nhất trong toàn bộ luồng xử lý hoàn tất đơn hàng của chúng ta.",
        note: "So sánh nhất (`most critical`) bắt buộc phải có mạo từ xác định `the` đứng đầu cụm danh từ."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "Thank you for giving me many useful feedbacks on my PR.",
          fix: "Thank you for giving me **so much useful feedback** (hoặc **many useful comments**) on my PR.",
          why: "`feedback` là Danh từ KHÔNG đếm được: cấm thêm `-s` và cấm đi với `many`! Nếu muốn dùng `many`, hãy đổi sang danh từ đếm được `comments / suggestions`."
        },
        {
          bug: "I just pushed hotfix to repository, please review.",
          fix: "I just pushed **a hotfix** to **the repository**; please review it.",
          why: "`hotfix` và `repository` đều là Danh từ đếm được số ít — tiếng Anh CẤM để danh từ đếm được số ít đứng trơ trọi không có mạo từ (`a/an/the`) hoặc tính từ sở hữu (`our/my`)."
        },
        {
          bug: "We need to write an unit test for a API controller.",
          fix: "We need to write **a unit test** for **an API controller**.",
          why: "Chọn `a` hay `an` dựa vào ÂM ĐẦU KHI ĐỌC, không phải chữ cái viết: `unit` đọc là /ˈjuː.nɪt/ (phụ âm /j/) → dùng `a`; còn `API` đọc là /ˌeɪ.piːˈaɪ/ (nguyên âm /eɪ/) → dùng `an`."
        },
        {
          bug: "The users management module handles accounts permissions.",
          fix: "The **user management** module handles **account permissions**.",
          why: "Trong Danh từ ghép `Noun 1 + Noun 2`, danh từ đứng trước đóng vai trò tính từ phân loại nên phải giữ ở dạng SỐ ÍT (`user`, `account`), chỉ danh từ cuối mới chia số nhiều."
        },
        {
          bug: "Our company bought several new softwares for cloud security.",
          fix: "Our company bought several new **software packages** (hoặc **new software**) for cloud security.",
          why: "`software` là danh từ không đếm được nên không đi với `several` và không có `softwares`. Muốn đếm số lượng gói/ứng dụng thì thêm danh từ đếm được phía sau như `software packages / applications / tools`."
        }
      ]
    },
    toeicTips: [
      "Mẹo đóng khung `[Mạo từ/Sở hữu ... Giới từ]`: Trong Part 5, thấy `a / an / the / this / our / their` đứng ngay trước chỗ trống và ngay sau chỗ trống là một Giới từ (`of, in, for, to, with`) hoặc Động từ → Điền **DANH TỪ** trong 3 giây không cần dịch!",
      "Mẹo 'Danh từ đếm được số ít không bao giờ đi một mình': Khi phân vân giữa 2 danh từ trong 4 đáp án (ví dụ `(A) technician` chỉ người đếm được số ít vs `(B) technology` hoặc `(C) technicians` số nhiều), nếu trước chỗ trống KHÔNG CÓ `a/an/the/my/each/every`, hãy loại ngay lập tức đáp án Danh từ đếm được số ít (`technician`)!",
      "Mẹo nhớ 6 Danh từ đuôi `-al` hay bẫy thành Tính từ nhất đề TOEIC bằng câu: '**Đề xuất** (`proposal`) cần **Phê duyệt** (`approval`) để **Gia hạn** (`renewal`) trước khi **Đến nơi** (`arrival`) và **Rút tiền** (`withdrawal`) **Thanh lý** (`disposal**)'."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh (chú ý vị trí danh từ không đếm được và mạo từ):",
        chunks: [
          "new monitoring software",
          "the production server.",
          "The engineering team",
          "on",
          "installed"
        ],
        answer: "The engineering team installed new monitoring software on the production server.",
        vi: "Đội ngũ kỹ thuật đã cài đặt phần mềm giám sát mới lên máy chủ production."
      },
      fillBlank: {
        sentence: "Before deploying changes to production, developers must obtain written _____ from the release manager. (Từ gốc: approve)",
        answer: "approval",
        accepted: ["approval"],
        hint: "Danh từ của 'approve' có hậu tố đặc biệt '-al' (không đếm được).",
        explain: "Sau ngoại động từ `obtain` và tính từ phân từ `written`, trước giới từ `from`, ta cần một Danh từ làm tân ngữ. Danh từ của động từ `approve` là `approval` (sự phê duyệt — một trong những danh từ đuôi `-al` xuất hiện nhiều nhất trong TOEIC)."
      }
    },
    quiz: [
      {
        q: "The system administrator granted the external auditor temporary _____ to the encrypted transaction logs.",
        options: [
          "A. accessible",
          "B. accessibly",
          "C. access",
          "D. accessed"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. access**. Phân tích câu theo Mẫu S-V-O1-O2: `granted` (trao/cấp) + O1 (`the external auditor` - cho kiểm toán viên bên ngoài) + O2 (`temporary _____` - cái gì đó tạm thời) + `to...`. Đứng sau tính từ `temporary` và trước giới từ `to` bắt buộc phải là một Danh từ làm tân ngữ thứ hai. `access` vừa là động từ vừa là danh từ không đếm được (quyền truy cập, đi với giới từ `to`). Loại A (tính từ), B (trạng từ), D (V-ed)."
      },
      {
        q: "Following the security audit, the CTO purchased _____ to upgrade all outdated firewalls in the Tokyo office.",
        options: [
          "A. an equipment",
          "B. several equipments",
          "C. new equipment",
          "D. a few equipment"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. new equipment**. `equipment` (trang thiết bị) là Danh từ KHÔNG ĐẾM ĐƯỢC kinh điển nhất trong TOEIC! Vì không đếm được nên: cấm đi với mạo từ `an` (loại A), cấm thêm `-s` và cấm đi với `several` (loại B), cấm đi với `a few` vốn chỉ dành cho danh từ số nhiều đếm được (loại D). Chỉ có `new equipment` (tính từ + danh từ không đếm được) là chuẩn ngữ pháp 100%."
      },
      {
        q: "All contract _____ proposals must be submitted to the legal department at least two weeks in advance.",
        options: [
          "A. renew",
          "B. renewed",
          "C. renewable",
          "D. renewal"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. renewal**. Cụm danh từ ghép cố định cực kỳ phổ biến trong TOEIC là `contract renewal proposals` (các bản đề xuất gia hạn hợp đồng), trong đó danh từ `renewal` (sự gia hạn) đóng vai trò danh từ phụ phân loại cho `proposals`. Loại A (động từ), loại B (`renewed` mang nghĩa 'đã được làm mới'), loại C (`renewable` chỉ dùng cho năng lượng tái tạo `renewable energy`)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G1_3: HỆ THỐNG ĐẠI TỪ (PRONOUNS) — BIẾN THAM CHIẾU KHÔNG BAO GIỜ NULL
   * ========================================================================== */
  G1_3: {
    duration: "35 phút",
    toeicTarget: "Nền tảng 0 → 450+ (TOEIC Part 5: Đủ 5 cột biến thể Đại từ & one/another/the other)",
    javaContext: "Tránh câu văn mơ hồ tham chiếu nhầm đối tượng (Ambiguous Reference) khi viết Javadoc / ADR, dùng chuẩn `itself / themselves` khi mô tả cơ chế auto-scaling, self-healing, retry.",
    teacherIntro: "Chào anh em! Khi review code Java, chắc hẳn anh em rất ghét việc copy-paste lặp đi lặp lại một chuỗi khởi tạo dài ngoằng thay vì gán nó vào một biến tham chiếu gọn gàng, hoặc dùng từ khóa `this` để trỏ về chính instance hiện tại. Trong tiếng Anh, **Đại từ (Pronouns)** chính là các **biến tham chiếu (Reference Variables)** giúp câu văn không bị lặp từ thô kệch! Tuy nhiên, tiếng Anh kiểm tra kiểu tĩnh (Strong Typing) cho đại từ rất gắt: cùng một đối tượng 'chúng tôi' nhưng đứng làm Chủ ngữ phải viết `we`, làm Tân ngữ phải đổi thành `us`, đứng trước Danh từ là `our`, đứng độc lập thay cả cụm sở hữu là `ours`, và tự tác động lên chính mình là `ourselves`. Trong đề thi TOEIC Part 5, chắc chắn 100% đề nào cũng có ít nhất 2–3 câu cho 4 đáp án kiểu `(A) they (B) them (C) their (D) themselves` — đây là câu tặng điểm trong 5 giây nếu anh em nắm rõ bảng ánh xạ hôm nay!",
    javaAnalogy: {
      title: "5 Cột Đại Từ = Reference Scope & Từ Khóa `this` Trong OOP",
      body: "Hãy coi một thực thể `Service` trong bộ nhớ Heap được tham chiếu qua 5 giao diện (Interfaces) khác nhau tùy vị trí đứng: **Subject Pronoun (`I, we, they, it`)** là biến `caller` gọi hàm (`caller.execute()`); **Object Pronoun (`me, us, them, it`)** là biến truyền vào tham số `method(target)`; **Possessive Adjective (`my, our, their, its`)** giống toán tử chấm truy cập thuộc tính bắt buộc phải có tên field theo sau (`service.config` — viết `service.` bỏ trống field là lỗi cú pháp ngay!); **Possessive Pronoun (`mine, ours, theirs`)** là phương thức getter trả về trọn gói giá trị (`getMine()`), đứng độc lập không cần field theo sau; còn **Reflexive Pronoun (`myself, itself, themselves`)** chính là con trỏ **`this`** khi một object tự gọi hàm lên chính bản thân nó (`node.register(this)` = `The node registers itself`)!"
    },
    objectives: [
      "Phân biệt tuyệt đối 5 cột của bảng Đại từ nhân xưng: Chủ ngữ (`they`) - Tân ngữ (`them`) - Tính từ sở hữu (`their + Noun`) - Đại từ sở hữu (`theirs` đứng một mình) - Đại từ phản thân (`themselves`).",
      "Làm chủ 2 cách dùng ăn điểm của Đại từ phản thân (`-self / -selves`): Tân ngữ tự tác động (S = O) và Nhấn mạnh 'tự tay/đích thân' (`by oneself = on one's own = alone`).",
      "Xử lý gọn gàng nhóm Đại từ chỉ định & bất định hay gây nhầm lẫn nhất trong TOEIC & Technical Docs: `its` vs `it's`, `that/those of` trong câu so sánh, và `another / the other / others`."
    ],
    formulaCards: [
      {
        label: "Tính Từ Sở Hữu vs Đại Từ Sở Hữu",
        formula: "my / our / their / his / her / its + NOUN  |  mine / ours / theirs / his / hers (KHÔNG có Noun sau)",
        note: "Công thức rút gọn: `Possessive Pronoun = Possessive Adj + Noun đã nhắc trước đó`. Ví dụ: `Your build took 10 minutes, while **ours** (= our build) took only 2 minutes`."
      },
      {
        label: "Đại Từ Phản Thân (-self / -selves)",
        formula: "1) S + V + -self (khi S và O cùng là 1 đối tượng)  |  2) Câu đủ S-V-O + (by) -self (nhấn mạnh)",
        note: "Cụm vàng TOEIC bắt buộc thuộc lòng: `by myself / by themselves` = `on my own / on their own` = tự lực một mình, không cần ai giúp!"
      },
      {
        label: "Bẫy So Sánh Dùng `that of` / `those of`",
        formula: "that of + N (thay cho Danh từ SỐ ÍT/KĐĐ phía trước)  |  those of + N (thay cho Danh từ SỐ NHIỀU)",
        note: "Ví dụ chuẩn Senior: `The throughput of Java 21 is higher than **that of** Java 8` (`that` = `the throughput` - số ít). Cấm so sánh khập khiễng `higher than Java 8`!"
      },
      {
        label: "Bộ Định Tuyến `another` vs `other` vs `the other`",
        formula: "another + N_số_ít (1 cái khác bất kỳ) | other + N_số_nhiều | the other (cái còn lại cuối cùng)",
        note: "Tư duy mảng 2 phần tử `[nodeA, nodeB]`: cái đầu là `one`, cái còn lại xác định 100% là `the other`! Nếu retry sang 1 node bất kỳ trong cụm N node → `another node`."
      }
    ],
    sections: [
      {
        heading: "1. Bảng Ánh Xạ 5 Cột Đại Từ & Cách Chốt Đáp Án Trong 3 Giây",
        paragraphs: [
          "Điểm mấu chốt để không bao giờ sai câu hỏi Đại từ trong TOEIC Part 5 là: **Chỉ nhìn vị trí ngữ pháp xung quanh chỗ trống và danh từ mà nó đại diện ( số ít hay số nhiều, người hay vật)**. Tuyệt đối không dịch tiếng Việt cảm tính vì cả `we, us, our, ours` tiếng Việt đều hay dịch chung là 'chúng tôi'!",
          "Hãy ghi nhớ 7 dòng ánh xạ chuẩn: `I - me - my - mine - myself` | `you - you - your - yours - yourself/yourselves` | `he - him - his - his - himself` | `she - her - her - hers - herself` | `it - it - its - (không dùng) - itself` | `we - us - our - ours - ourselves` | `they - them - their - theirs - themselves`."
        ],
        bullets: [
          "Đứng ĐẦU mệnh đề, ngay TRƯỚC Động từ chia thì → Chọn cột 1 **Chủ ngữ** (`I, he, she, it, we, they`).",
          "Đứng ngay SAU Ngoại động từ hoặc SAU Giới từ (`for, with, to, between`) mà Chủ ngữ là đối tượng KHÁC → Chọn cột 2 **Tân ngữ** (`me, him, her, it, us, them`). Lưu ý: `between you and **me**` (sau giới từ `between` phải dùng `me`, không dùng `I`!).",
          "Ngay SAU chỗ trống CÓ một Danh từ (hoặc `Adj + Noun`) → 99% chọn cột 3 **Tính từ sở hữu** (`my, your, his, her, its, our, their`).",
          "Ngay SAU chỗ trống KHÔNG có Danh từ (gặp dấu chấm, dấu phẩy, động từ hoặc giới từ) nhưng nghĩa cần 'cái của...' → Chọn cột 4 **Đại từ sở hữu** (`mine, yours, his, hers, ours, theirs`). Chú ý `his` vừa là cột 3 vừa là cột 4!",
          "SIÊU BẪY CHÍNH TẢ `its` vs `it's`: **`its`** (không dấu nháy) là Tính từ sở hữu 'của nó' (`The pod lost **its** network connection`); còn **`it's`** (có dấu nháy) là viết tắt của `it is` hoặc `it has`! Đi thi TOEIC đứng trước danh từ thì `it's` luôn luôn SAI."
        ]
      },
      {
        heading: "2. Đại Từ Phản Thân (`-self` / `-selves`) — Vũ Khí Tủ Của Cả TOEIC Lẫn Kiến Trúc Tự Phục Hồi",
        paragraphs: [
          "Rất nhiều thí sinh thấy đại từ phản thân `himself / themselves / itself` trông 'dài dài nguy hiểm' nên ngại chọn hoặc chọn bừa làm Chủ ngữ (như `John and myself deployed the code` — SAI ngữ pháp chuẩn, Đại từ phản thân KHÔNG BAO GIỜ đứng một mình làm Chủ ngữ!).",
          "Ngược lại, Đại từ phản thân chỉ xuất hiện ở 2 kịch bản cực kỳ rõ ràng dưới đây."
        ],
        bullets: [
          "Kịch bản 1 — Chủ ngữ tự tác động lên chính nó (`S == O`): Khi người/vật thực hiện hành động và đối tượng nhận hành động là MỘT. Ví dụ trong Microservices: `Each worker instance registers **itself** with Eureka` (worker tự đăng ký chính nó; nếu viết `registers it` thì `it` sẽ bị hiểu sang một cái gì khác ngoài worker!).",
          "Kịch bản 2 — Nhấn mạnh 'chính tay / đích thân / tự động hoàn toàn' khi câu ĐÃ ĐỦ thành phần S-V-O: Bạn che chỗ trống đi mà câu vẫn hoàn chỉnh 100% ngữ pháp! Ví dụ: `The CTO reviewed the security patch **himself**` (hoặc `The CTO **himself** reviewed the security patch` — đích thân CTO duyệt).",
          "Các cụm cố định ăn điểm lập tức trong TOEIC: `by oneself` = `on one's own` (tự mình không cần trợ giúp), `familiarize oneself with sth` (tự làm quen với hệ thống/quy trình mới), `avail oneself of sth` (tận dụng quyền lợi), `help yourself to refreshments` (cứ tự nhiên dùng đồ ăn nhẹ)."
        ]
      },
      {
        heading: "3. Phân Biệt Rạch Ròi `another`, `other`, `others`, `the other`, `the others` & `that/those`",
        paragraphs: [
          "Khi đọc code logic rẽ nhánh hoặc mô tả failover giữa các server trong cluster, dùng sai `another` với `the other` sẽ làm sai lệch hoàn toàn kiến trúc hệ thống (từ cluster N-node biến thành cluster chỉ có đúng 2 node!).",
          "Mẹo nhớ bằng Tư duy Tập hợp (Set Theory) cho Dev: Chữ **`an`** trong `an + other = another` báo hiệu **số ít, chưa xác định (1 cái nữa bất kỳ)**; chữ **`the`** trong `the other(s)` báo hiệu **phần bù xác định cuối cùng còn sót lại trong tập hữu hạn**; chữ **`-s`** cuối `others` báo hiệu **Đại từ số nhiều (đã nuốt luôn danh từ bên trong, cấm thêm danh từ sau nó)**!"
        ],
        bullets: [
          "`another` + Danh từ đếm được SỐ ÍT (hoặc `another + số đếm + N số nhiều` mang nghĩa 'thêm ... nữa'): `retry on **another** node` (1 node khác bất kỳ), `need **another** two sprints` (thêm 2 sprint nữa).",
          "`other` + Danh từ SỐ NHIỀU (hoặc KĐĐ): `integrate with **other** payment gateways` (`other` ở đây là tính từ hạn định nên không có `-s`, bắt buộc có danh từ theo sau).",
          "`others` (đứng ĐỘC LẬP, = `other + N_số_nhiều`): `Some threads are blocked, while **others** (= other threads) are idle`.",
          "`the other` (1 cái còn lại duy nhất trong tổng 2 cái, hoặc + N xác định còn lại): `We maintain two active regions: one in Singapore and **the other** in Tokyo`.",
          "`that of` / `those of` trong câu so sánh chuẩn kỹ thuật: Để tránh lặp danh từ khi so sánh thuộc tính giữa 2 hệ thống, dùng `that` thay cho danh từ số ít/không đếm được (`the latency`, `the memory usage`) và `those` thay cho danh từ số nhiều (`the features`, `the benchmarks`)."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "When a Kubernetes pod crashes, the ReplicaSet automatically replaces **it** and registers **its** new IP address.",
        vi: "Khi một pod Kubernetes bị sập, ReplicaSet sẽ tự động thay thế nó và đăng ký địa chỉ IP mới của nó.",
        note: "`it` làm Tân ngữ sau `replaces`; `its` (không dấu nháy!) là Tính từ sở hữu đứng trước cụm danh từ `new IP address`."
      },
      {
        tag: "Senior Java",
        en: "Every microservice instance registers **itself** with the service registry upon startup.",
        vi: "Mỗi thực thể microservice tự đăng ký chính nó với kho quản lý dịch vụ ngay khi khởi động.",
        note: "Chủ ngữ `Every microservice instance` và Tân ngữ là cùng một thực thể (`S == O`) → bắt buộc dùng đại từ phản thân `itself`."
      },
      {
        tag: "Code Review",
        en: "Your SQL query scans three million rows, whereas **mine** uses a covering index and returns in five milliseconds.",
        vi: "Câu truy vấn SQL của bạn quét ba triệu dòng, trong khi câu của tôi dùng covering index và trả kết quả trong năm mili-giây.",
        note: "`mine` (= `my SQL query`) là Đại từ sở hữu đứng độc lập làm chủ ngữ mệnh đề thứ hai, giúp câu gọn gàng không lặp từ."
      },
      {
        tag: "TOEIC Part 5",
        en: "New hires must familiarize **themselves** with the company's security policies during onboarding.",
        vi: "Nhân viên mới phải tự làm quen với các chính sách bảo mật của công ty trong giai đoạn hội nhập.",
        note: "Cấu trúc tủ TOEIC: `familiarize oneself with sth`. Chủ ngữ `New hires` (số nhiều) → dùng `themselves`."
      },
      {
        tag: "Daily Standup",
        en: "I resolved the SSL certificate issue **by myself** last night without waking up the DevOps team.",
        vi: "Tối qua tôi đã tự mình xử lý xong sự cố chứng chỉ SSL mà không cần đánh thức đội DevOps.",
        note: "`by myself` (= `on my own`) đặt cuối câu đã đủ S-V-O để nhấn mạnh việc tự lực hoàn thành một mình."
      },
      {
        tag: "TOEIC Part 5",
        en: "The Principal Architect **herself** wrote the core serialization engine to guarantee zero-copy performance.",
        vi: "Đích thân nữ Kiến trúc sư trưởng đã viết bộ lõi tuần tự hóa để đảm bảo hiệu năng zero-copy.",
        note: "Che chữ `herself` đi, câu `The Principal Architect wrote the core...` vẫn đủ S-V-O → vị trí nhấn mạnh ngay sau S dùng đại từ phản thân."
      },
      {
        tag: "Senior Java",
        en: "The memory footprint of GraalVM native images is significantly smaller than **that** of traditional JVM deployments.",
        vi: "Mức tiêu thụ bộ nhớ của GraalVM native image nhỏ hơn đáng kể so với của các bản triển khai JVM truyền thống.",
        note: "`that` thay thế cho danh từ số ít `The memory footprint` để phép so sánh đồng cấp chuẩn xác."
      },
      {
        tag: "TOEIC Part 7",
        en: "The security features in Enterprise Edition are far more comprehensive than **those** included in the Community plan.",
        vi: "Các tính năng bảo mật trong bản Enterprise toàn diện hơn nhiều so với những tính năng có trong gói Community.",
        note: "Vì danh từ gốc cần thay thế là `The security features` (số nhiều) nên bắt buộc dùng `those` (không dùng `that`)."
      },
      {
        tag: "Senior Java",
        en: "Our cluster has **two** database nodes: **one** acts as the primary writer, and **the other** serves read replicas.",
        vi: "Cụm máy chủ của chúng tôi có hai node cơ sở dữ liệu: một đóng vai trò ghi chính, và node còn lại phục vụ các bản đọc.",
        note: "Tập hợp chốt cứng 2 phần tử (`two` nodes) → `one ... and the other` (cái còn lại xác định duy nhất)."
      },
      {
        tag: "Client Email",
        en: "If the primary payment gateway times out, our router seamlessly fails over to **another** provider.",
        vi: "Nếu cổng thanh toán chính bị quá thời gian chờ, bộ định tuyến của chúng tôi sẽ chuyển hướng mượt mà sang một nhà cung cấp khác.",
        note: "`another + danh từ số ít` (`provider`): một nhà cung cấp khác bất kỳ trong danh sách dự phòng."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Some** developers prefer IntelliJ shortcuts, while **others** customize Vim keybindings for faster navigation.",
        vi: "Một số lập trình viên thích phím tắt IntelliJ, trong khi những người khác tùy biến phím Vim để di chuyển nhanh hơn.",
        note: "Cặp cấu trúc song hành kinh điển: `Some + N_số_nhiều ... while others ...` (`others` = `other developers`, không có danh từ theo sau)."
      },
      {
        tag: "Client Email",
        en: "Please keep the API credentials strictly confidential between **you** and **me**.",
        vi: "Vui lòng giữ thông tin xác thực API tuyệt mật chỉ giữa bạn và tôi.",
        note: "Sau giới từ `between`, cả hai đại từ nối bằng `and` đều phải ở cột Tân ngữ (`you and me`, tuyệt đối không viết `between you and I`!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "We will need **another** three days to complete the end-to-end regression testing.",
        vi: "Chúng tôi sẽ cần thêm ba ngày nữa để hoàn tất việc kiểm thử hồi quy toàn trình.",
        note: "Ngoại lệ cực hay của `another`: `another + Số đếm + Danh từ số nhiều` = 'thêm (bao nhiêu thời gian/tiền/đơn vị) nữa' (= `three more days`)."
      },
      {
        tag: "Code Review",
        en: "The QA team shared **their** test cases with **us**, and **we** integrated **them** into **our** CI pipeline.",
        vi: "Đội QA đã chia sẻ các kịch bản kiểm thử của họ với chúng tôi, và chúng tôi đã tích hợp chúng vào luồng CI của mình.",
        note: "Câu tổng hợp thực chiến phân biệt rạch ròi 4 vị trí: `their + N`, `with us` (sau giới từ), `we` (chủ ngữ), `them` (tân ngữ), `our + N`."
      },
      {
        tag: "TOEIC Part 7",
        en: "Contractors must return **their** security badges upon completing **their** assignments, whereas full-time staff retain **theirs**.",
        vi: "Nhà thầu phụ phải trả lại thẻ an ninh của họ ngay khi hoàn thành công việc, trong khi nhân viên chính thức được giữ thẻ của mình.",
        note: "Đầu câu có danh từ theo sau dùng `their`; cuối câu đứng một mình thay cho `their security badges` dùng `theirs`!"
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "The Kafka consumer lost it's connection to the broker.",
          fix: "The Kafka consumer lost **its** connection to the broker.",
          why: "`it's` là viết tắt của `it is / it has`. Để chỉ quyền sở hữu 'của nó' đứng trước danh từ `connection`, bắt buộc viết liền `its` không có dấu nháy đơn!"
        },
        {
          bug: "Minh and myself will investigate the production memory leak.",
          fix: "Minh and **I** will investigate the production memory leak.",
          why: "Đại từ phản thân `myself` KHÔNG ĐƯỢC thay thế cho đại từ chủ ngữ `I`. Mẹo kiểm tra: bỏ `Minh and` đi, bạn sẽ thấy không ai nói `Myself will investigate...`, mà phải là `I will investigate...`!"
        },
        {
          bug: "The latency of gRPC is much lower than REST API.",
          fix: "The latency of gRPC is much lower than **that of** a REST API.",
          why: "Lỗi so sánh khập khiễng kiểu dữ liệu (Type Mismatch): bạn đang so sánh `int latency` (độ trễ) với `Object REST_API`! Phải dùng `that of` (= `the latency of`) để cùng so sánh độ trễ với độ trễ."
        },
        {
          bug: "Could you test another endpoints in the user controller?",
          fix: "Could you test **other** endpoints in the user controller?",
          why: "`another` bản chất là `an + other` nên chỉ đi với danh từ đếm được SỐ ÍT (`another endpoint`). Đi với danh từ số nhiều `endpoints` phải dùng `other`!"
        },
        {
          bug: "Our team finished the migration on time, and their is still in progress.",
          fix: "Our team finished the migration on time, and **theirs** is still in progress.",
          why: "`their` là tính từ sở hữu nên không thể đứng trơ trọi làm chủ ngữ trước `is`. Phải dùng Đại từ sở hữu `theirs` (= `their migration`)."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây xử đẹp câu 4 biến thể `(A) they (B) them (C) their (D) themselves`: Nhìn NGAY SAU chỗ trống! Có Danh từ đứng sát sau → khoanh `their` (Tính từ sở hữu). Câu đã đủ S-V-O hoàn chỉnh hoặc trước chỗ trống có giới từ `by` → khoanh `themselves` (Đại từ phản thân).",
      "Mẹo bắt bài `that of` / `those of` trong câu có `than`: Thấy cấu trúc `The [Danh từ A] of X is better/higher/lower than _____ of Y`, hãy nhìn `[Danh từ A]` ở đầu câu: nếu số ít/không đếm được → chọn `that`; nếu có `-s` số nhiều → chọn `those`!",
      "Mẹo phân biệt `another` vs `other` vs `others`: Sau chỗ trống là Danh từ số ít → `another`; sau chỗ trống là Danh từ số nhiều → `other`; sau chỗ trống KHÔNG CÓ danh từ (gặp động từ hoặc dấu câu) → `others`!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh (chú ý vị trí đại từ phản thân):",
        chunks: [
          "whenever memory usage",
          "itself",
          "exceeds the threshold.",
          "The backend service",
          "automatically restarts"
        ],
        answer: "The backend service automatically restarts itself whenever memory usage exceeds the threshold.",
        vi: "Dịch vụ backend tự động khởi động lại chính nó mỗi khi mức sử dụng bộ nhớ vượt ngưỡng cho phép."
      },
      fillBlank: {
        sentence: "Our microservice processes messages asynchronously, while _____ still relies on blocking HTTP calls. (Gợi ý: dịch vụ của họ — đại từ sở hữu đứng độc lập)",
        answer: "theirs",
        accepted: ["theirs"],
        hint: "Đại từ sở hữu ngôi 'they' có đuôi '-s' đứng độc lập làm chủ ngữ (= their microservice).",
        explain: "Sau liên từ `while` và ngay trước trạng từ + động từ `still relies`, chỗ trống cần làm Chủ ngữ mang nghĩa 'microservice của họ' mà KHÔNG có danh từ theo sau → bắt buộc dùng Đại từ sở hữu `theirs` (không dùng `their`)."
      }
    },
    quiz: [
      {
        q: "Although the junior developer was offered assistance from senior teammates, she resolved the deadlock issue entirely by _____.",
        options: [
          "A. she",
          "B. her",
          "C. hers",
          "D. herself"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. herself**. Mệnh đề chính `she resolved the deadlock issue` đã đầy đủ S-V-O, cộng thêm dấu hiệu vàng chói lọi là giới từ **`by`** đứng ngay trước chỗ trống! Cấu trúc cố định `by oneself` (`by herself` = tự lực một mình cô ấy làm, không nhờ ai giúp) là đáp án ăn điểm trong 2 giây. Loại A (chủ ngữ không đứng sau giới từ), B (`by her` không mang nghĩa 'tự một mình'), C (đại từ sở hữu)."
      },
      {
        q: "The response time of our upgraded GraphQL server is nearly forty percent faster than _____ of the legacy SOAP endpoint.",
        options: [
          "A. it",
          "B. that",
          "C. those",
          "D. them"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. that**. Trong cấu trúc so sánh đồng cấp `The [Noun] of X ... than _____ of Y`, ta cần một đại từ chỉ định thay thế cho cụm danh từ `The response time` (số ít) ở đầu câu để tránh lặp từ. Quy tắc chuẩn ngữ pháp TOEIC & văn viết kỹ thuật: dùng **`that`** cho danh từ số ít/không đếm được, và `those` cho danh từ số nhiều (loại C). Lưu ý không dùng `it` hay `them` trước cụm định danh `of the...` (loại A, D)."
      },
      {
        q: "Before accessing production clusters, every DevOps engineer must store _____ SSH private keys inside an encrypted hardware vault.",
        options: [
          "A. their",
          "B. theirs",
          "C. them",
          "D. themselves"
        ],
        answer: 0,
        explain: "Đáp án đúng là **A. their**. Nhìn ngay sau chỗ trống là cụm danh từ `SSH private keys` → vị trí đứng trước Danh từ để chỉ sở hữu bắt buộc phải là **Tính từ sở hữu** (`their` — tiếng Anh hiện đại và ETS TOEIC dùng `their` làm tính từ sở hữu trung tính giới tính cho `every/each engineer`, thay cho `his or her`). Loại B (`theirs` không bao giờ có danh từ theo sau), loại C (tân ngữ), loại D (đại từ phản thân)."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G1_4: TÍNH TỪ VS TRẠNG TỪ (ADJ VS ADV) — MỎ ĐIỂM SỐ 1 TOEIC PART 5
   * ========================================================================== */
  G1_4: {
    duration: "40 phút",
    toeicTarget: "Nền tảng 0 → 500+ (Chiếm tới 15–20% tổng số câu ngữ pháp TOEIC Part 5!)",
    javaContext: "Viết Release Notes, Benchmark Report & PR Review sắc bén với các cặp Adv + Adj / Adv + Verb (`highly scalable`, `seamlessly integrated`, `remain thread-safe`).",
    teacherIntro: "Chào anh em! Nếu có một chuyên đề ngữ pháp nào xứng đáng được gọi là 'Cây ATM rút điểm' trong phòng thi TOEIC Reading thì đó chắc chắn là **Tính từ (Adjective) vs Trạng từ (Adverb)**. Trung bình mỗi đề Part 5 (30 câu) có từ 5 đến 6 câu chỉ hỏi xoay quanh việc chọn gốc `reliable` hay thêm đuôi `-ly` thành `reliably` — mỗi câu giải mất đúng **3 đến 5 giây** nếu anh em thuộc vị trí đứng, tiết kiệm hàng đống thời gian cho bài đọc dài Part 7! Trong công việc lập trình cũng vậy, thay vì lúc nào cũng chỉ biết lặp đi lặp lại chữ `very good` hay `run fast`, nắm được bộ quy tắc phối hợp Trạng từ + Tính từ (`exceptionally resilient`, `strictly immutable`) sẽ nâng văn phong viết Design Doc và CV của anh em lên đẳng cấp Senior quốc tế ngay lập tức.",
    javaAnalogy: {
      title: "Tính Từ vs Trạng Từ = Field Metadata Trên `Object` vs `@Around` Interceptor Trên `Method`",
      body: "Hãy khắc cốt ghi tâm quy tắc phân quyền rõ như trình biên dịch Java: **Tính từ (Adjective)** chỉ được phép gắn trực tiếp lên **Danh từ / Object** để mô tả thuộc tính nội tại của object đó (giống field `server.isHealthy = true`, hoặc `new ScalableCluster()`). Ngược lại, **Trạng từ (Adverb - thường có đuôi `-ly`)** giống như một **AOP Annotation / Decorator (`@Async`, `@Retryable`)** chuyên dùng để bọc lấy **Động từ thường (Method)**, bọc lấy **Tính từ khác**, hoặc bọc cả **Mệnh đề** nhằm mô tả hành động chạy *như thế nào / mức độ bao nhiêu*! Vì vậy: Bổ nghĩa cho Object (`Noun`) → gọi **Adj**; bổ nghĩa cho Method thực thi (`Action Verb`) hoặc độ mạnh của `Adj`/`V-ed`/`V-ing` → gọi **Adv (-ly)**!"
    },
    objectives: [
      "Chốt đáp án Tính từ hay Trạng từ trong 3 giây nhờ nhận diện chính xác từ loại đứng trước và sau chỗ trống mà không cần dịch hết câu.",
      "Thuộc nằm lòng hệ thống Động từ nối (Linking Verbs: `be, become, remain, seem, appear, stay, look, prove`) — nơi BẮT BUỘC điền Tính từ chứ không điền Trạng từ!",
      "Né sạch 100% các cặp từ bẫy kinh điển của ETS TOEIC: Tính từ có đuôi `-ly` (`timely, costly`) và cặp Trạng từ đổi nghĩa hoàn toàn khi thêm `-ly` (`hard` vs `hardly`, `late` vs `lately`, `high` vs `highly`, `near` vs `nearly`)."
    ],
    formulaCards: [
      {
        label: "3 Vị Trí Bất Bất Dịch Của Tính Từ (Adj)",
        formula: "1) [a/the/my] + ADJ + Noun  |  2) Linking Verb + ADJ  |  3) make/keep/find/consider + O + ADJ",
        note: "Hậu tố nhận diện Tính từ: `-able/-ible` (`scalable`), `-ive` (`responsive`), `-ous` (`synchronous`), `-al` (`transactional`), `-ic` (`atomic`), `-ful/-less` (`stateless`), `-ent/-ant` (`consistent, redundant`)."
      },
      {
        label: "4 Vị Trí Vàng Của Trạng Từ (Adv = Adj + ly)",
        formula: "1) S + ADV + V_thường  |  2) be + ADV + V3/ed (Bị động)  |  3) be/a + ADV + Adj  |  4) ADV, S + V",
        note: "Vị trí số 2 & 3 xuất hiện dày đặc nhất trong TOEIC: Giữa `be` và `V3/ed` hoặc giữa `a/the/be` và `Adj` → 100% điền **ADV (-ly)**! Ví dụ: `is **fully** automated`, `an **extremely** fast query`."
      },
      {
        label: "Hệ Thống Động Từ Nối (Linking Verbs + ADJ)",
        formula: "be / become / remain / stay / seem / appear / look / sound / feel / prove + (Adv) + ADJ",
        note: "Động từ nối đóng vai trò dấu `=` gán tính chất cho Chủ ngữ nên theo sau phải là Tính từ (`remain **compatible**`, `proved **effective**`). Nếu có 2 chỗ trống hoặc đã có sẵn Adj thì trước Adj mới chèn Adv (`remain **fully** compatible`)."
      },
      {
        label: "Siêu Bẫy Đổi Nghĩa Khi Thêm `-ly`",
        formula: "hard (chăm/khó) ≠ hardly (hầu như KHÔNG!)  |  late (muộn) ≠ lately (gần đây)  |  high (cao) ≠ highly (rất)",
        note: "Thêm nữa: `near` (gần - vị trí) ≠ `nearly` (gần như/suýt = `almost`); `short` (ngắn) ≠ `shortly` (sớm thôi = `soon`: `shortly after deployment`)."
      }
    ],
    sections: [
      {
        heading: "1. Quy Trình 'Quét Biên Trái - Phải' Chọn Nhanh Adj hay Adv Trong 3 Giây",
        paragraphs: [
          "Khi nhìn 4 đáp án chỉ khác nhau phần đuôi như `(A) consistent (B) consistently (C) consistency (D) consist`, bạn đã biết ngay đây là câu hỏi Từ loại (Word Form). Bí kíp của cao thủ TOEIC 800+ là nhìn sát sạt bên trái và bên phải chỗ trống để khớp khuôn:",
          "Cẩn thận nhất là trường hợp trước chỗ trống là `a/an/the` nhưng sau chỗ trống ĐÃ CÓ `[Tính từ] + [Danh từ]`! Rất nhiều bạn vội vàng thấy `a` liền điền Tính từ, quên mất đã có Tính từ đứng sẵn rồi — bổ nghĩa cho Tính từ đó phải là **Trạng từ (-ly)**!"
        ],
        bullets: [
          "Khuôn 1: `[a/an/the/my/his]` + `_____` + `[Noun]` → Điền **ADJ** (`a **reliable** server`).",
          "Khuôn 2: `[a/an/the/my/his]` + `_____` + `[Adj]` + `[Noun]` → Điền **ADV** (`a **highly** reliable server`).",
          "Khuôn 3: `[be / have / has / modal]` + `_____` + `[V3/ed hoặc V-ing]` → Điền **ADV** chen giữa trợ động từ và động từ chính (`has **significantly** improved`, `must be **carefully** validated`).",
          "Khuôn 4: Câu ĐÃ ĐỦ khung S-V-O hoàn chỉnh, chỗ trống nằm cuối câu hoặc đầu câu trước dấu phẩy → Điền **ADV** bổ nghĩa cho động từ thường hoặc cả câu (`The pipeline deployed the artifact **automatically**`).",
          "Khuôn 5: Đứng sau Đại từ bất định `something / anything / nothing / everything` → Tính từ đứng **SAU** đại từ (`nothing **unusual** in the logs`, `something **wrong** with the SSL cert`)."
        ]
      },
      {
        heading: "2. Phân Biệt Động Từ Thường (+ Adv) vs Động Từ Nối Linking Verbs (+ Adj)",
        paragraphs: [
          "Đây là câu phân loại thí sinh ở mốc 500–650 điểm: Tại sao viết `The server runs **smoothly**` (dùng Adv) nhưng lại viết `The server remains **stable**` (dùng Adj)? Vì `runs` là Động từ hành động (chạy như thế nào? → chạy mượt mà), còn `remains` là Động từ nối mang nghĩa 'duy trì ở trạng thái gì' (bản chất y hệt động từ `is`!).",
          "Một số động từ vừa có thể là Động từ nối (không có tân ngữ → + Adj), vừa là Ngoại động từ hành động (có tân ngữ → + Adv). Điển hình nhất là `appear` và `look`!"
        ],
        bullets: [
          "Nhóm 'Trở nên / Duy trì trạng thái': `become` (trở nên), `get / grow / turn` (chuyển sang), `remain / stay / keep` (duy trì vẫn còn) → + **ADJ** (`remained **unresponsive**`, `became **obsolete**`).",
          "Nhóm 'Có vẻ / Tỏ ra': `seem` (dường như), `appear` (có vẻ như), `prove` (tỏ ra/chứng tỏ là) → + **ADJ** (`The hotfix proved **successful**`, `The metrics appear **normal**`).",
          "Nhóm Giác quan: `look` (trông có vẻ), `sound` (nghe có vẻ), `feel` (cảm thấy) → + **ADJ** (`Your system design looks **solid**!`).",
          "So sánh bẫy kép với `look`: `The architecture looks **clean**` (`looks` là động từ nối → + Adj `clean`) VS `The engineer looked **closely** at the heap dump` (`looked at` là động từ hành động 'nhìn kỹ vào' → + Adv `closely`!)."
        ]
      },
      {
        heading: "3. Những Kẻ Giả Dạng Tinh Vi: Tính Từ Đuôi `-ly` & Cặp Trạng Từ Bẫy Nghĩa",
        paragraphs: [
          "Công thức tổng quát là `Adj + ly = Adv` (`quick → quickly`, `safe → safely`), NHƯNG nếu gốc từ ban đầu là **Danh từ + ly** thì kết quả tạo ra lại là **TÍNH TỪ (Adjective)** chứ không phải Trạng từ! ETS TOEIC cực kỳ thích ra các từ này để bẫy thí sinh máy móc.",
          "Song song đó, có 5 từ mà bản thân dạng ngắn (không `-ly`) VỪA LÀ TÍNH TỪ VỪA LÀ TRẠNG TỪ, còn khi gắn `-ly` vào thì biến thành một từ mang nghĩa khác hẳn!"
        ],
        bullets: [
          "Top TÍNH TỪ có đuôi `-ly` (Noun + ly = ADJ!): `timely` (kịp thời, đúng lúc — `in a **timely** manner`, `**timely** notification`), `costly` (đắt đỏ, tốn kém — `a **costly** outage`), `likely` (có khả năng xảy ra), `friendly` (thân thiện — `user-friendly`), `orderly` (ngăn nắp, trật tự), `daily / weekly / monthly / quarterly / yearly` (hàng ngày/tuần/tháng/quý/năm).",
          "Bẫy 1 — `hard` vs `hardly`: `work **hard**` (làm việc chăm chỉ — `hard` đã là Adv rồi!) ≠ `**hardly** ever fails` (hầu như KHÔNG BAO GIỜ lỗi — `hardly` mang nghĩa phủ định = `almost not`!).",
          "Bẫy 2 — `late` vs `lately`: `arrived **late**` (đến muộn) ≠ `have noticed **lately**` (dạo gần đây = `recently`, dấu hiệu tủ của Hiện tại hoàn thành!).",
          "Bẫy 3 — `high` vs `highly`: `climb **high**` (cao về độ cao vật lý/con số) ≠ `**highly** scalable / **highly** recommended` (cực kỳ, ở mức độ rất cao — trừu tượng!).",
          "Bẫy 4 — `short` vs `shortly` & `near` vs `nearly`: `**shortly** before/after` (ngay trước/ngay sau đó ít phút = `soon`); `**nearly** 100% test coverage` (xấp xỉ/gần đạt tới = `almost`, khác với `near the office` là gần về khoảng cách)."
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "Virtual threads in Java 21 are **extremely** **lightweight** compared to platform OS threads.",
        vi: "Virtual threads trong Java 21 cực kỳ nhẹ khi so sánh với các luồng hệ điều hành truyền thống.",
        note: "Cấu trúc khuôn vàng `be + Adv + Adj`: `extremely` (Adv) nhấn mạnh mức độ cho tính từ `lightweight` (Adj)."
      },
      {
        tag: "TOEIC Part 5",
        en: "All sensitive customer credentials must be **securely** **encrypted** before being stored in the database.",
        vi: "Tất cả thông tin xác thực nhạy cảm của khách hàng phải được mã hóa an toàn trước khi lưu vào cơ sở dữ liệu.",
        note: "Giữa trợ động từ bị động `be` và phân từ `encrypted` (V3/ed) → điền Trạng từ `securely`."
      },
      {
        tag: "Senior Java",
        en: "Even when one availability zone went down, our Kafka cluster **remained** **operational**.",
        vi: "Ngay cả khi một vùng sẵn sàng bị sập, cụm Kafka của chúng tôi vẫn duy trì hoạt động bình thường.",
        note: "`remained` là Linking Verb (động từ nối) → theo sau bắt buộc là Tính từ `operational` (không dùng `operationally`)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Our automated alerting bot sends **timely** notifications whenever error rates exceed 1%.",
        vi: "Bot cảnh báo tự động của chúng tôi gửi các thông báo kịp thời mỗi khi tỷ lệ lỗi vượt quá 1%.",
        note: "Siêu từ vựng TOEIC: `timely` có đuôi `-ly` nhưng là TÍNH TỪ (kịp thời), bổ nghĩa trực tiếp cho danh từ `notifications`!"
      },
      {
        tag: "Daily Standup",
        en: "The infrastructure team worked **hard** all weekend, so the system **hardly** experienced any downtime.",
        vi: "Đội hạ tầng đã làm việc chăm chỉ suốt cuối tuần, nên hệ thống hầu như không gặp bất kỳ thời gian chết nào.",
        note: "Một câu khắc ghi trọn đời cặp bẫy: `worked hard` (làm việc vất vả) vs `hardly experienced` (hầu như không trải qua)."
      },
      {
        tag: "Code Review",
        en: "Have you noticed any **unusual** spikes in garbage collection pauses **lately**?",
        vi: "Dạo gần đây bạn có để ý thấy đợt tăng đột biến bất thường nào trong thời gian dừng GC không?",
        note: "`unusual` (Adj) đứng trước danh từ `spikes`; `lately` (= `recently`, dạo gần đây) đi cùng thì Hiện tại hoàn thành `Have you noticed`."
      },
      {
        tag: "TOEIC Part 7",
        en: "Skipping integration tests to meet a short-term deadline often proves **costly** in production.",
        vi: "Việc bỏ qua kiểm thử tích hợp để kịp hạn chót ngắn hạn thường tỏ ra rất đắt giá trên môi trường thật.",
        note: "Nhân đôi kiến thức: `proves` là Linking Verb + `costly` là TÍNH TỪ đuôi `-ly` mang nghĩa 'tốn kém, trả giá đắt'."
      },
      {
        tag: "Client Email",
        en: "The maintenance window will conclude **shortly** after 3:00 AM UTC.",
        vi: "Khung giờ bảo trì sẽ kết thúc ngay sau 3 giờ sáng theo giờ UTC.",
        note: "Cụm vàng TOEIC: `shortly after / shortly before` (ngay sau / ngay trước một mốc thời gian)."
      },
      {
        tag: "Senior Java",
        en: "Spring Boot autoconfiguration allows microservices to integrate **seamlessly** with Prometheus and Grafana.",
        vi: "Cơ chế tự cấu hình của Spring Boot cho phép các microservice tích hợp mượt mà với Prometheus và Grafana.",
        note: "`seamlessly` (trạng từ - một cách liền mạch, trơn tru) bổ nghĩa cho động từ thường `integrate`."
      },
      {
        tag: "TOEIC Part 5",
        en: "The refactored billing engine handles **nearly** ten thousand concurrent invoices per second.",
        vi: "Bộ máy tính cước đã tái cấu trúc xử lý gần mười ngàn hóa đơn đồng thời mỗi giây.",
        note: "Đứng trước con số ước lượng (`ten thousand`, `100%`, `all`) luôn dùng trạng từ chỉ xấp xỉ **`nearly`** (= `almost` / `approximately`), không dùng `near`."
      },
      {
        tag: "Code Review",
        en: "Using `BigDecimal` instead of `double` is **highly** **recommended** for monetary calculations in Java.",
        vi: "Việc dùng `BigDecimal` thay vì `double` được khuyến nghị ở mức độ rất cao cho các phép tính tiền tệ trong Java.",
        note: "Collocation bất hủ: `highly recommended`, `highly scalable`, `highly competitive`, `highly qualified`."
      },
      {
        tag: "Daily Standup",
        en: "I checked the Prometheus metrics, and found nothing **abnormal** in the memory graph.",
        vi: "Tôi đã kiểm tra các chỉ số Prometheus và không thấy điều gì bất thường trên biểu đồ bộ nhớ.",
        note: "Quy tắc vị trí đặc biệt: Với các đại từ `nothing / something / anything`, tính từ (`abnormal`) luôn đứng **phía sau** đại từ."
      },
      {
        tag: "TOEIC Part 5",
        en: "Despite heavy holiday traffic, checkout latency stayed **remarkably** **low** throughout Cyber Monday.",
        vi: "Bất chấp lưu lượng ngày lễ khổng lồ, độ trễ thanh toán vẫn giữ ở mức thấp đáng kinh ngạc suốt ngày Cyber Monday.",
        note: "`stayed` (Linking Verb) + `low` (Adj), và chen trước `low` để nhấn mạnh mức độ là Trạng từ `remarkably`."
      },
      {
        tag: "Client Email",
        en: "Please respond in a **timely** manner so we can finalize the API contract before Sprint 14 starts.",
        vi: "Vui lòng phản hồi kịp thời để chúng ta có thể chốt hợp đồng API trước khi Sprint 14 bắt đầu.",
        note: "Vì `timely` là Tính từ nên muốn diễn đạt trạng ngữ 'một cách kịp thời' người bản xứ viết cụm `in a timely manner`!"
      },
      {
        tag: "TOEIC Part 7",
        en: "All database backups are verified **automatically** on a **daily** basis to guarantee disaster recovery.",
        vi: "Tất cả các bản sao lưu cơ sở dữ liệu được kiểm chứng tự động hàng ngày nhằm đảm bảo khôi phục sau thảm họa.",
        note: "`automatically` (Adv) bổ nghĩa cho động từ `are verified`; còn `daily` đứng trước danh từ `basis` đóng vai trò Tính từ (`on a daily basis`)."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "The new sorting algorithm runs extreme fast.",
          fix: "The new sorting algorithm runs **extremely** fast.",
          why: "`fast` vừa là tính từ vừa là trạng từ (không có từ `fastly` trong tiếng Anh!), và để bổ nghĩa mức độ cho trạng từ `fast` thì từ đứng trước nó bắt buộc phải là Trạng từ **`extremely`**."
        },
        {
          bug: "After applying the patch, the application remained stably.",
          fix: "After applying the patch, the application remained **stable**.",
          why: "`remain` là Động từ nối (Linking Verb) gán trạng thái cho chủ ngữ `the application`, nên bắt buộc đi với Tính từ **`stable`**, không dùng trạng từ `-ly`."
        },
        {
          bug: "Our team worked hardly to release the MVP on schedule.",
          fix: "Our team worked **hard** to release the MVP on schedule.",
          why: "Tai nạn giao tiếp nghiêm trọng nhất của Dev Việt! Viết `worked hardly` nghĩa là 'team chúng tôi **hầu như chả làm việc gì cả**'! 'Làm việc chăm chỉ' phải là `worked hard`."
        },
        {
          bug: "The batch job executes fastly when data fits in RAM.",
          fix: "The batch job executes **quickly** (hoặc **fast**) when data fits in RAM.",
          why: "Trong tiếng Anh KHÔNG TỒN TẠI từ `fastly`! Bản thân chữ `fast` đã kiêm luôn cả hai vai trò Tính từ (`a fast query`) và Trạng từ (`executes fast`)."
        },
        {
          bug: "We deployed a high scalable microservice architecture.",
          fix: "We deployed a **highly** scalable microservice architecture.",
          why: "`scalable` là Tính từ đứng trước danh từ `architecture`. Để nhấn mạnh mức độ 'có khả năng mở rộng rất cao', ta cần Trạng từ trừu tượng **`highly`**, không dùng `high`."
        }
      ]
    },
    toeicTips: [
      "Mẹo 2 giây 'Kẹp giữa Trợ động từ & Động từ chính': Trong TOEIC Part 5, cứ thấy cấu trúc `be / have / has / had / will / can / must` + `_____` + `V3/ed (hoặc V-ing / V_nguyên_thể)` → Nhắm mắt khoanh ngay đáp án có đuôi **`-ly` (Trạng từ)**, đúng 99.9%!",
      "Mẹo phân biệt Động từ nối vs Động từ thường: Trước khi chọn `-ly` đứng cuối câu sau động từ, hãy liếc lại động từ chính xem có nằm trong bộ Tứ trụ Linking Verbs của TOEIC là **`become - remain - stay - seem/appear/prove`** hay không. Nếu CÓ → phanh gấp và chọn **Tính từ (Adj)**!",
      "Mẹo bẫy từ vựng trạng từ: Thấy sau chỗ trống là một **con số / phần trăm / `all` / `every`** (ví dụ `_____ 500 participants`, `_____ two hours`) → Chọn ngay `nearly / approximately / roughly / almost` (cấm chọn `near` hay `hardly` nếu câu mang nghĩa tích cực)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh (chú ý vị trí trạng từ đứng trước động từ thường):",
        chunks: [
          "reduced",
          "latency.",
          "Our distributed caching layer",
          "database query",
          "significantly"
        ],
        answer: "Our distributed caching layer significantly reduced database query latency.",
        vi: "Tầng bộ nhớ đệm phân tán của chúng tôi đã làm giảm đáng kể độ trễ truy vấn cơ sở dữ liệu."
      },
      fillBlank: {
        sentence: "Even during Black Friday peak traffic, our payment microservice remained _____ available across all regions. (Từ gốc: consistent -> điền trạng từ bổ nghĩa cho tính từ available)",
        answer: "consistently",
        accepted: ["consistently"],
        hint: "Thêm hậu tố trạng từ '-ly' vào tính từ 'consistent' để bổ nghĩa cho tính từ 'available' đứng sau.",
        explain: "Sau động từ nối `remained` đã có sẵn Tính từ `available` làm bổ ngữ. Do đó, từ đứng ngay trước để bổ nghĩa cho tính từ `available` bắt buộc phải là Trạng từ **`consistently`** (luôn nhất quán/ổn định)."
      }
    },
    quiz: [
      {
        q: "All incoming JSON payloads are _____ validated at the API gateway layer before reaching internal microservices.",
        options: [
          "A. strict",
          "B. strictly",
          "C. strictness",
          "D. stricter"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. strictly**. Chỗ trống nằm kẹp chính giữa động từ `are` và phân từ quá khứ `validated` trong cấu trúc bị động (`are + ADV + V3/ed`). Cần một Trạng từ bổ nghĩa cho hành động kiểm tra hợp lệ ('được xác thực một cách nghiêm ngặt') → chọn `strictly` trong 2 giây! Loại A (tính từ), C (danh từ), D (so sánh hơn của tính từ)."
      },
      {
        q: "Upgrading to NVMe solid-state drives proved _____ effective in cutting PostgreSQL backup times by half.",
        options: [
          "A. high",
          "B. height",
          "C. heighten",
          "D. highly"
        ],
        answer: 3,
        explain: "Đáp án đúng là **D. highly**. Sau động từ nối `proved` ĐÃ CÓ SẴN tính từ `effective` làm bổ ngữ. Vì vậy chỗ trống đứng trước tính từ `effective` cần một Trạng từ chỉ mức độ cao mang nghĩa trừu tượng ('cực kỳ hiệu quả') → chọn **`highly`**. Loại A (`high` khi là trạng từ chỉ dùng cho độ cao vật lý như `fly high`), loại B (danh từ), loại C (động từ)."
      },
      {
        q: "Thanks to the _____ intervention of our Site Reliability Engineering team, the DNS misconfiguration was resolved within three minutes.",
        options: [
          "A. timely",
          "B. time",
          "C. timing",
          "D. timeliness"
        ],
        answer: 0,
        explain: "Đáp án đúng là **A. timely**. Nhìn khung Cụm danh từ `the _____ intervention of...`: đứng sau mạo từ `the` và trước danh từ `intervention` (sự can thiệp), ta cần một Tính từ mang nghĩa 'kịp thời, đúng lúc'. `timely` là từ vựng vàng của TOEIC: tuy tận cùng bằng `-ly` (do Danh từ `time + ly`) nhưng nó chính là một **Tính từ**! Loại B, C, D vì đều là danh từ không mang nghĩa 'kịp thời'."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G1_5: GIỚI TỪ THỜI GIAN, KHÔNG GIAN & PHẠM VI (IN/ON/AT/BY/UNTIL/WITHIN)
   * ========================================================================== */
  G1_5: {
    duration: "35 phút",
    toeicTarget: "Nền tảng 0 → 500+ (TOEIC Part 5, Part 6 & Nghe hiểu lịch trình Part 2–4)",
    javaContext: "Chốt deadline Sprint chính xác (`by Friday` vs `until Friday`), viết Cron Job / SLA (`within 200ms`, `throughout the maintenance window`), mô tả hạ tầng (`on AWS`, `in production`).",
    teacherIntro: "Chào anh em! Có bao giờ anh em nhắn cho PM nước ngoài câu 'I will finish this ticket until Friday' với ý định tốt đẹp là 'Tôi sẽ làm xong trước thứ Sáu', nhưng ông PM đọc xong lại tá hỏa tưởng anh em chỉ ngồi làm ticket đó tới thứ Sáu rồi bỏ dở không? Trong tiếng Anh công sở lẫn đề thi TOEIC, chỉ lệch một giới từ nhỏ xíu giữa **`by`** và **`until`**, hay giữa **`during`**, **`for`** và **`within`** là ý nghĩa cam kết SLA xoay ngoắt 180 độ! Đặc biệt với dân Backend, ngay cả chuyện dùng `in` hay `on` cho server, port, branch, production cũng rất dễ lúng túng. Bài học này sẽ biến mớ giới từ rối rắm thành các sơ đồ trục tọa độ không gian – thời gian chuẩn xác tuyệt đối cho anh em.",
    javaAnalogy: {
      title: "Giới Từ Thời Gian = Toán Tử So Sánh Timestamp & Timeout Trong Hệ Thống Phân Tán",
      body: "Hãy ánh xạ các giới từ thời gian sang biểu thức logic trên kiểu `Instant` của Java `java.time`: **`at 02:00`** là phép so sánh điểm chính xác `t == 02:00`; **`on Friday`** là phạm vi 1 ngày `LocalDate.of(...)`; **`in Q3 / in November`** là khoảng rộng tháng/quý/năm, và đặc biệt **`in 5 minutes`** (tính từ hiện tại) nghĩa là `now.plusMinutes(5)` (*sau 5 phút nữa sẽ chạy*), trong khi **`within 5 minutes`** là ràng buộc SLA `duration <= 5m` (*trong vòng tối đa 5 phút phải xong*)! Còn cặp kỳ phùng địch thủ: **`by Friday`** là điều kiện Deadline một lần **`completedAt <= Friday`** (nộp lúc nào trước hạn cũng được); trái lại **`until Friday`** là vòng lặp duy trì trạng thái liên tục **`while (now < Friday) { keepRunning(); }`**!"
    },
    objectives: [
      "Áp dụng quy tắc Kim Tự Tháp Ngược `IN > ON > AT` cho cả Thời gian lẫn Không gian (bao gồm các cụm đặc thù ngành IT: `in production`, `on the staging branch`, `at port 8080`).",
      "Phân biệt sắc bén 2 bộ tam kinh điển nhất của đề thi TOEIC: **`by` vs `until`** (Hạn chót vs Duy trì liên tục) và **`for` vs `during` vs `within`** (Khoảng đếm số lượng vs Tên sự kiện vs Giới hạn tối đa).",
      "Sử dụng thành thạo các giới từ phạm vi & lịch trình điểm cao trong TOEIC: `throughout`, `prior to`, `following`, `between...and`, `among`."
    ],
    formulaCards: [
      {
        label: "Kim Tự Tháp IN > ON > AT (Thời Gian & Không Gian)",
        formula: "IN + Tháng/Mùa/Năm/Thế kỷ/Buổi  |  ON + Thứ/Ngày cụ thể  |  AT + Giờ chính xác/Điểm cụ thể",
        note: "Mẹo cực nhạy cho TOEIC: Cứ dính tới chữ **Ngày** dù dài hay ngắn (`on Monday`, `on May 15`, `on Friday morning`, `on the launch day`) → 100% dùng **ON**!"
      },
      {
        label: "Cặp Sinh Tử: BY (Hạn Chót) vs UNTIL (Kéo Dài Suốt Đến)",
        formula: "BY + mốc thời gian (Xong TRƯỚC/MUỘN NHẤT LÀ)  |  UNTIL + mốc thời gian (Duy trì LIÊN TỤC ĐẾN KHI)",
        note: "`submit/complete/deploy/notify + BY Friday` (hành động chốt hạ 1 lần trước deadline) VS `remain open/valid/postponed/work + UNTIL Friday` (trạng thái kéo dài rồi mới dừng)."
      },
      {
        label: "Bộ Tam Khoảng Thời Gian: FOR vs DURING vs WITHIN",
        formula: "FOR + [Số đếm + đơn vị]  |  DURING + [ the/my + Danh từ sự kiện ]  |  WITHIN + [Khoảng giới hạn tối đa]",
        note: "Ví dụ chuẩn: `down **for** two hours` (có số `two`) | `down **during** the migration` (tên giai đoạn/sự kiện, không đếm giờ) | `recover **within** five minutes` (nội trong vòng 5 phút)."
      },
      {
        label: "Giới Từ Cao Cấp Của TOEIC 600+",
        formula: "throughout (xuyên suốt mọi nơi/mọi lúc) | prior to (= before) | following (= after) | among (≥3) vs between (2)",
        note: "Lưu ý cực gắt: `following` khi đứng trước cụm danh từ (`**Following** the security audit, we...`) là GIỚI TỪ mang nghĩa **`After`** (Ngay sau cuộc kiểm toán...), không phải V-ing 'theo dõi'!"
      }
    ],
    sections: [
      {
        heading: "1. Quy Tắc `IN - ON - AT` Trong Đề Thi TOEIC & Ngữ Cảnh Kỹ Sư Java",
        paragraphs: [
          "Hãy tưởng tượng một hình phễu thu hẹp dần độ chi tiết: **`IN`** là cái thùng lớn bao trùm (Năm, Quý, Tháng, Thành phố, Quốc gia, Môi trường container); **`ON`** là bề mặt phẳng hoặc lát cắt 1 ngày cụ thể (Thứ trong tuần, Ngày tháng, Nền tảng/Bề mặt thiết bị/Mạng lưới); **`AT`** là đầu mũi kim chấm đúng 1 tọa độ hoặc thời điểm cụ thể (Giờ đồng hồ, Địa chỉ số nhà/Điểm dừng).",
          "Riêng trong tiếng Anh chuyên ngành Phần mềm, việc dùng đúng `in / on / at` giúp bạn nói chuyện với đồng nghiệp Âu Mỹ cực kỳ tự nhiên."
        ],
        bullets: [
          "Thời gian với `IN`: `in 2026`, `in October`, `in the third quarter (Q3)`, `in the morning/afternoon/evening`. ĐẶC BIỆT: `in + khoảng thời gian` tính từ hiện tại = **sau ... nữa** (`The pod will restart **in** 30 seconds` = 30 giây nữa sẽ khởi động lại).",
          "Thời gian với `ON`: `on Tuesday`, `on July 20`, `on Monday afternoon` (có thứ/ngày chen vào buổi là `in` phải nhường ngôi cho `on`!), `on time` (đúng giờ khít sao theo lịch, khác `in time` là kịp lúc chưa trễ).",
          "Thời gian với `AT`: `at 9:30 AM`, `at noon`, `at midnight`, `at the moment`, `at the end of the sprint`.",
          "Chuẩn giới từ IT cho Senior Java: `**in** production / **in** staging / **in** memory / **in** a Docker container / **in** Java 21`; `**on** the main branch / **on** AWS / **on** Kubernetes / **on** Linux / **on** line 42 / **on** the classpath`; `**at** the API gateway layer / **at** runtime / **at** compile time / **at** peak load`."
        ]
      },
      {
        heading: "2. Chấm Dứt Vĩnh Viễn Nhầm Lẫn `by` vs `until` và `for` vs `during` vs `within`",
        paragraphs: [
          "Mỗi đề thi TOEIC Part 5 chắc chắn có ít nhất 1–2 câu đặt `(A) by (B) until (C) during (D) for` cạnh nhau. Bạn không cần đoán mò, chỉ cần phân loại **Bản chất của Động từ chính** trong câu thuộc nhóm 'Chốt hạ 1 điểm (Point Action)' hay 'Duy trì kéo dài (Continuous State)'!",
          "Tương tự, với `for` và `during`, chỉ cần nhìn danh từ phía sau là 'Con số đo độ dài thời gian' hay 'Danh từ tên một sự kiện/kỳ nghỉ/giai đoạn'."
        ],
        bullets: [
          "Khi nào chọn `BY` (Trước hoặc muộn nhất là lúc): Động từ mang tính hoàn tất/giao nộp 1 lần như `finish, complete, submit, return, pay, notify, register, deploy, resolve`. Ví dụ: `All PRs must be merged **by** 5:00 PM` (merge xong lúc 3h chiều hay 4h59 chiều đều hợp lệ; qua 5h01 là trễ!).",
          "Khi nào chọn `UNTIL` (= `till` — Kéo dài liên tục cho tới tận lúc rồi dừng/đổi trạng thái): Động từ mang tính duy trì như `stay, remain, wait, keep, continue, work, be valid, be closed, postpone`. Ví dụ: `The legacy API will remain supported **until** December 31` (hỗ trợ xuyên suốt từ giờ tới hết 31/12 mới tắt). Chú ý cấu trúc phủ định: `**not** available **until** next month` (mãi đến tháng sau mới có!).",
          "Khi nào chọn `FOR`: Theo sau là lượng thời gian đếm được bao lâu (`**for** three hours`, `**for** several decades`, `**for** over a week`, `**for** a long time`).",
          "Khi nào chọn `DURING`: Theo sau là một Cụm danh từ chỉ sự kiện/khoảng thời gian có tên gọi (`**during** the daily standup`, `**during** peak hours`, `**during** the system upgrade`, `**during** the fiscal year`). Tuyệt đối CẤM viết `during three hours` và CẤM viết `during + V-ing`!",
          "Khi nào chọn `WITHIN`: Mang nghĩa 'nội trong vòng (không vượt quá giới hạn thời gian hoặc phạm vi không gian)' — từ khóa của mọi cam kết SLA và chính sách hoàn trả TOEIC (`respond **within** 24 hours`, `refund **within** 30 days`, `**within** the VPC network`)."
        ]
      },
      {
        heading: "3. Nhóm Giới Từ Điểm Cao TOEIC 600+: `throughout`, `prior to`, `following`, `between` vs `among`",
        paragraphs: [
          "Lên mức điểm 550–700+, đề thi ETS TOEIC ít dùng những từ đơn giản như `before` hay `after` mà thay thế bằng các giới từ học thuật/thương mại trang trọng hơn. Nắm vững 4 từ này vừa giúp bạn giải nhanh Part 5–6, vừa giúp đọc hiểu thông báo Part 7 không vấp.",
          "Đặc biệt chú ý chữ **`throughout`**: nó mạnh hơn cả `in` và `during` vì nhấn mạnh tính 'xuyên suốt từ đầu chí cuối' (về thời gian) hoặc 'khắp mọi ngóc ngách' (về không gian)!"
        ],
        bullets: [
          "`throughout` + Thời gian / Không gian: `**throughout** the year` (xuyên suốt cả năm không nghỉ), `**throughout** the microservices ecosystem / **throughout** the country` (khắp toàn bộ hệ sinh thái / trên khắp cả nước).",
          "`prior to` (= `before` — Trước khi): Xuất hiện cực dày trong thông báo bảo trì & hợp đồng TOEIC (`back up all databases **prior to** the schema migration`).",
          "`following` / `subsequent to` (= `after` — Ngay sau khi): Đừng dịch là 'theo sau như cái đuôi'! `**Following** yesterday's outage, we added circuit breakers` = *Ngay sau sự cố hôm qua, chúng tôi đã bổ sung cầu dao ngắt mạch*.",
          "`between A and B` (giữa 2 thực thể riêng biệt) vs `among + Danh từ số nhiều` (giữa 3 thực thể trở lên trong một tập hợp): `latency **between** the app server **and** Redis` vs `distribute load evenly **among** ten worker nodes`."
        ]
      }
    ],
    examples: [
      {
        tag: "Daily Standup",
        en: "I will finish writing the unit tests **by** 4:00 PM today so QA can verify the build.",
        vi: "Tôi sẽ viết xong các bài kiểm thử đơn vị muộn nhất là 4 giờ chiều nay để QA có thể kiểm tra bản dựng.",
        note: "Hành động hoàn tất trước hạn chót (`finish`) → bắt buộc dùng `by 4:00 PM` (không dùng `until`)."
      },
      {
        tag: "Client Email",
        en: "Our on-call engineers will monitor the cluster continuously **until** traffic returns to normal.",
        vi: "Các kỹ sư trực ca của chúng tôi sẽ giám sát cụm máy chủ liên tục cho đến khi lưu lượng trở lại bình thường.",
        note: "Hành động duy trì kéo dài không ngắt quãng (`monitor continuously`) → dùng `until`."
      },
      {
        tag: "TOEIC Part 5",
        en: "The enterprise license remains valid **until** March 31, and renewal requests must be submitted **by** March 15.",
        vi: "Giấy phép doanh nghiệp có hiệu lực đến hết ngày 31/3, và yêu cầu gia hạn phải được nộp trước ngày 15/3.",
        note: "Câu đối chiếu kinh điển làm sáng tỏ 100%: `remains valid UNTIL...` (duy trì hiệu lực suốt tới lúc đó) vs `submitted BY...` (hạn chót nộp đơn)."
      },
      {
        tag: "Senior Java",
        en: "Exceptions thrown **at** runtime are caught by our `@ControllerAdvice` global handler **in** Spring Boot.",
        vi: "Các ngoại lệ ném ra tại thời điểm chạy được bắt bởi bộ xử lý toàn cục `@ControllerAdvice` của chúng tôi trong Spring Boot.",
        note: "Cụm chuẩn Java: `at runtime / at compile time` và `in Spring Boot`."
      },
      {
        tag: "Senior Java",
        en: "According to our SLA, 99% of payment API calls must complete **within** 150 milliseconds.",
        vi: "Theo cam kết SLA của chúng tôi, 99% lời gọi API thanh toán phải hoàn tất trong vòng 150 mili-giây.",
        note: "`within + khoảng thời gian` diễn tả ngưỡng giới hạn tối đa (`<= 150ms`)."
      },
      {
        tag: "TOEIC Part 5",
        en: "The primary database was unreachable **for** twenty minutes **during** last night's network maintenance.",
        vi: "Cơ sở dữ liệu chính đã không thể kết nối trong suốt hai mươi phút trong đợt bảo trì mạng tối qua.",
        note: "Phân biệt hoàn hảo: `for + twenty minutes` (số lượng thời gian đếm được) vs `during + maintenance` (danh từ chỉ sự kiện)."
      },
      {
        tag: "Code Review",
        en: "I noticed a potential race condition **on** line 84 of `OrderService.java` **on** the `feature/checkout` branch.",
        vi: "Tôi nhận thấy một nguy cơ tranh chấp luồng ở dòng 84 của file `OrderService.java` trên nhánh `feature/checkout`.",
        note: "Giới từ chuẩn cho code review: `on line 84` và `on the ... branch`."
      },
      {
        tag: "TOEIC Part 7",
        en: "**Prior to** upgrading the production cluster, please verify all snapshots in the staging environment.",
        vi: "Trước khi nâng cấp cụm máy chủ thực tế, vui lòng kiểm tra lại toàn bộ các bản chụp dữ liệu ở môi trường staging.",
        note: "`Prior to` (= `Before`) là cụm giới từ tủ của TOEIC; theo sau giới từ `to` ở đây là danh động từ `upgrading` (hoặc cụm danh từ)."
      },
      {
        tag: "TOEIC Part 5",
        en: "**Following** the successful penetration test, the fintech platform launched **on** October 12.",
        vi: "Ngay sau đợt kiểm thử xâm nhập thành công, nền tảng công nghệ tài chính đã ra mắt vào ngày 12 tháng 10.",
        note: "`Following + Noun` = `After + Noun`; đi với ngày cụ thể `October 12` bắt buộc dùng giới từ `on`."
      },
      {
        tag: "Senior Java",
        en: "Nginx distributes incoming HTTP requests evenly **among** six stateless Tomcat instances.",
        vi: "Nginx phân phối đều các yêu cầu HTTP đầu vào giữa sáu thực thể Tomcat phi trạng thái.",
        note: "Chia tải vào một nhóm có từ 3 đối tượng trở lên (`six instances`) → dùng `among`."
      },
      {
        tag: "Senior Java",
        en: "Mutual TLS encrypts all network traffic **between** the API gateway **and** the billing service.",
        vi: "Giao thức mTLS mã hóa toàn bộ lưu lượng mạng giữa API gateway và dịch vụ thanh toán.",
        note: "Kết nối rõ ràng 2 đầu mút `A and B` → dùng `between A and B`."
      },
      {
        tag: "TOEIC Part 5",
        en: "Free high-speed Wi-Fi is accessible **throughout** the convention center **during** the developer summit.",
        vi: "Wi-Fi tốc độ cao miễn phí có thể truy cập ở khắp mọi nơi trong trung tâm hội nghị suốt thời gian diễn ra hội nghị lập trình viên.",
        note: "`throughout + địa điểm` = khắp toàn bộ không gian của địa điểm đó."
      },
      {
        tag: "Daily Standup",
        en: "The automated Canary deployment will start **in** ten minutes **at** 10:00 AM sharp.",
        vi: "Đợt triển khai Canary tự động sẽ bắt đầu sau mười phút nữa, vào đúng 10 giờ sáng.",
        note: "`in ten minutes` đi với thì tương lai mang nghĩa 'sau 10 phút nữa kể từ bây giờ'; `at 10:00 AM sharp` là đúng chóc 10 giờ."
      },
      {
        tag: "Client Email",
        en: "The new reporting dashboard will **not** be available to external partners **until** next Monday.",
        vi: "Bảng điều khiển báo cáo mới sẽ chưa mở cho các đối tác bên ngoài cho tới tận thứ Hai tuần sau.",
        note: "Cấu trúc kinh điển `not ... until ...`: mãi cho đến tận thứ Hai tuần sau mới có."
      },
      {
        tag: "TOEIC Part 7",
        en: "Thanks to rigorous sprint planning, our engineering team delivered all Q4 milestones **on time** and **within** budget.",
        vi: "Nhờ lập kế hoạch sprint chặt chẽ, đội ngũ kỹ thuật của chúng tôi đã bàn giao mọi cột mốc quý 4 đúng hạn và nằm trong ngân sách.",
        note: "Hai cụm Collocation vàng mười của cả quản lý dự án lẫn TOEIC: `on time` (đúng hạn) và `within budget` (không lố ngân sách)."
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "Please review and approve my Pull Request until 5 PM today.",
          fix: "Please review and approve my Pull Request **by** 5 PM today.",
          why: "`approve` là hành động chốt 1 lần trước hạn chót → phải dùng **`by 5 PM`**. Nếu viết `until 5 PM` nghĩa là bắt đồng nghiệp ngồi nhấn nút approve liên tục từ sáng tới 5h chiều rồi nghỉ!"
        },
        {
          bug: "The Redis server was down during 45 minutes yesterday.",
          fix: "The Redis server was down **for** 45 minutes yesterday.",
          why: "Sau chỗ trống là một con số đếm khoảng độ dài thời gian (`45 minutes`), bắt buộc phải dùng **`for`**. `during` chỉ đi với danh từ gọi tên sự kiện (`during the outage`)."
        },
        {
          bug: "We have a sprint retrospective meeting in Friday afternoon.",
          fix: "We have a sprint retrospective meeting **on** Friday afternoon.",
          why: "Mặc dù `in the afternoon` dùng `in`, nhưng một khi đã ghép thêm Thứ hoặc Ngày vào trước buổi (`Friday afternoon`, `May 1st morning`) thì chữ Ngày làm chủ cuộc chơi → bắt buộc đổi sang **`on`**!"
        },
        {
          bug: "This bug only reproduces on production environment.",
          fix: "This bug only reproduces **in** the production environment (hoặc **in production**).",
          why: "Với `environment` (môi trường bao bọc) hoặc nói tắt `production / staging / development`, tiếng Anh chuẩn của kỹ sư bản xứ luôn dùng **`in production`** (còn `on` dùng cho `on the production server / branch`)."
        },
        {
          bug: "During migrating the database, we enabled read-only mode.",
          fix: "**While** migrating the database (hoặc **During the database migration**), we enabled read-only mode.",
          why: "`during` là Giới từ thuần túy chỉ nhận Cụm Danh Từ, TUYỆT ĐỐI KHÔNG đi với `V-ing`! Muốn giữ `migrating` (rút gọn mệnh đề đồng chủ ngữ) phải đổi sang liên từ **`While`**."
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 giây hạ gục câu `by` vs `until` trong Part 5: Đọc động từ đứng trước! Nếu là nhóm **Nộp/Xong/Báo/Trả** (`submit, finish, complete, return, notify, register, pay`) → chọn **`by`**. Nếu là nhóm **Đợi/Ở lại/Giữ/Còn hiệu lực/Chưa mở** (`wait, stay, remain, keep, valid, closed, not...`) → chọn **`until`**!",
      "Mẹo 'Đếm số chọn FOR, Tên gọi chọn DURING': Nhìn ngay sau chỗ trống, thấy `two, three, several, many, a few, over ten + hours/days/years` → khoanh **`for`**. Thấy `the / our / his + [Danh từ sự kiện: conference, flight, winter, quarter]` → khoanh **`during`**!",
      "Mẹo nhận diện 2 giới từ 'ngụy trang V-ing' của TOEIC: Đứng đầu câu trước cụm danh từ rồi tới dấu phẩy `_____ the merger / _____ the inspection, S + V`: thấy **`Following`** hãy dịch ngay là **`After` (Sau khi)**; thấy **`Regarding / Concerning`** hãy dịch ngay là **`About` (Về việc)**!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh (chú ý giới từ chỉ hạn chót hoàn thành):",
        chunks: [
          "must be deployed",
          "evening.",
          "All critical security patches",
          "by",
          "Friday"
        ],
        answer: "All critical security patches must be deployed by Friday evening.",
        vi: "Tất cả các bản vá bảo mật quan trọng phải được triển khai muộn nhất là tối thứ Sáu."
      },
      fillBlank: {
        sentence: "Our customer support API guarantees an automated acknowledgment _____ five seconds of receiving a ticket. (Gợi ý: nội trong vòng không quá 5 giây)",
        answer: "within",
        accepted: ["within"],
        hint: "Giới từ 6 chữ cái bắt đầu bằng 'w', diễn tả cam kết SLA 'trong vòng tối đa'.",
        explain: "Để diễn tả cam kết hoàn tất một tác vụ không vượt quá một khoảng thời gian giới hạn (`<= 5 seconds`), giới từ chuẩn xác nhất trong cả SLA kỹ thuật lẫn TOEIC là **`within`**."
      }
    },
    quiz: [
      {
        q: "All reimbursement claims for AWS certification exams must be uploaded to the HR portal _____ the last business day of the month.",
        options: [
          "A. until",
          "B. by",
          "C. during",
          "D. for"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. by**. Động từ chính là `must be uploaded` (phải được tải lên/nộp) — đây là hành động chốt hạ một lần trước hạn chót (`the last business day of the month`). Do đó bắt buộc dùng giới từ chỉ deadline **`by`** (trước hoặc muộn nhất vào ngày làm việc cuối cùng của tháng). Loại A (`until` dùng cho trạng thái kéo dài liên tục), loại C (`during` không đi với 1 điểm hạn chót nộp đơn), loại D (`for` đi với khoảng thời gian đếm được)."
      },
      {
        q: "_____ the scheduled PostgreSQL version upgrade this Sunday, write operations will be temporarily paused for fifteen minutes.",
        options: [
          "A. During",
          "B. While",
          "C. For",
          "D. By"
        ],
        answer: 0,
        explain: "Đáp án đúng là **A. During**. Phía sau chỗ trống là một Cụm danh từ chỉ tên sự kiện (`the scheduled PostgreSQL version upgrade`), không phải mệnh đề hay V-ing (loại B `While`), không phải số đếm độ dài thời gian (loại C `For` — lưu ý cuối câu đã có `for fifteen minutes` rồi!), và nghĩa là 'Trong suốt quá trình nâng cấp' nên chọn **`During`**."
      },
      {
        q: "_____ the discovery of a critical Log4j vulnerability, the security team patched over two hundred containers overnight.",
        options: [
          "A. Prior",
          "B. Following",
          "C. Throughout",
          "D. Within"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. Following**. Ở đây `Following` là Giới từ trang trọng tương đương với `After` ('Ngay sau việc phát hiện ra lỗ hổng nghiêm trọng Log4j, đội bảo mật đã vá hơn 200 container ngay trong đêm'). Loại A vì `Prior` muốn làm giới từ bắt buộc phải có `to` đi kèm (`Prior to`), loại C và D vì không hợp ngữ nghĩa nhân quả thời gian."
      }
    ]
  },

  /* ==========================================================================
   * BÀI G1_6: 3 THÌ CỐT LÕI SỐNG CÒN: HIỆN TẠI ĐƠN, TIẾP DIỄN & QUÁ KHỨ ĐƠN
   * ========================================================================== */
  G1_6: {
    duration: "40 phút",
    toeicTarget: "Nền tảng 0 → 500+ (TOEIC Part 1 Mô tả tranh, Part 2–3 Hội thoại & Part 5 Chia thì)",
    javaContext: "Bộ khung 'Vàng Ròng' cho buổi họp Daily Standup 15 phút mỗi sáng (Hôm qua làm gì = Past Simple; Hôm nay đang làm gì = Present Continuous; Kiến trúc hệ thống chạy ra sao = Present Simple).",
    teacherIntro: "Chào anh em! Nhiều người học tiếng Anh 10 năm ở trường phổ thông bị ám ảnh bởi '12 thì công thức lằng nhằng', nhưng ra đi làm thực tế vẫn nói toàn bộ mọi thứ ở... thì Hiện tại nguyên mẫu kiểu 'Yesterday I fix bug and deploy staging'! Sự thật mà mọi Principal Engineer làm việc ở công ty đa quốc gia đều xác nhận là: Chỉ riêng **3 thì cốt lõi (Hiện tại Đơn – Hiện tại Tiếp diễn – Quá khứ Đơn)** đã gánh tới **75% toàn bộ giao tiếp kỹ thuật hàng ngày** của bạn, đặc biệt là nghi thức Daily Standup mỗi sáng và việc viết tài liệu kiến trúc hệ thống! Trong đề thi TOEIC, nắm vững bản chất và các 'Động từ trạng thái cấm chia tiếp diễn' cũng giúp bạn hốt trọn điểm từ Part 1 nghe tranh đến Part 5–6. Cùng thầy đóng đinh 3 thì sống còn này vào phản xạ nhé!",
    javaAnalogy: {
      title: "3 Thì Cốt Lõi = System Config Bất Biến vs Active Thread Đang Chạy vs Immutable Event Log",
      body: "Hãy nhìn 3 thì qua lăng kính vận hành của một hệ thống Backend trên JVM: **1) Hiện tại Đơn (Present Simple)** chính là **Kiến trúc hệ thống, Cấu hình & Cron Job định kỳ (`@Scheduled`)** — những quy luật luôn đúng ở mọi thời điểm (`AuthService validates JWT tokens`, `The batch job runs every midnight`). **2) Hiện tại Tiếp diễn (Present Continuous: `am/is/are + V-ing`)** chính là **Active Thread đang ở trạng thái `RUNNABLE` ngay lúc này** hoặc tác vụ trong Sprint hiện tại chưa xong (`I am debugging a race condition`, `CPU usage is climbing`). **3) Quá khứ Đơn (Past Simple: `V2/ed`)** chính là dòng **Immutable Audit Log đã đóng và ghi xuống ổ đĩa kèm Timestamp cụ thể trong quá khứ** (`Yesterday at 14:02, pod-3 crashed and we rolled back v2.4`) — đã khép lại hoàn toàn ở quá khứ!"
    },
    objectives: [
      "Sử dụng tự nhiên và chuẩn xác 3 thì cốt lõi đúng từng ngữ cảnh của kỹ sư Java: Mô tả luồng code/lịch cố định (HTĐ), Báo cáo task đang xử lý/kế hoạch gần (HTTD), Báo cáo việc đã xong hôm qua/sự cố quá khứ (QKĐ).",
      "Chia đúng âm cuối `-s/-es` cho Chủ ngữ ngôi thứ 3 số ít và nắm vững danh sách Động từ trạng thái (Stative Verbs: `know, believe, belong, contain, consist, own, need, seem`) TUYỆT ĐỐI KHÔNG chia tiếp diễn `be + V-ing`!",
      "Ghép nhuần nhuyễn câu phức quá khứ với `when / while` cùng Quá khứ Tiếp diễn (`was/were + V-ing`) khi kể lại bối cảnh xảy ra bug/incident."
    ],
    formulaCards: [
      {
        label: "1. Hiện Tại Đơn (Present Simple) — Sự Thật, Kiến Trúc & Lịch Định Kỳ",
        formula: "(+) S_ít + V(s/es) | S_nhiều + V_nguyên   (-) S + do/does + not + V_nguyên",
        note: "Dấu hiệu vàng: `always, usually, often, frequently, regularly, every day/sprint, on Mondays, typically, by default`. Dùng cho cả Lịch trình tàu xe/hội thảo/release cố định trong tương lai!"
      },
      {
        label: "2. Hiện Tại Tiếp Diễn (Present Continuous) — Đang Chạy Lúc Này / Tạm Thời",
        formula: "S + am / is / are + (not) + V-ing",
        note: "Dấu hiệu vàng: `now, right now, currently, at the moment, at present, this week/sprint, Look!`. Trong TOEIC Part 1 (mô tả ảnh người đang hành động), 90% đáp án đúng chia thì này!"
      },
      {
        label: "3. Quá Khứ Đơn (Past Simple) — Đã Chấm Dứt Tại Mốc Quá Khứ Xác Định",
        formula: "(+) S + V2/ed (hoặc was/were)   (-) S + did not (didn't) + V_nguyên_thể!",
        note: "Dấu hiệu vàng: `yesterday, last night/sprint/quarter, ... ago, in 2024, this morning (khi đã qua sáng), previously, formerly`. Nhớ: đã mượn trợ động từ `did/didn't` thì động từ chính trả về NGUYÊN THỂ!"
      },
      {
        label: "Bẫy Cấm Kỵ: Động Từ Trạng Thái (Stative Verbs — CẤM V-ing!)",
        formula: "know / understand / believe / prefer / need / want / belong to / contain / consist of / own / seem",
        note: "Dù trong câu có chữ `right now` hay `currently`, các động từ chỉ nhận thức/sở hữu/chứa đựng này VẪN PHẢI CHIA HIỆN TẠI ĐƠN (`The payload **contains** invalid UTF-8 right now`, cấm viết `is containing`!)."
      }
    ],
    sections: [
      {
        heading: "1. Công Thức 'Standup 3 Câu' & Nghệ Thuật Dùng Hiện Tại Đơn Mô Tả Code",
        paragraphs: [
          "Bạn có để ý khi đọc Javadoc của JDK hay tài liệu kiến trúc của AWS/Spring, người bản xứ hầu như dùng **100% thì Hiện tại Đơn** không? Lý do cực kỳ rõ ràng: một class, một API hay một thuật toán hoạt động theo quy luật lặp lại bất biến — mỗi lần gọi là nó chạy đúng như vậy (`HashMap stores key-value pairs`, `This method throws IllegalArgumentException if the input is null`).",
          "Và trong buổi họp **Daily Standup** mỗi sáng với team quốc tế, bạn chỉ cần xoay mượt 2 thì là nói trôi chảy như gió: Câu 1 nói về hôm qua → chốt cứng **Quá khứ Đơn** (`Yesterday, I **implemented**... and **fixed**...`); Câu 2 nói về việc đang dang dở hôm nay → chốt cứng **Hiện tại Tiếp diễn** (`Today, I **am refactoring**... and **investigating**...`)."
        ],
        bullets: [
          "Đừng bao giờ quên `-s/-es` khi Chủ ngữ là Số ít (`He, She, It, The server, Each pod, Our service, Caching`): thiếu âm `/s/` hoặc `/z/` cuối động từ là lỗi phổ biến số 1 khi Dev Việt nói tiếng Anh và viết tài liệu!",
          "Hiện tại Đơn diễn tả Lịch trình công cộng / Lịch Release đã niêm yết cố định (Timetable): `The maintenance window **begins** at 2:00 AM tomorrow` hoặc `The flight to Singapore **departs** at 8:15 PM` (rất hay gặp trong TOEIC Part 5 & Part 7).",
          "Hiện tại Tiếp diễn diễn tả Kế hoạch đã sắp đặt chắc chắn trong tương lai gần (có giờ/địa điểm/đối tác rõ ràng): `We **are meeting** the security auditors at 3 PM this afternoon`."
        ]
      },
      {
        heading: "2. Danh Sách Động Từ Trạng Thái (Stative Verbs) — Bẫy Gài Kinh Điển Của ETS TOEIC",
        paragraphs: [
          "ETS TOEIC rất thích đặt trạng từ `currently` hoặc `at the moment` ngay trước chỗ trống để dụ thí sinh nhắm mắt khoanh `is + V-ing`, trong khi động từ trong đáp án lại là `belong`, `contain`, `own`, `need` hoặc `resemble`! Đó là những **Động từ trạng thái (Stative Verbs)** — bản chất chúng không phải hành động tiêu tốn cơ bắp theo từng giây mà là trạng thái tĩnh (biết là biết, sở hữu là sở hữu), nên KHÔNG chia ở các thì tiếp diễn.",
          "Ngoài ra, có 2 động từ 'hai mặt' đổi nghĩa tùy theo trạng thái hay hành động mà bạn cần lưu ý."
        ],
        bullets: [
          "Nhóm Sở hữu & Bao gồm (Hay bẫy nhất TOEIC!): `have` (khi mang nghĩa 'sở hữu/có'), `own` (sở hữu), `possess`, `belong to` (thuộc về), `contain` (chứa đựng), `consist of` / `include` (bao gồm).",
          "Nhóm Tư duy, Mong muốn & Đánh giá: `know`, `understand`, `believe`, `recognize`, `remember`, `prefer` (thích hơn), `want`, `need`, `require` (cần/đòi hỏi), `seem`, `appear` (dường như), `resemble` (giống với).",
          "Động từ hai mặt 1 — `have`: Mang nghĩa sở hữu → CẤM V-ing (`Our cluster **has** 12 nodes`); nhưng mang nghĩa trải nghiệm/tổ chức hoạt động (`have lunch`, `have a meeting`, `have trouble`) → ĐƯỢC V-ing (`We **are having** a architecture sync right now`)!",
          "Động từ hai mặt 2 — `think`: Mang nghĩa quan điểm 'tôi nghĩ rằng' → CẤM V-ing (`I **think** gRPC fits better`); nhưng mang nghĩa 'đang cân nhắc/suy tính' (`think about/of`) → ĐƯỢC V-ing (`We **are thinking** of migrating to Postgres`)."
        ]
      },
      {
        heading: "3. Quá Khứ Đơn vs Quá Khứ Tiếp Diễn (`was/were + V-ing`) Khi Kể Lại Sự Cố (Incident Report)",
        paragraphs: [
          "Khi viết báo cáo sự cố (Postmortem / RCA) hoặc làm câu phức thời gian trong TOEIC Part 5–6, bạn thường phải ghép **một hành động nền đang diễn ra dang dở trong quá khứ** với **một sự kiện ngắn bất ngờ cắt ngang**.",
          "Công thức phối hợp cực chuẩn như một thread đang xử lý dở thì nhận tín hiệu `InterruptException`: Hành động nền dài hơn dùng **Quá khứ Tiếp diễn (`was/were + V-ing`)**; sự kiện ngắn ập tới cắt ngang dùng **Quá khứ Đơn (`V2/ed`)**!"
        ],
        bullets: [
          "Mẫu cắt ngang kinh điển với `when` / `while`: `While the batch job **was processing** payroll records, the database node **ran** out of disk space` (Lúc job đang chạy dở thì ổ đĩa đầy cái bụp!).",
          "Lưu ý bất quy tắc hay dùng nhất của Kỹ sư Java (Bắt buộc thuộc V1 - V2 - V3): `build - built - built`, `send - sent - sent`, `spend - spent - spent`, `run - ran - run`, `write - wrote - written`, `find - found - found`, `throw - threw - thrown`, `catch - caught - caught`, `break - broke - broken`, `choose - chose - chosen`, `begin - began - begun`, `cost - cost - cost`, `shut - shut - shut`, `set - set - set`.",
          "Bẫy động từ giữ nguyên 3 cột `cost / put / set / shut / cut / hit`: Nếu chủ ngữ là số ít mà viết `The outage **cost** the company $50,000` (không có `-s` ở `cost`!), bạn biết chắc 100% câu đó đang chia ở **Quá khứ Đơn** (vì nếu Hiện tại đơn cho ngôi `The outage` thì phải là `costs` có `-s`!). Mẹo suy luận siêu đẳng của TOEIC 700+!"
        ]
      }
    ],
    examples: [
      {
        tag: "Senior Java",
        en: "By default, Spring's `@Transactional` annotation **rolls back** transactions only on unchecked runtime exceptions.",
        vi: "Mặc định, annotation `@Transactional` của Spring chỉ rollback giao dịch đối với các ngoại lệ runtime không kiểm tra (unchecked).",
        note: "Mô tả cơ chế/quy luật bất biến của framework → dùng Hiện tại Đơn (`rolls back` chia ngôi số ít theo `annotation`)."
      },
      {
        tag: "Daily Standup",
        en: "Yesterday, I **resolved** the N+1 query bug and **optimized** the Hibernate fetch strategy.",
        vi: "Hôm qua, tôi đã giải quyết xong lỗi truy vấn N+1 và tối ưu hóa chiến lược tải dữ liệu của Hibernate.",
        note: "Có mốc quá khứ rõ ràng `Yesterday` → cả hai động từ nối bằng `and` đều chia Quá khứ Đơn (`resolved`, `optimized`)."
      },
      {
        tag: "Daily Standup",
        en: "Currently, I **am implementing** rate limiting with Redis and **writing** integration tests with Testcontainers.",
        vi: "Hiện tại, tôi đang triển khai giới hạn tốc độ gọi bằng Redis và đang viết kiểm thử tích hợp với Testcontainers.",
        note: "`Currently` báo hiệu tác vụ đang trong luồng xử lý của hôm nay/sprint này → dùng Hiện tại Tiếp diễn (`am implementing ... and [am] writing`)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Although our cloud infrastructure is expanding rapidly, this legacy module currently **belongs** to the core banking team.",
        vi: "Mặc dù hạ tầng đám mây của chúng tôi đang mở rộng nhanh chóng, phân hệ cũ này hiện đang thuộc quyền quản lý của đội core banking.",
        note: "Siêu bẫy TOEIC: Có chữ `currently` ngay trước nhưng `belong` là Stative Verb (sở hữu/thuộc về) → CẤM viết `is belonging`, bắt buộc chia Hiện tại Đơn `belongs`!"
      },
      {
        tag: "Senior Java",
        en: "While the worker thread **was deserializing** a massive JSON payload, the JVM **threw** an `OutOfMemoryError`.",
        vi: "Trong lúc luồng worker đang giải tuần tự hóa một gói tin JSON khổng lồ thì JVM ném ra lỗi `OutOfMemoryError`.",
        note: "Hành động nền đang diễn ra (`was deserializing` - QKTD) bị cắt ngang bởi sự kiện tức thời (`threw` - QKĐ của `throw`)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Each Kafka partition **maintains** an ordered, immutable sequence of records.",
        vi: "Mỗi phân vùng Kafka duy trì một chuỗi bản ghi bất biến và có thứ tự.",
        note: "`Each + Danh từ số ít` luôn đi với động từ chia số ít thêm `-s` ở Hiện tại Đơn (`maintains`)."
      },
      {
        tag: "TOEIC Part 7",
        en: "According to the official release schedule, support for API v1 **ends** on November 30.",
        vi: "Theo lịch phát hành chính thức, việc hỗ trợ cho API phiên bản 1 sẽ kết thúc vào ngày 30 tháng 11.",
        note: "Lịch trình chính thức đã niêm yết cố định (`official release schedule`) → dùng Hiện tại Đơn `ends` dù mốc thời gian ở tương lai."
      },
      {
        tag: "Code Review",
        en: "This HTTP response header **contains** sensitive internal IP addresses that we must strip out.",
        vi: "Header phản hồi HTTP này chứa các địa chỉ IP nội bộ nhạy cảm mà chúng ta phải loại bỏ.",
        note: "`contain` (chứa đựng) là Động từ trạng thái → luôn dùng Hiện tại Đơn `contains`, không dùng `is containing`."
      },
      {
        tag: "Client Email",
        en: "Our DevOps engineers **are investigating** the elevated error rate right now and will post an update shortly.",
        vi: "Các kỹ sư DevOps của chúng tôi đang điều tra tỷ lệ lỗi tăng cao ngay lúc này và sẽ đăng cập nhật sớm.",
        note: "`right now` + hành động đang khẩn trương thực hiện → Hiện tại Tiếp diễn `are investigating`."
      },
      {
        tag: "Senior Java",
        en: "We **didn't notice** the memory leak in staging because the test dataset **was** too small.",
        vi: "Chúng tôi đã không phát hiện ra lỗi rò rỉ bộ nhớ ở môi trường staging vì tập dữ liệu kiểm thử quá nhỏ.",
        note: "Câu phủ định Quá khứ Đơn: đã mượn trợ động từ `didn't` thì động từ theo sau trả về nguyên mẫu `notice` (cấm viết `didn't noticed`!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Last quarter's DDoS attack **cost** the e-commerce platform nearly two hundred thousand dollars in lost revenue.",
        vi: "Cuộc tấn công DDoS quý trước đã khiến nền tảng thương mại điện tử thiệt hại gần hai trăm ngàn đô-la doanh thu.",
        note: "`Last quarter's` → Quá khứ Đơn. Ba cột của `cost` giữ nguyên là `cost - cost - cost` (tuyệt đối không viết `costed`!)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Mr. Tanaka **formerly** **served** as Lead Java Architect at Rakuten before founding his own cloud startup in 2023.",
        vi: "Ông Tanaka trước đây từng giữ vị trí Kiến trúc sư trưởng Java tại Rakuten trước khi sáng lập startup điện toán đám mây riêng vào năm 2023.",
        note: "Hai dấu hiệu vàng ròng của Quá khứ Đơn trong TOEIC Part 5 & 7: trạng từ **`formerly`** (trước đây = `previously`) và `in 2023`."
      },
      {
        tag: "Daily Standup",
        en: "We **are having** a quick design sync with the mobile team at 2:00 PM today to finalize the pagination schema.",
        vi: "Chúng tôi sẽ có một buổi họp thiết kế nhanh với đội mobile lúc 2 giờ chiều nay để chốt cấu trúc phân trang.",
        note: "`have a sync/meeting` mang nghĩa 'tổ chức cuộc họp' (hành động, không phải sở hữu) nên dùng Hiện tại Tiếp diễn chỉ lịch hẹn chắc chắn chiều nay hoàn toàn chuẩn xác!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Our automated regression suite **runs** every night at midnight and **sends** a summary report to Slack.",
        vi: "Bộ kiểm thử hồi quy tự động của chúng tôi chạy mỗi đêm vào lúc 0 giờ và gửi báo cáo tóm tắt lên Slack.",
        note: "Thói quen / Cron job lặp lại định kỳ (`every night`) → cấu trúc song song hai động từ Hiện tại Đơn số ít `runs ... and sends`."
      },
      {
        tag: "Code Review",
        en: "Why **did** the circuit breaker **trip** when downstream latency **remained** below 100ms?",
        vi: "Tại sao cầu dao ngắt mạch lại nhảy ngắt trong khi độ trễ hệ thống phía sau vẫn dưới 100ms?",
        note: "Câu hỏi Quá khứ Đơn: đảo trợ động từ `did` lên trước chủ ngữ `the circuit breaker`, động từ chính `trip` giữ nguyên mẫu!"
      }
    ],
    mistakesTable: {
      title: "Lỗi Vietlish Kinh Điển Của Dev Việt vs Tiếng Anh Chuẩn",
      rows: [
        {
          bug: "Yesterday I fix the login bug and push code to GitLab.",
          fix: "Yesterday I **fixed** the login bug and **pushed** the code to GitLab.",
          why: "Trong tiếng Việt chỉ cần chữ 'Hôm qua' là đủ biết quá khứ, nhưng tiếng Anh BẮT BUỘC phải biến đổi hình thái động từ sang cột 2 (`fixed`, `pushed`). Quên chia quá khứ là lỗi phản xạ số 1 của Dev Việt khi họp Standup!"
        },
        {
          bug: "The consumer didn't committed the Kafka offset.",
          fix: "The consumer **didn't commit** the Kafka offset.",
          why: "Chia quá khứ hai lần (Double Past Marking)! Trợ động từ `didn't` đã gánh trọn thông tin thì Quá khứ rồi, nên động từ chính theo sau BẮT BUỘC phải ở dạng nguyên mẫu `commit`."
        },
        {
          bug: "Right now, this JAR package is containing outdated dependencies.",
          fix: "Right now, this JAR package **contains** outdated dependencies.",
          why: "`contain` (chứa đựng) là Động từ trạng thái (Stative Verb) nên dù có `Right now` vẫn TUYỆT ĐỐI KHÔNG chia tiếp diễn `is containing`, phải dùng Hiện tại Đơn **`contains`**."
        },
        {
          bug: "Each microservice have its own PostgreSQL schema.",
          fix: "Each microservice **has** its own PostgreSQL schema.",
          why: "Chủ ngữ bắt đầu bằng `Each` hoặc `Every` luôn luôn tính là Ngôi thứ 3 SỐ ÍT → động từ ở Hiện tại Đơn phải chia số ít là **`has`** (không dùng `have`)."
        },
        {
          bug: "I am agree with your architecture proposal.",
          fix: "I **agree** with your architecture proposal.",
          why: "Lỗi kinh điển đến mức thành 'meme' công sở! `agree` là Động từ thường (không phải tính từ!), nên ở Hiện tại Đơn đi thẳng `S + V` (`I agree` / `He agrees`), tuyệt đối CẤM nhét `am/is/are` vào trước động từ nguyên mẫu!"
        }
      ]
    },
    toeicTips: [
      "Mẹo quét Trạng từ thời gian trong 3 giây cho Part 5: Thấy `ago, yesterday, last ..., in + [năm quá khứ], formerly, previously` → chốt ngay **Quá khứ Đơn (`V2/ed`)**. Thấy `regularly, frequently, typically, every ..., on Fridays` → chốt ngay **Hiện tại Đơn (`V / Vs`)**.",
      "Mẹo cảnh giác bẫy `currently / now` với Động từ trạng thái: Khi thấy `currently` hoặc `right now`, 90% là `am/is/are + V-ing`, NHƯNG hãy liếc nhanh gốc động từ: nếu là `need, require, belong, contain, consist, own, know, prefer` → lập tức bẻ lái sang **Hiện tại Đơn** để không sập bẫy ETS!",
      "Mẹo vàng cho TOEIC Listening Part 1 (Mô tả tranh): Nếu bức tranh **KHÔNG CÓ NGƯỜI nào xuất hiện** mà bạn nghe thấy đáp án dùng `be + being + V3/ed` (Hiện tại tiếp diễn bị động, ví dụ *The laptops are being typed on*) → Loại ngay 99%! Hiện tại tiếp diễn bị động trong Part 1 gần như chỉ đúng khi có con người đang trực tiếp thao tác lên vật trong khung hình."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh (báo cáo việc đã xử lý hôm qua trong Standup):",
        chunks: [
          "resolved the deadlock",
          "production logs.",
          "Yesterday",
          "while monitoring",
          "our team"
        ],
        answer: "Yesterday our team resolved the deadlock while monitoring production logs.",
        vi: "Hôm qua đội của chúng tôi đã giải quyết xong lỗi deadlock trong lúc giám sát nhật ký hệ thống production."
      },
      fillBlank: {
        sentence: "Even though traffic is surging right now, each gateway node still _____ fewer than 500 megabytes of RAM. (Từ gốc: require — chú ý bẫy Stative Verb & chủ ngữ 'each')",
        answer: "requires",
        accepted: ["requires"],
        hint: "'require' là động từ trạng thái không chia tiếp diễn; chia Hiện tại Đơn ngôi số ít theo 'each gateway node'.",
        explain: "Dù vế đầu có `right now`, động từ `require` (đòi hỏi/cần tới) thuộc nhóm Động từ trạng thái (Stative Verbs) nên không chia tiếp diễn `is requiring`. Đồng thời chủ ngữ `each gateway node` là ngôi thứ 3 số ít nên Hiện tại Đơn phải thêm `-s` thành **`requires`**."
      }
    },
    quiz: [
      {
        q: "Before joining our FinTech platform last year, Ms. Nguyen _____ the core payment settlement engine at a major commercial bank.",
        options: [
          "A. architects",
          "B. is architecting",
          "C. architected",
          "D. will architect"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. architected**. Cụm giới từ thời gian `Before joining our FinTech platform last year` xác lập rõ ràng một giai đoạn đã diễn ra và khép lại hoàn toàn trong quá khứ (trước cả mốc năm ngoái!). Vì vậy mệnh đề chính bắt buộc chia ở thì **Quá khứ Đơn** (`architected` — động từ 'thiết kế kiến trúc'). Loại A (hiện tại đơn), B (hiện tại tiếp diễn), D (tương lai)."
      },
      {
        q: "Our enterprise subscription plan currently _____ unlimited API requests, automated daily backups, and dedicated 24/7 technical support.",
        options: [
          "A. is including",
          "B. includes",
          "C. include",
          "D. included"
        ],
        answer: 1,
        explain: "Đáp án đúng là **B. includes**. Đây chính là cái bẫy kinh điển của ETS TOEIC: đề bài cố tình đặt chữ `currently` để dụ thí sinh chọn A (`is including`), nhưng `include` (bao gồm — cùng họ với `contain, consist of, belong to`) là **Động từ trạng thái (Stative Verb)** nên TUYỆT ĐỐI KHÔNG chia tiếp diễn! Chủ ngữ `Our enterprise subscription plan` là số ít nên chia Hiện tại Đơn là **`includes`** (loại C số nhiều và D quá khứ)."
      },
      {
        q: "While the SRE team _____ the network latency issue in the Frankfurt region, a secondary failover script automatically redirected European users.",
        options: [
          "A. troubleshoots",
          "B. is troubleshooting",
          "C. was troubleshooting",
          "D. troubleshoot"
        ],
        answer: 2,
        explain: "Đáp án đúng là **C. was troubleshooting**. Mệnh đề chính chia ở Quá khứ Đơn (`redirected`). Mệnh đề phụ bắt đầu bằng `While` diễn tả hành động nền đang diễn ra dang dở tại thời điểm quá khứ đó ('Trong lúc đội SRE đang xử lý sự cố độ trễ mạng...') → bắt buộc dùng thì **Quá khứ Tiếp diễn** (`was troubleshooting`, số ít theo `the SRE team`). Loại A, B, D vì lệch thì hiện tại so với mệnh đề chính quá khứ."
      }
    ]
  }
});
