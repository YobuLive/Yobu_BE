import { Prisma, PrismaClient, User } from '@prisma/client';
import { FastifyInstance } from 'fastify';

export const createNewUser = async (fastify: FastifyInstance, prisma: PrismaClient, data: any): Promise<User> => {
  let newUser: User;
  try {
    newUser = await prisma.user.create({
      data,
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      fastify.log.error(`Error in Prisma: ${e.message}`);
      if (e.code === 'P2002') {
        throw fastify.httpErrors.unprocessableEntity();
      }
    }
    fastify.log.error(`Server Error: ${e}`);
    throw fastify.httpErrors.internalServerError();
  }
  return newUser;
};
