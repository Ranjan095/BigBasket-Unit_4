
import { useState } from "react";


export default function SinglePro({addToCart,ele}){
    let [item,setItem]=useState(0);


    let handleClick=(val)=>{
        setItem(item+val)
    }

    return <div  style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:'10px'}}>
            <img style={{width:'200px'}} src={ele.image}></img>
            <h5>{ele.name}</h5>
            <p>{ele.title}</p>
            <p>{ele.weight}</p>
            <p>₹ {ele.price}</p>

            <button disabled={item==0} onClick={()=>{handleClick(-1)}}>-</button>
            <button disabled>{item}</button>
            <button onClick={()=>{handleClick(1)}}>+</button>{" "}

            <button onClick={()=>addToCart(ele)}>Add to cart</button>
        </div>
        
        
}