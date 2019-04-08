import React, { FC, Fragment, useEffect, useState, useCallback } from "react";

import { faceProductList } from "../../Type/Interface";
import ListProduct from "../ListProduct";

const ConveyorProduct: FC<{ arrConvProd: faceProductList[] }> = ({
  arrConvProd
}) => {
  const [arrCon, setArrCon] = useState<faceProductList[][]>([]);
  const [conIndex, setConIndex] = useState<number>(0);
  const [listIndex, setListIndex] = useState<number>(0);
  const [inProLen, setInProLen] = useState<number>(20);
  const [prodLengt, setProdLengt] = useState<number>(20);
  
  
   
  useEffect(() => {
    let arrList: faceProductList[][] = [];

    for (let i = 0; i < arrConvProd.length; i += prodLengt) {
      arrList.push(arrConvProd.slice(i, i + prodLengt));
    }console.log(arrList,arrConvProd)
    setArrCon(arrList);
  }, [prodLengt]);

  return (
    <Fragment>
      {arrCon.length && (
        <Fragment>
          <ListProduct arrListProd={arrCon[conIndex]} />
          <Fragment>
            {arrCon
              .map((value, index) => (
                <button
                  onClick={() => {
                    const newIndex = index + 1;
                    arrCon[conIndex] !== value && setConIndex(index);

                    if (
                      newIndex >= 7 &&
                      newIndex >= 3 + listIndex &&
                      newIndex !== arrCon.length
                    ) {
                      console.log("1", newIndex, listIndex);
                      setListIndex(newIndex - 6);
                    } else if (listIndex > 0 && newIndex !== arrCon.length) {
                      setListIndex(0);
                      console.log("3", newIndex, listIndex);
                    }
                  }}
                >
                  {index + 1}
                </button>
              ))
              .slice(listIndex, listIndex + 10)}
              <label htmlFor="inProLen">{"Length"}</label>
              <input type ={"text"} id={"inProLen"} value={inProLen} onChange={({target:{value}})=>setInProLen(+value)}/>
              <input type ={"button"} value={"Go"} onClick={()=>{setProdLengt(inProLen)}}/>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};
//<input type ={"text"} value={listLength} onChange={({target:{value}})=>setListLength(+value)}/>
export default ConveyorProduct;
