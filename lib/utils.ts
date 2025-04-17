export const formatBalance = (balance: number) => {
  // Handle very small values (including both 0 and -0)
  const adjustedBalance = Math.abs(balance) < 0.001 ? 0 : balance;

  return adjustedBalance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};
