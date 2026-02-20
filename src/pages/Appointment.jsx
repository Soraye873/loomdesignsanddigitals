// pages/Appointment.js - COMPLETE WITH ALL OPTIONS
import React, { useState, useRef } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'consultation',
    division: 'digital',
    date: '',
    time: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [bookingMethod, setBookingMethod] = useState('email'); // 'email', 'phone', 'whatsapp'
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
        throw new Error('Please fill in all required fields');
      }

      // Handle based on selected booking method
      if (bookingMethod === 'email') {
        await sendViaMailTo();
        setSubmitStatus('success');
        alert('✓ Email client opened! Please review and send the email to complete your booking.');
      } else if (bookingMethod === 'phone') {
        await bookViaPhone();
        setSubmitStatus('phone');
      } else if (bookingMethod === 'whatsapp') {
        await bookViaWhatsApp();
        setSubmitStatus('whatsapp');
      }
      
      // Save to localStorage (optional backup)
      saveToLocalStorage();
      
      // Reset form after successful booking
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'consultation',
        division: 'digital',
        date: '',
        time: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Method 1: Open Email Client
  const sendViaMailTo = () => {
    const divisionEmail = formData.division === 'digital' 
      ? 'digitals@loomdigitalsdesigns.com'
      : 'designs@loomdigitalsdesigns.com';
    
    const subject = `📅 Appointment Request: ${formData.name} - ${formData.serviceType}`;
    
    const body = `
✨ NEW APPOINTMENT REQUEST ✨

👤 CLIENT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

📋 APPOINTMENT DETAILS:
• Service Type: ${formData.serviceType}
• Division: ${formData.division === 'digital' ? 'Digital Services (LoomDigitals)' : 'Design Services (LoomDesigns)'}
• Preferred Date: ${formData.date}
• Preferred Time: ${formData.time}

💼 PROJECT DETAILS:
${formData.message || 'No additional details provided.'}

📝 BOOKING INFORMATION:
• Submitted via: LoomDigitals & Designs Website
• Date Submitted: ${new Date().toLocaleDateString()}
• Time Submitted: ${new Date().toLocaleTimeString()}
• Appointment ID: APPT-${Date.now()}

---
ACTION REQUIRED: Please contact the client within 24 hours to confirm this appointment.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${divisionEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${formData.email}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  // Method 2: Phone Call
  const bookViaPhone = () => {
    const phoneNumber = '0987386603';
    const message = `Hi, I'd like to book an appointment. My name is ${formData.name}. I'm interested in ${formData.serviceType} services. My preferred date is ${formData.date} at ${formData.time}. My email is ${formData.email} and phone is ${formData.phone}.`;
    
    // Show message to user
    alert(`📞 Calling ${phoneNumber}\n\nPlease tell them:\n\n"${message}"`);
    
    // Initiate phone call
    window.location.href = `tel:${phoneNumber}`;
  };

  // Method 3: WhatsApp
  const bookViaWhatsApp = () => {
    const phoneNumber = '0987386603';
    const message = `Hello LoomDigitals & Designs!%0A%0AI'd like to book an appointment:%0A%0A👤 *My Information*%0A• Name: ${formData.name}%0A• Email: ${formData.email}%0A• Phone: ${formData.phone}%0A%0A📋 *Appointment Details*%0A• Service: ${formData.serviceType}%0A• Division: ${formData.division === 'digital' ? 'Digital Services' : 'Design Services'}%0A• Preferred Date: ${formData.date}%0A• Preferred Time: ${formData.time}%0A%0A💼 *Project Details*%0A${formData.message || 'No additional details provided.'}%0A%0A📱 *Submitted via website*`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Save appointment to localStorage (backup)
  const saveToLocalStorage = () => {
    const appointments = JSON.parse(localStorage.getItem('loom_appointments') || '[]');
    const newAppointment = {
      ...formData,
      id: `APPT-${Date.now()}`,
      bookingMethod: bookingMethod,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    appointments.push(newAppointment);
    localStorage.setItem('loom_appointments', JSON.stringify(appointments));
  };

  // Generate time slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM', 
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', 
    '04:00 PM', '04:30 PM'
  ];
  
  // Get tomorrow's date for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  
  // Max date 60 days from now
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split('T')[0];
  
  return (
    <div className="appointment-page">
      {/* Appointment Hero */}
      <section className="hero" style={{padding: '80px 0', background: 'linear-gradient(135deg, var(--light-orange) 0%, var(--white) 100%)'}}>
        <div className="container">
          <h1 style={{textAlign: 'center', fontSize: '3rem', color: 'var(--dark-blue)'}}>Book a Consultation</h1>
          <p style={{textAlign: 'center', maxWidth: '800px', margin: '20px auto', fontSize: '1.2rem'}}>
            Schedule a meeting with our digital or design specialists. Choose your preferred booking method.
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '30px',
                border: '1px solid #c3e6cb',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fas fa-check-circle" style={{marginRight: '15px', fontSize: '1.5rem'}}></i>
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>✓ Email Opened!</h4>
                  <p style={{margin: 0}}>Your email client opened with pre-filled details. Just click "Send" to complete booking.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'phone' && (
              <div style={{
                backgroundColor: '#e8f4fd',
                color: '#0c5460',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '30px',
                border: '1px solid #bee5eb',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fas fa-phone" style={{marginRight: '15px', fontSize: '1.5rem'}}></i>
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>✓ Phone Call Initiated</h4>
                  <p style={{margin: 0}}>Your phone should be dialing now. Please give our team the appointment details.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'whatsapp' && (
              <div style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '30px',
                border: '1px solid #c3e6cb',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fab fa-whatsapp" style={{marginRight: '15px', fontSize: '1.5rem'}}></i>
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>✓ WhatsApp Opened</h4>
                  <p style={{margin: 0}}>WhatsApp opened with pre-filled message. Just click "Send" to book.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{
                backgroundColor: '#f8d7da',
                color: '#721c24',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '30px',
                border: '1px solid #f5c6cb',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fas fa-exclamation-triangle" style={{marginRight: '15px', fontSize: '1.5rem'}}></i>
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>Booking Failed</h4>
                  <p style={{margin: 0}}>Please try again or use the direct contact methods below.</p>
                </div>
              </div>
            )}
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px'}}>
              {/* Left Column: Appointment Form */}
              <div>
                <h2 style={{color: 'var(--dark-blue)', marginBottom: '30px', fontSize: '2rem'}}>Schedule Your Appointment</h2>
                
                {/* Booking Method Selection */}
                <div style={{marginBottom: '30px', padding: '20px', backgroundColor: 'var(--light-gray)', borderRadius: '10px'}}>
                  <h3 style={{color: 'var(--dark-blue)', marginBottom: '15px', fontSize: '1.2rem'}}>
                    <i className="fas fa-paper-plane" style={{marginRight: '10px'}}></i>
                    Choose Booking Method
                  </h3>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <button
                      type="button"
                      onClick={() => setBookingMethod('email')}
                      style={{
                        flex: 1,
                        minWidth: '100px',
                        padding: '12px',
                        backgroundColor: bookingMethod === 'email' ? 'var(--primary-blue)' : 'white',
                        color: bookingMethod === 'email' ? 'white' : 'var(--dark-gray)',
                        border: `2px solid ${bookingMethod === 'email' ? 'var(--primary-blue)' : '#ddd'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <i className="fas fa-envelope" style={{fontSize: '1.2rem'}}></i>
                      <span>Email</span>
                      <small style={{fontSize: '0.7rem', opacity: 0.8}}>(Recommended)</small>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setBookingMethod('phone')}
                      style={{
                        flex: 1,
                        minWidth: '100px',
                        padding: '12px',
                        backgroundColor: bookingMethod === 'phone' ? 'var(--primary-orange)' : 'white',
                        color: bookingMethod === 'phone' ? 'white' : 'var(--dark-gray)',
                        border: `2px solid ${bookingMethod === 'phone' ? 'var(--primary-orange)' : '#ddd'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <i className="fas fa-phone" style={{fontSize: '1.2rem'}}></i>
                      <span>Phone Call</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setBookingMethod('whatsapp')}
                      style={{
                        flex: 1,
                        minWidth: '100px',
                        padding: '12px',
                        backgroundColor: bookingMethod === 'whatsapp' ? '#25D366' : 'white',
                        color: bookingMethod === 'whatsapp' ? 'white' : 'var(--dark-gray)',
                        border: `2px solid ${bookingMethod === 'whatsapp' ? '#25D366' : '#ddd'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <i className="fab fa-whatsapp" style={{fontSize: '1.2rem'}}></i>
                      <span>WhatsApp</span>
                    </button>
                  </div>
                  
                  <div style={{marginTop: '15px', padding: '10px', backgroundColor: 'white', borderRadius: '5px', fontSize: '0.9rem'}}>
                    {bookingMethod === 'email' && (
                      <p style={{margin: 0, color: 'var(--primary-blue)'}}>
                        <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
                        Your email client will open with pre-filled details. Just click "Send".
                      </p>
                    )}
                    {bookingMethod === 'phone' && (
                      <p style={{margin: 0, color: 'var(--primary-orange)'}}>
                        <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
                        We'll call our team. Please tell them your appointment details.
                      </p>
                    )}
                    {bookingMethod === 'whatsapp' && (
                      <p style={{margin: 0, color: '#25D366'}}>
                        <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
                        WhatsApp will open with a pre-filled message. Just click "Send".
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Appointment Form */}
                <form ref={formRef} onSubmit={handleSubmit} style={{backgroundColor: 'var(--white)', padding: '30px', borderRadius: '10px', boxShadow: 'var(--shadow)'}}>
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                      disabled={isSubmitting}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                      disabled={isSubmitting}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                      disabled={isSubmitting}
                      placeholder="0987386603"
                    />
                  </div>
                  
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Select Division *</label>
                    <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                      <label style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        cursor: 'pointer', 
                        padding: '12px 15px', 
                        borderRadius: '5px', 
                        backgroundColor: formData.division === 'digital' ? 'var(--light-blue)' : 'var(--light-gray)', 
                        border: formData.division === 'digital' ? '2px solid var(--primary-blue)' : '2px solid transparent',
                        flex: 1,
                        minWidth: '120px',
                        opacity: isSubmitting ? 0.6 : 1
                      }}>
                        <input 
                          type="radio" 
                          name="division" 
                          value="digital"
                          checked={formData.division === 'digital'}
                          onChange={handleChange}
                          style={{marginRight: '10px'}}
                          disabled={isSubmitting}
                        />
                        <div>
                          <div style={{fontWeight: '600', color: 'var(--primary-blue)'}}>LoomDigitals</div>
                          <div style={{fontSize: '0.9rem'}}>Digital Services</div>
                        </div>
                      </label>
                      <label style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        cursor: 'pointer', 
                        padding: '12px 15px', 
                        borderRadius: '5px', 
                        backgroundColor: formData.division === 'design' ? 'var(--light-orange)' : 'var(--light-gray)', 
                        border: formData.division === 'design' ? '2px solid var(--primary-orange)' : '2px solid transparent',
                        flex: 1,
                        minWidth: '120px',
                        opacity: isSubmitting ? 0.6 : 1
                      }}>
                        <input 
                          type="radio" 
                          name="division" 
                          value="design"
                          checked={formData.division === 'design'}
                          onChange={handleChange}
                          style={{marginRight: '10px'}}
                          disabled={isSubmitting}
                        />
                        <div>
                          <div style={{fontWeight: '600', color: 'var(--primary-orange)'}}>LoomDesigns</div>
                          <div style={{fontSize: '0.9rem'}}>Design Services</div>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Service Type *</label>
                    <select 
                      name="serviceType" 
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', backgroundColor: 'white'}}
                      disabled={isSubmitting}
                    >
                      <option value="consultation">Initial Consultation</option>
                      <option value="web">Website Development</option>
                      <option value="social">Social Media Management</option>
                      <option value="graphic">Graphic Design</option>
                      <option value="architectural">Architectural Design</option>
                      <option value="interior">Interior Design</option>
                      <option value="construction">Construction Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Preferred Date *</label>
                    <input 
                      type="date" 
                      name="date" 
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={minDate}
                      max={maxDateStr}
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div style={{marginBottom: '20px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Preferred Time *</label>
                    <select 
                      name="time" 
                      value={formData.time}
                      onChange={handleChange}
                      required
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', backgroundColor: 'white'}}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div style={{marginBottom: '25px'}}>
                    <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Project Details</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Briefly describe your project or what you'd like to discuss..."
                      style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', resize: 'vertical'}}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{
                      width: '100%', 
                      padding: '15px', 
                      fontSize: '1.1rem',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: bookingMethod === 'email' ? 'var(--primary-blue)' : 
                                     bookingMethod === 'phone' ? 'var(--primary-orange)' : '#25D366'
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        {bookingMethod === 'email' && <i className="fas fa-envelope"></i>}
                        {bookingMethod === 'phone' && <i className="fas fa-phone"></i>}
                        {bookingMethod === 'whatsapp' && <i className="fab fa-whatsapp"></i>}
                        {bookingMethod === 'email' && 'Book via Email'}
                        {bookingMethod === 'phone' && 'Call to Book'}
                        {bookingMethod === 'whatsapp' && 'Message on WhatsApp'}
                      </>
                    )}
                  </button>
                </form>
                
                {/* Direct Contact Methods */}
                <div style={{marginTop: '30px', padding: '20px', backgroundColor: 'var(--light-gray)', borderRadius: '10px'}}>
                  <h4 style={{color: 'var(--dark-blue)', marginBottom: '15px', textAlign: 'center'}}>
                    <i className="fas fa-bolt" style={{marginRight: '8px'}}></i>
                    Quick Direct Contact
                  </h4>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a 
                      href="tel:0987386603"
                      className="btn btn-secondary"
                      style={{flex: 1, minWidth: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}
                    >
                      <i className="fas fa-phone"></i>
                      Call Now
                    </a>
                    <a 
                      href="mailto:appointments@loomdigitalsdesigns.com?subject=Appointment%20Request&body=Hello,%20I'd%20like%20to%20book%20an%20appointment."
                      className="btn btn-primary"
                      style={{flex: 1, minWidth: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}
                    >
                      <i className="fas fa-envelope"></i>
                      Email Directly
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Information & Alternatives */}
              <div>
                <h2 style={{color: 'var(--dark-blue)', marginBottom: '30px', fontSize: '2rem'}}>Booking Information</h2>
                
                {/* What to Expect */}
                <div style={{backgroundColor: 'var(--light-blue)', padding: '25px', borderRadius: '10px', marginBottom: '30px'}}>
                  <h3 style={{color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '1.3rem'}}>
                    <i className="fas fa-info-circle" style={{marginRight: '10px'}}></i>What Happens Next?
                  </h3>
                  <ul style={{listStyle: 'none'}}>
                    <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start'}}>
                      <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        flexShrink: 0,
                        fontSize: '0.8rem'
                      }}>1</div>
                      <span>You'll {bookingMethod === 'email' ? 'send an email' : bookingMethod === 'phone' ? 'make a phone call' : 'send a WhatsApp message'} with your details</span>
                    </li>
                    <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start'}}>
                      <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        flexShrink: 0,
                        fontSize: '0.8rem'
                      }}>2</div>
                      <span>Our team receives your appointment request immediately</span>
                    </li>
                    <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start'}}>
                      <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        flexShrink: 0,
                        fontSize: '0.8rem'
                      }}>3</div>
                      <span>We'll contact you within 24 hours to confirm the time</span>
                    </li>
                    <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start'}}>
                      <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        flexShrink: 0,
                        fontSize: '0.8rem'
                      }}>4</div>
                      <span>Meeting details (video link or location) will be provided</span>
                    </li>
                    <li style={{display: 'flex', alignItems: 'flex-start'}}>
                      <div style={{
                        backgroundColor: 'var(--primary-blue)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        flexShrink: 0,
                        fontSize: '0.8rem'
                      }}>5</div>
                      <span>Your consultation begins at the scheduled time</span>
                    </li>
                  </ul>
                </div>
                
                {/* Contact Information */}
                <div style={{backgroundColor: 'var(--light-orange)', padding: '25px', borderRadius: '10px', marginBottom: '30px'}}>
                  <h3 style={{color: 'var(--primary-orange)', marginBottom: '15px', fontSize: '1.3rem'}}>
                    <i className="fas fa-headset" style={{marginRight: '10px'}}></i>Contact Information
                  </h3>
                  <div style={{marginBottom: '15px'}}>
                    <p style={{marginBottom: '8px', fontWeight: '600'}}>Digital Services (LoomDigitals):</p>
                    <p style={{marginBottom: '5px'}}><i className="fas fa-envelope" style={{marginRight: '8px', color: 'var(--primary-orange)'}}></i> digitals@loomdigitalsdesigns.com</p>
                    <p><i className="fas fa-phone" style={{marginRight: '8px', color: 'var(--primary-orange)'}}></i> 0987386603</p>
                  </div>
                  <div>
                    <p style={{marginBottom: '8px', fontWeight: '600'}}>Design Services (LoomDesigns):</p>
                    <p style={{marginBottom: '5px'}}><i className="fas fa-envelope" style={{marginRight: '8px', color: 'var(--primary-orange)'}}></i> designs@loomdigitalsdesigns.com</p>
                    <p><i className="fas fa-phone" style={{marginRight: '8px', color: 'var(--primary-orange)'}}></i> 0987386603</p>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div style={{backgroundColor: 'var(--light-gray)', padding: '25px', borderRadius: '10px'}}>
                  <h3 style={{color: 'var(--dark-blue)', marginBottom: '15px', fontSize: '1.3rem'}}>
                    <i className="fas fa-clock" style={{marginRight: '10px'}}></i>Business Hours
                  </h3>
                  <ul style={{listStyle: 'none'}}>
                    <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                      <span>Monday - Friday</span>
                      <span style={{fontWeight: '600'}}>9:00 AM - 6:00 PM</span>
                    </li>
                    <li style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                      <span>Saturday</span>
                      <span style={{fontWeight: '600'}}>10:00 AM - 4:00 PM</span>
                    </li>
                    <li style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>Sunday</span>
                      <span style={{fontWeight: '600', color: 'var(--medium-gray)'}}>Closed</span>
                    </li>
                  </ul>
                  <div style={{marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd'}}>
                    <p style={{fontSize: '0.9rem', color: 'var(--medium-gray)'}}>
                      <i className="fas fa-exclamation-circle" style={{marginRight: '5px'}}></i>
                      For urgent matters outside business hours, text: <strong>0987386603</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;