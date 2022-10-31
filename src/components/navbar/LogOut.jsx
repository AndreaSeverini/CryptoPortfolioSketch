import React from 'react';

const LogOut = (props) => {
  return (
    <>
        
        <button type='button' onClick={props.onLogOut}>Logout</button>
        <p>{props.name}</p>
    </>
  )
}

export default LogOut;