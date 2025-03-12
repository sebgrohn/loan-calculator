/**
 * Calculate the total monthly cost for a fixed-rate mortgage, according to this
 * formula:
 *
 * belopp * månadsräntesats * ( ( 1 + månadsräntesats ) ^ antal månader )
 * ----------------------------------------------------------------------
 *         ( ( 1 + månadsräntesats ) ^ antal månader ) - 1
 *
 * @param principalAmount Amount to loan
 * @param amortizingTime Payback time in years
 * @param interestRate Annual interest rate as fraction (5% = 0.05)
 */
export default function calculateFixedMortgageCost(
  principalAmount: number,
  amortizingTime: number,
  interestRate: number,
) {
  const monthlyRate = interestRate / 12;
  const months = amortizingTime * 12;

  return (
    (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}
