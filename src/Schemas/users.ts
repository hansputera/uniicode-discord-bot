import {pgTable, serial, timestamp, varchar} from 'drizzle-orm/pg-core';

export const usersSchema = pgTable('users', {
  id: serial('id').primaryKey(),
  discordId: varchar('discord_id', {
    length: 256,
  }).unique(),
  email: varchar('email', {
    length: 256,
  }),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'date',
  }).defaultNow(),
});
