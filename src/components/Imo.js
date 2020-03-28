import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Imo = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Imo State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08099555577] , [07087110839]</div>}</b>
      </p>
    </div>
  );
};

export default Imo;
