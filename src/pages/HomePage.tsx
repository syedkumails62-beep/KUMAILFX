/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO, BINARY_PREMIUM_BUNDLE, TRADING_TECHNOLOGY_DATA } from '../data/seedData';
import { CandlestickChartVisual } from '../components/CandlestickChartVisual';
import {
  GraduationCap,
  Layers,
  TrendingUp,
  Droplet,
  Zap,
  BarChart2,
  ArrowRight,
  Youtube,
  Send,
  Instagram,
  MessageSquare,
  Clock,
  ChevronRight,
  ShieldCheck,
  PlayCircle,
  ExternalLink,
  Crown,
  Cpu,
  CheckCircle,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, course, marketAnalyses, setCurrentLessonId, totalMembersCount } = useApp();
  const [selectedConceptModal, setSelectedConceptModal] = useState<string | null>(null);

  const whatWeTeach = [
    {
      id: 'ict',
      title: 'ICT Concepts',
      icon: <Zap className="w-6 h-6 text-[#00D5FF]" />,
      shortDesc:
        'Master the algorithmic delivery of price: time-based liquidity, session killzones, and institutional expansion cycles.',
      moduleId: 'mod-3',
      lessonsCount: 12,
    },
    {
      id: 'smc',
      title: 'Smart Money Concepts',
      icon: <Layers className="w-6 h-6 text-[#1677FF]" />,
      shortDesc:
        'Deconstruct institutional order flow, inducement traps, liquidity sweeps, and the Power of 3 (AMD) framework.',
      moduleId: 'mod-4',
      lessonsCount: 6,
    },
    {
      id: 'structure',
      title: 'Market Structure',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      shortDesc:
        'Differentiate between true Break of Structure (BOS) and Change of Character (CHOCH) versus retail wick fakeouts.',
      moduleId: 'mod-2',
      lessonsCount: 6,
    },
    {
      id: 'liquidity',
      title: 'Liquidity Concepts',
      icon: <Droplet className="w-6 h-6 text-cyan-300" />,
      shortDesc:
        'Pinpoint where buy-side and sell-side stop orders accumulate and how market makers engineer exit liquidity.',
      moduleId: 'mod-3',
      lessonsCount: 12,
    },
    {
      id: 'fvg',
      title: 'Fair Value Gaps',
      icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
      shortDesc:
        'Exploit price inefficiencies, 3-candle imbalance mechanics, and the 50% Consequent Encroachment reaction zone.',
      moduleId: 'mod-3',
      lessonsCount: 12,
    },
    {
      id: 'orderflow',
      title: 'Order Flow & Risk',
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      shortDesc:
        'Track unbroken mitigation chains and protect capital with quantitative position sizing and psychological discipline.',
      moduleId: 'mod-6',
      lessonsCount: 6,
    },
  ];

  // Latest featured lessons
  const featuredLessons = [
    {
      title: 'Break of Structure (BOS) vs Liquidity Sweep',
      module: 'Module 2 — Market Structure',
      duration: '30 min',
      lessonId: 'les-2-3',
      badge: 'Core Concept',
    },
    {
      title: 'Fair Value Gap (FVG) & Consequent Encroachment',
      module: 'Module 3 — ICT Concepts',
      duration: '38 min',
      lessonId: 'les-3-6',
      badge: 'High Impact',
    },
    {
      title: 'Liquidity Sweeps & Turtle Soup Reversals',
      module: 'Module 4 — Smart Money Concepts',
      duration: '32 min',
      lessonId: 'les-4-2',
      badge: 'Execution Model',
    },
  ];

  return (
    <div className="w-full text-slate-100 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-28 border-b border-white/[0.06]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00D5FF]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#101725] border border-blue-500/30 text-xs font-mono text-cyan-300">
                <span>INSTITUTIONAL FOREX ACADEMY</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">ICT & SMC FRAMEWORKS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                TRADE WITH KNOWLEDGE.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#00D5FF] to-cyan-300">
                  UNDERSTAND THE MARKET.
                </span><br />
                BUILD YOUR EDGE.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Welcome to KUMAILFX, a professional trading education platform dedicated to helping traders understand market structure, liquidity, institutional concepts, and price action.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('academy')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1677FF] to-[#0088FF] hover:from-[#1366DB] hover:to-[#0077EE] rounded-lg transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Explore Academy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('community')}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 bg-[#101725] hover:bg-[#152033] border border-slate-700/80 hover:border-blue-500/40 rounded-lg transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Join Our Community</span>
                </button>
              </div>

              {/* Institutional Focus Pill Strip */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#00D5FF] font-bold">Focus:</span>
                  <span>Forex Majors</span>
                  <span className="text-slate-600">/</span>
                  <span>EURUSD</span>
                  <span className="text-slate-600">/</span>
                  <span>XAUUSD (Gold)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">Method:</span>
                  <span>Pure Price Action & ICT</span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Portrait & Candlestick Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative group">
                {/* Glow frame */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#1677FF]/40 via-[#00D5FF]/20 to-transparent blur-md group-hover:blur-lg transition-all opacity-70" />
                
                {/* Founder Image Card */}
                <div className="relative rounded-xl overflow-hidden bg-[#101725] border border-white/[0.12] shadow-2xl">
                  <img
                    src={FOUNDER_INFO.portraitImage}
                    alt="Kumail Abbas - Founder of KUMAILFX"
                    className="w-full h-auto object-cover object-top max-h-[460px]"
                    loading="eager"
                  />
                  
                  {/* Subtle bottom gradient scrim with founder name */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-transparent pt-12 pb-4 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                          <span>Kumail Abbas</span>
                          <span className="text-blue-400 font-normal text-xs font-mono">· Founder</span>
                        </div>
                        <div className="text-[11px] text-cyan-300 font-mono">
                          KUMAILFX Head Educator
                        </div>
                      </div>
                      <button
                        onClick={() => navigateTo('about')}
                        className="px-2.5 py-1 text-[11px] font-semibold text-white bg-blue-600/60 hover:bg-blue-600 rounded border border-blue-400/40 transition-colors flex items-center gap-1"
                      >
                        <span>Founder Story</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Candlestick visual preview right underneath */}
              <CandlestickChartVisual className="hidden sm:block" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section className="py-12 bg-[#0A0E18] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-[#101725]/60 border border-white/[0.06]">
              <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {course.totalLessons}+
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 mt-1 font-semibold">
                Educational Lessons
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Structured across 6 comprehensive modules from basics to advanced.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#101725]/60 border border-white/[0.06]">
              <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                6 Pillars
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#1677FF] mt-1 font-semibold">
                Trading Concepts
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                ICT, SMC, Market Structure, Liquidity Pools, FVG & Risk Rules.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#101725]/60 border border-white/[0.06]">
              <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                Daily / 4H
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-emerald-400 mt-1 font-semibold">
                Market Analysis
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Objective breakdowns for EURUSD, XAUUSD, and GBPUSD.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#101725]/60 border border-white/[0.06]">
              <div className="text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {totalMembersCount.toLocaleString()}+
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 mt-1 font-semibold">
                Community Members
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Active traders connected via YouTube, Discord & Telegram channels.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED: BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE ($100) */}
      <section className="py-16 bg-[#080B12] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-blue-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101725] via-[#0D131F] to-[#151D2F] border border-amber-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span>PREMIUM MASTERCLASS BUNDLE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
                  BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Trade authentic exchange-driven EURUSD binary options using real futures market microstructure. Master Tradovate Level II order flow, depth of market absorption, and Tradfye 1M/5M momentum timing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real Interbank EURUSD (No synthetic broker OTC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tradovate DOM & Delta Absorption Mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tradfye.com 1-min & 5-min Expiry Timing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-amber-300 font-semibold">Direct Enrollment into BINARY PLATINUM MEMBERS</span>
                  </div>
                </div>
              </div>

              {/* Price & Action Box */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#080B12] border border-amber-500/30 text-center space-y-5">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                    One-Time Lifetime Access
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-amber-400 font-mono tabular-nums">
                      $100
                    </span>
                    <span className="text-xs text-slate-500 font-mono line-through">$350</span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Auto-provisions Platinum Member status
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('binary-platinum')}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Crown className="w-4 h-4 text-black" />
                  <span>REGISTER NOW ($100)</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <p className="text-[10px] text-slate-400 font-mono">
                  Instant activation · Verified student roster entry
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURED: MY TRADING TECHNOLOGY & EXPERIENCE */}
      <section className="py-20 bg-[#0A0E18] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>MY TRADING TECHNOLOGY & EXPERIENCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Combining Futures Order Flow with Binary and Forex Analysis
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {TRADING_TECHNOLOGY_DATA.intro}
              </p>
            </div>

            <button
              onClick={() => navigateTo('trading-technology')}
              className="px-5 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/40 text-xs font-bold font-mono transition-colors flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <span>Explore Complete Technology Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01. Tradovate */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-blue-500/30 space-y-4 hover:border-blue-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-blue-600/30 text-blue-300 font-mono font-bold text-xs">
                  01
                </span>
                <span className="text-[11px] font-mono text-slate-400">Futures Microstructure</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Tradovate — Futures Order Flow
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exchange-traded futures activity analysis through:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Depth of Market (DOM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Level II Liquidity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Bid/Ask Volume Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Tick-by-Tick Trade Flow</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Volume Profile & POC</span>
                </li>
              </ul>
            </div>

            {/* 02. Tradfye.com */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-cyan-500/30 space-y-4 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-cyan-600/30 text-cyan-300 font-mono font-bold text-xs">
                  02
                </span>
                <span className="text-[11px] font-mono text-slate-400">Binary Execution</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Tradfye.com — Binary Trading Workflow
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Incorporated into short-term binary workflow and BTC market behavior:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>1-min and 5-min price behaviour</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Short-term market structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Liquidity reactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Momentum and displacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Entry timing & order-flow alignment</span>
                </li>
              </ul>
            </div>

            {/* 03. Core Framework & Objective */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-emerald-500/30 space-y-4 hover:border-emerald-400 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-emerald-600/30 text-emerald-300 font-mono font-bold text-xs">
                    03
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Alignment Pipeline</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Order Flow Alignment
                </h3>
                <div className="p-3 bg-[#080B12] rounded-lg border border-white/[0.06] text-[11px] font-mono font-bold text-cyan-300 leading-relaxed">
                  FUTURES DATA → ORDER FLOW → LIQUIDITY → PRICE STRUCTURE → TRADE CONFIRMATION
                </div>
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  "{TRADING_TECHNOLOGY_DATA.objective.statement}"
                </p>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono font-bold text-amber-300">
                  {TRADING_TECHNOLOGY_DATA.objective.tagline}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHAT WE TEACH (6 PREMIUM CARDS) */}
      <section className="py-20 bg-[#080B12] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
              CURRICULUM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              What We Teach at KUMAILFX
            </h2>
            <p className="text-sm text-slate-400">
              No lagging indicators, no retail guesswork. We train students to read algorithmic order flow and institutional manipulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeTeach.map((card) => (
              <div
                key={card.id}
                className="group p-6 rounded-xl bg-[#101725]/70 border border-white/[0.07] hover:border-blue-500/40 hover:bg-[#101725] transition-all flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#080B12] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {card.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    {card.lessonsCount} In-Depth Lessons
                  </span>
                  <button
                    onClick={() => {
                      navigateTo('academy', { openModuleId: card.moduleId });
                    }}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => navigateTo('concepts')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#101725] hover:bg-slate-800 border border-slate-700 rounded-lg transition-all"
            >
              <span>View Visual Trading Concepts Breakdown</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. LATEST LEARNING CONTENT */}
      <section className="py-20 bg-[#0A0E18] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#1677FF] font-bold">
                FEATURED LESSONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Latest Learning Content
              </h2>
            </div>
            <button
              onClick={() => navigateTo('academy')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              <span>View All 42 Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredLessons.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-[#101725] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-[#00D5FF]">{item.badge}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-400">
                    {item.module}
                  </div>
                </div>

                <div className="p-4 bg-[#080B12]/80 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    HD Video + PDF Summary
                  </span>
                  <button
                    onClick={() => {
                      setCurrentLessonId(item.lessonId);
                      navigateTo('academy');
                    }}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 rounded flex items-center gap-1.5 transition-colors"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Watch Lesson</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. MARKET ANALYSIS PREVIEW */}
      <section className="py-20 bg-[#080B12] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                INSTITUTIONAL OUTLOOK
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Market Analysis Preview
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Educational structural breakdowns published by Kumail Abbas for EURUSD, XAUUSD, and GBPUSD.
              </p>
            </div>
            <button
              onClick={() => navigateTo('market-analysis')}
              className="text-xs font-semibold text-[#00D5FF] hover:text-white flex items-center gap-1.5"
            >
              <span>Open TradingView Charts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {marketAnalyses.slice(0, 3).map((analysis) => {
              const isBullish = analysis.bias === 'Bullish';
              return (
                <div
                  key={analysis.id}
                  className="rounded-xl p-6 bg-[#101725]/80 border border-white/[0.08] hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-extrabold text-white font-mono">
                        {analysis.pair}
                      </span>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${
                          isBullish
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {analysis.bias} Bias
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-200 line-clamp-2">
                      {analysis.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {analysis.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>{analysis.timeframe}</span>
                      <span>{analysis.publishedAt}</span>
                    </div>
                    
                    <button
                      onClick={() => navigateTo('market-analysis', { pair: analysis.pair })}
                      className="w-full py-2 text-xs font-semibold text-center text-blue-300 hover:text-white bg-[#080B12] hover:bg-blue-600/30 border border-white/[0.08] rounded transition-colors"
                    >
                      Read Full Setup & Scenarios
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. COMMUNITY SECTION */}
      <section className="py-20 bg-[#0A0E18] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
              JOIN THE INNER CIRCLE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              BE PART OF THE KUMAILFX COMMUNITY.
            </h2>
            <p className="text-sm text-slate-400">
              Engage with disciplined traders, receive daily session alerts, watch live breakdowns on YouTube, and exchange chart markups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* YouTube */}
            <div className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] hover:border-rose-500/40 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-500">
                  <Youtube className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">YouTube Channel</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Watch live London Open session breakdowns, market structure tutorials, and recorded Q&As with Kumail Abbas.
                </p>
              </div>
              <a
                href={FOUNDER_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Discord */}
            <div className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Discord Community</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Collaborative student chat rooms, live trade discussions, chart markup feedback, and community trade journaling.
                </p>
              </div>
              <a
                href={FOUNDER_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Join Discord Server</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Telegram */}
            <div className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Telegram Channel</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fast daily market updates, killzone alerts, economic calendar reminders, and institutional news commentary.
                </p>
              </div>
              <a
                href={FOUNDER_INFO.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Join @wolfcrl</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Instagram Broadcast */}
            <div className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] hover:border-pink-500/40 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-500">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Instagram Broadcast</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Daily visual chart stories, trading discipline mindset quotes, and behind-the-scenes trading education reels.
                </p>
              </div>
              <a
                href={FOUNDER_INFO.socials.instagramBroadcast}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 rounded-lg transition-opacity flex items-center justify-center gap-1.5"
              >
                <span>Join Broadcast</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-[#080B12] via-[#0D1525] to-[#080B12] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            NO GAMBLING · PURE LOGIC · DISCIPLINED EXECUTION
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            YOUR TRADING JOURNEY STARTS HERE.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop giving your capital away to algorithmic market makers. Learn the institutional concepts of market structure, liquidity engineering, and risk management with Kumail Abbas.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('academy')}
              className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-[#1677FF] to-[#00D5FF] hover:opacity-95 rounded-lg transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2"
            >
              <span>JOIN KUMAILFX</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 text-sm font-semibold text-slate-200 bg-[#101725] hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              Contact Educator
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
