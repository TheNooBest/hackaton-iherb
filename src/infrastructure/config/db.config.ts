import * as path from 'path';

import { registerAs } from '@nestjs/config';

const ROOT_PATH = path.resolve(__dirname, '..', '..');

export default registerAs('db', () => {
    if (process.env.DB_REPLICATION === 'true') {
        const master = {
            host: process.env.DB_HOST_MASTER,
            port: Number.parseInt(process.env.DB_PORT_MASTER, 10),
            username: process.env.DB_USERNAME_MASTER,
            password: process.env.DB_PASSWORD_MASTER,
            database: process.env.DB_NAME_MASTER
        };

        const slaves = [];

        for (let i = 0; ; i++) {
            if (process.env[`DB_HOST_SLAVE_${i}`]) {
                slaves.push({
                    host: process.env[`DB_HOST_SLAVE_${i}`],
                    port: Number.parseInt(process.env[`DB_PORT_SLAVE_${i}`], 10),
                    username: process.env[`DB_USERNAME_SLAVE_${i}`],
                    password: process.env[`DB_PASSWORD_SLAVE_${i}`],
                    database: process.env[`DB_NAME_SLAVE_${i}`]
                });
            } else {
                break;
            }
        }
        return {
            type: 'postgres',
            replication: {
                master,
                slaves
            },
            logging: process.env.DB_LOGGING === 'true',
            synchronize: process.env.DB_SYNCHRONIZE === 'true',
            entities: [path.join(ROOT_PATH, '**', 'entities', '*{index.ts,.entity.ts,.entity.js}')],
            migrations: [path.join(ROOT_PATH, 'database', 'migrations', '*{.ts,.js}')],
            migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
            extra: {
                connectionTimeoutMillis: 30000,
                max: 100
            }
        };
    } else {
        return {
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number.parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            logging: process.env.DB_LOGGING === 'true',
            synchronize: process.env.DB_SYNCHRONIZE === 'true',
            entities: [path.join(ROOT_PATH, '**', 'entities', '*{index.ts,.entity.ts,.entity.js}')],
            migrations: [path.join(ROOT_PATH, 'database', 'migrations', '*{.ts,.js}')],
            migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
            extra: {
                connectionTimeoutMillis: 30000,
                max: 100
            }
        };
    }
});
