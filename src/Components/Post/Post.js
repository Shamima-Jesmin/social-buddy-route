import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    // console.log(props.post.id);
     const {id, title, body} = props.post;
     
     const history = useHistory();
     const showComments = id =>{
        const url = `post/${id}`;
        history.push(url);
     }
     const postStyle={
         border:'1px solid blue',
         margin:'20px',
         padding:'20px',
         borderRadius:'20px'
     }
    return (
        <div style={postStyle}>
            <h1>Post Id: {id}</h1>
            <h2>Post Title: {title}</h2>
            <p>Post Body: {body}</p>
            <button onClick={()=>showComments(props.post.id)}>Show Comments</button>
        </div>
    );
};

export default Post;