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

@ObjectType()
@Entity()
export class ReviewMovie extends BaseEntity {
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
  @JoinColumn({ name: "userId" })
  user: User;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.reviews)
  @JoinColumn({ name: "movieId" })
  movie: Movie;
}
