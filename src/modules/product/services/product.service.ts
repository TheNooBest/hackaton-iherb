import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/auth';
import { In, Repository } from 'typeorm';
import { Product } from '../entities';
import { Contraindication } from '../entities/contraindications.entity';
import { Recommendation } from '../entities/recommendation.entity';
import { ProductAndCount } from '../types';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Recommendation)
        private readonly recomRepository: Repository<Recommendation>,
        @InjectRepository(Contraindication)
        private readonly contrRepository: Repository<Contraindication>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    public async getProductById(id: number): Promise<Product> {
        return this.productRepository.findOne({ id: id });
    }

    public async getRecommendations(user: User): Promise<ProductAndCount[]> {
        const recommendations = await this.recomRepository.find({ userId: user.id });
        const products = await this.productRepository.find({ id: In(recommendations.map(r => r.productId)) });
        return products.map(p => ({
            ...p,
            count: recommendations.find(r => r.productId === p.id).count,
        }));
    }

    public async getContraindications(user: User): Promise<Product[]> {
        const contraindications = await this.contrRepository.find({ userId: user.id });
        const products = await this.productRepository.find({ id: In(contraindications.map(c => c.userId)) });
        return products;
    }
}
