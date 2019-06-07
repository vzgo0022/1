import React, { FC, Fragment, useState, useMemo } from "react";

const Banner: FC<{
  array: JSX.Element[];
  yardage: number;
}> = ({ array, yardage }) => {
  const [ListElem, setListElem] = useState<JSX.Element[]>([]);
  const [index, setIndex] = useState<number>(0);

  useMemo(() => {
    setListElem(array.slice(0, yardage));
    setIndex(yardage);
  }, [array,yardage]);

  const arryForth = () => {
    if (index >= array.length) {
      setListElem(array.slice(0, yardage));
      setIndex(yardage);
    } else if (index + yardage < array.length) {
      setListElem(array.slice(index, index + yardage));
      setIndex(index + yardage);
    } else {
      setListElem(array.slice(index, (array.length % yardage) + index));
      setIndex(index + yardage);
    }
  };
  const arryBeck = () => {
    if (index - yardage > yardage) {
      setListElem(array.slice(index - yardage * 2, index - yardage));
      setIndex(index - yardage);
    } else if (index - yardage === yardage) {
      setListElem(array.slice(0, yardage));
      setIndex(yardage);
    } else {
      setListElem(
        array.slice(array.length - (array.length % yardage), array.length)
      );
      setIndex(array.length - (array.length % yardage) + yardage);
    }
  };

  return (
    <Fragment>
      <button onClick={arryForth}>{">"}</button>
      <button onClick={arryBeck}>{"<"}</button>
      <Fragment>{ListElem}</Fragment>
    </Fragment>
  );
};
export default Banner;
