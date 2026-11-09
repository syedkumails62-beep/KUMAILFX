/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TradingViewWidget } from '../components/TradingViewWidget';
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Calendar,
  Layers,
  ShieldAlert,
  PlusCircle,
  Clock,
  ArrowUpRight,
  Target,
} from 'lucide-react';

export const MarketAnalysisPage: React.FC = () => {
  const { marketAnalyses, activeRole, navigateTo, pageParams } = useApp();

  const pairs: Array<'EURUSD' | 'XAUUSD' | 'GBPUSD'> = ['EURUSD', 'XAUUSD', 'GBPUSD'];
  const [selectedPair, setSelectedPair] = useState<'EURUSD' | 'XAUUSD' | 'GBPUSD'>(
    (pageParams.pair as any) || 'EURUSD'
  );

  const [activeInterval, setActiveInterval] = useState<string>('60'); // 1H default

  // Filter analyses for the active pair or show latest
  const pairAnalyses = marketAnalyses.filter((a) => a.pair === selectedPair);
  const activeAnalysis = pairAnalyses[0] || marketAnalyses[0];

  // Map to TradingView symbol
  const getTvSymbol = (pair: string) => {
    switch (pair) {
      case 'EURUSD':
        return 'FX:EURUSD';
      case 'XAUUSD':
        return 'OANDA:XAUUSD';
      case 'GBPUSD':
        return 'FX:GBPUSD';
      default:
        return 'FX:EURUSD';
    }
  };

  const isBullish = activeAnalysis?.bias === 'Bullish';

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-12 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
                INSTITUTIONAL TECHNICAL FORECASTS
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Daily Market Analysis Dashboard
              </h1>
              <p className="text-sm text-slate-400 max-w-2xl mt-1 leading-relaxed">
                Objective price action, liquidity sweeps, and Fair Value Gap scenarios published directly by Kumail Abbas.
              </p>
            </div>

            {activeRole === 'admin' && (
              <button
                onClick={() => navigateTo('admin-dashboard', { tab: 'analysis' })}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-md"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Publish New Analysis (Admin)</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Instrument Selector Tabs & Timeframe Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#101725] p-3 rounded-xl border border-white/[0.08]">
          
          {/* Pair Tabs */}
          <div className="flex items-center gap-2">
            {pairs.map((p) => {
              const isActive = selectedPair === p;
              return (
                <button
                  key={p}
                  onClick={() => setSelectedPair(p)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {p === 'XAUUSD' ? 'XAUUSD (Gold)' : p}
                </button>
              );
            })}
          </div>

          {/* Timeframe Controls for Widget */}
          <div className="flex items-center gap-1 text-xs font-mono">
            <span className="text-slate-500 mr-1 hidden md:inline">Timeframe:</span>
            {[
              { label: '15M', val: '15' },
              { label: '1H', val: '60' },
              { label: '4H', val: '240' },
              { label: '1D', val: 'D' },
            ].map((tf) => (
              <button
                key={tf.val}
                onClick={() => setActiveInterval(tf.val)}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                  activeInterval === tf.val
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>

        </div>

        {/* Live TradingView Embedded Chart */}
        <div className="space-y-2">
          <TradingViewWidget
            symbol={getTvSymbol(selectedPair)}
            interval={activeInterval}
            height={520}
          />
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-2">
            <span>Chart: TradingView Live Interactive Feed · {selectedPair}</span>
            <span>Real-time Market Structure Mapping</span>
          </div>
        </div>

        {/* In-Depth Institutional Analysis Article */}
        {activeAnalysis ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Analysis Narrative & Scenarios (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-mono font-extrabold text-white">
                      {activeAnalysis.pair}
                    </span>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded font-bold flex items-center gap-1 ${
                        isBullish
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {isBullish ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      <span>{activeAnalysis.bias} Bias</span>
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{activeAnalysis.timeframe}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{activeAnalysis.publishedAt}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    {activeAnalysis.title}
                  </h2>
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">
                    Analyst: {activeAnalysis.author}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeAnalysis.summary}
                </p>

                {/* Scenarios Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  
                  {/* Bullish Scenario */}
                  <div className="p-4 rounded-xl bg-[#080B12] border border-emerald-500/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase">
                      <TrendingUp className="w-4 h-4" />
                      <span>Bullish Expansion Scenario</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeAnalysis.bullishScenario}
                    </p>
                  </div>

                  {/* Bearish Scenario */}
                  <div className="p-4 rounded-xl bg-[#080B12] border border-rose-500/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-400 uppercase">
                      <TrendingDown className="w-4 h-4" />
                      <span>Bearish Invalidation Scenario</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeAnalysis.bearishScenario}
                    </p>
                  </div>

                </div>

                {/* Structure & FVG Observations */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#00D5FF] font-bold">
                      Market Structure Observation:
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {activeAnalysis.marketStructure}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                      Fair Value Gap & Liquidity Zones:
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {activeAnalysis.fvgObservation}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {activeAnalysis.liquidityZones}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {activeAnalysis.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-[11px] text-slate-300 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* Key Levels & Targets (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00D5FF] font-bold">
                  <Target className="w-4 h-4" />
                  <span>Important Price Levels</span>
                </div>

                <div className="space-y-2.5">
                  {activeAnalysis.keyLevels.map((lvl, idx) => {
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#080B12] border border-white/[0.06] flex items-center justify-between gap-2"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {lvl.label}
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono capitalize">
                            {lvl.type} level
                          </div>
                        </div>
                        <div className="text-sm font-bold font-mono text-cyan-300 tabular-nums">
                          {lvl.price}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-[11px] text-slate-500 font-mono leading-relaxed pt-2 border-t border-white/[0.06]">
                  * Key levels represent institutional liquidity pools, mean thresholds, and consequent encroachment targets.
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="p-4 rounded-xl bg-[#101725]/60 border border-amber-500/20 text-xs text-slate-400 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-400 font-mono font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Educational Disclaimer</span>
                </div>
                <p className="leading-relaxed">
                  Market analysis articles are prepared strictly for educational purposes and chart case study. KUMAILFX does not provide trade calls or financial guarantees.
                </p>
              </div>

            </div>

          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#101725] border border-white/[0.08] text-slate-400">
            No analysis published yet for {selectedPair}.
          </div>
        )}

      </div>

    </div>
  );
};
