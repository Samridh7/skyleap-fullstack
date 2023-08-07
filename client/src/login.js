import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  logo  from "./skyleap.png"
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [islogin, setIsLogin] = useState(false);
  const [checked, setChecked] = useState(true);
  const [loginStatus, setLoginStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://skyleap-app-09b1b3263d88.herokuapp.com/login", {
      username: username,
      password: password
    }).then((response) => {
      // console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
        setIsLogin(false);
        setChecked(false);
      }
      else {
        setLoginStatus("Welcome " + response.data.name);
        window.localStorage.user = JSON.stringify(response.data);
        setIsLogin(true);
      }
    }).catch((e) => {
      console.log(e);
    })
  }

  return (
    <div id="content" className="container login w-50 stylish-color-dark">
        <div className="login-content px-4">
      <h1 className="text-primary my-4 py-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row py-2">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" required value={username} onChange={(e) => { setUsername(e.target.value) }} className="form-control input" id="inputEmail3" placeholder="Enter Username" />
          </div>
        </div>
        <div className="form-group row my-4">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" required value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control input" id="inputPassword3" placeholder=" Enter Password" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 mx-6">
            <button type="submit" className="btn btn-primary my-3">Sign In</button>
          </div>
          <div className="col-sm-10 my-2 mx-4">
            <div>
              New User?
              <Link to="/register">Create an account</Link>
              <div className="message">
              </div>
            </div>
          </div>
          {/* {loginStatus && <p>{loginStatus}</p>}  */}
          {!islogin && !checked && <div class="alert alert-danger" role="alert">
            {loginStatus}
          </div>}
          {islogin && <p>{loginStatus}</p> && <Redirect to="/home"></Redirect>}
        </div>
      </form>
          </div>
    </div>
  );
}

export default Login;
