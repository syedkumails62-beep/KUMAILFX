/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  TrendingUp,
  Droplet,
  Layers,
  Zap,
  ArrowRight,
  Shield,
  Clock,
  Compass,
  CheckCircle2,
  AlertOctagon,
} from 'lucide-react';

export const TradingConceptsPage: React.FC = () => {
  const { navigateTo, setCurrentLessonId } = useApp();
  const [activeTab, setActiveTab] = useState<'bos' | 'fvg' | 'liquidity' | 'blocks' | 'pnd'>('bos');

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-14 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
            PRICE ACTION & ALGORITHMIC ARCHITECTURE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core Trading Concepts
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Understand how algorithmic market makers construct liquidity pools, engineer price inefficiencies, and distribute institutional orders.
          </p>
        </div>
      </section>

      {/* Concept Selector Segmented Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.08]">
          {[
            { id: 'bos', label: 'BOS vs CHOCH' },
            { id: 'fvg', label: 'Fair Value Gaps (FVG)' },
            { id: 'liquidity', label: 'Liquidity Pools (BSL / SSL)' },
            { id: 'blocks', label: 'Order & Breaker Blocks' },
            { id: 'pnd', label: 'Premium & Discount Ranges' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-[#101725]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Concept Deep Dive View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 1. BOS vs CHOCH */}
        {activeTab === 'bos' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  STRUCTURAL CONTINUATION VS REVERSAL
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Break of Structure (BOS) vs Change of Character (CHOCH)
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Market structure represents the objective blueprint of price. Retail traders frequently confuse minor internal pullbacks with major trend reversals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#101725] border border-blue-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-blue-400 uppercase">
                    Break of Structure (BOS)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A candle body close above a previous Higher High (in an uptrend) or below a Lower Low (in a downtrend). Confirms continuation of the higher timeframe trend.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#101725] border border-cyan-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    Change of Character (CHOCH)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The violation of the last structural swing point that initiated the liquidity raid. Signifies the first transition of order flow from buyers to sellers or vice versa.
                  </p>
                </div>
              </div>

              {/* Retail Trap Alert */}
              <div className="p-4 rounded-xl bg-[#080B12] border border-amber-500/30 flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-amber-400 font-mono">Institutional Rule:</div>
                  <p>
                    Wicks indicate price rejection and liquidity testing; candle bodies validate structural integrity. Never mark a BOS until a full candle body closes beyond the swing high or low.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentLessonId('les-2-3');
                  navigateTo('academy');
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <span>Study BOS Lesson in Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Diagram */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Interactive Structural Diagram
              </div>

              <div className="w-full bg-[#080B12] p-4 rounded-xl border border-white/[0.06]">
                <svg viewBox="0 0 300 200" className="w-full h-auto text-slate-300">
                  {/* Uptrend lines */}
                  <polyline
                    points="20,170 60,110 90,140 150,70 180,105 240,40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                  />
                  {/* BOS line */}
                  <line x1="60" y1="110" x2="160" y2="110" stroke="#00D5FF" strokeDasharray="3 3" />
                  <text x="100" y="104" fill="#00D5FF" fontSize="8" fontFamily="monospace">BOS (Continuation)</text>

                  <line x1="150" y1="70" x2="250" y2="70" stroke="#00D5FF" strokeDasharray="3 3" />
                  <text x="190" y="64" fill="#00D5FF" fontSize="8" fontFamily="monospace">BOS (Continuation)</text>

                  {/* CHOCH reversal on right */}
                  <polyline
                    points="240,40 260,135"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                  />
                  <line x1="180" y1="105" x2="280" y2="105" stroke="#EF4444" strokeDasharray="3 3" />
                  <text x="210" y="118" fill="#EF4444" fontSize="8" fontFamily="monospace">CHOCH (Reversal)</text>
                </svg>
              </div>

              <div className="text-[11px] text-slate-400 font-mono">
                Green: Institutional bullish displacement · Blue: Break of Structure · Red: Structural Change of Character.
              </div>
            </div>
          </div>
        )}

        {/* 2. Fair Value Gaps */}
        {activeTab === 'fvg' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
                  IMBALANCE & PRICE INEFFICIENCY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Fair Value Gap (FVG) & Consequent Encroachment
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                A Fair Value Gap occurs when aggressive buying or selling creates an imbalance where only one party received orders. The algorithm will subsequently retrace to rebalance this area before continuing.
              </p>

              <div className="p-5 rounded-xl bg-[#101725] border border-blue-500/30 space-y-3">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  Anatomy of a 3-Candle Bullish FVG
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold font-mono">1.</span>
                    <span>Candle 1: First candle with upper wick defining lower gap boundary.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold font-mono">2.</span>
                    <span>Candle 2: Large expansion candle with massive displacement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold font-mono">3.</span>
                    <span>Candle 3: Third candle whose lower wick fails to overlap Candle 1's wick.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#080B12] border border-blue-500/20 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white font-mono">Consequent Encroachment (CE 50%):</div>
                <p>
                  The exact 50% midpoint of the FVG. Institutional smart money frequently bids at CE, offering the highest reward-to-risk limit entries.
                </p>
              </div>

              <button
                onClick={() => {
                  setCurrentLessonId('les-3-6');
                  navigateTo('academy');
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <span>Study FVG Lesson in Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* FVG SVG Diagram */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Fair Value Gap Diagram
              </div>

              <div className="w-full bg-[#080B12] p-4 rounded-xl border border-white/[0.06]">
                <svg viewBox="0 0 240 180" className="w-full h-auto text-slate-300">
                  {/* Candle 1 */}
                  <line x1="50" y1="90" x2="50" y2="150" stroke="#10B981" strokeWidth="1" />
                  <rect x="42" y="100" width="16" height="40" fill="#10B981" rx="1" />

                  {/* Candle 2 (Displacement) */}
                  <line x1="110" y1="30" x2="110" y2="130" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="100" y="40" width="20" height="80" fill="#10B981" rx="1" />

                  {/* Candle 3 */}
                  <line x1="170" y1="10" x2="170" y2="60" stroke="#10B981" strokeWidth="1" />
                  <rect x="162" y="15" width="16" height="35" fill="#10B981" rx="1" />

                  {/* FVG Box */}
                  <rect
                    x="50"
                    y="60"
                    width="120"
                    height="30"
                    fill="rgba(22, 119, 255, 0.2)"
                    stroke="#00D5FF"
                    strokeDasharray="2 2"
                  />
                  <text x="65" y="78" fill="#00D5FF" fontSize="8" fontFamily="monospace">
                    Unbalanced FVG Area
                  </text>
                  <line x1="50" y1="75" x2="170" y2="75" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="1 1" />
                  <text x="175" y="77" fill="#FFFFFF" fontSize="7" fontFamily="monospace">CE 50%</text>
                </svg>
              </div>

              <div className="text-[11px] text-slate-400 font-mono">
                The void between Candle 1 high and Candle 3 low is the Fair Value Gap.
              </div>
            </div>
          </div>
        )}

        {/* 3. Liquidity Pools */}
        {activeTab === 'liquidity' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  THE FUEL OF FINANCIAL MARKETS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Buy-Side (BSL) & Sell-Side (SSL) Liquidity Pools
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Large institutional institutions cannot enter or exit trades without counterparties. To buy millions of Euros, they must find thousands of willing sellers—which they trigger by raiding stop loss orders beneath swing lows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    Buy-Side Liquidity (BSL)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Rests above old highs, double tops, and session highs. Composed of buy stops (stop loss of short sellers) and breakout buy orders.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-2">
                  <div className="text-xs font-mono font-bold text-rose-400 uppercase">
                    Sell-Side Liquidity (SSL)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Rests below old swing lows, double bottoms, and Asian range lows. Composed of sell stop losses from retail buyers.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentLessonId('les-3-2');
                  navigateTo('academy');
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <span>Study Liquidity Lessons in Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Liquidity Raid (Turtle Soup)
              </div>
              <div className="w-full bg-[#080B12] p-4 rounded-xl border border-white/[0.06] text-xs font-mono text-slate-400 space-y-3">
                <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">
                  1. Retail buys support & places stop-loss 10 pips below.
                </div>
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  2. Smart Money sweeps stops with a rapid wick.
                </div>
                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  3. Price displaces in the true intended direction.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Order Blocks & Breakers */}
        {activeTab === 'blocks' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
                  INSTITUTIONAL FOOTPRINTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Order Blocks & Breaker Blocks
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                An Order Block is the specific price consolidation where institutions accumulated or distributed their orders before creating displacement that breaks structure.
              </p>

              <div className="p-5 rounded-xl bg-[#101725] border border-blue-500/30 space-y-3 text-xs text-slate-300">
                <div className="font-bold text-white font-mono text-xs uppercase">
                  Validation Criteria for a High-Probability Order Block:
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Must precede aggressive displacement candles.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Must cause a confirmed Break of Structure (BOS).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Must leave an unmitigated Fair Value Gap directly above/below it.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentLessonId('les-3-8');
                  navigateTo('academy');
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <span>Study Order Blocks in Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Order Block vs Breaker Block
              </div>
              <div className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] text-xs space-y-3">
                <div>
                  <div className="font-bold text-cyan-400 font-mono">Order Block:</div>
                  <p className="text-slate-400 mt-1">Direct pullback into the origin candle that initiated the trend.</p>
                </div>
                <div className="border-t border-white/[0.06] pt-2">
                  <div className="font-bold text-purple-400 font-mono">Breaker Block:</div>
                  <p className="text-slate-400 mt-1">A failed order block that swept opposing liquidity before breaking through. Traps counter-trend traders.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. Premium & Discount */}
        {activeTab === 'pnd' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  EQUILIBRIUM & DEALING RANGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Premium and Discount Pricing Matrix
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Smart Money never buys expensive and never sells cheap. By measuring the current dealing range with the 50% equilibrium line, you establish whether price is at an institutional discount (buy zone) or premium (sell zone).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#101725] border border-rose-500/20 space-y-2">
                  <div className="text-xs font-mono font-bold text-rose-400 uppercase">
                    Premium Zone (Above 50%)
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Institutional sell zone. High probability for short setups targeting internal and external sell-side liquidity.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#101725] border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    Discount Zone (Below 50%)
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Institutional buy zone. High probability for long positions targeting premium buy-side liquidity pools.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentLessonId('les-3-11');
                  navigateTo('academy');
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <span>Study Premium/Discount in Academy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Dealing Range Matrix
              </div>
              <div className="w-full h-48 rounded-xl bg-[#080B12] border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs">
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded text-rose-300 text-center">
                  PREMIUM (Above 50% Equilibrium) — Only Sell
                </div>
                <div className="text-center text-slate-400 border-y border-dashed border-slate-700 py-1">
                  50.0% EQUILIBRIUM (Fair Value)
                </div>
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-300 text-center">
                  DISCOUNT (Below 50% Equilibrium) — Only Buy
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
