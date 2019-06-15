import React, { Fragment } from "react";
import Nav from "../Nav";
import Logo from "../Logo";
import FormSearch from "../FormSearch";
import ButtLogSing from "../ButtLogSing/ButtLogSing";

const Header = ({params=""}) => (
   <Fragment>
       <Logo/>
       <Nav/>
       <FormSearch params={params}/>
       <ButtLogSing/>
   </Fragment>
);

export default Header;