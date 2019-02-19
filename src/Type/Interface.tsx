export interface faceNavLink {
    readonly to: string | object,
    readonly id: string,
    readonly replace?: object | boolean,
    readonly text?: string,
    readonly activeClassName?: string,
    readonly activeStyle?: object,
    readonly exact?: boolean,
    readonly strict?: boolean,
    readonly isActive?: (match?: object, location?: object) => boolean,
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