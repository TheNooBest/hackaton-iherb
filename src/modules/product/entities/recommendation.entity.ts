import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user_recommendations')
export class Recommendation {
    @PrimaryColumn({ name: 'user_id' })
    public userId: number;
    
    @PrimaryColumn({ name: 'product_id' })
    public productId: number;

    @Column({ name: 'count' })
    public count: number;
}
