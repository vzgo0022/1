import React, { FC, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { faceRoute } from './../../Type/Interface';



const DupRoute: FC<{ array: faceRoute[] }> = ({ array }) => (
    <Fragment>{array.map(({
        component,
        render,
        children,
        path,
        key,
        exact,
        strict,
        location,
        sensitive
    }: faceRoute) => (
            <Fragment key={`${key}+${path}`}>
                <Route
                    component={component}
                    render={render}
                    children={children}
                    path={path}
                    exact={exact}
                    strict={strict}
                    location={location}
                    sensitive={sensitive} />
            </Fragment>)
    )}</Fragment>)



export default DupRoute;





