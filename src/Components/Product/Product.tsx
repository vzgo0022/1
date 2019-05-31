import React, { FC, Fragment, useState, useEffect, useRef, memo } from "react";

import ProdSelectArr from "../ProdSelectArr/ProdSelectArr";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import FlipThroList from "../FlipThroList";
import {
  faceMatch,
  faceProductList,
  faceTegWithoutText
} from "../../Type/Interface";

const Product: FC<{ match: faceMatch<{ product: string }> }> = ({ match }) => {
  const [prod, setProd] = useState<faceProductList>(Object);
  const [resError, setResError] = useState<string>("");
  const [categColor, setCategColor] = useState<string>("");
  const [categPrice, setCategPrice] = useState<string>("");
  const [categSaiz, setCategSaiz] = useState<string>("");
  const [twoIndexImg, setTwoIndexImg] = useState<{
    headIndex: number;
    chaptersIndex: number;
  }>({ headIndex: 0, chaptersIndex: 0 });
  const [listImg, setListImg] = useState<faceTegWithoutText[]>([]);
  const oneIndexImg = useRef<string[]>([]);
  
  useEffect(() => {
    (async () => {
      try {
        const searchParams = await new URLSearchParams(match.params.product);
        if (Number.isNaN(+`${searchParams.get("Length")}`)) {
          throw new Error("Page Not Found 404");
        }
        const Length = await `${searchParams.get("Length")}`;
        const res = await fetch(
          `https://foo0022.firebaseio.com//${match.url.replace(
            `Product/${match.params.product}`,
            ""
          )}${Length}.json`
        );
        const product = await res.json();
        if (!res.ok || !product) {
          throw new Error("Page Not Found 404");
        }
        setProd(product);
        oneIndexImg.current = product.src.flat();
        setListImg(
          product.src
            .map((TegImg, index) =>
              TegImg.map((val, ind) => ({
                Tag: "img",
                key: `${val}${0.5 + index}`,
                src: `http://localhost:3000/${val}`,
                alt: product.title,
                height: "64px",
                width: "64px",
                onClick: () => {
                  setTwoIndexImg({ headIndex: index, chaptersIndex: ind });
                  if (!!product.color[index][ind]) {
                    setCategColor(
                      `${index}-${ind}-${product.color[index][ind]}`
                    );
                    setCategPrice(`${index}-0-${product.price[index][0]}`);
                    setCategSaiz(`${index}-0-${product.saiz[index][0]}`);
                  } else {
                    setCategColor(`${index}-0-${product.color[index][0]}`);
                    setCategPrice(`${index}-0-${product.price[index][0]}`);
                    setCategSaiz(`${index}-0-${product.saiz[index][0]}`);
                  }
                }
              }))
            )
            .flat()
        );
      } catch (error) {
        setResError(error.message);
      }
    })();
  }, [match]);
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!Object.entries(prod).length) {
    return <Loding />;
  }
  return (
    <Fragment>
      <h3>{prod.title}</h3>
      <ProdSelectArr
        arr1={prod.color}
        arr2={prod.price}
        arr3={prod.saiz}
        setValue1={setCategColor}
        setValue2={setCategPrice}
        setValue3={setCategSaiz}
        setValueIndex={setTwoIndexImg}
        value={categColor}
        headIndex={twoIndexImg.headIndex}
        agility={prod.agility[0]}
        prodSecKey={0.1}
      />
      <ProdSelectArr
        arr1={prod.price}
        arr2={prod.color}
        arr3={prod.saiz}
        setValue1={setCategPrice}
        setValue2={setCategColor}
        setValue3={setCategSaiz}
        setValueIndex={setTwoIndexImg}
        value={categPrice}
        headIndex={twoIndexImg.headIndex}
        agility={prod.agility[1]}
        prodSecKey={0.2}
      />
      <ProdSelectArr
        arr3={prod.color}
        arr2={prod.price}
        arr1={prod.saiz}
        setValue3={setCategColor}
        setValue2={setCategPrice}
        setValue1={setCategSaiz}
        setValueIndex={setTwoIndexImg}
        value={categSaiz}
        headIndex={twoIndexImg.headIndex}
        agility={prod.agility[2]}
        prodSecKey={0.3}
      />
      {!!listImg.length && (
        <FlipThroList
          arrLeng={6}
          arrTeg={listImg}
          IndxImg={oneIndexImg.current.indexOf(
            prod.src[twoIndexImg.headIndex][twoIndexImg.chaptersIndex]
          )}
        />
      )}
      <img
        src={`http://localhost:3000/${
          prod.src[twoIndexImg.headIndex][twoIndexImg.chaptersIndex]
        }`}
        alt={prod.title}
        height={"500px"}
        width={"500px"}
      />
      <input size={4} type={"text"} />
      <span>{prod.prodState}</span>
      <span>{prod.shipping}</span>
      <span>{prod.sold}</span>
    </Fragment>
  );
};

export default memo(Product);
