/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  UserRole,
  JoinedMember,
  Course,
  MarketAnalysis,
  LiveSession,
  Announcement,
  ContactMessage,
  TradeJournalEntry,
} from '../types/database';
import {
  KUMAILFX_COURSE,
  INITIAL_MARKET_ANALYSIS,
  INITIAL_LIVE_SESSIONS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_JOURNAL_ENTRIES,
  INITIAL_JOINED_MEMBERS,
  FOUNDER_INFO,
  DEFAULT_STUDENT_AVATAR,
} from '../data/seedData';

export type NavigationPage =
  | 'home'
  | 'about'
  | 'academy'
  | 'concepts'
  | 'market-analysis'
  | 'live-trading'
  | 'trading-tools'
  | 'community'
  | 'contact'
  | 'student-dashboard'
  | 'admin-dashboard'
  | 'login'
  | 'register'
  | 'binary-platinum'
  | 'trading-technology';

export const ADMIN_CREDENTIALS = {
  email: 'syedkumails62@gmail.com',
  password: 'XshahX512..14',
  fullName: 'Syed Kumail Abbas',
};

export const ADMIN_USER: UserProfile = {
  id: 'usr-admin-1',
  email: 'syedkumails62@gmail.com',
  fullName: 'Syed Kumail Abbas',
  role: 'admin',
  avatarUrl: FOUNDER_INFO.portraitImage,
  bio: 'Founder & Head Educator of KUMAILFX. Institutional trader specializing in ICT, Market Structure, and Smart Money Concepts.',
  joinedDate: '2024-01-15',
  timezone: 'PKT (UTC+5)',
};

export const STUDENT_USER: UserProfile = {
  id: 'usr-student-1',
  email: 'student@kumailfx.com',
  fullName: 'Syed Kumail (Student)',
  role: 'student',
  avatarUrl: DEFAULT_STUDENT_AVATAR,
  bio: 'Dedicated Forex student focused on EURUSD & XAUUSD London Killzone strategies.',
  joinedDate: '2026-03-01',
  timezone: 'PKT (UTC+5)',
};

