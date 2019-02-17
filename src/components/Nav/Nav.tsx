import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LinkArray from '../../DupComp/linkArray';
import { FaceLink } from '../../Type/Interface';





const Nav = (): JSX.Element => {
    return (
        <Router>
            <nav >
                <ul >
                    <LinkArray array = {NavLink}/>
                </ul>

                <Switch>
                    <Route exact path="/" />
                    <Route path="/Women" />
                    <Route path="/Man" />
                    <Route path="/Children" />
                    <Route path="/Electronics" />
                </Switch>
            </nav>
        </Router>
    )
}


const NavLink: FaceLink[] = [
    {
        to: '/Women',
        text: 'Women',
    }
]


