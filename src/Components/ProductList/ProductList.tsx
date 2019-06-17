import React, { FC, Fragment, memo } from "react";
import { NavLink } from "react-router-dom";

import ProdListItem from "../ProdListItem";
import { faceProduct } from "../../Type/Interface";

const ProductList: FC<{ arrListProd: faceProduct[]}> = ({
  arrListProd
}) =>  (
    <Fragment>
      {arrListProd.map((ProdInfo : faceProduct) => (
        <Fragment key={ProdInfo.id}>
          <NavLink to={`${ProdInfo.to}`}>
            <ProdListItem {...ProdInfo} />
          </NavLink>
        </Fragment>
      ))}
    </Fragment>
  );

export default memo(ProductList);
