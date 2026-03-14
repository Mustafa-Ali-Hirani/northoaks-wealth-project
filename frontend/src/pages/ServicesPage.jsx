import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-left">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Professional guidance for every stage of your financial life.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid gap-12">
        <div className="bg-white p-12 border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-20 h-20 bg-blue-900 flex-shrink-0"></div>
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Holistic Wealth Management</h2>
                <p className="text-slate-600 leading-relaxed">We don't just look at your stocks. We look at your estate plan, your tax liabilities, and your legacy goals to create a unified strategy.</p>
            </div>
        </div>

        <div className="bg-white p-12 border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-20 h-20 bg-amber-600 flex-shrink-0"></div>
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Tax-Efficient Investing</h2>
                <p className="text-slate-600 leading-relaxed">It's not about what you make, it's about what you keep. Our strategies prioritize long-term growth with a focus on minimizing the tax drag on your portfolio.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;