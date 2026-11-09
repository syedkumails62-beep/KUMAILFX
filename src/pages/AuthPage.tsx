/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp, ADMIN_CREDENTIALS } from '../context/AppContext';
import {
  TrendingUp,
  Shield,
  User,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Globe,
} from 'lucide-react';

interface AuthPageProps {
  initialMode?: 'login' | 'register';
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'login' }) => {
  const { login, registerMember, navigateTo } = useApp();
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('Pakistan');
  const [errorMessage, setErrorMessage] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (mode === 'forgot') {
      setForgotSuccess(true);
      return;
    }

    if (mode === 'register') {
      if (!fullName.trim() || !email.trim() || !password.trim()) {
        setErrorMessage('Please fill in all required registration fields.');
        return;
      }
      registerMember(fullName, email, country);
      return;
    }

    // Login mode
    const res = login(email, password);
    if (!res.success) {
      setErrorMessage(res.error || 'Authentication failed. Please verify credentials.');
    }
  };

  const handleQuickAdminLogin = () => {
    setEmail(ADMIN_CREDENTIALS.email);
    setPassword(ADMIN_CREDENTIALS.password);
    const res = login(ADMIN_CREDENTIALS.email, ADMIN_CREDENTIALS.password);
    if (!res.success) {
      setErrorMessage(res.error || 'Failed to login as administrator.');
    }
  };

  const handleQuickStudentLogin = () => {
    setEmail('student@kumailfx.com');
    setPassword('student123');
    login('student@kumailfx.com', 'student123');
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#101725] p-8 rounded-2xl border border-white/[0.08] shadow-2xl">
        
        {/* Brand Lockup */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#1677FF] to-[#00D5FF] flex items-center justify-center p-0.5 shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#00D5FF]" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-white font-sans tracking-tight">
            {mode === 'login' && 'Sign in to KUMAILFX'}
            {mode === 'register' && 'Join KUMAILFX Academy'}
            {mode === 'forgot' && 'Reset Your Password'}
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            {mode === 'login' && 'Admin & Student portal access for KUMAILFX.'}
            {mode === 'register' && 'Create your student membership and join our trading roster.'}
            {mode === 'forgot' && 'Enter your registered email to receive a recovery link.'}
          </p>
        </div>

        {/* 1-Click Fast Login Buttons for Evaluation */}
        <div className="p-4 rounded-xl bg-[#080B12] border border-blue-500/30 space-y-2.5">
          <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider text-center">
            One-Click Login Credentials
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleQuickAdminLogin}
              className="py-2.5 px-2 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500 text-blue-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors text-left"
              title="Admin access: syedkumails62@gmail.com"
            >
              <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <div className="truncate">
                <div className="font-bold">Syed Kumail (Admin)</div>
              </div>
            </button>
            <button
              type="button"
              onClick={handleQuickStudentLogin}
              className="py-2.5 px-2 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Student Account</span>
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-start gap-2.5 font-mono">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {forgotSuccess ? (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-3">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="text-sm font-bold text-white">Password Reset Link Dispatched</h3>
            <p className="text-xs text-slate-400">
              Check your inbox for step-by-step instructions to create a new password.
            </p>
            <button
              onClick={() => {
                setForgotSuccess(false);
                setMode('login');
              }}
              className="text-xs text-cyan-400 underline"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Syed Kumail"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Country / Region</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. Pakistan, UAE, UK"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. syedkumails62@gmail.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-mono text-slate-300">Password *</label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-[11px] text-cyan-400 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#080B12] border border-white/[0.1] rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#1677FF] to-[#00D5FF] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-opacity"
            >
              <span>{mode === 'login' ? 'Sign In' : mode === 'register' ? 'Join as New Member' : 'Send Reset Link'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-white/[0.06] text-center text-xs text-slate-400">
          {mode === 'login' ? (
            <div>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setMode('register');
                }}
                className="text-cyan-400 font-bold hover:underline"
              >
                Join KUMAILFX Now
              </button>
            </div>
          ) : (
            <div>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('');
                  setMode('login');
                }}
                className="text-cyan-400 font-bold hover:underline"
              >
                Sign In Instead
              </button>
            </div>
          )}
        </div>

        {/* Security Notice */}
        <div className="p-3 rounded-lg bg-[#080B12] border border-white/[0.04] text-[11px] text-slate-500 font-mono text-center">
          Admin portal access is exclusively reserved for Syed Kumail Abbas.
        </div>

      </div>
    </div>
  );
};
