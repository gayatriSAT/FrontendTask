import React from "react";

const FreeTrialCard = ({ title, description }) => {
  return (
    <div className="absolute z-50 bg-feature-gray bg-opacity-5 rounded-3xl border border-feature-gray border-opacity-20 p-6 text-center hover:shadow-lg transition duration-300">
      <h3 className="text-2xl font-semibold mb-2 font-Montserrat">{title}</h3>
      <p className="text-base font-normal font-NunitoSans">{description}</p>
    </div>
  );
};

export default FreeTrialCard;
