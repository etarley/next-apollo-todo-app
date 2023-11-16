import {
  sqliteTable,
  integer,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';
import { users } from './users';
import { taskStatus } from './taskStatus';
import { sql } from 'drizzle-orm';

export const tasks = sqliteTable('tasks', {
  taskID: integer('taskID', { mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  userID: integer('userID', { mode: 'number' }).references(() => users.userId),
  title: text('title').notNull(),
  description: text('description'),
  dueDate: integer('dueDate', { mode: 'timestamp' }),
  statusID: integer('statusID', { mode: 'number' }).references(
    () => taskStatus.statusID
  ),
  dateCreated: integer('dateCreated', { mode: 'timestamp' }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});
