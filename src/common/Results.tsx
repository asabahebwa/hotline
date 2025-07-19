import Header from "./Header";
import Swipe from "./Swipe";
import Progress from "./Progress";
import Result from "./Result";
import Help from "./Help";
import telephone1 from "../assets/img/telephone1.svg";
import heart1 from "../assets/img/heart1.svg";
import sad1 from "../assets/img/sad1.svg";

type ResultsProps = {
  score: number;
  total: number;
  resetQuiz: () => void;
};

function Results({ score, total, resetQuiz }: ResultsProps) {
  const result = (score / total) * 100;

  const helpItems = [
    {
      imgSrc: telephone1,
      textHeadline: "CALL THE HOTLINE",
      textParagraph:
        "Our highly-trained advocates are available 24/7/365 to talk with you confidentially.",
      background:
        "radial-gradient(50% 50% at 50% 50%, #b12d36 0%, #7c181f 100%)",
    },
    {
      imgSrc: heart1,
      textHeadline: "COMMUNITY RESOURCES",
      textParagraph:
        "Find help in your community, support groups, shelters and more.",
      background:
        "radial-gradient(50% 50% at 50% 50%, #e98139 0%, #c96430 100%)",
    },
    {
      imgSrc: sad1,
      textHeadline: "PATH TO SAFETY",
      textParagraph:
        "A safety plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave.",
      background:
        "radial-gradient(50% 50% at 50% 50%, #3bafba 0%, #138291 100%)",
    },
  ];
  return (
    <div data-testid="results-container">
      <Header resetQuiz={resetQuiz} />
      <Progress result={result} />
      <Result score={score} total={total} />
      {helpItems.map((item, index) => (
        <Help
          key={index}
          imgSrc={item.imgSrc}
          textHeadline={item.textHeadline}
          textParagraph={item.textParagraph}
          background={item.background}
        />
      ))}
      <Swipe />
    </div>
  );
}

export default Results;
