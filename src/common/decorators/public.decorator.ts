import { SetMetadata } from '@nestjs/common';
import { PUBLIC_KEY } from '../contants/decorator.contants';

export const Public = () => SetMetadata(PUBLIC_KEY, true);
