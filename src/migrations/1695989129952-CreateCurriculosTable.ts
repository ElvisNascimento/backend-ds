import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCurriculosTable1695989129952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'curriculos',
        columns: [
          { name: 'id', type: 'uuId', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'cpf', type: 'varchar' },
          { name: 'born', type: 'varchar' },
          { name: 'email', type: 'varchar' },
          { name: 'phone', type: 'varchar' },
          { name: 'education', type: 'varchar' },
          { name: 'func', type: 'varchar' },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('curriculos');
  }
}
