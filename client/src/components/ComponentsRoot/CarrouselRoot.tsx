import { useRef, useState, useEffect } from "react";
import style from "./CarrouselRoot.module.css";
import CardRoot from "./CardRoot";

// Type d’une seule carte passée en props
import CardDataType from "../../types/Card.type";

// Type des props globales du composant CarrouselRoot
type CarrouselRootProps = {
  cards: CardDataType[];
  h2: string;
};

function CarrouselRoot(Props: CarrouselRootProps) {
  const { cards, h2 } = Props;

  // Référence à l'élément scrollable du carrousel
  const scrollRef = useRef<HTMLDivElement>(null);

  // États pour gérer l'affichage des flèches
  const [isAtStart, setIsAtStart] = useState(true);  // vrai si scroll au tout début
  const [isAtEnd, setIsAtEnd] = useState(false);     // vrai si scroll tout à droite

  // Fonction appelée à chaque scroll pour savoir si on est au début / à la fin
  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (el) {
      setIsAtStart(el.scrollLeft === 0);
      setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1); // "-1" pour éviter les arrondis
    }
  };

  // Au montage : vérifie la position et ajoute un écouteur de scroll
  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      el?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Défilement horizontal déclenché par les flèches
  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <section className={style.CarrouselContainer}>
      <h2 className={style.Title}>{h2}</h2>
      {!isAtStart && (
        <button className={style.NavLeft} onClick={() => scrollBy(-660)}>◀</button>
      )}
      {!isAtEnd && (
        <button className={style.NavRight} onClick={() => scrollBy(660)}>▶</button>
      )}
      <div className={style.CarrouselRoot} ref={scrollRef}>
        <div className={style.CarrouselWrapper}>
          {cards.map((card) => (
            <CardRoot
              key={card.id}
              title={card.title}
              image={card.image}
              alt={card.alt}
              year={card.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarrouselRoot;
