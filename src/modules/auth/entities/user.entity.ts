import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public username: string;

    @Column()
    public password: string;

    @Column({ name: 'vitamin_a' })
    public vitaminA?: number;

    @Column({ name: 'vitamin_c' })
    public vitaminC?: number;

    @Column({ name: 'vitamin_d' })
    public vitaminD?: number;

    @Column({ name: 'vitamin_e' })
    public vitaminE?: number;

    @Column({ name: 'vitamin_k' })
    public vitaminK?: number;

    @Column({ name: 'vitamin_b_one' })
    public vitaminBOne?: number;

    @Column({ name: 'vitamin_b_five' })
    public vitaminBFive?: number;

    @Column({ name: 'vitamin_b_six' })
    public vitaminBSix?: number;

    @CreateDateColumn({
        name: 'created_at'
    })
    public createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    public updatedAt: Date;
}
