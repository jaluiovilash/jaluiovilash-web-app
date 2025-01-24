import { MdDoubleArrow } from "react-icons/md";

const VisitHere = ({ title, className }) => {
  return (
    <div className={`flex justify-start items-center ${className}`}>
      <span className="mr-2">{title}</span>
      <MdDoubleArrow className="animate-wiggleX text-portfolio" />
    </div>
  );
};

export default VisitHere;
