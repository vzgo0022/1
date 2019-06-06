import React, { FC, Fragment, useEffect, useState } from "react";

import ConveyorProduct from "../ConveyorProduct";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { faceProductList, faceMatch } from "../../Type/Interface";

const ButSearch: FC<{ match: faceMatch<{ PageList: string }> }> = ({
  match
}) => {
  const [arrProd, setArrProd] = useState<faceProductList[]>([]);
  const [resError, setResError] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15 });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
       setResError("");
       setArrProd([]);
      try {
        const searchParams = await new URLSearchParams(match.params.PageList);
        const BoolPage = await (!Number.isNaN(+`${searchParams.get("Page")}`) &&
          !!searchParams.get("Page"));
        const BoolListPage = await (!Number.isNaN(
          +`${searchParams.get("ListPage")}`
        ) && !!searchParams.get("ListPage"));
        if (!BoolPage || !BoolListPage) {
          throw new Error("Page Not Found 404");
        } else {
          setPage({
            Page: +`${searchParams.get("Page")}`,
            ListPage: +`${searchParams.get("ListPage")}`
          });
        } 
        const Res = await fetch(
          `https://foo0022.firebaseio.com${`${match.url.replace(
            `${match.params.PageList}`,
            ""
          )}.json`}`,
          { signal: signal }
        );
        if (!Res.ok) {
          throw new Error("Page Not Found 404");
        }
        const ResObj = await Res.json();
        const ResArr = await Object.values(ResObj).flat();
        await setArrProd(ResArr);
      } catch (error) {
        if(error.name !== "AbortError") {setResError(error.message);}
      }
    })();
    
    return () => {abortController.abort();};
  }, [match]);
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <ConveyorProduct
        arrConvProd={arrProd}
        ListPage={page.ListPage}
        Page={page.Page}
        Params={`${match.url.replace(`${match.params.PageList}`, "")}`}
      />
    </Fragment>
  );
};

export default ButSearch;
