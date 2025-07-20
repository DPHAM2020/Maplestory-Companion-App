import { useState } from "react";
import {
  skillRunningTotal,
  masteryRunningTotal,
  enhancementRunningTotal,
} from "../assets/ErdaData";
import HexaNode from "../components/HexaNode";
import "./HexaTracker.css";

function HexaTracker() {
  const skillTotal: readonly any[] = [145, 4400];
  const masteryTotal: readonly any[] = [83, 2252];
  const enhancementTotal: readonly any[] = [123, 3383];

  return (
    <>
      <h1>HexaTracker</h1>
      <div className="card-container">
        <HexaNode
          name="Origin"
          hexaType="skill"
          erdaCosts={skillRunningTotal}
          totalErda={skillTotal}
        />
        <HexaNode
          name="Mastery 1"
          hexaType="mastery"
          erdaCosts={masteryRunningTotal}
          totalErda={masteryTotal}
        />
        <HexaNode
          name="Mastery 2"
          hexaType="mastery"
          erdaCosts={masteryRunningTotal}
          totalErda={masteryTotal}
        />
        <HexaNode
          name="Mastery 3"
          hexaType="mastery"
          erdaCosts={masteryRunningTotal}
          totalErda={masteryTotal}
        />
        <HexaNode
          name="Mastery 4"
          hexaType="mastery"
          erdaCosts={masteryRunningTotal}
          totalErda={masteryTotal}
        />
        <HexaNode
          name="Enhancement 1"
          hexaType="enhance"
          erdaCosts={enhancementRunningTotal}
          totalErda={enhancementTotal}
        />
        <HexaNode
          name="Enhancement 2"
          hexaType="enhance"
          erdaCosts={enhancementRunningTotal}
          totalErda={enhancementTotal}
        />
        <HexaNode
          name="Enhancement 3"
          hexaType="enhance"
          erdaCosts={enhancementRunningTotal}
          totalErda={enhancementTotal}
        />
        <HexaNode
          name="Enhancement 4"
          hexaType="enhance"
          erdaCosts={enhancementRunningTotal}
          totalErda={enhancementTotal}
        />
      </div>
    </>
  );
}

export default HexaTracker;
