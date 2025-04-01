import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Game extends BaseEntity {
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
  release_date: Date;

  @Column()
  @Field()
  ISBN: string;

  @Column()
  @Field()
  format: string;

  @Column()
  @Field()
  duration: string;

  @Column()
  @Field()
  summary: string;

  @Column()
  @Field()
  target_audience: string;

  @Column()
  @Field()
  original_language: string;

  @Column()
  @Field()
  series: boolean;

  @Column()
  @Field()
  extract: string;

  @Column()
  @Field()
  game_engine: string;

  @Column()
  @Field()
  PEGI_ESRB_rating: string;

  @Column()
  @Field()
  mod_support: string;
}
