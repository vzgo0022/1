import { faceNavLink, faceRoute } from "../../Type/Interface";
import shortid from "shortid";
import { A, B, C, D } from "../Porc/Porc";

export const NavLink: faceNavLink[] = [
  {
    to: "/",
    text: "Foo",
    key: shortid.generate()
  },
  {////////////////// sxala
    to: "/male",
    text: "male",
    key: shortid.generate()
  },
  {
    to: "/female",
    text: "female",
    key: shortid.generate()
  },
  {
    to: "/childish",
    text: "childish",
    key: shortid.generate()
  }
];

export const NavRoute: faceRoute[] = [
  {
    path: "/",
    exact: true,
    component: A,
    key: shortid.generate()
  },
  {
    path: "/male",
    component: B,
    key: shortid.generate()
  },
  {
    path: "/female",
    component: C,
    key: shortid.generate()
  },
  {
    path: "/childish",
    component: D,
    key: shortid.generate()
  }
];
