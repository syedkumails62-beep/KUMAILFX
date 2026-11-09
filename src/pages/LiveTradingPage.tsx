/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/seedData';
import {
  Radio,
  Calendar,
  Clock,
  Youtube,
  ShieldAlert,
  PlayCircle,
  ExternalLink,
  CheckCircle,
  User,
  Settings,
} from 'lucide-react';

export const LiveTradingPage: React.FC = () => {
  const { liveSessions, activeRole, navigateTo } = useApp();
  const currentSession = liveSessions.find((s) => s.status === 'live' || s.status === 'scheduled') || liveSessions[0];
  const previousSessions = liveSessions.filter((s) => s.id !== currentSession.id);

  const [activeRecording, setActiveRecording] = useState<string | null>(null);

  const isLiveNow = currentSession.status === 'live';

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-14 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
                REAL-TIME INSTITUTIONAL MARKUPS
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                KUMAILFX LIVE MARKET SESSIONS
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-1 leading-relaxed">
                Join Kumail Abbas for structured London Open and New York session execution analysis, real-time liquidity sweeps, and live Q&A.
              </p>
            </div>

            {/* Admin shortcut */}
            {activeRole === 'admin' && (
              <button
                onClick={() => navigateTo('admin-dashboard', { tab: 'live' })}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-md"
              >
                <Settings className="w-4 h-4" />
                <span>Manage Live Stream (Admin)</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Live Stream & Session Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stream Player Container (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="relative rounded-2xl overflow-hidden bg-[#05070D] border border-white/[0.12] shadow-2xl">
              
              {/* Top Status Bar */}
              <div className="p-4 bg-[#0E1524] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isLiveNow ? (
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-rose-500/20 text-rose-400 border border-rose-500/40 text-xs font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>LIVE BROADCAST NOW</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#101725] text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>SESSION SCHEDULED</span>
                    </div>
                  )}
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    {currentSession.scheduledTime}
                  </span>
                </div>

                <a
                  href={FOUNDER_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1.5"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* YouTube Embed Frame / Live Room */}
              <div className="relative aspect-video w-full bg-[#05070D] flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-[#080B12]/50 z-10" />
                <img
                  src={FOUNDER_INFO.portraitImage}
                  alt="KUMAILFX Live Studio"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-30 filter blur-[1px]"
                />

                <div className="relative z-20 text-center space-y-4 max-w-lg px-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-600/30 border border-blue-400/30 text-xs font-mono text-cyan-300">
                    <Radio className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                    <span>KUMAILFX LIVE TRADING ROOM</span>
                    <span className="text-slate-500">·</span>
                    <span>YOUTUBE OFFICIAL</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                    {currentSession.title}
                  </h3>

                  <div className="text-xs text-slate-300 font-mono">
                    Schedule: <span className="text-cyan-300 font-bold">{currentSession.scheduledTime}</span>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={currentSession.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-95 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-500/25 transition-all"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>Join Live Stream on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Focus: {currentSession.marketFocus}</span>
                  </div>
                  <span>Host: Kumail Abbas</span>
                </div>
              </div>

              {/* Session Meta Card */}
              <div className="p-6 bg-[#0E1524] space-y-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold">
                    Market Focus: {currentSession.marketFocus}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {currentSession.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentSession.description}
                </p>

                {currentSession.notes && (
                  <div className="p-3.5 rounded-lg bg-[#080B12] border border-white/[0.06] text-xs text-slate-400">
                    <span className="text-white font-semibold font-mono">Educator Note:</span>{' '}
                    {currentSession.notes}
                  </div>
                )}
              </div>
            </div>

            {/* Educational Disclaimer Banner */}
            <div className="p-4 rounded-xl bg-[#101725]/60 border border-amber-500/20 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 space-y-1">
                <div className="font-bold text-amber-300 font-mono">
                  Educational Execution Policy:
                </div>
                <p>
                  All live streams and recordings are strictly educational case studies designed to teach chart markup, Fair Value Gap reactions, and risk parameters. We do not provide financial signals, investment advice, or trade copying services.
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar Schedule & Host Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Host Profile Card */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={FOUNDER_INFO.portraitImage}
                  alt={FOUNDER_INFO.name}
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-blue-500/40"
                />
                <div>
                  <div className="font-bold text-white text-base font-sans">
                    {FOUNDER_INFO.name}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">
                    Head Trading Educator
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Host of KUMAILFX Live
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-xs text-slate-300 leading-relaxed">
                Tune in directly during London Open Killzone for high-probability market structure breakdown and real-time liquidity analysis.
              </div>

              <a
                href={FOUNDER_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold text-center text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Youtube className="w-4 h-4" />
                <span>Subscribe on YouTube</span>
              </a>
            </div>

            {/* Live Session Schedule Card */}
            <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00D5FF] font-bold">
                <Calendar className="w-4 h-4" />
                <span>Weekly Live Schedule</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-cyan-300 font-semibold">
                    <span>London Open Killzone</span>
                    <span className="font-mono text-[11px]">Mon – Thu</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    12:00 PM – 02:00 PM PKT (07:00 – 09:00 UTC)
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Focus: EURUSD & GBPUSD Asian sweep setups.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#080B12] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-blue-300 font-semibold">
                    <span>New York Session Open</span>
                    <span className="font-mono text-[11px]">Tue & Thu</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    05:00 PM – 07:00 PM PKT (12:00 – 14:00 UTC)
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Focus: Gold (XAUUSD) & High-Impact News reactions.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Previous Live Sessions & Recordings Archive */}
        <div className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#1677FF] font-bold">
                RECORDED SESSIONS ARCHIVE
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">
                Previous Live Stream Recordings
              </h2>
            </div>
            <a
              href={FOUNDER_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-400 hover:text-white flex items-center gap-1"
            >
              <span>View All on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousSessions.map((session) => (
              <div
                key={session.id}
                className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400">{session.marketFocus}</span>
                    <span>{session.scheduledTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {session.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {session.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Host: {session.host}
                  </span>
                  <a
                    href={session.recordingUrl || FOUNDER_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 rounded flex items-center gap-1.5 transition-colors"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Watch Recording</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
