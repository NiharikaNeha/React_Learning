import React from 'react';
import image from '../assets/webui.png';

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full px-4 py-6">
      <img
        src={image}
        alt="Hero"
        className="w-full max-w-[1000px] h-auto rounded-2xl object-cover shadow-md"
      />
    </div>
  );
};

export default Hero;
