// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "./DetailPage.module.css";
import {
  gql,
} from "@apollo/client";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import DetailRoot from "../../components/DetailRoot/DetailRoot";
import SpecificField from "../../components/SpecificField/SpecificField";

import { DetailContentType } from "../../types/DetailContentType";

const GET_ALL_GAME = gql`
  query GetOneGameById($id: String!) {
  getOneGameById(id: $id) {
    title
    duration_min
    summary
    developers
    publishers
    game_awards {
      name
    }
    game_categories {
      name
    }
    pegi_esbr_rating
  }
}
`;

type getOneGame = {
  getOneGameById: {
    title: string;
    duration_min: number;
    summary: string;
    developers: string;
    publishers: string;
    game_awards: {
      name: string;
    }[];
    game_categories: {
      name: string;
    }[];
    pegi_esbr_rating: string;
  };
};


const specificField = ["publishers", "developers"];
function GameDetailPage() {
  const { id } = useParams();

  const { loading, error, data } = useQuery<getOneGame>(GET_ALL_GAME, {
    variables: { id: id },
  });

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;

  const contentType: DetailContentType = {
    title: data?.getOneGameById.title || "",
    duration_min: data?.getOneGameById.duration_min || 0,
    summary: data?.getOneGameById.summary || "",
    year: 0,
    awards: [],
    cateregory: []
  };

  data?.getOneGameById.game_awards.forEach((a,index) => {
    contentType.awards[index] = a;
  });
  data?.getOneGameById.game_categories.forEach((c,index) => {
    contentType.cateregory[index] = c;
  });

  const getField = (data: getOneGame | undefined, specificField : string[])  => {
    const result: Record<string, string> = {};
    specificField.forEach(fd => {
      result[fd] = data?.getOneGameById[fd as keyof typeof data.getOneGameById] as string;
    });
    return result;
  };

  return (
    <main className={CSSTargetPage.Main}>
      <DetailRoot data={contentType} />
      <SpecificField data={getField(data, specificField)} />
    </main>
  );
}

export default GameDetailPage;
