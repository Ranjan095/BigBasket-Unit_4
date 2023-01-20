import {React,useState, useEffect} from "react"

export default function Fruits_Vegitable(){
    let [item,setItem]=useState([]);
    let [count,setCount]=useState(0);

    let handleClick=(val)=>{
        setCount(count+val)
    }

    let newData=item.filter((ele)=>{
        return ele.category==='Fresho'
    })
    


   function getItem(){
    return fetch('http://localhost:3000/products').then((ele)=>ele.json())
   }
   useEffect(()=>{
    getItem().then((ele)=>setItem(ele))
    
   },[])
   
// console.log(item)
    return <div style={{marginTop:'100px'}}>
    <h1>Fruits & Vegitables</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:'5px',padding:'20px'}}>
   {newData.map((ele)=>
    <div key={ele.id}  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:'10px'}}>
    <img style={{width:'200px'}} src={ele.image}></img>
    <h5>{ele.name}</h5>
    <p>{ele.title}</p>
    <p>{ele.weight}</p>
    <p>₹ {ele.price}</p>

    <button disabled={count==0} onClick={()=>{handleClick(-1)}}>-</button>
    <button disabled>{count}</button>
    <button onClick={()=>{handleClick(1)}}>+</button>{" "}

    <button >Add to cart</button>
</div>
   )}
   </div>
</div>
}