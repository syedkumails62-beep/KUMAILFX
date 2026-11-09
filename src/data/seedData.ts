/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Course,
  MarketAnalysis,
  LiveSession,
  Announcement,
  TradeJournalEntry,
  StudentTestimonial,
} from '../types/database';

export const FOUNDER_INFO = {
  name: 'Syed Kumail Abbas',
  brand: 'KUMAILFX',
  tagline: 'LEARN | TRADE | GROW',
  title: 'Founder & Head Trading Educator',
  portraitImage: '/assets/aistudio/file_00000000beec81f58f608fb446ff2d15_e3207618.png',
  bio: 'Syed Kumail Abbas founded KUMAILFX with a clear objective: to demystify financial markets and teach high-probability, rule-based institutional trading frameworks. By breaking down complex market behavior into objective principles—market structure, liquidity engineering, Fair Value Gaps, and disciplined risk preservation—KUMAILFX equips traders with an authentic market edge.',
  mission:
    'To make professional trading education accessible through structured learning, market knowledge, practical examples, and disciplined trading education.',
  philosophy:
    'We believe the market is an algorithmic auction designed to seek liquidity and balance price inefficiencies. Success in trading is not about predicting the future or chasing overnight riches—it is about rigorous process, objective probability, uncompromising risk management, and emotional mastery.',
  approach: [
    'Systematic Structure: Read price without lagging indicators or subjective noise.',
    'Liquidity Mechanics: Understand where institutional orders rest and why stop hunts occur.',
    'Uncompromising Risk Control: Protect capital first, execute repeatable setups, and let the edge play out.',
  ],
  socials: {
    youtube: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
    discord: 'https://discord.gg/CYJrgf5xa',
    instagramBroadcast: 'https://www.instagram.com/channel/AbYxmbmUgnnU6ICB/',
    telegram: 'https://t.me/wolfcrl',
  },
};

export const TRADING_TECHNOLOGY_DATA = {
  title: 'MY TRADING TECHNOLOGY & EXPERIENCE',
  subtitle: 'Combining Futures Order Flow with Binary and Forex Analysis',
  intro: 'My trading methodology combines traditional price-action analysis with futures-market microstructure and short-term execution analysis.',
  pillars: [
    {
      step: '01',
      platform: 'Tradovate',
      headline: 'Futures Order Flow',
      description: 'I use Tradovate to study exchange-traded futures market activity through:',
      bullets: [
        'Depth of Market (DOM)',
        'Level II liquidity',
        'Bid/Ask Volume Analysis',
        'Tick-by-Tick Trade Flow',
        'Volume Profile and Point of Control',
        'Market Replay',
        'Buying and Selling Pressure',
      ],
      badge: 'Futures Market Microstructure',
      iconColor: '#1677FF',
    },
    {
      step: '02',
      platform: 'Tradfye.com',
      headline: 'Binary Trading Workflow',
      description: 'I incorporate Tradfye into my short-term binary trading workflow, particularly when studying BTC market behaviour.',
      focusTitle: 'My analysis focuses on:',
      bullets: [
        '1-minute and 5-minute price behaviour',
        'Short-term market structure',
        'Liquidity reactions',
        'Momentum and displacement',
        'Entry timing',
        'Order-flow alignment',
      ],
      badge: 'Short-Term Binary Execution',
      iconColor: '#00D5FF',
    },
    {
      step: '03',
      platform: 'Forex & Binary Order Flow Alignment',
      headline: 'The Core Synthesis Framework',
      description: 'My core framework connects the complete execution chain from raw exchange data to final confirmation:',
      frameworkChain: [
        'FUTURES DATA',
        'ORDER FLOW',
        'LIQUIDITY',
        'PRICE STRUCTURE',
        'TRADE CONFIRMATION',
      ],
      summary: 'I look for agreement between market structure, available order-flow information, and price behaviour before considering a trading opportunity.',
      badge: 'Microstructure Confirmation',
      iconColor: '#10B981',
    },
  ],
  objective: {
    statement: 'To understand the market through actual trading activity, not simply candle colours or indicator signals.',
    tagline: 'KUMAILFX — Beyond Price Action. Into Market Microstructure.',
  },
};

export const BINARY_PREMIUM_BUNDLE = {
  id: 'bundle-binary-non-otc-eurusd',
  title: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
  shortTitle: 'Binary Non-OTC EURUSD A to Z Premium Bundle',
  tier: 'Binary Premium Platinum' as const,
  price: 100,
  currency: 'USD',
  priceFormatted: '$100',
  badge: 'BINARY PREMIUM PLATINUM TIER',
  headline: 'Authentic Exchange-Driven EURUSD Binary Execution with Futures Microstructure',
  description:
    'Master non-OTC real-market EURUSD binary options trading combining futures exchange order flow from Tradovate DOM, Level II delta, and Tradfye 1M/5M precision execution. No synthetic broker manipulation.',
  features: [
    'Complete A to Z Non-OTC EURUSD Binary Strategy Guide (Real interbank/futures feed)',
    'Futures Order Flow Integration: Tradovate DOM, Tick-by-tick tape, & Bid/Ask delta',
    'Tradfye.com Binary Trading Workflow: 1M and 5M expiry timing & momentum models',
    'Liquidity Sweep & FVG entries specifically engineered for short-term expiration',
    'Automatic enrollment into BINARY PREMIUM PLATINUM MEMBERS VIP Directory',
    'Private VIP Discord channel & exclusive direct mentorship signals with Syed Kumail Abbas',
  ],
  syllabus: [
    {
      title: 'Real vs OTC Binary Markets: The Institutional Reality',
      details: 'Why OTC broker charts are synthetically manipulated against retail traders and how to verify real interbank EURUSD pricing.',
    },
    {
      title: 'Tradovate Level II DOM & Delta Absorption',
      details: 'Reading the Depth of Market, identifying passive limit order icebergs, and recognizing where large players absorb aggressive selling.',
    },
    {
      title: 'Tradfye 1M & 5M Momentum Workflow',
      details: 'Deploying Tradfye for short-term structural shifts, liquidity taps, and high-probability binary expiry timing.',
    },
    {
      title: 'The 5-Step Order Flow Alignment Pipeline',
      details: 'FUTURES DATA → ORDER FLOW → LIQUIDITY → PRICE STRUCTURE → TRADE CONFIRMATION.',
    },
    {
      title: 'Binary Risk Protocols & Trade Journal',
      details: 'Strict position sizing rules, avoiding martingale traps, and tracking binary edge with scientific accuracy.',
    },
  ],
};

