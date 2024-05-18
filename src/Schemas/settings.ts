import {pgTable, serial, text} from 'drizzle-orm/pg-core';

export const settingsSchema = pgTable('settings', {
  id: serial('id').primaryKey(),
  key: text('key').notNull().unique(),
  value: text('value').notNull(),
});
