import axios from "axios";
import { useEffect, useState } from "react";
import MyPostsLists from "./myPostsLists";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const MyPosts = () => {
    const [posts,setPosts] = useState(null)
    const userId = JSON.parse(localStorage.user).id;
    useEffect(() => {
        axios.get(`https://skyleap-app-09b1b3263d88.herokuapp.com/?userId=${userId}`).then((response) => {
            // console.log(response.data);
            setPosts(response.data);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    return ( 
        <div id="content" className="myPosts">
            <h1>My Posts</h1>
            {posts && <MyPostsLists posts={posts}></MyPostsLists>}
        </div>
     );
}
 
export default MyPosts;