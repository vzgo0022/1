import React, { Fragment } from "react";

import { ProdSelect } from "../../Type/Interface";

const ProdSelectArr = ({
  arr1,
  arr2,
  arr3,
  setValue1,
  setValue2,
  setValue3,
  setValueIndex,
  headIndex,
  value,
  prodSecKey,
  agility
}: ProdSelect<string>) => {
  const sorterChange = ({ target: { value } }) => {
    const paramVal = value.split("-");
    const chiefInd = +paramVal[0],
      chaptersInd = +paramVal[1];
    setValue1(value);
    if (agility) {
      setValue2(`${chiefInd}-0-${arr2[chiefInd][0]}`);
      setValue3(`${chiefInd}-0-${arr3[chiefInd][0]}`);
      setValueIndex({ headIndex: chiefInd, chaptersIndex: chaptersInd });
    } else if (chiefInd !== headIndex) {
      setValue2(`${chiefInd}-0-${arr2[chiefInd][0]}`);
      setValue3(`${chiefInd}-0-${arr3[chiefInd][0]}`);
      setValueIndex({
        headIndex: chiefInd,
        chaptersIndex: 0
      });
    }
  };

  return (
    <Fragment>
      { arr1.length > 1 || arr1[0].length > 1 ?<select value={value} onChange={sorterChange}>
        {[arr1].map((headVal, headInd) => (
          <Fragment key={`${headInd - prodSecKey}`}>
            {headVal.map((value, index) => (
              <Fragment key={`${prodSecKey - 2 * index}`}>
                {value.map((val, ind) => (
                  <option
                    value={`${index}-${ind}-${val}`}
                    key={`${prodSecKey - 3 * ind}`}
                  >
                    {val}
                  </option>
                ))}
              </Fragment>
            ))}
          </Fragment>
        ))}
      </select>:<span>{arr1[0][0]}</span>}
    </Fragment>
  );
};

export default ProdSelectArr;
