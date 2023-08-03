import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const createDb = <TSchema extends Record<string, unknown>>(
  connectionString: string,
  schema: TSchema,
) => {
  const client = postgres(connectionString);
  return drizzle(client, { schema });
};
