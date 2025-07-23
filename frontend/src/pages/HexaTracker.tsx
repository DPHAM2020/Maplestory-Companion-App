import { useState } from "react";
import {
  skillCoreCosts,
  skillRunningTotal,
  masteryCoreCosts,
  masteryRunningTotal,
  enhancementCoreCosts,
  enhancementRunningTotal,
} from "../assets/ErdaData";
import HexaNode from "../components/HexaNode";
import ImageUploader from "../components/imgProcessor";
import "./HexaTracker.css";

function HexaTracker() {
  const skillTotal: readonly any[] = [145, 4400];
  const masteryTotal: readonly any[] = [83, 2252];
  const enhancementTotal: readonly any[] = [123, 3383];

  // const [totalFragsSpent, setTotalFragsSpent] = useState(0);
  const initalLevels = [
    {
      id: 1,
      name: "Origin",
      coreType: "skill",
      currLevel: 0,
      goalLevel: 30,
      costs: skillCoreCosts,
      runningTotal: skillRunningTotal,
      totalCoreCost: skillTotal,
    },
    {
      id: 2,
      name: "Mastery 1",
      coreType: "mastery",
      currLevel: 0,
      goalLevel: 30,
      costs: masteryCoreCosts,
      runningTotal: masteryRunningTotal,
      totalCoreCost: masteryTotal,
    },
    {
      id: 3,
      name: "Mastery 2",
      coreType: "mastery",
      currLevel: 0,
      goalLevel: 30,
      costs: masteryCoreCosts,
      runningTotal: masteryRunningTotal,
      totalCoreCost: masteryTotal,
    },
    {
      id: 4,
      name: "Mastery 3",
      coreType: "mastery",
      currLevel: 0,
      goalLevel: 30,
      costs: masteryCoreCosts,
      runningTotal: masteryRunningTotal,
      totalCoreCost: masteryTotal,
    },
    {
      id: 5,
      name: "Mastery 4",
      coreType: "mastery",
      currLevel: 0,
      goalLevel: 30,
      costs: masteryCoreCosts,
      runningTotal: masteryRunningTotal,
      totalCoreCost: masteryTotal,
    },
    {
      id: 6,
      name: "Enhancement 1",
      coreType: "enhance",
      currLevel: 0,
      goalLevel: 30,
      costs: enhancementCoreCosts,
      runningTotal: enhancementRunningTotal,
      totalCoreCost: enhancementTotal,
    },
    {
      id: 7,
      name: "Enhancement 2",
      coreType: "enhance",
      currLevel: 0,
      goalLevel: 30,
      costs: enhancementCoreCosts,
      runningTotal: enhancementRunningTotal,
      totalCoreCost: enhancementTotal,
    },
    {
      id: 8,
      name: "Enhancement 3",
      coreType: "enhance",
      currLevel: 0,
      goalLevel: 30,
      costs: enhancementCoreCosts,
      runningTotal: enhancementRunningTotal,
      totalCoreCost: enhancementTotal,
    },
    {
      id: 9,
      name: "Enhancement 4",
      coreType: "enhance",
      currLevel: 0,
      goalLevel: 30,
      costs: enhancementCoreCosts,
      runningTotal: enhancementRunningTotal,
      totalCoreCost: enhancementTotal,
    },
  ];

  const [coreData, setCoreData] = useState(initalLevels);
  const handleCurrChange = (name: string, value: number) => {
    setCoreData((prevData) => {
      return prevData.map((core) => {
        if (core.name === name) {
          return { ...core, currLevel: value };
        }
        return core;
      });
    });
    console.log(coreData);
  };
  const handleGoalChange = (name: string, value: number) => {
    setCoreData((prevData) => {
      return prevData.map((core) => {
        if (core.name === name) {
          return { ...core, goalLevel: value };
        }
        return core;
      });
    });
    console.log(coreData);
  };

  const energySpent = coreData.reduce(
    (sum, core) => sum + core.runningTotal[core.currLevel][0],
    0
  );

  const fragsSpent = coreData.reduce(
    (sum, core) => sum + core.runningTotal[core.currLevel][1],
    0
  );

  const energyRemaining = coreData.reduce((sum, core) => {
    let diff =
      core.runningTotal[core.goalLevel][0] -
      core.runningTotal[core.currLevel][0];
    if (diff > 0) {
      return sum + core.runningTotal[core.goalLevel][0];
    }
    return 0;
  }, 0);

  const fragsRemaining = coreData.reduce((sum, core) => {
    let diff =
      core.runningTotal[core.goalLevel][1] -
      core.runningTotal[core.currLevel][1];
    if (diff > 0) {
      return sum + core.runningTotal[core.goalLevel][1];
    }
    return 0;
  }, 0);

  return (
    <>
      <h1>HexaTracker</h1>

      <div className="card-container">
        <header>
          <div className="header-div">Skill</div>
          <div className="header-div">Current Level</div>
          <div className="header-div">Target Level</div>
          <div className="header-div">Spent</div>
          <div className="header-div">Remaining</div>
          <div className="header-div">Total</div>
        </header>
        {coreData.map((core) => (
          <HexaNode
            key={core.id}
            name={core.name}
            hexaType={core.coreType}
            currLevel={core.currLevel}
            goalLevel={core.goalLevel}
            erdaCosts={core.runningTotal}
            totalErda={core.totalCoreCost}
            onCurrChange={handleCurrChange}
            onGoalChange={handleGoalChange}
          />
        ))}
        <div className="total-row">
          <div className="total-item" id="total-title">
            <h2>Total</h2>
          </div>
          <div className="total-item">
            <div>{fragsSpent} frags</div>
            <div>{energySpent} energy</div>
          </div>
          <div className="total-item">
            <div>{fragsRemaining} frags</div>
            <div>{energyRemaining} energy</div>
          </div>
          <div className="total-item" id="grand-total">
            <div>26940 frags</div>
            <div>351 energy</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HexaTracker;
