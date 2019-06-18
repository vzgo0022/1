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
        <NavLink to={`/Womens/Jacket/${page}`}>{"Jacket"}</NavLink> <br />
        <NavLink to={`/Womens/Pant/${page}`}>{"Pant"}</NavLink> <br />
        <NavLink to={`/Womens/Shoe/${page}`}>{"Shoe"}</NavLink> <br />
        <NavLink to={`/Womens/Suit/${page}`}>{"Suit"}</NavLink> <br />
        <NavLink to={`/Womens/Shirt/${page}`}>{"Shirt"}</NavLink> <br />
        <NavLink to={`/Childrens/Hat/${page}`}>{"Hat"}</NavLink> <br />
        <NavLink to={`/Childrens/Jacket/${page}`}>{"Jacket"}</NavLink> <br />
        <NavLink to={`/Childrens/Pant/${page}`}>{"Pant"}</NavLink> <br />
        <NavLink to={`/Childrens/Shoe/${page}`}>{"Shoe"}</NavLink> <br />
        <NavLink to={`/Childrens/Suit/${page}`}>{"Suit"}</NavLink> <br />
        <NavLink to={`/Childrens/Shirt/${page}`}>{"Shirt"}</NavLink> <br />
      </nav>
    </Fragment>
  );
};

export default Nav;
