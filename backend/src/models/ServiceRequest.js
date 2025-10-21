const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  title: { type: String, required: true },
  description: String,
  category: String,
  estimatedDuration: String, // from AI helper
  status: { type: String, enum: ['requested','accepted','in_progress','completed','cancelled'], default: 'requested' },
  technician: { type: mongoose.Schema.Types.ObjectId, ref: 'Technician' },
  location: String
}, { timestamps: true });

module.exports = mongoose.model('ServiceRequest', serviceSchema);
