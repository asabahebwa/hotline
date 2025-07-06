import icon from "../assets/img/icon.svg";
import visualIcon from "../assets/img/visual-icon.svg";
import "../styles/Swipe.css";

function Swipe() {
  return (
    <div className="swipe">
      <img src={icon} width="36" alt="swipe" height="36" />
      <p className="swipe-note">
        Swipe in anytime to start playing a game and hide this screen
      </p>
      <img src={visualIcon} alt="hide" width="36" height="36" />
    </div>
  );
}

export default Swipe;
