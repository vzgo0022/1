import React, { FC, Fragment } from "react";

import { faceProductList } from "../../Type/Interface";
import ConveyorProduct from "../ConveyorProduct";

const ContainerProduct: FC<{ arrConvProd: faceProductList[] }> = ({
  arrConvProd
}) => {
  return (
    <Fragment>
      <ConveyorProduct arrConvProd={arrConvProd} />
    </Fragment>
  );
};

export default ContainerProduct;
