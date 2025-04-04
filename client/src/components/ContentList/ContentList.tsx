import CardRoot from "../ComponentsRoot/CardRoot";
import CardDataType from "../../types/Card.type";

import Music from "../../assets/images/music.jpeg";
import Avenger from "../../assets/images/Avenger.jpg";

import styles from "./ContentList.module.css";

const fakeData: CardDataType[] = [
  { id: 1, title: "Avenger", image: Music, alt: "Affiche Avenger", year: 2012 },
  { id: 2, title: "Titanic", image: Avenger, alt: "Affiche Titanic", year: 1997 },
  { id: 3, title: "Inception", image: Avenger, alt: "Affiche Inception", year: 2010 },
  { id: 4, title: "Batman", image: Avenger, alt: "Affiche Batman", year: 2008 },
  { id: 5, title: "Spiderman", image: Avenger, alt: "Affiche Spiderman", year: 2021 },
  { id: 1, title: "Avenger", image: Music, alt: "Affiche Avenger", year: 2012 },
  { id: 2, title: "Titanic", image: Avenger, alt: "Affiche Titanic", year: 1997 },
  { id: 3, title: "Inception", image: Avenger, alt: "Affiche Inception", year: 2010 },
  { id: 4, title: "Batman", image: Avenger, alt: "Affiche Batman", year: 2008 },
  { id: 5, title: "Spiderman", image: Avenger, alt: "Affiche Spiderman", year: 2021 },
];

function ContentList() {
  return (
    <div className={styles.contentList}>
      {fakeData.map((card) => (
        <CardRoot key={card.id} {...card} />
      ))}
    </div>
  );
}

export default ContentList;
