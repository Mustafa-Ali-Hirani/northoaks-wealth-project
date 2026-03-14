import React from 'react';

const WhoWeServe = () => {
  const clients = [
    {
      type: "Business Owners",
      desc: "Helping entrepreneurs integrate their business success with their personal financial legacy."
    },
    {
      type: "Corporate Executives",
      desc: "Navigating complex stock options, deferred compensation, and high-income tax strategies."
    },
    {
      type: "Families & Individuals",
      desc: "Creating multi-generational wealth plans that prioritize your family's unique values."
    },
    {
      type: "Retirees",
      desc: "Transitioning from asset growth to sustainable income so you can enjoy your life's work."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-3">Our Clients</h2>
            <h3 className="text-4xl font-bold">Specialized advice for unique financial journeys.</h3>
          </div>
          <p className="text-slate-400 max-w-sm">
            We work best with clients who value long-term strategy over short-term trends.
          </p>
        </div>

        {/* The Grid - 2 columns on tablet, 4 on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {clients.map((item, index) => (
            <div key={index} className="bg-slate-800 p-10 hover:bg-slate-700 transition-colors border border-slate-700">
              <h4 className="text-xl font-bold mb-4">{item.type}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;