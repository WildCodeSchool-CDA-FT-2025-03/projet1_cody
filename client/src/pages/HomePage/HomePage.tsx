import CarrouselRoot from "../../components/ComponentsRoot/CarrouselRoot";
import Avenger from "../../assets/images/Avenger.jpg";
import Music from "../../assets/images/music.jpeg";
import CSSTargetPage from "../StylePage.module.css";

const fakeData = [
  { id: 1, title: "Avenger", image: Music, alt: "Affiche Avenger", year: 2012 },
  { id: 2, title: "Le Seigneur des Anneaux", image: Avenger, alt: "Affiche Titanic", year: 1997 },
  { id: 3, title: "Astérix et Obélix : au service de Sa Majesté", image: Avenger, alt: "Affiche Inception", year: 2010 },
  { id: 4, title: "Batman", image: Avenger, alt: "Affiche Batman", year: 2008 },
  { id: 5, title: "Spiderman", image: Avenger, alt: "Affiche Spiderman", year: 2021 },
  { id: 1, title: "Avenger", image: Music, alt: "Affiche Avenger", year: 2012 },
  { id: 2, title: "Titanic", image: Avenger, alt: "Affiche Titanic", year: 1997 },
  { id: 3, title: "Inception", image: Avenger, alt: "Affiche Inception", year: 2010 },
  { id: 4, title: "Batman", image: Avenger, alt: "Affiche Batman", year: 2008 },
  { id: 5, title: "Spiderman", image: Avenger, alt: "Affiche Spiderman", year: 2021 },
];

function HomePage() {
  return (
    <main className={CSSTargetPage.Main}>
      <CarrouselRoot cards={fakeData} h2="Nouveauté"/>
    </main>
  );
}

export default HomePage;
