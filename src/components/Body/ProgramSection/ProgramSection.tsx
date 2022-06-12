import React, { useEffect, useState } from "react";
import { useGetMoviesByGenreQuery } from "../../../redux/services/programs";
import GridWrapper from "../../General/GridWrapper/GridWrapper";
import ProgramCard from "../ProgramCard/ProgramCard";
import ProgramSectionHeader from "../ProgramSectionHeader/ProgramSectionHeader";

interface ProgramSectionProps {
  name: string;
}

const ProgramSection = ({ name }: ProgramSectionProps) => {
  const [rangeEnd, setRangeEnd] = useState(7);
  const { data, error, isLoading } = useGetMoviesByGenreQuery({
    range_end: rangeEnd,
    genre: name,
  });

  useEffect(() => {
    if (data) {
      console.log("General Data", data.data);
    }
  }, [data]);

  const handleLoadMore = () => {
    setRangeEnd(rangeEnd + 7);
  };

  return (
    <div className="my-4">
      <ProgramSectionHeader sectionTitle={name} />
      <GridWrapper>
        {data &&
          data.data.map((program: Record<string, any>, index: number) => (
            <ProgramCard program={program} key={index} />
          ))}
      </GridWrapper>
      {isLoading && <div>is loading...</div>}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleLoadMore}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProgramSection;
