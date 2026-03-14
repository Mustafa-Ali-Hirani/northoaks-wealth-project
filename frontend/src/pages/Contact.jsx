import React, { useState } from 'react';

const Contact = () => {
  // 1. State to remember what is typed in the boxes
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Wealth Management Inquiry',
    message: ''
  });

  // 2. The function that sends the data to your Backend Server
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Thank you ${formData.name}! Your request has been saved securely.`);
        setFormData({ name: '', email: '', subject: 'Wealth Management Inquiry', message: '' });
      } else {
        alert("The server is running, but it couldn't save the data.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Could not connect to the server. Make sure your BACKEND is running on Port 5000!");
    }
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h1 className="text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Ready to take the next step? Whether you have a specific question or 
            want to schedule an introductory meeting, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Info */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Office</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-amber-600 uppercase tracking-widest text-sm mb-2">Location</h4>
                <p className="text-slate-600 text-lg">123 Financial District, Suite 500<br />New York, NY 10005</p>
              </div>
              <div>
                <h4 className="font-bold text-amber-600 uppercase tracking-widest text-sm mb-2">Phone</h4>
                <p className="text-slate-600 text-lg">(555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-slate-50 p-10 border border-slate-100 shadow-sm text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-900 outline-none" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-900 outline-none" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-900 outline-none"
                >
                  <option>Wealth Management Inquiry</option>
                  <option>Retirement Planning</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  required
                  rows="5" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-900 outline-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 hover:bg-blue-800 transition shadow-lg cursor-pointer">
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
