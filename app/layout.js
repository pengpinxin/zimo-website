import "./globals.css";

export const metadata = {
  title: "紫墨數字風水 · 彭品心老師官方網站",
  description: "官方網站建置中",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
