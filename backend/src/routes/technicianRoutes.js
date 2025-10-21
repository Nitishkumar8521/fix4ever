const express = require('express');
const { listTechnicians, createTech, updateAvailability } = require('../controllers/technicianController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', listTechnicians);
router.post('/', protect, createTech); 
router.patch('/:id/availability', protect, updateAvailability);

module.exports = router;
