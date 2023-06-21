import { useContext, useState, useEffect } from "react";
import {AppContext} from '../App';
import { useParams } from "react-router-dom";
import './decor.css';
import { getAllProducts } from "../services/api";

function CategoryProducts(){
  const [products,setProducts]=useState();

  useEffect(() => {
    async function fetchData() {
      const dataa = await getAllProducts();
      return setProducts(dataa?.data?.products);
      }
      fetchData();
    },[])

  let { detailProduct, cart, addToCardFunction, addProductQuantity } = useContext(AppContext);
  const { productId} = useParams();

  const addToCart = (product) => {
    cart.find(item => item._id === product._id) ? addProductQuantity(product._id) : addToCardFunction(product)
  }

  const product = products?.filter((item) =>  item.categoryId === productId)
  console.log('product ', product)
  return (
    <div style={{backgroundColor: ' #e7e3b9'}}>
      {product?.map((item) => (
        
    <div key={item.name} style={{display: 'flex',   display:' inline-block',  margin:'9px' }}  >

  <div class="card-container" >
  <div class="card"  style={{ maxwidth:' 25rem',height: '27rem'}}>
  
    <img className="images" src={`https://salmic-home-decor.onrender.com/${item.image}`} alt={item.name} style={{width:'17rem'}}/>
   
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