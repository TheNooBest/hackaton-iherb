import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserRecTable1624111036087 implements MigrationInterface {
    private readonly tableName: string = 'user_recommendations';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'product_id',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'count',
                    type: 'int',
                    isNullable: false,
                },
            ],
            indices: [],
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName, true, true, true);
    }
}
