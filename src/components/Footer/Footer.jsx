import './footer.css'
import video2 from "../../assets/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { FaTripadvisor } from "react-icons/fa";
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} video autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text wow animate__animated animate__fadeInUp" data-wow-duration="3s" data-wow-delay="3s">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>
                    <div className="inputDiv flex wow animate__animated animate__fadeInRight" data-wow-duration="3s" data-wow-delay="3s">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>SEND<FiSend className='icon' /></button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'><MdOutlineTravelExplore className='icon' />Travel.</a>
                        </div>

                        <div className="footerParagraph wow animate__animated animate__fadeInUp" data-wow-duration="3s" data-wow-delay="3s">
                            🌍✨ Explore the world with us! From breathtaking destinations to unforgettable experiences, we're here to make your travel dreams come true. Pack your bags and embark on your next adventure today! ✈️🌟
                        </div>
                        <div className="footerSocials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiOutlineYoutube className='icon' />
                            <AiOutlineInstagram className='icon' />
                            <FaTripadvisor className='icon' />

                        </div>
                    </div>
                    <div className="footerLinks grid wow animate__animated animate__fadeInRight" data-wow-duration="3s" data-wow-delay="3s">

                        {/* group 1 */}

                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Payment
                            </li>
                        </div>

                        {/* group 3 */}

                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />TripAdvisor
                            </li>
                        </div>

                        {/* group 2 */}

                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Oceania
                            </li>                     
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE</small>
                        <small>Copyright Reserved @ Travel.com</small>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer