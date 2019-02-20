import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import DupNavLink from '../../DupComp/DupNavLink';
import { NavArray } from './NavArray';



const NavReact: FC<{}> = () => {
    return (
        <nav >
            <ul >
                <DupNavLink array={NavArray} />
            </ul>

            <Switch>
                <Route exact path="/" />
                <Route path="/Women" />
                <Route path="/Man" />
                <Route path="/Children" />
                <Route path="/Electronics" />
            </Switch>
        </nav>
    )
}



export default NavReact;