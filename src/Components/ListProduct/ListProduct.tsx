import React, { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import {Product} from '../../Type/Interface'

const ListProduct:FC<Product> = ({title, price, proState, shipping, sold}) => {
    return (
        <Fragment>
           <NavLink to={'/5'}>
            <h3>{title}</h3>
            <span>{price}</span>
            <span>{proState}</span>
            <span>{shipping}</span>
            <span>{sold}</span>
           </NavLink>
        </Fragment>
    );
}

export default ListProduct;