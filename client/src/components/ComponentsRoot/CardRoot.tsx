import style from "./CardRoot.module.css";
import CardDataType from "../../types/Card.type";

function CardRoot({ title, image, alt, year }: CardDataType) {

  return (
    <article className={style.CardRoot}>
      <figure className={style.ContainerImage}>
        <img src={image} alt={alt} />
      </figure>

      <div className={style.ContainerText}>
        <h1 className={style.Title}>{title}</h1>
        <p className={style.Year}>{year}</p>
      </div>
    </article>
  );
}

export default CardRoot;
