import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Movie } from "./movie.entities";

@ObjectType()
@Entity()
export class MovieActors extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Field(() => [Movie])
  @ManyToMany(() => Movie, (movies) => movies.movie_actors)
  @JoinTable()
  movies: Movie[];
}
