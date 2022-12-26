import fp from 'fastify-plugin';
import underPressure, { UnderPressureOptions } from '@fastify/under-pressure';

export default fp<UnderPressureOptions>(async (fastify) => {
  fastify.register(underPressure, {
    maxEventLoopDelay: 1000,
    maxHeapUsedBytes: 1000000000,
    maxRssBytes: 1000000000,
    maxEventLoopUtilization: 0.98,
  });
});
