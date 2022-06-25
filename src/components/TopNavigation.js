import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../theme/images/Logo.svg";
import MenuAsset from '../theme/images/menu.svg';
import "./TopNavigation.scss";
export default function TopNavigation() {
  const [menuToggled,setMenuToggled] = useState(false);
  return (
    <div className="ms__header">
      <div>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <button className="ms__toggler" onClick={()=>setMenuToggled(!menuToggled)}>
        <img width="30px" height="30px" alt="" src={MenuAsset}></img>
      </button>
      </div>
      <div className={'ms__links ' + (menuToggled?'ms__active':'')}>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
