

import { Routes,Route } from "react-router-dom";
import AddProduct from "../Component/AddProduct";
import Home from "../Component/Home";
import NavBar from "../Component/NavBar";

export default function Routs(){

    return <>
        <Routes>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </>
}