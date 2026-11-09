import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MARKET_SESSIONS,
  ICT_KILLZONES,
  isSessionOpen,
  isKillzoneActive,
  getPakistanTime,
} from './marketSessions';

test('isSessionOpen identifies London session at 8 UTC and closed at 2 UTC', () => {
  const london = MARKET_SESSIONS.find((s) => s.id === 'london')!;
  assert.equal(isSessionOpen(london, 8), true);
  assert.equal(isSessionOpen(london, 2), false);
});

test('isSessionOpen handles midnight spanning Sydney session (21 UTC to 6 UTC)', () => {
  const sydney = MARKET_SESSIONS.find((s) => s.id === 'sydney')!;
  assert.equal(isSessionOpen(sydney, 22), true);
  assert.equal(isSessionOpen(sydney, 2), true);
  assert.equal(isSessionOpen(sydney, 12), false);
});

test('isKillzoneActive correctly detects London Open Killzone (6-9 UTC)', () => {
  const londonOpenKZ = ICT_KILLZONES.find((k) => k.name === 'London Open Killzone')!;
  assert.equal(isKillzoneActive(londonOpenKZ, 7), true);
  assert.equal(isKillzoneActive(londonOpenKZ, 10), false);
});

test('getPakistanTime produces UTC+5 formatted string', () => {
  const fixedDate = new Date('2026-11-09T10:00:00.000Z'); // 10:00 UTC = 15:00 PKT
  const pkt = getPakistanTime(fixedDate);
  assert.equal(pkt.hours, 15);
  assert.equal(pkt.minutes, 0);
  assert.ok(pkt.timeStr.includes('PKT (UTC+5)'));
});
