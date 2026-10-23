'use client';
import { useState } from 'react';
import { ShoppingCart, Crown, Menu, X, ChevronDown, ChevronUp, Sparkles, BookOpen, Compass, Music, Send, CheckCircle } from 'lucide-react';

export default function Home() {
  const [isVIP, setIsVIP] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', email: '', birth: '', service: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 1, name: "手機號碼開運配置", price: 1680, vipPrice: 1480, desc: "精選 3-5 組吉祥數字磁場，助您事業、財運與貴人運勢節節高升。" },
    { id: 2, name: "車牌號碼吉凶配置", price: 2280, vipPrice: 1980, desc: "行車平安、磁場護佑，為您的每一趟旅程注入平穩吉祥能量。" },
    { id: 3, name: "住宅位址磁場解析", price: 3600, vipPrice: 3280, desc: "居家門牌與空間磁場深度調理，安頓身心、家運昌隆。" },
    { id: 4, name: "店鋪位址財位配置", price: 5800, vipPrice: 5200, desc: "商機匯聚、客源綿延，精準佈局店鋪磁場以迎財納福。" },
    { id: 5, name: "專業解鎖八字批算", price: 1880, vipPrice: 1680, desc: "含婚姻、事業、財運、個性及注意方向，為您解開命理迷津。" }
  ];

  const books = [
    { id: 'b1', title: "《生命的出口》", author: "彭品心 著", price: 269, vipPrice: 229, desc: "當生活窒礙難行時，引領向內探索，轉彎看見生命早已為您敞開的微光。" },
    { id: 'b2', title: "《進階思維的後裔》", author: "彭品心 著", price: 269, vipPrice: 229, desc: "打破常規思考框架的思維革新之作，助您站在至高視角主導人生棋局。" }
  ];

  const addToCart = (item) => {
    const finalPrice = isVIP ? item.vipPrice : item.price;
    setCart([...cart, { ...item, finalPrice }]);
    setIsCartOpen(true);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C221E] selection:bg-[#C5A059] selection:text-white">
      {/* 頂部導覽列 */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#C5A059]/20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#2C221E] text-[#C5A059] flex items-center justify-center font-bold text-lg border border-[#C5A059]">
              紫
            </div>
            <div>
              <div className="font-bold text-sm tracking-widest text-[#2C221E]">紫墨數字風水</div>
              <div className="text-[10px] text-[#7A6B63]">彭品心老師官方網站</div>
            </div>
          </a>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsVIP(!isVIP)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isVIP ? 'bg-[#C5A059] text-white shadow-md' : 'bg-warm text-ink border border-[#C5A059]/40 hover:bg-[#C5A059]/10'
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>{isVIP ? '已解鎖 VIP 尊榮' : 'VIP 終身解鎖'}</span>
            </button>

            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 rounded-full bg-warm border border-[#C5A059]/30 hover:bg-[#C5A059]/10 text-ink"
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero 專區 */}
      <section className="relative py-20 px-4 flex items-center justify-center bg-[#2C221E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6 z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] text-xs tracking-widest">
            ✨ 紫墨數字風水 · 彭品心老師官方網站
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider font-serif">
            紫墨數字風水
          </h1>
          <p className="text-lg md:text-xl text-warm/90 font-light max-w-2xl mx-auto leading-relaxed">
            融匯文學初心、紫墨數字風水智慧與當代數位藝術。一次付費成為終身 VIP，全站享尊榮會員價！
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsVIP(true)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#C5A059] to-[#9A7B38] text-white font-medium shadow-lg hover:opacity-90 transition"
            >
              👑 立即解鎖 NT$ 880 終身會員
            </button>
            <a
              href="#books"
              className="px-8 py-3 rounded-full bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition"
            >
              瀏覽品心書閣專區
            </a>
          </div>
        </div>
      </section>

      {/* 品心書閣專區 (心靈自述) */}
      <section id="books" className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#C5A059]/20 space-y-6">
          <div className="flex items-center space-x-2 text-[#C5A059]">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs tracking-widest uppercase font-semibold">品心書閣 · 文學初心</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-ink">
            喧囂的世間，每個人都在找尋安放靈魂的角落。
          </h2>
          <div className="text-ink/80 space-y-4 leading-relaxed text-sm md:text-base">
            <p>
              老師十歲繼承家爺爺精準測字絕學，傾於一生對數字、文學、玄學、及各學術類的興趣，藏拙於一身靈性與道行，歷經數十載世俗的考驗，她清雅脫俗地出落在紅塵萬里天地之間，悉心等待著為值得的人送去福音，將她畢生的學術研究成果，盡心耕織於人類與環境實際需求，廣結善緣、讓福音傳遍千里之外，讓靈慧助人於無形之中。
            </p>
            <p>
              作為一名學術創作者，我透過文字探索思維與文學的邊界。從著作《進階思維的後裔》到《生命的出口》，我試圖為現代喧囂中迷惘的靈魂，尋找一條通往內在清明出口；同時，我也將對大自然的體悟化為古琴、竹笛與自然音律交織的禪音，搭配全權授權 AI 人聲及音樂，讓宇宙智慧與美妙音符、為我們洗滌日常的疲憊感、以及無意義的精神內耗，生命可貴，且要好好善待自己。
            </p>
          </div>

          {/* 書籍列表 */}
          <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-[#C5A059]/20">
            {books.map((book) => {
              const currentPrice = isVIP ? book.vipPrice : book.price;
              return (
                <div key={book.id} className="bg-warm/50 p-6 rounded-xl border border-[#C5A059]/20 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-ink mb-1">{book.title}</h3>
                    <p className="text-xs text-[#C5A059] mb-3">創作者：{book.author}</p>
                    <p className="text-sm text-ink/70 mb-4">{book.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#C5A059]/20">
                    <div>
                      <span className="text-xs text-gray-400 line-through">原價 NT$ {book.price}</span>
                      <div className="text-lg font-bold text-[#C5A059]">
                        {isVIP ? 'VIP 尊榮價' : '結緣價'} NT$ {currentPrice}
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(book)}
                      className="px-4 py-2 bg-[#2C221E] text-white text-sm rounded-lg hover:bg-[#C5A059] transition"
                    >
                      結緣收藏
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 隱藏式風格 YouTube 禪音專區 */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border border-[#C5A059]/20 shadow-sm">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowYouTube(!showYouTube)}>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#C5A059]/10 rounded-full text-[#C5A059]">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-ink">紫墨禪音 · 靈魂冥想音樂專區</h3>
                <p className="text-xs text-gray-500">點擊展開 / 收合聆聽古琴與自然音律播放清單</p>
              </div>
            </div>
            <button className="p-2 text-[#C5A059]">
              {showYouTube ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {showYouTube && (
            <div className="mt-6 pt-6 border-t border-[#C5A059]/20 space-y-4">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-64 rounded-xl border border-[#C5A059]/20"
                  src="https://www.youtube.com/embed/videoseries?list=PLWCv8aarvh3s"
                  title="紫墨禪音播放清單"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xs text-center text-gray-500">
                🎵 專為心靈沉澱設計，請放鬆心情，讓音樂引領您找回內在清明。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 數字風水與八字批算諮詢服務專區 */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1 text-[#C5A059] text-xs font-semibold tracking-widest uppercase">
            <Compass className="w-4 h-4" />
            <span>先知命局 · 紫墨諮詢服務</span>
          </div>
          <h2 className="text-3xl font-bold font-serif text-ink">高端數字風水與八字命理</h2>
          <p className="text-sm text-ink/70 max-w-xl mx-auto">
            以彭品心之筆，寫下生命的出口；以紫墨之智慧，布建數字生旺吉數。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const currentPrice = isVIP ? s.vipPrice : s.price;
            return (
              <div key={s.id} className="bg-white p-6 rounded-2xl border border-[#C5A059]/30 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold font-serif text-ink">{s.name}</h3>
                    <span className="text-[10px] px-2 py-0.5 bg-[#C5A059]/10 text-[#C5A059] rounded-full">專業諮詢</span>
                  </div>
                  <p className="text-xs text-ink/70 mb-6 leading-relaxed">{s.desc}</p>
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-gray-400 line-through">原價 NT$ {s.price}</span>
                    <span className="text-xl font-bold text-[#C5A059]">
                      {isVIP ? 'VIP 價' : '結緣價'} NT$ {currentPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(s);
                      setBookingForm({ ...bookingForm, service: s.name });
                    }}
                    className="w-full py-2.5 bg-[#2C221E] text-white text-sm rounded-xl hover:bg-[#C5A059] transition flex items-center justify-center space-x-2"
                  >
                    <span>立即預約配置</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 預約與結帳表單區 */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#C5A059]/30">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-bold font-serif text-ink">預約諮詢與專屬配置表單</h2>
            <p className="text-xs text-gray-500">
              請填寫您的基本資料，填妥後老師將為您進行人工深度解析與配置。
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle className="w-16 h-16 text-[#C5A059] mx-auto" />
              <h3 className="text-xl font-bold text-ink">預約資料已成功送出！</h3>
              <p className="text-sm text-gray-600">
                感謝您的信任，我們已將確認信寄至您的 Email，並將為您準備近兩年流年運勢紙本或郵件贈禮。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 bg-[#2C221E] text-white text-sm rounded-lg"
              >
                填寫新預約
              </button>
            </div>
          ) : (
            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-ink mb-1">您的姓名</label>
                  <input
                    type="text"
                    required
                    placeholder="請輸入真實姓名"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#C5A059]/30 bg-paper text-sm focus:outline-none focus:border-[#C5A059]"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink mb-1">聯絡電話</label>
                  <input
                    type="tel"
                    required
                    placeholder="請輸入手機號碼"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#C5A059]/30 bg-paper text-sm focus:outline-none focus:border-[#C5A059]"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-ink mb-1">電子信箱 (Email)</label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#C5A059]/30 bg-paper text-sm focus:outline-none focus:border-[#C5A059]"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink mb-1">生辰資訊 (年/月/日/時)</label>
                  <input
                    type="text"
                    placeholder="例如：農曆 85年 5月 12日 辰時"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#C5A059]/30 bg-paper text-sm focus:outline-none focus:border-[#C5A059]"
                    value={bookingForm.birth}
                    onChange={(e) => setBookingForm({ ...bookingForm, birth: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink mb-1">選擇諮詢項目</label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-[#C5A059]/30 bg-paper text-sm focus:outline-none focus:border-[#C5A059]"
                  value={bookingForm.service}
                  onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                >
                  <option value="">請選擇服務項目</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>{s.name} (NT$ {isVIP ? s.vipPrice : s.price})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-ink mb-1">需求備註 (選 3-5 組備選號碼 / 地址 / 需求)</label>
                <textarea
                  rows="3"
                  placeholder="請在此輸入您的備選號碼、地址或特殊需求..."
                  className="w-full px-4 py-2.5 rounded-lg border border-[#C5A059]/30 bg-paper text-sm focus:outline-none focus:border-[#C5A059]"
                  value={bookingForm.note}
                  onChange={(e) => setBookingForm({ ...bookingForm, note: e.target.value })}
                ></textarea>
              </div>

              <div className="p-3 bg-warm rounded-lg text-xs text-[#9A7B38] flex items-center space-x-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>溫馨提示：預約諮詢將免費贈送近兩年流年運勢（可選紙本寄送或 Email 傳送）。</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2C221E] text-white font-medium rounded-xl hover:bg-[#C5A059] transition flex items-center justify-center space-x-2 shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>確認提交預約與配置</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 底部 Footer */}
      <footer className="bg-[#2C221E] text-white/70 py-12 px-4 border-t border-[#C5A059]/30 text-center space-y-4">
        <div className="font-serif text-lg text-[#C5A059]">紫墨數字風水 · 彭品心老師</div>
        <p className="text-xs tracking-wider">以文學沉澱心靈，以數字風水調理磁場，為您建構安頓身心的精神殿堂。</p>
        <p className="text-[10px] text-white/40">© 2026 彭品心 / 紫墨數字風水 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
