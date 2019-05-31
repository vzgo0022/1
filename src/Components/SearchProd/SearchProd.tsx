import React, { FC, Fragment, useContext, useEffect, useState } from "react";

import { server } from "../../index";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { faceProductList, faceMatch } from "../../Type/Interface";
import ConveyorProduct from "../ConveyorProduct/ConveyorProduct";
import NotFound from "../NotFound";

const SearchProd: FC<{ match: faceMatch<{ schProd: string }> }> = ({
  match
}) => {
  const serverObj = useContext(server);
  const [reqSearch, setReqSearch] = useState<faceProductList[]>([]);
  const [nothFound, setNothFound] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");
  const [searchNam, setSearchNam] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, Params:"" });

  useEffect(() => {
    (async () => {
      try {
        await setResError("");
        await setSearchNam("");
        await setReqSearch([]);
        await setNothFound(false);
        const searchParams = await new URLSearchParams(match.params.schProd);
        const BoolPage = await (!Number.isNaN(+`${searchParams.get("Page")}`) &&
          !!searchParams.get("Page"));
        const BoolListPage = await (!Number.isNaN(
          +`${searchParams.get("ListPage")}`
        ) && !!searchParams.get("ListPage"));

        if (
          !searchParams.get("Categories") ||
          !searchParams.get("Search") ||
          !BoolPage ||
          !BoolListPage
        ) {
          throw new Error("Page Not Found 404");
        } else {
          
          setPage({
            Page: +`${searchParams.get("Page")}`,
            ListPage: +`${searchParams.get("ListPage")}`,
            Params:match.params.schProd.split("&", 2).map(e => e + "&").join("")
          });
        }
        const Categories =
          (await searchParams.get("Categories")) !== "All" &&
          searchParams.get("Categories")
            ? `${searchParams.get("Categories")}.json`
            : ".json";
        const Search = await `${searchParams.get("Search")}`;
        const res = await serverObj.handlerSearch(Categories, Search);
        if (Array.isArray(res) && !!res.length) {
          setReqSearch(res);
        } else if (Array.isArray(res)) {
          setNothFound(!res.length);
          setSearchNam(Search);
        } else if (typeof res === "string") {
          setResError(res);
        }
      } catch (error) {
        setResError(error.message);
      }
    })();
  }, [match]);

  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (nothFound) {
    return <NotFound prodName={searchNam} />;
  } else if (!reqSearch.length && !nothFound) {
    return <Loding />;
  }

  return (
    <Fragment>
      <ConveyorProduct
        arrConvProd={reqSearch}
        ListPage={page.ListPage}
        Page={page.Page}
        Params={page.Params}
      />
    </Fragment>
  );
};

export default SearchProd;
