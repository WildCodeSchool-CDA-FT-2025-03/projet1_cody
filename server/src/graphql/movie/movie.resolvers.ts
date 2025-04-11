import { Movie } from "./movie.entities";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

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
    throw new Error("Identifiant incorrect!");
  }

  @Mutation(() => Movie)
  async createMovie(
    @Arg("title") title: string,
    @Arg("subtitle", { nullable: true }) subtitle?: string,
    @Arg("directors", { nullable: true }) directors?: string,
    @Arg("writers", { nullable: true }) writers?: string,
    @Arg("producers", { nullable: true }) producers?: string,
    @Arg("studios", { nullable: true }) studios?: string,
    @Arg("release_date", { nullable: true }) release_date?: string,
    @Arg("isbn_ean_upc", { nullable: true }) isbn_ean_upc?: string,
    @Arg("format", { nullable: true }) format?: string,
    @Arg("duration", { nullable: true }) duration?: number,
    @Arg("category", { nullable: true }) category?: string,
    @Arg("summary", { nullable: true }) summary?: string,
    @Arg("keywords", { nullable: true }) keywords?: string,
    @Arg("targeted_audience", { nullable: true }) targeted_audience?: string,
    @Arg("original_language", { nullable: true }) original_language?: string,
    @Arg("series", { nullable: true }) series?: boolean,
    @Arg("budget", { nullable: true }) budget?: number,
    @Arg("box_office", { nullable: true }) box_office?: number,
    @Arg("image_url", { nullable: true }) image_url?: string,
    @Arg("image_alt", { nullable: true }) image_alt?: string
  ): Promise<Movie> {
    const movie = Movie.create({
      title,
      subtitle: subtitle || "",
      directors: directors || "",
      writers: writers || "",
      producers: producers || "",
      studios: studios || "",
      release_date: release_date ? new Date(release_date) : new Date(),
      isbn_ean_upc: isbn_ean_upc || "",
      format: format || "",
      duration: duration || 0,
      category: category || "",
      summary: summary || "",
      keywords: keywords || "",
      targeted_audience: targeted_audience || "",
      original_language: original_language || "",
      series: series || false,
      budget: budget || 0,
      box_office: box_office || 0,
      image_url: image_url || "",
      image_alt: image_alt || "",
    });

    await movie.save();
    return movie;
  }
}
