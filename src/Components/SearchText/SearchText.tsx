import React, { FC, Fragment, useContext, useState, useEffect } from 'react'

import { server } from '../../index';
import { faceProductList } from '../../Type/Interface';


const SearchText: FC = () => {
   const serverObj = useContext(server);
   const [valueSearch, setSearch] = useState <string>('');
   const [x, setx] = useState <string>('');
   const [reqSearch, setReqSearch] = useState<faceProductList[] | string>('');

   const forSearch = (event) => {
      serverObj.handler(`.json`,'s')
      .then(res => setReqSearch(res))
      event.preventDefault();
     }


   return (
      <Fragment>
         <form onSubmit={forSearch}>
         <input type={'text'}
            size={50}
            maxLength={150}
            placeholder={'Search for anything'}
            alt={'search'}
            spellCheck={false}
            autoComplete={'off'}
            value={valueSearch}
            onChange={({ target }) => setSearch(target.value)} />
         <input type={'submit'} value={'search'} />

         <select value={x} onChange={(e)=>setx(e.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
         </form>
      </Fragment>
   )

};

export default SearchText;