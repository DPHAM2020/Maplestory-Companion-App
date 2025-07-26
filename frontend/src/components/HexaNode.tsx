import { useState } from "react";
import "./HexaNode.css";

type HexaNodeProps = {
  name: string;
  hexaType: string;
  currLevel: number;
  goalLevel: number;
  erdaCosts: readonly any[];
  totalErda: readonly any[];
  onCurrChange: (coreName: string, newLevel: number) => void;
  onGoalChange: (coreName: string, newLevel: number) => void;
};

const HexaNode: React.FC<HexaNodeProps> = ({
  name,
  hexaType,
  currLevel,
  goalLevel,
  erdaCosts,
  totalErda,
  onCurrChange,
  onGoalChange,
}) => {
  const fragsSpent = erdaCosts[currLevel][1];
  const energySpent = erdaCosts[currLevel][0];

  const fragsRemaining = erdaCosts[goalLevel][1] - fragsSpent;
  const energyRemaining = erdaCosts[goalLevel][0] - energySpent;

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

  const handleCurrChange = (input: string) => {
    let processedNum = parseNumber(input);
    onCurrChange(name, processedNum);
  };
  const handleGoalChange = (input: string) => {
    let processedNum = parseNumber(input);
    onGoalChange(name, processedNum);
  };

  return (
    <>
      <div className={`component-container ${hexaType}`}>
        <div className="hexa-node-column">{name}</div>
        <div className="hexa-node-column">
          <input
            type="text"
            value={currLevel}
            placeholder="0"
            onChange={(e) => handleCurrChange(e.target.value)}
          />
        </div>
        <div className="hexa-node-column">
          <input
            type="text"
            value={goalLevel}
            placeholder="30"
            onChange={(e) => handleGoalChange(e.target.value)}
          />
        </div>
        <div className="non-input-numbers">
          <div>{fragsSpent} frags</div>
          <div>{energySpent} energy</div>
        </div>
        <div className="non-input-numbers">
          <div>{fragsRemaining >= 0 ? fragsRemaining : 0} frags</div>
          <div>{energyRemaining >= 0 ? energyRemaining : 0} energy</div>
        </div>
        <div className="non-input-numbers">
          <div>{totalErda[1]} frags</div>
          <div>{totalErda[0]} energy</div>
        </div>
      </div>
    </>
  );
};

export default HexaNode;
