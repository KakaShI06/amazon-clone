import React from 'react';
import { useStateValue } from './../../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, img, title, price, rating }) {

    const [ { }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

    return (
        <div className = "checkoutProduct">
            <img alt="" className="checkProduct__img" src={img} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_,i) => <p key = {i} className="checkoutProduct__star">★</p>)
                    }
                </div>

                <button className = "checkoutProduct__button" onClick = {removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
