import { NavLinkProps, LinkProps, RouteProps } from 'react-router-dom';

export interface faceNavLink extends NavLinkProps {
  readonly id: string;
  readonly text?: string,
}

export interface faceLink extends LinkProps {
  readonly id: string,
  readonly text?: string,

}

export interface faceRoute extends RouteProps {
  readonly id: string,
}