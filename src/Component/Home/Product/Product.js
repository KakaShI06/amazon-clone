import React from 'react';
import { useStateValue } from './../../../StateProvider.js';
import './Product.css';

function Product({id, title, img, price, rating }) {
    
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                rating: rating
            },
        })
    }

    

    return (
        <div className="product">
            <div className="product__indo">
                <p className = "product__title">{title}</p>
                <p className="product__price">
                    <small >₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_,i) => <p key = {i} className="product__star">★</p>)
                    }
                    
                </div>
            </div>

            <img
                className="product__img"
                src= {img}
                alt="product-img"
            />
            <button className="product__addbasket" onClick = {addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
