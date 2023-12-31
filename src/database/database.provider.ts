import { SyncOptions } from 'sequelize';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { logger } from '../common';
import { config } from '../common/config';
import * as models from './models';
import { DataBaseSeeder } from './seed-database';

export class DatabaseProvider {
  public static readonly provide = 'SEQUELIZE';

  public static async useFactory() {
    const sequelizeOptions: SequelizeOptions = {
      dialect: 'postgres',
      logging: false,
      models: Object.values(models),
      dialectModule: require('pg'),
      dialectOptions: {
        ssl: config.DB_SSL && { rejectUnauthorized: false },
      },
    };

    const syncOptions: SyncOptions = { alter: true };

    return new Sequelize(config.DB_URL, sequelizeOptions)
      .sync(syncOptions)
      .then(async () => DataBaseSeeder.seed())
      .catch((error) => logger.error(error));
  }
}
