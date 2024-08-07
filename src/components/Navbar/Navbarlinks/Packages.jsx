import React from "react";
import './packages.css';
import { useCart } from '../../contexts/CartContext';

import img16 from "../../../assets/img16.jpeg";
import img17 from "../../../assets/img17.jpeg";
import img18 from "../../../assets/img18.jpeg";
import img19 from "../../../assets/img19.jpeg";
import img20 from "../../../assets/img20.jpeg";
import img21 from "../../../assets/img21.jpeg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const bestPackages = [
    {
        id: 16,
        imgsrc: img16,
        desttitle: "Switzerland",
        to: "Europe",
        packages: "7 days / 6 nights",
        originalPrice: "$2500",
        discountedPrice: "2000",
        details: "Experience the stunning Swiss Alps and serene landscapes. This package includes a visit to Zurich, a cosmopolitan city with a unique mix of discovery, pleasure, nature, and culture. Travel to Lucerne, nestled between a lake and mountains, and enjoy its preserved medieval architecture. Explore Interlaken, an adventure sports haven located between Lake Thun and Lake Brienz. Visit the picturesque town of Zermatt, located at the foot of the Matterhorn. Enjoy scenic train rides, explore charming villages, and indulge in Swiss chocolates and cheeses. This trip promises breathtaking vistas, rich cultural experiences, and unforgettable memories."
    },
    {
        id: 17,
        imgsrc: img17,
        desttitle: "China",
        to: "Asia",
        packages: "10 days / 9 nights",
        originalPrice: "$2200",
        discountedPrice: "1800",
        details: "Explore the Great Wall and vibrant cities of China. This package takes you on a journey through Beijing, the capital city, where you can explore the Forbidden City, Tiananmen Square, and the Temple of Heaven. Visit the ancient city of Xi'an, home to the Terracotta Warriors. Experience the modern metropolis of Shanghai with its futuristic skyline, historic Bund, and vibrant nightlife. Travel to Chengdu to see the Giant Panda Breeding Research Base and savor spicy Sichuan cuisine. Discover the unique blend of tradition and innovation that defines China, with visits to iconic landmarks and off-the-beaten-path gems."
    },
    {
        id: 18,
        imgsrc: img18,
        desttitle: "Pakistan",
        to: "Asia",
        packages: "8 days / 7 nights",
        originalPrice: "$1500",
        discountedPrice: "1200",
        details: "Discover the beautiful valleys and rich history of Pakistan. Start your journey in Islamabad, the capital city known for its modern architecture, lush greenery, and cultural landmarks. Travel to Lahore, the cultural heart of Pakistan, where you can explore the Lahore Fort, Badshahi Mosque, and vibrant bazaars. Venture into the breathtaking Hunza Valley, surrounded by towering peaks and pristine nature. Continue to Skardu, a gateway to some of the world's highest mountains, and enjoy the serene beauty of its lakes and valleys. Experience the warm hospitality, stunning landscapes, and historical landmarks that make Pakistan a unique and captivating destination."
    },
    {
        id: 19,
        imgsrc: img19,
        desttitle: "Miami",
        to: "USA",
        packages: "9 days / 8 nights",
        originalPrice: "$2700",
        discountedPrice: "2200",
        details: "Witness the breathtaking fjords and Northern Lights in Norway. This package includes a visit to Oslo, the capital city, known for its green spaces and museums. Travel to Bergen, a UNESCO World Heritage City, and the gateway to the fjords. Cruise through the stunning Geirangerfjord and Nærøyfjord, and experience the natural beauty of Norway's landscapes. Visit Tromsø, located above the Arctic Circle, to witness the magical Northern Lights and participate in winter activities like dog sledding and reindeer safaris. This trip offers a perfect blend of urban exploration, scenic beauty, and unforgettable natural phenomena."
    },
    {
        id: 20,
        imgsrc: img20,
        desttitle: "Maldives",
        to: "Indian Ocean",
        packages: "9 days / 8 nights",
        originalPrice: "$2100",
        discountedPrice: "1700",
        details: "Escape to paradise with this luxurious Maldives package. Enjoy 9 days of sun, sand, and crystal-clear waters at a stunning overwater villa. Explore vibrant coral reefs teeming with marine life, relax on pristine white-sand beaches, and indulge in world-class spa treatments. This package includes daily breakfast and dinner at gourmet restaurants, a sunset cruise, and a guided snorkeling tour. Experience the ultimate tropical getaway with breathtaking views and unparalleled relaxation in the heart of the Indian Ocean."
    },
    {
        id: 21,
        imgsrc: img21,
        desttitle: "Kyoto",
        to: "Japan",
        packages: "9 days / 8 nights",
        originalPrice: "$2500",
        discountedPrice: "2250",
        details: "Immerse yourself in the cultural heritage of Japan with this enchanting Kyoto package. Explore the city's ancient temples, serene gardens, and historic tea houses. Visit the stunning Fushimi Inari Shrine, known for its thousands of red torii gates, and stroll through the picturesque Arashiyama Bamboo Grove. Experience traditional Japanese hospitality with a stay in a ryokan, including authentic kaiseki meals and relaxing hot springs. This package offers a perfect blend of historical exploration and cultural immersion in one of Japan's most beautiful cities."
    }
];

const Packages = () => {
    const { addToCart } = useCart();
    return (
        <section className="packages container section">

            <div className="sectitle">
                <h3 className="title">
                    Best Packages
                </h3>
            </div>

            <div className="secContent grid wow animate__animated animate__fadeInUp" data-wow-duration="3s" data-wow-delay="1s">
                {
                    bestPackages.map(({ id, imgsrc, desttitle, to, packages, originalPrice, discountedPrice, details }) => {
                        return (
                            <div key={id} className="singlePackage">

                                <div className="imageDiv">
                                    <img src={imgsrc} alt={desttitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className='desttitle'>{desttitle}</h4>
                                    <span className="continent flex"><HiOutlineLocationMarker className='icon' />
                                        <span className="name">{to}</span>
                                    </span>
                                    <div className="packageDetails">
                                        <h5>Package: {packages}</h5>
                                        <div className="price flex">
                                            <span className="originalPrice">{originalPrice}</span>
                                            <span className="discountedPrice">${discountedPrice}</span>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{details}</p>
                                    </div>
                                    {/* <Link to={`/packages/product/${id}`} className='btn flex'>BOOK NOW <HiOutlineClipboardCheck className='icon' /></Link> */}
                                    <button onClick={() => addToCart({ id, imgsrc, title: desttitle, price: discountedPrice })} className='btn flex'>ADD TO CART <FaShoppingCart className ='icon' /> </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Packages;
