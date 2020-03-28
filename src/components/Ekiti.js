import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Ekiti = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Ekiti State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>[09062970434] , [09062970435] , [09062970436] , [112] </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Ekiti;
