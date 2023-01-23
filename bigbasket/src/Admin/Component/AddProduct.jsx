import NavBar from "./NavBar"

export default function AddProduct(){

    return <>
    <NavBar/>
    {/* <h1>Add product</h1> */}

    <form action="" style={{textAlign:'center',margin:'100px'}}>
        <div style={{width:'400px',textAlign:'center',border:'1px solid black', padding:'20px'}}>
        <h1>Add product</h1>
            <label htmlFor="">Name: 
            <input placeholder="Product name..."></input>
            </label><br></br><br></br>
            <label htmlFor="">Image URL: 
            <input placeholder="Product URL..."></input>
            </label><br></br><br></br>
            <label htmlFor="">Title: 
            <input placeholder="Product Title..."></input>
            </label><br></br><br></br>
            <label htmlFor="">Weight: 
            <input placeholder="Product weight..."></input>
            </label><br></br><br></br>
            <label htmlFor="">Price: 
            <input placeholder="Product Price..."></input>
            </label><br></br><br></br>
            <label htmlFor="">Category: 
            <input placeholder="product Category..."></input>
            </label><br></br><br></br>
            <label htmlFor="">Description: 
            <input placeholder="product description..."></input>
            </label><br></br><br></br>
            <input type="submit" />
        </div>
    </form>
    </>
}