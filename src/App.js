import {createContext, useState,useEffect} from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import LoginPage from "./pages/loginpage";
import SignUpPage from "./pages/signpage";
import Aboutpage from "./pages/aboutpage";
import Contactpage from "./pages/contactpage";
import Checkout from "./pages/Checkout";
import AdminPage from "./pages/ADMINPAGES/adminaditionpage";
import AdminImagePage from "./pages/ADMINPAGES/adminimagepage";
import AdminProductpage from "./pages/ADMINPAGES/adminproducts";
import SellerNAvPage from "./pages/Sellerpages/sellernavpage";
import SellerCategoryPage from "./pages/Sellerpages/category";
import SellerProductpage from "./pages/Sellerpages/product";

let initialState = {
    cart: []
}
      export const AppContext= createContext(initialState);

function App()

{
  const [state, setState] = useState(initialState);

    function addToCardFunction(product){
        let data = {
            ...state,
            cart: [product, ...state.cart]
        }
        setState(data)
    }

    function addProductQuantity(id){
        state.cart[state.cart.findIndex(cartItem => cartItem._id === id)].quantity++
        let data = {
            ...state,
            cart: [...state.cart]
        }
        setState(data)
    }

    function removeProductQuantity(id){
        for (var i in state.cart) {
            if (state.cart[i]._id === id) {
                state.cart[i].quantity --;

                if (state.cart[i].quantity === 0) {
                    state.cart.splice(i, 1); // removes item from the array
                }
            }
        }

        let data = {
            ...state,
            cart: [...state.cart]
        }
        setState(data)
    }

  return (
<div>
    {/* <Fee/> */}
    {/* <Productlist/> */}
   <AppContext.Provider value={{
      cart: state.cart,
      addToCardFunction,
      addProductQuantity,
      removeProductQuantity,
  }}>
 
  <Routes>
 
  <Route  path="/" element={<Home/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/product/:productId" element={<Details/>}/>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/signup" element={<SignUpPage/>}></Route>
      <Route path="/about" element={<Aboutpage/>}></Route>
      <Route path="/contact" element={<Contactpage/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>

      <Route path="/Admin" element={<AdminImagePage/>}></Route> 
      <Route path="/Viewcategory" element={<AdminPage/>}></Route>
     <Route path="/viewproducts" element={<AdminProductpage/>}></Route> 
     
     <Route path="/Seller" element={<SellerNAvPage/>}></Route> 
      <Route path="/category" element={<SellerCategoryPage/>}></Route>
     <Route path="/products" element={<SellerProductpage/>}></Route> 
      </Routes>
  </AppContext.Provider> 
 
    </div>
  );
}

export default App;
