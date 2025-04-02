
// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "../StylePage.module.css";

function HomePage() {
  return (
    <main className={CSSTargetPage.Main}>
    </main>
  );
}

export default HomePage;
