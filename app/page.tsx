"use client";

import React from 'react';
import { Cpu, Zap, Star, Shield, Smartphone, Terminal, ChevronRight } from 'lucide-react';

/**
 * TICK._ Protocol - Official Landing Page
 * Re-engineered for 2026 Deployment
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-black text-black text-xs">T</div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">TICK.<span className="text-blue-500 animate-pulse">_</span></span>
        </div>
        <div className="hidden md:flex space-x-10 text-[9px] tracking-[0.3em] font-bold uppercase text-zinc-500">
          <span className="hover:text-blue-400 cursor-pointer transition">SYSTEM_OS</span>
          <span className="hover:text-blue-400 cursor-pointer transition">UPGRADES
