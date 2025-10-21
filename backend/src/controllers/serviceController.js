const ServiceRequest = require('../models/ServiceRequest');
const { suggestCategoryAndDuration } = require('../utils/aiHelper');

exports.createRequest = async (req, res, next) => {
  try {
    const { title, description, location } = req.body;
    const userId = req.user.id;
    const { category, estimatedDuration } = suggestCategoryAndDuration(title, description);

    const reqDoc = await ServiceRequest.create({
      user: userId, title, description, location, category, estimatedDuration
    });

    res.status(201).json(reqDoc);
  } catch (err) { next(err); }
};

exports.getUserRequests = async (req, res, next) => {
  try {
    const reqs = await ServiceRequest.find({ user: req.user.id }).populate('technician').sort({ createdAt: -1 });
    res.json(reqs);
  } catch (err) { next(err); }
};

exports.getRequestById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reqDoc = await ServiceRequest.findById(id).populate('technician');
    if (!reqDoc) return res.status(404).json({ message: 'Not found' });
    res.json(reqDoc);
  } catch (err) { next(err); }
};

// Admin/technician flow: assign tech, update status
exports.assignTechnician = async (req, res, next) => {
  try {
    const { serviceId, technicianId } = req.body;
    const sr = await ServiceRequest.findById(serviceId);
    if (!sr) return res.status(404).json({ message: 'Service Request not found' });

    sr.technician = technicianId;
    sr.status = 'accepted';
    await sr.save();
    res.json(sr);
  } catch (err) { next(err); }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const sr = await ServiceRequest.findById(id);
    if (!sr) return res.status(404).json({ message: 'Service Request not found' });
    sr.status = status;
    await sr.save();
    res.json(sr);
  } catch (err) { next(err); }
};
