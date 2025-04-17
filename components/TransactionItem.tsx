'use client';
import { Transaction } from '@/types/transaction';
import { formatBalance } from '@/lib/utils';
import { toast } from 'react-toastify';
import { deleteTransaction } from '@/app/actions/deleteTransaction';
import { HiTrash } from 'react-icons/hi';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const handleDelete = async (id: string) => {
    const { success, error } = await deleteTransaction(id);
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }
  };
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{transaction.amount}</span>
      <button onClick={() => handleDelete(transaction.id)} className="delete-btn">
        <HiTrash style={{ width: '1rem', height: '1rem' }} />
      </button>
    </li>
  );
};

export default TransactionItem;
