"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigasyon */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-black text-black text-xs">T</div>
          <span className="text-xl font-black tracking-tighter text-white uppercase">TICK.<span className="text-blue-500 animate-pulse">_</span></span>
        </div>
        <div className="hidden md:flex space-x-10 text-[9px] tracking-[0.3em] font-bold uppercase text-zinc-500">
          <span>SYSTEM_OS</span>
          <span>UPGRADES</span>
          <button className="text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition duration-300">LAUNCH_BETA</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block px-3 py-1 border border-blue-400/30 bg-blue-400/5 text-blue-400 text-[9px] font-bold tracking-[0.4em] uppercase">
              Protocol: Priority_Alpha
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase">
              Master Your Day.<br />
              <span className="text-zinc-600 italic">Earn Upgrades.</span>
            </h1>

            <p className="text-base text-zinc-400 max-w-lg leading-relaxed font-sans border-l-2 border-blue-600 pl-6">
              Dünyanın en hafif görev protokolü. Tamamladığın her görev puan kazandırır, puanlar arayüzünü modifiye eder.
            </p>

            <div className="flex flex-col sm:row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-blue-600 text-white font-black text-[10px] tracking-[0.2em] hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                GET_TICKO.BETA
              </button>
              <div className="flex flex-col justify-center px-6 py-4 border border-white/10 bg-white/5">
                <span className="text-[8px] text-zinc-500 uppercase tracking-widest">Global Status</span>
                <span className="text-green-400 text-[10px] font-bold font-mono uppercase underline">327 / 1000 Slots Open</span>
              </div>
            </div>
          </div>

          {/* Telefon Mockup */}
          <div className="relative">
            <div className="relative w-[280px] h-[580px] bg-[#0a0a0a] border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-2xl p-6 space-y-8 mx-auto overflow-hidden">
              <div className="w-16 h-1 bg-zinc-800 mx-auto rounded-full mb-6"></div>
              <div className="bg-blue-600/10 border border-blue-500/20 p-4 rounded-xl">
                <p className="text-[8px] text-blue-400 font-black tracking-widest uppercase mb-2">Active_Task</p>
                <p className="text-xs font-bold text-white mb-3 uppercase">Kodlama Tamamla</p>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[65%]"></div>
                </div>
              </div>
              <div className="bg-zinc-900/50 border border-white/5 p-3 rounded-xl text-center">
                <p className="text-green-400 font-bold text-[9px] animate-bounce tracking-widest">+ 50 POINTS</p>
              </div>
            </div>
          </div>
        </div>

        {/* DNA Section */}
        <section className="mt-40 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-950 border border-white/5 hover:border-blue-500/20 transition-all">
            <div className="mb-4 text-blue-500 font-black text-xl">01</div>
            <h3 className="text-sm font-bold mb-3 uppercase tracking-tighter text-white font-mono">Micro-Core</h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans uppercase">Sadece 5.2 MB. Milisaniyelik gecikme.</p>
          </div>
          <div className="p-8 bg-zinc-950 border border-blue-500/30">
            <div className="mb-4 text-purple-500 font-black text-xl">02</div>
            <h3 className="text-sm font-bold mb-3 uppercase tracking-tighter text-white font-mono">Gamified</h3>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-sans uppercase">Görevler puana, puanlar ödüle dönüşür.
