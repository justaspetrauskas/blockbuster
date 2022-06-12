import React, { lazy, Suspense } from "react";
import ProgramSection from "../../components/Body/ProgramSection/ProgramSection";
import ContentWrapper from "../../components/General/ContentWrapper/ContentWrapper";
// const LazyProgramSection = lazy(
//   () => import("../../components/Body/ProgramSection/ProgramSection")
// );

const genres = [
  "action",
  "comedy",
  "thriller",
  "war",
  "romance",
  "drama",
  "crime",
  "documentary",
  "horror",
];

const MoviesPage = () => {
  return (
    <section id="movies" className="md:pt-14">
      <ContentWrapper size="screen">
        {genres.map((genre: string, index) => (
          <ProgramSection name={genre} key={index} />
        ))}
      </ContentWrapper>
    </section>
  );
};

export default MoviesPage;
