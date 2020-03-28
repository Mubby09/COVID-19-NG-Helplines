import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Delta = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Delta State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08033521961] , [08035078541] , [08030758179] , [08031230021] ,
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Delta;
