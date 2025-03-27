import NavRoot from "../../components/NavRoot/NavRoot";
import AdminRoot from "../../components/AdminRoot/AdminRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";

// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "../StylePage.module.css";

function AdminPage() {
  return (
    <div className={CSSTargetPage.ContainerPage}>
      <header className={CSSTargetPage.Header}>
        <NavRoot />
      </header>

      <main className={CSSTargetPage.Main}>
        <AdminRoot />
      </main>

      <footer className={CSSTargetPage.Footer}>
        <FooterRoot />
      </footer>
    </div>
  );
}

export default AdminPage;
