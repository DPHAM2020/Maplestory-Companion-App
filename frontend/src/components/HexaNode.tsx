import { useState } from "react";
import "./HexaNode.css";

type HexaNodeProps = {
  name: string;
  erdaCosts: readonly any[];
  totalErda: readonly any[];
};

const HexaNode: React.FC<HexaNodeProps> = ({ name, erdaCosts, totalErda }) => {
  const parseNumber = (value: string) => {
    if (value === "" || value === "-") {
      return 0;
    }
    if (!/^\d*$/.test(value)) {
      return 0;
    }
    if (value.length > 1 && value.startsWith("0")) {
      value = String(Number(value));
    }
    let parsedNum = Number(value);
    if (isNaN(parsedNum)) {
      return 0;
    }
    if (parsedNum > 30) {
      parsedNum = 30;
    }
    if (parsedNum < 0) {
      parsedNum = 0;
    }
    return parsedNum;
  };
  const [currLevel, setCurr] = useState(0);
  const handleCurrChange = (value: string) => {
    let parsedNum = parseNumber(value);
    setCurr(parsedNum);
  };

  const [goalLevel, setGoal] = useState(30);
  const handleGoalChange = (value: string) => {
    let parsedNum = parseNumber(value);
    setGoal(parsedNum);
  };

  const spent = erdaCosts[currLevel][1];
  const remaining = totalErda[1] - spent;

  return (
    <>
      <div className="component-container">
        <div className="skill-name">{name}</div>
        <div className="curr-level">
          <input
            type="text"
            value={currLevel}
            placeholder="0"
            onChange={(e) => handleCurrChange(e.target.value)}
          />
        </div>
        <div className="goal-level">
          <input
            type="text"
            value={goalLevel}
            placeholder="30"
            onChange={(e) => handleGoalChange(e.target.value)}
          />
        </div>
        <div className="non-input-numbers">{spent}</div>
        <div className="non-input-numbers">{remaining}</div>
        <div className="non-input-numbers">{totalErda[1]}</div>
      </div>
    </>
  );
};

export default HexaNode;
