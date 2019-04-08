import { faceNavLink, faceRoute } from "../../Type/Interface";
import React, { Fragment } from 'react';

import ButSearch from ".././ButSearch";

export const NavLink: faceNavLink[] = [
  {
    to: "/",
    text: "Foo",
    key: "navNavLink1"
  },
  {
    to: "/male",
    text: "male",
    key: "navNavLink2"
  },
  {
    to: "/female",
    text: "female",
    key: "navNavLink3"
  },
  {
    to: "/childish",
    text: "childish",
    key: "navNavLink4"
  }
];

export const NavRoute: faceRoute[] = [
  {
    path: "/",
    exact: true,
    render: () => <Fragment><div>'ll'</div></Fragment> ,
    key: "navRoute1"
  },
  {
    path: "/male",
    render: () => <ButSearch reqName={"man"} />,
    key: "navRoute2"
  },
  {
    path: "/female",
    render: () => <ButSearch reqName={"woman"} />,
    key: "navRoute3"
  },
  {
    path: "/childish",
    render: () => <ButSearch reqName={"child"} />,
    key: "navRoute4"
  }
];
