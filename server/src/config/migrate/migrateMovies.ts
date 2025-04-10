import { dataSource } from "../sqlite";
import { default as movies } from "./movies.json";

import { Movie } from "../../graphql/movie/movie.entities";
import { MovieAward } from "../../graphql/movie/movie_award.entities";
import { MovieActors } from "../../graphql/movie/movie_actors.entities";
import { MovieCategory } from "../../graphql/movie/movie_category.entities";

import { MovieJSON } from "../../graphql/movie/movie.types";

(async () => {
  await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM movie_award_movies_movie");
    await queryRunner.query("DELETE FROM movie_award");
    await queryRunner.query("DELETE FROM movie_actors_movies_movie");
    await queryRunner.query("DELETE FROM movie_actors");
    await queryRunner.query("DELETE FROM movie_category_movies_movie");
    await queryRunner.query("DELETE FROM movie_category");
    await queryRunner.query("DELETE FROM movie");
    await queryRunner.query(
      "DELETE FROM sqlite_sequence WHERE name IN ('movie','movie_award','movie_actors','movie_category')"
    );

    // indique à typescript que les films sont bien du type MovieJSON[]
    const typedMovies = movies as unknown as MovieJSON[];

    const movieAward = typedMovies.flatMap((movie) => movie.awards);
    const uniquemovieAward = [...new Set(movieAward)];
    const resultaward = await Promise.all(
      uniquemovieAward.map(async (award) => {
        const newaward = new MovieAward();
        newaward.name = award;
        return await newaward.save();
      })
    );
    const movieActors = typedMovies.flatMap((movie) => movie.actors);
    const uniquemovieActors = [...new Set(movieActors)];
    const resultActors = await Promise.all(
      uniquemovieActors.map(async (actor) => {
        const newActor = new MovieActors();
        newActor.name = actor;
        return await newActor.save();
      })
    );

    const movieCategory = typedMovies
      .reduce((acc: string, movie) => {
        if (acc === "") return String(movie.category || "");
        const categories = String(movie.category || "").split(", ");
        categories.forEach((cat) => {
          if (!("," + acc + ",").includes("," + cat + ",")) {
            acc += `,${cat}`;
          }
        });
        return acc;
      }, "")
      .split(",")
      .filter((cat) => cat.trim() !== "");

    // Créer d'abord toutes les catégories
    const resultcategory = await Promise.all(
      movieCategory.map(async (category) => {
        const newcategory = new MovieCategory();
        newcategory.name = category;
        return await newcategory.save();
      })
    );

    // Créer tous les films
    await Promise.all(
      typedMovies.map(async (oneMovie) => {
        const newMovie = new Movie();
        newMovie.title = oneMovie.title;
        newMovie.subtitle = oneMovie.subtitle || "";
        newMovie.directors = oneMovie.directors.toString() || "";
        newMovie.writers = oneMovie.writers.toString() || "";
        newMovie.producers = oneMovie.producers.toString() || "";
        newMovie.studios = oneMovie.studios.toString() || "";
        const releasedate = new Date(oneMovie.release_date);
        newMovie.release_date = releasedate;
        newMovie.isbn_ean_upc = oneMovie.ISBN_EAN_UPC || "";
        newMovie.format = oneMovie.format || "";
        newMovie.duration = oneMovie.duration || 0;
        newMovie.category = oneMovie.category || "";
        newMovie.summary = oneMovie.summary || "";
        newMovie.keywords = oneMovie.keywords.toString() || "";
        newMovie.targeted_audience = oneMovie.targeted_audience || "";
        newMovie.original_language = oneMovie.original_language || "";
        newMovie.series = oneMovie.series;
        newMovie.budget = oneMovie.budget || 0;
        newMovie.box_office = oneMovie.box_office || 0;
        newMovie.image_url = oneMovie.image_url || "";
        newMovie.image_alt = oneMovie.image_alt || "";

        // Préparation des relations
        const movieAwards = oneMovie.awards
          .map((a) => {
            return resultaward.find((award) => award.name === a);
          })
          .filter(Boolean);

        const catOneMovie = String(oneMovie.category || "")
          .split(",")
          .map((item) => item.trim());
        const movieCategories = catOneMovie
          .map((c) => {
            return resultcategory.find((categorie) => categorie.name === c);
          })
          .filter(Boolean);

        const movieActorsList = oneMovie.actors
          .map((a) => {
            return resultActors.find((actor) => actor.name === a);
          })
          .filter(Boolean);

        // Assigner toutes les relations en une seule fois
        newMovie.movie_awards = movieAwards;
        newMovie.movie_categories = movieCategories;
        newMovie.movie_actors = movieActorsList;

        // Sauvegarder le film une seule fois avec toutes ses relations
        return await newMovie.save();
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
