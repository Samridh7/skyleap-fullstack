import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Registration = () => {
    // const [isPending, setIsPending] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {username, password};
        console.log(data);
        setIsPending(true);

       axios.post('https://skyleap-app-09b1b3263d88.herokuapp.com/register', {
           username: username,
           password: password
       }).then(() => {
           console.log("new user registered");
           setIsPending(false);
           history.push("/");

       }).catch((e) => {
           console.log(e);
       })
    }
    return (
        <div id="content" className="container w-50">
           <h1 className="text-primary my-4">Register</h1>
           <form onSubmit={handleSubmit}>
   <div className ="form-group row my-4">
     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
     <div className="col-sm-10">
       <input type="text" required value={username} onChange= {(e) => {setUsername(e.target.value)}} className="form-control input" id="inputEmail3" placeholder="Enter Username" />
     </div>
   </div>
   <div className="form-group row my-4">
     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
     <div className="col-sm-10">
       <input type="password" required value={password} onChange= {(e) => {setPassword(e.target.value)}} className="form-control input" id="inputPassword3" placeholder=" Enter Password" />
     </div>
   </div>
   <div className="form-group row">
     <div className="col-sm-10">
       {!isPending && <button className="btn btn-primary my-3">Register</button>}
       {isPending && <button className="btn btn-primary my-3">Registering...</button>}
     </div>
     <div className="col-sm-10 my-2 mx-4">
   <p>
     Already have an account?
     <Link to="/">Sign In</Link>
   </p>
 </div>
   </div>
 </form>
        </div>
    );
}

export default Registration;