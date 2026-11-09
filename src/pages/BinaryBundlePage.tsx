/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BINARY_PREMIUM_BUNDLE, TRADING_TECHNOLOGY_DATA } from '../data/seedData';
import {
  Shield,
  Zap,
  CheckCircle,
  Crown,
  Lock,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Layers,
  Sparkles,
  Users,
  Check,
  Globe,
  Radio,
  FileCheck,
} from 'lucide-react';

export const BinaryBundlePage: React.FC = () => {
  const { registerPlatinumMember, navigateTo, currentUser } = useApp();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [name, setName] = useState(currentUser?.fullName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [country, setCountry] = useState('Pakistan');
  const [paymentMethod, setPaymentMethod] = useState<'usdt' | 'binance' | 'card' | 'bank' | 'local'>('usdt');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    registerPlatinumMember(name, email, country, `${paymentMethod.toUpperCase()} - $100`);
    setIsSuccess(true);
    setTimeout(() => {
      setShowCheckoutModal(false);
      navigateTo('student-dashboard', { justEnrolledPlatinum: true });
    }, 1200);
  };

  return (
    <div className="w-full text-slate-100 font-sans pb-24">
      {/* Top Banner / Breadcrumb */}
      <section className="relative py-16 bg-[#080B12] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>{BINARY_PREMIUM_BUNDLE.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl font-sans">
            BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {BINARY_PREMIUM_BUNDLE.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono tabular-nums">
                $100
              </span>
              <span className="text-xs text-slate-400 font-mono line-through">$350</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Lifetime Platinum Access
              </span>
            </div>

            <button
              onClick={() => setShowCheckoutModal(true)}
              className="px-7 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/20 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <Crown className="w-4 h-4 text-black" />
              <span>REGISTER NOW — $100</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Direct Automated Platinum Member Enrollment</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Zap className="w-4 h-4" />
              <span>Tradovate DOM + Tradfye Binary Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#101725] border border-amber-500/30 space-y-3 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Crown className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Direct Platinum Access</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Registering for this $100 bundle directly provisions your <strong>BINARY PREMIUM PLATINUM MEMBER</strong> status on the central KUMAILFX roster, visible directly to Head Instructor Syed Kumail Abbas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#101725] border border-blue-500/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Non-OTC Exchange Reality</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Stop trading broker-generated OTC synthetic charts designed for house edge. Trade real EURUSD market microstructure driven by interbank and CME futures liquidity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#101725] border border-cyan-500/30 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Futures Order Flow Synthesis</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Learn how to cross-reference Tradovate Level II DOM liquidity and Tradfye 1M/5M momentum candles for unmatched confirmation.
            </p>
          </div>
        </div>

        {/* Course Syllabus / Curriculum Breakdown */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              CURRICULUM BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Is Covered in the $100 Platinum Bundle
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              From futures microstructure data to binary execution timing—every concept is explained step-by-step with real-market charts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BINARY_PREMIUM_BUNDLE.syllabus.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#101725] border border-white/[0.08] hover:border-amber-500/40 transition-colors space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-300 pl-10 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The 5-Step Order Flow Pipeline Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#101725] via-[#0A0E18] to-[#101725] border border-blue-500/30 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                INSTITUTIONAL EXECUTION FRAMEWORK
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                The Kumail Abbas 5-Step Alignment Protocol
              </h3>
            </div>
            <button
              onClick={() => navigateTo('trading-technology')}
              className="px-3.5 py-1.5 bg-[#080B12] hover:bg-slate-800 text-xs font-mono text-cyan-300 border border-cyan-500/30 rounded-lg self-start transition-colors"
            >
              View Full Technology Brief →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            {[
              { step: '01', title: 'FUTURES DATA', subtitle: 'Tradovate CME Tape' },
              { step: '02', title: 'ORDER FLOW', subtitle: 'Level II / DOM' },
              { step: '03', title: 'LIQUIDITY', subtitle: 'Resting Stops / BSL' },
              { step: '04', title: 'PRICE STRUCTURE', subtitle: 'BOS & Displacement' },
              { step: '05', title: 'CONFIRMATION', subtitle: 'Tradfye 1M/5M Strike' },
            ].map((node, i) => (
              <div
                key={node.step}
                className="p-4 rounded-xl bg-[#080B12] border border-white/[0.06] text-center space-y-1 relative"
              >
                <div className="text-[10px] font-mono text-amber-400 font-bold">{node.step}</div>
                <div className="text-xs font-extrabold text-white font-mono">{node.title}</div>
                <div className="text-[10px] text-slate-400">{node.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#101725] to-amber-950/30 border border-amber-500/40 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            <Crown className="w-4 h-4" />
            <span>EXCLUSIVE PLATINUM TIER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Elevate Beyond Indicator Signals?
          </h2>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Register now for $100 and join the BINARY PREMIUM PLATINUM MEMBERS directory. Gain immediate access to the Non-OTC EURUSD curriculum, Tradovate order flow blueprints, and private student mentorship.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowCheckoutModal(true)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 text-black font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Crown className="w-4 h-4 text-black" />
              <span>REGISTER NOW ($100) — INSTANT ACCESS</span>
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-6 py-4 bg-[#080B12] hover:bg-slate-800 text-slate-200 border border-white/[0.1] rounded-xl text-xs font-bold transition-colors"
            >
              Contact Syed Kumail Abbas
            </button>
          </div>
        </div>

      </section>

      {/* Checkout & Direct Enrollment Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#101725] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              ✕
            </button>

            <div className="space-y-1.5 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>BINARY PREMIUM PLATINUM ENROLLMENT</span>
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                Register for $100 Premium Bundle
              </h3>
              <p className="text-xs text-slate-400">
                You will be automatically added to the <strong>BINARY PREMIUM PLATINUM MEMBERS</strong> directory.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center space-y-3 bg-[#080B12] rounded-xl border border-emerald-500/40">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Enrollment Confirmed!</h4>
                <p className="text-xs text-cyan-300 font-mono">
                  Welcome to BINARY PREMIUM PLATINUM MEMBERS. Redirecting to your student dashboard...
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnrollment} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Syed Kumail"
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Country</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Pakistan, UAE, UK"
                      className="w-full px-3.5 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Amount Due</label>
                    <div className="px-3.5 py-2.5 bg-[#080B12] border border-amber-500/40 rounded-lg text-sm text-amber-400 font-mono font-bold">
                      $100 USD
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'usdt', label: 'USDT (TRC20)' },
                      { id: 'binance', label: 'Binance Pay' },
                      { id: 'card', label: 'Credit / Debit Card' },
                      { id: 'bank', label: 'Bank Transfer' },
                      { id: 'local', label: 'JazzCash / EasyPaisa' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPaymentMethod(opt.id as any)}
                        className={`p-2 rounded-lg text-[11px] font-mono text-left border transition-all ${
                          paymentMethod === opt.id
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                            : 'bg-[#080B12] border-white/[0.08] text-slate-400 hover:text-white'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#080B12] border border-white/[0.06] text-[11px] text-slate-400 font-mono space-y-1">
                  <div className="text-white font-bold flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    <span>Instant Automated Roster Provisioning</span>
                  </div>
                  <p>
                    Your student profile is saved directly with status <span className="text-amber-400">Binary Premium Platinum ($100)</span> and immediately tracked in the administrator dashboard.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 text-black font-extrabold text-sm rounded-xl shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Crown className="w-4 h-4 text-black" />
                  <span>COMPLETE REGISTRATION — $100</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
