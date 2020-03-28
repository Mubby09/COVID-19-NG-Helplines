import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Abuja = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        FCT
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08099936312] , [07080631500]</div>}</b>
      </p>
    </div>
  );
};

export default Abuja;
