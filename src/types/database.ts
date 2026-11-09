/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'admin' | 'student' | 'guest';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  avatarUrl: string;
  bio?: string;
  joinedDate: string;
  timezone?: string;
}

export type MembershipTier = 'Standard Student' | 'Binary Premium Platinum';

export interface JoinedMember {
  id: string;
  fullName: string;
  email: string;
  role: 'student';
  joinedDate: string;
  status: 'Active Member' | 'Pending Review';
  progressPercent: number;
  country?: string;
  lastActive: string;
  membershipTier?: MembershipTier;
  enrolledBundle?: string;
  amountPaid?: string; // e.g. "$100" or "Free"
}

export interface PdfResource {
  id: string;
  title: string;
  size: string;
  url: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  videoUrl: string; // Embed or YouTube video
  duration: string;
  orderIndex: number;
  pdfResources: PdfResource[];
  keyTakeaways: string[];
}

export interface CourseModule {
  id: string;
  courseId: string;
  moduleNumber: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Masterclass';
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  totalModules: number;
  totalLessons: number;
  estimatedHours: string;
  modules: CourseModule[];
}

export interface MarketPriceLevel {
  label: string;
  price: string;
  type: 'support' | 'resistance' | 'liquidity' | 'fvg';
}

export interface MarketAnalysis {
  id: string;
  pair: 'EURUSD' | 'XAUUSD' | 'GBPUSD';
  title: string;
  bias: 'Bullish' | 'Bearish' | 'Neutral';
  timeframe: string;
  author: string;
  publishedAt: string;
  summary: string;
  marketStructure: string;
  fvgObservation: string;
  liquidityZones: string;
  bullishScenario: string;
  bearishScenario: string;
  keyLevels: MarketPriceLevel[];
  tags: string[];
}

export interface LiveSession {
  id: string;
  title: string;
  status: 'scheduled' | 'live' | 'completed';
  scheduledTime: string;
  streamUrl: string; // YouTube embed
  channelUrl: string;
  marketFocus: string;
  description: string;
  host: string;
  recordingUrl?: string;
  notes?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Live Alert' | 'Academy Update' | 'Market Brief' | 'Notice';
  author: string;
  isPinned?: boolean;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'unread' | 'read' | 'replied';
}

export interface TradeJournalEntry {
  id: string;
  userId: string;
  date: string;
  pair: string;
  direction: 'buy' | 'sell';
  entryPrice: number;
  exitPrice: number;
  stopLoss: number;
  takeProfit: number;
  lotSize: number;
  pnl: number;
  rMultiple: number;
  session: 'London' | 'New York' | 'Asian';
  setupType: 'FVG Rejection' | 'BOS Continuation' | 'Liquidity Sweep' | 'Order Block Tap' | 'SMT Divergence';
  notes: string;
}

export interface StudentTestimonial {
  id: string;
  studentName: string;
  location: string;
  roleOrProfession?: string;
  membershipTier: MembershipTier | 'Forex Academy Student';
  enrolledProgram: string;
  focusInstruments: string[];
  headline: string;
  quote: string;
  detailedStory: string;
  keyMetric: string;
  keyMetricLabel: string;
  category: 'all' | 'binary-orderflow' | 'forex-smc' | 'funded-discipline';
  verifiedStudent: boolean;
  date: string;
  rating: number; // 1 to 5
}
