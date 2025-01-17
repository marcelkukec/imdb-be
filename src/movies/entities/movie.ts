import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies') //ime tabele
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  desc: string;
  @Column()
  release_date: Date;
  @Column()
  rating: number;
}
