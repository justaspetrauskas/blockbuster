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
      <div className="px-2 self-center">
        <h1 className="section_header-title">{sectionTitle}</h1>
        <span className="inline-block  text-left text-sm">
          In total: {itemCount}
        </span>
        <span className="inline-block text-left text-sm ml-2">
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
