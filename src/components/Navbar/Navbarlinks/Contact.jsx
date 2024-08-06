import React from 'react';
import './contact.css';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';

const Contact = () => {

    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title wow animate__animated animate__fadeInDown" data-wow-duration="3s" data-wow-delay="1s">Contact Us</h2>
                <form action="https://formsubmit.co/shahryarwaseem19@gmail.com" className="contact-form" method="POST">
                    <div className="input-group wow animate__animated animate__heartBeat" data-wow-duration="3s" data-wow-delay="1s">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your Name" required />
                    </div>
                    <div className="input-group wow animate__animated animate__heartBeat" data-wow-duration="3s" data-wow-delay="1s">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email" required />
                    </div>
                    <div className="input-group wow animate__animated animate__heartBeat" data-wow-duration="3s" data-wow-delay="1s">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
