import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Osun = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Osun State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[08035025692] , [08033908772] , [08056456250]</div>}
        </b>
      </p>
    </div>
  );
};

export default Osun;
