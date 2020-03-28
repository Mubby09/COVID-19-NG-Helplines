import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Abia = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Abia State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div> [07002242362] , [070ABIADOC] </div>}</b>
      </p>
    </div>
  );
};

export default Abia;
