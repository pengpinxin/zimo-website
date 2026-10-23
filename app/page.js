// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1612] text-[#f4ecd8] font-serif selection:bg-[#d4af37] selection:text-[#1a1612]">
      
      {/* 頂部導覽列 */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-[#3e352b] bg-[#1a1612]/95 sticky top-0 z-50 backdrop-blur">
        <div className="text-base sm:text-xl font-bold tracking-widest text-[#d4af37]">
          品心書閣 & 紫墨禪音
        </div>
        <div className="hidden md:flex space-x-4 text-xs sm:text-sm text-[#d1c7bd]">
          <Link href="#sec1" className="hover:text-[#d4af37] transition">首頁</Link>
          <Link href="#sec2" className="hover:text-[#d4af37] transition">VIP會員</Link>
          <Link href="#sec3" className="hover:text-[#d4af37] transition">品牌文宣</Link>
          <Link href="#sec4" className="hover:text-[#d4af37] transition">文學書籍</Link>
          <Link href="#sec5" className="hover:text-[#d4af37] transition">數字風水</Link>
          <Link href="#sec6" className="hover:text-[#d4af37] transition">禪意音樂</Link>
          <Link href="#sec7" className="hover:text-[#d4af37] transition">AI文創</Link>
          <Link href="#sec9" className="hover:text-[#d4af37] transition">聯絡我們</Link>
        </div>
      </nav>

      {/* 一區：首頁圖與品牌主標 */}
      <section id="sec1" className="w-full bg-[#1a1612] py-8 px-4 flex flex-col items-center justify-center">
        <div className="max-w-5xl w-full mx-auto rounded-xl overflow-hidden shadow-2xl border border-[#3e352b] bg-[#241f18]">
          <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] bg-[#1a1612]">
            <Image
              src="/1000052070_2.png"
              alt="獨品禪香 - 品心書閣 & 紫墨禪音"
              fill
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-8 text-center bg-[#241f18]">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-widest mb-3 text-[#d4af37]">
              品心書閣 & 紫墨禪音
            </h1>
            <p className="text-sm sm:text-base text-[#d1c7bd] tracking-wide">
              紫墨數字風水 · 彭品心 官方網站
            </p>
          </div>
        </div>
      </section>

      {/* 二區：VIP會員加入及說明 */}
      <section id="sec2" className="w-full bg-[#16130f] py-12 px-4 border-t border-[#3e352b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-bold text-[#d4af37] tracking-wider mb-2">
              VIP 會員尊榮禮遇與服務說明
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c7bd]">
              簡單便捷的購書與諮詢通道，結合專屬信箱與綠界金流，為您打造尊榮流暢的體驗。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-[#241f18] border border-[#3e352b]">
              <h3 className="text-lg font-bold text-[#d4af37] mb-3">💎 VIP 快速通道</h3>
              <p className="text-xs sm:text-sm text-[#d1c7bd] leading-relaxed">
                無需繁瑣密碼登入，採用訪客快速結帳與 Email 智能綁定。購買書籍或預約命理諮詢後，系統與專人將第一時間為您提供一對一尊榮服務。
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#241f18] border border-[#3e352b]">
              <h3 className="text-lg font-bold text-[#d4af37] mb-3">🛡️ 傳承與交接保障</h3>
              <p className="text-xs sm:text-sm text-[#d1c7bd] leading-relaxed">
                網站具備高度模組化與簡潔架構，未來可輕鬆透過手機與信箱無縫交接，讓美學與智慧永續流傳。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 三區：品牌文宣文（精美雜誌排版與橫幅） */}
      <section id="sec3" className="w-full bg-[#1a1612] py-16 px-4 border-t border-[#3e352b]">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* 橫幅圖片展示 */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-[#3e352b] bg-[#241f18]">
            <div className="relative w-full aspect-[3/4] sm:aspect-[16/10] bg-[#1a1612]">
              <Image
                src="/1000052053_2.jpg"
                alt="彭品心好書推薦 - 品牌文宣"
                fill
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* 精美文宣文章排版 */}
          <div className="p-8 sm:p-12 rounded-xl bg-[#241f18] border border-[#3e352b] shadow-2xl text-[#f4ecd8]">
            
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-widest text-[#d4af37] leading-tight">
                尋一方心靈庇護所<br />開一條順遂人生路
              </h2>
              <div className="w-16 h-0.5 bg-[#d4af37] mx-auto mt-4"></div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#d1c7bd] leading-loose font-serif text-justify">
              <p className="indent-8">
                喧囂的世間，每個人都在找尋安放靈魂的角落。
              </p>
              <p className="indent-8">
                老師十歲繼承家祖爺爺精準測字絕學，傾於一生對數字、文學、玄學、及各學術類的興趣，藏拙於一身靈性與道行，歷經幾十載世俗的考驗，她清雅脫俗地出落在紅塵萬里天地之間，悉心等待著為值得的人送去福音，將她畢生的學術研究成果，盡心耕織於人類與環境實際需求，廣結善緣、讓福音傳遍千里之外，讓靈慧助人於無形之中。
              </p>
              <p className="indent-8">
                作為一名學術創作者，我透過文字探索思維與文學的邊界。從著作《進階思維的後裔》到《生命的出口》，我試圖為在現代喧囂中迷惘的靈魂，尋找一條通往內在清明的出口；同時，我也將對自然的體悟化為古琴、竹笛與自然音律交織的禪音，搭配全權授權AI人聲及音樂，讓宇宙智慧與美妙音符、為我們洗滌日常的疲憊感、以及無意義的精神內耗，生命可貴，且要好好善待自己。
              </p>
              <p className="indent-8">
                作為數字風水的紫墨老師，我深信萬物皆數，數字不只是符號，更是宇宙自然無形磁場的密碼。多年來，我專注於數字命理與高端空間風水的研究，協助無數朋友透過手機號碼、車牌、店鋪與住址的精準配置，調整磁場、引導其自身吉運增加。
              </p>
              <p className="indent-8">
                老師也曾歷經過各種人生磨難，也曾找不到生命的出口，幸好少年遺傳家祖爺爺的測字絕學、加上父母嚴苛訓練、又承蒙各方親朋好友之庇佑，才有幸渡過各種劫數。這其中最為關鍵的二十載磨難期間，倚靠家祖遺傳的智慧，且配置了高端數字吉數，在天時、地利、人和、又加上自身五行命理數字與吉數配置的平衡調配下，逐漸蛻變、脫離苦海、並還原了本真的自身風水屬性，因為有了數字風水高端平衡調配，再加上命中吉星護佑，才孕育了今天的品心&紫墨。
              </p>
              <p className="indent-8 font-semibold text-[#d4af37]">
                為感恩之心、為還宇宙潤澤我能活下去的恩澤，我將用重生的機會去做最有意義的事情，那就是將家祖爺爺賜予我的智慧，以及我後天所學布施於苦難的人間，願以我之願力，換取眾生之福祉。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 四區：書籍購買 (統一售價 269) */}
      <section id="sec4" className="w-full bg-[#16130f] py-12 px-4 border-t border-[#3e352b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#d4af37] tracking-wider mb-2">
              文學著作典藏專區
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c7bd]">每冊優惠結緣價 NT$ 269</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 書籍 1 */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[#3e352b] bg-[#241f18] flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/10] bg-[#1a1612]">
                  <Image
                    src="/1000052228_2.jpg"
                    alt="生命的出口"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#d4af37] mb-2">《生命的出口》</h3>
                  <p className="text-xs sm:text-sm text-[#d1c7bd] mb-4">持覺定方詠，解幕歸恬澹。尋找心靈的出口，找回內在平靜。</p>
                  <div className="text-xl font-bold text-[#d4af37] mb-4">NT$ 269</div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a href="#sec9" className="block w-full py-2.5 text-center bg-[#d4af37] text-[#1a1612] text-sm font-semibold rounded hover:bg-[#c5a030] transition">
                  立即訂購《生命的出口》
                </a>
              </div>
            </div>

            {/* 書籍 2 */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[#3e352b] bg-[#241f18] flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/10] bg-[#1a1612]">
                  <Image
                    src="/1000052252_2.jpg"
                    alt="進階思維的後裔"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#d4af37] mb-2">《進階思維的後裔》</h3>
                  <p className="text-xs sm:text-sm text-[#d1c7bd] mb-4">突破既有框架，啟迪全新視野，踏上一場思維蛻變之旅。</p>
                  <div className="text-xl font-bold text-[#d4af37] mb-4">NT$ 269</div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a href="#sec9" className="block w-full py-2.5 text-center bg-[#d4af37] text-[#1a1612] text-sm font-semibold rounded hover:bg-[#c5a030] transition">
                  立即訂購《進階思維的後裔》
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 五區：紫墨數字風水六大服務 */}
      <section id="sec5" className="w-full bg-[#1a1612] py-14 px-4 border-t border-[#3e352b]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#d4af37] tracking-wider mb-2">
              先知命局 · 紫墨數字風水服務
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c7bd]">
              以紫墨之智慧，布建數字生旺吉數，為您開運納福。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 服務 1 */}
            <div className="p-6 rounded-xl bg-[#241f18] border border-[#3e352b] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#d4af37] mb-2">1. 手機號碼高配吉數</h3>
                <p className="text-xs text-[#d1c7bd] mb-4">精準磁場分析與磁場優化調配。</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#3e352b]">
                <span className="text-lg font-bold text-[#d4af37]">NT$ 1,680</span>
                <a href="#sec9" className="px-3 py-1.5 bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030]">預約</a>
              </div>
            </div>

            {/* 服務 2 */}
            <div className="p-6 rounded-xl bg-[#241f18] border border-[#3e352b] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#d4af37] mb-2">2. 車牌號碼高配吉數</h3>
                <p className="text-xs text-[#d1c7bd] mb-4">行車平安、出行順遂磁場佈局。</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#3e352b]">
                <span className="text-lg font-bold text-[#d4af37]">NT$ 2,280</span>
                <a href="#sec9" className="px-3 py-1.5 bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030]">預約</a>
              </div>
            </div>

            {/* 服務 3 */}
            <div className="p-6 rounded-xl bg-[#241f18] border border-[#3e352b] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#d4af37] mb-2">3. 住址門牌高配吉數</h3>
                <p className="text-xs text-[#d1c7bd] mb-4">居家和諧、納福聚氣風水調理。</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#3e352b]">
                <span className="text-lg font-bold text-[#d4af37]">NT$ 3,680</span>
                <a href="#sec9" className="px-3 py-1.5 bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030]">預約</a>
              </div>
            </div>

            {/* 服務 4 */}
            <div className="p-6 rounded-xl bg-[#241f18] border border-[#3e352b] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#d4af37] mb-2">4. 店鋪門牌高配吉數</h3>
                <p className="text-xs text-[#d1c7bd] mb-4">生意興隆、客源廣進旺財佈局。</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#3e352b]">
                <span className="text-lg font-bold text-[#d4af37]">NT$ 6,680</span>
                <a href="#sec9" className="px-3 py-1.5 bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030]">預約</a>
              </div>
            </div>

            {/* 服務 5 */}
            <div className="p-6 rounded-xl bg-[#241f18] border border-[#3e352b] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#d4af37] mb-2">5. 八字詳批綜合文書</h3>
                <p className="text-xs text-[#d1c7bd] mb-4">命理全局深度解析與專業文書。</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#3e352b]">
                <span className="text-lg font-bold text-[#d4af37]">NT$ 1,880</span>
                <a href="#sec9" className="px-3 py-1.5 bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030]">預約</a>
              </div>
            </div>

            {/* 服務 6 */}
            <div className="p-6 rounded-xl bg-[#241f18] border border-[#3e352b] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#d4af37] mb-2">6. 流年大運一年詳批</h3>
                <p className="text-xs text-[#d1c7bd] mb-4">掌握全年運勢走向與避險指引。</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#3e352b]">
                <span className="text-lg font-bold text-[#d4af37]">NT$ 980</span>
                <a href="#sec9" className="px-3 py-1.5 bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030]">預約</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 六區：禪意音樂 (木質火山土色包裹 YouTube 橫幅，自動播放) */}
      <section id="sec6" className="w-full bg-[#1b1511] py-14 px-4 border-t border-[#3e352b]">
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#2b221b] border-2 border-[#4a3b32] shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] tracking-widest mb-2">
              🎵 品心書閣 & 紫墨禪音 · 禪意音樂流淌
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c7bd]">
              聆聽自然與古樂交融的靈魂之音，讓心靈回歸平靜與和諧。
            </p>
          </div>
          {/* YouTube 自動播放嵌入橫幅 */}
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-inner border border-[#3e352b]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1&loop=1&playlist=5qap5aO4i9A"
              title="禪意音樂播放"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 七區：藝術AI畫既將上新 (可擴充藝廊) */}
      <section id="sec7" className="w-full bg-[#16130f] py-16 px-4 border-t border-[#3e352b]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#d4af37] tracking-wider mb-3">
              藝術 AI 畫廊 · 數位典藏即將上新
            </h2>
            <p className="text-xs sm:text-sm text-[#d1c7bd] max-w-2xl mx-auto">
              每幅定價 NT$ 680。為保護智慧財產權，網頁展示維持不可印刷性高畫質預覽像素，方便未來持續更新與無限擴充。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI 畫作 1 */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-[#3e352b] bg-[#241f18] flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/10] bg-[#1a1612]">
                  <Image
                    src="/1000052323.jpg"
                    alt="青綠山水 典藏 01"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-bold text-[#d4af37]">青綠山水 · 溪山行旅</h3>
                    <span className="text-base font-semibold text-[#d4af37]">NT$ 680</span>
                  </div>
                  <p className="text-xs text-[#d1c7bd]">高質感數位授權收藏，品味新中式禪意美學。</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a href="#sec9" className="block w-full py-2.5 text-center bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030] transition">
                  數位授權收藏
                </a>
              </div>
            </div>

            {/* AI 畫作 2 */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-[#3e352b] bg-[#241f18] flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/10] bg-[#1a1612]">
                  <Image
                    src="/1000052324.jpg"
                    alt="青綠山水 典藏 02"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base font-bold text-[#d4af37]">煙嵐曉岫 · 桃源仙境</h3>
                    <span className="text-base font-semibold text-[#d4af37]">NT$ 680</span>
                  </div>
                  <p className="text-xs text-[#d1c7bd]">高質感數位授權收藏，為您的空間增添雅致禪風。</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a href="#sec9" className="block w-full py-2.5 text-center bg-[#d4af37] text-[#1a1612] text-xs font-semibold rounded hover:bg-[#c5a030] transition">
                  數位授權收藏
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 八區：王者歸位風範結尾 */}
      <section className="w-full bg-[#1a1612] py-14 px-4 text-center border-t border-[#3e352b]">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#d4af37] text-2xl mb-3 tracking-widest">❖ ✧ ❖ ✧ ❖</div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-widest text-[#d4af37] mb-4">
            品心美學 & 紫墨禪音
          </h2>
          <p className="text-sm sm:text-base text-[#d1c7bd] tracking-wide leading-relaxed">
            書籍藝術審美與和諧一體的品心家園
          </p>
          <div className="text-[#d4af37] text-2xl mt-3 tracking-widest">❖ ✧ ❖ ✧ ❖</div>
        </div>
      </section>

      {/* 九區：聯絡方式 */}
      <section id="sec9" className="w-full bg-[#16130f] py-12 px-4 border-t border-[#3e352b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-6">官方聯絡與諮詢管道</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-[#d1c7bd] mb-8">
            <div className="p-4 rounded-lg bg-[#241f18] border border-[#3e352b]">
              <span className="block font-bold text-[#d4af37] mb-1">官方 LINE</span>
              @pinxin-zen
            </div>
            <div className="p-4 rounded-lg bg-[#241f18] border border-[#3e352b]">
              <span className="block font-bold text-[#d4af37] mb-1">FB 粉絲專頁</span>
              品心書閣 & 紫墨禪音
            </div>
            <div className="p-4 rounded-lg bg-[#241f18] border border-[#3e352b]">
              <span className="block font-bold text-[#d4af37] mb-1">Google 郵箱</span>
              service@pinxin-zen.com
            </div>
          </div>
          <p className="text-xs text-[#8c7b6b]">
            線上綠界金流系統與預約通道全面支援中，歡迎隨時與我們聯繫。
          </p>
        </div>
      <
