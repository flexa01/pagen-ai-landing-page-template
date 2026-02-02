import React from 'react';
import { Terminal, Cpu, Zap, Star, Shield, Smartphone, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-mono selection:bg-blue-500/30">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-black text-black">T</div>
          <span className="text-2xl font-black tracking-tighter text-white">TICK.<span className="text-blue-500">_</span></span>
        </div>
        <div className="hidden md:flex space-x-10 text-[11px] tracking-[0.2em] font-bold uppercase text-zinc-500">
          <a href="#protocol" className="hover:text-blue-400 transition">Protocol</a>
          <a href="#upgrades" className="hover:text-blue-400 transition">Upgrades</a>
          <a href="#security" className="hover:text-blue-400 transition">Security</a>
          <button className="text-white border border-white/20 px-4 py-1 hover:bg-white hover:text-black transition">LAUNCH_BETA</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-24 pb-32">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-blue-400 text-xs font-bold">
              <Terminal size={14} />
              <span className="tracking-[0.3em] uppercase underline underline-offset-4">Mission_Control_Prioritize()</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter text-white">
              MASTER YOUR DAY.<br />
              <span className="text-zinc-500">EARN YOUR UPGRADES.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-sans">
              The ultra-lightweight task protocol for maximum productivity. Complete tasks, earn points, and customize your OS-level interface.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition flex items-center justify-center group">
                GET_TICKO_BETA <ChevronRight className="ml-2 group-hover:translate-x-1 transition" size={16} />
              </button>
              <div className="flex items-center space-x-3 px-6 py-4 border border-white/10 text-xs font-mono">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-zinc-500 uppercase tracking-widest
