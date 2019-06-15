import { useState, useMemo } from "react";

const useBanner = (array: JSX.Element[], yardage: number) => {
  const [ListElem, setListElem] = useState<JSX.Element[]>([]);
  const [indexArr, setIndex] = useState<number>(0);

  useMemo(() => {
    setListElem(array.slice(0, yardage));
    setIndex(yardage);
  }, [array, yardage]);

  const arryForth = () => {
    if (indexArr >= array.length) {
      setListElem(array.slice(0, yardage));
      setIndex(yardage);
    } else if (indexArr + yardage < array.length) {
      setListElem(array.slice(indexArr, indexArr + yardage));
      setIndex(indexArr + yardage);
    } else {
      setListElem(array.slice(indexArr, array.length));
      setIndex(array.length);
    }
  };
  const arryBeck = () => {
    if (indexArr - yardage > yardage) {
      setListElem(array.slice(indexArr - yardage * 2, indexArr - yardage));
      setIndex(indexArr - yardage);
    } else if (indexArr - yardage === yardage) {
      setListElem(array.slice(0, yardage));
      setIndex(yardage);
    } else if (array.length % yardage) {
      setListElem(
        array.slice(array.length - (array.length % yardage), array.length)
      );
      setIndex(array.length - (array.length % yardage));
    } else {
      setListElem(array.slice(array.length - yardage, array.length));
      setIndex(array.length - yardage);
    }
  };

  return {
    arryForth,
    arryBeck,
    ListElem,
    indexArr
  };
};
export default useBanner;
