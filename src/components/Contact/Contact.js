import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ id, Contact }) => {
    console.log(process.env.REACT_APP_FORM_API)

    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Submitting Form");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_FORM_ACCESS_KEY);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setTimeout(() => {
                setResult('')
            }, 2000);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(`Error: ${data.message}`);
            setTimeout(() => {
                setResult('')
            }, 2000);
        }
    };

    return (
        <section id={id} className="section contact-section">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <ul>
                            <li>
                                <strong>Email:</strong>
                                <a href={`mailto:${Contact.email}`}>{Contact.email}</a>
                            </li>
                            <li>
                                <strong>Phone:</strong>
                                <a href={`tel:${Contact.phone}`}>{Contact.phone}</a>
                            </li>
                            <li>
                                <strong>GitHub:</strong>
                                <a href={Contact.github} target="_blank" rel="noreferrer">
                                    {Contact.github.split('//')[1]}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn primary-btn">Send Message</button>
                    </form>
                    {result && <p className="form-status">{result}</p>}
                </div>
            </div>
        </section>
    );
};

export default Contact;