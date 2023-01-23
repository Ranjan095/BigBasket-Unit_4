import NavBar from "./NavBar"
import React, { useEffect, useState } from "react"
import axios from 'axios';
import SinglePro from "./SinglePro";


export default function Home(){
    let [pro,setPro]=useState([]);
    let [did,setId]=useState(0)

    let handleDelete=(id)=>{
        setId(id)
        axios.delete(`http://localhost:3000/products/${id}`)
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/products')
    .then((ele)=>setPro(ele.data))
    },[did])
    // console.log('deleted id is here****************',did)
    return <>
    <NavBar/>
    <div style={{marginTop:'100px'}}>
        <h1>Admin Home</h1>
        <div  style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
        {pro.map((ele)=><SinglePro key={ele.id} ele={ele} handleDelete={handleDelete}/>)}
        </div>
       
    </div>
    </>
}