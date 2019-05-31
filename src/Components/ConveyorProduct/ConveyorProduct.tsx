import React, { FC, Fragment, useEffect, useState, memo } from "react";
import { NavLink } from "react-router-dom";

import ListProduct from "../ListProduct";
import { DupTegText } from "../../Containers/DupComp/DupTeg/DupTeg";
import { ConveyorProductOption } from "./ConveyorProductArray";
import { faceProductList } from "../../Type/Interface";

const ConveyorProduct: FC<{
  arrConvProd: faceProductList[];
  ListPage: number;
  Page: number;
  Params:string;
}> = ({ arrConvProd=[], ListPage=15, Page=1,Params="" }) => {
  const [arrCon, setArrCon] = useState<faceProductList[][]>([]);
  const [conIndex, setConIndex] = useState<number>(0);
  const [listIndex, setListIndex] = useState<number>(0);
  const [prodLengt, setProdLengt] = useState<number>(15);
  console.log("55")
  useEffect(() => {
    const BoolPage = Page > 0 && Page <= Math.ceil(arrConvProd.length / ListPage);
    const BoolListPage = [15, 30, 70, 140].includes(ListPage);
    if (BoolPage && BoolListPage) {
      setProdLengt(ListPage);
      setConIndex(Page - 1);
      if (Page > 6) {
        setListIndex(Page - 6);
      }
    } else {
      setProdLengt(15);
      setListIndex(0);
      setConIndex(0);
    }
    let arrList: faceProductList[][] = [];
    for (let i = 0; i < arrConvProd.length; i += prodLengt) {
      arrList.push(arrConvProd.slice(i, i + prodLengt));
    }
    setArrCon(arrList);
  }, [arrConvProd]);

  return (
    <Fragment>
      {!!arrCon.length && (
        <Fragment>
          <ListProduct
            arrListProd={arrCon[conIndex]}
            ListIndx={conIndex * prodLengt}
          />
          <Fragment>
            {arrCon
              .map((value, index) => (
                <NavLink 
                to={Params?`${Params}ListPage=${prodLengt}&Page=${index + 1}`:`ListPage=${prodLengt}&Page=${index + 1}`}
                //onClick={()=>history.push('/foo')}
                key={`${arrCon[index][0].id}`}>
                  {index + 1}
                </NavLink>
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
