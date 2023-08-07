import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router-dom";
import  logo  from "./skyleap.png"
import { useState } from "react";
import { Dropdown } from "bootstrap";
const Navbar = () => {
  var user = false;
  if(window.localStorage.user){
        user = true;
  }
  // console.log(user);
  // const [name, setName] = useState("Guest");
  // if(window.localStorage.length == 0){
  //       setName("guest");
  // }
  // else{
  //       setName(JSON.parse(window.localStorage.user))
  // }
  const history = useHistory();
  const signOut = () => { 
       window.localStorage.clear();
      //  setName("Guest");
       history.push("/");
  }
    return ( 
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} id="logo" alt="Skyleap" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-info" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-info" to="/write">Write Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-info" to="/posts">My Posts</Link>
        </li>
      </ul>
    {user ? <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {JSON.parse(window.localStorage.user).name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button onClick={signOut} className="dropdown-item text-primary" href="#">Sign Out</button></li>
  </ul>
</div> : <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Guest
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button onClick={signOut} className="dropdown-item text-primary" href="#">Sign Out</button></li>
  </ul>
</div>}
      
    </div>
  </div>
</nav>
     );
}
 
export default Navbar;