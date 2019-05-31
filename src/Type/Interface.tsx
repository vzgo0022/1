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
  readonly src: string[][];
  readonly color: string[][];
  readonly saiz: string[][];
  readonly price: string[][];
  readonly agility:boolean[];
}

export interface faceProductList extends faceProduct {
  readonly id: string;
  readonly to: string;
}

export interface ProdSelect<T> {
  readonly arr1: string[][];
  readonly arr2: string[][];
  readonly arr3: string[][];
  readonly setValue1: Dispatch<SetStateAction<T>>;
  readonly setValue2: Dispatch<SetStateAction<T>>;
  readonly setValue3: Dispatch<SetStateAction<T>>;
  readonly setValueIndex: Dispatch<
    SetStateAction<{
      headIndex: number;
      chaptersIndex: number;
    }>
  >;
  readonly headIndex: number;
  readonly value: T;
  readonly prodSecKey: number;
  readonly agility:boolean;
}

//Teg
export interface faceTeg {
  readonly Tag: string;
  readonly key: string;
}

export interface faceTegWithText
  extends OptionHTMLAttributes<HTMLOptionElement>,
    faceTeg {
  readonly text: string | number;
}
export interface faceTegWithoutText
  extends InputHTMLAttributes<HTMLInputElement>,
    faceTeg {}

//Server
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
export interface fecHandler {
  readonly array: faceProductList[];
  readonly value: string;
  readonly error: string;
}
