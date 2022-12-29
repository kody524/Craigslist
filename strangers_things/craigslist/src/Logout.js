import { Navigate } from "react-router-dom";


function Logout() {
  return <Navigate to="/login" />;
}

export default Logout;
