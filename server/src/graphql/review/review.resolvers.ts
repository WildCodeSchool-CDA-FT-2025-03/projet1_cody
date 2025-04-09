import { ReviewMovie } from "./reviewMovie.entities";
import { Resolver, Query, Arg } from "type-graphql";

@Resolver(ReviewMovie)
export default class ReviewResolvers {
  @Query(() => ReviewMovie)
  async getReviewMovie(@Arg("id") id: number): Promise<ReviewMovie> {
    return await ReviewMovie.findOne({ where: { id } });
  }
}
