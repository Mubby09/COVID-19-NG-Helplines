import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Yobe = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Yobe State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08131834764] , [07041116027]</div>}</b>
      </p>
    </div>
  );
};

export default Yobe;
