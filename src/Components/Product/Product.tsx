import React, { FC, Fragment, useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { faceProduct, faceTegWithoutText } from "../../Type/Interface";
import FlipThroList from "../FlipThroList";

const Product: FC<RouteComponentProps<{ product: string }>> = ({ match }) => {
  const [prod, setProd] = useState<faceProduct>();
  const [resError, setResError] = useState<string>("");
  const [listImg, setListImg] = useState<faceTegWithoutText[]>([]);
  const [listIndx, setListIndx] = useState<number>(0);
  const [colorCateg, setColorCateg] = useState<string>("");
  const [saizCateg, setSaizCateg] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
      setResError("");
      setProd(undefined);
      const searchParams = new URLSearchParams(match.params.product);
      if (Number.isNaN(+`${searchParams.get("Length")}`)) {
        setResError("Page Not Found 404");
      }
      const Length = `${searchParams.get("Length")}`;
      try {
        const Res = await fetch(
          `https://foo0022.firebaseio.com//${match.url.replace(
            `Product/${match.params.product}`,
            ""
          )}${Length}.json`,
          { signal: signal }
        );
        const Product = await Res.json();
        if (!Res.ok || !Product) {
          throw new Error("Page Not Found 404");
        }
        document.title = `${Product.title}`;
        await setProd(Product);
        setListImg(
          Product.src
            .map((value, index) => ({
              Tag: "img",
              key: `${value}${0.1 + index}`,
              src: `/${value}`,
              alt: Product.title,
              height: "64px",
              width: "64px",
              onClick: () => {
                setListIndx(index);
                Product.color.length >= index &&
                  setColorCateg(Product.color[index]);
              }
            }))
            .flat()
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
  }, [match]);
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!prod) {
    return <Loding />;
  }

  return (
    <Fragment>
      <div itemScope itemType={"http://schema.org/Product"}>
        <h1 itemProp={"name"}>{prod.title}</h1>

        {!!listImg.length && (
          <FlipThroList arrLeng={6} arrTeg={listImg} IndxImg={listIndx} />
        )}
        <img
          src={`/${prod.src[listIndx]}`}
          alt={prod.title}
          height={"500px"}
          width={"500px"}
          itemProp={"image"}
        />
      </div>
      <Fragment>
        {prod.color.length > 1 ? (
          <select
            value={colorCateg}
            onChange={({ target: { value } }) => {
              setListIndx(prod.color.indexOf(value));
              setColorCateg(value);
            }}
          >
            {prod.color.map((catVal, catInx) => (
              <option key={`${0.2 + catInx}`}>{catVal}</option>
            ))}
          </select>
        ) : (
          <span>{prod.color}</span>
        )}
      </Fragment>
      <Fragment>
        {prod.saiz.length > 1 ? (
          <select
            value={saizCateg}
            onChange={({ target: { value } }) => {
              setSaizCateg(value);
            }}
          >
            {prod.saiz.map((catVal, catInx) => (
              <option key={`${0.3 + catInx}`}>{catVal}</option>
            ))}
          </select>
        ) : (
          <span>{prod.saiz}</span>
        )}
      </Fragment>
      <input size={4} type={"text"} />
      <div itemProp={"offers"} itemScope itemType={"http://schema.org/Offer"}>
        <span itemProp={"price"} {...{ content: `${prod.price}` }}>
          {prod.price}
        </span>
        <meta itemProp="priceCurrency" content="USD" />
      </div>
      <span>{prod.prodState}</span>
      <span>{prod.shipping}</span>
      <span>{prod.sold}</span>
    </Fragment>
  );
};

export default withRouter(Product);
