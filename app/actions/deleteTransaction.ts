'use server';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
export const deleteTransaction = async (
  id: string
): Promise<{
  error?: string;
  message?: string;
}> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    await db.transaction.delete({
      where: { id, userId }
    });

    revalidatePath('/');
    return { message: 'Transaction deleted' };
  } catch (error) {
    return { error: 'Failed to delete transaction' };
  }
};
