import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LinkArray from '../../Functional/linkArray';

interface InterfaceLink {
    readonly to: string,
    readonly text: string,
    readonly download?: string,
    readonly rel?: string,
    readonly target?: string,
    readonly type?: string,
    readonly key?:number, 
 }
 

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


const NavLink: InterfaceLink[] = [
    {
        to: '/Women',
        text: 'Women',
    }
]


