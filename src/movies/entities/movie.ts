import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "../../genres/entity/genre";

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
  @ManyToOne(() => Genre, (genre) => genre.movies, {nullable: true})
  @JoinColumn({ name: "genre_id" })
  genre: Genre;
}
