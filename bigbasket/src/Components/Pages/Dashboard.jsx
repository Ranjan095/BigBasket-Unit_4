import React, { useEffect, useState } from "react"
import axios from 'axios';


export default function Dashboard(){
    let [pro,setPro]=useState([]);
    let [item,setItem]=useState(0);



    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((ele)=>setPro(ele.data))
        
    },[])

    let handleClick=(val)=>{
        setItem(item+val)
    }

    return (
        <>
        <div>
        <h2>My Smart Basket</h2>
       
       <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:'5px'}}>
       {pro.map((ele)=>
        <div key={ele.id} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:'10px'}}>
            <img style={{width:'200px'}} src={ele.image}></img>
            <h5>{ele.name}</h5>
            <p>{ele.title}</p>
            <p>{ele.weight}</p>
            <p>₹ {ele.price}</p>
            
            <button disabled={item==0} onClick={()=>{handleClick(-1)}}>-</button>
            <button disabled>{item}</button>
            <button onClick={()=>{handleClick(1)}}>+</button>{" "}

            <button>Add to cart</button>
        </div>
        )}
       </div>
       
        </div>
       


        </>
    )
}


