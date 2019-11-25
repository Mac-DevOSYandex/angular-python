import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 500 })
    title: string;

    @Column({ type: 'varchar', nullable: true, length: 500 })
    subTitle: string;

    @Column('text')
    imageUrl: string;

    @Column('text')
    content: string;
}
