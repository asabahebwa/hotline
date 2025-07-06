import "../styles/Help.css";

type HelpProps = {
  imgSrc: string;
  textHeadline: string;
  textParagraph: string;
  background: string;
};

function Help({ imgSrc, textHeadline, textParagraph, background }: HelpProps) {
  return (
    <div className="help-wrapper">
      <div className="help-background" style={{ background }}>
        <img src={imgSrc} width="36" height="52" alt="telephone" />
      </div>
      <div className="help-text">
        <p className="help-text-headline">{textHeadline}</p>
        <p className="help-text-paragraph">{textParagraph}</p>
      </div>
    </div>
  );
}

export default Help;
