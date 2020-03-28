import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Bayelsa = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Bayelsa State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[08039216821] , [07019304970] , [08151693570]</div>}
        </b>
      </p>
    </div>
  );
};

export default Bayelsa;
