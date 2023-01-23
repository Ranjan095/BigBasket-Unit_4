
import {React} from "react";
import { Routes,Route } from "react-router-dom";
import Dashboard from "../Components/Pages/Dashboard";
import Login from "../Components/Pages/Login";
import Tea from "../Components/Pages/Tea";
import Ghee from "../Components/Pages/Ghee";
import Nandni from "../Components/Pages/Nandni";
import Cart from "../Components/Pages/Cart";
import Home from "../Admin/Component/Home";
import AdminLogin from "../Admin/Component/AdminLogin";
import Fruits_Vegitable from "../Components/Pages/Fruits_vegitable";


export default function RoutesComp(){

    return (
        <div>
           

            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='fruits&vegitabls' element={<Fruits_Vegitable/>}/>
                <Route path="/tea" element={<Tea/>}/>
                <Route path="/ghee" element={<Ghee/>}/>
                <Route path='/nandni' element={<Nandni/>}/>;
                <Route path='/cart' element={<Cart/>}/>
                <Route path="/admin" element={<Home/>}/>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
            </Routes>
        </div>
    )
}