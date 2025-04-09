import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ReviewMovie } from "../review/reviewMovie.entities";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  isAdmin: boolean;

  @Field(() => [ReviewMovie])
  @OneToMany(() => ReviewMovie, (review) => review.user)
  reviews: ReviewMovie[];
}
