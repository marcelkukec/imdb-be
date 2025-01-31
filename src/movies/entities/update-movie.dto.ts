import { IsDateString, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  desc?: string;
  @IsOptional()
  @IsDateString()
  releaseDate?: Date;
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(20)
  rating?: number;
  genre_id?: number;
}