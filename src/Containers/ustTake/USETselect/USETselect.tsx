import React, { FC, Fragment } from "react";

import DupTeg from "../../../Containers/DupComp/DupTeg";
import { facUseArray } from "../../../Type/Interface";

const USETselect: FC<facUseArray<string>> = ({
  value,
  useValue,
  array = []
}) => (
  <Fragment>
    <select
      value={value}
      onChange={({ target }) => {
        useValue(target.value);
      }}
    >
      <DupTeg array={array} />
    </select>
  </Fragment>
);

export default USETselect;
