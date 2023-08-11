import './styling.css'

import satData from "./satData";

const Buttons = (props) => {
  let filterByType = props.filterByType;
  let setSat = props.setSat;
  let displaySats = props.displaySats;
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        )
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;