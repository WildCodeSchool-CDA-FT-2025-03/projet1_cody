import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Album } from "./album.entities";

@ObjectType()
@Entity()
export class Lyricist extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  name: string;

  @ManyToMany(() => Album, (album) => album.lyricists)
  albums: Album[];
}
