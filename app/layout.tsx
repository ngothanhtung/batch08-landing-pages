import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "animate.css";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AURA Academy – Khóa học Chuyên viên Spa & Thẩm mỹ Chuyên nghiệp",
  description:
    "Khóa học Spa & Thẩm mỹ thực chiến 12 tuần: chăm sóc da chuyên sâu, massage trị liệu, công nghệ thẩm mỹ và kỹ năng mở spa. Cấp chứng chỉ, hỗ trợ việc làm trọn đời.",
};

export const viewport: Viewport = {
  themeColor: "#0b0714",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
