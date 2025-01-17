import { IsDateString, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateMovieDto {
  @IsString()
  title: string;
  @IsString()
  desc: string;
  @IsDateString()
  releaseDate: Date;
  @IsNumber()
  @Min(1)
  @Max(20)
  rating: number;
}