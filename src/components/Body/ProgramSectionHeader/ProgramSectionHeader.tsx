import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./style.css";
import Icon from "../../General/Icon/Icon";
import LinkElement from "../../General/LinkElement/LinkElement";

interface ProgramSectionHeaderProps {
  sectionTitle: string;
  itemCount: number;
  showingCount: number;
}
const ProgramSectionHeader = ({
  sectionTitle,
  itemCount,
  showingCount,
}: ProgramSectionHeaderProps) => {
  return (
    <div className="section_header-wrapper">
      <h1 className="section_header-title">{sectionTitle}</h1>
      <div>
        <span className="block mb-1 bg-blockbusterLightYellow px-4 rounded-lg border border-blockbusterYellow">
          In total: {itemCount}
        </span>
        <span className="block mt-1 bg-blockbusterLightYellow px-4 rounded-lg border border-blockbusterYellow">
          Showing: {showingCount}
        </span>
      </div>

      <LinkElement
        to={`genre/${sectionTitle}`}
        primary
        icon={true}
        size={"medium"}
        label={"View All"}
      />
    </div>
  );
};

export default ProgramSectionHeader;
