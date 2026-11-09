/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/seedData';
import {
  Youtube,
  Send,
  Instagram,
  MessageSquare,
  Users,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const CommunityPage: React.FC = () => {
  const { navigateTo } = useApp();

  const communityPlatforms = [
    {
      id: 'youtube',
      name: 'YouTube Channel',
      tagline: 'Live Market Streams & Strategy Tutorials',
      url: FOUNDER_INFO.socials.youtube,
      icon: <Youtube className="w-8 h-8 text-rose-500" />,
      badge: 'Official Video Hub',
      description:
        'Subscribe to Kumail Abbas on YouTube for live London Open sessions, in-depth breakdowns of Fair Value Gaps, and institutional market structure tutorials.',
      stats: 'Free Access · Live Streams Weekly',
      color: 'border-rose-500/30 hover:border-rose-500/60',
      btnBg: 'bg-rose-600 hover:bg-rose-500',
    },
    {
      id: 'discord',
      name: 'Discord Community Server',
      tagline: 'Student Chat, Chart Markups & Voice Rooms',
      url: FOUNDER_INFO.socials.discord,
      icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
      badge: 'Interactive Hub',
      description:
        'Join hundreds of active Forex traders. Share your trade journal, receive feedback on your institutional markups, and join live voice study sessions.',
      stats: 'Active Community · Student Channels',
      color: 'border-indigo-500/30 hover:border-indigo-500/60',
      btnBg: 'bg-indigo-600 hover:bg-indigo-500',
    },
    {
      id: 'telegram',
      name: 'Telegram Channel',
      tagline: 'Fast Session Alerts & Market Commentary',
      url: FOUNDER_INFO.socials.telegram,
      icon: <Send className="w-8 h-8 text-sky-400" />,
      badge: '@wolfcrl',
      description:
        'Real-time alerts directly on your phone. Stay notified when Kumail goes live, receives high-impact economic calendar heads-up, and reads institutional analysis.',
      stats: 'Instant Telegram Broadcasts',
      color: 'border-sky-500/30 hover:border-sky-500/60',
      btnBg: 'bg-sky-600 hover:bg-sky-500',
    },
    {
      id: 'instagram',
      name: 'Instagram Broadcast Channel',
      tagline: 'Trading Psychology & Daily Insights',
      url: FOUNDER_INFO.socials.instagramBroadcast,
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      badge: 'Official Broadcast',
      description:
        'Follow our official Instagram broadcast channel for short-form market insights, psychology reminders, chart screenshots, and academy updates.',
      stats: 'Daily Visual Stories & Reels',
      color: 'border-pink-500/30 hover:border-pink-500/60',
      btnBg: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90',
    },
  ];

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-14 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
            TRADERS NETWORK & CHANNELS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            BE PART OF THE KUMAILFX COMMUNITY
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Connect with like-minded traders, participate in live chart reviews, and stay updated across all official KUMAILFX channels.
          </p>
        </div>
      </section>

      {/* Main Official Platforms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityPlatforms.map((platform) => (
            <div
              key={platform.id}
              className={`p-8 rounded-2xl bg-[#101725] border transition-all flex flex-col justify-between space-y-6 ${platform.color} shadow-xl`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-[#080B12] border border-white/[0.08] flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {platform.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {platform.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">
                    {platform.tagline}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="text-[11px] font-mono text-slate-500">
                  {platform.stats}
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 text-xs font-bold text-center text-white rounded-lg transition-all flex items-center justify-center gap-2 shadow-md ${platform.btnBg}`}
                >
                  <span>Join {platform.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Code of Conduct & Guidelines */}
        <div className="p-8 rounded-2xl bg-[#0A0E18] border border-white/[0.08] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Community Code of Conduct</span>
          </div>

          <h3 className="text-xl font-bold text-white">
            Disciplined, Professional & Supportive Trading Culture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 pt-2">
            <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.06] space-y-1.5">
              <div className="font-bold text-white font-mono">1. Respectful Collaboration</div>
              <p className="text-slate-400">Constructive feedback on chart markups. No trolling, harassment, or negative ego.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.06] space-y-1.5">
              <div className="font-bold text-white font-mono">2. Zero Spam or Signal Selling</div>
              <p className="text-slate-400">Strict zero-tolerance policy for unsolicited investment schemes, signal selling, or referral spam.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#101725] border border-white/[0.06] space-y-1.5">
              <div className="font-bold text-white font-mono">3. Process Over Outcome</div>
              <p className="text-slate-400">Focus discussions on whether trading rules were respected rather than bragging about dollar figures.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
