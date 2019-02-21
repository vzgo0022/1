import React, { FC, Fragment } from 'react'
import { Switch } from 'react-router-dom';

import DupNavLink from '../../DupComp/DupNavLink';
import DupRoute from '../../DupComp/DupRoute';
import { NavLink, NavRoute } from './CategoryListArray'


const CategoryList: FC<({})> = () => {
    return (
        <Fragment>
            <ul><DupNavLink array={NavLink} /></ul>
            <Switch>
                <DupRoute array={NavRoute} />
            </Switch>
        </Fragment>
    );
}

export default CategoryList;