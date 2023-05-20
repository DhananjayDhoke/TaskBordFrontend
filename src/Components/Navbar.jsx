
import { useContext } from "react";
import { TokenContext } from "./Contex/Authcontext";
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { token,storeToken} = useContext(TokenContext);
  const handelogOut =()=>{
    storeToken("")
  }
  return (
    <>
     <div className="flexdiv">
        <h2>Welcome User</h2>
        <h2><Link className="link" onClick={handelogOut} to={"/login"}>{token?"Logout":"Login"}</Link></h2>
     </div>
     
    </>
  )
}

export default Navbar