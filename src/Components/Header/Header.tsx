import React, { Fragment } from "react";
import Nav from "../Nav";
import Logo from "../Logo";
import FormSearch from "../FormSearch";
import ButtLogSing from "../ButtLogSing/ButtLogSing";

const Header = ({params=""}) => (
   <Fragment>
       <header>
       <Logo/>
       <Nav/>
       <FormSearch params={params}/>
       <ButtLogSing/>
       </header>
   </Fragment>
);

export default Header;