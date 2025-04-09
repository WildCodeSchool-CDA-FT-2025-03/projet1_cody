// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "./DetailPage.module.css";
import {
  gql,
} from "@apollo/client";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import DetailRoot from "../../components/DetailRoot/DetailRoot";

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
  const myawards : string[] = [];
  const mycategory : string[] = [];

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an issue</p>;

  data?.getOneGameById.game_awards.forEach((a,index) => {
    myawards[index] = a.name;
  });
  data?.getOneGameById.game_categories.forEach((c,index) => {
    mycategory[index] = c.name;
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
      <DetailRoot 
        title={data?.getOneGameById.title || ""} 
        year={0} 
        duration={data?.getOneGameById.duration_min || 0} 
        summary={data?.getOneGameById.summary || ""} 
        awards={myawards} 
        category={mycategory}
        dataspecific={getField(data, specificField)}/>
    </main>
  );
}

export default GameDetailPage;
