import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-500">TICK.</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition">Özellikler</a>
          <a href="#gamification" className="hover:text-white transition">Puan Sistemi</a>
          <button className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-gray-200 transition">
            Play Store
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase">
          Yeni Nesil Hatırlatıcı
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-tight">
          Başar, Kazan, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Modifiye Et.
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          AI kadar akıllı değil ama ondan çok daha hafif. Görevlerini tamamla, puanları topla ve arayüzünü kendi tarzına göre tasarla.
        </p>

        {/* Play Store Preview */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-left space-y-4">
                <div className="text-blue-500 text-3xl font-bold">01</div>
                <h3 className="text-lg font-bold">Ultra Hafif</h3>
                <p className="text-sm text-gray-500">Sadece 5MB. Telefonunu yormaz, pilini harcamaz.</p>
              </div>
              {/* Feature 2 */}
              <div className="text-left space-y-4">
                <div className="text-blue-500 text-3xl font-bold">02</div>
                <h3 className="text-lg font-bold">+50 Puan</h3>
                <p className="text-sm text-gray-500">Her hatırlatıcıyı başarıyla tamamladığında puan kazanırsın.</p>
              </div>
              {/* Feature 3 */}
              <div className="text-left space-y-4">
                <div className="text-blue-500 text-3xl font-bold">03</div>
                <h3 className="text-lg font-bold">Modifiye</h3>
                <p className="text-sm text-gray-500">Puanlarınla yeni temalar, sesler ve ikonlar açabilirsin.</p>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <p className="text-sm text-zinc-500 mb-4 font-mono">2026 ROADMAP // GOOGLE PLAY COMING SOON</p>
              <div className="flex justify-center space-x-4 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-900 text-center text-zinc-600 text-xs">
        <p>&copy; 2026 TICK. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
