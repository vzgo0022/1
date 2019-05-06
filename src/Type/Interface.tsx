import { NavLinkProps, LinkProps, RouteProps } from "react-router-dom";
import React, {
  Dispatch,
  SetStateAction,
  OptionHTMLAttributes,
  InputHTMLAttributes,
  ChangeEvent
} from "react";

//React
/*
export interface facUseState<T> {
  readonly useValue: Dispatch<SetStateAction<T>>;
  readonly value: T;
  readonly arrayTeg: faceTeg[];
  readonly funcChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}*/

export interface ProdSelect {
  arrCateProd: [string][];
  valueSec: string;
  prodSecKey: number;
  funcChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

//react-router-dom

export interface faceNavLink extends NavLinkProps {
  readonly key: string;
  readonly text?: string;
}

export interface faceLink extends LinkProps {
  readonly key: string;
  readonly text?: string;
}

export interface faceRoute extends RouteProps {
  readonly key: string;
}

export interface faceMatch<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

//Product

export interface faceProduct {
  readonly title: string;
  readonly prodState: string;
  readonly shipping: string;
  readonly sold: string;
  readonly alt: string;
  readonly material: string;
  readonly location: string;
  readonly src: [string][];
  readonly color: [string][];
  readonly saiz: [string][];
  readonly price: [string][];
}

export interface faceProductList extends faceProduct {
  readonly id: string;
  readonly to: string;
}

//Teg
export interface faceTeg {
  readonly Tag: string;
  readonly key: string;
}
////////////////////////////////////uxellllllllll
export interface faceTegOption
  extends OptionHTMLAttributes<HTMLOptionElement>,
    faceTeg {
  readonly text: string | number;
}
export interface faceTegInput
  extends InputHTMLAttributes<HTMLInputElement>,
    faceTeg {}

//Server

export interface fecHandler {
  readonly array: faceProductList[];
  readonly value: string;
  readonly error: string;
}
