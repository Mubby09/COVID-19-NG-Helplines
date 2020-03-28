import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Borno = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Borno State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08088159881] , [080099999999]</div>}</b>
      </p>
    </div>
  );
};

export default Borno;
