import React, { useEffect, useState } from "react";
import { useGetMoviesByGenreQuery } from "../../../redux/services/programs";
import Button from "../../General/Button/Button";
import ProgramRow from "../../General/ProgramRow/ProgramRow";
import Loader from "../../General/Loader/Loader";
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
      console.log("General Data", data);
    }
  }, [data]);

  const handleLoadMore = () => {
    setRangeEnd(rangeEnd + 7);
  };

  return (
    <div className="my-4">
      {data && (
        <ProgramSectionHeader
          sectionTitle={name}
          showingCount={data.data.length}
          itemCount={data!.pageCount}
        />
      )}

      <ProgramRow>
        {data &&
          data.data.map((program: Record<string, any>, index: number) => (
            <ProgramCard program={program} key={index} />
          ))}
      </ProgramRow>
      {isLoading && <Loader />}
      <div className="flex justify-center mt-4">
        <Button size={"large"} secondary onClick={handleLoadMore}>
          LoadMore
        </Button>
      </div>
    </div>
  );
};

export default ProgramSection;
