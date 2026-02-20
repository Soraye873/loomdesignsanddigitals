const { body, validationResult } = require('express-validator');
const { ApiError } = require('./errorHandler');

// Service types for each division
const DIGITAL_SERVICES = [
  'Social Media Management',
  'Web Development',
  'Graphic Design'
];

const DESIGN_SERVICES = [
  'Architectural Design',
  'Interior Design',
  'Construction Works'
];

const ALL_SERVICES = [...DIGITAL_SERVICES, ...DESIGN_SERVICES];

// Validation rules for creating/updating appointments
const appointmentValidationRules = [
  // Name validation
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  
  // Email validation (basic)
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address'),
  
  // Phone validation (basic)
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required'),
  
  // Service type validation
  body('serviceType')
    .trim()
    .notEmpty().withMessage('Service type is required')
    .isIn(ALL_SERVICES).withMessage('Please select a valid service type'),
  
  // Division validation
  body('division')
    .trim()
    .notEmpty().withMessage('Division is required')
    .isIn(['digital', 'design']).withMessage('Invalid division'),
  
  // Date validation
  body('date')
    .notEmpty().withMessage('Date is required'),
  
  // Time validation
  body('time')
    .trim()
    .notEmpty().withMessage('Time is required'),
  
  // Optional message validation
  body('message')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters')
];

// Status update validation
const statusValidationRules = [
  body('status')
    .trim()
    .notEmpty().withMessage('Status is required')
    .isIn(['pending', 'confirmed', 'cancelled']).withMessage('Invalid status')
];

// Middleware to validate request
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ 
    field: err.param, 
    message: err.msg 
  }));
  
  throw new ApiError(422, 'Validation failed', extractedErrors);
};

module.exports = {
  appointmentValidationRules,
  statusValidationRules,
  validate,
  DIGITAL_SERVICES,
  DESIGN_SERVICES,
  ALL_SERVICES
};
