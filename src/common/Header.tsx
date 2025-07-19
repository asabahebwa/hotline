import arrowLeft from "../assets/img/arrow-left.svg";
import ndvhheader from "../assets/img/ndvhheader.svg";
import "../styles/Header.css";

type HeaderProps = {
  resetQuiz: () => void;
};

function Header({ resetQuiz }: HeaderProps) {
  return (
    <header className="header" onClick={resetQuiz}>
      <img src={arrowLeft} width="20" alt="back" height="20" />
      Back
      <img src={ndvhheader} alt="header-logo" className="header-image" />
    </header>
  );
}

export default Header;
