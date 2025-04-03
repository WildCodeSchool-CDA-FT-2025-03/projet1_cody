import CarrouselRoot from "../../components/ComponentsRoot/CarrouselRoot";
import Avenger from "../../assets/images/Avenger.jpg";
import Music from "../../assets/images/music.jpeg";

const fakeData = [
  { id: 1, title: "Avenger", image: Music, alt: "Affiche Avenger", year: 2012 },
  { id: 2, title: "Titanic", image: Avenger, alt: "Affiche Titanic", year: 1997 },
  { id: 3, title: "Inception", image: Avenger, alt: "Affiche Inception", year: 2010 },
  { id: 4, title: "Batman", image: Avenger, alt: "Affiche Batman", year: 2008 },
  { id: 5, title: "Spiderman", image: Avenger, alt: "Affiche Spiderman", year: 2021 },
];

function HomePage() {
  return (
    <div>
      <CarrouselRoot cards={fakeData} />
    </div>
  );
}

export default HomePage;
