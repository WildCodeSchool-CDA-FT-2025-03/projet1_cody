import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Game } from "./game.entities";

@ObjectType()
@Entity()
export class Platform extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Field(() => [Game])
  @ManyToMany(() => Game, (games) => games.platforms)
  @JoinTable()
  games: Game[];
}
