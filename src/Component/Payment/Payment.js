import React from 'react';
import CheckoutProduct from './../Checkout/CheckoutProduct/CheckoutProduct.js';
import './Payment.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './../../StateProvider.js';

function Payment() {
    const [{ user , basket }] = useStateValue(); 

    return (
        <div className="payment">
            <div className="payment__container">
                <h1> Checkout (
                     <Link to='/checkout'>{basket?.length} items) </Link>
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address :</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>767 , Parsi Colony, Dinshaw Master Road, Dadar (east)</p>
                        <p> Maharashtra, Mumbai</p>
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                img={item.img}
                                price={item.price}
                                rating={item.rating}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payement Details</h3>
                    </div>
                    <div className="payment__details">


                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Payment;
