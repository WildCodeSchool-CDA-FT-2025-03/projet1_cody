import { useRef, useState, useEffect } from "react";
import style from "./CarrouselRoot.module.css";
import CardRoot from "./CardRoot";
import CardDataType from "../../types/card.type";

// Définition du type des props
type CarrouselRootProps = {
  cards: CardDataType[]; // Données des cartes à afficher
  h2: string;            // Titre du carrousel
};

function CarrouselRoot({ cards, h2 }: CarrouselRootProps) {
  // 🔁 Référence à l'élément DOM scrollable du carrousel
  const scrollRef = useRef<HTMLDivElement>(null);

  const [[start, end], setScrollPosition] = useState<[boolean, boolean]>([true, false]);

  // Fonction qui vérifie si on est au début ou à la fin du scroll
  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (el) {
      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // ✅ Mise à jour uniquement si une valeur a changé
      setScrollPosition(([prevStart, prevEnd]) => {
        if (prevStart !== atStart || prevEnd !== atEnd) {
          return [atStart, atEnd];
        }
        return [prevStart, prevEnd]; // Pas de changement, évite un re-render inutile
      });
    }
  };

  // Dès le montage du composant, on vérifie la position et on écoute les scrolls
  useEffect(() => {
    checkScrollPosition(); // Vérifie une première fois
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScrollPosition); // Ajoute le listener
    return () => {
      el?.removeEventListener("scroll", checkScrollPosition); // Nettoyage
    };
  }, []);

  /**
 * Fonction déclenchée lors du clic sur les flèches pour faire défiler
 * @param distance 
 */
  const scrollBy = (distance: number) => {
    scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className={style.CarrouselContainer}>
      <h2 className={style.Title}>{h2}</h2>
      {!start && (
        <button className={style.NavLeft} onClick={() => scrollBy(-660)}>◀</button>
      )}
      {!end && (
        <button className={style.NavRight} onClick={() => scrollBy(660)}>▶</button>
      )}
      <div className={style.CarrouselRoot} ref={scrollRef}>
        <div className={style.CarrouselWrapper}>
          {cards.map((card) => (
            <CardRoot key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarrouselRoot;
