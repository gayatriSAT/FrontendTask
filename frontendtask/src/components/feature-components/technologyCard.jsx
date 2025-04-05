import React from "react";
import Icon from "../../common/icons";

const TechCard = ({ icon, title }) => {
  return (
    <div className="bg-white max-h-36 rounded-3xl border-b-2 border-dark-pink border-opacity-20 p-6 text-center hover:shadow-lg transition duration-300">
      <div className="mb-4 px-20">
        <Icon name={icon} />
      </div>
      <h3 className="text-lg font-medium mb-2 font-Montserrat">{title}</h3>
    </div>
  );
};

export default TechCard;
