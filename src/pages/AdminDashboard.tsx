/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MarketAnalysis, LiveSession, Announcement } from '../types/database';
import {
  Shield,
  BarChart3,
  Radio,
  Bell,
  BookOpen,
  Mail,
  Users,
  Plus,
  Trash2,
  Edit2,
  Check,
  TrendingUp,
  Save,
  Clock,
  Sparkles,
  Search,
  UserPlus,
  Lock,
  Globe,
  AlertTriangle,
  UserCheck,
  Share2,
  Copy,
  CheckCheck,
  Link2,
  Crown,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    marketAnalyses,
    addMarketAnalysis,
    updateMarketAnalysis,
    deleteMarketAnalysis,
    liveSessions,
    updateLiveSession,
    addLiveSession,
    announcements,
    addAnnouncement,
    deleteAnnouncement,
    contactMessages,
    markMessageRead,
    course,
    pageParams,
    joinedMembers,
    deleteMember,
    registerMember,
    registerPlatinumMember,
    totalMembersCount,
    platinumMembersCount,
    activeRole,
    currentUser,
    navigateTo,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'analysis' | 'live' | 'announcements' | 'messages' | 'students'>(
    (pageParams.tab as any) || 'overview'
  );

  // Member search & filter state
  const [memberSearchQuery, setMemberSearchQuery] = useState('');
  const [memberFilterStatus, setMemberFilterStatus] = useState<string>('all');
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberCountry, setNewMemberCountry] = useState('Pakistan');
  const [newMemberTier, setNewMemberTier] = useState<'standard' | 'platinum'>('platinum');
  const [memberActionSuccess, setMemberActionSuccess] = useState('');

  // Share Student Links State
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    try {
      navigator.clipboard?.writeText(text);
    } catch (e) {
      // fallback
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // New Analysis Form State
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [anaPair, setAnaPair] = useState<'EURUSD' | 'XAUUSD' | 'GBPUSD'>('EURUSD');
  const [anaTitle, setAnaTitle] = useState('');
  const [anaBias, setAnaBias] = useState<'Bullish' | 'Bearish' | 'Neutral'>('Bullish');
  const [anaTimeframe, setAnaTimeframe] = useState('4H / 15M');
  const [anaSummary, setAnaSummary] = useState('');
  const [anaBullish, setAnaBullish] = useState('');
  const [anaBearish, setAnaBearish] = useState('');
  const [anaStructure, setAnaStructure] = useState('');
  const [anaFvg, setAnaFvg] = useState('');
  const [anaLiquidity, setAnaLiquidity] = useState('');
  const [anaKeyLevelLabel, setAnaKeyLevelLabel] = useState('Buy-Side Target');
  const [anaKeyLevelPrice, setAnaKeyLevelPrice] = useState('1.0850');

  const handleCreateAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnalysis: MarketAnalysis = {
      id: `ana-${Date.now()}`,
      pair: anaPair,
      title: anaTitle || `${anaPair} ${anaBias} Institutional Setup`,
      bias: anaBias,
      timeframe: anaTimeframe,
      author: 'Kumail Abbas',
      publishedAt: 'Today',
      summary: anaSummary || 'Institutional price action breakdown based on market structure and liquidity sweeps.',
      bullishScenario: anaBullish || 'Sustained displacement above key level triggers bullish continuation.',
      bearishScenario: anaBearish || 'Break below invalidation shifts bias toward discount liquidity.',
      marketStructure: anaStructure || 'Bullish order flow confirmed on 1H timeframe.',
      fvgObservation: anaFvg || 'Unmitigated 15M Fair Value Gap tapped cleanly.',
      liquidityZones: anaLiquidity || 'Equal highs resting as primary draw on liquidity.',
      keyLevels: [
        { label: anaKeyLevelLabel, price: anaKeyLevelPrice, type: 'liquidity' },
        { label: 'Invalidation Stop', price: '1.0740', type: 'support' },
      ],
      tags: [anaPair, 'ICT', 'SMC', anaBias],
    };

    addMarketAnalysis(newAnalysis);
    setShowAnalysisModal(false);
    // Reset
    setAnaTitle('');
    setAnaSummary('');
    setAnaBullish('');
    setAnaBearish('');
  };

  // Live Stream Control State
  const currentLive = liveSessions[0];
  const [liveStatus, setLiveStatus] = useState(currentLive?.status || 'scheduled');
  const [liveTitle, setLiveTitle] = useState(currentLive?.title || '');
  const [liveFocus, setLiveFocus] = useState(currentLive?.marketFocus || '');
  const [liveSchedule, setLiveSchedule] = useState(currentLive?.scheduledTime || '');
  const [liveSuccessMsg, setLiveSuccessMsg] = useState(false);

  const handleSaveLiveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentLive) return;
    updateLiveSession({
      ...currentLive,
      status: liveStatus as any,
      title: liveTitle,
      marketFocus: liveFocus,
      scheduledTime: liveSchedule,
    });
    setLiveSuccessMsg(true);
    setTimeout(() => setLiveSuccessMsg(false), 3000);
  };

  // Announcement State
  const [annTitle, setAnnTitle] = useState('');
  const [annContent, setAnnContent] = useState('');
  const [annCat, setAnnCat] = useState<'Live Alert' | 'Academy Update' | 'Market Brief' | 'Notice'>('Live Alert');

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle.trim() || !annContent.trim()) return;

    addAnnouncement({
      id: `ann-${Date.now()}`,
      title: annTitle,
      content: annContent,
      category: annCat,
      date: new Date().toISOString().split('T')[0],
      author: 'Kumail Abbas',
      isPinned: false,
    });

    setAnnTitle('');
    setAnnContent('');
  };

  // Strictly enforce exclusive admin access for Syed Kumail Abbas
  if (activeRole !== 'admin') {
    return (
      <div className="w-full min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#080B12]">
        <div className="max-w-md w-full p-8 rounded-2xl bg-[#101725] border border-rose-500/30 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400 font-bold">
              SECURITY ACCESS RESTRICTION
            </span>
            <h2 className="text-2xl font-extrabold text-white">Administrator Access Only</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              This portal is reserved exclusively for <strong className="text-white">SYED KUMAIL ABBAS</strong> (<span className="text-cyan-400">syedkumails62@gmail.com</span>). Non-administrator users and public guests cannot access management controls or student records.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-[#080B12] border border-white/[0.06] text-[11px] font-mono text-slate-400">
            Active Session: {activeRole === 'student' ? 'Student Account' : 'Public Visitor (Guest)'}
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => navigateTo('login')}
              className="w-full py-3 bg-gradient-to-r from-[#1677FF] to-[#0088FF] hover:from-[#1366DB] text-white rounded-lg text-xs font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Log In as Syed Kumail Abbas</span>
            </button>
            <button
              onClick={() => navigateTo('home')}
              className="w-full py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Admin Header */}
      <section className="py-10 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>KUMAILFX HEADQUARTERS · EXCLUSIVE ADMINISTRATOR CONTROL</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Administrator Dashboard
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Logged in as: Syed Kumail Abbas</span>
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">syedkumails62@gmail.com</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Exclusive Admin Access Active</span>
          </div>
        </div>
      </section>

      {/* Admin Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/[0.08]">
          {[
            { id: 'overview', label: 'Platform Overview', icon: <TrendingUp className="w-3.5 h-3.5" /> },
            { id: 'students', label: `Members & Student Roster (${joinedMembers.length})`, icon: <Users className="w-3.5 h-3.5" /> },
            { id: 'analysis', label: 'Market Analysis', icon: <BarChart3 className="w-3.5 h-3.5" /> },
            { id: 'live', label: 'Live Stream & Schedule', icon: <Radio className="w-3.5 h-3.5" /> },
            { id: 'announcements', label: 'Broadcast Announcements', icon: <Bell className="w-3.5 h-3.5" /> },
            { id: 'messages', label: 'Contact Inquiries', icon: <Mail className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-[#101725]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 1. OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
              
              {/* Member Count Metric */}
              <div
                onClick={() => setActiveTab('students')}
                className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-blue-900/40 via-[#101725] to-[#101725] border border-blue-500/40 hover:border-blue-400 cursor-pointer transition-all space-y-2 shadow-lg shadow-blue-500/10 group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                  <span>Members Joined</span>
                  <Users className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {totalMembersCount.toLocaleString()}
                </div>
                <div className="text-[11px] text-cyan-400 font-mono">
                  {joinedMembers.length} Registered Accounts · Live
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-2">
                <div className="text-xs font-mono text-slate-400">Academy Lessons</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{course.totalLessons}</div>
                <div className="text-[11px] text-cyan-400 font-mono">6 Complete Modules</div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-2">
                <div className="text-xs font-mono text-slate-400">Published Analyses</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">{marketAnalyses.length}</div>
                <div className="text-[11px] text-slate-500 font-mono">EURUSD, XAUUSD, GBPUSD</div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-2">
                <div className="text-xs font-mono text-slate-400">Contact Queries</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">{contactMessages.length}</div>
                <div className="text-[11px] text-slate-500 font-mono">
                  {contactMessages.filter((m) => m.status === 'unread').length} Unread
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-2">
                <div className="text-xs font-mono text-slate-400">Live Stream</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1 capitalize">
                  {currentLive.status}
                </div>
                <div className="text-[11px] text-rose-400 font-mono">
                  {currentLive.status === 'live' ? 'Broadcasting Now' : 'Scheduled on YouTube'}
                </div>
              </div>
            </div>

            {/* Recent Member Signups Mini Preview */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>Recent Student Registrations</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Live feed of students who recently created accounts and joined KUMAILFX.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('students')}
                  className="px-3.5 py-1.5 bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white rounded-lg text-xs font-semibold font-mono border border-blue-500/30 transition-colors"
                >
                  View All ({joinedMembers.length}) Members →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {joinedMembers.slice(0, 6).map((mem) => (
                  <div
                    key={mem.id}
                    className="p-3.5 rounded-xl bg-[#080B12] border border-white/[0.06] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {mem.fullName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">{mem.fullName}</div>
                        <div className="text-[10px] text-slate-400 font-mono truncate">{mem.email}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                        {mem.progressPercent}% Done
                      </span>
                      <div className="text-[9px] text-slate-500 font-mono mt-0.5">{mem.country}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-white">
                Administrative Quick Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setActiveTab('analysis');
                    setShowAnalysisModal(true);
                  }}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish New Market Analysis</span>
                </button>
                <button
                  onClick={() => setActiveTab('live')}
                  className="px-4 py-2.5 bg-[#080B12] hover:bg-slate-800 text-slate-200 border border-white/[0.1] rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Radio className="w-4 h-4 text-rose-400" />
                  <span>Manage Live Market Stream</span>
                </button>
                <button
                  onClick={() => setActiveTab('announcements')}
                  className="px-4 py-2.5 bg-[#080B12] hover:bg-slate-800 text-slate-200 border border-white/[0.1] rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Bell className="w-4 h-4 text-amber-400" />
                  <span>Broadcast Student Alert</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. MARKET ANALYSIS MANAGER */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Market Analysis Manager
                </h3>
                <p className="text-xs text-slate-400">
                  Publish or modify technical setups for EURUSD, XAUUSD, and GBPUSD.
                </p>
              </div>

              <button
                onClick={() => setShowAnalysisModal(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-md transition-colors self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Publish New Setup</span>
              </button>
            </div>

            {/* Analysis List */}
            <div className="space-y-3">
              {marketAnalyses.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-white text-base">
                        {item.pair}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          item.bias === 'Bullish'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {item.bias}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {item.timeframe} · {item.publishedAt}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{item.summary}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => deleteMarketAnalysis(item.id)}
                      className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Delete Analysis"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal: Publish Analysis */}
            {showAnalysisModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <form
                  onSubmit={handleCreateAnalysis}
                  className="bg-[#101725] border border-slate-700 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-base font-bold text-white">Publish Market Analysis</h3>
                    <button
                      type="button"
                      onClick={() => setShowAnalysisModal(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                    <div>
                      <label className="text-slate-400 block mb-1">Pair</label>
                      <select
                        value={anaPair}
                        onChange={(e) => setAnaPair(e.target.value as any)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      >
                        <option value="EURUSD">EURUSD</option>
                        <option value="XAUUSD">XAUUSD (Gold)</option>
                        <option value="GBPUSD">GBPUSD</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">Bias</label>
                      <select
                        value={anaBias}
                        onChange={(e) => setAnaBias(e.target.value as any)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      >
                        <option value="Bullish">Bullish</option>
                        <option value="Bearish">Bearish</option>
                        <option value="Neutral">Neutral</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">Timeframe</label>
                      <input
                        type="text"
                        value={anaTimeframe}
                        onChange={(e) => setAnaTimeframe(e.target.value)}
                        placeholder="4H / 15M"
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block text-xs font-mono mb-1">Setup Headline</label>
                    <input
                      type="text"
                      required
                      value={anaTitle}
                      onChange={(e) => setAnaTitle(e.target.value)}
                      placeholder="e.g. EURUSD London Open Liquidity Pool Sweep & BOS"
                      className="w-full p-2 text-sm bg-[#080B12] border border-white/[0.1] rounded text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block text-xs font-mono mb-1">Executive Summary</label>
                    <textarea
                      rows={2}
                      required
                      value={anaSummary}
                      onChange={(e) => setAnaSummary(e.target.value)}
                      placeholder="Brief description of the institutional thesis..."
                      className="w-full p-2 text-xs bg-[#080B12] border border-white/[0.1] rounded text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-emerald-400 font-mono block mb-1">Bullish Scenario</label>
                      <textarea
                        rows={2}
                        value={anaBullish}
                        onChange={(e) => setAnaBullish(e.target.value)}
                        placeholder="Displacement trigger and targets..."
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>

                    <div>
                      <label className="text-rose-400 font-mono block mb-1">Bearish Invalidation</label>
                      <textarea
                        rows={2}
                        value={anaBearish}
                        onChange={(e) => setAnaBearish(e.target.value)}
                        placeholder="Invalidation level and downside targets..."
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div>
                      <label className="text-slate-400 block mb-1">Key Level Label</label>
                      <input
                        type="text"
                        value={anaKeyLevelLabel}
                        onChange={(e) => setAnaKeyLevelLabel(e.target.value)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Key Level Price</label>
                      <input
                        type="text"
                        value={anaKeyLevelPrice}
                        onChange={(e) => setAnaKeyLevelPrice(e.target.value)}
                        className="w-full p-2 bg-[#080B12] border border-white/[0.1] rounded text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowAnalysisModal(false)}
                      className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded shadow"
                    >
                      Publish Analysis Instantly
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 3. LIVE STREAM & SCHEDULE MANAGER */}
        {activeTab === 'live' && (
          <div className="max-w-2xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Live Stream Control Center
              </h3>
              <p className="text-xs text-slate-400">
                Update the active broadcast status, schedule, and market focus on the public Live Trading page.
              </p>
            </div>

            {liveSuccessMsg && (
              <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Live session configuration saved and live on the public website!</span>
              </div>
            )}

            <form
              onSubmit={handleSaveLiveSettings}
              className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Stream Status
                </label>
                <select
                  value={liveStatus}
                  onChange={(e) => setLiveStatus(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white font-mono focus:outline-none"
                >
                  <option value="scheduled">Scheduled (Session is upcoming)</option>
                  <option value="live">LIVE NOW (Broadcast active)</option>
                  <option value="completed">Completed (Archived)</option>
                </select>
                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  * Only select "LIVE NOW" when actively streaming to YouTube.
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Session Title
                </label>
                <input
                  type="text"
                  value={liveTitle}
                  onChange={(e) => setLiveTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Market Focus
                </label>
                <input
                  type="text"
                  value={liveFocus}
                  onChange={(e) => setLiveFocus(e.target.value)}
                  placeholder="e.g. EURUSD, GBPUSD & Gold (XAUUSD)"
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Schedule Notice (PKT Time)
                </label>
                <input
                  type="text"
                  value={liveSchedule}
                  onChange={(e) => setLiveSchedule(e.target.value)}
                  placeholder="Today at 12:30 PM PKT (07:30 UTC)"
                  className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save & Update Public Live Page</span>
              </button>
            </form>
          </div>
        )}

        {/* 4. BROADCAST ANNOUNCEMENTS */}
        {activeTab === 'announcements' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-xl font-bold text-white">
                Broadcast Announcements
              </h3>
              <p className="text-xs text-slate-400">
                Send notices that appear on the student dashboard and homepage.
              </p>
            </div>

            <form
              onSubmit={handleCreateAnnouncement}
              className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={annCat}
                  onChange={(e) => setAnnCat(e.target.value as any)}
                  className="w-full p-2.5 bg-[#080B12] border border-white/[0.1] rounded text-xs text-white"
                >
                  <option value="Live Alert">Live Alert</option>
                  <option value="Academy Update">Academy Update</option>
                  <option value="Market Brief">Market Brief</option>
                  <option value="Notice">Notice</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Announcement Title
                </label>
                <input
                  type="text"
                  required
                  value={annTitle}
                  onChange={(e) => setAnnTitle(e.target.value)}
                  placeholder="e.g. London Session Market Opening Alert"
                  className="w-full p-2.5 bg-[#080B12] border border-white/[0.1] rounded text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Message Content
                </label>
                <textarea
                  rows={3}
                  required
                  value={annContent}
                  onChange={(e) => setAnnContent(e.target.value)}
                  placeholder="Write the message for your students..."
                  className="w-full p-2.5 bg-[#080B12] border border-white/[0.1] rounded text-xs text-white"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded shadow"
              >
                Broadcast Announcement
              </button>
            </form>

            <div className="space-y-3 pt-4">
              <h4 className="text-xs font-mono uppercase text-slate-400">
                Active Broadcasts ({announcements.length})
              </h4>
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="p-4 rounded-xl bg-[#101725] border border-white/[0.06] flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                      {ann.category} · {ann.date}
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">{ann.title}</div>
                    <p className="text-xs text-slate-400 mt-1">{ann.content}</p>
                  </div>
                  <button
                    onClick={() => deleteAnnouncement(ann.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                    title="Delete announcement"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. CONTACT INQUIRIES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Contact Messages & Mentorship Inquiries
              </h3>
              <p className="text-xs text-slate-400">
                Review submitted questions and contact forms from students.
              </p>
            </div>

            {contactMessages.length > 0 ? (
              <div className="space-y-3">
                {contactMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-6 rounded-2xl border transition-all space-y-3 ${
                      msg.status === 'unread'
                        ? 'bg-[#101725] border-blue-500/40 shadow-lg shadow-blue-500/10'
                        : 'bg-[#0A0E18] border-white/[0.06]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-base font-bold text-white font-sans">
                          {msg.fullName}
                        </div>
                        <div className="text-xs text-cyan-300 font-mono">
                          {msg.email} · Received: {msg.submittedAt}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {msg.status === 'unread' ? (
                          <button
                            onClick={() => markMessageRead(msg.id)}
                            className="px-3 py-1 bg-blue-600/60 hover:bg-blue-600 text-white rounded text-xs font-semibold"
                          >
                            Mark Read
                          </button>
                        ) : (
                          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>Reviewed</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-200 font-mono">
                        Subject: {msg.subject}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed bg-[#080B12] p-3 rounded-lg border border-white/[0.04]">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 font-mono rounded-xl bg-[#101725] border border-white/[0.06]">
                No contact inquiries submitted yet.
              </div>
            )}
          </div>
        )}

        {/* 6. MEMBERS & STUDENT ROSTER */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            
            {/* Header with Live Counter Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>KUMAILFX MEMBER DIRECTORY & LIVE TRACKER</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mt-1">
                  Members Joined & Student Roster
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                  Live database of all traders registered under KUMAILFX. Every new member who signs up via Join Now or Register is tracked here in real-time.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="px-4 py-2.5 bg-[#080B12] hover:bg-[#152033] text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 rounded-lg text-xs font-bold shadow-md flex items-center gap-2 transition-all"
                >
                  <Share2 className="w-4 h-4 text-cyan-400" />
                  <span>Share Student Links</span>
                </button>
                <button
                  onClick={() => setShowAddMemberModal(true)}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#1677FF] to-[#0088FF] hover:from-[#1366DB] text-white rounded-lg text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Enroll New Student</span>
                </button>
              </div>
            </div>

            {/* Live Counter Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#101725] border border-blue-500/30 space-y-1">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Total Members Joined</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                  {totalMembersCount.toLocaleString()}
                </div>
                <div className="text-[11px] text-cyan-400 font-mono">
                  Calculated from verified platform signups
                </div>
              </div>

              {/* Platinum Members $100 Tier Card */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-amber-950/40 via-[#101725] to-[#101725] border border-amber-500/40 space-y-1 shadow-lg shadow-amber-500/10">
                <div className="text-xs font-mono text-amber-300 flex items-center justify-between font-bold">
                  <span>Binary Premium Platinum</span>
                  <Crown className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-amber-300 font-mono tabular-nums">
                  {platinumMembersCount}
                </div>
                <div className="text-[11px] text-amber-400/90 font-mono">
                  ${(platinumMembersCount * 100).toLocaleString()} USD · $100 Bundle Enrolled
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-1">
                <div className="text-xs font-mono text-slate-400">Registered Accounts</div>
                <div className="text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
                  {joinedMembers.length}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Active in Student Dashboard & LMS
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-1">
                <div className="text-xs font-mono text-slate-400">Master Administrator</div>
                <div className="text-lg font-bold text-white font-sans truncate">
                  Syed Kumail Abbas
                </div>
                <div className="text-[11px] text-emerald-400 font-mono truncate">
                  syedkumails62@gmail.com · Full Access
                </div>
              </div>
            </div>

            {/* Member Action Success Toast */}
            {memberActionSuccess && (
              <div className="p-3.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{memberActionSuccess}</span>
              </div>
            )}

            {/* Filter and Search Bar */}
            <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={memberSearchQuery}
                  onChange={(e) => setMemberSearchQuery(e.target.value)}
                  placeholder="Search members by name, email, or country..."
                  className="w-full pl-9 pr-4 py-2 bg-[#080B12] border border-white/[0.1] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                <span className="text-slate-400 text-[11px] hidden md:inline">Filter:</span>
                {[
                  { id: 'all', label: 'All Members' },
                  { id: 'platinum', label: `★ Platinum ($100 Bundle) [${platinumMembersCount}]` },
                  { id: 'standard', label: 'Standard Students' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setMemberFilterStatus(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                      memberFilterStatus === tab.id
                        ? tab.id === 'platinum'
                          ? 'bg-amber-500 text-black font-extrabold shadow'
                          : 'bg-blue-600 text-white font-bold'
                        : 'bg-[#080B12] text-slate-400 hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Member Roster Table */}
            <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#101725] shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-[#080B12] text-slate-400 font-mono border-b border-white/[0.08]">
                    <tr>
                      <th className="p-3.5">Student / Member</th>
                      <th className="p-3.5">Email Address</th>
                      <th className="p-3.5">Location</th>
                      <th className="p-3.5">Joined Date</th>
                      <th className="p-3.5">Academy Progress</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] text-slate-300">
                    
                    {/* Administrator Fixed Row */}
                    <tr className="bg-blue-950/20 hover:bg-blue-900/30 transition-colors">
                      <td className="p-3.5 font-bold text-white flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white font-mono text-[11px] font-bold shadow">
                          KA
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span>Syed Kumail Abbas</span>
                            <span className="px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-300 text-[9px] font-mono font-bold">
                              ADMIN
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">Platform Founder</div>
                        </div>
                      </td>
                      <td className="p-3.5 text-cyan-300 font-mono">syedkumails62@gmail.com</td>
                      <td className="p-3.5 text-slate-400 font-mono">Pakistan (PKT)</td>
                      <td className="p-3.5 text-slate-400 font-mono">2024-01-15</td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-blue-400 w-full" />
                          </div>
                          <span className="text-[11px] font-mono text-blue-300 font-bold">100%</span>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 font-bold text-[10px] font-mono">
                          Master Admin
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <span className="text-[10px] font-mono text-slate-500">Protected</span>
                      </td>
                    </tr>

                    {/* Filtered Members List */}
                    {joinedMembers
                      .filter((mem) => {
                        const q = memberSearchQuery.toLowerCase();
                        const countryStr = (mem.country || '').toLowerCase();
                        const matchesQuery =
                          !q ||
                          mem.fullName.toLowerCase().includes(q) ||
                          mem.email.toLowerCase().includes(q) ||
                          countryStr.includes(q);
                        const matchesFilter =
                          memberFilterStatus === 'all'
                            ? true
                            : memberFilterStatus === 'platinum'
                            ? mem.membershipTier === 'Binary Premium Platinum'
                            : mem.membershipTier !== 'Binary Premium Platinum';
                        return matchesQuery && matchesFilter;
                      })
                      .map((mem) => {
                        const isPlatinum = mem.membershipTier === 'Binary Premium Platinum';

                        return (
                          <tr
                            key={mem.id}
                            className={`transition-colors ${
                              isPlatinum
                                ? 'bg-amber-950/10 hover:bg-amber-950/20'
                                : 'hover:bg-white/[0.02]'
                            }`}
                          >
                            <td className="p-3.5 font-bold text-white flex items-center gap-2.5">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold ${
                                  isPlatinum
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                    : 'bg-slate-800 text-slate-300'
                                }`}
                              >
                                {isPlatinum ? <Crown className="w-3.5 h-3.5 text-amber-400" /> : mem.fullName.charAt(0)}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span>{mem.fullName}</span>
                                  {isPlatinum && (
                                    <span className="px-1.5 py-0.2 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[9px] font-mono font-bold flex items-center gap-1">
                                      <span>★ PLATINUM ($100)</span>
                                    </span>
                                  )}
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {isPlatinum ? 'Binary Non-OTC EURUSD Bundle' : 'Forex & SMC Foundation'} · Last: {mem.lastActive}
                                </div>
                              </div>
                            </td>
                            <td className="p-3.5 text-slate-300 font-mono text-xs">{mem.email}</td>
                            <td className="p-3.5 text-slate-400 font-mono">
                              <div className="flex items-center gap-1.5">
                                <Globe className="w-3 h-3 text-slate-500" />
                                <span>{mem.country || 'Global'}</span>
                              </div>
                            </td>
                            <td className="p-3.5 text-slate-400 font-mono">{mem.joinedDate}</td>
                            <td className="p-3.5">
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${
                                      isPlatinum ? 'bg-amber-400' : 'bg-emerald-400'
                                    }`}
                                    style={{ width: `${mem.progressPercent}%` }}
                                  />
                                </div>
                                <span
                                  className={`text-[11px] font-mono ${
                                    isPlatinum ? 'text-amber-300' : 'text-emerald-400'
                                  }`}
                                >
                                  {mem.progressPercent}%
                                </span>
                              </div>
                            </td>
                            <td className="p-3.5">
                              <span
                                className={`px-2 py-0.5 rounded font-bold text-[10px] font-mono ${
                                  isPlatinum
                                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                                    : 'bg-emerald-500/15 text-emerald-400'
                                }`}
                              >
                                {mem.status} {mem.amountPaid && `· ${mem.amountPaid}`}
                              </span>
                            </td>
                            <td className="p-3.5 text-right">
                              <button
                                onClick={() => {
                                  if (confirm(`Remove ${mem.fullName} from member directory?`)) {
                                    deleteMember(mem.id);
                                    setMemberActionSuccess(`Member ${mem.fullName} removed successfully.`);
                                    setTimeout(() => setMemberActionSuccess(''), 3000);
                                  }
                                }}
                                className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                                title="Delete Member Account"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}

                    {joinedMembers.length === 0 && (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-slate-500 font-mono text-xs">
                          No members in roster yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal: Enroll New Student */}
            {showAddMemberModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newMemberName.trim() || !newMemberEmail.trim()) return;
                    if (newMemberTier === 'platinum') {
                      registerPlatinumMember(newMemberName.trim(), newMemberEmail.trim(), newMemberCountry);
                      setMemberActionSuccess(`Platinum Student "${newMemberName}" enrolled in BINARY PREMIUM PLATINUM ($100 Bundle)!`);
                    } else {
                      registerMember(newMemberName.trim(), newMemberEmail.trim(), newMemberCountry);
                      setMemberActionSuccess(`Student "${newMemberName}" enrolled as Standard Member!`);
                    }
                    setShowAddMemberModal(false);
                    setNewMemberName('');
                    setNewMemberEmail('');
                    setTimeout(() => setMemberActionSuccess(''), 3500);
                  }}
                  className="bg-[#101725] border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <UserPlus className="w-5 h-5 text-blue-400" />
                      <h3 className="text-base font-bold text-white">Enroll New Student</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowAddMemberModal(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div>
                    <label className="text-slate-300 block text-xs font-mono mb-1">
                      Membership Tier
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => setNewMemberTier('platinum')}
                        className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all ${
                          newMemberTier === 'platinum'
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                            : 'bg-[#080B12] border-white/[0.08] text-slate-400'
                        }`}
                      >
                        <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <div>
                          <div>Binary Platinum</div>
                          <div className="text-[10px] text-amber-400/80">$100 Bundle</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewMemberTier('standard')}
                        className={`p-2.5 rounded-lg border text-left flex items-center gap-2 transition-all ${
                          newMemberTier === 'standard'
                            ? 'bg-blue-600/20 border-blue-500 text-cyan-300 font-bold'
                            : 'bg-[#080B12] border-white/[0.08] text-slate-400'
                        }`}
                      >
                        <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <div>
                          <div>Standard Student</div>
                          <div className="text-[10px] text-slate-500">Free Tier</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 block text-xs font-mono mb-1">
                      Full Student Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newMemberName}
                      onChange={(e) => setNewMemberName(e.target.value)}
                      placeholder="e.g. Tariq Khan"
                      className="w-full p-2.5 text-sm bg-[#080B12] border border-white/[0.1] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block text-xs font-mono mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={newMemberEmail}
                      onChange={(e) => setNewMemberEmail(e.target.value)}
                      placeholder="tariq@example.com"
                      className="w-full p-2.5 text-sm bg-[#080B12] border border-white/[0.1] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block text-xs font-mono mb-1">
                      Country / Region
                    </label>
                    <select
                      value={newMemberCountry}
                      onChange={(e) => setNewMemberCountry(e.target.value)}
                      className="w-full p-2.5 text-xs bg-[#080B12] border border-white/[0.1] rounded-lg text-white font-mono"
                    >
                      <option value="Pakistan">Pakistan</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowAddMemberModal(false)}
                      className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg shadow"
                    >
                      Enroll & Track Member
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Modal: Share Student Links */}
            {showShareModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <div className="bg-[#101725] border border-slate-700 rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h3 className="text-base font-bold text-white">Student Access Links</h3>
                        <p className="text-[11px] text-slate-400 font-mono">
                          Direct links to share with your students via WhatsApp, Telegram, or YouTube.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowShareModal(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        key: 'binary-platinum',
                        title: '★ BINARY NON OTC EURUSD A TO Z $100 BUNDLE LINK',
                        desc: 'Direct enrollment into BINARY PREMIUM PLATINUM MEMBERS. Auto-provisions $100 tier on registration.',
                        path: '/?page=binary-platinum',
                      },
                      {
                        key: 'trading-tech',
                        title: '★ MY TRADING TECHNOLOGY & EXPERIENCE BRIEF',
                        desc: 'Futures order flow (Tradovate DOM), Tradfye 1M/5M binary workflow, and alignment pipeline.',
                        path: '/?page=trading-technology',
                      },
                      {
                        key: 'register',
                        title: '1. New Student Registration Link (Join Free)',
                        desc: 'Send to new students so they can join KUMAILFX and register their free account.',
                        path: '/?page=register',
                      },
                      {
                        key: 'academy',
                        title: '2. Trading Academy Lessons Link',
                        desc: 'Direct link to all 6 modules, 32 video lessons, and curriculum resources.',
                        path: '/?page=academy',
                      },
                      {
                        key: 'login',
                        title: '3. Student Portal Login Link',
                        desc: 'For enrolled students returning to their personal student portal and trade journal.',
                        path: '/?page=login',
                      },
                      {
                        key: 'live',
                        title: '4. Live Trading Sessions Link',
                        desc: 'Direct access to YouTube live streams, London/NY killzone schedules, and archives.',
                        path: '/?page=live-trading',
                      },
                      {
                        key: 'tools',
                        title: '5. Forex Position Size & Risk Calculator',
                        desc: 'Free tools for lot sizing, risk-to-reward ratio, and session clock.',
                        path: '/?page=trading-tools',
                      },
                      {
                        key: 'home',
                        title: '6. KUMAILFX Homepage',
                        desc: 'Complete overview of the academy, founder story, and community.',
                        path: '/',
                      },
                    ].map((item) => {
                      const fullUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://ais-pre-qhxt3vsvsdqvy35mlzuzf2-668180107792.asia-northeast1.run.app'}${item.path}`;
                      const isCopied = copiedKey === item.key;

                      return (
                        <div
                          key={item.key}
                          className="p-3.5 rounded-xl bg-[#080B12] border border-white/[0.08] space-y-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-white">{item.title}</span>
                            <button
                              onClick={() => copyToClipboard(fullUrl, item.key)}
                              className={`px-3 py-1 rounded text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all ${
                                isCopied
                                  ? 'bg-emerald-500 text-white'
                                  : 'bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/40'
                              }`}
                            >
                              {isCopied ? (
                                <>
                                  <CheckCheck className="w-3.5 h-3.5" />
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy Link</span>
                                </>
                              )}
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-400">{item.desc}</p>
                          <div className="p-2 bg-[#101725] rounded border border-white/[0.04] text-[10px] font-mono text-cyan-400 truncate select-all">
                            {fullUrl}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-2 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowShareModal(false)}
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Row Level Security Guarantee Info Box */}
            <div className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] text-xs text-slate-400 space-y-1">
              <div className="font-bold text-white font-mono flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Administrator Security Guarantee & Member Tracking</span>
              </div>
              <p>
                Only Syed Kumail Abbas (<span className="text-cyan-400">syedkumails62@gmail.com</span>) can view this roster and the live member count. Student accounts are isolated and cannot access administrator endpoints or other students' private trade journals.
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
