import React, { FC, Fragment, useContext, useEffect, useState } from "react";

import { server } from "../../index";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import Banner from "../Banner/Banner";
import { NavLink } from "react-router-dom";
import SeaAnsProd from "../SeaAnsProd";
import { faceProductList } from "../../Type/Interface";

const Head = ({match}) => {
    const serverObj = useContext(server);
    const [arrProd, setArrProd] = useState<JSX.Element[]>([]);
    const [resError, setResError] = useState<string>("");

    useEffect(() => {
      (async () => {
        await setArrProd([]);
        const res = await serverObj.handlerCategories(`/New.json`);
        Array.isArray(res) ? setArrProd(res.map(({ to, id, ...value }: faceProductList, indx) => (
          <Fragment key={id}>
            <NavLink to={`${to}${`&Length=${indx}`}`}>
              <SeaAnsProd {...value} />
            </NavLink>
          </Fragment>
        ))) : setResError(res);
      })();
    }, [match]);
  
    if (resError !== "") {
      return <HandlerErr error={resError} />;
    } else if (!arrProd.length) {
      return <Loding />;
    }
    
    return <Fragment><Banner array={arrProd} yardage={5}/></Fragment>
}

export default Head;