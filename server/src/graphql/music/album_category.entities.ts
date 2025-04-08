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
export class AlbumCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  name: string;

  @Field(() => [Album])
  @ManyToMany(() => Album, (album) => album.album_categories)
  albums: Album[];
}
