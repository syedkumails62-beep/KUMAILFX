/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO } from '../data/seedData';
import {
  Mail,
  Send,
  MessageSquare,
  Youtube,
  Instagram,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { submitContactMessage } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields before submitting.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    submitContactMessage({
      fullName,
      email,
      subject,
      message,
    });

    setSubmitted(true);
    setErrorMessage('');
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="w-full text-slate-100 font-sans pb-20">
      
      {/* Header Banner */}
      <section className="py-14 bg-[#080B12] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D5FF] font-bold">
            EDUCATOR INQUIRIES & SUPPORT
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact KUMAILFX
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-1 leading-relaxed">
            Have questions about the academy curriculum, student access, or institutional trading concepts? Send a direct message to Kumail Abbas.
          </p>
        </div>
      </section>

      {/* Main Form & Channels Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#101725] border border-white/[0.08] shadow-2xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white">
                Send a Message to Kumail Abbas
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Your message is stored securely and directly accessible in the administrator dashboard.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 text-center">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-base font-bold text-white">
                  Message Transmitted Successfully!
                </h3>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Kumail Abbas or the KUMAILFX team will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Syed Kumail"
                      className="w-full px-4 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. yourname@domain.com"
                      className="w-full px-4 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Academy Curriculum Question / Mentorship Inquiry"
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry or trading background in detail..."
                    className="w-full px-4 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#1677FF] to-[#00D5FF] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Kumail Abbas</span>
                </button>
              </form>
            )}
          </div>

          {/* Social Links & Support Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#101725] border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-white font-sans">
                Official Social Media Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                For fastest real-time updates and public inquiries, connect through our verified community platforms.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={FOUNDER_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#080B12] border border-white/[0.06] hover:border-rose-500/40 text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Youtube className="w-5 h-5 text-rose-500" />
                    <div>
                      <div className="font-semibold text-white">YouTube Channel</div>
                      <div className="text-[10px] text-slate-500 font-mono">@kumailfx5</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-rose-400" />
                </a>

                <a
                  href={FOUNDER_INFO.socials.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#080B12] border border-white/[0.06] hover:border-indigo-500/40 text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="font-semibold text-white">Discord Community</div>
                      <div className="text-[10px] text-slate-500 font-mono">KumailFX Traders</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400" />
                </a>

                <a
                  href={FOUNDER_INFO.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#080B12] border border-white/[0.06] hover:border-sky-500/40 text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Telegram Channel</div>
                      <div className="text-[10px] text-slate-500 font-mono">@wolfcrl</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                </a>

                <a
                  href={FOUNDER_INFO.socials.instagramBroadcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#080B12] border border-white/[0.06] hover:border-pink-500/40 text-xs transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <div>
                      <div className="font-semibold text-white">Instagram Broadcast</div>
                      <div className="text-[10px] text-slate-500 font-mono">Official Channel</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400" />
                </a>
              </div>
            </div>

            {/* Response Time Notice */}
            <div className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-200 font-mono">
                Average Response Time:
              </div>
              <p>
                Inquiries are typically addressed within 24 to 48 hours during business trading days (Monday to Friday).
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
