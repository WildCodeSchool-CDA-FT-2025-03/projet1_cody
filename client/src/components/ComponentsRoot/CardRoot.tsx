import style from "./CardRoot.module.css";
import CardDataType from "../../types/Old-card.type";
import { Link } from "react-router-dom";

type CardRootProps = CardDataType & {
  contenttype: string;
};

const getPath = (contentType: string, id?: number) => {
  const mapping = {
    "jeux": "game",
    "musique": "music",
    "film": "movie"
  };
  return `/${mapping[contentType as keyof typeof mapping]}/${id}`;
};

function CardRoot({ id, title, image_url, image_alt, contenttype }: CardRootProps ) {
  return (
    <article className={style.CardRoot}>
      <figure className={style.ContainerImage}>
        <Link to={ getPath(contenttype, id) }>
          <img src={image_url} alt={image_alt} />
        </Link>
      </figure>
      <div className={style.ContainerText}>
        <Link to={ getPath(contenttype, id) }>
          <h1 className={style.Title}>{title}</h1>
        </Link>
      </div>
    </article>
  );
}

export default CardRoot;
