import { useEffect,useRef,useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./decor.css";
import { getcustomer } from '../../src/services/api.js';


function Login(){
  const[details , setdetails]=useState({
		Email:"",
		Password:""
	});
  const [customerdetails , setcustomerdetails]= useState([]);
  const[datamismatched,setDatamismatched]=useState(false);
	const{Email , Password}=details;

    const Ref =useRef(null);

	const navigate= useNavigate();

	const handleChange = (event) =>{
	setdetails({...details , [event.target.name]: event.target.value });
	setDatamismatched(false);
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await getcustomer(Email, Password); // Pass email and password
		  const { success, customer } = response.data;
	  
		  if (success) {
			// Customer data found, perform necessary actions
			navigate("/"); // Replace "/home" with the appropriate route to your home page
		  } else {
			// Customer data not found
			setDatamismatched(true);
		  }
		} catch (error) {
		  console.log("Error:", error);
		  // Handle the error or show appropriate message to the user
		}
	  };
	  
	  



    useEffect(() =>{
        Ref.current.focus();
    },[]);


    return(
    <div className="froms">
        
    <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input name="Email" ref={Ref} onChange={handleChange} type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input onChange={handleChange} type="password" name="Password" id="password" placeholder="Enter password"/>
        </div>
         <button type="submit" class="submit"  onClick={(e) => handleSubmit(e)}>
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to={'/signup'}><a  href="">Sign up</a></Link>
      </p>
     
   </form>

    </div>);
}
export default Login;

