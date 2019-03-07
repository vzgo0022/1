import React, { FC, Fragment } from "react";

const Error: FC<{ error: string }> = ({ error }) => {
  return (
    <Fragment>
      <div>{error}</div>
      <div>{"Contact site administrator"}</div>
    </Fragment>
  );
};

export default Error;
