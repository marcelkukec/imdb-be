import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie';
import { Repository } from 'typeorm';
import { CreateMovieDto } from "./entities/create-movie.dto";
import { UpdateMovieDto } from "./entities/update-movie.dto";
import { UserService } from "../users/users.service";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private readonly userService: UserService,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async create(createMovieDto: CreateMovieDto, userId: number): Promise<Movie> {
    //find user by id
    const user = await this.userService.findById(userId);

    const newMovie = this.movieRepository.create({...createMovieDto, user});
    return this.movieRepository.save(newMovie);
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = this.movieRepository.findOne({where: {id: id}});
    if (!movie) {
      throw new NotFoundException('Film ne obstaja');
    }
    await this.movieRepository.update(id, updateMovieDto);
    return this.movieRepository.findOne({where: {id: id}});
  }

  async delete(id: number): Promise<Movie> {
    await this.movieRepository.delete(id);
    return this.movieRepository.findOne({where: {id: id}});
  }
}
