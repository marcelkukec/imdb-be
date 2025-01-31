import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from "./movies/entities/movie";
import { GenresModule } from './genres/genres.module';
import { Genre } from "./genres/entity/genre";
import { UsersModule } from './users/users.module';
import { User } from "./users/entity/user.entity";
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'marcel380',
      database: 'imdb',
      entities: [Movie, Genre, User],
      synchronize: true,
    }),
    MoviesModule,
    GenresModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
