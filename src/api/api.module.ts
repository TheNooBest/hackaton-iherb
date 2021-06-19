import { HttpModule, Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth';
import { ProductModule } from 'src/modules/product/product.module';

import { controllers } from './controllers';

@Module({
    imports: [
        HttpModule,
        AuthModule,
        ProductModule,
    ],
    controllers: [...controllers],
    providers: []
})
export class ApiModule {}
