import { Review } from "./review.entities";
import { Resolver, Query } from "type-graphql";

@Resolver(Review)
export default class ReviewResolvers {
  @Query(() => [Review])
  async getReview(): Promise<Review[]> {
    return await Review.find();
  }
}
