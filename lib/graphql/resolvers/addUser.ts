import { db } from '@/db';
import { users } from '@/db/schema/users';
import { UserResponse } from '@/lib/types'; // Import UserResponse type

export async function addUser(
  _: any,
  args: {
    username: string;
    email: string;
    passwordHash: string; // Assuming the password is already hashed
  },
): Promise<UserResponse> {
  try {
    console.log(args);

    const newUser = await db
      .insert(users)
      .values({
        username: args.username,
        email: args.email,
        passwordHash: args.passwordHash,
      })
      .returning();

    console.log(newUser);

    return {
      code: '200',
      success: true,
      message: 'User successfully added',
      user: newUser[0],
    };
  } catch (error) {
    console.error('Failed to add user:', error);

    return {
      code: '400',
      success: false,
      message: 'Failed to add user',
      user: null,
    };
  }
}
