import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  autor: string;

  @Column()
  @Field()
  editor: string;

  @Column()
  @Field()
  release_date: Date;

  @Column({ length: 50 })
  @Field()
  isbn: string;

  @Column()
  @Field()
  format: string;

  @Column()
  @Field()
  page_number: number;

  @Column({ type: "text" })
  @Field()
  summary: string;

  @Column({ length: 50 })
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
  extract: string;
}
