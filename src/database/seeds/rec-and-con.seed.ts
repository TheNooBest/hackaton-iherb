import { User } from 'src/modules/auth';
import { Contraindication } from 'src/modules/product/entities/contraindications.entity';
import { Recommendation } from 'src/modules/product/entities/recommendation.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class RecAndCon implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const rec: Recommendation[] = [
            {
                userId: 1,
                productId: 1,
                count: 1,
            },
            {
                userId: 1,
                productId: 2,
                count: 1,
            },
            {
                userId: 1,
                productId: 3,
                count: 4,
            },
            {
                userId: 2,
                productId: 2,
                count: 10,
            },
        ];

        const recRepository = connection.getRepository(Recommendation);
        await recRepository
            .createQueryBuilder()
            .insert()
            .into(Recommendation)
            .values(rec)
            .orIgnore()
            .execute();
        
        const con: Contraindication[] = [
            {
                userId: 3,
                productId: 1,
            },
            {
                userId: 3,
                productId: 2,
            },
            {
                userId: 3,
                productId: 3,
            },
        ];

        const conRepository = connection.getRepository(Contraindication);
        await conRepository
            .createQueryBuilder()
            .insert()
            .into(Contraindication)
            .values(con)
            .orIgnore()
            .execute();
    }
}
