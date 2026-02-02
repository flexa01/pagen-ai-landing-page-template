"use client";

import React from 'react';

/**
 * TICK._ Core Interface
 * Optimized for 2026 Deployment
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e7eb] font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Artifacts */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-black text-black">T</div>
          <span className="text-2xl font-black tracking-tighter text-white">TICK.<span className="text-blue-500 underline animate-pulse">_</span></span>
        </div>
        <div className="hidden md:flex space-x-10 text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">
          <span className="hover:text-blue-400 cursor-pointer transition">SYSTEM_OS</span>
          <span className="hover:text-blue-400 cursor-pointer transition">UPGRADES</span>
          <button className="text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition duration-300">LAUNCH_BETA</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-24 pb-32">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="flex items-center space-x-3 text-blue-400 text-[10px] font-bold tracking-[0.4em] uppercase">
              <span className="px-2 py-1 border border-blue-400/30 bg-blue-400/5">Protocol: Priority_Alpha</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white uppercase">
              MASTER YOUR DAY.<br />
              <span className="text-zinc-600 italic">EARN YOUR UPGRADES.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-sans border-l-2 border-blue-600 pl-6">
              Dünyanın en hafif görev protokolü. Tamamladığın her görev puan kazandırır, puanlar arayüzünü modifiye etmeni sağlar.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-10 py-5 bg-blue-600 text-white font-black text-xs tracking-widest hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                GET_TICKO.BETA
              </button>
              <div className="flex flex-col justify-center px-6 py-4 border border-white/10 bg-white/5 font-mono">
                <span className="text-[9px] text-zinc-500 uppercase tracking-widest text-center sm:text-left">Global Status</span>
                <span className="text-green-400 text-xs font-bold uppercase">327 / 1000 Slots Open</span>
              </div>
            </div>
          </div>

          {/* Software Phone UI Frame */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-[300px] h-[600px] bg-[#0a0a0a] border-[10px] border-[#1a1a1a] rounded-[3.5rem] shadow-2xl p-8 space-y-8 mx-auto overflow-hidden">
              <div className="w-20 h-1.5 bg-zinc-800 mx-auto rounded-full mb-8"></div>
              
              <div className="bg-blue-600/10 border border-blue-500/20 p-5 rounded-2xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] text-blue-400 font-black tracking-widest uppercase">Task_Active</span>
                  <span className="text-[9px] text-blue-400">65%</span>
                </div>
                <p className="text-sm font-bold text-white mb-4 uppercase">Project Deployment</p>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[65%] animate-pulse"></div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl text-center">
                <p className="text-green-400 font-bold text-[10px] animate-bounce tracking-widest uppercase">+ 50 POINTS EARNED</p>
              </div>

              <div className="space-y-3 pt-4 opacity-50">
                <div className="h-12 bg-zinc-900 rounded-lg border border-white/5 flex items-center px-4 justify-between">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">Neon Skin Unlocked</span>
                </div>
                <div className="h-12 bg-zinc-900 rounded-lg border border-white/5"></div>
                <div className="h-12 bg-zinc-900 rounded-lg border border-white/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* DNA Matrix Section */}
        <section className="mt-48 space-y-16">
          <div className="text-center">
            <h2 className="text-sm font-black tracking-[0.5em] text-zinc-500 uppercase mb-4 italic font-mono">Software DNA</h2>
            <div className="h-[2px] w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-zinc-950 border border-white/5 hover:border-blue-500/40 transition-all">
