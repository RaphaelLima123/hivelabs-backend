import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1619720600229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'lastname',
            type: 'varchar'
          },
          {
            name: 'nickname',
            type: 'varchar(30)',
            isUnique: true
          },
          {
            name: 'address',
            type: 'varchar'
          },
          {
            name: 'bio',
            type: 'varchar(100)',
            isNullable: true
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
