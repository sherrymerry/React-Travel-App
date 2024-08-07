import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <section className="cart container section">
            <div className="sectitle">
                <h3 className="title">Your Cart</h3>
            </div>
            <div className="cartContent">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cartItems">
                        {cartItems.map(item => (
                            <div key={item.id} className="cartItem">
                                <img src={item.imgsrc} alt={item.title} />
                                <h4>{item.title}</h4>
                                <div className="details">
                                    <span className="price">{item.price}</span>
                                    <span className="quantity">Qty: {item.quantity}</span>
                                    <button onClick={() => removeFromCart(item.id)} className="removeBtn">Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className="total">
                            <h4>Total: ${getTotal()}</h4>
                        </div>
                        <button onClick={handleCheckout} className="checkoutBtn">Proceed to Checkout</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
