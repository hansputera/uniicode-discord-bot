import process from 'node:process';
import dotenv from 'dotenv';
import {migrate} from 'drizzle-orm/postgres-js/migrator';
import {Database} from '@/Structures/database.js';

dotenv.config();

const database = new Database(process.env.POSTGRESQL_URL ?? '');

await migrate(database.drizzle, {
  migrationsFolder: './drizzle',
});
