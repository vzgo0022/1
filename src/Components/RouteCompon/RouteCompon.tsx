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
    <main>
    <Product match={match} />
    </main>
  </Fragment>
);

const renderCategProduct  = ({
  match
}: {
  match: faceMatch<{ PageList: string }>;
}) => (
  <Fragment>
    <Header params={""} />
    <main>
    <ButSearch match={match} />
    </main>
  </Fragment>
);

const RouteCompon = () => (
  <Fragment>
    <Switch>
      <Route
        path="/"
        exact
        render={({ match }: { match: faceMatch<{}> }) => (
          <Fragment>
            <Header params={""} />
            <main>
            <h1>{"Welcome to Amasia"}</h1>
            <NewProd match={match} />
            </main>
            <footer><Footer/></footer>
          </Fragment>
        )}
      />
      <Route
        path="/sch/:schProd"
        render={({ match }: { match: faceMatch<{ schProd: string }> }) => (
          <Fragment>
            <Header params={match.params.schProd} />
            <main>
            <SearchProd match={match} />
            </main>
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

      <Route path="/Mens/Hat/:PageList" render={renderCategProduct} />
      <Route path="/Mens/Jacket/:PageList" render={renderCategProduct} />
      <Route path="/Mens/Pant/:PageList" render={renderCategProduct} />
      <Route path="/Mens/Shoe/:PageList" render={renderCategProduct} />
      <Route path="/Mens/Suit/:PageList" render={renderCategProduct} />
      <Route path="/Mens/Shirt/:PageList" render={renderCategProduct} />
      <Route path="/Womens/Hat/:PageList" render={renderCategProduct} />

      <Route path="/Admin" component={Admin} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </Fragment>
);

export default RouteCompon;
