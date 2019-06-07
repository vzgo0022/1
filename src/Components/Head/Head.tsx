import React, { FC, Fragment, useEffect, useState } from "react";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import Banner from "../Banner/Banner";
import { NavLink } from "react-router-dom";
import { faceProductList, faceMatch } from "../../Type/Interface";

const Head: FC<{ match: faceMatch<{}> }> = ({ match }) => {
  const [arrProd, setArrProd] = useState<JSX.Element[]>([]);
  const [resError, setResError] = useState<string>("");
  
  useEffect(() => { 
      const abortController = new AbortController();
      const signal =  abortController.signal;
    (async () => {
      setArrProd([]);
      setResError("");
      try {
        const Res = await fetch("https://foo0022.firebaseio.com/New.json", {
          signal: signal
        });
        if (!Res.ok) {
          throw new Error("Page Not Found 404");
        }
        const ResObj = await Res.json();
        const ResArr = await Object.values(ResObj).flat();
        await setArrProd(
          ResArr.map(
            (
              { to, id, price, src, title, sold, shipping }: faceProductList,
              indx
            ) => (
              <Fragment key={id}>
                <NavLink to={`${to}${`&Length=${indx}`}`}>
                  <br />
                  <img
                    src={`/${src[0][0]}`}
                    alt={title}
                    height={"220px"}
                    width={"220px"}
                  />
                  <br />
                  {price.length === 1 ? (
                    <span>{price[0][0]}</span>
                  ) : (
                    <span>{`${price[0][0]} to ${
                      price[price.length - 1][0]
                    }`}</span>
                  )}
                  <br />
                  <span>{shipping}</span>
                  <br />
                  <span>{sold}</span>
                  <br />
                </NavLink>
              </Fragment>
            )
          )
        );
      } catch (error) {
        if(error.name !== "AbortError") {setResError(error.message);}
      }
    })();
    return () =>{ abortController.abort();};
  }, [match]);
  
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <Banner array={arrProd} yardage={5} />
    </Fragment>
  );
};

export default Head;
