import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './../../../StateProvider.js';
import { getBasketTotal } from './../../../reducer.js';
import { useHistory } from 'react-router-dom';
import './Subtotal.css';

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket?.length} items) : <strong>{ value }</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix= {"₹"}            
            />

            <button onClick={() => history.push('/payment')}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;
