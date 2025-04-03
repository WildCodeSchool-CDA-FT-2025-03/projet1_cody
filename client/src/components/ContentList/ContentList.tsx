import styles from "./ContentList.module.css";

interface ContentListProps {
  contentType: "movies" | "games" | "books" | "music";
}

function ContentList({ contentType }: ContentListProps) {
  return (
    <div className={styles.movieList}>
      <span>Card à insérer ici pour {contentType}</span>
    </div>
  );
}

export default ContentList;
