import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserСontraindications1624120630066 implements MigrationInterface {
    private readonly tableName: string = 'user_contraindications';

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
            ],
            indices: [
                {
                    name: 'con_user_id_index',
                    columnNames: ['user_id'],
                }
            ],
            uniques: [
                {
                    name: 'con_user_product_unique',
                    columnNames: ['user_id', 'product_id'],
                }
            ],
        }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName, true, true, true);
    }

}
