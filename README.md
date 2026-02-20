# LoomDigitals & Designs

A modern website for LoomDigitals & Designs, showcasing digital and design services with appointment booking functionality.

## Features

- **Responsive Design**: Works on all devices
- **Appointment Booking**: Easy scheduling with email confirmations
- **Service Showcase**: Display digital and design services
- **Contact Form**: Get in touch with the team
- **Email Notifications**: Automatic email confirmations for appointments

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Gmail account (for email notifications)

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/loomdesignsanddigitals.git
   cd loomdesignsanddigitals
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies (if any)
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../src
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `backend` directory with the following content:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   COMPANY_EMAIL=company@loomdigitalsdesigns.com
   ADMIN_EMAIL=admin@loomdigitalsdesigns.com
   
   # CORS Configuration
   CLIENT_URL=http://localhost:3000
   ```

4. **Enable Gmail for sending emails**
   - Go to your Google Account settings
   - Enable "Less secure app access" or generate an App Password
   - Update the `.env` file with your email and app password

## Running the Application

### Development Mode

1. **Start the development server**
   ```bash
   # In the project root directory
   npm run dev:all
   ```
   This will start both the React frontend and the backend server with hot-reload.

2. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/api/health

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## Project Structure

```
loomdesignsanddigitals/
├── backend/               # Backend server code
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── .env              # Environment variables
│   └── server.js         # Entry point
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Appointment.jsx
│   ├── App.jsx          # Main App component
│   └── index.jsx        # Entry point
└── package.json          # Project dependencies and scripts
```

## API Endpoints

- `POST /api/appointments` - Book a new appointment
- `GET /api/appointments` - Get all appointments (for admin)
- `PUT /api/appointments/:id` - Update appointment status
- `GET /api/health` - Check server status

## Email Templates

The application includes two email templates:

1. **To Company**: Notification of new appointment
2. **To Client**: Confirmation of appointment booking

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@loomdigitalsdesigns.com or open an issue in the GitHub repository.
