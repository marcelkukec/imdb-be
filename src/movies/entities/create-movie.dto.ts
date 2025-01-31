import { IsDateString, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateMovieDto {
  @IsString()
  title: string;
  @IsString()
  desc: string;
  @IsDateString()
  release_date: Date;
  @IsNumber()
  @Min(1)
  @Max(20)
  rating: number;
  genre_id: number;
}