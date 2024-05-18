import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {settingsSchema} from '@/Schemas/settings.js';
import {usersSchema} from '@/Schemas/users.js';

/**
 * @class Database
 */
export class Database {
  public drizzle!: ReturnType<typeof drizzle>;
  public pg!: ReturnType<typeof postgres>;

  /**
   * @constructor
   * @param dbUrl PostgreSQL Database URL
   */
  constructor(databaseUrl: string) {
    this.pg = postgres(databaseUrl, {
      prepare: true,
    });
    this.drizzle = drizzle(this.pg, {
      schema: {
        users: usersSchema,
        settings: settingsSchema,
      },
    });
  }
}
