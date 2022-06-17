// elements
import { Link } from "react-router-dom";
import ContentWrapper from "../General/ContentWrapper/ContentWrapper";
import Sidebar from "./Sidebar/Sidebar";
import { BsBookmarkHeart } from "react-icons/bs";

// redux
import { changeMenuState, closeMenu } from "../../redux/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarState } from "../../redux/store/store";

// style
import "./style.css";
import Hamburger from "../General/Hamburger/Hamburger";

const HeaderComponent = () => {
  const sidebarVisible = useSelector(selectSidebarState);
  const dispatch = useDispatch();

  const handleOpenMobileMenu = () => {
    dispatch(closeMenu("submenu"));
    setTimeout(() => {
      dispatch(changeMenuState("sidebar"));
    }, 400);
  };

  return (
    <header className="header-wrapper">
      <ContentWrapper size="screen">
        <div className="flex flex-row items-center justify-between">
          <div className="header-brand">
            <Link to={"/"}>Blockbuster</Link>
          </div>
          <Hamburger
            isOpen={sidebarVisible}
            clickHandler={handleOpenMobileMenu}
          />
        </div>
      </ContentWrapper>
      <Sidebar />
    </header>
  );
};

export default HeaderComponent;
