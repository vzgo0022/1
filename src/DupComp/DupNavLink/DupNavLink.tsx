import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { faceNavLink } from '../../Type/Interface';
import shortid from 'shortid'



const DupNavLink: React.FC<{ array: faceNavLink[] }> = ({ array }) => (
   <Fragment>{array.map(({
      to,
      id,
      replace,
      activeClassName,
      activeStyle,
      exact,
      strict,
      isActive,
      text
   }: faceNavLink) => (
         <NavLink
            key={id}
            to={to}
            replace={replace}
            activeClassName={activeClassName}
            activeStyle={activeStyle}
            exact={exact}
            strict={strict}
            isActive={isActive} > {text} </NavLink>)
   )}</Fragment>)



export default DupNavLink;





