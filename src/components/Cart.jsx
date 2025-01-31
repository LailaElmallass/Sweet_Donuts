import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash } from 'lucide-react';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/CartSlice';
import '../style/Cart.css';

function Cart() {
    const cartItems = useSelector(state => state.cartItems.cartItems);
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);

    return (
        <div className='container'>
            <h1>My Cart</h1>

            {cartItems.length > 0 ? (
                <table className='tableau'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price} $</td>
                                <td>
                                    <button className='btnQuantity' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                    {item.quantity}
                                    <button className='btnQuantity' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                </td>
                                <td>{(item.price * item.quantity).toFixed(2)} $</td>
                                <td>
                                    <Trash onClick={() => dispatch(removeFromCart(item.id))} style={{ cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'><strong>Total Price</strong></td>
                            <td><strong>{total} $</strong></td>
                        </tr>
                    </tfoot>
                </table>
            ) : (
                <p className='empty-cart-message'>Your Cart is empty 😉😉</p>
            )}
        </div>
    );
}

export default Cart;
