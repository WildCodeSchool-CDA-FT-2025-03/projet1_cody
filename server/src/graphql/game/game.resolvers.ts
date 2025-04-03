import { Game } from "./game.entities";
import { Resolver, Query, Arg } from "type-graphql";

@Resolver(Game)
export default class GameResolvers {
  @Query(() => Game, { nullable: true })
  async getOneGameById(@Arg("id") id: string): Promise<Game | null> {
    return await Game.findOne({
      where: { id: parseInt(id) },
    });
  }

  @Query(() => [Game])
  async getGames(): Promise<Game[]> {
    return await Game.find();
  }
}
