import React from 'react';
import './usermenu.css';
import Sign from './Sign';
import LogOut from './LogOut';

const UserMenu = (props) => {
  return (
    <>
                <p><a href='#'>Portfolio</a></p>
                <p>VIP points: 25</p>
                <div className='jupiter__login'>
                    {!props.loginToken 
                        ? <Sign onSign={props.onSign}/>
                        : <LogOut onLogOut={props.onLogOut}/>}
                </div>
    </>
  )
}

export default UserMenu;