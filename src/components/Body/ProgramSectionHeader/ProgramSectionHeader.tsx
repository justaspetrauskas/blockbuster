import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./style.css";

interface ProgramSectionHeaderProps {
  sectionTitle: string;
}
const ProgramSectionHeader = ({ sectionTitle }: ProgramSectionHeaderProps) => {
  return (
    <div className="section_header-wrapper">
      <h1 className="section_header-title pill">{sectionTitle}</h1>
      <div className="section_headear-decoration"></div>

      <Link className="section_header-link pill" to={`genre/${sectionTitle}`}>
        <span className="">View All</span>

        <MdOutlineArrowForwardIos />
      </Link>
    </div>
  );
};

export default ProgramSectionHeader;
