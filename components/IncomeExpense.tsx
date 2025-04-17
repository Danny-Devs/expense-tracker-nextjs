import { getIncomeExpense } from '@/app/actions/getIncomeExpense';
import { formatBalance } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income = 0, expense = 0 } = await getIncomeExpense();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${formatBalance(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${formatBalance(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
