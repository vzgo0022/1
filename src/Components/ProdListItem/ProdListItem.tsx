import React, { FC, Fragment } from "react";

import { faceProduct } from "../../Type/Interface";

const ProdListItem: FC<faceProduct> = ({
  title = "",
  prodState = "",
  shipping = "",
  sold = "",
  src = "", //kartinka ni nadna //////
  price = ""
}) => (
  <Fragment>
    <h2 itemProp="name">{title}</h2>
    <br />
    <img src={`/${src[0]}`} alt={title} height={"220px"} width={"220px"} />
    <br />
    <span>{price}</span>
    <br />
    <span>{prodState}</span>
    <br />
    <span>{shipping}</span>
    <br />
    <span>{sold}</span>
    <br />
  </Fragment>
);

export default ProdListItem;
