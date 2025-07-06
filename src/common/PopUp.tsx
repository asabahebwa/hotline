import PopUpHeader from "./PopUpHeader";
import PopUpLogo from "./PopUpLogo";
import PopUpContent from "./PopUpContent";
import Swipe from "./Swipe";

type PopUpProps = {
  startQuiz: () => void;
};

function PopUp({ startQuiz }: PopUpProps) {
  return (
    <div className="pop-up">
      <PopUpHeader />
      <PopUpLogo />
      <PopUpContent startQuiz={startQuiz} />
      <Swipe />
    </div>
  );
}

export default PopUp;
