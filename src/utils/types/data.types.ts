export interface Essentials {
  id: string;
  title: string;
  imdbID: string;
  runtime: number;
  releaseYear: number;
  poster: string;
  trailerUrl?: string;
  genres: string | string[] | any;
}

export interface CreditData {
  role: string;
  name: string;
}

export interface FullMovieData {
  id: string;
  title: string;
  description: {
    shortDescription?: string;
    longDescription?: string;
  };

  runtime: string;

  releaseYear: number;
  credits: CreditData[] | null;
  genre: string[];
  imdbRating?: string;
  poster: {
    headerImageUrl: string | null;
    cardImageUrl?: string | null;
    posterImageUrl: string | null;
  };
  trailerURL: string | null;
}