interface AppContextType {
  currentUser: UserProfile | null;
  activeRole: UserRole;
  setRole: (role: UserRole) => void;
  login: (email: string, password?: string) => { success: boolean; error?: string };
  registerMember: (fullName: string, email: string, country?: string) => UserProfile;
  logout: () => void;
  activePage: NavigationPage;
  navigateTo: (page: NavigationPage, params?: Record<string, any>) => void;
  pageParams: Record<string, any>;
  course: Course;
  currentLessonId: string;
  setCurrentLessonId: (id: string) => void;
  completedLessonIds: string[];
  markLessonComplete: (lessonId: string, completed?: boolean) => void;
  savedLessonIds: string[];
  toggleSaveLesson: (lessonId: string) => void;
  marketAnalyses: MarketAnalysis[];
  addMarketAnalysis: (analysis: MarketAnalysis) => void;
  updateMarketAnalysis: (analysis: MarketAnalysis) => void;
  deleteMarketAnalysis: (id: string) => void;
  liveSessions: LiveSession[];
  updateLiveSession: (session: LiveSession) => void;
  addLiveSession: (session: LiveSession) => void;
  announcements: Announcement[];
  addAnnouncement: (announcement: Announcement) => void;
  deleteAnnouncement: (id: string) => void;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: { fullName: string; email: string; subject: string; message: string }) => boolean;
  markMessageRead: (id: string) => void;
  journalEntries: TradeJournalEntry[];
  addJournalEntry: (entry: Omit<TradeJournalEntry, 'id'>) => void;
  deleteJournalEntry: (id: string) => void;
  joinedMembers: JoinedMember[];
  deleteMember: (id: string) => void;
  registerPlatinumMember: (fullName: string, email: string, country?: string, paymentRef?: string) => JoinedMember;
  totalMembersCount: number;
  platinumMembersCount: number;
  stats: {
    totalLessons: number;
    completedCount: number;
    progressPercentage: number;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'kumailfx_user',
  COMPLETED_LESSONS: 'kumailfx_completed_lessons',
  SAVED_LESSONS: 'kumailfx_saved_lessons',
  CURRENT_LESSON: 'kumailfx_current_lesson',
  MARKET_ANALYSIS: 'kumailfx_market_analysis',
  LIVE_SESSIONS: 'kumailfx_live_sessions',
  ANNOUNCEMENTS: 'kumailfx_announcements',
  CONTACT_MESSAGES: 'kumailfx_contact_messages',
  JOURNAL_ENTRIES: 'kumailfx_journal_entries',
  JOINED_MEMBERS: 'kumailfx_joined_members',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation state with deep-link support (?page=register, ?page=academy, etc.)
  const [activePage, setActivePage] = useState<NavigationPage>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const pageParam = urlParams.get('page') as NavigationPage | null;
      const validPages: NavigationPage[] = [
        'home', 'about', 'academy', 'concepts', 'market-analysis',
        'live-trading', 'trading-tools', 'community', 'contact',
        'student-dashboard', 'admin-dashboard', 'login', 'register'
      ];
      if (pageParam && validPages.includes(pageParam)) {
        return pageParam;
      }
      const hash = window.location.hash.replace('#', '') as NavigationPage;
      if (hash && validPages.includes(hash)) {
        return hash;
      }
    } catch (e) {
      // ignore
    }
    return 'home';
  });

  const [pageParams, setPageParams] = useState<Record<string, any>>({});

  // Auth state (defaults to null for visitors/students so admin is strictly locked)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return null;
  });

  // Course & Lessons state
  const [course] = useState<Course>(KUMAILFX_COURSE);
  const [currentLessonId, setCurrentLessonIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_LESSON);
      if (saved) return saved;
    } catch (e) {
      // ignore
    }
    return 'les-2-3'; // Default to Break of Structure (BOS)
  });

  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return ['les-1-1', 'les-1-2', 'les-1-3', 'les-2-1'];
  });

  const [savedLessonIds, setSavedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SAVED_LESSONS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return ['les-3-6', 'les-4-2', 'les-6-1'];
  });

  // Market Analyses
  const [marketAnalyses, setMarketAnalyses] = useState<MarketAnalysis[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MARKET_ANALYSIS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_MARKET_ANALYSIS;
  });

  // Live Sessions
  const [liveSessions, setLiveSessions] = useState<LiveSession[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LIVE_SESSIONS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_LIVE_SESSIONS;
  });

  // Announcements
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_ANNOUNCEMENTS;
  });

  // Contact Messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACT_MESSAGES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return [
      {
        id: 'msg-demo-1',
        fullName: 'Zain Malik',
        email: 'zain@example.com',
        subject: 'Inquiry about Institutional Mentorship',
        message: 'Assalam o Alaikum Kumail. I have been watching your YouTube live streams on London killzone. I want to know more about the live student sessions.',
        submittedAt: '2026-11-08 14:20 PKT',
        status: 'unread',
      },
    ];
  });

  // Trade Journal
  const [journalEntries, setJournalEntries] = useState<TradeJournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.JOURNAL_ENTRIES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_JOURNAL_ENTRIES;
  });

  // Joined Members Roster
  const [joinedMembers, setJoinedMembers] = useState<JoinedMember[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.JOINED_MEMBERS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_JOINED_MEMBERS;
  });

  // Sync to local storage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessonIds));
  }, [completedLessonIds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SAVED_LESSONS, JSON.stringify(savedLessonIds));
  }, [savedLessonIds]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_LESSON, currentLessonId);
  }, [currentLessonId]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MARKET_ANALYSIS, JSON.stringify(marketAnalyses));
  }, [marketAnalyses]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LIVE_SESSIONS, JSON.stringify(liveSessions));
  }, [liveSessions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(contactMessages));
  }, [contactMessages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.JOURNAL_ENTRIES, JSON.stringify(journalEntries));
  }, [journalEntries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.JOINED_MEMBERS, JSON.stringify(joinedMembers));
  }, [joinedMembers]);

  // Auth actions
  const setRole = (role: UserRole) => {
    if (role === 'admin') {
      setCurrentUser(ADMIN_USER);
    } else if (role === 'student') {
      setCurrentUser(STUDENT_USER);
    } else {
      setCurrentUser(null);
    }
  };

  const registerMember = (fullName: string, email: string, country: string = 'Pakistan'): UserProfile => {
    const existing = joinedMembers.find((m) => m.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      const user: UserProfile = {
        id: existing.id,
        email: existing.email,
        fullName: existing.fullName,
        role: 'student',
        avatarUrl: DEFAULT_STUDENT_AVATAR,
        joinedDate: existing.joinedDate,
        timezone: 'PKT (UTC+5)',
      };
      setCurrentUser(user);
      setActivePage('student-dashboard');
      return user;
    }

    const newMember: JoinedMember = {
      id: `mem-${Date.now()}`,
      fullName,
      email,
      role: 'student',
      joinedDate: new Date().toISOString().split('T')[0],
      status: 'Active Member',
      progressPercent: 0,
      country,
      lastActive: 'Just now',
    };

    setJoinedMembers((prev) => [newMember, ...prev]);

    const newUser: UserProfile = {
      id: newMember.id,
      email: newMember.email,
      fullName: newMember.fullName,
      role: 'student',
      avatarUrl: DEFAULT_STUDENT_AVATAR,
      joinedDate: newMember.joinedDate,
      timezone: 'PKT (UTC+5)',
    };

    setCurrentUser(newUser);
    setActivePage('student-dashboard');
    return newUser;
  };

  const registerPlatinumMember = (
    fullName: string,
    email: string,
    country: string = 'Pakistan',
    paymentRef: string = 'Verified $100 Enrollment'
  ): JoinedMember => {
    const normalizedEmail = email.trim().toLowerCase();
    const existing = joinedMembers.find((m) => m.email.toLowerCase() === normalizedEmail);

    if (existing) {
      const updated: JoinedMember = {
        ...existing,
        fullName: fullName || existing.fullName,
        membershipTier: 'Binary Premium Platinum',
        enrolledBundle: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
        amountPaid: '$100',
        lastActive: 'Just now',
      };
      setJoinedMembers((prev) => prev.map((m) => (m.id === existing.id ? updated : m)));

      const user: UserProfile = {
        id: updated.id,
        email: updated.email,
        fullName: updated.fullName,
        role: 'student',
        avatarUrl: DEFAULT_STUDENT_AVATAR,
        joinedDate: updated.joinedDate,
        timezone: 'PKT (UTC+5)',
      };
      setCurrentUser(user);
      setActivePage('student-dashboard');
      setPageParams({ justEnrolledPlatinum: true });
      return updated;
    }

    const newPlatinumMember: JoinedMember = {
      id: `mem-plat-${Date.now()}`,
      fullName,
      email: normalizedEmail,
      role: 'student',
      joinedDate: new Date().toISOString().split('T')[0],
      status: 'Active Member',
      progressPercent: 10,
      country,
      lastActive: 'Just now',
      membershipTier: 'Binary Premium Platinum',
      enrolledBundle: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
      amountPaid: '$100',
    };

    setJoinedMembers((prev) => [newPlatinumMember, ...prev]);

    const newUser: UserProfile = {
      id: newPlatinumMember.id,
      email: newPlatinumMember.email,
      fullName: newPlatinumMember.fullName,
      role: 'student',
      avatarUrl: DEFAULT_STUDENT_AVATAR,
      joinedDate: newPlatinumMember.joinedDate,
      timezone: 'PKT (UTC+5)',
    };

    setCurrentUser(newUser);
    setActivePage('student-dashboard');
    setPageParams({ justEnrolledPlatinum: true });
    return newPlatinumMember;
  };

  const login = (email: string, password?: string): { success: boolean; error?: string } => {
    const normalizedEmail = email.trim().toLowerCase();

    // Strict Administrator Check for Syed Kumail Abbas
    if (normalizedEmail === ADMIN_CREDENTIALS.email.toLowerCase()) {
      if (password === ADMIN_CREDENTIALS.password) {
        setCurrentUser(ADMIN_USER);
        setActivePage('admin-dashboard');
        return { success: true };
      } else {
        return {
          success: false,
          error: 'Access Denied: Incorrect password for Administrator Syed Kumail Abbas.',
        };
      }
    }

    // Student Member Login
    const existing = joinedMembers.find((m) => m.email.toLowerCase() === normalizedEmail);
    const studentUser: UserProfile = {
      id: existing ? existing.id : `usr-${Date.now()}`,
      email: normalizedEmail,
      fullName: existing ? existing.fullName : email.split('@')[0],
      role: 'student',
      avatarUrl: DEFAULT_STUDENT_AVATAR,
      joinedDate: existing ? existing.joinedDate : 'Today',
      timezone: 'PKT (UTC+5)',
    };

    // If new, register into joined roster
    if (!existing) {
      const newMember: JoinedMember = {
        id: studentUser.id,
        fullName: studentUser.fullName,
        email: studentUser.email,
        role: 'student',
        joinedDate: new Date().toISOString().split('T')[0],
        status: 'Active Member',
        progressPercent: 0,
        country: 'Global Member',
        lastActive: 'Today',
      };
      setJoinedMembers((prev) => [newMember, ...prev]);
    }

    setCurrentUser(studentUser);
    setActivePage('student-dashboard');
    return { success: true };
  };

  const deleteMember = (id: string) => {
    setJoinedMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const logout = () => {
    setCurrentUser(null);
    setActivePage('home');
  };

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('page') as NavigationPage | null;
        if (pageParam) {
          setActivePage(pageParam);
        } else {
          setActivePage('home');
        }
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: NavigationPage, params: Record<string, any> = {}) => {
    setActivePage(page);
    setPageParams(params);
    try {
      const url = new URL(window.location.href);
      if (page === 'home') {
        url.searchParams.delete('page');
      } else {
        url.searchParams.set('page', page);
      }
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setCurrentLessonId = (id: string) => {
    setCurrentLessonIdState(id);
  };

  const markLessonComplete = (lessonId: string, completed: boolean = true) => {
    setCompletedLessonIds((prev) => {
      if (completed) {
        if (!prev.includes(lessonId)) return [...prev, lessonId];
        return prev;
      } else {
        return prev.filter((id) => id !== lessonId);
      }
    });
  };

  const toggleSaveLesson = (lessonId: string) => {
    setSavedLessonIds((prev) => {
      if (prev.includes(lessonId)) {
        return prev.filter((id) => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  const addMarketAnalysis = (analysis: MarketAnalysis) => {
    setMarketAnalyses((prev) => [analysis, ...prev]);
  };

  const updateMarketAnalysis = (analysis: MarketAnalysis) => {
    setMarketAnalyses((prev) =>
      prev.map((item) => (item.id === analysis.id ? analysis : item))
    );
  };

  const deleteMarketAnalysis = (id: string) => {
    setMarketAnalyses((prev) => prev.filter((item) => item.id !== id));
  };

  const updateLiveSession = (session: LiveSession) => {
    setLiveSessions((prev) =>
      prev.map((s) => (s.id === session.id ? session : s))
    );
  };

  const addLiveSession = (session: LiveSession) => {
    setLiveSessions((prev) => [session, ...prev]);
  };

  const addAnnouncement = (announcement: Announcement) => {
    setAnnouncements((prev) => [announcement, ...prev]);
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  const submitContactMessage = (msg: { fullName: string; email: string; subject: string; message: string }) => {
    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      fullName: msg.fullName,
      email: msg.email,
      subject: msg.subject,
      message: msg.message,
      submittedAt: new Date().toLocaleString(),
      status: 'unread',
    };
    setContactMessages((prev) => [newMsg, ...prev]);
    return true;
  };

  const markMessageRead = (id: string) => {
    setContactMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: 'read' } : m))
    );
  };

  const addJournalEntry = (entry: Omit<TradeJournalEntry, 'id'>) => {
    const newEntry: TradeJournalEntry = {
      ...entry,
      id: `jrn-${Date.now()}`,
    };
    setJournalEntries((prev) => [newEntry, ...prev]);
  };

  const deleteJournalEntry = (id: string) => {
    setJournalEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const totalLessons = course.totalLessons;
  const completedCount = completedLessonIds.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        activeRole: currentUser?.role || 'guest',
        setRole,
        login,
        logout,
        activePage,
        navigateTo,
        pageParams,
        course,
        currentLessonId,
        setCurrentLessonId,
        completedLessonIds,
        markLessonComplete,
        savedLessonIds,
        toggleSaveLesson,
        marketAnalyses,
        addMarketAnalysis,
        updateMarketAnalysis,
        deleteMarketAnalysis,
        liveSessions,
        updateLiveSession,
        addLiveSession,
        announcements,
        addAnnouncement,
        deleteAnnouncement,
        contactMessages,
        submitContactMessage,
        markMessageRead,
        journalEntries,
        addJournalEntry,
        deleteJournalEntry,
        joinedMembers,
        deleteMember,
        registerMember,
        registerPlatinumMember,
        totalMembersCount: joinedMembers.length + 5240,
        platinumMembersCount: joinedMembers.filter((m) => m.membershipTier === 'Binary Premium Platinum').length,
        stats: {
          totalLessons,
          completedCount,
          progressPercentage,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
