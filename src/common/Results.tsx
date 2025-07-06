import Header from "./Header";
import Swipe from "./Swipe";
import Progress from "./Progress";
import { Link } from "react-router";
import Help from "./Help";
import rMaskGroup from "../assets/img/rMaskGroup.svg";
import featherRight from "../assets/img/feather-right.svg";
import telephone1 from "../assets/img/telephone1.svg";
import heart1 from "../assets/img/heart1.svg";
import sad1 from "../assets/img/sad1.svg";
import "../styles/Results.css";

type ResultsProps = {
  score: number;
  total: number;
  resetQuiz: () => void;
};

function Results({ score, total, resetQuiz }: ResultsProps) {
  const result = (score / total) * 100;
  // const reverse = 100 - percentage;
  return (
    <div>
      <Header resetQuiz={resetQuiz} />
      <Progress result={result} />
      <div className="result">
        <p className="result-wording">It looks like you are in </p>
        <p className="result-answer">
          {score === total
            ? "A HEALTHY RELATIONSHIP"
            : score < total / 2
            ? "AN ABUSIVE RELATIONSHIP"
            : "AN UNHEALTHY RELATIONSHIP"}
        </p>
      </div>
      <p className="thought">You might be thinking ...</p>
      <div className="result-option-1">
        <img
          src={rMaskGroup}
          width="64"
          height="64"
          alt="mask-group"
          className="result-option-1-img1"
        />
        <p className="result-option-1-text">I don't have a steady income</p>
        <img
          src={featherRight}
          width="6"
          height="12"
          alt="feather-right"
          className="result-option-1-img2"
        />
      </div>
      <div className="results-reasons">
        <Link to="/but" style={{ textDecoration: "none" }}>
          <p className="results-reasons-text">
            See why people stay in abusive relationships
          </p>
        </Link>
      </div>
      <p className="help-text">We want to help you go through this:</p>
      <Help
        imgSrc={telephone1}
        textHeadline="CALL THE HOTLINE"
        textParagraph="Our highly-trained advocates are available 24/7/365 to talk with you
            confidentially."
        background="radial-gradient(50% 50% at 50% 50%, #b12d36 0%, #7c181f 100%)"
      />

      <Help
        imgSrc={heart1}
        textHeadline="COMMUNITY RESOURCES"
        textParagraph="Find help in your community, support groups, shelters and more."
        background="radial-gradient(50% 50% at 50% 50%, #e98139 0%, #c96430 100%)"
      />

      <Help
        imgSrc={sad1}
        textHeadline="PATH TO SAFETY"
        textParagraph="A safety plan is a personalized, practical plan that includes ways
            to remain safe while in a relationship, planning to leave, or after
            you leave."
        background="radial-gradient(50% 50% at 50% 50%, #3bafba 0%, #138291 100%)"
      />
      <Swipe />
    </div>
  );
}

export default Results;
