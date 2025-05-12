import React, { useState, useEffect } from 'react';
import { CircleDollarSign, Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Currency', path: '/currency' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900 to-blue-900/90 shadow-md backdrop-blur-sm' 
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <CircleDollarSign size={30} className="text-blue-400" />
            <div className="ml-2">
              <span className="font-bold text-xl text-white">Crypto</span>
              <span className="font-bold text-xl text-blue-400">Digest</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => console.log('Login clicked')}
              className="px-5 py-2"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-5 pb-3 bg-gradient-to-r from-slate-900 to-blue-900/90 backdrop-blur-sm rounded-lg mt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-200 hover:text-blue-400 px-4 py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => {
                    console.log('Login clicked');
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;