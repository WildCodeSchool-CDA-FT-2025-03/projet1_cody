import { Resolver, Query, Arg } from "type-graphql";
import { General } from "./general.entities";
import { Game } from "../game/game.entities";
import { Movie } from "../movie/movie.entities";

@Resolver()
export default class GeneralResolvers {
  @Query(() => [General])
  async getAll(@Arg("name") name: string): Promise<General[]> {
    const mapping = {
      game: Game,
      film: Movie,
    };

    return await mapping[name].find({
      select: {
        id: true,
        title: true,
        image_url: true,
        image_alt: true,
      },
    });
  }
}
