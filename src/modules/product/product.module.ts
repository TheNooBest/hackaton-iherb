import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities';
import { Contraindication } from './entities/contraindications.entity';
import { Recommendation } from './entities/recommendation.entity';

import { ProductService } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Product,
            Recommendation,
            Contraindication,
        ]),
    ],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
