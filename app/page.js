'use client';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1614] text-[#f4eee1] font-sans">
      {/* Header / Brand Title */}
      <header className="py-8 text-center border-b border-[#3e342b] bg-[#241e19]">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-[#d4af37]">紫墨數字風水 · 彭品心</h1>
        <p className="mt-2 text-sm md:text-base text-[#b8a07e]">傳承東方智慧，解密數字磁場，引領身心靈平靜</p>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
        
        {/* 一區：品牌主視覺 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">一、 品牌主視覺與禪意空間</h2>
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img 
              src="/1792354723564.png" 
              alt="獨品禪香主視覺" 
              className="w-full h-auto object-cover max-h-[600px] mx-auto select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            在古色古香的木質書房中品茶、焚香、沉澱心靈，尋找生命的出口與進階思維的智慧。
          </p>
        </section>

        {/* 二區：數字風水與磁場解析 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">二、 數字風水與磁場解析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img 
                src="/1792526901350.jpg" 
                alt="數字磁場解析 1" 
                className="w-full h-auto object-cover rounded-lg select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img 
                src="/1792527313372.jpg" 
                alt="數字磁場解析 2" 
                className="w-full h-auto object-cover rounded-lg select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            透過精準的數字磁場分析，為您挑選吉祥手機號碼、車牌與居家風水佈局。
          </p>
        </section>

        {/* 三區：品牌創辦人與核心理念 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">三、 品牌創辦人與核心理念</h2>
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img 
              src="/1792317738179.jpg" 
              alt="品牌創辦人 彭品心 / 紫墨老師" 
              className="w-full h-auto object-cover max-h-[600px] mx-auto select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            融合文學創作與數字命理諮詢，紫墨老師帶領您探索內心深處的靈性成長。
          </p>
        </section>

        {/* 四區：暢銷著作專區 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">四、 著作展售：《生命的出口》與《進階思維的後裔》</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img 
                src="/1792440195898.jpg" 
                alt="生命的出口" 
                className="w-full h-auto object-cover rounded-lg select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img 
                src="/1792450518058.jpg" 
                alt="進階思維的後裔" 
                className="w-full h-auto object-cover rounded-lg select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            彭品心老師親著出版書籍，透過文字療癒心靈，引領讀者跨越思維界限。
          </p>
        </section>

        {/* 五區：傳統音律與冥想空間 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">五、 傳統音律與冥想空間</h2>
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img 
              src="/1791987571319.jpg" 
              alt="古琴與冥想音場" 
              className="w-full h-auto object-cover max-h-[600px] mx-auto select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            結合古箏、古琴、竹笛與自然環境音，打造沉浸式冥想聲景。
          </p>
        </section>

        {/* 六區：數字風水諮詢服務 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">六、 數字風水諮詢服務</h2>
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img 
              src="/1792361766610.png" 
              alt="諮詢服務詳情" 
              className="w-full h-auto object-cover max-h-[600px] mx-auto select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            為個人與企業提供專業數字風水吉凶剖析與改運建議。
          </p>
        </section>

        {/* 七區：東方美學 AI 藝術創作 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">七、 東方美學 AI 藝術創作</h2>
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img 
              src="/1792360264868.png" 
              alt="AI 東方美學創作" 
              className="w-full h-auto object-cover max-h-[600px] mx-auto select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <p className="mt-4 text-[#d8cca6] text-sm md:text-base leading-relaxed">
            新中式復古風情與精緻墨寶設計，呈現獨特東方韻味。
          </p>
        </section>

        {/* 八區：完整視覺與靈性圖庫精選 */}
        <section className="bg-[#241e19] p-6 rounded-2xl border border-[#3e342b] shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#d4af37] border-l-4 border-[#d4af37] pl-3">八、 完整視覺與靈性圖庫精選</h2>
          <p className="text-[#d8cca6] text-sm mb-6">以下展示您上傳的所有珍貴圖像與素材，無論在手機或電腦版皆能完整瀏覽：</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl shadow-md border border-[#3e342b]">
              <img 
                src="/1791989837978.jpg" 
                alt="精選圖庫 1" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md border border-[#3e342b]">
              <img 
                src="/1791989733237.jpg" 
                alt="精選圖庫 2" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-md border border-[#3e342b]">
              <img 
                src="/1792175800047.jpg" 
                alt="精選圖庫 3" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 select-none" 
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 text-center border-t border-[#3e342b] bg-[#241e19] text-[#b8a07e] text-sm">
        <p>© 2026 紫墨數字風水 · 彭品心 版權所有</p>
      </footer>
    </main>
  );
}
