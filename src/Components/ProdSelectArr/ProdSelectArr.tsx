import React, { FC, Fragment } from "react";

import UuidKey from "../../Containers/UuidKey";
import { ProdSelect } from "../../Type/Interface";

const ProdSelectArr = ({ arrCateProd, valueSec, funcChange, prodSecKey }: ProdSelect) => (
  <Fragment>
    {[arrCateProd].map(headVal => (
      <select value={valueSec} onChange={funcChange} >
        {headVal.map((value, index) => (
          <Fragment>
            {value.map((val, ind) => (
              <option value={`${index}-${ind}-${val}`}>{val}</option>
            ))}
          </Fragment>
        ))}
      </select>
    ))}
  </Fragment>
);

export default ProdSelectArr;