export const INITIAL_JOINED_MEMBERS = [
  {
    id: 'mem-1',
    fullName: 'Hamza Farooq',
    email: 'hamza.trader@gmail.com',
    role: 'student' as const,
    joinedDate: '2026-11-09',
    status: 'Active Member' as const,
    progressPercent: 68,
    country: 'Pakistan',
    lastActive: 'Today, 10:15 AM',
    membershipTier: 'Binary Premium Platinum' as const,
    enrolledBundle: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
    amountPaid: '$100',
  },
  {
    id: 'mem-2',
    fullName: 'Ali Raza',
    email: 'ali.raza.fx@outlook.com',
    role: 'student' as const,
    joinedDate: '2026-11-08',
    status: 'Active Member' as const,
    progressPercent: 38,
    country: 'Pakistan',
    lastActive: 'Today, 08:30 AM',
    membershipTier: 'Standard Student' as const,
    enrolledBundle: 'Forex & SMC Mastery Foundation',
    amountPaid: 'Free',
  },
  {
    id: 'mem-3',
    fullName: 'Zain Malik',
    email: 'zain@example.com',
    role: 'student' as const,
    joinedDate: '2026-11-08',
    status: 'Active Member' as const,
    progressPercent: 82,
    country: 'United Arab Emirates',
    lastActive: 'Yesterday',
    membershipTier: 'Binary Premium Platinum' as const,
    enrolledBundle: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
    amountPaid: '$100',
  },
  {
    id: 'mem-4',
    fullName: 'Bilal Hassan',
    email: 'bilal.hassan99@gmail.com',
    role: 'student' as const,
    joinedDate: '2026-11-07',
    status: 'Active Member' as const,
    progressPercent: 75,
    country: 'United Kingdom',
    lastActive: 'Yesterday',
    membershipTier: 'Binary Premium Platinum' as const,
    enrolledBundle: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
    amountPaid: '$100',
  },
  {
    id: 'mem-5',
    fullName: 'Usman Tariq',
    email: 'usman.tariq@yahoo.com',
    role: 'student' as const,
    joinedDate: '2026-11-06',
    status: 'Active Member' as const,
    progressPercent: 43,
    country: 'Pakistan',
    lastActive: 'Nov 7, 2026',
    membershipTier: 'Standard Student' as const,
    enrolledBundle: 'Forex & SMC Mastery Foundation',
    amountPaid: 'Free',
  },
  {
    id: 'mem-6',
    fullName: 'Omar Khalid',
    email: 'omar.khalid.trading@gmail.com',
    role: 'student' as const,
    joinedDate: '2026-11-05',
    status: 'Active Member' as const,
    progressPercent: 91,
    country: 'Saudi Arabia',
    lastActive: 'Nov 6, 2026',
    membershipTier: 'Binary Premium Platinum' as const,
    enrolledBundle: 'BINARY NON OTC EURUSD A TO Z CONCEPTS PREMIUM BUNDLE WITH ORDER FLOW',
    amountPaid: '$100',
  },
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'London Open Killzone Live Stream Scheduled',
    content:
      'Join Kumail Abbas for a deep dive into EURUSD & GBPUSD liquidity pools ahead of the London session. Real-time structure breakdown and high-probability setup analysis.',
    date: '2026-11-09',
    category: 'Live Alert',
    author: 'Kumail Abbas',
    isPinned: true,
  },
  {
    id: 'ann-2',
    title: 'Module 3 ICT Concepts — Dealing Range & IFVG Released',
    content:
      'Comprehensive institutional breakdown of Inversion Fair Value Gaps (IFVG) and Equilibrium Dealing Ranges is now available in the academy.',
    date: '2026-11-08',
    category: 'Academy Update',
    author: 'Kumail Abbas',
    isPinned: false,
  },
  {
    id: 'ann-3',
    title: 'Weekly Market Outlook: Gold (XAUUSD) All-Time High Liquidity',
    content:
      'Gold continues its institutional expansion. Review our detailed market analysis for key order block mitigation zones and buy-side liquidity targets.',
    date: '2026-11-07',
    category: 'Market Brief',
    author: 'Kumail Abbas',
    isPinned: false,
  },
];

export const INITIAL_MARKET_ANALYSIS: MarketAnalysis[] = [
  {
    id: 'ana-eurusd-1',
    pair: 'EURUSD',
    title: 'EURUSD 4H Structure & London Open Liquidity Pool Sweep',
    bias: 'Bullish',
    timeframe: '4H / 15M Execution',
    author: 'Kumail Abbas',
    publishedAt: 'November 9, 2026',
    summary:
      'EURUSD swept external Asian lows into an institutional 4H Fair Value Gap. We anticipate bullish displacement targeting buy-side liquidity above previous day highs.',
    marketStructure:
      'Bullish Change of Character (CHOCH) confirmed on 1H timeframe following the sweep of Asian range low at 1.0740. Clean displacement candles indicating institutional sponsorship.',
    fvgObservation:
      'Unmitigated 4H FVG located between 1.0760 - 1.0775. Price has tapped into the 50% consequent encroachment level and reacted with rejection wicks.',
    liquidityZones:
      'Equal highs (BSL) resting at 1.0835 and 1.0860. Clean draw on liquidity with no significant resistance until the daily mitigation block.',
    bullishScenario:
      'Sustained 15M market displacement above 1.0790 triggers long entries targeting 1.0835 (Asian High) and 1.0860 (Weekly BSL). Invalidation below 1.0740.',
    bearishScenario:
      'Failure to hold 1.0760 on 1H close invalidates the setup and opens continuation down toward the Sell-Side Liquidity pool at 1.0710.',
    keyLevels: [
      { label: 'Buy-Side Liquidity (BSL Target)', price: '1.0860', type: 'liquidity' },
      { label: 'Asian High Target', price: '1.0835', type: 'resistance' },
      { label: '4H Fair Value Gap (Consequent Encroachment)', price: '1.0768', type: 'fvg' },
      { label: 'Invalidation Level (Sell-Side Sweep Low)', price: '1.0740', type: 'support' },
    ],
    tags: ['EURUSD', 'ICT', 'FVG', 'Liquidity Sweep', 'London Open'],
  },
  {
    id: 'ana-xauusd-1',
    pair: 'XAUUSD',
    title: 'XAUUSD (Gold) Bullish Order Block Reaction & ATH Expansion',
    bias: 'Bullish',
    timeframe: 'Daily / 1H',
    author: 'Kumail Abbas',
    publishedAt: 'November 8, 2026',
    summary:
      'Gold maintains institutional order flow with aggressive buy-side delivery. The pullback into the 1H bullish breaker block offers an optimal trade entry (OTE).',
    marketStructure:
      'Strong daily uptrend with consistent Break of Structure (BOS). Lower timeframe pullbacks are shallow and quickly absorbed by institutional buyers.',
    fvgObservation:
      '1H Imbalance / FVG between $2,642 and $2,648 has been tapped cleanly during the Asian session without closing below the discount boundary.',
    liquidityZones:
      'Buy-side liquidity resting above $2,670 and psychological round number $2,700.',
    bullishScenario:
      'Look for lower timeframe M5/M15 displacement out of the $2,645 zone targeting $2,670 first, with trailing stops towards $2,690.',
    bearishScenario:
      'A confirmed 4H body close below $2,630 would signal intermediate distribution and shift bias towards the $2,605 discount liquidity pool.',
    keyLevels: [
      { label: 'Major Psychological Target', price: '2,700.00', type: 'liquidity' },
      { label: 'Immediate BSL Level', price: '2,670.50', type: 'resistance' },
      { label: '1H Bullish Breaker / FVG', price: '2,645.00', type: 'fvg' },
      { label: 'Key Institutional Support', price: '2,630.00', type: 'support' },
    ],
    tags: ['XAUUSD', 'Gold', 'SMC', 'Order Block', 'OTE'],
  },
  {
    id: 'ana-gbpusd-1',
    pair: 'GBPUSD',
    title: 'GBPUSD Equilibrium Test & Premium/Discount Matrix',
    bias: 'Bearish',
    timeframe: '4H / 1H',
    author: 'Kumail Abbas',
    publishedAt: 'November 7, 2026',
    summary:
      'GBPUSD reached premium pricing within the current dealing range and rejected the 4H bearish mitigation block. Anticipating downward expansion toward sell-side liquidity.',
    marketStructure:
      'Failure to break previous swing high at 1.2820. Bearish market displacement with heavy volume wicks leaving liquidity engineered above.',
    fvgObservation:
      'Bearish Fair Value Gap respected at 1.2785 - 1.2805. Price failed to penetrate the upper quartile.',
    liquidityZones:
      'Equal lows (SSL) at 1.2680 represent the primary draw on liquidity for the upcoming sessions.',
    bullishScenario:
      'A clean close above 1.2825 would negate the bearish thesis and prompt re-evaluation of higher timeframe resistance.',
    bearishScenario:
      'Short entries on rejection wicks near 1.2770 targeting 1.2710 and 1.2680 Sell-Side Liquidity. Stop loss placed above 1.2820.',
    keyLevels: [
      { label: 'Bearish Invalidation', price: '1.2825', type: 'resistance' },
      { label: 'Mitigation Block Entry Zone', price: '1.2785', type: 'fvg' },
      { label: 'Intermediate Liquidity Target', price: '1.2710', type: 'support' },
      { label: 'Equal Lows Target (SSL)', price: '1.2680', type: 'liquidity' },
    ],
    tags: ['GBPUSD', 'Discount/Premium', 'Mitigation Block', 'SSL'],
  },
];

