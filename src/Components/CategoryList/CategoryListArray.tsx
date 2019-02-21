import { faceNavLink, faceRoute } from '../../Type/Interface';
import shortid from 'shortid';
import {A,B,C,D} from '../Porc/Porc';

export const NavLink: faceNavLink[] = [
    {
        to: '/',
        text: 'Foo',
        id: shortid.generate()
    },
    {
        to: '/male',
        text: 'male',
        id: shortid.generate()
    },
    {
        to: '/female',
        text: 'female',
        id: shortid.generate()
    },
    {
        to: '/childish',
        text: 'childish',
        id: shortid.generate()
    },

]

export const NavRoute: faceRoute[] = [
    {
        path: '/',
        exact: true,
        component: A,
        id: shortid.generate(),
    },
    {
        path: '/male',
        component: B,
        id: shortid.generate(),
    },
    {
        path: '/female',
        component: C,
        id: shortid.generate()
    },
    {
        path: '/childish',
        component: D,
        id: shortid.generate()
    },

]
