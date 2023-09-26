import { HttpStatus, Injectable } from '@nestjs/common';
import { logger, slack } from '.';
import { displayName } from '../../package.json';
import { ServiceResponse } from './interfaces';
@Injectable()
export class BaseService {
  async handleError(error: Error): Promise<ServiceResponse> {
    logger.error(error);

    await slack.sdk.send({
      text: `${displayName} Error (${process.env.NODE_ENV})\n\n\nMessage:\n${error.message}\n\nName:\n${error.name}\n\nStack:\n${error.stack}`,
    });

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: [
        process.env.DEBUG ? error.message : 'Internal server error',
      ],
    };
  }
}
