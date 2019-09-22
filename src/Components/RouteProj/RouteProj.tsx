import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "../Admin";
import {
  MensArrPathProduct,
  MensArrPathPageList,
  WomensArrPathProduct,
  WomensArrPathPageList
} from "./RouteProjArray";
import {
  RouteHead,
  RouteSchProd,
  RouteProduct,
  RouteCategProduct
} from "./RouteProjComp";
import SingUp from "../SingUp";

const RouteProj = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={RouteHead} />
      <Route path="/sch/:schProd" component={RouteSchProd} />
      <Route path={MensArrPathProduct} component={RouteProduct} />
      <Route path={WomensArrPathProduct} component={RouteProduct} />
      <Route path={MensArrPathPageList} component={RouteCategProduct} />
      <Route path={WomensArrPathPageList} component={RouteCategProduct} />
      <Route path="/Admin" component={Admin} />
      <Route path="/SingUp" component={SingUp} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </Fragment>
);

export default RouteProj;
