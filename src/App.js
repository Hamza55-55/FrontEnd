import {createContext, useState} from "react";
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



let initialState = {
  products: [
      {
          id: 1,
          name: 'Art',
          url:'arts.png'
      },
      {
          id: 2,
          name: 'Indoor Plants',
          url: 'https://th.bing.com/th/id/R.9ffda42627448fb751f15de5e5fa1f58?rik=s1G6UFQyRjgNjQ&riu=http%3a%2f%2fgalerie-filiale.de%2fmedia%2fimg%2fworks%2fJT_Turner_ot_Blume_2_2020.jpg&ehk=3HOEZGBNmL0w1nrtuAFd3SiXPQJVIXyG1feWxpSBHN0%3d&risl=&pid=ImgRaw&r=0'
      },
      {
          id: 3,
          name: 'Rugs & Cushions',
          url: 'https://mydecorative.com/wp-content/uploads/2016/11/carpet-designs.jpg'
      },
      {
          id: 4,
          name: 'Antiques & Sculpturs',
          url: '	https://i.etsystatic.com/35433231/r/il/927b16/4908007771/il_340x270.4908007771_tj7g.jpg'
      },

],

    detailedProduct: [
                {
                    id: 1,
                    name: 'Glass framed leaf',
                    price: 2000,
                    quantity: 1,
                    url:'https://i.pinimg.com/originals/f9/8f/08/f98f086b31b953639ae2b1b656f8b083.jpg'
                },
                {
                    id: 1,
                    name: 'Glass Crystel Frame',
                    price:2800 ,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/23306304/r/il/7a5405/4644204241/il_340x270.4644204241_sp8n.jpg'
                },
            
                {
                    id: 1,
                    name: 'Frame Art ',
            
                    price: 1500,
                    quantity: 1,
                    url: 'https://i.pinimg.com/originals/bd/f0/79/bdf0795ba0cee26c748ffac43ced3778.jpg'
                },
                {
                    id: 1,
                    name: 'Spring Frame ',
                    price: 1200,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/8052643/r/il/9b4257/1871244782/il_fullxfull.1871244782_t1o9.jpg'
                }
                ,
                {
                    id: 1,
                    name: 'Steel Frame',
                    price: 1780,
                    quantity: 1,
                    url:'https://i.pinimg.com/originals/ac/0b/84/ac0b84021a11352c9302d36a0ec50555.jpg'                },
            
                {
                    id: 1,
                    name: ' Islamic calography',
            
                    price: 1299,
                    quantity: 1,
                    url: 'https://i.pinimg.com/originals/11/ee/5c/11ee5c6593b693bbaa7ed1a2c77f6714.jpg'
                },
            
                {
                    id: 2,
                    name: 'Indoor house planter ',
                    price:1288 ,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/34278223/r/il/811cb7/4981244573/il_794xN.4981244573_fz22.jpg'
                    
                },
                {
                    id: 2,
                    name: 'Rope Planter Basket',
                    price: 3232,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/42566692/r/il/c974d9/5016702791/il_794xN.5016702791_cbzd.jpg'
                },
                {
                    id: 2,
                    name: 'BendAble Pole Basket ',
                    price: 1323,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/22239508/r/il/fc4b08/3264207217/il_794xN.3264207217_mnq0.jpg'
                },
                {
                    id: 2,
                    name: 'Handmade Basket ',
                    price: 2221,
                    quantity: 1,
                    url: '	https://i.etsystatic.com/30449428/r/il/0cb046/4402839091/il_794xN.4402839091_3qz4.jpg'
                },
                
                {
                    id: 2,
                    name: ' ',
                    price: 2212,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/35792106/c/407/324/0/167/…/745876/4907457701/il_340x270.4907457701_thzo.jpg'
                },
                {
                    id: 2,
                    name: 'Plant Basket ',
                    price: 9000,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/34352609/c/2400/1907/0/44…/256ef8/4323444506/il_340x270.4323444506_3lmg.jpg'
                },
                {
                    id: 2,
                    name: 'People Coffee planter ',
                    price: 5000,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/21128131/c/1816/1444/527/…/ce736b/4016038295/il_340x270.4016038295_q09b.jpg'
                },
                

                

                

                {
                    id: 3,
                    name: 'Traditional Rug',
                    price: 2300,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/34428809/r/il/359adb/4969823938/il_340x270.4969823938_ghgd.jpg'
                },
                {
                    id: 3,
                    name: 'Traditional carpets',
                    price: 12000,
                    quantity: 1,
                    url: 'https://sirv.riflepaperco.com/rpc/catalog/product/r/u/rug036-01.jpg?profile=riflepaperco&q=100&w=743&h=620'
                },
            
                {
                    id: 3,
                    name: ' Rug',
            
                    price: 2321,
                    quantity: 1,
                    url: 'https://tiimg.tistatic.com/fp/3/073/printed-carpets-852.jpg'
                },
               
                {
                    id: 3,
                    name: 'White center Piece',
                    price: 1111,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/24992666/c/800/635/0/164/…/79cef5/3930540546/il_340x270.3930540546_3ok4.jpg'
                },
                {
                    id: 3,
                    name: 'Iceland Bear Rug',
                    price: 22990,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/9917022/r/il/697ba7/2273305480/il_340x270.2273305480_9nxg.jpg'
                },
            
                {
                    id: 3,
                    name: 'Handmade center piece ',
            
                    price: 7077,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/20270289/r/il/719883/3709958893/il_340x270.3709958893_8k96.jpg'
                },
                {
                    id: 3,
                    name: 'Unique decorative pillow',
            
                    price: 900,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/9805715/c/2304/1829/0/19/…/b9a2ca/1579174505/il_340x270.1579174505_aq7l.jpg'
                },
                {
                    id: 3,
                    name: 'Luxury Dark Green pillow',
            
                    price: 4000,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/14749146/r/il/040e74/3881489362/il_340x270.3881489362_rkxj.jpg'
                },


                {
                    id: 4,
                    name: 'Russian metal Glass holder ',
                    price: 5455,
                    quantity: 1,
                    url:  'https://i.etsystatic.com/9927344/r/il/e20258/654904216/il_340x270.654904216_4km1.jpg'
                }
                ,
                {
                    id: 4,
                    name: 'Elephant decor ',
                    price: 999,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/13507922/c/2218/1761/354/…/a42bc1/1583915761/il_340x270.1583915761_mvhv.jpg'
                },
                {
                    id: 4,
                    name: 'Wood carving tool holder',
                    price: 1000,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/44181424/r/il/06fd73/5018102437/il_340x270.5018102437_le0f.jpg'
                },
                {
                    id: 4,
                    name: 'Birds wooden piece ',
                    price: 1600,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/19076644/c/2156/1713/175/…/518c4f/4953516398/il_340x270.4953516398_704t.jpg'
                },
                {
                    id: 4,
                    name: 'Bathroom Vessel ',
                    price: 65000,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/27810617/c/2553/2029/229/…/ff5422/4611943461/il_340x270.4611943461_1gvi.jpg'
                },
                {
                    id: 4,
                    name: 'Spider Sculptur',
                    price: 2100,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/6750515/r/il/0da71d/955770768/il_340x270.955770768_s8ha.jpg'
                },
                {
                    id: 4,
                    name: 'Dentist sculptur',
                    price: 2900,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/9615449/r/il/efbf2f/1779030661/il_340x270.1779030661_pxnv.jpg'
                },
                {
                    id: 4,
                    name: 'Bronze Family Sculptur',
                    price: 876,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/5609450/c/1458/1157/0/183…/035326/1551870609/il_340x270.1551870609_a5mu.jpg'
                }
                ,
                {
                    id: 4,
                    name: 'Tobacco pipe',
                    price: 1200,
                    quantity: 1,
                    url: 'https://i.etsystatic.com/7502837/r/il/0ebe64/2881179808/il_340x270.2881179808_4oi3.jpg'
                    
                }

    ],
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

    function addProductQuantity(productName){
        state.cart[state.cart.findIndex(cartItem => cartItem.name === productName)].quantity++
        let data = {
            ...state,
            cart: [...state.cart]
        }
        setState(data)
    }

    function removeProductQuantity(productName){
        for (var i in state.cart) {
            if (state.cart[i].name === productName) {
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
      categories: state.products,
      detailProduct: state.detailedProduct,
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
      <Route path="/admin" element={<AdminImagePage/>}></Route>
      <Route path="/adminaddition" element={<AdminPage/>}></Route>
      {/* <Route path="/adminview" element={<AdminViewPage/>}></Route> */}
      </Routes>
  </AppContext.Provider> 
 
    </div>
  );
}

export default App;
