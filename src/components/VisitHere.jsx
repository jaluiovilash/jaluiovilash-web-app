import { MdDoubleArrow } from "react-icons/md";

const VisitHere = ({ title }) => {
  return (
    <div className="flex justify-start items-center">
      <span className="mr-2">{title}</span>
      <MdDoubleArrow className="animate-wiggleX text-portfolio" />
    </div>
  );
};

export default VisitHere;
