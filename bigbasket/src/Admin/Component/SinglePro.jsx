export default function SinglePro({ele,handleDelete}){


    

    return <>
        <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:'10px'}}>
           <img style={{width:'200px'}} src={ele.image}></img>
           <h5>{ele.name}</h5>
           <p>{ele.title}</p>
           <p>{ele.weight}</p>
           <p>₹ {ele.price}</p>  

           <button>Edit</button>{" "}
           <button onClick={()=>handleDelete(ele.id)}>Delete</button>
       </div>
    </>
}