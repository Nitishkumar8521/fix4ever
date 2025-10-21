const Technician = require('../models/Technician');

exports.listTechnicians = async (req, res, next) => {
  try {
    const techs = await Technician.find().sort({ rating: -1 });
    res.json(techs);
  } catch (err) { next(err); }
};

exports.createTech = async (req, res, next) => {
  try {
    const tech = await Technician.create(req.body);
    res.status(201).json(tech);
  } catch (err) { next(err); }
};

exports.updateAvailability = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isAvailable } = req.body;
    const t = await Technician.findByIdAndUpdate(id, { isAvailable }, { new: true });
    res.json(t);
  } catch (err) { next(err); }
};
