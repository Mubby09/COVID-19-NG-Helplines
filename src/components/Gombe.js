import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Gombe = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Gombe State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08103371257]</div>}</b>
      </p>
    </div>
  );
};

export default Gombe;
