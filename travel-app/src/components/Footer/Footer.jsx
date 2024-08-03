import './footer.css'
import video2 from "../../assets/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { FaTripadvisor } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} video autoPlay muted type='video/mp4'></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>SEND<FiSend className='icon' /></button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'><MdOutlineTravelExplore className='icon' />Travel.</a>
                        </div>

                        <div className="footerParagraph">
                            🌍✨ Explore the world with us! From breathtaking destinations to unforgettable experiences, we're here to make your travel dreams come true. Pack your bags and embark on your next adventure today! ✈️🌟
                        </div>
                        <div className="footerSocials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiOutlineYoutube className='icon' />
                            <AiOutlineInstagram className='icon' />
                            <FaTripadvisor className='icon' />

                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/* ye group 1 hai */}

                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Partners
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Tourism
                            </li>
                        </div>
                        {/* ye group  2 hai  */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                 PARTNER
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Insurance
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
                        {/* ye group 3 hai */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTES
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />LasVegas
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Maima
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Cape Town
                            </li>
                        </div>
                        
                    </div>
                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVERED - SHAHRYAR WASEEN AND HUZAIFA YASEEN (2024) </small>

                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Footer