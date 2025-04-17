'use server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';


interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

export const addTransaction = async (
  formData: FormData
): Promise<TransactionResult> => {
  const text = formData.get('text');
  const amountValue = formData.get('amount');

  // check for input values
  if (!text || !amountValue) {
    return { error: 'Text and amount are required' };
  }

  // convert amount to number
  const amount: number = parseFloat(amountValue as string);

  // check if amount is a number
  if (isNaN(amount)) {
    return { error: 'Amount must be a number' };
  }

  // get logged in user
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transaction: TransactionData = await db.transaction.create({
      data: {
        userId,
      text: text as string,
        amount
      }
    });

    revalidatePath('/');

    return { data: transaction };
  } catch (error) {
    return { error: 'Failed to add transaction' };
  }
};
