/* JavaEng TOEIC 600+ Academy — Học phần V2: Từ Vựng Cốt Lõi TOEIC 600+ (V2_1 -> V2_6)
 * Chủ đề: Hợp Đồng & SLA, Tài Chính & Fintech, Quản Lý Dự Án & QA, CSKH & Bảo Trì, Hạ Tầng IT TOEIC & Cặp Từ Dễ Nhầm
 * Phương pháp: Chunking (Cụm từ) + Memrise Java Mnemonics + TOEIC Paraphrasing Radar
 */

window.LESSON_DETAILS = window.LESSON_DETAILS || {};
Object.assign(window.LESSON_DETAILS, {
  V2_1: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Trọng tâm TOEIC 500–650+ (Part 5 Giới từ cố định & Part 6–7 Hợp đồng)",
    javaContext: "Đọc hiểu Master Service Agreement (MSA), cam kết SLA 99.95% uptime với khách hàng Enterprise, quản lý vòng đời JWT/SSL certificate (expire & renew) và tuân thủ chuẩn bảo mật PCI-DSS / GDPR.",
    teacherIntro: "Bước sang Học phần V2 (Trung cấp – Mục tiêu bứt phá mốc TOEIC 550–650+), độ trang trọng của từ vựng tăng lên rõ rệt! Chủ đề mở màn — Hợp đồng, Pháp lý & Cam kết dịch vụ (SLA) — chính là 'đặc sản' của ETS TOEIC. Rất nhiều bạn đọc câu 'Both parties agreed to abide by the confidentiality clause' mà ngơ ngác tưởng hai 'bữa tiệc' (parties) đang nói chuyện với 'ông già Noel' (Santa Claus)! Thực ra 'party' trong hợp đồng là 'bên tham gia ký kết', còn 'clause' là 'điều khoản'! Học xong bài V2.1 này, bạn sẽ nắm đằng chuôi mọi cặp giới từ ăn điểm Part 5 như 'comply with' và 'abide by' chỉ trong nháy mắt!",
    javaAnalogy: {
      title: "Hợp Đồng Pháp Lý & SLA giống hệt Java Interface Contract & JWT Token Lifecycle",
      body: "Trong OOP, một Java Interface chính là bản 'contract / agreement' giữa hai 'parties' (Caller và Implementation): mỗi method signature cùng Javadoc preconditions/postconditions là các 'terms' và 'clauses' mà class thực thi 'is obligated to' tuân thủ ('abide by / comply with'). Nếu trả về sai kiểu hoặc vượt ngưỡng latency cam kết, đó là 'breach of contract / SLA breach'! Còn chuyện hợp đồng 'expire' (hết hạn) và phải 'renew' (gia hạn) thì giống hệt vòng đời Access Token & Refresh Token hoặc chứng chỉ TLS Let's Encrypt!"
    },
    objectives: [
      "Làm chủ 10 từ/cụm từ cốt lõi về Hợp đồng, Cam kết & Tuân thủ thường xuất hiện trong các câu chốt điểm 600+.",
      "Thuộc nằm lòng giới từ bất biến của bộ đôi tuân thủ: abide BY = comply WITH = conform TO = adhere TO.",
      "Hiểu đúng nghĩa chuyên ngành của các từ đa nghĩa hay gây lú nhất TOEIC: party (bên ký kết), terms (điều khoản), breach (vi phạm / rò rỉ dữ liệu), assurance (sự cam đoan / đảm bảo)."
    ],
    formulaCards: [
      {
        label: "Tứ Đại Cụm Động Từ 'Tuân Thủ' • TOEIC Part 5 Goldmine",
        formula: "comply WITH + quy định = abide BY + điều khoản = adhere TO + chuẩn mực = conform TO + tiêu chuẩn",
        note: "Đề Part 5 hỏi câu này gần như MỌI THÁNG! Cách ra đề: cho sẵn giới từ 'with' ở sau ô trống → chọn 'comply'; cho sẵn 'by' → chọn 'abide'!"
      },
      {
        label: "Word Family • OBLIGATE, COMPLY & ASSURE",
        formula: "obligate (v) → obligation (n: nghĩa vụ) → obligatory (adj: bắt buộc) | comply (v) → compliance (n: sự tuân thủ) | assure (v) → assurance (n)",
        note: "Cụm cố định: 'be obligated to V' (= be required to V: có nghĩa vụ phải làm gì) và 'in compliance with' (tuân thủ theo)."
      },
      {
        label: "Ngôn Ngữ Hợp Đồng • AGREEMENT, CONTRACT, PARTY & CLAUSE",
        formula: "reach an agreement (đạt thỏa thuận) → sign a binding contract (ký hợp đồng ràng buộc) → both parties (cả hai bên) → penalty clause (điều khoản phạt)",
        note: "'agreement' rộng hơn (mọi sự đồng thuận miệng hoặc giấy); 'contract' là văn bản có hiệu lực cưỡng chế pháp lý chặt chẽ."
      },
      {
        label: "Vòng Đời Hiệu Lực • EXPIRE, RENEW & BREACH",
        formula: "expire on [Date] (hết hạn) → renew a subscription/contract (gia hạn) | breach of contract / data breach (vi phạm hợp đồng / rò rỉ dữ liệu)",
        note: "Danh từ của 'expire' là 'expiration' ('expiration date' = ngày hết hạn)."
      }
    ],
    sections: [
      {
        heading: "1. Giải Phẫu Một Bản Hợp Đồng: Contract – Agreement – Party – Terms – Clause",
        paragraphs: [
          "Khi công ty phần mềm của bạn ký dự án Outsourcing hoặc bán gói SaaS cho ngân hàng, bộ hồ sơ luôn gồm MSA (Master Service Agreement) và SLA (Service Level Agreement). Trong cả đời thực lẫn TOEIC Part 7, hiểu cấu trúc từ vựng của văn bản pháp lý giúp bạn đọc lướt tìm thông tin cực nhanh mà không bị choáng ngợp.",
          "Hãy đặc biệt tỉnh táo trước hai từ quen mặt nhưng mang nghĩa hoàn toàn mới trong ngữ cảnh thương mại: 'party' và 'terms'."
        ],
        bullets: [
          "party (n - đếm được): Bên tham gia giao dịch/ký kết ('either party may terminate the agreement with 30 days' notice' = bất kỳ bên nào cũng có thể chấm dứt thỏa thuận nếu báo trước 30 ngày; 'third-party library' = thư viện bên thứ ba).",
          "terms (n - số nhiều): Các điều kiện chung ('under the terms of the contract', 'payment terms', 'accept the terms of service').",
          "clause (n): Một điều khoản, mục nhỏ cụ thể nằm trong hợp đồng ('non-disclosure clause' = điều khoản bảo mật; 'termination clause' = điều khoản chấm dứt).",
          "assurance (n): Lời cam đoan chắc chắn ('give an assurance that data remains encrypted') hoặc Đảm bảo chất lượng ('Quality Assurance - QA')."
        ]
      },
      {
        heading: "2. Nghĩa Vụ & Tuân Thủ Chuẩn Mực: Obligate – Abide by – Comply with",
        paragraphs: [
          "Trong các thông báo quy định an toàn lao động, bảo mật thông tin hoặc kiểm toán ngân hàng của TOEIC Part 5 & Part 6, ETS rất thích kiểm tra xem thí sinh có nhớ chính xác giới từ đi kèm các động từ mang nghĩa 'tuân thủ' và 'ràng buộc' hay không.",
          "Với lập trình viên làm Fintech, Banking hay Healthcare, từ 'compliance' (sự tuân thủ quy định pháp luật/tiêu chuẩn bảo mật như PCI-DSS, ISO 27001, GDPR) là thuật ngữ nghe hàng tuần trong các buổi họp kiến trúc."
        ],
        bullets: [
          "be obligated to + V (= be legally/morally bound to V): 'Vendors are obligated to report any security incident within 24 hours.'",
          "abide by + Noun (KHÔNG có dạng bị động): 'All employees must abide by the company's code of conduct.'",
          "comply with + Noun → danh từ 'in compliance with': 'Our payment service fully complies with PCI-DSS encryption standards.'"
        ]
      },
      {
        heading: "3. Hết Hạn, Gia Hạn & Vi Phạm Cam Kết: Expire – Renew – Breach",
        paragraphs: [
          "Mọi hợp đồng thương mại, giấy phép bản quyền hay chứng chỉ bảo mật đều có ngày hết hạn ('expiration date'). Trước mốc đó, hệ thống sẽ gửi thông báo nhắc khách hàng gia hạn ('renew').",
          "Ngược lại, nếu một bên không thực hiện đúng cam kết (ví dụ cam kết SLA hệ thống sống 99.9% nhưng sập mất 5 tiếng mà không bồi thường), hành vi đó gọi là 'breach' (vi phạm)."
        ],
        bullets: [
          "expire (nội động từ — tự hết hạn, KHÔNG chia bị động kiểu 'is expired' cho hành động!): 'Your trial license will expire in seven days.'",
          "renew (ngoại động từ — làm mới lại thời hạn): 'renew an annual subscription', 'auto-renewal' (tự động gia hạn).",
          "breach (n / v): 'constitute a breach of contract' (cấu thành hành vi vi phạm hợp đồng); trong an ninh mạng IT: 'security breach / data breach' (vụ xâm nhập / rò rỉ dữ liệu nghiêm trọng)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "contract",
        pos: "n / v",
        ipa: "/ˈkɑːntrækt/",
        meaning: "hợp đồng pháp lý; ký hợp đồng",
        synonyms: "legal agreement, pact, covenant",
        collocations: ["sign a contract", "binding contract", "terminate a contract", "under contract"],
        mnemonic: "Design by CONTRACT trong lập trình API — cam kết đầu vào/đầu ra rõ ràng giữa Client và Server!",
        toeicEx: "Please read the entire **contract** carefully before signing at the bottom.",
        toeicVi: "Vui lòng đọc kỹ toàn bộ bản hợp đồng trước khi ký tên ở cuối trang.",
        javaEx: "Using OpenAPI schemas ensures that frontend and backend teams share a strict API **contract**.",
        javaVi: "Sử dụng lược đồ OpenAPI đảm bảo đội frontend và backend dùng chung một hợp đồng giao tiếp API chặt chẽ."
      },
      {
        word: "clause",
        pos: "n",
        ipa: "/klɔːz/",
        meaning: "điều khoản cụ thể trong văn bản hợp đồng hoặc đạo luật",
        synonyms: "provision, stipulation, article",
        collocations: ["confidentiality clause", "penalty clause", "insert a clause"],
        mnemonic: "Giống mệnh đề WHERE CLAUSE trong câu lệnh SQL — phần điều khoản quy định điều kiện ràng buộc cụ thể!",
        toeicEx: "The lease includes a **clause** prohibiting subletting without written permission.",
        toeicVi: "Hợp đồng thuê mặt bằng bao gồm một điều khoản cấm cho thuê lại nếu không có sự cho phép bằng văn bản.",
        javaEx: "Our enterprise SLA contains a penalty **clause** if monthly API uptime drops below 99.9 percent.",
        javaVi: "Bản SLA doanh nghiệp của chúng tôi có điều khoản phạt nếu thời gian hoạt động API hàng tháng tụt xuống dưới 99,9%."
      },
      {
        word: "party",
        pos: "n",
        ipa: "/ˈpɑːrti/",
        meaning: "bên tham gia (trong hợp đồng, đàm phán, tranh chấp); bữa tiệc",
        synonyms: "side, participant, signatory",
        collocations: ["both parties", "third party", "interested parties"],
        mnemonic: "Quá quen với 'Third-party API' (API của BÊN thứ ba) => Trong luật & thương mại, PARTY chính là một 'bên' đối tác!",
        toeicEx: "The **agreement** becomes effective once authorized representatives of both **parties** sign it.",
        toeicVi: "Thỏa thuận có hiệu lực ngay khi đại diện có thẩm quyền của cả hai bên cùng ký tên.",
        javaEx: "Never log raw credit card numbers when integrating with a third-**party** payment processor.",
        javaVi: "Không bao giờ được ghi log số thẻ tín dụng thô khi tích hợp với bên xử lý thanh toán thứ ba."
      },
      {
        word: "terms",
        pos: "n",
        ipa: "/tɜːrmz/",
        meaning: "các điều khoản, điều kiện thỏa thuận (thường ở dạng số nhiều)",
        synonyms: "conditions, provisions, stipulations",
        collocations: ["terms and conditions", "under the terms of", "negotiate better terms"],
        mnemonic: "Ai cài phần mềm cũng từng tick ô 'I agree to the TERMS of Service' — các điều khoản sử dụng!",
        toeicEx: "Under the **terms** of the partnership, profits will be shared equally.",
        toeicVi: "Theo các điều khoản của quan hệ đối tác, lợi nhuận sẽ được chia đều.",
        javaEx: "Before using that open-source library commercially, check the **terms** of its GPL license.",
        javaVi: "Trước khi dùng thư viện mã nguồn mở đó cho mục đích thương mại, hãy kiểm tra các điều khoản giấy phép GPL của nó."
      },
      {
        word: "obligate",
        pos: "v",
        ipa: "/ˈɑːblɪɡeɪt/",
        meaning: "bắt buộc, ràng buộc ai đó về mặt pháp lý hoặc đạo đức phải làm gì",
        synonyms: "bind, require, compel",
        collocations: ["be obligated to", "contractually obligated", "feel obligated"],
        mnemonic: "OB + LIG (buộc chặt, giống 'ligament' = dây chằng) => Ràng buộc trách nhiệm phải thực thi!",
        toeicEx: "The supplier is **obligated** to deliver replacement parts within 48 hours.",
        toeicVi: "Nhà cung cấp có nghĩa vụ phải giao linh kiện thay thế trong vòng 48 giờ.",
        javaEx: "Under GDPR, data controllers are legally **obligated** to delete user records upon request.",
        javaVi: "Theo luật GDPR, đơn vị kiểm soát dữ liệu có nghĩa vụ pháp lý phải xóa bản ghi người dùng khi có yêu cầu."
      },
      {
        word: "abide by",
        pos: "phr.v",
        ipa: "/əˈbaɪd baɪ/",
        meaning: "tuân thủ, chấp hành nghiêm chỉnh (quy tắc, điều khoản, phán quyết)",
        synonyms: "comply with, adhere to, follow, observe",
        collocations: ["abide by the rules", "abide by the agreement", "strictly abide by"],
        mnemonic: "A + BIDE + BY => Ở cạnh bên (BY) luật lệ mà làm đúng răm rắp! Cứ thấy ABIDE là nhớ ngay giới từ BY!",
        toeicEx: "All visitors to the laboratory must **abide by** the safety regulations.",
        toeicVi: "Tất cả khách đến thăm phòng thí nghiệm phải tuân thủ các quy định an toàn.",
        javaEx: "Every contributor must **abide by** our repository's code style and branching rules.",
        javaVi: "Mọi người đóng góp code đều phải tuân thủ quy tắc định dạng mã và phân nhánh của kho lưu trữ."
      },
      {
        word: "comply with",
        pos: "phr.v",
        ipa: "/kəmˈplaɪ wɪð/",
        meaning: "tuân theo, đáp ứng đúng (tiêu chuẩn kỹ thuật, luật pháp, yêu cầu)",
        synonyms: "conform to, obey, satisfy",
        collocations: ["comply with regulations", "comply with standards", "fail to comply with"],
        mnemonic: "COMPILER (trình biên dịch javac) bắt code bạn phải COMPLY WITH cú pháp Java thì mới chịu build!",
        toeicEx: "Factories that fail to **comply with** environmental laws face heavy fines.",
        toeicVi: "Các nhà máy không tuân thủ luật môi trường sẽ phải đối mặt với mức phạt nặng.",
        javaEx: "All REST endpoints must **comply with** RFC 7807 for standardized error responses.",
        javaVi: "Tất cả các REST endpoint phải tuân thủ chuẩn RFC 7807 để thống nhất định dạng phản hồi lỗi."
      },
      {
        word: "expire",
        pos: "v",
        ipa: "/ɪkˈspaɪər/",
        meaning: "hết hạn, hết hiệu lực",
        synonyms: "run out, lapse, become invalid",
        collocations: ["expire at midnight", "about to expire", "expiration date"],
        mnemonic: "EX (ra ngoài, kết thúc) + SPIRE (hơi thở) => Trút hơi thở cuối cùng = Hết hạn sống (giống Redis TTL EXPIRE key 60)!",
        toeicEx: "My passport will **expire** in November, so I need to apply for a new one soon.",
        toeicVi: "Hộ chiếu của tôi sẽ hết hạn vào tháng Mười Một, nên tôi cần sớm làm hộ chiếu mới.",
        javaEx: "For security, our JWT access tokens **expire** fifteen minutes after issuance.",
        javaVi: "Vì lý do bảo mật, các mã JWT access token của chúng tôi sẽ hết hạn sau mười lăm phút kể từ lúc cấp."
      },
      {
        word: "renew",
        pos: "v",
        ipa: "/rɪˈnjuː/",
        meaning: "gia hạn, làm mới lại (hợp đồng, giấy phép, chứng chỉ sắp hết hạn)",
        synonyms: "extend, prolong, revalidate",
        collocations: ["renew a contract", "renew a license", "automatically renew"],
        mnemonic: "RE (lại lần nữa) + NEW (mới) => Cấp lại hạn mới cho thứ sắp hết hạn!",
        toeicEx: "The city council voted to **renew** the maintenance contract for another two years.",
        toeicVi: "Hội đồng thành phố đã bỏ phiếu gia hạn hợp đồng bảo trì thêm hai năm nữa.",
        javaEx: "Certbot runs a cron job every day to **renew** TLS certificates before they expire.",
        javaVi: "Certbot chạy một tác vụ định kỳ hàng ngày để gia hạn chứng chỉ TLS trước khi chúng hết hạn."
      },
      {
        word: "breach",
        pos: "n / v",
        ipa: "/briːtʃ/",
        meaning: "sự vi phạm (hợp đồng/cam kết); lỗ hổng xâm nhập bảo mật; phá vỡ cam kết",
        synonyms: "violation, infringement, rupture",
        collocations: ["breach of contract", "data breach", "SLA breach"],
        mnemonic: "Nghe gần giống BREAK (phá vỡ) => Phá thủng hàng rào cam kết hợp đồng hoặc tường lửa bảo mật!",
        toeicEx: "Sharing proprietary blueprints with competitors is a serious **breach** of contract.",
        toeicVi: "Chia sẻ bản vẽ độc quyền cho đối thủ cạnh tranh là hành vi vi phạm hợp đồng nghiêm trọng.",
        javaEx: "Encrypting PII columns at rest reduces the impact of a potential database **breach**.",
        javaVi: "Mã hóa các cột dữ liệu cá nhân nhạy cảm khi lưu trữ giúp giảm thiểu thiệt hại nếu xảy ra sự cố rò rỉ cơ sở dữ liệu."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "All subcontractors must operate **in compliance with** local labor and safety standards.",
        vi: "Tất cả các nhà thầu phụ phải hoạt động tuân thủ theo các tiêu chuẩn lao động và an toàn địa phương.",
        note: "Biến thể danh từ cực kỳ hay ra thi của 'comply with': 'in compliance with + Noun'."
      },
      {
        tag: "Client Email",
        en: "Our CTO gave his personal **assurance** that the root cause of the **SLA breach** has been resolved.",
        vi: "CTO của chúng tôi đã đích thân cam đoan rằng nguyên nhân gốc rễ của vụ vi phạm cam kết SLA đã được giải quyết.",
        note: "'give one's assurance that...' (đưa ra lời cam đoan chắc chắn rằng...)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Unless either **party** submits a cancellation notice, the service **agreement** will **renew** automatically.",
        vi: "Trừ khi một trong hai bên gửi thông báo hủy, thỏa thuận dịch vụ sẽ tự động gia hạn.",
        note: "Câu chuẩn mẫu điều khoản gia hạn tự động trong hợp đồng SaaS & đề đọc Part 7!"
      },
      {
        tag: "Senior Java",
        en: "When the refresh token **expires**, the mobile app redirects the user back to the OAuth2 login screen.",
        vi: "Khi refresh token hết hạn, ứng dụng di động sẽ chuyển hướng người dùng quay về màn hình đăng nhập OAuth2.",
        note: "Dùng chủ động Hiện tại đơn 'expires' cho cơ chế hệ thống."
      },
      {
        tag: "TOEIC Part 5",
        en: "Employees are **contractually obligated** to return all company laptops upon termination of employment.",
        vi: "Nhân viên bị ràng buộc theo hợp đồng phải trả lại toàn bộ máy tính xách tay công ty khi chấm dứt làm việc.",
        note: "Trạng từ 'contractually' đứng trước tính từ phân từ 'obligated' — câu mức 650+ điểm Part 5!"
      },
      {
        tag: "Daily Standup",
        en: "Security audit flagged two legacy endpoints that do not **comply with** our password hashing policy.",
        vi: "Đợt kiểm tra bảo mật đã gắn cờ hai endpoint cũ không tuân thủ chính sách băm mật khẩu của chúng ta.",
        note: "'comply with a policy / standard'."
      },
      {
        tag: "Client Email",
        en: "Our legal counsel suggested adding a force majeure **clause** to the hosting **contract**.",
        vi: "Cố vấn pháp lý của chúng tôi đề xuất bổ sung điều khoản bất khả kháng vào hợp đồng thuê máy chủ.",
        note: "'add a clause to the contract' (bổ sung một điều khoản vào hợp đồng)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Members who **abide by** the gym's cancellation **terms** will not be charged a late fee.",
        vi: "Hội viên tuân thủ các điều khoản hủy lịch của phòng tập sẽ không bị tính phí phạt trễ.",
        note: "'abide by the terms' = chấp hành đúng các điều khoản."
      },
      {
        tag: "Senior Java",
        en: "Our Quality **Assurance** engineers automated 400 end-to-end scenarios before the banking go-live.",
        vi: "Các kỹ sư Đảm bảo Chất lượng (QA) của chúng tôi đã tự động hóa 400 kịch bản kiểm thử đầu-cuối trước ngày vận hành ngân hàng.",
        note: "QA chính là viết tắt của 'Quality Assurance' — từ vựng thân thương mỗi ngày của Dev!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Please **renew** your professional certification at least one month before its **expiration** date.",
        vi: "Vui lòng gia hạn chứng chỉ hành nghề của bạn ít nhất một tháng trước ngày hết hạn của nó.",
        note: "Cặp đôi động từ 'renew' + danh từ ghép 'expiration date'."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "All microservices must comply to the new logging standard. ❌",
          fix: "All microservices must comply with the new logging standard. ✅",
          why: "Bẫy giới từ số 1 TOEIC: 'comply' LUÔN đi với 'WITH' ('comply with'), còn 'conform / adhere' mới đi với 'to'!"
        },
        {
          bug: "Both parties promised to abide with the arbitrator's decision. ❌",
          fix: "Both parties promised to abide by the arbitrator's decision. ✅",
          why: "'abide' bắt buộc đi với giới từ 'BY' ('abide by' = tuân thủ)."
        },
        {
          bug: "My IntelliJ Ultimate license will be expired tomorrow. ❌",
          fix: "My IntelliJ Ultimate license will expire tomorrow. ✅",
          why: "'expire' là nội động từ (tự hết hạn), nên khi nói hành động sẽ hết hạn vào ngày mai ta dùng chủ động 'will expire', không dùng bị động 'will be expired'!"
        },
        {
          bug: "Under the term of the SLA, uptime must exceed 99.95%. ❌",
          fix: "Under the terms of the SLA, uptime must exceed 99.95%. ✅",
          why: "Khi mang nghĩa 'các điều khoản của hợp đồng', danh từ 'terms' luôn dùng ở dạng số nhiều ('under the terms of...')! ('term' số ít thường chỉ học kỳ hoặc nhiệm kỳ)."
        }
      ]
    },
    toeicTips: [
      "Mẹo Phản Xạ 2 Giây Ở Part 5: Nhìn ngay sau chỗ trống! Thấy chữ 'with' + luật lệ/quy chuẩn → chọn 'comply' (hoặc 'compliance'); thấy chữ 'by' → chọn 'abide'; thấy chữ 'to' → chọn 'adhere / conform'!",
      "Mẹo Đọc Nhanh Part 7 Hợp Đồng: Hễ thấy cụm 'both parties' hoặc 'either party', hãy xác định ngay ở đầu văn bản xem Công ty A (bên bán) và Công ty B (bên thuê) là ai để không bị lừa ở câu hỏi quyền lợi/nghĩa vụ!",
      "Mẹo Paraphrasing 650+: Trong bài đọc viết 'is obligated to pay a fee' → Đáp án đúng dưới câu hỏi sẽ đổi thành 'is required to pay' hoặc 'must pay'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "comply with",
          "All payment gateways",
          "security regulations.",
          "must strictly",
          "international banking"
        ],
        answer: "All payment gateways must strictly comply with international banking security regulations.",
        vi: "Tất cả các cổng thanh toán phải tuân thủ nghiêm ngặt các quy định bảo mật ngân hàng quốc tế."
      },
      fillBlank: {
        sentence: "Both _____ signed the nondisclosure agreement before discussing the acquisition.",
        answer: "parties",
        accepted: ["parties"],
        hint: "Danh từ số nhiều bắt đầu bằng 'p', chỉ 'các bên' tham gia ký kết thỏa thuận",
        explain: "'Both parties' = Cả hai bên tham gia hợp đồng (từ 'Both' đòi hỏi danh từ đếm được số nhiều 'parties')."
      }
    },
    quiz: [
      {
        q: "All food processing facilities are required to _____ strictly with national hygiene regulations.",
        options: ["abide", "comply", "obligate", "assure"],
        answer: 1,
        explain: "Đáp án đúng là 'comply' nhờ dấu hiệu giới từ 'with' phía sau trạng từ 'strictly' ('comply strictly with regulations' = tuân thủ nghiêm ngặt các quy định). Loại 'abide' (đi với 'by'), 'obligate' và 'assure' (ngoại động từ cần tân ngữ chỉ người)."
      },
      {
        q: "Because our cloud support contract will _____ at the end of June, we should negotiate a renewal now.",
        options: ["expire", "breach", "enclose", "comply"],
        answer: 0,
        explain: "Đáp án đúng là 'expire' (hết hạn), khớp hoàn hảo với mệnh đề sau 'negotiate a renewal now' (đàm phán gia hạn ngay bây giờ). Các động từ 'breach' (vi phạm), 'enclose' (gửi kèm), 'comply' (tuân thủ) đều sai nghĩa."
      },
      {
        q: "A confidentiality _____ was added to the employment contract to protect the startup's source code.",
        options: ["party", "clause", "breach", "vendor"],
        answer: 1,
        explain: "Đáp án đúng là 'clause' (điều khoản). Cụm vàng 'confidentiality clause' (điều khoản bảo mật thông tin) được thêm vào hợp đồng lao động ('added to the employment contract')."
      }
    ]
  },

  V2_2: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Trọng tâm TOEIC 500–650+ (Part 5–7: Ngân sách, Kế toán, Hoàn ứng & Ngân hàng)",
    javaContext: "Cực kỳ thiết thực cho anh em Java làm dự án Core Banking, Ví điện tử, Payment/Fintech (transaction, balance, reconciliation, audit) cũng như lập ngân sách Cloud FinOps và làm thủ tục hoàn ứng công tác phí (reimburse).",
    teacherIntro: "Nếu có một chủ đề nào mà lập trình viên Java làm mảng Ngân hàng – Fintech đọc vào thấy 'như cá gặp nước', thì đó chính là Tài chính & Kế toán trong bài V2.2 này! Mỗi ngày bạn đều code class `Transaction`, kiểm tra `accountBalance`, ghi `auditLog` bằng `BigDecimal` để không lệch một xu! Đề thi TOEIC cũng xoay quanh đúng những khái niệm đó, cộng thêm các tình huống công sở thiết thực như phân bổ ngân sách ('allocate the budget'), quyết toán năm tài chính ('fiscal year') và xin công ty hoàn tiền vé máy bay đã chi trước ('reimburse travel expenses'). Nắm trọn bài này là bạn giỏi song kiếm hợp bích: vừa cứng nghiệp vụ Domain Fintech, vừa gom sạch điểm tài chính TOEIC!",
    javaAnalogy: {
      title: "Quản Lý Tài Chính Doanh Nghiệp giống hệt Quản Lý Tài Nguyên JVM & Giao Dịch @Transactional",
      body: "Hãy hình dung 'budget' của phòng IT giống như tham số `-Xmx` giới hạn tổng bộ nhớ; 'allocate funds' chính là JVM cấp phát vùng nhớ cho từng phân hệ (Young Gen / Old Gen); 'expenditure' là lượng RAM tiêu thụ thực tế; một giải pháp 'cost-effective' giống như thuật toán tối ưu tốn ít CPU mà xử lý được nhiều 'revenue' (throughput đầu vào)! Còn ở tầng Database Banking, mỗi 'transaction' trừ tiền đều phải kiểm tra 'balance' khả dụng, đảm bảo tính ACID, có luồng 'reimburse' (hoàn trả bù trừ) và lưu vết bất biến phục vụ 'audit' cuối mỗi 'fiscal year'!"
    },
    objectives: [
      "Phân biệt chuẩn xác các khái niệm tài chính hay nhầm lẫn: revenue (tổng doanh thu) vs profit (lợi nhuận ròng), budget (ngân sách dự kiến) vs expenditure (chi tiêu thực tế).",
      "Sử dụng đúng cấu trúc ngữ pháp của reimburse (reimburse SOMEONE for SOMETHING) và allocate (allocate A to/for B).",
      "Vận dụng tự nhiên nhóm từ vựng Banking/FinOps (transaction, balance, audit, cost-effective, fiscal year) trong cả bài thi TOEIC và thảo luận dự án."
    ],
    formulaCards: [
      {
        label: "Phương Trình Kế Toán Cốt Lõi • REVENUE – EXPENDITURE = PROFIT",
        formula: "Total Revenue (Tổng doanh thu bán hàng) − Expenditures / Expenses (Chi phí bỏ ra) = Net Profit (Lợi nhuận ròng)",
        note: "Bẫy đọc hiểu Part 7: Doanh thu ('revenue') tăng NHƯNG nếu chi phí ('expenditure') tăng mạnh hơn thì lợi nhuận ('profit') vẫn giảm! Đừng đánh đồng revenue với profit!"
      },
      {
        label: "Cấu Trúc Hoàn Ứng Công Tác Phí • REIMBURSE",
        formula: "reimburse + SOMEONE (nhân viên) + FOR + SOMETHING (khoản chi phí) → danh từ: reimbursement (sự hoàn tiền chi phí)",
        note: "Khác với 'refund' (hoàn tiền cho KHÁCH HÀNG mua đồ lỗi), 'reimburse' dùng khi CÔNG TY trả lại tiền cho NHÂN VIÊN đã bỏ tiền túi mua vé/ăn ở khi đi công tác!"
      },
      {
        label: "Phân Bổ Ngân Sách & Tối Ưu Chi Phí • BUDGET, ALLOCATE & COST-EFFECTIVE",
        formula: "allocate funds TO/FOR a project (phân bổ vốn) | stay within budget (trong tầm ngân sách) | a cost-effective solution (giải pháp tiết kiệm hiệu quả)",
        note: "'cost-effective' là tính từ ghép cực sang trọng trong TOEIC Part 5 và System Design (= economical / good value for money)."
      },
      {
        label: "Bộ Tứ Nghiệp Vụ Fintech/Banking • TRANSACTION, BALANCE, AUDIT & FISCAL YEAR",
        formula: "process a transaction (xử lý giao dịch) → check account balance (số dư) → conduct an annual audit (kiểm toán) → end of the fiscal year (năm tài chính)",
        note: "Lưu ý: 'outstanding balance' trên hóa đơn thẻ tín dụng mang nghĩa 'số dư nợ CHƯA thanh toán' (chứ không phải số dư xuất sắc!)."
      }
    ],
    sections: [
      {
        heading: "1. Bức Tranh Tài Chính Công Ty: Budget – Revenue – Profit – Expenditure – Fiscal Year",
        paragraphs: [
          "Trong các bài báo cáo quý ở TOEIC Part 7 hoặc buổi họp Town Hall toàn công ty, Ban giám đốc luôn tổng kết tình hình kinh doanh của 'fiscal year' (năm tài chính — ví dụ các công ty Nhật thường tính năm tài chính từ 1/4 năm nay đến 31/3 năm sau).",
          "Nắm rõ mối quan hệ nhân quả giữa 'budget', 'expenditure', 'revenue' và 'profit' giúp bạn trả lời chính xác tuyệt đối các câu hỏi biểu đồ/bảng số liệu tài chính ở cuối đề Reading."
        ],
        bullets: [
          "budget (n: ngân sách / v: dự trù kinh phí): 'come in under budget' (tiêu ít hơn dự kiến — tin vui!) ↔ 'go over budget' (vượt lố ngân sách).",
          "revenue (doanh thu thu về từ bán sản phẩm/thuê bao) vs profit / earnings (tiền lãi thực sự còn lại sau khi trừ lương, server, thuế).",
          "expenditure (n): Từ trang trọng của 'expense / spending', rất hay đi theo cụm 'reduce capital expenditures' (cắt giảm chi phí đầu tư tài sản lớn — CapEx)."
        ]
      },
      {
        heading: "2. Cấp Vốn, Tối Ưu Cloud & Hoàn Ứng: Allocate – Cost-effective – Reimburse",
        paragraphs: [
          "Với một Tech Lead hay Engineering Manager, bài toán đau đầu mỗi quý là thuyết phục sếp phân bổ ('allocate') ngân sách nâng cấp hạ tầng sao cho hiệu quả chi phí ('cost-effective') nhất.",
          "Còn với mọi nhân viên đi onsite hay mua sách/khóa học phục vụ dự án, quy trình quen thuộc là giữ lại biên lai ('receipt') để phòng kế toán hoàn ứng ('reimburse')."
        ],
        bullets: [
          "allocate sth TO / FOR sth: 'The board allocated $200,000 to cybersecurity upgrades.' (Giống hệt cấp phát bộ nhớ `ByteBuffer.allocate()`!).",
          "cost-effective (adj): Đạt hiệu quả cao so với số tiền bỏ ra ('Migrating cold logs to S3 Glacier is a highly cost-effective strategy').",
          "reimburse sb for sth: 'The company will reimburse you for airport taxi fares upon submission of receipts.' (Tân ngữ trực tiếp sau reimburse là NGƯỜI, không phải tiền!)."
        ]
      },
      {
        heading: "3. Ngôn Ngữ Cốt Lõi Của Hệ Thống Ngân Hàng (Fintech Domain): Transaction – Balance – Audit",
        paragraphs: [
          "Ba từ vựng này vừa là 'cơm ăn nước uống' của lập trình viên Java Backend (Spring `@Transactional`, Ledger Balance, Audit Trail), vừa là tâm điểm các đoạn hội thoại tại ngân hàng và thông báo sao kê trong đề thi TOEIC.",
          "Cẩn thận nhất là tính từ 'outstanding' khi đứng trước 'balance' hoặc 'invoice': bình thường 'outstanding developer' là lập trình viên xuất sắc, nhưng trong tài chính 'outstanding balance' lại có nghĩa là 'khoản tiền còn tồn đọng CHƯA trả'!"
        ],
        bullets: [
          "transaction (n): Giao dịch chuyển tiền, mua bán ('unauthorized transaction' = giao dịch trái phép; 'transaction fee' = phí giao dịch).",
          "balance (n): (1) Số dư khả dụng trong tài khoản ngân hàng ('minimum balance'); (2) Số tiền còn nợ chưa thanh toán ('pay off the remaining balance').",
          "audit (n / v) → auditor (n: kiểm toán viên): Kiểm tra độc lập sổ sách tài chính hoặc kiểm tra an ninh hệ thống ('annual financial audit', 'pass the ISO security audit')."
        ]
      }
    ],
    vocabItems: [
      {
        word: "budget",
        pos: "n / v",
        ipa: "/ˈbʌdʒɪt/",
        meaning: "ngân sách, khoản kinh phí dự trù; lập ngân sách",
        synonyms: "financial plan, allowance, funding",
        collocations: ["annual budget", "within budget", "exceed the budget", "tight budget"],
        mnemonic: "Quá quen thuộc: Cloud BUDGET alert trên AWS — cảnh báo khi tiền đốt server sắp lố hạn mức tháng!",
        toeicEx: "The marketing department must submit its proposed **budget** for next quarter by Monday.",
        toeicVi: "Bộ phận tiếp thị phải nộp bản dự thảo ngân sách cho quý tới trước thứ Hai.",
        javaEx: "By right-sizing EC2 instances, we kept our cloud infrastructure within **budget**.",
        javaVi: "Nhờ chọn lại kích cỡ máy ảo EC2 phù hợp, chúng tôi đã giữ chi phí hạ tầng đám mây nằm trong ngân sách."
      },
      {
        word: "revenue",
        pos: "n",
        ipa: "/ˈrevənuː/",
        meaning: "tổng doanh thu (toàn bộ tiền thu về từ hoạt động kinh doanh trước khi trừ chi phí)",
        synonyms: "income, turnover, gross receipts, proceeds",
        collocations: ["generate revenue", "annual revenue", "revenue growth", "tax revenue"],
        mnemonic: "RE (quay về) + VENUE (nơi mình) => Dòng tiền chảy quay về két công ty từ việc bán sản phẩm!",
        toeicEx: "Online subscription services accounted for sixty percent of the firm's total **revenue**.",
        toeicVi: "Các dịch vụ thuê bao trực tuyến chiếm tới sáu mươi phần trăm tổng doanh thu của công ty.",
        javaEx: "A ten-minute checkout outage during Flash Sale can cost thousands of dollars in lost **revenue**.",
        javaVi: "Mười phút sập luồng thanh toán trong đợt Flash Sale có thể làm thất thoát hàng ngàn đô la doanh thu."
      },
      {
        word: "expenditure",
        pos: "n",
        ipa: "/ɪkˈspendɪtʃər/",
        meaning: "khoản chi tiêu, kinh phí bỏ ra (thường dùng trong báo cáo tài chính doanh nghiệp)",
        synonyms: "expense, spending, outlay, disbursement",
        collocations: ["capital expenditure", "reduce expenditures", "approve an expenditure"],
        mnemonic: "Nhìn rõ chữ SPEND (tiêu tiền) nằm ngay giữa ex-SPEND-iture => Các khoản chi tiêu lớn!",
        toeicEx: "Any **expenditure** over $5,000 requires written approval from the Chief Financial Officer.",
        toeicVi: "Bất kỳ khoản chi tiêu nào trên 5.000 đô la đều cần phê duyệt bằng văn bản từ Giám đốc Tài chính.",
        javaEx: "Moving from on-premise servers to cloud shifts hardware capital **expenditure** to monthly operating cost.",
        javaVi: "Chuyển từ máy chủ vật lý sang đám mây giúp dịch chuyển chi phí đầu tư phần cứng ban đầu sang chi phí vận hành hàng tháng."
      },
      {
        word: "allocate",
        pos: "v",
        ipa: "/ˈæləkeɪt/",
        meaning: "phân bổ, cấp phát (ngân sách, nguồn lực, thời gian, bộ nhớ)",
        synonyms: "assign, distribute, earmark, allot",
        collocations: ["allocate funds to", "allocate resources", "allocate memory"],
        mnemonic: "Chính là cấp phát vùng nhớ `malloc / ByteBuffer.allocate()` mà mọi lập trình viên đều nằm lòng!",
        toeicEx: "The city plans to **allocate** additional funds to public transportation improvements.",
        toeicVi: "Thành phố dự định phân bổ thêm kinh phí cho việc cải thiện giao thông công cộng.",
        javaEx: "We decided to **allocate** twenty percent of each sprint to paying down technical debt.",
        javaVi: "Chúng tôi quyết định phân bổ hai mươi phần trăm thời lượng mỗi sprint để giải quyết nợ kỹ thuật."
      },
      {
        word: "reimburse",
        pos: "v",
        ipa: "/ˌriːɪmˈbɜːrs/",
        meaning: "hoàn ứng, trả lại tiền cho người đã bỏ tiền túi chi trả trước cho công việc",
        synonyms: "repay, compensate, pay back",
        collocations: ["reimburse employees for", "travel reimbursement", "be fully reimbursed"],
        mnemonic: "RE (trả lại) + IM (vào trong) + BURSE (ví tiền, gốc từ 'purse') => Bơm trả lại tiền vào ví cho nhân viên đi công tác!",
        toeicEx: "The company will **reimburse** staff for hotel and meal expenses incurred during business trips.",
        toeicVi: "Công ty sẽ hoàn ứng cho nhân viên chi phí khách sạn và ăn uống phát sinh trong chuyến công tác.",
        javaEx: "Submit your AWS certification exam receipt to HR so they can **reimburse** you for the fee.",
        javaVi: "Hãy nộp biên lai lệ phí thi chứng chỉ AWS cho phòng nhân sự để họ hoàn lại khoản phí đó cho bạn."
      },
      {
        word: "transaction",
        pos: "n",
        ipa: "/trænˈzækʃn/",
        meaning: "giao dịch thương mại/ngân hàng; giao dịch nguyên tử trong cơ sở dữ liệu",
        synonyms: "deal, financial transfer, operation",
        collocations: ["financial transaction", "process a transaction", "suspicious transaction"],
        mnemonic: "Annotation quốc dân `@Transactional` trong Spring — đảm bảo chuyển tiền từ A sang B phải thành công trọn gói hoặc rollback!",
        toeicEx: "Customers receive an instant SMS alert whenever an international **transaction** occurs.",
        toeicVi: "Khách hàng nhận được tin nhắn cảnh báo tức thì bất cứ khi nào phát sinh một giao dịch quốc tế.",
        javaEx: "Using `BigDecimal` instead of `double` is mandatory for monetary **transactions** in Java.",
        javaVi: "Sử dụng `BigDecimal` thay vì `double` là quy tắc bắt buộc cho các giao dịch tiền tệ trong Java."
      },
      {
        word: "balance",
        pos: "n",
        ipa: "/ˈbæləns/",
        meaning: "số dư tài khoản; số tiền còn nợ chưa thanh toán; sự cân bằng",
        synonyms: "remainder, account total; equilibrium",
        collocations: ["account balance", "outstanding balance", "check your balance"],
        mnemonic: "Cán cân (BALANCE) giữa tổng tiền nạp vào và tổng tiền rút ra => Số dư cuối kỳ trên sổ cái (Ledger)!",
        toeicEx: "Cardholders can view their current **balance** through the mobile banking application.",
        toeicVi: "Chủ thẻ có thể xem số dư hiện tại của mình thông qua ứng dụng ngân hàng di động.",
        javaEx: "Before debiting the wallet, the service acquires a row lock and validates sufficient **balance**.",
        javaVi: "Trước khi trừ tiền ví, dịch vụ tiến hành khóa dòng dữ liệu và kiểm tra đủ số dư khả dụng."
      },
      {
        word: "audit",
        pos: "n / v",
        ipa: "/ˈɔːdɪt/",
        meaning: "cuộc kiểm toán tài chính / rà soát bảo mật; tiến hành kiểm toán",
        synonyms: "official inspection, review, examination",
        collocations: ["annual financial audit", "security audit", "conduct an audit", "audit trail"],
        mnemonic: "Spring Data JPA `@EntityListeners(AuditingEntityListener.class)` (`@CreatedBy`, `@LastModifiedDate`) — lưu dấu vết phục vụ KIỂM TOÁN!",
        toeicEx: "An external accounting firm was hired to **audit** the corporation's year-end statements.",
        toeicVi: "Một công ty kế toán bên ngoài đã được thuê để kiểm toán báo cáo cuối năm của tập đoàn.",
        javaEx: "Immutable **audit** logs are streamed to Kafka so compliance officers can trace every admin action.",
        javaVi: "Nhật ký kiểm toán bất biến được đẩy sang Kafka để chuyên viên tuân thủ truy vết được mọi thao tác quản trị."
      },
      {
        word: "fiscal year",
        pos: "n",
        ipa: "/ˈfɪskl jɪr/",
        meaning: "năm tài chính, niên độ kế toán (kỳ 12 tháng dùng để chốt sổ báo cáo thuế/tài chính)",
        synonyms: "financial year, accounting period",
        collocations: ["end of the fiscal year", "next fiscal year", "fiscal quarter"],
        mnemonic: "FISCAL (thuộc ngân khố/tài khóa) + YEAR => Năm chốt sổ kế toán (ví dụ FY2026) chứ không nhất thiết trùng năm dương lịch!",
        toeicEx: "Net **profit** rose by fourteen percent in the **fiscal year** ending March 31.",
        toeicVi: "Lợi nhuận ròng đã tăng mười bốn phần trăm trong năm tài chính kết thúc vào ngày 31 tháng 3.",
        javaEx: "Our batch reconciliation job archives ledger partitions at the close of each **fiscal year**.",
        javaVi: "Tác vụ đối soát hàng loạt của chúng tôi thực hiện lưu trữ các phân vùng sổ cái vào cuối mỗi năm tài chính."
      },
      {
        word: "cost-effective",
        pos: "adj",
        ipa: "/ˌkɔːst ɪˈfektɪv/",
        meaning: "hiệu quả về mặt chi phí, tiết kiệm mà mang lại giá trị cao",
        synonyms: "economical, thrifty, worthwhile",
        collocations: ["cost-effective solution", "more cost-effective than", "prove cost-effective"],
        mnemonic: "COST (chi phí bỏ ra) + EFFECTIVE (đạt hiệu quả thực tế cao) => Tối ưu tỷ lệ Hiệu năng / Giá tiền!",
        toeicEx: "Switching to LED lighting proved to be a highly **cost-effective** upgrade for the warehouse.",
        toeicVi: "Chuyển sang hệ thống đèn LED đã chứng minh là một bước nâng cấp cực kỳ hiệu quả về chi phí cho nhà kho.",
        javaEx: "Running stateless batch workers on Spot Instances is a **cost-effective** cloud architecture.",
        javaVi: "Chạy các tiến trình xử lý lô không trạng thái trên Spot Instances là một kiến trúc đám mây rất tối ưu chi phí."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Employees will be **reimbursed** for mileage only if they submit an approved travel form.",
        vi: "Nhân viên sẽ chỉ được hoàn tiền xăng xe nếu họ nộp biểu mẫu công tác đã được phê duyệt.",
        note: "Dạng bị động cực hay gặp: 'Employees are reimbursed FOR + khoản chi phí'."
      },
      {
        tag: "Senior Java",
        en: "To guarantee idempotency, each payment **transaction** carries a unique client-generated UUID key.",
        vi: "Để đảm bảo tính lũy đẳng (gọi lặp không trừ tiền 2 lần), mỗi giao dịch thanh toán đều mang một khóa UUID duy nhất.",
        note: "Câu đinh để nói trong vòng phỏng vấn Senior Java ngành Fintech/Banking!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Although third-quarter **revenue** reached a record high, rising shipping **expenditures** reduced net **profit**.",
        vi: "Mặc dù doanh thu quý ba đạt mức kỷ lục, chi phí vận chuyển leo thang đã làm sụt giảm lợi nhuận ròng.",
        note: "Một câu gom trọn bộ tam: revenue (doanh thu) – expenditures (chi phí) – net profit (lợi nhuận ròng)!"
      },
      {
        tag: "Daily Standup",
        en: "We passed the external penetration test and security **audit** with zero critical findings!",
        vi: "Chúng ta đã vượt qua đợt kiểm thử xâm nhập và kiểm tra bảo mật độc lập mà không có bất kỳ lỗi nghiêm trọng nào!",
        note: "'pass an audit' = vượt qua kỳ kiểm toán/kiểm định."
      },
      {
        tag: "Client Email",
        en: "Please remit the **outstanding balance** of $1,450 before May 30 to avoid late service charges.",
        vi: "Vui lòng thanh toán số dư nợ còn lại là 1.450 đô la trước ngày 30 tháng 5 để tránh phí phạt chậm trả.",
        note: "Nhớ kỹ bẫy TOEIC: 'outstanding balance' = số tiền còn nợ CHƯA trả!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Hiring a local IT maintenance firm is more **cost-effective** than flying technicians from headquarters.",
        vi: "Thuê một công ty bảo trì CNTT tại địa phương tiết kiệm và hiệu quả hơn so với việc điều kỹ thuật viên bay từ trụ sở chính tới.",
        note: "So sánh hơn với tính từ ghép: 'more cost-effective than...'."
      },
      {
        tag: "Senior Java",
        en: "Let's **allocate** 4 GB of heap memory to the reporting pod during end-of-month **fiscal** closing.",
        vi: "Hãy cấp phát 4 GB bộ nhớ heap cho pod xuất báo cáo trong đợt khóa sổ tài chính cuối tháng.",
        note: "'allocate X to Y': dùng y hệt nhau cho cả cấp phát RAM lẫn cấp phát tiền!"
      },
      {
        tag: "TOEIC Part 7",
        en: "Department heads met yesterday to finalize hiring plans for the upcoming **fiscal year**.",
        vi: "Các trưởng bộ phận đã họp hôm qua để chốt kế hoạch tuyển dụng cho năm tài chính sắp tới.",
        note: "'upcoming fiscal year' = năm tài chính tới."
      },
      {
        tag: "Client Email",
        en: "Because phase one finished under **budget**, we can invest the remaining funds in automated load testing.",
        vi: "Vì giai đoạn một hoàn tất thấp hơn ngân sách dự trù, chúng ta có thể đầu tư phần kinh phí dư vào kiểm thử chịu tải tự động.",
        note: "'finish under budget' = tiêu ít tiền hơn dự toán (tín hiệu tích cực!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Independent **auditors** verified the accuracy of all foreign exchange **transactions**.",
        vi: "Các kiểm toán viên độc lập đã xác minh tính chính xác của toàn bộ các giao dịch ngoại hối.",
        note: "Danh từ chỉ người 'auditors' (kiểm toán viên) + 'foreign exchange transactions'."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "The company reimbursed my flight ticket last week. ❌",
          fix: "The company reimbursed me for my flight ticket last week. ✅",
          why: "Trong tiếng Anh chuẩn TOEIC, cấu trúc ưu tiên số 1 của 'reimburse' là 'reimburse + NGƯỜI + for + KHOẢN CHI' (hoàn tiền cho ai về khoản gì)."
        },
        {
          bug: "He has an outstanding balance of $3,000, so he is very rich! ❌",
          fix: "He has an outstanding balance of $3,000, which he must pay by Friday. ✅",
          why: "Bẫy đa nghĩa kinh điển: 'outstanding' trước 'balance / invoice / debt' có nghĩa là 'CÒN NỢ CHƯA THANH TOÁN', hoàn toàn không phải 'xuất sắc' hay 'dư dả'!"
        },
        {
          bug: "Gross revenue is the money left after subtracting all taxes and salaries. ❌",
          fix: "Net profit is the money left after subtracting all taxes and salaries. ✅",
          why: "'Gross revenue' là tổng tiền thu vào chưa trừ chi phí; khoản lãi còn lại sau khi trừ hết lương, thuế, chi phí vận hành phải gọi là 'Net profit'!"
        },
        {
          bug: "Using AWS Lambda for sporadic jobs is very cost-effect. ❌",
          fix: "Using AWS Lambda for sporadic jobs is very cost-effective. ✅",
          why: "Tính từ đúng bắt buộc phải có đuôi '-ive': 'cost-effective' (không tồn tại tính từ 'cost-effect')."
        }
      ]
    },
    toeicTips: [
      "Mẹo Bắt Đáp Án Part 5 Trong 3 Giây: Thấy '_____ + nhân viên (employees/staff/travelers) + for + expenses/costs' → Chọn ngay 'reimburse'!",
      "Mẹo Phá Bẫy Đa Nghĩa Part 7: Khi đọc hóa đơn hoặc thư nhắc nợ thấy từ 'outstanding' ('your outstanding balance of $420'), câu hỏi thường hỏi 'What does the writer ask the recipient to do?' → Chọn đáp án 'Make a payment' (Thanh toán tiền còn thiếu)!",
      "Mẹo Paraphrasing Tài Chính: 'cut down on expenditures' trong bài đọc = 'reduce costs / lower spending' trong đáp án; 'cost-effective' = 'affordable / economical'."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "for hotel expenses",
          "will reimburse engineers",
          "The accounting department",
          "after verifying",
          "all original receipts."
        ],
        answer: "The accounting department will reimburse engineers for hotel expenses after verifying all original receipts.",
        vi: "Phòng kế toán sẽ hoàn ứng cho các kỹ sư chi phí khách sạn sau khi xác minh toàn bộ biên lai gốc."
      },
      fillBlank: {
        sentence: "The board voted to _____ twenty percent of the R&D budget to artificial intelligence research.",
        answer: "allocate",
        accepted: ["allocate"],
        hint: "Động từ nguyên mẫu bắt đầu bằng 'a', đi với giới từ 'to' mang nghĩa phân bổ ngân sách",
        explain: "Cấu trúc chuẩn 'allocate + kinh phí/tài nguyên + to + mục tiêu' (phân bổ 20% ngân sách R&D cho nghiên cứu AI)."
      }
    },
    quiz: [
      {
        q: "Consultants will be _____ for approved travel expenses within ten business days of submitting receipts.",
        options: ["allocated", "reimbursed", "audited", "expired"],
        answer: 1,
        explain: "Đáp án đúng là 'reimbursed' (được hoàn ứng tiền). Dấu hiệu vàng là chủ ngữ chỉ người ('Consultants') đi kèm cấu trúc 'be _____ for approved travel expenses' và 'submitting receipts'."
      },
      {
        q: "Switching to open-source monitoring tools proved to be a _____ way to cut annual software costs.",
        options: ["defective", "fiscal", "cost-effective", "confidential"],
        answer: 2,
        explain: "Đáp án đúng là 'cost-effective' (hiệu quả về mặt chi phí / tiết kiệm), hợp nghĩa hoàn hảo với mục đích 'to cut annual software costs' (cắt giảm chi phí phần mềm hàng năm)."
      },
      {
        q: "Please pay the _____ balance on your corporate account by October 15 to prevent service interruption.",
        options: ["outstanding", "collaborative", "thorough", "keynote"],
        answer: 0,
        explain: "Đáp án đúng là 'outstanding' trong cụm chuyên ngành tài chính 'outstanding balance' (số dư nợ còn tồn đọng chưa thanh toán)."
      }
    ]
  },

  V2_3: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Trọng tâm TOEIC 550–650+ (Part 3–7: Tiến độ Dự án, Quy trình & Kiểm định Chất lượng)",
    javaContext: "Viết đề xuất kỹ thuật (feasibility study, technical specification), báo cáo cột mốc dự án (milestone, phase), tinh gọn quy trình CI/CD (streamline), thực thi tính năng (implement) và phối hợp với QA rà soát lỗi kỹ lưỡng (thorough inspection).",
    teacherIntro: "Chào anh em! Dù bạn làm công ty sản xuất phần cứng (bối cảnh quen thuộc của TOEIC) hay công ty phát triển phần mềm Java (bối cảnh hàng ngày của chúng ta), quy trình biến một ý tưởng trên giấy thành sản phẩm chạy mượt không tì vết ('flawless') đều đi qua cùng một con đường: đánh giá tính khả thi ('feasibility'), viết đặc tả ('specification'), chia giai đoạn ('phase') & cột mốc ('milestone'), bắt tay thực thi ('implement'), tinh gọn luồng làm việc ('streamline'), và kiểm tra chất lượng thật kỹ lưỡng ('thorough inspection'). Bài V2.3 này mang đến cho bạn bộ từ vựng đẳng cấp Quản lý Dự án & Tech Lead — giúp lời nói của bạn trong cuộc họp nghe sắc sảo, có trọng lượng hơn hẳn!",
    javaAnalogy: {
      title: "Vòng Đời Dự Án TOEIC chính là SDLC & Từ Khóa `implements` Trong Java!",
      body: "Bạn gõ `public class StripeGateway implements PaymentService` mỗi ngày — động từ 'implement' chính là biến bản thiết kế trừu tượng ('specification') thành logic chạy thật! Trước khi code, kiến trúc sư làm PoC (Proof of Concept) để kiểm chứng 'feasibility' (tính khả thi); quá trình chia nhỏ Epic thành Release 1, Release 2 chính là chia 'phases' và 'milestones'; tối ưu Jenkins build từ 25 phút xuống 4 phút gọi là 'streamline the pipeline'; còn chạy SonarQube + Code Review soi từng dòng code ('thorough inspection') là để diệt sạch 'defects' và tiến tới bản phát hành 'flawless'!"
    },
    objectives: [
      "Làm chủ 10 từ vựng cốt lõi về Quản lý Dự án & Đảm bảo Chất lượng ở trình độ B1–B2 (TOEIC 550–650+).",
      "Phát âm đúng và không bao giờ nhầm lẫn chính tả bộ ba kinh hoàng trong tiếng Anh: thorough (kỹ lưỡng) – through (xuyên qua) – though (mặc dù).",
      "Nắm vững các cụm giới từ và danh từ ghép hay ra thi như feasibility study, technical specifications, collaborate with sb on sth."
    ],
    formulaCards: [
      {
        label: "Word Family • SPECIFY, IMPLEMENT & COLLABORATE",
        formula: "specify (v: chỉ rõ) → specification (n: đặc tả) → specific (adj: cụ thể) | implement (v) → implementation (n) | collaborate (v) → collaboration (n) → collaborative (adj)",
        note: "Bẫy cực hay ở Part 5: 'implement' vừa là động từ (thực thi), còn 'implementation' là danh từ ('the successful implementation of the new ERP system')."
      },
      {
        label: "Word Family • FEASIBLE & INSPECT",
        formula: "feasible (adj: khả thi = viable) → feasibility (n: tính khả thi) | inspect (v: kiểm tra) → inspection (n: sự thanh tra) → inspector (n: thanh tra viên)",
        note: "Cụm danh từ ghép cố định rất hay thi TOEIC Part 5: 'conduct a feasibility study' (tiến hành nghiên cứu tiền khả thi)."
      },
      {
        label: "Bộ Ba Sát Thủ Mắt Nhìn • THOROUGH vs THROUGH vs THOUGH",
        formula: "thorough (/ˈθɜːroʊ/ - adj: kỹ lưỡng, toàn diện) ≠ through (/θruː/ - prep: xuyên qua) ≠ though (/ðoʊ/ - conj: mặc dù)",
        note: "Thấy đứng trước danh từ 'inspection / review / investigation / training' → 100% chọn tính từ 'thorough' (hoặc trạng từ 'thoroughly' trước V-ed)!"
      },
      {
        label: "Chất Lượng Sản Phẩm • DEFECT vs FLAWLESS & OBJECTIVE",
        formula: "free of defects = flawless (hoàn hảo không tì vết) | achieve / meet the primary objective (đạt mục tiêu chính = goal)",
        note: "Chú ý đa nghĩa của 'objective': (n) mục tiêu (= goal/aim); (adj) khách quan, không thiên vị!"
      }
    ],
    sections: [
      {
        heading: "1. Khởi Động & Lập Kế Hoạch Dự Án: Feasibility – Specification – Phase – Milestone – Objective",
        paragraphs: [
          "Trước khi đổ hàng trăm nghìn đô vào một dự án mới, ban lãnh đạo luôn yêu cầu thực hiện 'a feasibility study' để xem xét liệu về mặt kỹ thuật và tài chính dự án có khả thi ('feasible') hay không.",
          "Khi dự án được duyệt để hướng tới mục tiêu cốt lõi ('primary objective'), đội ngũ sẽ chốt tài liệu 'technical specifications' (dân Dev hay gọi tắt là 'specs'), chia lộ trình thành nhiều 'phases' (giai đoạn) gắn với các 'milestones' (cột mốc bàn giao lớn)."
        ],
        bullets: [
          "feasibility (n): Khả năng thực hiện được ngoài thực tế ('assess the technical feasibility of real-time fraud detection').",
          "specifications (n - thường dùng số nhiều): Thông số kỹ thuật hoặc đặc tả yêu cầu chi tiết ('meet the client's exact specifications').",
          "phase vs milestone: 'phase' là cả một khoảng giai đoạn kéo dài (ví dụ: 'the beta-testing phase'), còn 'milestone' là điểm mốc đánh dấu hoàn tất một chặng quan trọng ('reach a major milestone')."
        ]
      },
      {
        heading: "2. Thực Thi, Tinh Gọn & Phối Hợp: Implement – Streamline – Collaborate",
        paragraphs: [
          "Trong TOEIC Part 6 & Part 7, mỗi khi công ty áp dụng phần mềm mới hay cải tổ quy trình làm việc, hai động từ 'implement' và 'streamline' gần như luôn xuất hiện cạnh nhau: 'We implemented a cloud-based system to streamline order processing.'",
          "Đặc biệt, động từ 'streamline' là từ vựng cực đắt giá để ghi vào CV hoặc nói trong phỏng vấn Senior Java khi bạn muốn khoe thành tích cắt bỏ các bước thủ công rườm rà, làm quy trình nhanh gọn mượt mà hơn."
        ],
        bullets: [
          "implement + a policy / a system / changes / an interface (= put into effect / carry out): Đưa kế hoạch hoặc thiết kế vào vận hành thực tế.",
          "streamline + operations / workflow / deployment (= make simpler and more efficient): Tinh giản, hợp lý hóa quy trình.",
          "collaborate WITH (đối tác/đội khác) ON (dự án/nhiệm vụ): 'Our backend team collaborated closely with the data science squad on the recommendation engine.'"
        ]
      },
      {
        heading: "3. Kiểm Định Chất Lượng Nghiêm Ngặt: Inspect – Thorough – Defect – Flawless",
        paragraphs: [
          "Giai đoạn cuối trước khi xuất xưởng hàng hóa (trong TOEIC) hay trước khi Go-live Production (trong phần mềm) là khâu kiểm định chất lượng (QA/QC). Mọi sản phẩm phải được kiểm tra ('inspect') một cách kỹ lưỡng ('thorough / thoroughly') nhằm phát hiện sớm lỗi ('defect') để trải nghiệm người dùng diễn ra hoàn hảo ('flawless').",
          "Trong phòng thi TOEIC, cặp từ 'thorough inspection' / 'thoroughly inspected' là collocation kinh điển bậc nhất của ETS!"
        ],
        bullets: [
          "inspect (v): Quan sát, rà soát tỉ mỉ để tìm lỗi hoặc đánh giá an toàn ('inspect the wiring', 'code inspection' trong IntelliJ IDEA!).",
          "thorough (adj) → thoroughly (adv): Cặn kẽ, không bỏ sót góc khuất nào ('a thorough root-cause analysis', 'test every edge case thoroughly').",
          "flawless (adj: không một vết xước/lỗi = impeccable / error-free): Cấu tạo từ 'flaw' (khiếm khuyết = defect) + hậu tố '-less' (không có)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "milestone",
        pos: "n",
        ipa: "/ˈmaɪlstoʊn/",
        meaning: "cột mốc quan trọng đánh dấu bước tiến lớn của dự án hoặc tổ chức",
        synonyms: "landmark, key stage, turning point",
        collocations: ["reach a milestone", "project milestone", "major milestone"],
        mnemonic: "MILE (dặm đường) + STONE (cột đá cây số bên quốc lộ) => Cột mốc đánh dấu dự án đã đi hết một chặng lớn!",
        toeicEx: "Reaching one million active subscribers was a historic **milestone** for the publisher.",
        toeicVi: "Chạm mốc một triệu thuê bao hoạt động là một cột mốc lịch sử đối với nhà xuất bản.",
        javaEx: "Completing the zero-downtime database migration marked a major **milestone** for our platform team.",
        javaVi: "Hoàn tất đợt chuyển đổi cơ sở dữ liệu không gián đoạn đã đánh dấu một cột mốc lớn của đội nền tảng chúng tôi."
      },
      {
        word: "phase",
        pos: "n",
        ipa: "/feɪz/",
        meaning: "giai đoạn, chặng (trong một quá trình phát triển hoặc dự án nhiều bước)",
        synonyms: "stage, period, step",
        collocations: ["initial phase", "testing phase", "in phases", "final phase"],
        mnemonic: "Maven Build Lifecycle gồm các PHASES: `validate → compile → test → package → verify → deploy`!",
        toeicEx: "The first **phase** of the airport expansion is scheduled to finish in November.",
        toeicVi: "Giai đoạn đầu tiên của dự án mở rộng sân bay dự kiến hoàn thành vào tháng Mười Một.",
        javaEx: "We caught three concurrency bugs during the load-testing **phase** in staging.",
        javaVi: "Chúng tôi đã bắt được ba lỗi đa luồng trong giai đoạn kiểm thử chịu tải trên môi trường staging."
      },
      {
        word: "specification",
        pos: "n",
        ipa: "/ˌspesɪfɪˈkeɪʃn/",
        meaning: "bản đặc tả chi tiết, thông số kỹ thuật (thường dùng số nhiều: specifications / specs)",
        synonyms: "requirement, detailed standard, blueprint",
        collocations: ["technical specifications", "meet the specifications", "according to specifications"],
        mnemonic: "JPA `Specification<T>` hoặc tài liệu 'Java Language Specification (JLS)' — định nghĩa chính xác từng quy chuẩn!",
        toeicEx: "All machine parts were manufactured according to the client's exact **specifications**.",
        toeicVi: "Tất cả các chi tiết máy đều được chế tạo theo đúng thông số kỹ thuật chính xác của khách hàng.",
        javaEx: "Before coding the API, make sure the OpenAPI **specification** is approved by mobile and web teams.",
        javaVi: "Trước khi viết code API, hãy đảm bảo bản đặc tả OpenAPI đã được cả đội mobile và web phê duyệt."
      },
      {
        word: "feasibility",
        pos: "n",
        ipa: "/ˌfiːzəˈbɪləti/",
        meaning: "tính khả thi (khả năng thực hiện thành công trong thực tế)",
        synonyms: "viability, practicality, workability",
        collocations: ["feasibility study", "assess the feasibility", "technical feasibility"],
        mnemonic: "FEAS (gốc từ 'do/make' - làm được) + ABILITY (khả năng) => Khả năng biến ý tưởng thành hiện thực!",
        toeicEx: "Consultants are conducting a **feasibility** study on building a solar power plant.",
        toeicVi: "Các chuyên gia tư vấn đang thực hiện nghiên cứu khả thi về việc xây dựng nhà máy điện mặt trời.",
        javaEx: "I built a quick Spring AI prototype to prove the technical **feasibility** of automated ticket triage.",
        javaVi: "Tôi đã dựng nhanh một bản mẫu Spring AI để chứng minh tính khả thi kỹ thuật của việc phân loại ticket tự động."
      },
      {
        word: "streamline",
        pos: "v",
        ipa: "/ˈstriːmlaɪn/",
        meaning: "tinh gọn, hợp lý hóa quy trình để hoạt động nhanh và hiệu quả hơn",
        synonyms: "simplify, optimize, modernize, rationalize",
        collocations: ["streamline operations", "streamline the workflow", "streamline the approval process"],
        mnemonic: "Java `Stream` API viết trên 1 LINE (`stream().filter().map()`) => Cắt bỏ vòng for rườm rà, làm luồng code mượt như dòng chảy!",
        toeicEx: "The new warehouse software will **streamline** order fulfillment across all regions.",
        toeicVi: "Phần mềm kho vận mới sẽ tinh gọn quy trình xử lý đơn hàng trên toàn bộ các khu vực.",
        javaEx: "Automating Docker image builds **streamlined** our release process from two hours to eight minutes.",
        javaVi: "Tự động hóa khâu đóng gói Docker image đã tinh gọn quy trình phát hành của chúng tôi từ hai tiếng xuống còn tám phút."
      },
      {
        word: "implement",
        pos: "v",
        ipa: "/ˈɪmplɪment/",
        meaning: "triển khai thực hiện, đưa (kế hoạch, chính sách, thiết kế phần mềm) vào áp dụng",
        synonyms: "execute, carry out, put into practice, enact",
        collocations: ["implement a policy", "implement new software", "successfully implement"],
        mnemonic: "Từ khóa `implements` gắn bó máu thịt với mọi Java Developer — hiện thực hóa bản thiết kế thành code chạy thật!",
        toeicEx: "The hospital will **implement** a digital check-in system starting next month.",
        toeicVi: "Bệnh viện sẽ triển khai hệ thống đăng ký khám kỹ thuật số bắt đầu từ tháng tới.",
        javaEx: "We **implemented** the Circuit Breaker pattern with Resilience4j to prevent cascading failures.",
        javaVi: "Chúng tôi đã triển khai mẫu thiết kế Circuit Breaker bằng Resilience4j để ngăn chặn lỗi sập dây chuyền."
      },
      {
        word: "inspect",
        pos: "v",
        ipa: "/ɪnˈspekt/",
        meaning: "kiểm tra kỹ, thanh tra tỉ mỉ để đảm bảo chất lượng hoặc an toàn",
        synonyms: "examine, check closely, scrutinize",
        collocations: ["inspect the facility", "closely inspect", "safety inspection"],
        mnemonic: "IN (vào sâu bên trong) + SPECT (nhìn, như 'spectator') => Soi kỹ từng ngóc ngách như tính năng 'Inspect Code' của IntelliJ!",
        toeicEx: "Quality control officers **inspect** every batch of batteries before packaging.",
        toeicVi: "Nhân viên kiểm soát chất lượng kiểm tra kỹ từng lô pin trước khi đóng gói.",
        javaEx: "Use Wireshark or `tcpdump` to **inspect** raw TLS handshake packets when debugging mutual TLS.",
        javaVi: "Hãy dùng Wireshark hoặc `tcpdump` để soi chi tiết các gói tin bắt tay TLS thô khi gỡ lỗi xác thực hai chiều."
      },
      {
        word: "thorough",
        pos: "adj",
        ipa: "/ˈθɜːroʊ/",
        meaning: "kỹ lưỡng, thấu đáo, toàn diện không bỏ sót chi tiết",
        synonyms: "comprehensive, exhaustive, meticulous, complete",
        collocations: ["thorough investigation", "thorough review", "thorough understanding"],
        mnemonic: "Có chữ O ở giữa TH-O-ROUGH: Soi kính lúp tròn chữ O đi khắp mọi ngõ ngách một cách KỸ LƯỠNG!",
        toeicEx: "Mechanics performed a **thorough** check of the aircraft's hydraulic system.",
        toeicVi: "Các thợ máy đã thực hiện một cuộc kiểm tra kỹ lưỡng hệ thống thủy lực của máy bay.",
        javaEx: "A **thorough** code review caught a subtle SQL injection risk in the dynamic sort parameter.",
        javaVi: "Một buổi review code kỹ lưỡng đã phát hiện ra nguy cơ SQL injection tinh vi ở tham số sắp xếp động."
      },
      {
        word: "flawless",
        pos: "adj",
        ipa: "/ˈflɔːləs/",
        meaning: "hoàn hảo, không một chút lỗi lầm hay khiếm khuyết nào",
        synonyms: "impeccable, faultless, bug-free, spotless",
        collocations: ["flawless execution", "flawless performance", "virtually flawless"],
        mnemonic: "FLAW (vết nứt/lỗi) + LESS (không có, như 'serverless / stateless') => Không tì vết, chạy mượt 100%!",
        toeicEx: "Thanks to months of rehearsal, the opening ceremony was completely **flawless**.",
        toeicVi: "Nhờ nhiều tháng diễn tập, buổi lễ khai mạc đã diễn ra hoàn hảo không một sai sót.",
        javaEx: "Canary testing helped us achieve a **flawless** cutover to the new core banking cluster.",
        javaVi: "Kiểm thử canary đã giúp chúng tôi đạt được màn chuyển đổi hoàn hảo không lỗi sang cụm ngân hàng lõi mới."
      },
      {
        word: "collaborate",
        pos: "v",
        ipa: "/kəˈlæbəreɪt/",
        meaning: "cộng tác, làm việc chung chặt chẽ để tạo ra kết quả",
        synonyms: "cooperate, team up, work together, partner",
        collocations: ["collaborate with colleagues", "collaborate on a project", "close collaboration"],
        mnemonic: "COL (cùng nhau) + LABOR (lao động làm việc) + ATE => Cùng xắn tay áo lao động chung trên một dự án!",
        toeicEx: "Two universities will **collaborate** on developing biodegradable packaging materials.",
        toeicVi: "Hai trường đại học sẽ hợp tác nghiên cứu phát triển vật liệu đóng gói tự phân hủy sinh học.",
        javaEx: "Backend and mobile engineers **collaborated** closely to minimize JSON payload size.",
        javaVi: "Các kỹ sư backend và mobile đã phối hợp chặt chẽ để giảm thiểu kích thước gói tin JSON."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "The primary **objective** of the reorganization is to **streamline** communication between regional offices.",
        vi: "Mục tiêu chính của đợt tái cơ cấu là tinh gọn luồng giao tiếp giữa các văn phòng khu vực.",
        note: "'primary / main objective' (= main goal: mục tiêu chính)."
      },
      {
        tag: "Daily Standup",
        en: "QA found zero regression **defects**, so we are ready for the final deployment **phase** tonight.",
        vi: "Đội QA không tìm thấy lỗi hồi quy nào cả, nên chúng ta đã sẵn sàng cho giai đoạn triển khai cuối cùng vào tối nay.",
        note: "'regression defects' (các lỗi hồi quy) + 'final deployment phase'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Before **implementing** the nationwide upgrade, engineers conducted a six-week **feasibility** study.",
        vi: "Trước khi triển khai đợt nâng cấp trên toàn quốc, các kỹ sư đã tiến hành một nghiên cứu khả thi kéo dài sáu tuần.",
        note: "Sau giới từ 'Before' dùng V-ing ('Before implementing...') + cụm tủ 'conduct a feasibility study'."
      },
      {
        tag: "Senior Java",
        en: "Please make sure all edge cases are **thoroughly** tested in JUnit before marking the story done.",
        vi: "Vui lòng đảm bảo mọi trường hợp biên đều được kiểm thử kỹ lưỡng bằng JUnit trước khi đánh dấu hoàn thành task.",
        note: "Trạng từ 'thoroughly' đứng trước phân từ quá khứ 'tested' trong câu bị động."
      },
      {
        tag: "Client Email",
        en: "We look forward to **collaborating** **with** your security architects **on** the SSO integration.",
        vi: "Chúng tôi rất mong được hợp tác cùng các kiến trúc sư bảo mật của quý công ty trong hạng mục tích hợp SSO.",
        note: "Combo kép ăn điểm: 'look forward to + V-ing' + 'collaborate WITH sb ON sth'!"
      },
      {
        tag: "TOEIC Part 5",
        en: "Any batch of microchips showing even a minor **defect** is immediately rejected during **inspection**.",
        vi: "Bất kỳ lô vi mạch nào xuất hiện dù chỉ một lỗi nhỏ cũng bị loại bỏ ngay lập tức trong quá trình kiểm định.",
        note: "'minor defect' (lỗi nhỏ) + 'during inspection' (trong quá trình kiểm tra)."
      },
      {
        tag: "Senior Java",
        en: "This ADR document outlines the **technical specifications** and latency targets for our Kafka event bus.",
        vi: "Tài liệu quyết định kiến trúc (ADR) này phác thảo các đặc tả kỹ thuật và mục tiêu độ trễ cho trục sự kiện Kafka.",
        note: "'outline the technical specifications' = nêu rõ đặc tả kỹ thuật."
      },
      {
        tag: "TOEIC Part 7",
        en: "The product launch will roll out **in three phases**, starting with corporate clients in Tokyo.",
        vi: "Đợt ra mắt sản phẩm sẽ được triển khai thành ba giai đoạn, bắt đầu với nhóm khách hàng doanh nghiệp tại Tokyo.",
        note: "'in [N] phases' = chia thành N giai đoạn."
      },
      {
        tag: "Daily Standup",
        en: "Hitting 10,000 requests per second with sub-10ms p99 latency was a huge **milestone** for our Java service!",
        vi: "Đạt ngưỡng 10.000 request mỗi giây với độ trễ p99 dưới 10 mili-giây là một cột mốc khổng lồ cho dịch vụ Java của chúng ta!",
        note: "Cách diễn đạt thành tựu kỹ thuật cực kỳ ấn tượng trong buổi Demo / Sprint Review."
      },
      {
        tag: "TOEIC Part 5",
        en: "Customers praised the smartphone's **flawless** OLED display and long-lasting battery life.",
        vi: "Khách hàng hết lời khen ngợi màn hình OLED sắc nét không tì vết và thời lượng pin bền bỉ của chiếc điện thoại.",
        note: "'flawless display / design / service' = thiết kế/dịch vụ hoàn hảo."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "The QA team did a through check of the payment module. ❌",
          fix: "The QA team did a thorough check of the payment module. ✅",
          why: "Cực kỳ dễ nhìn lầm! 'through' (/θruː/) là giới từ 'xuyên qua'; còn tính từ 'kỹ lưỡng' bổ nghĩa cho 'check' phải viết là 'thorough' (/ˈθɜːroʊ/)!"
        },
        {
          bug: "We collaborated with the DevOps team about the Kubernetes migration. ❌",
          fix: "We collaborated with the DevOps team on the Kubernetes migration. ✅",
          why: "Cấu trúc chuẩn quốc tế của 'collaborate' là: 'collaborate WITH + người/đội + ON + dự án/công việc' (dùng ON cho đầu việc, không dùng about)."
        },
        {
          bug: "The feasibility of migrate 50 tables in one night is low. ❌",
          fix: "The feasibility of migrating 50 tables in one night is low. ✅",
          why: "Sau giới từ 'of' bắt buộc phải dùng Danh từ hoặc Danh động từ V-ing ('the feasibility of migrating...')."
        },
        {
          bug: "We are waiting for the final implement of the new tax rules. ❌",
          fix: "We are waiting for the final implementation of the new tax rules. ✅",
          why: "Đứng sau mạo từ và tính từ 'the final _____ of' phải là Danh từ 'implementation', không dùng động từ nguyên mẫu 'implement'!"
        }
      ]
    },
    toeicTips: [
      "Mẹo Săn Điểm Part 5 Trong 3 Giây: Nhìn 4 đáp án có 'through / though / thorough / thought', nếu chỗ trống đứng ngay trước danh từ ('a _____ analysis / inspection / search'), khoanh thẳng tay 'thorough' không cần dịch cả câu!",
      "Mẹo Chọn Giới Từ Với Collaborate: Thấy 'collaborate _____' + tên phòng ban/công ty → chọn 'with'; thấy 'collaborate _____' + tên dự án/nghiên cứu → chọn 'on'!",
      "Mẹo Paraphrasing Part 7: Bài đọc viết 'make the hiring process faster and simpler' → Đáp án trắc nghiệm gói gọn bằng đúng 1 động từ vàng: 'streamline the hiring process'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "a thorough inspection",
          "Engineers conducted",
          "implementing",
          "before",
          "the system upgrade."
        ],
        answer: "Engineers conducted a thorough inspection before implementing the system upgrade.",
        vi: "Các kỹ sư đã tiến hành một cuộc kiểm tra kỹ lưỡng trước khi triển khai bản nâng cấp hệ thống."
      },
      fillBlank: {
        sentence: "Our automation scripts helped _____ the deployment workflow across twenty microservices.",
        answer: "streamline",
        accepted: ["streamline"],
        hint: "Động từ bắt đầu bằng 'str...', mang nghĩa tinh gọn và làm quy trình mượt mà hơn",
        explain: "'streamline the deployment workflow' = tinh gọn luồng triển khai để chạy nhanh và ít bước thủ công hơn."
      }
    },
    quiz: [
      {
        q: "Before approving construction, the board requested a _____ assessment of the environmental impact.",
        options: ["through", "though", "thorough", "throughout"],
        answer: 2,
        explain: "Đáp án đúng là 'thorough' (tính từ: kỹ lưỡng, toàn diện), đứng giữa mạo từ 'a' và danh từ 'assessment'. Loại 'through' và 'throughout' (giới từ), loại 'though' (liên từ 'mặc dù')."
      },
      {
        q: "Our research division is _____ with two German laboratories on next-generation battery technology.",
        options: ["collaborating", "implementing", "streamlining", "inspecting"],
        answer: 0,
        explain: "Đáp án đúng là 'collaborating' nhờ bộ khung giới từ kinh điển 'collaborate WITH [đối tác] ON [chủ đề]' (hợp tác với hai phòng thí nghiệm Đức về công nghệ pin thế hệ mới). Ba ngoại động từ còn lại không đi với 'with ... on'."
      },
      {
        q: "All structural steel beams must meet the safety _____ established by the Ministry of Transport.",
        options: ["milestones", "specifications", "phases", "defects"],
        answer: 1,
        explain: "Đáp án đúng là 'specifications' (các quy chuẩn / thông số kỹ thuật an toàn). Cụm collocation vàng: 'meet the safety specifications' (đáp ứng các thông số kỹ thuật an toàn)."
      }
    ]
  },
  V2_4: {
    duration: "40 phút",
    toeicTarget: "Từ vựng Trọng tâm TOEIC 500–650+ (Part 6 & Part 7: Thư xin lỗi bảo trì, Hỗ trợ khách hàng & Đền bù)",
    javaContext: "Viết thông báo bảo trì hệ thống định kỳ (scheduled maintenance / temporarily unavailable - HTTP 503), phản hồi ticket khiếu nại của khách hàng, giải quyết sự cố (resolve / address an issue) và xử lý luồng hoàn tiền (refund).",
    teacherIntro: "Không có hệ thống phần mềm hay doanh nghiệp nào vận hành mãi mà không gặp lúc bảo trì hoặc phát sinh phàn nàn từ khách hàng! Trong đề thi TOEIC Part 6 & Part 7, ít nhất 2–3 đoạn văn sẽ là Email thông báo bảo trì máy chủ hoặc Thư xin lỗi khách hàng kèm phiếu giảm giá đền bù ('compensate / refund'). Là một Senior Java Engineer, biết cách dùng những từ lịch sự, xoa dịu nhưng chuyên nghiệp như 'address your concern', 'temporarily unavailable due to scheduled maintenance', và 'we apologize for any inconvenience' sẽ biến một cuộc khủng hoảng khách hàng thành điểm cộng uy tín tuyệt đối!",
    javaAnalogy: {
      title: "Chăm Sóc Khách Hàng & Bảo Trì chính là Mã Trạng Thái HTTP 503 & Incident Resolution Workflow!",
      body: "Anh em viết REST API đều thuộc lòng mã `HTTP 503 Service Unavailable`: khi cụm database bước vào cửa sổ 'scheduled maintenance' (bảo trì định kỳ), hệ thống trả về thông báo dịch vụ 'temporarily unavailable' kèm lời xin lỗi vì sự 'inconvenience'. Còn khi user gửi 'inquiry' (hỏi đáp) hoặc 'complaint' (báo lỗi trừ tiền oan), đội L3 Engineering lập tức nhảy vào 'address' (tiếp nhận xử lý) và 'resolve' (giải quyết dứt điểm), sau đó gọi API 'refund' (hoàn tiền gốc) hoặc tặng voucher để 'compensate' nhằm giữ vững chỉ số 'customer satisfaction'!"
    },
    objectives: [
      "Nắm vững 10 từ vựng cốt lõi về Hỗ trợ khách hàng, Bảo trì hệ thống và Bồi thường thường gặp nhất trong TOEIC.",
      "Hiểu sâu nghĩa động từ cực sang của 'address' (= deal with / handle: giải quyết một vấn đề) để không bao giờ dịch nhầm thành 'địa chỉ' trong Part 5 & Part 7.",
      "Phân biệt chuẩn xác bộ ba trả tiền dễ gây nhầm lẫn: refund (hoàn tiền cho khách) – reimburse (hoàn công tác phí cho nhân viên) – compensate (bồi thường thiệt hại/trải nghiệm xấu)."
    ],
    formulaCards: [
      {
        label: "Word Family • COMPLAIN, MAINTAIN & SATISFY",
        formula: "complain (v: phàn nàn) → complaint (n: lời khiếu nại - CÓ chữ T!) | maintain (v) → maintenance (n: bảo trì) | satisfy (v) → satisfaction (n) → satisfactory (adj: đạt yêu cầu)",
        note: "Chú ý chính tả 'maintenance' (/ˈmeɪntənəns/): viết là main-TEN-ance chứ KHÔNG phải 'maintainance'!"
      },
      {
        label: "Siêu Đa Nghĩa TOEIC 600+ • Động Từ ADDRESS",
        formula: "address (n: địa chỉ) → NHƯNG address (v): (1) giải quyết vấn đề ('address an issue/concern'); (2) phát biểu trước đám đông ('address the audience')",
        note: "Trong Part 7, 'steps taken to address the problem' = các bước được thực hiện để GIẢI QUYẾT vấn đề (= resolve / deal with)!"
      },
      {
        label: "Cụm Thông Báo Bảo Trì Kinh Điển • TEMPORARILY UNAVAILABLE",
        formula: "be temporarily unavailable (tạm thời không truy cập được) + due to routine / scheduled maintenance (do bảo trì định kỳ)",
        note: "Trạng từ 'temporarily' đứng trước tính từ 'unavailable / closed / suspended' là cặp bài trùng xuất hiện dày đặc ở Part 5!"
      },
      {
        label: "Phân Biệt Hoàn Tiền & Đền Bù • REFUND vs COMPENSATE",
        formula: "issue a full refund (hoàn lại 100% tiền mua hàng) | compensate sb FOR a loss/delay (đền bù cho ai vì thiệt hại/chậm trễ)",
        note: "Câu cửa miệng kết thư xin lỗi TOEIC: 'We sincerely apologize for any inconvenience this may cause.'"
      }
    ],
    sections: [
      {
        heading: "1. Tiếp Nhận & Xử Lý Vấn Đề: Inquiry – Complaint – Address – Resolve",
        paragraphs: [
          "Mọi bộ phận Customer Support hay Tech Support đều phân loại yêu cầu gửi tới thành hai luồng rõ rệt: 'inquiry' (khách hỏi thông tin tính năng, bảng giá — mang sắc thái trung lập) và 'complaint' (khách khiếu nại về lỗi sản phẩm hoặc dịch vụ chậm — mang sắc thái không hài lòng).",
          "Khi phản hồi khách hàng, hai động từ thể hiện tinh thần trách nhiệm cao nhất là 'address' (bắt tay xử lý trực diện mối bận tâm của khách) và 'resolve' (giải quyết triệt để đến khi đóng ticket)."
        ],
        bullets: [
          "handle / respond to an inquiry: Giải đáp thắc mắc của khách hàng.",
          "file / lodge a complaint AGAINST/ABOUT sth: Nộp đơn khiếu nại chính thức.",
          "address + an issue / a bug / customer concerns: 'Version 2.4.1 addresses several memory-consumption issues reported by users.'",
          "resolve + a dispute / a problem / an incident (= settle / fix completely): Danh từ tương ứng là 'resolution' ('incident resolution time')."
        ]
      },
      {
        heading: "2. Thông Báo Bảo Trì & Gián Đoạn Tạm Thời: Maintenance – Temporarily – Unavailable – Inconvenience",
        paragraphs: [
          "Nếu bạn từng đọc email của ngân hàng báo ngưng chuyển khoản từ 0h đến 2h sáng Chủ nhật, bạn đã thấy nguyên mẫu của một bài đọc TOEIC Part 6! Cấu trúc của bức thông báo này gần như là một khuôn mẫu bất biến trên toàn thế giới.",
          "Nắm thuộc lòng khuôn mẫu này giúp bạn điền từ Part 6 nhanh như chớp và tự tay viết thông báo bảo trì hệ thống cho khách hàng quốc tế chỉ trong 2 phút."
        ],
        bullets: [
          "scheduled / routine / preventive maintenance: Bảo trì theo lịch / định kỳ / phòng ngừa (danh từ KHÔNG đếm được!).",
          "temporarily unavailable: Tạm thời không khả dụng ('Online banking will be temporarily unavailable for two hours on Sunday').",
          "apologize FOR any inconvenience (caused): Lưu ý 'inconvenience' trong cụm này thường dùng như danh từ không đếm được (không viết 'inconveniences'!)."
        ]
      },
      {
        heading: "3. Đền Bù Thỏa Đáng & Giữ Chân Khách Hàng: Refund – Compensate – Satisfaction",
        paragraphs: [
          "Khi dịch vụ gián đoạn vượt mức cam kết hoặc hàng giao bị hỏng, doanh nghiệp cần chủ động hoàn tiền ('refund') hoặc bồi thường ('compensate') để bảo vệ sự hài lòng của khách hàng ('customer satisfaction').",
          "Đề thi TOEIC Part 7 rất hay hỏi: 'How will the company compensate affected customers?' — đáp án thường là tặng phiếu giảm giá 15% cho lần mua sau, miễn phí tháng cước tiếp theo hoặc nâng hạng dịch vụ miễn phí."
        ],
        bullets: [
          "full / partial refund: Hoàn tiền toàn bộ / một phần ('eligible for a full refund within 30 days').",
          "compensate sb FOR sth → danh từ 'compensation': 'We offered one month of free cloud credits to compensate clients for the downtime.'",
          "satisfaction (n): 'customer satisfaction survey' (khảo sát mức độ hài lòng); 'to your satisfaction' (đến khi quý khách hài lòng)."
        ]
      }
    ],
    vocabItems: [
      {
        word: "inquiry",
        pos: "n",
        ipa: "/ɪnˈkwaɪəri/",
        meaning: "câu hỏi xin thông tin, yêu cầu tư vấn; cuộc điều tra chính thức",
        synonyms: "question, query, request for information",
        collocations: ["customer inquiry", "general inquiries", "direct your inquiry to"],
        mnemonic: "Danh từ của động từ INQUIRE (học ở bài V1.2) — giống một bản tin QUERY hỏi thông tin gửi vào hệ thống!",
        toeicEx: "Please direct all media **inquiries** to the public relations office.",
        toeicVi: "Vui lòng chuyển mọi câu hỏi từ phía truyền thông tới văn phòng quan hệ công chúng.",
        javaEx: "Our AI chatbot handles eighty percent of routine account **inquiries** without human intervention.",
        javaVi: "Chatbot AI của chúng tôi tự động giải đáp tám mươi phần trăm các câu hỏi tài khoản thông thường mà không cần nhân viên can thiệp."
      },
      {
        word: "complaint",
        pos: "n",
        ipa: "/kəmˈpleɪnt/",
        meaning: "lời phàn nàn, đơn khiếu nại",
        synonyms: "grievance, objection, protest",
        collocations: ["file a complaint", "customer complaint", "receive complaints about"],
        mnemonic: "Động từ là `complain`, thêm chữ **T** ở cuối thành danh từ **COMPLAINT** (Ticket khiếu nại có chữ T)!",
        toeicEx: "The hotel manager personally responded to the guest's **complaint** about noise.",
        toeicVi: "Quản lý khách sạn đã đích thân phản hồi lời phàn nàn của vị khách về tiếng ồn.",
        javaEx: "After optimizing image compression, user **complaints** about slow page loads dropped by 70 percent.",
        javaVi: "Sau khi tối ưu nén ảnh, lượng phàn nàn của người dùng về việc tải trang chậm đã giảm 70 phần trăm."
      },
      {
        word: "resolve",
        pos: "v",
        ipa: "/rɪˈzɑːlv/",
        meaning: "giải quyết triệt để, tháo gỡ dứt điểm (sự cố, xung đột, lỗi)",
        synonyms: "settle, fix, sort out, work out",
        collocations: ["resolve an issue", "resolve a dispute", "quickly resolve"],
        mnemonic: "Trạng thái Jira ticket `RESOLVED` hay nút `Resolve Merge Conflict` trong Git — anh em gõ mỗi ngày!",
        toeicEx: "Technical support worked overnight to **resolve** the billing software glitch.",
        toeicVi: "Đội hỗ trợ kỹ thuật đã làm việc xuyên đêm để giải quyết dứt điểm lỗi phần mềm tính cước.",
        javaEx: "Clearing the corrupted Maven cache immediately **resolved** the dependency build failure.",
        javaVi: "Xóa bộ nhớ đệm Maven bị lỗi đã giải quyết ngay lập tức sự cố gãy bản dựng phụ thuộc."
      },
      {
        word: "address",
        pos: "v",
        ipa: "/əˈdres/",
        meaning: "xử lý, giải quyết trực diện (vấn đề, mối quan ngại); hoặc phát biểu trước hội nghị",
        synonyms: "deal with, tackle, attend to, handle",
        collocations: ["address a problem", "address security concerns", "promptly address"],
        mnemonic: "Định vị trúng ĐỊA CHỈ (address) nơi phát sinh bug để nhảy vào XỬ LÝ tận gốc!",
        toeicEx: "The new traffic plan aims to **address** congestion in the downtown district.",
        toeicVi: "Kế hoạch giao thông mới nhằm mục tiêu giải quyết nạn ùn tắc tại khu vực trung tâm thành phố.",
        javaEx: "This minor patch **addresses** a thread-safety bug in our custom date formatter.",
        javaVi: "Bản vá nhỏ này xử lý một lỗi an toàn đa luồng trong bộ định dạng ngày tháng tự viết của chúng tôi."
      },
      {
        word: "compensate",
        pos: "v",
        ipa: "/ˈkɑːmpenseɪt/",
        meaning: "bồi thường, đền bù cho ai vì tổn thất hoặc sự bất tiện",
        synonyms: "make up for, recompense, indemnify",
        collocations: ["compensate customers for", "fairly compensate", "financial compensation"],
        mnemonic: "Trong Microservices Saga Pattern có **Compensating Transaction** — giao dịch ĐỀN BÙ hoàn tác khi bước sau bị lỗi!",
        toeicEx: "The airline offered meal vouchers to **compensate** passengers for the five-hour delay.",
        toeicVi: "Hãng hàng không đã tặng phiếu ăn uống để đền bù cho hành khách vì chuyến bay trễ năm tiếng.",
        javaEx: "When inventory reservation fails, the Saga orchestrator triggers an action to **compensate** the wallet debit.",
        javaVi: "Khi bước giữ hàng tồn kho thất bại, bộ điều phối Saga sẽ kích hoạt tác vụ bù trừ lại giao dịch trừ tiền ví."
      },
      {
        word: "refund",
        pos: "n / v",
        ipa: "/ˈriːfʌnd/",
        meaning: "khoản tiền hoàn lại cho khách mua hàng; hoàn trả tiền",
        synonyms: "money back, repayment, rebate",
        collocations: ["full refund", "issue a refund", "request a refund", "non-refundable"],
        mnemonic: "RE (trả ngược lại) + FUND (quỹ/tiền) => Trả lại đúng khoản tiền khách đã thanh toán!",
        toeicEx: "Unused tickets may be returned for a full **refund** up to 24 hours before the show.",
        toeicVi: "Vé chưa sử dụng có thể được trả lại để nhận hoàn tiền 100% muộn nhất 24 giờ trước buổi diễn.",
        javaEx: "Calling the Stripe **refund** API requires passing the original payment intent identifier.",
        javaVi: "Khi gọi API hoàn tiền của Stripe, ta bắt buộc phải truyền kèm mã định danh giao dịch thanh toán gốc."
      },
      {
        word: "inconvenience",
        pos: "n",
        ipa: "/ˌɪnkənˈviːniəns/",
        meaning: "sự bất tiện, phiền toái gây ra cho người khác",
        synonyms: "trouble, disruption, nuisance",
        collocations: ["apologize for any inconvenience", "cause inconvenience to", "minor inconvenience"],
        mnemonic: "IN (không) + CONVENIENCE (tiện lợi, như 'convenience store' = cửa hàng tiện lợi) => Sự bất tiện!",
        toeicEx: "We sincerely regret any **inconvenience** resulting from the elevator renovation.",
        toeicVi: "Chúng tôi chân thành lấy làm tiếc vì bất kỳ sự bất tiện nào phát sinh từ đợt cải tạo thang máy.",
        javaEx: "We scheduled the schema migration at 3 A.M. to minimize **inconvenience** to active merchants.",
        javaVi: "Chúng tôi xếp lịch nâng cấp cấu trúc bảng vào 3 giờ sáng nhằm giảm thiểu sự bất tiện cho các đối tác bán hàng."
      },
      {
        word: "unavailable",
        pos: "adj",
        ipa: "/ˌʌnəˈveɪləbl/",
        meaning: "không khả dụng, tạm ngưng phục vụ; hoặc đang bận không gặp được",
        synonyms: "inaccessible, offline, out of service, busy",
        collocations: ["temporarily unavailable", "currently unavailable", "unavailable for comment"],
        mnemonic: "Mã lỗi quốc dân **HTTP 503 Service UNAVAILABLE** — server đang bảo trì hoặc quá tải tạm thời!",
        toeicEx: "Account statements will be **temporarily unavailable** tonight while servers are updated.",
        toeicVi: "Sao kê tài khoản sẽ tạm thời không truy cập được vào tối nay trong lúc máy chủ được cập nhật.",
        javaEx: "If the downstream recommendation service is **unavailable**, our API returns cached fallback items.",
        javaVi: "Nếu dịch vụ gợi ý phía sau tạm không khả dụng, API của chúng tôi sẽ trả về danh sách dự phòng từ bộ nhớ đệm."
      },
      {
        word: "maintenance",
        pos: "n",
        ipa: "/ˈmeɪntənəns/",
        meaning: "công tác bảo trì, bảo dưỡng hệ thống/thiết bị/tòa nhà",
        synonyms: "upkeep, servicing, preservation",
        collocations: ["routine maintenance", "scheduled maintenance", "under maintenance"],
        mnemonic: "Code xong giao cho đội **Maintenance** (bảo trì vận hành)! Chú ý viết chữ giữa là TEN (`main-ten-ance`)!",
        toeicEx: "Regular **maintenance** extends the lifespan of industrial printing equipment.",
        toeicVi: "Bảo dưỡng định kỳ giúp kéo dài tuổi thọ của các thiết bị in công nghiệp.",
        javaEx: "Put Nginx into **maintenance** mode so users see a friendly countdown banner during deployment.",
        javaVi: "Hãy chuyển Nginx sang chế độ bảo trì để người dùng nhìn thấy biểu ngữ đếm ngược thân thiện trong lúc triển khai."
      },
      {
        word: "satisfaction",
        pos: "n",
        ipa: "/ˌsætɪsˈfækʃn/",
        meaning: "sự hài lòng, sự thỏa mãn của khách hàng/người dùng",
        synonyms: "contentment, fulfillment, pleasure",
        collocations: ["customer satisfaction", "satisfaction guarantee", "high satisfaction rating"],
        mnemonic: "Chỉ số CSAT (**Customer SATISFACTION** Score) mà đội Product luôn đo sau mỗi bản release!",
        toeicEx: "Our top priority is ensuring complete customer **satisfaction** with every order.",
        toeicVi: "Ưu tiên hàng đầu của chúng tôi là đảm bảo sự hài lòng trọn vẹn của khách hàng trên từng đơn hàng.",
        javaEx: "Cutting checkout latency in half boosted user **satisfaction** scores from 4.1 to 4.8 stars.",
        javaVi: "Giảm một nửa độ trễ thanh toán đã đẩy điểm hài lòng của người dùng tăng vọt từ 4,1 lên 4,8 sao."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "The online booking system is **temporarily** offline for **routine maintenance**.",
        vi: "Hệ thống đặt chỗ trực tuyến đang tạm thời ngoại tuyến để bảo trì định kỳ.",
        note: "Trạng từ 'temporarily' bổ nghĩa cho tính từ 'offline' + cụm 'for routine maintenance'."
      },
      {
        tag: "Client Email",
        en: "Thank you for bringing this issue to our attention; our engineers are working to **resolve** it immediately.",
        vi: "Cảm ơn quý khách đã lưu ý vấn đề này cho chúng tôi; các kỹ sư đang làm việc để khắc phục ngay lập tức.",
        note: "Mẫu câu mở đầu phản hồi sự cố cực kỳ lịch sự và chuyên nghiệp."
      },
      {
        tag: "TOEIC Part 7",
        en: "Subscribers affected by Tuesday's outage will receive a $10 credit as **compensation**.",
        vi: "Các thuê bao bị ảnh hưởng bởi sự cố gián đoạn hôm thứ Ba sẽ nhận được khoản tín dụng 10 đô la để đền bù.",
        note: "'as compensation (for...)' = như một khoản đền bù."
      },
      {
        tag: "Senior Java",
        en: "Before closing the incident ticket, confirm with the merchant that the issue was **resolved** to their **satisfaction**.",
        vi: "Trước khi đóng ticket sự cố, hãy xác nhận với đối tác bán hàng rằng vấn đề đã được giải quyết khiến họ hài lòng.",
        note: "Cụm vàng 'to one's satisfaction' = làm ai đó thỏa mãn/hài lòng."
      },
      {
        tag: "TOEIC Part 5",
        en: "Ms. Morales will **address** all employee **inquiries** regarding the new dental insurance plan at noon.",
        vi: "Bà Morales sẽ giải đáp toàn bộ câu hỏi của nhân viên liên quan đến gói bảo hiểm nha khoa mới vào buổi trưa.",
        note: "'address inquiries / questions' = giải đáp các câu hỏi."
      },
      {
        tag: "Daily Standup",
        en: "We noticed three customer **complaints** about duplicate push notifications and traced the bug to retry logic.",
        vi: "Chúng tôi ghi nhận ba khiếu nại của khách hàng về việc thông báo đẩy bị lặp đôi và đã lần ra lỗi ở nhánh logic thử lại.",
        note: "'customer complaints about + vấn đề'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Please note that personalized software licenses are **non-refundable** once the activation key has been revealed.",
        vi: "Xin lưu ý rằng giấy phép phần mềm cá nhân hóa sẽ không được hoàn tiền một khi mã kích hoạt đã được mở xem.",
        note: "Tính từ 'non-refundable' (không hoàn tiền) gặp cực nhiều trên vé máy bay, khách sạn và phần mềm!"
      },
      {
        tag: "Client Email",
        en: "We apologize for any **inconvenience** while the analytics dashboard remains **unavailable**.",
        vi: "Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào trong thời gian bảng điều khiển phân tích tạm ngưng phục vụ.",
        note: "Sau Linking Verb 'remains' dùng tính từ 'unavailable'."
      },
      {
        tag: "TOEIC Part 5",
        en: "According to the survey, 94 percent of clients found our technical support service **satisfactory**.",
        vi: "Theo cuộc khảo sát, 94 phần trăm khách hàng đánh giá dịch vụ hỗ trợ kỹ thuật của chúng tôi là thỏa đáng / đạt yêu cầu.",
        note: "Cấu trúc 'find + O + Adj': dùng tính từ chỉ vật 'satisfactory' (đạt yêu cầu), KHÔNG dùng 'satisfied' (chỉ cảm xúc người)!"
      },
      {
        tag: "Senior Java",
        en: "Adding a dead-letter queue **addressed** the message-loss risk during downstream **maintenance** windows.",
        vi: "Bổ sung hàng đợi thư chết (DLQ) đã giải quyết rủi ro mất bản tin trong các khung giờ bảo trì dịch vụ phía sau.",
        note: "'maintenance window' = khung giờ bảo trì hệ thống."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "The customer submitted a formal complain about the late delivery. ❌",
          fix: "The customer submitted a formal complaint about the late delivery. ✅",
          why: "'complain' là động từ! Đứng sau mạo từ và tính từ 'a formal _____' bắt buộc phải là danh từ có chữ 't' ở cuối: 'complaint'!"
        },
        {
          bug: "The ATM is temporary unavailable due to system maintainance. ❌",
          fix: "The ATM is temporarily unavailable due to system maintenance. ✅",
          why: "Hai lỗi trong 1 câu kinh điển: (1) Trước tính từ 'unavailable' phải dùng trạng từ 'temporarily'; (2) Chính tả đúng là 'maintenance' (không có chữ 'ai' thứ hai!)."
        },
        {
          bug: "Our latency test results were very satisfied. ❌",
          fix: "Our latency test results were very satisfactory. ✅",
          why: "Chủ ngữ là vật ('test results') thì phải dùng tính từ bản chất 'satisfactory' (đạt yêu cầu/tốt); 'satisfied' chỉ dùng cho NGƯỜI ('The client was satisfied with the results')."
        },
        {
          bug: "We resolved to the database connection leak yesterday. ❌",
          fix: "We resolved the database connection leak yesterday. ✅",
          why: "Khi mang nghĩa 'giải quyết vấn đề', 'resolve' là ngoại động từ đi thẳng với tân ngữ ('resolve the leak'), không chèn giới từ 'to'!"
        }
      ]
    },
    toeicTips: [
      "Mẹo 3 Giây Bắt Điểm Part 5: Thấy 'be _____ unavailable / closed / out of stock', nhìn xuống 4 đáp án nhặt ngay trạng từ đuôi '-ly' ('temporarily')!",
      "Mẹo Vàng Phân Biệt Họ Từ SATISFY: Chủ ngữ là Người + giới từ 'with' → chọn 'satisfied' ('customers are satisfied with...'); Bổ nghĩa cho vật/kết quả/hiệu năng → chọn 'satisfactory' ('satisfactory performance'); Sau tính từ sở hữu/cụm danh từ → chọn 'satisfaction' ('customer satisfaction')!",
      "Mẹo Đọc Hiểu Part 7: Khi đề bài hỏi 'Why was the e-mail sent?' mà trong bài có câu 'Our servers will undergo scheduled maintenance from 1 A.M. to 4 A.M.', hãy chọn đáp án 'To announce a temporary service interruption'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "temporarily unavailable",
          "The payment portal",
          "during tonight's",
          "will be",
          "scheduled maintenance."
        ],
        answer: "The payment portal will be temporarily unavailable during tonight's scheduled maintenance.",
        vi: "Cổng thanh toán sẽ tạm thời không khả dụng trong khung giờ bảo trì định kỳ tối nay."
      },
      fillBlank: {
        sentence: "The CEO promised to _____ employee concerns regarding the office relocation at Friday's town hall.",
        answer: "address",
        accepted: ["address", "resolve"],
        hint: "Động từ bắt đầu bằng chữ 'a' (trông giống danh từ 'địa chỉ'), mang nghĩa giải quyết/đề cập trực diện mối lo ngại",
        explain: "Collocation điểm cao TOEIC: 'address concerns / issues' (= giải quyết, xử lý các mối bận tâm)."
      }
    },
    quiz: [
      {
        q: "Online library catalogs will be _____ inaccessible on Saturday morning while technicians install security updates.",
        options: ["temporary", "temporarily", "temporariness", "temporaries"],
        answer: 1,
        explain: "Đáp án đúng là 'temporarily' (trạng từ: một cách tạm thời), đứng giữa động từ to-be ('will be') và tính từ ('inaccessible'). Các đáp án còn lại sai từ loại."
      },
      {
        q: "To _____ customers for the unexpected shipping delay, the retailer included a 20% discount coupon.",
        options: ["inquire", "complain", "compensate", "maintain"],
        answer: 2,
        explain: "Đáp án đúng là 'compensate' trong cấu trúc 'compensate SOMEONE for SOMETHING' (đền bù cho khách hàng vì sự chậm trễ giao hàng ngoài ý muốn)."
      },
      {
        q: "Following several noise _____, management installed soundproof glass panels around the conference room.",
        options: ["complain", "complains", "complaining", "complaints"],
        answer: 3,
        explain: "Đáp án đúng là 'complaints' (danh từ đếm được số nhiều đi sau từ chỉ lượng 'several': một vài lời phàn nàn về tiếng ồn). Loại 'complain / complains' vì là động từ!"
      }
    ]
  },

  V2_5: {
    duration: "40 phút",
    toeicTarget: "Từ vựng Tủ Ăn Chắc 100% Điểm TOEIC 500–700+ (Part 4, 6 & 7: Thông báo CNTT & Bảo mật nội bộ)",
    javaContext: "Đúng 100% chuyên ngành của bạn! Thảo luận tính tương thích phiên bản thư viện (compatible with Java 21), nâng cấp hệ thống (upgrade), xử lý sập mạng/điện (outage), phân quyền truy cập tài liệu mật (unauthorized access to confidential data), quản lý credentials và cloud storage.",
    teacherIntro: "Bài V2.5 hôm nay chính là 'Sân Nhà' của anh em lập trình viên Java! Trong khoảng 5 năm trở lại đây, ETS cập nhật đề thi TOEIC theo sát môi trường làm việc hiện đại nên các bài đọc và bài nghe về Thông báo của phòng IT (đổi mật khẩu, cảnh báo lừa đảo, hết dung lượng lưu trữ đám mây, phần mềm không tương thích, mất mạng nội bộ) xuất hiện dày đặc! Với người ngoài ngành đây là bài khó, nhưng với dân Dev chỉ cần thầy chỉ rõ các 'bẫy giới từ' của ETS (như 'compatible WITH' hay danh từ 'access TO' vs động từ 'access' không giới từ) là bạn ăn trọn điểm tuyệt đối 10/10 không trượt phát nào!",
    javaAnalogy: {
      title: "Từ Vựng IT Trong TOEIC chính là Spring Security + Cloud Infrastructure Thu Nhỏ!",
      body: "Hãy nhìn 10 từ bài này qua lăng kính một ứng dụng Spring Boot trên AWS: Người dùng gửi 'credentials' (username/password) qua 'network' để xin 'access' vào tài liệu 'confidential'. Nếu sai quyền, Spring Security chặn ngay lỗi HTTP 403/401 chặn đứng 'unauthorized' access! Ở tầng hạ tầng, khi 'upgrade' JDK hoặc thư viện, ta luôn phải kiểm tra nó có 'compatible with' bản cũ không; dữ liệu lớn thì đẩy lên S3 'storage'; còn nếu phần cứng 'malfunctioning' gây ra 'outage', đội trực ca phải kích hoạt failover ngay lập tức!"
    },
    objectives: [
      "Hốt trọn 100% điểm các câu hỏi chủ đề CNTT, Bảo mật và Thiết bị văn phòng trong TOEIC Listening & Reading.",
      "Thuộc lòng quy tắc ngữ pháp sống còn của từ 'access' (Verb không 'to' vs Noun có 'to') và tính từ 'compatible WITH'.",
      "Nhận diện nhanh các cặp từ đồng nghĩa IT trong TOEIC Part 7 như outage = power failure / service disruption, credentials = login details, malfunctioning = out of order / defective."
    ],
    formulaCards: [
      {
        label: "Siêu Bẫy Ngữ Pháp Số 1 • ACCESS (Động Từ vs Danh Từ)",
        formula: "VERB: access + the server (KHÔNG có 'to'!) ↔ NOUN: have / gain / restrict access + TO + the server (BẮT BUỘC có 'to'!)",
        note: "90% thí sinh mất điểm câu này ở Part 5! Hãy nhìn trước từ 'access': nếu trước nó là 'can / to / will' → nó là Verb (cấm chọn 'to'); nếu trước nó là 'have / unauthorized / direct' → nó là Noun (phải đi với 'to')!"
      },
      {
        label: "Tương Thích & Bảo Mật • COMPATIBLE, CONFIDENTIAL & UNAUTHORIZED",
        formula: "be compatible WITH (tương thích với) | strictly confidential (tuyệt mật) | unauthorized access / personnel (truy cập / người không phận sự)",
        note: "Tính từ của 'compatible' đi với giới từ WITH; danh từ là 'compatibility' ('backward compatibility' = tương thích ngược)."
      },
      {
        label: "Hạ Tầng & Lưu Trữ • NETWORK, STORAGE & UPGRADE",
        formula: "wireless / corporate network (mạng không dây / mạng nội bộ) | cloud storage capacity (dung lượng lưu trữ đám mây) | system upgrade",
        note: "Cực kỳ lưu ý: 'storage' (lưu trữ) và 'software' và 'equipment' đều là DANH TỪ KHÔNG ĐẾM ĐƯỢC (không bao giờ thêm -s!)."
      },
      {
        label: "Sự Cố Điện / Mạng & Thiết Bị • OUTAGE & MALFUNCTIONING",
        formula: "power / network outage (mất điện / sập mạng) | malfunctioning equipment (thiết bị trục trặc = faulty / out of order)",
        note: "Tiền tố 'mal-' luôn mang nghĩa XẤU/SAI (malfunction = chạy sai chức năng, malware = phần mềm độc hại, malformed JSON = JSON sai định dạng)!"
      }
    ],
    sections: [
      {
        heading: "1. Phiên Bản, Tương Thích & Tài Nguyên Hạ Tầng: Compatible – Upgrade – Network – Storage",
        paragraphs: [
          "Trong các email thông báo từ bộ phận Help Desk gửi toàn công ty ở TOEIC Part 6, kịch bản quen thuộc nhất là yêu cầu nhân viên lưu tài liệu trước đợt nâng cấp ('upgrade') hệ điều hành hoặc cảnh báo phần mềm kế toán cũ không còn tương thích ('compatible') với trình duyệt mới.",
          "Với lập trình viên Java, đây cũng là những câu bạn nói hàng tuần khi bàn về nâng cấp Spring Boot, kiểm tra tương thích JDBC Driver hay mở rộng dung lượng ổ đĩa S3/EBS."
        ],
        bullets: [
          "compatible WITH sth: 'Version 3.0 of the plugin is fully compatible with both Windows and macOS.'",
          "upgrade (v / n) TO + phiên bản mới: 'upgrade the database cluster to PostgreSQL 16' (nâng cấp cấu hình/phiên bản mạnh hơn — khác nhẹ với 'update' là cập nhật bản vá thường xuyên).",
          "network (n - đếm được) vs storage (n - KHÔNG đếm được): 'expand cloud storage space', 'connect to the secure VPN network'."
        ]
      },
      {
        heading: "2. Tam Giác Bảo Mật Thông Tin: Access – Credentials – Confidential – Unauthorized",
        paragraphs: [
          "Bảo mật doanh nghiệp là chủ đề ETS cực kỳ ưu ái trong đề thi mới. Bốn từ 'access', 'credentials', 'confidential' và 'unauthorized' thường đan xen cùng nhau trong các quy định an ninh văn phòng (cấm cho mượn thẻ từ, cấm chia sẻ mật khẩu, bảo vệ hồ sơ khách hàng).",
          "Lưu ý từ 'credentials' có hai ngữ cảnh đều hay thi: trong CNTT là thông tin đăng nhập ('login credentials'), còn trong Nhân sự (bài V1.3) nó đồng nghĩa với 'qualifications' (bằng cấp, chứng nhận năng lực: 'impressive academic credentials')."
        ],
        bullets: [
          "keep documents strictly confidential: Giữ tài liệu bảo mật tuyệt đối (không tiết lộ ra ngoài).",
          "prevent unauthorized access TO sensitive records: Ngăn chặn hành vi truy cập trái phép vào hồ sơ nhạy cảm.",
          "enter your login credentials: Nhập thông tin xác thực đăng nhập (tên tài khoản, mật khẩu, mã OTP)."
        ]
      },
      {
        heading: "3. Khi Hệ Thống Gặp Trục Trặc: Outage – Malfunctioning",
        paragraphs: [
          "Trong bài nghe TOEIC Part 4 (tin tức thời sự hoặc thông báo tòa nhà) và bài đọc Part 7 (email báo cáo sự cố), hai từ 'outage' và 'malfunctioning' là dấu hiệu báo động đỏ cho biết máy móc hoặc hạ tầng đang gặp sự cố.",
          "Nếu 'outage' chỉ việc nguồn cung cấp điện hoặc dịch vụ mạng bị ngắt hoàn toàn trong một khoảng thời gian, thì 'malfunctioning' mô tả một thiết bị vẫn có điện nhưng hoạt động loạn xạ, sai chức năng (như máy in kẹt giấy liên tục, cảm biến báo nhiệt độ sai)."
        ],
        bullets: [
          "power outage (= power failure / blackout): Sự cố cúp điện; 'internet / cloud outage': sự cố sập mạng/đám mây.",
          "malfunction (v / n) → malfunctioning (adj): 'Please attach a red tag to any malfunctioning scanner in the warehouse.'"
        ]
      }
    ],
    vocabItems: [
      {
        word: "compatible",
        pos: "adj",
        ipa: "/kəmˈpætəbl/",
        meaning: "tương thích, có thể hoạt động tốt cùng nhau mà không xung đột",
        synonyms: "well-matched, consistent, interoperable",
        collocations: ["compatible with", "backward compatible", "fully compatible"],
        mnemonic: "COM (cùng nhau) + PATIBLE => Sống hòa thuận cùng nhau trên một JVM mà không bắn `NoSuchMethodError`!",
        toeicEx: "Please check whether the new printer driver is **compatible** with your operating system.",
        toeicVi: "Vui lòng kiểm tra xem trình điều khiển máy in mới có tương thích với hệ điều hành của bạn hay không.",
        javaEx: "Adding optional fields keeps our REST API backward **compatible** with older mobile clients.",
        javaVi: "Chỉ thêm các trường tùy chọn giúp bộ REST API của chúng tôi giữ được tính tương thích ngược với các bản ứng dụng di động cũ."
      },
      {
        word: "upgrade",
        pos: "v / n",
        ipa: "/ˌʌpˈɡreɪd/",
        meaning: "nâng cấp lên phiên bản, đời máy hoặc hạng dịch vụ cao cấp hơn",
        synonyms: "enhance, modernize, improve",
        collocations: ["system upgrade", "upgrade to the latest version", "complimentary seat upgrade"],
        mnemonic: "UP (lên cao) + GRADE (cấp bậc) => Nâng từ Java 8 thẳng lên Java 21 LTS!",
        toeicEx: "The airline offered frequent flyers a free **upgrade** to business class.",
        toeicVi: "Hãng hàng không đã tặng khách hàng thân thiết suất nâng hạng miễn phí lên khoang thương gia.",
        javaEx: "We plan to **upgrade** our Spring Boot services to version 3.3 during the quiet holiday period.",
        javaVi: "Chúng tôi dự định nâng cấp các dịch vụ Spring Boot lên phiên bản 3.3 trong dịp nghỉ lễ ít lưu lượng."
      },
      {
        word: "outage",
        pos: "n",
        ipa: "/ˈaʊtɪdʒ/",
        meaning: "sự cố mất điện, sập mạng hoặc gián đoạn dịch vụ hoàn toàn",
        synonyms: "downtime, blackout, service interruption",
        collocations: ["power outage", "network outage", "widespread outage"],
        mnemonic: "OUT (tắt ngấm / văng ra ngoài) + AGE => Khoảng thời gian toàn bộ server hay điện lưới tắt ngóm!",
        toeicEx: "Backup generators kept the hospital running during yesterday's three-hour power **outage**.",
        toeicVi: "Máy phát điện dự phòng đã duy trì hoạt động cho bệnh viện trong suốt sự cố mất điện ba tiếng hôm qua.",
        javaEx: "Multi-AZ deployment protected our payment API during the regional cloud **outage**.",
        javaVi: "Triển khai đa vùng khả dụng (Multi-AZ) đã bảo vệ an toàn bộ API thanh toán của chúng tôi trong đợt sập đám mây khu vực."
      },
      {
        word: "access",
        pos: "n / v",
        ipa: "/ˈækses/",
        meaning: "quyền truy cập, lối vào (danh từ đi với 'to'); truy cập dữ liệu/địa điểm (động từ không giới từ)",
        synonyms: "entry, admission; retrieve, log into",
        collocations: ["have access to", "grant access", "access files remotely"],
        mnemonic: "Nhớ khẩu quyết bất tử: `have access TO` (Danh từ có TO) ≠ `can access the DB` (Động từ KHÔNG TO)!",
        toeicEx: "Only senior accountants have **access** to the payroll database.",
        toeicVi: "Chỉ các kế toán viên cấp cao mới có quyền truy cập vào cơ sở dữ liệu bảng lương.",
        javaEx: "Contractors can **access** internal Git repositories only through a multi-factor VPN.",
        javaVi: "Các cộng tác viên bên ngoài chỉ có thể truy cập kho mã Git nội bộ thông qua mạng VPN xác thực đa lớp."
      },
      {
        word: "confidential",
        pos: "adj",
        ipa: "/ˌkɑːnfɪˈdenʃl/",
        meaning: "bí mật, tuyệt mật, chỉ lưu hành nội bộ có thẩm quyền",
        synonyms: "classified, private, secret, sensitive",
        collocations: ["strictly confidential", "confidential information", "keep confidential"],
        mnemonic: "Trong tam giác CIA của Bảo mật thông tin: **Confidentiality** (Tính bảo mật) – Integrity – Availability!",
        toeicEx: "All medical records are kept strictly **confidential** in locked cabinets.",
        toeicVi: "Tất cả hồ sơ bệnh án đều được giữ bảo mật tuyệt đối trong các tủ có khóa.",
        javaEx: "Never hardcode **confidential** API keys inside `application.yml`; inject them from Vault instead.",
        javaVi: "Tuyệt đối không viết cứng các khóa API tuyệt mật vào trong file `application.yml`; hãy tiêm chúng từ Vault."
      },
      {
        word: "unauthorized",
        pos: "adj",
        ipa: "/ʌnˈɔːθəraɪzd/",
        meaning: "trái phép, không được cấp quyền hoặc phê duyệt",
        synonyms: "unpermitted, unlicensed, illegal",
        collocations: ["unauthorized access", "unauthorized personnel", "unauthorized transaction"],
        mnemonic: "Chính là tên gọi của mã trạng thái **HTTP 401 UNAUTHORIZED** mà anh em trả về khi thiếu Bearer Token!",
        toeicEx: "**Unauthorized** vehicles parked in the loading zone will be towed at the owner's expense.",
        toeicVi: "Các phương tiện không được phép đỗ tại khu vực bốc dỡ hàng sẽ bị kéo đi với chi phí do chủ xe chịu.",
        javaEx: "Spring Security blocks **unauthorized** requests before they ever reach the controller layer.",
        javaVi: "Spring Security chặn đứng các truy vấn trái phép ngay trước khi chúng kịp chạm tới tầng controller."
      },
      {
        word: "credentials",
        pos: "n",
        ipa: "/krəˈdenʃlz/",
        meaning: "thông tin định danh đăng nhập (tài khoản/mật khẩu); hoặc giấy tờ chứng nhận năng lực",
        synonyms: "login details; qualifications, certificates",
        collocations: ["login credentials", "verify credentials", "impressive credentials"],
        mnemonic: "Interface `UserDetails / CredentialsContainer` trong Spring Security — lưu giữ mật khẩu/token xác thực!",
        toeicEx: "Employees should never share their network **credentials** over unencrypted chat.",
        toeicVi: "Nhân viên không bao giờ được chia sẻ thông tin đăng nhập mạng qua kênh trò chuyện chưa mã hóa.",
        javaEx: "Rotating database **credentials** automatically every thirty days reduces security exposure.",
        javaVi: "Xoay vòng đổi thông tin đăng nhập cơ sở dữ liệu tự động mỗi ba mươi ngày giúp giảm thiểu rủi ro lộ lọt."
      },
      {
        word: "network",
        pos: "n",
        ipa: "/ˈnetwɜːrk/",
        meaning: "hệ thống mạng máy tính; mạng lưới chi nhánh hoặc mối quan hệ nghề nghiệp",
        synonyms: "grid, web, intranet, connections",
        collocations: ["corporate network", "wireless network", "distribution network"],
        mnemonic: "Tầng NETWORK trong mô hình OSI — kết nối các máy chủ và chi nhánh thành một lưới thông suốt!",
        toeicEx: "Guests can connect to the visitor Wi-Fi **network** using the code on the whiteboard.",
        toeicVi: "Khách có thể kết nối vào mạng Wi-Fi dành cho khách bằng mã số ghi trên bảng trắng.",
        javaEx: "High **network** latency between two regions slowed down synchronous gRPC calls.",
        javaVi: "Độ trễ mạng cao giữa hai khu vực địa lý đã làm chậm các lời gọi gRPC đồng bộ."
      },
      {
        word: "storage",
        pos: "n",
        ipa: "/ˈstɔːrɪdʒ/",
        meaning: "không gian lưu trữ dữ liệu; kho cất giữ hàng hóa (danh từ không đếm được)",
        synonyms: "capacity, disk space, warehousing",
        collocations: ["cloud storage", "storage capacity", "cold storage"],
        mnemonic: "AWS S3 = Simple **STORAGE** Service — dịch vụ lưu trữ đối tượng kinh điển trên đám mây!",
        toeicEx: "Upgrading to the pro plan gives your team two terabytes of encrypted cloud **storage**.",
        toeicVi: "Nâng cấp lên gói chuyên nghiệp mang lại cho nhóm của bạn hai terabyte dung lượng lưu trữ đám mây mã hóa.",
        javaEx: "Archiving old PDF invoices to object **storage** freed up 60 percent of our primary SSD.",
        javaVi: "Lưu trữ các hóa đơn PDF cũ sang kho đối tượng đã giải phóng 60 phần trăm ổ cứng SSD chính của chúng tôi."
      },
      {
        word: "malfunctioning",
        pos: "adj",
        ipa: "/ˌmælˈfʌŋkʃənɪŋ/",
        meaning: "bị trục trặc, vận hành sai chức năng bình thường",
        synonyms: "faulty, defective, acting up, broken",
        collocations: ["malfunctioning sensor", "malfunctioning printer", "replace a malfunctioning unit"],
        mnemonic: "MAL (xấu/sai) + FUNCTIONING (chạy hàm/chức năng) => Chạy hàm ra kết quả sai loạn xạ = Trục trặc!",
        toeicEx: "Technicians were dispatched to repair a **malfunctioning** ticket machine at Central Station.",
        toeicVi: "Các kỹ thuật viên đã được cử đi sửa một máy bán vé tự động bị trục trặc tại Ga Trung tâm.",
        javaEx: "A **malfunctioning** load-balancer health check kept routing traffic to a dead instance.",
        javaVi: "Một tác vụ kiểm tra sức khỏe bị trục trặc trên bộ cân bằng tải đã liên tục điều hướng lưu lượng vào một máy ảo đã chết."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "Remote staff can **access** the intranet portal securely after entering their two-factor **credentials**.",
        vi: "Nhân viên làm việc từ xa có thể truy cập cổng nội bộ an toàn sau khi nhập thông tin xác thực hai yếu tố.",
        note: "Để ý kỹ: 'can access + the portal' (Động từ nên KHÔNG có 'to'!)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Interns are not granted **access to** **confidential** client contracts without director approval.",
        vi: "Thực tập sinh không được cấp quyền truy cập vào các hợp đồng khách hàng tuyệt mật nếu chưa có phê duyệt của giám đốc.",
        note: "Đối chiếu ngay với câu trên: 'grant access TO + Noun' (Danh từ nên BẮT BUỘC có 'to'!)."
      },
      {
        tag: "Daily Standup",
        en: "Before we **upgrade** Hibernate to 6.5, let's verify that our custom dialect is fully **compatible**.",
        vi: "Trước khi nâng cấp Hibernate lên bản 6.5, hãy kiểm tra xác nhận bộ dialect tự viết của chúng ta hoàn toàn tương thích.",
        note: "'upgrade X to [version]' + 'fully compatible'."
      },
      {
        tag: "TOEIC Part 7",
        en: "Following last night's severe storm, several suburban branches experienced a brief internet **outage**.",
        vi: "Sau cơn bão lớn đêm qua, một vài chi nhánh ngoại ô đã gặp sự cố mất mạng internet ngắn.",
        note: "'experience a brief outage' = gặp sự cố gián đoạn ngắn."
      },
      {
        tag: "Client Email",
        en: "Any attempt at **unauthorized** **access** to the payment sandbox is logged and alerted immediately.",
        vi: "Bất kỳ nỗ lực truy cập trái phép nào vào môi trường thử nghiệm thanh toán đều bị ghi nhật ký và cảnh báo tức thì.",
        note: "'unauthorized access to sth': cụm 3 từ gắn như keo sơn trong mọi tài liệu bảo mật & đề TOEIC!"
      },
      {
        tag: "Senior Java",
        en: "Our observability alerts warned us that Prometheus disk **storage** had reached 90 percent capacity.",
        vi: "Hệ thống cảnh báo giám sát đã báo cho chúng tôi biết dung lượng lưu trữ đĩa của Prometheus đã chạm ngưỡng 90%.",
        note: "'disk storage' & 'reach X% capacity' (chạm ngưỡng công suất/dung lượng)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Please disconnect the **malfunctioning** photocopier from the wall outlet until the technician arrives.",
        vi: "Vui lòng rút phích cắm chiếc máy photocopy đang trục trặc khỏi ổ điện trên tường cho đến khi kỹ thuật viên tới.",
        note: "Tính từ 'malfunctioning' bổ nghĩa cho danh từ chỉ máy móc."
      },
      {
        tag: "TOEIC Part 7",
        en: "This e-mail and any attachments contain **confidential** material intended solely for the named recipient.",
        vi: "Bức email này cùng mọi tệp đính kèm chứa tài liệu bảo mật chỉ dành riêng cho người nhận có tên.",
        note: "Câu disclaimer chân trang xuất hiện ở hàng triệu bức email doanh nghiệp toàn cầu!"
      },
      {
        tag: "Senior Java",
        en: "Container pods communicate over an isolated overlay **network** with mutual TLS enabled.",
        vi: "Các pod container giao tiếp qua một mạng phủ cô lập có bật xác thực TLS hai chiều.",
        note: "'over a network' = truyền qua mạng."
      },
      {
        tag: "Client Email",
        en: "Dr. Patel's academic **credentials** in cryptography make him an ideal advisor for our wallet project.",
        vi: "Bằng cấp chuyên môn học thuật của Tiến sĩ Patel về mật mã học khiến ông trở thành cố vấn lý tưởng cho dự án ví của chúng ta.",
        note: "Nghĩa thứ 2 rất hay thi TOEIC của 'credentials': bằng cấp, thành tích chứng minh năng lực!"
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "Developers cannot access to the production database directly. ❌",
          fix: "Developers cannot access the production database directly. (hoặc: have access to...) ✅",
          why: "Sau 'cannot' thì 'access' là ĐỘNG TỪ — ngoại động từ 'access' đi thẳng với tân ngữ, tuyệt đối KHÔNG có 'to'!"
        },
        {
          bug: "This legacy JDBC driver is not compatible to Java 21. ❌",
          fix: "This legacy JDBC driver is not compatible with Java 21. ✅",
          why: "Tính từ 'compatible' bắt buộc đi với giới từ 'WITH' ('compatible with'), không đi với 'to'!"
        },
        {
          bug: "We need to buy more cloud storages for user videos. ❌",
          fix: "We need to buy more cloud storage (hoặc storage space) for user videos. ✅",
          why: "'storage' là danh từ KHÔNG đếm được, không bao giờ có dạng số nhiều 'storages'!"
        },
        {
          bug: "Please keep the client's salary data strictly confidence. ❌",
          fix: "Please keep the client's salary data strictly confidential. ✅",
          why: "Cấu trúc 'keep + O + Adj': cần tính từ 'confidential' (tuyệt mật). 'confidence' là danh từ mang nghĩa 'sự tự tin / lòng tin'!"
        }
      ]
    },
    toeicTips: [
      "Mẹo Phản Xạ 2 Giây Ở Part 5: Thấy trước chỗ trống là tính từ 'compatible' → khoanh ngay giới từ 'with'; ngược lại thấy '_____ with the latest OS' → khoanh ngay 'compatible'!",
      "Mẹo Phân Biệt CONFIDENT vs CONFIDENTIAL (Cực hay bẫy Part 5!): 'confident' = tự tin (chỉ cảm xúc con người: 'We are confident that sales will grow'); 'confidential' = tuyệt mật (chỉ tài liệu/dữ liệu: 'confidential files / keep it confidential')!",
      "Mẹo Đọc Hiểu Part 7: Thấy 'power outage' trong thông báo nhà máy hoặc văn phòng → đáp án đúng bên dưới thường paraphrase thành 'electricity was cut off' hoặc 'loss of electrical power'."
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "unauthorized access",
          "Two-factor authentication",
          "confidential records.",
          "to",
          "prevents"
        ],
        answer: "Two-factor authentication prevents unauthorized access to confidential records.",
        vi: "Xác thực hai yếu tố giúp ngăn chặn việc truy cập trái phép vào các hồ sơ tuyệt mật."
      },
      fillBlank: {
        sentence: "Make sure your Bluetooth headset is compatible _____ the new conferencing software.",
        answer: "with",
        accepted: ["with"],
        hint: "Giới từ 4 chữ cái luôn đi kèm sau tính từ 'compatible'",
        explain: "Cấu trúc cố định 'be compatible with something' (tương thích với cái gì)."
      }
    },
    quiz: [
      {
        q: "All project proposals containing pricing strategies must remain strictly _____ until the public launch.",
        options: ["confident", "confidence", "confidential", "confidently"],
        answer: 2,
        explain: "Đáp án đúng là 'confidential' (tính từ: tuyệt mật) đứng sau động từ nối 'remain' và trạng từ 'strictly', bổ nghĩa cho chủ ngữ chỉ tài liệu 'project proposals'. Loại 'confident' (tự tin — chỉ người), 'confidence' (danh từ), 'confidently' (trạng từ)."
      },
      {
        q: "Only badge-holding technicians have _____ to the main server room on the basement level.",
        options: ["access", "outage", "storage", "upgrade"],
        answer: 0,
        explain: "Đáp án đúng là 'access' trong cụm danh từ bất biến 'have access to + địa điểm/hệ thống' (có quyền ra vào/truy cập phòng máy chủ chính)."
      },
      {
        q: "The software vendor released a patch so the accounting app would be _____ with the latest macOS update.",
        options: ["unauthorized", "malfunctioning", "compatible", "defective"],
        answer: 2,
        explain: "Đáp án đúng là 'compatible' nhờ giới từ 'with' ngay sau chỗ trống và ngữ cảnh tích cực phát hành bản vá ('compatible with the latest macOS update' = tương thích với bản cập nhật macOS mới nhất)."
      }
    ]
  },

  V2_6: {
    duration: "45 phút",
    toeicTarget: "Từ vựng Phân Loại Điểm Cao TOEIC 600–750+ (Part 5 & Part 6: Confusing Word Pairs)",
    javaContext: "Viết tài liệu kiến trúc (ADR), email cho khách hàng và trả lời phỏng vấn sắc bén không mắc các lỗi dùng từ ngô nghê như nhầm 'affect' với 'effect', 'rise' với 'raise', 'economic' với 'economical', hay 'reliable' với 'reliant'.",
    teacherIntro: "Chào mừng anh em đến với bài tổng kết Học phần V2 — cũng là một trong những bài giảng ĐẮT GIÁ NHẤT toàn khóa học! Khi bạn đã đạt khoảng 500 điểm TOEIC, thứ cản bước bạn lên 650–700+ không còn là từ mới xa lạ, mà là những 'cặp anh em song sinh giả dạng' của ETS: trông giống nhau đến 85% mặt chữ như `economic` vs `economical`, `considerable` vs `considerate`, `reliable` vs `reliant`, `rise` vs `raise`, `affect` vs `effect`, `accept` vs `except`! Chỉ cần sẩy chân một chữ cái là đi tong câu điểm vàng! Hôm nay thầy sẽ trao cho bạn bộ 'thuật toán phân biệt 1 lần nhớ suốt đời' bằng tư duy Java cực kỳ sắc gọn!",
    javaAnalogy: {
      title: "Confusing Words trong TOEIC giống hệt `final` vs `finally` vs `finalize()` hay `==` vs `.equals()` trong Java!",
      body: "Trong phỏng vấn Java, ứng viên nào nhầm `final` (hằng số/không kế thừa), `finally` (khối luôn chạy sau try-catch) và `finalize()` (hook trước GC) là rớt ngay vòng gửi xe vì nhìn mặt chữ na ná nhau nhưng ngữ nghĩa và vị trí cú pháp khác nhau một trời một vực! Tiếng Anh TOEIC Part 5 cũng vận hành y hệt như vậy: `rise` là hàm 0 tham số `price.rise()` (nội động từ), còn `raise` là hàm bắt buộc truyền tham số `company.raise(salary)` (ngoại động từ); `economic` nói về nền kinh tế vĩ mô, còn `economical` nói về thuật toán tiết kiệm RAM! Nắm rõ 'method signature' của từng từ là không đề nào bẫy nổi bạn!"
    },
    objectives: [
      "Phân biệt tức thì trong 3 giây toàn bộ 6 cặp từ dễ nhầm lẫn kinh điển nhất của đề thi TOEIC 600+.",
      "Áp dụng mẹo xét Tân ngữ phía sau để chọn đúng 100% cặp Nội động từ (rise) vs Ngoại động từ (raise) mà không cần dịch hết câu.",
      "Sử dụng chính xác sắc thái tính từ đuôi gần giống nhau (economic/economical, reliable/reliant, considerable/considerate) trong cả thi cử và viết tài liệu kỹ thuật."
    ],
    formulaCards: [
      {
        label: "Cặp Số 1 & Số 2 • AFFECT (v) vs EFFECT (n) & ACCEPT vs EXCEPT",
        formula: "AFFECT (Verb: ảnh hưởng tới = impact) ↔ EFFECT (Noun: tác động/kết quả — have an effect on) | ACCEPT (Verb: chấp nhận) ↔ EXCEPT (Prep: ngoại trừ)",
        note: "Mẹo chữ cái đầu **RAVEN**: **R**emember **A**ffect **V**erb, **E**ffect **N**oun! (Cụm đặc biệt: 'take effect' = bắt đầu có hiệu lực)."
      },
      {
        label: "Cặp Số 3 (Xét Tham Số Hàm!) • RISE (Nội Động Từ) vs RAISE (Ngoại Động Từ)",
        formula: "RISE – rose – risen + [KHÔNG có Tân ngữ] (tự tăng lên) ↔ RAISE – raised – raised + [BẮT BUỘC có Tân ngữ Noun] (nâng cái gì lên / quyên tiền / nêu câu hỏi)",
        note: "Mẹo 2 giây Part 5: Nhìn ngay sau ô trống! Thấy giới từ ('by 10% / sharply / in Q3') → chọn RISE. Thấy Cụm danh từ ('prices / salaries / funds / concerns') → chọn RAISE!"
      },
      {
        label: "Cặp Số 4 & Số 5 • ECONOMIC vs ECONOMICAL & RELIABLE vs RELIANT",
        formula: "economic (thuộc nền kinh tế) ≠ economical (tiết kiệm = cost-effective) | reliable (đáng tin cậy, ổn định) ≠ reliant ON (phụ thuộc vào = dependent on)",
        note: "Thấy giới từ 'ON / UPON' ngay sau chỗ trống → khoanh ngay 'reliant' ('heavily reliant on legacy mainframes')!"
      },
      {
        label: "Cặp Số 6 • CONSIDERABLE (Đáng Kể) vs CONSIDERATE (Chu Đáo)",
        formula: "considerable + Vật/Số lượng (đáng kể, lớn = substantial: considerable time/effort/growth) ≠ considerate + Người (chu đáo, biết nghĩ cho người khác = thoughtful)",
        note: "95% câu hỏi trong đề TOEIC thương mại hỏi về doanh số, chi phí, thời gian, nỗ lực → đáp án rơi vào 'considerable'!"
      }
    ],
    sections: [
      {
        heading: "1. Khác Biệt Về Từ Loại & Cú Pháp: Affect vs Effect | Rise vs Raise | Accept vs Except",
        paragraphs: [
          "Nhóm đầu tiên thực ra cực dễ ăn điểm vì chúng khác nhau ngay từ cấu trúc ngữ pháp (Grammar Signature) chứ chưa cần dịch sâu nghĩa tiếng Việt!",
          "Với 'affect' và 'effect': nếu câu đang thiếu Động từ chính sau chủ ngữ hay sau 'will / can / may', hãy chọn 'affect' ('Network jitter may affect video quality'). Ngược lại, nếu đứng sau mạo từ 'an / the / positive / negative', hãy chọn Danh từ 'effect' ('have a positive effect on throughput'). Tương tự, với 'accept' (động từ: nhận lời mời, chấp nhận thẻ tín dụng) và 'except' (giới từ/liên từ: ngoại trừ — 'open daily except Sunday'), chỉ cần nhìn vị trí trong câu là tách bạch 100%!"
        ],
        bullets: [
          "rise (nội động từ: `server load rose sharply` — KHÔNG bao giờ chia bị động!) vs raise (ngoại động từ: `raise the connection limit`, `raise an exception`, `raise capital` — chia bị động được: `limits were raised`).",
          "Ngoại lệ nâng cao 750+ cần biết nhẹ: cụm 'take effect' (= come into force: chính thức có hiệu lực thi hành — 'The new security policy takes effect on June 1').",
          "accept vs except: 'All major credit cards are **accepted** **except** prepaid gift cards' (Tất cả thẻ tín dụng lớn đều được chấp nhận ngoại trừ thẻ quà tặng trả trước)."
        ]
      },
      {
        heading: "2. Cặp Tính Từ Cùng Gốc Khác Nghĩa: Economic vs Economical",
        paragraphs: [
          "Cả 'economic' và 'economical' đều sinh ra từ danh từ 'economy', nhưng đi thi TOEIC mà chọn nhầm là sai hoàn toàn bản chất câu!",
          "Hãy nhớ quy tắc vàng: 'economic' (ngắn gọn hơn) mang tầm vĩ mô quốc gia, thị trường ('economic growth', 'economic downturn', 'economic policy'). Còn 'economical' (có đuôi '-ical' dài hơn như 'cost-effective') mang nghĩa TIẾT KIỆM tiền bạc, nhiên liệu, tài nguyên ('an economical hybrid car', 'a more economical way to store cold logs')."
        ],
        bullets: [
          "economic + growth / recovery / conditions / development / forecast (tăng trưởng / phục hồi / điều kiện / dự báo kinh tế).",
          "economical + vehicle / choice / heating system / use of memory (xe tiết kiệm xăng / lựa chọn kinh tế ít tốn kém / dùng bộ nhớ tiết kiệm)."
        ]
      },
      {
        heading: "3. Bản Chất Hệ Thống vs Sự Phụ Thuộc & Độ Lớn vs Lòng Người: Reliable/Reliant & Considerable/Considerate",
        paragraphs: [
          "Hai cặp tính từ cuối cùng là 'vũ khí phân loại thí sinh 650+' ưa thích nhất của ETS. Cặp 'reliable' vs 'reliant' đều xuất phát từ động từ 'rely' (dựa vào), nhưng một từ khen ngợi hệ thống chạy ngon lành đáng tin cậy ('reliable'), còn từ kia mô tả trạng thái bị lệ thuộc vào cái khác ('reliant on').",
          "Cặp 'considerable' vs 'considerate' đều xuất phát từ 'consider' (cân nhắc), nhưng 'considerable' đo lường quy mô ĐÁNG KỂ của con số/tài nguyên, còn 'considerate' khen tính cách CHU ĐÁO, ân cần của con người!"
        ],
        bullets: [
          "reliable (adj): Không cần giới từ theo sau, đứng trước danh từ ('a reliable message broker', 'reliable test suite').",
          "reliant (adj): Gần như luôn đi kèm giới từ **ON / UPON** ('Our build pipeline is overly reliant on a single external mirror').",
          "considerable (adj = significant / substantial): Đi với danh từ chỉ lượng/mức độ ('saved a considerable amount of memory', 'considerable experience in Java').",
          "considerate (adj = kind / thoughtful): Chỉ thái độ con người ('It was very considerate of my colleague to cover my on-call shift')."
        ]
      }
    ],
    vocabItems: [
      {
        word: "affect",
        pos: "v",
        ipa: "/əˈfekt/",
        meaning: "ảnh hưởng, tác động trực tiếp đến ai hoặc cái gì (Động từ)",
        synonyms: "influence, impact, alter",
        collocations: ["adversely affect", "directly affect", "affect performance"],
        mnemonic: "**A**ffect bắt đầu bằng chữ **A** = **Action** (Hành động = Động từ tác động trực tiếp không cần giới từ)!",
        toeicEx: "Rising raw material costs may **affect** retail prices in the coming months.",
        toeicVi: "Chi phí nguyên vật liệu tăng cao có thể ảnh hưởng đến giá bán lẻ trong những tháng tới.",
        javaEx: "Enabling synchronous disk flush on every message will noticeably **affect** Kafka write throughput.",
        javaVi: "Bật chế độ ghi đồng bộ xuống đĩa cứng trên từng bản tin sẽ ảnh hưởng rõ rệt đến thông lượng ghi của Kafka."
      },
      {
        word: "effect",
        pos: "n",
        ipa: "/ɪˈfekt/",
        meaning: "tác động, kết quả, hiệu ứng; sự có hiệu lực thi hành (Danh từ)",
        synonyms: "impact, result, consequence, outcome",
        collocations: ["have a positive effect on", "take effect", "go into effect", "side effect"],
        mnemonic: "Trong lập trình hàm (Functional Programming) ta luôn tránh **Side EFFECT** — hiệu ứng phụ (Danh từ)!",
        toeicEx: "The updated parking regulations will **take effect** on the first of October.",
        toeicVi: "Các quy định đỗ xe cập nhật sẽ chính thức có hiệu lực vào ngày mùng một tháng Mười.",
        javaEx: "Pure functions in Java Streams produce no side **effects** on shared mutable state.",
        javaVi: "Các hàm thuần khiết trong Java Streams không gây ra hiệu ứng phụ lên trạng thái khả biến dùng chung."
      },
      {
        word: "rise",
        pos: "v / n",
        ipa: "/raɪz/",
        meaning: "tự tăng lên, dâng lên, mọc lên (Nội động từ: rise – rose – risen)",
        synonyms: "increase, go up, climb, surge",
        collocations: ["rise sharply", "rise by 15 percent", "a steady rise in"],
        mnemonic: "Mặt trời mọc (`sunrise`) tự nó bay lên trời chẳng ai nhấc — **RISE** không bao giờ có tân ngữ đứng sau!",
        toeicEx: "Online grocery sales **rose** by twenty-five percent during the winter quarter.",
        toeicVi: "Doanh số bán hàng tạp hóa trực tuyến đã tăng hai mươi lăm phần trăm trong quý mùa đông.",
        javaEx: "CPU utilization **rose** above ninety percent when the batch export job started.",
        javaVi: "Mức sử dụng CPU đã tăng vọt lên trên chín mươi phần trăm khi tác vụ xuất dữ liệu hàng loạt bắt đầu chạy."
      },
      {
        word: "raise",
        pos: "v / n",
        ipa: "/reɪz/",
        meaning: "nâng cái gì lên, tăng (lương/giá), huy động (vốn), nêu ra (vấn đề) — Ngoại động từ; hoặc khoản tăng lương",
        synonyms: "lift, boost, elevate, bring up",
        collocations: ["raise salaries", "raise funds", "raise a question", "get a pay raise"],
        mnemonic: "Giống `raise an exception` trong Python/PL-SQL hay giơ tay `raise your hand` — **RAISE** luôn phải cầm theo một Tân ngữ!",
        toeicEx: "The startup managed to **raise** ten million dollars in its Series A funding round.",
        toeicVi: "Công ty khởi nghiệp đó đã huy động thành công mười triệu đô la trong vòng gọi vốn Series A.",
        javaEx: "Several architects **raised** valid concerns about distributed lock contention during peak hours.",
        javaVi: "Một số kiến trúc sư đã nêu lên những lo ngại xác đáng về tranh chấp khóa phân tán trong giờ cao điểm."
      },
      {
        word: "economic",
        pos: "adj",
        ipa: "/ˌiːkəˈnɑːmɪk/",
        meaning: "thuộc về nền kinh tế, thương mại vĩ mô",
        synonyms: "financial, monetary, fiscal",
        collocations: ["economic growth", "economic downturn", "economic reform"],
        mnemonic: "Đuôi ngắn `-ic` gắn với vĩ mô quốc gia: **Economic Forum** (Diễn đàn Kinh tế Thế giới)!",
        toeicEx: "Analysts remain optimistic about the region's long-term **economic** growth.",
        toeicVi: "Các nhà phân tích vẫn lạc quan về sự tăng trưởng kinh tế dài hạn của khu vực.",
        javaEx: "Despite the global **economic** slowdown, demand for senior cloud-native Java engineers stayed strong.",
        javaVi: "Bất chấp sự chững lại của nền kinh tế toàn cầu, nhu cầu tuyển kỹ sư Java đám mây cấp cao vẫn rất mạnh mẽ."
      },
      {
        word: "economical",
        pos: "adj",
        ipa: "/ˌiːkəˈnɑːmɪkl/",
        meaning: "tiết kiệm, kinh tế, ít tốn tiền bạc hoặc tài nguyên",
        synonyms: "cost-effective, thrifty, frugal, fuel-efficient",
        collocations: ["economical car", "more economical than", "economical use of space"],
        mnemonic: "ECONOMICAL = **COST-EFFECTIVE** (cùng dài và cùng mang nghĩa TIẾT KIỆM tiền/RAM/xăng)!",
        toeicEx: "Purchasing printer toner in bulk is far more **economical** for large offices.",
        toeicVi: "Mua mực máy in với số lượng lớn tiết kiệm hơn rất nhiều đối với các văn phòng quy mô lớn.",
        javaEx: "Primitive `long[]` arrays are much more **economical** with memory than `List<Long>` objects.",
        javaVi: "Mảng kiểu nguyên thủy `long[]` tiết kiệm bộ nhớ hơn nhiều so với danh sách các đối tượng đóng hộp `List<Long>`."
      },
      {
        word: "reliable",
        pos: "adj",
        ipa: "/rɪˈlaɪəbl/",
        meaning: "đáng tin cậy, vận hành ổn định đúng như kỳ vọng",
        synonyms: "dependable, trustworthy, rock-solid",
        collocations: ["reliable supplier", "reliable service", "highly reliable"],
        mnemonic: "RELY (tin cậy) + ABLE (có thể) => Hệ thống CÓ THỂ đặt trọn niềm tin (Site **Reliability** Engineering - SRE)!",
        toeicEx: "We need a **reliable** courier service for overnight medical deliveries.",
        toeicVi: "Chúng tôi cần một dịch vụ chuyển phát đáng tin cậy cho các kiện hàng y tế giao qua đêm.",
        javaEx: "TCP provides **reliable**, ordered packet delivery, whereas UDP prioritizes low overhead.",
        javaVi: "Giao thức TCP cung cấp cơ chế truyền gói tin đáng tin cậy và đúng thứ tự, trong khi UDP ưu tiên chi phí thấp."
      },
      {
        word: "reliant",
        pos: "adj",
        ipa: "/rɪˈlaɪənt/",
        meaning: "phụ thuộc vào, dựa dẫm vào (luôn đi kèm giới từ 'on' hoặc 'upon')",
        synonyms: "dependent on, counting on",
        collocations: ["heavily reliant on", "increasingly reliant on", "self-reliant"],
        mnemonic: "Thấy đuôi `-ant` giống `dependent` => **RELIANT ON** = **DEPENDENT ON** (bị phụ thuộc vào dependency bên ngoài)!",
        toeicEx: "Small island nations are heavily **reliant** on imported fuel and food.",
        toeicVi: "Các quốc đảo nhỏ phụ thuộc rất lớn vào nhiên liệu và lương thực nhập khẩu.",
        javaEx: "Avoid making core domain logic overly **reliant** on third-party framework annotations.",
        javaVi: "Hãy tránh làm logic nghiệp vụ lõi bị phụ thuộc quá mức vào các annotation của framework bên thứ ba."
      },
      {
        word: "considerable",
        pos: "adj",
        ipa: "/kənˈsɪdərəbl/",
        meaning: "đáng kể, to lớn (về số lượng, chi phí, thời gian, công sức)",
        synonyms: "substantial, significant, sizable, extensive",
        collocations: ["considerable amount of", "considerable experience", "considerable savings"],
        mnemonic: "Con số lớn đến mức ai nhìn vào cũng phải CÂN NHẮC (consider + able) => ĐÁNG KỂ, rất lớn!",
        toeicEx: "The renovation required a **considerable** investment of both time and capital.",
        toeicVi: "Đợt cải tạo đòi hỏi một khoản đầu tư đáng kể về cả thời gian lẫn nguồn vốn.",
        javaEx: "Switching to GraalVM native images yielded a **considerable** reduction in cold-start latency.",
        javaVi: "Chuyển sang biên dịch GraalVM native image đã mang lại mức giảm đáng kể về độ trễ khởi động lạnh."
      },
      {
        word: "considerate",
        pos: "adj",
        ipa: "/kənˈsɪdərət/",
        meaning: "chu đáo, ân cần, luôn để tâm nghĩ tới cảm nhận của người khác",
        synonyms: "thoughtful, attentive, courteous, kind",
        collocations: ["considerate colleague", "very considerate of you", "be considerate toward"],
        mnemonic: "Đuôi `-ate` như `affectionate` (tình cảm) => Người đồng nghiệp tâm lý, viết tài liệu rõ ràng vì nghĩ cho người đọc sau!",
        toeicEx: "It was very **considerate** of Ms. Park to arrange vegetarian meals for the guests.",
        toeicVi: "Bà Park thật vô cùng chu đáo khi đã thu xếp các suất ăn chay cho khách mời.",
        javaEx: "Writing clear PR descriptions with screenshots is a **considerate** habit that saves reviewers hours.",
        javaVi: "Viết mô tả PR rõ ràng kèm ảnh chụp màn hình là một thói quen chu đáo giúp người review tiết kiệm hàng giờ đồng hồ."
      }
    ],
    examples: [
      {
        tag: "TOEIC Part 5",
        en: "The museum is open every day of the year **except** New Year's Day, and it **accepts** mobile payments.",
        vi: "Bảo tàng mở cửa tất cả các ngày trong năm ngoại trừ Tết Dương lịch, và nơi đây chấp nhận thanh toán di động.",
        note: "Phân biệt trọn vẹn trong 1 câu: 'except' (giới từ: ngoại trừ) vs 'accepts' (động từ: chấp nhận)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Landlords must give thirty days' notice before **raising** monthly rent.",
        vi: "Chủ nhà phải báo trước ba mươi ngày trước khi tăng tiền thuê nhà hàng tháng.",
        note: "Phía sau có tân ngữ 'monthly rent' nên bắt buộc chọn 'raising' (KHÔNG chọn 'rising'!)."
      },
      {
        tag: "Senior Java",
        en: "Garbage collection pause times had a noticeable **effect** on tail latency, **affecting** 2% of requests.",
        vi: "Thời gian dừng thu gom rác đã gây ra tác động đáng chú ý lên độ trễ đuôi, làm ảnh hưởng tới 2% lượng truy vấn.",
        note: "'a noticeable effect on' (Noun) đối sánh trực tiếp với 'affecting 2%...' (Verb V-ing rút gọn)."
      },
      {
        tag: "TOEIC Part 7",
        en: "Because the company is heavily **reliant on** overseas suppliers, shipping delays pose a serious risk.",
        vi: "Vì công ty phụ thuộc nặng nề vào các nhà cung cấp nước ngoài, việc trễ tàu hàng tạo ra rủi ro nghiêm trọng.",
        note: "'be heavily reliant on + Noun' = phụ thuộc lớn vào cái gì."
      },
      {
        tag: "Daily Standup",
        en: "Refining the SQL join saved a **considerable** amount of database CPU during morning peak traffic.",
        vi: "Tinh chỉnh phép nối bảng SQL đã tiết kiệm một lượng đáng kể tài nguyên CPU cơ sở dữ liệu trong giờ cao điểm sáng.",
        note: "'a considerable amount of + danh từ không đếm được' (= a substantial amount of)."
      },
      {
        tag: "Client Email",
        en: "Deploying serverless functions for nightly reports is more **economical** than keeping two servers idle all day.",
        vi: "Triển khai các hàm serverless cho báo cáo đêm tiết kiệm chi phí hơn so với việc nuôi hai máy chủ chạy không tải cả ngày.",
        note: "'more economical than...' (= more cost-effective than)."
      },
      {
        tag: "TOEIC Part 5",
        en: "Despite challenging **economic** conditions, the software division posted record operating profits.",
        vi: "Bất chấp điều kiện kinh tế đầy thách thức, mảng phần mềm vẫn ghi nhận lợi nhuận hoạt động kỷ lục.",
        note: "'economic conditions' (bối cảnh nền kinh tế nói chung — dùng economic, không dùng economical)."
      },
      {
        tag: "Senior Java",
        en: "PostgreSQL has proven to be an extremely **reliable** primary datastore for our core ledger.",
        vi: "PostgreSQL đã chứng minh là kho dữ liệu chính cực kỳ đáng tin cậy cho sổ cái lõi của chúng tôi.",
        note: "'an extremely reliable + danh từ chỉ hệ thống/đối tác'."
      },
      {
        tag: "TOEIC Part 7",
        en: "After fuel prices **rose** sharply in May, several regional carriers introduced a temporary surcharge.",
        vi: "Sau khi giá nhiên liệu tăng mạnh vào tháng Năm, một số hãng vận tải khu vực đã áp dụng phụ phí tạm thời.",
        note: "Sau chỗ trống là trạng từ 'sharply' (không có tân ngữ) → dùng quá khứ của 'rise' là 'rose'!"
      },
      {
        tag: "Client Email",
        en: "Thank you for being so **considerate** of our timezone difference when scheduling the architecture review.",
        vi: "Cảm ơn bạn đã hết sức chu đáo để ý tới chênh lệch múi giờ của chúng tôi khi xếp lịch buổi duyệt kiến trúc.",
        note: "'considerate of + điều gì / người nào' = tâm lý, biết nghĩ cho người khác."
      }
    ],
    mistakesTable: {
      title: "Nhầm Lẫn Từ Vựng Thường Gặp (Bug ❌ vs Fix ✅)",
      rows: [
        {
          bug: "High memory pressure can effect JVM throughput severely. ❌",
          fix: "High memory pressure can affect JVM throughput severely. ✅",
          why: "Sau động từ khuyết thiếu 'can' cần ĐỘNG TỪ nguyên mẫu mang nghĩa 'ảnh hưởng tới' → phải dùng 'affect' (chữ A), không dùng danh từ 'effect'!"
        },
        {
          bug: "The cloud provider rose its bandwidth pricing by 10% this year. ❌",
          fix: "The cloud provider raised its bandwidth pricing by 10% this year. ✅",
          why: "Phía sau có tân ngữ 'its bandwidth pricing' (tăng cái gì lên) → bắt buộc dùng ngoại động từ 'raised'! ('rose' là quá khứ của nội động từ 'rise' không nhận tân ngữ)."
        },
        {
          bug: "Compressing JSON payloads with Gzip is an economic way to save bandwidth. ❌",
          fix: "Compressing JSON payloads with Gzip is an economical way to save bandwidth. ✅",
          why: "Mang nghĩa 'cách làm TIẾT KIỆM băng thông' phải dùng 'economical'! 'economic' chỉ dùng khi nói về nền kinh tế vĩ mô."
        },
        {
          bug: "Our legacy monolith spent considerate time starting up on cold boot. ❌",
          fix: "Our legacy monolith spent considerable time starting up on cold boot. ✅",
          why: "Bổ nghĩa cho 'time' với nghĩa 'một lượng thời gian ĐÁNG KỂ / LỚN' phải dùng 'considerable'! 'considerate' là tính cách chu đáo của con người."
        }
      ]
    },
    toeicTips: [
      "Thuật Toán 2 Giây Cho Cặp RISE vs RAISE Ở Part 5: Đừng dịch vội! Chỉ cần nhìn từ đứng NGAY SAU ô trống: nếu là Mạo từ/Tính từ sở hữu/Danh từ ('the price / our budget / awareness') → 100% chọn họ từ RAISE; nếu là Giới từ/Trạng từ/Dấu chấm ('by 5% / steadily / .') → 100% chọn họ từ RISE (hoặc bị động 'be raised')!",
      "Thuật Toán 2 Giây Cho Cặp RELIABLE vs RELIANT: Nhìn sau ô trống có chữ 'ON' hoặc 'UPON' không? Có 'on/upon' → chọn 'reliant' (phụ thuộc vào); đứng ngay trước danh từ ('a _____ system') → chọn 'reliable' (đáng tin cậy)!",
      "Thuật Toán 2 Giây Cho Cặp CONSIDERABLE vs CONSIDERATE: Trừ khi câu đang khen ngợi tấm lòng tử tế của một cá nhân ('very considerate of her'), còn lại 95% câu TOEIC đi với 'amount / effort / growth / delay / savings / experience' đều chọn 'considerable'!"
    ],
    miniDrill: {
      sentenceOrder: {
        prompt: "Sắp xếp các cụm từ sau thành câu hoàn chỉnh:",
        chunks: [
          "saved our team",
          "Choosing an economical",
          "a considerable amount",
          "cloud storage tier",
          "of money."
        ],
        answer: "Choosing an economical cloud storage tier saved our team a considerable amount of money.",
        vi: "Lựa chọn phân tầng lưu trữ đám mây tiết kiệm đã giúp đội ngũ chúng tôi tiết kiệm được một khoản tiền đáng kể."
      },
      fillBlank: {
        sentence: "Because our analytics pipeline is heavily _____ on external APIs, we added local caching.",
        answer: "reliant",
        accepted: ["reliant", "dependent"],
        hint: "Tính từ bắt đầu bằng 'rel...', đi kèm giới từ 'on' mang nghĩa phụ thuộc vào",
        explain: "Dấu hiệu quyết định là giới từ 'on' ngay sau chỗ trống: 'heavily reliant on external APIs' (phụ thuộc nhiều vào các API bên ngoài)."
      }
    },
    quiz: [
      {
        q: "Management decided to _____ the travel meal allowance for engineers working onsite in Tokyo.",
        options: ["rise", "risen", "raise", "arising"],
        answer: 2,
        explain: "Đáp án đúng là 'raise' (ngoại động từ nguyên mẫu sau 'decided to': tăng mức phụ cấp ăn uống công tác). Dấu hiệu quyết định là cụm danh từ làm tân ngữ 'the travel meal allowance' đứng ngay phía sau. 'rise / risen / arising' đều là nội động từ không nhận tân ngữ!"
      },
      {
        q: "Installing smart thermostats proved to be an _____ method of reducing the building's winter heating bills.",
        options: ["economic", "economical", "economist", "economy"],
        answer: 1,
        explain: "Đáp án đúng là 'economical' (tính từ: tiết kiệm chi phí = cost-effective), bổ nghĩa cho danh từ 'method' với mục đích giảm hóa đơn sưởi ấm mùa đông. Loại 'economic' (thuộc nền kinh tế vĩ mô), 'economist' (nhà kinh tế học), 'economy' (nền kinh tế)."
      },
      {
        q: "The software update achieved a _____ improvement in battery life across all supported tablet models.",
        options: ["considerate", "considerable", "considerably", "consideration"],
        answer: 1,
        explain: "Đáp án đúng là 'considerable' (tính từ: đáng kể, lớn), đứng giữa mạo từ 'a' và danh từ 'improvement' (sự cải thiện đáng kể về thời lượng pin). Loại 'considerate' (chu đáo — chỉ tính cách người), 'considerably' (trạng từ), 'consideration' (danh từ)."
      }
    ]
  }
});
