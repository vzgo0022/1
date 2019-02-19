import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { faceLink } from '../../Type/Interface';



const DupLink: React.FC<{ array: faceLink[] }> = ({ array }) => (
   <Fragment>{array.map(({
      to,
      id,
      replace = false,
      text = ''
   }: faceLink) => (
         <Link
            to={to}
            key={id}
            replace={replace}
         > {text} </Link>)
   )}</Fragment>)


export default DupLink;





