import React, { FC, Fragment, useEffect, useState } from "react";
import ConveyorProduct from "../ConveyorProduct";
import Error from "../Error";

import { faceProductList } from "../../Type/Interface";

const ButSearch: FC<{ reqName: string }> = ({ reqName }) => {
  const [arrProd, setArrProd] = useState<faceProductList[]>([]);
  const [resError, setResError] = useState<string>("");
 
  useEffect(() => {
    (async () => {
      await fetch(`https://foo0022.firebaseio.com/.json`)
        .then(res =>  res.json())
        .then(arr=>setArrProd(Object.values(arr).flat()))
        .catch(error => {
          setResError(error);
        });
    })();
  }, []);

  return (
    <Fragment>
      {resError !== "" ? (
        <Error error={resError} />
      ) : (
        arrProd.length !== 0 ? <ConveyorProduct arrConvProd={arrProd} /> :<div>...Loding</div>
      )}
    </Fragment>
  );
};

export default ButSearch;
