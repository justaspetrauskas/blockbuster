import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProgramHero from "../../components/Body/ProgramHero/ProgramHero";
import ProgramEssentials from "../../components/Body/ProgramEssentials/ProgramEssentials";

import { useGetProgramByIdQuery } from "../../redux/services/programs";
import ProgramDescription from "../../components/Body/ProgramDescription/ProgramDescription";

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
    <section className="relative md:mt-2">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data && (
          <>
            <ProgramHero imageURL={data.poster.headerImageUrl}>
              <ProgramEssentials data={data} />
            </ProgramHero>
            <ProgramDescription
              description={data.description.longDescription}
            />
          </>
        )
      )}
    </section>
  );
};

export default SingleProgram;
