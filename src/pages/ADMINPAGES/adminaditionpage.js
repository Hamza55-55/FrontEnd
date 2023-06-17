
import AdminNav from "../../Admin/adminnavbar";
import Productlist from "../../Admin/productlist";
import Adminaddition from "../../Admin/products";




function AdminPage() {
    return (
        <div>
          
        <AdminNav/>
        {/* <Adminaddition/> */}
        <Productlist/>
        </div>
    )
}

export default AdminPage;