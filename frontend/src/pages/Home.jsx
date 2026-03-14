import React from 'react';
import { Link } from 'react-router-dom'; // Added this
import Services from '../components/Services';
import WhoWeServe from '../components/WhoWeServe';
import Process from '../components/Process';
import Team from '../components/Team';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-black leading-tight tracking-tight text-slate-900">
          Sophisticated Wealth Management <br />
          <span className="text-blue-900 text-5xl font-extrabold italic">for Modern Families</span>
        </h1>
        <p className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We help you navigate complex financial transitions with clarity, 
          integrity, and independent advice tailored to your legacy.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          {/* Button 1: Goes to Services Page */}
          <Link to="/services" className="bg-blue-900 text-white px-8 py-4 rounded font-bold hover:bg-blue-800 shadow-lg cursor-pointer transition-all">
            View Our Services
          </Link>
          {/* Button 2: For now, it will scroll to the Team section below */}
          <button 
            onClick={() => document.getElementById('team-section').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-slate-200 text-slate-900 px-8 py-4 rounded font-bold hover:bg-white transition-all cursor-pointer"
          >
            Meet the Team
          </button>
        </div>
      </main>

      <Services />
      <WhoWeServe />
      <Process />
      
      {/* We add an ID here so the button above can find it */}
      <div id="team-section">
        <Team />
      </div>
      
      <CTA />
    </>
  );
};

export default Home;