import { Link } from "react-router";
import "../styles/Result.css";
import rMaskGroup from "../assets/img/rMaskGroup.svg";
import featherRight from "../assets/img/feather-right.svg";

type ResultProps = {
  score: number;
  total: number;
};

function Result({ score, total }: ResultProps) {
  return (
    <>
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
    </>
  );
}

export default Result;
