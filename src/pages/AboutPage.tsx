/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/seedData';
import {
  Shield,
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Award,
  TrendingUp,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-16 bg-[#080B12] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            FOUNDER & PHILOSOPHY
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About KUMAILFX & Syed Kumail Abbas
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Dedicated to demystifying financial markets through systematic, rule-based education focused on Forex, ICT, and Smart Money Concepts.
          </p>
        </div>
      </section>

      {/* Main Founder Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Photo */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#1677FF]/40 to-[#00D5FF]/30 blur-lg opacity-75" />
              <div className="relative rounded-2xl overflow-hidden bg-[#101725] border border-white/[0.12] shadow-2xl">
                <img
                  src={FOUNDER_INFO.portraitImage}
                  alt="Syed Kumail Abbas, Founder of KUMAILFX"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#0A0E18] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="font-bold text-white">Syed Kumail Abbas</div>
                    <div className="text-cyan-400">Head Educator & Founder</div>
                  </div>
                  <div className="text-right text-slate-400">
                    <div>KUMAILFX</div>
                    <div className="text-emerald-400">LEARN · TRADE · GROW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Introduction & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1677FF] font-bold">
                THE FOUNDER'S PERSPECTIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Educating Traders with Pure Market Structure
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {FOUNDER_INFO.bio}
            </p>

            {/* Mission Box */}
            <div className="p-6 rounded-xl bg-[#101725] border border-blue-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                <Target className="w-4 h-4" />
                <span>Our Core Mission</span>
              </div>
              <p className="text-sm font-medium text-white italic leading-relaxed">
                "{FOUNDER_INFO.mission}"
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Too much retail trading education is littered with flashy promises, exaggerated lifestyle marketing, and lagging indicators that do not explain why institutions move price. KUMAILFX was created to offer an institutional alternative: a transparent, disciplined, and step-by-step curriculum where students learn how algorithmic liquidity engineering works.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateTo('trading-technology')}
                className="px-6 py-3 text-xs font-bold text-cyan-300 bg-blue-600/20 hover:bg-blue-600 hover:text-white border border-blue-500/40 rounded-lg transition-colors flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Trading Technology & Experience</span>
              </button>
              <button
                onClick={() => navigateTo('academy')}
                className="px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Academy Curriculum</span>
              </button>
              <button
                onClick={() => navigateTo('community')}
                className="px-6 py-3 text-xs font-semibold text-slate-300 bg-[#101725] hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                Join Kumail on YouTube
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy & Educational Approach */}
      <section className="py-16 bg-[#0A0E18] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
              PEDAGOGY & PRINCIPLES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Trading Education Philosophy
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {FOUNDER_INFO.philosophy}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDER_INFO.approach.map((item, idx) => {
              const parts = item.split(': ');
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#101725] border border-white/[0.08] space-y-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {parts[0]}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {parts[1]}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Honest Commitment & Integrity Note */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#101725]/60 border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Our Transparent Commitment to Students</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Why KUMAILFX Does Not Make Unrealistic Promises
          </h3>

          <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
            <p>
              In strict accordance with our educational ethos, KUMAILFX does not fabricate past performance figures, student millionaire testimonials, or guaranteed return claims. Financial market trading carries significant capital risk.
            </p>
            <p>
              Our role is strictly educational: to teach you the vocabulary, market structure, liquidity patterns, and risk discipline that empower you to think independently as an institutional analyst.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% focused on genuine knowledge, chart literacy, and capital preservation.</span>
          </div>
        </div>
      </section>

    </div>
  );
};
