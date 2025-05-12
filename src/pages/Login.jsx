import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24">
      <Header />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-slate-700/50">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded bg-slate-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>
            
            <div>
              <Button primary className="w-full">
                Sign In
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;