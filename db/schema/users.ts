import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  userId: integer('id').primaryKey(),
  username: text('username').unique(),
  email: text('email').unique(),
  passwordHash: text('passwordHash'),
  dateCreated: text('dateCreated').default(sql`CURRENT_DATE`),
});
