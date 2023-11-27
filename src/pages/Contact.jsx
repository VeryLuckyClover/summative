import React, { useState } from 'react';
import axios from 'axios';
import MobileConfirm from '../Components/MobileConfirm';

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT;

const Contact = () => {
  const [showMobileConfirm, setShowMobileConfirm] = useState(false);
 

  // setup state for contact form submission
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // state for input values
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactButtonClick = () => {
    event.preventDefault()
    // object for our form - append data to it so we can send it
    const testForm = new FormData()
    testForm.append('your-name', name)
    testForm.append('your-email', email)
    testForm.append('your-message', message)

    //AXIOS CALL
    axios.post(formEndpoint, testForm, {
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    .then((response) => {
        console.log(response)
        setSubmitted(true)
        setShowMobileConfirm(true);
        
    })
    .catch((error) => {
        console.log(error);
        setError(true)
    })
}

  const handleCloseMobileConfirm = () => {
    setShowMobileConfirm(false);
  };

  return (
    <>
      <div className="contact-container">
        <div className="heading-section">
          <h2>Whakapā</h2>
          <h4>Contact us</h4>
        </div>

        <div className="contact-form-section">
          <form className="form-content">
            <input
              type="text"
              name="firstname"
              className="feedback-input"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastname"
              className="feedback-input"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              className="feedback-input"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="email"
              name="your-email"
              className="feedback-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="your-message"
              className="feedback-input"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input
              type="button"
              value="Send Message"
              className="learn-more-btn"
              onClick={handleContactButtonClick}
            />
          </form>
        </div>

        {/* Add your map iframe here */}

      </div>

      {showMobileConfirm && <MobileConfirm onClose={handleCloseMobileConfirm} />}
    </>
  );
};

export default Contact;


