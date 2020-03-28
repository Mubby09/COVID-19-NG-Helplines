import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Plateau = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Plateau
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [07032864444] , [08035422711] , [08065486416] , [08035779917]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Plateau;
