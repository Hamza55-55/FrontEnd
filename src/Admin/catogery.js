import { useState,useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {  getAllCategories, addCategory } from '../services/api';



const Catogeries=()=>{
  const [categories,setCategories]=useState();
   const [name, setName] = useState('');
  const [imgFile, setImgFile] = useState('');

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('image', imgFile);
   

    try {
      const response = await addCategory(data);
      console.log('response ',response)
      setName('');
      setImgFile('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const dataa = await getAllCategories();
      setCategories(dataa?.data?.categories);
    }
    fetchData();
   },[])
 
return(

  <div style={{ backgroundColor: '#008080', height: '200vh', fontFamily: 'cursive' }}>
       <div className="admin-page">
       


        <form className="admin-form" 
         style={{ backgroundColor: 'white', borderRadius: '2rem' ,
        width:'70rem',position:'relative',left:'-17rem'}}
        >
          <h3 className="form-title">Categories</h3>
    
  <table id="example" class="table table-striped" >
        <thead>
            <tr>
                <th>CategoryName</th>
               
           
                <th>Image</th>
                
            </tr>
        </thead>
        <tbody>
          {
            categories?.map(item => {
               return (
                <tr>
                <td>{item.name}</td>
            
                <td> <img style={{height:'100px',width:'100px'}} src={`https://salmic-home-decor.onrender.com/${item.image}`} alt={item.name} /></td>
                <td key={item}><span><FaEdit data-bs-target="#exampleModal" style={{position:'relative',left:'-1rem',color:'green'}}/></span>
                  <span><FaTrash style={{color:'red'}}/></span></td>
            </tr>
              )
            })
          }
        
           
        </tbody>
     
    </table>

       
        </form>
      </div>
    </div>













)
}
export default Catogeries;