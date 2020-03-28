import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Kogi = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Kogi state
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [0704485619] , [07088292249] , [08150953486] , [08095227003] ,
              [07043402122]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Kogi;
