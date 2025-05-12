import React from 'react';
import Button from './Button';
import NewsCard from './NewsCard';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full filter blur-[120px]"></div>
      </div>
      
      {/* Network graph lines - decorative */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-no-repeat bg-cover"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text Content */}
          <div className="w-full md:w-1/2 pt-8 md:pt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              Stay Ahead in <span className="text-blue-400">Crypto</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              with AI-Powered Insights
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              Get unbiased, personalized news on how global events impact your
              favorite cryptocurrencies.
            </p>
            <Button primary onClick={() => console.log('Get Started clicked')}>
              Get Started
            </Button>
          </div>
          
          {/* Right side - News Card */}
          <div className="w-full md:w-5/12 mt-12 md:mt-16">
            <NewsCard
              image="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Another Unexpected Loss for Tesla Company"
              description="Tesla's shares fell 30% this year, attributed in part to protests and vandalism targeting its dealerships."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;