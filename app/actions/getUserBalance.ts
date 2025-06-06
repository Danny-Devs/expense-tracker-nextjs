'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export const getUserBalance = async (): Promise<
  { balance?: number; error?: string }
> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId }
    });

  const balance = transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

  return { balance };
  } catch (error) {
    return { error: 'Failed to get balance' };
  }
};
