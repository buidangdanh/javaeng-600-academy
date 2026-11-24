/* Vocab V4 — Từ Vựng Senior Java, System Design, Lãnh Đạo Kỹ Thuật, Phỏng Vấn Quốc Tế & TOEIC Paraphrasing
 * Biên soạn bởi Principal Java Architect & Giảng viên TOEIC 700+
 * Mỗi bài gồm 10 từ/cụm thuật ngữ cốt lõi (kèm ví dụ kép TOEIC + Java) + 10 câu giao tiếp thực chiến = 30 câu/bài.
 */

window.LESSON_DETAILS = window.LESSON_DETAILS || {};
Object.assign(window.LESSON_DETAILS, {
  V4_1: {
    duration: "50 phút",
    toeicTarget: "Giao tiếp Senior Java Quốc tế & TOEIC 650–750+",
    javaContext: "Phỏng Vấn Kỹ Thuật Senior/Staff Java (JVM, Memory, Concurrency), Tinh Chỉnh Hiệu Năng & TOEIC Part 5–7",
    teacherIntro: "Chào mừng anh em bước vào Học phần V4 — đỉnh cao phân loại giữa một lập trình viên trung cấp và một Senior Java Engineer mức lương $3,500–$6,000+ tại các tập đoàn Product toàn cầu! Khi tôi trực tiếp phỏng vấn ứng viên cho trụ sở Singapore và Mỹ, rất nhiều bạn hiểu rõ G1GC, ZGC, `volatile` hay `ReentrantLock` trong đầu bằng tiếng Việt, nhưng khi mở miệng giải thích bằng tiếng Anh lại bí từ: gọi 'tranh chấp khóa giữa các luồng' là gì? ('thread contention'!), 'tạm dừng toàn hệ thống để dọn rác' nói sao cho gọn? ('stop-the-world garbage collection pause'!), hay 'chi phí hiệu năng phụ trội' là từ nào? ('overhead'!). Bài V4.1 trang bị cho anh em 10 thuật ngữ lõi của Java/JVM sắc như dao cạo, đồng thời ăn trọn các từ đa nghĩa đắt giá như overhead, allocation, immutable trong đề thi TOEIC 700+!",
    javaAnalogy: {
      title: "JVM Runtime giống hệt Một Nhà Máy Tự Động Hóa Đa Dây Chuyền",
      body: "Trong nhà máy JVM, bộ phận cung ứng chia đất kho bãi cho từng lô hàng mới (`memory allocation`), nếu chất chật cứng hết kho không dọn kịp sẽ nổ cảnh báo tràn kho (`heap exhaustion`). Đội lao công định kỳ huýt còi yêu cầu công nhân dừng tay vài mili-giây để quét phế liệu (`garbage collection pause`). Trên dây chuyền, nếu hai công nhân cùng nhảy vào sửa một sản phẩm không có khóa bảo vệ sẽ sinh ra kết quả hên xui sai lệch (`race condition`, mất tính tất định `determinism`); ngược lại nếu đóng gói sản phẩm niêm phong bất biến ngay từ đầu (`immutable`) và giấu kín chi tiết bên trong vỏ hộp (`encapsulation`), công nhân khỏi cần xếp hàng chen chúc tranh nhau một cái cờ-lê (`thread contention`) và giảm hẳn chi phí quản lý phụ trội (`overhead`)!"
    },
    objectives: [
      "Trả lời trơn tru, chuẩn xác các câu hỏi phỏng vấn OOP & Java Core bằng tiếng Anh với immutable, encapsulation, polymorphism và determinism.",
      "Phân tích chuyên sâu hành vi bộ nhớ JVM và đa luồng bằng bộ thuật ngữ allocation, heap exhaustion, garbage collection pause, race condition, thread contention, overhead.",
      "Nắm chắc nghĩa tài chính – quản trị cực hay thi trong TOEIC Part 5–7 của overhead (chi phí vận hành gián tiếp) và allocation (phân bổ ngân sách/nguồn lực)."
    ],
    formulaCards: [
      {
        label: "Khung Giải Thích Ưu Thế Của Immutable Objects Trong Phỏng Vấn",
        formula: "Making value objects immutable eliminates race conditions and allows safe sharing across threads without synchronization overhead.",
        note: "Một câu duy nhất kết nối 3 từ khóa vàng (`immutable`, `race conditions`, `overhead`) — giám khảo nghe xong gật đầu ngay!"
      },
      {
        label: "Khung Chẩn Đoán Sự Cố Bộ Nhớ JVM (Heap & GC)",
        formula: "High object allocation rates triggered frequent garbage collection pauses and eventually led to heap exhaustion.",
        note: "Mô tả chuẩn xác chuỗi nhân quả từ cấp phát quá tay -> GC chạy liên tục -> tràn bộ nhớ Heap."
      },
      {
        label: "Khung Phân Tích Điểm Nghẽn Khóa Đa Luồng (Thread Contention)",
        formula: "Fine-grained locking or lock-free atomics can drastically reduce thread contention under heavy concurrency.",
        note: "Giải thích lý do chuyển từ `synchronized` toàn hàm sang `LongAdder` hoặc `ConcurrentHashMap`."
      },
      {
        label: "Khung Đánh Giá Chi Phí Phụ Trội Khi Chọn Công Nghệ (Overhead)",
        formula: "Reflection and serialization introduce noticeable CPU overhead, so we pre-compile mappers at build time.",
        note: "Dùng 'introduce overhead' hoặc 'incur overhead' để nói về chi phí tài nguyên phát sinh thêm."
      }
    ],
    sections: [
      {
        heading: "1. Trụ Cột OOP & Tính Đúng Đắn Bằng Tiếng Anh: Encapsulation, Polymorphism, Immutable & Determinism",
        paragraphs: [
          "Đừng để mất điểm oan ở 10 phút khởi động cuộc phỏng vấn chỉ vì phát âm sai hoặc định nghĩa ấp úng các trụ cột hướng đối tượng! Hãy nhớ trọng âm của 'polymorphism' rơi vào âm tiết thứ ba (/ˌpɑː.liˈmɔːr.fɪ.zəm/ — đa hình: cùng một lời gọi interface nhưng hành vi lúc chạy phụ thuộc kiểu thực tế của đối tượng), và 'encapsulation' rơi vào âm thứ tư (/ɪnˌkæp.sjəˈleɪ.ʃən/ — đóng gói: che giấu trạng thái nội tại và chỉ cho phép biến đổi qua các phương thức kiểm soát hợp lệ).",
          "Ở cấp độ Senior, hai phẩm chất quý giá nhất của một hàm tính toán tài chính là tính bất biến ('immutable' — trạng thái không thể bị sửa đổi sau khi khởi tạo như `BigDecimal`, `String`, Java `record`) và tính tất định ('determinism' — với cùng một đầu vào luôn trả ra đúng một đầu ra duy nhất, không phụ thuộc hên xui vào thứ tự lập lịch thread hay giờ hệ thống)."
        ],
        bullets: [
          "Đừng bao giờ trả về trực tiếp tham chiếu `private List<Item> items` ra ngoài getter; hãy trả về `List.copyOf(items)` để bảo vệ `encapsulation` và tính `immutable`!",
          "Trong Event Sourcing / Kafka replay, tính `determinism` của domain logic là bắt buộc để khi chạy lại sự kiện luôn tái tạo đúng số dư tài khoản.",
          "Luyện đọc to cụm: `compile-time polymorphism (method overloading)` vs `runtime polymorphism (method overriding)`."
        ]
      },
      {
        heading: "2. Giải Phẫu JVM Memory & Concurrency: Allocation, Heap Exhaustion, GC Pause, Race Condition & Thread Contention",
        paragraphs: [
          "Khi ứng dụng Java chịu tải hàng chục nghìn request/giây, việc tạo ra quá nhiều đối tượng tạm thời đẩy tốc độ cấp phát bộ nhớ ('allocation rate' tính bằng MB/s) lên cao. Nếu các đối tượng sống sót tràn sang vùng Old Gen mà không được giải phóng, JVM sẽ rơi vào cạn kiệt vùng nhớ Heap ('heap exhaustion' -> văng `java.lang.OutOfMemoryError: Java heap space`) sau hàng loạt đợt tạm dừng dọn rác kéo dài ('garbage collection pauses' hay 'Stop-The-World pauses').",
          "Trên mặt trận đa luồng, cần phân biệt rạch ròi hai khái niệm hay bị đánh đồng: 'race condition' là LỖI LOGIC ĐÚNG/SAI (hai luồng cùng đọc số dư 100$, cùng trừ 80$ rồi ghi đè thành còn 20$ thay vì báo thiếu tiền!), còn 'thread contention' là VẤN ĐỀ HIỆU NĂNG (đã đặt khóa `synchronized` nên kết quả đúng 100%, nhưng 200 luồng phải xếp hàng dài chờ tới lượt vào khóa khiến CPU nhàn rỗi mà độ trễ tăng vọt!)."
        ],
        bullets: [
          "Phân biệt sắc nét khi phỏng vấn: `Race condition breaks correctness; thread contention hurts scalability!`",
          "Với Java 21 Generational ZGC, thời gian `garbage collection pause` được ép xuống dưới 1 mili-giây ngay cả trên Heap hàng trăm Gigabyte.",
          "Dùng JFR (Java Flight Recorder) để soi chính xác dòng code nào gây `high memory allocation` và monitor nào chịu `lock/thread contention` cao nhất."
        ]
      },
      {
        heading: "3. Từ Khóa Vàng Giao Thoa Giữa Kiến Trúc Java & TOEIC 700+: Overhead & Allocation",
        paragraphs: [
          "Trong kỹ thuật phần mềm, 'overhead' là lượng CPU, RAM hoặc băng thông mạng tiêu tốn thêm cho việc quản lý/khung sườn chứ không trực tiếp giải quyết nghiệp vụ (ví dụ: header của object Java tốn 12–16 bytes memory overhead, hoặc context-switching overhead giữa các OS threads). Bước sang đề thi TOEIC Reading Part 5–7, 'overhead' (hoặc 'overhead costs') lại là thuật ngữ tài chính kinh điển chỉ 'chi phí vận hành gián tiếp cố định' của doanh nghiệp như tiền thuê văn phòng, điện nước, nhân sự hành chính!",
          "Tương tự, 'allocation' trong JVM là cấp phát vùng nhớ trên Eden space, còn trong TOEIC nó xuất hiện liên tục ở các bài đọc ngân sách và quản trị dự án: 'budget allocation' (phân bổ ngân sách), 'resource allocation' (phân bổ nguồn lực) và động từ 'allocate funds to R&D'."
        ],
        bullets: [
          "Trong cả IT lẫn TOEIC, 'overhead' khi chỉ chi phí phụ trội/chi phí vận hành thường là danh từ KHÔNG đếm được ('reduce overhead', 'high network overhead').",
          "Cấu trúc cố định ăn điểm TOEIC Part 5: `allocate [resources/funds] TO [a project/department]`.",
          "Tính từ 'immutable' trong văn bản pháp lý/hợp đồng cao cấp cũng mang nghĩa 'bất di bất dịch, không thể sửa đổi' (immutable audit trail)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "immutable",
        pos: "adj",
        ipa: "/ɪˈmjuː.t̬ə.bəl/",
        meaning: "bất biến, không thể bị thay đổi trạng thái sau khi đã được tạo ra (như `String`, `LocalDate`, `BigDecimal`, Java `record`)",
        synonyms: "unchangeable, unmodifiable, fixed, permanent",
        collocations: ["immutable data structure", "immutable audit log", "effectively immutable"],
        mnemonic: "IM (không) + MUTABLE (biến đổi, như Ninja Rùa Mutant đột biến!) => Không thể bị đột biến sửa đổi giá trị sau khi sinh ra!",
        toeicEx: "Blockchain ledgers provide an **immutable** record of cross-border shipping transactions for customs audits.",
        toeicVi: "Sổ cái chuỗi khối cung cấp hồ sơ bất biến không thể chỉnh sửa về các giao dịch vận tải xuyên biên giới phục vụ kiểm toán hải quan.",
        javaEx: "Because `BigDecimal` is **immutable**, calling `amount.add(tax)` returns a brand-new instance instead of mutating `amount`.",
        javaVi: "Bởi vì `BigDecimal` là bất biến, việc gọi `amount.add(tax)` sẽ trả về một đối tượng hoàn toàn mới thay vì sửa đổi trực tiếp biến `amount`."
      },
      {
        word: "polymorphism",
        pos: "n",
        ipa: "/ˌpɑː.liˈmɔːr.fɪ.zəm/",
        meaning: "tính đa hình (khả năng một giao diện chung đại diện cho nhiều hình thái cài đặt khác nhau được quyết định linh hoạt lúc chạy)",
        synonyms: "dynamic dispatch, multi-form behavior",
        collocations: ["runtime polymorphism", "leverage polymorphism over if-else chains", "polymorphic deserialization"],
        mnemonic: "POLY (nhiều) + MORPH (hình dạng, như biến hình) => Một interface `PaymentProcessor` biến hóa thành Visa, Momo hay ApplePay tùy đối tượng truyền vào!",
        toeicEx: "Modular software architecture relies on **polymorphism** so new regional tax rules can be plugged in without rewriting core billing.",
        toeicVi: "Kiến trúc phần mềm mô-đun dựa vào tính đa hình để các quy tắc thuế khu vực mới có thể cắm thêm vào mà không cần viết lại lõi thanh toán.",
        javaEx: "Replacing giant `switch` statements on notification types with interface **polymorphism** made our Spring service open for extension.",
        javaVi: "Việc thay thế các khối `switch` khổng lồ theo loại thông báo bằng tính đa hình qua interface đã giúp dịch vụ Spring của chúng tôi dễ dàng mở rộng."
      },
      {
        word: "encapsulation",
        pos: "n",
        ipa: "/ɪnˌkæp.sjəˈleɪ.ʃən/",
        meaning: "tính đóng gói (gom dữ liệu và hành vi vào trong một lớp, che giấu chi tiết nội bộ để ngăn bên ngoài can thiệp làm hỏng tính toàn vẹn)",
        synonyms: "information hiding, modular boundary",
        collocations: ["break encapsulation", "preserve strict encapsulation", "encapsulate business invariants"],
        mnemonic: "EN (bỏ vào trong) + CAPSULE (viên thuốc con nhộng) => Thuốc đắng giấu kỹ trong vỏ con nhộng `private`, bên ngoài chỉ tiếp xúc qua vỏ hàm `public`!",
        toeicEx: "Protective resin **encapsulation** shields delicate circuit boards from moisture and factory vibration.",
        toeicVi: "Lớp bọc đóng gói bằng nhựa bảo vệ giúp che chắn các bảng mạch tinh vi khỏi độ ẩm và rung động nhà máy.",
        javaEx: "Exposing mutable JPA collection fields via public setters breaks **encapsulation** and bypasses domain validation rules.",
        javaVi: "Việc phơi bày các trường tập hợp JPA có thể biến đổi thông qua hàm setter công khai sẽ phá vỡ tính đóng gói và bỏ qua các quy tắc kiểm tra nghiệp vụ."
      },
      {
        word: "heap exhaustion",
        pos: "n phrase",
        ipa: "/ˈhiːp ɪɡˈzɔːs.tʃən/",
        meaning: "tình trạng cạn kiệt hoàn toàn bộ nhớ vùng Heap của JVM (dẫn tới lỗi nghiêm trọng `OutOfMemoryError`)",
        synonyms: "out-of-memory condition, heap depletion, memory saturation",
        collocations: ["suffer from heap exhaustion", "prevent JVM heap exhaustion", "alert on imminent heap exhaustion"],
        mnemonic: "HEAP (vùng nhớ chứa mọi Object Java) + EXHAUSTION (kiệt sức, cạn sạch không còn 1 byte trống) => JVM hết sạch chỗ thở!",
        toeicEx: "Loading million-row spreadsheets entirely into memory caused server **memory exhaustion** during month-end closing.",
        toeicVi: "Việc nạp toàn bộ bảng tính hàng triệu dòng vào bộ nhớ đã gây cạn kiệt bộ nhớ máy chủ trong kỳ khóa sổ cuối tháng.",
        javaEx: "Streaming rows with Spring Batch `JdbcCursorItemReader` instead of `findAll()` prevented **heap exhaustion** on 2GB containers.",
        javaVi: "Đọc luồng từng dòng bằng `JdbcCursorItemReader` của Spring Batch thay vì `findAll()` đã ngăn chặn tình trạng cạn kiệt Heap trên các container 2GB."
      },
      {
        word: "garbage collection pause",
        pos: "n phrase",
        ipa: "/ˈɡɑːr.bɪdʒ kəˈlek.ʃən pɔːz/",
        meaning: "khoảng thời gian máy ảo JVM tạm dừng các luồng ứng dụng (Stop-The-World) để thu hồi các đối tượng không còn được tham chiếu",
        synonyms: "GC pause, stop-the-world pause, memory reclamation freeze",
        collocations: ["long garbage collection pauses", "sub-millisecond GC pauses", "tune JVM flags to reduce GC pauses"],
        mnemonic: "Đội xe rác (Garbage Collector) chặn đường vài tích tắc (PAUSE) để quét dọn sạch phố xá bộ nhớ trước khi cho xe chạy tiếp!",
        toeicEx: "Routine automated system cleanup caused brief two-second processing **pauses** (**GC pauses**) on legacy terminals.",
        toeicVi: "Quá trình tự động dọn dẹp hệ thống định kỳ đã gây ra các khoảng tạm dừng xử lý ngắn hai giây trên các thiết bị đầu cuối đời cũ.",
        javaEx: "A 12-second **garbage collection pause** caused ZooKeeper to declare our Kafka broker dead and trigger unnecessary partition elections.",
        javaVi: "Một đợt tạm dừng thu gom rác kéo dài 12 giây đã khiến ZooKeeper tuyên bố Kafka broker của chúng tôi bị chết và kích hoạt bầu chọn lại phân vùng không cần thiết."
      },
      {
        word: "race condition",
        pos: "n",
        ipa: "/ˈreɪs kənˌdɪʃ.ən/",
        meaning: "điều kiện tranh đua (lỗi nghiêm trọng xảy ra khi kết quả chương trình phụ thuộc vào thứ tự nhanh chậm hên xui của nhiều luồng cùng sửa dữ liệu chung)",
        synonyms: "concurrency timing bug, check-then-act hazard",
        collocations: ["trigger a subtle race condition", "check-then-act race condition", "eliminate race conditions"],
        mnemonic: "RACE (cuộc chạy đua nước rút) => Hai luồng cùng cắm đầu chạy đua lao vào biến `balance`, ai chạm đích trước/sau một phần triệu giây là số dư sai bét!",
        toeicEx: "Without proper seat-locking mechanisms, simultaneous bookings created a **race condition** that double-sold flight seats.",
        toeicVi: "Nếu không có cơ chế khóa ghế phù hợp, các lượt đặt vé đồng thời sẽ tạo ra lỗi tranh đua khiến cùng một ghế máy bay bị bán trùng cho hai người.",
        javaEx: "Checking `if (!map.containsKey(k))` before `map.put(k, v)` is a classic **race condition**; use `computeIfAbsent` atomically instead.",
        javaVi: "Kiểm tra `if (!map.containsKey(k))` trước khi gọi `map.put(k, v)` là lỗi tranh đua kinh điển; hãy dùng hàm nguyên tử `computeIfAbsent` để thay thế."
      },
      {
        word: "thread contention",
        pos: "n phrase",
        ipa: "/ˈθred kənˈten.ʃən/",
        meaning: "sự tranh chấp khóa giữa các luồng (nhiều luồng phải xếp hàng chờ đợi nhau giành quyền vào cùng một vùng khóa `synchronized` hoặc tài nguyên dùng chung)",
        synonyms: "lock contention, resource bottlenecking among threads",
        collocations: ["severe thread contention", "reduce lock contention", "diagnose thread contention via thread dumps"],
        mnemonic: "THREAD (các luồng) + CONTENTION (sự tranh giành kịch liệt) => 100 người xếp hàng dài trước 1 phòng vệ sinh có khóa duy nhất!",
        toeicEx: "Resource **contention** between the analytics job and live customer traffic slowed the reporting portal every Monday morning.",
        toeicVi: "Sự tranh chấp tài nguyên giữa tác vụ phân tích và lưu lượng khách hàng trực tiếp đã làm chậm cổng báo cáo vào mỗi sáng thứ Hai.",
        javaEx: "Thread dumps showed 80 worker threads in `BLOCKED` state due to heavy **thread contention** on a single `synchronized` logger.",
        javaVi: "Bản chụp luồng cho thấy 80 luồng xử lý rơi vào trạng thái `BLOCKED` do tranh chấp khóa dữ dội trên một bộ ghi log `synchronized` duy nhất."
      },
      {
        word: "overhead",
        pos: "n",
        ipa: "/ˈoʊ.vɚ.hed/",
        meaning: "1) (IT) chi phí tài nguyên phụ trội (CPU/RAM/Network tốn thêm cho cơ chế quản lý); 2) (TOEIC/Kinh tế) chi phí vận hành gián tiếp cố định (thuê mặt bằng, điện nước)",
        synonyms: "extra processing cost; operating expenses, fixed costs",
        collocations: ["minimal performance overhead", "context-switching overhead", "reduce corporate overhead costs"],
        mnemonic: "OVER (phía trên) + HEAD (cái đầu) => Tiền thuê mái nhà che trên đầu văn phòng (kinh tế) hoặc phần 'vỏ quản lý' đội thêm lên đầu mỗi gói dữ liệu (IT)!",
        toeicEx: "Relocating warehouse operations outside the city center lowered monthly **overhead** by nearly 22%.",
        toeicVi: "Việc di dời hoạt động kho bãi ra ngoài trung tâm thành phố đã giúp giảm chi phí vận hành cố định hàng tháng gần 22%.",
        javaEx: "Autoboxing millions of primitive `long` values into `Long` objects adds significant memory and GC **overhead**.",
        javaVi: "Việc tự động đóng hộp hàng triệu giá trị nguyên thủy `long` thành đối tượng `Long` làm phát sinh chi phí phụ trội đáng kể về bộ nhớ và dọn rác."
      },
      {
        word: "determinism",
        pos: "n",
        ipa: "/dɪˈtɝː.mɪ.nɪ.zəm/",
        meaning: "tính tất định (đặc tính đảm bảo với cùng một bộ dữ liệu đầu vào và trạng thái ban đầu, hệ thống luôn tạo ra kết quả đầu ra giống hệt nhau 100%)",
        synonyms: "predictability, repeatable exactness, consistency",
        collocations: ["ensure execution determinism", "break test determinism", "deterministic algorithm"],
        mnemonic: "DETERMINE (xác định chắc chắn trước) => Chạy 1.000 lần vẫn ra kết quả y đúc như toán học `2 + 2 = 4`, không có chuyện lúc pass lúc fail!",
        toeicEx: "Financial regulators require strict calculation **determinism** across all automated interest-rate engines.",
        toeicVi: "Các cơ quan quản lý tài chính yêu cầu tính tất định tính toán nghiêm ngặt trên mọi công cụ tính lãi suất tự động.",
        javaEx: "Iterating over a standard `HashMap` lacks order **determinism**; switch to `LinkedHashMap` when snapshot tests depend on key order.",
        javaVi: "Việc duyệt qua một `HashMap` thông thường không đảm bảo tính tất định về thứ tự; hãy chuyển sang `LinkedHashMap` khi bài test phụ thuộc vào thứ tự khóa."
      },
      {
        word: "allocation",
        pos: "n",
        ipa: "/ˌæl.əˈkeɪ.ʃən/",
        meaning: "1) (JVM/IT) sự cấp phát vùng nhớ hoặc tài nguyên phần cứng; 2) (TOEIC/Quản trị) sự phân bổ ngân sách, vốn hoặc nhân lực",
        synonyms: "allotment, distribution, assignment, provisioning",
        collocations: ["memory allocation rate", "budget allocation", "resource allocation"],
        mnemonic: "AL (tới) + LOCATE (đặt vị trí) => Khoanh một ô đất trên thanh RAM (hoặc một khoản tiền trong quỹ) giao đúng vị trí cho đối tượng dùng!",
        toeicEx: "The board approved an additional **allocation** of $500,000 for cybersecurity training and cloud backups.",
        toeicVi: "Hội đồng quản trị đã phê duyệt khoản phân bổ bổ sung 500.000 đô la cho đào tạo an ninh mạng và sao lưu đám mây.",
        javaEx: "Escape analysis allows the JIT compiler to optimize away heap **allocation** for short-lived local objects.",
        javaVi: "Phân tích phạm vi thoát (Escape analysis) cho phép trình biên dịch JIT tối ưu hóa bỏ qua việc cấp phát trên Heap đối với các đối tượng cục bộ vòng đời ngắn."
      }
    ],
    examples: [
      {
        tag: "Global Interview",
        en: "Java `record` types enforce shallow **immutability** (**immutable** fields) and eliminate DTO boilerplate out of the box.",
        vi: "Kiểu `record` trong Java áp đặt tính bất biến nông (các trường bất biến) và loại bỏ sẵn mã DTO rườm rà ngay từ đầu.",
        note: "Dùng cụm 'shallow immutability' chứng tỏ bạn hiểu cực sâu rằng nếu bên trong record chứa `ArrayList` thì list đó vẫn cần làm bất biến riêng!"
      },
      {
        tag: "Global Interview",
        en: "Unlike OS platform threads, Java 21 virtual threads have tiny memory **overhead**, enabling millions of concurrent I/O tasks.",
        vi: "Khác với luồng hệ điều hành truyền thống, virtual threads của Java 21 có chi phí bộ nhớ phụ trội cực nhỏ, cho phép chạy hàng triệu tác vụ I/O đồng thời.",
        note: "Câu trả lời đắt giá nhất về Project Loom / Java 21 trong các cuộc phỏng vấn hiện nay."
      },
      {
        tag: "Incident War-room",
        en: "An unbounded JPA persistence context in a batch loop caused **heap exhaustion** after processing 400,000 entities.",
        vi: "Một persistence context JPA không được giải phóng trong vòng lặp chạy lô đã gây cạn kiệt vùng nhớ Heap sau khi xử lý 400.000 thực thể.",
        note: "Nhắc khéo kỹ thuật gọi `entityManager.flush()` và `entityManager.clear()` theo từng batch."
      },
      {
        tag: "Code Review",
        en: "Replacing `AtomicLong` with `LongAdder` cuts **thread contention** dramatically when dozens of threads increment metrics simultaneously.",
        vi: "Việc thay thế `AtomicLong` bằng `LongAdder` làm giảm mạnh sự tranh chấp giữa các luồng khi hàng chục luồng cùng cộng dồn chỉ số đo lường.",
        note: "Chi tiết kỹ thuật cấp độ Staff Engineer cực kỳ ghi điểm trong mắt đồng nghiệp quốc tế."
      },
      {
        tag: "Code Review",
        en: "Calling `System.currentTimeMillis()` directly inside domain logic breaks **determinism** and makes time-sensitive unit tests flaky.",
        vi: "Gọi trực tiếp `System.currentTimeMillis()` bên trong logic miền nghiệp vụ sẽ làm mất tính tất định và khiến các bài unit test phụ thuộc thời gian bị chập chờn.",
        note: "Lý giải hoàn hảo vì sao nên truyền `java.time.Clock` vào domain service."
      },
      {
        tag: "System Design",
        en: "Off-heap byte buffers in Netty reduce **garbage collection pauses** when handling massive streaming payloads.",
        vi: "Các vùng đệm byte nằm ngoài Heap trong Netty giúp giảm thiểu thời gian tạm dừng dọn rác khi xử lý các luồng dữ liệu khổng lồ.",
        note: "Kết nối mượt mà kiến thức Netty / DirectByteBuffer với hành vi của GC."
      },
      {
        tag: "Global Interview",
        en: "Proper **encapsulation** means an `Order` aggregate validates its own state transitions rather than acting as an anemic data bag.",
        vi: "Đóng gói đúng nghĩa là thực thể gốc `Order` tự kiểm soát tính hợp lệ khi chuyển trạng thái thay vì chỉ làm một túi chứa dữ liệu rỗng tuếch.",
        note: "Liên hệ trực tiếp OOP Encapsulation với Domain-Driven Design (Rich Domain Model vs Anemic Model)."
      },
      {
        tag: "Incident War-room",
        en: "A subtle **race condition** between cache population and database commit left stale balances in Redis for five minutes.",
        vi: "Một lỗi tranh đua tinh vi giữa bước nạp bộ nhớ đệm và bước chốt giao dịch DB đã để lại số dư cũ trên Redis suốt năm phút.",
        note: "Tình huống thực tế kinh điển giữa Cache-Aside pattern và Database Transaction."
      },
      {
        tag: "TOEIC Part 7",
        en: "By adopting cloud-based telephony and hybrid work schedules, Meridian Consulting cut administrative **overhead** by $140,000 annually.",
        vi: "Bằng cách áp dụng tổng đài đám mây và lịch làm việc kết hợp, Meridian Consulting đã cắt giảm 140.000 đô la chi phí vận hành hành chính mỗi năm.",
        note: "Ngữ cảnh chuẩn 100% của danh từ không đếm được 'overhead' trong bài đọc báo cáo tài chính TOEIC."
      },
      {
        tag: "TOEIC Part 7",
        en: "Department heads must submit their proposed resource **allocations** for the upcoming fiscal year no later than August 15.",
        vi: "Các trưởng bộ phận phải nộp bản đề xuất phân bổ nguồn lực cho năm tài chính tới muộn nhất vào ngày 15 tháng 8.",
        note: "Ôn lại cấu trúc hạn chót 'no later than' (= by) đi kèm 'resource allocations' trong TOEIC."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "String in Java cannot change value after new.",
          fix: "Strings in Java are immutable once instantiated.",
          why: "Chỉ cần 6 chữ chuẩn thuật ngữ 'immutable once instantiated' lập tức thể hiện trình độ tiếng Anh chuyên ngành vượt trội."
        },
        {
          bug: "Many threads fight each other to enter synchronized block.",
          fix: "High concurrency causes heavy thread contention on the synchronized block.",
          why: "'Fight each other' nghe như đánh lộn ngoài đường; thuật ngữ kỹ thuật chính thống trên mọi tài liệu Oracle/JVM là 'thread contention' (hoặc 'lock contention')."
        },
        {
          bug: "Using reflection costs many extra overheads.",
          fix: "Using reflection incurs significant CPU overhead.",
          why: "Trong tiếng Anh Mỹ và IT, 'overhead' là danh từ KHÔNG đếm được (không thêm -s và không đi với 'many'); dùng động từ 'incur / introduce overhead' cực chuẩn."
        },
        {
          bug: "Server crashed because RAM heap ran out of place.",
          fix: "The JVM crashed with an OutOfMemoryError due to heap exhaustion.",
          why: "'Ran out of place' sai collocation tiếng Anh; cụm danh từ chuyên nghiệp là 'heap exhaustion'."
        }
      ]
    },
    toeicTips: [
      "Bẫy danh từ không đếm được trong TOEIC Part 5: Từ 'overhead' (chi phí cố định vận hành doanh nghiệp như tiền thuê nhà, điện nước) ở tiếng Anh Mỹ chuẩn ETS thường viết SỐ ÍT không có 's' (`reduce overhead`, `low overhead`) hoặc đứng làm danh từ ghép trước `overhead costs / expenses`!",
      "Họ từ 'allocate' xuất hiện trong hầu hết mọi đề TOEIC: Động từ `allocate A to B` (phân bổ A cho B) -> Danh từ `budget / resource allocation` (sự phân bổ ngân sách/nguồn lực).",
      "Mẹo nhớ trọng âm để nghe chuẩn Part 3–4 và phỏng vấn: Các danh từ đuôi `-tion` luôn nhấn trọng âm ngay TRƯỚC `-tion` (`en-cap-su-LA-tion`, `al-lo-CA-tion`), còn đuôi `-ism` giữ nguyên trọng âm gốc (`po-ly-MOR-phism`, `de-TER-mi-nism`)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "eliminates race conditions",
          "synchronization overhead.",
          "Making DTOs immutable",
          "and avoids unnecessary",
          "across virtual threads"
        ],
        answer: "Making DTOs immutable eliminates race conditions across virtual threads and avoids unnecessary synchronization overhead.",
        vi: "Việc thiết kế các lớp DTO bất biến giúp loại bỏ lỗi tranh đua giữa các virtual threads và tránh được chi phí đồng bộ phụ trội không cần thiết."
      },
      fillBlank: {
        sentence: "Thread dumps revealed severe thread _____ on the shared connection lock during peak traffic.",
        answer: "contention",
        accepted: ["contention"],
        hint: "Danh từ đi sau 'thread' hoặc 'lock' chỉ sự tranh chấp khóa khiến nhiều luồng bị BLOCKED xếp hàng chờ",
        explain: "'Thread contention' (hoặc 'lock contention') là hiện tượng nhiều luồng cùng tranh giành quyền giữ một monitor/lock duy nhất, làm nghẽn khả năng mở rộng của ứng dụng."
      }
    },
    quiz: [
      {
        q: "Trong vòng phỏng vấn JVM Deep-Dive, giám khảo hỏi: 'What is the difference between a race condition and thread contention?' Câu trả lời nào sắc sảo nhất?",
        options: [
          "Hai khái niệm hoàn toàn giống nhau, chỉ khác tên gọi giữa Java 8 và Java 21.",
          "A race condition is a correctness bug caused by unsynchronized access to shared mutable state, whereas thread contention is a performance bottleneck when many threads wait for the same lock.",
          "Race condition chỉ xảy ra trên ổ cứng SSD, còn thread contention chỉ xảy ra trong HTML/CSS.",
          "Race condition giúp code chạy nhanh hơn, còn thread contention làm giảm tiền thuê văn phòng."
        ],
        answer: 1,
        explain: "Đáp án B đạt điểm 10 tuyệt đối ở vòng phỏng vấn Senior/Staff Java: phân biệt rạch ròi 'race condition' (lỗi làm SAI lệch kết quả do thiếu đồng bộ trên dữ liệu khả biến) với 'thread contention' (nghẽn HIỆU NĂNG do quá nhiều luồng chờ chung một khóa). Các câu A, C, D đều sai."
      },
      {
        q: "[TOEIC Part 5] By consolidating its two suburban warehouses into a single automated facility, Nexus Retail substantially reduced its monthly _____.",
        options: [
          "overhead",
          "polymorphism",
          "contention",
          "determinism"
        ],
        answer: 0,
        explain: "Đáp án A ('overhead' — chi phí vận hành gián tiếp/cố định như kho bãi, mặt bằng, điện nước) là từ vựng tài chính chuẩn xác nhất trong ngữ cảnh gộp hai nhà kho để tiết kiệm chi phí hàng tháng. B, C, D là các thuật ngữ thuần kỹ thuật không phù hợp ngữ cảnh tài chính kho vận."
      },
      {
        q: "[TOEIC Part 5] The executive committee approved the _____ of an extra $2 million toward expanding the company's cloud research lab.",
        options: [
          "allocate",
          "allocated",
          "allocating",
          "allocation"
        ],
        answer: 3,
        explain: "Đáp án D ('allocation' — danh từ) đứng giữa mạo từ xác định 'the' và giới từ 'of' tạo thành cấu trúc danh từ chính chuẩn mực 'the allocation of...' (việc phân bổ khoản tiền...). A là động từ nguyên thể, B là quá khứ/phân từ, C là V-ing (không đứng giữa 'the ... of' khi đã có danh từ chính 'allocation')."
      }
    ]
  },

  V4_2: {
    duration: "50 phút",
    toeicTarget: "Giao tiếp Senior Java Quốc tế & TOEIC 650–750+",
    javaContext: "Thiết Kế Microservices, Event-Driven Architecture (Kafka), Cloud-Native & TOEIC Part 6–7 Hạ tầng doanh nghiệp",
    teacherIntro: "Khi một hệ thống Monolith phình to tới hàng triệu người dùng và bạn dẫn dắt đội ngũ tách sang Microservices chạy trên Kubernetes cùng Apache Kafka, toàn bộ từ vựng giao tiếp hàng ngày của bạn thay đổi hoàn toàn! Trong phòng họp Kiến trúc (Architecture Review Board), người ta không hỏi cách viết vòng `for` nữa — người ta hỏi: 'Should we use Saga orchestration or event choreography here?', 'How do we handle eventual consistency?', 'Where is our single point of failure, and is automatic failover tested?'. Nắm vững 10 thuật ngữ hệ thống phân tán trong bài V4.2 này, anh em sẽ tự tin vẽ sơ đồ và thuyết trình trước bất kỳ CTO quốc tế nào — đồng thời bỏ túi luôn những từ vựng hạng nặng như resilience, partition, horizontal, fault-tolerant trong đề thi TOEIC Reading!",
    javaAnalogy: {
      title: "Orchestration vs Choreography trong Microservices giống hệt Dàn Nhạc Giao Hưởng vs Nhóm Nhảy Đường Phố",
      body: "Khi xử lý giao dịch phân tán qua nhiều microservice đã được tách rời (`decoupled`): **Orchestration** giống như dàn nhạc giao hưởng có một Nhạc trưởng trung tâm cầm đũa chỉ huy từng người ('OrderSaga gọi Payment -> xong mới vẫy Inventory -> xong mới vẫy Shipping'); dễ theo dõi luồng nhưng coi chừng vị nhạc trưởng biến thành điểm chết duy nhất (`single point of failure`) nếu thiếu cơ chế chuyển đổi dự phòng (`failover`). Ngược lại, **Choreography** giống nhóm nhảy Flashmob nghe tiếng trống Kafka (chia thành nhiều làn `partition` để co giãn ngang `horizontal scaling`): mỗi vũ công tự lắng nghe sự kiện `OrderCreated` rồi tự múa phần của mình, giúp hệ thống cực kỳ dẻo dai (`resilience`), chịu lỗi tốt (`fault-tolerant`) và đạt trạng thái nhất quán cuối cùng (`eventual consistency`)!"
    },
    objectives: [
      "So sánh rành mạch kiến trúc hướng sự kiện và giao dịch phân tán bằng tiếng Anh với decoupled, orchestration, choreography, eventual consistency và Kafka partition.",
      "Trình bày giải pháp chịu tải và chống sập hệ thống Cloud-Native với horizontal scaling, resilience, fault-tolerant, single point of failure (SPOF) và failover.",
      "Nhận diện nhanh các từ vựng chủ điểm phục hồi kinh doanh & không gian/hạ tầng (resilience, partition, failover) trong TOEIC Part 5–7."
    ],
    formulaCards: [
      {
        label: "Khung Giải Thích Lý Do Tách Biệt Service Qua Kafka (Decoupling)",
        formula: "Publishing domain events to Kafka keeps OrderService decoupled from downstream analytics and notification consumers.",
        note: "Cấu trúc 'keep A decoupled from B' chuẩn mực cho mọi câu hỏi về Event-Driven Architecture."
      },
      {
        label: "Khung Chọn Orchestration Hay Choreography Cho Saga Pattern",
        formula: "We chose choreography for simple notifications, but used central orchestration for multi-step payment refunds.",
        note: "Cho thấy tư duy thực tế (pragmatic): không cực đoan tôn sùng một mẫu thiết kế duy nhất!"
      },
      {
        label: "Khung Thuyết Minh Chống Sập & Tự Phục Hồi (Eliminating SPOF)",
        formula: "Deploying multi-AZ replicas with automated failover eliminates any single point of failure and boosts system resilience.",
        note: "Câu đinh khi trình bày phần High Availability / Disaster Recovery trên AWS hoặc GCP."
      },
      {
        label: "Khung Giải Thích Nhất Quán Cuối Cùng Với Product Owner",
        formula: "Because inventory updates asynchronously, the dashboard reflects eventual consistency within two hundred milliseconds.",
        note: "Giúp bên nghiệp vụ hiểu rõ độ trễ đồng bộ nhỏ đổi lấy tốc độ đặt hàng cực nhanh."
      }
    ],
    sections: [
      {
        heading: "1. Tư Duy Bất Đồng Bộ & Event-Driven: Decoupled, Orchestration vs Choreography & Eventual Consistency",
        paragraphs: [
          "Sai lầm kinh điển nhất khi mới chuyển từ Monolith sang Microservices là biến các lời gọi hàm trong RAM thành một chuỗi gọi REST đồng bộ dài dằng dặc (A gọi B, B gọi C, C gọi D — hay còn bị châm biếm là 'Distributed Monolith'!). Khi D bị chậm, toàn bộ A-B-C chết chùm. Giải pháp cốt lõi là tách rời sự phụ thuộc trực tiếp ('decoupled' services) thông qua hàng đợi tin nhắn hoặc luồng sự kiện bất đồng bộ.",
          "Khi không còn giao dịch ACID trải ngang một DB duy nhất, dữ liệu giữa các service sẽ tuân theo mô hình nhất quán cuối cùng ('eventual consistency' — có thể lệch nhau vài chục mili-giây trong lúc message đang bay, nhưng cuối cùng chắc chắn hội tụ về trạng thái đúng). Và để điều phối chuỗi nghiệp vụ Saga, hãy phát âm thật chuẩn hai từ dễ nhầm: 'orchestration' (/ˌɔːr.kɪˈstreɪ.ʃən/ — điều phối tập trung) và 'choreography' (/ˌkɔːr.iˈɑː.ɡrə.fi/ — phối hợp phi tập trung qua sự kiện)."
        ],
        bullets: [
          "Nhớ mẹo phát âm chữ `CH` trong cả hai từ `orCHestration` và `CHoreography` đều đọc là âm **/k/** cứng (giống `architect`), KHÔNG đọc là /tʃ/!",
          "Dùng `Saga Orchestration` (như Temporal / Camunda / state machine) khi quy trình có nhiều bước rẽ nhánh và bù trừ (`compensating transactions`) phức tạp.",
          "Khi dùng Kafka, gắn `orderId` làm khóa phân vùng (`partition key`) để đảm bảo mọi sự kiện của cùng một đơn hàng luôn đi vào đúng một `partition` theo đúng thứ tự!"
        ]
      },
      {
        heading: "2. Kiến Trúc Bất Tử Trên Đám Mây: Horizontal Scaling, Resilience, Fault-Tolerant, SPOF & Failover",
        paragraphs: [
          "Trong thế giới Cloud-Native, phần cứng chắc chắn sẽ hỏng vào lúc bạn ít ngờ nhất ('Everything fails all the time' — Werner Vogels, CTO Amazon). Vì thế, thay vì chỉ nâng RAM/CPU cho một máy chủ khổng lồ ('vertical scaling / scale up') vốn có giới hạn trần vật lý và tạo ra điểm chết duy nhất ('single point of failure' — viết tắt là SPOF), kiến trúc hiện đại ưu tiên mở rộng theo chiều ngang ('horizontal scaling' — thêm hàng chục pod không trạng thái stateless chạy song song).",
          "Hai từ khóa thể hiện sức sống của hệ thống là 'fault-tolerant' (chịu lỗi — một node ổ cứng cháy hay một Availability Zone mất điện thì hệ thống vẫn tiếp tục phục vụ bình thường không gãy) và 'resilience' (khả năng đàn hồi tự phục hồi nhanh chóng sau cú sốc nhờ Circuit Breaker, Bulkhead, Backpressure và cơ chế chuyển mạch dự phòng tự động 'failover')."
        ],
        bullets: [
          "Trong Kafka, số lượng consumer tối đa hoạt động hiệu quả trong cùng một Consumer Group bị giới hạn bởi tổng số `partitions` của topic đó!",
          "Luôn kiểm tra mọi tầng từ DNS, API Gateway, App Pods, Redis cho tới Database xem còn tồn tại `single point of failure` nào không.",
          "Phân biệt nhỏ nhưng sâu: `fault-tolerant` là bị thương một bộ phận vẫn chạy tiếp không gián đoạn; `resilience` bao hàm cả khả năng bật dậy hồi phục nhanh sau biến cố lớn."
        ]
      },
      {
        heading: "3. Liên Hệ Điểm Cao TOEIC 650–750+: Nghĩa Đời Thực Của Partition, Resilience & Decouple",
        paragraphs: [
          "Đừng bất ngờ khi đi thi TOEIC Part 1 (mô tả tranh văn phòng) và Part 7 (sửa chữa nội thất công sở) bạn gặp lại từ 'partition'! Trong văn phòng truyền thống, 'partition' (hoặc 'cubicle partition') chính là 'vách ngăn chia ô bàn làm việc' giữa các nhân viên — cùng chung bản chất 'chia tách thành các ngăn độc lập' với Database Table Partition hay Kafka Topic Partition!",
          "Trong khi đó, ở các bài báo kinh tế của TOEIC Part 7, danh từ 'resilience' (và tính từ 'resilient') là từ vựng hạng sang dùng để ca ngợi 'sự kiên cường, khả năng phục hồi vững vàng' của chuỗi cung ứng hoặc doanh nghiệp sau khủng hoảng thị trường."
        ],
        bullets: [
          "Bẫy TOEIC Part 1 & Part 7 với `partition`: 'Workers are installing glass partitions between desks' = Nhân viên đang lắp vách ngăn kính giữa các bàn làm việc!",
          "Họ từ rất hay hỏi trong TOEIC Part 5: tính từ `resilient` (kiên cường/đàn hồi nhanh) <-> danh từ `resilience` (sự phục hồi bền bỉ).",
          "Cụm `single point of failure` cũng được dùng rộng rãi trong quản trị nhân sự/vận hành khi chỉ một cá nhân duy nhất nắm giữ toàn bộ mật khẩu hay quy trình mà không có người thay thế (backup)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "decoupled",
        pos: "adj",
        ipa: "/diːˈkʌp.əld/",
        meaning: "được tách rời sự phụ thuộc trực tiếp (các dịch vụ/mô-đun giao tiếp qua giao diện hoặc sự kiện trung gian, có thể phát triển và triển khai độc lập)",
        synonyms: "loosely coupled, independent, separated",
        collocations: ["loosely decoupled microservices", "keep producers decoupled from consumers", "decoupled architecture"],
        mnemonic: "DE (tháo gỡ ra) + COUPLED (cặp đôi buộc chặt) => Tháo sợi xích trói buộc hai service để mỗi anh tự bay trên đường băng riêng!",
        toeicEx: "Under the new compensation plan, annual safety bonuses are **decoupled** from short-term sales quotas.",
        toeicVi: "Theo kế hoạch đãi ngộ mới, tiền thưởng an toàn hàng năm được tách rời khỏi chỉ tiêu doanh số ngắn hạn.",
        javaEx: "Using Spring `ApplicationEventPublisher` or Kafka keeps billing logic **decoupled** from email notification delivery.",
        javaVi: "Sử dụng `ApplicationEventPublisher` của Spring hoặc Kafka giúp giữ logic thanh toán tách rời khỏi khâu gửi thông báo email."
      },
      {
        word: "orchestration",
        pos: "n",
        ipa: "/ˌɔːr.kɪˈstreɪ.ʃən/",
        meaning: "sự điều phối tập trung (một bộ điều khiển trung tâm chỉ đạo tuần tự từng bước cho các dịch vụ con hoặc quản lý vòng đời container như Kubernetes)",
        synonyms: "centralized coordination, workflow direction",
        collocations: ["Saga orchestration pattern", "container orchestration (Kubernetes)", "workflow orchestration engine"],
        mnemonic: "ORCHESTRA là dàn nhạc giao hưởng => Có một vị Nhạc trưởng đứng bục trung tâm cầm đũa chỉ huy từng nhạc công vào nhịp!",
        toeicEx: "Successful global product launches require careful **orchestration** across marketing, logistics, and legal teams.",
        toeicVi: "Các đợt ra mắt sản phẩm toàn cầu thành công đòi hỏi sự điều phối nhịp nhàng giữa các đội tiếp thị, hậu cần và pháp lý.",
        javaEx: "We implemented loan-approval **orchestration** with Temporal Java SDK to track retries and compensating steps clearly.",
        javaVi: "Chúng tôi đã triển khai điều phối quy trình duyệt khoản vay bằng Temporal Java SDK để theo dõi rõ ràng các lần thử lại và bước hoàn trả bù trừ."
      },
      {
        word: "choreography",
        pos: "n",
        ipa: "/ˌkɔːr.iˈɑː.ɡrə.fi/",
        meaning: "sự phối hợp phi tập trung theo kịch bản sự kiện (không có nhạc trưởng trung tâm; mỗi dịch vụ tự lắng nghe sự kiện liên quan và tự phản ứng)",
        synonyms: "event-driven coordination, decentralized workflow",
        collocations: ["event choreography", "orchestration versus choreography", "choreography-based Saga"],
        mnemonic: "CHOREO (vũ đạo nhảy nhóm) => Không cần người đứng giữa hét lệnh, nhạc Kafka nổi lên là mỗi vũ công microservice tự bắt nhịp nhảy phần việc của mình!",
        toeicEx: "The opening ceremony featured stunning lighting effects and intricate stage **choreography**.",
        toeicVi: "Lễ khai mạc gây ấn tượng với hiệu ứng ánh sáng choáng ngợp và vũ đạo sân khấu công phu.",
        javaEx: "Pure event **choreography** works cleanly for three services, but debugging cyclic event chains across twelve services becomes painful.",
        javaVi: "Phối hợp sự kiện phi tập trung hoạt động rất gọn với ba dịch vụ, nhưng gỡ lỗi chuỗi sự kiện vòng tròn trải qua mười hai dịch vụ lại trở nên cực kỳ vất vả."
      },
      {
        word: "eventual consistency",
        pos: "n phrase",
        ipa: "/ɪˈven.tʃu.əl kənˈsɪs.tən.si/",
        meaning: "tính nhất quán cuối cùng (dữ liệu phân tán không đồng bộ tức thì ngay trong cùng mili-giây nhưng cam kết sẽ hội tụ đồng nhất sau một độ trễ ngắn)",
        synonyms: "asynchronous convergence, deferred consistency",
        collocations: ["accept eventual consistency", "strong vs eventual consistency", "achieve eventual consistency via outbox pattern"],
        mnemonic: "EVENTUAL (rốt cuộc, cuối cùng rồi cũng tới) + CONSISTENCY (đồng nhất) => Tiền chuyển xong hiển thị ở lịch sử chậm hơn 0.3 giây nhưng rốt cuộc vẫn khớp 100%!",
        toeicEx: "Multi-region inventory databases often rely on **eventual consistency** to keep checkout pages fast worldwide.",
        toeicVi: "Các cơ sở dữ liệu tồn kho đa khu vực thường dựa vào tính nhất quán cuối cùng để giữ tốc độ trang thanh toán luôn nhanh trên toàn cầu.",
        javaEx: "Using the Transactional Outbox pattern with Debezium guarantees **eventual consistency** between PostgreSQL and Elasticsearch.",
        javaVi: "Sử dụng mẫu thiết kế Transactional Outbox kết hợp Debezium đảm bảo tính nhất quán cuối cùng giữa PostgreSQL và Elasticsearch."
      },
      {
        word: "resilience",
        pos: "n",
        ipa: "/rɪˈzɪl.jəns/",
        meaning: "khả năng đàn hồi, tự chống chịu và phục hồi nhanh chóng sau sự cố (mạng chập chờn, service con sập) hoặc khủng hoảng kinh doanh",
        synonyms: "robustness, adaptability, recovery strength, toughness",
        collocations: ["system resilience", "supply chain resilience", "build resilience with circuit breakers"],
        mnemonic: "Nhớ thẳng tên thư viện quốc dân của Java Microservices: **Resilience4j** (CircuitBreaker, Retry, RateLimiter, Bulkhead)!",
        toeicEx: "Analysts praised the manufacturer's remarkable **resilience** amid rising energy and shipping costs.",
        toeicVi: "Các nhà phân tích ca ngợi khả năng chống chịu phục hồi đáng nể của nhà sản xuất giữa bối cảnh chi phí năng lượng và vận tải leo thang.",
        javaEx: "Chaos engineering experiments on staging validate our platform's **resilience** before peak Black Friday traffic.",
        javaVi: "Các thử nghiệm kỹ thuật hỗn loạn (Chaos engineering) trên staging giúp kiểm chứng độ đàn hồi phục hồi của nền tảng trước đợt tải đỉnh điểm Black Friday."
      },
      {
        word: "fault-tolerant",
        pos: "adj",
        ipa: "/ˈfɔːlt ˌtɑː.lɚ.ənt/",
        meaning: "chịu lỗi tốt (có khả năng tiếp tục vận hành đúng đắn không bị gián đoạn ngay cả khi một hoặc vài thành phần phần cứng/phần mềm gặp lỗi)",
        synonyms: "failure-resistant, resilient, high-reliability",
        collocations: ["fault-tolerant distributed cluster", "design fault-tolerant pipelines", "fault tolerance (n)"],
        mnemonic: "FAULT (lỗi hỏng hóc) + TOLERANT (bao dung, chịu đựng được) => Máy bay 4 động cơ hỏng mất 1 động cơ vẫn bay hạ cánh an toàn chính là fault-tolerant!",
        toeicEx: "Air-traffic control centers depend on **fault-tolerant** computer networks that never go dark during hardware failures.",
        toeicVi: "Các trung tâm kiểm soát không lưu phụ thuộc vào mạng máy tính chịu lỗi không bao giờ sập nguồn khi xảy ra hỏng hóc phần cứng.",
        javaEx: "With replication factor 3 and `min.insync.replicas=2`, our Kafka topic remains **fault-tolerant** if one broker crashes.",
        javaVi: "Với hệ số nhân bản bằng 3 và `min.insync.replicas=2`, topic Kafka của chúng tôi vẫn duy trì khả năng chịu lỗi nếu một máy chủ broker bị sập."
      },
      {
        word: "horizontal scaling",
        pos: "n phrase",
        ipa: "/ˌhɔːr.ɪˈzɑːn.təl ˈskeɪ.lɪŋ/",
        meaning: "mở rộng theo chiều ngang (tăng năng lực xử lý bằng cách bổ sung thêm nhiều máy chủ/pod chạy song song thay vì nâng cấp phần cứng 1 máy)",
        synonyms: "scaling out, elastic instance expansion",
        collocations: ["effortless horizontal scaling", "stateless services enable horizontal scaling", "horizontal pod autoscaler (HPA)"],
        mnemonic: "HORIZONTAL (đường chân trời nằm NGANG) => Xếp dàn hàng ngang từ 2 pod lên 20 pod gánh việc chung, ngược với Vertical (chồng cao RAM 1 máy)!",
        toeicEx: "Cloud infrastructure allows e-commerce startups to achieve rapid **horizontal scaling** during seasonal promotions.",
        toeicVi: "Hạ tầng đám mây cho phép các công ty khởi nghiệp thương mại điện tử mở rộng quy mô theo chiều ngang nhanh chóng trong các đợt khuyến mãi theo mùa.",
        javaEx: "Storing HTTP sessions in Redis instead of local JVM memory unlocked seamless **horizontal scaling** on Kubernetes.",
        javaVi: "Việc lưu phiên HTTP trên Redis thay vì bộ nhớ JVM cục bộ đã mở khóa khả năng co giãn theo chiều ngang mượt mà trên Kubernetes."
      },
      {
        word: "single point of failure",
        pos: "n phrase",
        ipa: "/ˈsɪŋ.ɡəl pɔɪnt əv ˈfeɪl.jɚ/",
        meaning: "điểm lỗi duy nhất (viết tắt SPOF — một thành phần độc đạo mà hễ nó ngừng hoạt động là kéo sập toàn bộ hệ thống hoặc quy trình)",
        synonyms: "SPOF, critical vulnerability bottleneck, non-redundant node",
        collocations: ["eliminate every single point of failure", "become a single point of failure", "identify SPOFs in architecture"],
        mnemonic: "Cây cầu độc đạo duy nhất bắc qua sông: cầu gãy là toàn thành phố bị cô lập => Đó chính là Single Point of Failure!",
        toeicEx: "Cross-training employees ensures that no individual specialist becomes a **single point of failure** during vacations.",
        toeicVi: "Đào tạo chéo cho nhân viên đảm bảo không chuyên gia cá nhân nào trở thành điểm nghẽn phụ thuộc duy nhất trong các kỳ nghỉ phép.",
        javaEx: "Deploying an unclustered Redis instance for auth tokens introduces a dangerous **single point of failure**.",
        javaVi: "Việc triển khai một máy chủ Redis đơn lẻ không phân cụm cho token xác thực sẽ tạo ra một điểm lỗi duy nhất đầy nguy hiểm."
      },
      {
        word: "partition",
        pos: "n / v",
        ipa: "/pɑːrˈtɪʃ.ən/",
        meaning: "1) (Kafka/DB) phân vùng dữ liệu chia nhỏ để lưu trữ & xử lý song song; sự đứt kết nối mạng giữa các cụm (network partition); 2) (Văn phòng TOEIC) vách ngăn bàn làm việc",
        synonyms: "shard, segment, division; room divider / cubicle wall",
        collocations: ["Kafka topic partition", "database table partitioning", "install acoustic office partitions"],
        mnemonic: "PART (chia thành từng phần nhỏ) => Chia bảng tỷ dòng theo từng tháng (DB partition), chia luồng Kafka thành 12 làn, hoặc chia phòng lớn bằng vách ngăn kính!",
        toeicEx: "Removable glass **partitions** were installed to create three quiet meeting rooms on the fourth floor.",
        toeicVi: "Các vách ngăn kính tháo lắp được đã được dựng lên để tạo ra ba phòng họp yên tĩnh trên tầng bốn.",
        javaEx: "Hashing `customerId` as the message key guarantees all events for one customer land in the same Kafka **partition**.",
        javaVi: "Băm `customerId` làm khóa tin nhắn đảm bảo mọi sự kiện của cùng một khách hàng luôn rơi vào đúng một phân vùng Kafka duy nhất."
      },
      {
        word: "failover",
        pos: "n / v (fail over)",
        ipa: "/ˈfeɪlˌoʊ.vɚ/",
        meaning: "cơ chế tự động chuyển đổi sang hệ thống/máy chủ dự phòng ngay khi máy chủ chính gặp sự cố để duy trì hoạt động liên tục",
        synonyms: "automatic switchover, backup takeover",
        collocations: ["automated database failover", "multi-region failover drill", "fail over to the standby node"],
        mnemonic: "Khi máy chính FAIL (hỏng), lưu lượng lập tức nhảy OVER (sang bên kia) cho máy dự phòng Standby gánh tiếp không đứt nhịp!",
        toeicEx: "Quarterly disaster-recovery drills verify that our secondary data center can complete **failover** within two minutes.",
        toeicVi: "Các cuộc diễn tập khôi phục thảm họa hàng quý xác minh rằng trung tâm dữ liệu phụ của chúng tôi có thể hoàn tất chuyển mạch dự phòng trong vòng hai phút.",
        javaEx: "Configuring AWS Aurora multi-AZ JDBC drivers reduced read/write **failover** recovery time in our Spring app to under 5 seconds.",
        javaVi: "Cấu hình trình điều khiển JDBC đa vùng của AWS Aurora đã rút ngắn thời gian khôi phục chuyển mạch dự phòng đọc/ghi trong ứng dụng Spring xuống dưới 5 giây."
      }
    ],
    examples: [
      {
        tag: "System Design",
        en: "When downstream consumers lag behind, reactive streams apply **backpressure** so fast producers don't overwhelm memory.",
        vi: "Khi các dịch vụ tiêu thụ phía dưới xử lý chậm lại, luồng phản ứng sẽ áp dụng cơ chế ép ngược (backpressure) để bên phát nhanh không làm tràn bộ nhớ.",
        note: "Bổ sung từ khóa đắt giá `backpressure` khi thảo luận Kafka / Reactor / WebFlux."
      },
      {
        tag: "System Design",
        en: "Distributed tracing with OpenTelemetry gives us end-to-end **observability** across **decoupled** microservices.",
        vi: "Truy vết phân tán với OpenTelemetry mang lại khả năng quan sát đầu-cuối xuyên suốt các microservice tách rời.",
        note: "Kết hợp `observability` (Logs + Metrics + Traces) cùng `decoupled microservices`."
      },
      {
        tag: "Global Interview",
        en: "According to the CAP theorem, during a network **partition**, a distributed store must choose between strict consistency and availability.",
        vi: "Theo định lý CAP, khi xảy ra sự cố chia cắt mạng (network partition), hệ thống lưu trữ phân tán buộc phải chọn giữa tính nhất quán nghiêm ngặt và tính sẵn sàng.",
        note: "Câu định nghĩa Định lý CAP kinh điển phải thuộc nằm lòng khi đi phỏng vấn System Design!"
      },
      {
        tag: "Incident War-room",
        en: "Hot-key skew overloaded **partition** #3 while the other eleven Kafka **partitions** sat nearly idle.",
        vi: "Hiện tượng lệch khóa nóng đã làm quá tải phân vùng số 3 trong khi mười một phân vùng Kafka còn lại gần như nhàn rỗi.",
        note: "Tình huống thực tế (data skew / hot partition) cực kỳ phổ biến khi một đại lý lớn bắn hàng triệu đơn hàng cùng 1 `merchantId`."
      },
      {
        tag: "Code Review",
        en: "Wrapping the external exchange-rate call in a Resilience4j `@CircuitBreaker` improves **resilience** when the vendor API goes down.",
        vi: "Bọc lời gọi tỷ giá bên ngoài trong `@CircuitBreaker` của Resilience4j giúp tăng khả năng chống chịu khi API nhà cung cấp bị sập.",
        note: "Góp ý thiết thực bảo vệ hệ thống khỏi lỗi dây chuyền (cascading failures)."
      },
      {
        tag: "System Design",
        en: "Active-active multi-region deployment eliminates regional **single points of failure** and supports near-instant DNS **failover**.",
        vi: "Triển khai đa khu vực cùng hoạt động (active-active) giúp xóa bỏ các điểm lỗi duy nhất cấp vùng và hỗ trợ chuyển đổi dự phòng DNS gần như tức thì.",
        note: "Kiến trúc chuẩn mực cho các hệ thống ngân hàng lõi và thanh toán quốc tế."
      },
      {
        tag: "Global Interview",
        en: "We moved from synchronous REST chains to Kafka **choreography**, cutting checkout response time from 1.8s to 150ms via **eventual consistency**.",
        vi: "Chúng tôi chuyển từ chuỗi gọi REST đồng bộ sang phối hợp sự kiện qua Kafka, kéo thời gian phản hồi đặt hàng từ 1,8 giây xuống 150ms nhờ mô hình nhất quán cuối cùng.",
        note: "Ví dụ STAR hoàn hảo có số liệu trước/sau thuyết phục hoàn toàn người phỏng vấn."
      },
      {
        tag: "Daily Standup",
        en: "Today I'm testing Kubernetes HPA rules to verify **horizontal scaling** when CPU usage crosses 70%.",
        vi: "Hôm nay tôi đang kiểm thử các quy tắc HPA của Kubernetes để xác minh khả năng tự co giãn ngang khi mức CPU vượt ngưỡng 70%.",
        note: "Ngắn gọn, chuẩn thuật ngữ Cloud-Native hàng ngày."
      },
      {
        tag: "TOEIC Part 7",
        en: "Maintenance crews will remove the temporary wooden **partitions** in Lobby B once the marble flooring is polished.",
        vi: "Đội bảo trì sẽ dỡ bỏ các vách ngăn gỗ tạm thời tại Sảnh B ngay khi sàn đá cẩm thạch được đánh bóng xong.",
        note: "Ghi nhớ nghĩa 'vách ngăn nội thất' của `partition` để ăn điểm tuyệt đối TOEIC Part 1 & Part 7!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Diversifying export markets strengthened the electronics firm's financial **resilience** throughout the global downturn.",
        vi: "Việc đa dạng hóa thị trường xuất khẩu đã củng cố khả năng chống chịu tài chính vững vàng của hãng điện tử trong suốt giai đoạn suy thoái toàn cầu.",
        note: "Collocation điểm cao TOEIC 750+: `financial / supply-chain resilience`."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Service A and Service B don't stick together anymore because of Kafka.",
          fix: "Service A and Service B are loosely decoupled via Kafka.",
          why: "'Don't stick together' là văn nói đời thường ngây ngô; 'loosely decoupled' là thuật ngữ kiến trúc chuẩn toàn cầu."
        },
        {
          bug: "We add more 10 servers horizontal to carry high traffic.",
          fix: "We use horizontal scaling to spin up ten additional instances under heavy load.",
          why: "Ghép từ 'add more 10 servers horizontal' sai cả trật tự từ lẫn từ loại; dùng 'horizontal scaling' + phrasal verb 'spin up instances' chuẩn bản xứ."
        },
        {
          bug: "Data in two DBs will same-same at the end.",
          fix: "Data across both databases achieves eventual consistency.",
          why: "'Same-same at the end' gây mất điểm nghiêm trọng trong phỏng vấn; chỉ cần hai từ 'eventual consistency' là định danh chính xác mô hình phân tán."
        },
        {
          bug: "If main DB dies, it jumps to backup DB automatic.",
          fix: "If the primary database fails, automated failover switches traffic to the standby replica.",
          why: "Dùng chuẩn bộ ba thuật ngữ hạ tầng: `primary` (chính), `standby replica` (bản sao dự phòng), và `automated failover` (chuyển mạch dự phòng tự động)."
        }
      ]
    },
    toeicTips: [
      "Mẹo vàng TOEIC Listening Part 1 (Tả tranh): Khi thấy ảnh chụp văn phòng có các tấm vách ngăn chia từng ô bàn làm việc (cubicles), đáp án đúng rất hay chứa từ `partitions` (ví dụ: `Desks are separated by low partitions`).",
      "Trong TOEIC Reading Part 5, cặp từ loại `resilient` (adj — kiên cường, phục hồi nhanh) và `resilience` (n — tính bền bỉ, đàn hồi) thường xuất hiện ở các câu từ vựng nâng cao mốc 700+ điểm.",
      "Đừng phát âm sai chữ `ch` trong phỏng vấn: `orchestration` (/ˌɔːr.kɪˈstreɪ.ʃən/) và `choreography` (/ˌkɔːr.iˈɑː.ɡrə.fi/) đều phát âm âm đầu `ch` thành **/k/**!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "any single point of failure",
          "Multi-region replication",
          "eliminates",
          "and improves platform resilience.",
          "with automated failover"
        ],
        answer: "Multi-region replication with automated failover eliminates any single point of failure and improves platform resilience.",
        vi: "Nhân bản đa khu vực kết hợp chuyển mạch dự phòng tự động giúp loại bỏ mọi điểm lỗi duy nhất và nâng cao độ bền bỉ phục hồi của nền tảng."
      },
      fillBlank: {
        sentence: "Instead of synchronous REST chains, event-driven microservices embrace _____ consistency across separate databases.",
        answer: "eventual",
        accepted: ["eventual"],
        hint: "Tính từ bắt đầu bằng chữ 'e' ghép với 'consistency' chỉ mô hình nhất quán cuối cùng",
        explain: "'Eventual consistency' (tính nhất quán cuối cùng) là mô hình dữ liệu cốt lõi trong hệ thống phân tán hướng sự kiện, đánh đổi sự đồng bộ tức thì để lấy độ sẵn sàng và tốc độ phản hồi cao."
      }
    },
    quiz: [
      {
        q: "Bạn đang thiết kế luồng xử lý hoàn tiền phức tạp gồm 6 bước tuần tự (kiểm tra gian lận -> hoàn ví -> hủy tích điểm -> cập nhật sổ cái kế toán -> thu hồi voucher -> gửi biên lai), đòi hỏi theo dõi trạng thái tập trung và bù trừ rõ ràng nếu bước 4 thất bại. Mẫu thiết kế nào phù hợp hơn?",
        options: [
          "Saga Orchestration (có bộ điều phối trung tâm quản lý máy trạng thái và gọi các bước bù trừ tường minh).",
          "Viết tất cả vào một hàm JSP duy nhất trên trình duyệt.",
          "Xóa hết khóa chính để tạo single point of failure.",
          "Tắt tính fault-tolerant của cụm Kafka."
        ],
        answer: 0,
        explain: "Đáp án A chính xác: Khi quy trình nghiệp vụ dài, nhiều bước phụ thuộc tuần tự và cần quản lý giao dịch bù trừ (compensating transactions) minh bạch, Saga Orchestration vượt trội hơn hẳn Event Choreography về khả năng kiểm soát và gỡ lỗi."
      },
      {
        q: "[TOEIC Part 5] Global logistics providers have invested heavily in AI forecasting tools to strengthen supply-chain _____.",
        options: [
          "resilient",
          "resiliently",
          "resilience",
          "choreography"
        ],
        answer: 2,
        explain: "Đáp án C ('resilience' — danh từ không đếm được) đứng sau danh từ phụ 'supply-chain' làm tân ngữ cho ngoại động từ 'strengthen' -> 'strengthen supply-chain resilience' (củng cố khả năng chống chịu phục hồi của chuỗi cung ứng). A là tính từ, B là trạng từ, D ('vũ đạo') sai nghĩa."
      },
      {
        q: "[TOEIC Part 1 / Part 7] Trong email thông báo cải tạo văn phòng có viết: 'Contractors will install soundproof partitions between the sales and engineering zones this Saturday.' Từ 'partitions' ở đây có nghĩa là gì?",
        options: [
          "Các phân vùng ổ cứng máy chủ Linux.",
          "Các vách ngăn cách âm phân chia không gian văn phòng.",
          "Các bản hợp đồng bảo hiểm nhân thọ.",
          "Các chuyến bay khứ hồi cuối tuần."
        ],
        answer: 1,
        explain: "Đáp án B chính xác: Trong ngữ cảnh không gian tòa nhà/văn phòng của đề thi TOEIC, 'soundproof partitions' có nghĩa là các bức vách ngăn cách âm chia tách hai khu vực làm việc."
      }
    ]
  },

  V4_3: {
    duration: "50 phút",
    toeicTarget: "Giao tiếp Senior Java Quốc tế & TOEIC 650–750+",
    javaContext: "Vòng Phỏng Vấn System Design (45 phút), Họp Hội Đồng Kiến Trúc (ARB) & TOEIC Part 5–7 Ra quyết định",
    teacherIntro: "Anh em có biết vì sao vòng phỏng vấn System Design 45 phút lại là 'cửa tử' chặn 80% kỹ sư giỏi code khi thi vào Big Tech, Grab, Shopee, Stripe hay các ngân hàng quốc tế không? Bởi vì giám khảo KHÔNG chấm điểm một bức vẽ có sẵn đáp án đúng duy nhất — họ chấm cách anh em DẪN DẮT cuộc thảo luận bằng tiếng Anh! Người đỗ Senior/Principal luôn mở đầu bằng cách làm rõ xem hệ thống thiên về đọc hay ghi (read-heavy vs write-heavy), tính nhẩm ước lượng tải trên giấy nháp (ballpark estimate / capacity planning), đề xuất phương án khả thi (viable architecture), cân nhắc ưu nhược điểm (pros and cons / trade-offs), mở rộng ngang (scale out / sharding), xử lý làm mới bộ đệm (cache invalidation) và suy giảm êm ái khi quá tải (graceful degradation). Bài V4.3 trao tận tay anh em kịch bản ngôn từ từ phút thứ 1 đến phút thứ 45 của vòng System Design!",
    javaAnalogy: {
      title: "Vòng Phỏng Vấn System Design giống hệt Quy Hoạch Giao Thông Một Siêu Đô Thị",
      body: "Trước khi đổ bê tông xây cầu, Kiến trúc sư trưởng không bao giờ cắm đầu vẽ ngay! Bước 1 là ước lượng sơ bộ lưu lượng xe giờ cao điểm (`ballpark estimate` cho `capacity planning`) và xem dân đi vào nội đô nhiều hay ra ngoại thành nhiều (`read-heavy` vs `write-heavy`). Bước 2 là trình bày hai phương án khả thi (`viable` options) kèm bảng mổ xẻ ưu nhược điểm (`pros and cons` & `trade-off between consistency and availability`). Bước 3 là mở thêm làn đường (`scale out`), chia thành nhiều quận tự quản (`sharding` để phá `bottleneck`), cập nhật biển báo điện tử kịp thời (`cache invalidation`), và nếu bão lớn ngập đường thì tự động đóng làn giải trí để ưu tiên làn xe cứu thương chạy thông suốt (`graceful degradation` giữ vững `high availability`)!"
    },
    objectives: [
      "Mở đầu và dẫn dắt 15 phút đầu vòng phỏng vấn System Design cực kỳ chuyên nghiệp với read-heavy, ballpark estimate và capacity planning.",
      "Phân tích sắc sảo các quyết định thiết kế lõi (scale out, sharding, cache invalidation, high availability, graceful degradation) kèm đánh giá pros and cons / viable.",
      "Bắt trọn điểm nhóm từ vựng lập kế hoạch & tính khả thi (viable, capacity, pros and cons / weigh options) xuất hiện dày đặc trong TOEIC Part 5–7."
    ],
    formulaCards: [
      {
        label: "Khung Ước Lượng Tải Nhanh Phút Thứ 5 (Back-of-the-Envelope Estimate)",
        formula: "Let's do a quick ballpark estimate: with 10 million daily active users on a 10:1 read-heavy workload, we expect roughly 1,200 read QPS.",
        note: "Mở lời bằng câu này trong vòng System Design lập tức khẳng định phong thái Principal/Senior chủ động cầm trịch!"
      },
      {
        label: "Khung Phân Tích Ưu Nhược Điểm Hai Phương Án (Weighing Pros and Cons)",
        formula: "Both SQL and NoSQL are viable here, so let's weigh the pros and cons based on our consistency and query patterns.",
        note: "Tuyệt đối không phán bừa 'MongoDB is better'; hãy luôn đặt lên bàn cân 'weigh the pros and cons'."
      },
      {
        label: "Khung Giải Quyết Bảng Dữ Liệu Khổng Lồ (Scale Out & Sharding)",
        formula: "Once a single primary DB becomes a write bottleneck, we can scale out storage via horizontal sharding by `tenant_id`.",
        note: "Nêu rõ điều kiện KHI NÀO mới cần sharding (tránh lỗi over-engineering sớm!)."
      },
      {
        label: "Khung Bảo Vệ Hệ Thống Lúc Quá Tải Đỉnh Điểm (Graceful Degradation)",
        formula: "To preserve high availability during flash sales, we enable graceful degradation by hiding personalized recommendations.",
        note: "Hy sinh tính năng phụ (gợi ý sản phẩm) để cứu sống tính năng lõi (thanh toán đơn hàng)."
      }
    ],
    sections: [
      {
        heading: "1. Khởi Động Vòng System Design Như Principal: Read-Heavy vs Write-Heavy, Ballpark Estimate & Capacity Planning",
        paragraphs: [
          "Đề bài System Design luôn cố tình mơ hồ (ví dụ: 'Design a URL Shortener' hoặc 'Design a Flash-Sale E-commerce Checkout'). Nếu bạn lao vào vẽ ngay Kafka và Redis ở giây thứ 10, giám khảo sẽ đánh dấu 'Junior — jumps to solutions without gathering requirements'. Thay vào đó, hãy hỏi làm rõ tỷ lệ đọc/ghi: hệ thống rút gọn link là điển hình của 'read-heavy' (100 lần bấm đọc link mới có 1 lần tạo link mới -> ưu tiên Caching mạnh!), ngược lại hệ thống ghi log định vị tài xế GPS lại là 'write-heavy' (ghi hàng trăm nghìn điểm/giây -> ưu tiên Kafka + LSM-tree DB như Cassandra/ScyllaDB!).",
          "Tiếp theo, hãy xin phép làm một phép tính ước lượng sơ bộ trong khoảng chấp nhận được ('a ballpark estimate') về QPS, băng thông mạng và dung lượng ổ cứng 3 năm tới để phục vụ hoạch định năng lực hạ tầng ('capacity planning')."
        ],
        bullets: [
          "Mẹo tính nhẩm thần tốc trong phỏng vấn: 1 ngày có `86,400 giây ≈ 10^5 giây`! Vậy 10 triệu request/ngày chia `10^5` xấp xỉ `100 QPS` trung bình (nhân 3–5 lần ra Peak QPS!).",
          "Cụm từ tự nhiên chuẩn Mỹ khi đưa con số ước chừng: 'Just as a ballpark figure / ballpark estimate, we'll need around 5 terabytes per year.'",
          "Trong doanh nghiệp và TOEIC, `capacity planning` dùng cho cả hạ tầng máy chủ, công suất nhà máy lẫn nhân sự tổng đài."
        ]
      },
      {
        heading: "2. Mở Rộng Quy Mô & Bài Toán Khó Nhất: Scale Out, Sharding & Cache Invalidation",
        paragraphs: [
          "Phil Karlton từng nói câu bất hủ: 'There are only two hard things in Computer Science: cache invalidation and naming things.' Khi bạn đặt Redis trước PostgreSQL để gánh tải cho hệ thống read-heavy, tốc độ đọc bay vút lên dưới 2ms, nhưng câu hỏi hóc búa nhất giám khảo sẽ vặn lại là: 'How do you handle cache invalidation when prices change?' (Làm sao xóa hoặc làm mới dữ liệu cũ trên cache mà không gây lệch giá hay sập DB khi vạn người cùng lao vào đọc khóa vừa hết hạn — cache stampede?).",
          "Ở tầng lưu trữ bền vững, khi việc nâng cấp máy chủ đơn lẻ ('scale up') chạm trần vật lý, chúng ta phải mở rộng ra nhiều nút ('scale out'). Đối với cơ sở dữ liệu ghi nặng, kỹ thuật cốt tử là phân mảnh dữ liệu theo chiều ngang ('database sharding') dựa trên một khóa phân mảnh khéo léo ('shard key') để phân tán đều tải."
        ],
        bullets: [
          "Phân biệt cụm động từ cực hay nhầm: `scale UP` = nâng RAM/CPU cho 1 máy (vertical); `scale OUT` = thêm nhiều máy/node chạy chung (horizontal)!",
          "Luôn nêu rủi ro đi kèm `sharding`: mất khả năng `JOIN` trực tiếp giữa các shard, phức tạp hóa giao dịch phân tán và nguy cơ `resharding` khi thêm node.",
          "Các chiến lược `cache invalidation` cần nắm tên tiếng Anh: `Cache-Aside` (xóa cache sau khi cập nhật DB), `Write-Through`, và `CDC-based invalidation` qua Debezium."
        ]
      },
      {
        heading: "3. Đánh Đổi Đẳng Cấp & Từ Vựng Kim Cương TOEIC 700+: Viable, Pros and Cons, High Availability & Graceful Degradation",
        paragraphs: [
          "Khi trình bày trước Hội đồng Kiến trúc (ARB), đừng bao giờ trình bày độc nhất một giải pháp. Hãy đưa ra 2–3 phương án khả thi về mặt kỹ thuật lẫn chi phí ('viable options / a commercially viable solution'), lập bảng đối chiếu ưu và nhược điểm ('pros and cons'), và chốt phương án đảm bảo độ sẵn sàng cao ('high availability' — ví dụ cam kết SLA 99.99% tương đương chỉ được phép downtime tối đa 52 phút trong cả 1 năm!) kết hợp cơ chế suy giảm nhẹ nhàng có kiểm soát ('graceful degradation').",
          "Trong đề thi TOEIC Reading Part 5, 6, 7, tính từ 'viable' (/ˈvaɪ.ə.bəl/ — khả thi, có thể sống sót và thành công thực tế) là một trong những từ vựng phân loại mốc 700–850 điểm xuất hiện nhiều nhất! Nó thường đi trong các cụm 'a viable alternative' (một phương án thay thế khả thi) hoặc 'economically viable' (khả thi về mặt kinh tế)."
        ],
        bullets: [
          "Cặp tính từ đồng nghĩa vàng trong TOEIC Part 7: `viable` = `feasible / practical / workable`.",
          "Thay vì nói dài dòng 'good points and bad points', hãy dùng thành ngữ súc tích `weigh the pros and cons` hoặc `trade-offs`.",
          "Ví dụ dễ hiểu nhất về `graceful degradation`: YouTube tự động hạ độ phân giải video từ 4K xuống 480p khi mạng yếu thay vì dừng đứng hình quay vòng tròn!"
        ]
      }
    ],
    vocabItems: [
      {
        word: "ballpark estimate",
        pos: "n phrase",
        ipa: "/ˈbɔːl.pɑːrk ˈes.tɪ.mət/",
        meaning: "con số ước lượng sơ bộ, phỏng tính nằm trong khoảng hợp lý (đủ dùng để định hướng thiết kế hoặc ngân sách ban đầu)",
        synonyms: "rough estimate, back-of-the-envelope calculation, ballpark figure",
        collocations: ["give a quick ballpark estimate", "in the right ballpark", "ballpark cost estimate"],
        mnemonic: "BALLPARK là sân vận động bóng chày rộng lớn => Chưa cần đo chính xác từng milimét chỗ bóng rơi, chỉ cần biết nó nằm gọn 'trong sân vận động' là đủ tính tiếp!",
        toeicEx: "Could your engineering firm give us a **ballpark estimate** for retrofitting the solar roof before we draft the formal tender?",
        toeicVi: "Công ty kỹ thuật của bạn có thể cho chúng tôi một con số ước tính sơ bộ cho việc lắp đặt mái điện mặt trời trước khi chúng tôi soạn hồ sơ mời thầu chính thức không?",
        javaEx: "A quick **ballpark estimate** shows that storing 100 million 1KB order records requires roughly 100GB of raw disk space before indexing.",
        javaVi: "Một phép ước lượng sơ bộ nhanh cho thấy việc lưu 100 triệu bản ghi đơn hàng nặng 1KB mỗi bản cần khoảng 100GB dung lượng đĩa thô trước khi đánh chỉ mục."
      },
      {
        word: "pros and cons",
        pos: "n phrase (plural)",
        ipa: "/ˌproʊz ən ˈkɑːnz/",
        meaning: "những ưu điểm và nhược điểm, mặt lợi và mặt hại của một giải pháp hay quyết định",
        synonyms: "advantages and disadvantages, merits and drawbacks, upsides and downsides",
        collocations: ["weigh the pros and cons", "discuss the pros and cons of", "evaluate pros and cons"],
        mnemonic: "Viết tắt từ tiếng Latinh 'pro et contra' (ủng hộ và chống lại) => Cân đong mặt được (PROS) và mặt mất (CONS) trước khi chốt kiến trúc!",
        toeicEx: "The board met for three hours to weigh the **pros and cons** of acquiring the regional competitor.",
        toeicVi: "Hội đồng quản trị đã họp suốt ba tiếng để cân nhắc những mặt lợi và hại của việc mua lại đối thủ cạnh tranh trong khu vực.",
        javaEx: "In my ADR, I compared the **pros and cons** of REST, GraphQL, and gRPC for internal service-to-service communication.",
        javaVi: "Trong tài liệu quyết định kiến trúc ADR, tôi đã so sánh ưu và nhược điểm của REST, GraphQL và gRPC cho giao tiếp nội bộ giữa các dịch vụ."
      },
      {
        word: "scale out",
        pos: "phr.v",
        ipa: "/skeɪl aʊt/",
        meaning: "mở rộng quy mô ra chiều ngang bằng cách bổ sung thêm nhiều nút máy chủ/container vào cụm (đối lập với `scale up` là nâng cấp 1 máy to hơn)",
        synonyms: "scale horizontally, add cluster nodes",
        collocations: ["scale out dynamically", "scale out read replicas", "scale out vs scale up"],
        mnemonic: "SCALE OUT (mở rộng tỏa RA xung quanh thành 10 anh em cùng khiêng) >< SCALE UP (bơm 1 anh khổng lồ cao LÊN kịch trần)!",
        toeicEx: "To handle holiday call volume, the support center **scaled out** by partnering with two regional staffing agencies.",
        toeicVi: "Để xử lý lưu lượng cuộc gọi dịp lễ, trung tâm hỗ trợ đã mở rộng quy mô ngang bằng cách hợp tác thêm với hai công ty cung ứng nhân sự khu vực.",
        javaEx: "Stateless Spring Boot pods behind an Application Load Balancer can **scale out** from 4 to 60 instances in under two minutes.",
        javaVi: "Các pod Spring Boot không lưu trạng thái đứng sau bộ cân bằng tải ALB có thể mở rộng ngang từ 4 lên 60 tiến trình trong chưa đầy hai phút."
      },
      {
        word: "read-heavy",
        pos: "adj",
        ipa: "/ˈriːd ˌhev.i/",
        meaning: "thiên nặng về tác vụ đọc (lưu lượng truy vấn xem dữ liệu lớn gấp nhiều lần lưu lượng ghi/cập nhật — đối lập với `write-heavy`)",
        synonyms: "query-intensive, read-dominated",
        collocations: ["a 50:1 read-heavy workload", "optimize read-heavy endpoints", "read-heavy vs write-heavy systems"],
        mnemonic: "READ (đọc `SELECT`) + HEAVY (nặng ký, chiếm đa số) => 1.000 người lướt xem trang sản phẩm mới có 10 người bấm mua ghi vào DB!",
        toeicEx: "Public library archives experience **read-heavy** digital traffic during university final-exam weeks.",
        toeicVi: "Kho lưu trữ thư viện công cộng đón nhận lưu lượng truy cập số thiên nặng về tra cứu đọc trong các tuần thi cuối kỳ đại học.",
        javaEx: "Because our product catalog is extremely **read-heavy**, adding a two-tier Caffeine + Redis cache offloaded 98% of SQL queries.",
        javaVi: "Bởi vì danh mục sản phẩm của chúng tôi thiên nặng về đọc dữ liệu, việc bổ sung bộ đệm hai tầng Caffeine + Redis đã giảm tải 98% truy vấn SQL."
      },
      {
        word: "high availability",
        pos: "n phrase",
        ipa: "/ˌhaɪ əˌveɪ.ləˈbɪl.ə.ti/",
        meaning: "độ sẵn sàng cao (viết tắt HA — kiến trúc đảm bảo hệ thống hoạt động liên tục gần như 100% thời gian với cam kết như 99.99% uptime)",
        synonyms: "HA, continuous uptime, near-zero downtime",
        collocations: ["achieve 99.99% high availability", "high-availability cluster", "compromise high availability"],
        mnemonic: "HIGH (cao) + AVAILABILITY (luôn có mặt sẵn sàng phục vụ 24/7/365) => 4 con số 9 ('four nines' = 99.99%) là huy chương tự hào của dân Backend!",
        toeicEx: "Hospitals demand **high availability** from emergency power systems and patient-monitoring networks.",
        toeicVi: "Các bệnh viện đòi hỏi độ sẵn sàng cao tuyệt đối từ hệ thống điện dự phòng khẩn cấp và mạng theo dõi bệnh nhân.",
        javaEx: "Deploying active-active Kubernetes clusters across three availability zones guarantees **high availability** for core banking APIs.",
        javaVi: "Triển khai các cụm Kubernetes hoạt động song song trải trên ba vùng sẵn sàng đảm bảo độ sẵn sàng cao cho các API ngân hàng lõi."
      },
      {
        word: "sharding",
        pos: "n",
        ipa: "/ˈʃɑːr.dɪŋ/",
        meaning: "kỹ thuật phân mảnh cơ sở dữ liệu theo chiều ngang (chia một bảng khổng lồ thành nhiều mảnh nhỏ độc lập lưu trên các máy chủ vật lý khác nhau)",
        synonyms: "horizontal database partitioning, data splitting across nodes",
        collocations: ["database sharding strategy", "choose an even shard key", "cross-shard queries"],
        mnemonic: "SHARD là mảnh vỡ thủy tinh => Đập một tảng băng khổng lồ 50TB thành 16 mảnh nhỏ (shards) chia cho 16 máy chủ cùng giữ cho nhẹ!",
        toeicEx: "Dividing the national customer registry into regional segments (**sharding**) sped up local branch lookups.",
        toeicVi: "Việc chia nhỏ sổ đăng ký khách hàng toàn quốc thành các phân đoạn khu vực đã giúp tăng tốc tra cứu tại các chi nhánh địa phương.",
        javaEx: "Choosing `user_id` as our **sharding** key distributed 2 billion wallet transactions evenly across sixteen PostgreSQL nodes.",
        javaVi: "Việc chọn `user_id` làm khóa phân mảnh đã giúp phân phối đồng đều 2 tỷ giao dịch ví điện tử trên mười sáu nút PostgreSQL."
      },
      {
        word: "cache invalidation",
        pos: "n phrase",
        ipa: "/ˈkæʃ ɪnˌvæl.əˈdeɪ.ʃən/",
        meaning: "cơ chế vô hiệu hóa / xóa bỏ hoặc làm mới dữ liệu trên bộ nhớ đệm ngay khi dữ liệu gốc trong Database vừa thay đổi",
        synonyms: "cache eviction/purging on update, stale-cache cleanup",
        collocations: ["event-driven cache invalidation", "cache invalidation bug", "TTL expiration vs explicit cache invalidation"],
        mnemonic: "CACHE (bộ nhớ đệm) + INVALIDATE (tuyên bố hết hiệu lực vì đã cũ) => Giá dưới DB vừa sửa từ 100$ lên 120$ thì phải báo xóa ngay giá 100$ trên Redis!",
        toeicEx: "Promptly clearing outdated price lists (**cache invalidation**) prevented online shoppers from seeing expired discounts.",
        toeicVi: "Việc kịp thời xóa bỏ bảng giá cũ trên bộ đệm đã ngăn chặn việc người mua hàng trực tuyến nhìn thấy các mức giảm giá đã hết hạn.",
        javaEx: "We stream PostgreSQL WAL logs via Debezium to trigger reliable **cache invalidation** in Redis within milliseconds.",
        javaVi: "Chúng tôi truyền luồng nhật ký WAL của PostgreSQL qua Debezium để kích hoạt việc xóa bộ nhớ đệm trên Redis một cách tin cậy chỉ trong vài mili-giây."
      },
      {
        word: "graceful degradation",
        pos: "n phrase",
        ipa: "/ˈɡreɪs.fəl ˌdeɡ.rəˈdeɪ.ʃən/",
        meaning: "suy giảm nhẹ nhàng có kiểm soát (khi quá tải hoặc lỗi dịch vụ phụ, hệ thống chủ động tắt tính năng phụ để giữ các chức năng cốt lõi vẫn chạy tốt)",
        synonyms: "controlled fallback mode, safe partial service",
        collocations: ["design for graceful degradation", "trigger graceful degradation under peak load", "fallback for graceful degradation"],
        mnemonic: "GRACEFUL (duyên dáng, êm ái như chim hạ cánh lượn dù) + DEGRADATION (giảm bớt cấp độ) => Không rơi tự do nổ tung 500 Error mà hạ cánh an toàn giữ luồng chính!",
        toeicEx: "Smart building elevators use **graceful degradation** during brownouts, parking safely at the nearest floor instead of trapping riders.",
        toeicVi: "Thang máy tòa nhà thông minh áp dụng cơ chế giảm cấp an toàn khi sụt áp điện, đỗ êm tại tầng gần nhất thay vì nhốt kẹt hành khách.",
        javaEx: "When the ML recommendation engine times out, our checkout page applies **graceful degradation** by showing static top-sellers.",
        javaVi: "Khi công cụ gợi ý học máy bị quá giờ phản hồi, trang thanh toán của chúng tôi áp dụng suy giảm có kiểm soát bằng cách hiển thị danh sách bán chạy tĩnh."
      },
      {
        word: "capacity planning",
        pos: "n phrase",
        ipa: "/kəˈpæs.ə.t̬i ˈplæn.ɪŋ/",
        meaning: "hoạch định năng lực / công suất (dự báo nhu cầu tăng trưởng để chuẩn bị trước số lượng máy chủ, băng thông, dung lượng lưu trữ hoặc nhân sự)",
        synonyms: "resource forecasting, sizing projection",
        collocations: ["annual capacity planning", "cloud capacity planning", "inaccurate capacity planning"],
        mnemonic: "CAPACITY (sức chứa tối đa của sân vận động/server) + PLANNING (lên kế hoạch trước) => Dự tính trước Tết lưu lượng gấp 5 để đặt thêm tài nguyên!",
        toeicEx: "Accurate **capacity planning** enabled the airline to add twelve extra flights ahead of the summer tourist rush.",
        toeicVi: "Việc hoạch định năng lực chính xác đã giúp hãng hàng không tăng cường thêm mười hai chuyến bay trước cao điểm du lịch hè.",
        javaEx: "Load testing with k6 feeds real throughput numbers into our Q4 **capacity planning** spreadsheet for EKS nodes.",
        javaVi: "Kiểm thử chịu tải bằng k6 cung cấp các con số thông lượng thực tế cho bảng tính hoạch định năng lực hạ tầng cụm EKS Quý 4 của chúng tôi."
      },
      {
        word: "viable",
        pos: "adj",
        ipa: "/ˈvaɪ.ə.bəl/",
        meaning: "khả thi, thiết thực, có khả năng triển khai thành công và duy trì bền vững trong thực tế (cả về kỹ thuật lẫn tài chính)",
        synonyms: "feasible, workable, practical, sustainable",
        collocations: ["a viable alternative", "economically viable", "minimum viable product (MVP)"],
        mnemonic: "Anh em IT ai cũng biết **MVP = Minimum Viable Product** => Chữ V chính là VIABLE (sản phẩm tối thiểu nhưng ĐỦ SỐNG SÓT & CHẠY ĐƯỢC THẬT ngoài thị trường)!",
        toeicEx: "Solar microgrids have become an economically **viable** option for remote island resorts.",
        toeicVi: "Lưới điện mặt trời quy mô nhỏ đã trở thành một lựa chọn khả thi về mặt kinh tế cho các khu nghỉ dưỡng trên đảo xa.",
        javaEx: "Polling PostgreSQL every 50ms is not a **viable** design at 100k concurrent users; let's switch to WebSockets backed by Redis Pub/Sub.",
        javaVi: "Việc truy vấn lặp PostgreSQL mỗi 50ms không phải là thiết kế khả thi ở quy mô 100 nghìn người dùng đồng thời; hãy chuyển sang WebSockets kết hợp Redis Pub/Sub."
      }
    ],
    examples: [
      {
        tag: "System Design",
        en: "There is a fundamental **trade-off between consistency and availability** when designing cross-continent payment ledgers.",
        vi: "Luôn tồn tại một sự đánh đổi cốt lõi giữa tính nhất quán và tính sẵn sàng khi thiết kế sổ cái thanh toán xuyên lục địa.",
        note: "Khắc sâu cụm danh từ 'trade-off between X and Y' để trả lời xuất sắc mọi vòng phỏng vấn kiến trúc."
      },
      {
        tag: "Global Interview",
        en: "Before jumping into database **sharding**, I always check whether read replicas and query tuning are still **viable**.",
        vi: "Trước khi vội vã nhảy vào phân mảnh cơ sở dữ liệu, tôi luôn kiểm tra xem việc dùng bản sao chỉ đọc và tối ưu truy vấn có còn khả thi không.",
        note: "Câu nói chứng minh kinh nghiệm thực chiến dày dạn: tránh phức tạp hóa hệ thống khi chưa cần thiết!"
      },
      {
        tag: "System Design",
        en: "To prevent a thundering herd during **cache invalidation**, we use distributed mutex locks or probabilistic early expiration.",
        vi: "Để ngăn chặn hiệu ứng bầy đàn ồ ạt đập xuống DB khi bộ nhớ đệm hết hạn, chúng tôi dùng khóa phân tán hoặc làm mới sớm xác suất.",
        note: "Thuật ngữ `thundering herd / cache stampede` đi cùng `cache invalidation` giúp bạn ăn điểm tuyệt đối cấp Staff Engineer."
      },
      {
        tag: "Incident War-room",
        en: "Thanks to **graceful degradation**, core QR transfers stayed up at 99.99% **high availability** even while the loyalty service crashed.",
        vi: "Nhờ cơ chế suy giảm có kiểm soát, luồng chuyển khoản QR cốt lõi vẫn duy trì độ sẵn sàng cao 99,99% ngay cả khi dịch vụ tích điểm bị sập.",
        note: "Báo cáo tổng kết sau cao điểm Tết/Black Friday khiến Ban điều hành cực kỳ hài lòng."
      },
      {
        tag: "System Design",
        en: "For a **write-heavy** IoT telemetry ingestion pipeline, we buffer bursts in Kafka before batch-writing to TimescaleDB.",
        vi: "Đối với đường ống thu thập dữ liệu cảm biến IoT thiên nặng về ghi, chúng tôi đệm các đợt bùng nổ tải vào Kafka trước khi ghi theo lô xuống TimescaleDB.",
        note: "Đặt đối trọng hoàn hảo với `read-heavy` để xử lý trọn vẹn cả hai dạng bài System Design."
      },
      {
        tag: "Daily Standup",
        en: "I'm finishing the **capacity planning** doc for next month's marketing campaign so DevOps can pre-reserve EC2 savings plans.",
        vi: "Tôi đang hoàn thiện tài liệu hoạch định năng lực hạ tầng cho chiến dịch marketing tháng tới để đội DevOps đặt mua trước gói tiết kiệm EC2.",
        note: "Kết nối công việc kỹ thuật với bài toán tối ưu chi phí FinOps cho công ty."
      },
      {
        tag: "Global Interview",
        en: "Let me jot down a **ballpark estimate** of storage growth over five years so we can size our S3 lifecycle tiers properly.",
        vi: "Để tôi ghi nhanh phép ước lượng sơ bộ mức tăng trưởng lưu trữ trong 5 năm tới nhằm phân tầng vòng đời S3 cho chuẩn xác.",
        note: "Cụm 'Let me jot down a ballpark estimate...' cực kỳ tự nhiên khi bạn vừa nói vừa viết lên bảng trắng (whiteboard)."
      },
      {
        tag: "Code Review",
        en: "Storing uploaded files on local server disk prevents us from **scaling out** pods; let's push directly to S3 via presigned URLs.",
        vi: "Việc lưu file tải lên ngay trên ổ đĩa cục bộ của server khiến chúng ta không thể mở rộng ngang nhiều pod; hãy đẩy thẳng lên S3 qua presigned URL.",
        note: "Góp ý kiến trúc kinh điển cho ứng dụng chạy trên Cloud."
      },
      {
        tag: "TOEIC Part 7",
        en: "After evaluating the **pros and cons** of three downtown venues, the event committee selected the Grand Harbor Convention Center.",
        vi: "Sau khi đánh giá ưu và nhược điểm của ba địa điểm trung tâm thành phố, ban tổ chức sự kiện đã chọn Trung tâm Hội nghị Grand Harbor.",
        note: "Ngữ cảnh chuẩn mực của `evaluate / weigh the pros and cons` trong bài đọc chuỗi email TOEIC."
      },
      {
        tag: "TOEIC Part 7",
        en: "Unless battery costs drop by another 15%, electric cargo ferries will not be commercially **viable** on long-distance routes.",
        vi: "Trừ khi chi phí pin giảm thêm 15% nữa, phà chở hàng chạy điện sẽ chưa thể khả thi về mặt thương mại trên các tuyến đường dài.",
        note: "Cấu trúc điều kiện `Unless` kết hợp cụm vàng `commercially viable` chuẩn đề ETS TOEIC 750+."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "Let me guess random number of QPS: maybe 1,000.",
          fix: "Let's do a quick ballpark estimate based on daily active users: roughly 1,000 QPS.",
          why: "Nói 'guess random number' khiến giám khảo nghĩ bạn đoán mò thiếu cơ sở; 'do a quick ballpark estimate based on DAU' thể hiện tư duy định lượng logic."
        },
        {
          bug: "We scale up from 3 Kubernetes pods to 20 Kubernetes pods.",
          fix: "We scale out from 3 Kubernetes pods to 20 Kubernetes pods.",
          why: "Tăng SỐ LƯỢNG bản sao pod theo chiều ngang chính xác là 'scale out' (horizontal), còn 'scale up' vốn chỉ việc tăng CPU/RAM cho từng pod!"
        },
        {
          bug: "This solution has good points and bad points.",
          fix: "Let's weigh the pros and cons (hoặc trade-offs) of this approach.",
          why: "'Good points and bad points' là từ vựng trình độ sơ cấp A2; lên cấp độ Senior/TOEIC 700+ hãy luôn dùng 'pros and cons' hoặc 'trade-offs'."
        },
        {
          bug: "System has very many people read and very few people write.",
          fix: "This is a classic read-heavy workload with a 100:1 read-to-write ratio.",
          why: "Cô đọng cả câu dài dòng thành cụm tính từ sắc gọn 'a 100:1 read-heavy workload' đúng chuẩn kỹ sư Silicon Valley."
        }
      ]
    },
    toeicTips: [
      "Mẹo nhớ không bao giờ quên từ 'viable' (/ˈvaɪ.ə.bəl/) cho TOEIC Part 5 & Part 7: hãy nghĩ ngay tới chữ V trong `MVP (Minimum Viable Product)`! Hễ gặp trạng từ `economically / commercially / financially _____` trước danh từ `option / alternative / solution`, đáp án 99% là `viable` (hoặc `feasible`)!",
      "Trong TOEIC Listening Part 3, khi sếp hỏi 'Can you give me a ballpark figure for the renovation?', câu trả lời đúng sẽ luôn là một CON SỐ ƯỚC CHỪNG (ví dụ: 'Somewhere around fifty thousand dollars').",
      "Chú ý giới từ sau `capacity`: `at full capacity` (hoạt động hết 100% công suất — rất hay thi TOEIC Part 5!) và `seating capacity of 500` (sức chứa 500 chỗ ngồi)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "let's weigh",
          "Before choosing a sharding strategy,",
          "for our read-heavy workload.",
          "each viable option",
          "the pros and cons of"
        ],
        answer: "Before choosing a sharding strategy, let's weigh the pros and cons of each viable option for our read-heavy workload.",
        vi: "Trước khi chọn chiến lược phân mảnh cơ sở dữ liệu, hãy cân nhắc ưu và nhược điểm của từng phương án khả thi cho tải công việc thiên về đọc của chúng ta."
      },
      fillBlank: {
        sentence: "To maintain high availability during flash-sale spikes, we enabled graceful _____ by turning off non-essential widgets.",
        answer: "degradation",
        accepted: ["degradation"],
        hint: "Danh từ đi sau 'graceful' chỉ cơ chế suy giảm nhẹ nhàng có kiểm soát để bảo toàn chức năng lõi",
        explain: "'Graceful degradation' là nguyên lý kiến trúc sống còn giúp hệ thống chủ động cắt bớt tính năng phụ khi quá tải thay vì sập toàn diện."
      }
    },
    quiz: [
      {
        q: "Trong 5 phút đầu tiên của buổi phỏng vấn System Design ('Design Instagram Feed'), bước nào sau đây thể hiện đúng phong thái của một Senior/Principal Engineer?",
        options: [
          "Im lặng cắm đầu vẽ ngay 15 bảng MySQL và code thuật toán sắp xếp mà không hỏi câu nào.",
          "Clarify functional/non-functional requirements, identify that the feed is heavily read-heavy, and calculate a quick ballpark estimate for QPS and storage.",
          "Nói với giám khảo rằng mọi hệ thống đều chỉ cần 1 server duy nhất không cần high availability.",
          "Từ chối phân tích pros and cons vì công nghệ mình thích luôn đúng 100%."
        ],
        answer: 1,
        explain: "Đáp án B là quy trình chuẩn mực ở mọi vòng System Design quốc tế: làm rõ yêu cầu chức năng & phi chức năng, xác định đặc tính tải (Instagram Feed là read-heavy điển hình), và tính nhẩm `ballpark estimate` để định cỡ kiến trúc."
      },
      {
        q: "[TOEIC Part 5] Following six months of pilot testing, management concluded that hydrogen-powered delivery vans were not yet economically _____.",
        options: [
          "viable",
          "viably",
          "viability",
          "sharding"
        ],
        answer: 0,
        explain: "Đáp án A ('viable' — tính từ: khả thi) đứng làm bổ ngữ chủ ngữ sau động từ to-be 'were (not yet)' và được bổ nghĩa bởi trạng từ 'economically' -> 'economically viable' (khả thi về mặt kinh tế). B là trạng từ, C là danh từ, D là thuật ngữ phân mảnh DB không hợp ngữ cảnh."
      },
      {
        q: "Khi hệ thống thương mại điện tử bị quá tải gấp 10 lần dự kiến vào lúc 0h00 ngày 11/11, dịch vụ đánh giá sao (Reviews) bị phản hồi chậm. Áp dụng 'Graceful Degradation' có nghĩa là hệ thống sẽ làm gì?",
        options: [
          "Cho sập luôn cả trang Giỏ hàng và Thanh toán trả về lỗi trắng trang HTTP 500.",
          "Tự động ẩn tạm khung Reviews hoặc trả dữ liệu mặc định nhẹ nhàng để toàn bộ tài nguyên tập trung giữ luồng Đặt hàng & Thanh toán chạy thông suốt.",
          "Xóa vĩnh viễn toàn bộ tài khoản người dùng trong Database.",
          "Bắt khách hàng tự viết câu lệnh SQL để mua hàng."
        ],
        answer: 1,
        explain: "Đáp án B minh họa chính xác bản chất của 'Graceful Degradation' (suy giảm nhẹ nhàng có kiểm soát): cắt/giảm cấp các tính năng không thiết yếu thông qua Circuit Breaker fallback để bảo vệ tuyệt đối tính sẵn sàng của luồng doanh thu cốt lõi."
      }
    ]
  },

  V4_4: {
    duration: "45 phút",
    toeicTarget: "Giao tiếp Lãnh đạo Kỹ thuật Quốc tế & TOEIC 650–750+",
    javaContext: "Đàm Phán Với Product/Stakeholders, Từ Chối Khéo (Polite Push Back), Mentoring Junior & TOEIC Part 3–7",
    teacherIntro: "Anh em bước lên Tech Lead hay Senior Java ở công ty đa quốc gia sẽ sớm nhận ra một sự thật: rào cản thăng tiến lớn nhất không còn là code khó, mà là nghệ thuật nói 'KHÔNG' bằng tiếng Anh sao cho khách hàng và Giám đốc Sản phẩm vẫn nể trọng và yêu quý mình! Nếu ai giao gì anh em cũng gật đầu 'Yes, OK' thì anh em làm cả team kiệt sức đêm hôm; còn nếu nói thẳng thừng 'No, impossible!' thì anh em mang tiếng bất hợp tác. Bí quyết của các Principal Engineer phương Tây nằm ở nghệ thuật 'push back politely': đồng cảm mục tiêu kinh doanh (align with stakeholders), quản trị kỳ vọng thực tế (manage expectations), chứng minh cái gì khả thi (feasible), và luôn đưa ra phương án thay thế sáng giá (propose an alternative) để lấy được sự đồng thuận (buy-in / consensus)! Bài V4.4 chính là cẩm nang đắc nhân tâm bằng tiếng Anh dành riêng cho dân kỹ thuật!",
    javaAnalogy: {
      title: "Polite Push Back giống hệt HTTP `422 Unprocessable Entity` Kèm Gợi Ý Hợp Lệ (Thay Vì Sập `500 Error`)",
      body: "Khi client gửi một yêu cầu phi thực tế vào API của bạn, một server tồi hoặc nuốt bừa dữ liệu rác làm hỏng DB (giống dev cái gì cũng 'Yes' rồi cháy deadline), hoặc nổ tung mặt khách hàng bằng lỗi `500 Internal Server Error` thô bạo (giống câu quát 'Impossible!'). Một API chuẩn Senior trả về phản hồi lịch sự, rõ ràng (`push back` + `manage expectations` vì lý do chưa `feasible`), dẫn dắt từng bước qua tài liệu (`walk through`), và đính kèm ngay cấu trúc thay thế hợp lệ (`propose an alternative`) để cả hai bên cùng khớp giao thức (`align with` & đạt `consensus`)!"
    },
    objectives: [
      "Từ chối khéo các deadline hoặc yêu cầu phi lý bằng công thức vàng: align with goals -> push back politely (not feasible) -> manage expectations -> propose an alternative.",
      "Thực hành ngôn ngữ dẫn dắt đội ngũ (Tech Lead / Staff): walk through kiến trúc, đưa constructive feedback cho đàn em, xin buy-in, đạt consensus và biết lúc nào cần escalate.",
      "Ăn trọn điểm các câu hỏi đàm phán thương mại, khả thi (feasible) và đồng thuận (consensus) trong TOEIC Listening Part 3 và Reading Part 5–7."
    ],
    formulaCards: [
      {
        label: "Khung Từ Chối Khéo Deadline Quá Gấp (The Golden Push-Back)",
        formula: "Shipping the full module by Friday isn't feasible without risking stability, so let's propose an alternative: launch core APIs first.",
        note: "Không bao giờ dừng lại ở chữ 'isn't feasible' — câu nối 'so let's propose an alternative' biến bạn thành người giải quyết vấn đề!"
      },
      {
        label: "Khung Quản Trị Kỳ Vọng Các Bên Liên Quan (Managing Expectations)",
        formula: "To manage expectations early, I want to align with stakeholders on what's in scope for Phase 1 versus Phase 2.",
        note: "Nói sớm ngay đầu dự án tốt hơn gấp vạn lần việc báo trễ vào ngày cuối cùng."
      },
      {
        label: "Khung Dẫn Dắt Buổi Trình Bày & Xin Ủng Hộ (Walk Through & Buy-In)",
        formula: "Let me walk you through our migration plan so we can get buy-in from Security and reach a consensus today.",
        note: "'Let me walk you through...' là câu mở đầu thuyết trình lịch lãm và chuyên nghiệp nhất trong tiếng Anh công sở."
      },
      {
        label: "Khung Góp Ý Xây Dựng Khi Mentoring Junior (Constructive Feedback)",
        formula: "May I share some constructive feedback on how we could structure this service to make testing easier?",
        note: "Xin phép nhẹ nhàng bằng 'May I share...' giúp đàn em mở lòng đón nhận 100%."
      }
    ],
    sections: [
      {
        heading: "1. Nghệ Thuật 'Push Back Politely': Nói Không Mà Không Mất Lòng Khách Hàng Âu – Mỹ",
        paragraphs: [
          "Trong văn hóa làm việc của Mỹ, Anh, Úc và Bắc Âu, một kỹ sư Senior dám phản biện có căn cứ ('push back') được đánh giá CAO HƠN RẤT NHIỀU so với người chỉ biết vâng dạ rồi để dự án thất bại âm thầm. Tuy nhiên, họ phản biện dựa trên dữ liệu và rủi ro hệ thống chứ không dựa trên cảm xúc cá nhân.",
          "Quy trình 3 bước bất bại khi Product Owner đòi nhồi thêm tính năng lớn sát ngày release: (1) Khẳng định bạn cùng chung mục tiêu với họ ('I completely align with the goal of boosting conversion...'); (2) Nêu giới hạn khách quan bằng tính từ 'feasible' và 'manage expectations' ('...however, building real-time fraud scoring in two days isn't feasible without skipping security tests'); (3) Tung ngay phương án thay thế ('Instead, I'd like to propose an alternative: rule-based checks for Friday, followed by ML scoring next sprint')."
        ],
        bullets: [
          "Tuyệt đối tránh cụm 'You don't understand technical things' — đó là câu tự sát nghề nghiệp!",
          "Dùng cụm `align with [someone / a strategy]` để thể hiện sự đồng hành cùng tầm nhìn kinh doanh.",
          "Khi hai đội kỹ thuật tranh luận quá 30 phút không ngã ngũ và làm chậm tiến độ chung, trách nhiệm của Tech Lead là báo cáo nâng cấp lên cấp có thẩm quyền quyết định (`escalate the issue`) một cách minh bạch."
        ]
      },
      {
        heading: "2. Ngôn Ngữ Của Người Dẫn Dắt (Tech Lead & Mentor): Walk Through, Buy-In, Consensus & Constructive Feedback",
        paragraphs: [
          "Khi bạn đề xuất nâng cấp toàn công ty từ Java 11 lên Java 21 hoặc tách Monolith sang Kafka, kỹ thuật giỏi mới chỉ chiếm 50% thành công; 50% còn lại là khả năng thuyết phục lấy được sự đồng tình ủng hộ từ các trưởng nhóm khác và ban lãnh đạo ('get stakeholder buy-in') cũng như đi đến sự đồng thuận chung ('reach a consensus').",
          "Trong các buổi họp thiết kế hay đào tạo nhân viên mới, thay vì nói khô khan 'I will read my slides', hãy dùng cụm động từ mềm mại 'Let me walk you through the sequence diagram' (Để tôi dẫn dắt anh/chị đi qua từng bước của biểu đồ tuần tự). Và trong các buổi 1-on-1 mentoring, hãy luôn đóng khung nhận xét của mình dưới dạng góp ý mang tính xây dựng ('constructive feedback')."
        ],
        bullets: [
          "`Buy-in` là danh từ không đếm được cực kỳ đắt giá: `secure executive buy-in` = giành được cái gật đầu ủng hộ của ban điều hành.",
          "Lưu ý ngữ pháp chuẩn: nói `reach a consensus` (đạt được sự đồng thuận), tránh viết thừa `mutual consensus` hay `general consensus of opinion` vì bản thân `consensus` đã mang nghĩa 'ý kiến chung của tập thể' rồi!",
          "`Walk [someone] through [something]` vừa dùng khi demo code, vừa dùng khi hướng dẫn khách hàng gỡ lỗi từng bước."
        ]
      },
      {
        heading: "3. Điểm Chạm Vàng Với Đề Thi TOEIC 650–750+: Feasible, Consensus, Escalate & Alternative",
        paragraphs: [
          "Bài V4.4 này là chiếc cầu nối hoàn hảo giữa kỹ năng mềm lãnh đạo IT và đề thi TOEIC thương mại! Trong TOEIC Part 5, tính từ 'feasible' (khả thi, làm được trong điều kiện ngân sách/thời gian hiện có) và danh từ 'feasibility study' (nghiên cứu tiền khả thi) xuất hiện lặp đi lặp lại trong các dự án xây dựng, mở chi nhánh mới và phát triển sản phẩm.",
          "Đặc biệt chú ý bẫy từ loại của từ 'alternative': nó VỪA là tính từ ('an alternative route' — tuyến đường thay thế), VỪA là danh từ đếm được ('propose a cost-effective alternative' — đề xuất một phương án thay thế tiết kiệm chi phí)! Rất nhiều thí sinh thấy đuôi '-tive' tưởng chỉ là tính từ nên mất điểm oan ở Part 5!"
        ],
        bullets: [
          "Siêu bẫy từ loại TOEIC Part 5: Các từ đuôi `-tive` nhưng lại là DANH TỪ ĐẾM ĐƯỢC cực hay thi gồm: `an alternative` (phương án thay thế), `a representative` (người đại diện), `an initiative` (sáng kiến), `an objective` (mục tiêu)!",
          "Trong quy trình chăm sóc khách hàng của TOEIC Part 3 & Part 7, `escalate a ticket / complaint to a supervisor` nghĩa là chuyển ca khiếu nại khó lên cấp quản lý cao hơn giải quyết.",
          "Cặp giới từ cố định: `align WITH` (ăn khớp/thống nhất với) và `consensus ON / ABOUT` (sự đồng thuận về vấn đề gì)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "push back",
        pos: "phr.v (n: pushback)",
        ipa: "/pʊʃ bæk/",
        meaning: "1) phản biện, từ chối khéo léo có lý lẽ trước yêu cầu/deadline thiếu thực tế; 2) lùi lịch một cuộc họp/sự kiện lại muộn hơn",
        synonyms: "resist politely, object constructively; postpone, defer",
        collocations: ["push back politely on unrealistic deadlines", "push the release date back by a week", "receive pushback from"],
        mnemonic: "Khi ai đó đẩy một tảng đá quá sức về phía team bạn, bạn lấy tay ĐẨY NGƯỢC LẠI (push back) nhẹ nhàng nhưng vững chãi để giữ thăng bằng!",
        toeicEx: "Organizers decided to **push back** the registration deadline to Friday so more overseas delegates could apply.",
        toeicVi: "Ban tổ chức quyết định lùi hạn chót đăng ký sang thứ Sáu để nhiều đại biểu nước ngoài hơn có thể nộp đơn.",
        javaEx: "Senior engineers must know how to **push back** respectfully when asked to skip automated security scans for faster delivery.",
        javaVi: "Kỹ sư cấp cao phải biết cách phản biện từ chối một cách tôn trọng khi bị yêu cầu bỏ qua bước quét bảo mật tự động để giao hàng nhanh hơn."
      },
      {
        word: "align with",
        pos: "phr.v",
        ipa: "/əˈlaɪn wɪð/",
        meaning: "thống nhất ý hiểu với ai; điều chỉnh cho ăn khớp, đồng điệu với mục tiêu, chiến lược hoặc tiêu chuẩn chung",
        synonyms: "synchronize with, match, coordinate with, conform to",
        collocations: ["align with stakeholders", "closely aligned with business goals", "align on the API contract"],
        mnemonic: "Giống thuộc tính CSS `text-align` căn các dòng thẳng tắp một hàng => Các phòng ban căn chỉnh cùng nhìn về đúng một hướng!",
        toeicEx: "Every departmental budget proposal must **align with** the corporation's five-year sustainability roadmap.",
        toeicVi: "Mọi bản đề xuất ngân sách cấp phòng ban đều phải bám sát ăn khớp với lộ trình phát triển bền vững năm năm của tập đoàn.",
        javaEx: "Before writing migration scripts, let's **align with** the Data Engineering team so we don't break their nightly ETL jobs.",
        javaVi: "Trước khi viết kịch bản chuyển đổi dữ liệu, hãy thống nhất trước với đội Kỹ thuật Dữ liệu để không làm gãy các tiến trình ETL chạy đêm của họ."
      },
      {
        word: "manage expectations",
        pos: "v phrase",
        ipa: "/ˈmæn.ɪdʒ ˌek.spekˈteɪ.ʃənz/",
        meaning: "quản trị kỳ vọng (truyền thông trung thực, rõ ràng ngay từ sớm về phạm vi, giới hạn và tiến độ thực tế để tránh gây thất vọng về sau)",
        synonyms: "set realistic expectations, communicate boundaries clearly",
        collocations: ["proactively manage client expectations", "manage stakeholder expectations", "fail to manage expectations"],
        mnemonic: "Đừng hứa làm 10 rồi giao 7 (bị mắng); hãy nói rõ thực tế làm 7 thật chắc rồi giao 8 (được khen) => Đó là nghệ thuật Manage Expectations!",
        toeicEx: "Clear shipping notifications help online retailers **manage** customer **expectations** during peak holiday weeks.",
        toeicVi: "Các thông báo vận chuyển rõ ràng giúp nhà bán lẻ trực tuyến quản trị tốt kỳ vọng của khách hàng trong các tuần lễ cao điểm.",
        javaEx: "Sharing weekly burn-down charts helped me **manage expectations** with the CTO during our complex JDK 21 upgrade.",
        javaVi: "Việc chia sẻ biểu đồ tiến độ hàng tuần đã giúp tôi quản trị kỳ vọng rõ ràng với Giám đốc Công nghệ trong đợt nâng cấp JDK 21 đầy phức tạp."
      },
      {
        word: "propose an alternative",
        pos: "v phrase",
        ipa: "/prəˈpoʊz ən ɑːlˈtɝː.nə.t̬ɪv/",
        meaning: "đề xuất một phương án thay thế (chìa khóa vàng biến lời từ chối thành giải pháp mang tính xây dựng)",
        synonyms: "suggest another option, offer a substitute plan",
        collocations: ["propose a viable alternative", "cost-effective alternative", "have no alternative but to"],
        mnemonic: "PROPOSE (đưa ra lời đề nghị) + ALTERNATIVE (nhánh rẽ thay thế, cùng gốc phím `Alt` trên bàn phím!) => Đóng cửa A thì mở ngay cửa B cho khách!",
        toeicEx: "Since the main ballroom was booked, the hotel coordinator **proposed an alternative** terrace venue overlooking the bay.",
        toeicVi: "Vì sảnh tiệc chính đã kín lịch, điều phối viên khách sạn đã đề xuất một địa điểm sân thượng thay thế nhìn ra vịnh.",
        javaEx: "Instead of building a custom scheduler from scratch, I **proposed an alternative** using Quartz backed by PostgreSQL locks.",
        javaVi: "Thay vì tự viết bộ lập lịch từ con số không, tôi đã đề xuất một phương án thay thế sử dụng Quartz dựa trên cơ chế khóa của PostgreSQL."
      },
      {
        word: "walk through",
        pos: "phr.v (n: walkthrough)",
        ipa: "/wɔːk θruː/",
        meaning: "dẫn dắt, trình bày hoặc hướng dẫn ai đi qua từng bước chi tiết của một thiết kế, đoạn mã hoặc quy trình (`walk sb through sth`)",
        synonyms: "guide step-by-step, demonstrate, explain sequentially",
        collocations: ["walk the team through the architecture", "code walkthrough session", "walk a user through setup"],
        mnemonic: "WALK (đi bộ chậm rãi) + THROUGH (xuyên qua từng căn phòng của ngôi nhà) => Dắt tay người nghe đi xem từng ngóc ngách thiết kế cực kỳ dễ hiểu!",
        toeicEx: "During Monday's orientation, an HR specialist will **walk** new hires **through** the health insurance enrollment portal.",
        toeicVi: "Trong buổi định hướng ngày thứ Hai, chuyên viên nhân sự sẽ hướng dẫn nhân viên mới từng bước trên cổng đăng ký bảo hiểm sức khỏe.",
        javaEx: "Could you **walk** me **through** how your custom Spring Security filter handles expired refresh tokens?",
        javaVi: "Bạn có thể trình bày từng bước cho tôi hiểu bộ lọc Spring Security tùy chỉnh của bạn xử lý các refresh token hết hạn như thế nào không?"
      },
      {
        word: "constructive feedback",
        pos: "n phrase",
        ipa: "/kənˈstrʌk.tɪv ˈfiːd.bæk/",
        meaning: "ý kiến phản hồi mang tính xây dựng (góp ý cụ thể, thiện chí kèm hướng cải thiện thực chất thay vì chê bai đả kích)",
        synonyms: "actionable suggestions, helpful critique",
        collocations: ["give constructive feedback", "welcome constructive feedback", "deliver feedback constructively"],
        mnemonic: "CONSTRUCTIVE (xây dựng nên tòa nhà, gốc construct) >< DESTRUCTIVE (đập phá) => Góp ý để giúp đồng nghiệp giỏi lên mỗi ngày!",
        toeicEx: "Managers receive annual training on how to provide **constructive feedback** during employee performance reviews.",
        toeicVi: "Các cấp quản lý được đào tạo hàng năm về cách đưa ra phản hồi mang tính xây dựng trong các kỳ đánh giá hiệu suất nhân viên.",
        javaEx: "Giving empathetic, **constructive feedback** on pull requests helped our junior Java developers ramp up twice as fast.",
        javaVi: "Việc đưa ra các góp ý chân thành, mang tính xây dựng trên pull request đã giúp các lập trình viên Java trẻ trong nhóm trưởng thành nhanh gấp đôi."
      },
      {
        word: "buy-in",
        pos: "n",
        ipa: "/ˈbaɪ.ɪn/",
        meaning: "sự đồng tình ủng hộ, sự cam kết nhập cuộc thực sự của lãnh đạo hoặc các bên liên quan đối với một kế hoạch/đề xuất mới",
        synonyms: "endorsement, backing, commitment, support",
        collocations: ["get stakeholder buy-in", "secure leadership buy-in", "lack team buy-in"],
        mnemonic: "BUY IN (mua cổ phần tham gia vào cuộc chơi chung) => Khi sếp và đồng nghiệp đã 'buy-in', họ coi dự án của bạn như dự án của chính họ!",
        toeicEx: "Securing early **buy-in** from store managers was essential to the smooth rollout of the new inventory scanner.",
        toeicVi: "Việc giành được sự đồng tình ủng hộ từ sớm của các cửa hàng trưởng là yếu tố thiết yếu giúp triển khai máy quét tồn kho mới suôn sẻ.",
        javaEx: "To get **buy-in** for refactoring the billing monolith, I presented clear metrics showing how bugs delayed feature releases by 40%.",
        javaVi: "Để thuyết phục ban lãnh đạo ủng hộ việc tái cấu trúc khối thanh toán cũ, tôi đã trình bày số liệu rõ ràng chứng minh lỗi hệ thống đang làm chậm 40% tốc độ ra tính năng."
      },
      {
        word: "escalate",
        pos: "v",
        ipa: "/ˈes.kə.leɪt/",
        meaning: "1) báo cáo nâng cấp sự việc/rủi ro lên cấp có thẩm quyền cao hơn để kịp tháo gỡ; 2) leo thang căng thẳng hoặc tăng mạnh (chi phí)",
        synonyms: "refer upward, raise to higher management; intensify",
        collocations: ["escalate a blocker to management", "escalate a customer ticket", "escalating cloud costs"],
        mnemonic: "Cùng gốc với ESCALATOR (thang cuốn siêu thị chạy vút lên tầng trên) => Vượt quá quyền quyết định ở tầng dưới thì đưa lên tầng quản lý cao hơn!",
        toeicEx: "Tier-1 support agents should immediately **escalate** any billing dispute exceeding $1,000 to a team supervisor.",
        toeicVi: "Nhân viên hỗ trợ tuyến 1 cần lập tức chuyển cấp mọi tranh chấp hóa đơn vượt quá 1.000 đô la lên giám sát viên đội nhóm.",
        javaEx: "After waiting three days for firewall approval, I **escalated** the issue to the Release Manager so our sprint wouldn't slip.",
        javaVi: "Sau ba ngày chờ phê duyệt tường lửa không phản hồi, tôi đã báo cáo nâng cấp vấn đề lên Quản lý Phát hành để sprint của nhóm không bị trễ."
      },
      {
        word: "feasible",
        pos: "adj",
        ipa: "/ˈfiː.zə.bəl/",
        meaning: "khả thi, có thể thực hiện được trong thực tế với nguồn lực, thời gian và công nghệ hiện có",
        synonyms: "viable, achievable, doable, practical",
        collocations: ["technically feasible", "not feasible within this timeframe", "conduct a feasibility study"],
        mnemonic: "FEASIBLE đọc gần giống 'EASY-ble' => Trong tầm tay có thể làm được thật chứ không phải chuyện viễn vông trên giấy!",
        toeicEx: "Engineers submitted a detailed **feasibility** report confirming that the riverside bridge expansion is **feasible**.",
        toeicVi: "Các kỹ sư đã đệ trình báo cáo nghiên cứu khả thi chi tiết xác nhận việc mở rộng cây cầu ven sông là hoàn toàn thực hiện được.",
        javaEx: "Migrating twenty microservices in a single weekend isn't **feasible**; a phased Strangler Fig approach is much safer.",
        javaVi: "Việc chuyển đổi hai mươi microservice chỉ trong một dịp cuối tuần là không khả thi; cách tiếp cận thay thế dần từng phần (Strangler Fig) an toàn hơn nhiều."
      },
      {
        word: "consensus",
        pos: "n",
        ipa: "/kənˈsen.səs/",
        meaning: "sự đồng thuận chung của cả tập thể; (Hệ thống phân tán) thuật toán đồng thuận giữa các nút như Raft / Paxos",
        synonyms: "general agreement, unanimity, accord",
        collocations: ["reach a consensus", "build consensus across teams", "distributed consensus algorithm (Raft)"],
        mnemonic: "CON (cùng nhau) + SENSUS (cảm nhận/ý kiến) => Cả hội đồng (hoặc cả cụm node Kafka KRaft!) cùng gật đầu thống nhất một quyết định!",
        toeicEx: "After two rounds of revisions, committee members finally reached a **consensus** on the updated travel policy.",
        toeicVi: "Sau hai vòng chỉnh sửa, các thành viên ủy ban cuối cùng đã đạt được sự đồng thuận về chính sách công tác mới.",
        javaEx: "Kafka replaced ZooKeeper with KRaft, an internal Raft-based **consensus** protocol that simplifies metadata management.",
        javaVi: "Kafka đã thay thế ZooKeeper bằng KRaft — một giao thức đồng thuận nội bộ dựa trên Raft giúp đơn giản hóa việc quản lý siêu dữ liệu."
      }
    ],
    examples: [
      {
        tag: "Global Interview",
        en: "When Product asked for real-time exports in three days, I **pushed back** politely with effort data and **proposed an alternative** async email export.",
        vi: "Khi bên Product yêu cầu xuất báo cáo thời gian thực trong ba ngày, tôi đã phản biện lịch sự kèm dữ liệu ước lượng và đề xuất phương án thay thế là xuất bất đồng bộ gửi qua email.",
        note: "Câu chuyện mẫu mực 10/10 điểm cho câu hỏi phỏng vấn: 'Tell me about a time you disagreed with a Product Manager'."
      },
      {
        tag: "System Design",
        en: "Let me **walk** everyone **through** the sequence diagram first so we **align** on failure modes before voting.",
        vi: "Để tôi dẫn dắt mọi người đi qua biểu đồ tuần tự trước nhằm thống nhất ý hiểu về các kịch bản lỗi trước khi biểu quyết.",
        note: "Câu điều phối cuộc họp ARB cực kỳ chững chạc của một Principal/Staff Engineer."
      },
      {
        tag: "Daily Standup",
        en: "Since the vendor still hasn't fixed their sandbox outage, we may need to **escalate** this through our partnership manager today.",
        vi: "Vì phía đối tác vẫn chưa khắc phục sự cố sập môi trường thử nghiệm của họ, hôm nay chúng ta có thể cần báo cáo nâng cấp việc này qua quản lý đối tác.",
        note: "'Escalate' dùng đúng lúc giúp gỡ điểm nghẽn liên công ty mà không mang tiếng đi mách lẻo."
      },
      {
        tag: "Code Review",
        en: "Thank you for the **constructive feedback** on my concurrency design — switching to `CompletableFuture.allOf` made the code much cleaner!",
        vi: "Cảm ơn những góp ý xây dựng của bạn về thiết kế đa luồng của tôi — việc chuyển sang `CompletableFuture.allOf` đã làm đoạn code gọn sạch hơn hẳn!",
        note: "Biết đón nhận và cảm ơn lời góp ý cũng là biểu hiện của một Senior trưởng thành."
      },
      {
        tag: "Global Interview",
        en: "Securing **buy-in** from skeptical tech leads required building a working proof-of-concept that proved Virtual Threads worked with our JDBC driver.",
        vi: "Để giành được sự ủng hộ từ các trưởng nhóm còn hoài nghi, tôi đã xây dựng bản thử nghiệm chạy thật chứng minh Virtual Threads tương thích tốt với JDBC driver hiện tại.",
        note: "Chứng minh bằng PoC (Proof of Concept) là cách lấy 'buy-in' thuyết phục nhất."
      },
      {
        tag: "System Design",
        en: "After debating GraphQL versus BFF REST endpoints, the architecture guild reached a **consensus** to adopt Spring Boot BFFs.",
        vi: "Sau khi tranh luận giữa GraphQL và các endpoint REST theo mẫu BFF, hội đồng kiến trúc đã đạt được sự đồng thuận chọn hướng Spring Boot BFF.",
        note: "Cấu trúc 'reach a consensus to V' rất mạch lạc trong biên bản cuộc họp."
      },
      {
        tag: "Daily Standup",
        en: "Can we **push back** our backlog refinement by thirty minutes so the release team can finish post-deploy verification?",
        vi: "Mình lùi buổi làm mịn backlog lại 30 phút để đội phát hành hoàn tất kiểm tra sau triển khai được không?",
        note: "Minh họa nghĩa thứ hai cực kỳ phổ biến hàng ngày của 'push back' (= dời lịch muộn hơn một chút)."
      },
      {
        tag: "Incident War-room",
        en: "To **manage expectations** with enterprise clients, Customer Success sent transparent hourly ETA updates during recovery.",
        vi: "Để quản trị kỳ vọng với nhóm khách hàng doanh nghiệp, bộ phận Chăm sóc Khách hàng đã gửi cập nhật thời gian khắc phục dự kiến minh bạch hàng giờ.",
        note: "Truyền thông minh bạch là chìa khóa giữ niềm tin khách hàng B2B."
      },
      {
        tag: "TOEIC Part 7",
        en: "Should your flight be canceled, our travel desk will immediately arrange a **feasible** rail **alternative** at no extra charge.",
        vi: "Nếu chuyến bay của quý khách bị hủy, quầy hỗ trợ du lịch của chúng tôi sẽ lập tức thu xếp phương án tàu hỏa thay thế khả thi mà không thu thêm phí.",
        note: "Ôn lại đảo ngữ câu điều kiện loại 1 (`Should your flight be...`) kết hợp cả `feasible` và danh từ `alternative`!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Because Tuesday's board meeting ended without a **consensus**, the vote on the factory expansion has been **pushed back** to May 12.",
        vi: "Bởi vì cuộc họp hội đồng quản trị hôm thứ Ba kết thúc mà chưa đạt được sự đồng thuận, cuộc bỏ phiếu mở rộng nhà máy đã được dời lại sang ngày 12 tháng 5.",
        note: "Hai từ khóa của bài cùng xuất hiện trong một câu chuẩn đề thi ETS TOEIC Part 7."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "No, impossible! You don't know how hard Java migration is!",
          fix: "Delivering all modules by Friday isn't feasible without high regression risk, so I'd like to propose a phased alternative.",
          why: "Nói 'impossible / you don't know' gây xung đột trực diện; công thức 'isn't feasible without risk + propose an alternative' giữ trọn sự tôn trọng và chuyên nghiệp."
        },
        {
          bug: "Now I will read and show you my design document from page 1 to page 5.",
          fix: "Let me walk you through the key sections of our design document.",
          why: "'Let me walk you through...' nghe cuốn hút, tự nhiên và đẳng cấp như diễn giả bản xứ."
        },
        {
          bug: "Finally, our team reached a mutual consensus of opinion together.",
          fix: "Finally, our team reached a consensus on the database schema.",
          why: "Bản thân từ 'consensus' đã chứa nghĩa 'cùng nhau thống nhất ý kiến' rồi, nên thêm 'mutual / of opinion / together' là lỗi thừa từ (redundancy)."
        },
        {
          bug: "We don't have another alternative choice.",
          fix: "We have no viable alternative. (hoặc: Let's explore an alternative approach.)",
          why: "'Alternative' đứng làm danh từ đã có nghĩa là 'sự lựa chọn thay thế', ghép 'another alternative choice' bị lặp nghĩa."
        }
      ]
    },
    toeicTips: [
      "Cảnh giác cao độ với bẫy từ loại đuôi `-tive` trong TOEIC Part 5: Đứng sau `an / a viable / a cost-effective _____`, từ `alternative` đóng vai trò là DANH TỪ ĐẾM ĐƯỢC (một phương án thay thế)! Đừng vội loại nó vì tưởng nó chỉ là tính từ.",
      "Cặp phrasal verb lịch trình cực hay thi trong TOEIC Listening Part 2–3: `push back` = `put off / postpone` (lùi lịch lại muộn hơn) >< `move up / bring forward` (đẩy lịch lên sớm hơn!). Nghe nhầm hai cụm này là chọn ngược giờ họp ngay!",
      "Họ từ `feasible` (adj: khả thi) -> `feasibility` (n: tính khả thi, đặc biệt trong cụm danh từ ghép cố định `a feasibility study` — nghiên cứu tính khả thi)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "propose a phased alternative.",
          "isn't feasible,",
          "by Friday",
          "Since shipping everything",
          "I'd like to"
        ],
        answer: "Since shipping everything by Friday isn't feasible, I'd like to propose a phased alternative.",
        vi: "Vì việc bàn giao toàn bộ vào thứ Sáu là không khả thi, tôi muốn đề xuất một phương án thay thế chia theo từng giai đoạn."
      },
      fillBlank: {
        sentence: "Let me _____ you through our proposed Kafka retry architecture before we open the floor for questions.",
        answer: "walk",
        accepted: ["walk"],
        hint: "Động từ 4 chữ cái đi với 'you through' mang nghĩa dẫn dắt/trình bày từng bước",
        explain: "Cấu trúc 'walk [someone] through [something]' là cách nói chuẩn mực nhất trong giao tiếp kỹ thuật và kinh doanh để dẫn dắt người nghe đi qua một bản thiết kế hoặc quy trình."
      }
    },
    quiz: [
      {
        q: "Chiều thứ Tư, Giám đốc Sản phẩm nhắn tin muốn bổ sung một tính năng đối soát phức tạp vào bản release sáng thứ Sáu tuần này. Cách phản hồi (push back) nào thể hiện bản lĩnh Tech Lead quốc tế nhất?",
        options: [
          "Impossible! Ask someone else, my team goes home at 5 PM.",
          "OK boss, we will skip all unit tests and push untested code to production.",
          "I align with the urgency of reconciliation; however, building the full flow by Friday isn't feasible without risking payment stability. Can I propose an alternative: export a verified CSV report this Friday and automate full reconciliation next sprint?",
          "Im lặng không trả lời tin nhắn tới tận sáng thứ Sáu rồi báo chưa làm."
        ],
        answer: 2,
        explain: "Đáp án C áp dụng hoàn hảo công thức 4 bước của Senior Leadership: đồng cảm mục tiêu (`align with`), nêu lý do khách quan không khả thi (`isn't feasible without risking stability`), và đưa ngay phương án thay thế giải quyết nhu cầu cấp bách (`propose an alternative`). A thô lỗ, B phá hoại chất lượng, D vô trách nhiệm."
      },
      {
        q: "[TOEIC Part 5] Before committing $10 million to the offshore wind farm, the utility board commissioned an independent _____ study.",
        options: [
          "feasible",
          "feasibly",
          "feasibility",
          "consensus"
        ],
        answer: 2,
        explain: "Đáp án C ('feasibility' — danh từ) ghép với danh từ 'study' tạo thành thuật ngữ kinh doanh cố định cực kỳ nổi tiếng trong TOEIC: 'an independent feasibility study' (một cuộc nghiên cứu tính khả thi độc lập). A là tính từ, B là trạng từ, D ('consensus study') không hợp nghĩa."
      },
      {
        q: "[TOEIC Listening Part 3] Trong đoạn hội thoại, người phụ nữ nói: 'Since our keynote speaker's flight was delayed, we've had to push back the afternoon workshop to 4:00 PM.' Điều gì đã xảy ra với buổi hội thảo?",
        options: [
          "Buổi hội thảo bị hủy bỏ hoàn toàn.",
          "Buổi hội thảo được dời lịch sang giờ muộn hơn (4 giờ chiều).",
          "Buổi hội thảo được đẩy lên tổ chức sớm hơn vào buổi sáng.",
          "Buổi hội thảo chuyển sang tổ chức ở một thành phố khác."
        ],
        answer: 1,
        explain: "Đáp án B chính xác: Cụm động từ 'push back [an event] to [a later time]' có nghĩa là dời/lùi thời gian tổ chức lại muộn hơn (đồng nghĩa với 'postpone / delay until 4:00 PM'). Đừng nhầm với 'move up' (đẩy sớm lên — phương án C)!"
      }
    ]
  },

  V4_5: {
    duration: "45 phút",
    toeicTarget: "Phỏng Vấn Job Global / Remote Lương USD & TOEIC 650–750+",
    javaContext: "Viết CV/Resume Chuẩn FAANG, Trả Lời Phỏng Vấn Hành Vi (STAR) & Đàm Phán Lương Thưởng (Offer Negotiation)",
    teacherIntro: "Tôi đã đọc hơn 1.000 bản CV của lập trình viên Java gửi ứng tuyển vào các vị trí Senior $4,000–$7,000/tháng, và 85% mắc chung một lỗi chí mạng: mọi gạch đầu dòng trong CV đều bắt đầu bằng cụm từ nhạt nhòa 'Responsible for coding...' hoặc 'Participated in project...'! Nhà tuyển dụng quốc tế chỉ dành đúng 6 giây quét mắt qua CV của bạn — họ tìm kiếm những ĐỘNG TỪ HÀNH ĐỘNG MẠNH (Power Action Verbs) gắn liền với TÁC ĐỘNG ĐỊNH LƯỢNG (Quantifiable Impact): spearhead (chủ trì dẫn dắt), architect (thiết kế kiến trúc), optimize, slash latency by 60%, thể hiện tinh thần làm chủ đầu-cuối (end-to-end ownership) và phối hợp đa phòng ban (cross-functional)! Và khi họ gửi thư mời nhận việc, bộ từ vựng đàm phán đãi ngộ (compensation package, base salary, relocation, negotiable) ở cuối bài này có thể giúp anh em mang về thêm $300–$800 mỗi tháng chỉ sau một cuộc gọi 15 phút!",
    javaAnalogy: {
      title: "Trả Lời Phỏng Vấn Theo Mô Hình STAR giống hệt Cấu Trúc Bài Kiểmử BDD `Given - When - Then`",
      body: "Anh em viết BDD test quen rồi thì áp sang trả lời phỏng vấn hành vi dễ như trở bàn tay! **S (Situation) + T (Task)** chính là mệnh đề `GIVEN` — đặt bối cảnh gọn trong 2 câu (ví dụ hệ thống thanh toán cũ hay nghẽn lúc cao điểm). **A (Action)** chính là mệnh đề `WHEN` — nơi bạn dùng chủ ngữ **'I'** (không trốn sau 'We'!) kết hợp các động từ mạnh (`spearheaded`, `architected`, `optimized`) và tinh thần `ownership` làm việc cùng team `cross-functional`. Cuối cùng **R (Result)** chính là mệnh đề `THEN / ASSERT` — chốt bằng con số đo đếm được (`slashed p99 latency by 65%`, tiết kiệm `$40k/year`)!"
    },
    objectives: [
      "Nâng cấp toàn diện CV/LinkedIn và câu trả lời phỏng vấn STAR bằng nhóm từ quyền lực: spearhead, architect, optimize, slash, ownership, cross-functional.",
      "Đàm phán tự tin, lịch thiệp gói thu nhập quốc tế (total compensation package, base salary, sign-on/performance bonus, relocation allowance, negotiable).",
      "Làm chủ nhóm từ vựng nhân sự cấp cao, đãi ngộ & thuyên chuyển công tác xuất hiện thường xuyên trong TOEIC Part 5, 6, 7."
    ],
    formulaCards: [
      {
        label: "Công Thức Viết Bullet Point Triệu Đô Trong CV (XYZ Formula)",
        formula: "Spearheaded and architected [System X] using [Java 21 / Kafka], slashing [Metric Y] by [60%] and saving [$50K annually].",
        note: "Công thức chuẩn Google Recruiter: Động từ mạnh quá khứ + Làm cái gì + Đo lường kết quả bằng % hoặc $!"
      },
      {
        label: "Khung Nhấn Mạnh Tinh Thần Làm Chủ Trong Phỏng Vấn STAR",
        formula: "I took full end-to-end ownership of the migration, collaborating with cross-functional QA, SRE, and Product teams.",
        note: "Hai từ khóa 'end-to-end ownership' và 'cross-functional' xuất hiện trong 95% bảng chấm điểm Bar Raiser của Big Tech."
      },
      {
        label: "Khung Hỏi Cấu Trúc Gói Thu Nhập Toàn Phần (Total Compensation)",
        formula: "Could you share the breakdown of the total compensation package, including base salary, annual bonus, and equity?",
        note: "Hỏi 'total compensation package' cho thấy bạn am hiểu thị trường quốc tế chứ không chỉ nhìn lương cứng hàng tháng."
      },
      {
        label: "Khung Đàm Phán Nâng Mức Offer Lịch Thiệp (Polite Salary Negotiation)",
        formula: "I'm very excited about the role! Given my track record in distributed Java systems, is the base salary somewhat negotiable?",
        note: "Luôn bày tỏ sự hào hứng trước ('I'm very excited...'), nêu giá trị bản thân rồi mới hỏi khéo bằng 'somewhat negotiable'."
      }
    ],
    sections: [
      {
        heading: "1. Lột Xác CV & Vòng Behavioral Interview Với Phương Pháp STAR: Spearhead, Architect, Optimize & Slash",
        paragraphs: [
          "Trong văn hóa Á Đông, chúng ta được dạy phải khiêm tốn nên khi phỏng vấn cứ nói mãi 'We did this, my team fixed that'. Kết quả là giám khảo Mỹ/Singapore ghi vào phiếu đánh giá: 'Unclear personal contribution — sounds like a passenger, not a driver!'. Bạn vẫn phải tôn trọng đồng đội, nhưng ở phần Action của cấu trúc STAR (Situation - Task - Action - Result), hãy nói rõ VAI TRÒ CỦA RIÊNG BẠN bằng ngôi 'I' đi kèm động từ mạnh!",
          "Hãy thay thế 'joined / helped' bằng 'spearheaded' (đi đầu dẫn dắt một sáng kiến mới), thay 'designed' đơn điệu bằng động từ 'architected' (thiết kế tổng thể kiến trúc chịu tải cao), 'optimized' (tối ưu hóa sâu), và dùng động từ giàu hình ảnh 'slashed' (cắt giảm mạnh mẽ từ 40%–80% độ trễ, chi phí AWS hoặc thời gian build!)."
        ],
        bullets: [
          "Tỷ lệ thời gian vàng cho một câu trả lời STAR dài 2 phút: `Situation + Task (20%)` -> `Action của cá nhân bạn (50%)` -> `Result có số liệu cụ thể (30%)`.",
          "`Architect` trong tiếng Anh công nghệ hiện đại không chỉ là danh từ (kiến trúc sư) mà còn là ngoại động từ cực mạnh (`architected a multi-tenant SaaS platform`).",
          "Động từ `slash` mạnh và ấn tượng hơn `reduce` gấp nhiều lần khi con số cắt giảm lớn (từ 30% trở lên): `slashed cold-start time from 14s to 1.2s`!"
        ]
      },
      {
        heading: "2. Phẩm Chất Vàng Của Senior Engineer Toàn Cầu: Ownership & Cross-Functional Collaboration",
        paragraphs: [
          "Nếu hỏi các Engineering Manager tại Amazon, Grab hay Atlassian đâu là phẩm chất số 1 tách biệt Senior với Junior, câu trả lời luôn là 'Ownership' (tinh thần làm chủ trọn vẹn). Người có 'end-to-end ownership' không bao giờ nói câu 'Code của em đẩy lên nhánh develop xong là hết trách nhiệm rồi, lỗi trên prod là việc của QA và DevOps!' — họ theo sát tính năng từ lúc đọc yêu cầu, viết code, cài dashboard giám sát Grafana cho tới khi khách hàng dùng êm ái trên Production.",
          "Song hành cùng ownership là năng lực làm việc liên chức năng ('cross-functional collaboration' — phối hợp nhịp nhàng giữa Backend, Frontend, Mobile, QA, Security, Data và Product mà không đổ lỗi qua lại)."
        ],
        bullets: [
          "Collocation điểm 10 trong CV & phỏng vấn: `demonstrate strong end-to-end ownership` và `lead cross-functional initiatives`.",
          "Khi kể chuyện thất bại ('Tell me about a mistake you made'), hãy nhận thẳng `ownership` về mình, nêu bài học hệ thống đã cải tiến và tuyệt đối không đổ vấy cho QA hay PM.",
          "Chuẩn bị sẵn ít nhất 4 câu chuyện STAR ruột trước ngày phỏng vấn: (1) Sự cố Production khó nhất, (2) Bất đồng kỹ thuật & thuyết phục, (3) Tối ưu hiệu năng lớn, (4) Trễ hạn & cách xử lý."
        ]
      },
      {
        heading: "3. Đàm Phán Lương USD & Chinh Phục Chủ Điểm Nhân Sự Đề Thi TOEIC: Compensation Package, Base Salary, Relocation & Negotiable",
        paragraphs: [
          "Khi HR quốc tế hỏi kỳ vọng thu nhập hoặc gửi thư mời nhận việc (Offer Letter), hãy phân biệt rõ 'base salary' (lương cơ bản cố định hàng tháng/năm) với 'total compensation package' (tổng gói đãi ngộ toàn phần bao gồm base salary + performance bonus + cổ phiếu RSUs/ESOP + bảo hiểm + phụ cấp làm việc từ xa hoặc hỗ trợ chuyển chỗ ở ra nước ngoài 'relocation package').",
          "Toàn bộ nhóm từ đãi ngộ nhân sự này cũng chính là 'món ruột' của đề thi TOEIC Reading Part 5, 6, 7 (đặc biệt trong các mẩu tin tuyển dụng Job Advertisements và Thư mời nhận việc Offer Emails)! Khi tin tuyển dụng TOEIC viết 'Salary is commensurate with experience and negotiable', đáp án Part 7 sẽ paraphrase thành 'Pay can be discussed based on qualifications'."
        ],
        bullets: [
          "Đừng bao giờ trả lời cộc lốc một con số cứng nhắc ngay vòng đầu; hãy nói: 'I'm looking for a competitive total compensation package around $X–$Y, though it's negotiable depending on benefits and growth opportunities.'",
          "Trong TOEIC Part 7, `relocation expenses / allowance` là khoản chi phí công ty tài trợ khi điều chuyển nhân viên sang chi nhánh thành phố hoặc quốc gia khác.",
          "Cụm từ siêu hay đi kèm trong tin tuyển dụng TOEIC 700+: `a generous compensation package` (gói đãi ngộ hậu hĩnh)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "spearhead",
        pos: "v / n",
        ipa: "/ˈspɪr.hed/",
        meaning: "đi đầu dẫn dắt, chủ trì khởi xướng một dự án, cuộc chuyển đổi công nghệ hoặc chiến dịch quan trọng",
        synonyms: "lead from the front, champion, pioneer, drive",
        collocations: ["spearhead the cloud migration", "spearhead a security initiative", "spearhead the expansion"],
        mnemonic: "SPEAR (ngọn giáo chiến trận) + HEAD (mũi nhọn đi đầu tiên) => Người cầm mũi giáo tiên phong mở đường cho cả đoàn quân tiến lên!",
        toeicEx: "Vice President Elena Rostova was chosen to **spearhead** the firm's entry into the Latin American market.",
        toeicVi: "Phó Chủ tịch Elena Rostova đã được chọn để dẫn dắt chiến dịch thâm nhập thị trường Mỹ Latinh của công ty.",
        javaEx: "I **spearheaded** the migration of twelve legacy Spring XML services to Spring Boot 3 and Java 21.",
        javaVi: "Tôi đã chủ trì dẫn dắt cuộc chuyển đổi mười hai dịch vụ Spring XML đời cũ lên Spring Boot 3 và Java 21."
      },
      {
        word: "architect",
        pos: "v / n",
        ipa: "/ˈɑːr.kə.tekt/",
        meaning: "(động từ) thiết kế kiến trúc tổng thể cho một hệ thống phần mềm/hạ tầng phức tạp; (danh từ) kiến trúc sư",
        synonyms: "design structurally, engineer, blueprint",
        collocations: ["architect a scalable platform", "principal software architect", "well-architected framework"],
        mnemonic: "Chữ `CH` đọc là **/k/** (/ˈɑːr.kə.tekt/)! Trong CV Senior Mỹ, dùng `Architected...` làm động từ mở đầu dòng nghe uy lực gấp bội `Designed...`!",
        toeicEx: "Renowned urban planners helped **architect** the eco-friendly business district near the new airport.",
        toeicVi: "Các nhà quy hoạch đô thị danh tiếng đã giúp kiến tạo khu phức hợp thương mại thân thiện môi trường gần sân bay mới.",
        javaEx: "I **architected** an event-driven settlement engine capable of processing 15,000 transactions per second.",
        javaVi: "Tôi đã thiết kế kiến trúc bộ máy quyết toán hướng sự kiện có khả năng xử lý 15.000 giao dịch mỗi giây."
      },
      {
        word: "optimize",
        pos: "v",
        ipa: "/ˈɑːp.tə.maɪz/",
        meaning: "tối ưu hóa (cải tiến thuật toán, truy vấn, quy trình hoặc chi phí để đạt hiệu suất cao nhất có thể)",
        synonyms: "streamline, fine-tune, maximize efficiency",
        collocations: ["optimize SQL execution plans", "optimize cloud spending", "heavily optimized"],
        mnemonic: "OPTIMUM (điểm tốt nhất cực đại) + IZE => Vặn chỉnh từng con ốc index và JVM flag để hệ thống chạy ở phong độ đỉnh cao nhất!",
        toeicEx: "The logistics firm uses route-planning software to **optimize** fuel consumption across its delivery fleet.",
        toeicVi: "Công ty hậu cần sử dụng phần mềm lập lộ trình để tối ưu hóa mức tiêu thụ nhiên liệu trên toàn đội xe giao hàng.",
        javaEx: "By **optimizing** Hibernate batch fetching and composite indexes, I improved report generation speed by 4x.",
        javaVi: "Bằng cách tối ưu hóa cơ chế tải theo lô của Hibernate và các chỉ mục ghép, tôi đã cải thiện tốc độ xuất báo cáo nhanh gấp 4 lần."
      },
      {
        word: "slash",
        pos: "v",
        ipa: "/slæʃ/",
        meaning: "cắt giảm mạnh mẽ, kéo sụt đáng kể một con số tiêu cực (như độ trễ, tỷ lệ lỗi, chi phí hạ tầng, thời gian chờ)",
        synonyms: "cut drastically, chop down, pare back sharply",
        collocations: ["slash API latency by 60%", "slash monthly AWS bills", "slash build times in half"],
        mnemonic: "SLASH là nhát kiếm chém ngọt sắc lẹm (cũng là dấu gạch chéo `/`) => Chém bay một nửa độ trễ từ 800ms rớt thẳng xuống 120ms!",
        toeicEx: "Automating invoice verification **slashed** accounting processing times from five days to four hours.",
        toeicVi: "Việc tự động hóa khâu đối chiếu hóa đơn đã cắt giảm mạnh thời gian xử lý kế toán từ năm ngày xuống chỉ còn bốn giờ.",
        javaEx: "Adopting GraalVM native images for serverless workers **slashed** cold-start latency by 85%.",
        javaVi: "Áp dụng GraalVM native images cho các tác vụ serverless đã cắt giảm tới 85% độ trễ khởi động lạnh."
      },
      {
        word: "cross-functional",
        pos: "adj",
        ipa: "/ˌkrɔːsˈfʌŋk.ʃən.əl/",
        meaning: "liên chức năng, đa bộ phận (gồm các thành viên có chuyên môn khác nhau như Backend, Frontend, QA, DevOps, PM, Design cùng phối hợp)",
        synonyms: "multidisciplinary, interdepartmental",
        collocations: ["lead a cross-functional squad", "cross-functional collaboration", "work with cross-functional partners"],
        mnemonic: "CROSS (băng ngang qua ranh giới) + FUNCTIONAL (các phòng ban chức năng) => Phá bỏ bức tường ốc đảo giữa các bộ phận để cùng làm ra sản phẩm!",
        toeicEx: "A **cross-functional** task force from R&D, finance, and marketing oversaw the flagship smartphone launch.",
        toeicVi: "Một tổ công tác liên chức năng gồm R&D, tài chính và tiếp thị đã giám sát đợt ra mắt mẫu điện thoại chủ lực.",
        javaEx: "I collaborated closely with a **cross-functional** team across Singapore and Berlin to deliver PSD2 open-banking APIs.",
        javaVi: "Tôi đã phối hợp chặt chẽ cùng đội ngũ liên chức năng tại Singapore và Berlin để bàn giao hệ thống API ngân hàng mở chuẩn PSD2."
      },
      {
        word: "ownership",
        pos: "n",
        ipa: "/ˈoʊ.nɚ.ʃɪp/",
        meaning: "1) tinh thần làm chủ và chịu trách nhiệm trọn vẹn từ đầu tới cuối công việc; 2) quyền sở hữu hợp pháp tài sản/cổ phần",
        synonyms: "accountability, stewardship, responsibility; proprietorship",
        collocations: ["take end-to-end ownership", "strong sense of ownership", "transfer ownership of"],
        mnemonic: "OWNER (người chủ ngôi nhà) + SHIP => Chăm chút từng dòng code và từng cảnh báo Production như chăm chính ngôi nhà của mình!",
        toeicEx: "Proof of vehicle **ownership** must be presented when applying for a corporate parking permit.",
        toeicVi: "Giấy tờ chứng minh quyền sở hữu phương tiện phải được xuất trình khi đăng ký thẻ đỗ xe công ty.",
        javaEx: "Taking full **ownership** of observability, I built Grafana SLO dashboards that cut mean time to detection to two minutes.",
        javaVi: "Nhận trách nhiệm làm chủ trọn vẹn mảng giám sát, tôi đã dựng bảng đo SLO trên Grafana giúp rút ngắn thời gian phát hiện sự cố trung bình xuống còn hai phút."
      },
      {
        word: "compensation package",
        pos: "n phrase",
        ipa: "/ˌkɑːm.penˈseɪ.ʃən ˈpæk.ɪdʒ/",
        meaning: "tổng gói đãi ngộ thu nhập (bao gồm lương cứng, thưởng hiệu suất, cổ phiếu ESOP/RSU, bảo hiểm sức khỏe và các phúc lợi khác)",
        synonyms: "remuneration package, total rewards, pay and benefits",
        collocations: ["competitive compensation package", "total compensation package", "review the compensation package"],
        mnemonic: "COMPENSATION (đền đáp công sức xứng đáng) + PACKAGE (gói quà tổng hợp nhiều món bên trong, không chỉ riêng lương tháng)!",
        toeicEx: "To attract top AI researchers, the firm offers an industry-leading **compensation package** including stock options.",
        toeicVi: "Để thu hút các nhà nghiên cứu AI hàng đầu, công ty đưa ra gói đãi ngộ dẫn đầu ngành bao gồm cả quyền chọn cổ phiếu.",
        javaEx: "Although Startup A offered a slightly lower monthly pay, Enterprise B's total **compensation package** was 25% higher thanks to RSUs.",
        javaVi: "Mặc dù Startup A trả lương tháng nhỉnh hơn đôi chút, nhưng tổng gói đãi ngộ của Tập đoàn B cao hơn tới 25% nhờ cổ phiếu thưởng RSU."
      },
      {
        word: "base salary",
        pos: "n phrase",
        ipa: "/ˈbeɪs ˈsæl.ɚ.i/",
        meaning: "mức lương cơ bản cố định (khoản thu nhập chắc chắn nhận định kỳ chưa tính thưởng doanh số, làm thêm giờ hay cổ phiếu)",
        synonyms: "fixed pay, basic salary, guaranteed pay",
        collocations: ["annual base salary", "negotiate a higher base salary", "base salary plus bonus"],
        mnemonic: "BASE (nền móng vững chắc bên dưới) + SALARY (tiền lương) => Phần lương nền chắc chắn chảy vào tài khoản mỗi tháng dù thị trường lên hay xuống!",
        toeicEx: "Sales executives receive a competitive **base salary** in addition to quarterly commission incentives.",
        toeicVi: "Chuyên viên kinh doanh nhận mức lương cơ bản cạnh tranh cộng thêm các khoản thưởng hoa hồng hàng quý.",
        javaEx: "The offer includes an annual **base salary** of $84,000 plus a 15% target performance bonus.",
        javaVi: "Thư mời nhận việc bao gồm mức lương cơ bản hàng năm là 84.000 đô la cộng với mức thưởng hiệu suất mục tiêu 15%."
      },
      {
        word: "relocation",
        pos: "n",
        ipa: "/ˌriː.loʊˈkeɪ.ʃən/",
        meaning: "sự chuyển chỗ ở sang thành phố/quốc gia khác để nhận công việc mới (đi kèm gói hỗ trợ vé máy bay, visa, nhà ở); sự di dời văn phòng",
        synonyms: "transfer move, reassignment abroad, office move",
        collocations: ["relocation package / allowance", "open to relocation", "headquarters relocation"],
        mnemonic: "RE (lại) + LOCATION (địa điểm) => Đổi sang địa điểm sống và làm việc mới (ví dụ sang Amsterdam, Tokyo hay Singapore làm Senior Java)!",
        toeicEx: "The company covers up to $8,000 in **relocation** expenses for managers transferring to the Dublin hub.",
        toeicVi: "Công ty chi trả tối đa 8.000 đô la chi phí chuyển chỗ ở cho các quản lý điều chuyển sang trung tâm tại Dublin.",
        javaEx: "Does this Principal Java role allow full remote work from Vietnam, or does it include visa sponsorship and **relocation** to Berlin?",
        javaVi: "Vị trí Principal Java này cho phép làm từ xa toàn thời gian từ Việt Nam hay bao gồm tài trợ visa và hỗ trợ chuyển sang sinh sống tại Berlin ạ?"
      },
      {
        word: "negotiable",
        pos: "adj",
        ipa: "/nəˈɡoʊ.ʃə.bəl/",
        meaning: "có thể thương lượng, có thể đàm phán điều chỉnh được (mức lương, ngày bắt đầu đi làm, điều khoản hợp đồng)",
        synonyms: "open to discussion, flexible, adjustable",
        collocations: ["salary is negotiable", "non-negotiable security requirement", "somewhat negotiable"],
        mnemonic: "NEGOTIATE (đàm phán thương lượng) + ABLE (có thể) => Nhớ cả từ trái nghĩa cực mạnh `non-negotiable` (nguyên tắc bất di bất dịch không thỏa hiệp)!",
        toeicEx: "While the lease duration is fixed at three years, the monthly maintenance fee remains **negotiable**.",
        toeicVi: "Mặc dù thời hạn thuê cố định là ba năm, khoản phí bảo trì hàng tháng vẫn có thể thương lượng được.",
        javaEx: "My start date is flexible, and I was wondering if the sign-on bonus or **base salary** might be **negotiable**.",
        javaVi: "Ngày bắt đầu làm việc của tôi khá linh hoạt, và tôi muốn hỏi liệu khoản thưởng ký hợp đồng hoặc lương cơ bản có thể thương lượng thêm được không."
      }
    ],
    examples: [
      {
        tag: "Global Interview",
        en: "In my previous role, I **spearheaded** a zero-downtime PostgreSQL migration that **slashed** licensing costs by $120,000 per year.",
        vi: "Ở vị trí trước đây, tôi đã chủ trì cuộc chuyển đổi sang PostgreSQL không gây gián đoạn dịch vụ, giúp cắt giảm 120.000 đô la chi phí bản quyền mỗi năm.",
        note: "Câu giới thiệu bản thân ('Tell me about yourself') khiến hội đồng tuyển dụng chú ý ngay từ giây thứ 10!"
      },
      {
        tag: "Global Interview",
        en: "Automated security testing in CI/CD is **non-negotiable** for our fintech team before any code reaches production.",
        vi: "Kiểm thử bảo mật tự động trong đường ống CI/CD là điều kiện bắt buộc không thỏa hiệp đối với đội ngũ fintech của chúng tôi trước khi code lên production.",
        note: "Dùng tính từ ghép `non-negotiable` thể hiện tiêu chuẩn chất lượng sắt đá của một Tech Lead."
      },
      {
        tag: "Global Interview",
        en: "Using the STAR framework, I explained how I took **ownership** of an orphaned legacy service and **optimized** its memory footprint by 55%.",
        vi: "Áp dụng khung STAR, tôi giải thích cách mình đứng ra nhận làm chủ một dịch vụ cũ không người chăm sóc và tối ưu giảm 55% mức tiêu thụ RAM của nó.",
        note: "Biến một công việc bảo trì tưởng như nhàm chán thành điểm sáng rực rỡ trong buổi phỏng vấn."
      },
      {
        tag: "System Design",
        en: "I **architected** a multi-region notification gateway in Java 21 that serves five **cross-functional** product lines.",
        vi: "Tôi đã thiết kế kiến trúc cổng thông báo đa khu vực bằng Java 21 phục vụ chung cho năm dòng sản phẩm liên bộ phận.",
        note: "Thể hiện tầm ảnh hưởng rộng cấp độ Staff Engineer (ảnh hưởng tới nhiều team chứ không chỉ 1 team)."
      },
      {
        tag: "Global Interview",
        en: "Thank you for the generous offer! Considering competing offers I've received, is there room to adjust the **base salary** by 10%?",
        vi: "Cảm ơn lời mời nhận việc rất hậu hĩnh của quý công ty! Xét tới các lời mời cạnh tranh khác mà tôi đang nhận được, liệu có dư địa điều chỉnh mức lương cơ bản tăng thêm 10% không ạ?",
        note: "Cụm 'is there room to adjust...' là cách đàm phán lương khéo léo, đẳng cấp nhất mà HR quốc tế cực kỳ tôn trọng."
      },
      {
        tag: "Global Interview",
        en: "We provide full visa sponsorship, flight tickets, and two months of temporary housing as part of our **relocation** support.",
        vi: "Chúng tôi cung cấp trọn gói bảo lãnh visa, vé máy bay và hai tháng nhà ở tạm thời nằm trong gói hỗ trợ chuyển nơi sinh sống.",
        note: "Hiểu rõ các quyền lợi thường có trong gói Relocation khi ứng tuyển sang Châu Âu, Nhật, Úc, Singapore."
      },
      {
        tag: "Code Review",
        en: "Great **ownership** following up with mobile engineers to verify the payload contract end-to-end on staging!",
        vi: "Tinh thần làm chủ rất tuyệt vời khi bạn chủ động theo sát cùng anh em mobile để xác minh hợp đồng dữ liệu đầu-cuối trên staging!",
        note: "Lời khen tinh tế của Tech Lead dành cho thành viên trong nhóm."
      },
      {
        tag: "Daily Standup",
        en: "Today I'm syncing with our **cross-functional** launch squad — Mobile, QA, and Marketing — to lock the release checklist.",
        vi: "Hôm nay tôi họp đồng bộ cùng biệt đội ra mắt liên chức năng — gồm Mobile, QA và Marketing — để khóa danh mục kiểm tra phát hành.",
        note: "Diễn đạt gọn gàng sự phối hợp đa bộ phận trước giờ ra mắt sản phẩm."
      },
      {
        tag: "TOEIC Part 7",
        en: "Successful candidates will receive an attractive **compensation package** commensurate with their industry qualifications.",
        vi: "Các ứng viên trúng tuyển sẽ nhận được gói đãi ngộ hấp dẫn tương xứng với năng lực chuyên môn trong ngành của họ.",
        note: "Cụm vàng của tin tuyển dụng TOEIC Part 7: `commensurate with` (= tương xứng với) đi liền sau `compensation package`!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Employees who accept voluntary **relocation** to the new Austin facility are eligible for a one-time $5,000 moving bonus.",
        vi: "Những nhân viên chấp nhận thuyên chuyển tự nguyện tới cơ sở mới tại Austin sẽ đủ điều kiện nhận khoản thưởng chuyển chỗ ở một lần trị giá 5.000 đô la.",
        note: "Kết hợp hai từ vựng điểm cao TOEIC: `voluntary relocation` và `be eligible for` (đủ điều kiện hưởng)."
      }
    ],
    mistakesTable: {
      title: "Cách Nói Ngây Ngô (Junior Vietlish ❌) vs Phong Thái Senior Quốc Tế (Clean ✅)",
      rows: [
        {
          bug: "In my CV: Responsible for coding Java backend and fixing slow SQL.",
          fix: "Architected core Java 21 microservices and optimized SQL queries, slashing p99 latency by 62%.",
          why: "'Responsible for...' chỉ liệt kê nhiệm vụ thụ động không ai biết bạn làm tốt hay dở; dùng động từ mạnh + con số kết quả giúp CV nổi bật gấp 10 lần."
        },
        {
          bug: "In the interview: We designed the system and we solved the bug.",
          fix: "Collaborating with a cross-functional team, I spearheaded the root-cause analysis and implemented the fix.",
          why: "Vừa ghi nhận tinh thần đồng đội ('Collaborating with...'), vừa làm sáng rõ đóng góp trực tiếp của cá nhân ('I spearheaded...')."
        },
        {
          bug: "Your salary offer is too low, give me $500 more or I don't work.",
          fix: "I'm thrilled about joining the team! Given my distributed-systems background, is the base salary somewhat negotiable?",
          why: "Ra tối hậu thư dễ khiến công ty rút lại Offer; cách hỏi lịch thiệp luôn giữ bầu không khí thiện chí đôi bên cùng thắng (win-win)."
        },
        {
          bug: "Does the company pay money for moving my house to Singapore?",
          fix: "Does the total compensation package include a relocation allowance for moving to Singapore?",
          why: "Dùng đúng thuật ngữ nhân sự quốc tế 'relocation allowance / package' cho thấy bạn chuyên nghiệp và hiểu chuẩn mực toàn cầu."
        }
      ]
    },
    toeicTips: [
      "Cặp từ đồng nghĩa ăn điểm tuyệt đối trong bài đọc Tuyển dụng (Job Ad) của TOEIC Part 7: `compensation / remuneration` = `pay and benefits` (lương và phúc lợi); `commensurate with experience` = `based on / matching prior experience`.",
      "Trong TOEIC Part 5, tính từ `negotiable` thường đứng sau động từ nối `be / remain` (`The price is negotiable`), còn danh từ `negotiation(s)` dùng cho cuộc đàm phán (`enter into contract negotiations`).",
      "Chú ý hai nghĩa của `relocation` trong TOEIC: (1) công ty dời trụ sở sang tòa nhà mới (`office relocation`), và (2) nhân viên chuyển nơi ở để nhận công tác mới (`employee relocation expenses`)."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java:",
        chunks: [
          "slashing API latency",
          "I spearheaded",
          "by sixty percent.",
          "With a cross-functional team,",
          "the Kafka migration,"
        ],
        answer: "With a cross-functional team, I spearheaded the Kafka migration, slashing API latency by sixty percent.",
        vi: "Cùng một đội ngũ liên chức năng, tôi đã chủ trì dẫn dắt đợt chuyển đổi sang Kafka, giúp cắt giảm 60% độ trễ API."
      },
      fillBlank: {
        sentence: "Beyond the monthly base salary, the total _____ package includes annual bonuses, health insurance, and stock options.",
        answer: "compensation",
        accepted: ["compensation", "remuneration"],
        hint: "Danh từ bắt đầu bằng chữ 'c' ghép với 'package' chỉ tổng gói đãi ngộ thu nhập",
        explain: "'Compensation package' là thuật ngữ chuẩn mực của phòng Nhân sự toàn cầu và đề thi TOEIC để chỉ toàn bộ gói lương thưởng và phúc lợi dành cho nhân viên."
      }
    },
    quiz: [
      {
        q: "Dòng mô tả kinh nghiệm nào dưới đây trong CV Senior Java gây ấn tượng mạnh nhất với nhà tuyển dụng tại các tập đoàn công nghệ toàn cầu?",
        options: [
          "Worked in Order team for 3 years and wrote Java code every day as assigned by leader.",
          "Spearheaded and architected an event-driven Order Settlement service in Java 21 & Kafka, slashing p99 checkout latency by 68% across 5M daily orders.",
          "Helped some teammates fix bugs sometimes when not busy.",
          "Used IntelliJ IDEA, Git, Maven, and attended daily standup meetings on time."
        ],
        answer: 1,
        explain: "Đáp án B tuân thủ hoàn hảo công thức XYZ của các công ty công nghệ hàng đầu: bắt đầu bằng động từ hành động mạnh ở thì quá khứ (`Spearheaded and architected`), nêu rõ công nghệ chủ chốt (`Java 21 & Kafka`), và chứng minh tác động kinh doanh bằng con số cụ thể (`slashing p99 latency by 68% across 5M daily orders`). A, C, D đều liệt kê công việc thụ động mờ nhạt."
      },
      {
        q: "[TOEIC Part 5] Starting salaries for senior cloud architects are _____ depending on prior enterprise migration experience.",
        options: [
          "negotiate",
          "negotiable",
          "negotiator",
          "negotiating"
        ],
        answer: 1,
        explain: "Đáp án B ('negotiable' — tính từ: có thể thương lượng được) đứng sau động từ to-be 'are' làm bổ ngữ mô tả đặc tính cho chủ ngữ 'Starting salaries'. A là động từ nguyên thể, C là danh từ chỉ người ('nhà đàm phán'), D ('are negotiating' — mức lương không thể tự đi đàm phán chủ động được!)."
      },
      {
        q: "[TOEIC Part 7] Trong thư mời nhận việc của hãng phần mềm có câu: 'A one-time $6,000 relocation stipend will be disbursed with your first paycheck.' Khoản tiền 6.000 đô la này dùng để hỗ trợ việc gì?",
        options: [
          "Mua cổ phần của công ty đối thủ.",
          "Chi phí chuyển nơi sinh sống sang địa điểm làm việc mới.",
          "Đóng tiền phạt đi làm muộn.",
          "Mua sắm máy chủ cho phòng kế toán."
        ],
        answer: 1,
        explain: "Đáp án B chính xác: 'relocation stipend / allowance' là khoản trợ cấp tài chính một lần giúp nhân viên mới trang trải chi phí chuyển nhà/di chuyển sang thành phố hoặc quốc gia nơi đặt văn phòng làm việc."
      }
    ]
  },

  V4_6: {
    duration: "50 phút",
    toeicTarget: "Phá Đảo TOEIC Reading Part 7 (650–800+) & Đọc Hiểu Hợp Đồng / RFP Kỹ Thuật",
    javaContext: "Kỹ Thuật Nhận Diện Paraphrasing Giữa Bài Đọc & Đáp Án Đúng TOEIC Part 7 + Đọc Tài Liệu Đấu Thầu IT (RFP/SLA)",
    teacherIntro: "Anh em thân mến, ở bài kết thúc trọn vẹn lộ trình Từ vựng V4 hôm nay, tôi muốn bật mí cho anh em 'Mật mã Tối thượng' của người ra đề ETS TOEIC — thứ giúp hàng trăm học viên kỹ sư của tôi nhảy vọt từ 520 lên thẳng 730–810 điểm! Bí mật nằm ở chỗ: trong 54 câu hỏi của TOEIC Reading Part 7, đáp án đúng GẦN NHƯ KHÔNG BAO GIỜ chép nguyên xi từ vựng có trong bài đọc! Nếu bài đọc viết 'Attendance is mandatory', đáp án đúng sẽ viết 'Employees are required to attend'. Nếu bài đọc ghi 'a complimentary shuttle', đáp án đúng sẽ đổi thành 'transportation provided free of charge'! Dân lập trình Java hiểu khái niệm này trong 1 nốt nhạc: hai biểu thức khác mặt chữ nhưng trả về `equals() == true`! Nắm chắc 10 cặp Paraphrasing tần suất xuất hiện cao nhất lịch sử đề thi ETS trong bài V4.6 này, anh em sẽ nhìn xuyên thấu mọi ma trận đáp án Part 7!",
    javaAnalogy: {
      title: "TOEIC Paraphrasing giống hệt Code Refactoring: Đổi Cú Pháp Bên Ngoài Nhưng Giữ Nguyên Ngữ Nghĩa (`Behaviorally Equivalent`)",
      body: "Trong Java, `list.isEmpty()` và `list.size() == 0` viết khác chữ nhau hoàn toàn nhưng mang ngữ nghĩa logic tương đương 100%! Người ra đề ETS TOEIC chính là bậc thầy 'Refactor câu chữ': trên đoạn văn gốc (Source Code) họ viết `prior to Friday`, còn dưới 4 phương án A-B-C-D (Refactored Output) họ viết `before the end of the week`; trên bài đọc họ viết `undergo scheduled maintenance`, dưới đáp án họ đổi thành `be temporarily closed for upgrades`. Đừng đi tìm hai chuỗi giống hệt nhau bằng toán tử `==` (bẫy lặp từ y nguyên chữ thường là đáp án SAI lừa thí sinh đọc lướt!), hãy dùng `semanticEquals()` để bắt cặp đồng nghĩa!"
    },
    objectives: [
      "Thuộc nằm lòng 10 siêu từ vựng Paraphrasing xuất hiện lặp đi lặp lại trong MỌI đề thi TOEIC Part 7: complimentary, mandatory, annual, prior to, subsequent, approximately, reimburse, undergo, accommodate, tentative.",
      "Tránh bẫy 'Word-Matching Trap' (lặp lại y nguyên từ trong bài nhưng bóp méo nghĩa) của ETS để tăng tốc độ và độ chính xác khi giải đoạn đôi, đoạn ba (Double & Triple Passages).",
      "Đọc hiểu sắc bén các tài liệu thương mại & đấu thầu phần mềm quốc tế (RFP, Hợp đồng SLA, Lịch bảo trì, Chính sách công tác)."
    ],
    formulaCards: [
      {
        label: "Quy Tắc Vàng Bắt Cặp Chi Phí & Bắt Buộc (Cost & Obligation Pairs)",
        formula: "complimentary ≈ free of charge / at no cost  |  mandatory ≈ required / compulsory / must",
        note: "Chỉ riêng 2 cặp này đã xuất hiện trung bình 3–5 lần trong mỗi đề thi TOEIC Reading!"
      },
      {
        label: "Quy Tắc Vàng Bắt Cặp Trục Thời Gian & Tần Suất (Time & Frequency Pairs)",
        formula: "prior to ≈ before / in advance of  |  subsequent ≈ following / later  |  annual ≈ once a year / yearly",
        note: "Dùng để giải gọn các câu hỏi 'When will...?' hoặc 'How often...?' trong Part 7 chỉ trong 10 giây."
      },
      {
        label: "Quy Tắc Vàng Bắt Cặp Số Liệu & Trạng Thái Chưa Chốt (Quantity & Status Pairs)",
        formula: "approximately ≈ roughly / nearly / about  |  tentative ≈ provisional / subject to change / not final",
        note: "Cẩn thận bẫy tuyệt đối hóa: bài viết 'approximately 200' mà đáp án ghi 'exactly 200' là SAI ngay lập tức!"
      },
      {
        label: "Quy Tắc Vàng Bắt Cặp Hành Động Doanh Nghiệp (Action Pairs)",
        formula: "reimburse ≈ pay back expenses  |  undergo ≈ experience / go through  |  accommodate ≈ hold / meet needs",
        note: "Ba động từ cốt lõi xuất hiện dày đặc trong email hoàn ứng công tác, thông báo bảo trì hệ thống và đặt phòng sự kiện."
      }
    ],
    sections: [
      {
        heading: "1. Giải Mã Bẫy 'Lặp Từ Nguyên Xi' (Verbatim Trap) vs Đáp Án Paraphrase Thật Trong TOEIC Part 7",
        paragraphs: [
          "Khi mới luyện TOEIC ở ngưỡng 450–550, thói quen tự nhiên của mắt là quét tìm phương án nào có chứa nhiều từ giống hệt bài đọc nhất rồi khoanh. ETS biết quá rõ tâm lý đó nên họ giăng bẫy 'Verbatim Trap': phương án B lặp lại y nguyên 4 từ khóa trong bài nhưng gài thêm chữ `only`, `all`, `already` hoặc đảo ngược chủ vị khiến câu thành SAI hoàn toàn!",
          "Ngược lại, phương án ĐÚNG (650–800+) trông mặt chữ rất khác bài đọc vì đã được 'đổi áo từ vựng' (paraphrase). Ví dụ: Email của bộ phận IT viết 'All remote engineers are required to update their VPN client prior to October 1'. Đáp án đúng sẽ là: 'Installing the new VPN version before October 1 is mandatory for off-site staff' (`remote engineers` -> `off-site staff`; `required` -> `mandatory`; `prior to` -> `before`)!"
        ],
        bullets: [
          "Cảnh giác tuyệt đối với các từ cực đoan trong đáp án Part 7: `always, never, completely, exclusively, every, guaranteed` — trừ khi bài đọc xác nhận 100%, đa phần đây là phương án bẫy!",
          "Các cặp đổi danh ngữ chỉ người cực hay gặp: `attendees / participants` = `people going to the seminar`; `off-site / remote staff` = `employees working from home`.",
          "Các cặp đổi chu kỳ thời gian cần phản xạ trong 1 giây: `quarterly` = `every three months / four times a year`; `biweekly` = `every two weeks`; `annual` = `yearly / once a year`."
        ]
      },
      {
        heading: "2. Nhóm Từ Bảo Trì, Hoàn Ứng & Sức Chứa Hạ Tầng: Undergo, Reimburse & Accommodate",
        paragraphs: [
          "Ba động từ `undergo`, `reimburse` và `accommodate` vừa là trụ cột của đề thi TOEIC, vừa xuất hiện hàng tuần trong hộp thư của kỹ sư làm việc tại các tập đoàn toàn cầu. Khi hệ thống ngân hàng hoặc tòa nhà bước vào đợt bảo trì/nâng cấp lớn, thông báo chính thức luôn viết: 'Our core database cluster will undergo scheduled maintenance this Sunday' (= trải qua đợt bảo trì theo lịch).",
          "Khi bạn đi công tác onsite Singapore hoặc thi chứng chỉ AWS Solutions Architect bằng tiền túi trước, công ty sẽ hoàn trả lại chi phí đó cho bạn khi nộp hóa đơn ('reimburse employees for exam fees / travel expenses' — lưu ý khác với `refund` là cửa hàng hoàn tiền cho khách mua hàng lỗi!). Và động từ 'accommodate' có hai nét nghĩa vàng: (1) đủ sức chứa cho bao nhiêu người hoặc bao nhiêu lưu lượng truy cập ('accommodate 500 attendees / peak traffic'), và (2) đáp ứng/chiều theo một yêu cầu đặc biệt ('accommodate dietary restrictions / custom client requirements')."
        ],
        bullets: [
          "Phân biệt sắc bén cho cả Part 5 & Part 7: `reimburse` = công ty hoàn ứng chi phí công tác/học tập cho nhân viên; `refund` = nhà bán hàng trả lại tiền cho khách mua sản phẩm/vé.",
          "Chính tả của `accommodate` rất hay viết thiếu chữ: nhớ có **2 chữ C và 2 chữ M** (`a-CC-o-MM-odate` — đủ rộng để chứa cả 2 cặp đôi C và M!).",
          "Quá khứ và phân từ hai của `undergo` chia giống hệt `go`: `undergo — underwent — undergone`!"
        ]
      },
      {
        heading: "3. Chiến Thuật Quét Đọc Đa Đoạn (Double & Triple Passages) Trong 55 Phút Cho Lập Trình Viên",
        paragraphs: [
          "Từ câu 176 đến 200 của đề thi TOEIC là các cụm 2 đoạn và 3 đoạn văn liên kết (ví dụ: Đoạn 1 là Thông báo lịch đào tạo tentative -> Đoạn 2 là Email nhân viên xin đổi ca -> Đoạn 3 là Bảng lịch chốt chính thức). Với tư duy truy vết dữ liệu (data correlation / foreign-key join!) vốn cực mạnh của lập trình viên Java, anh em có lợi thế khổng lồ ở phần này!",
          "Hãy coi mã đơn hàng, ngày tháng hoặc tên phòng họp như một `Primary Key` nối bảng 1 sang bảng 2. Ví dụ Đoạn 1 ghi 'Workshops with fewer than 10 sign-ups will be canceled', Đoạn 2 (bảng danh sách đăng ký) cho thấy lớp 'Advanced SQL' có 8 người => Kết hợp (JOIN) hai dữ kiện và paraphrase chữ `canceled` thành `will not take place` là anh em lấy trọn điểm câu suy luận khó nhất đề thi!"
        ],
        bullets: [
          "Đọc câu hỏi TRƯỚC để lấy từ khóa định vị, sau đó quét tìm vị trí chứa thông tin rồi đối chiếu cặp Paraphrase xuống 4 lựa chọn.",
          "Chú ý sự thay đổi trạng thái từ `tentative` (lịch dự kiến ở Đoạn 1) sang `confirmed / finalized` (lịch chốt ở Đoạn 2 hoặc 3).",
          "Chú ý cặp thứ tự trước – sau trong chuỗi sự kiện: `prior to` (trước khi) >< `subsequent to / following` (ngay sau đó)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "complimentary",
        pos: "adj",
        ipa: "/ˌkɑːm.pləˈmen.tər.i/",
        meaning: "miễn phí, biếu tặng kèm không thu tiền (= `free of charge / at no extra cost`); ca ngợi. (Chú ý chữ `i`, khác `complementary` chữ `e` là bổ trợ nhau!)",
        synonyms: "free of charge, gratis, at no additional cost, courtesy",
        collocations: ["complimentary breakfast / shuttle", "complimentary software trial", "complimentary ticket"],
        mnemonic: "COMPL**I**MENTARY (có chữ **I** -> **I** love FREE gifts! Quà tặng miễn phí!). Còn COMPL**E**MENTARY (chữ **E** -> compl**E**te bổ sung hoàn thiện cho nhau)!",
        toeicEx: "Conference registrants will receive **complimentary** high-speed Wi-Fi and airport shuttle passes.",
        toeicVi: "Người đăng ký dự hội nghị sẽ nhận được Wi-Fi tốc độ cao và vé xe đưa đón sân bay hoàn toàn miễn phí.",
        javaEx: "The cloud vendor offered three months of **complimentary** enterprise support during our Kubernetes migration.",
        javaVi: "Nhà cung cấp đám mây đã tặng kèm ba tháng gói hỗ trợ doanh nghiệp miễn phí trong suốt quá trình chúng tôi chuyển đổi lên Kubernetes."
      },
      {
        word: "mandatory",
        pos: "adj",
        ipa: "/ˈmæn.də.tɔːr.i/",
        meaning: "bắt buộc theo quy định hoặc luật lệ (= `required / compulsory / obligatory` — trái nghĩa với `optional / voluntary`)",
        synonyms: "required, compulsory, obligatory, imperative",
        collocations: ["mandatory security training", "mandatory fields in JSON payload", "strictly mandatory"],
        mnemonic: "MANDATE (mệnh lệnh chỉ thị bắt buộc từ cấp trên) => Trường dữ liệu `mandatory` mà truyền `null` vào là văng lỗi `400 Bad Request` ngay!",
        toeicEx: "Wearing protective eyewear is **mandatory** for all visitors entering the assembly plant.",
        toeicVi: "Việc đeo kính bảo hộ là bắt buộc đối với tất cả khách tham quan bước vào nhà máy lắp ráp.",
        javaEx: "Two-factor authentication and signed Git commits are **mandatory** for every developer with repository write access.",
        javaVi: "Xác thực hai yếu tố và ký số các bản commit Git là bắt buộc đối với mọi lập trình viên có quyền ghi vào kho mã nguồn."
      },
      {
        word: "annual",
        pos: "adj",
        ipa: "/ˈæn.ju.əl/",
        meaning: "hàng năm, thường niên, diễn ra mỗi năm một lần (= `once a year / yearly`)",
        synonyms: "yearly, once-a-year, twelve-month",
        collocations: ["annual general meeting", "annual subscription fee", "annual performance appraisal"],
        mnemonic: "ANNU (năm, như anniversary kỷ niệm ngày cưới hàng năm!) => Trong Part 7: `annual audit` luôn paraphrase thành `inspection held once a year`!",
        toeicEx: "All fire extinguishers in the office tower undergo an **annual** safety inspection each November.",
        toeicVi: "Tất cả bình chữa cháy trong tòa tháp văn phòng đều được kiểm định an toàn hàng năm vào mỗi tháng Mười một.",
        javaEx: "Switching from monthly on-demand billing to an **annual** reserved-instance plan saved 38% on our RDS database cluster.",
        javaVi: "Việc chuyển từ thanh toán theo tháng sang gói đặt trước hàng năm đã giúp tiết kiệm 38% chi phí cho cụm cơ sở dữ liệu RDS của chúng tôi."
      },
      {
        word: "prior to",
        pos: "prep phrase",
        ipa: "/ˈpraɪ.ɚ tuː/",
        meaning: "trước, trước thời điểm hoặc sự kiện nào đó (= `before / in advance of / ahead of`)",
        synonyms: "before, in advance of, preceding",
        collocations: ["prior to departure", "48 hours prior to deployment", "prior to signing the contract"],
        mnemonic: "PRIOR (ưu tiên đứng trước, như `PriorityQueue` trong Java luôn lấy thằng ưu tiên ra TRƯỚC!) => `Prior to` chính là phiên bản trang trọng của `Before`!",
        toeicEx: "Cancellations made at least 24 hours **prior to** the scheduled appointment will not incur a penalty fee.",
        toeicVi: "Các lượt hủy lịch thực hiện ít nhất 24 giờ trước giờ hẹn đã đặt sẽ không bị tính phí phạt.",
        javaEx: "Always back up production encryption keys and verify snapshot integrity **prior to** running major schema upgrades.",
        javaVi: "Hãy luôn sao lưu các khóa mã hóa production và xác minh tính toàn vẹn của bản chụp dữ liệu trước khi chạy nâng cấp schema lớn."
      },
      {
        word: "subsequent",
        pos: "adj",
        ipa: "/ˈsʌb.sɪ.kwənt/",
        meaning: "tiếp theo sau đó, diễn ra về sau (= `following / later / succeeding` — trái nghĩa trực tiếp với `prior / previous`)",
        synonyms: "following, ensuing, later, succeeding",
        collocations: ["in subsequent releases", "subsequent to the merger", "subsequent investigation"],
        mnemonic: "SUB + SEQUENT (nối đuôi theo sau, cùng gốc với `Sequence` chuỗi tuần tự trong SQL!) => Sự kiện đến nối tiếp phía sau!",
        toeicEx: "The initial workshop will be held in Seoul, with **subsequent** training sessions planned for Osaka and Taipei.",
        toeicVi: "Buổi hội thảo đầu tiên sẽ được tổ chức tại Seoul, với các buổi đào tạo tiếp theo sau đó được lên kế hoạch tại Osaka và Đài Bắc.",
        javaEx: "The first call warms the Caffeine cache, so all **subsequent** lookups for that tenant return in under a millisecond.",
        javaVi: "Lời gọi đầu tiên làm nóng bộ đệm Caffeine, nhờ đó mọi lượt tra cứu tiếp theo sau của khách hàng đó đều trả về trong chưa đầy một mili-giây."
      },
      {
        word: "approximately",
        pos: "adv",
        ipa: "/əˈprɑːk.sə.mət.li/",
        meaning: "xấp xỉ, khoảng chừng, gần bằng (= `roughly / around / about / nearly`)",
        synonyms: "roughly, about, around, close to",
        collocations: ["approximately two hours", "cost approximately $50,000", "employ approximately 400 staff"],
        mnemonic: "PROXIM (tiếp cận gần sát bên cạnh, như proximity) => Không phải con số tuyệt đối chính xác từng xu mà nằm sát quanh mốc đó!",
        toeicEx: "Renovation of the West Wing cafeteria is expected to take **approximately** six weeks.",
        toeicVi: "Việc cải tạo nhà ăn Cánh Tây dự kiến sẽ mất khoảng chừng sáu tuần.",
        javaEx: "Compressing JSON responses with Zstandard reduced outbound bandwidth usage by **approximately** 70%.",
        javaVi: "Việc nén các phản hồi JSON bằng thuật toán Zstandard đã giảm mức sử dụng băng thông đầu ra xấp xỉ 70%."
      },
      {
        word: "reimburse",
        pos: "v",
        ipa: "/ˌriː.ɪmˈbɝːs/",
        meaning: "hoàn trả lại chi phí (công ty thanh toán trả lại khoản tiền mà nhân viên đã tự chi trả trước cho công tác, tiếp khách, thi chứng chỉ)",
        synonyms: "repay expenses, compensate out-of-pocket costs",
        collocations: ["reimburse employees for travel expenses", "submit receipts for reimbursement", "fully reimbursed"],
        mnemonic: "RE (trả lại) + IM (vào trong) + BURSE (cái ví tiền — như bursary học bổng) => Bơm trả lại tiền vào ví cho nhân viên sau chuyến đi công tác!",
        toeicEx: "Please attach original itemized receipts so the accounting office can **reimburse** your hotel and meal expenses.",
        toeicVi: "Vui lòng đính kèm hóa đơn chi tiết bản gốc để phòng kế toán có thể hoàn ứng chi phí khách sạn và ăn uống cho bạn.",
        javaEx: "Our engineering learning budget fully **reimburses** developers upon passing Oracle Java or AWS certification exams.",
        javaVi: "Quỹ học tập kỹ thuật của công ty hoàn trả toàn bộ lệ phí cho lập trình viên ngay sau khi thi đỗ các chứng chỉ Oracle Java hoặc AWS."
      },
      {
        word: "undergo",
        pos: "v (underwent - undergone)",
        ipa: "/ˌʌn.dɚˈɡoʊ/",
        meaning: "trải qua (một đợt bảo trì, cải tạo, kiểm định khắt khe, chuyển đổi lớn hoặc phẫu thuật)",
        synonyms: "go through, experience, be subjected to",
        collocations: ["undergo scheduled maintenance", "undergo extensive renovations", "undergo rigorous security testing"],
        mnemonic: "UNDER (bên dưới) + GO (đi xuyên qua đường hầm thử thách) => Hệ thống đi qua cuộc 'đại tu bảo dưỡng' để lột xác mạnh mẽ hơn!",
        toeicEx: "The downtown flagship store will **undergo** major renovations throughout April and reopen on May 2.",
        toeicVi: "Cửa hàng chủ lực tại trung tâm thành phố sẽ trải qua đợt cải tạo lớn trong suốt tháng Tư và mở cửa trở lại vào ngày 2 tháng Năm.",
        javaEx: "Every pull request touching cryptographic modules must **undergo** a mandatory review by the Principal Security Architect.",
        javaVi: "Mọi pull request chạm tới các mô-đun mật mã học đều phải trải qua bước rà soát bắt buộc bởi Kiến trúc sư Bảo mật Chính."
      },
      {
        word: "accommodate",
        pos: "v",
        ipa: "/əˈkɑː.mə.deɪt/",
        meaning: "1) đủ sức chứa (chỗ ngồi cho người, dung lượng/tải cho hệ thống); 2) đáp ứng, thu xếp linh hoạt theo yêu cầu/nhu cầu đặc biệt",
        synonyms: "hold, seat, house; adapt to, fulfill requests",
        collocations: ["accommodate up to 300 guests", "accommodate future traffic growth", "accommodate special requests"],
        mnemonic: "Nhớ mẹo chính tả **2 chữ C + 2 chữ M**: Khách sạn đủ rộng lớn để CHỨA (accommodate) và CHIỀU LÒNG mọi yêu cầu của khách VIP!",
        toeicEx: "The newly expanded banquet hall can comfortably **accommodate** up to four hundred conference attendees.",
        toeicVi: "Sảnh tiệc vừa mở rộng có thể chứa thoải mái tối đa bốn trăm đại biểu dự hội nghị.",
        javaEx: "We partitioned the `transactions` table by month to **accommodate** tenfold order growth over the next three years.",
        javaVi: "Chúng tôi đã phân vùng bảng `transactions` theo từng tháng để đủ sức đáp ứng mức tăng trưởng đơn hàng gấp mười lần trong ba năm tới."
      },
      {
        word: "tentative",
        pos: "adj",
        ipa: "/ˈten.tə.tɪv/",
        meaning: "dự kiến, tạm thời, chưa chốt chính thức và vẫn có thể thay đổi (= `provisional / subject to change / not finalized`)",
        synonyms: "provisional, preliminary, penciled-in, unconfirmed",
        collocations: ["tentative release schedule", "tentative agenda", "reach a tentative agreement"],
        mnemonic: "TENTATIVE bắt đầu bằng **TENT** (cái lều bạt cắm trại tạm thời) => Mới dựng lều tạm thôi chứ chưa xây móng bê tông cố định, lịch còn đổi được!",
        toeicEx: "Attached is a **tentative** itinerary for next month's trade delegation; final flight times will be confirmed Friday.",
        toeicVi: "Đính kèm là lịch trình dự kiến cho phái đoàn thương mại tháng tới; giờ bay chính thức sẽ được xác nhận vào thứ Sáu.",
        javaEx: "October 18 is our **tentative** cutover date for the new payment gateway, pending final load-test sign-off.",
        javaVi: "Ngày 18 tháng 10 là ngày chuyển đổi dự kiến cho cổng thanh toán mới của chúng ta, đang chờ phê duyệt kết quả kiểm thử chịu tải cuối cùng."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 7",
        en: "Passage: 'Admission to the evening networking mixer is **complimentary** for badge holders.' -> Answer: 'Registered guests may attend **at no additional charge**.'",
        vi: "Bài đọc: 'Vé vào buổi giao lưu tối được miễn phí cho người đeo thẻ đại biểu.' -> Đáp án đúng: 'Khách đã đăng ký có thể tham dự mà không mất thêm phí.'",
        note: "Cặp Paraphrase kinh điển số 1 xuất hiện gần như mọi bộ đề ETS TOEIC!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Passage: 'All contractors must complete safety orientation **prior to** receiving site keys.' -> Answer: 'Training is **mandatory before** keys are issued.'",
        vi: "Bài đọc: 'Mọi nhà thầu phải hoàn tất định hướng an toàn trước khi nhận chìa khóa công trường.' -> Đáp án: 'Việc đào tạo là bắt buộc trước khi cấp chìa khóa.'",
        note: "Kết hợp kép hai cặp Paraphrase trong một câu: `must` -> `mandatory` và `prior to` -> `before`!"
      },
      {
        tag: "Incident War-room",
        en: "Notice to clients: Our developer sandbox will **undergo** scheduled database upgrades from 02:00 to 04:00 UTC this Sunday.",
        vi: "Thông báo tới khách hàng: Môi trường thử nghiệm tích hợp của chúng tôi sẽ trải qua đợt nâng cấp cơ sở dữ liệu định kỳ từ 02:00 đến 04:00 UTC Chủ nhật này.",
        note: "Mẫu email bảo trì hệ thống trang trọng chuẩn quốc tế cho cả SRE lẫn TOEIC Part 6–7."
      },
      {
        tag: "System Design",
        en: "Our VPC subnet CIDR blocks were sized to **accommodate** **approximately** 4,000 pod IP addresses per availability zone.",
        vi: "Các dải địa chỉ mạng con VPC của chúng tôi được định cỡ để đủ sức chứa xấp xỉ 4.000 địa chỉ IP của pod trên mỗi vùng sẵn sàng.",
        note: "Ứng dụng mượt mà `accommodate` (đủ sức chứa hạ tầng) và `approximately` vào thiết kế Cloud."
      },
      {
        tag: "Daily Standup",
        en: "We have a **tentative** go-live window set for Thursday night, assuming QA signs off on the **subsequent** regression run.",
        vi: "Chúng ta có khung giờ go-live dự kiến vào tối thứ Năm, với giả định đội QA nghiệm thu xong lượt chạy kiểm thử hồi quy tiếp theo đó.",
        note: "Giúp quản lý phân biệt rõ lịch nháp dự kiến (`tentative`) với cam kết cứng."
      },
      {
        tag: "Global Interview",
        en: "When clients requested custom webhook headers, we designed a pluggable mapper to **accommodate** their legacy ERP format cleanly.",
        vi: "Khi khách hàng yêu cầu các header webhook tùy chỉnh, chúng tôi đã thiết kế bộ ánh xạ dạng cắm-rút để đáp ứng gọn gàng định dạng ERP cũ của họ.",
        note: "Nghĩa thứ hai cực hay của `accommodate`: linh hoạt đáp ứng yêu cầu đặc thù của khách hàng."
      },
      {
        tag: "Code Review",
        en: "According to the PCI-DSS spec, rotating master encryption keys is an **annual** **mandatory** control, not a one-time setup.",
        vi: "Theo đặc tả bảo mật PCI-DSS, việc xoay vòng khóa mã hóa chủ là quy định kiểm soát bắt buộc hàng năm chứ không phải chỉ cài đặt một lần.",
        note: "Kết hợp `annual` và `mandatory` trong ngữ cảnh tuân thủ bảo mật ngân hàng."
      },
      {
        tag: "TOEIC Part 7",
        en: "Passage: 'Staff will be **reimbursed** within ten business days.' -> Answer: 'Employees will **be paid back** for approved travel costs.'",
        vi: "Bài đọc: 'Nhân viên sẽ được hoàn ứng trong vòng mười ngày làm việc.' -> Đáp án: 'Nhân viên sẽ được chi trả lại các khoản công tác phí đã duyệt.'",
        note: "Nhận diện tức thì `be reimbursed` = `be paid back / recover out-of-pocket expenses`."
      },
      {
        tag: "TOEIC Part 7",
        en: "Passage: 'Please note that speaker time slots are **tentative**.' -> Answer: 'The presentation schedule **is subject to change**.'",
        vi: "Bài đọc: 'Xin lưu ý rằng khung giờ của các diễn giả mới là dự kiến.' -> Đáp án: 'Lịch trình thuyết trình vẫn có thể thay đổi.'",
        note: "Cặp tương đương kim cương mốc 750+: `tentative` = `subject to change / not yet final`!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Initial software license fees are billed upfront, while **subsequent** maintenance renewals are invoiced on an **annual** basis.",
        vi: "Phí bản quyền phần mềm ban đầu được thanh toán trả trước, trong khi các lần gia hạn bảo trì tiếp theo sau đó được xuất hóa đơn theo chu kỳ hàng năm.",
        note: "Đặt đối lập rõ nét `initial` (ban đầu) >< `subsequent` (tiếp theo sau) kèm `on an annual basis`."
      }
    ],
    mistakesTable: {
      title: "Cách Nói & Giải Đề Sai Lầm (Junior Trap ❌) vs Tư Duy Cao Thủ TOEIC 750+ & Senior (Clean ✅)",
      rows: [
        {
          bug: "Confusing 'complimentary' (free) with 'complementary' (matching well together).",
          fix: "Remember: compl-I-mentary = free of charge; compl-E-mentary = complEting each other (e.g., Java and Kafka are complementary technologies).",
          why: "Hai từ phát âm y hệt nhau (/ˌkɑːm.pləˈmen.tər.i/) chỉ khác đúng 1 chữ cái I và E — đây là cái bẫy từ vựng tinh vi bậc nhất trong cả TOEIC lẫn viết tài liệu tiếng Anh!"
        },
        {
          bug: "Asking the company to 'refund' my taxi fare from the client's office.",
          fix: "Asking the accounting team to reimburse my taxi fare from the client's office.",
          why: "Bạn không phải khách mua hàng đòi trả đồ ('refund'); nhân viên ứng tiền túi đi công việc rồi xin công ty trả lại bắt buộc dùng 'reimburse'!"
        },
        {
          bug: "Writing 'Our server will be undergone maintenance tonight' (Passive error!).",
          fix: "Writing 'Our server will undergo scheduled maintenance tonight.'",
          why: "'Undergo' bản thân đã mang nghĩa 'trải qua/chịu sự bảo trì' và dùng ở dạng CHỦ ĐỘNG (`server undergoes maintenance`), tuyệt đối KHÔNG chia bị động `be undergone`!"
        },
        {
          bug: "Picking a TOEIC Part 7 option just because 5 words match the text word-for-word.",
          fix: "Verifying meaning equivalence via paraphrasing pairs (e.g., tentative -> subject to change, prior to -> before).",
          why: "Đáp án lặp y nguyên mặt chữ trong câu hỏi khó của Part 7 thường là bẫy gài từ phủ định hoặc sai chủ thể; đáp án đúng luôn đổi sang từ/cụm đồng nghĩa."
        }
      ]
    },
    toeicTips: [
      "Bẫy ngữ pháp cực độc của động từ `undergo` trong TOEIC Part 5: Mặc dù dịch sang tiếng Việt nghe rất bị động ('máy chủ ĐƯỢC bảo trì / tòa nhà ĐƯỢC cải tạo'), nhưng trong tiếng Anh `undergo` là ngoại động từ dùng ở THỂ CHỦ ĐỘNG (`The system will undergo upgrades`, KHÔNG BAO GIỜ chọn `will be undergone`)!",
      "Mẹo quét 5 giây câu hỏi `What is indicated about the schedule?` trong TOEIC Part 7: Nếu trên tiêu đề bảng lịch có chữ `(Tentative)` hoặc dấu sao ghi chú ở góc dưới cùng, hãy tìm ngay đáp án chứa cụm `It may be modified / It is not final yet / It is subject to change`!",
      "Thuộc lòng bộ ba thời gian của ETS: `prior to` (= before), `during / throughout` (= in the course of), và `subsequent to / following` (= after). Ba mốc này quyết định đúng/sai của hàng loạt câu hỏi trình tự sự kiện Part 7!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu chuẩn Senior Java & TOEIC 750+:",
        chunks: [
          "since the GitLab host",
          "prior to Friday,",
          "All developers must back up",
          "will undergo scheduled maintenance.",
          "their local branches"
        ],
        answer: "All developers must back up their local branches prior to Friday, since the GitLab host will undergo scheduled maintenance.",
        vi: "Tất cả lập trình viên phải sao lưu các nhánh cục bộ trước thứ Sáu, vì máy chủ GitLab sẽ trải qua đợt bảo trì định kỳ."
      },
      fillBlank: {
        sentence: "Hotel guests attending the Java Summit receive _____ airport shuttle service at no additional cost.",
        answer: "complimentary",
        accepted: ["complimentary", "free"],
        hint: "Tính từ bắt đầu bằng chữ 'c' (có chữ 'i' ở giữa!) đồng nghĩa với 'free of charge'",
        explain: "'Complimentary' (với chữ 'i') là từ vựng vàng của đề thi TOEIC mang nghĩa 'miễn phí / tặng kèm không thu thêm tiền', đồng nghĩa trực tiếp với 'free of charge / at no additional cost'."
      }
    },
    quiz: [
      {
        q: "[TOEIC Part 7 Paraphrasing] Trong email thông báo hội thảo có câu: 'Please note that the attached breakout-session lineup is tentative until all international speakers confirm their flights.' Câu nào dưới đây diễn đạt ĐÚNG thông tin của email?",
        options: [
          "All international flights have been permanently canceled.",
          "The workshop schedule may still be adjusted.",
          "Attendance at every breakout session is strictly mandatory.",
          "Speakers will not be reimbursed for airfare."
        ],
        answer: 1,
        explain: "Đáp án B ('The workshop schedule may still be adjusted' — Lịch hội thảo vẫn có thể được điều chỉnh) là cách paraphrase hoàn hảo của 'breakout-session lineup is tentative' (`lineup` -> `schedule`; `tentative` -> `may still be adjusted`). A, C, D đều xuyên tạc thông tin không có trong câu gốc."
      },
      {
        q: "[TOEIC Part 5 — Bẫy Chủ động/Bị động] The primary payment database will _____ routine security patching between 1:00 AM and 3:00 AM this Sunday.",
        options: [
          "be undergone",
          "undergo",
          "undergone",
          "undergoing"
        ],
        answer: 1,
        explain: "Đáp án B ('undergo' — động từ nguyên thể chủ động sau 'will') là chính xác! Rất nhiều thí sinh dịch tiếng Việt 'cơ sở dữ liệu sẽ ĐƯỢC bảo trì' nên sập bẫy A ('be undergone'), nhưng 'undergo' bản thân đã mang nghĩa 'trải qua (đợt vá lỗi)' và LUÔN dùng ở thể chủ động kèm tân ngữ phía sau ('routine security patching'). C và D sai cấu trúc sau động từ khuyết thiếu 'will'."
      },
      {
        q: "[TOEIC Part 7 Paraphrasing] Thông báo của tòa nhà ghi: 'Tenants who renew their lease prior to March 31 will receive one month of complimentary parking.' Ai sẽ được miễn phí gửi xe 1 tháng?",
        options: [
          "Những người chuyển đi sau ngày 31 tháng 3.",
          "Những khách thuê gia hạn hợp đồng trước ngày 31 tháng 3.",
          "Tất cả nhân viên giao hàng ghé qua tòa nhà mỗi năm một lần.",
          "Những người nộp đơn xin hoàn ứng công tác phí."
        ],
        answer: 1,
        explain: "Đáp án B nắm bắt chuẩn xác cả hai từ khóa vàng: `prior to March 31` = `trước ngày 31 tháng 3`, và `complimentary parking` = `miễn phí gửi xe`."
      }
    ]
  }
});
