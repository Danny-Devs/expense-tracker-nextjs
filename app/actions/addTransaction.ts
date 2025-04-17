'use server';

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

  // create transaction
  const transaction: TransactionData = {
    text: text as string,
    amount
  };

  return { data: transaction };
};
