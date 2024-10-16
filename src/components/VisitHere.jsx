import { lazy, Suspense } from "react";

// Lazy load the MdDoubleArrow icon
const MdDoubleArrow = lazy(() =>
  import("react-icons/md").then((module) => ({ default: module.MdDoubleArrow }))
);

const VisitHere = ({ title }) => {
  return (
    <div className="flex justify-start items-center">
      <span className="mr-2">{title}</span>
      <Suspense fallback={<div>Loading...</div>}>
        <MdDoubleArrow className="animate-wiggleX text-portfolio" />
      </Suspense>
    </div>
  );
};

export default VisitHere;
