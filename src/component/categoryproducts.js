import { useContext, useState, useEffect } from "react";
import {AppContext} from '../App';
import { useParams } from "react-router-dom";
import './decor.css';

function CategoryProducts(){
  
  let { detailProduct, cart, products, addToCardFunction, addProductQuantity } = useContext(AppContext);
  const { productId} = useParams();

  const addToCart = (product) => {
    cart.find(item => item.name === product.name) ? addProductQuantity(product.name) : addToCardFunction(product)
  }

  const product = detailProduct .filter((item) => item.id == productId)
  return (
    <div style={{backgroundColor: ' #e7e3b9'}}>
      {product.map((item) => (
        
    <div key={item.name} style={{display: 'flex',   display:' inline-block',  margin:'9px' }}  >

  <div class="card-container" >
  <div class="card"  style={{ maxwidth:' 25rem',height: '27rem'}}>
  
    <img className="images" src={item?.url}  style={{width:'17rem'}}/>
   
    <span className='productspan'>{item?.name}</span>
    <span className='productspan2'>{item.price}.00 RS</span>
    <button className="butt" onClick={() => addToCart(item)}>Add To Cart</button>
  </div>
</div>

</div>
      ))}
    </div>
  );
}
export default CategoryProducts;