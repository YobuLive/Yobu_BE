import { User } from '@prisma/client';
import { createNewUser } from '../db/auth';

export const registerHandler = async (request: any, reply: any) => {
  const { username, email, password } = request.body;
  const newUser: User = await createNewUser(request.server, request.server.prisma, {
    username,
    email,
    hashedPassword: password,
  });
  const result = {
    userId: newUser.userId,
    username: newUser.username,
    email: newUser.email,
    createdAt: newUser.createdAt,
    updatedAt: newUser.updatedAt,
  };
  return result;
};
