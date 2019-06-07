import React, { FC, Fragment } from "react";

import { faceProduct } from "../../Type/Interface";

const SeaAnsProd: FC<faceProduct> = ({
  title,
  prodState,
  shipping,
  sold,
  src,
  price
}) =>(
  <Fragment>
    <h3>{title}</h3><br/>
    <img src={`/${src[0][0]}`} alt={title} height={"220px"} width={"220px"} /><br/>
    {price.length === 1 ?<span>{price[0][0]}</span>:<span>{`${price[0][0]} to ${price[price.length-1][0]}`}</span>}<br/>
    <span>{prodState}</span><br/>
    <span>{shipping}</span><br/>
    <span>{sold}</span><br/>
  </Fragment>
);

export default SeaAnsProd;
