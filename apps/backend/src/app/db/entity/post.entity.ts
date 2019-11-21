import {
  Entity, //
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, length: 500 })
  title: string;

  // @Column()
  // author: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column()
  avatar: string;

  @Column('int')
  views: number;

  @Column('int')
  likes: number;

  @Column()
  isPublished: boolean;
}
