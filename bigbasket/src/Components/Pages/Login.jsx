import Navbar from "./Navbar"

export default function Login(){

    return <>
    <Navbar/>
    <div style={{margin:"200px"}}>
     
    <form action="" style={{}}>
        <div style={{border:'1px solid black',width:'400px',padding:'10px'}}>
        <h1>Login..</h1>
        <label >email: </label>
        <input type="text" placeholder="email....." /><br></br><br></br>
        <label>password: </label>
        <input type="password" placeholder="Password...."></input><br></br><br></br>
        <input type="submit"></input>
        </div>
    </form>
   </div>
    </>
}
