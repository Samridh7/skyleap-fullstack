import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const MyPostsLists = (props) => {
    const posts = props.posts;
    console.log(posts);
    console.log(posts[0].title);
    return ( 
        <div className="postList">
            {posts.map((post) => (  
            <div className="d-inline-flex p-2 flex-row post-preview" key={post.id}>
                {/* <div className="col-4"> */}
                <Link to={`/home/${post.id}`}>

                   <div className="card mx-2 my-2" style={{width: "25rem"}}>
                   <div className="card-body">
                     <h5 className="card-title text-primary">{post.title}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">{post.user.name}</h6>
                     <p className="card-text text-dark">{post.body}</p>
                     {/* <a href="#" className="card-link">Comment</a>
                     <a href="#" className="card-link">Like</a> */}
                {/* </div> */}
                   </div>
                 </div>
                     </Link>
            </div>
        ))}
        </div>
     );
}
 
export default MyPostsLists;