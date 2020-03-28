import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const River = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        River State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>[ [08056109538] , [08031888093] , [08033124314]</div>
          )}
        </b>
      </p>
    </div>
  );
};

export default River;
