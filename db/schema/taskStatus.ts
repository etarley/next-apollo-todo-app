import {
  sqliteTable,
  integer,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';

export const taskStatus = sqliteTable('taskStatus', {
  statusID: integer('statusID', { mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  statusName: text('statusName').notNull(),
});
