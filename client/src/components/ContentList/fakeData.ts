import { ContentByType } from "../../types/ContentType";
import Music from "../../assets/images/music.jpeg";
import Avenger from "../../assets/images/Avenger.jpg";

export const genreOptions = {
  movies: [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comédie" },
    { value: "drama", label: "Drame" },
    { value: "horror", label: "Horreur" },
  ],
  games: [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Aventure" },
    { value: "rpg", label: "RPG" },
    { value: "strategy", label: "Stratégie" },
  ],
  books: [
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-fiction" },
    { value: "biography", label: "Biographie" },
    { value: "fantasy", label: "Fantasy" },
  ],
  music: [
    { value: "rock", label: "Rock" },
    { value: "pop", label: "Pop" },
    { value: "jazz", label: "Jazz" },
    { value: "classical", label: "Classique" },
  ],
};

export const fakeData: ContentByType = {
  film: [
    { id: 1, title: "Avenger", image: Avenger, alt: "Affiche Avenger", year: 2012 },
    { id: 2, title: "Titanic", image: Avenger, alt: "Affiche Titanic", year: 1997 },
    {
      id: 3,
      title: "Inception",
      image: Avenger,
      alt: "Affiche Inception",
      year: 2010,
    },
    { id: 4, title: "Batman", image: Avenger, alt: "Affiche Batman", year: 2008 },
    {
      id: 5,
      title: "Spiderman",
      image: Avenger,
      alt: "Affiche Spiderman",
      year: 2021,
    },
  ],
  music: [
    { id: 6, title: "Mozart", image: Music, alt: "Album Mozart", year: 1756 },
    { id: 7, title: "Beethoven", image: Music, alt: "Album Beethoven", year: 1770 },
    { id: 8, title: "Bach", image: Music, alt: "Album Bach", year: 1685 },
    { id: 9, title: "Coldplay", image: Music, alt: "Album Coldplay", year: 2000 },
    { id: 10, title: "Daft Punk", image: Music, alt: "Album Daft Punk", year: 1993 },
  ],
  game: [
    {
      id: 11,
      title: "The Legend of Zelda",
      image: Avenger,
      alt: "Couverture Zelda",
      year: 2017,
    },
    {
      id: 12,
      title: "Red Dead Redemption 2",
      image: Avenger,
      alt: "Couverture RDR2",
      year: 2018,
    },
    {
      id: 13,
      title: "The Witcher 3",
      image: Avenger,
      alt: "Couverture Witcher 3",
      year: 2015,
    },
    {
      id: 14,
      title: "God of War",
      image: Avenger,
      alt: "Couverture God of War",
      year: 2018,
    },
    {
      id: 15,
      title: "Minecraft",
      image: Avenger,
      alt: "Couverture Minecraft",
      year: 2011,
    },
  ],
  book: [
    {
      id: 16,
      title: "Harry Potter",
      image: Music,
      alt: "Couverture Harry Potter",
      year: 1997,
    },
    {
      id: 17,
      title: "Le Seigneur des Anneaux",
      image: Music,
      alt: "Couverture LOTR",
      year: 1954,
    },
    { id: 18, title: "1984", image: Music, alt: "Couverture 1984", year: 1949 },
    {
      id: 19,
      title: "Don Quichotte",
      image: Music,
      alt: "Couverture Don Quichotte",
      year: 1605,
    },
    {
      id: 20,
      title: "Crime et Châtiment",
      image: Music,
      alt: "Couverture Crime et Châtiment",
      year: 1866,
    },
  ],
};
