import { DataSource } from "typeorm";
// Game
import { Game } from "../graphql/game/game.entities";
import { DlcExpansion } from "../graphql/game/dlc_expansion.entities";
import { GameAward } from "../graphql/game/game_award.entities";
import { GameCategory } from "../graphql/game/game_category.entities";
import { Platform } from "../graphql/game/platform.entities";
// Movie
import { Movie } from "../graphql/movie/movie.entities";
import { MovieActors } from "../graphql/movie/movie_actors.entities";
import { MovieAward } from "../graphql/movie/movie_award.entities";
import { MovieCategory } from "../graphql/movie/movie_category.entities";
// Book
import { Book } from "../graphql/book/book.entities";

import "dotenv/config";

const isDev = process.env.ENVIRONNEMENT === "development";

export const dataSource = new DataSource({
  type: "sqlite", // Type de BDD recherchée (MySQL, PostGres, SQLite, ...)
  database: "./db.sqlite", // Prépférable de la mettre en .env
  entities: [
    Game,
    Movie,
    Book,
    DlcExpansion,
    GameAward,
    GameCategory,
    Platform,
    MovieAward,
    MovieActors,
    MovieCategory,
  ], // On placera nos modèles de données ici
  synchronize: isDev, // Propriété de stratégie de synchronisation (ici, l'on synchronise à chaque fois que l'on lance le projet) ! Ne pas laisser en prod
  logging: isDev,
});
