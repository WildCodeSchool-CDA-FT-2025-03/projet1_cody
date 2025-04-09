import { Resolver, Query } from "type-graphql";
import { Album } from "./album.entities";

@Resolver(Album)
export default class MusicResolver {
  @Query(() => [Album])
  async getAlbums(): Promise<Album[]> {
    return await Album.find();
  }
}
