import { CreditData, FullMovieData } from "../types/data.types";
import { convertHMS, findThumbnail } from "./transformData";

export const fetchImdbRating = async (imdbID: string) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY!,
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  try {
    let response = await fetch(
      `https://movie-database-alternative.p.rapidapi.com/?r=json&i=${imdbID}`,
      options
    );

    let data = await response.json();
    // console.log(data);
    return data.imdbRating;
  } catch (err) {
    console.log(err);
  }
};

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
  if (data.plprogram$tags) {
    let keyData = data.plprogram$tags
      .filter((key: Record<string, any>) => key.plprogram$scheme === "genre")
      .map((genre: Record<string, any>) => genre.plprogram$title);

    return keyData;
  } else {
    console.log(data);
    return;
  }
};

// export const buildGeneralMovieData = (data: Record<string, any>) => {
//   let tranformedData: GeneralMovieData = {
//     id: data.id.replace(/[\D]/g, ""),
//     title: data.title,
//     runtime: convertHMS(data.plprogram$runtime),
//     releaseYear: data.plprogram$year,
//     description: {
//       shortDescription: data.plprogram$descriptionLocalized.en,
//     },
//     poster: {
//       cardImageUrl: findThumbnail("card", data),
//     },
//   };

//   return tranformedData;
// };

export const buildFullMovieData = (data: Record<string, any>) => {
  let tranformedData: FullMovieData = {
    id: data.id.replace(/[\D]/g, ""),
    title: data.title,
    runtime: convertHMS(data.plprogram$runtime),
    releaseYear: data.plprogram$year,
    description: {
      longDescription:
        data.plprogram$longDescriptionLocalized?.en ||
        data.plprogram$longDescriptionLocalized ||
        null,
      shortDescription:
        data.plprogram$descriptionLocalized.en ||
        data.plprogram$descriptionLocalized ||
        null,
    },
    poster: {
      headerImageUrl: findThumbnail("header", data),
      posterImageUrl: findThumbnail("poster", data),
      cardImageUrl: findThumbnail("card", data),
    },
    credits: buildCreditData(data),
    genre: buildGenreData(data),
    // imdbRating: await fetchImdbRating(data.tdc$imdbId),
    trailerURL: data.tdc$youtubeTrailer,
  };

  return tranformedData;
};
