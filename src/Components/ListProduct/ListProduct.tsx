import React, { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Product from '../Product';
import { faceProductList } from '../../Type/Interface';


const ListProduct: FC<{ array: faceProductList[] }> = ({ array }) => {
  return (
    <Fragment>
      {array.map(({ to, id, ...value }: faceProductList) => (
        <Fragment key={id}>
          <NavLink to={to} >
            <Product {...value} />
          </NavLink>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default ListProduct;