import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './decor.css';
import { addcustomer } from '../../src/services/api';



function SignUp() {
  
const[customerInfo,setCustomerInfo]=useState({
  fname:"",
  lname:"",
  email:"",
  password:"",
  cpassword:"",
})
const{fname,lname,email,password,cpassword}=customerInfo;
const[passwordmatching,setPasswordmatching]=useState(false);
  const inputRef = useRef(null);
  const navigate=useNavigate();

const handleChange=(e)=>{
setCustomerInfo({...customerInfo,[e.target.name]:e.target.value});
setPasswordmatching(false)
}
const adddetails = async (e) => {
  e.preventDefault();
  if (password !== cpassword) {
    setPasswordmatching(true);
    alert("Password and confirm password do not match.");
    return;
  }

  try {
    const response = await addcustomer(customerInfo);
    if (response.status === 200) {
      setCustomerInfo({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
      });
      navigate("/login");
    } else if (response.status === 409) {
      const { message } = response.data;
      alert(message);
    } 
  } catch (error) {
    console.log("Error:", error);
    alert("Failed to create account.Same email try another one");
  }
};


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return(

<div className='forming' style={{ backgroundColor: '#008080', height: '100vh' }}>
<form className="form">
  <p className="title">Register</p>
  <p className="message">Signup now and get full access to our app.</p>
  <div className="flex">
    <label>
      <input
        ref={inputRef}
        required
        placeholder=""
        type="text"
        className="input"
        name='fname'
        value={fname} onChange={(e) => handleChange(e)} 
      />
      <span>Firstname</span>
    </label>

    <label>
      <input required placeholder="" type="text" className="input"  name='lname' value={lname} onChange={(e) => handleChange(e)}  />
      <span>Lastname</span>
    </label>
  </div>

  <label>
    <input required placeholder="" type="email" className="input" name='email' value={email} onChange={(e) => handleChange(e)} />
    <span>Email</span>
  </label>
  


  <label>
    <input required placeholder="" type="password" className="input" name='password' value={password} onChange={(e) => handleChange(e)} />
    <span>Password</span>
  </label>
  <label>
    <input required placeholder="" type="password" className="input" name='cpassword'  value={cpassword} onChange={(e) => handleChange(e)} />
    <span>Confirm password</span>
  </label>

 <button className="submit" onClick={(e) => adddetails(e)}>Submit</button>
  <p className="signin">
    Already have an account? <Link to="/login">Sign in</Link>
  </p>

</form>
</div>
);
}

export default SignUp;
