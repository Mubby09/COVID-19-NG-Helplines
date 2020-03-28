import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Ebonyi = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Ebonyi State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[09020332489]</div>}</b>
      </p>
    </div>
  );
};

export default Ebonyi;
