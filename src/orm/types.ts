import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export type NestOrmDb<
  TSchema extends Record<string, unknown> = Record<string, never>,
> = PostgresJsDatabase<TSchema>;
