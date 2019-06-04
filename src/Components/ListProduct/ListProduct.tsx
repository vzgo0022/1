import React, { FC, Fragment, memo } from "react";
import { NavLink } from "react-router-dom";

import SeaAnsProd from "../SeaAnsProd";
import { faceProductList } from "../../Type/Interface";

const ListProduct: FC<{ arrListProd: faceProductList[]}> = ({
  arrListProd
}) =>  (
    <Fragment>
      {arrListProd.map(({ to, id, ...value }: faceProductList) => (
        <Fragment key={id}>
          <NavLink to={`${to}`}>
            <SeaAnsProd {...value} />
          </NavLink>
        </Fragment>
      ))}
    </Fragment>
  );

export default memo(ListProduct);
