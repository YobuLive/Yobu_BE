import { FastifyPluginAsync } from 'fastify';
import { reigsterSchema } from '../../../schemas/auth';

const registerHandler = async (request: any, reply: any) => {
  return { test: 'lol' };
};

const userAuth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/register', { schema: reigsterSchema }, registerHandler);
};

export default userAuth;
