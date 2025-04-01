import { DataSource } from "typeorm";
import { Game } from "../graphql/game/game.entities";

export const dataSource = new DataSource({
  type: "sqlite", // Type de BDD recherchée (MySQL, PostGres, SQLite, ...)
  database: "./db.sqlite", // Prépférable de la mettre en .env
  entities: [Game], // On placera nos modèles de données ici
  synchronize: true, // Propriété de stratégie de synchronisation (ici, l'on synchronise à chaque fois que l'on lance le projet) ! Ne pas laisser en prod
});