import { useState } from "react";
interface Entry {
  character: string;
  pitchedItem: string;
  note: string;
}
function PitchDiary() {
  const pitchedEntries: Entry[] = [];
  const [pitchedData, setPitchedData] = useState(pitchedEntries);
  const handleSubmit = () => {};
  return (
    <>
      <h1>Pitch Diary</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="characterName" placeholder="Character" />
        <select id="pitchItem">
          <option value="none" selected>
            Choose your pitched item...
          </option>
          <option value="Berserked">Berserked</option>
          <option value="Magic Eyepatch">Magic Eyepatch</option>
          <option value="Black Heart">Black Heart</option>
          <option value="Total Control">Total Control</option>
          <option value="Dreamy Belt">Dreamy Belt</option>
          <option value="Source of Suffering">Source of Suffering</option>
          <option value="Genesis Badge">Genesis Badge</option>
          <option value="Commanding Force Earrings">
            Commanding Force Earrings
          </option>
          <option value="Endless Terror">Endless Terror</option>
          <option value="Cursed Spellbook">Cursed Spellbook</option>
          <option value="Mitra's Rage">Mitra's Rage</option>
        </select>
        <input type="text" id="notes" placeholder="Notes" />
        <button type="submit">Save Entry</button>
      </form>
    </>
  );
}

export default PitchDiary;
