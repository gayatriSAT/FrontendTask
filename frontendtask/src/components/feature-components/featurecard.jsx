import React from "react";
import Icon from "../../common/icons";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-feature-gray bg-opacity-10 rounded-3xl border border-feature-gray border-opacity-20 p-6 text-center hover:shadow-lg transition duration-300">
      <div className="mb-4 px-40">
        <Icon name={icon} className="justify-center items-center"/>
      </div>
      <h3 className="text-2xl font-semibold mb-2 font-Montserrat">{title}</h3>
      <p className="text-base font-normal font-NunitoSans">{description}</p>
    </div>
  );
};

export default FeatureCard;
