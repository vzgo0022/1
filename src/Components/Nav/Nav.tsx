import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const page = "ListPage=15&Page=1";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <NavLink to={`/Mens/Hat/${page}`}>{"Hat"}</NavLink> <br />
        <NavLink to={`/Mens/Jacket/${page}`}>{"Jacket"}</NavLink> <br />
        <NavLink to={`/Mens/Pant/${page}`}>{"Pant"}</NavLink> <br />
        <NavLink to={`/Mens/Shoe/${page}`}>{"Shoe"}</NavLink> <br />
        <NavLink to={`/Mens/Suit/${page}`}>{"Suit"}</NavLink> <br />
        <NavLink to={`/Mens/Shirt/${page}`}>{"Shirt"}</NavLink> <br />
        <NavLink to={`/Womens/Hat/${page}`}>{"Hat"}</NavLink> <br />
        <NavLink to={`/`}>{"Jacket"}</NavLink> <br />
        <NavLink to={`/`}>{"Pant"}</NavLink> <br />
        <NavLink to={`/`}>{"Shoe"}</NavLink> <br />
        <NavLink to={`/`}>{"Suit"}</NavLink> <br />
        <NavLink to={`/`}>{"Hat"}</NavLink> <br />
        <NavLink to={`/`}>{"Jacket"}</NavLink> <br />
        <NavLink to={`/`}>{"Pant"}</NavLink> <br />
        <NavLink to={`/`}>{"Shoe"}</NavLink> <br />
        <NavLink to={`/`}>{"Suit"}</NavLink> <br />
      </nav>
    </Fragment>
  );
};

export default Nav;
