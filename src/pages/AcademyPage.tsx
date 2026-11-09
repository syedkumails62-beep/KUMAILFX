/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/seedData';
import {
  CheckCircle,
  PlayCircle,
  Bookmark,
  FileText,
  Clock,
  ChevronDown,
  ChevronRight,
  Download,
  Share2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const AcademyPage: React.FC = () => {
  const {
    course,
    currentLessonId,
    setCurrentLessonId,
    completedLessonIds,
    markLessonComplete,
    savedLessonIds,
    toggleSaveLesson,
    stats,
    pageParams,
  } = useApp();

  // Find active lesson and active module
  let activeLesson = course.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.id === currentLessonId);

  if (!activeLesson) {
    activeLesson = course.modules[0].lessons[0];
  }

  const activeModule = course.modules.find((m) =>
    m.lessons.some((l) => l.id === activeLesson?.id)
  );

  // Expanded modules state
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    course.modules.forEach((m) => {
      // Expand the active module or parameter module
      initial[m.id] = m.id === (activeModule?.id || pageParams.openModuleId || 'mod-1');
    });
    return initial;
  });

  const toggleModuleAccordion = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const isCompleted = completedLessonIds.includes(activeLesson.id);
  const isSaved = savedLessonIds.includes(activeLesson.id);

  // Find previous and next lesson for fluid navigation
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === activeLesson?.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (resTitle: string) => {
    setDownloadNotice(`Downloading: ${resTitle}`);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Top Academy Header & Progress Bar */}
      <section className="bg-[#080B12] border-b border-white/[0.08] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                INSTITUTIONAL CURRICULUM
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                {course.title}
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Curriculum designed & instructed by Kumail Abbas · 6 Modules · 42 Complete Lessons
              </p>
            </div>

            {/* Global Course Progress Card */}
            <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08] min-w-[260px] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Course Progress</span>
                <span className="text-emerald-400 font-bold">{stats.progressPercentage}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 rounded-full"
                  style={{ width: `${stats.progressPercentage}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span>{stats.completedCount} of {stats.totalLessons} lessons completed</span>
                <span className="text-slate-600">·</span>
                <span>{course.estimatedHours} total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Player & Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video & Lesson Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Premium Video Player Container */}
            <div className="relative rounded-2xl overflow-hidden bg-[#05070D] border border-white/[0.12] shadow-2xl">
              
              {/* Responsive Video Aspect Ratio 16:9 */}
              <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden group">
                
                {/* Visual Lecture Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-[#080B12]/70 to-[#080B12]/40 z-10" />
                <img
                  src={course.thumbnail}
                  alt={activeLesson.title}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-35 filter blur-[1px]"
                />

                {/* Center Lecture Overlay */}
                <div className="relative z-20 text-center space-y-4 max-w-lg px-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-600/30 border border-blue-400/30 text-xs font-mono text-cyan-300">
                    <span>KUMAILFX ACADEMY LECTURE</span>
                    <span className="text-slate-500">·</span>
                    <span>HD 1080P</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-sans">
                    {activeLesson.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2">
                    {activeLesson.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={FOUNDER_INFO.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-95 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-500/25 transition-all"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Watch on YouTube (@kumailfx5)</span>
                    </a>

                    <button
                      onClick={() => markLessonComplete(activeLesson.id, !isCompleted)}
                      className="px-4 py-2.5 bg-[#101725] hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.1] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span>{isCompleted ? 'Completed' : 'Complete Step'}</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Video Scrubber HUD */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="text-white font-bold">{activeLesson.duration}</span>
                    <span className="text-slate-500">·</span>
                    <span>Instructor: Kumail Abbas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/[0.08] text-[10px] text-cyan-300">
                      1080p 60fps
                    </span>
                  </div>
                </div>

              </div>

              {/* Player Bottom Control Bar & Lesson Meta */}
              <div className="p-6 bg-[#0E1524] border-t border-white/[0.08] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-cyan-400">
                      Module {activeModule?.moduleNumber} · Lesson {activeLesson.orderIndex} of {activeModule?.lessons.length}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {activeLesson.title}
                    </h2>
                  </div>

                  {/* Actions: Mark Completed & Save */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => markLessonComplete(activeLesson.id, !isCompleted)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
                        isCompleted
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                          : 'bg-[#101725] text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500/40'
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-white' : 'text-slate-400'}`} />
                      <span>{isCompleted ? 'Completed' : 'Mark as Completed'}</span>
                    </button>

                    <button
                      onClick={() => toggleSaveLesson(activeLesson.id)}
                      className={`p-2 rounded-lg transition-colors border ${
                        isSaved
                          ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                          : 'bg-[#101725] border-slate-700 text-slate-400 hover:text-white'
                      }`}
                      title={isSaved ? 'Remove Bookmark' : 'Save Lesson'}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Lesson Description */}
                <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/[0.06]">
                  {activeLesson.description}
                </p>

                {/* Previous & Next Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-semibold">
                  {prevLesson ? (
                    <button
                      onClick={() => setCurrentLessonId(prevLesson.id)}
                      className="px-3.5 py-2 rounded-lg bg-[#101725] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-2 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Prev:</span>
                      <span className="truncate max-w-[150px]">{prevLesson.title}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {nextLesson && (
                    <button
                      onClick={() => {
                        markLessonComplete(activeLesson.id, true);
                        setCurrentLessonId(nextLesson.id);
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 shadow-md transition-colors"
                    >
                      <span>Next Lesson</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Key Takeaways & PDF Resources Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Key Takeaways */}
              <div className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00D5FF] font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Takeaways</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {activeLesson.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloadable PDF & Resources */}
              <div className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                  <FileText className="w-4 h-4" />
                  <span>Lesson Resources & Checklist</span>
                </div>
                
                {downloadNotice && (
                  <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    ✓ {downloadNotice}
                  </div>
                )}

                <div className="space-y-2">
                  {activeLesson.pdfResources.map((pdf) => (
                    <div
                      key={pdf.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#080B12] border border-white/[0.06] hover:border-blue-500/30 transition-all text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                        <div>
                          <div className="font-semibold text-white">{pdf.title}</div>
                          <div className="text-[10px] text-slate-500 font-mono">PDF · {pdf.size}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload(pdf.title)}
                        className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-white/[0.04] rounded transition-colors"
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-slate-500 font-mono pt-1">
                  * Downloadable PDF includes institutional formulas and diagram cheat sheets.
                </div>
              </div>

            </div>

          </div>

          {/* Sidebar: Course Modules & Lesson Checklist (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  Course Modules
                </h3>
                <span className="text-xs text-cyan-400 font-mono">
                  {course.modules.length} Modules
                </span>
              </div>

              {/* Module Accordions */}
              <div className="space-y-2 max-h-[700px] overflow-y-auto pr-1">
                {course.modules.map((module) => {
                  const isExpanded = expandedModules[module.id];
                  const moduleCompletedCount = module.lessons.filter((l) =>
                    completedLessonIds.includes(l.id)
                  ).length;
                  const isModuleActive = module.id === activeModule?.id;

                  return (
                    <div
                      key={module.id}
                      className={`rounded-lg border overflow-hidden transition-all ${
                        isModuleActive
                          ? 'border-blue-500/40 bg-[#0C121E]'
                          : 'border-white/[0.06] bg-[#0A0E18]'
                      }`}
                    >
                      {/* Module Header Bar */}
                      <button
                        onClick={() => toggleModuleAccordion(module.id)}
                        className="w-full p-3.5 text-left flex items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors"
                      >
                        <div>
                          <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                            Module {module.moduleNumber}
                          </div>
                          <div className="text-xs font-bold text-white mt-0.5">
                            {module.title}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {moduleCompletedCount} / {module.lessons.length} Completed
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {/* Module Lessons List */}
                      {isExpanded && (
                        <div className="border-t border-white/[0.06] divide-y divide-white/[0.04]">
                          {module.lessons.map((lesson) => {
                            const isCurrent = lesson.id === activeLesson.id;
                            const isDone = completedLessonIds.includes(lesson.id);

                            return (
                              <button
                                key={lesson.id}
                                onClick={() => {
                                  setCurrentLessonId(lesson.id);
                                  window.scrollTo({ top: 120, behavior: 'smooth' });
                                }}
                                className={`w-full p-2.5 text-left text-xs flex items-center justify-between gap-2 transition-colors ${
                                  isCurrent
                                    ? 'bg-blue-600/20 text-cyan-300 font-semibold'
                                    : 'text-slate-300 hover:bg-white/[0.03] hover:text-white'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  {isDone ? (
                                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  ) : (
                                    <PlayCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                  )}
                                  <span className="truncate">{lesson.title}</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono shrink-0">
                                  {lesson.duration}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Educator Support Card */}
            <div className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] text-xs text-slate-400 space-y-2">
              <div className="font-semibold text-slate-200">
                Need Help with this Concept?
              </div>
              <p className="text-[11px] leading-relaxed">
                Kumail Abbas hosts weekly live review sessions for enrolled students. You can also ask questions in our Discord channels.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
