import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const WritePost = () => {

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        axios.post('https://skyleap-app-09b1b3263d88.herokuapp.com/', {
           userId: JSON.parse(window.localStorage.user).id,
           title: postTitle,
           body: postBody
       }).then(() => {
           console.log("new post created");
           setIsPending(false);
           history.push("/home");

       }).catch((e) => {
           console.log(e);
       })
    }
    return (
        <div id="content" className="container">
            <h1 className="h1 text-center text-primary">Write posts</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row py-4">
                    <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Post Title:</label>
                    <div className="col-sm-8">
                        <input type="text" required value={postTitle} onChange = {(e) => {setPostTitle(e.target.value)}} className="form-control" placeholder='Enter post title' id="postTitle" />
                    </div>
                </div>
                <div className="mb-3 row py-2">
                    <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Post Body:</label>
                    <div className="col-sm-8">
                    <textarea className="form-control" required value={postBody} onChange = {(e) => {setPostBody(e.target.value)}} id="p-body" name="" cols="130" rows="10" placeholder="Write your post here"></textarea>
                </div>
                </div>
               {!isPending && <button id="write-btn" className="btn btn-primary px-4 py-2 my-2 rounded-pill">Post</button>} 
               {isPending && <button id="write-btn" className="btn btn-primary px-4 py-2 my-2 rounded-pill">Posting.....</button>} 
            </form>
        </div>
    );
}

export default WritePost;