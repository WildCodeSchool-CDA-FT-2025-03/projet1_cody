// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "./DetailPage.module.css";
import {
  gql,
} from "@apollo/client";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import DetailRoot from "../../components/DetailRoot/DetailRoot";
import SpecificField from "../../components/SpecificField/SpecificField";
import CardDataType from "../../types/Old-card.type";
import CarrouselRoot from "../../components/ComponentsRoot/CarrouselRoot";
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";

const GET_ALL_MOVIE = gql`
  query GetOneMovieById($id: String!) {
  getOneMovieById(id: $id) {
    title
    duration
    summary
    producers
    writers
    studios
    image_alt
    image_url
    movie_awards {
      name
    }
    movie_categories {
      name
    }
    release_date
    targeted_audience
  }
  getLastMovies {
    id
    image_alt
    image_url
    title
  }
}
`;

type getOneMovie = {
  getLastMovies: CardDataType[];
  getOneMovieById: {
    title: string;
    duration: number;
    summary: string;
    producers: string;
    writers: string;
    studios: string;
    image_url: string;
    image_alt: string;
    movie_awards: {
      name: string;
    }[];
    movie_categories: {
      name: string;
    }[];
    targeted_audience: string;
    release_date: Date;
  };
};

const specificField = ["producers", "writers", "studios"];
function MovieDetailPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery<getOneMovie>(GET_ALL_MOVIE, {
    variables: { id: id },
  });
  const myawards : string[] = [];
  const mycategory : string[] = [];

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;

  data?.getOneMovieById.movie_awards.forEach((a,index) => {
    myawards[index] = a.name;
  });
  data?.getOneMovieById.movie_categories.forEach((c,index) => {
    mycategory[index] = c.name;
  });

  const getField = (data: getOneMovie | undefined, specificField : string[])  => {
    const result: Record<string, string> = {};
    specificField.forEach(fd => {
      result[fd] = data?.getOneMovieById[fd as keyof typeof data.getOneMovieById] as string;
    });
    return result;
  };

  const getFieldRoot = (fieldname: string)  => {
    return (data?.getOneMovieById[fieldname as keyof typeof data.getOneMovieById] || "").toString();
  };

  const duration = data?.getOneMovieById.duration || 0;

  let yeartMovie = "";
  if(data?.getOneMovieById.release_date) {
    yeartMovie = new Date(data?.getOneMovieById.release_date).getFullYear().toString();
  }

  return (
    <main className={CSSTargetPage.Main}>
      <TitleAndBtnReturn title="Détail film" />
      <div className={CSSTargetPage.container}>
        <DetailRoot 
          image_url={getFieldRoot("image_url")} 
          image_alt={getFieldRoot("image_alt")} 
          pegi_esbr_rating={getFieldRoot("targeted_audience")} 
          title={getFieldRoot("title")} 
          year={yeartMovie} 
          duration={duration} 
          summary={getFieldRoot("summary")} 
          awards={myawards} 
          category={mycategory}/>
        <SpecificField data={getField(data, specificField)} />
      </div>
      <CarrouselRoot cards={data?.getLastMovies} h2="film"/>
    </main>
  );
}

export default MovieDetailPage;
