import { Config } from 'drizzle-kit';

import dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './db/schema/*.ts',
  out: './db/migrations-folder',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
} satisfies Config;
