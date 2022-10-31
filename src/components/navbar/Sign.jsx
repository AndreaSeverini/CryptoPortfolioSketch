import React from 'react';

const Sign = (props) => {
  return (
    <>
        <p>Sign in</p>
        <button type='button' onClick={props.onSign}>Sign up</button>
    </>
  )
}

export default Sign;