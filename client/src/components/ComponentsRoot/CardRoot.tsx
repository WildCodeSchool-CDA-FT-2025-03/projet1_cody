import style from "./CardRoot.module.css";
import CardDataType from "../../types/Old-card.type";
import { Link } from "react-router-dom";
import fallbackImage from "../../assets/images/default.webp";

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
  // const fallbackImage = "../../assets/images/chat.webp";
  const imageToDisplay = image_url?.trim() ? image_url : fallbackImage;
  return (
    <article className={style.CardRoot}>
      <figure className={style.ContainerImage}>
        <Link to={ getPath(contenttype, id) }>
          <img src={imageToDisplay} alt={image_alt} />
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
