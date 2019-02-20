import { NavLinkProps } from 'react-router-dom';

export  interface faceNavLink extends NavLinkProps {
  readonly id: string;
  readonly text?: string,
}

export interface faceLink {
    readonly to: string | object,
    readonly id: string,
    readonly replace?: object | boolean,
    readonly text?: string,
   
}

export interface faceRoute {
    readonly render?: () => JSX.Element | JSX.Element[],
}