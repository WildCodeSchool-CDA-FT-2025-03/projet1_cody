import { ContentType } from "../../types/ContentType";

import styles from "./ContentList.module.css";

type ContentListProps = {
  contentType: ContentType;
};

function ContentList({ contentType }: ContentListProps) {
  return (
    <div className={styles.contentList}>
      <span>Card à insérer ici pour {contentType}</span>
    </div>
  );
}

export default ContentList;
