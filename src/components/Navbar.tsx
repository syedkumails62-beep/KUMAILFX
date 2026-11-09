/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp, NavigationPage } from '../context/AppContext';
import {
  TrendingUp,
  GraduationCap,
  BarChart3,
  Radio,
  Calculator,
  Users,
  Mail,
  Shield,
  User,
  LogOut,
  Menu,
  X,
  BookOpen,
  Crown,
  Cpu,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activePage, navigateTo, currentUser, activeRole, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: NavigationPage; icon?: React.ReactNode; isHighlight?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Trading Tech', page: 'trading-technology', icon: <Cpu className="w-3.5 h-3.5 text-cyan-400" /> },
    { label: 'Binary $100 Bundle', page: 'binary-platinum', icon: <Crown className="w-3.5 h-3.5 text-amber-400" />, isHighlight: true },
    { label: 'Academy', page: 'academy', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { label: 'Concepts', page: 'concepts', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { label: 'Market Analysis', page: 'market-analysis', icon: <BarChart3 className="w-3.5 h-3.5" /> },
    { label: 'Live Trading', page: 'live-trading', icon: <Radio className="w-3.5 h-3.5" /> },
    { label: 'Trading Tools', page: 'trading-tools', icon: <Calculator className="w-3.5 h-3.5" /> },
    { label: 'About', page: 'about' },
    { label: 'Community', page: 'community', icon: <Users className="w-3.5 h-3.5" /> },
    { label: 'Contact', page: 'contact', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080B12]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1677FF] to-[#00D5FF] flex items-center justify-center p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <div className="w-full h-full bg-[#080B12] rounded-[7px] flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#00D5FF]" />
            </div>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center font-sans">
              <span>KUMAIL</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#00D5FF]">FX</span>
            </div>
            <div className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold font-mono">
              LEARN · TRADE · GROW
            </div>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden 2xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  link.isHighlight
                    ? isActive
                      ? 'bg-amber-500 text-black font-extrabold shadow-sm'
                      : 'text-amber-300 hover:text-amber-200 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20'
                    : isActive
                    ? 'text-white bg-[#101725] border border-blue-500/30 shadow-sm shadow-blue-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Compact Nav for XL screens */}
        <nav className="hidden xl:flex 2xl:hidden items-center gap-1">
          {navLinks.slice(0, 7).map((link) => {
            const isActive = activePage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className={`px-2 py-1.5 text-[11px] font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1 ${
                  link.isHighlight
                    ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30'
                    : isActive
                    ? 'text-white bg-[#101725] border border-blue-500/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Public Access Controls & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Active Admin Indicator (Only visible if authenticated as Syed Kumail Abbas) */}
          {activeRole === 'admin' && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/15 border border-blue-500/40 text-[10px] font-mono text-cyan-300">
              <Shield className="w-3 h-3 text-blue-400" />
              <span>Admin Active</span>
            </div>
          )}

          {/* Primary Action Button */}
          {currentUser ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  navigateTo(activeRole === 'admin' ? 'admin-dashboard' : 'student-dashboard')
                }
                className="px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#0088FF] hover:from-[#1366DB] hover:to-[#0077EE] rounded-lg transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5"
              >
                {activeRole === 'admin' ? (
                  <>
                    <Shield className="w-3.5 h-3.5" />
                    <span>Admin Panel</span>
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </>
                )}
              </button>

              <button
                onClick={logout}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-white/[0.04] rounded-lg transition-colors"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('login')}
                className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigateTo('register')}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#1677FF] to-[#00D5FF] hover:opacity-95 rounded-lg transition-opacity shadow-md shadow-blue-500/25"
              >
                Join Now
              </button>
            </div>
          )}

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#080B12] border-b border-white/[0.08] px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigateTo(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 text-xs font-medium rounded-lg text-left flex items-center gap-2 ${
                  activePage === link.page
                    ? 'bg-[#101725] text-cyan-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                navigateTo('binary-platinum');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-black font-extrabold text-xs rounded-lg flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
            >
              <Crown className="w-4 h-4 text-black" />
              <span>Register Binary $100 Platinum Bundle</span>
            </button>

            {!currentUser ? (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    navigateTo('login');
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 text-xs font-semibold rounded-lg bg-[#101725] text-slate-300 border border-slate-700"
                >
                  Student Login
                </button>
                <button
                  onClick={() => {
                    navigateTo('register');
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white"
                >
                  Join Free
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  navigateTo(activeRole === 'admin' ? 'admin-dashboard' : 'student-dashboard');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 text-xs font-semibold rounded-lg bg-[#101725] text-cyan-300 border border-blue-500/30"
              >
                {activeRole === 'admin' ? 'Open Admin Panel' : 'Open Student Dashboard'}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
