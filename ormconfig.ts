import './src/boilerplate.polyfill';

import dotenv from 'dotenv';
import type { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
import type { SeederOptions } from 'typeorm-extension';

import { SnakeNamingStrategy } from './src/snake-naming.strategy';

dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [
    'src/modules/**/*.entity{.ts,.js}',
    'src/modules/**/*.view-entity{.ts,.js}',
  ],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  seeds: ['src/database/seeds/*{.ts,.js}'],
  factories: ['src/database/factories/*.factory.ts'],
};

export const dataSource = new DataSource(options);
