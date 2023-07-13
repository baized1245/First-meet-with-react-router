import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, useId, body} = post;
    const navigate = useNavigate();
    const handleGoBack = () =>{
      
      navigate(-1);
    }

    return (
        <div>
            <h3>Detail about your post of: {id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;