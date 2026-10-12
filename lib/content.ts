import {
  BadgeCheck,
  BookX,
  BriefcaseBusiness,
  Cpu,
  Crown,
  Droplet,
  Flower,
  Gem,
  Hand,
  HandHeart,
  Infinity as InfinityIcon,
  Leaf,
  Microscope,
  Moon,
  Package,
  Rocket,
  ShieldAlert,
  Sparkle,
  Store,
  Sun,
  TrendingUp,
  UserX,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const HOTLINE = "1900 6868";
export const HOTLINE_TEL = "tel:19006868";
export const EMAIL = "tuvan@aura-academy.vn";
export const ADDRESS = "123 Nguyễn Đình Chiểu, Phường Xuân Hòa, TP. Hồ Chí Minh";

/** Ngày khai giảng – cũng là hạn chót của ưu đãi */
export const DEADLINE = "2026-12-08T00:00:00+07:00";
export const OPENING_DATE_LABEL = "08/12/2026";

export const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop`;

export const navLinks = [
  { href: "#giai-phap", label: "Khóa học" },
  { href: "#loi-ich", label: "Lợi ích" },
  { href: "#lo-trinh", label: "Lộ trình" },
  { href: "#danh-gia", label: "Đánh giá" },
  { href: "#hoc-phi", label: "Học phí" },
  { href: "#faq", label: "Hỏi đáp" },
];

type IconItem = { icon: LucideIcon; title: string; text: string };

export const problems: IconItem[] = [
  { icon: BookX, title: "Học lý thuyết suông", text: "Học xong vẫn run tay khi chạm vào khách, vì trung tâm chỉ cho thực hành trên mô hình vài buổi." },
  { icon: ShieldAlert, title: "Sợ làm hỏng da khách", text: "Không hiểu cấu trúc da, không biết phân loại da và chọn hoạt chất, dễ gây kích ứng, mất uy tín." },
  { icon: Wallet, title: "Thu nhập bấp bênh", text: "Làm kỹ thuật viên nhiều năm nhưng lương vẫn dậm chân tại chỗ vì thiếu chứng chỉ và tay nghề nâng cao." },
  { icon: Cpu, title: "Công nghệ thay đổi quá nhanh", text: "Máy móc, liệu trình mới ra liên tục, kiến thức cũ nhanh chóng lỗi thời nếu không được cập nhật." },
  { icon: Store, title: "Muốn mở spa nhưng mù mờ", text: "Không biết chọn mặt bằng, định giá dịch vụ, tuyển nhân sự hay tìm khách hàng đầu tiên ở đâu." },
  { icon: UserX, title: "Không có người dẫn dắt", text: "Tự học qua mạng rời rạc, gặp ca khó không biết hỏi ai, học xong không ai hỗ trợ việc làm." },
];

export const features: IconItem[] = [
  { icon: HandHeart, title: "Thực hành 1 kèm 4", text: "Mỗi giảng viên chỉ hướng dẫn tối đa 4 học viên." },
  { icon: Microscope, title: "Nền tảng da liễu", text: "Hiểu sâu cấu trúc da, hoạt chất và cơ chế tác động." },
  { icon: Zap, title: "Công nghệ 2026", text: "RF, HIFU, Hydrafacial, soi da AI và laser không xâm lấn." },
  { icon: BadgeCheck, title: "Chứng chỉ nghề", text: "Có giá trị toàn quốc, đủ điều kiện hành nghề." },
  { icon: Package, title: "Bộ dụng cụ cá nhân", text: "Tặng kèm bộ dụng cụ và mỹ phẩm thực hành." },
  { icon: InfinityIcon, title: "Hỗ trợ trọn đời", text: "Học lại miễn phí, cộng đồng cựu học viên 5.000+." },
];

export const benefits: (IconItem & { variant: "amethyst" | "orchid" | "glass"; span: string })[] = [
  { icon: TrendingUp, title: "Thu nhập tăng gấp 2–3 lần", text: "Mức lương khởi điểm của học viên tốt nghiệp từ 12–20 triệu/tháng, chưa kể hoa hồng liệu trình và tip từ khách.", variant: "amethyst", span: "lg:col-span-3" },
  { icon: Hand, title: "Tay nghề vững, tự tin với mọi ca", text: "Hơn 200 giờ thực hành trên khách thật giúp bạn xử lý tự tin từ da mụn, nám đến lão hóa.", variant: "orchid", span: "lg:col-span-3" },
  { icon: BriefcaseBusiness, title: "Việc làm được đảm bảo", text: "Giới thiệu việc làm tại hơn 120 spa, thẩm mỹ viện và phòng khám đối tác.", variant: "glass", span: "lg:col-span-2" },
  { icon: Rocket, title: "Sẵn sàng mở spa riêng", text: "Có ngay kế hoạch kinh doanh, bảng giá dịch vụ và quy trình vận hành mẫu.", variant: "glass", span: "lg:col-span-2" },
  { icon: Gem, title: "Thương hiệu cá nhân", text: "Bộ ảnh before/after chuẩn và portfolio chuyên nghiệp để thu hút khách hàng.", variant: "glass", span: "md:col-span-2 lg:col-span-2" },
];

export const modules = [
  { weeks: "Tuần 1 – 2", title: "Nền tảng Da học & Vệ sinh vô khuẩn", hours: "40 giờ · 8 buổi", lessons: ["Giải phẫu và sinh lý da, chu kỳ tái tạo tế bào", "Phân loại da, soi da và lập hồ sơ khách hàng", "Tiêu chuẩn vô khuẩn, an toàn trong spa"] },
  { weeks: "Tuần 3 – 4", title: "Chăm sóc da mặt chuyên sâu", hours: "40 giờ · 8 buổi", lessons: ["Quy trình facial chuẩn 12 bước", "Điều trị mụn, lấy nhân mụn an toàn", "Peel da sinh học, đắp mặt nạ chuyên sâu"] },
  { weeks: "Tuần 5 – 6", title: "Massage trị liệu & Body Spa", hours: "40 giờ · 8 buổi", lessons: ["Massage body Thụy Điển, đá nóng, tinh dầu", "Bấm huyệt cổ vai gáy, gội đầu dưỡng sinh", "Tẩy tế bào chết, ủ trắng toàn thân"] },
  { weeks: "Tuần 7 – 8", title: "Công nghệ thẩm mỹ không xâm lấn", hours: "40 giờ · 8 buổi", lessons: ["Vận hành máy RF, HIFU, Hydrafacial, ánh sáng sinh học", "Liệu trình trẻ hóa, nâng cơ, trị nám", "Soi da bằng AI và cá nhân hóa liệu trình"] },
  { weeks: "Tuần 9 – 10", title: "Thực tập trên khách thật", hours: "50 giờ · 10 buổi", lessons: ["Phục vụ khách thật tại hệ thống spa của AURA", "Kỹ năng tư vấn, chốt liệu trình, chăm sóc sau dịch vụ", "Xây dựng portfolio before/after cá nhân"] },
  { weeks: "Tuần 11 – 12", title: "Kinh doanh Spa & Thi chứng chỉ", hours: "30 giờ · 6 buổi", lessons: ["Lập kế hoạch mở spa, tính chi phí và định giá dịch vụ", "Marketing trên TikTok, Facebook, Zalo OA", "Thi tay nghề, nhận chứng chỉ và giới thiệu việc làm"] },
];

export const stats = [
  { value: 5000, suffix: "+", label: "Học viên tốt nghiệp" },
  { value: 98, suffix: "%", label: "Có việc làm sau khóa học" },
  { value: 120, suffix: "+", label: "Spa & TMV đối tác" },
  { value: 12, suffix: " năm", label: "Kinh nghiệm đào tạo" },
];

export const testimonials = [
  { initials: "LA", name: "Nguyễn Lan Anh", role: "Kỹ thuật viên da – TP. Hồ Chí Minh", gradient: "from-amethyst-500 to-orchid-500", quote: "Trước đây mình là nhân viên văn phòng, chưa từng cầm dụng cụ spa. Sau 12 tuần mình được nhận vào thẩm mỹ viện với mức lương 16 triệu. Điều mình thích nhất là được thực hành trên khách thật ngay từ tuần thứ 3." },
  { initials: "TH", name: "Trần Thu Hà", role: "Chủ Hà Beauty Spa – Đà Nẵng", gradient: "from-orchid-400 to-amethyst-600", featured: true, quote: "Mình học gói Chủ Spa và mở được tiệm riêng sau 4 tháng. Phần kinh doanh cực kỳ thực tế: từ cách tính giá vốn đến chạy quảng cáo. Tháng thứ 3 spa đã hòa vốn, hiện tại có 4 nhân viên." },
  { initials: "MN", name: "Lê Minh Ngọc", role: "Trưởng kỹ thuật – Hà Nội", gradient: "from-amethyst-400 to-amethyst-700", quote: "Đã làm spa 5 năm nhưng mình vẫn học thêm ở AURA để cập nhật công nghệ mới. Giảng viên tận tâm, giải thích rất kỹ cơ chế của từng hoạt chất. Thu nhập của mình tăng gần gấp đôi." },
];

export const partners: { icon: LucideIcon; name: string }[] = [
  { icon: Flower, name: "Lumière Spa" },
  { icon: Leaf, name: "Sen Việt Clinic" },
  { icon: Sparkle, name: "Orchid Beauty" },
  { icon: Droplet, name: "Aqua Derma" },
  { icon: Moon, name: "Nguyệt Spa" },
  { icon: Crown, name: "Royal Skin" },
  { icon: Sun, name: "Glow Lab" },
];

export const gallery = [
  { id: "1600334129128-685c5582fd35", alt: "Học viên thực hành massage đá nóng" },
  { id: "1616394584738-fc6e612e71b9", alt: "Khách hàng được đắp mặt nạ dưỡng da" },
  { id: "1544161515-4ab6ce6db874", alt: "Massage body bằng tinh dầu thiên nhiên" },
  { id: "1519823551278-64ac92734fb1", alt: "Kỹ thuật viên massage trị liệu vùng lưng" },
];

export const PLAN_NAMES = ["Cơ bản", "Chuyên nghiệp", "Chủ Spa"] as const;
export type PlanName = (typeof PLAN_NAMES)[number];

export const plans: {
  name: PlanName;
  tagline: string;
  oldPrice: string;
  price: string;
  installment: string;
  featured?: boolean;
  items: { text: string; included: boolean }[];
}[] = [
  {
    name: "Cơ bản",
    tagline: "Dành cho người mới bắt đầu",
    oldPrice: "12.900.000đ",
    price: "8.990.000",
    installment: "1.500.000đ",
    items: [
      { text: "Học phần 1, 2, 3 (6 tuần)", included: true },
      { text: "20 giờ thực hành trên khách thật", included: true },
      { text: "Chứng chỉ hoàn thành khóa học", included: true },
      { text: "Tham gia cộng đồng học viên", included: true },
      { text: "Công nghệ thẩm mỹ", included: false },
      { text: "Giới thiệu việc làm", included: false },
    ],
  },
  {
    name: "Chuyên nghiệp",
    tagline: "Trọn bộ kỹ năng để đi làm ngay",
    oldPrice: "26.900.000đ",
    price: "18.900.000",
    installment: "3.150.000đ",
    featured: true,
    items: [
      { text: "Toàn bộ 6 học phần (12 tuần)", included: true },
      { text: "200+ giờ thực hành trên khách thật", included: true },
      { text: "Chứng chỉ nghề có giá trị toàn quốc", included: true },
      { text: "Bộ dụng cụ & mỹ phẩm trị giá 3.000.000đ", included: true },
      { text: "Cam kết giới thiệu việc làm", included: true },
      { text: "Học lại miễn phí trọn đời", included: true },
    ],
  },
  {
    name: "Chủ Spa",
    tagline: "Cho người muốn tự kinh doanh",
    oldPrice: "49.900.000đ",
    price: "35.900.000",
    installment: "5.990.000đ",
    items: [
      { text: "Mọi quyền lợi gói Chuyên nghiệp", included: true },
      { text: "Mentor 1:1 trong 6 tháng", included: true },
      { text: "Tư vấn mặt bằng, thiết kế spa", included: true },
      { text: "Bộ quy trình vận hành & SOP mẫu", included: true },
      { text: "Ưu đãi nhập máy, mỹ phẩm giá sỉ", included: true },
      { text: "Hỗ trợ marketing khai trương", included: true },
    ],
  },
];

/** true = có, false = không, string = mô tả */
export const comparison: { label: string; online: boolean | string; center: boolean | string; aura: boolean | string }[] = [
  { label: "Thực hành trên khách thật", online: false, center: "5–10 giờ", aura: "200+ giờ" },
  { label: "Tỷ lệ giảng viên / học viên", online: "Không có", center: "1 : 15", aura: "1 : 4" },
  { label: "Công nghệ thẩm mỹ mới", online: false, center: "Một phần", aura: true },
  { label: "Chứng chỉ nghề", online: false, center: true, aura: true },
  { label: "Cam kết việc làm", online: false, center: false, aura: true },
  { label: "Học lại miễn phí", online: false, center: "Tính phí", aura: "Trọn đời" },
  { label: "Tổng giá trị nhận được", online: "~2.000.000đ", center: "~15.000.000đ", aura: "~45.000.000đ" },
];

export const faqs = [
  { q: "Tôi chưa có kinh nghiệm gì có học được không?", a: "Hoàn toàn được. Hơn 60% học viên của AURA bắt đầu từ con số 0. Chương trình được thiết kế đi từ nền tảng da học cơ bản, giảng viên kèm sát với tỷ lệ 1:4 nên bạn sẽ tiến bộ rất nhanh." },
  { q: "Lịch học có linh hoạt cho người đi làm không?", a: "Có. AURA mở 3 ca học: sáng (8h–11h), chiều (14h–17h) và tối (18h–21h), học 4 buổi/tuần. Bạn có thể đổi ca linh hoạt và học bù miễn phí nếu vắng." },
  { q: "Chứng chỉ của khóa học có giá trị như thế nào?", a: "Học viên hoàn thành gói Chuyên nghiệp và Chủ Spa được cấp chứng chỉ nghề có giá trị toàn quốc, đủ điều kiện hành nghề và đăng ký kinh doanh spa theo quy định." },
  { q: "Học phí có được trả góp không?", a: "Có. AURA hỗ trợ trả góp 0% lãi suất trong 6 tháng qua thẻ tín dụng hoặc công ty tài chính đối tác. Thủ tục đơn giản, chỉ cần CCCD." },
  { q: "Cam kết việc làm được thực hiện ra sao?", a: "Sau khi tốt nghiệp, phòng hỗ trợ học viên sẽ giới thiệu bạn tới tối thiểu 3 buổi phỏng vấn tại hệ thống hơn 120 spa, thẩm mỹ viện và phòng khám đối tác cho đến khi bạn nhận được việc." },
  { q: "Chính sách hoàn tiền áp dụng thế nào?", a: "Trong 7 ngày đầu tiên kể từ ngày khai giảng, nếu bạn muốn dừng học, chỉ cần gửi yêu cầu cho phòng đào tạo. AURA hoàn 100% học phí trong vòng 5 ngày làm việc." },
];

export const footerColumns = [
  {
    title: "Khóa học",
    links: [
      { href: "#lo-trinh", label: "Chăm sóc da" },
      { href: "#lo-trinh", label: "Massage trị liệu" },
      { href: "#lo-trinh", label: "Công nghệ thẩm mỹ" },
      { href: "#lo-trinh", label: "Kinh doanh spa" },
    ],
  },
  {
    title: "Về AURA",
    links: [
      { href: "#giai-phap", label: "Giới thiệu" },
      { href: "#danh-gia", label: "Học viên tiêu biểu" },
      { href: "#hoc-phi", label: "Học phí" },
      { href: "#faq", label: "Câu hỏi thường gặp" },
    ],
  },
];
