import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Album } from "./album.entities";

@ObjectType()
@Entity()
export class Track extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  duration: string;

  @ManyToOne(() => Album, (album) => album.tracklist, {
    onDelete: "CASCADE",
  })
  album: Album;
}
