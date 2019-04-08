import React, { FC } from "react";
import { Switch } from "react-router-dom";

import DupNavLink from "../../Containers/DupComp/DupNavLink";
import DupRoute from "../../Containers/DupComp/DupRoute";
import { NavLink, NavRoute } from "./NavArray";

const NavReact: FC = () => {
  return (
    <nav>
      <DupNavLink array={NavLink} />
      <Switch>
        <DupRoute array={NavRoute} />
      </Switch>
    </nav>
  );
};

export default NavReact;
