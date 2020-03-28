import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Bauchi = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Bauchi State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08032717887] , [08059600898] , [08033698036] , [08080330216] ,
              [08036911698]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Bauchi;
