import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ButSearch from ".././ButSearch";
import Product from "../Product";
import SearchProd from "../SearchProd";
import NewProd from "../NewProd";
import Header from "../Header";
import Admin from "../Admin";
import Footer from "../Footer";
import { faceMatch } from "../../Type/Interface";



const renderProduct = ({
  match
}: {
  match: faceMatch<{ product: string }>;
}) => (
  <Fragment>
    <Header params={""} />
    <Product match={match} />
  </Fragment>
);

const renderUntitled = ({
  match
}: {
  match: faceMatch<{ PageList: string }>;
}) => (
  <Fragment>
    <Header params={""} />
    <ButSearch match={match} />
  </Fragment>
);

const RouteCom = () => (
  <Fragment>
    <Switch>
      <Route
        path="/"
        exact
        render={({ match }: { match: faceMatch<{}> }) => (
          <Fragment>
            <Header params={""} />
            <h1>{"Welcome to Amasia"}</h1>
            <NewProd match={match} />
            <footer><Footer/></footer>
          </Fragment>
        )}
      />
      <Route
        path="/sch/:schProd"
        render={({ match }: { match: faceMatch<{ schProd: string }> }) => (
          <Fragment>
            <Header params={match.params.schProd} />
            <SearchProd match={match} />
          </Fragment>
        )}
      />
      <Route path="/Mens/Hat/Product/:product" render={renderProduct} />
      <Route path="/Mens/Jacket/Product/:product" render={renderProduct} />
      <Route path="/Mens/Pant/Product/:product" render={renderProduct} />
      <Route path="/Mens/Shoe/Product/:product" render={renderProduct} />
      <Route path="/Mens/Suit/Product/:product" render={renderProduct} />
      <Route path="/Mens/Shirt/Product/:product" render={renderProduct} />

      <Route path="/Womens/Hat/Product/:product" render={renderProduct} />

      <Route path="/Mens/Hat/:PageList" render={renderUntitled} />
      <Route path="/Mens/Jacket/:PageList" render={renderUntitled} />
      <Route path="/Mens/Pant/:PageList" render={renderUntitled} />
      <Route path="/Mens/Shoe/:PageList" render={renderUntitled} />
      <Route path="/Mens/Suit/:PageList" render={renderUntitled} />
      <Route path="/Mens/Shirt/:PageList" render={renderUntitled} />
      <Route path="/Womens/Hat/:PageList" render={renderUntitled} />

      <Route path="/Admin" component={Admin} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </Fragment>
);

export default RouteCom;
