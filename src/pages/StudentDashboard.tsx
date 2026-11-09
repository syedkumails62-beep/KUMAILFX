/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  PlayCircle,
  Bookmark,
  CheckCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  Bell,
  User,
  Radio,
  FileText,
  Crown,
  Sparkles,
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const {
    currentUser,
    course,
    completedLessonIds,
    savedLessonIds,
    setCurrentLessonId,
    navigateTo,
    announcements,
    stats,
    journalEntries,
    joinedMembers,
    pageParams,
  } = useApp();

  const allLessons = course.modules.flatMap((m) => m.lessons);

  // Saved lessons objects
  const savedLessons = allLessons.filter((l) => savedLessonIds.includes(l.id));

  // Resume lesson (first uncompleted or default)
  const resumeLesson =
    allLessons.find((l) => !completedLessonIds.includes(l.id)) || allLessons[0];

  const currentMemberRecord = joinedMembers.find(
    (m) => m.email.toLowerCase() === (currentUser?.email || '').toLowerCase()
  );
  const isPlatinum =
    currentMemberRecord?.membershipTier === 'Binary Premium Platinum' ||
    Boolean(pageParams.justEnrolledPlatinum);

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Welcome Banner */}
      <section className="py-10 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1677FF] to-[#00D5FF] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#101725] rounded-full flex items-center justify-center font-bold text-xl text-white font-mono">
                  {currentUser?.fullName.charAt(0) || 'S'}
                </div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  STUDENT PORTAL
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Welcome back, {currentUser?.fullName || 'Student Trader'}
                </h1>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Account: {currentUser?.email || 'student@kumailfx.com'} · Role: Enrolled Student
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentLessonId(resumeLesson.id);
                navigateTo('academy');
              }}
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#1677FF] to-[#00D5FF] hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all self-start md:self-auto"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Resume Last Lesson</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-400">Course Progress</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              {stats.progressPercentage}%
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              {stats.completedCount} / {stats.totalLessons} Completed
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-400">Saved Bookmarks</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              {savedLessonIds.length}
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Quick access lessons
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-400">Journaled Trades</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1677FF] font-mono tabular-nums">
              {journalEntries.length}
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Active trade executions
            </div>
          </div>

          <div className={`p-5 rounded-xl border space-y-1 ${
            isPlatinum
              ? 'bg-gradient-to-br from-amber-950/30 to-[#101725] border-amber-500/40 shadow-lg shadow-amber-500/10'
              : 'bg-[#101725] border-white/[0.08]'
          }`}>
            <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Membership Tier</span>
              {isPlatinum && <Crown className="w-3.5 h-3.5 text-amber-400" />}
            </div>
            <div className={`text-base sm:text-lg font-bold font-mono mt-1 ${
              isPlatinum ? 'text-amber-300' : 'text-white'
            }`}>
              {isPlatinum ? 'Binary Platinum' : 'Active Student'}
            </div>
            <div className={`text-[11px] font-mono ${
              isPlatinum ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              {isPlatinum ? '$100 Bundle Enrolled' : 'Standard Access'}
            </div>
          </div>
        </div>

        {/* Binary Premium Platinum Celebration / Access Banner */}
        {isPlatinum ? (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#101725] to-[#151D2F] border border-amber-500/50 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-300 font-bold">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span>BINARY PREMIUM PLATINUM MEMBER ACCESS UNLOCKED</span>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl">
                  You are registered in the private Platinum tier. You have full access to Non-OTC EURUSD strategies, Tradovate Level II order flow, Tradfye 1M/5M momentum timing, and VIP mentorship.
                </p>
              </div>

              <button
                onClick={() => navigateTo('trading-technology')}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 text-black font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all self-start sm:self-auto shrink-0"
              >
                <span>Open Microstructure Technology</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/20 via-[#101725] to-[#0A0E18] border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>EXCLUSIVE UPGRADE AVAILABLE</span>
              </div>
              <h3 className="text-base font-bold text-white">
                BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE ($100)
              </h3>
              <p className="text-xs text-slate-400 max-w-2xl">
                Upgrade to trade authentic exchange order flow with Tradovate DOM and Tradfye binary timing. Automatically registers you into the BINARY PREMIUM PLATINUM MEMBERS directory.
              </p>
            </div>

            <button
              onClick={() => navigateTo('binary-platinum')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all shrink-0 self-start sm:self-auto"
            >
              <span>REGISTER NOW ($100)</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        )}

        {/* Enrolled Course & Resume Banner */}
        <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D5FF] font-bold">
                ENROLLED CURRICULUM
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">
                {course.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Instruction by Kumail Abbas · Masterclass Level · 6 Modules
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentLessonId(resumeLesson.id);
                navigateTo('academy');
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors self-start sm:self-auto"
            >
              <span>Go to Player</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>Overall Completion</span>
              <span className="text-emerald-400 font-bold">{stats.progressPercentage}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#080B12] overflow-hidden border border-white/[0.06]">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${stats.progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Up Next Card */}
          <div className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0">
                <PlayCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Up Next to Watch:</div>
                <div className="text-sm font-bold text-white">{resumeLesson.title}</div>
              </div>
            </div>
            <button
              onClick={() => {
                setCurrentLessonId(resumeLesson.id);
                navigateTo('academy');
              }}
              className="px-3 py-1.5 bg-[#101725] hover:bg-slate-800 text-cyan-300 text-xs font-semibold rounded border border-white/[0.1] transition-colors"
            >
              Start Lesson
            </button>
          </div>
        </div>

        {/* Two Column Section: Saved Bookmarks & Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Saved Lessons (7 Cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Bookmark className="w-4 h-4 text-cyan-400" />
                <span>Saved & Bookmarked Lessons</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {savedLessons.length} Saved
              </span>
            </div>

            {savedLessons.length > 0 ? (
              <div className="space-y-2.5">
                {savedLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-3.5 rounded-xl bg-[#080B12] border border-white/[0.06] flex items-center justify-between gap-4 hover:border-blue-500/30 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">
                        {lesson.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                        Duration: {lesson.duration}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setCurrentLessonId(lesson.id);
                        navigateTo('academy');
                      }}
                      className="px-3 py-1 bg-blue-600/80 hover:bg-blue-600 text-white rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      <span>Watch</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 font-mono">
                No bookmarked lessons yet. Click the bookmark icon in any lesson player to save it here.
              </div>
            )}
          </div>

          {/* Announcements from Kumail Abbas (5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Bell className="w-4 h-4 text-amber-400" />
              <span>Educator Announcements</span>
            </div>

            <div className="space-y-3">
              {announcements.slice(0, 3).map((ann) => (
                <div
                  key={ann.id}
                  className="p-3.5 rounded-xl bg-[#080B12] border border-white/[0.06] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cyan-400 font-semibold">{ann.category}</span>
                    <span className="text-slate-500">{ann.date}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">
                    {ann.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {ann.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
