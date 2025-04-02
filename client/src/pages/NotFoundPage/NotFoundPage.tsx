import NotFoundRoot from "../../components/NotFoundRoot/NotFoundRoot";

// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "../StylePage.module.css";

function NotFoundPage() {
  return (
    <main className={CSSTargetPage.Main}>
      <NotFoundRoot />
    </main>
  );
}

export default NotFoundPage;
