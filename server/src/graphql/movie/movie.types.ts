type MovieJSON = {
  title: string;
  subtitle: string;
  directors: string[];
  writers: string[];
  producers: string[];
  studios: string[];
  release_date: string;
  ISBN_EAN_UPC: string;
  format: string;
  duration: number;
  category: string;
  summary: string;
  keywords: string[];
  targeted_audience: string;
  original_language: string;
  series: boolean;
  budget: number;
  box_office: number;
  awards: string[];
  actors: string[];
  image_url: string;
  image_alt: string;
};

export { MovieJSON };
