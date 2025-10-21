const express = require('express');
const {
  createRequest, getUserRequests, getRequestById, assignTechnician, updateStatus
} = require('../controllers/serviceController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createRequest);
router.get('/myrequests', protect, getUserRequests);
router.get('/:id', protect, getRequestById);

router.post('/assign', protect, assignTechnician); 
router.patch('/:id/status', protect, updateStatus);

module.exports = router;
