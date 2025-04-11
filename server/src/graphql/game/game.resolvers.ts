import { Game } from "./game.entities";
import { Resolver, Query, Arg } from "type-graphql";

@Resolver(Game)
export default class GameResolvers {
  @Query(() => Game, { nullable: true })
  async getOneGameById(@Arg("id") id: string): Promise<Game | null> {
    if (!isNaN(parseInt(id))) {
      return await Game.findOne({
        where: { id: parseInt(id) },
        relations: {
          game_awards: true,
          game_categories: true,
        },
      });
    }
    throw new Error("Identifiant incorrect!");
  }

  @Query(() => [Game])
  async getGames(): Promise<Game[]> {
    return await Game.find();
  }

  @Query(() => [Game])
  async getLastGames(): Promise<Game[]> {
    return await Game.find({
      order: {
        id: "DESC",
      },
      take: 15,
    });
  }
}
