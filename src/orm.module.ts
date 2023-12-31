import { DynamicModule, Module } from '@nestjs/common';
import { CONNECTION_STRING, NEST_ORM_DB } from './orm/keys';
import { createDb } from './orm/db';

@Module({})
export class NestByteOrmModule {
  static register<TSchema extends Record<string, unknown>>(
    connectionString: string,
    schema: TSchema,
  ): DynamicModule {
    return {
      module: NestByteOrmModule,
      providers: [
        {
          provide: CONNECTION_STRING,
          useValue: connectionString,
        },
        {
          provide: NEST_ORM_DB,
          useFactory: async () => {
            return createDb(connectionString, schema);
          },
        },
      ],
      exports: [NEST_ORM_DB, CONNECTION_STRING],
      global: true,
    };
  }
}
