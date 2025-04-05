import React from "react";

const Section = ({ sectionNumber}) => {
  return (
      <div className="absolute top-36 left-10 bg-white px-4 py-1 rounded-full shadow text-sm font-semibold">
        <span className="text-black">Section :</span>{" "}
        <span className="text-pink-600">{sectionNumber}</span>
      </div>
  );
};

export default Section;
