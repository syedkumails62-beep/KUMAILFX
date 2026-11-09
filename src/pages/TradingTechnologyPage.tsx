/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TRADING_TECHNOLOGY_DATA, FOUNDER_INFO } from '../data/seedData';
import {
  TrendingUp,
  BarChart2,
  Layers,
  ArrowRight,
  Shield,
  Zap,
  Target,
  CheckCircle,
  Activity,
  Terminal,
  Cpu,
  Eye,
  Crown,
} from 'lucide-react';

export const TradingTechnologyPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'tradovate' | 'tradfye' | 'framework'>('all');

  return (
    <div className="w-full text-slate-100 font-sans pb-24">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-[#080B12] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>INSTITUTIONAL MICROSTRUCTURE BRIEF</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl font-sans">
            MY TRADING TECHNOLOGY & EXPERIENCE
          </h1>

          <p className="text-lg sm:text-xl text-cyan-300 font-medium max-w-3xl leading-relaxed">
            Combining Futures Order Flow with Binary and Forex Analysis
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {TRADING_TECHNOLOGY_DATA.intro}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => navigateTo('binary-platinum')}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Crown className="w-4 h-4 text-black" />
              <span>Explore $100 Binary & Order Flow Bundle</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={() => navigateTo('academy')}
              className="px-6 py-3.5 bg-[#101725] hover:bg-[#152033] border border-white/[0.1] text-slate-200 text-xs sm:text-sm font-semibold rounded-xl transition-all"
            >
              Review Academy Modules
            </button>
          </div>
        </div>
      </section>

      {/* Main Pillars Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Pillar 01: Tradovate — Futures Order Flow */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#101725] border border-blue-500/30 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-blue-600/30 text-blue-300 font-mono font-bold text-xs">
                  01
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
                  FUTURES MARKET MICROSTRUCTURE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Tradovate — Futures Order Flow
              </h2>
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-[#080B12] border border-white/[0.08] text-xs font-mono text-cyan-400 self-start md:self-auto">
              CME · E-Mini · Depth of Market
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            I use Tradovate to study exchange-traded futures market activity through:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Depth of Market (DOM)', desc: 'Tracking resting limit orders and recognizing iceberg absorbances at key institutional levels.' },
              { title: 'Level II Liquidity', desc: 'Real-time inspection of bid and ask order books across exchange price levels.' },
              { title: 'Bid/Ask Volume Analysis', desc: 'Dissecting buyer aggression versus seller exhaustion tick-by-tick.' },
              { title: 'Tick-by-Tick Trade Flow', desc: 'Reading the real transaction tape as orders clear the centralized matching engine.' },
              { title: 'Volume Profile & Point of Control (POC)', desc: 'Mapping high-volume nodes where institutions built fair value dealing ranges.' },
              { title: 'Market Replay', desc: 'Forensic replay of session execution to refine structural pattern recognition.' },
              { title: 'Buying and Selling Pressure', desc: 'Measuring cumulative delta shifts before visible candlestick displacement occurs.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] hover:border-blue-500/40 transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <h4 className="text-xs font-bold text-white font-mono">{item.title}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pl-3.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar 02: Tradfye.com — Binary Trading Workflow */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#101725] border border-cyan-500/30 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-cyan-600/30 text-cyan-300 font-mono font-bold text-xs">
                  02
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  SHORT-TERM EXECUTION ARCHITECTURE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Tradfye.com — Binary Trading Workflow
              </h2>
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-[#080B12] border border-white/[0.08] text-xs font-mono text-emerald-400 self-start md:self-auto">
              1M & 5M Expirations · BTC & FX Mechanics
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            I incorporate Tradfye into my short-term binary trading workflow, particularly when studying BTC market behaviour.
          </p>

          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
              My analysis focuses on:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
              {[
                { title: '1-minute and 5-minute price behaviour', detail: 'Granular reaction inspection on sub-minute structural candles.' },
                { title: 'Short-term market structure', detail: 'Internal structural breaks (micro BOS) calibrated for binary expiries.' },
                { title: 'Liquidity reactions', detail: 'Immediate responsiveness after equal highs/lows are swept by market makers.' },
                { title: 'Momentum and displacement', detail: 'Institutional velocity proving smart money participation.' },
                { title: 'Entry timing', detail: 'Executing at precise discount mitigation rather than chasing candle closes.' },
                { title: 'Order-flow alignment', detail: 'Synchronizing binary call/put strikes with underlying futures direction.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] hover:border-cyan-500/40 transition-colors space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <h4 className="text-xs font-bold text-white font-mono">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-3.5">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar 03: Forex & Binary Order Flow Alignment (The Core Framework) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#101725] border border-emerald-500/30 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-emerald-600/30 text-emerald-300 font-mono font-bold text-xs">
                  03
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  THE MULTI-MARKET NEXUS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Forex & Binary Order Flow Alignment
              </h2>
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-[#080B12] border border-white/[0.08] text-xs font-mono text-amber-400 self-start md:self-auto">
              Institutional Edge Synthesis
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            My core framework connects the complete execution chain from raw exchange transaction data down to execution confirmation:
          </p>

          {/* The Pipeline Visualizer */}
          <div className="p-6 rounded-2xl bg-[#080B12] border border-white/[0.08] space-y-4">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Execution Chain Architecture:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { label: 'FUTURES DATA', sub: 'Exchange Tape & Volume', color: 'border-blue-500 text-blue-400' },
                { label: 'ORDER FLOW', sub: 'DOM & Delta Absorption', color: 'border-cyan-500 text-cyan-400' },
                { label: 'LIQUIDITY', sub: 'Pool Sweeps & Traps', color: 'border-indigo-500 text-indigo-400' },
                { label: 'PRICE STRUCTURE', sub: 'BOS / CHOCH / FVG', color: 'border-emerald-500 text-emerald-400' },
                { label: 'TRADE CONFIRMATION', sub: 'Calculated Execution', color: 'border-amber-500 text-amber-400' },
              ].map((step, idx) => (
                <div
                  key={step.label}
                  className={`p-4 rounded-xl bg-[#101725] border ${step.color} text-center space-y-1 shadow-md`}
                >
                  <div className="text-[10px] font-mono font-bold text-slate-500">STEP 0{idx + 1}</div>
                  <div className="text-xs font-extrabold font-mono text-white">{step.label}</div>
                  <div className="text-[10px] text-slate-400">{step.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-sm italic leading-relaxed">
            "I look for agreement between market structure, available order-flow information, and price behaviour before considering a trading opportunity."
          </div>
        </div>

        {/* MY OBJECTIVE & PHILOSOPHY */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/80 via-[#101725] to-[#0A0E18] border border-white/[0.12] text-center space-y-6 shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            FOUNDER STATEMENT
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            MY OBJECTIVE
          </h2>

          <p className="text-base sm:text-xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed">
            "{TRADING_TECHNOLOGY_DATA.objective.statement}"
          </p>

          <div className="py-2">
            <span className="inline-block px-5 py-2.5 rounded-xl bg-blue-600/30 border border-blue-400/40 text-cyan-300 font-mono font-bold text-sm tracking-wider">
              {TRADING_TECHNOLOGY_DATA.objective.tagline}
            </span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('binary-platinum')}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 text-black font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-amber-500/20 flex items-center gap-2"
            >
              <Crown className="w-4 h-4 text-black" />
              <span>Join Binary Platinum Bundle ($100)</span>
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="px-6 py-3.5 bg-[#080B12] hover:bg-slate-800 text-slate-200 border border-white/[0.1] rounded-xl text-xs sm:text-sm font-semibold"
            >
              Read Founder Background
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};
