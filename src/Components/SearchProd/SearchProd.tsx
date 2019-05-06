import React, { FC, Fragment, useContext, useState } from "react";

import { server } from "../../index";
import { faceProductList } from "../../Type/Interface";
import { SearchTextOption } from "./SearchProdArray";
import { inputSetSearch } from "./SarchProdObject";
import Error from "../Error";
import ConveyorProduct from "../ConveyorProduct/ConveyorProduct";
import {DupTegText} from "../../Containers/DupComp/DupTeg/DupTeg";
import NotFound from "../NotFound";

const SearchProd: FC = () => {
  const serverObj = useContext(server);
  const [valueSearch, setSearch] = useState<string>("");
  const [id, useSetId] = useState<string>("All");
  const [reqSearch, setReqSearch] = useState<faceProductList[]>([]);
  const [boolSearch, setBool] = useState<boolean>(false);
  const [exValSear, setExValSear] = useState<string>("");
  const [resError, setResError] = useState<string>("");

  const onSearch = event => {
    try {
      serverObj.handler(id, valueSearch).then(({ array, value, error }) => {
        if (error !== "successfully") {
          setResError(error);
        } else if (array.length) {
          setReqSearch(array);
          setBool(true);
        } else {
          setExValSear(value);
          setBool(false);
        }
      });
    } catch (error) {
      setResError(error.message);
    }
    event.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={onSearch}>
        <input
          {...inputSetSearch}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
        />
        <input type={"submit"} value={"search"} />
        <select
          value={id}
          onChange={({ target: { value } }) => {
            useSetId(value);
          }}
        >
          <DupTegText array={SearchTextOption} />
        </select>
      </form>
      {boolSearch ? (
        <ConveyorProduct arrConvProd={reqSearch} />
      ) : (
        exValSear && <NotFound prodName={exValSear} />
      )}
      {resError && <Error error={resError} />}
    </Fragment>
  );
};

export default SearchProd;
