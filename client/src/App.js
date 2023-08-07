import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Registration from './registration';
import Navbar from './navbar';
import Footer from './footer';
import Login from './login';
import Home from './home';
import WritePost from './writePosts';
import MyPosts from './myPosts';
import PostDetails from './postsDetails';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  var user = false;
  if(window.localStorage.user){
       user = true;
  }
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
       <Registration></Registration>
          </Route>
          <Route exact path='/home'>
           <Navbar></Navbar>
             <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path='/write'>
           <Navbar></Navbar>
             <WritePost></WritePost>
            <Footer></Footer>
            </Route>
            <Route exact path='/posts'>
           <Navbar></Navbar>
             <MyPosts></MyPosts>
            <Footer></Footer>
            </Route>
            <Route exact path='/home/:id'>
           <Navbar></Navbar>
             <PostDetails></PostDetails>
            <Footer></Footer>
            </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
