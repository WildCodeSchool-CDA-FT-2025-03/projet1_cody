import CarrouselRoot from "../../components/ComponentsRoot/CarrouselRoot";
import CSSTargetPage from "../StylePage.module.css";
import MovieData from "./MovieData";

const fakeData = MovieData;

function HomePage() {
  return (
    <main className={CSSTargetPage.Main}>
      <CarrouselRoot cards={fakeData} h2="Nouveauté"/>
    </main>
  );
}

export default HomePage;
