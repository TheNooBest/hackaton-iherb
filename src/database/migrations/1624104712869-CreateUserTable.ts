import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1624104712869 implements MigrationInterface {
    private readonly tableName: string = 'user';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'vitamin_a',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_c',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_d',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_e',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_k',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_b_one',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_b_five',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'vitamin_b_six',
                    type: 'real',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    isNullable: false,
                    default: 'now()'
                },
            ],
            indices: [
                {
                    name: 'username_index',
                    columnNames: ['username'],
                }
            ]
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName, true, true, true);
    }
}
