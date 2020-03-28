import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Benue = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Benue state
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[ [09018602439] , [07025031214]</div>}</b>
      </p>
    </div>
  );
};

export default Benue;
