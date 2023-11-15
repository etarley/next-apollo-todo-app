import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
 
export const users = sqliteTable ('users',{
    userId: integer('id').primaryKey(),
    username: text('username').unique(),
    email: text('email').unique(),
    passwordHash: text('passwordHah'),
    DateCreated:  text('date').default(sql`CURRENT_DATE`)
})