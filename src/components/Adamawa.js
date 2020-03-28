import React, { useState } from "react";
import classes from "../components/Helplines.module.css";

const Adamawa = () => {
  const [toggled, toggle] = useState(false);

  return (
    <div>
      <button
        className={classes.button}
        onClick={() => toggle((toggled) => !toggled)}
      >
        Adamawa State
      </button>

      <p className={classes.Block}>
        <b>{toggled && <div>[08031230359] , [07080601139]</div>}</b>
      </p>
    </div>
  );
};

export default Adamawa;
