import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
  const {name,email,id} = props.friend;
  const history = useHistory();
  const handleClick= (id) => {
    const url= `friend/${id}`
    history.push(url);
  }

  const friendStyle={
    border: '1px solid purple',
    margin: '20px',
    padding:'20px',
    borderRadius:'20px'
  }
  return (
    <div style={friendStyle}>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      {/* <p>id: <Link to={`friend/${id}`}>Show me detail of {id}</Link></p> */}
      <button type="button" onClick={() => handleClick(id)}>
      Show Details
    </button>
    </div>
  );
};

export default Friend;