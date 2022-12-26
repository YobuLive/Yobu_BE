import { FastifyPluginAsync } from 'fastify';
import { registerUserHandler } from '../../../handlers/auth';
import { reigsterSchema } from '../../../schemas/auth';

const userAuth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/register', { schema: reigsterSchema }, registerUserHandler);
};

export default userAuth;
