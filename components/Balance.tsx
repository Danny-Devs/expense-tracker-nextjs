import { getUserBalance } from "@/app/actions/getUserBalance";

const Balance = async () => {
  const { balance, error } = await getUserBalance();

  if (error) {
    return <div>{error}</div>;
  }

  const balanceFormatted = balance?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{balanceFormatted}</h1>
    </>
  );
};

export default Balance;
