type FillerProps = {
  result: number;
};

function Filler({ result }: FillerProps) {
  const styles = {
    filler: {
      height: "100%",
      width: `${result}%`,
      background: "#FBFBFB",
    },
  };
  return <div style={styles.filler} />;
}

export default Filler;
