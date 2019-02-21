import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { faceLink } from '../../Type/Interface';



const DupLink: FC<{ array: faceLink[] }> = ({ array }) => (
   <Fragment>{array.map(({
      to,
      id,
      replace,
      text
   }: faceLink) => (
         <li key={id}>
            <Link
               to={to}
               key={id}
               replace={replace}>{text}</Link>
         </li>)
   )}</Fragment>)


export default DupLink;





