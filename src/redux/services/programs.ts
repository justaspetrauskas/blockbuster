import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  buildFullMovieData,
  fetchImdbRating,
} from "../../utils/helpers/buildData";

// Define a service using a base URL and expected endpoints
export const blockbusterApi = createApi({
  reducerPath: "blockbusterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas",
  }),
  endpoints: (builder) => ({
    getMoviesByGenre: builder.query<
      Record<string, any>,
      { range_end: number; genre: string }
    >({
      /// create movie type
      query: (arg) => {
        const { range_end, genre } = arg;
        return {
          url: `?form=json&range=1-${range_end}&fields=id,tags,title,description,plprogram$descriptionLocalized,runtime,year,thumbnails&byTags=genre:${genre}&byProgramType=movie&count=true`,
        };
      },
      transformResponse: (response: {
        totalResults: number;
        entries: Array<Record<string, any>>;
        startIndex?: number;
      }) => {
        // console.log("Received data", response);
        let pageCount = response.totalResults;
        let data = response.entries.map((movie) => buildFullMovieData(movie));
        return { data, pageCount };
      },
    }),
    getProgramById: builder.query<Record<string, any>, { programId: string }>({
      query: (arg) => {
        const { programId } = arg;
        return `/${programId}?form=json&fields=id,longDescription,ratings,tags,year,title,runtime,thumbnails,credits,description,tdc$imdbId,tdc$tvodProductAvailabilityLocalized,longDescriptionLocalized,descriptionLocalized`;
      },
      transformResponse: async (response: Record<string, any>) => {
        delete response["$xmlns"];
        // group data into
        // let imdbRating= await fetchImdbRating(response.)
        let imdbRating = await fetchImdbRating(response.tdc$imdbId);

        let data = buildFullMovieData(response);
        data.imdbRating = imdbRating;

        return data;
      },
    }),
    getSeries: builder.query<Record<string, any>, { range_end: number }>({
      query: (arg) => {
        const { range_end } = arg;
        return {
          url: `?form=json&range=1-${range_end}&fields=id,title,runtime,thumbnails&byProgramType=movie`,
        };
      },
      transformResponse: (response: { entries: Array<Record<string, any>> }) =>
        response.entries,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesByGenreQuery,
  useGetSeriesQuery,
  useGetProgramByIdQuery,
} = blockbusterApi;
