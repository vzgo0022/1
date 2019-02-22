import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import DupNavLink from '../../DupComp/DupNavLink';
import DupRoute from '../../DupComp/DupRoute';
import { NavLink, NavRoute } from './NavArray';



const NavReact:FC = () => {
    return (
        <nav >
            <ul >
                <DupNavLink array={NavLink} />
            </ul>

            <Switch>
                <DupRoute array={NavRoute} />
            </Switch>
        </nav>
    )
}



export default NavReact;