import React, { FC, Fragment, useContext, useState } from 'react'

import ListProduct from '../ListProduct';
import DupTeg from '../../DupComp/DupTeg';
import { server } from '../../index';
import { faceProductList } from '../../Type/Interface';
import { SearchTextOption } from './SearchTextArray';



const SearchText: FC = () => {
   const serverObj = useContext(server);
   const [valueSearch, setSearch] = useState <string>('');
   const [id, useSetId] = useState <string>('All');
   const [reqSearch, setReqSearch] = useState<faceProductList[]>([]);
   const [boolSearch, setBool] = useState <boolean>(false);
   
   const ID:string ='';
   const onSearch = (event) => {
      serverObj.handler(id,valueSearch)
      .then(({array,id}) =>{
         setReqSearch(array);
         setBool((exState)=>!exState);
        
      } )
      event.preventDefault();
     }
    console.log(reqSearch,boolSearch);
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
            onChange={({ target }) => {setSearch(target.value);}} />
         <input type={'submit'} value={'search'} />

         <select value={id} onChange={(e)=>{useSetId(e.target.value);}}>
              <DupTeg array={SearchTextOption}/>
          </select>
         </form>
         {boolSearch && <ListProduct array={reqSearch}/>}
         {boolSearch && <div>{`Named "${valueSearch}" item not found`}</div>}
      </Fragment>
   )

};

export default SearchText;