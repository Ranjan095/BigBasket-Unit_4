import React, { useEffect, useState } from "react"
import axios from 'axios';
import SinglePro from "./SinglePro";
import { useContext } from "react";
import { cartContext } from "../../CartContext/CartContext";
import Navbar from "./Navbar";

export default function Dashboard(){
    let [pro,setPro]=useState([]);
    let [cart,setCart]=useState([])
    let [loding,setLoading]=useState(false) 
    let [err,setErr]=useState(false);

    

    function addToCart(ele) {
        setCart([...cart, ele]);
        
    }

    useEffect(()=>{
        setLoading=true;
        axios.get("http://localhost:3000/products")
        .then((ele)=>{
            setPro(ele.data);
            setLoading=false;
        }).catch((err)=>console.log('dfsfadf'))
        
    },[]);
    

// console.log(cart)

if(loding){
    return <h1>Loading....</h1>
}else{
  return  (
        <>
         <Navbar/>
        <div style={{marginTop:'120px'}}>
        <h2>My Smart Basket</h2>
       
       <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:'5px',padding:'20px'}}>
       {pro.map((ele)=><SinglePro key={ele.id} ele={ele} addToCart={addToCart}/>

        )}
       </div>
        </div>
       


        </>
    )
}
   
}


