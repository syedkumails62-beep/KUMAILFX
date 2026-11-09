import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePositionSize,
  calculateRiskReward,
  calculatePipValue,
  calculateCompoundGrowth,
  getPipValuePerLot,
} from './calculators';

test('getPipValuePerLot returns $10 for EURUSD and $6.8 for USDJPY', () => {
  assert.equal(getPipValuePerLot('EURUSD'), 10.0);
  assert.equal(getPipValuePerLot('USDJPY'), 6.8);
  assert.equal(getPipValuePerLot('XAUUSD'), 10.0);
});

test('calculatePositionSize gives exact lots for 10000 balance with 1% risk and 15 pips', () => {
  // Risk amount = 10000 * 0.01 = $100
  // EURUSD pip value per lot = $10
  // Loss per lot for 15 pips = 15 * 10 = $150
  // Lot size = 100 / 150 = 0.6667 -> rounded to 0.67 lots
  const result = calculatePositionSize(10000, 1, 15, 'EURUSD');
  assert.equal(result.riskAmount, 100);
  assert.equal(result.lotSize, 0.67);
  assert.equal(result.stopLossPips, 15);
});

test('calculatePositionSize handles zero or negative values cleanly', () => {
  const result = calculatePositionSize(0, 1, 15, 'EURUSD');
  assert.equal(result.lotSize, 0);
  assert.equal(result.riskAmount, 0);
});

test('calculateRiskReward calculates 1:3 RR for buy trade', () => {
  // Buy at 1.0800, SL at 1.0780 (20 pips), TP at 1.0860 (60 pips)
  // RR = 60 / 20 = 3.0
  const result = calculateRiskReward('buy', 1.0800, 1.0780, 1.0860);
  assert.equal(result.isValid, true);
  assert.equal(result.riskRewardRatio, 3.0);
});

test('calculateRiskReward validates invalid SL above entry on Buy', () => {
  const result = calculateRiskReward('buy', 1.0800, 1.0820, 1.0860);
  assert.equal(result.isValid, false);
  assert.ok(result.errorMessage?.includes('lower than Entry'));
});

test('calculateRiskReward validates sell order correctly', () => {
  // Sell at 1.0800, SL at 1.0820 (20 pips), TP at 1.0740 (60 pips)
  const result = calculateRiskReward('sell', 1.0800, 1.0820, 1.0740);
  assert.equal(result.isValid, true);
  assert.equal(result.riskRewardRatio, 3.0);
});

test('calculatePipValue computes monetary move correctly', () => {
  // 0.50 lots on EURUSD (1 pip = $5.00), 20 pips = $100
  const pnl = calculatePipValue('EURUSD', 0.50, 20);
  assert.equal(pnl, 100);
});

test('calculateCompoundGrowth projects balance over 3 months with 5% monthly return', () => {
  const result = calculateCompoundGrowth(1000, 5, 3, 0);
  // Month 1: 1000 + 50 = 1050
  // Month 2: 1050 + 52.5 = 1102.5
  // Month 3: 1102.5 + 55.125 = 1157.63
  assert.equal(result.monthlyProjections.length, 3);
  assert.equal(result.finalBalance, 1157.63);
});
