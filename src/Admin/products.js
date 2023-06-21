import { useEffect,useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { addProduct, getAllCategories, getAllProducts } from "../services/api";
function Productlist(){
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
 },[categories, products])


 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('categoryId', categoryId);
  data.append('name', name);
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

        <form className="admin-form" 
         style={{ backgroundColor: 'white', borderRadius: '2rem' ,
        width:'70rem',position:'relative',left:'-17rem'}}
        >
          <h3 className="form-title">Products</h3>
        
  <table id="example" class="table table-striped" >
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
export default Productlist;