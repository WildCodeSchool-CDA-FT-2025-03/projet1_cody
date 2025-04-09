import SpecificField from "../SpecificField/SpecificField";
import style from "./DetailRoot.module.css";

function DetailRoot({title, year, duration, summary, awards, category, dataspecific}: { title: string; year: number; duration: number; summary: string; awards: string[]; category: string[]; dataspecific: Record<string, string> }) {
  return (
    <section className={style.container}>
      <image className={style.detailpicture}>Photo</image>
      <div className={style.detailtitle}>
        <h1>{title}</h1>
        <span className={style.detailyear}>{year} {duration}</span>
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
      <SpecificField data={dataspecific} />
    </section>
  );
}

export default DetailRoot;
