import CardDataType from "./Card.type";

export enum ContentType {
  Movies = "movies",
  Games = "games",
  Books = "books",
  Music = "music",
}

export type ContentByType = {
  film: CardDataType[];
  music: CardDataType[];
  game: CardDataType[];
  book: CardDataType[];
  "...": CardDataType[]; // Type par défaut pour les contenus non gérés
};
