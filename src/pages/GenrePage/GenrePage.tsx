import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProgramCard from "../../components/Body/ProgramCard/ProgramCard";
import ProgramHero from "../../components/Body/ProgramHero/ProgramHero";
import BottomObserver from "../../components/General/BottomObserver/BottomObserver";
import Button from "../../components/General/Button/Button";
import ContentWrapper from "../../components/General/ContentWrapper/ContentWrapper";
import GridWrapper from "../../components/General/GridWrapper/GridWrapper";
import Loader from "../../components/General/Loader/Loader";
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

  const [rangeEnd, setRangeEnd] = useState(28);
  const { data, error, isLoading, isFetching } = useGetMoviesByGenreQuery({
    range_end: rangeEnd,
    genre: genre!,
  });

  useEffect(() => {
    if (lazyLoadStatus) {
      setRangeEnd(rangeEnd + 14);
      dispatch(triggerLazyLoad(false));
    }
  }, [lazyLoadStatus]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [isFetching, data]);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

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
          <Suspense fallback="...loading">
            <LazyGridWrapper>
              {data?.data.map((program: Record<string, any>) => {
                return <ProgramCard program={program} key={program.id} />;
              })}
            </LazyGridWrapper>
          </Suspense>
          {!isLoading && (
            <div className=" my-14 h-full w-full">
              <Loader />
            </div>
          )}
        </div>
        {rangeEnd >= data?.pageCount && (
          <div className="flex justify-center">
            <Button secondary size={"large"} onClick={goToTop}>
              Go To Top
            </Button>
          </div>
        )}

        {data && (
          <BottomObserver
            maxItems={data.pageCount}
            currentlyLoaded={rangeEnd}
          />
        )}
      </ContentWrapper>
    </section>
  );
};

export default GenrePage;
