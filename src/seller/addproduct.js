import { useEffect,useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import React from "react";
import { addProduct, getAllCategories, getAllProducts } from "../services/api";
function AddProductlist(){
  const [categories,setCategories]=useState();
  const [products,setProducts]=useState();
  const [categoryId,setCategoryId]=useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgFile, setImgFile] = useState('');

 useEffect(() => {
  async function fetchData() {
    const dataa= await getAllCategories();
    setCategories(dataa?.data?.categories);
  
    const produ = await getAllProducts();
    setProducts(produ?.data?.products);
    }
     fetchData();
  },[])

 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('categoryId', categoryId);
  data.append('name', name);
  data.append('quantity', 1);
data.append('price',price);
  data.append('image', imgFile);
 

  try {
    const response = await addProduct(data);
    console.log('response ',response)
    setCategoryId('')
    setName('');
    setPrice('');
    setImgFile('');
  } catch (error) {
    console.error('Error adding category:', error);
  }
};

return(<div>
    
  <div style={{ backgroundColor: '#008080', height: '200vh', fontFamily: 'cursive' }}>
      <div className="admin-page">
    

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" >Add Products</h5>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={ handleSubmit} className="admin-form" style={{ backgroundColor: 'white', borderRadius: '2rem' }}>
          <h3 className="form-title"style={{fontFamily:'cursive'}}>Add Products</h3>
            {/* dropdowns */}
            <div class="dropdown">
  <button
  style={{backgroundColor:'tomato',color:'white',border:'none',borderRadius:'.5rem',position:'relative',left:'18rem',top:'1rem'}}
   class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Category
  </button>
  <ul class="dropdown-menu">
  {
            categories?.map(item => {
               return (
            
    <li onClick={() => setCategoryId(item._id)}><a class="dropdown-item" >{item.name}</a></li>
              )
            })
          }
  </ul>
</div>
          {/* dropdown end */}

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
          
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" 
       >Close</button>
<button type="submit" className="btn-submit"    style={{position:'relative',top:'3.7rem',left:'16rem',borderRadius:'.5rem'}}>
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
        
          <table id="example" className="table table-striped">
  <thead>
    <tr>
      <th>ProductName</th>
      <th>CategoryName</th>
  
      <th>Price</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    {products?.map((product) => {
      const category = categories.find((category) => category._id === product.categoryId);
      const categoryName = category ? category.name : '';

      return (
        <tr key={product._id}>
          <td>{product.name}</td>
          <td>{categoryName}</td>
          {/* <td>{product.categoryId}</td> */}
          <td>{product.price} Rs</td>
          <td>
            <img style={{ height: '100px', width: '100px' }} src={product.image} alt={product.name} />
          </td>
          <td>
            <span>
              <FaEdit style={{ position: 'relative', left: '-1rem', color: 'green' }} />
            </span>
            <span>
              <FaTrash style={{ color: 'red' }} />
            </span>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>


       
        </form>
      </div>
    </div>

</div>)
}
export default AddProductlist;