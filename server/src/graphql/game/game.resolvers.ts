import { Game } from "./game.entities";
import { Resolver, Query, Arg, Mutation } from "type-graphql";

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

  @Mutation(() => Game)
  async createGame(
    @Arg("title") title: string,
    @Arg("subtitle", { nullable: true }) subtitle?: string,
    @Arg("developers", { nullable: true }) developers?: string,
    @Arg("publishers", { nullable: true }) publishers?: string,
    @Arg("release_date", { nullable: true }) release_date?: string,
    @Arg("isbn", { nullable: true }) isbn?: string,
    @Arg("format", { nullable: true }) format?: string,
    @Arg("duration_min", { nullable: true }) duration_min?: number,
    @Arg("duration_max", { nullable: true }) duration_max?: number,
    @Arg("summary", { nullable: true }) summary?: string,
    @Arg("keywords", { nullable: true }) keywords?: string,
    @Arg("target_audience", { nullable: true }) target_audience?: string,
    @Arg("original_language", { nullable: true }) original_language?: string,
    @Arg("series", { nullable: true }) series?: boolean,
    @Arg("extract", { nullable: true }) extract?: string,
    @Arg("game_modes", { nullable: true }) game_modes?: string,
    @Arg("game_engine", { nullable: true }) game_engine?: string,
    @Arg("pegi_esbr_rating", { nullable: true }) pegi_esbr_rating?: string,
    @Arg("online_features", { nullable: true }) online_features?: string,
    @Arg("gameplay_mechanics", { nullable: true }) gameplay_mechanics?: string,
    @Arg("available_on", { nullable: true }) available_on?: string,
    @Arg("mod_support", { nullable: true }) mod_support?: string,
    @Arg("image_url", { nullable: true }) image_url?: string,
    @Arg("image_alt", { nullable: true }) image_alt?: string
  ): Promise<Game> {
    const game = Game.create({
      title,
      subtitle: subtitle || "",
      developers: developers || "",
      publishers: publishers || "",
      release_date: release_date ? new Date(release_date) : new Date(),
      isbn: isbn || "",
      format: format || "",
      duration_min: duration_min || 0,
      duration_max: duration_max || 0,
      summary: summary || "",
      keywords: keywords || "",
      target_audience: target_audience || "",
      original_language: original_language || "",
      series: series || false,
      extract: extract || "",
      game_modes: game_modes || "",
      game_engine: game_engine || "",
      pegi_esbr_rating: pegi_esbr_rating || "",
      online_features: online_features || "",
      gameplay_mechanics: gameplay_mechanics || "",
      available_on: available_on || "",
      mod_support: mod_support || "",
      image_url: image_url || "",
      image_alt: image_alt || "",
    });

    await game.save();
    return game;
  }
}
