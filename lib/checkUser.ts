import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  // Check if user exi sts in db
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id
    }
  });
  if (loggedInUser) {
    return loggedInUser;
  }

  // If user doesn't exist, create them
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: user.fullName,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });
  return newUser;
};
