import React, { useEffect, useState } from "react"
import axios from 'axios';
import SinglePro from "./SinglePro";
import Cart from "./Cart";


export default function Dashboard(){
    let [pro,setPro]=useState([]);
    
let [cart,setCart]=useState([])

    function addToCart(ele) {
        setCart([...cart, ele]);
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((ele)=>setPro(ele.data))
        
    },[])

console.log(cart)
    return (
        <>
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


