import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceList = [
    {
      title: "Wealth Management",
      desc: "Customized investment strategies designed to grow and protect your assets."
    },
    {
      title: "Retirement Planning",
      desc: "Comprehensive roadmaps to ensure you can enjoy your future with confidence."
    },
    {
      title: "Tax Optimization",
      desc: "Strategic planning to help minimize tax burdens and maximize efficiency."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Expertise</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {serviceList.map((service, index) => (
            <Link to="/services" key={index} className="p-8 border border-slate-100 bg-slate-50 hover:shadow-xl transition-all group block">
              <div className="w-12 h-12 bg-blue-900 mb-6 group-hover:bg-amber-600 transition-colors"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
              <span className="mt-6 inline-block font-bold text-xs tracking-widest text-blue-900 uppercase border-b-2 border-blue-900 pb-1">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;