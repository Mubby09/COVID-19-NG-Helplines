import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const CrossRiver = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        CrossRiver State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[09036281412] , [08050907736] , [08033565529]</div>}
        </b>
      </p>
    </div>
  );
};

export default CrossRiver;
