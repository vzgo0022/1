import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import DupLink from '../../DupComp/DupLink';
import { NavArray } from './NavArray';



const NavReact: FC<{}> = () => {
    return (
        <nav >
            <ul >
                <DupLink array={NavArray} />
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