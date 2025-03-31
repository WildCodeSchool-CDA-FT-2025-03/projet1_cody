import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  release_date: Date;

  @Column()
  ISBN: string;

  @Column()
  format: string;

  @Column()
  duration: string;

  @Column()
  summary: string;

  @Column()
  target_audience: string;

  @Column()
  original_language: string;

  @Column()
  series: boolean;

  @Column()
  extract: string;

  @Column()
  game_engine: string;

  @Column()
  PEGI_ESRB_rating: string;

  @Column()
  mod_support: string;
}