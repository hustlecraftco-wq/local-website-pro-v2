// Real ROI calculations for wealth management

export interface ROIInputs {
  currentPortfolio: number;
  monthlyContribution: number;
  timeHorizon: number; // years
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
}

export interface ROIResults {
  futureValue: number;
  totalContributions: number;
  investmentGrowth: number;
  taxSavings: number;
  monthlyRetirementIncome: number;
}

const RETURN_RATES = {
  conservative: 0.06,  // 6% annual return
  moderate: 0.08,      // 8% annual return
  aggressive: 0.10,    // 10% annual return
};

const TAX_OPTIMIZATION_RATE = 0.015; // 1.5% annual tax savings
const SAFE_WITHDRAWAL_RATE = 0.04;   // 4% rule for retirement income

export function calculateROI(inputs: ROIInputs): ROIResults {
  const { currentPortfolio, monthlyContribution, timeHorizon, riskTolerance } = inputs;
  
  const annualReturn = RETURN_RATES[riskTolerance];
  const monthlyReturn = annualReturn / 12;
  const totalMonths = timeHorizon * 12;
  
  // Future value of current portfolio
  const currentPortfolioFV = currentPortfolio * Math.pow(1 + annualReturn, timeHorizon);
  
  // Future value of monthly contributions (annuity)
  const contributionsFV = monthlyContribution * 
    ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);
  
  const futureValue = currentPortfolioFV + contributionsFV;
  const totalContributions = currentPortfolio + (monthlyContribution * totalMonths);
  const investmentGrowth = futureValue - totalContributions;
  
  // Tax savings over time period
  const taxSavings = totalContributions * TAX_OPTIMIZATION_RATE * timeHorizon;
  
  // Monthly retirement income using 4% rule
  const monthlyRetirementIncome = (futureValue * SAFE_WITHDRAWAL_RATE) / 12;
  
  return {
    futureValue,
    totalContributions,
    investmentGrowth,
    taxSavings,
    monthlyRetirementIncome,
  };
}

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  } else if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value.toFixed(0)}`;
}

export function calculateRequiredSavings(
  targetAmount: number,
  timeHorizon: number,
  riskTolerance: 'conservative' | 'moderate' | 'aggressive'
): number {
  const annualReturn = RETURN_RATES[riskTolerance];
  const monthlyReturn = annualReturn / 12;
  const totalMonths = timeHorizon * 12;
  
  // PMT formula
  const requiredMonthly = targetAmount / 
    ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);
  
  return requiredMonthly;
}
