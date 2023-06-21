import { useState,useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {  getAllCategories, addCategory  } from '../services/api';



const AddCatogeries=()=>{
  const [categories,setCategories]=useState();
  // const [category, setCategory] = useState();
  const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  const [imgFile, setImgFile] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    // data.append('price', price);
    data.append('image', imgFile);
   

    try {
      const response = await addCategory(data);
      console.log('response ',response)
      setName('');
      // setPrice('');
      setImgFile('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dataa = await getAllCategories();
      setCategories(dataa?.data?.categories);
    }
    fetchData();
  },[])
  
 
return(

  <div style={{ backgroundColor: '#008080', height: '200vh', fontFamily: 'cursive' }}>
      <div className="admin-page">
       

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" >Add Categories</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="admin-form" onSubmit={handleSubmit} style={{ backgroundColor: 'white', borderRadius: '2rem' }}>
          <h3 className="form-title"style={{fontFamily:'cursive'}}>Add Categeries</h3>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imgFile">ImgFile:</label>
            <input
              id="imgFile"
              type="file"
              onChange={(e) => setImgFile(e.target.files[0])}
              required
            />
          </div>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" 
       >Close</button>
<button type="submit" className="btn-submit"    style={{position:'relative',top:'3.7rem',left:'16rem',borderRadius:'.5rem'}}>
            Add Category
          </button>

         
        </form>
      </div>
    </div>
  </div>
</div>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{position:'relative',left:'42rem',marginTop:'-2rem',
        backgroundColor:'turquoise',color:'white',border:'none'}} className="btn btn-warning">Add Category</button>

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
                  <span><FaTrash  style={{color:'red'}}/></span></td>
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
export default AddCatogeries;