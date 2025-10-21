const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: [String],
  phone: String,
  location: String,
  isAvailable: { type: Boolean, default: true },
  rating: { type: Number, default: 4.5 }
}, { timestamps: true });

module.exports = mongoose.model('Technician', techSchema);
