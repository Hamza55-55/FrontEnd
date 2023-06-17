import { useState,useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import  AddProduct from './products'
import { addProduct, getAllProducts  } from '../services/api';



const Productlist=()=>{
  const [products,setProducts]=useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgFile, setImgFile] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('image', imgFile);
    // const data = {
    //   name: name,
    //   price: price,
    //   imgFile: imgFile,
    // };

    try {
      const response = await addProduct(data);
      console.log('response ',response)
      setName('');
      setPrice('');
      setImgFile('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(async () => {
   const data = await getAllProducts();
   setProducts(data.data.products);
   console.log(data.data.products);
  },[])
 
return(

  <div style={{ backgroundColor: '#008080', height: '100vh', fontFamily: 'cursive' }}>
      <div className="admin-page">
        <h2 className="admin-title" style={{ color: 'white' }}>
          Admin Panel
        </h2>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="admin-form" onSubmit={handleSubmit} style={{ backgroundColor: 'white', borderRadius: '2rem' }}>
          <h3 className="form-title">Add Product</h3>

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
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

          <button type="submit" className="btn-submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{position:'relative',left:'42rem',marginTop:'-2rem',
        backgroundColor:'turquoise',color:'white',border:'none'}} className="btn btn-warning">Add Product</button>

        <form className="admin-form" 
         style={{ backgroundColor: 'white', borderRadius: '2rem' ,
        width:'70rem',position:'relative',left:'-17rem'}}
        >
          <h3 className="form-title">Products</h3>

          
  <table id="example" class="table table-striped" >
        <thead>
            <tr>
                <th>ProductName</th>
                <th>Price</th>
                <th>Image</th>
                
            </tr>
        </thead>
        <tbody>
          {
            products?.map(item => {
               return (
                <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>Edinburgh</td>
                <td><span><FaEdit style={{position:'relative',left:'-1rem',color:'green'}}/></span>
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
export default Productlist;