import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Zamfara = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Zamfara State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08035626731] , [08035161538] , [08161330774] , [08065408696] ,
              [08105009888]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Zamfara;
