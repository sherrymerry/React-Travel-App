import './home.css'
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";


const Home = () => {
    return (
        <section className='home'>
            <div className="overlay">  </div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className='homeContent container'>
                <div className="textDiv wow animate__animated animate__fadeInUp" data-wow-duration="3s" data-wow-delay="3s">
                    <span className="smallText">Our Packages</span>
                    <h1 className="homeTitle">Search Your Holiday</h1>
                </div>
                <div className="cardDiv grid wow animate__animated animate__fadeInRight" data-wow-duration="3s" data-wow-delay="3s">
                    <div className="destinationInput">
                        <label htmlFor="city">Search for destination:</label>
                        <div className='input flex'>
                            <input type="text" placeholder='Enter name here....' />
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search for date:</label>
                        <div className='input flex'>
                            <input type="date" />

                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price...</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>
                </div>
                <div className="HomeFooterIcons flex">
                    <div className="rightIcons">
                        <FaFacebookF className='icon' />
                        <FaInstagram className='icon' />
                        <FaTripadvisor className='icon' />

                    </div>
                    <div className="leftIcons">
                        <FaList className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home