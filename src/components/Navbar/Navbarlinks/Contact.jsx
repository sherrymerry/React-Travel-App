import React from 'react';
import './contact.css';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';
// import Swal from 'sweetalert2';

const Contact = () => {

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);

    //     formData.append("access_key", "9598f476-b2ad-4c35-a4a2-3f97f87eb300");

    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);

    //     try {
    //         const res = await fetch("https://api.web3forms.com/submit", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json"
    //             },
    //             body: json
    //         }).then((res) => res.json());

    //         console.log(res); 

    //         if (res.success) {
    //             Swal.fire({
    //                 title: "Success!",
    //                 text: "Message sent successfully!",
    //                 icon: "success",
    //                 confirmButtonText: "Okay"
    //             });
    //         } else {
    //             Swal.fire({
    //                 title: "Oops!",
    //                 text: "Something went wrong. Please try again.",
    //                 icon: "error",
    //                 confirmButtonText: "Okay"
    //             });
    //         }
    //     } catch (error) {
    //         console.error("Error submitting form:", error);
    //         Swal.fire({
    //             title: "Error!",
    //             text: "Network error. Please try again later.",
    //             icon: "error",
    //             confirmButtonText: "Okay"
    //         });
    //     }
    // };


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
