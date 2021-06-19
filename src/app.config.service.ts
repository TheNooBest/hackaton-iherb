import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private readonly configService: ConfigService) {}

    get port(): number {
        return this.configService.get('app.port');
    }

    get env(): string {
        return this.configService.get('app.env');
    }

    get isDevEnvironment(): boolean {
        return this.env === 'dev';
    }

    get isProdEnvironment(): boolean {
        return this.env === 'prod';
    }
}
