import './globals.css'

export const metadata = {
  title: '紫墨數字風水 · 彭品心老師官方網站',
  description: '結合數字風水、八字命理、文學創作與心靈冥想的專業諮詢平台',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="bg-paper text-ink antialiased selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  )
}
