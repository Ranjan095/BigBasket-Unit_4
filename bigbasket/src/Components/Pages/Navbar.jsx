import React from "react";
import { Link } from "react-router-dom";




export default function Navbar(){

    return(
        <div style={{position:'fixed',top:'0px',width:'100%',background:'white',height:'100px'}}>

             <input style={{margin:'10px',padding:'5px'}} placeholder="Search for Products..."></input>

        <div  style={{display:'flex', justifyContent:'space-around'}}>
            <Link to='/'><img style={{width:'100px'}} src="https://gumlet.assettype.com/afaqs%2F2021-11%2Fc57035f1-ad95-4b5c-881e-086506b1f6db%2Fbb_TATA_Double_line_logo.jpg?w=1200&auto=format%2Ccompress&ogImage=true"/></Link>
            <button style={{height:'30px',background:'green',color:'white' , border:'none'}}>Shop by Category</button>
            <Link to='/fruits&vegitabls'>Fruits & vegitable</Link>
            <Link to='/tea'>tea</Link>
            <Link to='/ghee'>Ghee</Link>
            <Link to='/nandni'>Nandni</Link>
            <Link to='/login'>Login</Link>
            <Link to='/cart'><img style={{width:'40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJeX3l3we1hOrUUe3hilNgG1jSmV4ny1W4A&usqp=CAU"/></Link>
            <Link to ="/admin" >Admin</Link>
        </div>
       
        </div>
    )
}

