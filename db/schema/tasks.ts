import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const tasks = sqliteTable('tasks', {
  taskID: integer('taskID', { mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  userID: integer('userID', { mode: 'number' }).references(() => users.userId),
  title: text('title').notNull(),
  description: text('description'),
  dueDate: integer('dueDate', { mode: 'timestamp' }),
  status: text('status', {
    enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED'],
  }).notNull(),
  dateCreated: integer('dateCreated', { mode: 'timestamp' }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});
