import React from "react";
import './about.css';
import { FaGlobe, FaMapMarkedAlt, FaPlane } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about">
            <div className="aboutContent container">
                <h2 className="aboutTitle wow animate__animated animate__fadeInUp" data-wow-duration="3s" data-wow-delay="1s">About Us</h2>
                <div className="aboutText wow animate__animated animate__fadeInRight" data-wow-duration="3s" data-wow-delay="1s">
                    <p>
                        Welcome to Travel, where your journey begins! We are passionate about bringing you the best travel experiences across the globe. Our team of dedicated travel experts curates exclusive packages that offer you unforgettable adventures, whether you're exploring the serene landscapes of Switzerland, the vibrant cities of China, the breathtaking valleys of Pakistan, or the sunny beaches of Miami.
                    </p>
                    <p>
                        At Travel, we believe in creating memories that last a lifetime. Our handpicked destinations and personalized services ensure that your trip is seamless and enjoyable. From luxurious getaways to budget-friendly adventures, we cater to all your travel needs with utmost care and attention.
                    </p>
                </div>
                <div className="aboutFeatures wow animate__animated animate__fadeInDown" data-wow-duration="3s" data-wow-delay="1s">
                    <div className="feature">
                        <FaGlobe className="icon" />
                        <h3>Global Reach</h3>
                        <p>Explore destinations across the world with our extensive range of travel packages.</p>
                    </div>
                    <div className="feature">
                        <FaMapMarkedAlt className="icon" />
                        <h3>Expert Guides</h3>
                        <p>Our team of travel experts ensures you have the best recommendations and experiences.</p>
                    </div>
                    <div className="feature">
                        <FaPlane className="icon" />
                        <h3>Seamless Travel</h3>
                        <p>Enjoy hassle-free booking and travel arrangements for a smooth journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
