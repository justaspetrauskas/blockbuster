import {
  CreditData,
  GeneralMovieData,
  FullMovieData,
} from "../types/data.types";
import { convertHMS, findThumbnail } from "./transformData";

export const buildCreditData = (data: Record<string, any>) => {
  if (data.plprogram$credits) {
    let creditData: CreditData[] = data.plprogram$credits?.map(
      (c: Record<string, any>) => ({
        role: c.plprogram$creditType,
        name: c.plprogram$personName,
      })
    );
    return creditData;
  } else {
    return null;
  }
};

export const buildGenreData = (data: Record<string, any>) => {
  let keyData = data.plprogram$tags
    .filter((key: Record<string, any>) => key.plprogram$scheme === "genre")
    .map((genre: Record<string, any>) => genre.plprogram$title);

  return keyData;
};

export const buildGeneralMovieData = (data: Record<string, any>) => {
  let tranformedData: GeneralMovieData = {
    id: data.id.replace(/[\D]/g, ""),
    title: data.title,
    runtime: convertHMS(data.plprogram$runtime),
    releaseYear: data.plprogram$year,
    description: {
      shortDescription: data.plprogram$descriptionLocalized.en,
    },
    poster: {
      cardImageUrl: findThumbnail("card", data),
    },
  };

  return tranformedData;
};

export const buildFullMovieData = (data: Record<string, any>) => {
  let tranformedData: FullMovieData = {
    id: data.id.replace(/[\D]/g, ""),
    title: data.title,
    runtime: convertHMS(data.plprogram$runtime),
    releaseYear: data.plprogram$year,
    description: {
      longDescription: data.plprogram$longDescriptionLocalized.en,
    },
    poster: {
      headerImageUrl: findThumbnail("header", data),
      posterImageUrl: findThumbnail("poster", data),
    },
    credits: buildCreditData(data),
    genre: buildGenreData(data),
    imdbID: data.tdc$imdbId,
    trailerURL: data.tdc$youtubeTrailer,
  };

  return tranformedData;
};
