import { promises as fs } from 'fs';
import * as path from 'path';

import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function getApiVersion(): string {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require('../../package.json');

    return packageJson.version;
}

interface SwaggerModuleOptions {
    generateSpecFile: boolean;
}

export async function initSwaggerModule(app: INestApplication, options: SwaggerModuleOptions): Promise<void> {
    const documentOptions = new DocumentBuilder()
        .setTitle('IHerb solution server')
        .setDescription('API for server of solution for hackaton')
        .setVersion(getApiVersion())
        .build();

    const document = SwaggerModule.createDocument(app, documentOptions);

    if (options.generateSpecFile) {
        await fs.writeFile(
            path.resolve(__dirname, '..', '..', 'openapi', 'docs', 'openapi.json'),
            JSON.stringify(document, null, 4)
        );
    }

    SwaggerModule.setup('api/doc', app, document);
}
