import React, { FC, Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import Banner from "../Banner";
import { newProdImg, newProdCateg } from "./NewProdArray";
import useBanner from "../../Containers/useHooks/useBanner";
import { faceProduct, faceMatch } from "../../Type/Interface";

const NewProd: FC<{ match: faceMatch<{}> }> = ({ match }) => {
  const [arrProd, setArrProd] = useState<JSX.Element[]>([]);
  const [resError, setResError] = useState<string>("");
  const { bannForth, bannBeck, bannResetValue, bannArr, bannListIndex } = useBanner(
    newProdCateg,
    1
  );

  useEffect(bannResetValue, [match]);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    document.title = `Hat Jacket Pants Shoes Suit | Amasia`;
    (async () => {
      setArrProd([]);
      setResError("");
      try {
        const Res = await fetch(
          `https://foo0022.firebaseio.com/New/${bannArr}.json`,
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
            }: faceProduct) => (
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
  }, [match, bannArr]);

  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <button onClick={bannForth}>{">"}</button>
      <button onClick={bannBeck}>{"<"}</button>
      <Fragment>{newProdImg[bannListIndex - 1]}</Fragment>
      <Banner array={arrProd} yardage={1} />
    </Fragment>
  );
};

export default NewProd;
