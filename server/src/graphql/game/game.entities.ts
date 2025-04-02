import { Length } from "class-validator";
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

  @Column({ length: 50 })
  @Length(0, 50)
  @Field()
  ISBN: string;

  @Column()
  @Field()
  format: string;

  @Column()
  @Field()
  duration_min: number;

  @Column()
  @Field()
  duration_max: number;

  @Column()
  @Field()
  summary: string;

  @Column({ length: 50 })
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

  @Column({ length: 50 })
  @Field()
  PEGI_ESRB_rating: string;

  @Column({ length: 3 })
  @Field()
  mod_support: string;
}
