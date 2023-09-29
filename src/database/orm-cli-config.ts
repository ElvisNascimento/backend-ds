import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCurriculosTable1695989129952 } from 'src/migrations/1695989129952-CreateCurriculosTable';

export const dataSouce = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCurriculosTable1695989129952],
});
