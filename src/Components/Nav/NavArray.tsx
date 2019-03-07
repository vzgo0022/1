import { faceNavLink, faceRoute } from "../../Type/Interface";
import { A, B, C, D } from "../Porc/Porc";

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
    component: A,
    key: "navRoute1"
  },
  {
    path: "/male",
    component: B,
    key: "navRoute2"
  },
  {
    path: "/female",
    component: C,
    key: "navRoute3"
  },
  {
    path: "/childish",
    component: D,
    key: "navRoute4"
  }
];
