// Components
import TitleAndBtnReturn from "../../components/ContentTitleAndBtnReturn/ContentTitleAndBtnReturn";
// Styles
import styles from "./AddMediaPage.module.css";

function AddMediaPage() {
  return (
    <section className={styles.addMediaPage}>
      <TitleAndBtnReturn title="Ajouter un média" />
    </section>
  );
}

export default AddMediaPage;
