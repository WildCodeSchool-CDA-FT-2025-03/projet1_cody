import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class General {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  image_url: string;

  @Field()
  image_alt: string;
}
