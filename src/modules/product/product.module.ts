import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities';

import { ProductService } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Product,
        ]),
    ],
    providers: [ProductService],
    exports: [ProductService],
})
export class ProductModule {}
