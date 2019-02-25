import React, { FC, Fragment, useState } from 'react'

const SearchText:FC = () => {
const [searchValue, setSearch] = useState('');

   return (
      <Fragment>
         <input type={'text'}
            size={50}
            maxLength={150}
            placeholder={'Search for anything'}
            alt={'ss'}
            spellCheck={false}
            autoComplete={'off'}
            value={searchValue}
            onChange={({ target }) => setSearch(target.value)}
         />
         <
      </Fragment>
   )

};

export default SearchText;