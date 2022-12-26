import fp from 'fastify-plugin';
import cors, { FastifyCorsOptions } from '@fastify/cors';

/**
 * Enable use of CORS
 *
 * @see https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
 */
export default fp<FastifyCorsOptions>(async (fastify) => {
  fastify.register(cors, {
    origin: false,
  });
});
