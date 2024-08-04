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
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />Our Agency
                            </li>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer