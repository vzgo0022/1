import React, { FC, Fragment, memo } from "react";
import { NavLink } from "react-router-dom";

import SeaAnsProd from "../SeaAnsProd";
import { faceProductList } from "../../Type/Interface";

const ListProduct: FC<{ arrListProd: faceProductList[] ,ListIndx:number}> = ({
  arrListProd, ListIndx=0
}) =>  (
    <Fragment>
      {arrListProd.map(({ to, id, ...value }: faceProductList, indx) => (
        <Fragment key={id}>
          <NavLink to={`${to}${`&Length=${ListIndx+indx}`}`}>
            <SeaAnsProd {...value} />
          </NavLink>
        </Fragment>
      ))}
    </Fragment>
  );

export default memo(ListProduct);
