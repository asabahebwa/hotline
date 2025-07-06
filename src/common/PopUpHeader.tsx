import "../styles/PopUpHeader.css";
import arrowLeft from "../assets/img/arrow-left.svg";
import { Link } from "react-router";

function Header() {
  return (
    <div className="header">
      <Link to="https://www.thehotline.org/" className="back-link">
        <img src={arrowLeft} width="20" alt="back" height="20" className="back-link-img"/>
        Back to website
      </Link>
    </div>
  );
}

export default Header;
