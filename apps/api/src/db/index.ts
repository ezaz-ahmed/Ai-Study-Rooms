import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { schema } from './schema';

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error('DATABASE_URL is not defined');
}

export const client = postgres(url);

export const db = drizzle(client, { schema, casing: 'snake_case' });
