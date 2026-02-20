const { v4: uuidv4 } = require('uuid');
const { ApiError } = require('../middleware/errorHandler');

// In-memory storage (replace with database in production)
let appointments = [];

// Get all appointments
const getAppointments = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
};

// Get single appointment
const getAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const appointment = appointments.find(apt => apt.id === id);
    if (!appointment) {
      throw new ApiError(404, 'Appointment not found');
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

// Create new appointment
const createAppointment = async (req, res, next) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      serviceType, 
      division, 
      date, 
      time, 
      message = '' 
    } = req.body;

    // Basic validation
    if (!name || !email || !phone || !serviceType || !division || !date || !time) {
      throw new ApiError(400, 'Please provide all required fields');
    }

    const newAppointment = {
      id: uuidv4(),
      name,
      email,
      phone,
      serviceType,
      division,
      date,
      time,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    appointments.push(newAppointment);

    res.status(201).json({
      success: true,
      data: newAppointment
    });
  } catch (error) {
    next(error);
  }
};

// Update appointment status
const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointmentIndex = appointments.findIndex(apt => apt.id === id);
    if (appointmentIndex === -1) {
      throw new ApiError(404, 'Appointment not found');
    }

    appointments[appointmentIndex] = {
      ...appointments[appointmentIndex],
      status,
      updatedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      data: appointments[appointmentIndex]
    });
  } catch (error) {
    next(error);
  }
};

// Delete appointment
const deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const appointmentIndex = appointments.findIndex(apt => apt.id === id);
    if (appointmentIndex === -1) {
      throw new ApiError(404, 'Appointment not found');
    }

    appointments = appointments.filter(apt => apt.id !== id);

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointmentStatus,
  deleteAppointment
};
