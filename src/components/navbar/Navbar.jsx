import React, { useState } from "react";
import "./navbar.css";
import { BiUser, BiMenu } from "react-icons/bi";

// import logo from '../../assets/logo.svg';
import JupiterSquadLogo from "../../assets/squad.png";
import JupiterSquadGoogleFormat from "../../assets/JupiterSquadGoogleFormat.png";
import JupiterSquadJ from "../../assets/JupiterSquadJ.png";
import Menu from "./Menu";
import Sign from "./Sign";
import UserMenu from "./UserMenu";
import LogOut from "./LogOut";

const Navbar = () => {
  //Uso l'Hook per settare/leggere una variabile booleana per il toggle del menu
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [loginToken, setLoginToken] = useState(false);

  return (
    <div className="jupiter__navbar">
      <div className="jupiter__border-bottom" />
      <div className="jupiter__navbar-links">
        <div className="jupiter__navbar-links_logo">
          <img className="jupiter__j" src={JupiterSquadJ} alt="logo" />
          <img className="jupiter__logo" src={JupiterSquadLogo} alt="logo" />
        </div>
        <div className="jupiter__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="jupiter__navbar-sign">
        {!loginToken ? (
          <Sign onSign={() => setLoginToken(true)} />
        ) : (
          <LogOut name="Andrea" onLogOut={() => setLoginToken(false)} />
        )}
      </div>

      <div className="jupiter__navbar-user">
        {toggleUser ? (
          <BiUser color="#fff" size={27} onClick={() => setToggleUser(false)} />
        ) : (
          <BiUser color="#fff" size={27} onClick={() => setToggleUser(true)} />
        )}
        {toggleUser && (
          <div className="jupiter__navbar-user_container slide-in-right">
            <div className="jupiter__navbar-user_container-links">
              <UserMenu
                loginToken={loginToken}
                onSign={() => setLoginToken(true)}
                onLogOut={() => setLoginToken(false)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="jupiter__navbar-menu">
        {toggleMenu ? (
          <BiMenu color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <BiMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="jupiter__navbar-menu_container slide-in-right">
            <div className="jupiter__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
