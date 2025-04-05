import React from "react";
import TechCard from "./technologyCard";

const industries = [
    {
        icon : 'customer-service',
        title : "Customer Service and Support",
    },
    {
        icon : 'banking',
        title : "Banking and Finance",
    },
    {
        icon : 'travel' ,
        title : "Travel and Hospitality",
    },
    {
        icon : 'education',
        title : "Education",
    },
    {
        icon : 'retail',
        title : "Retail.E-commerce",
    },
    {
        icon : 'real-estate',
        title : "Real-Esate",
    },
    {
        icon : 'media',
        title : 'Media Entertainment',
    },
    {
        icon : 'human-resource',
        title : 'Human Resources',
    },
    {
        icon : 'automotive',
        title : 'Automotive',
    },
    {
        icon : 'energy',
        title : 'Energy and Utilities',
    },
    {
        icon  :'gov-public',
        title : 'Government and Publuc Services',
    },
    {
        icon : 'healthcare',
        title : 'Healthcare',
    },
    {
        icon : 'tele',
        title : 'Telecommunications',
    }
];

const IndustySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {industries.map((industry, index) => (
        <TechCard
            key = {index}
            icon = {industry.icon}
            title = {industry.title}
            />
      ))}
    </div>
  );
};

export default IndustySection;
