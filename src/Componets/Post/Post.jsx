import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleNavigation = () =>{
         navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>Title: {title}</h5>
           <Link to={`/post/${id}`}>Show Details</Link>
           <Link to={`/post/${id}`}><button>Show post Details</button></Link>
           <button onClick={handleNavigation}>With Button Handler</button>

        </div>
    );
};

export default Post;