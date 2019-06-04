import React, { FC, Fragment } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import ButSearch from ".././ButSearch";
import Product from "../Product";
import FormSearch from "../FormSearch";
import SearchProd from "../SearchProd";
import HandlerErr from "../HandlerErr";
import Head from "../Head/Head";
import ButtLogSing from "../ButtLogSing/ButtLogSing";
import Logo from "../Logo";
import { faceMatch } from "../../Type/Interface";

const page = "ListPage=15&Page=1";
const renderProduct = ({
  match
}: {
  match: faceMatch<{ product: string }>;
}) => (
  <Fragment>
    <Logo/>
    <FormSearch params={""} />
    <Product match={match} />
  </Fragment>
);

const renderUntitled = ({
  match
}: {
  match: faceMatch<{ PageList: string }>;
}) => (
  <Fragment>
    <Logo/>
    <FormSearch params={""} />
    <ButSearch match={match} />
  </Fragment>
);

const Nav: FC = () => {
  return (
    <nav>
      <NavLink to={`/Mens/Hat/${page}`}>{"Hat"}</NavLink> <br />
      <NavLink to={`/Mens/Jacket/${page}`}>{"Jacket"}</NavLink> <br />
      <NavLink to={`/Mens/Pants/${page}`}>{"Pants"}</NavLink> <br />
      <NavLink to={`/Mens/Shoes/${page}`}>{"Shoes"}</NavLink> <br />
      <NavLink to={`/Mens/Suit/${page}`}>{"Suit"}</NavLink> <br />
      <NavLink to={`/`}>{"Hat"}</NavLink> <br />
      <NavLink to={`/`}>{"Jacket"}</NavLink> <br />
      <NavLink to={`/`}>{"Pants"}</NavLink> <br />
      <NavLink to={`/`}>{"Shoes"}</NavLink> <br />
      <NavLink to={`/`}>{"Suit"}</NavLink> <br />
      <NavLink to={`/`}>{"Hat"}</NavLink> <br />
      <NavLink to={`/`}>{"Jacket"}</NavLink> <br />
      <NavLink to={`/`}>{"Pants"}</NavLink> <br />
      <NavLink to={`/`}>{"Shoes"}</NavLink> <br />
      <NavLink to={`/`}>{"Suit"}</NavLink> <br />
      <Switch>
        <Route
          path="/"
          exact
          render={({ match }) => (
            <Fragment>
              <Logo/>
              <FormSearch params={""} />
              <ButtLogSing/>
              <Head match={match} />
            </Fragment>
          )}
        />
        <Route
          path="/sch/:schProd"
          render={({ match }: { match: faceMatch<{ schProd: string }> }) => (
            <Fragment>
              <FormSearch params={match.params.schProd} />
              <SearchProd match={match} />
            </Fragment>
          )}
        />
        <Route path="/Mens/Hat/Product/:product" render={renderProduct} />
        <Route path="/Mens/Jacket/Product/:product" render={renderProduct} />
        <Route path="/Mens/Pants/Product/:product" render={renderProduct} />
        <Route path="/Mens/Shoes/Product/:product" render={renderProduct} />
        <Route path="/Mens/Suit/Product/:product" render={renderProduct} />
        <Route path="/New/Product/:product" render={renderProduct} />
        <Route path="/Mens/Hat/:PageList" render={renderUntitled} />
        <Route path="/Mens/Jacket/:PageList" render={renderUntitled} />
        <Route path="/Mens/Pants/:PageList" render={renderUntitled} />
        <Route path="/Mens/Shoes/:PageList" render={renderUntitled} />
        <Route path="/Mens/Suit/:PageList" render={renderUntitled} />
        <Route
          path="*"
          render={() => <HandlerErr error={"Page Not Found 404"} />}
        />
      </Switch>
    </nav>
  );
};

export default Nav;
