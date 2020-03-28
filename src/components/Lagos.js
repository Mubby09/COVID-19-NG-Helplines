import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Lagos = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Lagos State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [ [080000CORONA] , [08023169485] , [08033565529] , [08052817243] ,
              [08028971864] ]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Lagos;
