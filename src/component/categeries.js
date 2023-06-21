import { useContext, useState,useEffect} from "react";
import {AppContext} from '../App'
import {useNavigate} from "react-router-dom";
import './decor.css';
import { getAllCategories } from "../services/api";
const Categeries=()=>{
  useEffect(() => {
    async function fetchData() {
      const dataa = await getAllCategories();
      setCategories(dataa?.data?.categories);
      }
       fetchData();
    },[])

  const navigate = useNavigate();
    
    // let data = useContext(AppContext);

    
    const [categories,setCategories]=useState();

  const handleitemClick=(item)=>{
      navigate(`/product/${item}`)
}

    
    return(<div style={{backgroundColor:' #e7e3b9'}}>
      <div><h1 className="heading">Categeries</h1></div>
    {
      
        categories?.map(item => {
           return(
         
       
            <div class="col-md-6" id="cards" >
            <div class="card" style={{boxShadow:'3px 2px 1px  darkgrey'}} >
                    
              <img className="images" alt={item.name} src={item.url} onClick={()=>handleitemClick(item._id)}></img>
        
              <span className='categoryspan'>
                {item.name}
              </span>
   

            </div>
          </div>
           )
        })
    }
    </div>);
    
}
export default Categeries;