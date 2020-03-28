import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const AkwaIbom = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        AkwaIbom State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [09045575515] , [07035211919] , [08028442194] , [08037934966] ,
              [09023330092]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default AkwaIbom;
