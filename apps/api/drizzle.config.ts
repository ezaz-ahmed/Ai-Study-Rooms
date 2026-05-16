import { defineConfig } from 'drizzle-kit';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function getDatabaseUrl(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const envPath = resolve(process.cwd(), '../../.env');

  if (existsSync(envPath)) {
    const envFile = readFileSync(envPath, 'utf8');
    const match = envFile.match(
      /^DATABASE_URL\s*=\s*['\"]?([^'\"\r\n]+)['\"]?\s*$/m,
    );
    if (match?.[1]) {
      return match[1];
    }
  }

  throw new Error(
    'DATABASE_URL is undefined. Set it in environment or ../../.env',
  );
}

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: getDatabaseUrl(),
  },
  casing: 'snake_case',
});
