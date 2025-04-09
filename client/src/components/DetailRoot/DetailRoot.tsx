import SpecificField from "../SpecificField/SpecificField";
import style from "./DetailRoot.module.css";

function DetailRoot({title, year, duration, summary, awards, category, dataSpecific}: { title: string; year: number; duration: number; summary: string; awards: string[]; category: string[]; dataSpecific: Record<string, string> }) {
  return (
    <section className={style.container}>
      <image className={style.detailPicture}>Photo</image>
      <div className={style.detailTitle}>
        <h1>{title}</h1>
        <span className={style.detailYear}>{year} {duration}</span>
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
      <SpecificField data={dataSpecific} />
    </section>
  );
}

export default DetailRoot;
