import React, { useState } from 'react';

const AwardsScroller = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedButton(sectionId); // Update the selected button
  };

  return (
    <div className="flex flex-col overflow-hidden text-ellipsis whitespace-nowrap text-xs">
      <button
        onClick={() => handleScrollToSection('1')}
        className={`text-left ${selectedButton === '1' ? 'text-white' : 'text-xs text-gray-300'}`}
      >
        🏆 1st Place
      </button>
      <button
        onClick={() => handleScrollToSection('2')}
        className={`text-left ${selectedButton === '2' ? 'text-white' : 'text-xs text-gray-300'}`}
      >
        🥈 2nd Place
      </button>
      <button
        onClick={() => handleScrollToSection('3')}
        className={`truncate text-left ${selectedButton === '3' ? 'text-white' : 'text-xs text-gray-300'}`}
      >
        🏆 3rd Place
      </button>
      <button
        onClick={() => handleScrollToSection('S')}
        className={`truncate text-left ${selectedButton === 'S' ? 'text-white' : 'text-xs text-gray-300'}`}
      >
        🌟 Special Awards
      </button>
    </div>
  );
};

export default AwardsScroller;
