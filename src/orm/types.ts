import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export type TSchema = Record<string, unknown>;

export type NestByteOrmDb<Schema extends TSchema> = NodePgDatabase<Schema>;
