import process from 'node:process';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRESQL_URL ?? '',
  },
  schema: './dist/src/Schemas/index.js',
  out: './drizzle',
});
