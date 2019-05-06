import React, { FC, Fragment, useState, useEffect, memo } from "react";

import ProdSelectArr from "../ProdSelectArr/ProdSelectArr";
import Error from "../Error";
import Loding from "../Loding";
import { faceMatch, faceProductList, faceTegInput } from "../../Type/Interface";

const Product: FC<{ match: faceMatch<{ product: string }> }> = ({ match }) => {
  const [prod, setProd] = useState<faceProductList>(Object);
  const [resError, setResError] = useState<string>("");
  const [catColor, setCatColor] = useState<string>("");
  const [catPrice, setCatPrice] = useState<string>("");
  const [catSaiz, setCatSaiz] = useState<string>("");
  const [indexImgProd, setIndexImgProd] = useState<{
    headIndex: number;
    chaptersIndex: number;
  }>({ headIndex: 0, chaptersIndex: 0 });

  useEffect(() => {
    (async () => {
      await fetch(
        `https://foo0022.firebaseio.com//${match.url.replace(
          match.params.product,
          ""
        )}.json`
      )
        .then(res => res.json())
        .then(arr => {
          const product = arr.find(item => item.to === match.url);
          setProd(product);
        })
        .catch(error => {
          setResError(error);
        });
    })();
  }, [match.params.product]);

  if (resError !== "") {
    return <Error error={resError} />;
  } else if (!Object.entries(prod).length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <h3>{prod.title}</h3>
      <ProdSelectArr
        arrCateProd={prod.color}
        valueSec={catColor}
        funcChange={({ target: { value } }) => {
          const paramVal = value.split("-");
          const chiefInd = +paramVal[0];
          setCatColor(value);
          setCatPrice(`${chiefInd}-0-${prod.price[chiefInd][0]}`);
          setCatSaiz(`${chiefInd}-0-${prod.saiz[chiefInd][0]}`);
          setIndexImgProd({ headIndex: chiefInd, chaptersIndex: +paramVal[1] });
        }}
        prodSecKey={0}
      />

      {[prod.price].map(headVal => (
        <select
          value={catPrice}
          onChange={({ target: { value } }) => {
            const paramVal = value.split("-");
            const chiefInd = +paramVal[0];
            setCatPrice(value);
            setCatColor(`${chiefInd}-0-${prod.color[chiefInd][0]}`);
            setCatSaiz(`${chiefInd}-0-${prod.saiz[chiefInd][0]}`);
            if (chiefInd !== indexImgProd.headIndex) {
              setIndexImgProd({
                headIndex: chiefInd,
                chaptersIndex: +paramVal[1]
              });
            }
          }}
        >
          {headVal.map((value, index) => (
            <Fragment>
              {value.map((val, ind) => (
                <option value={`${index}-${ind}-${val}`}>{val}</option>
              ))}
            </Fragment>
          ))}
        </select>
      ))}
      {[prod.saiz].map(headVal => (
        <select
          value={catSaiz}
          onChange={({ target: { value } }) => {
            const paramVal = value.split("-");
            const chiefInd = +paramVal[0];
            console.log(chiefInd, +paramVal[1]);
            setCatSaiz(value);
            setCatColor(`${chiefInd}-0-${prod.color[chiefInd][0]}`);
            setCatPrice(`${chiefInd}-0-${prod.price[chiefInd][0]}`);
            if (chiefInd === indexImgProd.headIndex) {
              setIndexImgProd({
                headIndex: chiefInd,
                chaptersIndex: +paramVal[1]
              });
            }
            //chiefInd === (+paramVal[1])
          }}
        >
          {headVal.map((value, index) => (
            <Fragment>
              {value.map((val, ind) => (
                <option value={`${index}-${ind}-${val}`}>{val}</option>
              ))}
            </Fragment>
          ))}
        </select>
      ))}
      <img
        src={`http://localhost:3000/${
          prod.src[indexImgProd.headIndex][indexImgProd.chaptersIndex]
        }`}
        alt={prod.title}
        height={"500px"}
        width={"500px"}
      />
      <span>{prod.prodState}</span>
      <span>{prod.shipping}</span>
      <span>{prod.sold}</span>
    </Fragment>
  );
};

export default memo(Product);

//{valueProd.color.map((valCoZaPr, indexCoZaPr) => (
//<option>{valCoZaPr}</option>
// ))}
/**     const x=value.split('-');
            console.log(x)
            setCategory(value);
            value={`${indexProd}-${ind}-${val}`} */
