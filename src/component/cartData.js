import React from 'react';
import { useContext, useMemo } from "react";
import {AppContext} from "../App";
import {Link} from 'react-router-dom';
import './decor.css';
import { FaTrash, FaPlus, FaShoppingCart } from 'react-icons/fa';


function CartData () {
    const { cart, removeProductQuantity, addProductQuantity } = useContext(AppContext)
    let totalPrice = 0;
    let totalQuantity = 0;
    const data = useMemo(
        () => calculateTotal(cart),
         [cart]
    );
    function calculateTotal(todos) {
        return cart.map((item) => {
            totalQuantity += item.quantity
            totalPrice += item.quantity * item.price
        });
    }
    const addToCart = (product) => {
        addProductQuantity(product.name)
    }
    const removeFromCart = (cartItem) => {
        removeProductQuantity(cartItem.name)
    }
    return (
        <div style={{backgroundColor: '#008080'}}>
        <div className='cart'  >
            <section className="h-100" >
       <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100" >
       <div className="col-10" >
 <div className="d-flex justify-content-between align-items-center mb-4">
       <h3 className="fw-normal mb-0 text-white" >Shopping Cart</h3>
   </div>
 {
   cart.map(cartData => {
                                    return (
     <div className="card rounded-3 mb-4" key={cartData.name}>
    <div className="card-body p-4">
     <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
         <img
        src={cartData.url}
 className="img-fluid rounded-3" alt="" />
     </div>
  <div className="col-md-3 col-lg-3 col-xl-3">
     <p className="lead fw-normal mb-2">{cartData.name}</p>
      </div>
    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
    <button className="btn" disabled={cartData.quantity < 1} onClick={() => removeFromCart(cartData)}>
  <FaTrash />
</button>


   <input id="form1" min="0" name="quantity" value={cartData.quantity} type="number"
     className="form-control form-control-sm"/>

<button className="btn" onClick={() => addToCart(cartData)}>
  <FaPlus />
</button>

    </div>
  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
<h5 className="mb-0">   
 {(cartData.price * cartData.quantity).toFixed(2)}
 </h5>
 </div>
  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
   <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
  </div>
  </div>
 </div>
 </div>) })}
                           
 <div className="d-flex justify-content-between mb-5">
 <h5 className="text-uppercase">Items</h5>
 <h5>{totalQuantity}</h5>
 </div>
 <div className="d-flex justify-content-between mb-5">
  <h5 className="text-uppercase">Total Price</h5>
    <h5>{totalPrice}</h5>
    </div>

 {/* button on cart page */}   
  <div>
                                <Link to={'/checkout'}  className='checklink'>
                                <button className='checkbtn'> Checkout </button>
                                </Link>
                            </div>
                            {/* button on cart page */}

                        </div>
                    </div>

                </div>

            </section>
        </div>
        </div>
    );
};

export default CartData;