import React, { useState, useEffect } from 'react';

const Insights = () => {
  // 1. Create a "State" to hold our articles once they arrive from the database
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. This function runs automatically when the page opens
  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen text-left">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Insights & Analysis</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Expert perspectives on wealth, taxes, and the global economy.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {loading ? (
          <p className="text-slate-500 italic">Connecting to database...</p>
        ) : articles.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((post) => (
              <div key={post._id} className="group border-b border-slate-100 pb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition">
                  {post.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-sm font-bold border-b-2 border-slate-900 pb-1 group-hover:border-blue-900 transition cursor-pointer">
                  Read Article
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded">
            <p className="text-slate-500">No insights have been published yet.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Insights;