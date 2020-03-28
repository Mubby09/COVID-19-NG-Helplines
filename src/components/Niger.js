import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Niger = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Niger state
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[08038246018] , [09093093642] , [08077213070]</div>}
        </b>
      </p>
    </div>
  );
};

export default Niger;
