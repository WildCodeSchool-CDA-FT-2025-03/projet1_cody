import { dataSource } from "../sqlite";
import { Game } from "../../graphql/game/game.entities";
import { DlcExpansion } from "../../graphql/game/dlc_expansion.entities";
import { GameAward } from "../../graphql/game/game_award.entities";
import { GameCategory } from "../../graphql/game/game_category.entities";
import { Platform } from "../../graphql/game/platform.entities";
import { default as games } from "./games.json";

(async () => {
  await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM dlc_expansion_games_game");
    await queryRunner.query("DELETE FROM dlc_expansion");
    await queryRunner.query("DELETE FROM game_award_games_game");
    await queryRunner.query("DELETE FROM game_award");
    await queryRunner.query("DELETE FROM game_category_games_game");
    await queryRunner.query("DELETE FROM game_category");
    await queryRunner.query("DELETE FROM platform_games_game");
    await queryRunner.query("DELETE FROM platform");
    await queryRunner.query("DELETE FROM game");
    await queryRunner.query(
      "DELETE FROM sqlite_sequence WHERE name IN ('game','dlc_expansion','game_award','game_category','platform')"
    );

    const dlcexpansion = games.flatMap((game) => game.dlc_expansions);
    const uniquedlc = [...new Set(dlcexpansion)];
    const resultdlc = await Promise.all(
      uniquedlc.map(async (dlc) => {
        const newdlc = new DlcExpansion();
        newdlc.name = dlc;
        return await newdlc.save();
      })
    );

    const gameaward = games.flatMap((game) => game.awards);
    const uniqueaward = [...new Set(gameaward)];
    const resultaward = await Promise.all(
      uniqueaward.map(async (award) => {
        const newaward = new GameAward();
        newaward.name = award;
        return await newaward.save();
      })
    );

    const gamecategory = games
      .reduce((acc, game) => {
        if (acc === "") return game.category;
        const categories = game.category.split(", ");
        categories.forEach((cat) => {
          if (!("," + acc + ",").includes("," + cat + ",")) {
            acc += `,${cat}`;
          }
        });
        return acc;
      }, "")
      .split(",");

    const resultcategory = await Promise.all(
      gamecategory.map(async (category) => {
        const newcategory = new GameCategory();
        newcategory.name = category;
        return await newcategory.save();
      })
    );

    const gameplatform = games.flatMap((game) => game.platforms);
    const uniqueplatform = [...new Set(gameplatform)];
    const resultplatform = await Promise.all(
      uniqueplatform.map(async (platform) => {
        const newplatform = new Platform();
        newplatform.name = platform;
        return await newplatform.save();
      })
    );

    await Promise.all(
      games.map(async (onegame) => {
        const newGame = new Game();
        newGame.title = onegame.title;
        newGame.subtitle = onegame.subtitle || "";
        newGame.developers = onegame.developers.toString() || "";
        newGame.publishers = onegame.publishers.toString() || "";
        const releasedate = new Date(onegame.release_date);
        newGame.release_date = releasedate;
        newGame.isbn = onegame.ISBN || "";
        newGame.format = onegame.format || "";
        newGame.duration_min = parseInt(onegame.duration.split("-")[0]);
        newGame.duration_max = parseInt(onegame.duration.split("-")[1]);
        newGame.summary = onegame.summary || "";
        newGame.keywords = onegame.keywords.toString() || "";
        newGame.target_audience = onegame.targeted_audience || "";
        newGame.original_language = onegame.original_language || "";
        newGame.series = onegame.series;
        newGame.extract = onegame.extract || "";
        newGame.game_modes = onegame.game_modes.toString();
        newGame.game_engine = onegame.game_engine || "";
        newGame.pegi_esbr_rating = onegame.PEGI_ESRB_rating || "";
        newGame.online_features = onegame.online_features.toString() || "";
        newGame.gameplay_mechanics = onegame.gameplay_mechanics.toString();
        newGame.available_on = onegame.available_on.toString();
        newGame.mod_support = onegame.mod_support.toString();

        newGame.dlc_expansions = onegame.dlc_expansions.map((d) => {
          return resultdlc.find((dlc) => dlc.name === d);
        });

        newGame.game_awards = onegame.awards.map((a) => {
          return resultaward.find((award) => award.name === a);
        });

        const catonegame = onegame.category.split(",").map((item) => {
          return item.trim();
        });
        newGame.game_categories = catonegame.map((c) => {
          return resultcategory.find((categorie) => categorie.name === c);
        });

        newGame.platforms = onegame.platforms.map((p) => {
          return resultplatform.find((platform) => platform.name === p);
        });

        return await newGame.save();
      })
    );

    await queryRunner.commitTransaction();
  } catch (error) {
    console.error(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
})();
