import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: Number(process.env.DATABASE_PORT),
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  autoLoadEntities: true,
  synchronize: false,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
