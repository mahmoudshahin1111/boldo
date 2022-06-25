import { useState } from "react";
import logo from "../theme/images/Logo.svg";
import MenuAsset from "../theme/images/menu.svg";
import "./TopNavigation.scss";
export default function TopNavigation() {
  const [menuToggled, setMenuToggled] = useState(false);
  return (
    <div className="ms__header">
      <div>
        <a>
          <img src={logo} alt="logo"></img>
        </a>
        <button
          className="ms__toggler"
          onClick={() => setMenuToggled(!menuToggled)}
        >
          <img width="30px" height="30px" alt="" src={MenuAsset}></img>
        </button>
      </div>
      <div className={"ms__links " + (menuToggled ? "ms__active" : "")}>
        <a>Products</a>
        <a>Services</a>
        <a>About</a>
        <a>Log in</a>
      </div>
    </div>
  );
}
