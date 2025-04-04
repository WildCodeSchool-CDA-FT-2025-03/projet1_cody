import styles from "./ContentList.module.css";

type ContentListProps = {
  contentType: "movies" | "games" | "books" | "music";
};

function ContentList({ contentType }: ContentListProps) {
  return (
    <div className={styles.contentList}>
      <span>Card à insérer ici pour {contentType}</span>
    </div>
  );
}

export default ContentList;
