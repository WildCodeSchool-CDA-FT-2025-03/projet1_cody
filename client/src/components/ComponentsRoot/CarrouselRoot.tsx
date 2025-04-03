import { useRef, useState, useEffect } from "react";
import style from "./CarrouselRoot.module.css";
import CardRoot from "./CardRoot";
import CardDataType from "../../types/Card.type";

type CarrouselRootProps = {
  cards: CardDataType[];
  h2: string;
};

function CarrouselRoot({ cards, h2 }: CarrouselRootProps) {

  // Référence vers le conteneur scrollable du carrousel
  const scrollRef = useRef<HTMLDivElement>(null);

  // État fusionné
  const [scrollPosition, setScrollPosition] = useState({
    start: true,
    end: false,
  });

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (el) {
      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // Met à jour les deux d’un coup si changement
      setScrollPosition((prev) => {
        if (prev.start !== atStart || prev.end !== atEnd) {
          return { start: atStart, end: atEnd };
        }
        return prev; // Ne déclenche pas de re-render inutile
      });
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Vérifie la position dès le chargement
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScrollPosition); // Ajoute l’écouteur
    return () => {
      el?.removeEventListener("scroll", checkScrollPosition); // Nettoie l’écouteur au démontage
    };
  }, []);

  const scrollBy = (distance: number) => {
    scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className={style.CarrouselContainer}>
      <h2 className={style.Title}>{h2}</h2>

      {!scrollPosition.start && (
        <button className={style.NavLeft} onClick={() => scrollBy(-660)}>◀</button>
      )}
      {!scrollPosition.end && (
        <button className={style.NavRight} onClick={() => scrollBy(660)}>▶</button>
      )}

      <div className={style.CarrouselRoot} ref={scrollRef}>
        <div className={style.CarrouselWrapper}>
          {cards.map((card) => (
            <CardRoot
              key={card.id}
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarrouselRoot;