export const INITIAL_LIVE_SESSIONS: LiveSession[] = [
  {
    id: 'live-current',
    title: 'London Open & NY Killzone Live Execution & Chart Markup',
    status: 'scheduled',
    scheduledTime: 'Today at 12:30 PM PKT (07:30 UTC)',
    streamUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=kumailfx5',
    channelUrl: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
    marketFocus: 'EURUSD, GBPUSD & Gold (XAUUSD)',
    description:
      'Live trading room covering market open manipulation, Judas swings, Fair Value Gap execution, and real-time risk management discipline.',
    host: 'Kumail Abbas',
    recordingUrl: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
    notes:
      'Live session will begin 15 minutes before the London Open killzone. Bring your charts and review Module 3 lessons on Liquidity Sweeps beforehand.',
  },
  {
    id: 'rec-1',
    title: 'Mastering Fair Value Gaps (FVG) & Order Flow Inefficiencies',
    status: 'completed',
    scheduledTime: 'Recorded Session',
    streamUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=kumailfx5',
    channelUrl: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
    marketFocus: 'ICT FVG Framework',
    description:
      'Comprehensive 90-minute breakdown of regular FVGs, Inversion FVGs, balanced price ranges (BPR), and entry execution rules.',
    host: 'Kumail Abbas',
    recordingUrl: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
  },
  {
    id: 'rec-2',
    title: 'Institutional Market Structure: BOS vs CHOCH Deep Dive',
    status: 'completed',
    scheduledTime: 'Recorded Session',
    streamUrl: 'https://www.youtube-nocookie.com/embed/live_stream?channel=kumailfx5',
    channelUrl: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
    marketFocus: 'EURUSD & XAUUSD',
    description:
      'How to avoid fake breakouts and false changes of character. Identifying real displacement and institutional volume.',
    host: 'Kumail Abbas',
    recordingUrl: 'https://youtube.com/@kumailfx5?si=-CDW9hCZHIrrJ7Qq',
  },
];

export const INITIAL_JOURNAL_ENTRIES: TradeJournalEntry[] = [
  {
    id: 'jrn-1',
    userId: 'student-1',
    date: '2026-11-06',
    pair: 'EURUSD',
    direction: 'buy',
    entryPrice: 1.0772,
    exitPrice: 1.0832,
    stopLoss: 1.0752,
    takeProfit: 1.0832,
    lotSize: 0.5,
    pnl: 300,
    rMultiple: 3.0,
    session: 'London',
    setupType: 'FVG Rejection',
    notes:
      'Clean Asian low sweep into 15M FVG during London Open Killzone. Waited for 5M displacement and executed with tight 20 pip SL. Reached full 1:3 RR target at previous day high.',
  },
  {
    id: 'jrn-2',
    userId: 'student-1',
    date: '2026-11-04',
    pair: 'XAUUSD',
    direction: 'buy',
    entryPrice: 2642.5,
    exitPrice: 2665.0,
    stopLoss: 2635.0,
    takeProfit: 2665.0,
    lotSize: 0.2,
    pnl: 450,
    rMultiple: 3.0,
    session: 'New York',
    setupType: 'Order Block Tap',
    notes:
      'Gold pulled back to 1H bullish order block during NY session open. Confirmed with SMT divergence against USDX. Clean run into buy-side liquidity.',
  },
];

/**
 * Complete KUMAILFX Academy Curriculum matching all 6 Modules and requested lessons.
 */
