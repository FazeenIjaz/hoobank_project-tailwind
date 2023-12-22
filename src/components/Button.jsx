import React from 'react';
import { animations } from '../style';

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary ourline-none ${styles} rounded-[10px] hover:${animations.scale} hover:scale-[1.15] transition ease-in-out duration-200`}
    >
      Get Started
    </button>
  );
};

export default Button;