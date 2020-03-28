import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Kaduna = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Kaduna State
      </button>

      <p className={classes.Block}>
        <b>
          {toggled && (
            <div>
              [08035871662] , [08025088304] , [08032401473] , [08037808191]
            </div>
          )}
        </b>
      </p>
    </div>
  );
};

export default Kaduna;
