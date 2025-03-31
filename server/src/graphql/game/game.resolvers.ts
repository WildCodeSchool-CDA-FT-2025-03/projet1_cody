import { Game } from "./game.entities";
import { Resolver, Query } from "type-graphql";

@Resolver(Game)
export default class GameResolvers {
  @Query(()=> [Game])
  async getCartoons(): Promise<Game[]> {
    return await Game.find({
      relations : ["genres", "personnages"],
    });
  };
}