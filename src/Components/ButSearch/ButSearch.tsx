import React, { FC, Fragment, useEffect, useState, memo } from "react";
import ConveyorProduct from "../ConveyorProduct";
import Error from "../Error";
import Loding from "../Loding";
import { faceProductList, faceMatch } from "../../Type/Interface";

const ButSearch: FC<{ match: faceMatch<{}> }> = ( {match} ) => {
  const [arrProd, setArrProd] = useState<faceProductList[]>([]);
  const [resError, setResError] = useState<string>("");
 
  useEffect(() => {
    (async () => {
      await fetch(`https://foo0022.firebaseio.com${match.path}.json`)
        .then(res => res.json())
        .then(arr => setArrProd(Object.values(arr).flat()))
        .catch(error => {
          setResError(error);
        });
    })();
  }, [match]);

  return (
    <Fragment>
      {resError !== "" ? (
        <Error error={resError} />
      ) : arrProd.length !== 0 ? (
        <ConveyorProduct arrConvProd={arrProd} />
      ) : (
        <Loding />
      )}
    </Fragment>
  );
};

export default ButSearch;
