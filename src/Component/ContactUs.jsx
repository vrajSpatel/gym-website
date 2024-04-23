import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id";

const ContactUs = () => {
    const [formValues, setFormValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formValues, USER_ID)
            .then((result) => {
                alert('Message Sent, We will get back to you shortly', result.text);
            }, (error) => {
                alert('An error occurred, Please try again', error.text);
            });
    };

    return (
        <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contact Us</h2>
                <div className="contact-input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="user_name"
                        value={formValues.user_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact-input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="user_email"
                        value={formValues.user_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact-input-group">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;

// You can include these styles in the same file using the style tag or a CSS-in-JS solution, or separate them into a .css file.
