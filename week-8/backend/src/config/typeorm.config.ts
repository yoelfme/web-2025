import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

type OrmConfig = DataSourceOptions & { autoLoadEntities: boolean };

const config: OrmConfig = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: Number(process.env.DATABASE_PORT),
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default registerAs<OrmConfig>('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
