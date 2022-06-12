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

export interface GeneralMovieData {
  id: string;
  title: string;
  description: {
    shortDescription?: string;
    longDescription?: string;
  };
  poster: {
    cardImageUrl?: string | null;
  };
  runtime: string;

  releaseYear: number;
  random?: any;
}

export interface FullMovieData extends GeneralMovieData {
  credits: CreditData[] | null;
  genre: string[];
  imdbID: string;
  poster: {
    headerImageUrl: string | null;
    cardImageUrl?: string | null;
    posterImageUrl: string | null;
  };
  trailerURL: string | null;
}
