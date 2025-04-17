import { getTransactions } from '@/app/actions/getTransactions';
import { Transaction } from '@/types/transaction';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map(transaction => (
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text}
              <span>{transaction.amount}</span>
              <button>x</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
