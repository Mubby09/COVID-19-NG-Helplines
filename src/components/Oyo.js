import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Oyo = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Oyo State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && <div>[08038210122] , [08023229267] , [08073431342]</div>}
        </b>
      </p>
    </div>
  );
};

export default Oyo;
