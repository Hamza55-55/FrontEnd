import { useContext } from "react";
import {AppContext} from '../App'
import {useNavigate} from "react-router-dom";
import './decor.css';
const Categeries=()=>{
  const navigate = useNavigate();
    
    let data = useContext(AppContext);

  const handleitemClick=(item)=>{
      navigate(`/product/${item}`)
}

    
    return(<div style={{backgroundColor:' #e7e3b9'}}>
      <div><h1 className="heading">Categeries</h1></div>
    {
      
        data.categories.map(item => {
           return(
         
       
            <div class="col-md-6" id="cards" >
            <div class="card" style={{boxShadow:'3px 2px 1px  darkgrey'}} >
                    
              <img className="images" src={item.url} onClick={()=>handleitemClick(item.id)}></img>
        
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