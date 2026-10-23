export const metadata = {
  title: '紫墨數字風水 · 彭品心',
  description: '官方網站',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
