import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
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

  @Column()
  userId: number;

  @Column()
  movieId: number;

  @Column()
  bookId: number;

  @Column()
  gameId: number;

  @Column()
  albumId: number;

  // Relations
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: "userId" })
  user: User;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.reviews)
  @JoinColumn({ name: "movieId" })
  movie: Movie;

  @Field(() => Book)
  @ManyToOne(() => Book, (book) => book.reviews)
  @JoinColumn({ name: "bookId" })
  book: Book;

  @Field(() => Game)
  @ManyToOne(() => Game, (game) => game.reviews)
  @JoinColumn({ name: "gameId" })
  game: Game;

  @Field(() => Album)
  @ManyToOne(() => Album, (album) => album.reviews)
  @JoinColumn({ name: "albumId" })
  album: Album;
}
