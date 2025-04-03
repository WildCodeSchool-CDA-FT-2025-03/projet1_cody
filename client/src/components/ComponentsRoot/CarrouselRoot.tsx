import { useRef } from "react";
import style from "./CarrouselRoot.module.css";
import CardRoot from "./CardRoot";

// Type d’une seule carte
type CardData = {
  id: number;
  title: string;
  image: string;
  alt: string;
  year: number;
};

// Type des props du carrousel
type CarrouselRootProps = {
  cards: CardData[];
};

function CarrouselRoot( Props: CarrouselRootProps) {
  const { cards } = Props;

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <section className={style.CarrouselContainer}>
      <button className={style.NavLeft} onClick={() => scrollBy(-660)}>◀</button>
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
      <button className={style.NavRight} onClick={() => scrollBy(660)}>▶</button>
    </section>
  );
}

export default CarrouselRoot;
