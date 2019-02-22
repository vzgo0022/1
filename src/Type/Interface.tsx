import { NavLinkProps, LinkProps, RouteProps } from 'react-router-dom';

//react-router-dom

export interface faceNavLink extends NavLinkProps {
  readonly key: string;
  readonly text?: string,
}

export interface faceLink extends LinkProps {
  readonly key: string,
  readonly text?: string,

}

export interface faceRoute extends RouteProps {
  readonly key: string,
}

//Product

export interface Product {
  readonly title: string,
  readonly price: string,
  readonly proState: string,
  readonly shipping: string,
  readonly sold: string,
}

//Teg

export interface Attribut extends React.HTMLAttributes<HTMLElement> {
  teg: string;
  key: string;
  text?: string;
}
