const express = require('express');
const router = express.Router();
const { 
  getAppointments, 
  getAppointment, 
  createAppointment, 
  updateAppointmentStatus, 
  deleteAppointment 
} = require('../controllers/appointmentController');
const { 
  appointmentValidationRules, 
  statusValidationRules, 
  validate,
  DIGITAL_SERVICES,
  DESIGN_SERVICES,
  ALL_SERVICES
} = require('../middleware/validation');

// Get all appointments
router.get('/', getAppointments);

// Get single appointment
router.get('/:id', getAppointment);

// Create new appointment
router.post(
  '/', 
  appointmentValidationRules, 
  validate, 
  createAppointment
);

// Update appointment status
router.patch(
  '/:id/status', 
  statusValidationRules, 
  validate,
  updateAppointmentStatus
);

// Delete appointment
router.delete('/:id', deleteAppointment);

// Get available services
router.get('/services/types', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      digital: DIGITAL_SERVICES,
      design: DESIGN_SERVICES,
      all: ALL_SERVICES
    }
  });
});

module.exports = router;
