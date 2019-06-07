import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
    <Fragment>
        <NavLink to={"/"}>
        <img src={`/Logo/1.png`} alt={"Logo Amasia"} height={"119px"} width={"262px"} />
        </NavLink>
    </Fragment>
);

export default Logo;