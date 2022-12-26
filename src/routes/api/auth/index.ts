import { FastifyPluginAsync } from 'fastify';

const registerSchema = {
  response: {},
};

const registerHandler = async (request: any, reply: any) => {
  return { test: 'lol' };
};

const userAuth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/register', { schema: registerSchema }, registerHandler);
};

export default userAuth;
