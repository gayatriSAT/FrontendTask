import React from "react";
import FeatureCard from "./featurecard";

const features = [
  {
    icon : 'nlp',
    title: "Natural Language Processing (NLP)",
    description: "Understands and processes human language with high accuracy and nuance.",
  },
  {
    icon : 'contextual',
    title: "Contextual Understanding",
    description: "Understands content and intent to provide relevant and accurate responses.",
  },
  {
    icon : 'multi-support',
    title: "Multilingual Support",
    description: "Communicates seamlessly in multiple languages for diverse user interactions.",
  },
  {
    icon : 'real-time',
    title: "Real-time Processing",
    description: "Delivers instant responses, enhancing user experience and engagement.",
  },
  {
    icon : 'personalisation',
    title: "Personalization",
    description: "Adapts responses based on user preferences and past interactions for relevance.",
  },
  {
    icon : 'conversational',
    title: "Conversational AI",
    description: "Engages in natural, human-like conversations for intuitive interactions.",
  },
];

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
