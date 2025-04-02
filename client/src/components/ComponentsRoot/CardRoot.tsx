import style from "./CardRoot.module.css";

type CardRootProps = {
    title: string;
    image: string;
    alt: string;
    year: number;

}

function CardRoot(Props: CardRootProps) {
  const { title, image, alt, year } = Props;

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
