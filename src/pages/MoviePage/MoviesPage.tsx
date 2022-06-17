import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import ProgramSection from "../../components/Body/ProgramSection/ProgramSection";
import ContentWrapper from "../../components/General/ContentWrapper/ContentWrapper";
import { selectInitialGenres } from "../../redux/store/store";

const MoviesPage = () => {
  const genres = useSelector(selectInitialGenres);

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
