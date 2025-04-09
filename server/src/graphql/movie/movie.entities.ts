import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { MovieCategory } from "./movie_category.entities";
import { MovieAward } from "./movie_award.entities";
import { MovieActors } from "./movie_actors.entities";
import { Review } from "../review/review.entities";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  subtitle: string;

  @Column()
  @Field()
  directors: string;

  @Column()
  @Field()
  writers: string;

  @Column()
  @Field()
  producers: string;

  @Column()
  @Field()
  studios: string;

  @Column()
  @Field()
  release_date: Date;

  @Column()
  @Field()
  isbn_ean_upc: string;

  @Column()
  @Field()
  format: string;

  @Column()
  @Field()
  duration: number;

  @Column()
  @Field()
  category: string;

  @Column()
  @Field()
  summary: string;

  @Column()
  @Field()
  keywords: string;

  @Column()
  @Field()
  targeted_audience: string;

  @Column()
  @Field()
  original_language: string;

  @Column()
  @Field()
  series: boolean;

  @Column()
  @Field()
  budget: number;

  @Column()
  @Field()
  box_office: number;

  @Field(() => [MovieCategory])
  @ManyToMany(
    () => MovieCategory,
    (movie_categories) => movie_categories.movies
  )
  movie_categories: MovieCategory[];

  @Field(() => [MovieAward])
  @ManyToMany(() => MovieAward, (movie_awards) => movie_awards.movies)
  movie_awards: MovieAward[];

  @Field(() => [MovieActors])
  @ManyToMany(() => MovieActors, (movie_actors) => movie_actors.movies)
  movie_actors: MovieActors[];

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];
}
