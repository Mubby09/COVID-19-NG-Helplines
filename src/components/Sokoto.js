import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Sokoto = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Sokoto State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08032311116] , [08022069567] , [08035074228] , [07031935037] ,
              [08036394462]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Sokoto;
