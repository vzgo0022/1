import React, { FC, Fragment, useContext, useState } from "react";

import ListProduct from "../ListProduct";
import DupTeg from "../../DupComp/DupTeg";
import { server } from "../../index";
import { faceProductList } from "../../Type/Interface";
import { SearchTextOption } from "./SearchTextArray";
import Error from "../Error";

const SearchText: FC = () => {
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
          type={"text"}
          size={50}
          maxLength={150}
          placeholder={"Search for anything"}
          alt={"search"}
          spellCheck={false}
          autoComplete={"off"}
          value={valueSearch}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
        />
        <input type={"submit"} value={"search"} />

        <select
          value={id}
          onChange={e => {
            useSetId(e.target.value);
          }}
        >
          <DupTeg array={SearchTextOption} />
        </select>
      </form>
      {boolSearch ? (
        <ListProduct array={reqSearch} />
      ) : (
        exValSear && <div>{`Named "${exValSear}" item not found`}</div>
      )}
      {resError && <Error error={resError} />}
    </Fragment>
  );
};

export default SearchText;
