import BookRoot from "../../components/BookRoot/BookRoot";

// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "../StylePage.module.css";

function BookPage() {
  return (
    <main className={CSSTargetPage.Main}>
      <BookRoot />
    </main>
  );
}

export default BookPage;
