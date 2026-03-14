import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Stay Informed on Wealth Strategies</h3>
        <p className="text-slate-300 mb-10 leading-relaxed">
          Subscribe to our monthly "Market Insights" newsletter. We break down complex 
          financial shifts into actionable strategies for your family and business.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-4 bg-white text-slate-900 rounded-sm w-full sm:w-80 outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-sm font-bold transition-all uppercase tracking-widest text-xs cursor-pointer">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;