import React, { useMemo } from "react";
import "./Result.scss";

type Props = {
  score: number;
};

const Result = (props: Props) => {
  const { score } = props;

  const recommendation = useMemo((): string => {
    if (score < 11) return "Tallboy";
    if (score < 17) return "Beatrix";
    if (score < 22) return "Hub 51";
    if (score < 27) return "RPM Seafood";

    return "Unknown";
  }, [score]);

  return (
    <div className="recommendation">
      <h2>Your restaurant is...</h2>
      <h2 className="restaurant">{recommendation}</h2>
    </div>
  );
};

export default Result;
