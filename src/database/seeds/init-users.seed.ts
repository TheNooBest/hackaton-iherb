import { User } from 'src/modules/auth';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class InitUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const values: User[] = [
            {
                id: 1,
                username: 'aaa',
                password: 'aaa1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                username: 'bbb',
                password: 'bbb1',
                vitaminA: 10.0,
                vitaminC: 5.0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                username: 'ccc',
                password: 'ccc1',
                vitaminBOne: 0.0,
                vitaminBFive: 146.0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        const repository = connection.getRepository(User);
        await repository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(values)
            .orIgnore()
            .execute();
    }
}
