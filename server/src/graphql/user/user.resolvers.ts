import { User } from "./user.entities";
import { Resolver, Query } from "type-graphql";

@Resolver(User)
export default class UserResolvers {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await User.find();
  }
}
