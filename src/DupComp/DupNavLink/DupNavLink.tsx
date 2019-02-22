import React, { FC, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { faceNavLink } from '../../Type/Interface';




const DupNavLink: FC<{ array: faceNavLink[] }> = ({ array }) => (
   <Fragment>{array.map(({
      to,
      key,
      replace,
      activeClassName,
      activeStyle,
      exact,
      strict,
      isActive,
      text
   }: faceNavLink) => (
         <li key={key}>
            <NavLink
               key={key}
               to={to}
               replace={replace}
               activeClassName={activeClassName}
               activeStyle={activeStyle}
               exact={exact}
               strict={strict}
               isActive={isActive} > {text} </NavLink>
         </li>)
   )}</Fragment>)



export default DupNavLink;





