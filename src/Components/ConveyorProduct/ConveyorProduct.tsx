import React, {
  FC,
  Fragment,
  useEffect,
  useCallback,
  useState,
  memo
} from "react";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import ListProduct from "../ListProduct";
import { faceProductList } from "../../Type/Interface";

const ConveyorProduct: FC<{
  arrConvProd: faceProductList[];
  ListPage: number;
  Page: number;
  Params: string;
}> = ({ arrConvProd = [], ListPage = 15, Page = 1, Params = "" }) => {
  const [arrCon, setArrCon] = useState<faceProductList[][]>([]);
  const [conIndex, setConIndex] = useState<number>(0);
  const [listIndex, setListIndex] = useState<number>(0);
  const [prodLengt, setProdLengt] = useState<number>(15);

  console.log(ListPage, Page, Params);
  const ListBooClick = useCallback(
    index => {
      history.push(`${Params}ListPage=${prodLengt}&Page=${index + 1}`);
      if (index >= 0 && index < arrCon.length) {
        window.scrollTo(0, 0);
        setConIndex(index);
        index > 5 ? setListIndex(index - 5) : setListIndex(0);
      }
    },
    [conIndex, arrCon, listIndex]
  );

  const ListOptiClick = useCallback(
    (newLengt: number, newPage: number) => {
      window.scrollTo(0, 0);
      if (newPage === 1 && newLengt < 15) {
        setProdLengt(15);
        setListIndex(0);
        setConIndex(0);
      }
      history.push(`${Params}ListPage=${newLengt}&Page=${newPage}`);
      const arrList: faceProductList[][] = [];
      for (let i = 0; i < arrConvProd.length; i += newLengt) {
        arrList.push(arrConvProd.slice(i, i + newLengt));
      }
      setArrCon(arrList);
    },
    [arrConvProd, conIndex]
  );

  useEffect(() => {
    const BoolPage =
      Page > 0 && Page <= Math.ceil(arrConvProd.length / ListPage);
    const BoolListPage = [15, 30, 70, 140].includes(ListPage);
    if (BoolPage && BoolListPage) {
      setProdLengt(ListPage);
      setConIndex(Page - 1);
      ListOptiClick(ListPage, Page);
      if (Page > 6) {
        setListIndex(Page - 6);
      }
    } else {
      ListOptiClick(15, 1);
    }
  }, [arrConvProd]);

  return (
    <Fragment>
      {!!arrCon.length && (
        <Fragment>
          <ListProduct arrListProd={arrCon[conIndex]} />
          <Fragment>
            {arrCon
              .map((value, index) => (
                <button
                  onClick={() => {
                    ListBooClick(index);
                  }}
                  key={`${arrCon[index][0].id}`}
                >
                  {index + 1}
                </button>
              ))
              .slice(listIndex, listIndex + 10)}
            <select
              value={prodLengt}
              onChange={({ target: { value } }) => {
                setProdLengt(+value);
                ListOptiClick(+value, 1);
              }}
            >
              {[15, 30, 70, 140].map((val, ind) => (
                <option key={ind + 0.1 + val}>{val}</option>
              ))}
            </select>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default memo(ConveyorProduct);
