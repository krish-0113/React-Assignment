import React from 'react';

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/20 transition-all duration-300 border border-slate-700/50 h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-400 text-sm">5 hours ago</span>
          <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;