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

export interface faceProduct {
  readonly title: string,
  readonly price: string,
  readonly prodState: string,
  readonly shipping: string,
  readonly sold: string,
  readonly src: string,
  readonly alt: string
}

export interface faceProductList extends faceProduct{
  readonly id: string,
  readonly to: string,
}

//Teg

export interface faceAttribut extends React.HTMLAttributes<HTMLElement> {
  Tag: string;
  key: string;
  text?: string;
}
