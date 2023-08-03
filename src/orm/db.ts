import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export const createDb = async <TSchema extends Record<string, unknown>>(
  connectionString: string,
  schema: TSchema,
) => {
  const client = new Client({
    connectionString,
  });
  client.connect();
  return drizzle(client, { schema });
};
