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

// Music
import { Album } from "../graphql/music/album.entities";
import { Track } from "../graphql/music/track.entities";
import { Artist } from "../graphql/music/artist.entities";
import { AlbumCategory } from "../graphql/music/album_category.entities";

// User
import { User } from "../graphql/user/user.entities";

// Review
import { ReviewMovie } from "../graphql/review/reviewMovie.entities";

// Newsletter
import { Newsletter } from "../graphql/newsletter/newsletter.entities";

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
    MovieActors,
    MovieAward,
    MovieCategory,
    Album,
    Track,
    Artist,
    AlbumCategory,
    User,
    ReviewMovie,
    Newsletter,
  ], // On placera nos modèles de données ici
  synchronize: isDev, // Propriété de stratégie de synchronisation (ici, l'on synchronise à chaque fois que l'on lance le projet) ! Ne pas laisser en prod
  logging: isDev,
});
