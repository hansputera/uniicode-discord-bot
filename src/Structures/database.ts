import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

/**
 * @class Database
 */
export class Database {
  public drizzle!: ReturnType<typeof drizzle>;
  /**
   * @constructor
   * @param dbUrl PostgreSQL Database URL
   */
  constructor(databaseUrl: string) {
    const pg = postgres(databaseUrl, {
      prepare: true,
    });
    this.drizzle = drizzle(pg);
  }
}
