import { FastifySchema } from 'fastify';

export const reigsterSchema: FastifySchema = {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      userId: {
        type: 'string',
      },
    },
    required: ['username', 'email', 'password'],
  },
};
