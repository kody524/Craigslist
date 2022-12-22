import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";

function Logout(){
   
const clear=()=>{
    localStorage.clear()

 }
    
    return(
        clear(),
        <Navigate to='/login'/>
       
    )
}


export default Logout