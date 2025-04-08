import style from "./DetailRoot.module.css";
import { DetailContentType } from "../../types/DetailContentType";

function DetailRoot({data}: { data: DetailContentType }) {
  return (
    <section className={style.container}>
      <p className={style.detailpicture}>Photo</p>
      <div className={style.detailtitle}>
        <h1>{data?.title}</h1>
        <h2 className={style.detailyear}>{data?.year} {data?.duration_min}</h2>
      </div>
      <ul className={style.detailaward}>
        {data?.awards.map((item, index) => (
          <li key={index} className={style.detailawarditem}>
            {item.name}
          </li>
        ))}
      </ul>
      <p className={style.detailsummary}>{data?.summary}</p>
      <ul className={style.detailcategorie}>
        {data?.cateregory.map((item, index) => (
          <li key={index} className={style.detailcategorieitem}>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DetailRoot;
