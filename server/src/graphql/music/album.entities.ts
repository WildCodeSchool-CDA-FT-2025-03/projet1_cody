import { Length } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  OneToMany,
} from "typeorm";

import { Track } from "./track.entities";
import { Artist } from "./artitst.entities";
import { AlbumCategory } from "./album_category.entities";

@ObjectType()
@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  label: string;

  @Column()
  @Field()
  artists_names: string;

  @Column()
  @Field()
  producers: string;

  @Column()
  @Field()
  composers: string;

  @Column()
  @Field()
  lyricists: string;

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

  @Column()
  @Field()
  certifications: string;

  @Column()
  @Field()
  awards: string;

  @Field(() => [Track])
  @OneToMany(() => Track, (track) => track.album)
  tracklist: Track[];

  @Field(() => [Artist])
  @ManyToMany(() => Artist, (artist) => artist.albums)
  artists: Artist[];

  @Field(() => [AlbumCategory])
  @ManyToMany(() => AlbumCategory, (album_category) => album_category.albums)
  album_categories: AlbumCategory[];
}
