import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Review } from "../review/review.entities";

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

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
