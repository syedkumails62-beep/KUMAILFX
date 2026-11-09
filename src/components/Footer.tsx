/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp, NavigationPage } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/seedData';
import {
  TrendingUp,
  Youtube,
  Send,
  Instagram,
  MessageSquare,
  ShieldAlert,
  ArrowUpRight,
  X,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const quickLinks: { label: string; page: NavigationPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Kumail Abbas', page: 'about' },
    { label: 'Trading Academy', page: 'academy' },
    { label: 'Trading Concepts', page: 'concepts' },
    { label: 'Market Analysis', page: 'market-analysis' },
    { label: 'Live Trading', page: 'live-trading' },
    { label: 'Educational Tools', page: 'trading-tools' },
    { label: 'Contact', page: 'contact' },
  ];

  const communityLinks = [
    {
      name: 'YouTube Channel',
      url: FOUNDER_INFO.socials.youtube,
      handle: '@kumailfx5',
      icon: <Youtube className="w-4 h-4 text-rose-500" />,
    },
    {
      name: 'Discord Community',
      url: FOUNDER_INFO.socials.discord,
      handle: 'KumailFX Traders',
      icon: <MessageSquare className="w-4 h-4 text-indigo-400" />,
    },
    {
      name: 'Telegram Channel',
      url: FOUNDER_INFO.socials.telegram,
      handle: '@wolfcrl',
      icon: <Send className="w-4 h-4 text-sky-400" />,
    },
    {
      name: 'Instagram Broadcast',
      url: FOUNDER_INFO.socials.instagramBroadcast,
      handle: 'KUMAILFX Official',
      icon: <Instagram className="w-4 h-4 text-pink-500" />,
    },
  ];

  return (
    <footer className="w-full bg-[#05070D] border-t border-white/[0.08] text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1677FF] to-[#00D5FF] flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#080B12] rounded-[7px] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#00D5FF]" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                KUMAIL<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00D5FF]">FX</span>
              </span>
            </div>
            
            <p className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-semibold">
              {FOUNDER_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A professional trading education platform dedicated to helping traders master market structure, institutional liquidity engineering, ICT frameworks, and disciplined risk management.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-mono">
              Founder: <span className="text-slate-300 font-semibold">{FOUNDER_INFO.name}</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Academy & Platform
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-white transition-colors flex items-center gap-1 text-slate-400"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysis & Tools Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Resources & Market
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(4).map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-white transition-colors flex items-center gap-1 text-slate-400"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Community Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Official Community
            </h4>
            <ul className="space-y-2.5 text-xs">
              {communityLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-md bg-[#101725]/60 hover:bg-[#101725] border border-white/[0.05] hover:border-blue-500/30 transition-all text-slate-300 group"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-medium text-[11px]">{item.name}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Trading & Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#101725]/40 border border-amber-500/20 text-slate-400">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed space-y-1.5">
              <div className="font-bold text-amber-300 font-mono uppercase tracking-wider">
                Official Educational & Risk Disclaimer
              </div>
              <p>
                KUMAILFX provides educational information about financial markets. All content is intended for educational and informational purposes only and does not constitute financial advice, investment advice, or a recommendation to buy or sell any financial instrument.
              </p>
              <p>
                Trading Forex, CFDs, and other leveraged financial instruments involves significant risk and may result in the loss of capital. Past performance does not guarantee future results. No profits, accuracy percentages, or trading outcomes are guaranteed.
              </p>
            </div>
          </div>

          {/* Bottom Bar & Legal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-slate-500 font-mono">
            <div>
              © 2026 KUMAILFX. All Rights Reserved. Founded by Kumail Abbas.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-slate-300 underline underline-offset-4"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-slate-300 underline underline-offset-4"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => setLegalModal('risk')}
                className="hover:text-slate-300 underline underline-offset-4"
              >
                Risk Disclosure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#101725] border border-slate-700 rounded-xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white capitalize font-sans">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms and Conditions'}
                {legalModal === 'risk' && 'Institutional Risk Disclosure'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs leading-relaxed space-y-3 max-h-96 overflow-y-auto pr-2">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    KUMAILFX respects the privacy of our students and visitors. Any personal information provided through registration or contact forms is securely retained exclusively for educational correspondence and account access.
                  </p>
                  <p>
                    We never sell, rent, or lease subscriber data to third parties or unregulated broker entities.
                  </p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>
                    By accessing the KUMAILFX educational platform, you agree that all video lessons, proprietary notes, charts, and materials are copyrighted property of KUMAILFX and Kumail Abbas.
                  </p>
                  <p>
                    Redistribution, recording, or unauthorized resale of academy curriculum is strictly prohibited.
                  </p>
                </>
              )}
              {legalModal === 'risk' && (
                <>
                  <p>
                    Leveraged foreign exchange trading carries a high level of risk and may not be suitable for all investors. High leverage can work against you as well as for you.
                  </p>
                  <p>
                    Before deciding to trade foreign exchange or CFDs, carefully evaluate your investment objectives, experience level, and risk appetite. You could sustain a loss of some or all of your deposited capital.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-semibold"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
