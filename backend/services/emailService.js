const nodemailer = require('nodemailer');
const { ApiError } = require('../middleware/errorHandler');

// Create a test account if in development
const createTestAccount = async () => {
  if (process.env.NODE_ENV === 'development') {
    const testAccount = await nodemailer.createTestAccount();
    return {
      user: testAccount.user,
      pass: testAccount.pass,
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
    };
  }
  return null;
};

// Create transporter
const createTransporter = async () => {
  if (process.env.NODE_ENV === 'development') {
    const testAccount = await createTestAccount();
    return nodemailer.createTransport({
      host: testAccount.host,
      port: testAccount.port,
      secure: testAccount.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  // Production configuration
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Email templates
const emailTemplates = {
  appointmentConfirmation: (appointment) => ({
    subject: `Appointment Confirmation - ${appointment.serviceType}`,
    text: `Dear ${appointment.name},

Thank you for booking an appointment with Loom Designs & Digitals.

Appointment Details:
- Service: ${appointment.serviceType}
- Division: ${appointment.division}
- Date: ${new Date(appointment.date).toLocaleDateString()}
- Time: ${appointment.time}

We will contact you shortly to confirm your appointment.

Best regards,
Loom Designs & Digitals Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4a6baf;">Appointment Confirmation</h2>
        <p>Dear ${appointment.name},</p>
        <p>Thank you for booking an appointment with Loom Designs & Digitals.</p>
        
        <div style="background: #f5f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Appointment Details</h3>
          <p><strong>Service:</strong> ${appointment.serviceType}</p>
          <p><strong>Division:</strong> ${appointment.division}</p>
          <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${appointment.time}</p>
        </div>

        <p>We will contact you shortly to confirm your appointment.</p>
        
        <p>Best regards,<br>Loom Designs & Digitals Team</p>
      </div>
    `,
  }),
  adminNotification: (appointment) => ({
    subject: `New Appointment: ${appointment.serviceType} - ${appointment.name}`,
    text: `New appointment request received:

Name: ${appointment.name}
Email: ${appointment.email}
Phone: ${appointment.phone}
Service: ${appointment.serviceType}
Division: ${appointment.division}
Date: ${new Date(appointment.date).toLocaleDateString()}
Time: ${appointment.time}
Message: ${appointment.message || 'No additional message'}

Please log in to the admin panel to manage this appointment.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4a6baf;">New Appointment Request</h2>
        
        <div style="background: #f5f7ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Appointment Details</h3>
          <p><strong>Name:</strong> ${appointment.name}</p>
          <p><strong>Email:</strong> ${appointment.email}</p>
          <p><strong>Phone:</strong> ${appointment.phone}</p>
          <p><strong>Service:</strong> ${appointment.serviceType}</p>
          <p><strong>Division:</strong> ${appointment.division}</p>
          <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${appointment.time}</p>
          <p><strong>Message:</strong> ${appointment.message || 'No additional message'}</p>
        </div>

        <p>Please log in to the admin panel to manage this appointment.</p>
      </div>
    `,
  }),
};

// Send email
const sendEmail = async (to, templateName, data) => {
  try {
    const template = emailTemplates[templateName];
    if (!template) {
      throw new ApiError(400, 'Invalid email template');
    }

    const transporter = await createTransporter();
    const email = template(data);

    const info = await transporter.sendMail({
      from: `"Loom Designs & Digitals" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return {
      success: true,
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new ApiError(500, 'Failed to send email');
  }
};

module.exports = {
  sendEmail,
  emailTemplates,
};
