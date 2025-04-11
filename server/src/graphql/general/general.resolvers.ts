import { Resolver, Query, Arg } from "type-graphql";
import { Like } from "typeorm";
import { General } from "./general.entities";
import { Game } from "../game/game.entities";
import { Movie } from "../movie/movie.entities";

@Resolver()
export default class GeneralResolvers {
  @Query(() => [General])
  async getAll(
    @Arg("name") name: string,
    @Arg("sort") sort: string,
    @Arg("asc") ascdesc: string,
    @Arg("search", { nullable: true }) search?: string
  ): Promise<General[]> {
    const mapping = {
      jeux: Game,
      film: Movie,
    };
    const where: Record<string, unknown> = {};

    if (!sort) {
      sort = "id";
    }
    if (ascdesc !== "ASC" && ascdesc !== "DESC") {
      ascdesc = "ASC";
    }
    if (search) {
      where.title = Like(`%${search}%`); // ou toute autre colonne
    }

    return await mapping[name].find({
      select: {
        id: true,
        title: true,
        image_url: true,
        image_alt: true,
      },
      order: {
        [sort]: ascdesc,
      },
      where,
    });
  }
}
