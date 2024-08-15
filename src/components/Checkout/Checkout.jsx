import React, { useState } from 'react';
import './checkout.css';
import Swal from 'sweetalert2';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'creditCard',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAlert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Your packages has been booked!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <section className="checkout container section">
            <div className="sectitle">
                <h3 className="title">Checkout</h3>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="checkoutForm">
                <div className="formGroup">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="formGroup">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    >
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="pioneer">Pioneer</option>
                        <option value="skrill">Skrill</option>
                        <option value="localBank">Local Bank Transfer</option>
                    </select>
                </div>
                <button type="button" onClick={handleAlert} className="submitBtn">Book Package</button>
            </form>
        </section>
    );
};

export default Checkout;
