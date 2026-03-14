import React from 'react';

const Team = () => {
  const members = [
    {
      name: "Marcus Sterling",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      bio: "20+ years of experience in multi-generational wealth transfer and tax strategy."
    },
    {
      name: "Sarah Chen, CFP®",
      role: "Senior Financial Planner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Expertise in retirement distribution and women-led financial empowerment."
    },
    {
      name: "David Ross",
      role: "Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Former institutional portfolio manager specializing in risk-adjusted growth."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-3">Expertise You Can Trust</h2>
          <h3 className="text-4xl font-bold text-slate-900">Meet Our Senior Partners</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {members.map((person, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Hover Effect */}
              <div className="overflow-hidden mb-6 rounded-sm">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
              <p className="text-amber-600 font-semibold text-sm mb-4 uppercase tracking-tighter">{person.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-200 pl-4">
                {person.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-900 hover:border-blue-900 transition-colors">
            View Entire Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;