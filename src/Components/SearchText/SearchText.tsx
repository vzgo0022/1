import React, { FC, Fragment, useContext, useState } from 'react'

import { server } from '../../index';
import { faceProductList } from '../../Type/Interface';
import ListProduct from '../ListProduct';
import { isArray } from 'util';


const SearchText: FC = () => {
   const serverObj = useContext(server);
   const [valueSearch, setSearch] = useState <string>('');
   const [id, setId] = useState <string>('All');
   const [reqSearch, setReqSearch] = useState<faceProductList[]>([]);
   const [boolSearch, setBool] = useState <boolean>(false);

   const onSearch = (event) => {
      serverObj.handler(id,valueSearch)
      .then(res =>{
         setReqSearch(res);
         setBool(true);
      } )
      event.preventDefault();
     }
     console.log(reqSearch)
   return (
      <Fragment>
         <form onSubmit={onSearch}>
         <input type={'text'}
            size={50}
            maxLength={150}
            placeholder={'Search for anything'}
            alt={'search'}
            spellCheck={false}
            autoComplete={'off'}
            value={valueSearch}
            onChange={({ target }) => {setSearch(target.value); setBool(false);}} />
         <input type={'submit'} value={'search'} />

         <select value={id} onChange={(e)=>{setId(e.target.value);}}>
            <option value="All">All Categories</option>
            <option value="Mens">Mens clothing</option>
            <option value="Womens">Womens clothing</option>
            <option value="Childrens">Childrens clothing</option>
          </select>
         </form>
         {boolSearch && <ListProduct array={reqSearch}/>}
         {boolSearch && <div>{`Named "${valueSearch}" item not found`}</div>}
      </Fragment>
   )

};

export default SearchText;