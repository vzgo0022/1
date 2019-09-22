import React, { Fragment } from "react";
import {MensWomensLink} from "./NavArray"

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <Fragment>{MensWomensLink}</Fragment>
      </nav>
    </Fragment>
  );
};

export default Nav;
