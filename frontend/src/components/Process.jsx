import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Meeting",
      desc: "We start by listening to your goals, concerns, and what you want your legacy to look like."
    },
    {
      number: "02",
      title: "Strategy Design",
      desc: "Our team builds a custom financial roadmap using advanced stress-testing and tax analysis."
    },
    {
      number: "03",
      title: "Implementation",
      desc: "We handle the heavy lifting—organizing accounts and executing trades with precision."
    },
    {
      number: "04",
      title: "Ongoing Monitoring",
      desc: "Life changes, and so should your plan. We meet regularly to adjust for new opportunities."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 font-bold tracking-widest text-sm uppercase mb-3">How We Work</h2>
          <h3 className="text-4xl font-bold text-slate-900">Your Path to Financial Clarity</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Large background number */}
              <div className="text-6xl font-black text-slate-50 absolute -top-8 -left-2 z-0">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-amber-600 inline-block"></span>
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;