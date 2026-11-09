/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PositionSizeResult {
  riskAmount: number;
  lotSize: number;
  stopLossPips: number;
  pipValuePerLot: number;
}

export interface RiskRewardResult {
  riskDistance: number;
  rewardDistance: number;
  riskRewardRatio: number;
  isValid: boolean;
  errorMessage?: string;
}

export interface CompoundProjectionMonth {
  month: number;
  startingBalance: number;
  interestEarned: number;
  deposit: number;
  endingBalance: number;
}

export interface CompoundGrowthResult {
  startingBalance: number;
  totalDeposited: number;
  totalInterest: number;
  finalBalance: number;
  monthlyProjections: CompoundProjectionMonth[];
}

/**
 * Get pip value per 1.00 standard lot (100,000 units) in USD.
 */
export function getPipValuePerLot(pair: string): number {
  const normalized = pair.toUpperCase().replace('/', '');
  if (normalized.endsWith('JPY')) {
    // For standard lot (100,000), 1 pip = 0.01 JPY ~ approx $6.7 - $7.0 USD depending on USDJPY exchange rate (~150)
    // Default standard conservative calculation: ~6.8 USD per lot
    return 6.8;
  }
  if (normalized === 'XAUUSD' || normalized === 'GOLD') {
    // Gold: 1 standard lot = 100 oz. 1 pip / tick ($0.10) is $10 per lot. $1 move = $100 per lot.
    return 10.0;
  }
  if (normalized.endsWith('USD')) {
    // EURUSD, GBPUSD, AUDUSD, NZDUSD: 1 pip = 0.0001 * 100,000 = $10.00 USD exactly
    return 10.0;
  }
  // Other cross pairs default approx
  return 10.0;
}

/**
 * Calculate recommended position size in standard lots based on risk % and stop loss.
 */
export function calculatePositionSize(
  accountBalance: number,
  riskPercent: number,
  stopLossPips: number,
  pair: string = 'EURUSD'
): PositionSizeResult {
  if (accountBalance <= 0 || riskPercent <= 0 || stopLossPips <= 0) {
    return {
      riskAmount: 0,
      lotSize: 0,
      stopLossPips: Math.max(0, stopLossPips),
      pipValuePerLot: getPipValuePerLot(pair),
    };
  }

  const riskAmount = (accountBalance * riskPercent) / 100;
  const pipValuePerLot = getPipValuePerLot(pair);
  const rawLotSize = riskAmount / (stopLossPips * pipValuePerLot);

  // Round to 2 decimal places (standard broker precision e.g. 0.01 lot)
  const lotSize = Math.max(0.01, Math.round(rawLotSize * 100) / 100);

  return {
    riskAmount: Math.round(riskAmount * 100) / 100,
    lotSize,
    stopLossPips,
    pipValuePerLot,
  };
}

/**
 * Calculate Risk-to-Reward ratio and pip distances.
 */
export function calculateRiskReward(
  direction: 'buy' | 'sell',
  entryPrice: number,
  stopLoss: number,
  takeProfit: number
): RiskRewardResult {
  if (entryPrice <= 0 || stopLoss <= 0 || takeProfit <= 0) {
    return {
      riskDistance: 0,
      rewardDistance: 0,
      riskRewardRatio: 0,
      isValid: false,
      errorMessage: 'Prices must be greater than zero.',
    };
  }

  if (direction === 'buy') {
    if (stopLoss >= entryPrice) {
      return {
        riskDistance: 0,
        rewardDistance: 0,
        riskRewardRatio: 0,
        isValid: false,
        errorMessage: 'For a Buy order, Stop Loss must be strictly lower than Entry price.',
      };
    }
    if (takeProfit <= entryPrice) {
      return {
        riskDistance: 0,
        rewardDistance: 0,
        riskRewardRatio: 0,
        isValid: false,
        errorMessage: 'For a Buy order, Take Profit must be strictly higher than Entry price.',
      };
    }
    const riskDistance = Math.abs(entryPrice - stopLoss);
    const rewardDistance = Math.abs(takeProfit - entryPrice);
    const riskRewardRatio = Math.round((rewardDistance / riskDistance) * 100) / 100;
    return {
      riskDistance: Math.round(riskDistance * 100000) / 100000,
      rewardDistance: Math.round(rewardDistance * 100000) / 100000,
      riskRewardRatio,
      isValid: true,
    };
  } else {
    // Sell
    if (stopLoss <= entryPrice) {
      return {
        riskDistance: 0,
        rewardDistance: 0,
        riskRewardRatio: 0,
        isValid: false,
        errorMessage: 'For a Sell order, Stop Loss must be strictly higher than Entry price.',
      };
    }
    if (takeProfit >= entryPrice) {
      return {
        riskDistance: 0,
        rewardDistance: 0,
        riskRewardRatio: 0,
        isValid: false,
        errorMessage: 'For a Sell order, Take Profit must be strictly lower than Entry price.',
      };
    }
    const riskDistance = Math.abs(stopLoss - entryPrice);
    const rewardDistance = Math.abs(entryPrice - takeProfit);
    const riskRewardRatio = Math.round((rewardDistance / riskDistance) * 100) / 100;
    return {
      riskDistance: Math.round(riskDistance * 100000) / 100000,
      rewardDistance: Math.round(rewardDistance * 100000) / 100000,
      riskRewardRatio,
      isValid: true,
    };
  }
}

/**
 * Calculate monetary profit/loss from pip movement.
 */
export function calculatePipValue(
  pair: string,
  lotSize: number,
  pipMovement: number
): number {
  const pipValuePerLot = getPipValuePerLot(pair);
  const total = lotSize * pipValuePerLot * pipMovement;
  return Math.round(total * 100) / 100;
}

/**
 * Calculate compound interest growth with optional monthly contributions.
 */
export function calculateCompoundGrowth(
  startingBalance: number,
  monthlyRatePercent: number,
  months: number,
  monthlyDeposit: number = 0
): CompoundGrowthResult {
  const monthlyProjections: CompoundProjectionMonth[] = [];
  let currentBalance = Math.max(0, startingBalance);
  let totalInterest = 0;
  let totalDeposited = startingBalance;
  const rate = monthlyRatePercent / 100;

  for (let m = 1; m <= months; m++) {
    const start = currentBalance;
    const interest = start * rate;
    totalInterest += interest;
    currentBalance = start + interest + monthlyDeposit;
    if (m > 0 && monthlyDeposit > 0) {
      totalDeposited += monthlyDeposit;
    }

    monthlyProjections.push({
      month: m,
      startingBalance: Math.round(start * 100) / 100,
      interestEarned: Math.round(interest * 100) / 100,
      deposit: monthlyDeposit,
      endingBalance: Math.round(currentBalance * 100) / 100,
    });
  }

  return {
    startingBalance,
    totalDeposited: Math.round(totalDeposited * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    finalBalance: Math.round(currentBalance * 100) / 100,
    monthlyProjections,
  };
}
