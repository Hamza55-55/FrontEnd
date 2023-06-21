import React, { } from 'react';
// import '../component/decor.css';
import { Link } from 'react-router-dom';

function AdminNav() {


  return (
    <div>

<nav class="navbar navbar-expand-lg" id="navbar" >
              <div class="container">
                <a class="navbar-brand" href="/" id="logo" >Salmic</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                  <span><i class="fa-solid fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                  
                    
                    <ul className="navbar-nav me-auto" style={{marginLeft:'20rem'}}>
                    <li className="nav-item" >
                    <Link to="/" className="nav-link active" >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Viewcategory" className="nav-link active">
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Viewproducts" className="nav-link">
                     Product
                    </Link>
                  </li>
                
                 
                </ul>
             
   

               
                </div>
              </div>
            </nav> 

            <div style={{fontFamily:'cursive',textAlign:'center',backgroundColor:'#008080',height:'4rem',color:'white'}}><h1 >Admin Panel</h1></div>
    </div>
   
  );
}

export default AdminNav;
