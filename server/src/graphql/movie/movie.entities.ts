import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

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
  targeted_audience: string;

  @Column()
  @Field()
  original_language: string;

  @Column()
  @Field()
  series: boolean;

  @Column()
  @Field()
  budget: string;

  @Column()
  @Field()
  box_office: string;
}
