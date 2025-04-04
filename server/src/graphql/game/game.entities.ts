import { Length } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";

import { DlcExpansion } from "./dlc_expansion.entities";
import { Platform } from "./platform.entities";
import { GameAward } from "./game_award.entities";
import { GameCategory } from "./game_category.entities";

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
  developers: string;

  @Column()
  @Field()
  publishers: string;

  @Column()
  @Field()
  release_date: Date;

  @Column({ length: 50 })
  @Length(0, 50)
  @Field()
  isbn: string;

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

  @Column()
  @Field()
  keywords: string;

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
  game_modes: string;

  @Column()
  @Field()
  game_engine: string;

  @Column({ length: 50 })
  @Field()
  pegi_esbr_rating: string;

  @Column()
  @Field()
  online_features: string;

  @Column()
  @Field()
  gameplay_mechanics: string;

  @Column()
  @Field()
  available_on: string;

  @Column({ length: 3 })
  @Field()
  mod_support: string;

  @Field(() => [DlcExpansion])
  @ManyToMany(() => DlcExpansion, (dlc_expansions) => dlc_expansions.games)
  dlc_expansions: DlcExpansion[];

  @Field(() => [Platform])
  @ManyToMany(() => Platform, (platforms) => platforms.games)
  platforms: Platform[];

  @Field(() => [GameAward])
  @ManyToMany(() => GameAward, (game_awards) => game_awards.games)
  game_awards: GameAward[];

  @Field(() => [GameCategory])
  @ManyToMany(() => GameCategory, (game_categories) => game_categories.games)
  game_categories: GameCategory[];
}
