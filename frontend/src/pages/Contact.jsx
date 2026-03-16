import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Wealth Management Inquiry', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // UPDATED TO LIVE URL
      const response = await fetch('https://northoaks-api.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Success! Your message has been sent to our live database.`);
        setFormData({ name: '', email: '', subject: 'Wealth Management Inquiry', message: '' });
      }
    } catch (error) {
      alert("Error connecting to live server.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 py-24 text-white"><div className="max-w-7xl mx-auto px-6 text-left"><h1 className="text-5xl font-bold mb-6">Connect With Us</h1></div></section>
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-left"><h2 className="text-3xl font-bold text-slate-900 mb-8">Our Office</h2><p className="text-slate-600 text-lg">123 Financial District, Suite 500<br />New York, NY 10005</p></div>
          <div className="bg-slate-50 p-10 border border-slate-100 shadow-sm text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-slate-200" placeholder="Full Name" />
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-slate-200" placeholder="Email Address" />
              </div>
              <textarea required rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-slate-200" placeholder="Message"></textarea>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 hover:bg-blue-800 cursor-pointer shadow-lg">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;