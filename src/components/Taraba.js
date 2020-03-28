import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Taraba = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Taraba State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08032501165] , [08065508675] , [08039359368] , [08037450227] ,
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Taraba;
