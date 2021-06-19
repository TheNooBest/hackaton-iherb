import { HttpModule, Module } from '@nestjs/common';

import { controllers } from './controllers';

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [...controllers],
    providers: []
})
export class ApiModule {}
