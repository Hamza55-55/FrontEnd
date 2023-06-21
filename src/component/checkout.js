import React, { useState, useContext, useEffect, useRef } from 'react';
import {AppContext} from "../App";

import "./decor.css";
const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cartData, setCartData] = useState([]);
    const { cart } = useContext(AppContext)

    const nameRef = useRef();

    useEffect(() => {
        return () => {
            setCartData(cart)
            nameRef.current.focus();
        }
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

       
    };

    return (
        <div className="row container" id='checkout' style={{backgroundColor:' #008080'}}>
            <h1>Checkout</h1>
            <div className="col-md-7">
                <form onSubmit={handleFormSubmit} className='formss'>

                    <label >Name</label>
                    <input
                        ref={nameRef}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />



                    <label >Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label >Address</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></textarea>



                    <label >City</label>
                    <select
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    >
                        <option value=""></option>
                        <option value="city1">Abbottabad</option>
                        <option value="city2">Islamabad</option>
                        <option value="city3">Lahore</option>
                    </select>



                    <label >Country</label>
                    <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    >
                        <option value="">Select a state</option>
                        <option value="state1">Pakistan</option>
                        <option value="state2">India</option>
                        <option value="state3">Bangladesh</option>
                    </select>


                    <label>Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                    />



                    <label >Payment Method</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value=""></option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">Easypaisa</option>
                        <option value="bankTransfer">Bank Transfer</option>
                    </select>


                    <button className='btyn'>Place Order</button>
                </form>


            </div>

            <div className='col-md-5' >
                <div className="cart-summary">
                    <h2 >Cart Summary</h2>
                        <ul>
                                {cartData.map((item) => (
                                    
                                <li key={item.id}>
                             
                                   
                                    <img src={item.url} style={{width:'7rem',height:'7rem'}}></img>
                                    <span style={{position:'relative',top:'1rem',left:'1rem',color:'white'}}>{item.name} - {item.price}Rs</span>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>

        </div>

    );
};

export default Checkout;