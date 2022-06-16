import React, { useCallback, useRef } from "react";
import {
  AiOutlineCopyright,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { useDispatch } from "react-redux";

import ContentWrapper from "../../components/General/ContentWrapper/ContentWrapper";
import { triggerLazyLoad } from "../../redux/slices/lazyLoadSlice";
import "./style.css";

const FooterComponent = () => {
  // const dispatch = useDispatch();

  // const observer = useRef<any>(null);
  // const cleanOb = () => {
  //   if (observer.current) {
  //     observer.current.disconnect();
  //   }
  // };
  // const bottomObserver = useCallback(
  //   (node: any) => {
  //     // if (!observer.current) {
  //     //   return;
  //     // }
  //     cleanOb();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         // setRangeEnd((prevRangeEnd) => prevRangeEnd + 5);
  //         // cleanOb();

  //         // trigger loadMore
  //         dispatch(triggerLazyLoad(true));
  //         console.log("footer is visible");
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [dispatch]
  // );

  return (
    <div className="footer-wrapper">
      <ContentWrapper size="screen">
        <div className="footer-info">
          <div className="flex flex-row flex-nowrap items-center justify-center">
            <span>Justas Petrauskas </span>
            <span>
              <AiOutlineCopyright />
            </span>
          </div>
          <div className="footer-info--social-links">
            <a href="https://github.com/justaspetrauskas">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/petrauskasjustas/">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FooterComponent;
