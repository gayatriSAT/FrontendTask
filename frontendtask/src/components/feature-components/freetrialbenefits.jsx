import React from "react";
import FeatureCard from "./featurecard";

const trials = [
  {
    title: '24/7 Availability',
    description: "Understands and processes human language with high accuracy and nuance.",
  },
  {
    title: "Improved Customer Experience",
    description: "Understands content and intent to provide relevant and accurate responses.",
  },
  {
    title: "Cost Efficiency",
    description: "Communicates seamlessly in multiple languages for diverse user interactions.",
  },
  {
    title: "Scalability",
    description: "Delivers instant responses, enhancing user experience and engagement.",
  },
  {
    title: "Hands-Free Operation",
    description: "Adapts responses based on user preferences and past interactions for relevance.",
  },
  {
    title: "Increased Efficiency",
    description: "Engages in natural, human-like conversations for intuitive interactions.",
  },
];

const FreeTrialBenefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {trials.map((trial, index) => (
        <FeatureCard
          key={index}
          title={trial.title}
          description={trial.description}
        />
      ))}
    </div>
  );
};

export default FreeTrialBenefits;
