import { User } from '@prisma/client';
import { createUser } from '../db/auth';
import { RegisterUserOut } from '../dto/auth';
import { hashPassword } from '../util/auth';

export const registerUserHandler = async (request: any, reply: any): Promise<RegisterUserOut> => {
  const { username, email, password } = request.body;
  const hashedPassword: string = await hashPassword(password);
  const newUser: User = await createUser(request.server, request.server.prisma, {
    username,
    email,
    hashedPassword,
  });
  const result: RegisterUserOut = {
    userId: newUser.userId,
    username: newUser.username,
    email: newUser.email,
    createdAt: newUser.createdAt,
    updatedAt: newUser.updatedAt,
  };
  return result;
};

export const loginUserByEmailHandler = async (request: any, reply: any) => {};
