import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { faceLink } from '../../Type/Interface';



const DupLink: FC<{ array: faceLink[] }> = ({ array }) => (
   <Fragment>{array.map(({
      to,
      key,
      replace,
      text
   }: faceLink) => (
         <li key={key}>
            <Link
               to={to}
               key={key}
               replace={replace}>{text}</Link>
         </li>)
   )}</Fragment>)


export default DupLink;





