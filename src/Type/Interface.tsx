import { NavLinkProps, LinkProps, RouteProps } from "react-router-dom";
import React, { Dispatch, SetStateAction, OptionHTMLAttributes } from "react";

//React

export interface facUseState<T> {
  useValue: Dispatch<SetStateAction<T>>;
  value: T;
}
export interface facUseArray<T> {
  useValue: Dispatch<SetStateAction<T>>;
  value: T;
  array: faceTeg[];
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

//Product

export interface faceProduct {
  readonly title: string;
  readonly price: string;
  readonly prodState: string;
  readonly shipping: string;
  readonly sold: string;
  readonly src: string;
}

export interface faceProductList extends faceProduct {
  readonly id: string;
  readonly to: string;
}

//Teg
export interface HOE extends OptionHTMLAttributes<HTMLOptionElement>{}

export interface faceTeg extends HOE {
  Tag: string;
  key: string;
  text?: string;
}

//Server

export interface fecHandler {
  array: faceProductList[];
  value: string;
  error: string;
}
