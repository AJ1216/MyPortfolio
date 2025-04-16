import React, { useState, useEffect } from 'react';
import { init, send } from 'emailjs-com'; // Ensure this is the correct import
import './ContactForm.css';

// Initialize EmailJS with your user ID
init(process.env.REACT_APP_EMAILJS_USER_ID);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Reset submitted state after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Your EmailJS service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
        {
          from_name: formData.name,  // Name from the form
          from_email: formData.email, // User's email from the form
          message: formData.message,   // Message from the form
        },
        process.env.REACT_APP_EMAILJS_USER_ID // Your EmailJS user ID
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
        setErrors({});
      } else {
        setErrors({ email: 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors({ email: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      {submitted && <p className="success-message" aria-live="assertive">message succesfuly sent</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
