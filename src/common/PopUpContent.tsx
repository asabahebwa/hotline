import "../styles/PopUpContent.css";

type ContentProps = {
  startQuiz: () => void;
};

function Content({ startQuiz }: ContentProps) {
  const popUpHandle = () => {
    startQuiz();
  };

  return (
    <div className="content">
      <p className="content-heading">Is this abuse?</p>
      <p className="content-text-1">
        Answer a few questions that find out if you are at risk of being in an
        abusive relationship
      </p>
      <p className="content-text">
        Sometimes even if you think your relationship is healthy it can hide
        signs of abuse from one of the partners. We'll help you identify and eal
        with those
      </p>
      <button className="start-button" onClick={popUpHandle}>
        Start Now
      </button>
      <p className="start-text">or talk with us</p>
    </div>
  );
}

export default Content;
