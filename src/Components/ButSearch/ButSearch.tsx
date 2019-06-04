import React, { FC, Fragment, useContext, useEffect, useState } from "react";

import { server } from "../../index";
import ConveyorProduct from "../ConveyorProduct";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { faceProductList, faceMatch } from "../../Type/Interface";

const ButSearch: FC<{ match: faceMatch<{ PageList: string }> }> = ({
  match
}) => {
  const serverObj = useContext(server);
  const [arrProd, setArrProd] = useState<faceProductList[]>([]);
  const [resError, setResError] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15 });
  
  useEffect(() => {
    (async () => {
      try {
        await setResError("");
        await setArrProd([]);
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
        const res = await serverObj.handlerCategories(
          `${match.url.replace(`${match.params.PageList}`, "")}.json`
        );
        Array.isArray(res) ? setArrProd(res) : setResError(res);
      } catch (error) {
        setResError(error.message);
      }
    })();
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
        Params={`${match.url.replace(
          `${match.params.PageList}`,
          "")}`}
      />
    </Fragment>
  );
};

export default ButSearch;
