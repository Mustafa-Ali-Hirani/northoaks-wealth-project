import React, { useState, useEffect } from 'react';

const Insights = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // UPDATED TO LIVE URL
    fetch('https://northoaks-api.onrender.com/api/posts')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white min-h-screen text-left">
      <section className="bg-slate-900 py-24 text-white"><div className="max-w-7xl mx-auto px-6"><h1 className="text-5xl font-bold mb-6">Insights & Analysis</h1></div></section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {articles.length > 0 ? (
            articles.map((post) => (
              <div key={post._id} className="group border-b border-slate-100 pb-12">
                <span className="text-xs font-bold text-amber-600 uppercase">{post.category}</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{post.title}</h3>
                <p className="text-slate-600 mb-6">{post.excerpt}</p>
                <button className="text-sm font-bold border-b-2 border-slate-900">Read Article</button>
              </div>
            ))
          ) : (<p className="text-slate-500 italic">Connecting to live feed...</p>)}
        </div>
      </section>
    </div>
  );
};
export default Insights;