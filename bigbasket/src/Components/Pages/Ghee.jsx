import { useEffect,axios, useState } from "react"
import Navbar from "./Navbar";

export default function Ghee(){
let [item,setItem]=useState([]);

    function getData(){
        // axios.get('http://localhost:3000/products').then((ele)=>console.log(ele))
        return fetch('http://localhost:3000/products').then((ele)=>ele.json())
    }
    useEffect(()=>{
        getData().then((ele)=>setItem(ele))
    },[])

    let ghee=item.filter((ele)=>{
        return ele.category==='ghee';
    })
    console.log(ghee)

    return <>
    <Navbar/>
    <div style={{marginTop:"100px"}}>
     <h1>Ghee </h1>

    <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:'5px',padding:'20px'}}>
        {ghee?.map((ele)=>
            <div key={ele.id}  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:'10px'}}>
            <img style={{width:'200px'}} src={ele.image}></img>
            <h5>{ele.name}</h5>
            <p>{ele.title}</p>
            <p>{ele.weight}</p>
            <p>₹ {ele.price}</p>
{/*         
            <button disabled={count==0} onClick={()=>{handleClick(-1)}}>-</button>
            <button disabled>{count}</button>
            <button onClick={()=>{handleClick(1)}}>+</button>{" "}
        
            <button >Add to cart</button> */}
        </div>
        )}
    </div>

    </div>
    </>
   
}