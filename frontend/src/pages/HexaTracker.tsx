import { useState } from "react";
import {
  skillRunningTotal,
  masteryRunningTotal,
  enhancementRunningTotal,
} from "../assets/ErdaData";

function HexaTracker() {
  const skillTotal = [145, 4400];
  const masteryTotal = [83, 2252];
  const enhancementTotal = [123, 3383];

  const [originLevel, setOriginLevel] = useState(1);
  const [originGoal, setOriginGoal] = useState(30);
  const originFragsSpent: number = skillRunningTotal[originLevel][1];
  const originTotalFrags: number = skillRunningTotal[originGoal][1];
  const initialOrigin = {
    name: "Origin",
    current: originLevel,
    goal: originGoal,
    spent: originFragsSpent,
    remaining: originTotalFrags - originFragsSpent,
    total: skillTotal[1],
  };
  const handleOriginLevel = (value: string) => {
    let parsedNum: number = parseInt(value);
    if (0 <= parsedNum && parsedNum <= 30) {
      setOriginLevel(parsedNum);
    }
  };
  const handleOriginGoal = (value: string) => {
    let parsedNum: number = parseInt(value);
    if (0 <= parsedNum && parsedNum <= 30) {
      setOriginGoal(parsedNum);
    }
  };

  const masteryLevel: number = 0;
  const masteryGoal: number = 30;
  const masteryFragsSpent: number = masteryRunningTotal[masteryLevel][1];
  const masteryTotalFrags: number = masteryRunningTotal[masteryGoal][1];
  const initialMasteries = [
    {
      id: 1,
      name: "Mastery 1",
      current: masteryLevel,
      goal: 30,
      spent: masteryFragsSpent,
      remaining: masteryTotalFrags - masteryFragsSpent,
      total: masteryTotal[1],
    },
    {
      id: 2,
      name: "Mastery 2",
      current: masteryLevel,
      goal: 30,
      spent: masteryFragsSpent,
      remaining: masteryTotalFrags - masteryFragsSpent,
      total: masteryTotal[1],
    },
    {
      id: 3,
      name: "Mastery 3",
      current: masteryLevel,
      goal: 30,
      spent: masteryFragsSpent,
      remaining: masteryTotalFrags - masteryFragsSpent,
      total: masteryTotal[1],
    },
    {
      id: 4,
      name: "Mastery 4",
      current: masteryLevel,
      goal: 30,
      spent: masteryFragsSpent,
      remaining: masteryTotalFrags - masteryFragsSpent,
      total: masteryTotal[1],
    },
  ];
  const [masteryData, setMasteryData] = useState(initialMasteries);
  //   const handleMasteryChange = (id: number, field: any, value: string) => {
  //     setMasteryData()
  //   }
  const handleMasteryChange = (id: number, field: any, value: string) => {
    let parsedNum: number = parseInt(value);
    if (0 <= parsedNum && parsedNum <= 30) {
      setMasteryData((prevData: any[]) =>
        prevData.map((data) =>
          data.id === id ? { ...data, [field]: parsedNum || 0 } : data
        )
      );
    }
  };

  const initialEnhance = [
    {
      id: 1,
      name: "Enhance 1",
      current: 0,
      goal: 30,
      spent: enhancementRunningTotal[0][1],
      remaining: enhancementTotal[1] - enhancementRunningTotal[0][1],
      total: enhancementTotal[1],
    },
    {
      id: 2,
      name: "Enhance 2",
      current: 0,
      goal: 30,
      spent: enhancementRunningTotal[0][1],
      remaining: enhancementTotal[1] - enhancementRunningTotal[0][1],
      total: enhancementTotal[1],
    },
    {
      id: 3,
      name: "Enhance 3",
      current: 0,
      goal: 30,
      spent: enhancementRunningTotal[0][1],
      remaining: enhancementTotal[1] - enhancementRunningTotal[0][1],
      total: enhancementTotal[1],
    },
    {
      id: 4,
      name: "Enhance 4",
      current: 0,
      goal: 30,
      spent: enhancementRunningTotal[0][1],
      remaining: enhancementTotal[1] - enhancementRunningTotal[0][1],
      total: enhancementTotal[1],
    },
  ];

  //   const [data, setData] = useState(initialData);
  //   const handleCellChange = (id: number, field: any, value: string) => {
  //     setData((prevData: any[]) =>
  //       prevData.map((data) =>
  //         data.id === id ? { ...data, [field]: parseInt(value) || 0 } : data
  //       )
  //     );
  //   };

  return (
    <>
      <h1>HexaTracker</h1>
      <table>
        <thead>
          <tr>
            <th>Skills</th>
            <th>Current</th>
            <th>Goal</th>
            <th>Spent</th>
            <th>Remaining</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{initialOrigin.name}</td>
            <td>
              {/* {initialOrigin.current} */}
              <input
                type="text"
                value={originLevel}
                placeholder="0"
                onChange={(e) => handleOriginLevel(e.target.value)}
              />
            </td>
            <td>
              {/* {initialOrigin.goal} */}
              <input
                type="text"
                value={originGoal}
                placeholder="0"
                onChange={(e) => handleOriginGoal(e.target.value)}
              />
            </td>
            <td>{initialOrigin.spent}</td>
            <td>{initialOrigin.remaining}</td>
            <td>{initialOrigin.total}</td>
          </tr>
          {/* Masteries */}
          {masteryData.map((mastery) => (
            <tr key={mastery.id}>
              <td>{mastery.name}</td>
              <td>
                {/* {mastery.current} */}
                <input
                  type="text"
                  value={mastery.current}
                  defaultValue={0}
                  onChange={(e) =>
                    handleMasteryChange(mastery.id, "current", e.target.value)
                  }
                />
              </td>
              <td>{mastery.goal}</td>
              <td>{mastery.spent}</td>
              <td>{mastery.remaining}</td>
              <td>{mastery.total}</td>
            </tr>
          ))}
          {/* Enhances */}
          {initialEnhance.map((enhance) => (
            <tr key={enhance.id}>
              <td>{enhance.name}</td>
              <td>{enhance.current}</td>
              <td>{enhance.goal}</td>
              <td>{enhance.spent}</td>
              <td>{enhance.remaining}</td>
              <td>{enhance.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HexaTracker;
