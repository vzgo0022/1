import React, { Fragment } from "react";
import {Redirect } from "react-router";
import FormSearch from "../FormSearch";
import SearchProd from "../SearchProd";
import Product from "../Product";
import ButSearch from "../ButSearch";
import { faceRoute, faceMatch } from "./../../Type/Interface";
/*
const renderProduct = ({
  match
}: {
  match: faceMatch<{ product: string }>;
}) => (
  <Fragment>
    <FormSearch />
    <Product match={match} />
  </Fragment>
);

const renderUntitled =({ match }:{ match: faceMatch<{}>}) => (
  <Fragment>
    <FormSearch />
    <ButSearch match={match} />
  </Fragment>
)*/
/*
export const NavArrayRoute: faceRoute[] = [
  {
    path: "/",
    exact: true,
    render: ({ match }: { match: faceMatch<{ schProd: string }> }) => (
      <Fragment>
        <FormSearch match={match} />
      </Fragment>
    ),
    key: "NavArrayRoute1"
  },
  {
    path: "/sch/:schProd",
    render: ({ match }: { match: faceMatch<{ schProd: string }> }) => (
      <Fragment>
        <FormSearch match={match} />
        <SearchProd match={match} />
      </Fragment>
    ),
    key: "NavArrayRoute2"
  },
  { 
    path: "/Mens/Hat/:product",
    render: renderProduct,
    key: "NavArrayRoute3"
  },
  {
    path: "/Mens/Jacket/:product",
    render: renderProduct,
    key: "NavArrayRoute4"
  },
  {
    path: "/Mens/Pants/:product",
    render: renderProduct,
    key: "NavArrayRoute5"
  },
  {
    path: "/Mens/Shoes/:product",
    render: renderProduct,
    key: "NavArrayRoute6"
  },
  { path: "/Mens/Suit/:product", render: renderProduct, key: "NavArrayRoute7" },
  {   exact: true,path: "/Mens/Hat", render: renderUntitled, key: "NavArrayRoute8" },
  {  exact: true,path: "/Mens/Jacket", render: renderUntitled, key: "NavArrayRoute9" },
  { exact: true,
    path: "/Mens/Pants",
    render: renderUntitled,
    key: "NavArrayRoute10"
  },
  { exact: true,
    path: "/Mens/Shoes",
    render: renderUntitled,
    key: "NavArrayRoute11"
  },
  { exact: true,
    path: "/Mens/Suit",
    render: renderUntitled,
    key: "NavArrayRoute12"
  },
  {  exact: true,path:"*", render:() => <div>200</div>, key: "NavArrayRoute13" }
];
*/