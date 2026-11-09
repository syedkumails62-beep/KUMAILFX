/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MarketSession {
  id: string;
  name: string;
  city: string;
  utcOpenHour: number;
  utcCloseHour: number;
  flag: string;
  majorPairs: string[];
}

export interface Killzone {
  name: string;
  utcStartHour: number;
  utcEndHour: number;
  description: string;
  keyPairs: string[];
}

export const MARKET_SESSIONS: MarketSession[] = [
  {
    id: 'sydney',
    name: 'Sydney Session',
    city: 'Sydney (AEST)',
    utcOpenHour: 21,
    utcCloseHour: 6,
    flag: '🇦🇺',
    majorPairs: ['AUDUSD', 'NZDUSD', 'AUDJPY'],
  },
  {
    id: 'tokyo',
    name: 'Tokyo / Asian Session',
    city: 'Tokyo (JST)',
    utcOpenHour: 0,
    utcCloseHour: 9,
    flag: '🇯🇵',
    majorPairs: ['USDJPY', 'EURJPY', 'GBPJPY', 'AUDJPY'],
  },
  {
    id: 'london',
    name: 'London Session',
    city: 'London (GMT/BST)',
    utcOpenHour: 7,
    utcCloseHour: 16,
    flag: '🇬🇧',
    majorPairs: ['EURUSD', 'GBPUSD', 'EURGBP', 'XAUUSD'],
  },
  {
    id: 'newyork',
    name: 'New York Session',
    city: 'New York (EST/EDT)',
    utcOpenHour: 12,
    utcCloseHour: 21,
    flag: '🇺🇸',
    majorPairs: ['EURUSD', 'GBPUSD', 'USDCAD', 'XAUUSD'],
  },
];

export const ICT_KILLZONES: Killzone[] = [
  {
    name: 'Asian Range & Killzone',
    utcStartHour: 0,
    utcEndHour: 4,
    description: 'Initial balance formation and Asian liquidity accumulation before London manipulation.',
    keyPairs: ['USDJPY', 'AUDUSD'],
  },
  {
    name: 'London Open Killzone',
    utcStartHour: 6,
    utcEndHour: 9,
    description: 'Judas swing, high/low of the day creation, London expansion and FVG delivery.',
    keyPairs: ['EURUSD', 'GBPUSD', 'XAUUSD'],
  },
  {
    name: 'New York Open Killzone',
    utcStartHour: 11,
    utcEndHour: 14,
    description: 'NY continuation or reversal model, high volatility news releases (CPI, NFP, FOMC).',
    keyPairs: ['EURUSD', 'GBPUSD', 'XAUUSD', 'USDCAD'],
  },
  {
    name: 'London Close Killzone',
    utcStartHour: 15,
    utcEndHour: 17,
    description: 'Profit taking, counter-trend pullbacks, and day settling.',
    keyPairs: ['EURUSD', 'GBPUSD'],
  },
];

/**
 * Checks if a session is currently open given a UTC hour (0-23) and minute (0-59).
 */
export function isSessionOpen(
  session: MarketSession,
  utcHour: number
): boolean {
  if (session.utcOpenHour > session.utcCloseHour) {
    // Spans midnight (e.g. 21 to 6)
    return utcHour >= session.utcOpenHour || utcHour < session.utcCloseHour;
  }
  return utcHour >= session.utcOpenHour && utcHour < session.utcCloseHour;
}

/**
 * Checks if a killzone is currently active given UTC hour.
 */
export function isKillzoneActive(
  killzone: Killzone,
  utcHour: number
): boolean {
  if (killzone.utcStartHour > killzone.utcEndHour) {
    return utcHour >= killzone.utcStartHour || utcHour < killzone.utcEndHour;
  }
  return utcHour >= killzone.utcStartHour && utcHour < killzone.utcEndHour;
}

/**
 * Format time to Pakistan Standard Time (PKT, UTC+5).
 */
export function getPakistanTime(date: Date = new Date()): {
  timeStr: string;
  dateStr: string;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const pktDate = new Date(utc + 5 * 3600000);

  const hours = pktDate.getHours();
  const minutes = pktDate.getMinutes();
  const seconds = pktDate.getSeconds();

  const pad = (n: number) => n.toString().padStart(2, '0');
  const timeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} PKT (UTC+5)`;
  const dateStr = pktDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return { timeStr, dateStr, hours, minutes, seconds };
}
