import { Link } from "react-router-dom";
 
export default function NavBar(){
 
    return <>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <Link to="/home">Home</Link>
    <Link to='/addproduct'>Add Product</Link>
    </div>
    
    </>
}