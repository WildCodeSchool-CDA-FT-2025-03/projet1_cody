import { Movie } from "./movie.entities";
import { Resolver, Query } from "type-graphql";

@Resolver(Movie)
export default class MovieResolvers {
  @Query(() => [Movie])
  async getMovies(): Promise<Movie[]> {
    return await Movie.find();
  }
}
