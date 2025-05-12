import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;