import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { DupTegText } from "../../Containers/DupComp/DupTeg/DupTeg";
import { FormSearchOption } from "./FormSearchArray";
import { FormSearchInput } from "./FormSearchObject";

const FormSearch: FC<{ params: string }> = ({
   params 
}) => {
  const [category, useCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
     const searchParams = new URLSearchParams(params);
    if (!!searchParams.get("Categories")&&!!searchParams.get("Search")) {
          useCategory(`${searchParams.get("Categories")}`); 
          setSearch(`${searchParams.get("Search")}`);   
    } else {
      setSearch("");
      useCategory("All")
    }
  }, [params]);

  return (
    <form>
      <input 
        {...FormSearchInput}
        value={search}
        placeholder ={"Enter search text"}
        onChange={({ target }) => {
         setSearch(target.value);
        }}
      />
      <NavLink to={`/sch/Categories=${category}&Search=${search}&ListPage=${15}&Page=${1}`} onClick={e => !search && e.preventDefault()}>
        <input type={"submit"} value={"search"}/>
      </NavLink>
      <select
        value={category}
        onChange={({ target: { value } }) => {
          useCategory(value);
        }}
      >
        <DupTegText array={FormSearchOption} />
      </select>
    </form>
  );
};

export default FormSearch;
