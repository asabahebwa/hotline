import Filler from "./Filler";
import "../styles/Progress.css";

type ProgressProps = { result: number };

function Progress({ result }: ProgressProps) {
  return (
    <div className="progress">
      <div className="progress-header">
        <div>Healthy</div>
        <div>Unhealthy</div>
        <div>Abusive</div>
      </div>
      <div data-testid="tracker" className="tracker">
        <Filler result={result} />
      </div>
    </div>
  );
}

export default Progress;
