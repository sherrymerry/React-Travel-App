import { useCart } from '../contexts/CartContext';
import './cart.css';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cartItems, removeFromCart, getTotal } = useCart();

    const handleAlert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Your packages has been booked!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
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
                                    <span className="price">${item.price} <span>/person</span> </span>
                                    {/* <span className="quantity">Qty: {item.quantity} </span> */}
                                    <button onClick={() => removeFromCart(item.id)} className="removeBtn">Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className="total">
                            <h4>Total: ${getTotal()}</h4>
                        </div>
                        <button onClick={handleAlert} className="checkoutBtn">Book Package</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;
