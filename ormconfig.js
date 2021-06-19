const path = require('path');

function getOptions() {
    const type = 'postgres';
    const logging = process.env.DB_LOGGING === 'true';
    const synchronize = process.env.DB_SYNCHRONIZE === 'true';
    const entities = [path.resolve(__dirname, 'src', '**', 'entities/*{index.ts,.entity.ts,.entity.js}')];
    const migrations = [path.resolve(__dirname, 'src', 'database', 'migrations/*{.ts,.js}')];
    const migrationsRun = process.env.DB_MIGRATIONS_RUN === 'true';
    const seeds = [path.resolve(__dirname, 'src', 'database', 'seeds/*{.ts,.js}')];
    const factories = [path.resolve(__dirname, 'src', 'database', 'factories/*{.ts,.js}')];
    const cli = {
        migrationsDir: path.resolve(__dirname, 'src', 'database', 'migrations')
    };

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
            type,
            replication: {
                master,
                slaves
            },
            logging,
            synchronize,
            entities,
            migrations,
            migrationsRun,
            seeds,
            factories,
            cli
        };
    } else {
        return {
            type,
            host: process.env.DB_HOST,
            port: Number.parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            logging,
            synchronize,
            entities,
            migrations,
            migrationsRun,
            seeds,
            factories,
            cli
        };
    }
}

module.exports = getOptions();
