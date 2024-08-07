import './main.css'
import { useCart } from '../contexts/CartContext';

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpeg"
import img5 from "../../assets/img5.jpeg"
import img6 from "../../assets/img6.jpeg"
import img7 from "../../assets/img7.jpeg"
import img8 from "../../assets/img8.jpeg"
import img9 from "../../assets/img9.jpeg"
import img10 from "../../assets/img10.png"
import img11 from "../../assets/img11.jpeg"
import img12 from "../../assets/img12.jpg"
import img13 from "../../assets/img13.jpeg"
import img14 from "../../assets/img14.jpeg"
import img15 from "../../assets/img15.jpeg"

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Data = [
    {
        id: 1,
        imgsrc: img1,
        desttitle: "Paris",
        location: "France",
        grade: "Cultural-Relax",
        discountedPrice: "1200",
        description: "Experience the city of love with its rich history, art, and fashion."
    },
    {
        id: 2,
        imgsrc: img2,
        desttitle: "Tokyo",
        location: "Japan",
        grade: "Cultural-Relax",
        discountedPrice: "1500",
        description: "Explore the vibrant city blending tradition with futuristic technology."
    },
    {
        id: 3,
        imgsrc: img3,
        desttitle: "New York City",
        location: "USA",
        grade: "Cultural-Relax",
        discountedPrice: "1300",
        description: "Visit the city that never sleeps, famous for its skyline and cultural diversity."
    },
    {
        id: 4,
        imgsrc: img4,
        desttitle: "Sydney",
        location: "Australia",
        grade: "Cultural-Relax",
        discountedPrice: "1400",
        description: "Discover the stunning Sydney Opera House and beautiful beaches."
    },
    {
        id: 5,
        imgsrc: img5,
        desttitle: "Cape Town",
        location: "South Africa",
        grade: "Cultural-Relax",
        discountedPrice: "1100",
        description: "Enjoy breathtaking landscapes and rich cultural heritage."
    },
    {
        id: 6,
        imgsrc: img6,
        desttitle: "Rome",
        location: "Italy",
        grade: "Cultural-Relax",
        discountedPrice: "1250",
        description: "Immerse yourself in ancient history and magnificent architecture."
    },
    {
        id: 7,
        imgsrc: img7,
        desttitle: "London",
        location: "UK",
        grade: "Cultural-Relax",
        discountedPrice: "1350",
        description: "Experience the royal charm and modern attractions of London."
    },
    {
        id: 8,
        imgsrc: img8,
        desttitle: "Dubai",
        location: "UAE",
        grade: "Cultural-Relax",
        discountedPrice: "1600",
        description: "Marvel at the luxurious lifestyle and futuristic skyscrapers."
    },
    {
        id: 9,
        imgsrc: img9,
        desttitle: "Rio de Janeiro",
        location: "Brazil",
        grade: "Cultural-Relax",
        discountedPrice: "1000",
        description: "Enjoy the vibrant culture and stunning beaches of Rio."
    },
    {
        id: 10,
        imgsrc: img10,
        desttitle: "Istanbul",
        location: "Turkey",
        grade: "Cultural-Relax",
        discountedPrice: "1150",
        description: "Explore the city where East meets West with its rich history and culture."
    },
    {
        id: 11,
        imgsrc: img11,
        desttitle: "Bangkok",
        location: "Thailand",
        grade: "Cultural-Relax",
        discountedPrice: "1050",
        description: "Discover the vibrant street life and beautiful temples of Bangkok."
    },
    {
        id: 12,
        imgsrc: img12,
        desttitle: "Amsterdam",
        location: "Netherlands",
        grade: "Cultural-Relax",
        discountedPrice: "1300",
        description: "Enjoy the picturesque canals and rich artistic heritage."
    },
    {
        id: 13,
        imgsrc: img13,
        desttitle: "Singapore",
        location: "Singapore",
        grade: "Cultural-Relax",
        discountedPrice: "1450",
        description: "Experience the modern skyline and lush gardens of Singapore."
    },
    {
        id: 14,
        imgsrc: img14,
        desttitle: "Barcelona",
        location: "Spain",
        grade: "Cultural-Relax",
        discountedPrice: "1200",
        description: "Admire the unique architecture and vibrant culture of Barcelona."
    },
    {
        id: 15,
        imgsrc: img15,
        desttitle: "Cairo",
        location: "Egypt",
        grade: "Cultural-Relax",
        discountedPrice: "1100",
        description: "Explore the ancient wonders of the Pyramids and the Nile."
    }
];

const Main = () => {
    const { addToCart } = useCart();

    return (
        <section className="main container section">
            <div className="sectitle">
                <h3 className="title">Most Visited Destinations</h3>
            </div>
            <div className="secContent grid wow animate__animated animate__shakeY" data-wow-duration="3s" data-wow-delay="3s">
                {
                    Data.map(({ id, imgsrc, desttitle, location, grade, discountedPrice, description }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgsrc} alt={desttitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className='desttitle'>{desttitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>${discountedPrice}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button onClick={() => addToCart({ id, imgsrc, title: desttitle, price: discountedPrice })} className='btn flex'>
                                        ADD TO CART <FaShoppingCart className='icon' />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Main;