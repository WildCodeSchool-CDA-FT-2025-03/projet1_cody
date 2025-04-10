import { FormField } from "../../types/FormType";

// Champs communs à tous les médias
export const commonFields: FormField[] = [
  { id: "title", label: "Titre", type: "text" },
  { id: "release_date", label: "Date de sortie", type: "date" },
  { id: "format", label: "Format", type: "text" },
  { id: "original_language", label: "Langue originale", type: "text" },
  { id: "series", label: "Série", type: "checkbox" },
  { id: "image_url", label: "URL de l'image", type: "text" },
  { id: "image_alt", label: "Alt de l'image", type: "text" },
  { id: "summary", label: "Résumé", type: "textarea", rows: 4 },
];

// Champs spécifiques au film
export const movieFields: FormField[] = [
  { id: "subtitle", label: "Sous-titre", type: "text" },
  { id: "directors", label: "Réalisateurs", type: "text" },
  { id: "writers", label: "Scénaristes", type: "text" },
  { id: "producers", label: "Producteurs", type: "text" },
  { id: "studios", label: "Studios", type: "text" },
  { id: "isbn_ean_upc", label: "ISBN/EAN/UPC", type: "text" },
  { id: "duration", label: "Durée (min)", type: "number" },
  { id: "category", label: "Catégorie", type: "text" },
  { id: "targeted_audience", label: "Public cible", type: "text" },
  { id: "keywords", label: "Mots-clés", type: "textarea", rows: 2 },
  { id: "budget", label: "Budget", type: "number" },
  { id: "box_office", label: "Box Office", type: "number" },
];

// Champs spécifiques à la musique (album)
export const musicFields: FormField[] = [
  { id: "label", label: "Label", type: "text" },
  { id: "artists_names", label: "Artistes", type: "text" },
  { id: "producers", label: "Producteurs", type: "text" },
  { id: "composers", label: "Compositeurs", type: "text" },
  { id: "lyricists", label: "Paroliers", type: "text" },
  { id: "isbn", label: "ISBN", type: "text" },
  { id: "duration_min", label: "Durée min (min)", type: "number" },
  { id: "duration_max", label: "Durée max (min)", type: "number" },
  { id: "keywords", label: "Mots-clés", type: "textarea", rows: 2 },
  { id: "targeted_audience", label: "Public cible", type: "text" },
  { id: "extract", label: "Extrait", type: "text" },
  { id: "certifications", label: "Certifications", type: "text" },
  { id: "awards", label: "Récompenses", type: "text" },
];

// Champs spécifiques au jeu
export const gameFields: FormField[] = [
  { id: "subtitle", label: "Sous-titre", type: "text" },
  { id: "developers", label: "Développeurs", type: "text" },
  { id: "publishers", label: "Éditeurs", type: "text" },
  { id: "isbn", label: "ISBN", type: "text" },
  { id: "duration_min", label: "Durée min (h)", type: "number" },
  { id: "duration_max", label: "Durée max (h)", type: "number" },
  { id: "keywords", label: "Mots-clés", type: "textarea", rows: 2 },
  { id: "target_audience", label: "Public cible", type: "text" },
  { id: "extract", label: "Extrait", type: "text" },
  { id: "game_modes", label: "Modes de jeu", type: "text" },
  { id: "game_engine", label: "Moteur de jeu", type: "text" },
  { id: "pegi_esbr_rating", label: "Classification PEGI/ESBR", type: "text" },
  { id: "online_features", label: "Fonctionnalités en ligne", type: "text" },
  { id: "gameplay_mechanics", label: "Mécaniques de jeu", type: "text" },
  { id: "available_on", label: "Disponible sur", type: "text" },
  { id: "mod_support", label: "Support de mods", type: "text", maxLength: 3 },
];

// Champs spécifiques au livre
export const bookFields: FormField[] = [
  { id: "autor", label: "Auteur", type: "text" },
  { id: "editor", label: "Éditeur", type: "text" },
  { id: "isbn", label: "ISBN", type: "text" },
  { id: "page_number", label: "Nombre de pages", type: "number" },
  { id: "targeted_audience", label: "Public cible", type: "text" },
  { id: "extract", label: "Extrait", type: "text" },
];

// Mapping entre les types de média et leurs champs spécifiques
export const MEDIA_FIELDS: Record<
  NonNullable<Exclude<import("../../types/FormType").MediaType, null>>,
  FormField[]
> = {
  movie: movieFields,
  music: musicFields,
  game: gameFields,
  book: bookFields,
};
