import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Edo = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Edo State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[08084096723] , [08064258163] , [08035835529]</div>}
        </b>
      </p>
    </div>
  );
};

export default Edo;
