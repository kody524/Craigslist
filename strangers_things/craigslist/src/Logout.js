import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";

function Logout(){
    
    localStorage.removeItem('key')
    localStorage.removeItem('token')
    return(
        <Navigate to='/login'/>
    )
}


export default Logout