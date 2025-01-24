import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GenresService } from "./genres.service";
import { Genre } from "./entity/genre";
import { UpdateMovieDto } from "../movies/entities/update-movie.dto";
import { Movie } from "../movies/entities/movie";

@Controller('genres')
export class GenresController {
  constructor(private readonly genreService: GenresService) {}

  @Get()
  async findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Post()
  async create(@Body('title') title: string): Promise<Genre> {
    return this.genreService.create(title);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('title') title: string,
  ): Promise<Genre> {
    return this.genreService.update(+id, title);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.genreService.delete(+id);
  }
}
