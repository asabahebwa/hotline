import ndvhlogo from "../assets/img/ndvhlogo.svg";
import "../styles/PopUpLogo.css";

function PopUpLogo() {
  return (
    <div className="logo">
      <img src={ndvhlogo} width="150px" height="143.88px" alt="logo" />
    </div>
  );
}

export default PopUpLogo;
