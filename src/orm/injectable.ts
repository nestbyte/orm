import { Inject } from '@nestjs/common';
import { NEST_ORM_DB } from './keys';

export const InjectDb = () => Inject(NEST_ORM_DB);
