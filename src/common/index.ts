import { Logger } from '@nestjs/common';
import { displayName } from '../../package.json';

export { BaseController } from './base.controller';
export { BaseService } from './base.service';
export * as config from './config';
export * as EMAIL_MESSAGES from './email-messages';
export * as interfaces from './interfaces';
export * as MESSAGES from './messages';
export const logger = new Logger(displayName);
