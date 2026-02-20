import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(bodyParser.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// In-memory storage for appointments (in production, use a database)
let appointments = [];

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Appointment booking endpoint
app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = req.body;
    const appointmentId = Date.now().toString();
    
    // Store appointment
    appointments.push({
      id: appointmentId,
      ...appointment,
      createdAt: new Date().toISOString(),
      status: 'pending'
    });

    // Send email to company
    await sendEmailToCompany(appointment);
    
    // Send confirmation email to client
    await sendConfirmationToClient(appointment);

    res.status(201).json({ 
      success: true, 
      message: 'Appointment booked successfully',
      appointmentId 
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to book appointment',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Send email to company function
async function sendEmailToCompany(appointment) {
  const mailOptions = {
    from: `"LoomDigitals & Designs" <${process.env.EMAIL_USER}>`,
    to: process.env.COMPANY_EMAIL,
    subject: `New Appointment Booking - ${appointment.division.toUpperCase()}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
          .header { background-color: ${appointment.division === 'digital' ? '#2A5CAA' : '#F36F27'}; color: white; padding: 20px; text-align: center; }
          .details { padding: 20px; }
          .detail-item { margin-bottom: 10px; }
          .label { font-weight: bold; color: #333; }
          .footer { background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Appointment Request</h2>
            <p>${appointment.division === 'digital' ? 'LoomDigitals' : 'LoomDesigns'} Division</p>
          </div>
          <div class="details">
            <div class="detail-item">
              <span class="label">Client Name:</span> ${appointment.name}
            </div>
            <div class="detail-item">
              <span class="label">Email:</span> ${appointment.email}
            </div>
            <div class="detail-item">
              <span class="label">Phone:</span> ${appointment.phone}
            </div>
            <div class="detail-item">
              <span class="label">Service Type:</span> ${appointment.serviceType}
            </div>
            <div class="detail-item">
              <span class="label">Appointment Date:</span> ${appointment.date}
            </div>
            <div class="detail-item">
              <span class="label">Appointment Time:</span> ${appointment.time}
            </div>
            <div class="detail-item">
              <span class="label">Division:</span> ${appointment.division === 'digital' ? 'Digital Services' : 'Design Services'}
            </div>
            <div class="detail-item">
              <span class="label">Project Details:</span><br>
              ${appointment.message || 'No additional details provided.'}
            </div>
          </div>
          <div class="footer">
            <p>This appointment was booked through the LoomDigitals & Designs website.</p>
            <p>Please contact the client to confirm the appointment.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Send confirmation to client function
async function sendConfirmationToClient(appointment) {
  const mailOptions = {
    from: `"LoomDigitals & Designs" <${process.env.EMAIL_USER}>`,
    to: appointment.email,
    subject: 'Appointment Confirmation - LoomDigitals & Designs',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: ${appointment.division === 'digital' ? '#2A5CAA' : '#F36F27'}; color: white; padding: 20px; text-align: center; }
          .details { padding: 20px; background-color: #f9f9f9; border-radius: 5px; }
          .detail-item { margin-bottom: 10px; }
          .label { font-weight: bold; color: #333; }
          .note { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; border-radius: 5px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Appointment Confirmation</h2>
            <p>Thank you for booking with LoomDigitals & Designs</p>
          </div>
          <div class="details">
            <h3>Your Appointment Details:</h3>
            <div class="detail-item">
              <span class="label">Reference ID:</span> AP${Date.now().toString().slice(-6)}
            </div>
            <div class="detail-item">
              <span class="label">Date:</span> ${appointment.date}
            </div>
            <div class="detail-item">
              <span class="label">Time:</span> ${appointment.time}
            </div>
            <div class="detail-item">
              <span class="label">Service:</span> ${appointment.serviceType}
            </div>
            <div class="detail-item">
              <span class="label">Division:</span> ${appointment.division === 'digital' ? 'Digital Services (LoomDigitals)' : 'Design Services (LoomDesigns)'}
            </div>
            <div class="note">
              <strong>Important:</strong> This is a booking request. Our team will contact you within 24 hours to confirm your appointment time and provide meeting details (video call link or location).
            </div>
            <p>If you need to reschedule or have any questions, please contact us at:</p>
            <p>Email: ${appointment.division === 'digital' ? 'digitals@loomdigitalsdesigns.com' : 'designs@loomdigitalsdesigns.com'}</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div class="footer">
            <p>LoomDigitals & Designs | 123 Design Street, Creative City</p>
            <p>This is an automated email. Please do not reply to this address.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Get all appointments (protected endpoint)
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Update appointment status
app.put('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const appointmentIndex = appointments.findIndex(a => a.id === id);
  if (appointmentIndex !== -1) {
    appointments[appointmentIndex].status = status;
    res.json({ success: true, appointment: appointments[appointmentIndex] });
  } else {
    res.status(404).json({ success: false, error: 'Appointment not found' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`CORS enabled for: ${process.env.CLIENT_URL}`);
});
