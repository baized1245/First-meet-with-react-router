import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
   const friend = useLoaderData();
   console.log(friend) 
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <p>name: {friend.name}</p>
            <h3>phone: {friend.phone}</h3>
        </div>
    );
};

export default FriendDetail;