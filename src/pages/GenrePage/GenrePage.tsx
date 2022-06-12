import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProgramCard from "../../components/Body/ProgramCard/ProgramCard";
import ProgramHero from "../../components/Body/ProgramHero/ProgramHero";
import ContentWrapper from "../../components/General/ContentWrapper/ContentWrapper";
import GridWrapper from "../../components/General/GridWrapper/GridWrapper";
import { useGetMoviesByGenreQuery } from "../../redux/services/programs";
import { triggerLazyLoad } from "../../redux/slices/lazyLoadSlice";
import { selectLazyLoad } from "../../redux/store/store";

const LazyGridWrapper = lazy(
  () => import("../../components/General/GridWrapper/GridWrapper")
);

const GenrePage = () => {
  let { genre } = useParams();
  const lazyLoadStatus = useSelector(selectLazyLoad);
  const dispatch = useDispatch();

  const [rangeEnd, setRangeEnd] = useState(20);
  const { data, error, isLoading, isFetching } = useGetMoviesByGenreQuery({
    range_end: rangeEnd,
    genre: genre!,
  });

  useEffect(() => {
    if (lazyLoadStatus) {
      setRangeEnd(rangeEnd + 5);
      dispatch(triggerLazyLoad(false));
    }
  }, [lazyLoadStatus]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [isFetching, data]);

  return (
    <section id={`genre--${genre}`} className="md:pt-14">
      <ProgramHero gradient={false} primary={false}>
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-7xl font-bold font-Alata uppercase text-blockbusterRose">
            {genre} movies
          </h1>
        </div>
      </ProgramHero>

      <ContentWrapper size="screen">
        <div className="pb-24">
          {/* {isLoading && (
            <div className="h-5 my-14 w-full">
              <h1>loading</h1>
            </div>
          )} */}
          <Suspense fallback="...loading">
            <LazyGridWrapper>
              {data?.data.map((program: Record<string, any>, index: number) => {
                return <ProgramCard program={program} key={program.id} />;
              })}
            </LazyGridWrapper>
          </Suspense>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default GenrePage;
