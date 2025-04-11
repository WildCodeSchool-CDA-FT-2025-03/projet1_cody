import { Movie } from "./movie.entities";
import { Resolver, Query, Arg } from "type-graphql";

@Resolver(Movie)
export default class MovieResolvers {
  @Query(() => [Movie])
  async getMovies(): Promise<Movie[]> {
    return await Movie.find();
  }

  @Query(() => [Movie])
  async getLastMovies(): Promise<Movie[]> {
    return await Movie.find({
      order: {
        id: "DESC",
      },
      take: 15,
    });
  }

  @Query(() => Movie, { nullable: true })
  async getOneMovieById(@Arg("id") id: string): Promise<Movie | null> {
    if (!isNaN(parseInt(id))) {
      return await Movie.findOne({
        where: { id: parseInt(id) },
        relations: {
          movie_awards: true,
          movie_categories: true,
        },
      });
    }
    return null;
  }
}
