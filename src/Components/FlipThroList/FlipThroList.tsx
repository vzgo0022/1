import React, { FC, Fragment} from "react";

const FlipThroList: FC<{}> = ({
 
}) => {
  /*
 <USETselect
              array={value}
              value={price}
              funcChange={({ target: { selectedIndex, value } }) => {
                setPrice(value);
                setIndexImgProd(selectedIndex);
              }}
            />

 {!!imgTegLis.length && (
        <FlipThroList  useValue={setImgTegLis} value={imgTegLis} arrayTeg={listImg} arrLeng={6} />
      )}
       readonly funcChange?: (e: ChangeEvent<HTMLSelectElement>) => void;

  useMemo(() => {
    useValue(array.slice(
      Math.floor(indexImg / gripLeng) * gripLeng,
      (Math.floor(indexImg / gripLeng) + 1) * gripLeng
    ));

  const arryForth = () => {
    if (ElemIndx < arrayTeg.length) {
      useValue(arrayTeg.slice(ElemIndx, ElemIndx + arrLeng));
      setElemIndx(ElemIndx + arrLeng);
    }
  };
  const arryBeck = () => {
    if (ElemIndx > arrLeng) {
      useValue(arrayTeg.slice(ElemIndx - arrLeng * 2, ElemIndx - arrLeng));
      setElemIndx(ElemIndx - arrLeng);
    }
  };

    <button onClick={arryForth}>{">"}</button>
      <button onClick={arryBeck}>{"<"}</button>
      <DupTeg array={value} />
    console.log("22222222222");
  }, [indexImg]);
  
  
  
  
  /////////////////////////
  import React, { FC, Fragment, useState, useEffect, memo } from "react";

import UuidKey from "../../Containers/UuidKey";
import Error from "../Error";
import Loding from "../Loding";
import { faceMatch, faceProductList, faceTeg } from "../../Type/Interface";

const Product: FC<{ match: faceMatch<{ product: string }> }> = ({ match }) => {
  const [prod, setProd] = useState<faceProductList>(Object);
  const [price, setPrice] = useState<string>("");
  const [indexImgProd, setIndexImgProd] = useState<number>(0);
  const [resError, setResError] = useState<string>("");
  const [listImg, setListImg] = useState<faceTeg[]>([]);
  const [imgTegLis, setImgTegLis] = useState<faceTeg[]>([]);

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
          setListImg(
            product.src.map((TegImg, index) => ({
              Tag: "img",
              key: `${TegImg}${0.5 + index}`,
              altText: `${TegImg}${0.6 + index}`,
              src: `http://localhost:3000/${TegImg}`,
              alt: product.title,
              height: "64px",
              width: "64px",
              onClick: () => {
                setIndexImgProd(index), setPrice(product.color[index]);
              }
            }))
          );
          setImgTegLis(listImg.slice(0, 6));
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
  console.log(imgTegLis);
  return (
    <Fragment>
      <h3>{prod.title}</h3>
      {[prod.color, prod.price, prod.saiz].map((value, index) =>
        value.length === 1 ? (
          <span key={UuidKey(`${value[0]}${0.1 + index}`)}>{value[0]}</span>
        ) : index === 0 ? (
          <Fragment key={UuidKey(`${value[index]}${0.2 + index}`)}>
            <select
              value={price}
              onChange={({ target: { selectedIndex, value } }) => {
                setPrice(value);
                setIndexImgProd(selectedIndex);
              }}
            >
              {value.map((val, ind) => (
                <option key={UuidKey(`${val}${0.4 + ind}`)}>{val}</option>
              ))}
            </select>
          </Fragment>
        ) : (
          <select key={UuidKey(`${value[index]}${0.3 + index}`)}>
            {value.map((val, ind) => (
              <option key={UuidKey(`${val}${0.4 + ind}`)}>{val}</option>
            ))}
          </select>
        )
      )}

      <img
        src={`http://localhost:3000/${prod.src[indexImgProd]}`}
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

  
  */



  return (
    <Fragment>
      
    </Fragment>
  );
};

export default FlipThroList;
