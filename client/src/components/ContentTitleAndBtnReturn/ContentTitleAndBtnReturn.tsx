import { Link } from "react-router-dom";
import routerClient from "../../router/Router";
import arrow from "../../assets/icons/arrow.svg";
import styles from "./ContentTitleAndBtnReturn.module.css";

interface ContentTitleAndBtnReturnProps {
  title: string;
}

function ContentTitleAndBtnReturn({ title }: ContentTitleAndBtnReturnProps) {
  return (
    <div className={styles.moviePageHeader}>
      <Link className={styles.arrow} to={`${routerClient[0].path}`}>
        <img src={arrow} alt="retour vers l'accueil" />
      </Link>
      <h2>{title}</h2>
    </div>
  );
}

export default ContentTitleAndBtnReturn;
