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
  response: {
    200: {
      type: 'object',
      properties: {
        userId: {
          type: 'string',
        },
        username: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
    500: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
        },
        error: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
    },
    422: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
        },
        error: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
    },
  },
};
