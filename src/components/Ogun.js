import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Ogun = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Ogun State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08188978392] , [08188978392]</div>}</b>
      </p>
    </div>
  );
};

export default Ogun;
