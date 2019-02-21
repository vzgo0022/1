import React, { FC, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { faceRoute } from './../../Type/Interface';



const DupRoute: FC<{ array: faceRoute[] }> = ({ array }) => (
    <Fragment>{array.map(({
        component,
        render,
        children,
        path,
        id,
        exact,
        strict,
        location,
        sensitive
    }: faceRoute) => (
            <Route
                key={id}
                component={component}
                render={render}
                children={children}
                path={path}
                exact={exact}
                strict={strict}
                location={location}
                sensitive={sensitive} />)
    )}</Fragment>)



export default DupRoute;




