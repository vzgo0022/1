import React, { FC, Fragment } from "react";
import useBanner from "../../Containers/useHooks/useBanner";

const Banner: FC<{ array: JSX.Element[]; yardage: number }> = ({
  array,
  yardage
}) => {
  const { arryForth, arryBeck, ListElem } = useBanner(array, yardage);
  return (
    <Fragment>
      <button onClick={arryForth}>{">"}</button>
      <button onClick={arryBeck}>{"<"}</button>
      <Fragment>{ListElem}</Fragment>
    </Fragment>
  );
};

export default Banner;
