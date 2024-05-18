import {pino} from 'pino';

export const makeLogger = (service: string) =>
  pino({
    name: service,
    safe: true,
    transport: {
      target: 'pino-pretty',
    },
  });
