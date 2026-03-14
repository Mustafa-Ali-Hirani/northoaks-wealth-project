const mongoose = require('mongoose');

// This defines exactly what we save for every person who contacts us
const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now } // Automatically saves when they sent it
});

module.exports = mongoose.model('Lead', LeadSchema);