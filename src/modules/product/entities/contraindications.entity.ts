import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user_contraindications')
export class Contraindication {
    @PrimaryColumn({ name: 'user_id' })
    public userId: number;
    
    @PrimaryColumn({ name: 'product_id' })
    public productId: number;
}
