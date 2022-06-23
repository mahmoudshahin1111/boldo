import { Link } from "react-router-dom";
import logo from "../theme/images/Logo.svg";
import "./TopNavigation.scss";
export default function TopNavigation() {
  return (
    <div className="ms-header z-index-1">
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>

      <div className="ms-links">
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
