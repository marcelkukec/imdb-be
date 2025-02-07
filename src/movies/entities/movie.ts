import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Genre } from "../../genres/entity/genre";
import { User } from "../../users/entity/user.entity";

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
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Genre, (genre) => genre.movies, {nullable: true})
  @JoinColumn({ name: "genre_id" })
  genre: Genre;
  @ManyToOne(() => User, (user) => user.movies, {nullable: true})
  @JoinColumn({ name: "user_id" })
  user: User;
}