export const KUMAILFX_COURSE: Course = {
  id: 'course-master-curriculum',
  title: 'KUMAILFX Institutional Forex & Smart Money Mastery',
  slug: 'institutional-forex-mastery',
  level: 'Masterclass',
  shortDescription:
    'The complete institutional blueprint: Forex fundamentals, algorithmic market structure, ICT concepts, Smart Money Concepts, advanced models, and disciplined risk management.',
  fullDescription:
    'Created by Kumail Abbas, this comprehensive educational academy guides traders from fundamental market mechanics to elite institutional frameworks. Master how algorithmic market makers engineer liquidity, exploit Fair Value Gaps, and protect trading capital with quantitative risk parameters.',
  thumbnail: '/assets/aistudio/file_00000000beec81f58f608fb446ff2d15_e3207618.png',
  totalModules: 6,
  totalLessons: 42,
  estimatedHours: '32 Hours',
  modules: [
    {
      id: 'mod-1',
      courseId: 'course-master-curriculum',
      moduleNumber: 1,
      title: 'Forex Fundamentals',
      description:
        'Establish the mathematical and structural groundwork of the global currency exchange market.',
      lessons: [
        {
          id: 'les-1-1',
          moduleId: 'mod-1',
          orderIndex: 1,
          title: 'What is Forex?',
          duration: '22 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'A thorough institutional introduction to the Foreign Exchange market ($7.5 trillion daily volume), market participants, central banks, and market makers.',
          pdfResources: [
            { id: 'pdf-1-1', title: 'Forex Market Foundations Cheatsheet', size: '1.8 MB', url: '#' },
          ],
          keyTakeaways: [
            'Forex is a decentralized, over-the-counter (OTC) market operating 24 hours a day, 5 days a week.',
            'Commercial banks and central banks dictate long-term order flow; retail traders must follow institutional tracks.',
            'Currency prices reflect relative macroeconomic strength and interest rate differentials.',
          ],
        },
        {
          id: 'les-1-2',
          moduleId: 'mod-1',
          orderIndex: 2,
          title: 'Currency Pairs',
          duration: '18 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Base currency versus quote currency, understanding the 7 major pairs, cross pairs, and commodity pairs (Gold / XAUUSD).',
          pdfResources: [
            { id: 'pdf-1-2', title: 'Major Currency Pairs & Correlated Assets', size: '2.1 MB', url: '#' },
          ],
          keyTakeaways: [
            'In EURUSD, EUR is the Base Currency and USD is the Quote Currency.',
            'Major pairs contain the US Dollar and possess the highest liquidity and lowest spreads.',
            'Commodity currencies (AUD, NZD, CAD) and Gold correlate with global risk sentiment.',
          ],
        },
        {
          id: 'les-1-3',
          moduleId: 'mod-1',
          orderIndex: 3,
          title: 'Pips and Lots',
          duration: '25 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Accurate calculation of pips, fractional pipettes, standard lots (100k), mini lots (10k), micro lots (1k), and monetary exposure.',
          pdfResources: [
            { id: 'pdf-1-3', title: 'Pip & Lot Size Mathematical Guide', size: '1.4 MB', url: '#' },
          ],
          keyTakeaways: [
            '1 Pip = 0.0001 in standard 4-digit quotes (0.01 in JPY pairs).',
            '1 Standard Lot = $10 per pip on EURUSD; 0.10 Mini Lot = $1 per pip; 0.01 Micro Lot = $0.10 per pip.',
            'Never open a trade without calculating exact monetary risk per pip beforehand.',
          ],
        },
        {
          id: 'les-1-4',
          moduleId: 'mod-1',
          orderIndex: 4,
          title: 'Spread and Leverage',
          duration: '20 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'How broker spread impacts profitability, Bid vs Ask price, margin requirements, and how to safely navigate leverage.',
          pdfResources: [
            { id: 'pdf-1-4', title: 'Spread & Leverage Risk Protocol', size: '1.6 MB', url: '#' },
          ],
          keyTakeaways: [
            'Spread is the difference between Bid and Ask; buy orders fill at Ask, sell orders fill at Bid.',
            'High leverage amplifies risk exponentially; professional traders maintain risk below 1-2% of capital.',
            'Avoid holding high-spread volatile trades through rollover hours (21:00-22:00 UTC).',
          ],
        },
        {
          id: 'les-1-5',
          moduleId: 'mod-1',
          orderIndex: 5,
          title: 'Trading Sessions',
          duration: '24 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Sydney, Tokyo, London, and New York market hours. Session overlaps, liquidity expansion, and Pakistan Standard Time (UTC+5) synchronization.',
          pdfResources: [
            { id: 'pdf-1-5', title: 'Global Session Clock & Overlap Blueprint', size: '2.5 MB', url: '#' },
          ],
          keyTakeaways: [
            'London and New York sessions generate over 70% of total daily Forex volume.',
            'The London-NY overlap (12:00-16:00 UTC / 17:00-21:00 PKT) produces the highest volatility and cleanest trending runs.',
            'Asian session consolidations typically set up London session expansion setups.',
          ],
        },
        {
          id: 'les-1-6',
          moduleId: 'mod-1',
          orderIndex: 6,
          title: 'Market Execution',
          duration: '19 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Market orders, Buy/Sell Limits, Buy/Sell Stops, slippage, and institutional order matching mechanics.',
          pdfResources: [
            { id: 'pdf-1-6', title: 'Order Execution Types & Slippage Management', size: '1.2 MB', url: '#' },
          ],
          keyTakeaways: [
            'Limit orders provide price improvement and reduce slippage during high-impact market deliveries.',
            'Stop orders execute at market price when triggered, making proper stop-loss placement crucial.',
            'Avoid market order execution during major news releases (NFP, CPI) due to spread widening.',
          ],
        },
      ],
    },
    {
      id: 'mod-2',
      courseId: 'course-master-curriculum',
      moduleNumber: 2,
      title: 'Market Structure',
      description:
        'Learn to read pure naked price action, swing highs and lows, and algorithmic trend validation.',
      lessons: [
        {
          id: 'les-2-1',
          moduleId: 'mod-2',
          orderIndex: 1,
          title: 'Higher Highs and Higher Lows',
          duration: '26 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Validating true structural swing points in an uptrend versus internal noise and minor pullbacks.',
          pdfResources: [
            { id: 'pdf-2-1', title: 'Swing Point Identification Protocol', size: '2.2 MB', url: '#' },
          ],
          keyTakeaways: [
            'A valid Higher Low requires the subsequent swing to break the preceding Higher High with a full candle body close.',
            'Wicks test liquidity; candle bodies tell the real story of institutional conviction.',
            'Always align multi-timeframe swings (Daily -> 4H -> 15M).',
          ],
        },
        {
          id: 'les-2-2',
          moduleId: 'mod-2',
          orderIndex: 2,
          title: 'Lower Highs and Lower Lows',
          duration: '23 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Downtrend mechanics, order flow preservation, and identifying valid protected structural highs.',
          pdfResources: [
            { id: 'pdf-2-2', title: 'Bearish Trend Flow & Protected Highs', size: '1.9 MB', url: '#' },
          ],
          keyTakeaways: [
            'Protected highs are structural swings that created new lower lows; targeted highs are weak and prone to being swept.',
            'Selling into weak rallies below protected highs offers the highest risk-to-reward ratios.',
          ],
        },
        {
          id: 'les-2-3',
          moduleId: 'mod-2',
          orderIndex: 3,
          title: 'Break of Structure (BOS)',
          duration: '30 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The institutional definition of BOS: candle body close requirements, trend continuation confirmation, and dealing range establishment.',
          pdfResources: [
            { id: 'pdf-2-3', title: 'BOS Execution & Candlestick Anatomy', size: '2.8 MB', url: '#' },
          ],
          keyTakeaways: [
            'BOS indicates trend continuation in the direction of the dominant higher timeframe trend.',
            'A true BOS requires a candle body close past the previous extreme, not merely a wick sweep.',
            'Once BOS occurs, the new dealing range is formed between the structural swing low and high.',
          ],
        },
        {
          id: 'les-2-4',
          moduleId: 'mod-2',
          orderIndex: 4,
          title: 'Change of Character (CHOCH)',
          duration: '32 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Distinguishing trend reversals from minor pullbacks. The anatomy of an institutional CHOCH following liquidity sweeps.',
          pdfResources: [
            { id: 'pdf-2-4', title: 'CHOCH vs Liquidity Sweep Identification', size: '3.1 MB', url: '#' },
          ],
          keyTakeaways: [
            'CHOCH is the first structural signal that trend control has shifted from buyers to sellers (or vice versa).',
            'High-probability CHOCH always occurs AFTER a key liquidity level has been swept into an HTF POI.',
            'Never chase the initial CHOCH candle; wait for the subsequent pullback into discount/premium.',
          ],
        },
        {
          id: 'les-2-5',
          moduleId: 'mod-2',
          orderIndex: 5,
          title: 'Market Displacement',
          duration: '27 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Detecting energetic institutional displacement candles, imbalances, and volume signature footprints.',
          pdfResources: [
            { id: 'pdf-2-5', title: 'Market Displacement & Volume Signatures', size: '2.0 MB', url: '#' },
          ],
          keyTakeaways: [
            'Displacement is characterized by large, energetic candles with minimal wicks that create Fair Value Gaps.',
            'Displacement confirms institutional banks have committed real capital, validating the trade idea.',
          ],
        },
        {
          id: 'les-2-6',
          moduleId: 'mod-2',
          orderIndex: 6,
          title: 'Internal and External Structure',
          duration: '35 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Navigating multiple timeframes without confusion: external swing boundaries vs internal complex pullbacks.',
          pdfResources: [
            { id: 'pdf-2-6', title: 'Multi-Timeframe Structure Matrix', size: '3.4 MB', url: '#' },
          ],
          keyTakeaways: [
            'External structure (HTF) defines directional bias; internal structure (LTF) provides precision execution timing.',
            'Internal structure pullbacks into external discount areas provide optimal trade entries.',
          ],
        },
      ],
    },
    {
      id: 'mod-3',
      courseId: 'course-master-curriculum',
      moduleNumber: 3,
      title: 'ICT Concepts',
      description:
        'The core inner-circle algorithmic concepts: Liquidity pools, Fair Value Gaps, Order Blocks, and Dealing Ranges.',
      lessons: [
        {
          id: 'les-3-1',
          moduleId: 'mod-3',
          orderIndex: 1,
          title: 'ICT Liquidity',
          duration: '34 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Why price is an algorithmic auction driven exclusively to seek liquidity pools and rebalance price imbalances.',
          pdfResources: [
            { id: 'pdf-3-1', title: 'The Algorithm of Market Liquidity', size: '3.0 MB', url: '#' },
          ],
          keyTakeaways: [
            'Price does not move randomly; it seeks resting buy and sell stop orders left by participants.',
            'If you cannot spot where liquidity rests on the chart, your stop loss is the liquidity.',
          ],
        },
        {
          id: 'les-3-2',
          moduleId: 'mod-3',
          orderIndex: 2,
          title: 'Buy-Side Liquidity',
          duration: '28 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Identifying Buy Stops resting above old swing highs, equal highs, and daily/weekly previous highs.',
          pdfResources: [
            { id: 'pdf-3-2', title: 'Buy-Side Liquidity (BSL) Recognition', size: '2.4 MB', url: '#' },
          ],
          keyTakeaways: [
            'Buy-side liquidity (BSL) rests above old highs as buy stop-loss orders and breakout buy orders.',
            'Institutions use retail buy stop orders to fill their massive institutional sell orders.',
          ],
        },
        {
          id: 'les-3-3',
          moduleId: 'mod-3',
          orderIndex: 3,
          title: 'Sell-Side Liquidity',
          duration: '26 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Locating Sell Stops beneath old swing lows, equal lows (clean triple bottoms), and session lows.',
          pdfResources: [
            { id: 'pdf-3-3', title: 'Sell-Side Liquidity (SSL) Recognition', size: '2.3 MB', url: '#' },
          ],
          keyTakeaways: [
            'Sell-side liquidity (SSL) rests beneath swing lows as stop-loss orders from retail buyers.',
            'A sweep of SSL into an unmitigated bullish order block is the classic ICT long setup.',
          ],
        },
        {
          id: 'les-3-4',
          moduleId: 'mod-3',
          orderIndex: 4,
          title: 'Time-Based Liquidity',
          duration: '29 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Why time precedes price in institutional delivery: 4-hour candle closes, daily open, midnight NY open.',
          pdfResources: [
            { id: 'pdf-3-4', title: 'ICT Time & Price Delivery Rules', size: '2.7 MB', url: '#' },
          ],
          keyTakeaways: [
            'Price algorithms operate on precise time windows. Setups outside core killzones have dramatically lower win rates.',
            'New York Midnight Open (00:00 EST / 05:00 UTC) serves as the true baseline for daily expansion.',
          ],
        },
        {
          id: 'les-3-5',
          moduleId: 'mod-3',
          orderIndex: 5,
          title: 'Session-Based Liquidity',
          duration: '31 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Asian Range highs and lows, London session extremes, and the NY session liquidity raid.',
          pdfResources: [
            { id: 'pdf-3-5', title: 'Session Liquidity Cycle Playbook', size: '3.2 MB', url: '#' },
          ],
          keyTakeaways: [
            'Asian range (00:00-06:00 UTC) sets liquidity boundaries; London typically sweeps one side before trending to the other.',
            'The high or low of the day is formed during London Open Killzone in over 65% of trending days.',
          ],
        },
        {
          id: 'les-3-6',
          moduleId: 'mod-3',
          orderIndex: 6,
          title: 'Fair Value Gap (FVG)',
          duration: '38 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The three-candlestick imbalance formation: upper wick of Candle 1, large Candle 2 body, lower wick of Candle 3. Consequent encroachment (CE).',
          pdfResources: [
            { id: 'pdf-3-6', title: 'Fair Value Gap Master Guide & CE Math', size: '4.0 MB', url: '#' },
          ],
          keyTakeaways: [
            'FVG represents one-sided price delivery where one participant party was left unfilled.',
            'Consequent Encroachment (50% midpoint of the FVG) acts as the primary institutional reaction magnet.',
            'Price must respect the FVG boundary with candle bodies; wicks entering the gap are healthy.',
          ],
        },
        {
          id: 'les-3-7',
          moduleId: 'mod-3',
          orderIndex: 7,
          title: 'Inversion Fair Value Gap',
          duration: '30 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'When an FVG fails and price displaces straight through it, turning old support into dynamic resistance (and vice versa).',
          pdfResources: [
            { id: 'pdf-3-7', title: 'Inversion FVG (IFVG) Reversal Framework', size: '2.6 MB', url: '#' },
          ],
          keyTakeaways: [
            'An IFVG occurs when price aggressively blows through a prior FVG, violating its direction.',
            'The back-side of that violated gap transforms into strong institutional polarity support/resistance.',
          ],
        },
        {
          id: 'les-3-8',
          moduleId: 'mod-3',
          orderIndex: 8,
          title: 'Order Blocks',
          duration: '36 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The true definition of an Order Block: the last opposing candle prior to energetic displacement that causes a BOS.',
          pdfResources: [
            { id: 'pdf-3-8', title: 'High-Probability Order Block Checklist', size: '3.5 MB', url: '#' },
          ],
          keyTakeaways: [
            'Not all colored candles are order blocks; a valid OB MUST create displacement and leave an FVG.',
            'Mean threshold (50% of the OB body) is the line in the sand for validity.',
          ],
        },
        {
          id: 'les-3-9',
          moduleId: 'mod-3',
          orderIndex: 9,
          title: 'Breaker Blocks',
          duration: '33 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The failed order block that swept liquidity before being broken: why breakers provide the most aggressive trend entries.',
          pdfResources: [
            { id: 'pdf-3-9', title: 'Breaker Block Setup Anatomy', size: '3.0 MB', url: '#' },
          ],
          keyTakeaways: [
            'A bullish breaker is a down candle (last down-close before sweep of SSL) that price aggressively breaks upward through.',
            'Breakers trap counter-trend traders and fuel rapid momentum continuation.',
          ],
        },
        {
          id: 'les-3-10',
          moduleId: 'mod-3',
          orderIndex: 10,
          title: 'Mitigation Blocks',
          duration: '28 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Similar to breakers but formed without sweeping the opposing swing point: order mitigation and break-even recovery.',
          pdfResources: [
            { id: 'pdf-3-10', title: 'Mitigation vs Breaker Blocks Matrix', size: '2.1 MB', url: '#' },
          ],
          keyTakeaways: [
            'Mitigation blocks lack the liquidity sweep of a breaker, representing institutional position neutralization.',
          ],
        },
        {
          id: 'les-3-11',
          moduleId: 'mod-3',
          orderIndex: 11,
          title: 'Premium and Discount',
          duration: '26 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Using the Fibonacci tool for institutional equilibrium (50%). Never buy in premium; never sell in discount.',
          pdfResources: [
            { id: 'pdf-3-11', title: 'Equilibrium & Dealing Range Matrix', size: '2.3 MB', url: '#' },
          ],
          keyTakeaways: [
            'Equilibrium is the 50% midpoint of the defined dealing range.',
            'Institutional smart money only sells in Premium (above 50%) and buys in Discount (below 50%).',
          ],
        },
        {
          id: 'les-3-12',
          moduleId: 'mod-3',
          orderIndex: 12,
          title: 'Dealing Range',
          duration: '31 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Defining the current operational trading range from swing low to swing high following structural displacement.',
          pdfResources: [
            { id: 'pdf-3-12', title: 'Dealing Range Mapping Protocol', size: '2.7 MB', url: '#' },
          ],
          keyTakeaways: [
            'Every trade setup must be contextualized inside its parent dealing range.',
            'Identify if you are trading internal-range liquidity toward external-range highs or vice versa.',
          ],
        },
      ],
    },
    {
      id: 'mod-4',
      courseId: 'course-master-curriculum',
      moduleNumber: 4,
      title: 'Smart Money Concepts',
      description:
        'Deconstruct how institutions manipulate price, engineer inducement, and deliver balanced order flow.',
      lessons: [
        {
          id: 'les-4-1',
          moduleId: 'mod-4',
          orderIndex: 1,
          title: 'Institutional Concepts',
          duration: '29 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The institutional mindset: why retail indicator patterns fail and how banks engineer artificial chart patterns.',
          pdfResources: [
            { id: 'pdf-4-1', title: 'Institutional Order Flow Principles', size: '2.4 MB', url: '#' },
          ],
          keyTakeaways: [
            'Retail patterns (head & shoulders, double bottoms) are intentional liquidity targets created by algorithmic liquidity providers.',
          ],
        },
        {
          id: 'les-4-2',
          moduleId: 'mod-4',
          orderIndex: 2,
          title: 'Liquidity Sweeps',
          duration: '32 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Spotting the turtle soup / false breakout: wick rejection through key levels followed by immediate displacement back inside range.',
          pdfResources: [
            { id: 'pdf-4-2', title: 'Liquidity Sweep (Turtle Soup) Model', size: '3.1 MB', url: '#' },
          ],
          keyTakeaways: [
            'A sweep penetrates a high or low with wicks and fails to close candle bodies beyond the level.',
            'Immediate displacement back into the range is mandatory confirmation.',
          ],
        },
        {
          id: 'les-4-3',
          moduleId: 'mod-4',
          orderIndex: 3,
          title: 'Inducement',
          duration: '27 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The trap before the real move: how premature retail entries are lured into false support and resistance levels.',
          pdfResources: [
            { id: 'pdf-4-3', title: 'Inducement Identification Guide', size: '2.5 MB', url: '#' },
          ],
          keyTakeaways: [
            'Inducement is the first pullback inside a dealing range that mimics structure but exists only to trap early traders.',
            'Wait for inducement to be swept before looking for valid POI mitigations.',
          ],
        },
        {
          id: 'les-4-4',
          moduleId: 'mod-4',
          orderIndex: 4,
          title: 'Market Manipulation Concepts',
          duration: '35 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Accumulation, Manipulation, and Distribution (AMD). The Power of 3 (PO3) model explained step-by-step.',
          pdfResources: [
            { id: 'pdf-4-4', title: 'Power of 3 (PO3 / AMD) Blueprint', size: '3.8 MB', url: '#' },
          ],
          keyTakeaways: [
            'Asian session = Accumulation. London open = Manipulation (Judas swing). NY session = Distribution.',
            'Trade in the direction of the expansion after the manipulation phase concludes.',
          ],
        },
        {
          id: 'les-4-5',
          moduleId: 'mod-4',
          orderIndex: 5,
          title: 'Supply and Demand',
          duration: '28 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Modernized supply and demand refined through institutional order flow and Fair Value Gap alignment.',
          pdfResources: [
            { id: 'pdf-4-5', title: 'Refined Supply & Demand Framework', size: '2.6 MB', url: '#' },
          ],
          keyTakeaways: [
            'Supply and demand zones are only valid if they caused structural breaks and retain unmitigated gaps.',
          ],
        },
        {
          id: 'les-4-6',
          moduleId: 'mod-4',
          orderIndex: 6,
          title: 'Institutional Order Flow',
          duration: '34 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Following the chain of mitigations: bullish order flow holds discount order blocks; bearish order flow respects premium order blocks.',
          pdfResources: [
            { id: 'pdf-4-6', title: 'Institutional Mitigation Chains', size: '3.3 MB', url: '#' },
          ],
          keyTakeaways: [
            'When institutional order flow is intact, price respects every FVG and order block in the direction of trend.',
          ],
        },
      ],
    },
    {
      id: 'mod-5',
      courseId: 'course-master-curriculum',
      moduleNumber: 5,
      title: 'Advanced Concepts',
      description:
        'Intermarket divergences, liquidity engineering, and high-precision entry execution models.',
      lessons: [
        {
          id: 'les-5-1',
          moduleId: 'mod-5',
          orderIndex: 1,
          title: 'SMT Divergence',
          duration: '33 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Smart Money Tool (SMT): comparing correlated pairs (EURUSD vs GBPUSD, or EURUSD vs DXY) to spot institutional accumulation.',
          pdfResources: [
            { id: 'pdf-5-1', title: 'SMT Divergence Identification Cheat Sheet', size: '2.9 MB', url: '#' },
          ],
          keyTakeaways: [
            'If EURUSD makes a lower low but GBPUSD makes a higher low at key support, institutional accumulation is occurring.',
            'SMT divergence reveals cracks in the algorithmic delivery before price reverses.',
          ],
        },
        {
          id: 'les-5-2',
          moduleId: 'mod-5',
          orderIndex: 2,
          title: 'Market Displacement (Advanced)',
          duration: '30 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Evaluating volume conviction and institutional velocity on multi-timeframe charts.',
          pdfResources: [
            { id: 'pdf-5-2', title: 'Advanced Displacement Metrics', size: '2.1 MB', url: '#' },
          ],
          keyTakeaways: [
            'Institutional displacement leaves distinct footprints across both 15M and 1H candles.',
          ],
        },
        {
          id: 'les-5-3',
          moduleId: 'mod-5',
          orderIndex: 3,
          title: 'Relative Strength',
          duration: '26 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Pair selection: choosing the strongest currency to buy against the weakest currency to sell.',
          pdfResources: [
            { id: 'pdf-5-3', title: 'Relative Strength Currency Matrix', size: '1.9 MB', url: '#' },
          ],
          keyTakeaways: [
            'Trade the cleanest vehicle: if USD is weak and EUR is strong, EURUSD offers higher momentum than AUDUSD.',
          ],
        },
        {
          id: 'les-5-4',
          moduleId: 'mod-5',
          orderIndex: 4,
          title: 'Liquidity Engineering',
          duration: '35 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'How market makers build artificial trendlines and double tops specifically to generate exit liquidity for large positions.',
          pdfResources: [
            { id: 'pdf-5-4', title: 'Liquidity Engineering Deconstruction', size: '3.6 MB', url: '#' },
          ],
          keyTakeaways: [
            'Retail trendlines serve as engineered liquidity pools filled with resting stop orders.',
          ],
        },
        {
          id: 'les-5-5',
          moduleId: 'mod-5',
          orderIndex: 5,
          title: 'Session Models',
          duration: '32 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The London Open execution model, New York AM continuation model, and New York PM reversal model.',
          pdfResources: [
            { id: 'pdf-5-5', title: 'Session-by-Session Execution Models', size: '3.2 MB', url: '#' },
          ],
          keyTakeaways: [
            'Follow predetermined rules based on the active session killzone; do not mix session methodologies.',
          ],
        },
        {
          id: 'les-5-6',
          moduleId: 'mod-5',
          orderIndex: 6,
          title: 'Entry Models',
          duration: '38 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The complete KUMAILFX entry checklist: HTF POI -> Liquidity Raid -> LTF CHOCH Displacement -> FVG/OTE Entry -> Defined Target.',
          pdfResources: [
            { id: 'pdf-5-6', title: 'KUMAILFX Rule-Based Entry Checklist', size: '4.2 MB', url: '#' },
          ],
          keyTakeaways: [
            'Step 1: Identify HTF Draw on Liquidity. Step 2: Wait for session sweep. Step 3: Enter at 50% FVG with SL beyond swing point.',
          ],
        },
      ],
    },
    {
      id: 'mod-6',
      courseId: 'course-master-curriculum',
      moduleNumber: 6,
      title: 'Risk Management',
      description:
        'Capital preservation, psychological resilience, professional trade journaling, and drawdown parameters.',
      lessons: [
        {
          id: 'les-6-1',
          moduleId: 'mod-6',
          orderIndex: 1,
          title: 'Position Sizing',
          duration: '25 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Exact lot size formulas based on percentage risk model. Never trade fixed lot sizes across varying stop distances.',
          pdfResources: [
            { id: 'pdf-6-1', title: 'Position Sizing & Lot Calculator Guide', size: '1.8 MB', url: '#' },
          ],
          keyTakeaways: [
            'Risk should remain fixed at 0.5% - 1% per trade regardless of account size.',
            'Adjust lot size dynamically based on stop loss pip distance.',
          ],
        },
        {
          id: 'les-6-2',
          moduleId: 'mod-6',
          orderIndex: 2,
          title: 'Risk-to-Reward',
          duration: '27 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'The mathematical edge: why a 40% win rate with a 1:3 RR produces consistent profitability and low drawdown.',
          pdfResources: [
            { id: 'pdf-6-2', title: 'Risk-to-Reward & Probability Matrix', size: '2.0 MB', url: '#' },
          ],
          keyTakeaways: [
            'Never execute a trade with less than a 1:2.5 minimum risk-to-reward ratio.',
            'Protect profits at logical structural targets rather than arbitrary greed figures.',
          ],
        },
        {
          id: 'les-6-3',
          moduleId: 'mod-6',
          orderIndex: 3,
          title: 'Stop-Loss Placement',
          duration: '26 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Structural stop loss vs arbitrary pip stops. Placing invalidation levels where your trade thesis is objectively disproven.',
          pdfResources: [
            { id: 'pdf-6-3', title: 'Objective Stop-Loss Placement Manual', size: '2.2 MB', url: '#' },
          ],
          keyTakeaways: [
            'Place your stop beyond the order block or sweep high/low, allowing breathing room for spread.',
            'Never widen your stop loss while in a live trade.',
          ],
        },
        {
          id: 'les-6-4',
          moduleId: 'mod-6',
          orderIndex: 4,
          title: 'Trading Psychology',
          duration: '35 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Overcoming FOMO, revenge trading, cognitive biases, and handling inevitable losing streaks with equanimity.',
          pdfResources: [
            { id: 'pdf-6-4', title: 'Trading Psychology & Discipline Framework', size: '3.1 MB', url: '#' },
          ],
          keyTakeaways: [
            'Losing trades are the standard operational cost of doing business in financial markets.',
            'Detached discipline separates institutional thinkers from emotional gamblers.',
          ],
        },
        {
          id: 'les-6-5',
          moduleId: 'mod-6',
          orderIndex: 5,
          title: 'Trading Journal',
          duration: '28 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'How to log every trade: setup type, session, R-multiple, emotional state, and review metrics to refine execution.',
          pdfResources: [
            { id: 'pdf-6-5', title: 'KUMAILFX Trade Journal Template', size: '1.9 MB', url: '#' },
          ],
          keyTakeaways: [
            'Reviewing past executions reveals leaks in your discipline and execution efficiency.',
          ],
        },
        {
          id: 'les-6-6',
          moduleId: 'mod-6',
          orderIndex: 6,
          title: 'Daily Risk Limits',
          duration: '24 min',
          videoUrl: 'https://www.youtube.com/embed/live_stream?channel=kumailfx5',
          description:
            'Setting hard stop rules: max 2 losses per day, 5% max weekly drawdown, and mandatory terminal shutdown protocol.',
          pdfResources: [
            { id: 'pdf-6-6', title: 'Drawdown Protection & Hard Limit Rules', size: '1.7 MB', url: '#' },
          ],
          keyTakeaways: [
            'Walk away when you reach your daily loss limit. The market will always be here tomorrow.',
          ],
        },
      ],
    },
  ],
};

