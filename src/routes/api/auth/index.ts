import { FastifyPluginAsync } from 'fastify';
import { registerHandler } from '../../../handlers/auth';
import { reigsterSchema } from '../../../schemas/auth';

const userAuth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/register', { schema: reigsterSchema }, registerHandler);
};

export default userAuth;
