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
useEffect(async () => {
  const dataa= await getAllCategories();
  setCategories(dataa?.data?.categories);

  const produ = await getAllProducts();
  setProducts(produ?.data?.products);

 },[])
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
                <th>Price</th>
                <th>CategoryID</th>
                <th>Image</th>
                
            </tr>
        </thead>
        <tbody>
          {
            products?.map(item => {
               return (
                <tr>
                <td>{item.name}</td>
                <td>{item.price}Rs</td>
                <td>{item.categoryId}</td>
                <td> <img style={{height:'100px',width:'100px'}} src={item.image} /></td>
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

</div>)
}
export default Productlist;