export const DEFAULT_STUDENT_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23101725'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%231677FF'/%3E%3Cpath d='M20 86 c0-16 14-26 30-26 s30 10 30 26' fill='%2300D5FF'/%3E%3C/svg%3E";

export const INITIAL_TESTIMONIALS: StudentTestimonial[] = [
  {
    id: 'test-1',
    studentName: 'Tariq Mahmood',
    location: 'London, United Kingdom',
    roleOrProfession: 'Full-Time Independent Trader',
    membershipTier: 'Binary Premium Platinum',
    enrolledProgram: 'Binary Non-OTC EURUSD A to Z Concepts with Order Flow ($100)',
    focusInstruments: ['EURUSD', '6E CME Futures', 'Tradovate DOM'],
    headline: 'From burning accounts on synthetic broker OTC to 74% win rate with Tradovate DOM',
    quote:
      "I spent 18 months trading 1-minute OTC binary charts on unregulated brokers and blew three accounts. Kumail's $100 bundle was an eye-opener: he demonstrated mathematically how synthetic broker OTC algorithms manipulate retail wicks. Learning to cross-reference exchange-traded 6E futures DOM with Tradfye execution completely flipped my results. I now execute only when I see institutional bid/ask volume absorption.",
    detailedStory:
      'Before KUMAILFX, I traded indicators like RSI divergence and Bollinger bands without realizing synthetic OTC candles are broker-generated simulations. Kumail showed step-by-step how to launch Tradovate, observe real Level II resting liquidity, track cumulative delta, and wait for true liquidity sweeps. My emotional revenge trading stopped completely. I now trade only during the London Open killzone with a strict 2-trade limit per day.',
    keyMetric: '74.2%',
    keyMetricLabel: 'Verified 60-Day Win Rate',
    category: 'binary-orderflow',
    verifiedStudent: true,
    date: 'October 2026',
    rating: 5,
  },
  {
    id: 'test-2',
    studentName: 'Elena Rostova',
    location: 'Toronto, Canada',
    roleOrProfession: 'Funded Prop Trader',
    membershipTier: 'Forex Academy Student',
    enrolledProgram: 'Institutional Forex Academy (6 Modules)',
    focusInstruments: ['EURUSD', 'London & NY Killzones', 'ICT Power of 3'],
    headline: 'Passed My First $50,000 Prop Firm Evaluation in 18 Trading Days',
    quote:
      'The breakthrough for me was Module 2 and Module 3: understanding the exact difference between a true Break of Structure (BOS) and an engineered liquidity wick sweep. I stopped getting trapped at highs and started entering where retail stop losses were being raided into Fair Value Gaps.',
    detailedStory:
      'I had failed two 25k evaluations before joining KUMAILFX. Kumail’s teaching on Consequent Encroachment (50% FVG retest) and the Power of 3 (Accumulation, Manipulation, Distribution) gave me a mechanical checklist. I risked strictly 0.5% per trade with 1:3 RR targets. I passed phase 1 and phase 2 with zero rule breaches and received my first withdrawal last week.',
    keyMetric: '$50,000',
    keyMetricLabel: 'Funded Account Passed',
    category: 'funded-discipline',
    verifiedStudent: true,
    date: 'September 2026',
    rating: 5,
  },
  {
    id: 'test-3',
    studentName: 'Marcus Vance',
    location: 'Frankfurt, Germany',
    roleOrProfession: 'Quantitative Analyst & Trader',
    membershipTier: 'Binary Premium Platinum',
    enrolledProgram: 'Binary Non-OTC EURUSD A to Z Concepts with Order Flow ($100)',
    focusInstruments: ['Tradfye BTC', 'Non-OTC EURUSD', 'Microstructure'],
    headline: 'Tradfye 1M/5M momentum timing paired with futures microstructure is unmatched',
    quote:
      "Most binary educators teach martingale doubling or random candle colors. Kumail's rule-based approach treats binary as precision institutional order-flow execution. By connecting Futures Data → Order Flow → Liquidity → Price Structure, every single trade has an objective institutional thesis before expiry. Best $100 I ever invested.",
    detailedStory:
      'The Tradfye workflow module was what sealed it for me. Watching Kumail break down BTC 1-minute and 5-minute price behaviour, liquidity reactions, and momentum displacement showed me what real execution timing looks like. I went from 15 uncontrolled clicks a day to 2 or 3 high-conviction trades.',
    keyMetric: '3.4:1',
    keyMetricLabel: 'Profit Factor on Non-OTC',
    category: 'binary-orderflow',
    verifiedStudent: true,
    date: 'November 2026',
    rating: 5,
  },
  {
    id: 'test-4',
    studentName: 'Zubair Al-Mansoor',
    location: 'Dubai, United Arab Emirates',
    roleOrProfession: 'Private Portfolio Trader',
    membershipTier: 'Forex Academy Student',
    enrolledProgram: 'Institutional Forex Academy (6 Modules)',
    focusInstruments: ['XAUUSD (Gold)', 'Liquidity Pools', 'Turtle Soup'],
    headline: "Tamed Gold's Volatility with Liquidity Sweeps & FVG Mechanics",
    quote:
      'Gold used to terrify me because of the violent 50-pip wicks. Kumail taught me that those wicks aren’t random chaos—they are institutional liquidity sweeps hunting retail stop orders. Once you see the algorithmic delivery, Gold becomes one of the cleanest pairs to execute.',
    detailedStory:
      'The dedicated XAUUSD daily market analyses published on the platform kept me aligned with the macro narrative. Combined with Lesson 4-2 on Turtle Soup setups, I stopped entering on green breakouts and started waiting for the sweep of session highs into 15-minute Fair Value Gaps.',
    keyMetric: '1:3.8',
    keyMetricLabel: 'Average Realized R:R',
    category: 'forex-smc',
    verifiedStudent: true,
    date: 'October 2026',
    rating: 5,
  },
  {
    id: 'test-5',
    studentName: 'David Chen',
    location: 'Singapore',
    roleOrProfession: 'Software Engineer & FX Trader',
    membershipTier: 'Binary Premium Platinum',
    enrolledProgram: 'Binary Non-OTC EURUSD A to Z Concepts with Order Flow ($100)',
    focusInstruments: ['Futures 6E', 'Interbank EURUSD', 'Volume Profile'],
    headline: 'The Depth of Market (DOM) absorption concept saved my trading career',
    quote:
      'Watching numbers on the DOM tick-by-tick seemed intimidating until Kumail’s video breakdowns. Seeing 400 contracts get absorbed at key liquidity pools before price shifts gives you 100x more confidence than any stochastic or MACD line.',
    detailedStory:
      'The Platinum member access paid for itself within the first week. The curriculum is completely free of fluff. You learn the exact software setups for Tradovate and Tradfye, order book mechanics, and how interbank liquidity operates.',
    keyMetric: '92%',
    keyMetricLabel: 'Checklist Rule Adherence',
    category: 'binary-orderflow',
    verifiedStudent: true,
    date: 'November 2026',
    rating: 5,
  },
  {
    id: 'test-6',
    studentName: 'Hamza S.',
    location: 'Melbourne, Australia',
    roleOrProfession: 'FX Swing Trader',
    membershipTier: 'Forex Academy Student',
    enrolledProgram: 'Institutional Forex Academy (6 Modules)',
    focusInstruments: ['GBPUSD', 'Capital Preservation', 'Risk Matrix'],
    headline: 'Module 6 on Capital Preservation cured my revenge trading syndrome',
    quote:
      'Most courses focus 99% on entry triggers and 1% on risk. KUMAILFX makes position sizing and drawdown limits compulsory. The mandatory 2-loss daily shutdown protocol saved me from giving back weeks of profits in an emotional afternoon.',
    detailedStory:
      'I was a classic boom-and-bust trader. I could make 10% in a week and blow it on Friday. Kumail’s trade journal and psychology framework reconditioned my mindset. Trading is now a calm, systematic business rather than a casino rush.',
    keyMetric: '12 Weeks',
    keyMetricLabel: 'Zero Drawdown Breaches',
    category: 'funded-discipline',
    verifiedStudent: true,
    date: 'October 2026',
    rating: 5,
  },
];
