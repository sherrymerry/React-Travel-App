import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Main/Main';
import bestPackages from '../Navbar/Navbarlinks/Packages'; 
import './productdetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = Data.find(item => item.id === parseInt(id)) || bestPackages.find(item => item.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const { imgsrc, desttitle, location, grade, fees, description, img, destination, to, packages, originalPrice, discountedPrice, details } = product;

    return (
        <section className="product-detail container section">
            <div className="imageDiv">
                <img src={imgsrc || img} alt={desttitle || destination} />
            </div>
            <div className="cardInfo">
                <h2 className='desttitle'>{desttitle || destination}</h2>
                <span className="continent flex"><HiOutlineLocationMarker className='icon' />
                    <span className="name">{location || to}</span>
                </span>
                <div className="fees flex">
                    <div className="grade">
                        <span>{grade || packages}<small>+1</small></span>
                    </div>
                    <div className="price">
                        <h5>{fees || originalPrice} - {discountedPrice}</h5>
                    </div>
                </div>
                <div className="desc">
                    <p>{description || details}</p>
                </div>
                <button className='btn flex'>BOOK NOW <HiOutlineClipboardCheck className='icon' /></button>
            </div>
        </section>
    );
}

export default ProductDetail;
