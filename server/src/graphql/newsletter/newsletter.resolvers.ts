import { Newsletter } from "./newsletter.entities";
import { Resolver, Query } from "type-graphql";

@Resolver(Newsletter)
export default class NewsletterResolvers {
  @Query(() => [Newsletter])
  async getNewsletters(): Promise<Newsletter[]> {
    return await Newsletter.find();
  }
}
