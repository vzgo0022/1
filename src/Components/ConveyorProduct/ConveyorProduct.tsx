import React, { FC, Fragment, useEffect, useState, useCallback , memo} from "react";
import { faceProductList } from "../../Type/Interface";
import ListProduct from "../ListProduct";
import {DupTegText} from "../../Containers/DupComp/DupTeg/DupTeg";
import { ConveyorProductOption } from "./ConveyorProductArray";

const ConveyorProduct: FC<{ arrConvProd: faceProductList[] }> = ({
  arrConvProd
}) => {
  const [arrCon, setArrCon] = useState<faceProductList[][]>([]);
  const [conIndex, setConIndex] = useState<number>(0);
  const [listIndex, setListIndex] = useState<number>(0);
  const [prodLengt, setProdLengt] = useState<number>(15);
  const [CliLisInd, setCliLisInd] = useState<number>(0);

  const arrConClick = useCallback(
    (value, index) => {
      if (CliLisInd !== index) {
        setCliLisInd(index);
        window.scrollTo(0, 0);
        const newIndex = index + 1;
        arrCon[conIndex] !== value && setConIndex(index);
        if (
          newIndex >= 7 &&
          newIndex >= 3 + listIndex &&
          newIndex !== arrCon.length &&
          arrCon.length >= 11
        ) {
          setListIndex(newIndex - 6);
        } else if (listIndex > 0 && newIndex !== arrCon.length) {
          setListIndex(0);
        }
      }
    },
    [CliLisInd]
  );

  useEffect(() => {
    let arrList: faceProductList[][] = [];

    for (let i = 0; i < arrConvProd.length; i += prodLengt) {
      arrList.push(arrConvProd.slice(i, i + prodLengt));
    }
    setConIndex(0);
    setArrCon(arrList);
  }, [prodLengt, arrConvProd]);

  return (
    <Fragment>
      {!!arrCon.length && (
        <Fragment>
          <ListProduct arrListProd={arrCon[conIndex]} />
          <Fragment>
            {arrCon
              .map((value, index) => (
                <button
                  onClick={() => {
                    arrConClick(value, index);
                  }}
                  key={`${arrCon[index][0].id}`}
                >
                  {index + 1}
                </button>
              ))
              .slice(listIndex, listIndex + 10)}
            <select
              value={prodLengt}
              onChange={({ target: { value } }) => {
                setProdLengt(+value);
              }}
            >
              <DupTegText array={ConveyorProductOption} />
            </select>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default memo(ConveyorProduct);
