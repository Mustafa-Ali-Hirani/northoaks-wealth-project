import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Header Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h1 className="text-5xl font-bold mb-6">Our Firm</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Founded on the principles of transparency, integrity, and independent 
            advice, we exist to help families protect what they've built.
          </p>
        </div>
      </section>

      {/* 2. Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center text-left">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Fiduciary Standard</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Unlike many traditional banks, we operate under a strict fiduciary 
              standard. This means we are legally and ethically required to put 
              your interests before our own.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We do not sell products. We do not receive commissions. We provide 
              objective advice for a transparent, flat fee.
            </p>
          </div>
          
          {/* Quote Box */}
          <div className="bg-slate-50 p-12 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-slate-900 mb-4 italic leading-relaxed">
              "Your success is our only metric. By removing the conflict of interest 
              found in commission-based models, we ensure our goals are always 
              perfectly aligned with yours."
            </h3>
            <p className="text-slate-500 text-sm italic font-semibold uppercase tracking-widest">
              — The NorthOaks Founding Principle
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;