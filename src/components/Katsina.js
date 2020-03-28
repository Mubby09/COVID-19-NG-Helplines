import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Katsina = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Katsina state
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[09035037114] , [09047092428]</div>}</b>
      </p>
    </div>
  );
};

export default Katsina;
