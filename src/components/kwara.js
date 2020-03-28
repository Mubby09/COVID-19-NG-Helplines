import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Kwara = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Kwara State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[090620100001] , [09062010002]</div>}</b>
      </p>
    </div>
  );
};

export default Kwara;
