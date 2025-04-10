import style from "./CardRoot.module.css";
import CardDataType from "../../types/Old-card.type";
import { Link } from "react-router-dom";

type CardRootProps = CardDataType & {
  contenttype: string;
};

function CardRoot({ id, title, image_url, image_alt, contenttype }: CardRootProps ) {
  let pageDetailLink = "movie";
  switch (contenttype) {
  case "jeux":
    pageDetailLink = "game";
    break;
  case "musique":
    pageDetailLink = "music";
    break;
  }
  return (
    <article className={style.CardRoot}>
      <figure className={style.ContainerImage}>
        <Link to={"/" + pageDetailLink + "/" + id  }>
          <img src={image_url} alt={image_alt} />
        </Link>
      </figure>
      <div className={style.ContainerText}>
        <Link to={"/" + pageDetailLink + "/" + id  }>
          <h1 className={style.Title}>{title}</h1>
        </Link>
      </div>
    </article>
  );
}

export default CardRoot;
