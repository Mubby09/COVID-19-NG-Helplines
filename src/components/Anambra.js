import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Anambra = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Anambra State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[08030953771] , [08117567363] , [08145434416]</div>}
        </b>
      </p>
    </div>
  );
};

export default Anambra;
