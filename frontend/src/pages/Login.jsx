import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // BABY STEP SECURITY: 
    // We will use a simple password for now. 
    // In the final version, we'll move this to the database.
    if (password === 'admin123') {
      // This saves a "flag" in the browser so it remembers you are logged in
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/admin-secret-dashboard');
    } else {
      alert("Invalid Security Key");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-6">
      <div className="bg-white p-10 rounded shadow-2xl w-full max-w-md text-left">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 bg-blue-900"></div>
          <span className="font-bold tracking-tighter text-slate-900 uppercase">NorthOaks Admin</span>
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Internal Access</h2>
        <p className="text-slate-500 text-sm mb-8">Please enter your security key to continue.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Security Key</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 outline-none focus:border-blue-900 transition"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-blue-900 text-white font-bold py-4 hover:bg-slate-800 transition cursor-pointer">
            UNLOCK DASHBOARD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;