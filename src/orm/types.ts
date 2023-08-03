import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export type NestByteOrmDb<
  TSchema extends Record<string, unknown> = Record<string, never>,
> = NodePgDatabase<TSchema>;
