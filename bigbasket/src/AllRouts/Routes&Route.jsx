
import {React} from "react";
import { Routes,Route } from "react-router-dom";
import Dashboard from "../Components/Pages/Dashboard";
import Login from "../Components/Pages/Login";
import Fruits_Vegitable from "../Components/Fruits_vegitable";
import Tea from "../Components/Pages/Tea";
import Ghee from "../Components/Pages/Ghee";
import Nandni from "../Components/Pages/Nandni";
import Cart from "../Components/Pages/Cart";


export default function RoutesComp(){

    return (
        <div>
           

            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/furits&vegitables' element={<Fruits_Vegitable/>}/>
                <Route path="/tea" element={<Tea/>}/>
                <Route path="/ghee" element={<Ghee/>}/>
                <Route path='/nandni' element={<Nandni/>}/>;
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    )
}