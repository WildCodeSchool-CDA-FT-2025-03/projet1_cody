import style from "./DetailRoot.module.css";

function DetailRoot({image_url, image_alt, title, year, duration, summary, awards, category, pegi_esbr_rating}: { image_url: string, image_alt: string, title: string; year: string; duration: number; summary: string; awards: string[]; category: string[], pegi_esbr_rating: string }) {
  return (
    <section className={style.containerComponent}>
      <figure className={style.detailPicture}>
        <img src={image_url} alt={image_alt} />
      </figure>
      <div className={style.detailTitle}>
        <h1>{title}</h1>
        <span className={style.detailYear}>
          <span>Année : {year}</span>
          <span>Durée : {duration} h</span>
          <span>Public : {pegi_esbr_rating}</span>
        </span>
      </div>
      <ul className={style.detailAward}>
        {awards.map((item, index) => (
          <li key={index} className={style.detailAwardItem}>
            {item}
          </li>
        ))}
      </ul>
      <p className={style.detailSummary}>{summary}</p>
      <ul className={style.detailCategorie}>
        {category.map((item, index) => (
          <li key={index} className={style.detailCategorieitem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DetailRoot;
