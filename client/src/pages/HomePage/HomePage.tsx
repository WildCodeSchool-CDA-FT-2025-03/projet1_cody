import CarrouselRoot from "../../components/ComponentsRoot/CarrouselRoot";
import CSSTargetPage from "../StylePage.module.css";
import CardDataType from "../../types/Old-card.type";
import { useQuery, gql } from "@apollo/client";

const GET_HOME_CAROUSSEL = gql`
  query GetLastGames {
    getLastGames {
      id
      image_alt
      image_url
      title
    }
    getLastMovies {
      id
      image_alt
      image_url
      title
    }
  }
`;

type getAllRessource = {
  getLastGames: CardDataType[];
  getLastMovies: CardDataType[];
};

function HomePage() {
  const { loading, error, data } = useQuery<getAllRessource>(GET_HOME_CAROUSSEL);

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;

  return (
    <main className={CSSTargetPage.Main}>
      <CarrouselRoot cards={data?.getLastGames} h2="jeux"/>
      <CarrouselRoot cards={data?.getLastMovies} h2="films"/>
    </main>
  );
}

export default HomePage;
