import CardRoot from "../../components/ComponentsRoot/CardRoot";
import Avenger from "../../assets/images/Avenger.jpg";

// Le style des balises HTML de toutes les racines de pages sont définit dans un seul module CSS
import CSSTargetPage from "../StylePage.module.css";

function HomePage() {
  return (
    <main className={CSSTargetPage.Main}>
      <CardRoot 
        title= "Ant-Man"
        image= {Avenger}
        alt="Avenger"
        year={2023}
      />
    </main>
  );
}

export default HomePage;
