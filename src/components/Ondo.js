import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Ondo = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Ondo State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [080COVID19] , [08002684319] , [070COVID19] , [07002684319] ,
              [0700COVID19], [070012684319]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Ondo;
