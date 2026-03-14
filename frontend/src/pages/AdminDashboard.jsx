import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', category: 'Market Update', excerpt: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      navigate('/login');
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = () => {
    // Fetch Leads
    fetch('http://localhost:5000/api/leads').then(res => res.json()).then(data => setLeads(data));
    // Fetch Posts
    fetch('http://localhost:5000/api/posts').then(res => res.json()).then(data => setPosts(data));
  };

  // --- Lead Actions ---
  const handleDeleteLead = async (id) => {
    if (window.confirm("Delete lead?")) {
      await fetch(`http://localhost:5000/api/leads/${id}`, { method: 'DELETE' });
      fetchData();
    }
  };

  // --- Post Actions ---
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    });
    if (response.ok) {
      alert("Insight Published!");
      setNewPost({ title: '', category: 'Market Update', excerpt: '' });
      fetchData();
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm("Delete this article?")) {
      await fetch(`http://localhost:5000/api/posts/${id}`, { method: 'DELETE' });
      fetchData();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 text-left">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight underline decoration-amber-500 decoration-4">Management Console</h1>
          <button onClick={handleLogout} className="bg-slate-900 text-white px-6 py-2 font-bold text-xs hover:bg-red-600 transition cursor-pointer">LOGOUT</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT: Create New Post Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-xl border-t-4 border-amber-500">
              <h2 className="text-xl font-bold mb-6 text-slate-900">Publish New Insight</h2>
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Title</label>
                  <input required value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="w-full p-2 border border-slate-200 outline-none focus:border-blue-900" placeholder="e.g. 2025 Tax Strategies" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Category</label>
                  <select value={newPost.category} onChange={(e) => setNewPost({...newPost, category: e.target.value})} className="w-full p-2 border border-slate-200">
                    <option>Market Update</option>
                    <option>Tax Strategy</option>
                    <option>Retirement Planning</option>
                    <option>Firm News</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Brief Excerpt</label>
                  <textarea required rows="4" value={newPost.excerpt} onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})} className="w-full p-2 border border-slate-200 outline-none focus:border-blue-900" placeholder="Summary of the article..."></textarea>
                </div>
                <button className="w-full bg-blue-900 text-white font-bold py-3 hover:bg-blue-800 transition cursor-pointer text-sm tracking-widest">PUBLISH ARTICLE</button>
              </form>
            </div>
          </div>

          {/* RIGHT: Lists */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Manage Leads Table */}
            <div className="bg-white shadow-xl overflow-hidden">
              <div className="bg-slate-900 p-4"><h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Current Leads ({leads.length})</h3></div>
              <table className="w-full">
                <tbody className="divide-y divide-slate-100">
                  {leads.map(lead => (
                    <tr key={lead._id} className="text-sm">
                      <td className="p-4 font-bold">{lead.name}</td>
                      <td className="p-4 text-slate-500">{lead.email}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => handleDeleteLead(lead._id)} className="text-red-500 hover:font-bold cursor-pointer">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Manage Insights Table */}
            <div className="bg-white shadow-xl overflow-hidden">
              <div className="bg-blue-950 p-4"><h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Published Insights ({posts.length})</h3></div>
              <table className="w-full">
                <tbody className="divide-y divide-slate-100">
                  {posts.map(post => (
                    <tr key={post._id} className="text-sm">
                      <td className="p-4 font-bold">{post.title}</td>
                      <td className="p-4 text-amber-600 font-bold text-[10px] uppercase">{post.category}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => handleDeletePost(post._id)} className="text-red-500 hover:font-bold cursor-pointer">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;