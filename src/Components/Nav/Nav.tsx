import React, { FC } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import ButSearch from ".././ButSearch";
import Product from "../Product";

const NavReact: FC = () => {
  return (
    <nav>
      <NavLink to={"/"}>{"Foo"}</NavLink>
      <NavLink to={"/male/hat"}>{"hat"}</NavLink> <br/>
      <NavLink to={"/male/jacket"}>{"jacket"}</NavLink> <br/>
      <NavLink to={"/male/pants"}>{"pants"}</NavLink> <br/>
      <NavLink to={"/male/shoes"}>{"shoes"}</NavLink> <br/>
      <NavLink to={"/male/suit"}>{"suit"}</NavLink> <br/>
      <Switch>
        <Route path={"/"} exact render={() => <div>'ll'</div>} />
        <Route path={"/male/hat/:product"} exact  component={Product}  />
        <Route path={"/male/jacket/:product"} exact component={Product}   />
        <Route path={"/male/pants/:product"} exact component={Product}   />
        <Route path={"/male/shoes/:product"} exact component={Product} />
        <Route path={"/male/suit/:product"} exact component={Product} />
        <Route path={"/male/hat"} exact  component={ButSearch}  />
        <Route path={"/male/jacket"} exact component={ButSearch}   />
        <Route path={"/male/pants"} exact component={ButSearch}   />
        <Route path={"/male/shoes"} exact component={ButSearch} />
        <Route path={"/male/suit"} exact component={ButSearch} />
        <Route render={() => <div>20</div>} />
      </Switch>
    </nav>
  );
};

export default NavReact;
