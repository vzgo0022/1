import React, { FC, Fragment } from 'react'
import { facUseState } from '../../../Type/Interface';

const utImput:FC<facUseState<string>> = ({value, useValue}) => (
    <Fragment>
 <select value={value} onChange={(e)=>{useValue(e.target.value);}}>
            <option value="All">All Categories</option>
            <option value="Mens">Mens clothing</option>
            <option value="Womens">Womens clothing</option>
            <option value="Childrens">Childrens clothing</option>
          </select>
   </Fragment>
);

export default utImput;