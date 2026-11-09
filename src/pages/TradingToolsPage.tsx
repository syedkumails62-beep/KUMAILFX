/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  calculatePositionSize,
  calculateRiskReward,
  calculatePipValue,
  calculateCompoundGrowth,
  getPipValuePerLot,
} from '../utils/calculators';
import {
  MARKET_SESSIONS,
  ICT_KILLZONES,
  isSessionOpen,
  isKillzoneActive,
  getPakistanTime,
} from '../utils/marketSessions';
import {
  Calculator,
  Clock,
  BookOpen,
  TrendingUp,
  Percent,
  DollarSign,
  Plus,
  Trash2,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const TradingToolsPage: React.FC = () => {
  const { journalEntries, addJournalEntry, deleteJournalEntry, currentUser } = useApp();

  const [activeTab, setActiveTab] = useState<
    'position-size' | 'risk-reward' | 'pip-calc' | 'compound' | 'journal' | 'sessions'
  >('position-size');

  // 1. Position Size State
  const [psBalance, setPsBalance] = useState<number>(10000);
  const [psRiskPercent, setPsRiskPercent] = useState<number>(1.0);
  const [psStopLossPips, setPsStopLossPips] = useState<number>(15);
  const [psPair, setPsPair] = useState<string>('EURUSD');

  const psResult = calculatePositionSize(psBalance, psRiskPercent, psStopLossPips, psPair);

  // 2. Risk-to-Reward State
  const [rrDirection, setRrDirection] = useState<'buy' | 'sell'>('buy');
  const [rrEntry, setRrEntry] = useState<number>(1.0780);
  const [rrStopLoss, setRrStopLoss] = useState<number>(1.0760);
  const [rrTakeProfit, setRrTakeProfit] = useState<number>(1.0840);

  const rrResult = calculateRiskReward(rrDirection, rrEntry, rrStopLoss, rrTakeProfit);

  // 3. Pip Calculator State
  const [pipPair, setPipPair] = useState<string>('EURUSD');
  const [pipLots, setPipLots] = useState<number>(1.0);
  const [pipMovement, setPipMovement] = useState<number>(25);

  const pipResult = calculatePipValue(pipPair, pipLots, pipMovement);

  // 4. Compound Growth State
  const [cgBalance, setCgBalance] = useState<number>(5000);
  const [cgMonthlyReturn, setCgMonthlyReturn] = useState<number>(6.0);
  const [cgMonths, setCgMonths] = useState<number>(12);
  const [cgMonthlyDeposit, setCgMonthlyDeposit] = useState<number>(200);

  const cgResult = calculateCompoundGrowth(cgBalance, cgMonthlyReturn, cgMonths, cgMonthlyDeposit);

  // 5. Trading Session Clock Live Time
  const [clockTime, setClockTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClockTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const utcHour = clockTime.getUTCHours();
  const pkt = getPakistanTime(clockTime);

  // 6. Journal Modal Form State
  const [newJrnPair, setNewJrnPair] = useState('EURUSD');
  const [newJrnDirection, setNewJrnDirection] = useState<'buy' | 'sell'>('buy');
  const [newJrnEntryPrice, setNewJrnEntryPrice] = useState(1.077);
  const [newJrnExitPrice, setNewJrnExitPrice] = useState(1.083);
  const [newJrnStopLoss, setNewJrnStopLoss] = useState(1.075);
  const [newJrnTakeProfit, setNewJrnTakeProfit] = useState(1.083);
  const [newJrnLots, setNewJrnLots] = useState(0.5);
  const [newJrnPnl, setNewJrnPnl] = useState(300);
  const [newJrnRMultiple, setNewJrnRMultiple] = useState(3.0);
  const [newJrnSession, setNewJrnSession] = useState<'London' | 'New York' | 'Asian'>('London');
  const [newJrnSetup, setNewJrnSetup] = useState<
    'FVG Rejection' | 'BOS Continuation' | 'Liquidity Sweep' | 'Order Block Tap' | 'SMT Divergence'
  >('FVG Rejection');
  const [newJrnNotes, setNewJrnNotes] = useState('');
  const [showAddTradeModal, setShowAddTradeModal] = useState(false);

  const handleCreateTrade = (e: React.FormEvent) => {
    e.preventDefault();
    addJournalEntry({
      userId: currentUser?.id || 'demo-student',
      date: new Date().toISOString().split('T')[0],
      pair: newJrnPair,
      direction: newJrnDirection,
      entryPrice: newJrnEntryPrice,
      exitPrice: newJrnExitPrice,
      stopLoss: newJrnStopLoss,
      takeProfit: newJrnTakeProfit,
      lotSize: newJrnLots,
      pnl: newJrnPnl,
      rMultiple: newJrnRMultiple,
      session: newJrnSession,
      setupType: newJrnSetup,
      notes: newJrnNotes || 'Executed during planned session killzone.',
    });
    setShowAddTradeModal(false);
  };

  // Journal Analytics calculations
  const totalTrades = journalEntries.length;
  const winningTrades = journalEntries.filter((t) => t.pnl > 0).length;
  const winRate = totalTrades > 0 ? Math.round((winningTrades / totalTrades) * 100) : 0;
  const totalPnl = journalEntries.reduce((sum, t) => sum + t.pnl, 0);
  const avgRMultiple =
    totalTrades > 0
      ? Math.round((journalEntries.reduce((sum, t) => sum + t.rMultiple, 0) / totalTrades) * 10) / 10
      : 0;

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-12 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            QUANTITATIVE RISK & TIMING SUITE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Educational Trading Tools & Calculators
          </h1>
          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Professional calculators and session clocks calibrated with authentic institutional formulas and Pakistan Standard Time (UTC+5) synchronization.
          </p>
        </div>
      </section>

      {/* Navigation Segmented Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.08]">
          {[
            { id: 'position-size', label: '1. Position Size Calculator' },
            { id: 'risk-reward', label: '2. Risk-to-Reward Calculator' },
            { id: 'pip-calc', label: '3. Pip Value Calculator' },
            { id: 'compound', label: '4. Compound Growth Calculator' },
            { id: 'journal', label: '5. Student Trading Journal' },
            { id: 'sessions', label: '6. Trading Session Clock (PKT)' },
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

      {/* Main Tool Content Views */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 1. POSITION SIZE CALCULATOR */}
        {activeTab === 'position-size' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Position Size Parameters
                </h3>
                <p className="text-xs text-slate-400">
                  Calculate the exact lot size so your loss never exceeds your predetermined risk percentage.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Account Balance (USD)
                  </label>
                  <input
                    type="number"
                    value={psBalance}
                    onChange={(e) => setPsBalance(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white font-mono focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Risk Percentage (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={psRiskPercent}
                      onChange={(e) => setPsRiskPercent(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white font-mono focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Stop Loss (Pips)
                    </label>
                    <input
                      type="number"
                      value={psStopLossPips}
                      onChange={(e) => setPsStopLossPips(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white font-mono focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Currency Pair / Asset
                  </label>
                  <select
                    value={psPair}
                    onChange={(e) => setPsPair(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white font-mono focus:border-blue-500 focus:outline-none"
                  >
                    <option value="EURUSD">EURUSD (Euro / US Dollar)</option>
                    <option value="GBPUSD">GBPUSD (British Pound / US Dollar)</option>
                    <option value="XAUUSD">XAUUSD (Gold / US Dollar)</option>
                    <option value="USDJPY">USDJPY (US Dollar / Japanese Yen)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Position Size Results */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Recommended Execution
                </span>
                <h3 className="text-lg font-bold text-white">
                  Mathematical Position Output
                </h3>
              </div>

              <div className="p-6 rounded-xl bg-[#080B12] border border-blue-500/30 text-center space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Recommended Position Size
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00D5FF] font-mono tabular-nums">
                  {psResult.lotSize} Lots
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Standard lots (1.0 = 100,000 units)
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                  <div className="text-slate-400">Total Capital at Risk</div>
                  <div className="text-lg font-bold text-rose-400 tabular-nums">
                    ${psResult.riskAmount.toFixed(2)}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                  <div className="text-slate-400">Pip Value / Standard Lot</div>
                  <div className="text-lg font-bold text-white tabular-nums">
                    ${psResult.pipValuePerLot.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed font-mono p-3 bg-white/[0.02] rounded-lg">
                Formula: Risk Amount (${psResult.riskAmount}) / ({psStopLossPips} pips × ${psResult.pipValuePerLot}) = {psResult.lotSize} lots.
              </div>
            </div>
          </div>
        )}

        {/* 2. RISK-TO-REWARD CALCULATOR */}
        {activeTab === 'risk-reward' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Risk-to-Reward Calculator
                </h3>
                <p className="text-xs text-slate-400">
                  Verify your structural R:R ratio before placing market orders. Minimum recommended: 1:2.5.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setRrDirection('buy')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    rrDirection === 'buy'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#080B12] text-slate-400 hover:text-white'
                  }`}
                >
                  Buy (Long)
                </button>
                <button
                  onClick={() => setRrDirection('sell')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    rrDirection === 'sell'
                      ? 'bg-rose-600 text-white'
                      : 'bg-[#080B12] text-slate-400 hover:text-white'
                  }`}
                >
                  Sell (Short)
                </button>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Entry Price</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={rrEntry}
                    onChange={(e) => setRrEntry(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Stop Loss Price</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={rrStopLoss}
                    onChange={(e) => setRrStopLoss(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Take Profit Price</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={rrTakeProfit}
                    onChange={(e) => setRrTakeProfit(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* RR Output */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Trade Edge Evaluation
                </span>
                <h3 className="text-lg font-bold text-white">
                  Risk-to-Reward Ratio
                </h3>
              </div>

              {rrResult.isValid ? (
                <>
                  <div className="p-6 rounded-xl bg-[#080B12] border border-emerald-500/30 text-center space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase">
                      Risk / Reward Ratio
                    </div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono tabular-nums">
                      1 : {rrResult.riskRewardRatio}
                    </div>
                    <div className="text-xs text-cyan-300 font-mono">
                      {rrResult.riskRewardRatio >= 2.5
                        ? '✓ Meets KUMAILFX Institutional Threshold'
                        : '⚠ Below recommended 1:2.5 minimum ratio'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                      <div className="text-slate-400">Risk Distance</div>
                      <div className="text-base font-bold text-rose-400 tabular-nums">
                        {rrResult.riskDistance}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                      <div className="text-slate-400">Reward Distance</div>
                      <div className="text-base font-bold text-emerald-400 tabular-nums">
                        {rrResult.rewardDistance}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono space-y-2">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Invalid Price Configuration</span>
                  </div>
                  <p>{rrResult.errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. PIP CALCULATOR */}
        {activeTab === 'pip-calc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Pip Movement Value Calculator
                </h3>
                <p className="text-xs text-slate-400">
                  Compute dollar value of pip expansions based on trade size.
                </p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Currency Pair</label>
                  <select
                    value={pipPair}
                    onChange={(e) => setPipPair(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none"
                  >
                    <option value="EURUSD">EURUSD</option>
                    <option value="GBPUSD">GBPUSD</option>
                    <option value="XAUUSD">XAUUSD (Gold)</option>
                    <option value="USDJPY">USDJPY</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Trade Size (Lots)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={pipLots}
                    onChange={(e) => setPipLots(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Pip Movement</label>
                  <input
                    type="number"
                    value={pipMovement}
                    onChange={(e) => setPipMovement(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
              <h3 className="text-lg font-bold text-white">
                Calculated Pip Return
              </h3>

              <div className="p-6 rounded-xl bg-[#080B12] border border-blue-500/30 text-center space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Total Monetary Value
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00D5FF] font-mono tabular-nums">
                  ${pipResult.toFixed(2)} USD
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {pipLots} lots × {pipMovement} pips
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. COMPOUND GROWTH CALCULATOR */}
        {activeTab === 'compound' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Compound Parameters
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1">Initial Capital ($)</label>
                    <input
                      type="number"
                      value={cgBalance}
                      onChange={(e) => setCgBalance(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#080B12] border border-white/[0.1] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Target Monthly Return (%)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={cgMonthlyReturn}
                      onChange={(e) => setCgMonthlyReturn(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#080B12] border border-white/[0.1] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Time Horizon (Months)</label>
                    <input
                      type="number"
                      max="36"
                      value={cgMonths}
                      onChange={(e) => setCgMonths(Math.min(36, Number(e.target.value)))}
                      className="w-full px-3 py-2 bg-[#080B12] border border-white/[0.1] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Monthly Deposit ($)</label>
                    <input
                      type="number"
                      value={cgMonthlyDeposit}
                      onChange={(e) => setCgMonthlyDeposit(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#080B12] border border-white/[0.1] rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Summary Projection */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    Projected Capital Breakdown
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    Over {cgMonths} Months
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                    <div className="text-slate-400">Projected Balance</div>
                    <div className="text-xl font-bold text-emerald-400 tabular-nums">
                      ${cgResult.finalBalance.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                    <div className="text-slate-400">Total Interest Earned</div>
                    <div className="text-xl font-bold text-cyan-400 tabular-nums">
                      ${cgResult.totalInterest.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1 col-span-2 sm:col-span-1">
                    <div className="text-slate-400">Total Deposits</div>
                    <div className="text-xl font-bold text-white tabular-nums">
                      ${cgResult.totalDeposited.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Table of Months */}
                <div className="max-h-60 overflow-y-auto border border-white/[0.08] rounded-lg">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#080B12] text-slate-400 sticky top-0 border-b border-white/[0.08]">
                      <tr>
                        <th className="p-2.5">Month</th>
                        <th className="p-2.5">Start</th>
                        <th className="p-2.5">Gain</th>
                        <th className="p-2.5">Deposit</th>
                        <th className="p-2.5">End</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      {cgResult.monthlyProjections.map((p) => (
                        <tr key={p.month} className="hover:bg-white/[0.02]">
                          <td className="p-2.5 text-cyan-300">M{p.month}</td>
                          <td className="p-2.5 text-slate-300">${p.startingBalance.toLocaleString()}</td>
                          <td className="p-2.5 text-emerald-400">+${p.interestEarned.toLocaleString()}</td>
                          <td className="p-2.5 text-slate-400">${p.deposit}</td>
                          <td className="p-2.5 text-white font-bold">${p.endingBalance.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 5. STUDENT TRADING JOURNAL */}
        {activeTab === 'journal' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Institutional Trade Journal
                </h3>
                <p className="text-xs text-slate-400">
                  Log your setups, maintain accountability, and review your mathematical win rate.
                </p>
              </div>

              <button
                onClick={() => setShowAddTradeModal(true)}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Log New Trade</span>
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400">Total Logged</div>
                <div className="text-2xl font-bold text-white font-mono mt-1 tabular-nums">
                  {totalTrades} Trades
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400">Win Rate</div>
                <div className="text-2xl font-bold text-emerald-400 font-mono mt-1 tabular-nums">
                  {winRate}%
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400">Avg R:R Ratio</div>
                <div className="text-2xl font-bold text-cyan-400 font-mono mt-1 tabular-nums">
                  1 : {avgRMultiple}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400">Net Realized PnL</div>
                <div className={`text-2xl font-bold font-mono mt-1 tabular-nums ${totalPnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {totalPnl >= 0 ? `+$${totalPnl}` : `-$${Math.abs(totalPnl)}`}
                </div>
              </div>
            </div>

            {/* Journal Table */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#101725]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#080B12] text-slate-400 border-b border-white/[0.08]">
                    <tr>
                      <th className="p-3">Date</th>
                      <th className="p-3">Pair</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Setup</th>
                      <th className="p-3">Session</th>
                      <th className="p-3">R:R</th>
                      <th className="p-3">PnL</th>
                      <th className="p-3">Notes</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {journalEntries.map((trade) => {
                      const isWin = trade.pnl > 0;
                      return (
                        <tr key={trade.id} className="hover:bg-white/[0.02] text-slate-300">
                          <td className="p-3 text-slate-400">{trade.date}</td>
                          <td className="p-3 font-bold text-white">{trade.pair}</td>
                          <td className="p-3">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              trade.direction === 'buy' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                            }`}>
                              {trade.direction.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-3 text-cyan-300">{trade.setupType}</td>
                          <td className="p-3 text-slate-400">{trade.session}</td>
                          <td className="p-3 font-bold">1:{trade.rMultiple}</td>
                          <td className={`p-3 font-bold tabular-nums ${isWin ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {isWin ? `+$${trade.pnl}` : `-$${Math.abs(trade.pnl)}`}
                          </td>
                          <td className="p-3 text-slate-400 max-w-xs truncate" title={trade.notes}>
                            {trade.notes}
                          </td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => deleteJournalEntry(trade.id)}
                              className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                              title="Delete entry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal: Add Trade Form */}
            {showAddTradeModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <form
                  onSubmit={handleCreateTrade}
                  className="bg-[#101725] border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-base font-bold text-white">Log Executed Trade</h3>
                    <button
                      type="button"
                      onClick={() => setShowAddTradeModal(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div>
                      <label className="text-slate-400 block mb-1">Pair</label>
                      <select
                        value={newJrnPair}
                        onChange={(e) => setNewJrnPair(e.target.value)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      >
                        <option value="EURUSD">EURUSD</option>
                        <option value="XAUUSD">XAUUSD (Gold)</option>
                        <option value="GBPUSD">GBPUSD</option>
                        <option value="USDJPY">USDJPY</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">Direction</label>
                      <select
                        value={newJrnDirection}
                        onChange={(e) => setNewJrnDirection(e.target.value as any)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      >
                        <option value="buy">BUY (Long)</option>
                        <option value="sell">SELL (Short)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">Setup Type</label>
                      <select
                        value={newJrnSetup}
                        onChange={(e) => setNewJrnSetup(e.target.value as any)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      >
                        <option value="FVG Rejection">FVG Rejection</option>
                        <option value="BOS Continuation">BOS Continuation</option>
                        <option value="Liquidity Sweep">Liquidity Sweep</option>
                        <option value="Order Block Tap">Order Block Tap</option>
                        <option value="SMT Divergence">SMT Divergence</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">Session</label>
                      <select
                        value={newJrnSession}
                        onChange={(e) => setNewJrnSession(e.target.value as any)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      >
                        <option value="London">London Open</option>
                        <option value="New York">New York</option>
                        <option value="Asian">Asian</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">PnL ($)</label>
                      <input
                        type="number"
                        value={newJrnPnl}
                        onChange={(e) => setNewJrnPnl(Number(e.target.value))}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">R:R Multiple</label>
                      <input
                        type="number"
                        step="0.1"
                        value={newJrnRMultiple}
                        onChange={(e) => setNewJrnRMultiple(Number(e.target.value))}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block text-xs font-mono mb-1">Trade Notes & Rules Respected</label>
                    <textarea
                      rows={2}
                      value={newJrnNotes}
                      onChange={(e) => setNewJrnNotes(e.target.value)}
                      placeholder="e.g. Clean Asian low sweep into 15M FVG during London Open Killzone."
                      className="w-full p-2 text-xs bg-[#080B12] border border-white/[0.1] rounded text-white"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddTradeModal(false)}
                      className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold"
                    >
                      Save to Journal
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 6. TRADING SESSION CLOCK (PAKISTAN STANDARD TIME UTC+5) */}
        {activeTab === 'sessions' && (
          <div className="space-y-8">
            
            {/* Clock Header Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#101725] to-[#0A101C] border border-blue-500/30 text-center space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                PAKISTAN STANDARD TIME (UTC+5) MASTER CLOCK
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {pkt.timeStr}
              </div>
              <div className="text-sm text-slate-400 font-mono">
                {pkt.dateStr} · Current UTC Time: {clockTime.toISOString().slice(11, 19)} UTC
              </div>
            </div>

            {/* 4 World Sessions Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Major Financial Sessions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MARKET_SESSIONS.map((session) => {
                  const isOpen = isSessionOpen(session, utcHour);
                  return (
                    <div
                      key={session.id}
                      className={`p-6 rounded-xl border transition-all ${
                        isOpen
                          ? 'bg-[#101725] border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                          : 'bg-[#0A0E18] border-white/[0.06] opacity-70'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{session.flag}</span>
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            isOpen
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : 'bg-slate-800 text-slate-500'
                          }`}
                        >
                          {isOpen ? 'OPEN NOW' : 'CLOSED'}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-base font-bold text-white font-sans">
                          {session.name}
                        </h4>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          {session.city}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] mt-3 space-y-1 text-xs font-mono text-slate-400">
                        <div>
                          UTC: {session.utcOpenHour}:00 – {session.utcCloseHour}:00
                        </div>
                        <div className="text-cyan-300 font-semibold">
                          PKT: {(session.utcOpenHour + 5) % 24}:00 – {(session.utcCloseHour + 5) % 24}:00
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ICT Killzones Status */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00D5FF] font-bold">
                <Clock className="w-4 h-4" />
                <span>ICT Institutional Killzones</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ICT_KILLZONES.map((kz, idx) => {
                  const isActive = isKillzoneActive(kz, utcHour);
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border ${
                        isActive
                          ? 'bg-[#080B12] border-cyan-400/50 shadow-md'
                          : 'bg-[#080B12]/60 border-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white font-mono">
                          {kz.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                            isActive
                              ? 'bg-cyan-500/20 text-cyan-300'
                              : 'text-slate-500'
                          }`}
                        >
                          {isActive ? 'ACTIVE KILLZONE' : 'INACTIVE'}
                        </span>
                      </div>

                      <div className="text-xs text-slate-400 font-mono mt-2">
                        PKT Time: {(kz.utcStartHour + 5) % 24}:00 – {(kz.utcEndHour + 5) % 24}:00
                      </div>

                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {kz.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
