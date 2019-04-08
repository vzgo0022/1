import React, { FC, Fragment, useState } from "react";
import { faceProductList, HOE } from "../../Type/Interface";

const Banner: FC<{
  array: faceProductList[];
  yardage: number;
  section: HOE[];
}> = ({ array, yardage, section }) => {
  const [ListElem, setListElem] = useState<faceProductList[]>(
    array.slice(0, yardage)
  );
  const [index, setIndex] = useState<number>(yardage);
  const [category, setCategory] = useState<HOE>(section[0]);
  const [cateIndex, setCateIndex] = useState<number>(0);

  const arryForth = () => {
    if (index === array.length) {
      setListElem(array.slice(0, yardage));
      setIndex(yardage);
      setCategory(section[0]);
      setCateIndex(0);
    } else {
      setListElem(array.slice(index, index + yardage));
      setIndex(index => index + yardage);
      setCategory(section[cateIndex + 1]);
      setCateIndex(index => index + 1);
    }
  };
  const arrybeck = () => {
    if (index === yardage) {
      setListElem(array.slice(array.length - yardage, array.length));
      setIndex(array.length);
      setCategory(section[section.length]);
      setCateIndex(section.length);
    } else {
      setListElem(array.slice(index - yardage * 2, index - yardage));
      setIndex(index => index - yardage);
      setCategory(section[cateIndex - 1]);
      setCateIndex(index => index - 1);
    }
  };

  return <div />;
};
export default Banner;
