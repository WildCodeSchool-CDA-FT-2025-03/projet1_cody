import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";


// 1. Définir ton schéma GraphQL (typeDefs)
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// 2. Définir les resolvers
const resolvers = {
  Query: {
    hello: () => 'Bonjour depuis Apollo Server !',
  },
};

// 3. Créer une instance du serveur
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();