import React, { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { Product, Attribut } from '../../Type/Interface'
import shortid from "shortid";
import DupTeg from '../../DupComp/DupTeg';

const arrayTeg: Attribut[] = [
  {
    Tag: "span",
    text: "1",
    key: shortid.generate(),
    style: { textAlign: "center" }
  },
  {
    Tag: "span",
    text: "2",
    key: shortid.generate(),
    style: { textAlign: "center" }
  },
  {
    Tag: "span",
    text: "3",
    key: shortid.generate(),
    style: { textAlign: "center" }
  }
];



const ListProduct:FC<{}> = ({}) => {
    return (
        <Fragment>
         <DupTeg array={arrayTeg}/>
        </Fragment>
    );
}

export default ListProduct;