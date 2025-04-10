import style from "./CardRoot.module.css";
import CardDataType from "../../types/Old-card.type";

function CardRoot({ title, image_url, image_alt }: CardDataType) {
  return (
    <article className={style.CardRoot}>
      <figure className={style.ContainerImage}>
        <img src={image_url} alt={image_alt} />
      </figure>
      <div className={style.ContainerText}>
        <h1 className={style.Title}>{title}</h1>
      </div>
    </article>
  );
}

export default CardRoot;
