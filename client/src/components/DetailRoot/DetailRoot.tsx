import style from "./DetailRoot.module.css";

function DetailRoot({title, year, duration, summary, awards, category}: { title: string; year: number; duration: number; summary: string; awards: string[]; category: string[] }) {
  return (
    <section className={style.container}>
      <p className={style.detailpicture}>Photo</p>
      <div className={style.detailtitle}>
        <h1>{title}</h1>
        <h2 className={style.detailyear}>{year} {duration}</h2>
      </div>
      <ul className={style.detailaward}>
        {awards.map((item, index) => (
          <li key={index} className={style.detailawarditem}>
            {item}
          </li>
        ))}
      </ul>
      <p className={style.detailsummary}>{summary}</p>
      <ul className={style.detailcategorie}>
        {category.map((item, index) => (
          <li key={index} className={style.detailcategorieitem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DetailRoot;
