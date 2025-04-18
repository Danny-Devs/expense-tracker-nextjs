'use server';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Transaction } from '@/types/transaction';

export const getTransactions = async (): Promise<{
  transactions?: Transaction[];
  error?: string;
}> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    return { transactions };
  } catch (error) {
    return { error: 'Failed to get transactions' };
  }
};
