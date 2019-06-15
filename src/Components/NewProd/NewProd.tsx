import React, { FC, Fragment, useEffect, useState } from "react";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { newProdImg, newProdcateg } from "./NewProdArray";
import Banner from "../Banner";
import { NavLink } from "react-router-dom";
import { faceProductList, faceMatch } from "../../Type/Interface";

const NewProd: FC<{ match: faceMatch<{}> }> = ({ match }) => {
  const [arrProd, setArrProd] = useState<JSX.Element[]>([]);
  const [ImgCatIndx, setImgCatIndx] = useState<number>(0);
  const [resError, setResError] = useState<string>("");

  useEffect(() => {
    setImgCatIndx(0);
  }, [match]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    document.title = `Hat Jacket Pants Shoes Suit | Amasia`;
    (async () => {
      setArrProd([]);
      setResError("");
      try {
        const Res = await fetch(
          `https://foo0022.firebaseio.com/New/${newProdcateg[ImgCatIndx]}.json`,
          {
            signal: signal
          }
        );
        if (!Res.ok) {
          throw new Error("Page Not Found 404");
        }
        const ResObj = await Res.json();
        const ResArr = await Object.values(ResObj).flat();
        await setArrProd(
          ResArr.map(
            ({
              to,
              id,
              price,
              src,
              title,
              sold,
              shipping
            }: faceProductList) => (
              <Fragment key={id}>
                <NavLink to={to}>
                  <img
                    src={`/${src[0]}`}
                    alt={title}
                    height={"220px"}
                    width={"220px"}
                  />
                  <span>{price}</span>
                  <span>{shipping}</span>
                  <span>{sold}</span>
                </NavLink>
              </Fragment>
            )
          )
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          setResError(error.message);
        }
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [match,ImgCatIndx]);

  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <button
        onClick={() => {
          ImgCatIndx + 1 !== 3
            ? setImgCatIndx(ImgCatIndx + 1)
            : setImgCatIndx(0);
        }}
      >
        {">"}
      </button>
      <button
        onClick={() => {
          ImgCatIndx - 1 !== 0
            ? setImgCatIndx(ImgCatIndx - 1)
            : setImgCatIndx(0);
        }}
      >
        {"<"}
      </button>
      <Fragment>{newProdImg[ImgCatIndx]}</Fragment>
      <Banner array={arrProd} yardage={8} />
    </Fragment>
  );
};

export default NewProd;
