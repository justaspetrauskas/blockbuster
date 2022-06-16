import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { triggerLazyLoad } from "../../../redux/slices/lazyLoadSlice";

interface BottomObserverProps {
  children?: React.ReactNode;
  maxItems: number;
  currentlyLoaded: number;
}

const BottomObserver = ({
  children = undefined,
  maxItems,
  currentlyLoaded,
}: BottomObserverProps) => {
  const dispatch = useDispatch();

  const observer = useRef<any>(null);
  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };
  const bottomObserver = useCallback(
    (node: any) => {
      // if (!observer.current) {
      //   return;
      // }
      cleanOb();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && maxItems > currentlyLoaded) {
          // cleanOb();

          // trigger loadMore
          dispatch(triggerLazyLoad(true));
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch]
  );

  return (
    <div
      className={`w-full flex justify-center py-4 absolute left-0 min-h-10"`}
      ref={bottomObserver}
    >
      {children}
    </div>
  );
};

export default BottomObserver;
