import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/General/ContentWrapper/ContentWrapper";

import ProgramHero from "../../components/Body/ProgramHero/ProgramHero";
import ProgramEssentials from "../../components/Body/ProgramEssentials/ProgramEssentials";

import { useGetProgramByIdQuery } from "../../redux/services/programs";
import ProgramDescription from "../../components/Body/ProgramDescription/ProgramDescription";
import Loader from "../../components/General/Loader/Loader";
import MovieCredits from "../../components/Body/MovieCredits/MovieCredits";

const SingleProgram = () => {
  // maybe check if it exist in the redux
  // const { data, loading, error }: TApiResponse = useApiGetProgramById();
  let { programId } = useParams();
  const { data, error, isLoading } = useGetProgramByIdQuery({
    programId: programId!,
  });

  useEffect(() => {
    if (data) {
      console.log("Progam data", data);
    }
  }, [data]);

  return (
    <section className="relative md:mt-2 py-4 lg:py-8">
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        data && (
          <>
            <ProgramHero imageURL={data.poster.headerImageUrl}>
              <ProgramEssentials data={data} />
            </ProgramHero>
            <Container size={"medium"}>
              <ProgramDescription
                description={data.description.longDescription}
              />
              <MovieCredits credits={data.credits} />
            </Container>
          </>
        )
      )}
    </section>
  );
};

export default SingleProgram;
