import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';


const PostDetail = () => {
     const  {id}= useParams();
    //  console.log(id);
     const [post, setPost] = useState({});
     const [comments, setComments] = useState([]);
     useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then (res => res.json())
        .then (data => setPost(data));
     },[])
     console.log(post);
     useEffect(()=>{
         const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setComments([data]))
     },[])
     console.log(comments)
    return (
        <div>
            <h1>Post Detail coming soon...{id}</h1>
            <p>Use Posted:{post.id}</p>
            <p>Title:{post.title}</p>
            <p>Post Body: {post.body}</p>
            <p>Number of comments:{comments.length}</p>

            {
                 comments.map(comment=><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;