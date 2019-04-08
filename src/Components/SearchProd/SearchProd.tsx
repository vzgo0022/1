import React, { FC, Fragment, useContext, useState } from "react";

import { server } from "../../index";
import { faceProductList } from "../../Type/Interface";
import { SearchTextOption } from "./SearchProdArray";
import Error from "../Error";
import ConveyorProduct from "../ConveyorProduct/ConveyorProduct";
import USETimput from "../../Containers/ustTake/USETimput";
import USETselect from "../../Containers/ustTake/USETselect/USETselect";


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
      serverObj.handler(id, valueSearch)
      .then(({ array, value, error }) => {
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
        <USETimput value={valueSearch} useValue={setSearch} />
        <input type={"submit"} value={"search"} />
        <USETselect value={id} useValue={useSetId} array={SearchTextOption} />
      </form>
      {boolSearch ? (
        <ConveyorProduct arrConvProd={reqSearch} />
      ) : (
        exValSear && <div>{`Named "${exValSear}" item not found`}</div>
      )}
      {resError && <Error error={resError} />}
    </Fragment>
  );
};

export default SearchProd;
