import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { AppConfigService } from './app.config.service';
import { AppModule } from './app.module';
import { initSwaggerModule } from './swagger';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: false
        })
    );

    const configService = app.get(AppConfigService);
    const logger = app.get(Logger);

    if (!configService.isProdEnvironment) {
        await initSwaggerModule(app, {
            generateSpecFile: configService.isDevEnvironment
        });
    }

    await app.listen(configService.port, '0.0.0.0');
    logger.log(`Server listening on port: ${configService.port}`);
}
bootstrap();
