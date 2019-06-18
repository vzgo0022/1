import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "../Admin";
import { MensArrPathProduct, MensArrPathPageList } from "./RouteProjArray";
import {
  RouteHead,
  RouteSchProd,
  RouteProduct,
  RouteCategProduct
} from "./RouteProjComp";

const RouteProj = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={RouteHead} />
      <Route path="/sch/:schProd" component={RouteSchProd} />
      <Route path={MensArrPathProduct} component={RouteProduct} />
      <Route path="/Womens/Hat/Product/:product" component={RouteProduct} />
      <Route path={MensArrPathPageList} component={RouteCategProduct} />
      <Route path="/Womens/Hat/:PageList" component={RouteCategProduct} />
      <Route path="/Admin" component={Admin} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </Fragment>
);

export default RouteProj;
