import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Kano = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Kano State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08039704476] , [08037038597] , [09093995333] , [09093995444]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Kano;
