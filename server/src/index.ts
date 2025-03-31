import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from './config/sqlite';
import { buildSchema } from "type-graphql";
import "reflect-metadata";

import GameResolvers from "./graphql/game/game.resolvers";

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {

  const schema = await buildSchema({
    resolvers: [GameResolvers],
  });

  const server = new ApolloServer({
    schema,
  });

  await dataSource.initialize();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();