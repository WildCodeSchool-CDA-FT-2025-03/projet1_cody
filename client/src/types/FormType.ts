export type MediaType = "movie" | "music" | "game" | "book" | null;

export type FormField = {
  id: string;
  label: string;
  type: "text" | "number" | "date" | "checkbox" | "textarea";
  rows?: number;
  maxLength?: number;
};

export type FormDataType = {
  [key: string]: string | number | boolean | undefined;
};

// Interface pour mapper les types de médias aux titres des formulaires
export const MEDIA_TITLES: Record<NonNullable<MediaType>, string> = {
  movie: "Ajouter un film",
  music: "Ajouter un album",
  game: "Ajouter un jeu",
  book: "Ajouter un livre",
};
