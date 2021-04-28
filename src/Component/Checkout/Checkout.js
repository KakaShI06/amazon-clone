import React from 'react';
import Subtotal from './Subtotal/Subtotal.js';
import { useStateValue } from './../../StateProvider.js';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct.js';
import FlipMove from 'react-flip-move';
import './Checkout.css';

function Checkout() {

    const [{ user, basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className = "checkout__add"
                    src="https://m.media-amazon.com/images/I/41ReGMaiZxL._SR1242,100_.jpg"
                    alt= "ads"
                />

                <div className="checkout__title">
                    <h2>Welcome {user? user?.email: 'Guest'}</h2>
                    <h2>Your Shopping Basket</h2>
                </div>
                
                <FlipMove>
                        {basket.map(item => <div>
                        <CheckoutProduct
                            id={item.id}
                            img={item.img}
                            price={item.price}
                            rating={item.rating}
                            title={item.title}
                        />
                    </div>)}
                </FlipMove>
                
            

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
