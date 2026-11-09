/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademyPage } from './pages/AcademyPage';
import { TradingConceptsPage } from './pages/TradingConceptsPage';
import { MarketAnalysisPage } from './pages/MarketAnalysisPage';
import { LiveTradingPage } from './pages/LiveTradingPage';
import { TradingToolsPage } from './pages/TradingToolsPage';
import { CommunityPage } from './pages/CommunityPage';
import { ContactPage } from './pages/ContactPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { AuthPage } from './pages/AuthPage';
import { BinaryBundlePage } from './pages/BinaryBundlePage';
import { TradingTechnologyPage } from './pages/TradingTechnologyPage';

const AppContent: React.FC = () => {
  const { activePage } = useApp();

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'academy':
        return <AcademyPage />;
      case 'concepts':
        return <TradingConceptsPage />;
      case 'market-analysis':
        return <MarketAnalysisPage />;
      case 'live-trading':
        return <LiveTradingPage />;
      case 'trading-tools':
        return <TradingToolsPage />;
      case 'community':
        return <CommunityPage />;
      case 'contact':
        return <ContactPage />;
      case 'student-dashboard':
        return <StudentDashboard />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'login':
        return <AuthPage initialMode="login" />;
      case 'register':
        return <AuthPage initialMode="register" />;
      case 'binary-platinum':
        return <BinaryBundlePage />;
      case 'trading-technology':
        return <TradingTechnologyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080B12] text-slate-100 font-sans selection:bg-[#1677FF]/30 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
