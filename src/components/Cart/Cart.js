import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log('props.cart', props.cart);

    const name = props.cart;

    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>

        </div>
    );
};

export default Cart;