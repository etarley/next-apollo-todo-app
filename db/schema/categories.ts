import {
  sqliteTable,
  integer,
  text,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';

export const categories = sqliteTable('categories', {
  categoryID: integer('categoryID', { mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  name: text('name').notNull(),
  description: text('description'),
});
