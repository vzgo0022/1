import React, { FC, Fragment, memo } from "react";

import { facUseState } from "../../../Type/Interface";

const USETimput: FC<facUseState<string>> = ({ value, useValue }) => (
  <Fragment>
    <input
      type={"text"}
      size={50}
      maxLength={150}
      placeholder={"Search for anything"}
      alt={"search"}
      spellCheck={false}
      autoComplete={"off"}
      value={value}
      onChange={({ target }) => {
        useValue(target.value);
      }}
    />
  </Fragment>
);

export default memo(USETimput);
//
