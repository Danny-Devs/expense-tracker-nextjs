'use server';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export const deleteTransaction = async (
  id: string
): Promise<{
  error?: string;
  success?: string;
}> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    await db.transaction.delete({
      where: { id, userId }
    });

    return { success: 'Transaction deleted' };
  } catch (error) {
    return { error: 'Failed to delete transaction' };
  }
};
