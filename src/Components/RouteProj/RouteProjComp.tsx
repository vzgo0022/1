import React, { Fragment } from "react";
import ButSearch from ".././ButSearch";
import Product from "../Product";
import SearchProd from "../SearchProd";
import NewProd from "../NewProd";
import Header from "../Header";
import Footer from "../Footer";
import { faceMatch } from "../../Type/Interface";
//<{ product: string }>
export const RouteProduct = ({
  match 
}:{match: faceMatch<{ product: string }>}) => (
  <Fragment>
    <Header params={""} />
    <main>
      <Product match={match} />
    </main>
  </Fragment>
);

export const RouteCategProduct = ({
  match
}: {
  match: faceMatch<{ PageList: string }>;
}) => (
  <Fragment>
    <Header params={""} />
    <main>
      <ButSearch/>
    </main>
  </Fragment>
);
//////////////
export const RouteHead = ({ match }: { match: faceMatch<{}> }) => (
  <Fragment>
    <Header params={""} />
    <main>
      <h1>{"Welcome to Amasia"}</h1>
      <NewProd match={match} />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);
export const RouteSchProd = ({
  match
}: {
  match: faceMatch<{ schProd: string }>;
}) => (
  <Fragment>
    <Header params={match.params.schProd} />
    <main>
      <SearchProd match={match} />
    </main>
  </Fragment>
);
