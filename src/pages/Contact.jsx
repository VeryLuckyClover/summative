import React, { useEffect ,useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Component Import
import MobileConfirm from '../Components/MobileConfirm';

const Contact = () => {
  const [showMobileConfirm, setShowMobileConfirm] = useState(false);
  const form = useRef();

  const handleContactButtonClick = (e) => {
    // Perform any necessary actions before showing the confirmation screen
      e.preventDefault();
  
      emailjs.sendForm('service_dari7et', 'template_wp1tamf', form.current, '6ZKqAAWnXWVfVOJvt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
      );
    setShowMobileConfirm(true);
  };

  const handleCloseMobileConfirm = () => {
    // Handle closing the confirmation screen
    setShowMobileConfirm(false);
  };

  // This connects the form to Email.js and grabs the names and uses them



  return (
    <>
      <div className="contact-container">
        <div className="heading-section">
          <h2>Whakapā</h2>
          <h4>Contact us</h4>
        </div>

        <div className="contact-form-section">
          <form className="form-content" ref={form}>
            <input  name="firstname" type="text" className="feedback-input" placeholder="First Name" />
            <input  name="lastname" type="text" className="feedback-input" placeholder="Last Name" />
            <input  name="email" type="text" className="feedback-input" placeholder="Email" />
            <input  name="subject" type="text" className="feedback-input" placeholder="Subject" />
            <textarea  name="message" className="feedback-input" placeholder="Message"></textarea>
            {/* Use onClick to call the handleContactButtonClick function */}
            <input id="hero-btn-styling" type="button" value="Confirm" onClick={handleContactButtonClick} />
          </form>
        </div>

        <iframe
          className="map-content"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.8496866029354!2d174.81039367631232!3d-41.24683203793478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40a116c6d1115b%3A0x1b1c523f4e37b8c2!2sManawa%20Ora%20Mirimiri%20and%20Workshops!5e0!3m2!1sen!2snz!4v1700434776460!5m2!1sen!2snz"
          loading="lazy"
        ></iframe>
      </div>

      {showMobileConfirm && <MobileConfirm onClose={handleCloseMobileConfirm} />}
    </>
  );
};

export default Contact;

