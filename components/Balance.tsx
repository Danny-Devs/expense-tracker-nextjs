import { getUserBalance } from '@/app/actions/getUserBalance';
import { formatBalance } from '@/lib/utils';

const Balance = async () => {
  const { balance, error } = await getUserBalance();

  if (error) {
    return <div>{error}</div>;
  }

  const balanceFormatted = formatBalance(balance ?? 0);

  return (
    <>
      <h4 style={{ marginBottom: '0.3rem' }}>Your Balance</h4>
      <h1 id="balance">{balanceFormatted}</h1>
    </>
  );
};

export default Balance;
