import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
  const {friendId} = useParams();
  const [friend,setFriend] = useState({});

  useEffect(()=>{
    const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))
  },[])
  console.log(friend);
  return (
    <div>
      <h3>This is the friendDetail:{friendId}</h3>
      <h3>Name: {friend.name}</h3>
      <p>Email: {friend.email}</p>
      <p>phone: {friend.phone}</p>
      <p>website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;