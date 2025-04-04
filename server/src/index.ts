import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/sqlite";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import "dotenv/config";

import GameResolvers from "./graphql/game/game.resolvers";
import BookResolvers from "./graphql/book/book.resolvers";
import MovieResolvers from "./graphql/movie/movie.resolvers";

const PORT = parseInt(process.env.PORT_SERVER) || 3000;

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {
  const schema = await buildSchema({
    resolvers: [GameResolvers, BookResolvers, MovieResolvers],
  });

  const server = new ApolloServer({
    schema,
  });
  await dataSource.initialize();
  await startStandaloneServer(server, {
    listen: { port: PORT },
  });
})();
