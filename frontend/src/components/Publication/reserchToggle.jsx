import React, { useState } from 'react';
import { FaRegLightbulb, FaMicroscope } from 'react-icons/fa';

const ResearchToggle = ({researchSection , setResearchSection}) => {

  return (
    <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={researchSection}
        onChange={() => setResearchSection(!researchSection)}
        className="sr-only"
      />
      {/* General Section */}
      <span
        className={`label flex items-center text-4xl rounded-2xl p-4 font-medium transition-colors duration-200 ${
          !researchSection ? 'text-white' : 'text-gray-400'
        }`}
      >
        <FaRegLightbulb className="mr-2" />
        General
      </span>
      {/* Toggle Slider */}
      <span
        className={`slider mx-4 flex h-12 w-[100px] items-center rounded-full p-1 duration-300 transform-gpu ${
          researchSection
            ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
            : 'bg-gray-300'
        }`}
      >
        <span
          className={`dot h-10 w-10 rounded-full bg-white shadow-lg transition-transform duration-300 transform ${
            researchSection ? 'translate-x-[52px]' : ''
          }`}
        ></span>
      </span>
      {/* Research Section */}
      <span
        className={`label flex items-center text-4xl font-medium transition-colors duration-200 ${
          researchSection ? 'text-white' : 'text-gray-400'
        }`}
      >
        <FaMicroscope className="mr-2" />
        Research
      </span>
      {/* Focus Effect on Research */}
      {researchSection && (
        <div className="absolute -right-4 top-0 h-16 w-[120px]  opacity-40"></div>
      )}
    </label>
  );
};

export default ResearchToggle;
