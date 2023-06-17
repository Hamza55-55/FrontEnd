import { Link, useNavigate } from 'react-router-dom'
import './decor.css';
import { FaShoppingCart, FaSearch ,FaUser} from 'react-icons/fa';
import {useContext} from "react";
import {AppContext} from "../App";
function Navbar(){
    const { cart, removeProductQuantity, addProductQuantity } = useContext(AppContext)
    const navigate=useNavigate();
    let totalQuantity = 0;
    cart.map((item) => totalQuantity += item.quantity)

    function adminPage(){
      navigate('/admin');
               }
      return(

 
        <div >
      <nav class="navbar navbar-expand-lg" id="navbar" >
              <div class="container">
                <a class="navbar-brand" href="" id="logo" >Salmic</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                  <span><i class="fa-solid fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                  
                    
                    <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                      <FaSearch />
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">
                      <FaShoppingCart />
                        {totalQuantity}
                    </Link>
                  </li>
                
                  <li className="nav-item">
                            <Link to="/login" className="nav-link">
                              <FaUser />
                            </Link>
                          </li>
                </ul>
                <button className='bytn' onClick={adminPage}>
  Admin
</button>

               
                </div>
              </div>
            </nav> 
     

              </div>
              
      );
  }export default Navbar;
    