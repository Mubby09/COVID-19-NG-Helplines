import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Enugu = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Enugu State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08182555550] , [117] , [112] </div>}</b>
      </p>
    </div>
  );
};

export default Enugu;
