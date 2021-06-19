'use strict';

const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.resolve(__dirname, '..', 'openapitools.json');

function getNpmVersion() {
    const packageJson = require('../package.json');
    return packageJson['version'];
}

function generateConfig() {
    return {
        $schema: 'node_modules/@openapitools/openapi-generator-cli/config.schema.json',
        spaces: 4,
        'generator-cli': {
            version: '5.0.1',
            generators: {
                client: {
                    generatorName: 'typescript-axios',
                    output: './client',
                    glob: 'openapi/docs/*.{json,yaml}',
                    apiNameSuffix: 'Service',
                    templateDir: 'openapi/templates/typescript-axios',
                    additionalProperties: {
                        npmName: '@ppm/request-manager-client',
                        npmVersion: getNpmVersion(),
                        supportsES6: 'true',
                        withInterfaces: true
                    }
                }
            }
        }
    };
}

function saveConfig(config) {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 4));
}

function run() {
    saveConfig(generateConfig());
}

run();
