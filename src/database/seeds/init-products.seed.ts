import { Product } from 'src/modules/product';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class InitProductss implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const values: Product[] = [
            {
                id: 1,
                name: 'product_1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'product_2',
                vitaminA: 1.0,
                vitaminD: 0.5,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: 'product_3',
                vitaminBOne: 3.0,
                vitaminE: 1.0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        const repository = connection.getRepository(Product);
        await repository
            .createQueryBuilder()
            .insert()
            .into(Product)
            .values(values)
            .orIgnore()
            .execute();
    }
}
