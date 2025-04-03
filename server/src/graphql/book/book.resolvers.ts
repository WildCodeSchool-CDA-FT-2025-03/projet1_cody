import { Book } from "./book.entities";
import { Resolver, Query } from "type-graphql";

@Resolver(Book)
export default class BookResolvers {
  @Query(() => [Book])
  async getBook(): Promise<Book[]> {
    return await Book.find();
  }
}
