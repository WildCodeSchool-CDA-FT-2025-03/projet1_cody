import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { User } from "../user/user.entities";
import { Movie } from "../movie/movie.entities";
import { Book } from "../book/book.entities";
import { Game } from "../game/game.entities";
import { Album } from "../music/album.entities";

@ObjectType()
@Entity()
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  review: string;

  @Column()
  @Field()
  rating: number;

  @Column()
  @Field()
  date: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.reviews)
  movie: Movie;

  @Field(() => Book)
  @ManyToOne(() => Book, (book) => book.reviews)
  book: Book;

  @Field(() => Game)
  @ManyToOne(() => Game, (game) => game.reviews)
  game: Game;

  @Field(() => Album)
  @ManyToOne(() => Album, (album) => album.reviews)
  album: Album;
}
