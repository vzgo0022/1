import React from "react";
import { NavLink } from "react-router-dom";

const MensLinkArr = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(category => (
  <NavLink to={`/Mens/${category}/ListPage=15&Page=1`}>{category}</NavLink>
));

 const WomensLinkArr = [
  "Hat",
  "Jacket",
  "Pant",
  "Shoe",
  "Suit",
  "Shirt"
].map(category => (
  <NavLink to={`/Womens/${category}/ListPage=15&Page=1`}>{category}</NavLink>
));

export const MensWomensLink =[...MensLinkArr,...WomensLinkArr];