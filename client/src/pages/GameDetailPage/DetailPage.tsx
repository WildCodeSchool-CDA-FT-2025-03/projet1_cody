// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "./DetailPage.module.css";
import {
  gql,
} from "@apollo/client";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import DetailRoot from "../../components/DetailRoot/DetailRoot";

import { DetailContentType } from "../../types/DetailContentType";

const GET_ALL_GAME = gql`
  query GetOneGameById($id: String!) {
  getOneGameById(id: $id) {
    title
    duration_min
    summary
    developers
    publishers
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
  };
};

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
    awards: "",
    cateregory: ["test"],
    other: [
      {
        name_title_other: "Développeurs",
        value_title_other: data?.getOneGameById.developers || "",
      },
      {
        name_title_other: "Editeurs",
        value_title_other: data?.getOneGameById.publishers || "",
      },
    ],
  };

  return (
    <main className={CSSTargetPage.Main}>
      <DetailRoot data={contentType} />
    </main>
  );
}

export default GameDetailPage;
