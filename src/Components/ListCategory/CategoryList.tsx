import React, { FC, Fragment } from 'react'
import { Switch } from 'react-router-dom';

import DupNavLink from '../../DupComp/DupNavLink';
import DupRoute from '../../DupComp/DupRoute';
import { NavLink, NavRoute } from './ListCategoryArray'


const ListCategory:FC = () => {
    return (
        <Fragment>
            <DupNavLink array={NavLink} />
            <Switch>
                <DupRoute array={NavRoute} />
            </Switch>
        </Fragment>
    );
}

export default ListCategory;