import React from 'react';

const Button = ({ children, primary, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${primary 
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600' 
          : 'bg-blue-500 hover:bg-blue-600 text-white'}
        px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;